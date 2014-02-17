---
title: The future of video on the Web
authors:
- david-storey
tags:
- video
- w3c
- audio
- news
- odin
layout: article
---
<p>Audio and video has been a part of the Web since the early days.  Just like the browser wars, with the <q>made for IE</q> or <q>made for Netscape</q> badges, it wasn’t uncommon to see badges asking you to download Real player or Window Media Player.  Real were early leaders but lost that lead, with the BBC seemingly one of the last bastions of Real media content.  The format war wasn’t won however, and it wasn’t until YouTube and its Flash movie  player hit the big time that video consumption and publishing really exploded on the Web.</p>

<p>While many major sites have switched from their previous solutions to a YouTube-style Flash solution, a number of issues remain that stop audio and video being a first-class citizen on the Web.  One of the key aspects of the Web is linking, and with current video players there is no way to link to fragments of video content.  There is also the problem of open codecs and requiring plug-ins to include audio and video on a page.  One reason why it is important not to rely on plug-ins is that single-vendor solutions may not be available on every platform that a browser is available.  This is becoming a bigger issue as the Web becomes more popular away from the desktop.</p>

<p>HTML 5 plans to solve the plug-in issue by including the video and audio element.  <a href="http://www.theora.org/">Ogg Theora</a> was originally specified as the format of choice for video  but it has since been removed from the spec.  While both Opera and Mozilla have implemented Ogg Theora support, this move by the W3C is worrying as the other two major browser vendors both have their own proprietary media formats  which earn them a lot of money.  It is most likely that neither of these vendors will include an open format in their browser and will promote either Windows Media or Quicktime as that&#39;s in their financial interests.  Apple are already promoting Quicktime, and the codecs it supports as the only way of supporting video on the iPhone.</p>

<p>In an effort to promote open standards-based video on the Web, the W3C has just launched the <a href="http://www.w3.org/2008/WebVideo/">Video in the Web</a> Activity.  As they state in their mission statement:</p>

<blockquote cite="http://www.w3.org/2008/WebVideo/"><p>Enabling users (from individuals to large organizations) to put video in the Web requires that we build a solid architectural foundation that enables people to create, navigate, search, link and distribute video, effectively making video part of the Web instead of an extension that doesn&#39;t take full advantage of the Web architecture.</p></blockquote>

<p>The activity consists of three main groups:</p>

<ul>
<li>Timed Text Working Group</li>
<li>Media Fragments Working Group</li>
<li>Media Annotations Working Group</li>
</ul>

<p>The Timed Text Working Group will design a <abbr>XML</abbr> based Timed Text Authoring Format.  One of the major use cases for Timed Text is for closed captioning and subtitles  which will aid efforts to make video on the web more accessible, and aid localisation.</p>

<p>The Media Fragments Working Group is tasked with specifying how to use <abbr>URI</abbr>s to link and identify media (audio, video and images) fragments.  For example, one should be able to link to a certain segment of a video, such as when a particular news story starts in a news broadcast, or to identify a person in a video with a link to their wikipedia entry.</p>

<p>The Media Annotations Working Group is tasked with making an ontology to describe media objects—creating a set of common metadata names for describing video, audio and images.  It will also create a <abbr>API</abbr> to access this information  so that if different formats adopt this ontology   there is a standard way for scripts to access the metadata that is contained the the media file.  This is needed as each format specifies their own metadata format, each incompatible with the others, such as <abbr>MPEG</abbr>-7, iTunes <abbr>XML</abbr>, <abbr>IPTC</abbr>, <abbr>EXIf</abbr> and many more.</p>

<p>One noticeable absentee  from that list is a group to work on defining a W3C recommendation for a audio and video codec.  It has been argued that is not an area that the W3C should cover. Others point out that it already specifies  raster (PNG) and vector (SVG) graphic formats.  One issue with current open codecs is the issue of <a href="http://en.wikipedia.org/wiki/Submarine_patent"><dfn title="an informal term for a patent first published and granted long after the initial application was filed. In analogy to a submarine, its presence is unknown to the public; it stays under water, i.e., unpublished, for long periods, then emerges, i.e., granted and published, and surprises the relevant market.">submarine patents</dfn></a>, as it is not known if many of the big guns in the media business own patents that could be infringed by formats like Ogg Vorbis and Ogg Theora.  Due to the patent policy the <abbr>W3C</abbr> has, any member (which include major video patent holders such as Microsoft and Apple) must declare if they own any patents on any spec that the <abbr>W3C</abbr> produces.  This would greatly reduce the risk in a browser vendor supporting the codec, and would bring us closer to having interoperable video on the Web, that would work cross-browser, cross-platform and cross-device.</p>

<p>While the work the new working groups will undertake in their respective areas is a welcome leap forward, and <code>audio</code> and <code>video</code> elements in <abbr>HTML5</abbr> are needed, unless the W3C includes defining a new or existing codec and media format as a W3C recommendation as a part of the statement of work for the Video in the Web Activity, then in my opinion its potential for delivering interoperable media on the Web will most likely fall short of its intended goal.  Having a API to write against for meta-data, and a closed captioning standard will simplify authoring somewhat, but authoring will be much simpler and less costly if media can be delivered in one format, no matter if is to be delivered to a Windows based PC, a Linux based set top box or a Symbian smart phone.  Except for issues with IE6, which are starting to become a thing of the past, authors don&#39;t have to worry if a certain platform supports <abbr>PNG</abbr> or <abbr>JPEG</abbr> graphic formats, and it should be the same with video and audio.  If the W3C plan to work on this, and I’ve just missed it in the announcement, then all is good in the world, and we can look forward to seeing the fruits of their labour in the future.</p>
