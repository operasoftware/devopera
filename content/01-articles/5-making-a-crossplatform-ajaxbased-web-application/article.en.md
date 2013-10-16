Title: Making a cross-platform AJAX-based  web application
----
Date: 2006-11-02 11:09:32
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - No Derivs 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-nd/2.5/
----
Text:

<div class="slide">
<h2 id="010-introduction-1"><span class="secno">1. </span>Introduction</h2>
<p>
I will go through how to make a full-blown widget that uses
AJAX technology. It fetches news from a newsfeed source, presents them
nicely to you, includes some eyecandy and of course lets you customize the
amount of news items, refresh time and which category of news you want to be
shown.
</p><p>
In addition, the widget will also be able to run as a regular client-side web application,
for instance on a cell phone or inside a desktop browser. I will use open
standards where possible, but some corner-cases might not be as cross-browser as
they might have been I had spent more resources on them. The widget is intended
to run in the Opera browser and for mobile surfing there are not any real
alternatives to Opera&#39;s browser.
</p>
<p>
Hopefully you have already worked your way through the <a href="http://dev.opera.com/articles/tags/widgets">tutorial</a> and played with simple <a href="http://widgets.opera.com/widget/4304">widgets</a>.
If not, you should do that to get familiar with them. You should also have some familiarity with HTML, JavaScript and CSS but you will still be able to learn a thing or two if you do not.
</p>

</div>

&lt;page&gt;<div class="slide">
<h2 id="020-structure-2"><span class="secno">2. </span>Structure</h2>
<p>
When making Web applications, just like when making normal applications, you want to separate the presentation from the program logic. This is mainly so that you can easily exchange things in the presentation or logic without affecting each other. In addition, sometimes you might want to have different presentations of the same application depending on situations, such as the device it is running on.
</p>
<p>With Web applications you get an additional layer in between for &quot;free&quot;. The program logic, that executes actions depending on user input or other conditions, is done in the script part of the application. The layout of the application, and how it looks to the user, you do in CSS. In between you can structure the hierarchy of various elements in your application using the structural nature of HTML.
</p>
<h3 id="020-structure-2-1"><span class="secno">2.1. </span>Hello Structure</h3>
<p>
An example would be having a &quot;Hello, World!&quot; text that is shown when clicking a button, letting it be red on screen media, and blue on handheld devices:
</p>
<pre><code>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot; &quot;http://www.w3.org/TR/xhtml1/xhtml1-strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;title&gt;Hello, World!&lt;/title&gt;

&lt;!-- layout starts --&gt;
&lt;style type=&quot;text/css&quot; media=&quot;handheld,screen&quot;&gt;
#result { display: none; }
&lt;/style&gt;
&lt;style type=&quot;text/css&quot; media=&quot;handheld&quot;&gt;
#result { color: blue; }
&lt;/style&gt;
&lt;style type=&quot;text/css&quot; media=&quot;screen&quot;&gt;
#result { color: red; }
&lt;/style&gt;
&lt;!-- layout ends --&gt;

&lt;!-- logic starts  --&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
function hello() { 
  document.getElementById(&quot;result&quot;).style.display=&quot;block&quot;; 
  document.getElementById(&quot;front&quot;).style.display=&quot;none&quot;;
}
window.onload = function() { document.getElementById(&quot;front&quot;).addEventListener(&quot;click&quot;,hello,false); }
&lt;/script&gt;
&lt;!-- logic ends --&gt;

&lt;/head&gt;

&lt;!-- structure starts --&gt;
&lt;body onload=&quot;init&quot;&gt;
&lt;div id=&quot;result&quot;&gt;Hello, World!&lt;/div&gt;
&lt;div id=&quot;front&quot;&gt;Click me!&lt;/div&gt;
&lt;/body&gt;
&lt;!-- structure ends --&gt;

