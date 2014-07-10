---
title: Web Accessibility for Cognitive Disabilities and Learning Difficulties
authors:
- ian-pouncey
intro: 'The number of people with cognitive disabilities using the Web is comparable to those with visual impairments using the Web, yet the factors involved in making sure a web site is accessible to those with cognitive disabilities are much less well understood. In this article well will redress the balance, giving you a gentle introduction to the area of web accessibility for cognitive disabilities.'
license: cc-by-nc-sa-3.0
---
<h2>Introduction</h2>

<p>Web accessibility for people with cognitive disabilities and learning difficulties is one of the most overlooked subtopics of general web accessibility, despite it affecting the largest numbers. A large part of it is that there are so many conditions to understand in this area (far more than say visual or hearing impairments) and a lack of educational information available for learning about it.</p>

<p>In this article we will cover a few of the problems users with cognitive disabilities may have that can affect their ability to use the Web, as well as the things that developers can do to alleviate these problems and things they should avoid. A lot of what is covered will be well known and common sense to many, but is here for completeness.</p>

<h2>What are cognitive disabilities and learning difficulties?</h2>

<p>As with any aspect of accessibility, here we are less interested in specific conditions than we are with how they impact a person’s ability to use a website. These conditions affect a web user’s ability to perform one or more mental tasks. This includes problems with:</p>

<ul>
<li>reading text</li>
<li>memory</li>
<li>problem solving</li>
<li>keeping focused (attention span)</li>
<li>computation (for example calculations)</li>
<li>non-verbal learning (for example difficulty with written materials)</li>
</ul>

<p>For example, let’s have a look at some basic personas:</p>

<ul>
<li>Steve has problems processing text, particularly when words are spelt incorrectly or when sarcasm or metaphors are used (this is most likely <a href="http://en.wikipedia.org/wiki/Dyslexia">dyslexia</a>).</li>
<li>Alison has short-term memory problems with what she sees and hears. It is difficult for her to remember what she has already entered in long forms or previously read in articles split into multiple pages.</li>
<li>Jeremy has difficulty with problem solving. He struggles with unfamiliar circumstances, such as links to new places in a website or unclear form input error messages (this could be as a result of intellect, emotional or executive function impairments).</li>
<li>Emily finds it difficult to focus on tasks, particularly when a web page has moving adverts or multiple pop-up windows.</li>
<li>Thomas has problems with numbers; it can be difficult for him to estimate the total cost of items when buying online or to solve simple maths-based questions asked on some comment forms to prove he is not a spambot (this is most likely <a href="http://en.wikipedia.org/wiki/Dyspraxia">dyspraxia</a>).</li>
<li>Kate can have problems associating a representation of an object with the object itself, such as associating a picture of an apple with a real apple. She finds it easier to understand audio information than written or pictorial content.</li>
</ul>

<p>Users can sometimes have a combination of cognitive disabilities and learning difficulties, and they may also have physical disabilities. It is important to be aware of the range of conditions that might affect your users, but at the same time you must avoid strict categorisation as every person is unique in their abilities — it is rarely simple, and there really is no one size fits all solution. For example, someone who is in the <a href="http://en.wikipedia.org/wiki/Autistic">autistic spectrum</a> may have none of the issues listed, but as this spectrum is concerned with making human connections and communication, certain visual or written nuances that would be obvious even to someone with a severe learning difficulty that affected the processing of information may be missed by someone in this spectrum. And someone with severe <acronym title="Attention Defecit Hyperactive Disorder">ADHD</acronym> (inattention and hyperactivity) can find any task way more frustrating than what is considered as normal.</p>

<h2>Areas to consider</h2>

<p>You may find it difficult to create a web site that is accessible to all users with cognitive disabilities and learning difficulties because of the range of issues you need to consider.</p>

<p>You might find that a solution for one user is a hindrance to another, for example images could potentially be a distraction to someone who prefers text, even though combining content types is your best hope for universal accessibility. If you have a specific target group you can tailor content for that group, otherwise you have to tailor content for different information representations for different groups.</p>

<p>By following some simple guidelines you will be able to make your content available to as wide an audience as possible. A lot of this is fairly general web design best practices, but that’s what enables a lot of accessibility! Framing them in the context of cognitive disability should give you a better understand of the area.</p>

<h3>Consistency</h3>

<p>The first thing you should think about when designing your content is consistency. Users should be able to learn what to expect from each new page of your site — the various features should be consistent with previous pages, in terms of style, location and function.</p>

<p>What, in particular, should we be aiming to make consistent? Lets go through them.</p>

<h4>Navigation</h4>

