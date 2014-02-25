---
title: 'Scope Protocol release: how the fat lady sings'
authors:
- johannes-hoff
tags:
- scope
- testing
- automation
- dragonfly
layout: post
---
<p>Today we are happy to release the <a href="http://dragonfly.opera.com/app/scope-interface/">specification</a> for the Scope
protocol. This is the protocol used for communication between
the Opera browser and
Opera Dragonfly. It is also used here at Opera for
<a href="http://my.opera.com/core/blog/2009/03/06/test-automation-with-operawatir">automated testing</a>.</p>

<p>Since the release of Opera Dragonfly, we have tried to keep the
project open source. The <a href="http://dragonfly.opera.com/app/zips/">source</a> and its
<a href="http://dragonfly.opera.com/app/jsDoc/">documentation</a> is available under BSD licence, but it is difficult to
expand it or create something different without the protocol
specification. This release wants to rectify that.</p>

<p>The documentation is more or less as we have used it internally to
communicate inside the team, which means that some documentation is
missing simply because everyone on the team knew what it was about.
If something is unclear, let us know in the comments.</p>

<p>One of the reasons we are releasing right now, is that
other browser makers have started discussing
how to do remote debugging.
Since the very start we have focused specifically on this, so we want to share our
experience and ideas with everyone else.</p>

<p>The specification is split into two parts. The current implementation,
which we call Scope Transfer Protocol 0 (STP/0), is an XML
based protocol. Our experience has been that this is too slow once you
start transferring big data structures, like DOM trees. One of the
advantages of the XML protocol was that it was easy to create a client
for it in JavaScript using XMLHTTPRequests. It is also very easy to
debug visually without the need for special tools to parse the data.</p>

<p>The next generation protocol, STP/1, is what we are currently working
on. It is just a sign of things to come,<!-- so say we all --> but we
will release it in a public build as soon as it is ready. There might
be changes to the protocol before that time. The protocol
continues to support XML, but we have added two more serializers:
<a href="http://www.json.org/">JSON</a> and <a href="http://code.google.com/p/protobuf/">Protocol Buffers</a>. The messages
are the same in an abstract sense, but they can be rendered to different
data structures. This means that we can keep our XML tools mostly
unchanged, but switch over to Protocol Buffers for
faster transmissions, or to JSON for the sweet spot between easy of use
by JavaScript and low bandwidth usage.</p>

<p>Our next release will be a public build of Opera using STP/1, together
with tools to help you get started with communication through STP/1.</p>

<p>Enjoy the <a href="http://dragonfly.opera.com/app/scope-interface/">read</a>!</p>