&lt;/html&gt;</code></pre>
<p>
Ok, so it is a lot for a simple Hello, World, but once you start putting scripts and styles in respective files you would get something like:
</p>
<pre><code>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot; &quot;http://www.w3.org/TR/xhtml1/xhtml1-strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;title&gt;Hello, World!&lt;/title&gt;
&lt;!-- layout --&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; media=&quot;handheld,screen&quot; href=&quot;common.css&quot; /&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; media=&quot;handheld&quot; href=&quot;handheld.css&quot; /&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; media=&quot;screen&quot; href=&quot;screen.css&quot; /&gt;
&lt;!-- logic --&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;script.js&quot;&gt;
&lt;/head&gt;
&lt;!-- structure --&gt;
&lt;body&gt;
&lt;div id=&quot;result&quot;&gt;Hello, World!&lt;/div&gt;
&lt;div id=&quot;front&quot;&gt;Click me!&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>
And it is not bad at all. The more complex a Web application is or the less time you have to do things &quot;right&quot;, you might be tempted to mix stuff together like I have done myself. Sometimes it leaves you with less to type, or actually helps the readability, for instance by adding onclick=&quot;&quot; handlers directly at the elements, but the most pragmatic ones prefer to separate as much as possible, and I strive to do that myself.
</p>
<h3 id="020-structure-2-2"><span class="secno">2.2. </span>File structure</h3>
<p>
In addition to structuring the content itself I want to keep files apart and keep a neat structure so that it is easier to drop-in replace things, find things and even be able to share things among different projects. For instance the library script files in &quot;lib&quot; are symbolic links to a repository that have libraries shared among several projects, and as they evolve they are instantly updated on all projects. This is not always clever if you do massive updates and break compatibility but it is OK if you keep compatible regarding scripting libraries or share a set of images or other external sources.</p>
<p>
This is how the particular News Reader hierarchy looks:
</p>
<pre><code># project specific scripts
./scripts
./scripts/main.js
# shared scripts
./scripts/lib
./scripts/lib/florence.js
./scripts/lib/OAnimation.js
./scripts/lib/settings.js
# stylesheets
./styles
./styles/handheld.css
./styles/screen.css
# main document
./index.html
# images (yes, really)
./images
./images/logo.png
./images/webapp_settings_32.png
./images/hw_bottom.png
./images/sep_left.png
./images/sep_right.png
./images/webapp_update_32.png
./images/hw_middle.png
./images/hw_top.png
./images/sep_left_w.png
./images/sep_right_w.png
# a configuration file when packaging the file as a widget
./config.xml
</code></pre>

<h3 id="020-structure-2-3"><span class="secno">2.3. </span>The News Reader structure</h3>
<p>
As you can see it is quite a lot of markup, but not overwhelmingly much. You might also notice lack of 100% separation between logic and presentation. If you feel bold you might want to improve it yourself as an exercise to understanding the code. I will try to comment the parts inside the HTML itself, but it is mainly a division into a feed overview section, a single feed item view, and a preferences view. I have added some (probably not necessary) sugar and containers to ease the layout and animation parts.</p>

<pre><code>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 1.0 Transitional//EN&quot; &quot;http://www.w3.org/TR/xhtml1/xhtml1-loose.dtd&quot;&gt;
&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; xml:lang=&quot;en&quot; lang=&quot;en&quot;&gt;
&lt;head&gt;
&lt;title&gt;News Reader&lt;/title&gt;
&lt;style type=&quot;text/css&quot;&gt;
&lt;!-- Some initial style to take place before the browser is able to fetch the external files. 
     Remember network might be slow on handhelds --&gt;
