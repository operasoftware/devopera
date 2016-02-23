---
title: 'Web Storage: Easier, More Powerful Client-Side Data Storage'
authors:
- shwetank-dixit
intro: 'This article covers Web Storage, a new W3C specification supported in Opera 10.50+ that allows data to be saved on the client-side in a much more powerful, more secure fashion than before. Here Shwetank Dixit discusses both facets of Web Storage - Local Storage and Session Storage - and how to use them to store web application data on the client, along with some simple examples to get you started.'
license: cc-by-nc-sa-3.0
---
## Introduction

Web applications are getting more advanced each day, with more elaborate uses of JavaScript as well as upcoming standards and technologies. We increasingly rely on these applications, many of them becoming a part of our daily lives. One area in which Web application development has been lacking is the ability to store data on the client-side. That is, until now.

[Web Storage](http://dev.w3.org/html5/webstorage/) is a W3C specification that provides functionality for storing data on the client side until the end of a session (Session Storage), or beyond (Local Storage). It is much more powerful than traditional cookies, and easier to work with. In this article we will look at why this is, and how to use it.

## The current problem: cookies can crumble

Before we go on further, let’s take a very brief look on why the current way of storing data on the client-side — cookies — is a problem:

* Low size: Cookies generally have a maximum size of around 4 KB, which is not much good for storing any kind of complex data
* It’s difficult for cookies to keep track of two or more transactions on the same site, which might be happening in two or more different tabs
* Cookies can be exploited using techniques such as cross site scripting, resulting in security breaches

Other (less popular) alternatives to cookies include techniques involving query strings, hidden form fields, flash based local shared objects, etc. Each with their own set of problems related to security, ease of use, size restrictions etc. So up until now we have been using  pretty bad ways of storing data on the user’s end. We need a better way, which is where Web Storage comes in.

## Web Storage

[The W3C Web Storage specification](http://dev.w3.org/html5/webstorage/) was designed as a better way of storing data on the client-side. It has two different types of storage: Session Storage and Local Storage.

Both Session and Local Storage will typically be able to store around 5 MB of data per domain, which is significantly more than cookies. As we’ll read on, we’ll find out more about them, and what makes Web Storage a better storage mechanism.

### Session Storage

Session Storage has one purpose: to remember all the data in your session, and forget it as soon you close the tab (or window) you are working in.

#### Setting and retrieving data

To set a key value pair in Session Storage, you just need to write a line like this:

		sessionStorage.setItem(yourkey, yourvalue);

To retrieve the data again, you would write:

		var item = sessionStorage.getItem(yourkey);

To store the value <q>This is a sample sentence</q> in the Session Storage, you could write:

		sessionStorage.setItem(1, 'This is a sample sentence');

Here, the key value is `1`, but that does not mean that it’s the first value as such. It just converts the number `1` in a string `'1'` and uses that as key, it does not put that key value pair in the first position as such.

And to retrieve that sentence back inside a JavaScript alert, you’d write:

		var item = sessionStorage.getItem(1);
		alert(item);

Another example of `setItem()` could be:

		sessionStorage.setItem('name', 'john');

…and you could retrieve it using…

		var name = sessionStorage.getItem('name');

#### Removing and clearing data

There are also methods for removing and clearing data from the Session Storage. The `removeItem()` method is used to remove a particular item from the list:

		var item = sessionStorage.removeItem(yourkey);

Bear in mind that you can also just reference a data item’s key and remove it from the list that way:

		var items = sessionStorage.removeItem(1);

The `clear()` method is used to clear all items in the list; you use it in the following way:

		sessionStorage.clear();

And you can use the `length` attribute to find out of the number of key/value pairs in the storage, like this:

		var no_of_items = sessionStorage.length;

## Local Storage

Local Storage is used if you want the data to be stored for more than a single session. A simple use case would be to count the number of times a person has visited a Web page. When a page uses Local Storage, the page (or window) can be closed and re-opened, and still show the saved data — it provides persistent storage.

Saving and retrieving data in Local Storage works similarly to Session Storage: it uses the same function names `setItem()` and `getItem()`. To save a sentence in Local Storage you write something like this:

	localStorage.setItem(1, 'This is a sample sentence');

…and to retrieve it:

	var data = localStorage.getItem(1);

Also just like Session Storage, Local Storage supports the `length` attribute, `removeItem()`, and `clear()`.

In both Session Storage and Local Storage, the `clear()` function has the same objective — to clear _all_ the values in list. This means that if you call, say `localStorage.clear()` then it will remove all local storage from that origin. So all Local Storage data from say, `www.example.org`, `www.example.org/abc/`, `www.example.org/xyz/`, will be cleared. However, storage for, say, `abc.example.org` or `example.org:80` will not be affected by it. For Session Storage though, it will only clear the storage for the current session.

## A simple example

To illustrate Web Storage in action, I have created a simple example that uses both Local Storage and Session Storage. Check out the [Web Storage demo page](http://people.opera.com/shwetankd/external/demos/webstorage_demo.htm) to see this in action. The demo will ask you to enter two strings, one for Session Storage, the other for Local Storage. You can then open the Storage Inspector in Opera Dragonfly to access the Web Storage. You’ll also notice that once you close and page, and then open it again, the data you typed in for Local Storage is preserved, whereas for Session Storage, this is not the case.

## Using the Storage event

The specification also provides for the [storage event](http://dev.w3.org/html5/webstorage/#the-storage-event) to be fired whenever the storage area changes. This provides various useful attributes such as:

* `storageArea`: Tells which kind of storage it is (Session or Local)
* `key`: The key which is being changed.
* `oldValue`: The old value of the key.
* `newValue`: The new value of the key.
* `url`: The URL of the page whose key is changed.

If a `clear()` method is called, then `key`, `oldValue` and `newValue` attributes are set to null. Here is a [modified version of the demo page](http://people.opera.com/shwetankd/external/demos/webstorage_demo2.htm) mentioned previously, this time using storage events to let the user know the change in values. If you enter a value, and then change it once again, then you’ll see an alert mentioning the old value and the new value.

## Where do I get detailed access to Web Storage data on my browser?

In Opera 10.50+, there are a few ways you can do this. You can enter [`opera:webstorage`](opera:webstorage), as well as [`opera:config#PersistentStorage`](opera:config#PersistentStorage) in the address bar to access high level details of Web Storage (what is the storage limit, where it is saved, etc.), but there is an even better way for developers to get detailed information on the Web Storage for a particular page — through the Storage Inspector in Opera Dragonfly, which provides you with much more detailed information.

![Screenshot of Opera Dragonfly providing Web Storage information for that page](storage_inspector.jpg)

Opera 10.50+ has a new and improved [Opera Dragonfly](https://www.opera.com/dragonfly/) debugging tool included (which we recently released as an [open source project](http://bitbucket.org/scope/)). Amongst the fixes, improvements and new features is the Storage Inspector. This gives developers a separate tab to access information regarding cookies and the Local and Session Storage of a page. Open Opera Dragonfly and click on the _Storage_ tab to access it.

## Important things to keep in mind regarding Web Storage

* **Storage per origin**: All storage from the same origin will share the same storage space. An origin is a tuple of scheme/host/port (or a globally unique identifier). For example, `http://www.example.org` and `http://abc.example.org` are two separate origins, as are `http://example.org` and `https://example.org` as well as `http://example.org:80` and `http://example.org:8000`.
* **Storage limit**: As of now, most browsers that have implemented Web Storage, including Opera, have placed the storage limit at 5 MB per domain. You can change this storage limit on a per-domain basis by saving some data from a domain in Session or Local Storage, then going to [opera:webstorage](opera:webstorage). That domain will then appear in the list there, and you can click it to access statistics and options, including size of data saved for that domain, what the storage limit is, and what the browser will do when that limit is exceeded.
* **Security considerations and associated best practices**: Storage is assigned on a per-origin basis. Someone might use DNS Spoofing to make themselves look like a particular domain when in fact they aren’t, thereby gaining access to the storage area of that domain on a user’s computer. SSL can be used in order to prevent this from happening, so users can be absolutely sure that the site they are viewing is from the same domain name.
* **Where not to use it**: If two different users are using different pathnames on a single domain, they can access the storage area of the whole origin and therefore each other’s data. Hence, it is advisable for people on free hosts who have their sites on different directories of the same domain (for example, `freehostingspace.org/user1/` and `freehostingspace.org/user2/`), to not use Web Storage on their pages for the time being.
* **Web Storage is not part of the HTML5 spec**: It is a [whole specification in itself](http://dev.w3.org/html5/webstorage/).

## Read more…

* [Taking your web apps offline: A tale of Web Storage, Application Cache and WebSQL](/articles/view/taking-your-web-apps-offline-web-storage-appcache-websql/)
* [Running your web applications offline with HTML5 Application Cache](/articles/view/offline-applications-html5-appcache/)
