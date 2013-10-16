Title: Opera for Devices: Out of Memory System
----
Date: 2011-11-21 18:59:28
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<p><a href="http://www.opera.com/business/devices/">Opera for Devices</a> provides powerful mechanisms to strictly limit the heap usage of Opera. Memory is an expensive commodity on many devices and different programs may compete for the limited resources with unpredictable consequences. With the Out of Memory (OOM) system it is possible to restrict Opera to a limited amount of memory while ensuring good functionality.</p>

<p> Although this topic is more a concern for customer integrating Opera on their devices rather then for content developers, understanding how memory allocation works on limited memory devices is important to be able to optimize your application and understand which kind of behaviour to expect from Opera when running out of memory.</p>

<h2>Content:</h2>

<ul>
    <li><a href="#understanding">Understanding out of memory situations</a></li>
    <li><a href="#system">The Opera OOM system</a></li>
    <li><a href="#problems">What problems does each mechanism solve?</a></li>
    <li><a href="#employing">Employing the OOM system</a></li>
</ul>

<h2 id="understanding">Understanding out of memory situations</h2>

<p>Linux is generally not OOM safe, so it is not possible to rely on <span class="code">malloc()</span>, and so on, to fail when memory runs low. A Linux environment is usually set up so that <span class="code">malloc()</span> never, or seldom, returns NULL. Consequently most Linux applications and libraries do not expect this to happen, and do not handle it well. This only works well on a desktop system that rarely runs out of memory.</p>

<p>In the rare event when a Linux system does get low on memory, the kernel has a sophisticated algorithm which selects and kills the process using too much memory &#x2014; <i>the OOM-killer</i>. The problem is that an application is never told about the low memory condition until it is too late, and the application is killed. To the end user, it will simply appear to crash. On a device with very limited memory, this is undesirable and it is best to avoid this.</p>

<h2 id="system">The Opera OOM system</h2>

<p>To combat problems associated with limited memory, we have implemented a system that ensures that Opera behaves well in low memory situations. It provides two mechanisms that effectively limit Opera heap memory usage.</p>

<h3>Limit by heap size</h3>

<p>The first mechanism captures memory allocations in Opera and force-fails them if they would cause the process heap size to grow beyond the set limit.</p>

<h3>Limit by allocation size</h3>

<p>The second mechanism internally keeps track of the amount of memory that Opera has allocated, and force-fails any allocations that would cause the total to exceed the allowed limit.</p>

<h3>Internal OOM handling</h3>

<p>Internal OOM handling is triggered by a force-failed memory allocation, regardless of which mechanism triggered it. Internal OOM handling frees as much memory as possible and, if necessary, stops page loading. This means that Opera should not cause the heap to increase past the set limit and that Opera should be able to keep the amount of memory allocated below the specified limits.</p>

<p>Opera also sends an OOM notification to the implementation layer, alerting it that Opera is low on memory. How this situation is handled can differ between different Opera Powered products, e.g. a dialog suggesting closing of any unused applications could be shown.</p>

<h2 id="problems">What problems does each mechanism solve?</h2>

<p>The two different mechanisms in the OOM system work quite differently to solve different problems. It is necessary to take in to account the use case for the device to determine how to best configure the OOM system. Typically, it is a good idea to employ both mechanisms, but it is important to understand the effects of them to tune the behavior.</p>

<p>This topic describes a number of issues and how they are affected by the OOM system.</p>

<h3>Memory starvation</h3>

<p>There may be situations where Opera is effectively starved for memory, and internal OOM handling is unable to raise enough memory to browse normal pages, rendering the browser unusable. This problem arises when the Opera heap limit has been reached, but Opera still does not have enough memory.</p>

<h3>What causes this problem?</h3>

<p>There are other parts of the Opera process that are not affected by the OOM system, such as plug-ins and user interface sections. These share Opera&#39;s heap space but Opera does not control them. In some situations, they may be allocating on the heap, filling it up with memory, growing it far above the size allowed to Opera. The more they allocate, the less may be available to Opera. This may lead to Opera starving, as it will never be allowed to increase the heap.</p>

<p>This problem can be alleviated by listening for Opera&#39;s OOM signals and thoroughly clearing any plug-in or user interface memory that currently does not need to be allocated.</p>

<p>Another cause of memory starvation could be that the heap is suffering from severe fragmentation. If this is the case, large allocations cannot be provided without growing the heap, particularly if the heap limit was not initially generous. In extreme cases, the heap may be so badly fragmented that Opera functionality is crippled.</p>

<p>If memory starvation is a significant problem, the solution may be to increase the heap limit and to consider a stricter employment of an allocation limit.</p>

<h3>Heap-limiting and allocation limits</h3>

<p>One notable aspect of heap-limiting Opera is that it will only stop allocations which <i>grow</i> the heap. If the heap has been increased by some other part of the process, Opera is allowed to use the available memory on the heap. In some situations where the heap has been increased a lot, Opera may allocate huge amounts of memory. This may be either good or bad. On the one hand, it will use memory which is available on the heap, which may otherwise lie unused. On the other hand, this memory may only have been temporarily allocated, and using it may prevent it from being reduced when Linux attempts to shrink the heap. This can lead to quite a vicious circle.</p>

<p>To stop this phenomenon, use an allocation limit to prevent the Opera heap from growing too large, even if it thinks it has plenty of room.</p>

<h3>Oversized heap</h3>

<p>One problem with using an allocation limit is that the heap size may grow very large. The allocation limit does not take in to consideration fragmentation effects. If the heap suffers from heavy fragmentation, it may grow to large sizes as Opera continues to allocate memory regardless.</p>

<p>Also, it may be desirable to keep Opera from growing the heap if other parts of the process have temporarily allocated more memory than usual - even at the expense of Opera functionality.</p>

<p>To reduce the effects of this problem, set a stricter heap limit.</p>

<h3>Conclusion</h3>

<p>It may not be perfect for every platform, but you will probably want to employ both mechanisms of the OOM system. The allocation limit should be smaller than the heap limit to allow room for user interface and plug-ins to live on the heap. The exact numbers for your platform can only be attained through careful experimentation.</p>

<h2 id="employing">Employing the OOM system</h2>

<p>It is possible to set environment variables <b>OPERA_HEAP_LIMIT</b> and <b>OPERA_ALLOC_LIMIT</b> in the Linux shell used to launch Opera to control opera OOM limits. These variables are enforced as soon as Opera starts. One example:</p>

<dl>
<dt>export OPERA_HEAP_LIMIT=8388608</dt>
<dd>Limit Opera heap size to 8MB</dd>
<dt>export OPERA_ALLOC_LIMIT=6291456</dt>
<dd>Limits the amount of memory that Opera is allowed to use on the heap to 6MB</dd>
</dl>