#messages { top: 20%; color: blue; text-align: center; width: 100%; margin: auto;}
&lt;/style&gt;
&lt;!-- More styles for the two main medias --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;styles/handheld.css&quot; media=&quot;handheld&quot; /&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;styles/screen.css&quot; media=&quot;screen&quot; /&gt;
&lt;!-- Feed library --&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;scripts/lib/florence.js&quot;&gt;&lt;/script&gt;
&lt;!-- Settings library --&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;scripts/lib/settings.js&quot;&gt;&lt;/script&gt;
&lt;!-- Animation library from http://oxine.opera.com/widgets/libraries/animation.zip --&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;scripts/lib/OAnimation.js&quot;&gt;&lt;/script&gt;
&lt;!-- Main program --&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;scripts/main.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;!-- call the main code when the content is done loading --&gt;
&lt;body onload=&quot;main()&quot;&gt;
&lt;!-- the top container with a logo --&gt;
  &lt;div id=&quot;appTop&quot;&gt;
    &lt;div id=&quot;appTitle&quot;&gt;
      &lt;img id=&quot;logoImage&quot; src=&quot;images/logo.png&quot; border=&quot;0&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;!-- The main content --&gt;
  &lt;div id=&quot;appContent&quot;&gt;
    &lt;!-- An eyecandy separator with two spans to add a fade out effect on both sides --&gt;
    &lt;div class=&quot;separator&quot; id=&quot;sep_top&quot;&gt;&lt;span class=&quot;sep_left&quot;&gt;&lt;/span&gt;&lt;span class=&quot;sep_right&quot;&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;!-- A container for messages to the user --&gt;
    &lt;div id=&quot;messages&quot;&gt;Loading...&lt;/div&gt;
    &lt;!-- The view where we list all items --&gt;
    &lt;div id=&quot;feedItemsView&quot; style=&quot;display: none;&quot;&gt;
      &lt;!-- We will add an element for each item inside this container, 
           We need a container to be able to animate the items out of the view 
           but not let the page itself expand --&gt;
      &lt;div id=&quot;feedItems&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    
    &lt;!-- View for a single feed item, Should not display when we open the application 
         and before external stylesheets have loaded--&gt;
    &lt;div id=&quot;singleFeedItemView&quot; style=&quot;display: none;&quot;&gt;
      &lt;!-- A link to # so that we end up at the top of the page when going back to view all items --&gt;
      &lt;a href=&quot;#&quot; id=&quot;singleFeedItemMenu&quot;&gt;&#x2022; Back to more news&lt;/a&gt;
      &lt;!-- a single feed item container --&gt;
      &lt;div id=&quot;singleFeedItem&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- The settings view which also should not be displayed when loading the application --&gt;
    &lt;div id=&quot;settingsView&quot; style=&quot;display: none;&quot;&gt;
      &lt;!-- a sub container to add space and more in addition --&gt;
      &lt;div id=&quot;settings&quot;&gt;
        &lt;!-- a form with various settings that we should be able to submit. 
             It should not really reload a new page though so we return false--&gt;
        &lt;form name=&quot;settingsForm&quot; onSubmit=&quot;return false;&quot;&gt;
          &lt;!-- a field to add search terms --&gt;
          &lt;p&gt;Shows news containing:&lt;br /&gt;&lt;input type=&quot;text&quot; id=&quot;tags&quot;&gt;&lt;/p&gt;
          &lt;!-- amount of news items that should be shown (and fetched) --&gt;
          &lt;p&gt;News items:&lt;br /&gt;
            &lt;select id=&quot;noItems&quot;&gt;
              &lt;option value=&quot;5&quot;&gt;5&lt;/option&gt;
              &lt;option value=&quot;6&quot;&gt;6&lt;/option&gt;
              &lt;option value=&quot;7&quot;&gt;7&lt;/option&gt;
              &lt;option value=&quot;8&quot;&gt;8&lt;/option&gt;
              &lt;option value=&quot;9&quot;&gt;9&lt;/option&gt;
              &lt;option value=&quot;10&quot;&gt;10&lt;/option&gt;
              &lt;option value=&quot;15&quot;&gt;15&lt;/option&gt;
              &lt;option value=&quot;20&quot;&gt;20&lt;/option&gt;
            &lt;/select&gt;
          &lt;/p&gt;
          &lt;!-- how often should a feed be refreshed --&gt;
          &lt;p&gt;
          &lt;label for=&quot;refreshPeriod&quot;&gt;Refresh:&lt;/label&gt; &lt;br /&gt;
          &lt;select id=&quot;refreshPeriod&quot;&gt;
            &lt;option value=&quot;15&quot;&gt;15 mins&lt;/option&gt;
            &lt;option value=&quot;30&quot;&gt;30 mins&lt;/option&gt;
            &lt;option value=&quot;45&quot;&gt;45 mins&lt;/option&gt;
            &lt;option value=&quot;60&quot;&gt;1 hour&lt;/option&gt;
            &lt;option value=&quot;120&quot;&gt;2 hours&lt;/option&gt;
          &lt;/select&gt;
        &lt;/p&gt;
        &lt;!-- Some news sources allows to sort either by normal significance (pageRank etc.) or simply by date --&gt;
        &lt;p&gt;
          &lt;label for=&quot;sort&quot;&gt;Sort by:&lt;/label&gt; &lt;br /&gt;
          &lt;select id=&quot;sort&quot;&gt;
            &lt;option value=&quot;relevance&quot;&gt;relevance&lt;/option&gt;
            &lt;option value=&quot;date&quot;&gt;date&lt;/option&gt;
          &lt;/select&gt;
        &lt;/p&gt;
        &lt;!-- Buttons for saving settings or leave settings view --&gt;
        &lt;p id=&quot;saveButton&quot;&gt;
          &lt;button id=&quot;save&quot; onClick=&quot;toggleSettingsView();saveSettings();&quot;&gt;Save&lt;/button&gt;
          &lt;button id=&quot;save&quot; onClick=&quot;toggleSettingsView();&quot;&gt;Cancel&lt;/button&gt;
        &lt;/p&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;!-- The bottom part of the application, the same type of separator 
       and two buttons for update and enter settings that are always shown --&gt;
  &lt;div id=&quot;bottom&quot;&gt;
    &lt;div class=&quot;separator&quot; id=&quot;sep_bottom&quot;&gt;&lt;span class=&quot;sep_left&quot;&gt;&lt;/span&gt;&lt;span class=&quot;sep_right&quot;&gt;&lt;/span&gt;&lt;/div&gt;
      &lt;div id=&quot;buttons&quot;&gt;
        &lt;b&gt;Settings&lt;/b&gt;
        &lt;a href=&quot;&quot; id=&quot;settingsLink&quot;&gt;&lt;img class=&quot;buttonImage&quot; src=&quot;images/webapp_settings_32.png&quot; /&gt;&lt;/a&gt;
        &lt;a href=&quot;&quot; id=&quot;updateLink&quot;&gt;&lt;img class=&quot;buttonImage&quot; src=&quot;images/webapp_update_32.png&quot; /&gt;&lt;/a&gt;
        &lt;b&gt;Update&lt;/b&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div id=&quot;appBottom&quot;&gt;&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>
