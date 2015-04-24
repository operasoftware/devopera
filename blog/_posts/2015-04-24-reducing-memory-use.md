---
title: Opera’s work to reduce Chromium’s memory use
authors:
- bruce-lawson
intro: 'It’s important that the Blink engine be made more memory-efficient so it can run on the lower-specced devices that most of the world uses. Using our experience of our Presto rendering engine, Opera has been improving Blink’s performance.'
tags:
- blink
- presto
license: cc-by-3.0
---

In his recent blogpost marking [ten years of Opera Mini](http://blogs.opera.com/news/2015/04/opera-mini-history-new-version-android/), PM Christian Uribe wrote:

> Our vision is still the same: get the web into the hands of everyone, regardless of their device.

That vision is shared throughout Opera. We know that the vast majority of the world isn’t using the latest greatest laptop or smartphone, so one of the projects that our engineers are working on is improving the memory use of Chromium processes. Blink recently established a [memory team](https://sites.google.com/a/chromium.org/dev/blink/memory-team); Opera’s Sigbjørn Finne is the only non-Google member of that team.

It’s important to improve both the static footprint (code and data) and run-time size so that Opera can fit and work well on memory-constrained devices, older computers and the like. That way, we can better serve our existing customers in territories where lower-powered devices are the majority, and make Blink better for everyone.

## Early efforts

Our early work was a set of patches to reduce memory usage throughout the codebase. Through profiling and re-applying knowledge from Presto about where potential memory hogs might hide, some targeted local changes to the codebase were made. Some are subsumed into other work, others are upstreamed — for example:

- [Reduce footprint of registry controlled domain table](https://codereview.chromium.org/197183002/) shrinks the pre-zip binary by 512 KB.
- [Documents with many lines overallocated pagination info](https://codereview.chromium.org/200053007/) saves 3-5 MB of memory for big text documents.
- [More perfect hashes for CSS strings](https://codereview.chromium.org/196413006/) reduces binary size by 12 KB
- [Reduce size of `cc::ResourceProvider::Resource` class](http://src.chromium.org/viewvc/chrome?revision=259319&view=revision) reduces the memory usage by up to 9 KB.
- [Smaller CSSParser UTF16 buffers for escaped strings](https://codereview.chromium.org/196353018/) fixed bad logic that used 700 KB to store a single escaped character in an ASCII stylesheet.
- [Put histogram code in `disk_cache` on a diet](https://codereview.chromium.org/196383016/) shrank the binary by 132 KB.

## Current efforts

### Tab hibernation

Tab hibernation is a Desktop project that allows browser sessions to have more tabs open (Presto allowed for literally hundreds; this was a significant cause of complaint when we moved to Blink). When a tab goes to the background and is considered idle, it is suspended and paged out (ideally). Tab activation resumes activity, as expected. Besides the tab being in the background, the activating logic depends on determining that tab is idle — that is, there are no outstanding network requests or media players active. It’s shipped in Desktop (behind a flag).

### Oilpan & Blink memory team participation

The Web Technology team has contributed to the Blink project bringing garbage collection to its codebase in order to reduce memory management complexity and avoid categories of security bugs. A long-term commitment from Opera’s side, this will advance the Blink web engine in general, but also help getting a better, more focused handle on memory use in Blink. It appears likely that Blink will decide to ship Oilpan more widely.

A continuation of the Oilpan project is a renewed look at how to coordinate allocators across the whole Blink + Chromium + V8 codebase. With the introduction of Oilpan, another allocator is added to that set. The memory team will look at coordinating these allocators better, by controlling or influencing when garbage collections may happen, or otherwise influence memory use for each. Reducing the number of different allocators in use throughout Blink is also something this team will try to address.

This second strand of unifying allocators & their coordination is something that Opera can benefit from, by the improvements that they’ll bring to Blink in general, but also for the various ongoing memory use efforts.

### Texture Compression

After some memory analysis on Android we came to the conclusion that we could save a fair bit of memory by doing run-time compression of tile textures.

Today’s mobile devices have screen resolutions that are comparable to desktop screens or in some cases surpasses them. This together with a much more limited RAM means that we often run out of memory.

With graphics-intense sites a lot of memory (generic RAM and/or GPU RAM) will be used to store bitmaps. Those bitmaps can contain anything but are often quite compressible using algorithms supported by common GPUs. The downside is a slight CPU hit when a resource needs to be compressed.

The compression will add some extra latency when generating the tiles. This could introduce more “whiteboarding” when playing animations or panning a page very quickly. We believe this can be addressed by either implementing a threshold that will disable compression for tiles with high bin priority or using timestamps on tiles to detect animations.

[All the nerdy details](https://docs.google.com/document/d/1WdA0ir5J5gzhJ1yizDOigVG1lIQRolaLtI4CWEWcj5g/edit).

Texture compression ships in Opera for Android.

### Opera Devices SDK

Opera Devices SDK is a Chromium-based browser for embedded Linux (and Android) systems in TVs, Blu-ray players and set-top boxes. These are generally characterised by low-end CPUs, little memory and a small firmware size limit.

We’ve developed a Memory Allowance System which adds a soft memory limit to Chromium, so we don’t get a memory pressure event and never involve the OOM-killer. The receiving end of memory allowance requests and reports from processes, guards the limit and tells processes to yield when allowance is running low (e.g. dump caches and stop loading). There’s plenty more detail in our [BlinkOn presentation](https://docs.google.com/presentation/d/16c0shzszC7boniorrqHTpY3xSH3XMRkMikr-RwelZPI/edit?pli=1#slide=id.g3f7c74cb4_077).

### Future work

We hope this overview gives you an idea of some of the work we’re doing to make Opera more performant on lower-specced devices.

Many of the ideas we’ve implemented come from knowledge gained over 15 years developing our Presto engine (which continues to power Opera Mini and was [recently upgraded](https://dev.opera.com/blog/opera-mini-server-upgrade/)).

And we’re experimenting with more improvements, even now, in our labs in a hollowed-out volcano in the Scandinavian tundra and a deserted temple deep in Poland's rainforests.

## Read more

- Read more about Opera and Blink in our [Blinkon report](https://dev.opera.com/blog/blinkon-report/).
- See all [Opera’s upstreamed contributuions to Chromium, Blink and V8](https://operasoftware.github.io/upstreamtools/).

Thanks to Sigbjørn Finne, other members of Opera’s Web Technology team and Mostyn Bramley-Moore for helping collate this information.
