Title: Efficient JavaScript
----
Date: 2006-11-02 16:19:29
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

<p>Traditionally, a Web page would not contain much scripting, or at least, not much that would affect the performance of that Web page. However, as Web pages become more like applications, the performance of scripts is having a bigger effect. With more and more applications being developed using Web technologies, improving the performance of scripts is becoming increasingly important.</p>

<p>With a desktop application, a compiler is normally used to convert the source into the final binary. The compiler can take its time, and optimize as much as possible for good performance of the final application. Web applications do not have that luxury. Since they need to run on multiple browsers, platforms, and architectures, they cannot be completely precompiled. The browser has to do the interpretation and compilation each time it retrieves a script, and yet the final application has to run as smoothly as a desktop application, and load quickly as well. It is expected to run on a large variety of devices, from an ordinary desktop computer, to a mobile phone.</p>

<p>Browsers are fairly good at achieving this, and Opera has one of the fastest scripting engines of any current browser. However, browsers do have their limits, and that is where the Web developer has to take over. Ensuring that a Web application runs as fast as possible can be a simple matter of trading one type of loop for another, making one combined style change instead of three, or adding only the script that will actually be used.</p>

<p>This article will show several simple changes that can be made to improve the performance of your Web applications. Areas covered will be ECMAScript - the core language used by JavaScript, DOM, and document loading.</p>

<h2>Quick Tips</h2>

	<h3>ECMAScript</h3>
	<ol>
		<li><a href="./?page=2#avoideval">Avoid using <code>eval</code> or the <code>Function</code> constructor</a><ol>
			<li><a href="./?page=2#rewriteeval">Rewrite that <code>eval</code></a></li>
			<li><a href="./?page=2#usefunction">If you want a function, use a function</a></li>
		</ol></li>
		<li><a href="./?page=2#avoidwith">Avoid using <code>with</code></a></li>
		<li><a href="./?page=2#trycatch">Don&#39;t use <code>try-catch-finally</code> inside performance-critical functions</a></li>
		<li><a href="./?page=2#isolate">Isolate uses of <code>eval</code> and <code>with</code></a></li>
		<li><a href="./?page=2#avoidglobal">Avoid using global variables</a></li>
		<li><a href="./?page=2#implicitconversion">Beware of implicit object conversion</a></li>
		<li><a href="./?page=2#forin">Avoid <code>for-in</code> in performance-critical functions</a></li>
		<li><a href="./?page=2#stringaccumulator">Use strings accumulator-style</a></li>
		<li><a href="./?page=2#primitiveoperator">Primitive operations can be faster than function calls</a></li>
		<li><a href="./?page=2#timeouts">Pass functions, not strings, to <code>setTimeout()</code> and <code>setInterval()</code></a></li>
	</ol>

	<h3>DOM</h3>
	<ol>
		<li><a href="./?page=3#reflow">Repaint and reflow</a><ol>
			<li><a href="./?page=3#minimumreflow">Keeping the number of reflows to a minimum</a></li>
			<li><a href="./?page=3#minimalreflow">Minimal reflow</a></li>
		</ol></li>
		<li><a href="./?page=3#modifyingtree">Document tree modification</a></li>
		<li><a href="./?page=3#invisibleelement">Modifying an invisible element</a></li>
		<li><a href="./?page=3#measuring">Taking measurements</a></li>
		<li><a href="./?page=3#stylechanges">Making several style changes at once</a></li>
		<li><a href="./?page=3#smoothspeed">Trading smoothness for speed</a></li>
		<li><a href="./?page=3#manynodes">Avoid inspecting large numbers of nodes</a></li>
		<li><a href="./?page=3#xpath">Improve speed with XPath</a></li>
		<li><a href="./?page=3#traversemodify">Avoid modifications while traversing the DOM</a></li>
		<li><a href="./?page=3#cachevalues">Cache DOM values in script variables</a></li>
	</ol>

	<h3>Document loading</h3>
	<ol>
		<li><a href="./?page=4#docreferences">Avoid keeping alive references from one document to another</a></li>
		<li><a href="./?page=4#fasthistory">Fast history navigation</a></li>
		<li><a href="./?page=4#xmlhttprequest">Use XMLHttpRequest</a></li>
		<li><a href="./?page=4#dynamicscript">Create SCRIPT elements dynamically</a></li>
		<li><a href="./?page=4#locationnreplace"><code>location.replace()</code> keeps the history under control</a></li>
	</ol>

&lt;page&gt;

<h2>ECMAScript</h2>

	<h3 id="avoideval">Avoid using <code>eval</code> or the <code>Function</code> constructor</h3>
		<p>Each time <code>eval</code> or the <code>Function</code> constructor is called on a string representing source code, the script engine must start the machinery that converts the source code to executable code. This is usually expensive for performance - easily a hundred times more expensive than a simple function call, for example.</p>
		<p>The <code>eval</code> function is especially bad, as the contents of the string passed to <code>eval</code> cannot be known in advance. Since the code is interpreted in the context of the call to <code>eval</code> this means that the compiler cannot optimise the surrounding context, and the browser is left to interpret much of the surrounding code at runtime. This adds an additional performance impact.</p>
		<p>The <code>Function</code> constructor is not quite as bad as <code>eval</code>, since using it does not affect the code surrounding the use, but it can still be quite slow.</p>

  <h4 id="rewriteeval">Rewrite that <code>eval</code></h4>
    <p><code>eval</code> is not only inefficient, it is almost always unnecessary. In many cases, it is used because information has been provided as a string, and it is assumed that eval is the way to use that information. The following example shows a common mistake:</p>