As you can see it is not very complicated but it is the heart of the application. You should think of how you structure your interface and how the various elements depend of each other when writing the HTML. I have also added some default actions on clicking and similar just out of lazyness instead of adding them in the program logic. On the other hand it&#39;s easier to see what the various elements are supposed to do.</p>
<p>You might also have noticed that I have modularized the program logic a bit by putting the common parts that I might use in other projects inside a lib directory as mentioned earlier. In addition I have added ids to most of the elements so they are reachable by the program logic for animation effects and alter values inside the elements. Now let&#39;s look at how we can make all this look nice.
</p>
</div>

&lt;page&gt;<div class="slide">
<h2 id="030-layout-3"><span class="secno">3. </span>Layout</h2>
<p>
Like I mentioned earlier most of our layout is done in CSS. I have already set some default styles to some of the elements to avoid repainting. This is specially true for devices that are on slow networks like handhelds tend to be. Ideally all layout could have gone in the CSS files and I could have used classes to indicate whether they are active or not and change this with javascript, but it is slicker in my opinion to ensure that things do not change too much around on the initial loading.</p>

<p>I want the application to look nice in both handhelds, which tend to have small resolutions, and on a desktop, where there is more room for eyecandy. On handhelds the information itself is much more important due to the harder navigation, the lack of resources to maintain lots of extra images, and the smaller resolution.</p>

<p>On the desktop I want to make an application that is appealing to the user and can take advantage of the bigger size. The desktop version is designed as a widget solution, however, so there is not too much space unless you want to be rude and take large amounts of space on the user&#39;s desktop. In addition widgets are deployed with a hardcoded size so one needs to use a reasonable size that is useful on most desktop resolutions.</p>

<p>Both of the stylesheets share a set of common layout properties but I have still decided to use two separate stylesheets and hence many things might overlap and be identical. This is not the end of the world however and led me to experiment with the layout while developing till the end. I could have taken out what ended up as identical and put in a shared stylesheet, but I chose not to. You may want to take the alternative approach.</p>

<h3 id="030-layout-3-1"><span class="secno">3.1. </span>Handheld layout</h3>
<img class="center" src="http://forum-test.oslo.osa/kirby/content/articles/5-making-a-crossplatform-ajaxbased-web-application/googleNews_handheld.png" alt="googleNews in handheld media" /><p>What you run into the most often when making applications for handheld are two things, the first is the lack of space to play with, and the second is the neccessity of making your application be easily to navigate in. You do not have the luxury of pointing devices and you need to take into consideration that navigation happens by moving through the order of elements layed out, and simple scrolling.</p>

<p>If you are aware of that the more choices a user is given the harder its to navigate, think of how it much worse it becomes when you might need to navigate through all options to go from one item to another one. You might add shortcuts and other nice things, but it is safest to assume that a simple arrowkey and a selection button is all you have. If you want a user to use your application, make it easy to use.</p>

<p>The lack of space forces you to cram things together or think ahead on how to divide information. But if you make things too small or have too much information at one place the user might not be able to read or navigate or just be blinded by too much information at once. You should test your application a lot in regards of usability also on the slowest and smallest devices and ensure it is still usable.</p>

<p>Here are two video captures of the application running on a mobile device:</p>
<ul><li><a href="AJAX1.avi">News reader with Google as source</a></li>
<li><a href="AJAX2.avi">News reader with Mobile News as source</a></li>
</ul>

