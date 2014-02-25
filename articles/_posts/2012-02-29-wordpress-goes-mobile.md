---
title: 'WordPress Goes Mobile: Responsive Design Comes to CMSes'
authors:
- rachel-mccollin
intro: 'Responsive design is quite easy when you control everything to do with the page, and you’re working on a small and manageable site. But what about a sprawling CMS? In such circumstances, you’ll often have to rely on plugins or extensions. WordPress developer Rachel McCollin shares some of her wisdom on this very subject.'
layout: article
---
<h2>Introduction</h2>

<p>It seems that 2011 was the year in which great strides were made in terms of techniques for making websites render and perform better on mobile devices, but that 2012 will be the year when we all have to roll our sleeves up and get on with actually doing it.</p>

<p>The main reason most of us aren&#39;t doing it is because it takes time and, sometimes, more budget. It could also be that your client, boss or whoever is breathing down your neck and doesn&#39;t really &#34;get&#34; mobile, so at the moment you don&#39;t feel any pressure to do it.</p>

<p>In addition, responsive design is pretty easy when you can control everything to do with the page &#8212; the markup structure, all the CSS, etc. But what about when you are working in a much more constrained environment, such as a CMS? In such circumstances it can be hard or impossible to build in such functionality, so often you'll have to rely on what's been made available via plugins or extensions to your CMS of choice.</p>

<p>And that's what this article is all about &#8212; below I'll outline some CMS-related issues and potential solutions. For the actual examples I'll focus on the world's most popular blogging platform, Wordpress.</p>.

<h2>Mobile CMS issues</h2>

<p>The emerging favourite as a method for creating mobile sites is responsive design. In case you've been hiding under a bush for the past year or so, responsive design is all about using fluid layouts combined with CSS media queries to create websites that fit more naturally within the display of differently sized devices &#8211; this doesn't just apply to small screens, but for massive great ones too.</p>

<p>But responsive design requires control over the CSS, and a solid understanding of how the page is being laid out and built. If you're working with a CMS, especially if you're working with an off-the-shelf theme or a theme framework, that can seem difficult, if not downright impossible.</p>

<p>So are there alternatives?</p>

<h2>Breaking out the solutions</h2>

<p>You might think that getting a site that&#39;s powered by a dirty great CMS like WordPress to go mobile will be more difficult, but as we shall see, that need not be the case. The good news is that if your site is &#34;proudly powered by WordPress&#34;, this can actually be done in seconds. Yes, seconds. The results may be hit and miss &#8212; but they may be spot on.</p>

