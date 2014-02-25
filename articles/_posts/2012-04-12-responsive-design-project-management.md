---
title: 'Responsive Web Design: A Project-Management Perspective'
authors:
- rudy-rigot
- sophie-taboni
intro: 'The challenges of responsive web design go way beyond media queries and screen widths. In this article we look at some of the key issues you need to explore when embarking on a complicated web project, considering if, how and why the project should be made responsive.'
layout: article
---
<p class="note">French translation | Traduction française: <a href="http://www.clever-age.com/veille/blog/responsive-web-design-du-point-de-vue-du-chef-de-projet.html">Responsive Web Design, du point de vue du chef de projet</a></p>

<h2>Introduction</h2>

<p>What strikes many people about responsive web design, the first time they hear about it, is the simplicity of the syntax. As <a href="http://vimeo.com/32361381">Rich Quick said in his recent talk at Front Row</a> to introduce the basic concepts:</p>

<blockquote><p>it’s all roughly about learning one single line of CSS code!</p></blockquote>

<p>Of course, it would be unthinkable for any self-respecting web geek to hear about this and not immediately try to manipulate that one magical line of CSS code everyone is talking about to the limit! What most of us discover then is that after the quick technical introduction there’s an ocean of best practices to learn. These are covered rather nicely by Ethan Marcotte's now classic <a href="http://www.abookapart.com/products/responsive-web-design">Responsive Web Design book</a> and several good online resources, including the rather good <a href="http://dev.opera.com/articles/view/love-your-devices-adaptive-web-design-with-media-queries-viewport-and-more/">Love your devices: adaptive web design with media queries, viewport and more</a> by Chris Mills, on this very website.</p>

<p>This is where many people stop. After all, many of the challenges with responsive design are fairly similar, regardless of project size and budget. There are, however, additional challenges to consider on large projects, which are too rarely addressed: this article will aim to address those.</p>

<p>These challenges mainly have their origins in how the usual roles and profiles on a project blur on larger projects, with graphic designers having to understand HTML, or front-end developers ending up making design choices. These problems are solved by assigning roles to everyone on a project team more wisely, and finding ways to communicate through the team that fit the end result better. But before we mention that further, perhaps we should ask ourselves a few basic questions.</p>

<h2>Does this project need to be responsive?</h2>

<p>After you first experiment with Media Queries and find out how easy they are to use, you may start thinking about some of your favourite web sites, and imagine how they would be made responsive. You may suddenly find yourself thinking that everything should be responsive; hell, you would make your family and friends responsive if you could!</p>

<p>But you need to take a step back, and exercise restraint: depending on the context and purpose of a project, it might be better to not go down the responsive route at all, or at least limit it. There is no hard and fast rule that dictates when this is for the best, and it will depend on several circumstances. Here are a few questions you should ask yourself before you make the call with your client.</p>

<h3>Will each view have the same content and features?</h3>

<p>You shouldn't really hide features away from one version or another. Some views may suit some features better than others, but you should make them all available in some way. Your users don’t choose the mobile version of a site, for example: you push it to them. But what if they want to use a desktop-oriented feature on an iPhone, for example? You should play with the visual hierarchy of features on pages, but you should try to avoid hiding features altogether. If a client says "This thing should only be done on mobile phones", then it should probably be on a different web site altogether.</p>

<p>If you still make the call to hide some features away on one view, you should display a <q>See mobile version</q> / <q>See desktop version</q> link, which could enable or disable Media Queries using JavaScript.</p>

<h3>Will some webpages on one version need to be split into several webpages in the other?</h3>

<p>One thing responsive design can’t do for you is having, say, a single page of content for one view, which is better sliced as several pages in another smaller version. The Facebook homepage, for instance, contains a detailed navigation throughout the site, two live streams, and a live web messenger, among other things. Are you sure you want all those features on your mobile version's homepage? They should be separated into several pages, don't you think? For content-heavy web sites, making the design responsive would just make things seem more cluttered and unusable! If the <q>1 page = 1 page</q> rule can’t work (and you can’t fake it in JavaScript) then you just can’t go responsive, and will instead need separate sites.</p>

<h3>Is advertising part of the website’s business model?</h3>

<p>As long as no advertising solution out there is compatible with responsiveness, using existing ones on a responsive website will bring you technical headaches. Fortunately, this is a known issue and solutions are being documented. Mark Boulton’s <a href="http://www.markboulton.co.uk/journal/comments/responsive-advertising">Responsive Advertising</a> is a great place to go for a deeper discussion of this topic.</p>

