---
title: Responsive Web Development With WordPress — a Case Study
authors:
- rachel-mccollin
intro: 'This article presents a case study that specifically details solutions to some responsive design problems encountered when developing sites with WordPress, including responsive images, responsive video, and site planning.'
license: cc-by-3.0
---
Responsive web design is maturing.

Many of us have moved on from thinking about media queries and responsive layout towards addressing the challenges of responsive images, navigation, UX and more.

Content and planning are important too. Even if you’re not adopting a Mobile First strategy, it’s important to consider the mobile experience when planning any responsive site. This includes thinking about content, user experience, design, performance and more. [Rudy Rigot’s article on responsive projects](https://dev.opera.com/articles/responsive-design-project-management/) examines more of these issues in detail.

In this article I’ll look at some of these considerations in the light of a specific case study — a responsive WordPress site I developed to support the campaign for an elected mayor in Birmingham, England (we’ll say nothing more about whether it worked — the result was a ‘no’ vote — but building the site was fun anyway!)

## Planning the site

The site in question — [What’s a mayor for?](http://whatsamayorfor.org.uk/) — was built to a tight deadline (one month to plan, design and build) and an even tighter budget (almost nothing). We looked at a variety of platforms used for campaign websites but decided on [WordPress](http://wordpress.org/) because it’s free and because there were members of the team with experience developing and editing WordPress sites.

Before any design or coding was done, we needed to know what the site had to achieve. So, in the space of a week, we developed a strategy to include key messages we had to communicate, the site’s target audience, the experience we wanted users to get from the site and how they would interact with it, and finally how the site would be maintained and updated.

Once we’d agreed all of this and put a team in place, we started to identify exactly what the site should include:

* Articles and posts: opinion pieces, political analysis and straightforward news.
* Video: from external sources and recorded by team members.
* FAQs: answering questions from voters.
* Surveys:  a simple yes/no survey and asked people if they would be prepared to give us their email address, for further correspondence.
* Volunteer area: providing volunteers with information about events and campaign activity.

And, of course, we wanted people to be able to access the site wherever they were and whatever device they were using, so it would be fully responsive. We had to build that into the planning of the site so we could incorporate responsiveness from the very beginning.

## More than just media queries - what this meant for development

Having identified this set of content, my next task was to design the site. This would normally mean producing mockups. Given the lack of time and the fact that the site was required to be responsive, I decided to dispense with this stage altogether and designed in the browser, working from a set of rough pencil sketches I made for myself to show different layout ideas at different screen widths, and a colour chart I developed after discussion with the client.

### Designing in the browser — a successful experiment

This was the first time I have built a site with no mockups or design and it was an interesting experience. There were some challenges:

* Coding from scratch with no visual representation of what I was trying to achieve — a real challenge for me as I’m quite a visual type.
* Having to play with ideas in code rather than in a graphics package. At first this felt more time-consuming because I had to continually switch between browser and code editor, but ultimately saved time because my experiments reflected what the site would really look like.
* Avoiding the temptation to code lots of fancy stuff in at the start which wasn’t cross-browser compatible — unfortunately the client needed to support IE6 upwards so progressive enhancement was a must.
* It took more work to get something together to show the client — pulling together a mockup in Fireworks would have taken me a couple of hours, while coding some representative working pages took substantially longer (but saved on development time afterwards).

Having said this, designing in the browser had some real advantages:

* In the long run, it was quicker, especially given that the client had given me free rein with the design and didn’t ask for any changes once it had been coded.
* I could make the site responsive from the outset and test every design change on multiple screen sizes as I went along, instead of having to revisit code which didn’t work well on smaller screens at a later stage.
* The first time the team saw what the site would look like, it was in the browser, which I’m sure was instrumental in the fact that no-one asked for any changes. It’s easy to focus on minor visual changes when looking at a pdf, but in the browser those niggles take second place to the content and interactions.

All in all, given the right project and a trusting client, this is something I’d definitely do again.

### Responsive images — the approach I took

The first element of the site which had to be made responsive (bar the layout itself)  was the images. I won’t dwell on this in detail, as [Matt Wilcox has written on the topic in detail](https://dev.opera.com/articles/responsive-images-problem/) — but it’s worth describing the WordPress-specific solution I used.

WordPress creates multiple copies of an image when you upload it, meaning you have access to three differently sized images (by default — it’s possible to change this). I took advantage of this, and the WordPress featured image functionality, to deliver smaller images to mobile devices. I’ve written about [how I did this for Smashing Magazine](http://www.smashingmagazine.com/2012/06/14/responsive-images-with-wordress-featured-images/), so will summarise it briefly here.

This approach involves three steps:

1.  Installing a plugin called [Mobble](https://wordpress.org/plugins/mobble/), which provides some conditional functions designed to target mobile devices.
2.  Editing the `single.php` and `page.php` files in the theme to call the post thumbnail at different sizes depending on the device the site’s being viewed on. I added this code immediately after the page title.
3.  Within each page and post, adding a featured image using inbuilt WordPress functionality.

You can [see this responsive images technique in action](http://compass-design.co.uk/resp_images/after/) on the website I set up to demonstrate it.

This was a quick and easy solution for us but does have some drawbacks:

* It relies on site editors using featured images instead of simply uploading images into the post
* The Mobble plugin uses UA detection, which is widely recognised as bad practice. We tested its effect on the devices and browsers we were targeting and it proved reliable, but in future I’d prefer a solution which didn’t use this approach.

If I was developing this site again, I’d use Stuart Bates’s [WP Responsive Images plugin](https://wordpress.org/plugins/wp-responsive-images/), released after I built this site. This plugin uses JavaScript to detect the width of the screen, saves this in a cookie and then uses a handler script to create a correctly sized image, deliver and cache that image. Stuart Bates has documented how the plugin works in more detail [on his blog](http://www.stuartbates.com/wp-responsive-images/). This plugin has two advantages over the approach I used: it doesn’t rely on UA detection, and it doesn’t require the site editor to use featured images.

### Responsive video — a little bit trickier

The next stage after making the images responsive was to make the site’s video clips responsive too. This was potentially a bit trickier — I couldn’t just upload different resolutions of video and serve them to different devices, as WordPress doesn’t have a featured video capability (maybe one day!).

The solution took advantage of the fact that we’d decided to stream video from YouTube, meaning videos wouldn’t be loaded until they were activated and we didn’t have to host them on the site. When the user watches a YouTube video that’s been embedded in a third party website, YouTube automatically handles screen resolution etc., saving us all the hassle of sending different video files to mobile. I guess we could have uploaded our own videos and used HTML5 to display them, but WordPress would have grumbled at us and at the size of files we were uploading, and we would have run into problems on older browsers.

However, although YouTube displays videos nicely on mobiles once they’re activated, resizing embedded videos in the layout isn’t quite so straightforward. I played around with the iframe settings for what seemed like hours until I came across [a solution documented on A List Apart](http://alistapart.com/article/creating-intrinsic-ratios-for-video), which uses absolute positioning to resize the video within the iframe dynamically. The only downside was that it involved adding an extra element for styling -—something purists would baulk at I know, as that element has no semantic relevance.

This solution involves:

* Wrapping the `<iframe>` in a containing element
* giving that element the following:

	* `relative` positioning
	* `bottom-padding` based on the aspect ratio of the video (e.g. 56.25% will give an aspect of 16:9 as that equates to 100:56.25 — 56.25 divided by 100 is 56.25%)
	* `top-padding` equal to the pixel height of the chrome added by YouTube
	* A `height` of zero (the video’s height is handled by the padding)
* Giving the `<iframe>` itself the following:

	* `absolute` positioning
	* A position of `top left`
	* A `width` and `height` of 100%, ensuring the video appears to fill the containing element

You can see one of these videos in action on the [What’s a Mayor for site](http://whatsamayorfor.org.uk/video/breakfast-debate/).

This solution worked well but had the drawback that a containing element had to be coded into each page with an embedded video — something that would present more of a challenge when clients are adding the embed code themselves. An alternative solution might be to use the very new [Responsive Video plugin](http://wordpress.org/extend/plugins/responsive-video/), developed by [Kirsty Burgoine](https://twitter.com/KirstyBurgoine) which, again, hadn’t been developed when I built this site (just showing how quickly WordPress is catching up with some of the challenges thrown up by responsive design). This plugin automatically styles any videos with the correct CSS to make it responsive when the video URL is added with a shortcode. Again, it saves relying on the site editor to do anything tricky — in this case I was wrapping each video in an extra `<div>`, which other editors may not have felt comfortable doing.

### Responsive forms — UX is everything

The site included a few forms — surveys, a ‘get involved’ form, a ‘get in touch’ form, and more. The forms worked in different ways — some were designed to sign users up to the site, others were linked to a newsletter registration and others were just gathering data.

We used a variety of plugins depending on how the form data was going to be used, but by far the best when it came to responsiveness was [Gravity Forms](http://www.gravityforms.com/). This plugin creates forms styled with percentage widths that automatically resize according to the width of the browser. If you want to make the UX even better, it’s easy to add bespoke styling to some default classes that Gravity Forms uses to style side-by-side input fields, giving them full width and moving them one below the other when the screen becomes too narrow. The only downside is that Gravity Forms costs money.

None of the free forms plugins (unfortunately) delivered responsiveness out of the box, so I had to make some tweaks:

* removing pixel based widths for input fields and replacing them with percentage widths
* restyling submit buttons for ease of use on smaller screens, particularly touch screens. We used padding to make the buttons a bit larger and amended the size of text to make it super-easy to read.
* resizing fonts to ensure text in form descriptions was easy to read.

This gave us some quick forms for [surveys](http://whatsamayorfor.org.uk/survey/do-you-think-birmingham-should-have-a-directly-elected-mayor/) and information-gathering that were easy to use.

None of this was too complicated but it would be nice to see more form plugins using fluid widths. And because of the tight timescales for developing this site, I didn’t manage to get the UX quite right for some of the forms.

### Responsive BuddyPress - now you’re talking!

I’d tried to develop a responsive [BuddyPress](http://buddypress.org) site before and had all sorts of problems, so I wasn’t looking forward to this bit — in fact, I left it out of the initial stages altogether, preferring to get the public-facing site working first. But I couldn’t avoid the need to add BuddyPress to the volunteer area forever, so eventually I had to dive in and hope for the best.

BuddyPress, for those who haven’t experienced it, is a social plugin for WordPress. It allows you to turn a WordPress site into a fully functioning community or networking site, with user profiles and posts, interactions between users, events, groups and more. All of its functionality is modular so you can switch on and off what you don’t need.

I was pleasantly surprised. I had been worried that I didn’t take the route recommended by most BuddyPress developers — take an existing BuddyPress theme and make it responsive — but was doing it the other way round, bolting BuddyPress onto my already responsive theme. Happily, almost all elements resized themselves on different devices and I only had to change a bit of absolute positioning and tweak some pixel-based layout values to make the layout work.

The main tweaks I had to make were:

* Changing the margins on the tabs that appear at the top of the BuddyPress content area to reduce the horizontal spacing
* Adding percentage width settings to some items to replace pixel-based widths
* Amending the positioning of some absolutely positioned content that was moving outside its containing elements on small screens

All in all, it only took 19 lines of code and BuddyPress was behaving responsively — a huge relief!

The main reason for this simplicity, I think, is that my original theme was based on a stripped-down version of twenty ten, the old default WordPress theme, which I hacked to pieces when it came out, stripping out code I didn’t need and making it responsive. I now use it as a parent theme for all of my sites, and the fact that this site had a layout which isn’t too far off that of twenty ten meant that any BuddyPress compatibility built into that benefitted me as well.

If you’re looking to build a responsive BuddyPress site, I’d recommend taking one or more of the following approaches:

* If you don’t already have your own theme or preferred framework, use an existing, responsive BuddyPress theme and create a child theme for that when building your site — the default theme is a good place to start, or you can [check out this list on WPMU](http://premium.wpmudev.org/blog/10-responsive-buddypress-themes/).
* If you want to start with an existing WordPress theme, either as your final theme or as a parent theme, choose [twenty eleven — the current default WordPress theme](https://wordpress.org/themes/twentyeleven), or another theme based on it.
* If you’re developing your own theme, install the BuddyPress plugin early on in development and design in the browser, as I did here — that way you can make sure your site is responsive and BuddyPress friendly before it’s too late to fix it easily.
* If developing responsive BuddyPress sites is something you’re going to do a lot, consider developing a starting theme or a parent theme containing the code tweaks needed to get BuddyPress to display responsively, to save constant reworking.
* Keep an eye out for BuddyPress updates — responsive and mobile development is something the BuddyPress team have been working hard to incorporate. But please remember these guys are volunteers, so if you need things to move quicker, just help out!

## Summary — and what I would have done differently

As with any project, looking back at this site build a few months later means I’m spotting things I would have liked to do differently. But in the timescales and the budget we had, we did a reasonably comprehensive job of building a responsive site with a variety of content, media and functionality. Enhancements I would like to have made include:

* Considering restructuring the content for mobile devices (without hiding any of it) — making the home page a bit simpler on small screens and maybe amending the navigation to make it easier for users to get to the pages most commonly viewed on mobile.
* Enhancing the form UX, especially for the ones using some of the less accomplished free forms plugins.
* Using plugins to deliver responsive images and video, removing the need for more complicated workarounds.

As it is, Birmingham voted ’no’ and so the site ceased to have a purpose after May 2012. But I know it gave me and other members of the team some great experience in planning, designing and developing a responsive campaign website, something which we’ll be able to draw from for future projects.

## Resources

On dev.opera.com:

* [Matt Wilcox on responsive images](https://dev.opera.com/articles/responsive-images-problem/)
* [Rudy Rigot on project management for responsive sites](https://dev.opera.com/articles/responsive-design-project-management/)
* [Chris Mills on adaptive design](https://dev.opera.com/articles/adaptive-web-design-with-media-queries/)
* [Bruce Lawson on mobile optimization](https://dev.opera.com/articles/mobile-web-optimization-guide/)
* [Rachel McCollin (yes, me!) on mobile WordPress development](https://dev.opera.com/articles/wordpress-goes-mobile/)

WordPress resources:

* [List of responsive BuddyPress themes](http://premium.wpmudev.org/blog/10-responsive-buddypress-themes/)
* [WP Responsive Images plugin](https://wordpress.org/plugins/wp-responsive-images/)
* [Responsive Video Embeds plugin](https://wordpress.org/plugins/responsive-video-embeds/)
