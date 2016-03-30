---
title: JavaScript for Hackers
authors:
- gareth-heyes
intro: 'In this article, security expert Gareth Heyes details some of the more interesting JavaScript hacks he has uncovered while focusing on browser security. The knowledge presented here should give you some insights on making your web applications more secure.'
license: cc-by-nc-sa-2.5
---
<h2>Introduction</h2>

<p>I love to use JavaScript in unexpected ways, to create code that looks like it shouldn't work but does, or produces some unexpected behavior. This may sound trivial, but the results I've found lead to some very useful techniques.  Each of the techniques described can be used for XSS filter evasion, which was my original intention when developing them. However, learning such JavaScript can dramatically increase your knowledge of the language, helping you become better at cleaning up input, and increase web application security.</p>

<p>So read on and enjoy my weird and wonderful JavaScript hacks.</p>

<h2>RegExp replace can execute code</h2>

<p>When using regular expressions with <code>replace</code> the second argument supports a function assignment. In Opera it seems you can use this argument to execute code. For example, check out the code snippet below:</p>

<pre><code>'XSS'.replace(/XSS/g,alert)</code></pre>

<p>This results in <code>alert('XSS')</code>; this works because the match from the RegExp is passed to the <code>alert</code> function as an argument. Normally you would use a function to perform another routine on the matched text, like so:</p>

