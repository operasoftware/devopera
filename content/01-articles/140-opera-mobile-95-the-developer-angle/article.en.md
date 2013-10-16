Title: Opera Mobile 9.5 - the developer angle
----
Date: 2008-07-17 07:58:47
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<p class="note">This article is <strong>deprecated</strong>; instead, we refer to <a href="http://dev.opera.com/articles/view/the-mobile-web-optimization-guide/">Mobile-friendly: The mobile web optimization guide</a> and <a href="http://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/">An introduction to meta viewport and @viewport</a>.</p>

<h2>Introduction</h2>

<p>Opera Mobile 9.5 beta 2 has just come out on Windows Mobile, plus beta 1 on UIQ! It comes with many exciting new user features such as:</p>

<ul>

<li>Faster speed: With the Presto rendering engine, Opera Mobile 9.5 is more than 2.5 times faster than Internet Explorer Mobile.</li>
<li>Great new look and feel: The beautiful UI, animation and transitions in Opera Mobile 9.5 set a new standard for the mobile browsing experience—see Figure 1 for an example screenshot.</li>
<li>Support for Opera Widgets: Opera Mobile supports Opera Widgets, Opera&#39;s compact desktop applications built using web standards. Browse to the <a href="http://widgets.opera.com">Opera Widgets homepage</a> using Opera Mobile 9.5 and try some out.</li>  

</ul>

<img src="http://forum-test.oslo.osa/kirby/content/articles/140-opera-mobile-95-the-developer-angle/95UI.gif" alt="Screenshot of the Opera Mobile 9.5 user interface" />

<p class="comment">Figure 1: Opera Mobile 9.5’s new UI.</p>

<p>This is all well and good, but you’re probably wondering how Opera Mobile 9.5 will affect your work as a designer or developer. There are certainly some interesting new features to check out and points to be aware of to optimize sites so they display better in Opera Mobile 9.5.  Below I’ll cover the Opera Mobile 9.5 user agent string, web standards support, cross device development techniques and Opera Dragonfly support (ie how to use it to debug sites directly on mobile).</p>

<p><a href="code_download.zip">Download all the code examples for this article</a>.</p>

<h2>Opera Mobile 9.5 user agent string</h2>

<p>Opera Mobile 9.5 identifies using the following string:</p>

<pre>Opera/9.51 (Microsoft Windows; PPC; Opera Mobi/<em>buildnumber</em>; U; en)</pre>

<p>Where <em>buildnumber</em> is replaced by the actual four digit build number. Note that the <code>PPC</code> part of the string is read from the registry on the phone; on some phones it may be modified to something different by the handset manufacturer, e.g. <code>HTC PPC</code>.</p>

<h2>Web standards support</h2>

<p>This is the easy part—Opera Mobile 9.5 is powered by the same core rendering engine as Opera Desktop 9.5, so its web standards support is basically the same as <a href="http://dev.opera.com/articles/view/opera-9-5-the-next-generation-of-web-s/" title="Opera 9.5 standards support">Opera 9.5 desktop’s standards support</a>.</p>

<h2>Cross device development techniques</h2>

<p>Opera Mobile 9.5’s standards support means that it can run any web site that you would expect the major desktop browsers to support—it is a fully-featured web browser running on a mobile device. There are however physical constraints to be aware of such as screen size, which can result in a different user experience when your site is viewed on mobile devices. These call for some extra thought when developing your web sites:</p>

<ul>
<li>Create sensible layouts: this applies for web pages as a whole—having sensible, simple layouts increases usability on desktop browsers as well as mobile browsers, but it is particularly important for page elements such as forms—you should aim to keep them small enough so that each section of the form will fit on a single screen, and allow the user to select their options from lists wherever possible, to keep inputting text down to a minimum.</li>
<li>Use different controls: You can’t always guarantee that mobile users are controlling your site with a (virtual) mouse, and it is a lot more diffficult to enter large amounts of data using a mobile keypad, therefore you should plan carefully, for example by allowing the user to select options from a list whever possible, rather than having to type in all the data they are required to specify.</li>
<li>Different screen sizes: Your viewport will obviously be a lot smaller on mobile devices than it is on desktop. The excellent zoom function of Opera Mobile 9.5 helps a great deal in navigation around large pages, but you can also employ techniques to make the mobile experience better, such as CSS 3 media queries, and the <code>viewport meta</code> tag. You’ll learn more about these below.</li>
</ul>


<h3>Sensible forms</h3>

