---
title: New stable release with return value inspection
authors:
- david-hasather
tags:
- dragonfly
license: cc-by-3.0
---

<p>When debugging a program, it is often useful to know the value that was returned from the last function call. If the value is assigned to a variable it&#39;s easy to inspect, but sometimes you might have something like this without a reference to the value returned:</p>
<p><pre><code>mul(add(1, 2), add(3, 4));</code></pre></p>
<p>Today&#39;s stable release includes a new feature that makes it easier to debug this sort of code. When stepping out of a function, the return value will be displayed under <em>Return Values</em> in the <em>State</em> tab, along with the function that returned the value. Next to the values are arrows that can be clicked to jump directly to the return statement or back to the line from where the function was called.</p>
<p>When stepping over a line with several function calls, all return values will be shown, in order, with the most recent call at the top.</p>
<p><img src="{{ page.id }}/return-values.png" alt="The new return values section, listing a series of function return values" /></p>
