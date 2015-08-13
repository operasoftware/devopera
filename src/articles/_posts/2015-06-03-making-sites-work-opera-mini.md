---
title: 'Making websites that work well on Opera Mini'
authors:
- bruce-lawson
intro: 'How to make websites that work well on Opera Mini—and everywhere else!'
tags:
- html5
- opera-mini
- compatibility
- css
- gradients
license: cc-by-3.0
---

I recently gave a keynote talk at Velocity conference called “Ensuring a Performant Web for the Next Billion People” about the importance of developing economies and their use of proxy browsers such as Opera Mini.

[Slides are available](https://brucelawson.github.io/talks/2015/velocity/) and here’s the 20 minute YouTube video made by the organisers.

<figure block="figure">
	<iframe elem="media" width="560" height="315" src="https://www.youtube.com/embed/BHO70H9tvqo" allowfullscreen></iframe>
</figure>

The most common question I got in the hallways was “How can I make my site work well in Opera Mini?”. The answer is simple: use the development methodology known as Progressive Enhancement.

## Progressive Enhancement

[Progressive Enhancement](http://christianheilmann.com/2015/02/18/progressive-enhancement-is-not-about-javascript-availability/) is not a new technique; in fact, it’s built into the very fabric of the web’s original design, and ensures your website works everywhere — not just on Opera Mini and other proxy browsers.

### Send HTML to the device

HTML is a lightweight text format that allows the browser to get to work straight away. It’s become bizarrely fashionable to send JavaScript (with a framework such as Angular, for example) which must be parsed and executed before it can do the same job as plain HTML. This slows the site down and uses more CPU.

Therefore, Progressive Enhancement is better for all users. [Airbnb wrote](http://nerds.airbnb.com/weve-launched-our-first-nodejs-app-to-product/):

> We’ve launched our first Holy Grail app into production! […] It looks exactly the same as the app it replaced, however initial pageload feels drastically quicker because we serve up real HTML instead of waiting for the client to download JavaScript before rendering.
>
> Plus, it is fully crawlable by search engines. […] It feels 5× faster.

### Use SVG rather than icon fonts

Opera Mini doesn’t download web fonts; these are often large files, and are for aesthetic/branding purposes. Fallback fonts are used instead. On many low-specced devices, system fonts are carefully optimised for the device and give a better user experience.

However, icon fonts are sometimes used by developers and these won’t be displayed; this can mean some important information or navigation items are invisible. Use SVG images instead; these can be compressed to become smaller than icon fonts, and can be made [responsive with media queries](https://dev.opera.com/blog/how-media-queries-allow-you-to-optimize-svg-icons-for-several-sizes/).

This doesn’t just benefit Opera Mini users; many people with mild dyslexia have a [special system font](http://en.wikipedia.org/wiki/Dyslexie#Research) to aid legibility, which breaks icon fonts. See Seren Davies’ presentation [Death to icon fonts](https://speakerdeck.com/ninjanails/death-to-icon-fonts) which explains how icon fonts impact her dyslexia.

### Style your HTML with CSS

Opera Mini deliberately disables some CSS which would otherwise need to be converted to bitmap images and would therefore bloat page size.

Most notably, CSS `border-radius` isn’t rendered. CSS animations are similarly disabled, to preserve battery life.

CSS gradients are also disabled. Ensure that, if you’re using a gradient as a backgound, that you also set a CSS color for the `background` that contrasts well with text. A common error is white text on a gradient and leaving the default white background unchanged; in Opera Mini this results in illegible white-on-white text. So, for example:

	button {
		background: black;
		/*
			Fallback for Mini and other browsers
			that don’t support CSS gradients
		*/
		background: linear-gradient(
			to bottom right,
			red, rgba(255, 0, 0, 0)
		);
		color: white;
	}

Opera Mini is sent a black background for the white text, and so the button’s text is visible; this is overridden in browsers that support CSS gradients.

### Test your site without JavaScript

Test your HTML and CSS site with JavaScript disabled. In Opera Desktop, for example, open the Developer Tools (right-click anywhere, choose “inspect element”, click the settings cog icon, check “Disable JavaScript”).

Everything should still work, although it will probably be much more clunky. That’s OK; if your site works clunkily and your competitors’ sites don’t work at all, you’ll get the business.

Ensuring your site functions without JavaScript doesn’t only benefit proxy browser users; research by GDS, the UK Government’s Digital Services agency, shows that [1.1% of browsers don’t run JavaScript](https://gds.blog.gov.uk/2013/10/21/how-many-people-are-missing-out-on-javascript-enhancement/) for various reasons: the user may have disabled it, or corporate firewalls block it, for example.

Opera Mini runs some JavaScript on page load, but JavaScript-only APIs don’t work. Treat JavaScript as an enhancement to your core HTML site, not as a pre-requisite.

Read more about [Opera Mini and JavaScript](https://dev.opera.com/articles/opera-mini-and-javascript/).

### Other considerations

If you rely on some sort of Geo IP tool for detecting a visitor’s location, note that the IP address you find in the headers is that of our compression proxy. The user’s original IP address is passed on via the `X-Forwarded-For` HTTP header. (Read more about [Opera Mini request headers](/articles/opera-mini-request-headers/).)

## Testing in Opera Mini

There are several ways to do this.

### Download Opera Mini

You can download Opera Mini onto your device, of course. Point your pocket-dwelling chum at [m.opera.com](http://m.opera.com/) and download it for Android, iOS, Windows Phone or any generic feature phone — Opera Mini works on 3000+ different devices.

If you’re using the iOS version, note that you have to switch it to Mini mode to go through Opera’s Mini servers. Tap the red “O” menu, and choose “Opera Mini”. Opera Mini for iOS also compresses videos. See [more information about Opera Mini for iOS](https://dev.opera.com/blog/opera-mini-8-for-ios/).

### Test from Desktop

For development and testing purposes, it can be useful to install Opera Mini on your computer. You’ll need Java and MicroEmulator, in which you’ll run an instance of Opera Mini for J2ME-enabled feature phones. [Installing Opera Mini on Your Computer](https://dev.opera.com/articles/installing-opera-mini-on-your-computer/) has all the information you need.

[You can even run Opera Mini on a Chromebook.](https://dev.opera.com/articles/opera-mini-chrome-os/) Yes, you read that right.

### Test local web sites using ngrok

Many developers choose to use [ngrok](https://ngrok.com/) to securely expose a local web server to the internet. As their website explains, “ngrok creates a tunnel from the public internet (`https://subdomain.ngrok.com/`) to a port on your local machine. You can give this URL to anyone to allow them to try out a web site you’re developing without doing any deployment”. Then you simply point Opera Mini at `subdomain.ngrok.com` to test your site. ngrok is open source, and also provides a paid-for service.

### Alternatives to ngrok

An alternative to ngrok is [localtunnel](http://localtunnel.me/).

Some people might want to do their SSH tunnelling. Read [SSH Tunnel — Local and Remote Port Forwarding Explained With Examples](http://blog.trackets.com/2014/05/17/ssh-tunnel-local-and-remote-port-forwarding-explained-with-examples.html) for information on how to do this.

## Conclusion

Using Progressive Enhancement makes your site *better for all users* and enables the 275 million users of Opera Mini worldwide.