<p>To make forms more usable on mobile browsers in general, you should if at all possible make them small enough to fit on a single screen, and allow the user to select the most popular options from <code>select</code> form controls, rather than expecting them to input all the choices—text input is always going to be fiddly on a mobile phone, so the less they have to do it, the better! Let’s look at a simple form example that allows the user to enter some personal details:</p>

<pre>&lt;form action=&quot;forms_example1.html&quot;&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Personal details&lt;/legend&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;label for=&quot;name&quot;&gt;First and last name:&lt;/label&gt; &lt;input type=&quot;text&quot; name=&quot;name&quot; id=&quot;name&quot; value=&quot;&quot; /&gt;&lt;label for=&quot;age&quot;&gt;Age:&lt;/label&gt; &lt;input type=&quot;text&quot; name=&quot;age&quot; id=&quot;age&quot; value=&quot;&quot; /&gt;&lt;/li&gt;
      &lt;li&gt;&lt;label for=&quot;bio&quot;&gt;Biography:&lt;/label&gt; &lt;textarea name=&quot;bio&quot; id=&quot;bio&quot; cols=&quot;25&quot; rows=&quot;3&quot;&gt;&lt;/textarea&gt;&lt;/li&gt;
      &lt;li&gt;&lt;label for=&quot;country&quot;&gt;Home country:&lt;/label&gt; &lt;input type=&quot;text&quot; name=&quot;country&quot; id=&quot;country&quot; value=&quot;&quot; /&gt;&lt;/li&gt;
      &lt;li&gt;&lt;input type=&quot;submit&quot; value=&quot;submit&quot; /&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;</pre>

