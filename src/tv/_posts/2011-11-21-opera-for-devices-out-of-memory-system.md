---
title: 'Opera for Devices: Out of Memory System'
authors:
- odevrel
intro: 'Opera for Devices provides powerful mechanisms to strictly limit the heap usage of Opera. Memory is an expensive commodity on many devices and different programs may compete for the limited resources with unpredictable consequences. With the Out of Memory (OOM) system it is possible to restrict Opera to a limited amount of memory while ensuring good functionality.'
tags:
- devices
- tv
license: cc-by-3.0
---

[Opera for Devices][1] provides powerful mechanisms to strictly limit the heap usage of Opera. Memory is an expensive commodity on many devices and different programs may compete for the limited resources with unpredictable consequences. With the Out of Memory (OOM) system it is possible to restrict Opera to a limited amount of memory while ensuring good functionality.

[1]: http://www.opera.com/business/devices/

Although this topic is more a concern for customer integrating Opera on their devices rather then for content developers, understanding how memory allocation works on limited memory devices is important to be able to optimize your application and understand which kind of behaviour to expect from Opera when running out of memory.

## Content:

- [Understanding out of memory situations](#understanding)
- [The Opera OOM system](#system)
- [What problems does each mechanism solve?](#problems)
- [Employing the OOM system](#employing)

## Understanding out of memory situations

Linux is generally not OOM safe, so it is not possible to rely on malloc(), and so on, to fail when memory runs low. A Linux environment is usually set up so that malloc() never, or seldom, returns NULL. Consequently most Linux applications and libraries do not expect this to happen, and do not handle it well. This only works well on a desktop system that rarely runs out of memory.

In the rare event when a Linux system does get low on memory, the kernel has a sophisticated algorithm which selects and kills the process using too much memory — _the OOM-killer_. The problem is that an application is never told about the low memory condition until it is too late, and the application is killed. To the end user, it will simply appear to crash. On a device with very limited memory, this is undesirable and it is best to avoid this.

## The Opera OOM system

To combat problems associated with limited memory, we have implemented a system that ensures that Opera behaves well in low memory situations. It provides two mechanisms that effectively limit Opera heap memory usage.

### Limit by heap size

The first mechanism captures memory allocations in Opera and force-fails them if they would cause the process heap size to grow beyond the set limit.

### Limit by allocation size

The second mechanism internally keeps track of the amount of memory that Opera has allocated, and force-fails any allocations that would cause the total to exceed the allowed limit.

### Internal OOM handling

Internal OOM handling is triggered by a force-failed memory allocation, regardless of which mechanism triggered it. Internal OOM handling frees as much memory as possible and, if necessary, stops page loading. This means that Opera should not cause the heap to increase past the set limit and that Opera should be able to keep the amount of memory allocated below the specified limits.

Opera also sends an OOM notification to the implementation layer, alerting it that Opera is low on memory. How this situation is handled can differ between different Opera Powered products, e.g. a dialog suggesting closing of any unused applications could be shown.

## What problems does each mechanism solve?

The two different mechanisms in the OOM system work quite differently to solve different problems. It is necessary to take in to account the use case for the device to determine how to best configure the OOM system. Typically, it is a good idea to employ both mechanisms, but it is important to understand the effects of them to tune the behavior.

This topic describes a number of issues and how they are affected by the OOM system.

### Memory starvation

There may be situations where Opera is effectively starved for memory, and internal OOM handling is unable to raise enough memory to browse normal pages, rendering the browser unusable. This problem arises when the Opera heap limit has been reached, but Opera still does not have enough memory.

### What causes this problem?

There are other parts of the Opera process that are not affected by the OOM system, such as plug-ins and user interface sections. These share Opera’s heap space but Opera does not control them. In some situations, they may be allocating on the heap, filling it up with memory, growing it far above the size allowed to Opera. The more they allocate, the less may be available to Opera. This may lead to Opera starving, as it will never be allowed to increase the heap.

This problem can be alleviated by listening for Opera’s OOM signals and thoroughly clearing any plug-in or user interface memory that currently does not need to be allocated.

Another cause of memory starvation could be that the heap is suffering from severe fragmentation. If this is the case, large allocations cannot be provided without growing the heap, particularly if the heap limit was not initially generous. In extreme cases, the heap may be so badly fragmented that Opera functionality is crippled.

If memory starvation is a significant problem, the solution may be to increase the heap limit and to consider a stricter employment of an allocation limit.

### Heap-limiting and allocation limits

One notable aspect of heap-limiting Opera is that it will only stop allocations which _grow_ the heap. If the heap has been increased by some other part of the process, Opera is allowed to use the available memory on the heap. In some situations where the heap has been increased a lot, Opera may allocate huge amounts of memory. This may be either good or bad. On the one hand, it will use memory which is available on the heap, which may otherwise lie unused. On the other hand, this memory may only have been temporarily allocated, and using it may prevent it from being reduced when Linux attempts to shrink the heap. This can lead to quite a vicious circle.

To stop this phenomenon, use an allocation limit to prevent the Opera heap from growing too large, even if it thinks it has plenty of room.

### Oversized heap

One problem with using an allocation limit is that the heap size may grow very large. The allocation limit does not take in to consideration fragmentation effects. If the heap suffers from heavy fragmentation, it may grow to large sizes as Opera continues to allocate memory regardless.

Also, it may be desirable to keep Opera from growing the heap if other parts of the process have temporarily allocated more memory than usual — even at the expense of Opera functionality.

To reduce the effects of this problem, set a stricter heap limit.

### Conclusion

It may not be perfect for every platform, but you will probably want to employ both mechanisms of the OOM system. The allocation limit should be smaller than the heap limit to allow room for user interface and plug-ins to live on the heap. The exact numbers for your platform can only be attained through careful experimentation.

## Employing the OOM system

It is possible to set environment variables `OPERA_HEAP_LIMIT` and `OPERA_ALLOC_LIMIT` in the Linux shell used to launch Opera to control opera OOM limits. These variables are enforced as soon as Opera starts. One example:

- `export OPERA_HEAP_LIMIT=8388608` Limit Opera heap size to 8MB
- `export OPERA_ALLOC_LIMIT=6291456` Limits the amount of memory that Opera is allowed to use on the heap to 6MB