<p>After the content itself, the site navigation is possibly the most important thing to get right. Its position and functionality should not change across a site, and it should be easily identifiable as navigation, with intuitive menu options.</p>

<h4>Fonts and font sizes</h4>

<p>Do not use too many different fonts, and treat them as you would a colour palette. Stick to a small number, perhaps one font for headings and one font for body text. Introducing a lot of variation serves to introduce distractions and noise, and this is something we want to avoid at all costs.</p>

<h4>Interactive elements: links and buttons</h4>

<p>It is important that users of any kind can recognise a link on your site. Links on a site need to follow the same style, and need to behave as a user would expect. Positioning, relevance, purpose and destination are all very important here.</p>

<p>The same goes for buttons, and there is much to be said for leaving buttons and other form controls as they are styled by the browser as this is what many users expect forms on the Web to look like. This not only delivers consistency across your site, but across all sites. Controls that are already familiar to a user will likely be less confusing.</p>

<h3>Structure</h3>

<p>It is important that content is well organised and structured. HTML gives us a limited set of elements to organise our content. Although we may sometimes find this restrictive it can actually be a good thing because it helps us be consistent as well. This section discusses the different facets of structure.</p>

<h4>Headings</h4>

<p>Headings and subheadings should be clear, meaningful and properly nested — they are a guide to the content on a page. Ideally it should be possible to get a good idea of what the content is about just by reading the headings.</p>

<h4>Lists</h4>

<p>By their very nature lists require more concentration to scan through and comprehend. Each item in a list should be short and concise, and further visual grouping of a list (eg using a different background colour to the rest of the page) – if you have a complicated concept to explain start with a list and then expand on each item under its own heading.</p>

<h4>White space</h4>

<p>White space is important for structure; without it all elements will merge in to one block and become incomprehensible. Look for good separation between headings, paragraphs, block quotes, etc. Pay particular attention to the spacing between columns of content; wide gutters or clear delineation with vertical borders can help.</p>

<h4>Clear differentiation between content types</h4>

<p>Use colour, font weights and other styles to differentiate between types of content, for example a quoted phrase could be emphasised, form labels could be strong. This makes it easier for users to determine the type of content they are looking at a glance.</p>

<h3>Focus</h3>

<p>Most users of websites are task-driven – they have a task that they want to perform, and they want to do it without distraction, as quickly as possible. It can be easy to distract attention from your content, so there are certain things to avoid, which we shall talk about now.</p>

<h4>Contrasting blocks of colour</h4>

<p>It is natural that a users eye will be drawn to the more colourful areas of the page, so avoid overly bright or intricate side columns or other needless distractions. You want to encourage users to be focused on the most important page content or functionality.</p>

<h4>Unexpected sound</h4>

<p>Avoid sounds that are played without the user specifically interacting with the source – this again will cause confusion.</p>

<h4>Animations and other moving content</h4>

<p>Movement on a page can be very distracting, especially if it happens automatically, without the user having any warning that is going to happen. The only place there should be movement is on the element the user is interacting with at that moment, for example a highlight on a navigation menu option, or playing a video when the user chooses to.</p>

<h4>Pop ups and new tabs</h4>

<p>Pop up windows and automatically loading content in new tabs moves attention away from the whole page — more confusion. In addition, popups usually tend to be adverts, therefore users tend to dismiss them regardless of their content.</p>

<h3>Readability</h3>

<p>Good readability guidelines apply to all text on your page, whether in navigation, graphics or just plain content. The most important part of any page is the content, and the following guidelines will help you make your content as readable and intuitive as possible.</p>

<h4>Adequate text size and line height</h4>

<p>A font size of 10px or 11px is often considered an acceptable minimum, however I would recommend 12px or 13px depending on the font (I am talking computed sizes here — you would of course set text size using a relative unit such as ems or percentage in your CSS). Although browsers have controls to adjust font sizes or zoom the entire page, there are no guarantees that a user will know how to use them.</p>

<p>Line height should be approximately one and a half times the font size.</p>

<h4>Limited line length</h4>

<p>Long line lengths can be difficult to read in some circumstances. Contrary to popular belief not all users have problems with long lines, but users with reading problems often do. Stick to a maximum of 70–80 characters of text per line.</p>

<h4>Colour contrast</h4>

<p>As for other users, good contrast between foreground and background is important. In addition, using colour to differentiate between links and regular text can help.</p>

<h4>Short paragraphs</h4>

<p>Write short paragraphs, each one focused on a single point or idea.</p>

<h3>Transformability</h3>

<p>Transformability means that your content can be changed in ways to suit different users. We will look at various mechanisms you can employ to support transformability in this section.</p>

<h4>Support text resizing</h4>