<h2>Some butterfly effect!</h2>

<p>One major problem with responsive projects is how you have to redefine everyone’s role on said project. Speaking generally, you used to have a functional designer, focusing on your wireframes, who didn’t need to know that much about technical constraints. And you used to have a front-end developer, who could turn all the designs of your dreams into accessible, efficient HTML/CSS pages. Those two people didn’t need each other that much to move forward with their work.</p>

<p>Basically, you had the infamous sequence: specifications – conception – design – front-end dev – back-end dev, and all the small pieces before, after, and in-between. Each of these areas didn't need to know that much about each other. For example the front-end developer could work on the project weeks after the conception.</p>

<p>Responsive design imposes tight technical constraints on the conception, which completely turn this model on its head. You can’t produce one fixed-width wireframe like before, and expect all of the website’s interaction to be conceived from this. And you can’t expect a functional designer to produce an output that is technically relevant, if he doesn’t have a solid technical background allowing him or her to respect the flow of content into different responsive layouts, and isn't working closely with someone who does.</p>

<p>So, should you ask your front-end developer to make wireframes? Or wait, should you expect HTML/CSS pages right away, created by your graphic designer? Headache!</p>

<p>One thing is for sure: in a team-driven project, the separation of roles and expertise is not as clear as it used to be, and a simple <q>let’s do it responsive</q> mantra is not good enough — we need to redefine the order in which we’re used to doing things.</p>

<h2>Heads before legs: planning it right</h2>

<p>Before diving into your wireframes, you might want to ask yourself a few conceptual questions that will define what work is done, and how it is split between team members. Once you've worked this out pragmatically (and, most importantly, got it confirmed by the client), you will have a strong basis to iterate on.</p>

<h3>Where will the design break points be?</h3>

<p>As a first step, you should work out where the break points will be: those where the design and layout need to change. This will make everyone’s task way easier (conception, graphic design, and of course, front-end development).

<p>There are several practical approaches out there to make the call, but generally the choice is between:</p>

<ul>
<li><p><strong>content-driven</strong>: You look at your design with real final content and find out what screen sizes (or other media feature values) the design breaks at, for example headings wrap nastily, floated columns explode, or content spills out of containers. This is done regardless of the screen size of target devices.</p>

<p>If the website doesn't have that many templates, and for each template, the content isn't so different from one page to the other (for instance, on a blog), you can go content-driven. This is a good way to go in a lot of ways — you don't need a media query every different resolution/screen width/orientation you want to support, as the break points will work for multiple sizes.</p>

<p>This approach however doesn't work so well with websites which have a lot of templates, and where you don't know exactly what the content is going to be, which represents a sizeable amount of projects, you might say!</p></li>

<li><p><strong>device-driven</strong>: this means that you look at what devices you want to support and add media queries to perfect layouts and styling at those sizes. So you'd be following the trendiest devices' resolutions (or better still, why not look at devices your target audience are using?), and trying to fit them with your designs. This is an easier path to take for complicated sites with unknown content, but it is much more limiting in terms of supporting a wide range of devices with different screen sizes, etc.</p></li>
</ul>

<p>You might find yourself disappointed that there isn't a more logical way to make this call, but all in all, it's mostly about setting this first so every one can get down to business! Once the call is made, then every one can start doing their thing...</p>

<h3>Will it be fluid all the way?</h3>

<p>A perfect responsive design will be fluid whatever the browser width! However, in a real project a website is made for targets, such as <q>all smart phones, screens of 1024px wide or more, and the iPad</q> (which is a typical target, in 2012). In these cases, a potential compromise is to make a fixed-width version for large screens, a fixed-width version for the iPad, and a fluid version for smart phones — this should match all the targets perfectly, and will cost a lot less than planning on fluidity for every screen size, even the large computer screens you can find out there now! And let’s be honest: on other tablets and other computer screens, the result won’t fit 100% perfectly, but it’ll probably be a decent enough outcome, although you'll need to do some testing to make sure.</p>

<h3>To be or not to be mobile first?</h3>

<p>One perfect way to make a responsive design fail is to make a dense, content-heavy desktop version, and then try to cram it into narrower screens! Starting with the desktop version won't automatically cause a fail, and you don't need to always start by wire framing your mobile version, but you should think about this carefully for each project</p>