<p>It all depends on the way your site is built: a simple site using standard blog posts and pages, with no widgets or custom post types, can be mobilised (if that's the right word!) in seconds with a plugin or a mobile theme. A site with a custom theme, branding, widgets and custom post types will be more complicated, but with responsive design and even with some plugins, not impossible, as I've discovered myself on sites I've developed.</p>

<p>With a WordPress site there are four main ways to make the site mobile-friendly:</p>

<ol>
<li>Plugins: There are a plethora of plugins, of varying quality, which will quickly and easily change the way your site looks for mobile visitors, solving your problem at a snip.</li>
<li>Responsive themes: If you&#39;re looking for a theme for your site, whether free or premium, there is a growing number that are responsive. This may be the simplest solution for a new site or one undergoing a redesign.</li>
<li>Switchers: These identify when someone&#39;s visiting your site on a mobile device and change themes to a more appropriate one. This is normally done with UA sniffing, which can be fraught with problems, and less sites are using such functionality now that we have responsive design, but in some circumstances it could still be the best solution to consider</li>
</ol>

<p class="note">Some of these solutions will involve responsive design, and creating different layouts from the same content via media queries, and some involve different, more old school methods (such as UA sniffing).</p>

<h3>Plugins &#8212; the quick and dirty method</h3>

<div class="left" style="width: 40%;">
<p><img src="realworld-wordpressmobile-image1.jpg" alt="Stephen Fry's mobile website, a simple one column layout containing just text"></p>
<p class="caption" style="width: 100%;">Figure 1: Stephen Fry's mobile website, created using WPTouch.</p>
</div>

<p>If you&#39;ve ever visited a site on your mobile that looks a bit like Figure 1, then you&#39;ve seen mobile plugins in action.</p>

<p><a href="http://stephenfry.com">Stephen Fry&#39;s website</a>, like millions of others, uses <a href="http://wordpress.org/extend/plugins/wptouch/">WPTouch</a>, the most popular plugin for WordPress mobile display. This looks completely different from the desktop version and is much easier to read on a mobile, if lacking some of the distinctive design.</p>

<p>There are many other plugins that will help with your WordPress mobile display, many of which use a third party service and some of which are premium. In the spirit of open source, I've listed some of my favourite free ones below, all of which you can download from the <a href="http://wordpress.org/extend/plugins/">WordPress plugin repository</a>.</p>

<ol style="clear: both;">
<li><p><a href="http://wordpress.org/extend/plugins/wptouch/">WPTouch</a>. This plugin has had a whopping 2,930,034 downloads at January 2012 and you&#39;ll see it all over the web if you&#39;re using a phone for browsing. It quickly and easily converts your site to a layout that works for mobiles and looks quite slick (if a little samey in my humble opinion). However, if you use widget areas, you will lose them, and although it shrinks images for mobile, it actually sends the same large image files to mobile and desktop. When I installed it on a test site it made the site run much slower on mobiles than the desktop.</p>
<p>WPTouch also has a premium version, which lets you make more tweaks to the site&#39;s design and, which, I&#39;m told by the plugin&#39;s developers, will include image file resizing in the next release.</p></li>
<li><p><a href="http://wordpress.org/extend/plugins/wordpress-mobile-pack/">WordPress Mobile Pack</a>. This plugin doesn&#39;t look quite as pretty as WPTouch and isn&#39;t as popular, but it does have some extra features. It includes a mobile switcher, a number of colour schemes, and can be integrated with the WP SuperCache plugin to speed up your site on mobiles. It also supports widgets and resizes image files for mobile devices. When I installed it on my test site, the site ran at approximately the same speed on desktop and mobile.</p></li>
<li><p><a href="http://wordpress.org/extend/plugins/mobilepress/">MobilePress</a> includes a theme switcher and a default theme. However when I installed it on a test site, it didn&#39;t display any menus at all. This may have been related to the fact that the test site used custom menus.</p></li>
<li><a href="http://wordpress.org/extend/plugins/wapple-architect/">Wapple Architect</a> uses a free third party service that requires register to get the necessary developer key. The plugin includes styling options which mean you can make your mobile site look a bit more like your desktop one, in particular with the use of logos and colours.</li>
</ol>

<p>There are more, some of which use third party services and some of which create a new domain for your website using <code>m.</code> or <code>.mobi</code>. However in these days of responsive design and one site for all devices, I&#39;m not convinced this is the best way to go.

<h3>Responsive themes</h3>

<p>Responsive websites are very cool right now, and the number of responsive sites is constantly growing (have a look at <a href="http://mediaqueri.es/">mediaqueri.es</a> for some very nice examples). When I spoke on this topic at WordCamp UK in 2011, there were only a small handful of responsive WordPress themes available, but now there are a dozen or so in <a href="http://wordpress.org/extend/themes/">the WordPress theme repository</a>, not including the new default WordPress theme and all the premium ones that are out there.</p>

<p>So what options are available to you? Twenty Eleven comes as standard with all WordPress installations (see Figure 2) and is fully responsive. It may feel a bit generic out of the box, but with some CSS tweaks and changes to the Theme Options you can quite quickly make it your own. It can also be improved upon with some of the plugins I will mention later, which help with responsive sites.</p>

<p><img src="realworld-wordpressmobile-image2.jpg" alt="The Twenty Ten WordPress theme shown in desktop and mobile versions"></p>
<p class="caption">Figure 2: The Twenty Ten WordPress theme shown in desktop and mobile versions.</p>

<p>If you&#39;re launching a new site and responsiveness is more important than bespoke design, Twenty Eleven certainly gives you a quick and easy way of going about it. It has its shortcomings — for example the menu isn't great on mobile, and how long will it take to download that dirty great header image in a poor signal area? But as we shall see, there are plugins you can add to the mix that can solve these problems.</p>

<p>There are some other good free themes available too:</p>

<ul>
<li><a href="http://wordpress.org/extend/themes/scherzo">Scherzo</a> was one of the first free responsive themes, consisting mainly of white space with a few touches of blue, which makes it a very clean starting point to add your own design tweaks to.</li>
<li><a href="http://wordpress.org/extend/themes/ari">Ari</a> is a clean three column theme that uses media queries to resize content for a range of display sizes, including tablets. It supports WordPress widgets.</li>
<li><a href="http://wordpress.org/extend/themes/codium-extend">Codium Extend</a> is another clean white theme that resizes to different display sizes. It displays the navigation at the bottom of the page on mobiles.</li>
</ul>

<p>Now on to good premium themes. The largest proportion of responsive WordPress themes are premium, so if you or your client is happy to fork out for one, you&#39;ll have plenty to choose from. Good places to look include <a href="http://themeforest.net/">Theme Forest</a>, <a href="http://www.woothemes.com/">WooThemes</a> and <a href="http://themify.me/">Themify</a>.</p>

<p>And what about available theme frameworks? Not many of the &#34;big&#34; frameworks are responsive, but progress is being made. <a href="http://www.studiopress.com/themes/genesis">Genesis</a> has just gone responsive with its latest release and <a href="http://wonderflux.com/">Wonderflux</a> is a free framework currently working on incorporating responsiveness. You could also use any of the free responsive themes I&#39;ve mentioned above as a parent theme.</p>

<p>The one thing that the best responsive themes have in common is their simplicity of design - most are white or monochrome, meaning you can make css or sometimes theme options tweaks to make the site your own. Or you can leave them as they are for some sophisticated simplicity.</p>

<p>I think some of these themes give a better result than the mobile plugins - so if you already have a theme for the desktop site, you might consider combining an off-the-shelf responsive theme with a mobile switcher (see below) so it&#39;s just delivered to mobiles.</p>

<p>Beware that this (like any form of responsive design) won&#39;t work for all devices:</p>

<ul>
<li>To read media queries, feature phones need to be running <a href="http://dev.opera.com/articles/view/opera-mini-5-developers/" title="Opera Mini 5 for developers">Opera Mini 5</a>, and other more basic browsers will ignore them. A way around this is to use the mobile first approach, coding for  mobile devices first and then adding media queries for larger screens. However (it's never simple, is it?), you'll then need to use a JavaScript polyfill such as <a href="https://github.com/scottjehl/Respond" title="Respond by Scott Jehl">Respond</a> if you want IE 6-8 obey the media queries and display the desktop site. Of course, this might not be an issue — there is probably more chance of early IE versions rendering simpler mobile layouts!</li>

<li>If a large proportion of your visitors are using Blackberries, you may also need to adapt the mobile first strategy, as older Blackberries (which a lot of corporate users have and are blocked from upgrading the browser on) don't support some of the CSS needed for media queries. What they do and don't support will depend on the model, but even those supporting media queries sometimes don't support <code>display: none;</code>, which you may need to use.</li>
</ul>

<p>In both cases, you'll need to check what devices you need to support and, if you do need to support devices (or more specifically, browsers) that don't read media queries, how the theme is built and whether you can make the necessary adjustments. (If you're anything like me you're probably starting to think it'll be easier to build your own theme!).</p>

<h3>Theme switchers</h3>

<p>If you want your mobile site to look and behave very differently from your desktop site, or you want to create a web app, making use of functionality such as device orientation and GPS, a theme switcher may still be what you need.</p>

<p>Theme switchers are plugins that automatically switch themes depending on what device the visitor is using. Until a year or so ago, a high proportion of mobile sites used theme switchers, perhaps also using a <code>m.</code> or <code>.mobi</code> domain name for the mobile site as well. These have waned in popularity since the increase in popularity of responsive design, but they might still work for you, depending on your context.</p>

<p>Some plugins that switch themes for you include:</p>
<ol>
<li><a href="http://wordpress.org/extend/plugins/user-agent-theme-switcher/">User Agent Theme Switcher</a> includes a list of user agents (including mobile and desktop), allowing you to specify which theme will be served to each. This gives you maximum flexibility and could even be used instead of progressive enhancement to serve a different theme to older versions of Internet Explorer</li>
<li><a href="http://wordpress.org/extend/plugins/wordpress-mobile-pack/">WordPress Mobile Pack</a>. As well as including its own mobile themes, you can use WordPress Mobile Pack to switch to your own mobile theme.</li>
<li><a href="http://livepage.apple.com/">Mobile Smart</a> acts as a theme switcher and also includes device and tier-specific functions and CSS so you can deliver a different site to smart phones and other phones.</li>
<li><a href="http://wordpress.org/extend/plugins/device-theme-switcher/">Device Theme Switcher</a> lets you switch themes for phones and also for tablets such as the iPad.</li>
</ol>

<p>But theme switchers don&#39;t come without their risks. Be warned! First of all, make sure your switcher gives the visitor the option to switch between the mobile and desktop site. And check how your theme switcher responds to tablets &#8212; it&#39;s very annoying to open a site on an iPad only to be confronted with a pared-down mobile theme and no option to switch to the desktop version.</p>

<h2>Responsive design?</h2>

<p>Responsive design is hot right now, and it&#39;s constantly being improved upon as a technique, so I thought I'd give it its own section. There are some great resources out there on this topic, including <a href="http://dev.opera.com/articles/view/love-your-devices-adaptive-web-design-with-media-queries-viewport-and-more/">Chris Mills&#39; article on this site</a>, so I&#39;m not going to go into a lot of detail here.</p>

<p>However, WordPress does have some plugins that will help you to implement more effective responsive sites:</p>

<ol>
<li><p><a href="http://wordpress.org/extend/plugins/mobble/">Mobble</a> is described by its authors as the &#34;perfect accompaniment to CSS Media Queries&#34;. It provides a number of conditional queries such as <code>is_mobile()</code> and <code>is_tablet()</code>, allowing you to serve certain content up to specific devices. It's great for removing memory-hungry media from mobile sites, such as videos.</p></li>
<li><p><a href="http://wordpress.org/extend/plugins/dropdown-menus/">Dropdown Menus</a> was developed following a discussion in a session I led at last year&#39;s WordCamp UK. It replaces your navigation menu with a standard drop down menu, which may not look as pretty but is great for usability.</p></li>
<li><p><a href="http://wordpress.org/extend/plugins/wp-fluid-images/">WP Fluid images</a> removes the fixed width and height styling from images inserted into posts, so you can set their max-width as 100% and avoid breaking your mobile layout. However it doesn&#39;t actually resize image files.</p></li>
</ol>


<h2>Summary</h2>

<p>So there you have it: real world mobile design with WordPress. As we&#39;ve seen, WordPress can actually make going mobile easier for you, because other people have come up against this problem already and shared their solutions. Don&#39;t you just love Open Source?</p>
