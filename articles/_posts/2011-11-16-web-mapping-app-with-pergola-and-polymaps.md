---
title: Building a Web Mapping Application With Pergola and Polymaps
authors:
- domenico-strazzullo
intro: 'Mapping applications are very popular, and it is easy to embed a simple map on a page using something like the Google Maps API. In this article we are going to show how to build a fully fledged SVG-based, windowed mapping application using the Pergola framework and its libraries, with the Polymaps library plugged in, and tiles imported from Bing.'
license: cc-by-nc-sa-3.0
---
<h2>Introduction</h2>

<p>
	Mapping applications are very popular, and it is easy to embed a simple map on a page using something like the Google Maps API. However, anyone who has tried to create a more complex mapping application will know that it can take a considerable investment in terms of time, and the number of issues can grow exponentially. In this article we are going to show how to build a fully fledged SVG-based, windowed mapping application using the Pergola framework and its libraries, with the Polymaps library plugged in, and tiles imported from Bing. Polymaps was chosen in preference to other mapping libraries because it is modern, compact and lightweight, and has all the features we needed.</p>

<h2>Pergola overview</h2>

<p>For those who are not familiar with <a href="http://dotuscomus.com/pergola/">Pergola</a>, it is a JavaScript SVG framework with various libraries for facilitating building web applications. One of the key components of its API is the progressive DOM Helper. By exposing the DOM, as described in <a href="http://svgmagazine.com/jul2011/dom-helper.html">July's issue of SVG magazine</a>, it nullifies the need to define classes for SVG elements, whether primitives or others. Pergola libraries are essentially SVG objects (symbols, markers, patterns, shapes, filters, etc.), and a comprehensive collection of classes specialising in the production of system objects, widgets and other utilities. Its general structure consists of a placeholder object defining some system variables and utility functions, a superclass defining prototype methods, and prototype extensions for the individual classes. It defines a consistent OOD model, similar in approach to <a href="http://www.sencha.com/products/extjs/">ext.js</a>. Moreover, this model adopts a shadow DOM referencing model, skipping the need for ad hoc node selection or referencing. It also introduces the use of the instance property <code>owner</code>, which makes up for the lack, in JavaScript 1.5, of a property similar or equivalent to the DOM's <code>parentNode</code>. It allows upstream identification of objects with a higher hierarchical rank and has several other implications in terms of flexibility.</p>

<p>Also noteworthy is the User Functions and Events mechanism implemented in all the low level component classes which, together with the possibility of overriding properties and methods, allows the addition of accessibility extensions by developers with the right know how. They may also find interesting the possibility of defining a global accessibility “skin” in the <code>skin.es</code> file, which, while functioning in a manner similar to a CSS document, allows multiple definitions of the same selectors in the same document, accepts expressions and allows us to use the powerful color utility functions, for example to enhance contrast for the whole interface, etc.</p>

<p>Pergola is 100% compatible with all the major SVG implementations, including IE9, and since version 1.3.5 all online examples have been shown both in a pure SVG context, and in an HTML context (mixed namespace). The switch is simply made in the config file that accompanies each project:</p>

<pre><code>pergola.container = document.getElementById("svg");
pergola.doc = $C({
	element: "svg",
	width: "100%",
	height: "100%",
	appendTo: pergola.container
});</code></pre>

<p>The default container is overridden (you can use any selection method), and the outmost <code>&lt;svg&gt;</code> is created and appended to the newly defined container. If the container does not exist you can create one on the fly:</p>

<pre><code>pergola.container = $html({
	element: "div",
	style: "margin: 40px; overflow: hidden;",
	appendTo: document.body
});</code></pre>

<p>In fact the SVG DOM helper comes with a sibling HTML DOM helper, which exposes the HTML library and its vocabulary in the same way.</p>

<p>Instantiation of the Window class, like any class designed to produce widgets or other concrete objects, is a two step process:</p>

<ul>
<li>Definition of the object and inheritance
<li>A call to the class's prototype <code>build()</code> method, a function expecting one object where we can override the prototype properties and define component objects.</li>
</ul>

