---
title: Sex, Houdini and the Extensible Web
authors:
- brian-kardell
intro: 'To evolve the web and compete with native, we need a way to innovate and iterate faster — the Extensible Web principles, which have brought us Service Worker and Web Components. Project Houdini looks at how we can bring extensibility to CSS, too.'
tags:
- CSS
- HTML
published: false
license: cc-by-3.0
---

<figure block="figure">
	<img elem="media" src="{{ page.id }}/img/cables-pic.jpg">
	<img elem="media" src="{{ page.id }}/img/cables.png">
</figure>

## The backstory ##

When the Web was created, it was a really big idea: Tim Berners-Lee proposed (it wasn’t a standard yet) a worldwide system to retrieve documents coded in such a way that one document could link to another document. Although the idea was big, it was really simple. It was declarative and forgiving and had a clear, familiar mental model. Nearly everyone was familiar with a book, nearly everyone had written (or at least gotten) a letter, nearly every business was built around paper, so it was designed similarly.

Here is what the first website looked like, and for a little while it was representative of the state of the art. It was what the small handful of users that Tim convinced to try it out expected from the Web.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/www.png">
	<figcaption>Screenshot of the original website http://info.cern.ch/hypertext/WWW/TheProject.html</figcaption>
</figure>

### Ideas have sex…

The simplicity and high-level aspects of the Web were an incredible boon. As more hobbyists learned that they could create content, they did. More content to draw people to the Web, in turn lent more credibility and encouraged more people still to have a look and get involved.