<pre><code>body { 
  background-color: #ffffff; 
  font-family: sansserif, arial, helvetica; 
  margin: 0; 
  padding:0; 
  overflow: auto; /* we want the handheld to allow us to scroll down if we overflow */
  font-size: 0.7em; /* we make the default text a tad smaller, using em of course */
  }

.feedItem { 
  position: relative;
  margin: 0;
  padding: 0;
  }

.itemTitle, #singleFeedItemMenu, .itemTitleViewed { 
  /* some common styles for entries in the full view and the title in a single item view */
  margin: 2px 2px;
  padding: 0;
  display: block;
  color: darkblue;;
  text-decoration: none;
  font-weight: bold;
}

#singleFeedItemMenu { display: block; }

.itemTitleViewed { color: #990099; /* when a feed is viewed we mark it differently */ }

#singleFeedItemView { padding: 2px; position: relative; display: none; }
  
#singleFeedItem { margin: 2px; }

#feedItems { position: relative; padding: 2px; }
#feedItemsView { display: none; overflow: hidden;  padding: 0; margin: 0; }

/* the feeds items we get actually contain html, so we resize images 
   and do some massaging to fit the handheld medium */
#singleFeedItem img { max-width: 100%; display: block; margin: auto; float: none;}
#singleFeedItem &gt; a { font-size: 1em; font-weight: bold;}
#singleFeedItem font { font-size: 1em;}
#singleFeedItem &gt; a &gt; br { display: none;}
#singleFeedItem &gt; a &gt; font { display: block; margin: auto;}
#singleFeedItem &gt; br:first-child { display: none;}



/* This is a hack to avoid bein part of the navigation on Opera for Symbian. 
   Normally a context menu for all images pop up. 
   With this we ensure that the ensure that the outer element gets the 
   image&#39;s original size while we actually set the image as a background on the outer element */
#appTitle { 
  background-image: url(&#39;../images/logo.png&#39;); 
  background-repeat: no-repeat; 
  background-position: top center;
}
#logoImage { visibility: hidden;}


/* Make separators fade in and out on the sides. 
   The color can be changed as the images fade outwards to an opaque white, 
   making an fade effect. Makes it smoother to the eye yet separating content slightly.
.separator {
  margin: 0px auto;
  padding: 0;
  width: 95%;
  height: 2px;
  background-color: darkred;
  position: relative;
}

.sep_left {
  background-image: url(../images/sep_left.png);
  background-repeat: repeat-y;
  background-position: left;
  width: 10px; 
  height: 2px;
  left: 0;
  display: inline-block;
  float: left;
}

.sep_right {
  background-image: url(../images/sep_right.png);
  background-repeat: repeat-y;
  background-position: right;
  display: inline-block;
  width: 10px;
  height: 2px;
  right: 0;
  display: inline-block;
  float: right;
}

/* how should we present the messages */
#messages { color: darkgreen; text-align: center; width: 100%; margin: auto;}

/* the combination of these make the settings view stand apart &quot;floating&quot; on top, 
   at least originally, but then I needed more space. */
#settingsView { width: 100%; margin: auto; padding-top: 2px; position: absolute;
  text-align: center; visibility: hidden; overflow: auto; }
#settings { margin: 1px; padding: 0; background-color: #ffffff; border: 1px solid #999999; }

/* Make stuff smaller than default */
h1 { font-size: 0.7em; display: inline; margin: 2px; padding: 0; }
form { font-size: 0.5em; margin: 2px;}
form &gt; * { margin: 2px;}
button, input, select { font-size: 0.5em;}

/* we do not want that much air in the settings */
p br { display: none; }

/* buttons go in the center on handheld */
#bottom {
  text-align: center;
}

#buttons {
  margin: 0;
  padding: 2px;
}

.button {
  display: inline-block;
  background-repeat: no-repeat; 
  background-position: center center;
  border: 1px solid white;
}

#buttons * {
  vertical-align: middle;
}
</code></pre>

<p>You might dislike the usage of hardcoded pixel values like I have done, and I do normally that too. In this case I have mainly focused to have a good presentation on a 176x208 resolution, but it is still usable on slightly larger resolutions. However, for margins, borders and padding the use of non-relative sizes are acceptable. Open your application in Opera, press Shift+F11 to go to handheld mode, and resize window to ensure it still works OK on different resolutions.</p>

<h3 id="030-layout-3-2"><span class="secno">3.2. </span>Desktop layout</h3>