<p>This technique has multiple advantages over dynamic or deferred construction such as self-referencing and access to the object's own prototype during instantiation.</p>

<p>In its simplest form, creating a Pergola application window looks like so:</p>

<pre><code>var myWindow = new pergola.Window();
myWindow.build({});</code></pre>

<p>This produces an empty window with toolbar.</p>

<p>That concludes our overview of the Pergola library. For more information, look at the documentation and online examples:

<ul>
<li><a href="http://www.dotuscomus.com/pergola/overview.html">Library overview</a></li>
<li><a href="http://www.dotuscomus.com/pergola/documentation.html">API documentation</a></li>
<li><a href="http://www.dotuscomus.com/pergola/examples.html">Online examples</a></li>
</ul>

<h2>Initialising our mapping window</h2>

<p>To start with, we'll wrap a map into a window in a few simple steps, then adding mapping features in a straightforward manner. First we create an instance of the <code>Pergola.Window</code> class to contain the map.</p>

<pre><code>var bingWin = new pergola.Window("Bing Maps");

bingWin.build({
	isFull: true,
	type: "map",
	mapWidth: 2048,
	mapHeight: 1536,
	fill: "#010413",
	...
});</code></pre>

<p>The first few properties we see here are self-explanatory. The <code>width</code> and <code>height</code> of the map should be set to at least <code>window.screen.width</code> and  <code>window.screen.height</code> respectively, and they should also be multiples of 512, which is the size of the map tiles we are going to use. <code>type: "map”,</code> will produce a window with different behavior from a regular window: the class's prototype is extended with specific mapping properties and methods, and the behavior of the transformation tools, including scrollbars, overrides the regular behavior by sending requests rather than acting on the contained document's viewport.</p>

<p>Note that in the object literal we are passing to the build method we can override the prototype properties of the class, thus, if we wanted to implement our own mapping tools instead of those implemented by default, we would assign the value <code>false</code> to the <code>hasZoomAndPan</code> property. We will see further down how to add custom tools.</p>

<h2>The menus</h2>

<p>Next up is adding a menu; Pergola has built-in functionality for menus, dialogs, static panels, check-boxes, radio buttons, pop-up selectors, etc. Adding a menu is as simple as this:</p>

<pre><code> ...,
	menu: {
		...
	},</code></pre>

<p>Perhaps one of the most interesting things about maps is switching between different views: satellite shots, road maps, birds eye views, etc. In our map we'll create three views: <em>Aerial</em>, <em>Aerial With Labels</em> and <em>Road</em>. We do this by setting a property with title of <code>Views</code>, which defines the menu title and a list of three views:</p>

<pre><code>menu: {
	menu1: {
		title: "Views",
		items: {
			item1: {
				string: "Aerial",
				check: false,
				exclusive: true,
				view: "Aerial",
				fn: tileSource
			},
			item2: {
				string: "Aerial With Labels",
				check: true,
				exclusive: true,
				view: "AerialWithLabels",
				fn: tileSource
			},
			item3: {
				string: "Road",
				check: false,
				exclusive: true,
				view: "Road",
				fn: tileSource
			}
		}
	}
}</code></pre>

<p>The user function <code>tileSource</code> is in charge of switching scripts in order to request the appropriate tiles for each view. It is a top level function closely associated with the request callback function. We will see later that there are several type values for user functions (<code>fn</code>) in Pergola.</p>

<p>The Polymaps development model doesn't follow a typical Javascript OOD model. In order to facilitate communication with Polymaps we define the <code>views</code> property, designed to store information about Polymaps' tile layers:</p>

<pre><code>views: {
	Aerial: {},
	AerialWithLabels: {},
	Road: {}
}</code></pre>

<h2>Populating the map</h2>

<p>Finally, we need to create the map and use it to populate the window. For this we have several methods at our disposal. Typically, appending the map can be done during instantiation or can be deferred. The first method is what we will use, as it is definitely the easiest:</p>

<pre><code>contains: function() {return this.mapMaker()}</code></pre>

