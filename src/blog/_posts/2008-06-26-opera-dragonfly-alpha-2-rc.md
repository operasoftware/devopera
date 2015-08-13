---
title: Opera Dragonfly alpha 2 RC
authors:
- david-storey
tags:
- dev-tools
- dragonfly
license: cc-by-3.0
---

<p>We&#39;ve just released the Release Candidate for <a href="http://www.opera.com/products/dragonfly">Opera Dragonfly alpha 2</a>.  New features added since the initial alpha include auto-complete for the Command Line (including object inspection), docked window mode, CSS editing including auto-complete, and a downloadable debug menu. There has also been many bug fixes and stability improvements.</p>

<p>Support for editing and a single window mode have been two of the three most requested features for Opera Dragonfly.  The third was HTTP inspection, but this requires Core support to expose the required information through Scope, and will require the next version of our Core rendering engine.  Alpha 2 will debut experimental support for the first two features.</p>

<p>Currently only CSS editing is supported, but much of the code can be reused for DOM editing for alpha 3.  CSS can currently be edited by clicking on a property or value in the styles sidebar.  User defined values are editable, but not the browser default values.  Pressing <kbd>tab</kbd> will move to the next token (and <kbd>shift-tab</kbd> for the previous token).  Pressing the up or down arrows on the keyboard activates auto-complete, that will cycle through the valid values.  Typing <kbd>co</kbd> then the down arrow when a property is highlighted will suggest <code>color</code> for example.  Pressing the up or down arrow on a value will increase or decrease the value.  All changes are live and instant, so it is incredibly useful for testing tweaks and colour or size changes.  I find it very useful when using HSL colour values for example, to get the exact shade I want to use.  When at the end of a line or when the value is highlighted, pressing <kbd>return</kbd> will create a new property.</p>

<p>The docked window mode is now default, but can be changed to a separate window by pressing the icon next to the close button in the top right corner of the Opera Dragonfly UI.  The UI for the docked mode is still very experimental as the support came at the end of the Opera 9.5 development phase.  The UI will be improved to make it less confusing in alpha 3.</p>

<p>Command Line auto-complete has already been mentioned in this blog, and can be activated by pressing the <kbd>tab</kbd> key.  If an object is returned it is highlighted and can be clicked on.  Doing this will allow the object to be inspected in the Inspection sidebar.  A debug menu has also been released to complement Opera Dragonfly, which currently packages existing Opera features that are useful to developers, along with links to reference materials and validators.  This will be improved upon in the future to add new functionality.  It can be downloaded on the <a href="http://www.opera.com/products/dragonfly">Opera Dragonfly web site</a>. </p>

<p>Once alpha 2 is released there will be a break while the lead developer takes a much deserved holiday, then work will resume on Opera Dragonfly alpha 3.  This should include more bug fixes, DOM editing, support for localisation, UI work and more.</p>

<p>You can test out the release candidate of alpha 2 by entering <kbd><a href="https://dragonfly.opera.com/app/weekly" target="_blank">https://dragonfly.opera.com/app/weekly</a></kbd> into the Developer Tools URL of <a href="opera:config#DeveloperTools">opera:config</a> and pressing the save button. Please give us feedback in the <a href="http://www.opera.com/products/dragonfly/feedback/">usual places</a>.  </p>