<img class="center" src="http://forum-test.oslo.osa/kirby/content/articles/5-making-a-crossplatform-ajaxbased-web-application/googleNews_screen.png" alt="googleNews in screen media" /><p>The desktop resolution and pointing devices gives you more freedom in how to place the various elements around, however for this example I have restricted myself to a hardcoded size set in the widget configuration. This makes it slightly easier to add eyecandy like picture without needing to add too much resizability, but still since the size is relatively small, one needs to still be generous regarding the usage of space.</p>
<p>There are some hidden tricks in both of the stylesheets in regards of positioning of feed items and overviews of feed items. This is to be able to do the animations in a smooth way. Also like mentioned, the styles have some common parts and could have probably share even more attributes if tailored better.</p>
<pre><code>body {
  font-family: sansserif, arial, helvetica; 
  margin: 0; 
  padding:0; 
  overflow: hidden; 
  font-size: 0.7em; 
  width: 300px; /* hard coded size */
  height: 600px;
}

/* Various background images to get the special look also more space between elements */
#appTop { 
  margin: 0;
  padding: 10px 0 5px 0;
  background: transparent url(../images/hw_top.png) scroll no-repeat top left;
  }

#appContent { 
  margin: 0;
  padding: 0 20px;
  overflow: hidden;
  background-image: url(../images/hw_middle.png);
  }
  
#bottom { margin: 0; padding: 0; }
  
#appBottom { 
  margin: 0;
  padding: 0;
  background: transparent url(../images/hw_bottom.png) scroll no-repeat top left;
  height: 23px;
  width: 300px;
  }

.feedItem { position: relative; margin: 0; padding: 0; }

.itemTitle, #singleFeedItemMenu, .itemTitleViewed { 
  margin: 2px 2px;
  padding: 0;
  display: block;
  color: darkblue;
  text-decoration: none;
  font-weight: bold;
}

#singleFeedItemMenu { display: block; }

.itemTitleViewed { color: #990099; }

#singleFeedItemView { padding: 2px; position: relative; display: none; }
  
#singleFeedItem { margin: 2px; }

#feedItems { position: relative; padding: 2px; }
#feedItemsView { display: none; overflow: hidden;  padding: 0; margin: 0;}

/* Still need to reformat some of the HTML in the feed items */
#singleFeedItem img { min-width: 100px; display: block; margin: auto; padding-right: 5px; max-width: 80%}
#singleFeedItem &gt; a { font-size: 1em; font-weight: bold;}
#singleFeedItem font { font-size: 1em;}
#singleFeedItem &gt; a &gt; br { display: none;}
#singleFeedItem &gt; a &gt; font { display: block; margin: auto;}
#singleFeedItem &gt; br:first-child { display: none;}

#appTitle { 
background-image: url(&#39;../images/logo.png&#39;); 
background-repeat: no-repeat; 
background-position: top left;
padding: 0;
margin: 0 20px 0 20px;
}

#logoImage { visibility: hidden;}

/* we use a slightly different picture for the fading since the background is not white in the widget */
.separator {
margin: 0px auto;
padding: 0;
width: 95%;
height: 2px;
background-color: darkred;
position: relative;
}

.sep_left {
background-image: url(../images/sep_left_w.png);
background-repeat: repeat-y;
background-position: left;
width: 10px; 
height: 2px;
left: 0;
display: inline-block;
float: left;
}
.sep_right {
background-image: url(../images/sep_right_w.png);
background-repeat: repeat-y;
background-position: right;
display: inline-block;
width: 10px;
height: 2px;
right: 0;
display: inline-block;
float: right;
}

#messages { color: darkgreen; text-align: center; width: 100%; margin: auto;}

#settingsView {
  width: auto;
  margin: auto;
  padding-top: 2px;
  text-align: center;
  visibility: hidden;
  overflow: auto;
  }
  
#settings { margin: 2px; }

/* we can have a bigger settings and buttons */
h1 { font-size: 1em;}
form { font-size: 1em;}
input, select { font-size: 1em;}

#buttons { margin: 0; padding: 8px 10px 0 10px; text-align: right; }

#buttons * { vertical-align: middle; }

/* Do not bother showing text on bottom buttons as the images are easy to identify */
#buttons b { display: none; }</code></pre>
</div>

&lt;page&gt;<div class="slide">
<h2 id="040-interface-4"><span class="secno">4. </span>Interface</h2>
<p>There are a lot of good rules for making interfaces, people study these for years and making a perfect interface is not easy. I will however try to point out a few things I had in mind when designing the way the application should work.</p>

<h3 id="040-interface-4-1"><span class="secno">4.1. </span>Do not surprise the user</h3>
<p>When designing a Web application the user interface is crucial. It&#39;s important that buttons and other interactive elements are clear on what they are supposed to do. Try to use terms that are exact and describe the action that will follow. Use common analogies that do what are expected. Blue underlined text is expected to be a clickable link. An icon with a disk, printer, circular arrow or gear are known to signify the action save, print out, reload/refresh or settings respectively.</p>

