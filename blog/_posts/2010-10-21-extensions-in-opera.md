---
title: Extensions in Opera
authors:
- peter-krefting
tags:
- opera-11
- extensions
- coreblog
license: cc-by-3.0
---

<p><p>
An
<a href="http://www.opera.com/browser/next/" rel="nofollow">alpha of Opera 11 for desktop</a>
was just released by the
<a href="http://my.opera.com/desktopteam/blog/" rel="nofollow">Desktop team</a>.
One of the major new changes in this version is
<a href="http://addons.labs.opera.com/" rel="nofollow">support for Browser Extensions</a>,
a feature we have been working on in Core for some time now (see also the
<a href="http://labs.opera.com/extensions-api/" rel="nofollow">API documentation</a>).

<p>
When implementing
Browser Extensions,
we wanted to re-use as much as possible
of the Web platform we already support in the Opera core.
We found that our implementation of the
<a href="http://www.w3.org/2008/webapps/wiki/WidgetSpecs" rel="nofollow">W3C Widget</a>
family of specifications was particularly well-suited for the task.
Unlike the packaging formats that other browser makers are using, these specifications give us a W3C standardized way of
<a href="http://www.w3.org/TR/widgets/" rel="nofollow">packaging</a>
software based on
<a href="http://www.opera.com/docs/specs/" rel="nofollow">web technologies</a> such as
HTML, CSS and JavaScript. ... </p></p></p><!--more--><h3>
Background
</h3>

<p>
By utilizing the W3C Widgets specifications for both
<a href="http://widgets.opera.com/">Widgets</a>,
<a href="http://unite.opera.com/">Unite Applications</a>
and now
<a href="http://addons.labs.opera.com/">Browser Extensions</a>,
we make it easier for
developers, as there is only one format to learn.
It also allowed us to use the same back-end code for managing all
of them.
To differentiate between the package types, we look at the
<a href="http://en.wikipedia.org/wiki/Internet_media_type">media type</a>
of the package.

<p>
While looking very similar on the surface, W3C Widgets and Browser
Extensions have very different scopes.
W3C Widgets run as stand-alone applications in the operating system, and
can access system resources like other applications.
Browser Extensions, on the other hand, run inside the web browser,
and have access to parts of the browser user interface and
the pages that are being displayed to the user.
In practice, this means that we enable a few additional proprietary APIs
and functionality for Extensions that are not commonly found in  W3C
Widgets.

<p>
When laying down the groundwork for Extensions, we have worked hard on
getting our base Widget support more in-line with the
<a href="http://www.w3.org/2008/webapps/wiki/WidgetSpecs">W3C Widgets specifications</a>.
The version you are looking at is the Opera release with the best and <a href="http://dev.w3.org/2006/waf/widgets/imp-report/">most
up-to-date support</a> for these specifications so far.

<h3>
Simplifying User scripts
</h3>

<p>
We decided to implement Extensions in Opera bit-by-bit, from the ground-up.
Since we already had support for W3C Widgets, this gave us support for
installing and uninstalling Extensions, essentially just by adding detection
of the media type.
Just being able to install and uninstall them was not very interesting,
so we looked at what kind of &quot;extensions&quot; we already have available today.
In the most basic form of Browser Extensions, we use them just for packaging
<a href="http://www.opera.com/docs/userjs/">User JavaScripts</a>.

<p>
Support for these technologies has been around for a while, and while they
are relatively easy to develop, they can be
<a href="http://www.opera.com/docs/userjs/using/#writingscripts">difficult to install</a>,
distribute and share.
By allowing Browser Extensions to
package JavaScript
we can solve that problem, making them one-click installs.

<p>
For those of you who have been around for a while, you have
<a href="http://labs.opera.com/news/2008/03/28/">seen snapshots</a>
of our internal development version, which is our primary testing
platform here in the Core department.
It is a bit clunky, but by implementing support for Browser Extensions,
we have been able to test the feature from the ground up.
It also means that we have been able to play with them even before the
<a href="http://my.opera.com/desktopteam/blog/">Desktop team</a>
guys  got their hands on it.

<h3>
Adding buttons
</h3>

<p>
But just packaging User JavaScript will not allow you to
make very advanced extensions.
We also need a way to extend the user interface.
To do that, we have created the
uiitem specification
which allows you to easily create context menus for a given context.

<p>
Putting the following snippet inside a <code>&lt;script&gt;</code> tag of
the <code>index.html</code> file will add a simple button to the user
interface.

<pre>
var toolbar = opera.contexts.toolbar
var props   = { title: &quot;My first button&quot; }
var uiItem  = toolbar.createItem(props);
toolbar.addItem(uiItem);
</pre>

<p>
The button will not do anything, as we have not defined any interaction in the example,
but it is a start.

<h3>
Packaging the extensions
</h3>

<p>
If you know how to make a W3C Widget, you know how to make an Opera
Extension.
Just like them,
Browser Extensions use HTML, CSS, JavaScript and the DOM to get the work done.

<p>
For simple extensions that just package User JavaScript,
it is even simpler.
Just put the scripts in the
&quot;includes&quot; folder
in your Extension archive, add a simple
<a href="http://dev.w3.org/2006/waf/widgets/#configuration-document"><code>config.xml</code> file</a>
and an empty <code>index.html</code> at the root, create a ZIP archive of all the files
(be careful to make sure the <code>config.xml</code> is at the root of the ZIP archive)
and rename the file so that its file extension is &quot;oex&quot; (for Opera
EXtension; Windows users may need to disable the
<a href="http://windows.microsoft.com/en-US/windows-vista/Show-or-hide-file-name-extensions">Hide extensions for known file types</a>
feature first).
This file can now be installed, for instance by dragging and dropping
it over your Opera window.

<p>
You can easily tests your scripts before creating the extensions using
the standard
<a href="http://www.opera.com/docs/userjs/">User JavaScripts feature</a>.

<p>
If you want to play with buttons, there is more work to be done.
You will need to embed a script not unlike the one above inside either the
(previously empty) <code>index.html</code> file, or a file linked from it.
Once you have done that, you create the ZIP file, rename it, and install
it as above.
For more details, please see the
<a href="http://labs.opera.com/extensions-api/">API documentation</a>.

<p>
To make Browser Extensions available to others, you can put them on a
web site, making sure they are served with a
<a href="http://en.wikipedia.org/wiki/Internet_media_type">media type</a>
of &quot;application/x-opera-extension&quot;.
We are also working on
<a href="http://addons.labs.opera.com/">a repository where you can share your extensions</a>
with others.

<h3>
The future
</h3>

<p>
As mentioned above, we are building Browser Extensions piece-by-piece, so
that we have a solid ground to build on before we add on all the bells
and whistles that are necessary for those great super-extensions we know
are lurking out there, just waiting to be written.
We have some good ideas cooking already, but we will also use
<a href="http://dev.opera.com/forums/forum/42202">feedback on the alpha release</a>
so that we can implement the things you care most about.
</p></p></p></p></p></p></p></p></p></p></p></p></p></p></p>
