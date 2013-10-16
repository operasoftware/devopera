Title: Get familiar with HTML5!
----
Date: 2011-01-14 14:32:53
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

	  <h2>Introduction</h2>
	  
	  <p>Most of the <a href="http://www.opera.com/wsc">web standards curriculum</a> is based on the last stable version of HTML — HTML 4.01. The HTML 4.01 spec was completed in 1999, over 10 years ago as of the time of this writing! But unless you&#39;ve been hiding under a rock for the last year or so, you&#39;ll be well aware that there is a new version of HTML in development — HTML5!</p>
	  
	  <p>So why have we been teaching you HTML 4.01 in spite of this? In this article we&#39;ll answer this question, and many more. We&#39;ll give you the essential background you need to know on why HTML5 came about, and where it is up to now. We&#39;ll advise you on how it can fit into your learning right now, even if you are a novice web designer or developer, and we will look at some of the main features of HTML5, so you can see what it adds to the already powerful HTML language.</p>
	
	
	  <h2>Why HTML5?</h2>
	  
	  <p>When HTML 4 was nearing completion, the W3C decided (in a <a href="http://www.w3.org/MarkUp/future/">workshop run in 1998</a>) that in terms of markup languages, the future of the Web was XML and XHTML, not HTML (<a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/#xhtml">comparison of XHTML and HTML</a>). So the W3C drew a line under HTML 4.01 and instead concentrated on the <a href="http://www.w3.org/TR/xhtml1/">XHTML 1.0</a> spec, finished in early 2000. XHTML 1.0 is just the same as HTML 4.01, except that it uses the markup syntax rules of XML. <a href="http://www.w3.org/TR/xhtml2/">XHTML 2.0</a> soon followed, which added a whole bunch of new powerful features and an XML-only mime-type, and aimed to be the next big thing on the Web.</p>
	  
	  <p>The trouble with XHTML 2.0 is that it wasn&#39;t backwards compatible with the markup already on the Web - the elements worked differently, the XHTML mimetype (<code>application/xhtml+xml</code>) did not work at all on IE, which still has the majority browser marketshare as of the time of writing, the developer tools available weren&#39;t ready for working with XML, and it didn&#39;t really reflect what web developers were REALLY doing out there in the wild wild web.</p>
	  
	  <p>In 2004, a group of like minded developers and implementers (including representatives from Opera, Mozilla and slightly later, Apple) got together and formed a breakaway spec group called the <abbr title="Web Hypertext Application Technology Working Group"><a href="http://www.whatwg.org/">WHATWG</a></abbr>, with the aim of writing a better HTML markup spec that could handle authoring the new breed of web applications, without - crucially - breaking backwards compatibility.</p>
	  
	  <p>The result was the <a href="http://www.whatwg.org/specs/web-apps/2005-09-01/">Web Applications 1.0 specification</a>, which documented existing interoperable browser behaviours and features, as well as new features for the Web stack such as APIs and new DOM parsing rules. After many discussions between W3C Members, on March 7 2007 the work on HTML was restarted with a new HTML Working Group in an open participation process. In the first few days, hundreds of participants joined to continue to work on the next version of HTML. One of the first decisions of the HTML WG was to adopt the Web Applications 1.0 spec and call it HTML5.</p>
	  
	  <p>HTML5 is a really good thing for web developers and designers, because it:</p>
	  
	  <ul>
	    <li>Is mostly backwards compatible with what&#39;s already there — you don&#39;t need to learn completely new languages to use HTML5. The new markup features work in the same way as the old ones (although the semantics of some elements have been changed - we will cover these differences in a future article), and the new APIs are based on mostly the same JavaScript/DOM that developers have been programming in for years.</li>
	    <li>Adds powerful new features to HTML that were previously only available on the Web using plugin technologies like Flash, or with complex JavaScript and hacks. Form validation and video are prime examples.</li>
	    <li>Is better suited to writing dynamic applications than previous HTML versions (HTML was originally designed for creating static documents).</li>
	    <li>Has a clearly defined parsing algorithm so that all browsers implementing HTML5 will create the same DOM from the same markup, regardless of validity. This is a massive win for interoperability.</li>
	  </ul>
	  
	  <h2>What does HTML5 mean to me?</h2>
	  
	  <p>To start with, let&#39;s answer that question you&#39;ve had circling round your head since you started reading this article — <em>why did</em> we teach you most of the web standards curriculum using HTML 4.01, if HTML5 is on the horizon? First of all, when the WSC was first published in 2008, HTML5 was a lot more in flux than it is now, and we didn&#39;t want to teach you something that would likely be changed at a later date.</p>
	  
	  <p>Second, and more importantly, HTML5 is backwards compatible — in practical terms, this means that all the stuff inside HTML 4.01 is <strong>also in HTML5</strong>. So by learning HTML 4.01, you are also learning a large chunk of HTML5. This article, and the others inside this section, aim to fill in your knowledge gaps by teaching you the extra bits that HTML5 layers on top of HTML 4.01, for example the extra semantic elements, and the new APIs that allow you to control video playback and draw pictures on a canvas. I&#39;ll give you loads of references to more information on such features at the end of the article.</p>

	  <p>Some parts of HTML5 are implemented in a stable enough fashion across browsers to be used safely even on a production site (as always, you will have to make a judgement call depending on your site&#39;s target audience and features). Plus if a feature is not supported in certain browsers, you can work around this — our articles will show you how, at appropriate points.</p>
	  
	  <p>To give you a short concluding answer, HTML5 is the future of the Web, and a large part of your future as a web designer or developer. I&#39;d recommend that you start learning HTML5 as soon as you are ready — many of the new features will make your existing work a lot easier, and it will future proof your knowledge. If you are a student at college or university and your teacher doesn&#39;t know about HTML5 yet, or is unwilling to cover it in your course, show them this article.</p>
	  
	  <h2>HTML5 features</h2>
	  
	  <p>HTML5 contains many new features to make HTML much more powerful and suitable for building Web applications. In the list below I&#39;ve summarized the main ones you really should know about.</p>
	  
	  <p class="note">Some of the features listed below are NOT actually part of the HTML5 spec itself, but are defined in closely related specs, therefore they are still valid parts of the new movement towards modern web applications, and useful for you to know about.</p>
	  
	  <ul>
	    <li><p><strong>New semantic elements</strong>: As you will already know, semantics are very important in HTML — we should always use the appropriate element for the job. In HTML 4.01 we have a problem — yes, there are many elements for defining specific means such as tables, lists, headings, etc., but there are also many common web page features that have no element to define them. Think of site headers, footers, navigation menus, etc. — up until now we have defined these using <code>&lt;div id=&quot;xxx&quot;&gt;&lt;/div&gt;</code>, which we can understand, but machines can&#39;t, plus different web developers will use different IDs and classes. Fortunately, HTML5 comes with new semantic elements such as <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code> and <code>&lt;article&gt;</code>. You can learn about these in our article <a href="http://dev.opera.com/articles/view/new-structural-elements-in-html5/">New structural elements in HTML5</a>.</p></li>
	    
	    <li><p><strong>New form features</strong>: HTML 4.01 already allows us to create usable, accessible web forms, but some common form features are more fiddly than they should be, and require hacking to implement. HTML5 provides a standardized, simple way to implement features such as date pickers, sliders and client-side validation. HTML5 forms are covered in detail in the article <a href="http://dev.opera.com/articles/view/new-form-features-in-html5/">New form features in HTML5</a>.</p></li>
	    <li><p><strong>Native video and audio</strong>: For years, video and audio on the Web has been done using Flash, generally speaking. In fact, the reason Flash became so popular around the dawn of the 21st century is because open standards failed to provide a cross-browser compatible mechanism for implementing such things, with different browsers implementing different competing ways of doing the same thing (eg <code>&lt;object&gt;</code> and <code>&lt;embed&gt;</code>) and thereby making the whole process really complicated. Flash provided a high quality, easy way of making video work cross-browser.</p>
	    <p>HTML5 includes <code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> elements for implementing native video and audio players really easily with nothing but open standards, and it also includes an API to allow you to easily implement custom player controls. There are many articles on dev.opera.com covering HTML5 video and audio, but the best place to start is Bruce Lawson and Pat Lauke&#39;s inaugural <a href="http://dev.opera.com/articles/view/introduction-html5-video/">Introduction to HTML5 video</a> article. Also worth checking out is the <a href="http://dev.opera.com/articles/view/more-accessible-html5-video-player/">More accessible HTML5 video player</a>.</p></li>
	    
	    <li><p><strong>Canvas drawing API</strong>: The <code>&lt;canvas&gt;</code> element and associated API allows you to define an area of the page to draw on, and use JavaScript commands to draw lines, shapes and text, import and manipulate graphics and video, export in different image formats, and a whole lot more. For more on HTML5 canvas, start with <a href="http://dev.opera.com/articles/view/html-5-canvas-the-basics/">HTML5 canvas - the basics</a> by Mihai Sucan.</p></li>
	    
	    <li><p><strong>Web Sockets</strong>: This API (defined in the <a href="http://www.w3.org/TR/websockets/">Web Sockets spec</a>, separate from the HTML5 spec) allows you to open a continuous connection between a sever and a client on a specific port and send data in both directions until the port is closed. This improves the efficiency of web applications a great deal, as data can be continuously and accurately exchanged between client and server without constant page reloads, and without constantly having to poll the server to see if updates are available. <a href="http://dev.opera.com/articles/view/introducing-web-sockets/">Introducing Web Sockets</a> will start you off nicely.</p></li>
	    
	    <li><p><strong>Offline web applications</strong>: HTML5 provides a number of features to allow web applications to run offline. <a href="http://dev.opera.com/articles/view/offline-applications-html5-appcache/">Application Caches</a> allow you to save a copy of all the assets and other files needed to run web applications locally, and Web SQL databases allow you to save a local copy of a web application&#39;s data. Together, these allow you to continue using an application when it goes offline, and then synchronize changes with the master version on the server when the network is available again.</p></li>
	    
	    <li><p><strong>Web Storage</strong>: Cookies allow us some degree of local data storage, but their use is fairly limited. HTML5 Web Storage allows us to store a lot more data, and do a lot more with it. Read <a href="http://dev.opera.com/articles/view/web-storage/">Web Storage: easier, more powerful client-side data storage</a> by Shwetank Dixit for more information.</p></li>
	    
	    <li><p><strong>Web workers</strong>: A common problem encountered by web applications is that their performance suffers when a lot of data processing is required, due to the fact that everything happens in a single thread/process (only one load of processing can happen at once). Web Workers mitigates this problem by allowing us to create background processes to take care of some of the number crunching, allowing the main process to get on with other things. To read more about Web Workers, go to Daniel Davis&#39; <a href="http://dev.opera.com/articles/view/web-workers-rise-up/">Web Workers rise up!</a>.</p></li>
	    
	    <li><p><strong>Geolocation</strong>: The <a href="http://dev.w3.org/geo/api/spec-source.html">Geolocation spec</a> (again, not a part of the HTML5 spec) defines an API that allows a web application to easily access any location data that has been made available, for example by a device&#39;s GPS capabilities. This allows you to add all kinds of useful location-aware features to your applications, for example highlighting content that is more relevant to your location. For a basic introduction, read <a href="http://dev.opera.com/articles/view/how-to-use-the-w3c-geolocation-api/">How to use the W3C Geolocation API</a>.</p></li>
	  </ul>


<p class="note" id="html5notcss3">Note: CSS3 is DEFINITELY NOT part of HTML5, and never will be. Don&#39;t let your marketing department tell you otherwise.</p>
	  
	  <h2>Summary</h2>
	  
	  <p>And so finishes your brief introduction to HTML5. I hope you found this useful, and that you will continue reading the other articles about HTML5 referenced above.</p>
