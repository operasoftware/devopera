---
title: 'Beacons and Privacy'
authors:
- tommy-thorsen
intro: 'Since the release of our recent [labs build with beacon scanning support](https://dev.opera.com/articles/release-the-beacons/), I’ve noticed from discussions and news articles that there are a lot of misunderstandings about beacons and privacy. This is understandable, since the technology is very new. The fact that there are multiple competing types of beacons, does not make it any easier to understand. I hope I’m able to clarify things a bit with this article.'
tags:
- android
- opera
- labs
- beacons
- iot
license: cc-by-3.0
---

Since the release of our recent [labs build with beacon scanning support](https://dev.opera.com/articles/release-the-beacons/), I’ve noticed from discussions and news articles that there are a lot of misunderstandings about beacons and privacy. This is understandable, since the technology is very new. The fact that there are multiple competing types of beacons, does not make it any easier to understand. I hope I’m able to clarify things a bit with this article.


## How do beacons work?

To start with, let’s divide the beacon technologies into two groups:

  * **Id-beacons.** These beacons emit a so-called UUID. Id-beacon technologies include: [iBeacon](https://developer.apple.com/ibeacon/), [AltBeacon](http://altbeacon.org/) and [Eddystone-UID](https://github.com/google/eddystone/tree/master/eddystone-uid).
  * **Url-beacons.** The payload for these beacons is a url. Because of size constraints, it’s usually a shortened url. The [Eddystone-URL](https://github.com/google/eddystone/tree/master/eddystone-url) technology (and also the old, deprecated, UriBeacon technology) is a url-beacon.

These two types of beacons are technically very similar -- the only difference is what payload they emit -- but usage-wise they are very different. The UUID you get from an id-beacon is not very useful unless you know what it represents, so id-beacons have to be paired with an app that can recognize a set of UUIDs and knows what to use them for. The url you get from a url-beacon, on the other hand, can be navigated to with a regular browser, and does not need a specialized app.

Regardless of technology, however: *a beacon is an emitter, not a sensor!* I’ve seen people referring to beacons as sensors, but this is not at all the case. A beacon only sends out data; you cannot connect to it, and it can not detect you in any way.


## The privacy challenge

>
> "If beacons can’t sense who’s near, how then can they be used to track you?"
>

Although you cannot use a beacon to track people out of the box, there are some usage patterns that allow you to use beacons to track people’s location. In order to do this, you need both of the following two pieces of information:

  1. **Where is the beacon?** The owner of the beacon has this information, because he’s the one who placed the beacon.
  2. **Who’s near the beacon?** As we’ve said, the beacon cannot detect this, so the only ones who know this information are the people that are inside the beacon’s range. As long as they don’t share this information with anyone, they are perfectly un-trackable.

If you only have one of these two pieces of information, there’s not much you can do. Knowing where a beacon is without knowing who’s near it, gives you no information at all, and knowing who are near a beacon without knowing where it is, is not very useful either. If you have both pieces of the puzzle, however, you can combine them and start tracking people’s locations and movements.

How a beacon owner can do this, depends a bit on what kind of beacon it is. Below, I will go through the privacy challenges related to each of the two beacon types.


## Id-beacons and privacy
As I mentioned earlier, in order to get any useful out of an id-beacon, you have to install an app that knows about the beacon. This app will typically be made by the same person or company that owns the beacon. When you walk past a beacon, this app might make a request to a server to get more information about this beacon. This reveals piece number 2 of the information puzzle above to the owner, who already has piece number 1, and now he can combine the two pieces and track your location.

This is very unfortunate, but because of the way id-beacons are designed, it is very difficult to make them useful, without revealing your location information to the owner of the beacon. On the positive side, you do have to install the owner’s app for him to be able to track you. By installing his app, you are in a way consenting to him gathering location information about you, and you can always opt out by deleting the app.


## Url-beacons and privacy
The payload of a url-beacon, on the other hand, is a fully functional url, and you do not need a special app to make use of it. Anyone can make an app that scans for beacons and lets you navigate to the emitted urls. This is great news, because now we can make sure the owner of the beacon and the owner of the app are not the same person/company. This in turn lets us keep one company from getting both of those pieces of information I mentioned above.

There is a security pitfall we can fall into here, though: the urls emitted by a url-beacon are shortened urls, and provide very little information. To be able to present useful information about the web page that the url points to, the browser needs to go and fetch the information from the web page. Since the owner of the beacon is most likely also the owner of the web page, he can look at the page requests and figure out that you (identified by your ip address) must be near one of his beacons.

This is why both Opera and Google have chosen to add an anonymizing web service into the mix. Instead of the browser making a request for information to the web page directly, it asks a web service for the information. The web service will then make a request to the web server, on the user’s behalf, but without sending any information that can identify the user.

>
> "So what? This just makes it possible for Opera’s anonymizer to track me instead of the owner of the beacons! How is this any better?"
>

I often get this question when talking about url-beacons and the anonymizing service, but remember this: although Opera’s anonymizing web service can know which beacons are near you (piece 2), we do not know the location of those beacons (piece 1), so we can not track your location. The owner of the beacon already has piece number 1 of the puzzle, so by making sure that someone else gets the other piece, you’re making sure that neither the owner of the beacon nor Opera has both the parts of information necessary to track you.

Bear in mind, though, that we’re only discussing the beacon scanning process here. Once you tap on one of the beacons in the list, and navigate to the url with your browser, you reveal your location. I think this is acceptable, but it would not be acceptable if the scanning process constantly revealed your location to every web page you walked past. This is what happens if you use a beacon scanner that does not use an anonymizer. If the scanning app accesses the url from the beacon directly, you’re giving the owner of the beacon piece 2 of the puzzle. Since he already has piece 1, he can combine the two pieces and start tracking your location.


## The other elements in Opera’s nearby screen

>
> "But, but, but, what about the Wikipedia entries? You have to send my location to the server for those, right?"
>

Not necessarily. In order to protect the user’s right to privacy, we are not sending exact locations to the server. What we’re doing instead, is to divide the world into tiles, and sending the ids of the closest tiles to the server. The server then sends back all the Wikipedia entries inside those tiles, and it’s up to the browser to compare the locations of all the entries with its real location in order to find out which entries are really within range. This lets us present a sorted list of all the items near you, without revealing more than a very coarse location to the server. The coarseness is on the scale of several kilometers, and the server can know which city you are in, but not much more. For comparison, this is about the same amount of accuracy that the server could get from calculating your location based on your ip address.


## Opera and trust
As a browser company, Opera lives and dies by the trust of our users. The day our users don’t feel they can trust us anymore, is the day we’re out of business. With this in mind, we spend a lot of time and effort on security and privacy measures. Beacons are a new technology, and it is natural that some people are confused, some are excited and some are scared. Many newspaper journalists, in their never-ending search for the next great headline, will inevitably try to spin this in controversial ways. Beacons, like all other technology, have to be handled correctly in order to be safe, but when done right, they can be incredibly useful to everyone.