<p>Normally you want the interface to be rather atomic, that is, do not try to be too clever and do a lof of unexpected actions when a user expects a single action. Note that sometimes you might need to check certain preconditions after the user has clicked on something. However you might want to deactivate the button instead using techniques like removing the colors or lowering the opaqueness level. Keeping it simple is always a good rule.</p>

<p>When making Web applications that provide new features, there may be no common convention for how those features should be presented to the user, or interact with them. It might be tempting to experiment with alternative ways of doing things. Sometimes that might even succeed, but most of the time you will either scare away users or spend a lot of time teaching the users the new ways of interacting.</p>

<h3 id="040-interface-4-2"><span class="secno">4.2. </span>Do not be rude</h3>
<p>Especially when you are making widgets that behave like normal desktop applications, you want to take as little screen estate as possible from the user. Screen estate is expensive, so do not be too greedy with how much you use. If you really need large amounts of screen estate consider making various display modes that let the user minimize shrink or hide your application.</p>

<p>Also, be careful when popping up requesters, asking questions or notifying the users about things. For instance a user might not want to know every ten seconds that no new news items have arrived. They might be interested to know every now and then that some news items have arrived. If some backend server is down when fetching news items, how about trying a couple of times while just showing already downloaded data meanwhile. Networks are flaky, and the user might not care that some news items were not available when he just removed the network connection to do some offline work at the caf&#xE9;.</p>

<h3 id="040-interface-4-3"><span class="secno">4.3. </span>Keep related tasks close</h3>
<p>Try to place elements that belong together nearby. Reaching out with a mouse or tabbing through a lot of elements to do a common action is tiresome. When designing for small devices which normally have awkward input methods, keeping the amount of actions needed to get from one element to another is crucial.</p>

<p>When designing the News reader application I chose to put the settings and refresh buttons at the bottom. This requires a user to go through all the news items before he can reach those buttons, which might seem like a bad choice. However I&#39;m convinced that these buttons will not be used as often as entering the news items themselves. In addition having to skip past two additional elements every time you want to go to a news item requires more work. When moving back and forward between a news item and the overview I keep the focus on the last chosen news item so that it is easy to get to the next one. However when going back and forth between overview and settings I have chosen to focus on the top again if some of the settings have changed and there is a change new items have arrived.</p>

<h3 id="040-interface-4-4"><span class="secno">4.4. </span>Go with the flow</h3>
<p>When laying out your various elements and states, use containers and group together things that belong together. This eases the overview for you or a fellow developer, improves the possibilities of styling and lets you position elements relative to each other avoiding hardcoding. In addition you might want to order elements in a logical way, keeping in mind user agents that do not support CSS, screen readers that might read text and content sequentially, and optimized browsers like Opera mini that benefits from a proper order.</p>

<h3 id="040-interface-4-5"><span class="secno">4.5. </span>Eye candy</h3>
<p>A good application is of course pleasing to the eye and looks inviting. The first impression is crucial like with all new encounters. However, your users will quickly see past the outer beauty and want to know if there is anything worthwhile inside the application too. If your fancy graphics makes a slower download of the application, more sluggish navigation, or get in the way of the user, then all the time spent on making it look good turns out to be useless since the user will move on to other applications that are easier to use.</p>

<p>When making decoration and styling your application, keep in mind good habits like using high contrasts and few colors, preferably various shades of the same color. Make important things stand out, but be clear in the priorities as trying to make everything stand out, naturally leads to everything drowning each other and you end up with a cacophony of colors and effects.</p>

<p>Keep separate graphics for different devices, using stylesheets depending on media is a good technique, then only the graphics needed are loaded by your application. A compromise is to make a picture an average size and scale up or down as necessary. If size is not a problem, scaling down will always look better than scaling up so using a large version looks the best.</p>

<p>Splash screens might seem like a good idea. But only the first 10 or so times. You should avoid a splash screen unless it shows a progress indication while loading. If you want to provide information about yourself or your application, put it in an about page or similar.</p>

<h3 id="040-interface-4-6"><span class="secno">4.6. </span>Animation</h3>
<p>Many times animation increases usability. Making an effect when hovering or activating an element gives the users feedback that they actually did activate the element. With awkward input devices this hugely increases usability. Progress bars that move helps the users understand that something is going on, and if possible how long time the process will take. However rotating icons in 3D when focusing it, is not necessary.</p>

