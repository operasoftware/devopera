---
title: Adding Meaning to Your HTTP Error Pages!
authors:
- stuart-colville
intro: 'The default HTTP error pages served up by a web server such as Apache will not be very helpful to your site’s visitors, should they ever be unlucky enough to stray across them. In this article, Stuart Colville shows you how to add custom error pages to your web site, and design them so that they draw your site visitors back into your site, for example to related articles.'
tags:
- apache
- http
- python
license: cc-by-nc-sa-2.5
layout: article
---

## Introduction

When searching for something on the web we’ve all had the experience of clicking on a link in a search engine’s results page only to find that the page no longer exists. If there’s no information on that page other than a default error message, the most likely course of action on the user’s part is to press the back button and try the next search result.

As site authors we can make our error pages more meaningful to our users, so that an error becomes an opportunity to bring the user back into a site and show them content that’s relevant to what they’re looking for. In this article I’ll show you how to do just that.

The contents of this article are as follows:

- [Typical HTTP error codes](#error-codes)
- [Creating a custom error page](#custom-errors)
- [Making a smarter error page](#smarter-errors)
	- [Search engine referrers](#referrers)
	- [A word on security](#security)
	- [Providing useful routes back into your site](#routes-back)
	- [Handling content removal](#content-removal)
	- [Bending the rules for SEO](#bending-rules)
- [Pitfalls to avoid](#pitfalls)
	- [Monitor error page resources carefully](#monitoring)
	- [Ensure the correct HTTP status code is served](#http-statuses)
	- [Set up redirects for URLs that have changed](#redirects)
	- [Avoid mystery timed redirects](#mystery-redirects)
- [Summary](#summary)

## Typical HTTP error codes {#error-codes}

For the purpose of this article we’re going to focus on creating pages for handling the following [HTTP status codes][1]:

[1]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html

- **404:** When a page is not found by your webserver it will serve a `404 NOT FOUND` status in its response headers. Along with the status code, most webservers are configured by default to display a basic page providing limited details of the error. The language used in these pages is often not particularly informative and tends to be overly technical.
- **410:** A `410 GONE` status is similar to the 404 page, except that it’s saying that the content has been deliberately removed. For example, you should return this status if a news article had to be removed for legal reasons.
- **500:** A `500 Server Error` page is shown when the server has a serious problem. Typical causes of 500 errors would be misconfiguration of the web server or a fatal error in server-side code. This page should always be static, because — depending on the cause of the error — you cannot guarantee that execution of server-side scripting (such as calling separate include files or a redirection to another page) will be possible.

## Creating a custom error page {#custom-errors}

On any site it’s a good idea to create a design for your error pages so that the error pages fit into the overall design. If you don’t configure custom error pages, users will only see the default error page for the particular web server or framework you are using.

Another good reason to override Apache’s default error pages is the fact that Internet Explorer displays its own internal error pages if the error page served is smaller than 512 bytes — and all of the default error messages are below this arbitrary threshold.

All that’s needed for a custom page is to create an HTML document for each error that you want to handle and then configure your webserver or framework to use them in place of their defaults.

For starters, any useful error page needs to provide a clear indication of what has happened, so that the user understands what went wrong. It’s best to avoid any technical jargon, as we want to avoid scaring users into reaching for the back button.

The default apache error document reads as follows:

	Not Found

	The requested URL /blah was not found on this server.

We as developers all know what a URL is, but would your granny? You should tailor the language of your error message to be understandable by your site’s audience, whether it is likely to be web geeks, or normal people.

An alternative version to this would be to use something a little more human, like this example used on google.com:

	The page — www.google.com/dkjfhsd — does not exist.

	Suggestions:

	• Check the spelling of the address you typed
	• If you are still having problems, please visit the Help Center

To get you started, here’s a simple example using Apache — don’t forget to make it look pretty. (If you’re lacking creative inspiration, [Flickr][2] can provide some ideas):

[2]: http://flickr.com/search/?q=404+page

Create your markup (feel free to reuse [my example][3])

[3]: /articles/adding-meaning-to-http-error-pages/404.html

	<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
	<html lang="en">
	<head>
		<title>Page Not Found</title>
	</head>
	<body>
		<h1>Page not found</h1>
		<p>
			The page you were trying to reach doesn’t exist.
			To continue on your journey please try one of the following:
		</p>
		<ol>
			<li>
				<!--
					You could display the request url here
					but as always be sure to escape it correctly
				-->
				<p>
					Please check the url (web address) is correct;
					does it contain any spelling errors or typos?
				</p>
				<p>
					If it does — please correct it in the address bar
					of your browser and hit enter
				</p>
			</li>
			<li>
				<!-- Provide a standard search box for your site -->
				<p>Try searching for the content you were looking for</p>
				<form  method="GET" action="/search/">
					<!--
						Using a <div> here as we don’t want a <fieldset>
						and <legend> for a search box
					-->
					<div>
						<input name="q" value="">
						<input type="submit" name="submit" value="Search">
					</div>
				</form>
			</li>
			<!--
				if referrer is set you could set up a link to send them back to that —
				just be sure to not trust that data and make sure you’re not setting up
				a security hole in your site
			-->
			<li>
				Press the back button on your browser to return
				to the page you were previously on
			</li>
		</ol>
	</body>
	</html>

Save this page in the `htdocs` folder of your Apache server installation. Configure Apache to serve this page for 404 errors

The main configuration file is usually called `httpd.conf` or `apache2.conf`, depending on the version of Apache you’re using.

	ErrorDocument 404 /srv/awesome.com/htdocs/404.html

If you place the error document inside the main configuration folder as instructed above, then it will be the error page for every site and virtualhost on your server. If you’d prefer to set up separate error pages for each virtualhost, you will need to place them inside the root folder of each virtualhost and specifically configure their individual `ErrorDocument` directives. For detailed information on virtualhosts setup, see the [Apache vhosts Documentation][4].

[4]: http://httpd.apache.org/docs/trunk/vhosts/

Restart Apache.

- On most Linux systems — `sudo /etc/init.d/apache2 restart`
- On Mac OS X — `sudo apachectl restart`

There are a few caveats when configuring the `ErrorDocument` directive in Apache. If you specify a full URL for an error document, Apache will redirect the client to that location and the client will see the redirect status code rather than the original error page status code. This is something to be avoided as it’s extremely important to make sure error pages are served with the correct status code — not doing so can confuse search engine robots.

## Making a smarter error page {#smarter-errors}

So, if you follow the example above for all your different error codes, you’ll end up with a beautiful set of custom error pages that look a lot nicer than the defaults and that describe what the error really means to the user in a friendly way. Having done this, how can we make our error pages even better?

First let’s look at making our error pages smarter for our users. Say a site visitor has come to our site looking for a particular piece of information and has hit the 404 page — what can we do to retain them?

### Search engine referrers {#referrers}

A [referrer][5] is a header sent by the browser which tells a server the previous site the user was visiting. Like any data sent by the browser, we can’t trust it completely — but it can still be used to attempt to deduce some information about where a user has come from.

[5]: http://en.wikipedia.org/wiki/Referrer

Here’s an example of how to extract the keywords from a Google referral. An example google search URL looks like so:

	http://www.google.co.uk/search?hl=en&q=barista+champion&btnG=Google+Search&meta=

Using an appropriate server-side function such as Python’s `urlparse` module we can extract the relevant parts of the the query string:

	>>> import urlparse
	>>> url = "http://www.google.co.uk/search?hl=en&q=barista+champion&btnG=Google+Search&meta="
	>>> url_parts = urlparse.urlparse(url)
	>>> url_parts
	('http', 'www.google.co.uk', '/search', '', 'hl=en&q=barista+champion&btnG=Google+Search&meta=', '')

Note that in Python 2.5 `parse_qs` is found in the `cgi` module, eg:

	>>> from cgi import parse_qs
	>>> query_parts = parse_qs(url_parts[5])
	>>> query_parts
	{'q': ['barista champion'], 'btnG': ['Google Search'], 'hl': ['en']}
	>>> terms = query_parts.get('q', None) and query_parts['q'][0].split()
	>>> terms
	['barista', 'champion']

Also note that in Python 2.6 `parse_qs` is found in the `urlparse` module, eg:

	>>> query_parts = urlparse.parse_qs(url_parts[4])
	>>> query_parts
	{'q': ['barista champion'], 'btnG': ['Google Search'], 'hl': ['en']}
	>>> terms = query_parts.get('q', None) and query_parts['q'][0].split()
	>>> terms
	['barista', 'champion']

Last, note that in Python 3.0 The entire [`urlparse` module][6] is moving to `urllib.parse`; the `2to3.py` script can update your code for you when you’re ready to move to Python 3.

[6]: http://www.python.org/doc/2.6/library/urlparse.html?highlight=2to3

If a user has come to our site from the results page of a search engine, we can look at the referrer and work out what search terms they had entered. We can then use those terms to search our site and provide a set of alternative content that matches those results. For instance, you could feed those terms into your own search function and surface some relevant pages that might be of interest.

### A word on security {#security}

As with any other external source, it’s important to take care when making use of any data sent in a referrer, as you cannot trust this data — a referrer header can easily be forged. If you are displaying anything on your site based on the referrer, it’s important to ensure that it’s correctly escaped to [avoid XSS vectors][7]. If you are using referrer data to run queries against a database, you should also ensure that you correctly filter the data to avoid the possibility of an [SQL injection attack][8].

[7]: http://en.wikipedia.org/wiki/Cross-site_scripting
[8]: http://en.wikipedia.org/wiki/Sql_injection

### Providing useful routes back into your site {#routes-back}

If a visitor didn’t land on your error page from a search engine’s results page, you have less to go on in terms of knowing what the the user was looking for. But never fear — there’s still plenty of approaches that can be used to engage the user.

One possibility is to surface your site’s most popular content. For example, if you’re running an online shop then an obvious choice would be to provide links to the 10 most popular products on your site.

Another approach is to provide a search box for users to use to find something relevant. It’s still worth looking at the referrer header, as you may be able to use a similar approach to that of the search engine referrer, which is to break apart the referring URL to feed a search. This will probably only work if your site is designed with nice URLs, eg:

	http://caffeineftw.com/news/2009-world-barista-championships

In this example, we can take the last part of the URL and split on the hyphen to get a nice set of search terms. We could also process out the [stop words][9] such as and and to, but this may not be necessary if our site’s search capability already takes care of that.

[9]: http://en.wikipedia.org/wiki/Stop_words

Here’s a very basic example of how we can break this down (again, in Python):

	>>> url = 'http://caffeineftw.com/news/2009-world-barista-championships'
	>>> [ item for item in url.split('/') if item !="" ][-1].split('-')
	['2009', 'world', 'barista', 'championships']

So in this case we could feed our search with the following keywords:

	2009 world barista championships

And present links to some likely matches on our 404 page, so that the user will almost certainly be brought back into looking around the site.

### Handling content removal {#content-removal}

As briefly mentioned above, sometimes it’s necessary to explicitly remove content from a site, and a `410 GONE` status should be served.

Ideally your content management system will not actually delete content when it’s removed, but retain it in its data store and only make it unreachable for outside users, Assuming that you can still access the original content behind the scenes, you can use that data and associated metadata in the 410 error page to once again feed a search or automatically find related content.

As an example, you might have published an article about a celebrity wedding, which has then had to be removed due to legal reasons. The URL has now become a `410 GONE` error page, but your server-side code can still use its knowledge of what used to be displayed on that addess and feed a search with any stored tags or other metadata, so that you can at least provide a list of related content for the uses.

### Bending the rules for SEO {#bending-rules}

Sometime it’s necessary to bend the rules and make what should be a 404 or 410 page a `200 OK`. This is a technique used for SEO purposes when there’s lots of inbound links pointing a page that has been removed. In those special cases it can be useful to retain inbound traffic by essentially promoting a specialised error page in place of the previous content.

## Pitfalls to avoid {#pitfalls}

Here’s a number of potential pitfalls to avoid when building smarter error pages.

### Monitor error page resources carefully {#monitoring}

If you’re adding searches fed by keywords extracted from referrers and historical metadata you want to keep a close eye on those pages, as delivering a smart error page will obviously use more resources than serving up a static page. To limit the resource hit, it’s worth thinking about caching search results for a limited time — that way, if you get a lot of errors in a short time due to a bad internal link, the load on the server is controlled.

### Ensure the correct HTTP status code is served {#http-statuses}

A common mistake is to set up a custom error page, but to end up serving it with a `200 OK` status code. This can be an issue if a search engine indexes your site, sees the `200 OK` responses for what should be 404 or 410 error codes, and ends up indexing your actual error page. This will lead to listings for your company appearing with the error page content in the search results pages, instead of more meaningful content.

Another thing to avoid is redirecting to an error page. If something is wrong you really should be serving the correct status code at the exact URL that was requested, not changing the URL.

### Set up redirects for URLs that have changed {#redirects}

In an ideal world all URLs would be permanent. However, in the real world there will always come a time where a URL has to be moved for some reason or another.

If a 404 error is occurring because you’ve moved a page to a different URL then the correct way to handle that is to issue a `301 Moved Permanently`, which instructs the browser to seamlessly take the user to the content’s new location. This header also helps to get the new location indexed by search engines, and the outdate URL to be replaced in their database with the new one (maintaining any keyword and search ranking you may already have had for the old address).

Ideally, your content management tool should be automatically keeping track of pages you move and set up relevant `301 Moved Permanently` redirect locations accordingly.

### Avoid mystery timed redirects {#mystery-redirects}

At the time of writing the [yahoo.com][10] 404 page uses a meta-refresh to send users to their homepage after 10 seconds, but they also provide a search box on their 404! This means that you could be in the middle of typing a new search when you are redirected to the homepage without any prior warning — an annoying “feature” to avoid.

[10]: http://yahoo.com

## Summary {#summary}

In this article we’ve covered ways to build smart error pages that are designed to guide the user back into the site by showing them relevant content when something goes wrong. Doing this attempts to engage your audience and maximises the time they spend on your site without having them navigate back to a search results page.
