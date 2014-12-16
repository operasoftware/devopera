Recently, the Opera Web Technology team attended BlinkOn 3, the twice-yearly conference for Blink contributors. (Videos are available on YouTube.)
Here are a few notes and observations from our team.

## Mobile First?

A year ago, a "mobile first" policy was formed. Now that has been replaced by a policy about enabling web developers to do whatever they want. Part of that is to keep landing new APIs that give more and more access to hardware/OS features and to avoid having slow code that prevents web apps from being smooth.

A main Chromium/Blink focus for the next year will be never slipping on 60 frames-per-second and its per-frame timing budget.

## 60 frames per second
Ian Vollick gave an interesting talk about adding JavaScript hooks on the compositor thread (UIWorker) to implement snap points, pull-to-refresh etc in a smooth way without having to go via the main thread.

[Slimming paint](https://www.youtube.com/watch?v=5Xv2A7aqJ9Y) seems to be moving along nicely (similar to/ same as our old "Eliminate paint-traversal" project in Presto so very familiar to us).

The animations talk dealt with inspector support and new features from Web Animations. Google stressed that there are still only two properties (opacity, transforms) being animated on the compositor thread, so we need to continue improve performance in the style → rendertree → layout → composite → paint pipeline for main thread animations. They specifically highlighted our optimization for skipping style matching during animations as an example of such an improvement.

Project Warden https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/NmJZKx12Dqo  is an ongoing project to improve hackability of Blink and it spans various unrelated tasks. They're looking for volunteers to take on a re-design of line layout, in particular for security (tends to crash), but also for performance.

We had interesting chats with Nat Duca about style performance, and we discussed the state of the style part. Key points:
With [style invalidation](https://docs.google.com/document/d/1vEW86DaeVs4uQzNFI5R-_xS9TcS1Cs_EUsHRSgCHGu8/edit), we think we're in a good state when it comes to style changes on that don't require large (re-)attachments.

Initial attachment of renderers (RenderStyle + render tree building) is far more expensive than initial layout, according to Nat.
Other attachments where the node count is high causes what we typically see as jank from the style/rendering system.
We should figure out if the style building per element is roughly as fast as we can go, or if there are optimizations to be made on that level.
Nat mentioned a Material/Paper checkbox based on Polymer is represented by more than 30 nodes. I looked at it in the inspector, and yes there are many, haven't counted though. It does have a nice ripple effect, but it sounds like these web components could become a scaling issue and more strain on the style/rendering system.
They really appreciated us (Opera) contributing a larger chunk of the performance improvements for the Silk test cases. (The Silk test cases are a set of performance tests run in Telemetry meant to cover typical use in modern web apps/components)
We discussed how we could contribute to the Componentized StyleResolver bug about making style changes more local and performant in the world of web components and shadow dom.

## Blink Scheduler
The [Blink scheduler](https://www.youtube.com/watch?v=nfEeTPntW5E)   has promising results. That was something we talked about and supported in BlinkOn2 (it is similar to some things in Presto). The idea is to have some code that actively decides what to do next (i.e. handle input events) instead of doing everything in the order they were queued or in 100 parallel threads. The main problem will still be to get rid of long-running tasks on the main thread or that hogs the active CPU core, and we'll never be able to handle input within the 100 ms we need to. But the Android team in London has added metrics and some code and already there are measurable improvements which indicate that this is the right idea.

"[UI workers](https://www.youtube.com/watch?v=Kgy6XBJB_jI)" is currently an interesting experiment on allowing some programmability/scripting to the compositor thread  .

## Oilpan
Oilpan replaces a messy ref-counted DOM environment with a garbage collected one. ([BlinkOn 2 video](https://www.youtube.com/watch?v=_uxmEyd6uxo)) Work is proceeding, but it's a big knife in the middle of the Chromium guts so lots of nervousness and attempts to figure out hard requirements before it can be enabled for performance sensitive code. Oilpan presented preliminary performance numbers and plans for shipping. It was given a fair hearing, but has been given fairly hard targets and a deadline (end of 2015Q1) to meet in order to ship.

We met with the Oilpan team to set out how to go about making that happen, and I think we now have a workable plan in place. Oilpan is something we want to see Blink move to and adopt fully. It is just a more solid foundation to build a quality engine on top of. The project is now run by developers from the Google Tokyo office, with help from Opera. Optimizing overall performance and bounding/controlling garbage collector pause times (i.e., you don't want your UI and animations to stutter due to Oilpan) are the remaining work items. During BlinkOn3, it was decided that Oilpan will only be fully adopted by Blink ("shipped") when there are zero regressions on performance metrics, which cover pause times and overall fps / runs per sec. This needs to happen by the end of 2015Q1.

## V8
Work/effort on v8 is picking up. One aspect is bringing up its language support to ES6, which has been talked about as a goal for a while but seems to be happening now. (ES6 will be published/finalized in June 2015.)

Crankshaft is being replaced by [TurboFan](http://ariya.ofilabs.com/2014/08/javascript-and-v8-turbofan.html). An initial goal for TurboFan is to address the "asm.js use case". Meaning it wants to derive just as good type information and generated code as an asm.js validator and backend will when given asm.js input. But not without recognizing the asm.js type rules specifically, just by being a better all-around backend for JS/ES6.

## Misc
* The ServiceWorkers shipping efforts are going to plan.
* Discussion about merging the blink repository into the chromium repository. Having them divided costs a lot of time, but since the guy that was working on it has left some problems might have to be rediscovered. There is progress though, gated on even more bot capacity. And bravery on the part of Jochen Eisinger :)
* Work on Skia proceeds: more high level optimizations and more work on DisplayLists.
* Reducing the number of code paths for shaping and rendering text. There is now ~2 left. Goal is to remove the Latin-only code path as soon as the generic code path is fast enough. Optimizations in this area has made for instance Russian text rendering twice as fast (apparently it was very slow for non-ASCII before.
* Yandex wants to improve search in text so that it can find words better, and so that alternative word forms are found (search for “glanced”, get a hit on “glancing”).
Out of process iframes proceeds. It's a security feature but it complicates the code. They have been working for a long time but there seems to still be a lot more to do.


