---
title: Architecture Overview
authors:
- shwetank-dixit
intro: 'We will take a look at the architecture of Opera extensions. This will cover the various building blocks of an extension and how they all fit together.'
featured: featured
license: cc-by-3.0
---

## Introduction

Let’s dive deeper into the architecture and technical details of extensions in Opera.

## The NEX Format

Opera supports the _NEX_ (short for **N**avigator **Ex**tension) file format for extensions. All the files and folders for an extension are packaged into a zip file with a special header and renamed as _.nex_. The NEX format supports a major portion of Chromium extensions, as well as APIs specific to Opera. The API docs section in the right sidebar gives you a good idea of the APIs Opera currently supports.

The APIs from the Chromium project supported in NEX extensions (like tabs) can be called using `chrome.\*`, whereas the ones specific to Opera (like Speed Dial) will reside under the `opr.\*` object.

It is important to note that Opera will run extensions in Chromium’s CRX format too, as long as the extension uses the `chrome.\*` APIs that Opera supports.

If you would like to see the code of an extension, you can rename the file extension to a _.zip_ format, and then use a file unarchiver program (for example [7zip](http://www.7-zip.org/download.html)) to unzip the contents. On Mac, we recommend using the `unzip` command in Terminal, as Archive Utility produces suboptimal results when dealing with signed files.

## Types of extensions

Currently, there are four types of extensions in Opera.

### 1. Extensions involving Browser Actions (and Page actions)

You can use Browser Actions or Page Actions to put UI elements in the browser window. Browser Actions are used to put UI elements in the top right side of the browser _next_ to the address bar. This is different from Page Actions which are used to place a UI element _inside_ the address bar.

Page actions are used to put a UI element specific to just a page or a limited set of pages fitting a certain criteria. If you would like the UI element to be there for all pages, then you should use Browser Actions for that purpose. The UI elements you can use are buttons, badges and popups. To know more on how to create and use these in extensions, please read the article on [creating buttons, badges and popups](tut_browser_actions.html).

Note: There can only be a maximum of 6 extensions installed at a time in the toolbar using browser actions, and only up to 4 which are based on page actions.

### 2. Context Menu extensions

As the name implies, they are extensions to the context menu of the page. You can bring up the context menu by either right-clicking an element in the page, or by using the appropriate shortcuts using your keyboard (varies according to your platform). We’ve created an article on [how to create context menu extensions](tut_context_menus.html).

### 3. Speed Dial extensions

You can also create extensions for the Speed Dial in Opera. Keep in mind that to create Speed Dial extensions, you need to use the `opr` object, and will only run in an NEX file extension. Go ahead and check out [how to create Speed Dial extensions](tut_sd_extensions.html).

### 4. Extensions with no UI

You can also create extensions which don’t have any UI component. If you are familiar with injected scripts in previous (Presto-based) versions of Opera, or with Greasemonkey scripts, then you get the idea.

An example of this could be an extension which listens to keyboard input, and performs an action (like opening a certain page in a new tab) when a keyboard shortcut is typed by the user. These extensions will work as part of the content script, which will be discussed (along with others parts of an extension) in the next part of this article.

## Different parts of an extension

### The Extension manifest

Every extension _must_ contain a manifest file. The manifest file provides basic information like the name of the extension and the author, as well as some important information like the APIs the extensions wants to access, which is listed in the `permissions` field. If the extension manifest is not correctly defined, the extension will not run at all. Another important thing to note is the `developer` field, where you can include the extension author’s name.

To know more about the extension manifest, [read the API doc](manifest.html) on it.

### The Background Process

You need a process to run in the background to coordinate some tasks or to maintain a certain state. You have two variants of it — The _Background Page_ or _Event Page_.

Though you can use an HTML page and put JavaScript inside the `<script>` tag, it is usually better to just use a _.js_ file and reference that from the manifest file. The browser will automatically generate the corresponding page for it. For example,

	"background": {
		"scripts": ["background.js"]
	}

To specify an event page in the manifest file, you need to define the `persistent` field as `false` like so:

	"background": {
		"scripts": ["eventPage.js"],
		"persistent": false
	}

The background page (or the background script) is essential for the user interface. Any piece of code which requires adding a UI item to the browser needs to be defined here. It is also the one responsible for noticing a change in state and updating or otherwise modifying the UI accordingly.

_Event pages_ are exactly like background pages, except that they only loaded when required. This means when the event page isn’t loaded, system memory and resources are not being used, thus giving better performance. Extensions authors are recommended to use event pages wherever they can.

Event pages are loaded when:

- The extension is installed, restarted started or updated to a new version.
- An event is dispatched which the event page was listening for.
- When another part of the extension (like a popup) calls it (for example, using `runtime.getBackgroundPage`).
- When another part of the extension sends a message (using `runtime.sendMessage()` or using long-lived connections. You can read more on message passing in our [article](tut_message_passing.html)).

The primary difference between background pages and event pages is that event pages are intended to handle events only. So you’d register event listeners in the eventpage.js and the browser will optimize the way it stores and runs these events at runtime. Anything not wrapped in event listeners will be handled on load and then only kept around by the engine if the variables and functions are referenced in any way inside any event listeners.

In other words, try to **use an event page whenever feasible, as it will lead to better performance and lesser resource consumption** by the browser.

### The Content Script

If you want to make any change to the web page itself, then you need to use a content script. The content script has access to the DOM of the web page, but access to variables and functions is confined to only itself. For example, content scripts cannot access variables defined in the web page, or even in other content scripts.

The content script does not have _direct_ access to the variables and functions in the background scripts too. The same applies for access to API functions. However, you can use [message passing](tut_message_passing.html) to communicate between various parts of the extensions, be it background scripts or popups. So, you could call your functions in the background script and then communicate to the content script to do a certain task involving the host page’s DOM.

More details on it can be found in our [article on content scripts](tut_content_scripts.html).

### The Popup Page

Sometimes extensions will have a popup which, well, pops up when you click an extension button. This is defined by an HTML page, and needs to be specified in the manifest. Read the [buttons, badges and popups](tut_browser_actions.html) article to learn more.

### The Options Page

If your extension needs a place to store user preferences then you should create an options page. If you define an options page then a link will be provided at the _extensions management_ page from where the user can access the page. You need to declare it in the manifest like so:

	"options_page": "options_page.html"

You can use `localStorage` as defined in the [Web Storage API](http://www.w3.org/TR/webstorage/) to store user preferences for the extension.

### Icons and other files
Your extensions need icons (A 128x128 icon used for the addons page and during installation, a 48x48 one for the extensions management page, a 16x16 one for the favicon for the extension’s pages, and a 19x19 one in case you need to put an icon as a browser or page action). Apart from icons, you might also need other files like images, fonts etc. as well as CSS and JS files for pages like the popup or options pages. All of these can be placed anywhere inside of the extension package.

## Files and Folder Structure

<figure block="figure">
	<img elem="media" src="{{ page.url }}/folder-structure.png" alt="Extension folder structure">
</figure>

The above screenshot represents the folder structure of a typical extension. To make things more organized, you could also put images, fonts and other media in a folder called _media_, stylsheets in a _css_ folder and JS files in a _scripts_ folder.

You can refer to any of your files in your extensions using relative URLs. For example : `<img src="media/myimage.png">`. An absolute URL to your extension resource can be used by accessing `chrome-extension://<extensionID>/<pathToFile>`.

## Permissions and privileges

### Permissions are necessary

Each extension comes with a manifest file which administers access over which browser APIs are allowed to be used, and in which set of domains the extension can run.

### Seperation of privileges

The content script and the rest of the extension have separate roles and sets of privileges. Only the content script is able to modify the web page, but does not have the privilege to modify the UI layer. The rest of the extension components (background pages, popups etc) can do things on the UI layer, but do not have the privilege to modify the web page.

### Content scripts works in isolated worlds

Content scripts can modify the web page since it has access to the DOM of the page, but it does not have access to the variables and functions that the web page has. A content script cannot access variables and functions defined by the background processes and vice versa (though they can communicate through message passing). This also means content scripts cannot access the extension APIs — they can only be accessed by background or event pages. Each content script lives in an _isolated world_ — it cannot even access variables or functions defined in other content scripts present in the extension.

### Content security policy

The content security policy is defined in an extension in the manifest, like so:

	"content_security_policy": "[WRITE YOUR POLICY STRING HERE]"

To know more about the syntax and possible values for writing your content security policy, take a look at the [specification](http://www.w3.org/TR/CSP/). By default, the policy string for extensions is supposed to be
`script-src 'self'; object-src 'self'`.

So if you do not define a policy exclusively in an extension manifest, then this policy is assumed. Under this policy, the following things are important to note:

### `eval()` and associated functions are not allowed

Things like `eval()` and others (mentioned below) are disabled as they could be used in cross-site scripting attacks. In other worlds, do not use:

- `eval()`
- `setTimeout()`
- `setInterval()`
- `new Function(String)`

You could add the string `'unsafe-eval'` to your policy string to make the extension use `eval()` and related functions, but we would _very strongly_ advise you against doing so.

### Inline JavaScript will not run

Inline JS can also be used as an attack vector for cross-site scripting attacks, so inline JavaScript is disabled under this policy. This means `<script>` blocks as well as inline event handlers (for example `<a onclick="…"`) will not be allowed. So if you have a page (like a popup) and want to have some JavaScript interactivity in it, then it is best to have a seperate JS file and reference it in the HTML page (like `<script src="popup.js"></script>`). Note: Including `'unsafe-inline'` in your CSP will have no effect.

### Only locally loaded scripts and resources will load

Only scripts and objects loaded from the extension package will be allowed to load, so if you have something like:

	<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>

This will not load as it’s an externally hosted script. To load the library in the extension, you will need to have it included as part of the package, and reference it like so:

	<script src="scripts/jquery-1.9.1.min.js"></script>

No external scripts or resources loaded over HTTP are allowed — except in the case of your local server, in which case you could add either `http://127.0.0.1` or `localhost` to your whitelist. You could also add the following schemes to the whitelist: `chrome-extension` and `chrome-extension-resource`.

Please note that this does not have any effect on the way you do AJAX. You are free to make a call through `XMLHttpRequest()` to any origin.

Also, if you are familiar with the old version of Opera extensions, then you would be used to declaring permissions for cookie sharing. No such requirement is there for extensions in Opera 15+, so you can do away with it. If you are converting your _.oex_	extension to a _.nex_ based one, then you can remove the requirement for declaring permission for cookie sharing.
