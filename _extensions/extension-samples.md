---
title: Extension Templates and Samples
authors:
- shwetank-dixit
license: cc-by-3.0
---

## Introduction

This is a repository of all the example extensions to help you get started with making Opera extensions. These could be useful for just looking through the code and learning about extensions, or you could take any of these as a starting point and then edit them and build upon them for your own extensions. If you haven’t done so already, we highly recommend that you read through the [architecture overview](tut_architecture_overview.html) before proceeding.

## Browser and Page Actions

### Sample extensions

- [An extension which simply adds a button to the toolbar](samples/BrowserActions-button.nex)
- [An extension which simply adds a popup to the toolbar](samples/BrowserActions-Popup.nex)
- [An extension which adds a page action](samples/PageActions.nex)

### Relevant reading

- [Buttons, popups and badges(browser actions)](tut_browser_actions.html)
- [`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction)

## Messaging

### Sample extensions

- [An extension which does simple, short lived communication (it counts the number of paragraphs in the page and updates the badge)](samples/MessagePassing.nex)

### Relevant reading

- [Passing messages in extensions](tut_message_passing.html)
- [`chrome.runtime`](https://developer.chrome.com/extensions/runtime)

## Windows and Tabs

### Sample extensions

- [An extension which simply creates a new tab](samples/WinTabs-CreateATab.nex)
- [An extension which takes current URL, creates a new tab and runs the URL by the WAVE accessibility evaluation tool](samples/WinTabs-Wave.nex)
- [If you are on dev.opera.com, then clicking on button will redirect it to opera.com](samples/WinTabs-UpdateTab.nex)
- [An example of closing, reloading and duplicating tabs](samples/WinTabs-CloseReloadDuplicate.nex)
- [Creates a new window with three predefined URLs loading in that window](samples/WinTabs-PrivateWindow.nex)

### Relevant reading

- [Working with tabs and windows](tut_tab_window.html)
- [`chrome.tabs`](https://developer.chrome.com/extensions/tabs), [chrome.windows](https://developer.chrome.com/extensions/windows)

## Context Menu

### Sample extension

- [A sample extension showing how to use the Context Menu API](samples/ContextMenu-SelectedText.nex)

### Relevant reading

- [Working with the context menu](tut_context_menus.html)
- [`chrome.contextMenus`](https://developer.chrome.com/extensions/contextMenus)

## Speed Dial

### Sample extension

- [Sample speed dial extension](samples/SpeedDial-CenterContent.nex)

### Relevant reading

- [Speed Dial extensions](tut_sd_extensions.html)
- [`opr.speeddial`](https://developer.chrome.com/extensions/speeddial)

## History API

### Sample extension

- [Accessing history of currently active tab](samples/HistoryAPI-1.nex)
- [Deleting history of the currently active tab](samples/HistoryAPI-2.nex)

### Relevant reading

- [Working with the browser history](tut_hist.html)
- [`chrome.history`](https://developer.chrome.com/extensions/history)

## Internationalization (i18n)

### Sample extension

- [Extension showing how i18n should work. The text in popup should be correctly translated in Spanish if the browser locale is changed to Spanish](samples/i18nExtension.nex)

### Relevant reading

- [Internationalization](tut_internationalization.html)
- [`chrome.i18n`](https://developer.chrome.com/extensions/i18n)

## Address Bar extensions

### Sample extension

- [Type the keyword “extquery” in the address bar followed by your query. The extension will search the query on the Opera extensions documentation site](samples/Omnibox.nex)
- [Type the keyword “extdocs” in the address bar followed by your query. The default suggestion is to search on the Opera Extensions documentation site. The next option is a search on StackOverflow with the tag `[opera-extension]`, followed by a Google search.](samples/Omnibox2.nex)

### Relevant reading

- [Creating address bar extensions](tut_omnibox.html)
- [`chrome.omnibox`](https://developer.chrome.com/extensions/omnibox)

## Off-Road Mode

### Sample extension

- [Extension which toggles Off-Road Mode in the browser](samples/offroad.nex)

### Relevant reading

- [Working with Off-Road Mode](tut_offroad.html)
- [`chrome.types`](https://developer.chrome.com/extensions/types)

## Sidebar Extensions

### Sample extension

- [Sidebar extension which maintains state using background script and localStorage](samples/sidebar-maintain-state.zip)

### Relevant reading

- [Creating extensions for the sidebar](tut_sidebar_actions.html)
- [`opr.sidebarAction`](sidebarAction.html)