<p>This is an instance property, defined by the user, but designed for being processed. Some APIs designate this kind of property as “special”. The <code>mapMaker</code> prototype method is a helper function. Its call is deferred until the <code>this</code> keyword is a valid reference. Other techniques are also possible.</p>

<p>If we run the code at this point (<a href="http://www.dotuscomus.com/pergola/download/pergola_1.3.7/Examples/BingMaps/BingWindow_step1.svg">BingWindow_step1.svg</a>) we will see the map in a full screen window (in the browser) with all  controls active (tool buttons, mouse, keyboard).</p>

<pre><code>var bingWin = new pergola.Window("Bing Maps");

bingWin.build({
	isFull: true,
	type: "map",
	mapWidth: 2048,
	mapHeight: 1536,
	fill: "#010413",
	menu: {
		menu1: {
			title: "Views",
			items: {
				item1: {
					string: "Aerial",
					check: false,
					exclusive: true,
					view: "Aerial",
					fn: tileSource
				},
				item2: {
					string: "Aerial With Labels",
					check: true,
					exclusive: true,
					view: "AerialWithLabels",
					fn: tileSource
				},
				item3: {
					string: "Road",
					check: false,
					exclusive: true,
					view: "Road",
					fn: tileSource
				}
			}
		}
	},
	views: {
		Aerial: {},
		AerialWithLabels: {},
		Road: {}
	},
	contains: function() {return this.mapMaker()}
});</code></pre>

<p>For the hard core who may need more control, here is the code for appending the map manually, showing the use of private member functions (see the <a href="http://polymaps.org/docs">Polymaps documentation for more</a>):</p>

<pre><code>pergola.Window.current = bingWin;
var doc = bingWin.childDoc;
polymaps.origin = {x: bingWin.x + doc.x, y: bingWin.y + doc.y};

bingWin.map = polymaps.map(doc)
.container(doc.transformable.appendChild($C({
	element: "svg",
	id: bingWin.id + "_tiles",
	width: bingWin.mapWidth,
	height: bingWin.mapHeight
})))
.add(polymaps.interact())
.add(polymaps.hash());</code></pre>

<h2>Adding additional tools</h2>

<p>Let's proceed now with adding a custom tool in the tool bar. For several of its interface features the <code>Window</code> class allows “inline” (defined in the object literal) or deferred construction/addition, like we've seen for the <code>contains</code> property. The addition of tools can be done while creating the window instance by setting the <code>tools</code> property, or at a later stage by invoking the <code>addTools</code> prototype method. This time let's use the second technique:</p>

<pre><code>bingWin.addTools({
	group1: {
		separator: true,
		myMeasureTool": {
			symbol: {
				symbol: pergola.symbols.ruler,
				x: 4,
				y: 4
			},
			selected: false,
			quickTip: "measureTool",
			ev: "mouseup",
			fn: function() {...}
		}
	}
});</code></pre>


<p>The object literal can be passed one or more properties as parameters to designate tool groups that can be physically separated, in which case we set the property <code>separator</code> to <code>true</code>. Then follows one or more tool objects where the user defined properties <code>ev</code> and <code>fn</code> are of particular importance. There are a number of different value types that can be used to reference functions. In this example we use a function literal for the sake of simplicity. The <code>quickTip</code> property can also get different formats including definitions on the fly.</p>

<p>The <code>ToolButton</code> class is a subclass of <code>Button</code> and when creating an instance we can override all its geometrical and paint properties (SVG attributes), or even declare any ones that are not in the collection of the prototype properties of the <code>Button</code> class. But the main purpose of the <code>ToolButton</code> subclass is to define a particular and consistent look and feel. The best place to edit the graphical properties of the class is in the <a href="http://www.dotuscomus.com/pergola/download/pergola_1.3.7/pergola/lib/skins/skins.es">skin file</a>. If we take a look this is immediately apparent, and in any case exhaustively documented.</p>

<p>The <code>ToolButton</code> class inherits its system logic from <code>Button</code>. Moreover, tool buttons can behave as radio buttons, but this is outside the scope of this article.</p>