<p>You can <a href="forms_example1.html">play with this form example</a> here. This looks ok for an unstyled form, but try using this on a mobile browser, and you might find it to be a bit of a pain. (If you don&#39;t have a mobile browser to hand, use View &gt; Small screen in the Opera desktop browser.) Firstly, it won’t fit on some screens without horizontal scrolling. Secondly, the user has to enter a lot of information, both in the <code>Biography</code> and and <code>Home country</code> fields. How can you make this work a bit better on mobile devices? Let’s have a look at a slightly updated version of the example:</p>


<pre>&lt;form action=&quot;forms_example2.html&quot;&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Personal details&lt;/legend&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;label for=&quot;name&quot;&gt;First and last name:&lt;/label&gt; &lt;input type=&quot;text&quot; name=&quot;name&quot; id=&quot;name&quot; value=&quot;&quot; /&gt;&lt;/li&gt;
      &lt;li&gt;&lt;label for=&quot;age&quot;&gt;Age:&lt;/label&gt; &lt;input type=&quot;text&quot; name=&quot;age&quot; id=&quot;age&quot; value=&quot;&quot; /&gt;&lt;/li&gt;
      &lt;li&gt;
        &lt;p&gt;Interests (tick all that apply):&lt;/p&gt;
        &lt;p&gt;&lt;label for=&quot;music&quot;&gt;Music:&lt;/label&gt; &lt;input type=&quot;checkbox&quot; name=&quot;music&quot; id=&quot;music&quot; /&gt;&lt;/p&gt;
        &lt;p&gt;&lt;label for=&quot;sports&quot;&gt;Sports:&lt;/label&gt; &lt;input type=&quot;checkbox&quot; name=&quot;sports&quot; id=&quot;sports&quot; /&gt;&lt;/p&gt;
        &lt;p&gt;&lt;label for=&quot;travel&quot;&gt;Travel:&lt;/label&gt; &lt;input type=&quot;checkbox&quot; name=&quot;travel&quot; id=&quot;travel&quot; /&gt;&lt;/p&gt;
        &lt;p&gt;&lt;label for=&quot;fooddrink&quot;&gt;Food and drink:&lt;/label&gt; &lt;input type=&quot;checkbox&quot; name=&quot;fooddrink&quot; id=&quot;fooddrink&quot; /&gt;&lt;/p&gt;
        &lt;p&gt;&lt;label for=&quot;gaming&quot;&gt;Computer gaming:&lt;/label&gt; &lt;input type=&quot;checkbox&quot; name=&quot;gaming&quot; id=&quot;gaming&quot; /&gt;&lt;/p&gt;
        &lt;p&gt;&lt;label for=&quot;otherinterest&quot;&gt;Other interest:&lt;/label&gt; &lt;input type=&quot;text&quot; name=&quot;otherinterest&quot; id=&quot;otherinterest&quot; value=&quot;&quot; /&gt;&lt;/p&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;p&gt;
          &lt;label for=&quot;country&quot;&gt;Home country:&lt;/label&gt;
          &lt;select id=&quot;country&quot;&gt;
            &lt;option value=&quot;UK&quot;&gt;United Kindom&lt;/option&gt;
            &lt;option value=&quot;USA&quot;&gt;USA&lt;/option&gt;
            &lt;option value=&quot;Norway&quot;&gt;Norway&lt;/option&gt;
            &lt;option value=&quot;Canada&quot;&gt;Canada&lt;/option&gt;
            &lt;option value=&quot;Germany&quot;&gt;Germany&lt;/option&gt;
            &lt;option value=&quot;Netherlands&quot;&gt;The Netherlands&lt;/option&gt;
            &lt;option value=&quot;Belgium&quot;&gt;Belgium&lt;/option&gt;
          &lt;/select&gt;
        &lt;/p&gt;
        &lt;p&gt;
          &lt;label for=&quot;othercountry&quot;&gt;Other country:&lt;/label&gt; &lt;input type=&quot;text&quot; name=&quot;othercountry&quot; id=&quot;othercountry&quot; value=&quot;&quot; /&gt;
        &lt;/p&gt;
      &lt;/li&gt;
      &lt;li&gt;&lt;input type=&quot;submit&quot; value=&quot;submit&quot; /&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;</pre>

<p><a href="forms_example2.html">Play with the updated form example</a> to see how it works. Here I have made sure that everything is in a fairly thin column, so that it should work well on most mobile screens without horizontal scrolling. In addition, I have replaced the biography section with a section allowing the user to pick their interests via checkboxes, with a text field to allow them to enter another interest they may have that isn’t on the list. Interests is basically what I wanted to find out about them, so this is an easier way to do it than expecting them to type in a large passage via a mobile keypad.</p>

<p>Similarly, for the <code>Home country</code> selection, I have allowed the user to select the most popular options from a drop-down list, rather than having to type it in. A text field is provided in case they want to specify a different option. </p>

<h3>Of media types, media queries and viewport</h3>

<p>There are three ways in which you can optimize style for different devices and media—media types, media queries and the <code>viewport meta</code> tag. In this section I will look at each one briefly and comment on how it is supported in Opera Mobile 9.5, before then looking at how the three can be used together to provide a cross-browser web page, one that should display sensibly across most devices/browsers.</p>

<h4>Media types</h4>

<p>Everyone who has been doing web development using CSS should know what this means by now—basically, you can specify that different stylesheets should be used when the page is being displayed via different media, such as on the screen, on the printed page, or on handheld devices. These are specified using something like the following:</p>

<pre>&lt;link rel=&quot;stylesheet&quot; href=&quot;screenstyle.css&quot; type=&quot;text/css&quot; media=&quot;screen&quot; /&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;handheldstyle.css&quot; type=&quot;text/css&quot; media=&quot;handheld&quot; /&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;printstyle.css&quot; type=&quot;text/css&quot; media=&quot;print&quot; /&gt;</pre>

<p>The one most relevant to mobile devices is <code>handheld</code>, and sure enough many mobile browsers will use the <code>handheld</code> styles by default, allowing developers to automatically serve a more suitable stylesheet to mobile devices, e.g. one with a simplified layout that takes into account a smaller screen size and limited CSS capabilities.</p>

<p>Opera Mobile 9.5 is a bit different—we made the decision to not use the <code>handheld</code> stylesheet by default because it is a fully-featured web browser, capable of pretty much everything a desktop browser can do, so why dumb it down to a basic stylesheet? If “Mobile view” is switched on however, handheld stylesheets are applied.</p>

<h4>Media queries</h4>

<p>Media queries are a CSS 3 construct that work in a similar fashion to IE conditional comments, except they are a cross-browser standard rather than a proprietary technology. You wrap a set of CSS rules in a condition so that they are only applied to the markup if the condition is met by the browser viewing the page, for example “only apply these rules if the device viewport width is less than 480 pixels”. The following example specifies this rule:</p>

<pre>img {
  margin: 0 0 10px 10px;
  float: right;
}

@media all and (max-device-width: 480px) {
  img {
    margin: 10px auto;
    float: none;
    display: block;
  }
}</pre>

<p>On devices with only a small screen width available, it makes sense to just display images below text, not float them to the right. Opera Mobile 9.5 has full support for media queries.</p>

<h4>The viewport meta tag</h4>

<p>The <code>viewport meta</code> tag contains information about the preferred settings of the viewport for viewing the HTML page it is contained within. Just like any other <code>meta</code> tag, <code>viewport</code> sits inside the <code>head</code> element of your HTML page—browsers that support it use the information to display the web page more appropriately for that device, while browsers that don’t simply ignore it. It was originally created by Apple to improve the way web pages display on the iPhone, but we have added support for it in Opera Mobile 9.5 because it is a good way of optimizing display information for different mobile devices. The tag looks like so:</p>

<pre>&lt;meta name = &quot;viewport&quot; content = &quot;width = device-width, height = device-height&quot; /&gt;</pre>

<p>All it contains is the <code>meta</code> attribute, which specifies that this is a <code>viewport</code> meta tag, and the <code>content</code> attribute, which contains a comma-delimited list of the different values you want to specify for this page. The different pieces of information you can specify are as follows:</p>

<ul>
<li><code>width</code> and <code>height</code>: These specify the width and height that the viewport should be set at for this web page. The values can be set in pixels, or you can use the <code>device-width</code> and <code>device-height</code> values, respectively, to specify that the width and height should be set as the full width and height of the device’s screen. The default value of <code>width</code> is 980 pixels, and it can be set from 200 to 10,000 pixels. The default value of <code>height</code> is calculated from the width of the device and its aspect ratio, and it can be set from 223 to 10,000 pixels.</li>
<li><code>initial-scale</code>: This sets the initial scale of the web page when it is first displayed. By default it just fills up the whole screen of the device, unless you deliberately set it otherwise.</li>
<li><code>minimum-scale</code> and <code>maximum-scale</code>: These specify the minimum and maximum amounts that the user is allowed to zoom in and out, their values being multipliers. <code>minimum-scale</code> has a default value of 0.25, and its value can range from just above zero to 10.0. <code>maximum-scale</code>’s value can also range from just above zero to 10.0.</li>
<li><code>user-scalable</code>: Specifies whether the user is allowed to zoom in and out—possible values are <code>yes</code> and <code>no</code>, with <code>yes</code> being the default.</li>
</ul>

<p>Opera Mobile 9.5 fully supports the <code>viewport meta</code> tag, with a few notable specific behaviours. It ignores <code>user-scalable</code>, <code>minimum-scale</code> and <code>maximum-scale</code> because we believe that zooming is a browser feature that should always be available for users. Also, as the presence of the <code>viewport meta</code> tag in the page’s <code>head</code> section indicates the author has taken care of optimizing for mobile, small screen rendering is not applied. This means that <code>viewport</code>-enabled pages will look exactly the same whether “Mobile view” is switched on or off.</p>

<p>It is recommended that <code>width</code> and <code>height</code> values are not hardcoded for a single device, such as the iPhone; instead you should set their values to <code>device-width</code> and <code>device-height</code>, so that your pages also work nicely on VGA, QVGA, WVGA and WQVGA devices.</p>

<h4>Using them in harmony</h4>

<p>You should try to limit the use of separate, device-specific URLs as much as possible: you can optimize the same page for a variety of different devices using a smart combination of the above three features. To demonstrate using them together, let’s adapt the example shown above, adding some features to it. <a href="forms_example3_default.html">You can view the basic example here</a>. The HTML for it looks like so:</p>

<pre>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;&gt;
&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;
  &lt;head&gt;
    &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot; /&gt;
    &lt;title&gt;Simple form example 3&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;screenstyle.css&quot; type=&quot;text/css&quot; media=&quot;screen&quot; /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;wrapper&quot;&gt;
      &lt;h1&gt;Welcome to summer camp!&lt;/h1&gt;
      &lt;img src=&quot;http://forum-test.oslo.osa/kirby/content/articles/140-opera-mobile-95-the-developer-angle/camp_mini.gif&quot; alt=&quot;&quot; /&gt;

      &lt;p&gt;Hi there, and welcome to summer camp—we are very glad to have you staying with us! To make your stay as fun as possible, we’d like to customise our offerings to your needs and and preferences. Fill in the following form to tell us a little about yourself, so we can give you the activities you’ll most enjoy, and pair you up with people you’ll have something in common with initially. After the initial settling in period, you can then go on to talk to others, and find more out about other cultures. Let a member of staff know if there is anything you need.&lt;/p&gt;

      &lt;form action=&quot;forms_example1.html&quot;&gt;
        &lt;fieldset&gt;
          &lt;legend&gt;Personal details&lt;/legend&gt;
          &lt;ul&gt;
            &lt;li class=&quot;interest&quot;&gt;&lt;label for=&quot;name&quot;&gt;First and last name:&lt;/label&gt; &lt;input type=&quot;text&quot; name=&quot;name&quot; id=&quot;name&quot; value=&quot;&quot; /&gt;&lt;/li&gt;
            &lt;li id=&quot;spacer&quot; class=&quot;interest&quot;&gt;&lt;label for=&quot;age&quot;&gt;Age:&lt;/label&gt; &lt;input type=&quot;text&quot; name=&quot;age&quot; id=&quot;age&quot; value=&quot;&quot; /&gt;&lt;/li&gt;
            &lt;li class=&quot;divider&quot;&gt;
              &lt;p&gt;Interests (tick all that apply):&lt;/p&gt;
              &lt;p class=&quot;interest&quot;&gt;&lt;label for=&quot;music&quot;&gt;Music:&lt;/label&gt; &lt;input type=&quot;checkbox&quot; name=&quot;music&quot; id=&quot;music&quot; /&gt;&lt;/p&gt;
              &lt;p class=&quot;interest&quot;&gt;&lt;label for=&quot;sports&quot;&gt;Sports:&lt;/label&gt; &lt;input type=&quot;checkbox&quot; name=&quot;sports&quot; id=&quot;sports&quot; /&gt;&lt;/p&gt;
              &lt;p class=&quot;interest&quot;&gt;&lt;label for=&quot;travel&quot;&gt;Travel:&lt;/label&gt; &lt;input type=&quot;checkbox&quot; name=&quot;travel&quot; id=&quot;travel&quot; /&gt;&lt;/p&gt;
              &lt;p class=&quot;interest&quot;&gt;&lt;label for=&quot;fooddrink&quot;&gt;Food and drink:&lt;/label&gt; &lt;input type=&quot;checkbox&quot; name=&quot;fooddrink&quot; id=&quot;fooddrink&quot; /&gt;&lt;/p&gt;
              &lt;p class=&quot;interest&quot;&gt;&lt;label for=&quot;gaming&quot;&gt;Computer gaming:&lt;/label&gt; &lt;input type=&quot;checkbox&quot; name=&quot;gaming&quot; id=&quot;gaming&quot; /&gt;&lt;/p&gt;               &lt;p class=&quot;interest&quot;&gt;&lt;label for=&quot;otherinterest&quot;&gt;Other interest:&lt;/label&gt; &lt;input type=&quot;text&quot; name=&quot;otherinterest&quot; id=&quot;otherinterest&quot; value=&quot;&quot; /&gt;&lt;/p&gt;
            &lt;/li&gt;
            &lt;li class=&quot;divider interest&quot;&gt;
              &lt;p&gt;&lt;label for=&quot;country&quot;&gt;Home country:&lt;/label&gt;
              &lt;select id=&quot;country&quot;&gt;
                &lt;option value=&quot;UK&quot;&gt;United Kindom&lt;/option&gt;
                &lt;option value=&quot;USA&quot;&gt;USA&lt;/option&gt;
                &lt;option value=&quot;Norway&quot;&gt;Norway&lt;/option&gt;
                &lt;option value=&quot;Canada&quot;&gt;Canada&lt;/option&gt;
                &lt;option value=&quot;Germany&quot;&gt;Germany&lt;/option&gt;
                &lt;option value=&quot;Netherlands&quot;&gt;The Netherlands&lt;/option&gt;
                &lt;option value=&quot;Belgium&quot;&gt;Belgium&lt;/option&gt;
              &lt;/select&gt;
              &lt;/p&gt;
              &lt;p&gt;&lt;label for=&quot;othercountry&quot;&gt;Other country:&lt;/label&gt; &lt;input type=&quot;text&quot; name=&quot;othercountry&quot; id=&quot;othercountry&quot; value=&quot;&quot; /&gt;&lt;/p&gt;
            &lt;/li&gt;
            &lt;li&gt;&lt;input type=&quot;submit&quot; value=&quot;submit&quot; /&gt;&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/fieldset&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>And the CSS looks like so:</p>

<pre>#wrapper {

  width: 600px;
  position: absolute;
  top: 20px;
  left: 25%;
  background-color: #FFCE7B;
  padding: 20px;
  font-family: &quot;trebuchet MS&quot;, verdana, helvetica ;
  font-size:80%;

}