<p>The most basic type of transformation is changing text size. Your design should be able to support a font size increase of at least 200%; 300% preferably.</p>

<p>This is less of an issue now that most browsers support full page zooming, but there are still users that would prefer to increase font size without changing the width of the page, the images, or the containing columns.</p>

<h4>Support user styles</h4>

<p>Make it easy for users to apply their own styles via user stylesheets. Write good clean CSS, using low specificity on selectors and avoiding the use of <code>!important</code>.</p>

<h4>Ensure it works without images, scripting or styles</h4>

<p>Test that the site works without images, scripting or styles at all. This is the ultimate fallback for all users in all situations, and it makes it easier for them to provide a usable baseline like this, rather than them having to write their own style sheet. It is also a good test of the structure of your content.</p>

<h4>Provide an API or feed</h4>

<p>Provide an API or a feed to allow others to re-format your content. Ultimately it may not be possible to cater for all users on one site, but if other developers are able to take your content and reformat it for different situations, you will reach an even wider and more diverse audience.</p>

<p><a href="http://www.twitter.com/">Twitter</a> is a great example of what can be done with an API. Not only is content and the ability to tweet available from the website but there are many different client applications that can be tailored to different users needs. <a href="http://www.accessibletwitter.com/">Accessible Twitter</a> is an alternative to the Twitter website, designed and optimised to be easier to use by disabled users.</p>

<p>Another example is <a href="http://icant.co.uk/easy-youtube/">Easy YouTube</a>, created by <a href="http://icant.co.uk/">Christian Heilmann</a>. It is an interface to YouTube specifically designed for users with learning difficulties. As Christian himself says in the <a href="http://icant.co.uk/easy-youtube/docs/index.html#credits">documentation</a>, without the availability of various APIs this would not have been possible.</p>

<h3>Content</h3>

<p>Now on to the content itself, the most important part of a site. If you have marked up and structured your content correctly then it should be convertible to other forms, but if the content itself is broken then you have gone wrong from the beginning.</p>

<h4>Spelling and grammar</h4>

<p>Most users can probably get some meaning from content that has grammatical errors or spelling mistakes, but they can render a word or sentence completely meaningless to users with reading difficulties.</p>

<p>For commercial sites I would strongly advise using the services of a proof reader or professional copy editor.</p>

<p>For sites without a commercial budget, spell and grammar checkers are built in to most applications used to write content, so use them, but make sure you also give your content a human proof read as best you can.</p>

<h4>Definitions of terms</h4>

<p>Define any abbreviations, acronyms or technical terms. Provide a glossary for complicated or technical subjects. Avoid jargon if you can, but not to the point of removing clarity from the content.</p>

<h4>One subject</h4>

<p>Stick to the subject of your page; be focused and avoid digression.</p>

<h4>Summarise</h4>

<p>Summarise the content of your page as an introductory paragraph. This allows your user to determine if this is the content they are looking for early on to avoid frustration.</p>

<h4>Mix content types</h4>

<p>Different users may find different forms of content easier to consume. For one user lots of images and less text may be more understandable, whereas for another the same content spoken in a video might be better.</p>

<p>Wherever resources allow, try to provide your content in multiple formats. Don’t forget to caption videos and transcribe audio content.</p>

<p>Obviously this can make content very editorially intensive, so is not possible in all cases, but if you have a product to sell and you include a text description, images showing individual features and a video clip of the product in use, this will not only constitute a better sales pitch, it will also allow users to pick the content type that works best for them.</p>

<p>It is also important to try and avoid making mixed content distracting. As previously mentioned, a solution for one user may be a hindrance to another. Sensible designs and interactions are key here. If you are mixing text with images perhaps separate the two rather than interspersing the images within the text. Display the images in a slideshow rather than showing them all at once, and try and provide the same information with images alone. A user can then choose to read the text or go through the slideshow to get the same content.</p>

<h2>Conclusions</h2>

<p>You may think that a lot of the points made in this article are nothing more than common sense, and you would be absolutely right! The good news is that the best strategy for creating a site accessible to those with cognitive or learning difficulties is to provide clear and straight forward content in an easy to use interface with few distractions. This is what we want to provide our users with in most circumstances anyway, so it only takes a little more care and thought to avoid the pit falls.</p>

<p>The benefits go beyond what is traditionally thought of as accessibility as well. Something as simple as good grammar can greatly increase comprehension, especially for readers who are not fluent in the language a document is written in.</p>

<p>There is some bad news unfortunately – a single interface or style of content is never going to be able to cater for all users in all circumstances. This gives further weight to the idea of exposing content via a good API or feed. The same content can be repurposed for display in a different format, on other web sites, or on devices such as mobile phones.</p>