<p>One bit of good news is that a ruler tool with logic for measuring earth distances is implemented by default in a window of <code>type</code> "map": it can measure distances in kilometres, miles, or nautical miles (menu Unit), as in the <a href="http://www.dotuscomus.com/pergola/download/pergola_1.3.7/ExamplesHTML/BingMaps/index.html">live demo</a>. The navigation help tool (“?”) is also part of the base kit of tools for a window of <code>type</code> "map".</p>

<h2>Adding custom map features</h2>

<p>We'll finish up by adding some custom map features — a custom menu and menu items to reveal interesting locations and data.</p>

<p>Before we implement though, a little theory. Implementing a custom feature on a map involves a custom graphic, either scaled according to the map zoom level or not scaled. Paths showing itineraries or polygons for delimiting areas for example are meant to be scaled, while objects used to pinpoint a particular place or to show information about a particular region are just projected. Either way, we can handle these features using <a href="http://geojson.org/geojson-spec.html">GeoJSON Objects</a>. In our case, these objects can be processed by Polymaps'  GeoJSON parser, enhanced in this custom version with some Pergola facilities.</p>

<p>A custom feature is commonly placed in its own layer, overlaid on top of the map. We are going  to add two layers, one that shows the Bing copyright, which is a Bing requirement, and one to pinpoint the location of the “SVG Open 2011” conference. For this, we define:

<ul>
<li>the instance property <code>layers</code>, an object where we store information about the layers for their management.</li>
<li>some controls to toggle our custom features on and off: custom menus/menu items in our case.</li>
</ul>
</p>

<p>Before proceeding, let's remember that these are just definitions, and the order in which the properties of the window are defined in the object literal passed as parameter to the window's <code>buid</code> method is irrelevant.</p>

				<h3>The <code>layers</code> object</h3>

<p>The order in which the properties of this object are defined is also irrelevant.</p>

<pre><code>layers: {
	copyright: {
		feature: false,
		display: "block"
	},
	svgOpen2011: {
		feature: true,
		display: "none"
	}
}</code></pre>

<p>The <code>feature</code> property indicates if the layer contains projection (true) or static material. The <code>display</code> property indicates the initial state we want for that layer.</p>

	<h3>The “Layers” menu</h3>

<p>We add the definition of our “Layers” menu, containing custom items and their user functions, to the <code>menu</code> object (a window has exactly 1 menu object):</p>

<pre><code>menu: {
	menu1: {
		...
	}
	menu2: {
		title: "Layers",
		items: {
			item1: {
				string: "SVG Open 2011",
				target: function() {
					return {
						obj: bingWin.layers.svgOpen2011,
						center: {lat: 42.36131, lon: -71.08124},
						zoom: 17,
						view: "Road"
					};
				},
				fn: 'showFeatureLayer',
			},
			item2: {
				string: "Copyright",
				check: true,
				target: function() {return bingWin.childDoc.copyright;},
				fn: function() {
					var l = bingWin.layers.copyright;
					l.display = l.display == "block" ? "none" : "block";
					this.target().setAttributeNS(null, "display", l.display);
				}
			}
		}
	}
}</code></pre>

<p>We have defined the “SVG Open 2011” feature directly in the object literal. We specify a latitude and a longitude as the new map center, an appropriate value for the zoom level (in the 1-21 range) and optionally, a view type that we estimate most appropriate.</p>

<p>The user function of the "SVG Open 2011" menu item updates the Views menu, builds the feature layer if it doesn't exist, and centers and zooms the map. This is where the GeoJSON Geometry Object is defined:</p>

<pre><code>bingWin.menu.menu2.list.item1.showFeatureLayer = function(evt) {
	var target = this.target(),
			o = target.obj,
			currentMap = pergola.Window.currentMap;

	if (target.view) {
		currentMap.mapViewsToggle(currentMap.menu.menu1.list.item3, target.view);
	}

	if (!o.container) {
		currentMap.map.add(polymaps.geoJson(o)
		.features([
			{
				"geometry": {
					"type": "Point",
					"coordinates": [-71.08124, 42.36131],
					"elements": pergola.symbols.signalPaddle
				}
			}
		]));
	}

	currentMap.centerMap(target.center);
	currentMap.mapZoom(target.zoom);
	currentMap.showMapFeatureLayer(o);
};</code></pre>