h1 {

  font-family: helvetica, arial, tahoma ;

}

img {

  float:right;

}

form {

  width: 450px;
  margin-left: 30px;
  margin-right: 50px;
  background-image: url(&quot;camp.gif&quot;);
  background-repeat: no-repeat;
  background-position: top;

}

li {

  list-style-type: none;

}

#spacer {

  padding-bottom: 10px;

}

.divider {

  border-top: black 1px solid;
  padding-top: 5px;

}

.interest {

  text-align: right;
  padding-right: 100px;

}</pre>

<p>This example is ok as it stands, but you could do several things to optimize it for mobile devices (<a href="forms_example3.html">view the final example in all its glory</a>).</p>

<p>First, I’ll add a <code>handheld</code> stylesheet using the following line:</p>

<pre>&lt;link rel=&quot;stylesheet&quot; href=&quot;handheldstyle.css&quot; type=&quot;text/css&quot; media=&quot;handheld&quot; /&gt;</pre>

<p>In this stylesheet (see handheldstyle.css in the code download), I’ve basically removed most of the layout and styling stuff to simplify it (many mobile devices won’t support the fonts I specified in the main stylesheet, for example) and keep file size down, removed the CSS background image to further reduce download size, and decreased the width of the content. Anything else should gracefully degrade if if meets a browser that doesn’t support it (ie, just be ignored). You can quickly test how the handheld stylesheet styles the page by selecting “View &gt; Small Screen” in the Opera Desktop menu bar, if you don’t have a suitable mobile browser available.</p>