<pre><code>function getProperty(oString) {
  var oReference;
  eval(&#39;oReference = test.prop.&#39;+oString);
  return oReference;
}</code></pre>
    <p>This code performs exactly the same function, but avoids using <code>eval</code>:</p>
<pre><code>function getProperty(oString) {
  return test.prop[oString];
}</code></pre>
    <p>The code that does not use <code>eval</code> performs around 95% faster than the original in Opera 9, Firefox, and Internet Explorer, and around 85% faster in Safari. (Note that this does not include the time needed to call the function itself.)</p>

  <h4 id="usefunction">If you want a function, use a function</h4>
    <p>This example shows a common use for the <code>Function</code> constructor:</p>
<pre><code>function addMethod(oObject,oProperty,oFunctionCode) {
  oObject[oProperty] = new Function(oFunctionCode);
}
addMethod(myObject,&#39;rotateBy90&#39;,&#39;this.angle=(this.angle+90)%360&#39;);
addMethod(myObject,&#39;rotateBy60&#39;,&#39;this.angle=(this.angle+60)%360&#39;);</code></pre>
    <p>This code provides the same functionality, but avoids using the <code>Function</code> constructor. This is done by creating an anonymous function instead, which can be referenced just like any other object:</p>
<pre><code>function addMethod(oObject,oProperty,oFunction) {
  oObject[oProperty] = oFunction;
}
addMethod(myObject,&#39;rotateBy90&#39;,function () { this.angle=(this.angle+90)%360; });
addMethod(myObject,&#39;rotateBy60&#39;,function () { this.angle=(this.angle+60)%360; });</code></pre>

	<h3 id="avoidwith">Avoid using <code>with</code></h3>
    <p>Although often seen as a convenience for the developer, <code>with</code> can be expensive for performance. The <code>with</code> construct introduces an extra scope for the script engine to search through whenever a variable is referenced. This alone produces a minor performance decrease. However, the contents of that scope are not known at compile time, meaning that the compiler cannot optimize for it, in the same way as it can with normal scopes (such as those created by functions).</p>
  	<p>A more efficient approach that also presents a convenience for the developer, is to reference the object using a normal variable, and then access the properties from that instead. This will obviously only work if the properties are not literal types, such as a string or boolean.</p>
    <p>Consider this code:</p>
<pre><code>with( test.information.settings.files ) {
  primary = &#39;names&#39;;
  secondary = &#39;roles&#39;;
  tertiary = &#39;references&#39;;
}</code></pre>
    <p>This will be more efficient for the script engine:</p>
<pre><code>var testObject = test.information.settings.files;
testObject.primary = &#39;names&#39;;
testObject.secondary = &#39;roles&#39;;
testObject.tertiary = &#39;references&#39;;</code></pre>


	<h3 id="trycatch">Don&#39;t use <code>try-catch-finally</code> inside performance-critical functions</h3>
    <p>The <code>try-catch-finally</code> construct is fairly unique. Unlike other constructs, it creates a new variable in the current scope at runtime. This happens each time the <code>catch</code> clause is executed, where the caught exception object is assigned to a variable. This variable does not exist inside other parts of the script even inside the same scope. It is created at the start of the <code>catch</code> clause, then destroyed at the end of it.</p>
    <p>Because this variable is created and destroyed at runtime, and represents a special case in the language, some browsers do not handle it very efficiently, and placing a catch handler inside a performance critical loop may cause performance problems when exceptions are caught.</p>
	  <p>If possible, exception handling should be done at a higher level in the script where it may not occur so frequently, or avoided by checking if the desired action is allowed first. The following example shows a loop that may throw several exceptions, if the desired properties do not exist:</p>

<pre><code>var oProperties = [&#39;first&#39;,&#39;second&#39;,&#39;third&#39;,...,&#39;nth&#39;], i;
for( i = 0; i &lt; oProperties.length; i++ ) {
  try {
    test[oProperties[i]].someproperty = somevalue;
  } catch(e) {
    ...
  }
}</code></pre>

	  <p>In many cases, the <code>try-catch-finally</code> construct could be moved so that it surrounds the loop. This does change the semantics a little, since if an exception is thrown, the loop will be halted, although code following it will continue to run:</p>

<pre><code>var oProperties = [&#39;first&#39;,&#39;second&#39;,&#39;third&#39;,...,&#39;nth&#39;], i;
try {
  for( i = 0; i &lt; oProperties.length; i++ ) {
    test[oProperties[i]].someproperty = somevalue;
  }
} catch(e) {
  ...
}</code></pre>

	  <p>In some cases, the <code>try-catch-finally</code> construct could be avoided completely by checking for properties, or using another appropriate test:</p>

<pre><code>var oProperties = [&#39;first&#39;,&#39;second&#39;,&#39;third&#39;,...,&#39;nth&#39;], i;
for( i = 0; i &lt; oProperties.length; i++ ) {
  if( test[oProperties[i]] ) {
    test[oProperties[i]].someproperty = somevalue;
  }
}</code></pre>

  <h3 id="isolate">Isolate uses of <code>eval</code> and <code>with</code></h3>
    <p>Since these constructs can impact performance so significantly, their use should be kept to as little as possible, but there are some times when you may need to use them. If a function is repeatedly called, or a loop is repeatedly evaluated, then it is best to avoid these constructs within it. They are best suited to code that is executed only once, or only a few times, and not within performance critical code.</p>
    <p>Wherever possible, isolate them from other code, so that they do not affect its performance. This could mean, for example, putting them inside a top-level function, or running them once, and storing their result, so you can use the result again later without having to rerun the code.</p>
    <p>Although not so important, the <code>try-catch-finally</code> construct can have performance impacts in some browsers, including Opera, so you may also wish to isolate that in the same way.</p>

	<h3 id="avoidglobal">Avoid using global variables</h3>
	  <p>It can be tempting to create variables in the global scope, simply because that is easy to do. However, there are several reasons why this can make scripts run more slowly.</p>
	  <p>To begin with, if code inside a function or another scope references that variable, the script engine has to step up through each scope in turn until it reaches the global scope. A variable in the local scope will be found more quickly.</p>
	  <p>Variables in the global scope also persist through the life of the script. In the local scope, they are destroyed when the local scope is lost. The memory they use can then be freed by the garbage collector.</p>
	  <p>Lastly, the global scope is shared by the <var>window</var> object, meaning that it is in essence two scopes, not just one. In the global scope, variables are always located using their name, instead of using an optimized predefined index, as they can be in local scopes. A global variable will take longer for the script engine to find, as a result.</p>
		<p>Functions are also usually created in the global scope. This means that functions that call other functions, that in turn call other functions, increase the number of times the script engine has to step back to the global scope to locate them.</p>

    <p>Take this simple example, where <var>i</var> and <var>s</var> are in the global scope, and the function uses those global variables:</p>
<pre><code>var i, s = &#39;&#39;;
function testfunction() {
  for( i = 0; i &lt; 20; i++ ) {
    s += i;
  }
}
testfunction();</code></pre>
    <p>This alternative version performs measurably faster. In most current browsers, including Opera 9, and the latest versions of Internet Explorer, Firefox, Konqueror and Safari, execution is about 30% faster than the original.</p>
<pre><code>function testfunction() {
  var i, s = &#39;&#39;;
  for( i = 0; i &lt; 20; i++ ) {
    s += i;
  }
}
testfunction();</code></pre>

	<h3 id="implicitconversion">Beware of implicit object conversion</h3>
    <p>Literals, such as strings, numbers, and boolean values, have two representations within ECMAScript. Each of them can be created as either a value or an object. For example, a string value is created simply by saying <code>var oString = &#39;some content&#39;;</code>, while an equivalent string object is created by saying <code>var oString = new String(&#39;some content&#39;);</code>.</p>
    <p>Any properties and methods are defined on the string object, not the value. When you reference a property or method of a string value, the ECMAScript engine must implicitly create a new string object with the same value as your string, before running the method. This object is only used for that one request, and will be recreated next time you attempt to use a method of the string value.</p>
    <p>This example requires the script engine to create 21 new string objects, once for each time the <var>length</var> property is accessed, and once each time the <var>charAt</var> method is called:</p>
<pre><code>var s = &#39;0123456789&#39;;
for( var i = 0; i &lt; s.length; i++ ) {
  s.charAt(i);
}</code></pre>
    <p>This equivalent example creates just a single object, and will perform better as a result:</p>
<pre><code>var s = new String(&#39;0123456789&#39;);
for( var i = 0; i &lt; s.length; i++ ) {
  s.charAt(i);
}</code></pre>
    <p>If your code calls methods of literal values very often, you should consider converting them into objects instead, as in the previous example.</p>
    <p>Note that although most of the points in this article are relevant to all browsers, this particular optimization is aimed mainly at Opera. It may also affect some other browsers, but can be a little slower in Internet Explorer and Firefox.</p>

  <h3 id="forin">Avoid <code>for-in</code> in performance-critical functions</h3>
    <p>The <code>for-in</code> loop has its place, but is often misused, when a normal <code>for</code> loop would be more appropriate. The <code>for-in</code> loop requires the script engine to build a list of all the enumerable properties, and check for duplicates in that list, before it can start the enumeration.</p>
    <p>Very often, the script itself already knows what properties must be enumerated. In many cases, a simple <code>for</code> loop could be used to step through those properties, especially if they are named using sequential numbers, such as with an array, or an object that is given properties to make it appear to be an array (an example would be a NodeList object created by DOM).</p>
    <p>This is an example of incorrect use of a <code>for-in</code> loop:</p>
<pre><code>var oSum = 0;
for( var i in oArray ) {
  oSum += oArray[i];
}</code></pre>
    <p>A <code>for</code> loop would be more efficient:</p>
<pre><code>var oSum = 0;
var oLength = oArray.length;
for( var i = 0; i &lt; oLength; i++ ) {
  oSum += oArray[i];
}</code></pre>

	<h3 id="stringaccumulator">Use strings accumulator-style</h3>
    <p>String concatenation can be an expensive process. Using the <code>+</code> operator does not wait for the result to be assigned to a variable. Instead, it creates a new string in memory, assigns its result to that string, and it is that new string that may be assigned to a variable. The following code shows a common assignment of a concatenated string:</p>
<pre><code>a += &#39;x&#39; + &#39;y&#39;;</code></pre>
    <p>That code would be evaluated by firstly creating a temporary string in memory, assigning the concatenated value of &#39;xy&#39;, then concatenating that with the current value of <var>a</var>, and finally assigning the resulting value of that to <var>a</var>. The following code uses two separate commands, but because it assigns directly to <var>a</var> each time, the temporary string is not used. The resulting code is around 20% faster in many current browsers, and potentially requires less memory, as it does not need to temporarily store the concatenated string:</p>
<pre><code>a += &#39;x&#39;;
a += &#39;y&#39;;</code></pre>

	<h3 id="primitiveoperator">Primitive operations can be faster than function calls</h3>
    <p>Although not significant in normal code, there is a potential for improved speed in performance critical loops and functions, by replacing function calls with an equivalent primitive operation. An example would be the <var>push</var> method of an array, that is slower than simply adding an item to the index at end of the array. Another example would be methods of the <var>Math</var> object, where in most cases, simple mathematical operators would be more appropriate.</p>
<pre><code>var min = Math.min(a,b);
A.push(v);</code></pre>
<p>These alternatives provide the same functionality, while performing better:</p>
<pre><code>var min = a &lt; b ? a : b;
A[A.length] = v;</code></pre>

	<h3 id="timeouts">Pass functions, not strings, to <code>setTimeout()</code> and <code>setInterval()</code></h3>
    <p>The <code>setTimeout()</code> and <code>setInterval()</code> methods are very closely related to <code>eval</code>. If they are passed a string, then after the specified delay, that string will be evaluated in exactly the same way as with <code>eval</code>, including the associated performance impact.</p>
   	<p>These methods can, however, accept a function as the first parameter, instead of a string. This function will be run after the same delay, but can be interpreted and optimized during compilation, with improved performance as a result. Typical examples of using strings as the parameter would be these:</p>
<pre><code>setInterval(&#39;updateResults()&#39;,1000);
setTimeout(&#39;x+=3;prepareResult();if(!hasCancelled){runmore();}&#39;,500);</code></pre>
   	<p>In the first case, the function can simply be referenced directly. In the second case, an anonymous function can be wrapped around the code:</p>
<pre><code>setInterval(updateResults,1000);
setTimeout(function () {
  x += 3;
  prepareResult();
  if( !hasCancelled ) {
    runmore();
  }
},500);</code></pre>

    <p>Note that in all cases, the timeout or interval delay may not be honoured exactly. In general, browsers will take a little longer than the requested delay. Some may compensate for that with intervals by firing the next one slightly early instead. Others will simply try to wait for the correct amount of time every time. Factors such as CPU speed, thread states, and JavaScript load will affect the accuracy of the delay. Most browsers will be unable to give a delay of 0 ms, and may impose a minimum delay, typically between 10 and 100 ms.</p>

&lt;page&gt;

<h2>DOM</h2>

<p>In general, there are three main things that can cause DOM to perform slowly. The first is when a script performs some extensive DOM manipulation, such as building a new tree from some retrieved data. The second is when a script triggers too many reflows or repaints. The third is when a script takes a slow approach to locating a desired node in the DOM tree.</p>

<p>The second and third are the most common, and the most significant, so these will be dealt with first.</p>

<h3 id="reflow">Repaint and reflow</h3>

<p>Repaint - also known as redraw - is what happens whenever something is made visible when it was not previously visible, or vice versa, without altering the layout of the document. An example would be when adding an outline to an element, changing the background color, or changing the visibility style. Repaint is expensive in terms of performance, as it requires the engine to search through all elements to determine what is visible, and what should be displayed.</p>

<p>A reflow is a more significant change. This will happen whenever the DOM tree is manipulated, whenever a style is changed that affects the layout, whenever the <var>className</var> property of an element is changed, or whenever the browser window size is changed. The engine must then reflow the relevant element to work out where the various parts of it should now be displayed. Its children will also be reflowed to take the new layout of their parent into account. Elements that appear after the element in the DOM will also be reflowed to calculate their new layout, as they may have been moved by the initial reflows. Ancestor elements will also reflow, to account for the changes in size of their children. Finally, everything is repainted.</p>

<p>Reflows are very expensive in terms of performance, and is one of the main causes of slow DOM scripts, especially on devices with low processing power, such as phones. In many cases, they are equivalent to laying out the entire page again.</p>

<h4 id="minimumreflow">Keeping the number of reflows to a minimum</h4>

<p>There are many times that a script will need to do something that will trigger a repaint or reflow. Animations are built on reflows, and these will continue to be desired. So reflows are a fact of Web development, and to keep scripts running fast, they should be kept to a minimum while still having the same overall effect.</p>

<p>Browsers may choose to wait until the end of a script thread before reflowing to show the changes. Opera will wait until enough changes have been made, enough time has elapsed, or the end of the thread is reached. This means that if the changes happen quickly enough in the same thread, they may only produce one reflow. However, this cannot be relied on, especially considering the various different speeds of devices that Opera runs on.</p>

<p>Note that some elements have significantly slower reflows than others. Reflowing an element with table display, can take as much as three times as long as reflowing an equivalent element with block display.</p>

<h4 id="minimalreflow">Minimal reflow</h4>

<p>Normal reflows may affect the whole document. The more of the document that is reflowed, the longer the reflow will take. Elements that are positioned absolutely or fixed, do not affect the layout of the main document, so if they reflow, they are the only thing that reflows. The document behind them will need to repaint to allow for any changes, but this is much less of a problem than an entire reflow.</p>

<p>So is an animation does not need to be applied to the whole document, it is better if it can be applied only to a positioned element. For most animations, this is all that is needed anyway.</p>

<h3 id="modifyingtree">Document tree modification</h3>

<p>Document tree modification <em>will</em> trigger reflow. Adding new elements to the DOM, changing the value of text nodes, or changing various attributes will all be enough to cause a reflow. Making several changes one after the other, may trigger more than one reflow, so in general, it is best to make multiple changes in a non-displayed DOM tree fragment. The changes can then be made to the live document&#39;s DOM in one single operation:</p>

<pre><code>var docFragm = document.createDocumentFragment();
var elem, contents;
for( var i = 0; i &lt; textlist.length; i++ ) {
  elem = document.createElement(&#39;p&#39;);
  contents = document.createTextNode(textlist[i]);
  elem.appendChild(contents);
  docFragm.appendChild(elem);
}
document.body.appendChild(docFragm);</code></pre>

<p>Document tree modification can also be done on a clone of the element, which is then swapped with the real element after the changes are complete, resulting in a single reflow. Note that this approach should not be used if the element contains any form controls, as any changes the user makes to their values, are not reflected in the main DOM tree. It should also not be done if you need to rely on event handlers being attached to the element or its children, since in theory they should not be cloned.</p>

<pre><code>var original = document.getElementById(&#39;container&#39;);
var cloned = original.cloneNode(true);
cloned.setAttribute(&#39;width&#39;,&#39;50%&#39;);
var elem, contents;
for( var i = 0; i &lt; textlist.length; i++ ) {
  elem = document.createElement(&#39;p&#39;);
  contents = document.createTextNode(textlist[i]);
  elem.appendChild(contents);
  cloned.appendChild(elem);
}
original.parentNode.replaceChild(cloned,original);</code></pre>

<h3 id="invisibleelement">Modifying an invisible element</h3>

<p>When an element has its <var>display</var> style set to <var>none</var>, it will not need to repaint, even if its contents are changed, since it is not being displayed. This can be used as an advantage. If several changes need to be made to an element or its contents, and it is not possible to combine these changes into a single repaint, the element can be set to <code>display:none</code>, the changes can be made, then the element can be set back to its normal display.</p>

<p>This will trigger two extra reflows, once when the element is hidden, and once when it is made to appear again, but the overall effect can be much faster. It may also cause unwanted jumping of the scrollbar, if the element itself affects the scrolling offset. However, it can easily be applied to a positioned element without causing an unsightly effect.</p>

<pre><code>var posElem = document.getElementById(&#39;animation&#39;);
posElem.style.display = &#39;none&#39;;
posElem.appendChild(newNodes);
posElem.style.width = &#39;10em&#39;;
... other changes ...
posElem.style.display = &#39;block&#39;;</code></pre>

<h3 id="measuring">Taking measurements</h3>

<p>As stated earlier, the browser may cache several changes for you, and reflow only once when those changes have all been made. However, note that taking measurements of the element will force it to reflow, so that the measurements will be correct. The changes may or may not not be visibly repainted, but the reflow itself still has to happen behind the scenes.</p>

<p>This effect is created when measurements are taken using properties like <var>offsetWidth</var>, or using methods like <var>getComputedStyle</var>. Even if the numbers are not used, simply using either of these while the browser is still caching changes, will be enough to trigger the hidden reflow. If these measurements are taken repeatedly, you should consider taking them just once, and storing the result, which can then be used later.</p>

<pre><code>var posElem = document.getElementById(&#39;animation&#39;);
var calcWidth = posElem.offsetWidth;
posElem.style.fontSize = ( calcWidth / 10 ) + &#39;px&#39;;
posElem.firstChild.style.marginLeft = ( calcWidth / 20 ) + &#39;px&#39;;
posElem.style.left = ( ( -1 * calcWidth ) / 2 ) + &#39;px&#39;;
... other changes ...</code></pre>

<h3 id="stylechanges">Making several style changes at once</h3>

<p>Just like with DOM tree modifications, it is possible to make several style related changes at the same time, in order to minimise the number of repaints or reflows. The common approach is setting of styles one at a time:</p>

<pre><code>var toChange = document.getElementById(&#39;mainelement&#39;);
toChange.style.background = &#39;#333&#39;;
toChange.style.color = &#39;#fff&#39;;
toChange.style.border = &#39;1px solid #00f&#39;;</code></pre>

<p>That approach could mean multiple reflows and repaints. There are two main ways to do this better. If the element itself needs to adopt several styles, whose values are all known in advance, the class of the element can be changed. It will then take on all the new styles defined for that class:</p>

<pre><code>div {
  background: #ddd;
  color: #000;
  border: 1px solid #000;
}
div.highlight {
  background: #333;
  color: #fff;
  border: 1px solid #00f;
}
...
document.getElementById(&#39;mainelement&#39;).className = &#39;highlight&#39;;</code></pre>

<p>The second approach is to define a new style attribute for the element, instead of assigning styles one by one. Most often this is suited to dynamic changes such as animations, where the new styles cannot be known in advance. This is done using either the <var>cssText</var> property of the <var>style</var> object, or by using <var>setAttribute</var>. Internet Explorer does not allow the second version, and needs the first. Some older browsers, including Opera 8, need the second approach, and do not understand the first. So the easy way is to check if the first version is supported and use that, then fall back to the second if not.</p>

<pre><code>var posElem = document.getElementById(&#39;animation&#39;);
var newStyle = &#39;background: &#39; + newBack + &#39;;&#39; +
  &#39;color: &#39; + newColor + &#39;;&#39; +
  &#39;border: &#39; + newBorder + &#39;;&#39;;
if( typeof( posElem.style.cssText ) != &#39;undefined&#39; ) {
  posElem.style.cssText = newStyle;
} else {
  posElem.setAttribute(&#39;style&#39;,newStyle);
}</code></pre>

<h3 id="smoothspeed">Trading smoothness for speed</h3>

<p>As a developer, it is tempting to make an animation run as smoothly as possible, by using short timeouts, and small changes. For example, animated motion could be done using a 10ms interval, that moves an element 1 pixel at a time. An animation running that fast may work nicely on some PCs or some browsers. However, a 10ms interval is about the smallest that a browser can achieve without using 100% of most desktop CPUs. Some browsers will not even be able to manage that - requesting 100 reflows per second is quite a lot for most browsers. Lower powered computers, or device browsers, will not be able to perform at that speed, and the animation will feel slow and unresponsive.</p>

<p>It can be necessary to swallow the developer pride, and trade some of the smoothness of the animation for speed instead. Changing the interval to 50ms, and the animation step to 5 pixels, will need much less processing power, and can make the animation run much faster on lower powered processors.</p>

<h3 id="manynodes">Avoid inspecting large numbers of nodes</h3>

<p>When attempting to locate a specific node, or specific subset of nodes, use the inbuilt methods and collections of the DOM to narrow the search to as small a number of nodes as possible. For example, if you want to locate an unknown element 
in the document, that has a certain attribute, you could use this:</p>

<pre><code>var allElements = document.getElementsByTagName(&#39;*&#39;);
for( var i = 0; i &lt; allElements.length; i++ ) {
  if( allElements[i].hasAttribute(&#39;someattr&#39;) ) {
    ...
  }
}</code></pre>

<p>Even if we ignore more advanced techniques such as XPath, that example still has two problems that make it slow. Firstly, it searches for every element, without attempting to narrow the search at all. Secondly, it still continues searching, even after it has found the element it wanted. Say for example, that the unknown element is known to be inside a div with the id <var>inhere</var>, this code could perform far better:</p>

<pre><code>var allElements = document.getElementById(&#39;inhere&#39;).getElementsByTagName(&#39;*&#39;);
for( var i = 0; i &lt; allElements.length; i++ ) {
  if( allElements[i].hasAttribute(&#39;someattr&#39;) ) {
    ...
    break;
  }
}</code></pre>

<p>If the unknown element is known to be a direct child of the div, this approach may be even faster, depending on the number of descendent elements of the div, compared with the length of its <var>childNodes</var> collection:</p>

<pre><code>var allChildren = document.getElementById(&#39;inhere&#39;)h3 id=h3 id=.childNodes;
for( var i = 0; i &lt; allChildren.length; i++ ) {
  if( allChildren[i].nodeType == 1 &amp;&amp; allChildren[i].hasAttribute(&#39;someattr&#39;) ) {
    ...
    break;
  }
}</code></pre>

<p>The basic intention is to avoid manually stepping through the DOM as much as possible. The DOM has many alternatives that may perform better in various circumstances, such as DOM 2 Traversal TreeWalker, instead of recursively stepping through <var>childNodes</var> collections.</p>

<h3 id="xpath">Improve speed with XPath</h3>

<p>A simple example would be building a table of contents in a HTML document, based on the H2-H4 elements. In HTML, these elements can appear in a variety of places, without any proper hierarchy, so a recursive function cannot be used to retrieve the elements in the correct order. Traditional DOM would use an approach like this:</p>

<pre><code>var allElements = document.getElementsByTagName(&#39;*&#39;);
for( var i = 0; i &lt; allElements.length; i++ ) {
  if( allElements[i].tagName.match(/^h[2-4]$/i) ) {
    ...
  }
}</code></pre>

<p>In a document that contains perhaps 2000 elements, this can cause a significant delay, as each must be examined separately. XPath, when natively supported, offers a much faster approach, as the XPath querying engine can be optimised much more effectively than interpreted JavaScript. In some cases, it can be as much as two orders of magnitude faster. This example is equivalent to the traditional example, but uses XPath for improved speed.</p>

<pre><code>var headings = document.evaluate( &#39;//h2|//h3|//h4&#39;, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );
var oneheading;
while( oneheading = headings.iterateNext() ) {
  ...
}</code></pre>

<p>This version combines both; using XPath where possible, and falling back to traditional DOM if not:</p>

<pre><code>if( document.evaluate ) {
  var headings = document.evaluate( &#39;//h2|//h3|//h4&#39;, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );
  var oneheading;
  while( oneheading = headings.iterateNext() ) {
    ...
  }
} else {
  var allElements = document.getElementsByTagName(&#39;*&#39;);
  for( var i = 0; i &lt; allElements.length; i++ ) {
    if( allElements[i].tagName.match(/^h[2-4]$/i) ) {
      ...
    }
  }
}</code></pre>

<h3 id="traversemodify">Avoid modifications while traversing the DOM</h3>

<p>Certain types of DOM collections are live, in that if the relevant elements change while your script is looking at the collection, the collection will change without waiting for your script to finish first. This includes the <var>childNodes</var> collection, and the node list returned by <var>getElementsByTagName</var>.</p>

<p>If your script is looping through a collection like these, and at the same time, it adds elements to it, then you risk running into an infinite loop where you continually add entries into the collection before you reach the end of it. However, this is not the only problem. These collections can be optimised for performance. They can remember the length, and the last index within it that your script referenced, so that when you increment the index, they can quickly reference the next node.</p>

<p>If you modify any part of the DOM tree, even if it is not included in that collection, the collection must be reassessed to look for new entries. In doing so, it cannot remember the last index or length, as these may have changed, and the optimisation is lost:</p>

<pre><code>var allPara = document.getElementsByTagName(&#39;p&#39;);
for( var i = 0; i &lt; allPara.length; i++ ) {
  allPara[i].appendChild(document.createTextNode(i));
}</code></pre>

<p>This equivalent code performs around ten times faster in Opera, and some other current browsers such as Internet Explorer. It works by first building a static list of elements to modify, then performs the modifications while stepping through the static list instead of the node list returned by <var>getElementsByTagName</var>:</p>

<pre><code>var allPara = document.getElementsByTagName(&#39;p&#39;);
var collectTemp = [];
for( var i = 0; i &lt; allPara.length; i++ ) {
  collectTemp[collectTemp.length] = allPara[i];
}
for( i = 0; i &lt; collectTemp.length; i++ ) {
  collectTemp[i].appendChild(document.createTextNode(i));
}
collectTemp = null;</code></pre>

<h3 id="cachevalues">Cache DOM values in script variables</h3>

<p>Some values returned by DOM cannot be cached, and will be reassessed each time they are called. An example is the <var>getElementById</var> method. The following is an example of wasteful code:</p>

<pre><code>document.getElementById(&#39;test&#39;).property1 = &#39;value1&#39;;
document.getElementById(&#39;test&#39;).property2 = &#39;value2&#39;;
document.getElementById(&#39;test&#39;).property3 = &#39;value3&#39;;
document.getElementById(&#39;test&#39;).property4 = &#39;value4&#39;;</code></pre>

<p>That code makes four requests to locate the same object. The following code makes one request then stores it, meaning that for a single request, the speed is about the same, or very slightly slower while performing the assignment. However, each subsequent time the cached value is used, the command runs between five and ten times as fast in most current browsers, as the equivalent command in the example above:</p>

<pre><code>var sample = document.getElementById(&#39;test&#39;);
sample.property1 = &#39;value1&#39;;
sample.property2 = &#39;value2&#39;;
sample.property3 = &#39;value3&#39;;
sample.property4 = &#39;value4&#39;;</code></pre>

&lt;page&gt;

<h2>Document loading</h2>

		<h3 id="docreferences">Avoid keeping alive references from one document to another</h3>
	  <p>If one document has accessed nodes or other objects from another document, avoid retaining those references after the script has finished using them. If a reference was stored in a global variable or a property of any long-living object in the current document, clear it by setting it to null, or deleting it.</p>
 
    <p>The reason is that if the other document is destroyed, for instance if it was displayed in a popup window and that window is closed, any references to objects from that document will usually keep its entire DOM tree and scripting environment alive in RAM, even though the document itself is no longer loaded. The same will apply to pages within frames, inline frames, or OBJECT elements.</p>

<pre><code>var remoteDoc = parent.frames[&#39;sideframe&#39;].document;
var remoteContainer = remoteDoc.getElementById(&#39;content&#39;);
var newPara = remoteDoc.createElement(&#39;p&#39;);
newPara.appendChild(remoteDoc.createTextNode(&#39;new content&#39;));
remoteContainer.appendChild(newPara);
//remove references
remoteDoc = null;
remoteContainer = null;
newPara = null;</code></pre>


    <h3 id="fasthistory">Fast history navigation</h3>
    <p>Opera (and many other browsers) uses fast history navigation by default. When the user navigates forwards or backwards through their browsing history, the state of the page, and any scripts on it, is stored. When the user comes back to it, it continues as if they never left it. The document is not reloaded and reinitialized. Scripts continue to run, and DOM is as it was before they left the page. This results in a much faster response for the user, and can make slow loading Web applications perform much better during navigation.</p>
    <p>Although Opera offers a way for <a href="http://www.opera.com/support/search/supsearch.dml?index=827">authors to control this behaviour</a>, it is better to allow it to use fast history navigation mode wherever possible. This means that if possible, scripts should try to avoid damaging actions that would cause this behaviour to fail. This includes things such as disabling form controls when a form is submitted, a menu that stops working after an item has been clicked, or a page fadeout effect that leaves the page content obscured or invisible.</p>
    <p>A simple approach would be an onunload listener that resets the fading effect, or re-enables the form control. However, note that with some browsers, such as Firefox and Safari, adding a listener for the <var>unload</var> event will disable their fast history navigation. In addition, the act of disabling the submit button will be enough to disable fast history navigation in Opera.</p>
<pre><code>window.onunload = function () {
  document.body.style.opacity = &#39;1&#39;;
};</code></pre>

    <h3 id="xmlhttprequest">Use XMLHttpRequest</h3>
    <p>This is not suited to every project, but it is an easy way to potentially reduce the amount of content being retrieved from the server, and avoiding the performance impact of destroying and recreating the scripting environment in between page loads. Initially, the page can be loaded as normal. Then for subsequent loads, XMLHttpRequest can be used to load minimal new content. This allows the JavaScript environment to persist.</p>
    <p>Note, however, that this approach can lead to problems. In general, it breaks history navigation completely, and although it is possibles to fake this by storing information in inline frames, this defeats the purpose of using XMLHttpRequest in the first place. So use it sparingly, and only where it makes sense not to need to go back to earlier content. This approach can also confuse assistive devices, which may not be able to see the DOM of the page being changed, so it is best to use this only in situations where that will not cause a problem.</p>
    <p>It will also fail if JavaScript is not available, or XMLHttpRequest is not supported. The easiest way to avoid this is to use a normal link, pointing to the new page. Add an event handler to that link that detects when the link is activated. The handler can then detect if XMLHttpRequest is supported, load the new data if it is, and then prevent the default action of the link. Once the new data has been loaded, it can be used to replace some of the content of the page, and the request object can then be destroyed to allow the memory to be retrieved by the garbage collector.</p>

<pre><code>document.getElementById(&#39;nextlink&#39;).onclick = function () {
  if( !window.XMLHttpRequest ) { return true; }
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if( request.readyState != 4 ) { return; }
    var useResponse = request.responseText.replace( /^[\w\W]*&lt;div id=&quot;container&quot;&gt;|&lt;\/div&gt;\s*&lt;\/body&gt;[\w\W]*$/g , &#39;&#39; );
    document.getElementById(&#39;container&#39;).innerHTML = useResponse;
    request.onreadystatechange = null;
    request = null;
  };
  request.open( &#39;GET&#39;, this.href, true );
  request.send(null);
  return false;
}</code></pre>

    <h3 id="dynamicscript">Create SCRIPT elements dynamically</h3>
    <p>Loading and processing a script can take time, but in some cases, a script may be loaded but never used. Loading it only wastes time and resources, stalling the current script execution while it does so, and it would be better not to load it at all if it is not going to be used. This can be done by a simple loader script that checks what other scripts are needed, and only creates the script element if the script will actually be used.</p>
    <p>In theory, the extra scripts may be added after the page has loaded by creating a SCRIPT element and adding it to the document using DOM. This will work in current versions of all major browsers, but it may actually be placing more scripting demands on the browser than the script that it is loading. In addition, the script may be needed before the page has loaded, so it is best to check during page load, and create the script tags using <code>document.write</code>. Just remember to escape your forward slashes so you do not end the current script prematurely:</p>
<pre><code>if( document.createElement &amp;&amp; document.childNodes ) {
  document.write(&#39;&lt;script type=&quot;text\/javascript&quot; src=&quot;dom.js&quot;&gt;&lt;\/script&gt;&#39;);
}
if( window.XMLHttpRequest ) {
  document.write(&#39;&lt;script type=&quot;text\/javascript&quot; src=&quot;xhr.js&quot;&gt;&lt;\/script&gt;&#39;);
}</code></pre>

    <h3 id="locationnreplace"><code>location.replace()</code> keeps the history under control</h3>
    <p>Occasionally, it is necessary to change the page address using a script. The typical way to do this is by assigning a new address to <code>location.href</code>. This adds a history entry, and loads a new page, in the same way as activating a normal link.</p>
    <p>In some cases, this extra history entry is unwanted, as the user will not need to go back to the earlier page. This is particularly useful if working in a situation where memory usage is critical. The memory used by the current page can be recovered by replacing the history entry instead. This is done using the <code>location.replace()</code> method.</p>
<pre><code>location.replace(&#39;newpage.html&#39;);</code></pre>
    <p>Note that the page may still remain in cache, and may use memory there, but this will not be quite so much as if it were also kept in history.</p>