<p>Note that the GeoJSON Geometry Object <code>Point</code> refers to a point on earth using coordinates. The <code>elements</code> property gets an array of one or more SVG elements whose origin 0,0 will be placed at <code>coordinates</code>. The SVG elements are in the format specified in the Pergola documentation and consistent throughout its libraries and classes. It is the format expected by Pergola's <a href="http://www.dotuscomus.com/svg/lib/tinytools/DOM_Helper.html">progressive DOM Helper</a>, a method which builds and returns any SVG element. In the object expected by the method we can define any of the element's attributes using SVG syntax, without the need of any extra artifact or appendices. The method is extensively used in this custom version of Polymaps.</p>

<p>The contents of the “Copyright” layer get built into the Bing callback function.</p>

<h2>The complete code</h2>

We can check the <a href="http://www.dotuscomus.com/pergola/download/pergola_1.3.7/Examples/BingMaps/BingWindow_step2.svg">BingWindow_step2.svg</a> example now with the added layer and layers menu.

<pre><code>var bingWin = new pergola.Window("Bing Maps");

bingWin.build({
	isFull: true,
	type: "map",
	mapWidth: 2048,
	mapHeight: 1536,
	fill: "#010413",

	menu: {
		menu1: {
			title: "Views",
			items: {
				item1: {
					string: "Aerial",
					check: false,
					exclusive: true,
					view: "Aerial",
					fn: tileSource
				},
				item2: {
					string: "Aerial With Labels",
					check: true,
					exclusive: true,
					view: "AerialWithLabels",
					fn: tileSource
				},
				item3: {
					string: "Road",
					check: false,
					exclusive: true,
					view: "Road",
					fn: tileSource
				}
			}
		},
		menu2: {
			title: "Layers",
			items: {
				item1: {
					string: "SVG Open 2011",
					target: function() {
						return {
							obj: bingWin.layers.svgOpen2011,
							center: {lat: 42.36131, lon: -71.08124},
							zoom: 17,
							view: "Road"
						};
					},
					fn: 'showFeatureLayer'
				},
				item2: {
					string: "Copyright",
					check: true,
					target: function() {return bingWin.childDoc.copyright;},
					fn: function() {
						var l = bingWin.layers.copyright;
						l.display = l.display == "block" ? "none" : "block";
						this.target().setAttributeNS(null, "display", l.display);
					}
				}
			}
		}
	},

	views: {
		Aerial: {},
		AerialWithLabels: {},
		Road: {}
	},

	layers: {
		copyright: {
			feature: false,
			display: "block"
		},
		svgOpen2011: {
			feature: true,
			display: "none"
		}
	},

	contains: function() {return this.mapMaker()}

});</code></pre>

<h2>Conclusion</h2>

<p>Multiple <code>polymaps.map</code> instances are theoretically possible save for the fact that at this stage they end up being replicas of one another (work in progress). In this respect we must take note that the Polymaps library used here is not the official Polymaps release: it has been adapted to work in a standalone SVG context for specific purposes.</p>

<p>That's all for now. It's nice to be able to create a full-featured SVG application this easily. A complete customisation of the look and feel of the interface objects can be done through the <a href="http://www.dotuscomus.com/pergola/download/pergola_1.3.7/pergola/lib/skins/skins.es">skin file</a>. And you can <a href="http://www.dotuscomus.com/pergola/download/pergola_1.3.7/ExamplesHTML/BingMaps/index.html">check out the live demo of the example shown in this article</a>.</p>

<p class="note">Note: One thing you'll notice about this application is that each time you move the map, a new URL is formed. This would quickly become really annoying for those wanting to use the back button to go back to a previous page. Therefore, in a production environment, the application would be best launched in a separate window or tab, with an explanation telling the user this is happening and why.</p>