<p>Next, I’ll add the following <code>viewport meta</code> tag into the <code>head</code> of the HTML:</p>

<pre>&lt;meta name = &quot;viewport&quot; content = &quot;width = device-width, height = device-height&quot; /&gt;</pre>

<p>This ensures that, on browsers that understand this tag, such as Opera Mobile 9.5, the <code>width</code> and <code>height</code> are automatically set to the width and height of the device, meaning that it will fit in nicely.</p>

<p>Finally, I will add a media query to the bottom of the screen stylesheet, to optimize the page display for browsers that don’t select the <code>handheld</code> media type by default. This is as follows:</p>

<pre>@media all and (max-device-width: 480px) {

  #wrapper {

    position: static;
    width: auto;
  }
  
  img {

    float:none;

  }

  form {
  
    width: auto;
    background-image: none;
  
  }
 
 .interest {

    text-align: left;
    padding-right: 0px;

  } 

}</pre>

<p>This basically just cancels out a lot of the positioning information (as well as the background image), to effect a much simpler layout when the maximum device viewport width is below 480 pixels.</p>

<p><a href="forms_example3.html">Try the example out</a> on any devices you have at hand. Figure 2 shows a side-by-side comparison of the same page viewed in Opera desktop 9.5, and Opera Mini 4.1.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/140-opera-mobile-95-the-developer-angle/desktopmobile.gif" alt="The example page shown in both Opera 9.5 desktop and Opera Mini 4.1" />

