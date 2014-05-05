window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    var sel_services = document.getElementById('sel_services');
    var btn_refresh = document.getElementById('btn_refresh');
    var sel_actions = document.getElementById('sel_actions');
    var btn_request = document.getElementById('btn_request');
    var div_output = document.getElementById('output');
    var div_request = document.getElementById('request');
    var div_response = document.getElementById('response');
    var services, currentService, optgroup, opt_status, opt_action;
    var optgroups = {};
    
    var serviceTypes = {
        'upnp:urn:schemas-upnp-org:service:AVTransport:1': {
            'actions': ['GetCurrentTransportActions', 'GetDeviceCapabilities', 'GetMediaInfo', 'GetPositionInfo', 'GetTransportInfo', 'GetTransportSettings', 'Next', 'Pause', 'Play', 'Previous', 'Seek', 'SetAVTransportURI', 'SetNextAVTransportURI', 'Stop', 'X_DLNA_GetBytePositionInfo'],
            'name': 'AVTransport'
        },
        'upnp:urn:schemas-upnp-org:service:ConnectionManager:1': {
            'actions': ['GetCurrentConnectionIDs', 'GetCurrentConnectionInfo', 'GetProtocolInfo'],
            'name': 'ConnectionManager'
        },
        'upnp:urn:schemas-upnp-org:service:ContentDirectory:1': {
            'actions': ['Browse', 'GetSearchCapabilities', 'GetSortCapabilities', 'GetSystemUpdateID', 'Search', 'UpdateObject', 'X_GetRemoteSharingStatus'],
            'name': 'ContentDirectory'
        },
        'upnp:urn:schemas-upnp-org:service:RenderingControl:1': {
            'actions': ['GetCurrentConnectionIDs', 'GetCurrentConnectionInfo', 'GetMute', 'GetVolume', 'GetProtocolInfo', 'ListPresets', 'SelectPreset', 'SetMute', 'SetVolume'],
            'name': 'RenderingControl'
        }
    }
    
    var actionTypes = {
        'Browse': {
            'ObjectID': 0,
            'BrowseFlag': 'BrowseDirectChildren',
            'Filter': '*',
            'StartingIndex': 0,
            'RequestedCount': 100000,
            'SortCriteria': ''
        },
        'GetCurrentConnectionIDs': {},
        'GetCurrentConnectionInfo': {
            'ConnectionID': 0
        },
        'GetCurrentTransportActions': {
            'InstanceID': 0
        },
        'GetDeviceCapabilities': {
            'InstanceID': 0
        },
        'GetMediaInfo': {
            'InstanceID': 0
        },
        'GetMute': {
            'InstanceID': 0,
            'Channel': 'Master'
        },
        'GetPositionInfo': {
            'InstanceID': 0
        },
        'GetProtocolInfo': {},
        'GetSearchCapabilities': {},
        'GetSortCapabilities': {},
        'GetSystemUpdateID': {},
        'GetTransportInfo': {
            'InstanceID': 0
        },
        'GetTransportSettings': {
            'InstanceID': 0
        },
        'GetVolume': {
            'InstanceID': 0,
            'Channel': 'Master'
        },
        'ListPresets': {
            'InstanceID': 0
        },
        'Next': {
            'InstanceID': 0
        },
        'Pause': {
            'InstanceID': 0
        },
        'Play': {
            'InstanceID': 0,
            'Speed': 1
        },
        'Previous': {
            'InstanceID': 0
        },
        'Search': {
            'ContainerID': 0,
            'SearchCriteria': '',
            'Filter': '*',
            'StartingIndex': 0,
            'RequestedCount': 100000,
            'SortCriteria': ''
        },
        'Seek': {
            'InstanceID': 0,
            'Unit': 'TRACK_NR',
            'Target': ''
        },
        'SelectPreset': {
            'InstanceID': 0,
            'PresetName': 'FactoryDefaults'
        },
        'SetAVTransportURI': {
            'InstanceID': 0,
            'CurrentURI': '',
            'CurrentURIMetaData': ''
        },
        'SetMute': {
            'InstanceID': 0,
            'Channel': 'Master',
            'DesiredMute': 1
        },
        'SetNextAVTransportURI': {
            'InstanceID': 0,
            'NextURI': '',
            'NextURIMetaData': ''
        },
        'SetVolume': {
            'InstanceID': 0,
            'Channel': 'Master',
            'DesiredVolume': 10
        },
        'Stop': {
            'InstanceID': 0
        },
        'UpdateObject': {
            'ObjectID': 0,
            'CurrentTagValue': '',
            'NewTagValue': ''
        },
        'X_DLNA_GetBytePositionInfo': {
            'InstanceID': 0
        },
        'X_GetRemoteSharingStatus': {}
    }
    
    function createServiceList() {
        var opt_empty;
        var types = [];
        
        // Populate the array of possible types
        for (var type in serviceTypes) {
            types.push(type);
            
            // Create the empty option groups
            opt_empty = document.createElement('option');
            opt_empty.innerHTML = 'None';
            opt_empty.disabled = true;
        
            optgroup = document.createElement('optgroup');
            optgroup.label = serviceTypes[type].name;
            optgroup.appendChild(opt_empty);
            sel_services.appendChild(optgroup);
            optgroups[serviceTypes[type].name] = optgroup;
        }
        
        return types;
    }
    
    // Search for devices/services
    function getDevices() {
        opt_status = document.createElement('option');
        sel_services.appendChild(opt_status);
        if (navigator.getNetworkServices) {
            opt_status.innerHTML = 'Loading...';
            var types = createServiceList();
            navigator.getNetworkServices(types, showServices, showError);
        } else {
            showError('Discovery API not supported');
        }
    }
    
    /* EVENT LISTENERS */    
    btn_refresh.onclick = function() {
        sel_services.innerHTML = '';
        div_output.value = '';
        btn_request.disabled = true;
        getDevices();
    };
    
    btn_request.onclick = function() {
        // Get currently selected action
        var action = sel_actions[sel_actions.selectedIndex].value;
        var args = actionTypes[action];
        sendRequest(currentService, action, args);
    };
    
    sel_services.onchange = function() {
        currentService = services[sel_services[sel_services.selectedIndex].value];
        var serviceData = 'id: ' + currentService.id + '\n\n';
        serviceData += 'name: ' + currentService.name + '\n\n';
        serviceData += 'type: ' + currentService.type.replace('upnp:', '') + '\n\n';
        serviceData += 'url: ' + currentService.url + '\n\n';
        serviceData += 'config:\n' + currentService.config;
        div_output.value = serviceData;
        
        btn_request.disabled = false;
        div_request.value = '';
        div_response.value = '';
        div_response.className = '';
        createActions();
    };
    
    sel_actions.onchange = setAction;
    
    function showServices(devices) {
        services = devices;
        var service, opt_service, optgroup;
        
        for (var i = 0, len = services.length; i < len; i++) {
            service = services[i];
            optgroup = optgroups[serviceTypes[service.type].name];
            
            // Remove empty option element if necessary
            if (optgroup.firstChild.disabled === true) {
                optgroup.removeChild(optgroup.firstChild);
            }
            // Create an option element and add it to the relevant option group
            opt_service = document.createElement('option');
            opt_service.innerHTML = service.url;
            opt_service.value = i;
            optgroup.appendChild(opt_service);
        }
        
        opt_status.disabled = true;
        opt_status.innerHTML = 'Available ↓';
        btn_refresh.disabled = false;
        sel_services.focus();
    }

    function showError(msg) {
        msg = msg || 'Error';
        div_output.value = msg;
    }
    
    // Browse content on another device
    function sendRequest(device, action) {
        var type = device.type.replace('upnp:', '');
        var url = device.url;
        
        try {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        div_response.innerHTML = markup_beauty({source: xhr.responseText});
                        if (xhr.status == 200) {
                            div_response.className = 'ok';
                        } else {
                            div_response.className = 'error';
                            console.error('XHR Status: ' + xhr.status + ': ' + xhr.statusText);
                        }
                    }
                }
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'text/xml; charset="utf-8"');
            xhr.setRequestHeader('SOAPAction', '"' + type + '#' + action + '"'); // Double quotes are essential
            
            console.log('Sending ' + type + '#' + action + ' request to: ' + url);
            xhr.send(div_request.value);
        } catch(e) {
            console.error('Exception: ' + e);
        }
    }
    
    // Create the options in the action select box
    function createActions() {
        sel_actions.innerHTML = '';
        var actions = serviceTypes[currentService.type].actions;
        for (var i = 0, len = actions.length; i < len; i++) {
            opt_action = document.createElement('option');
            opt_action.innerHTML = actions[i];
            sel_actions.appendChild(opt_action);
        }
        setAction();
    }
    
    function setAction() {
        var action = sel_actions[sel_actions.selectedIndex].value;
        var msg = createSoapMessage(currentService.type, action, actionTypes[action]);
        div_request.value = markup_beauty({source: msg});
        div_response.value = '';
        div_response.className = '';
    }
    
    function createSoapMessage(type, action, args) {
        type = type.replace('upnp:', '');
        var msg = 
'<?xml version="1.0" encoding="utf-8"?>' +
'<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">' +
'  <s:Body>' +
'    <u:' + action + ' xmlns:u="' + type + '">\n';
    for (var arg in args) {
        msg += '<' + arg + '>' + args[arg] + '</' + arg + '>\n';
    }
    msg += 
'    </u:' + action + '>' +
'  </s:Body>' +
'</s:Envelope>';
        return msg;
    }
    
    
    // Start searching for devices/services
    // ### TODO ### Set timeout in case of network problems
    getDevices();
}, false);