<p>Trying to adapt a desktop version onto a mobile one may help you innovate, and find new ways to reorganise content. And conversely, thinking mobile first helps you focus on the core of your features and get rid of what is not essential to your users. All in all, the two approaches both have their advantages.</p>

<p>There is actually a third road: make every version simultaneously (which is a nice and equal way to go), which may suit your project, depending on budget. In any case, it is always good to decide beforehand which approach will suit your project. To determine this, you should study your target audience and content strategy.</p>

<p>A good way to know you're doing it wrong is to compare a desktop wireframe with that of the Mobile app, in the way Luke Wroblewski compared the Southwest Airlines desktop website and iPhone app in his <a href="http://www.abookapart.com/products/mobile-first">Mobile First</a> book. With a website that tends to be so dense, it is probably always better to worry about your mobile user first, in order to get a simpler, easier to use user interface.</p>

<p>However, if you're making the website for a company who wants to favour their desktop users, but is going responsive solely out of worry about keeping content accessible on mobile, then it's probably a more sensible decision to take care of your desktop version first.</p>

<h3>Which wire framing tool should we choose?</h3>

<p>Wire framing responsively is a noble aim to have, but the tools that are natively able to do just that without any HTML/CSS coding don’t really exist yet. Erskine Design's excellent <a href="http://gridpak.com/">Gridpak app</a> is a great start, as it allows you to create a responsive grid really quickly to test with your content, but it isn't exactly useful for the UX phase as it requires coding. Ideally we'd like to see something like Axure, or Balsamiq, but fluid.</p>

<p>Meanwhile, you might want to use your favourite tool that was made for fixed width, and use it smartly on every different layout.</p>

<h2>Action! Tips for a faster road to success</h2>

<p>Now you’re all set and you have all you need to get going! However, if you’re used to fixed width, it’s not going to be a walk in the park! You could end up making a very high number of wire frames for a whole site, although there is no reason that you have to make all the different views for all pages. And you still need to keep a few best practices in mind (like no feature hiding), and a lot of technical constraints (like practically everything related to HTML flow).</p>

<p>To date, there is no one-size-fits-all solution to the responsive design process issue, so whatever you decide to do will require some pragmatism regarding your specific context. However, there are some commonplace starting points that can inspire your own specific methodology.</p>

<h3>Numerous short iterations</h3>

<p>The methodology Ethan Marcotte recommends requires that everyone works on short (e.g. one week long) iterations, and then shares them with everyone else on the team. That way, designers can inform developers about work that is fundamentally weak in design, and vice versa. Although this technique seems logical and will result in better, more balanced work, it requires loose deadlines and somewhat heavy budgets!</p>

<h3>All versions first!</h3>

<p>Whatever version you make first (be it mobile, desktop, etc.), you’ll always meet trouble when you try to adapt it to fit the others. One way to continuously have a good overview of the three versions, is... to compose them all at the same time! Although this way of working is faster and needs fewer people, it does require you to have a responsive designer, i.e. someone who can design wireframes, but understands responsiveness and the technical rules of HTML flow as well. And of course, such a profile isn’t easy to find...</p>

<h3>A responsive designer in the making</h3>

<p>An easy way to solve the <q>responsive designer profile</q> issue is to pair a regular designer with a front-end developer for every conceptual and development step. On the downside, this costs more money. On the upside, after a couple of responsive projects, your designer will know responsive HTML flow rules and won’t need your front-end developer any more. This is a good investment, as you've just created a responsive designer!</p>

<h3>Just checking!</h3>

<p>On very complex designs and templates, one good way to make sure everything is technically acceptable is to conclude every wire frame iteration with a short <q>just checking</q> phase, showing only the outline of the wireframe in proper responsive HTML/CSS. This also costs some extra money on the design phase, but at least you can make sure everything you design is real. In addition, some of this code will be reusable for the real front-end development, so all is not lost!</p>

<h2>Conclusion</h2>

<p>Reading blogs out there, you will notice that every attempt to fix a responsive design process is still very experimental: there are as many offered ways as there are blog articles about it! Progress is being made, but nothing is really set in stone at the moment.</p>

<p>Knowing that, the most important thing right now is to make sure you ask the right questions at the start of each project, make the right choices, and jump into experimentation yourself with a maximum amount of pragmatism. If you find a good idea to make all of these challenges smoother, please write about it and share your discoveries on the web!</p>

<p class="note">Cover image for this article: <a href="http://www.publicdomainpictures.net/view-image.php?image=15447&picture=backbend">Backbend</a> by Petr Kratochvil</p>
