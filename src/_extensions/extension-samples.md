---
title: Extension Templates and Samples
authors:
- shwetank-dixit
intro: 'This is a repository of all the example extensions to help you get started with making Opera extensions. These could be useful for just looking through the code and learning about extensions, or you could take any of these as a starting point and then edit them and build upon them for your own extensions.'
license: cc-by-3.0
---

## Introduction

This is a repository of all the example extensions to help you get started with making Opera extensions. These could be useful for just looking through the code and learning about extensions, or you could take any of these as a starting point and then edit them and build upon them for your own extensions. If you haven’t done so already, we highly recommend that you read through the [architecture overview](/extensions/architecture-overview/) before proceeding.

## Browser and Page Actions

### Sample extensions

- [An extension which simply adds a button to the toolbar](/extensions/extension-samples/browser-actions-button.crx)
- [An extension which simply adds a popup to the toolbar](/extensions/extension-samples/browser-actions-popup.crx)
- [An extension which adds a page action](/extensions/extension-samples/page-actions.crx)

### Relevant reading

- [Buttons, popups and badges(browser actions)](/extensions/browser-actions/)
- [`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction)

## Messaging

### Sample extensions

- [An extension which does simple, short lived communication (it counts the number of paragraphs in the page and updates the badge)](/extensions/extension-samples/message-passing.crx)

### Relevant reading

- [Passing messages in extensions](/extensions/message-passing/)
- [`chrome.runtime`](https://developer.chrome.com/extensions/runtime)

## Windows and Tabs

### Sample extensions

- [An extension which simply creates a new tab](/extensions/extension-samples/win-tabs-create-tab.crx)
- [An extension which takes current URL, creates a new tab and runs the URL by the WAVE accessibility evaluation tool](/extensions/extension-samples/win-tabs-wave.crx)
- [If you are on dev.opera.com, then clicking on button will redirect it to opera.com](/extensions/extension-samples/win-tabs-update-tab.crx)
- [An example of closing, reloading and duplicating tabs](/extensions/extension-samples/win-tabs-close-reload-duplicate.crx)
- [Creates a new window with three predefined URLs loading in that window](/extensions/extension-samples/win-tabs-private-window.crx)

### Relevant reading

- [Working with tabs and windows](/extensions/tab-window/)
- [`chrome.tabs`](https://developer.chrome.com/extensions/tabs), [`chrome.windows`](https://developer.chrome.com/extensions/windows)

## Context Menu

### Sample extension

- [A sample extension showing how to use the Context Menu API](/extensions/extension-samples/context-menu-selected-text.crx)

### Relevant reading

- [Working with the context menu](/extensions/context-menus/)
- [`chrome.contextMenus`](https://developer.chrome.com/extensions/contextMenus)

## History API

### Sample extension

- [Accessing history of currently active tab](/extensions/extension-samples/history-api-1.crx)
- [Deleting history of the currently active tab](/extensions/extension-samples/history-api-2.crx)

### Relevant reading

- [Working with the browser history](/extensions/history/)
- [`chrome.history`](https://developer.chrome.com/extensions/history)

## Internationalization (i18n)

### Sample extension

- [Extension showing how i18n should work. The text in popup should be correctly translated in Spanish if the browser locale is changed to Spanish](/extensions/extension-samples/i18n-extension.crx)

### Relevant reading

- [Internationalization](/extensions/internationalization/)
- [`chrome.i18n`](https://developer.chrome.com/extensions/i18n)

## Address Bar extensions

### Sample extension

- [Type the keyword “extquery” in the address bar followed by your query. The extension will search the query on the Opera extensions documentation site](/extensions/extension-samples/omnibox-1.crx)
- [Type the keyword “extdocs” in the address bar followed by your query. The default suggestion is to search on the Opera Extensions documentation site. The next option is a search on StackOverflow with the tag `[opera-extension]`, followed by a Google search.](/extensions/extension-samples/omnibox-2.crx)

### Relevant reading

- [Creating address bar extensions](/extensions/omnibox/)
- [`chrome.omnibox`](https://developer.chrome.com/extensions/omnibox)

## Sidebar Extensions

### Sample extension

- [Sidebar extension which maintains state using background script and localStorage](/extensions/extension-samples/sidebar-maintain-state.crx)

### Relevant reading

- [Creating extensions for the sidebar](/extensions/sidebar-action-manual/)
- [`opr.sidebarAction`](/extensions/sidebar-action-api/)
