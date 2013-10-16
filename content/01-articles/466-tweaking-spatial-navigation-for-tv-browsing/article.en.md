Title: Tweaking spatial navigation for TV browsing
----
Date: 2011-07-25 07:51:10
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<p>One of the biggest challenges designing content for TVs is navigation. Not only are there several different methods that can be used to navigate a page, but none of them provide the perfect blend of convenience and practicality, at least not yet. At the time of writing, a user could be controlling their TV browsing session with any of the following devices:</p>

<ul>
    <li>A remote control with a D-pad (with keypad)</li>
    <li>A remote control with a touchpad or similar (with full keyboard)</li>
    <li>A gyroscopic mouse</li>
    <li>An infrared pointer</li>
    <li>A touchscreen mobile phone or tablet</li>
</ul>

<p>Currently the most widely used by far is the regular remote control with basic up, down, left, right and select buttons. Using directional controls like this is referred to as <dfn>spatial navigation</dfn> and is essential to understand to create a great TV experience. It is also the same navigational method used on mobile phones with keypads and non-touch devices such as Amazon&#39;s Kindle.</p>

<h2>Testing spatial navigation</h2>

<p>Beyond the browser on TVs and similar web-connected devices, spatial navigation is also available in Opera on its other popular platforms. Developers can easily test spatial navigation on their desktop machines:</p>

<ul>
    <li>In the <a href="http://www.opera.com/browser/">Opera desktop browser</a>, hold down the <kbd>Shift</kbd> button and press the arrow keys.</li>
    <li>In the <a href="http://www.opera.com/developer/tools/mobile/">Opera Mobile emulator</a>, select <i>Keypad</i> in the launch settings window.</li>
</ul>

<p>An eye-opening exercise is to browse a few popular sites using only spatial navigation. Although it probably won&#39;t be impossible, it is likely to be frustrating with the cursor seeming to focus on elements at random. Television adds an extra layer of frustration and that&#39;s due to the infrared connection between the remote control and the TV. This causes a noticeable delay of up to half a second or so between pressing a button on the remote control and the cursor moving on the screen. Consequently, any mistake by the user or unexpected movement of the cursor is particularly expensive in terms of time wasted. Fortunately, we can alleviate a lot of this with CSS3.</p>

<h2>Controlling navigation with CSS3</h2>

<p>The <a href="http://www.w3.org/TR/css3-ui/#nav-dir">CSS3 Basic User Interface specification for directional focus navigation</a> is refreshingly simple both to explain and to implement. It&#39;s purpose is to enable you to specify which element should receive focus when a user presses one of the directional buttons. For example, if the user is focused on your copyright notice at the bottom of a page and presses the down arrow key, you could tell the cursor to focus on your logo at the top of the page. The CSS code for that would be something like this:</p>

<pre><code>
/* CSS */
#copyright {
    nav-down: #logo;
}
</code></pre>

<p>Note that this can be applied to any CSS selector, but the property&#39;s value must be the <code>ID</code> of an element, i.e. preceded by #. Not surprisingly, other possible property names are <code>nav-up</code>, <code>nav-left</code> and <code>nav-right</code>. As you can see, it&#39;s a very straightforward enhancement to implement and although it won&#39;t be noticed by in a desktop or touchscreen environment, for users relying on D-pad to navigate, it can improve their experience remarkably. Just make sure you fully test it yourself before publishing, to avoid any nasty surprises.</p>

<h2>Example</h2>

<p>Here&#39;s an <a href="http://dev.opera.com/static/articles/2011/tweaking-spatial-navigation-for-tv-browsing/">example of spatial and CSS navigation</a>. It shows two identical groups of photos&#x2014;try using just the left and right arrows to move from photo to photo. The first group relies on the browser&#39;s spatial navigation algorithm whereas the second group uses CSS navigation, enabling the user to scroll through the photos with ease.</p>

<h2>Conclusion</h2>

<p>Particularly on devices with a simple set of directional keys, spatial navigation is a far more natural way of navigating a page than a simple &quot;jump to next/previous link&quot; approach – and with a sprinkling of CSS, developers can further tweak the order in which elements receive focus.</p>