As they did, a number of people brought new ideas about how it should work. They extended the language and very quickly, as author Matt Ridley explained in his [2006 TED Talk](http://www.ted.com/talks/matt_ridley_when_ideas_have_sex): Their ideas had sex. They mixed and combined, inspiring new, more complex and better innovations making both the user and developer experience markedly better. This is natural because sexual reproduction is, in biological and evolutionary terms, one of the key ingredients that allows nature to arrive at logarithmically complex design. Through sharing of ideas we very quickly added things like forms, images, image maps, and tables. We also got started on CSS. Within just a year or two from the earlier picture, the state of the art looked more like this:

<figure block="figure">
	<img elem="media" src="{{ page.id }}/nyt.png">
	<figcaption>Screenshot of the New York Times homepage from 1996, thanks to the Internet Archive</figcaption>
</figure>

So ideas bloomed, but almost as importantly: Some things entirely failed to catch on. They just weren’t right. [Tim's original proposal for HTML](http://info.cern.ch/hypertext/WWW/MarkUp/Tags.html) contained only 20 tags and more than a third of them (7) weren’t ultimately standardized.

As the Web grew, the impact of this positive feedback loop increased, and the need for stability became apparent: If the Web starting fragmenting, the feedback loop would be broken and the whole thing would be doomed. Thus, the W3C was formed to ensure that the Web remains built on free and open standards.

### A paradigm shift

Some interesting things happened between then and now: The DOM was introduced, and it was scriptable. Standards remained stable for a long time while the W3C worked on a potential successor (XHTML2) and in this stability developers turned to solving problems for themselves.

Previously, “innovation” happened by vendors creating proprietary extensions which, by nature, were incompatible. Now, however, innovation was happening in libraries. Libraries were built on standards, so they would work for everyone. Freed from processes, their ideas again had sex: They combined, competed and improved.

Once again, some things failed, but all of them (successful or not) were wrapped up in non-standard libraries. It was an interesting trade-off and introduced new dynamics: Instead of being able to get increasingly better at using standard APIs, many people got increasingly better at using a library, like jQuery. Since no standards were settling at the low levels where there was agreement, each higher level of innovation had increasingly deep dependencies.

Imagining high level abstractions remained just as difficult and error prone as ever because they required giant leaps and had to get everything right, or be mostly useless. This was a keystone that many worried could break the positive cycle that set the Web in motion in the first place.

Then, suddenly, browsers began developing again. Library makers got involved with Web standards. In 2010, [Remy Sharp introduced the idea of polyfills](https://remysharp.com/2010/10/08/what-is-a-polyfill) and more recently browsers began auto-updating. The whole game was dramatically shifting.

### Enter the Extensible Web

By 2011, the community at large seemed dissatisfied and a conversation began. By 2013, this conversation led to an agreement on expression of core philosophy agreed to by 21 people called [The Extensible Web Manifesto](https://extensiblewebmanifesto.org/).

It posits that we need to recognize what has changed, plug into its strengths and its community in new ways. It aims to create a virtuous cycle capable of building up complexity and adapting to needs. It suggests that the necessary ingredients for success involve — wait for it…. The ability to experiment and fail fast, the ability for ideas to have sex and gain key improvements, and the ability for ideas to compete amongst developers, developing standards on data and success rather than prescription. Wherever possible, it suggests that we *prollyfill* standards — that is, to provide a useful implementation that works everywhere before it is a standard and gain that data. As an early (and imperfect) example, see Google’s Polymer library which prollyfills various Web Components specifications, allowing authors to see what worked and what didn’t, and tweak the spec (and adjust the prollyfill) accordingly.

The manifesto is crafted to correct what is historically a hard incentive imbalance: Developers were disincentivized to look at standards until they are already available because of their (often) years-long time frame and inability to experiment. Once delivered, those standards often fell short of actual developer expectations because working groups don’t really understand the needs and desires of real developers. AppCache, for example, is a famous whipping boy, but one could make the argument that it does exactly what it was designed to do (as [Ian Hickson explained](http://html5doctor.com/interview-with-ian-hickson-html-editor/#appcache)).

However, if developers are provided with something useful that solves their problems now, with the potential of becoming standardized, they are incentivized not only to try it, but to try to help make it better before it does so.

For the past couple of years, the community and standards bodies have been working hard on projects and efforts to do that: Transpilers helped us provide early access to many ES6 features. Custom Elements have a number of prollyfills that allow people to use custom tags in HTML and help us build up new proposals or look across sites for common vernacular.

### Magic

Note that a lot of the Web is high-level, even simple seeming things contain “magic” that browsers all know about but are not specified. Lots and lots of things have to fetch data, stream it and so on - but none of this is currently explained. This creates a kind of “unspoken' architecture that makes it hard to polyfill or even to add new features and limits the number of ways/places that we (or browsers) can plug in.

Therefore, the Extensible Web Manifesto argues that explaining the underlying magic in the platform, minimizing the introduction of new magic and enabling the sort of environment where this sort of evolution can take place should be the immediate priority of standards bodies. The [Fetch](https://fetch.spec.whatwg.org/) and [Streams](https://streams.spec.whatwg.org/) standards are examples of specs trying to do just that.

In practical terms, when we have a new proposal, we should first look to unexposed aspects that lie hidden in the existing platform first. When we can’t find anything, we should find what lower-level thing would allow explanation of not only the larger problem, but related problems by defining it and how it fits into the larger picture. Not only should the end-result be better, but developers increase their familiarity through participation and standardization should be easier and faster.

### Abracadabra CSS

Things like [MutationObservers](http://www.w3.org/TR/dom/#mutation-observers), [Service Workers](https://slightlyoff.github.io/ServiceWorker/spec/service_worker/), [Custom Elements](http://w3c.github.io/webcomponents/spec/custom/), Fetch and Streams provide the raw materials and basic workings that allow an author to plug into reasonably-well explained systems. If you had an idea for a new element, there’s a pretty high chance you could provide something pretty close for people to experiment with in high-level fashion with reasonable forward compatibility safeguards. If you wanted to polyfill an element which was supported in three browsers, you could. That’s incredible. It’s awesome.

But what do you do if you want to propose a new pseudo element for CSS? What if you had an excellent idea for a new layout module? What if you wanted to polyfill something?

Here's what you'd do historically: Forget it.

CSS contains so much magic that we might have more aptly named it “Hogwarts”. First, you need to be able to parse the stuff because the parser drops unknown rules entirely. Unknown properties or values are dropped too — believe me, it’s non-trivial. Second, you need to make sense of it all: specificity, inheritance, imports and at-rules. You need to understand that all modules have shorthands which expand to long hands. The list goes on just to parse it. In some cases though, you need to serialize modifications back out. And in most cases, of course, you need to actually apply it *live, any time someone changes the DOM and as the page is still loading*.

The browser itself, of course, knows how to do all of this and has a host of optimizations to make it efficient - but it's all just magic on the outside. If you need any piece of it, you’ve got to understand and recreate all the underlying magic yourself.

The W3C Technical Architecture Group (or TAG for short) are tasked with kind of making sure that the long term vision of the Web and stuff that the W3C is working on is healthy and on a good track. They’ve taken note of this problem — the disconnect between the Extensible Web ideas that are permeating everything else, and the inability to apply them well to CSS, so they’ve formed a joint TAG/CSS WG task force to work on this problem.

### Enter Houdini

This new task force is codenamed “Project Houdini”. Around the turn of the 20th century, Harry Houdini became the world’s most famous magician. There seemed to be no way to contain him. He could escape from anything: Handcuffs, straightjackets, chains, and boxes, even when suspended upside down or underwater. He was also repulsed by the growing practice of people using tricks and illusions and playing on people’s emotions to extort money, so began to investigate and explain their “magic”; he even testified before the US Congress trying to criminalize such practices. So — boxes, sealed, explaining magic — “Houdini” sounded like an excellent name.

The Houdini task force recently held its [inaugural, 3-day long meeting](https://wiki.css-houdini.org/planning/sydney-2015) in Sydney, Australia (incidentally, Houdini also made the first manned flight over Australia) to discuss what could or should be done. The full minutes are available from the meeting link, but I’ll attempt to sum it up here. First, this captures the sentiment pretty nicely:

> Show that we care about extending the browser, and continue to iterate on it. I don’t think we can fix or even think of everything to fix from the beginning, it needs to evolve.

<cite>Daniel Glazman, CSS WG co-chair</cite>

And, more importantly, this wasn’t a radical statement, it was the norm. At the next TAG meeting, Travis Leithead from Microsoft asked the question “what was the most exciting thing?” to which the response was:

> [The most exciting thing was] that nobody was arguing. We’ve wanted a lot of this since the 90s and now is the first time when someone hasn't said “no” or “it can't be done”.

<cite>Peter Linns (TAG co-chair, CSS WG co-chair)</cite>

The task force agreed to begin work on eight new drafts whose aim it is to explain and expose different aspects of CSS. In reality, it’s more like ten as there were already two underway (custom properties and aliases/custom-pseudo classes). We’ve set up a [really basic wiki](https://wiki.css-houdini.org/), a [public mailing list](https://lists.w3.org/Archives/Public/public-houdini/) and a [home on github](https://github.com/w3c/css-houdini-drafts). It’s still very early days, and it will take some time to get rolling as people close out existing work and make ways to prioritize, but it’s a start.

These drafts, which involve everything from the parser to fragmentation and layout, should begin closing the gap between CSS and everything else, making it increasingly plausible to polyfill CSS and innovate/experiment — our ideas can have sex, becoming better/richer than any one of us dreamed.

### The specs and what they enable

#### Parser API

If you can’t parse CSS, you can’t do much — even editors and code highlighters need this functionality and as I explained: it’s really hard to do accurately or and near impossible to do with any kind of comparative performance. Once parsed, you’ve got to actually do something with the information, which means you need a standard way of understanding the parsed stuff. All existing pre-processors and polyfills have to do this and they aren’t fully capable, fully compatible and they don’t agree on the output. A similar problem existed in ECMAScript: transpilers, editors and syntax highlighters for JavaScript are essentially the same problem, and so they created [Esprima](http://esprima.org/). This allows us to gain so many of the benefits of the extensible web.

#### CSS Property and Value Extensions API

Of course, the browser has already parsed things and you don’t necessarily want to do it again if you can avoid it. Furtherm the browser’s parser also fundamentally has to be a little more capable security-wise. More ideally, in many cases it would be better to plug into the existing system instead with a definition of what should be done. At the very least, it would help define something that the browser shouldn’t throw away as an invalid property or value. This is one of the key features that will allow us to build prollyfills and polyfills. Proposals that satisfy similar use cases as CSS Regions, but which are currently way too hard, suddenly become plausible. This proposal would also expose the ability to do custom `@rules`.

#### CSS Aliases and Custom Pseudo-classes

This one didn’t come from Houdini itself, so it already has an editor and a [rough draft](http://tabatkins.github.io/specs/css-aliases/index.html), but Houdini expands its scope a bit. Its aim is to make it possible for authors to create simple aliases for selectors or even wholly new pseudo-classes.

CSS lacks the inability to create something like a constant that you can refer in a much simpler way later; this creates an explosion of repeated selectors and it’s one of the reasons that people use pre-processors even for very trivial things. An extremely trivial example is something like selecting a button — there are a couple of ways to make a button and you don’t want to the various selectors every time — you just want to define a simple (author-defined) shortcut like `:--button` and then use it. In the current proposal that might look something like this:

	@custom-selector :--button input[type='button'], input[type='submit'], input[type='reset'], button, [role='button'];

	:--button { color: green; }
	.foo > :--button { color: blue; }

(A quick note on the syntax of CSS: CSS has always had forward-compatible parsing rules in which the syntax has been designed with room for extension. Originally this was for vendor prefixes in the format `-vendor-*`, but they were a [really bad idea](https://the-pastry-box-project.net/bruce-lawson/2012-september-1). Houdini introduces author prefixes, which simply have an empty (`""`) vendor, and thus are written as `--foo`.)

In addition to aliases, this spec let us define things that are more complex — for example, a pseudo-class for dealing with numeric attributes as *numbers* instead of strings. Given something like the selector plugin architecture in jQuery this is pretty trivial to do, but these things are really hard to define in CSS. There are selectors and pseudo-classes which have been in proposal status for more than a decade — given something like this, we give authors immediate benefit and gain data about what is useful and streamline the standards process.

#### Font Metrics API

A lot of times the thing that you need to calculate require context and information which is not currently available to you. Take, for example, drop-caps. Adobe worked hard on creating [dropcap.js](https://github.com/adobe-webplatform/dropcap.js) which is worth a look (including the linked blog post) if you want to understand the complexity and challenges and compromises we currently have to make to do something as “simple” as drop-caps. The Font-Metrics API would work on exposing the necessary information one would need to help fill things that involve font-oriented information.

#### Custom Layout

CSS has all kinds of crazy layout modes and still, it’s really hard to do some things that it shouldn’t be so hard to do — so, for example, we have alternative proposals like [Grid Stylesheets (GSS)](http://gridstylesheets.org/) which use a constraint-based layout. Figuring out this stuff is hard and it takes an astoundingly inordinate amount of work to get it specified, correct and interoperable. Custom layouts will allow us to register a custom display value and own layout computations making whole classes of new proposals possible to figure out in the community and without impossibly complex barriers.

#### Custom Paint

At some point you have to paint — that is, actually splat colors onto the screen for CSS to render text and DOM atop. There are any number of challenges which currently involve abusing DOM to get correct visual effects like effects and gradients. Custom paint will allow you to do this.

#### Input Extensions

Lots of things affect how your app responds or paints, user input like scrolling, for example. Simple things like pull to refresh interfaces involve things like physics and sometimes that makes a really big difference. The Input Extensions spec aims to allow us to plug into that and make it increasingly possible to create really good custom or experimental user experiences that work with this kind of input.

#### Async Style

This one is still a little bit vague, but essentially the idea is to figure out how we create ways to introduce limited asynchrony and isolation in the DOM. While the description I’m giving is lacking, the ability to identify things that can be pushed into workers or threads is a potentially giant gain for everything from mashups to synchronized effects. Currently almost all work is done on the same main thread — this means that the Web can’t take good advantage of all those cores that your machine (even your cell phone) have which makes effective UIs hard. It will be really interesting to see what comes out of this research.

## Conclusion

Of course, this is just a high level view of things and it’s still early days for Houdini — anything is subject to radical re-thinking, but the commitment from so many to dig down and explain the platform in order to make it extensible and adaptable, and to work to build a healthier process around standards is intensely positive.

The Extensible Web isn’t about abandoning declarative HTML and making everything JavaScript; the declarative nature of HTML was what made it so succesful in the
first place.

It means that rather than spending years on high-level APIs and getting them wrong, high-level ideas can compete — they can have sex and deliver real value along the way. I believe that ultimately, this extensibility and ability to adapt, refine and share sensible high-level features are the cornerstone on which we will allow the Web not just to generally improve, but to remain interesting and competitive for decades — and recapture some of the most important things that made it successful in the first place.