<p class="comment">Figure 2: The example page shown in both Opera 9.5 desktop and Opera Mini 4.1.</p>
 


<h2>Opera Dragonfly support</h2>

<p>Using Opera Dragonfly’s new remote debugging feature, you can debug content running directly in an instance of Opera Mobile 9.5, from an instance of Opera Desktop 9.5  (with Opera Dragonfly running.) This is an incredibly useful feature for developers wishing to check out their sites on mobile. To find out <a href="http://dev.opera.com/articles/view/remote-debugging-with-opera-dragonfly/">how to set up remote debugging and debug sites running on Opera Mobile 9.5</a>, check out David&#39;s article. There is also an article available to give you a <a href="http://dev.opera.com/articles/view/introduction-to-opera-dragonfly/">guided tour of Opera Dragonfly</a>, and take you through the basics.</p>

<h2>Opera Widgets support</h2>

<p>Opera Widgets are cross platform and cross device applications that run on top of any browser that supports them. They are made with web technologies, therefore you can develop Opera Widgets quickly and easily and deploy them to different devices with a minimum amount of adaptation.</p>

<p>The good news is that Opera Mobile 9.5 now has full support for these. You can download hundreds of Opera widgets for free from the <a href="http://widgets.opera.com">Opera Widget homepage</a>, and find a lot more out about how develop them in the <a href="http://dev.opera.com/articles/view/opera-widgets-sdk/">Opera Widgets SDK</a>.</p>


 <h2>Summary</h2>
 
 <p>I hope you have enjoyed this developer-centric tour of Opera Mobile 9.5. Let us know what you think, in the discussion forum for this article, or the Opera Forums.</p>