<pre><code>'somestring'.replace(/some/,function($1){//do something with some})</code></pre>

<p>But as you can see in the first example in this section, instead of a user defined function we are executing a native <code>alert</code> call, and the arguments are passed to the native call from the regular expression. It's a cool trick and could be used to evade some XSS filters, for example if you inject a string then proceed with a dot you can then call any function you like.</p>

<p>To see how this is used in a XSS context, imagine we have an unfiltered <code>"</code> in the string in which an injection occurs, such as a JavaScript event or a script tag. First we inject our payload <code>alert(1)</code>, then we break out of the quotes - <code>"</code> - and continue our regular expression:</p>

<pre><code>.replace(/.+/,eval)//</code></pre>

<p>Notice I use <code>eval</code> here to execute any code I like and the regular expression matches everything so that the full payload is passed to <code>eval</code>.</p>

<p>If I put all the code together and show you the output of the page it is easier to understand what is going on:</p>

<p>Page output:</p>

<pre><code>&lt;script&gt;somevariableUnfiltered="YOUR INPUT"&lt;/script&gt;</code></pre>

<p>The above code is common in analytics scripts where your search string is stored by an advertising company. You often don't see these scripts but if you view the source of a web page you'll find that they are a regular occurrence; forums are another place where they are prevalent. "YOUR INPUT" is the string you have control of; this is also referred to as <em>DOM based XSS</em> if the input isn't filtered correctly.</p>

<p>Input:</p>

<code>alert(1)".replace(/.+/,eval)//</code>

<p>Resulting output:</p>

<code>&lt;script&gt;somevariableUnfiltered="alert(1)".replace(/.+/,eval)//"&lt;/script&gt;</code>

<p>Notice the single line comment used to remove the trailing quote.</p>

<h2>Unicode escapes</h2>

<p>Although it's not possible to use parentheses when escaping unicode characters, you can escape the name of the function being called, for example:</p>

<pre><code>\u0061\u006c\u0065\u0072\u0074(1)</code></pre>

<p>This calls <code>alert(1)</code>; <code>\u</code> indicates it's a unicode escape and the hex number after specifies the character. <code>\u0061</code> is &quot;a&quot; and so on.</p>

<p>Mixing and matching unicode escapes is possible with normal characters; the example below demonstrates this:</p>

<pre><code>\u0061lert(1)</code></pre>

<p>You can also include them in strings and even evaluate them using <code>eval</code>. Unicode escapes are different to normal hex or octal escapes because they can be included in a string, or a reference to a function, variable or object.</p>

<p>The example below shows how to use unicode escapes that are evaluated and split into separate parts:</p>

<pre><code>eval('\\u'+'0061'+'lert(1)')</code></pre>

<p>By avoiding normal function names like <code>alert</code>, we can fool XSS filters into injecting our code. This very example was used to bypass PHPIDS (an open source IDS system), which resulted in the rules subsequently being made much stronger. If you are considering decoding JavaScript for malware analysis at runtime you need to consider the possible ways that multiple levels of encoding can work; as you can see from this example it won't be an easy task.</p>

<h2>JavaScript parser engine</h2>

<p>JavaScript is a very dynamic language. It can execute a surprising amount of code that at first glance doesn't look valid, however once you know how the parsers work, you begin to understand the logic behind it.</p>

<p>JavaScript doesn't know the result of a function until it is executed, and obviously it has to call the function to return the variable type.
This leads to an interesting quirk - for example, if the returning function doesn't return a valid value for the code block, a syntax error will occur after the execution of the function.</p>

<p>What does this mean in English? Well, code speaks louder than words - check this example out</p>

<pre><code>+alert(1)--</code></pre>

<p>The alert function executes and returns undefined but by that time it is too late - the decrement operator is expecting a number and therefore raises an error.</p>

<p>Here's a few more valid examples that don't raise errors but are interesting nevertheless.</p>

<pre><code>+alert(1)
1/alert(1)
alert(1)>>>/abc/</code></pre>

<p>You might think the above examples are pointless but in fact they offer great insight into how Javascript works. Once you understand the small details the bigger picture becomes clear and the way that your code executes can help you understand how the parser works. I find these sort of examples useful when tracking down syntax errors and DOM based XSS, and exploiting XSS Filters.</p>

<h2>Throw, Delete what?</h2>

<p>You can use the <code>delete</code> operator in ways that you wouldn't at first expect, which results in some pretty wacky syntax. Let’s see what happens if we combine the <code>throw</code>, <code>delete</code>, <code>not</code> and <code>typeof</code> operators?</p>

<pre><code>throw delete~typeof~alert(1)</code></pre>

<p>Even though you'd think it couldn't possibly work, it's possible to call <code>delete</code> on a function call and it still executes:</p>

<pre><code>delete alert(1)</code></pre>

<p>Here are a few more examples</p>

<pre><code>delete~[a=alert]/delete a(1)
delete [a=alert],delete a(1)</code></pre>

<p>At first glance you'd think that they would raise a syntax error but when examining the code further it sorta makes sense. The parser finds a variable assignment first within an array, performs the assignment and then deletes the array. Likewise the delete is performed after a function call because it needs to know the result of the function before it can delete the returned object, even if it is null.</p>

<p>Again these examples have been used to defeat XSS filters because they are often trying to match valid syntax and they don't expect the obscure nature of the code. You should consider such examples when programming your application data validation.</p>

<h2>Global objects are statements</h2>

<p>In certain instances of XSS filter evasion, it can be useful to send English-like text hidden within a vector. Clever systems like PHPIDS use English and vector comparisons to determine if a request is an attack or not, so it is a useful way to test these systems.</p>

<p>Using global objects/functions on their own can produce English-like code blocks. In fact, on the <a href="http://sla.ckers.org">sla.ckers</a> security forum we had a little game to produce English-like sentences in JavaScript. To get an idea of how it works, check out the following example:</p>

<pre><code>stop, open, print && alert(1)</code></pre>

<p>I coined the name Javascriptlish because it's possible to produce some crazy looking code:</p>

<pre><code>javascript : /is/^{ a : ' weird ' }[' & wonderful ']/" language "
the_fun: ['never '] + stop['s']</code></pre>

<p>We use the regular expression <code>/is/</code> with the operator <code>^</code> and then create an object <code>{ a : 'weird'}</code> (which has a property <code>a</code> and an assignment of <code>weird</code>.) Then we look for a property <code>' & wonderful '</code> within the object we just created, which is then divided by a string of <code>language</code>.</p>

<p>Next we use a label called <code>the_fun</code> and an array with <code>never </code>, use a global function called <code>stop</code> and check for a property of <code>s</code> ... all of which is valid syntax.</p>

<h2>Getters/Setters fun</h2>

<p>When Firefox added the <a href="http://ejohn.org/blog/javascript-getters-and-setters/ ">custom syntax for setters</a> it enabled some interesting XSS vectors that didn't use parentheses. Opera doesn't support a custom syntax yet - this is good from a security point of view but not from a JavaScript hacker's perspective.</p>

<p>Opera does however support the standard <code>defineSetter</code> syntax. This enables us to call functions via assignments, which still has some use for XSS filter evasion:</p>

<pre><code>defineSetter('x',alert); x=1;</code></pre>

<p>In case you're not aware of setters/getters, the example above creates a setter for the global variable <code>x</code>. A setter is called whenever a variable is set with something and the argument is supplied from whatever has been assigned. The second argument is the function to be called on assignment, which is <code>alert</code>. Then, when <code>x</code> is assigned the value of <code>1</code>, the alert function is called with <code>1</code> as the argument.</p>

<h2>Location allows url encoding</h2>

<p>The <code>location</code> object allows url encoding within the JavaScript code. This allows you to further obfuscate XSS vectors by double encoding them.</p>

<pre><code>location='javascript:%61%6c%65%72%74%28%31%29'</code></pre>

<p>Combining them with unicode escapes can hide strings quite nicely:</p>

<pre><code>location='javascript:%5c%75%30%30%36%31%5c%75%30%30%36%63%5c %75%30%30%36%35%5c%75%30%30%37%32%5c%75%30%30%37%34(1)'</code></pre>

<p>The first example works because the URL bar in Opera accepts urlencoded strings - you can hide JavaScript syntax by url encoding it. This is useful because when it is passed within a XSS vector you can double url encode it to help further with filter evasion.</p>

<p>The second example combines the first technique with the unicode escape technique mentioned previously. So when you decode the string it results in the unicode representation of <code>alert</code> which is <code>\u0061\u006c\u0065\u0072\u0074</code>.</p>

<!-- (Hackvertor link no longer available)
Update: but it is available here now: <https://hackvertor.co.uk/public>

<h2>Hackvertor: Your second brain</h2>

<p>As a JavaScript hacker I couldn't possibly remember every single encoding method that's possible with JavaScript, so I decided to create a open source tool to do the hard work for me. In the last example the string is double encoded, which can sometimes make it hard to understand. Using my <a href="http://www.businessinfo.co.uk/labs/hackvertor/hackvertor.php?input=bG9jYXRpb249J2phdmFzY3JpcHQ6PEBkX3VuaV83PjxAZF9lbmNfNj4lNWMlNzUlMzAlMzAlMzYlMzElNWMlNzUlMzAlMzAlMzYlNjMlNWMlNzUlMzAlMzAlMzYlMzUlNWMlNzUlMzAlMzAlMzclMzIlNWMlNzUlMzAlMzAlMzclMzQ8QC9kX2VuY182PjxAL2RfdW5pXzc%2BKDEpJw%3D%3D ">Hackvertor tool makes it a piece of cake</a> and it works nicely in Opera too.</p>

<p>Hackvertor works by using tags to perform multiple levels of conversion; this is similar to HTML tags but it runs code instead of changing the display of the containing text. It converts from the innermost tag outwards, eg to convert the last vector it url decodes and then decodes the unicode escapes, which results in <code>javascript:alert (1)</code>.</p>
-->
