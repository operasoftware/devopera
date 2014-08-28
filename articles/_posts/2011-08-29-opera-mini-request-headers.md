---
title: Opera Mini Request Headers
authors:
- odevrel
intro: 'Opera Mini uses a number of custom, unregistered HTTP headers. Most of these are specific to Mini, and are sent in addition to the regular HTTP headers sent by Opera on any platform. “But what are they, and what can I do with them?” I hear you cry… Let’s find out.'
license: cc-by-3.0
---

## Introduction

Opera Mini uses a number of custom, unregistered HTTP headers. Most of these are specific to Mini, and are sent in addition to the regular HTTP headers sent by Opera on any platform. The purpose of these headers is to give site owners information about the user’s handset and its capabilities/features.

## User-Agent

The User-Agent header contains the browser UA string information, divided up into tokens. To start with, here is an example of an User-Agent header:

	User-Agent: Opera/9.80 (J2ME/MIDP; Opera Mini/6.1.25378/25.692; U; en) Presto/2.5.25 Version/10.54

This is broken up into tokens, as follows:

	User-Agent: Opera/9.80 ($PLATFORM_NAME$; $PRODUCT_NAME$/$CLIENT_VERSION$/ $SERVER_VERSION$;U; $LOCALE$) $PRESTO_VERSION$ $EQUIV_DESKTOP_VERSION$

The tokens are as follows:

### $PLATFORM_NAME$

`$PLATFORM_NAME$` contains the name of the platform on which the client is running. It can be one of the following:

- Android
- BlackBerry
- BREW
- J2ME/MIDP
- iPhone
- iPad
- MTK
- Series 60
- Windows Mobile

### $PRODUCT_NAME$

`$PRODUCT_NAME$` contains the name of the product, which is always `Opera Mini`.

### $CLIENT_VERSION$

`$CLIENT_VERSION$` contains the version number of the Opera Mini client being used.

### $SERVER_VERSION$

`$SERVER_VERSION$` contains the version number of the transcoder being used on the Opera Mini server.

### $LOCALE$

`$LOCALE$` contains the language code for the locale of the current Opera Mini client, for example `en` for English.

### $PRESTO_VERSION$

`$PRESTO_VERSION$` contains the version number of the Presto rendering engine being used by the transcoder on the Opera Mini server.

### $EQUIV_DESKTOP_VERSION$

`$EQUIV_DESKTOP_VERSION$` contains an indication of the equivalent desktop version. This was added to provide a similar UA syntax to desktop, rather than indicate capabilities, so it is not to be used for definite capability detection .

## X-OperaMini-Features

This header contains a comma-separated list of features supported by the phone. This can be used for capability detection before serving content.

### Format

	X-OperaMini-Features: <feature> *[ , <feature> ]

### Example

	X-OperaMini-Features: advanced, camera, folding, secure

### Possible values

- `advanced` (Opera Mini 4 and later): The client is the MIDP 2 version of Mini (also referred to as the high memory version). See the [Opera Mini FAQ page][1] for a description of the differences between the MIDP1 and MIDP2 versions of Opera Mini.
- `basic`: the client is the MIDP 1 version of Mini (also referred to as the low memory version).
- `camera` (Opera Mini 3 and below): Camera support detected. The user will be able to upload a photo when Mini encounters a file input element (`<input type="file">`).
- `download` (Opera Mini 4 and later): The device supports native downloading.
- `file_system` (Opera Mini 4 and later): File system support detected. The user will be able to save files on the device that are not handled natively by Opera Mini, and upload files when Mini encounters a file input element (`<input type="file">`).
- `folding`: Content folding is supported and enabled.
- `routing`: Means that the client is able to send traffic to different transcoders based on client side rules. This is used in different operator integrations like zero rated traffic to specific domains.
- `secure`: The connection between Mini’s client and proxy server is encrypted. All versions of Mini support SSL encryption between proxy server and web server, but only 3.0 and later supports client to proxy encryption.
- `skindownload` (Opera Mini 4 only): The Opera Mini version can download new skins
- `touch`: The device is a touchscreen device.
- `viewport`: The Opera Mini version supports viewport, which allows web developers to specify optimized rendering information for mobile browsers. For more information on this feature, read [An introduction to meta viewport and @viewport][2] by Andreas Bovens.

[1]: http://www.operamini.com/help/faq/
[2]: https://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/

## X-OperaMini-Phone-UA

This header contains the user-agent string of the client that downloaded the `.jad` file (if available - otherwise it contains the user-agent reported to the client by the device.) If this information is not known to us at all, the value is often reported as `?`.

Note that this header is only present if we have some reasonable evidence that our data is true.

### Format

	X-OperaMini-Phone-UA: <user-agent>

### Example

	X-OperaMini-Phone-UA: SonyEricssonK750i/R1AA Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1

## X-OperaMini-Phone

This contains the manufacturer and model name/number of the device, provided the device makes this information available to Opera Mini. If this information is not known to us, the value is often reported as `?`.

Note that this header is only present if we have some reasonable evidence that our data is true.

### Format

	X-OperaMini-Phone: <manufacturer> # <model>

### Example

	X-OperaMini-Phone: SonyEricsson # K750i

## X-Forwarded-For

This contains a comma-separated list of the proxy servers the request has passed on its way from the device to the Mini proxy. The first item in the list that is not an internal IP will always be the IP address that connects to the Mini proxy, hence it is the most reliable source of information about the origin of the request, and is suitable for geolocation etc.

### Format

	X-Forwarded-For: <IP address> *[ , <IP address> ]

### Example

	X-Forwarded-For: 127.0.0.1, 192.168.0.100, 195.189.143.147, 130.236.236.80

In this case, 195.189.143.147 is the IP address that connects to the Mini proxy, as it is the first item in the list which is not an internal IP address.

## Accept-Language

`Accept-Language` specifies what language(s) the browser would prefer the response to be written in. You can specify multiple languages in a comma-delimited list using standard language tags, and each language can be given a quality value that indicates the user’s ability in those languages (this value defaults to 1 if not specified, which is the highest - the values range from 0 to 1.) For example, the actual example given at the bottom of this section means “I’d prefer to be sent old (bokmal) or new Norwegian, but I am also pretty good at English… I’ll also try French if you’ve not got the other two languages available, but I’m not very good at that.” If `Accept-Language` is not specified, then the server should assume that all languages are acceptable to the user.

### Format

	Accept-Language: <language tag> [;q=<quality value>], …

### Example

Accept-Language: no-bok, no-nyn, en;q=0.8, fr;q=0.4
