(function () {
    "use strict";

    // Configuration
    var cacheTime = 250;                // How long the response a response to a .trackDuration/.trackPostion is cached in ms.

    var pollingIntervalActive = 250;    // Decides how often a renderer with attached eventlisteners are polled for updates
                                        // to state, volume and mute. The polling facility should be replaced by appropriate 
                                        // onmessage event handlers, when that event is implemented.

    var pollingIntervalPassive = 5000;  // How often a passive renderer is polled.
    // No more configuration

    // (Optionally) log to a location defined by url parameters
    function upnpLog(msg) {
        var debug = false;
        if (debug || /[?&]debug=(true|1)/.test(window.location)) {
            if (/[?&]alert=(true|1)/.test(window.location))
                alert(msg);
            else
                console.log(msg);
        }
    }

    // Converts a time string of the format HH:MM:SS, MM:SS or SS to seconds.
    function timeStringToSeconds(timeString) {
        var i = 0,
            seconds = 0,
            positionValue = 1,
            parts = timeString.split(':');
            
        for (i = parts.length - 1; i >= 0; i--) {
            seconds += parseInt(parts[i], 10) * positionValue;
            positionValue *= 60;
        }

        return seconds;
    }
    
    // Converts seconds to a time string of format HH:MM:SS.
    function secondsToTimeString(secs) {
        var hours = Math.floor( secs / ( 60 * 60 ) );

        var divisor_for_minutes = secs % ( 60 * 60 );
        var minutes = Math.floor( divisor_for_minutes / 60 );
        if( minutes < 10 ) minutes = '0' + minutes;
     
        var divisor_for_seconds = divisor_for_minutes % 60;
        var seconds = Math.floor( divisor_for_seconds );
        if( seconds < 10 ) seconds = '0' + seconds;
        var timex = "";

        timex = hours + ":" + minutes + ":" + seconds;

        return timex;
    }

    // Conviency function to retrive the text contents of the first tag with a matching name
    Element.prototype.getFirstTagContents = XMLDocument.prototype.getFirstTagContents = function(tagName) {
        try {
            return this.getElementsByTagName(tagName)[0].textContent;
        }
        catch(e) {
            return null;
        }
    };

    // Event source functions; addEventListener, removeEventListener, _fireEvent
    function EventSource() {}
    EventSource.prototype._event = [];
    EventSource.prototype.addEventListener = function(eventName, callback) {
        if (typeof callback === 'function') {
            if (!this._event[eventName]) {  
                this._event[eventName] = [];
            }
            this._event[eventName].push(callback);
        }

        // Until onmessage is working
        if (typeof this._setActive === "function" && this._event[eventName].length > 0)
            this._setActive(true);
    }

    EventSource.prototype.removeEventListener = function(eventName, callback) {
        if (callback) {
            var index = this._event[eventName].indexOf(callback);
            if (index >= 0)
                this._event[eventName].splice(index, 1);
        }
        else
            // Remove all event listeners
            this._event[eventName] = [];

        // Until onmessage is working
        if (typeof this._setActive === "function" && this._event[eventName].length <= 0)
            this._setActive(false);
    };

    EventSource.prototype._fireEvent = function(event) {
        var handlers = this._event[event.type];
        if (handlers)
            for (var i=0, l=handlers.length; i<l; i++) {
                handlers[i].call(this, event.data);
            }
    };

    function UPnPMain() {
        var self = this;
        var scanning = false;
        var deferred_scanning = false;

        // Public properties - only available servers, of respective type here
        this.servers = [];
        this.renderers = [];

        var allServers = [];
        this.serverNum = 1;

        // Item class
        function Item(itemXml, server) {
            this.UNKNOWN = 2;
            this.CONTAINER = 1;
            this.PLAYABLE = 0;

            var tagName = itemXml.tagName;
            if (server) {
                var pDirId = itemXml.attributes['parentID'].value;
                var pDir = server._containers[pDirId];
            }

            this.parent = pDir;
            this.metaDataXmlText = (new XMLSerializer()).serializeToString(itemXml);
            this.title = itemXml.getFirstTagContents('title');
            this.creator = itemXml.getFirstTagContents('creator'); 
            this.id = itemXml.attributes['id'].value;
            this.className = itemXml.getFirstTagContents('class');

            if (tagName.toLowerCase() === "item") {
                this.type = this.PLAYABLE; // Check className too?
                var resTags = itemXml.getElementsByTagName('res');
                var resTag = resTags[0] || {};
                this.contentURL = resTag.textContent;

                // Copy all res attributes, if it's not replacing something else
                for (var i=0, l=resTag.attributes.length; i<l; i++)
                    if (typeof this[resTag.attributes[i].name] === 'undefined')
                        this[resTag.attributes[i].name] = resTag.attributes[i].value;

                if (server)
                    server._items[this.id] = this;
            }
            else if (tagName.toLowerCase() === "container") {
                this.type = this.CONTAINER;
                if (server)
                    server._containers[this.id] = this;
            }
            else {
                this.type = this.UNKNOWN;
            }
        } // End Item


        function DeviceInfo(networkService) { }
        DeviceInfo.prototype = new EventSource();
        DeviceInfo.prototype.setNetworkService = function(networkService) {
            var config = (new DOMParser()).parseFromString(networkService.config, "text/xml");
            var friendlyName = config.getFirstTagContents('friendlyName');
            this.networkService = networkService;
            this.url = networkService.url;
            this.type = networkService.name;
            // Add config variables
            this.UDN = config.getFirstTagContents('UDN');
            this.manufacturerUrl = config.getFirstTagContents('manufacturerURL');
            this.manufacturer = config.getFirstTagContents('manufacturer');
            this.modelName = config.getFirstTagContents('modelName');
            this.serialNumber = config.getFirstTagContents('serialNumber');
            this.modelNumber = config.getFirstTagContents('modelNumber');
            this.modelURL = config.getFirstTagContents('modelURL');
            this.name = friendlyName || 'Opera #' + (self.serverNum++) + " (" + networkService.url + ")";
        };

        DeviceInfo.prototype.sameServer = function(other) {
            // Prefer UDN as key
            if (this.UDN && other.UDN)
                return this.UDN === other.UDN;
            // Fall back to type + url
            else
                return (this.type + ';' + this.url) === (other.type + ';' + other.url);
        };

        DeviceInfo.prototype._buildSOAPRequest = function(action, service, parameters) {
            // Build the XML request as a simple string using the in-parameters.
            // Could probably build a proper XMLDocument instead.
            service = service.replace('upnp:', '');
            var svcMsg =
                '<?xml version="1.0" encoding="utf-8"?>' +
                    '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" ' + 
                        's:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">' + 
                        '<s:Body>'+
                            '<u:' + action + ' xmlns:u="' + service + '">';

            for (var i in parameters)
                svcMsg += '<' + i + '>' + parameters[i] + '</' + i + '>';

                svcMsg +=   '</u:' + action + '>'+

                        '</s:Body>'+
                    '</s:Envelope>';

            return svcMsg;
        };

        // Sends a request to the target service and optionally calls a callback function
        DeviceInfo.prototype.execute = function(action, parameters, options) {
            var options = options || {};
            var service = options.service || this.serviceType;
            service = service.replace('upnp:', '');
            var callback = options.callback || null;
            var synchronous = options.synchronous || false;
            var debug = options.debug || false;

            // Route to the appropriate service
            var url = this.url;
            if (service.indexOf('RenderingControl') !== -1)
                url = this.renderingControl.url;

            var svcXhr = new XMLHttpRequest();
            svcXhr.open("POST", url, !synchronous);
            svcXhr.timeout = synchronous ? 1000 : 5000;
            svcXhr.setRequestHeader('SOAPAction', '"' + service + '#' + action + '"');
            svcXhr.setRequestHeader('Content-Type', 'text/xml; charset="utf-8"');

            svcXhr.ontimeout = function ( event ) {
                upnpLog('Timeout while sending ' + (synchronous?'':'a') + 'synchronous XMLHttpRequest.');
                return null;
            }

            svcXhr.onreadystatechange = function ( event ) {
                var items = [];
                if (debug) console.log(action + '() response (' + svcXhr.readyState + ',' + svcXhr.status + '): ' + svcXhr.response);
                if( svcXhr.readyState != 4 ) {
                    return;
                }
                else {
                    if (typeof callback === 'function')
                        callback(svcXhr.responseXml, svcXhr);
                }
            }
         
            var svcMsg = this._buildSOAPRequest(action, service, parameters);

            if (debug) {
                console.log('svcMsg: (' + (synchronous?'':'a') + 'synchronous) to ' + url);
                console.log(svcMsg);
            }

            try {
                svcXhr.send(svcMsg);

                if (synchronous)
                    return svcXhr;
            }
            catch (error) {
                return null;
            }
        };

        Renderer.prototype = new DeviceInfo();
        Server.prototype = new DeviceInfo();

        // Object to contain AVTransport and RenderingControl services
        function Renderer(networkService, renderingControlService) {
            // Public constants
            this.PLAYSTATE_RECORDING = 4;
            this.PLAYSTATE_PAUSED_RECORDING = 3;
            this.PLAYSTATE_PLAYING = 0;
            this.PLAYSTATE_MEDIA_READY = 8;
            this.PLAYSTATE_NO_MEDIA = 6;
            this.PLAYSTATE_UNKNOWN = 7;
            this.PLAYSTATE_TRANSITIONING = 5;
            this.PLAYSTATE_STOPPED = 1;
            this.PLAYSTATE_PAUSED = 2;

            this.eventPrefix = "Renderer";

            var selfServer = this;
            this.renderingControl = renderingControlService;
            this.serviceType = 'upnp:urn:schemas-upnp-org:service:AVTransport:1';

            // Mapping for UPnP AVTransport:1 states
            var playModeMapping = {
                STOPPED: 1,
                PLAYING: 0,
                TRANSITIONING: 5,
                PAUSED_PLAYBACK: 2,
                PAUSED_RECORDING: 3,
                RECORDING: 4,
                NO_MEDIA_PRESENT: 6
            };
            
            this.setNetworkService(networkService);

            this.isSetAsAvailable = function() {
                var i, l;
                for (i = 0, l = self.renderers.length; i < l; i++)
                    if (selfServer.sameServer(self.renderers[i]))
                        return true;
                return false;
            };

            this.__defineSetter__('onStateChanged', function(value) {
                // Replace all event listeners with the current
                this.removeEventListener('StateChanged');
                this.addEventListener('StateChanged', value);
            });


            this.query = function(action, inParameters, outParameterNames, options) {
                var i,
                    l,
                    outParameters = {},
                    svcXhr;

                options = options || {synchronous: true};

                svcXhr = this.execute(action, inParameters, options);

                if (options.synchronous && svcXhr && svcXhr.status === 200) {
                    // svcXhr.responseXml does not seem to be available directly from an synchronous response,
                    // so we'll parse the xml ourselves.
                    var xml = (new DOMParser()).parseFromString(svcXhr.responseText, "text/xml");

                    for (i=0, l=outParameterNames.length; i<l; i++) {
                        var outParam = outParameterNames[i],
                            responseTags = xml.getElementsByTagName(outParam);

                        outParameters[outParam] = (responseTags.length === 1 ? responseTags[0].textContent : "-1");
                    }

                    return outParameters;
                }
            }

            // If the playState is new, set it and trigger an event.
            var _setPlayState = function(playState) {
                if (selfServer._playState !== playState) {
                    selfServer._playState = playState;
                    selfServer._fireEvent({ type: 'StateChanged', data: selfServer._playState });
                }
            };


            // Temporary, until onmessage is implemented. Polls the renderer and update properties asynchronously.
            var _pollWhileActiveInterval = null;
            var _pollWhileActive = function() {
                // Send requests and set the properties in a callback function
                selfServer.execute(
                    'GetTransportInfo', 
                    { 
                        InstanceID: 0 
                    }, 
                    {
                        synchronous: false,
                        callback: function(xml, xhr) {
                            var xml = (new DOMParser()).parseFromString(xhr.responseText, "text/xml");
                            var response = xml.getFirstTagContents('CurrentTransportState');
                            if (response) {
                                var playState = playModeMapping[response];
                                _setPlayState(playState);
                            }
                        }
                    });

                // Update the mute property
                selfServer.execute(
                    'GetMute', 
                    { 
                        InstanceID: 0,
                        Channel: 'Master'
                    }, 
                    {
                        service: 'upnp:urn:schemas-upnp-org:service:RenderingControl:1',
                        synchronous: false,
                        callback: function(xml, xhr) {
                            var xml = (new DOMParser()).parseFromString(xhr.responseText, "text/xml");
                            var response = xml.getFirstTagContents('CurrentMute');
                            if (response !== null)
                                selfServer._mute = (response === '1');
                        }
                    });

                // Update the volume property
                selfServer.execute(
                    'GetVolume', 
                    { 
                        InstanceID: 0,
                        Channel: 'Master'
                    }, 
                    {
                        service: 'upnp:urn:schemas-upnp-org:service:RenderingControl:1',
                        synchronous: false,
                        callback: function(xml, xhr) {
                            var xml = (new DOMParser()).parseFromString(xhr.responseText, "text/xml");
                            var response = xml.getFirstTagContents('CurrentVolume');
                            if (response !== null)
                                selfServer._volume = (response / 100.0);
                        }
                    });
            };

            // Temporary until onmessage is working. Start the polling when the device is made active.
            this._setActive = function(active) {
                this._stopPolling();

//                if (active) {
                var pollingInterval = active ? pollingIntervalActive : pollingIntervalPassive;
                _pollWhileActiveInterval = setInterval(_pollWhileActive, pollingInterval);
//                }

                _pollWhileActive();
            };

            this._stopPolling = function() {

                if (_pollWhileActiveInterval) {
                    clearInterval(_pollWhileActiveInterval);
                    _pollWhileActiveInterval = null;
                }
            };

            // Services provided by AVTransport
            this.seek = function(seconds) {
                var seconds = secondsToTimeString(seconds); // e.g. '01:02:30'
                // Seems that REL_TIME is the way to go with XBMC to jump to a specific time.
                this.execute('Seek', {InstanceID: '0', Unit: 'REL_TIME', Target: seconds});
            };
            this.play = function() {
                this.execute('Play', {InstanceID: '0', Speed: '1'});
            };
            this.pause = function() {
                this.execute('Pause', {InstanceID: '0'});
            };
            this.stop = function() {
                this.execute('Stop', {InstanceID: '0'});
            };

            // Returns a (limited) Item, corresponding to the one currently playing
            this.getCurrentItem = function() {
                if (cache.GetMediaInfo.time + cacheTime <= Date.now()) {
                    var response = this.query('GetMediaInfo', {InstanceID: 0}, [ 'CurrentURI', 'CurrentURIMetaData' ], {debug:false, synchronous:true});
                    if (response) {
                        response.time = Date.now();
                        cache.GetMediaInfo = response;
                    }
                }

                var response = cache.GetMediaInfo;

                // If it doesn't have an URI, no item is loaded.
                if (response === null || !response.CurrentURI)
                    return null;

                try {
                    var metaDataXml = (new DOMParser()).parseFromString(response.CurrentURIMetaData, "text/xml");
                    var itemTags = metaDataXml.getElementsByTagName('item');
                    var item = new Item(itemTags[0]);
                    return item;
                }
                catch (e) {
                    // If unable to parse the item meta data xml (not provided?), return a simple item.
                    var parts = (response.CurrentURI && response.CurrentURI.split('/')) || [''];
//                    var title = parts.length > 0 ? parts[parts.length - 1] : "";
                    return {
                        simple: true, 
                        className: 'unknown; audio/video', 
                        title: parts[parts.length - 1],
                        contentURL: response.CurrentURI
                    };
                }
            };

            // Sets the playback item of the renderer
            this.setItem = function(itemUri, itemXml) {
                // Invalidate cache
                cache.GetMediaInfo = {time: 0};

                upnpLog(Date.now() + ' setting item uri: ' + itemUri);
                
                var metaData = "";
                if (itemXml) {
                    metaData = '<DIDL-Lite xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:upnp="urn:schemas-upnp-org:metadata-1-0/upnp/" ' + 
                                    'xmlns="urn:schemas-upnp-org:metadata-1-0/DIDL-Lite/">' + 
                                        itemXml +
                                '</DIDL-Lite>';

                    // Might need to do some better HTML encoding
                    metaData = metaData.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                }

                this.execute(
                    'SetAVTransportURI', 
                    {
                        InstanceID: '0', 
                        CurrentURI: itemUri, 
                        CurrentURIMetaData: metaData
                    }, 
                    {
                        callback: function(xml, svcXhr) {
                            // Reset
                            self._trackDuration = 0;
                            self._trackPosition = 0;

                            upnpLog('SetAVTransportURI response: ' + svcXhr.responseText);

                            // Handle error
                            var xml = (new DOMParser()).parseFromString(svcXhr.responseText, "text/xml");
                            var error = xml.getFirstTagContents('errorDescription');
                            if (svcXhr.status !== 200 || error) {
                                selfServer.lastError = error;
                                _setPlayState(selfServer.PLAYSTATE_NO_MEDIA);
                            }
                            else
                               _setPlayState(selfServer.PLAYSTATE_MEDIA_READY);
                        }
                    });
                upnpLog(Date.now() + ' done setting item uri: ' + itemUri);
            };

            // Cache properties that are supposed to be polled from the client. AbsTime isn't evented according to AVTransport spec.
            var cache = {
                GetPositionInfo: {time: 0},
                GetMediaInfo: {time: 0}
            };

            // .trackPosition getter and setter
            this.__defineSetter__('trackPosition', function(value) {
                this.seek(value);
            });
            this.__defineGetter__('trackPosition', function() {
                if (cache.GetPositionInfo.time + cacheTime <= Date.now()) {
                    var response = this.query('GetPositionInfo', { InstanceID: 0 }, [ 'AbsTime', 'TrackDuration' ]);
                    if (response) {
                        response.time = Date.now();
                        cache.GetPositionInfo = response;
                    }
                }
                return timeStringToSeconds(cache.GetPositionInfo.AbsTime);
            });

            // .trackDuration getter
            this.__defineGetter__('trackDuration', function() {
                if (cache.GetPositionInfo.time + cacheTime <= Date.now()) {
                    var response = this.query('GetPositionInfo', { InstanceID: 0 }, [ 'AbsTime', 'TrackDuration' ]);
                    if (response) {
                        response.time = Date.now();
                        cache.GetPositionInfo = response;
                    }
                }
                return timeStringToSeconds(cache.GetPositionInfo.TrackDuration);
            });

            // .playState getter
            this.__defineGetter__('playState', function() {
                if (typeof selfServer._playState !== "undefined")
                    return selfServer._playState;
                else
                    return selfServer.PLAYSTATE_UNKNOWN;
            });

            // Services provided by RenderingControl -- should also be updated using onmessage later
            // .mute getter and setter
            this.__defineSetter__('mute', function(value) {
                var muteValue = (value ? '1':'0');
                this.execute('SetMute', {InstanceID: '0', Channel: 'Master', DesiredMute: muteValue}, {service: 'upnp:urn:schemas-upnp-org:service:RenderingControl:1'});
            });
            this.__defineGetter__('mute', function() {
                return selfServer._mute;

                var response = this.query('GetMute', { InstanceID: 0, Channel: 'Master' }, [ 'CurrentMute' ], {service: 'upnp:urn:schemas-upnp-org:service:RenderingControl:1'});
                return (response.CurrentMute === '1');
            });

            // .volume getter and setter
            this.__defineSetter__('volume', function(value) {
                var volumeValue = Math.round(value * 100.0);
                this.execute(
                    'SetVolume', 
                    {
                        InstanceID: '0', 
                        Channel: 'Master', 
                        DesiredVolume: volumeValue
                    }, 
                    {
                        service: 'upnp:urn:schemas-upnp-org:service:RenderingControl:1',
                    }
                );
            });
            this.__defineGetter__('volume', function() {
                return selfServer._volume;

                var response = this.query('GetVolume', { InstanceID: 0, Channel: 'Master' }, [ 'CurrentVolume' ], {service: 'upnp:urn:schemas-upnp-org:service:RenderingControl:1'});
                return (response.CurrentVolume / 100.0);
            });
        } // End Renderer


        // Object to contain the ContentDirectory service
        function Server(networkService) {
            this._containers = [];
            this._items = [];
            var selfServer = this;
            
            this.eventPrefix = "Server";
            this.serviceType = 'upnp:urn:schemas-upnp-org:service:ContentDirectory:1';

            this.setNetworkService(networkService);

            // Answers if this server is set as available, by checking the public property upnp.servers.
            this.isSetAsAvailable = function() {
                var i, l;
                for (i = 0, l = self.servers.length; i < l; i++)
                    if (selfServer.sameServer(self.servers[i]))
                        return true;
                return false;
            };

            // onBrowseCompleted setter, replaces the BrowseCompleted event listeners
            this.__defineSetter__('onBrowseCompleted', function(value) {
                this.removeEventListener('BrowseCompleted');
                this.addEventListener('BrowseCompleted', value);
            });

            // Send a browse request to the service and fire a BrowseCompleted event when done
            this.browse = function(folder, startIndex, itemCount, options) {
                var objectId = (folder && folder.id) || 0,
                    startIndex = startIndex || 0,
                    itemCount = itemCount || 0,
                    options = options || {},
                    filter = options.filter || '*',
                    sortCriteria = options.sortCriteria || '',
                    browseFlag = options.browseFlag || 'BrowseDirectChildren';

                if (!folder)
                    folder = {id: 0, name: 'root'};

                this.execute(
                    'Browse',
                    {
                        ObjectID: objectId,
                        BrowseFlag: browseFlag,
                        Filter: filter,
                        StartingIndex: startIndex,
                        RequestedCount: itemCount,
                        SortCriteria: sortCriteria
                    },
                    {
                        callback: function(xml, svcXhr) {
                            var items = [];

                            try {
                                var xml = svcXhr.responseXML;
                                var didlText = xml.getElementsByTagName('Result')[0].textContent;
                                var didl = (new DOMParser()).parseFromString(didlText, "text/xml");
                                
                                var dirTags = didl.getElementsByTagName('container');
                                for (var i=0, l=dirTags.length; i<l; i++) {
                                    items.push(new Item(dirTags[i], selfServer));
                                }

                                var itemTags = didl.getElementsByTagName('item');
                                for (var i=0, l=itemTags.length; i<l; i++) {
                                    items.push(new Item(itemTags[i], selfServer));
                                }
                            }
                            catch (e) {
                                console.log('Error while browsing. The XMLHttpRequest object:');
                                console.log(svcXhr);
                            }

                            // Dispatch a BrowseCompleted event with the found directories
                            selfServer._fireEvent({ type: 'BrowseCompleted', data: items });
                        }
                    }
                );
            }
        } // End Server


        // Callback for 
        this._gotServices = function(serviceList) {
            upnpLog('_gotServices');

            // No need to refresh servers on serviceunavailable events, we'll track the known servers through the readyState instead.

            // Track new services arriving
            serviceList.addEventListener('serviceavailable', function(e) {
                upnpLog(Date.now() + ' serviceavailable listener. allServers length: ' + allServers.length + ', servicesAvailable: ' + serviceList.servicesAvailable);
                upnpLog(e);

                // A new (unknown and not yet user authorized for access) found,
                // get user permission and add it to the server list.
//                if (serviceList.servicesAvailable > allServers.length)
                self._refreshServers();
            });

            // Add the servers
            self._updateServerLists(serviceList);
        };

        this._getArrayForServerType = function(server) {
            if (server instanceof Server) {
                return self.servers;
            }
            else if (server instanceof Renderer) {
                return self.renderers
            }
            else
                return; // Don't know what to do...
        };

        this._getServerMatching = function(service, array) {
            var server = new Server(service);
            var i, l, array;

            array = self.servers;
            for (i = 0, l = array.length; i < l; i++)
                if (array[i].sameServer(server)) {
                    return array[i];
                }

            array = self.renderers;
            for (i = 0, l = array.length; i < l; i++)
                if (array[i].sameServer(server)) {
                    return array[i];
                }
        };

        // Set the server as unavailble by removing it from the public
        // servers/renderers array and fire the Offline event, if the server
        // is present in the array.
        this._setServerAsUnavailable = function(server) {
            if (!server)
                return;

            if (!server.isSetAsAvailable())
                return;

            var array = self._getArrayForServerType(server),
                index;

            if (server instanceof Renderer) {
                server._stopPolling();
            }

            index = array.indexOf(server);
            if (index > -1) {
                array.splice(index, 1);
                self._fireEvent({ type: server.eventPrefix + 'Offline', data: server });
            }
        };

        // Set the server as availble by moving it to the servers array and
        // fire the ServerOnline event.
        this._setServerAsAvailable = function(server) {
            if (!server)
                return;

           if (server.isSetAsAvailable())
                return;

            var array = self._getArrayForServerType(server);

            if (server instanceof Renderer) {
                // Not active, but start polling
                server._setActive(false);
            }

            array.push(server);
            self._fireEvent({ type: server.eventPrefix + 'Online', data: server });
        };

        // The server is no longer accessible in the NetworkServices callback
        // array, and is therefore removed. The ServerOffline event is fired.
        this._removeServer = function(server) {
            upnpLog('_removeServer' + (server.url || server.name) + '; ' + server.key);
            upnpLog(self.servers);
            
            // Remove from available servers/renderers and send offline event
            self._setServerAsUnavailable(server);

            // Remove from the internal array of servers
            allServers.splice(allServers.indexOf(server), 1);
        };

        this._updateServerLists = function(currentServices) {
            var newServers = [], i, l, y, k;

            // Reset the list of unavailable servers
            self.unavailableServers = [];

            upnpLog('_updateServerLists, servers available: ' + currentServices);

            var currentServers = [];
            for (i = 0, l = currentServices.length; i < l; i++) {
                currentServers.push(new Server(currentServices[i]));
            }

            // Check which known servers are not available any more
            for (i = 0; i < allServers.length; i++) {
                var exists = false;
                for (y = 0; y < currentServers.length; y++) {
                    if (allServers[i].sameServer(currentServers[y])) {
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    self._removeServer(allServers[i]);
                }
                else {
                    // Update the networkService property to the new one
                    allServers[i].setNetworkService(currentServers[y].networkService);

                    // TODO: Handle RenderingService as well?
                }
            }

            // Add the current services to appropriate array
            // TODO: Move this to the Server object?
            for (i=0, l=currentServices.length; i<l; i++) {

                var newServer;
                if (currentServices[i].name.indexOf('ContentDirectory') != -1) {
                    upnpLog('Found content directory @ ' + currentServices[i].url);
                    upnpLog(currentServices[i]);
                    newServer = new Server(currentServices[i]);
                }
                else if (currentServices[i].name.indexOf('AVTransport') != -1) {
                    var matchedRenderingControlService;
                    for (var a=0; a<currentServices.length; a++) {
                        if (currentServices[a].name.indexOf('RenderingControl') != -1 &&
                            currentServices[a].config === currentServices[i].config) {
                            matchedRenderingControlService = currentServices[a];
                        }
                    }
                    
                    var avtransportService = currentServices[i];
                    newServer = new Renderer(avtransportService, matchedRenderingControlService);
                }
                else if (currentServices[i].name.indexOf('RenderingControl') != -1) {
                    upnpLog('Found rendering control (' + currentServices[i].name + ')@ ' + currentServices[i].url + '. Using as part of AVTransport.');
                    continue;
                }
                else {
                    upnpLog('Unknown server type ' + currentServices[i].name + ', skipping...');
                    continue;
                }

                // Track availability changes for the server
                currentServices[i].addEventListener('readystatechange', function(e) {
                    var targetService = e.target;
                    upnpLog(Date.now() + ' readystatechange for ' + targetService.url + ' to ' +
                            targetService.readyState + ' (' + targetService.AVAILABLE + ', ' + targetService.UNAVAILABLE + ')');
                    upnpLog(e);

                    if (targetService.readyState === targetService.UNAVAILABLE) {
                        upnpLog(targetService.name + ': server unavailable, should remove');
                        self._setServerAsUnavailable(self._getServerMatching(targetService));
                    }

                    if (targetService.readyState === targetService.AVAILABLE) {
                        upnpLog(targetService.name + ': server available again, readding');
                        self._setServerAsAvailable(self._getServerMatching(targetService));
                    } 
                });

                var known = false;
                for (y = 0; y < allServers.length; y++) {
                    if (allServers[y].sameServer(newServer)) {
                        known = true;
                        // Assign the new NetworkService, so we can use it in the future
                        var oldServer = allServers[y];
                        oldServer.networkService = newServer.networkService;
                        newServer = oldServer;
                        break;
                    }
                }

                if (!known) {
                    allServers.push(newServer);
                }

                if (newServer.networkService.readyState === newServer.networkService.AVAILABLE) {
                        self._setServerAsAvailable(newServer);
                }
                else if (newServer.networkService.readyState === newServer.networkService.UNAVAILABLE) {
                    self._setServerAsUnavailable(newServer);
                }
            }

            if (deferred_scanning) {
                // New service information has arrived while scanning - better
                // do a new scan, so we don't miss any services.
                deferred_scanning = false;
                self._refreshServers();
            }
            else
                scanning = false;

            upnpLog('Server list after _refreshServers:');
            upnpLog(self.servers);
        }

        this._refreshServers = function() {
            if (scanning) {
                deferred_scanning = true;
                return;
            }
            scanning = true;

            upnpLog('_refreshServers');
            if (!(navigator && navigator.getNetworkServices)) {
                upnpLog('Your browser is missing service discovery support (navigator.getNetworkServices), aborting...');
                return;
            }
            navigator.getNetworkServices([
                    'upnp:urn:schemas-upnp-org:service:ContentDirectory:1',  // Serves content
                    'upnp:urn:schemas-upnp-org:service:RenderingControl:1',  // Used to control volume, brightness, etc
                    'upnp:urn:schemas-upnp-org:service:AVTransport:1',       // Play, pause, stop, seek, speed, etc
                ], 
                self._gotServices,
                function (e) {
                    upnpLog('Something went wrong while scanning for UPnP devices: ' + e.code);
                }
            );
        };

        // Initial request
        self._refreshServers();
    };

    UPnPMain.prototype = new EventSource();

    window.upnp = new UPnPMain();
}());