<p>Keep in mind that animations require altering the screen image and possibly running scripts to exchange frames. This consumes power and on battery-dependent devices you might consider this. You do not want your users to run out of power minutes after starting your application, unless you are in the battery or power plant business that is.</p>

<p>In this Web application I have utilized the <a href="/libraries/animation/">Animation library</a> provided by Opera Software. It is a very handy library that lets you animate any element by adding an animation element to it. By using custom profiles it can animate virtually anything. In the News Reader Web application I have used the onfinish callbacks to make sure animations are finished before starting a new one, or entering a different state in the code. I also keep an array of ongoing animations to keep track of them. As you can see the &quot;stairway animation&quot; of the various news items are using it.</p>

</div>

&lt;page&gt;<div class="slide">
<h2 id="050-settings-5"><span class="secno">5. </span>Settings</h2>
<p>Like normal applications you want to be able to save user settings, states, configuration and other things so that they survive till next time you use the Web application. Unless you save data to a remote server using XMLHttpRequest or GET requests through images, iframes or actual requests requiring reloading of page, you are stuck with cookies.</p>
<p>Cookies are unfortunately not to be trusted, too much at least. But most of the time that is the only thing you&#39;ve got. So when saving data to cookies, be aware that the amount of cookies per host or the size of data allowed per cookie varies. You might want to add some checking that data that was saved actually ended up correctly by reading it again. In addition you might want to have an own cokoie as an index to other cookies, and keep track of which cookies still exist.</p>
<p>If you happen to lose data saved in cookies, make sure your application can handle that gracefully and make the user understand why his settings are lost.</p>
<p>When making widgets another way of saving data is provided, namely the setPreferenceForKey(value,key) and preferenceForKey(key) functions. This allows you to store larger amount of data and are supposed to be non-volatile, that is, they are supposed to stick around.</p>
<p>Naturally when making Web applications that are meant for various devices and modes, whichever method is available varies. This is why I resolved to making a settings library that uses the method that is available. See the file in scripts/lib/settings.js</p>

</div>

&lt;page&gt;<div class="slide">
<h2 id="060-retrieval-6"><span class="secno">6. </span>Retrieval of data</h2>
<p>
There are several ways of getting dynamic data. Including DOM LS, XMLHttpRequest, injecting javascript and probably more. XMLHttpRequest put the X in AJAX and is the de facto standard of fetching dynamic data from the Web for most Web applications. However it is not always fool-proof. Sometimes you have restrictions on which domains you are allowed to fetch data from, and sometimes the data you want to fetch is not proper XML, and you need to fall back to manual parsing of contents.</p>

<p>For this news reader and other Web applications I&#39;ve been using the Florence library, which is basically a feed fetching library, but it also lets you iterate through content received yourself if you are not using RSS or ATOM as a news source.</p>

<p>The library uses XHR. If it is not allowed to contact a host due to security restrictions, it can fall back to use XHR to a designated proxy running on the same site as the web application, If neither of those methods work, it tries to use JavaScript injection. This also requires a proxy, which basically embeds content from a given URL into JavasSript code which is then included as a script.</p>

<p>These methods work transparently in the background and you only need to refer to a Feed object or a FeedStore object if having multiple feed sources.</p>

<p>I would encourage you to use an XML based format; preferably a standard one like ATOM, or a well-known but unfortunately poorly defined format like the ones in the RSS family.</p>

<p>Keep in mind when fetching data from external sources, that bandwidth usage might be of importance, try to reuse data if possible, use diffs or timestamps to receive only data that hasn&#39;t been received before. Be careful about recurring fetching of data. Consider changing the frequency of data-fetching based on the activity of the users. If they have not touched the application for a while, chances are they are not using the application and might not be that eager to have the application retrieve newer data.</p>
</div>

&lt;page&gt;<div class="slide">
<h2 id="070-conclusion-7"><span class="secno">7. </span>Conclusion</h2>
<p>Making sure you make reusable code, device-independent layout and interfaces that adapt to the device are not trivial tasks. However, by following this set of guidelines, being modular, avoid hardcoding, make graceful fallbacks, and acceptable degraded versions you will already be on your way in making a robust application.</p>
<p>My advices for making great web applications can be summarized like this:</p>
<ul><li>Do not be afraid to reuse code, and avoid re-inventing wheels and spend the energy on making it extensible and useful.</li><li>Concentrate on letting your application do one thing and do that well</li>
<li>Do not be rude to the users, let them have their ways</li>
<li>Keep things simple</li></ul>

</div>
