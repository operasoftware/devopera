Title: Why I Love ECMAScript 4: Real Decimals
----
Date: 2007-10-31 12:02:39
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<h2>Introduction</h2>

<p>In this article, I explore ECMAScript 4&#39;s ability to use real decimal floating points, in addition to the binary
floating points traditionally used by most programming languages. Languages based on ECMAScript 3, such as
ActionScript 2.x and JavaScript 1.x don&#39;t have this ability - to make use of decimal floating points, you&#39;ll need
a language based on ECMAScript 4, such as ActionScript 3 (available in Adobe Flash 9 and Flex 2/3) or JavaScript 2
(supported in future versions of Opera, but not right at the moment.)</p>

<h2>What&#39;s the problem with binary floats anyway?</h2>

<p>So, let&#39;s get started with a simple experiment - copy the following line, paste it into your URL field, and hit
return:</p>

<pre><code>javascript:alert (0.1 + 0.1);</code></pre>

<p>Actually, don&#39;t bother. You don&#39;t need a computer to tell you the answer to this one, right? You figured out that
it was 0.2 faster than you could copy-n-paste it. For advanced calculations, though, there&#39;s really no way to do it
in your head. Advanced calculations like this one:</p>

<pre><code>javascript:alert (0.1 + 0.2);</code></pre>

<p>(...drum roll, please...)</p>

<p>Results in 0.30000000000000004</p>

<p>Seriously.</p>

<p>And if we double the numbers we&#39;re adding, we get double the result of the last equation, right?</p>

<pre><code>javascript:alert (0.2 + 0.4);</code></pre>

<p>Yeah, maybe in your antiquated math class, but not here - the above equation oddly gives us 0.6000000000000001</p>

<p>So what&#39;s going on? Well, first off, it&#39;s not a mistake. Your computer is not capable of making mistakes (despite
mountains of evidence to the contrary). No, your computer is correctly doing binary floating-point arithmetic. The
problem is that you are typing numbers in decimal, but your computer works in binary, and the two don&#39;t always match
up very well.</p>

<p>You know how one-third is not 100% accurately represented in decimal? 0.33333... It&#39;s a lot like that, but in this
case the problem is that one-fifth (and, more to the point, one-tenth) cannot be accurately represented in binary. So you write
0.1, but ECMAScript 3 doesn&#39;t see that as one-tenth. It converts and rounds it to a binary floating-point number
that is extremely close to one-tenth. When you add two of these numbers, it&#39;s all done in binary to produce a new
binary floating-point number. When you actually want to see the answer, though, it has to be converted back into
decimal. Sometimes the errors introduced by these conversions and the subsequent rounding just happen to work:</p>

<pre><code>javascript:alert (0.6 + 0.2);</code></pre>

<p>Gives us the result 0.8</p>

<p>But other times they don&#39;t:</p>

<pre><code>javascript:alert (0.7 + 0.1);</code></pre>

<p>Gives us 0.7999999999999999</p>

<p>And this isn&#39;t just ECMAScript, of course - you&#39;ll see the same thing in any language using binary floating points.
To get around these gotchas, ECMAScript 4 gives us the option of using actual decimal floating points.</p>

<h2>Using real decimals in ECMAScript 4</h2>

<p>The easiest way to use the new decimals is simply to write use decimal at the top of your script. This will cause
all numeric literals to be interpreted as decimal literals. In many cases, this is all you want, and you&#39;re done.</p>

<p>However, if your are doing lots of calculations, you&#39;ll start to notice that decimal floats aren&#39;t as fast as
binary floats, and eat up twice as much memory. Computers are binary beasts, after all (for the moment, anyway -
some manufacturers are committing to supporting decimal floats in hardware.) So sometimes you really only want
certain parts of your code to use decimal (maybe you&#39;re using a library that depends on fast floats or something).
Fortunately, the use decimal pragma is lexically scoped, so you can limit its effects to a block:</p>

<pre><code>{
  use decimal;
  
  var a = 0.1;    //  a is a decimal
  var b = 0.2;    //  b is a decimal
  var c = a + b;  //  c is a decimal (0.3)
}
  
  var d = 0.1 + 0.2;  //  d is a double (0.30000000000000004)</code></pre>

<p>Or you could turn it around, and have your code use decimals everywhere except for the blocks where you need
speed. For even finer granularity, you can use decimals outside of a use decimal pragma with the decimal literal
syntax:</p>

<pre><code>var a = 0.1m;   //  a is a decimal
var b = 0.2m;   //  b is a decimal
var c = a + b;  //  c == 0.3m</code></pre>

<p><code>m</code> is borrowed from C# (which also has decimal floats) and stands for &quot;money&quot; (another use case where you REALLY want 0.1
to mean 0.1).</p>

<h2>Summary</h2>

<p>So that&#39;s a wrap - short and sweet and to the point. If you feel you need to, you can read more about the <a href="http://web.archive.org/web/20070113063258/http://developer.mozilla.org/es4/proposals/decimal.html" alt="ECMAScript 4 committee Wiki conversions and rounding specifics">specifics
of conversions and rounding</a> on the <a href="http://web.archive.org/web/20070216215025/http://developer.mozilla.org/es4/" alt="ECMAScript 4 committee wiki homepage">ECMAScript 4 committee wiki</a>.</p>

<p>Most languages don&#39;t have a built-in decimal type (exceptions are C#, REXX...), and it&#39;s kind of a pain to
implement, and binary floats are sort of similar (and always faster,) so I can see why language designers don&#39;t
bother. Sort of. But on the other hand, it&#39;s about time.</p>
