Title: Programming - the real basics!
----
Date: 2009-02-03 06:38:55
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

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">11th October 2012: Material moved to <a href="http://www.webplatform.org">webplatform.org</a></h2>

<p style="padding-bottom: 20px;">The Opera web standards curriculum has now been moved to the <a href="http://docs.webplatform.org/wiki/Main_Page">docs section of the W3C webplatform.org site</a>. Go there to find updated versions of these docs, and much more besides!</p>

<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">12th April 2012: This article is obsolete</h2>

<p>The web standards curriculum has been donated to the <a href="http://www.w3.org/community/webed/">W3C web education community group</a>, to become part of a much bigger educational resource. It is constantly being updated so that it remains current with modern web design practices and technologies. To find the most up-to-date web standards curriculum, visit the <a href="http://www.w3.org/community/webed/wiki/Main_Page">web education community group Wiki</a>. Please make changes to this Wiki yourself, or suggest changes to <a href="mailto:cmills@opera.com">Chris Mills</a>, who is also the chair of the web education community group.</p>
</div>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/38-headers-footers-columns-templates/" rel="prev" title="link to the previous article in the series">Previous article—Headers, footers, columns, and templates</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/javascript-uses/" rel="next" title="link to the next article in the series">Next article—What can you do with JavaScript?</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>As an experienced developer you’ll sooner or later have to face people that are just not technical and will consider whatever you do as black magic. Conversely, as a non-technical person, not knowing what someone delivering work for you is doing is a bad starting position. This article explains in simple terms what programming is about and hopefully will help both parties involved to steer these non-conversations into more productive waters.</p>

<p>It will also help novice web developers to take on board some generic programming principles that are essential to understand before you start learning how to code JavaScript. It may seem boring to begin with, but trust me, your work will be a lot more robust, dynamic and creative (read: a lot more WOW factor) if you get these rudimentary principles down in the first place. Learning the basic fundamentals of programming is important before you start working in particular languages (JavaScript, in the case of this course).</p>

<p>This article is structured as follows:</p>

<ul>
<li><a href="#order">Order, I will have order!</a></li>
<li><a href="#variables">Variables</a>
  <ul>
    <li><a href="#datatypes">Variable types</a>
      <ul>
        <li><a href="#order">Floats and integers</a></li>
        <li><a href="#booleans">Booleans</a></li>
        <li><a href="#strings">Strings</a></li>
        <li><a href="#arrays">Arrays</a></li>
        <li><a href="#objects">Objects</a></li>
      </ul>
    </li>
  </ul>
</li>
<li><a href="#conditions">Conditions</a></li>
<li><a href="#loops">Loops</a></li>
<li><a href="#summary">Summary</a></li>
<li><a href="#exercises">Exercise questions</a></li>
</ul>

<h2 id="order">Order, I will have order!</h2>

<p>Programming in the most basic form is issuing commands and seeing that they get executed. It is a mixture of math and linguistics: you define a lot of calculations and you need to tell machines to solve them by giving orders using the right grammar. Grammar in programming is syntax and  differs a lot from language to language.</p>

<p>For example, the following two code snippets fulfill the same task, but the former is JavaScript and the latter is PHP:</p>

<pre><code>var fahrenheit = prompt(&#39;Enter temperature in Fahrenheit&#39;,0);
var celsius = (fahrenheit - 32) * 5 / 9;
alert(celsius);

$fahrenheit = $_GET[&#39;fahrenheit&#39;];
$celsius = ($fahrenheit - 32) * 5 / 9;
echo $celsius;</code></pre>

<p>Try out the JavaScript <a href="fahrenheit.html">farenheit to celsius conversion example</a>.</p>

<p id="interpreted">Programming languages are <em>interpreted</em> to be turned into actions or results. Some languages, such as JavaScript are interpreted by a web browser and all you need to do to make them “do stuff” is put them inside an HTML document and open this in a browser. Other programming languages need to be translated (compiled) in an extra step to become executable. Deep down, all computers only understand zeros and ones, but above that there are multiple levels of languages, each fulfilling different tasks.</p>

<h2 id="variables">Variables</h2>

<p>The first step towards understanding programming is looking back at algebra. If you remember from school, algebra starts with writing terms such as the following.</p>

<pre><code>3 + 5 = 8</code></pre> 

<p>You start performing calculations when you introduce an unknown, for example x below:</p>

<pre><code>3 + x = 8</code></pre>

<p>Shifting those around you can determine x:</p>

<pre><code>x = 8 - 3 
-&gt; x = 5</code></pre>

<p>When you introduce more then one you make your term more flexible - you are using variables:</p>

<pre><code>x + y = 8</code></pre>

<p>You can change the values of x and y and the formula can still be true:</p> 

<pre><code>x = 4
y = 4</code></pre>

<p>or</p>

<pre><code>x = 3
y = 5</code></pre>

<p>The same works with programming languages—in programming, variables are containers for values that can vary. Variables can hold all kind of values and also the results of calculations. Variables have a name and a value separated by an equals sign (=). Variable names can be any letter or word, but bear in mind that there are restrictions from language to language of what you can use, as some words are reserved for other functionality.</p>

<p>To keep things easy, let’s use JavaScript as an example programming language in this article (logical, since this section of the web standards curriculum is all about JavaScript programming!) The following defines two variables, calculates the result of adding the two and defines this result as a value of a third variable.</p> 

<p>Note: The <code>&lt;script&gt;</code> tags are there to tell the browser that the text inside is a scripting language and that it should be interpreted as such. The <code>&quot;text/javascript&quot;</code> type attribute tells the browser what language it is.</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
var x = 5;
var y = 6;
var result = x + y;
&lt;/script&gt;</code></pre>

<p>The interpreter goes through the code instruction by instruction, with each instruction ending in a semicolon. The semicolon notifies the interpreter of the end of an instruction, much like a full stop or an exclamation mark defines the end of a sentence in human languages.</p> 

<p>In English, this construct would be as follows:</p>

<ul>
<li>Here comes something that is not HTML; bring forth a translator that understands a language of the type JavaScript that is text based.</li>
<li>Define a new variable (that is the <code>var</code> keyword) called x and assign it the value 5. End of instruction.</li>
<li>Define a new variable called y and assign it the value 6. End of instruction.</li>
<li>Define a new variable called result and assign it the result of adding x and y as its value. End of statement. (As there is a calculation in the assignment of the variable result the interpreter then checks the value of x, checks the value of y, adds the two and sets the value of result to the outcome—11).</li>
<li>Enough of this strange language—go back to HTML and tell the translator to leave again.</li>
</ul>

<p>You can do all kind of calculations with variables by adding operators in between them. There are the classics like adding with a plus sign operator and subtracting with a minus sign operator. For multiplication you have to use an asterisk (*) and for dividing, a slash (/). The following example shows some calculations that are possible. Notice the texts preceded by a double slash //—these are JavaScript comments. When a JavaScript interpreter encounters these in a script it will not try to execute what follows on that line, and skips it—these are comments made for humans and not to be interpreted by the browser.</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
var x = 5;
var y = 6;
var z = 20;
var multiply = x * y * z;
// multiply will be 600 
var divide = x / y;
// divide will be 0.8333333333333334
var addAndDivide = (x + z) / y;
// addAndDivide = 4.166666666666667
var half = (y + z) / 2;
// half will be 13
&lt;/script&gt;</code></pre>

<p>As you can see you can mix and match any variable, and also use variables along with fixed values in calculations; you can also group them with parenthesis to override the natural order of operators (parentheses first, then multiplication or dividing, then adding or subtracting and all those Math lesson classics).</p>

<h3 id="datatypes">Variable types</h3>

<p>However, this would be boring as we can do all that with a simple calculator (after we typed 5318008, then turned it around and giggled, of course). Computers are more sophisticated and can make use of more complex variables. This is where variable types come in. Variables come in several types and different languages support different ones. The most common ones are:</p>

<ul>
<li>Float: a number, like <code>1.21323</code>, <code>4</code>, <code>100004</code> or <code>0.123</code></li>
<li>Integer: a natural number like <code>1</code>, <code>12</code>, <code>33</code>, <code>140</code> but not <code>1.233</code></li>
<li>String: a line of text like &quot;<code>boat</code>&quot;, &quot;<code>elephant</code>&quot; or &quot;<code>damn, you are tall!</code>&quot;</li>
<li>Boolean: either <code>true</code> or <code>false</code>, but nothing else</li>
<li>Arrays: a collection of values like <code>1,2,3,4,&#39;I am bored now&#39;</code></li>
<li>Objects: a representation of an object. Objects are constructs that try to model instances of objects in the real world by having properties and methods. For example you could model a cat as an object and define that it has four legs, one tail and that it is ginger. You can also define that it has a way of purring by defining a <code>purr()</code> method and that it might demand a cheeseburger with a <code>getCheeseBurger()</code> method. You can also re-use the <code>cat</code> object and define another cat with all the properties of the original one but a grey colour.</li>
</ul>

<p clas="note">JavaScript is a “loosely typed” language, which means that you don&#39;t have to explicitly declare what type of data the variables are. You just need to use the <code>var</code> keyword to indicate that you are declaring a variable, and the browser will work out what data type you are using from the context, and use of quotes.</p>

<h4 id="floatsintegers">Floats and Integers</h4>

<p>There is nothing magical or strange going on with these. You define variables and set their values to any number type.</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
  var fahrenheit = 123;
  var celsius = (fahrenheit - 32) * 5/9; 
  var clue = 0.123123;
&lt;/script&gt;</code></pre>

<p>Floats and integers can be modified with any mathematical operators.</p> 

<h4 id="booleans">Booleans</h4> 

<p>Booleans are simple “yes or no” definitions. You assign them by using the <code>true</code> or <code>false</code> keywords.</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
  var doorClosed = true;
  var catCanLeave = false;
&lt;/script&gt;</code></pre>

<h4 id="strings">Strings</h4>

<p>Strings are lines of text that can contain any character. You define them in JavaScript by enclosing the text in single quotes or double quotes.</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
  var surname = &#39;Heilmann&#39;;
  var name = &quot;Christian&quot;;
  var age = &#39;33&#39;;
  var hair = &#39;Flickr famous&#39;;
&lt;/script&gt;</code></pre>

<p>You can concatenate (a technical term that means “join together”) strings using the + operator but you cannot subtract strings from one another. For string modification you need to use functions the language provides you with. Simple concatenation on the other hand is as easy as this:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
  var surname = &#39;Heilmann&#39;;
  var name = &#39;Christian&#39;;
  var age = &#39;33&#39;;
  var hair = &#39;Flickr famous&#39;;
  var message = &#39;Hi, I am &#39; + name + &#39; &#39; + surname + &#39;. &#39;;
  message += &#39;I am &#39; + age + &#39;years old and my hair is &#39; + hair;
  alert(message);
 &lt;/script&gt;</code></pre>
 
 <p>Try out the <a href="flickrfamous.html">string concatenation example</a>.</p>
 
<p>The += operator is a shortcut for &quot;message = message +&quot;. The product of this script is the string “Hi I am Christian Heilmann. I am 33 years old and <a href="http://flickr.com/photos/tags/thehairofchristianheilmann/">my hair is Flickr famous</a>”.</p>

<p>There is a catch to remember when using concatenation versus adding values. If you want to add two values you need to make sure that both are numbers, not strings. The <a href="concatvsadd.html">concatenation versus addition</a> example shows the difference between the two. “5”+“3” is 53 and not 8! The easiest way to convert a string to a number is by prepending it with a &quot;+&quot;, as shown in the example.</p>

<p>Most languages will not care if you use single or double quotes to enclose the string, as long as you don’t mix them. To stop the JavaScript interpreter from becoming confused about where the end of the string is, you need to comment out quotes contained in the string with a backslash:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
  // this will cause an error, as the interpreter doesn&#39;t know 
  // what the things after the &#39; are. The string defined here is
  // &#39;Isn&#39;.
  var stringWithError = &#39;Isn&#39;t it hard to get things right?&#39;;
  // This is not an error, all is fine
  var stringWithoutError = &#39;Isn\&#39;t it hard to get things right?&#39;;
&lt;/script&gt;</code></pre>

<h4 id="arrays">Arrays</h4>

<p>Arrays are very powerful constructs. An array is a collection of values, and each of the values can be a variable, or a real value. For example:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
  var pets = new Array(&#39;Boomer&#39;,&#39;Polly&#39;,&#39;Mr.Frisky&#39;);
&lt;/script&gt;</code></pre>

<p>You can access each of the values with the <strong>array</strong> counter, which is the index number in the array—think of it as being like looking up chapters in a book. The syntax is <code>arrayname[index]</code>. So for example <code>pets[1]</code> would give you the string  “Polly”. <q>But wait!</q> I hear you ask—<q>shouldn’t it be <code>pets[2]</code> for Polly, given that it is the <strong>second</strong> value in the array? <strong>No</strong></q>—the counter is not 2, as computers start counting at 0, not at 1! This is a very common cause of confusion and errors.</p> 

<p>Arrays automatically get a special information source for you: <code>length</code>. If you check the value of <code>pets.length</code> you will get 3 as there are 3 items in this array.</p>

<p>Arrays are great for describing collections of things that have something in common, and every language comes with dozens of handy functions to manipulate them—sorting, filtering, searching and so on.</p>

<h4 id="objects">Objects</h4>

<p>If you have a collection of items that need more detailed descriptions than just a running number, then an Array won’t quite give what you need, and you’ll need to create an object. Objects are constructs in programming that represent or model real things, such a people, vehicles or tools.</p>

<p>Objects are a big and very clever and versatile part of programming and explaining them in detail here would be beyond the scope of this article. Let’s just say that an object is a thing that has several properties. Say for example you have a person object; you can define the different properties by appending them with a dot:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
  var person = new Object();
  person.name = &#39;Chris&#39;;
  person.surname = &#39;Heilmann&#39;;
  person.age = 33;
  person.hair = &#39;Flickr famous&#39;;
&lt;/script&gt;</code></pre>

<p>You can access the properties with dot notation (<code>person.age</code> would give you 33) or with the square bracket notation (<code>person[&#39;name&#39;]
</code> gets you “Chris”). You will learn more about JavaScript objects later on in the course.</p> 

<p>That is about the short and long of what value types variables can be. Another big part of programming is the structure and logic of your program. This is where two more programming ideas come into play: conditions and loops.</p>

<h2 id="conditions">Conditions</h2>

<p>A condition is a test for something. Conditions are very important for programming, in several ways:</p> 

<p>First of all conditions can be used to ensure that your program works, regardless of what data you throw at it for processing. If you blindly trust data, you’ll get into trouble and your programs will fail. If you test that the thing you want to do is possible and has all the required information in the right format, that won’t happen, and your program will be a lot more stable. Taking such precautions is also known as programming defensively.</p> 

<p>The other thing conditions can do for you is allow for branching. You might have encountered branching diagrams before, for example when filling out a form. Basically, this refers to executing different “branches” (parts) of code, depending on if the condition is met or not.</p>

<p>The easiest condition is an <code>if</code> statement and its syntax is <code>if(condition){  do this … }</code>. The condition has to be true for the code inside the curly braces to be executed. You can for example test a string and set the value of another string dependent on its value:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
var country = &#39;France&#39;;
var weather;
var food;
var currency;
if(country === &#39;England&#39;){
  weather = &#39;horrible&#39;;
  food = &#39;filling&#39;;
  currency = &#39;pound sterling&#39;;
}
if(country === &#39;France&#39;){
  weather = &#39;nice&#39;;
  food = &#39;stunning, but hardly ever vegetarian&#39;;
  currency = &#39;funny, small and colourful&#39;;
}
if(country === &#39;Germany&#39;){
  weather = &#39;average&#39;;
  food = &#39;wurst thing ever&#39;;
  currency = &#39;funny, small and colourful&#39;;
}
var message = &#39;this is &#39; + country + &#39;, the weather is &#39; + 
              weather + &#39;, the food is &#39; + food + &#39; and the &#39; +
              &#39;currency is &#39; + currency;
alert(message);
&lt;/script&gt;</code></pre>

<p>Try it out yourself in my <a href="weather.html">Weather <code>if</code> statement example</a>. Change the value of the country variable to see the different messages.</p>

<p>The conditional part is the country followed by the three equal signs. Three equal signs mean that the condition tests if the variable country has the value you test against but also the correct variable (data)type. You can test conditions with double equal signs, too, but that would mean that <code>if(x == 5)</code> would be true for x being 5 and x being “5”. Depending on what your program is doing, this could make quite a difference.</p> 

<p>Other conditional test examples:</p>

<ul>
<li>x &gt; 0 - is x bigger than zero?</li>
<li>x &lt; 0 - is x less than zero?</li>
<li>x &lt;= 4 - is x less than or equal to four?</li>
<li>x != &#39;hello&#39; - is x not &#39;hello&#39;?</li>
<li>x - does x exist?</li>
</ul>

<p>Conditions can also be nested. Say for example you want to make sure that the country variable is set in the earlier example; you can do that this way:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
var country = &#39;Germany&#39;;
var weather;
var food;
var currency;
if(country){
  if(country === &#39;England&#39;){
    weather = &#39;horrible&#39;;
    food = &#39;filling&#39;;
    currency = &#39;pound sterling&#39;;
  }
  if(country === &#39;France&#39;){
    weather = &#39;nice&#39;;
    food = &#39;stunning, but hardly ever vegetarian&#39;;
    currency = &#39;funny, small and colourful&#39;;
  }
  if(country === &#39;Germany&#39;){
    weather = &#39;average&#39;;
    food = &#39;wurst thing ever&#39;;
    currency = &#39;funny, small and colourful&#39;;
  }
  var message = &#39;this is &#39; + country + &#39;, the weather is &#39; + 
                weather + &#39;, the food is &#39; + food + &#39; and the &#39; +
                &#39;currency is &#39; + currency;
  alert(message);
}
&lt;/script&gt;</code></pre>

<p>Try it out yourself in my <a href="saferweather.html">Safe-weather <code>if</code> statement example</a>. Change the value of the country variable to see the different messages.</p>

<p>Whereas the earlier example would always try to create the message regardless of country being available—and thus possibly throwing an error or stating “this is <strong>undefined</strong>, the weather…” this version is more secure. If country is not defined the message will never be created.</p>

<p>Furthermore you can concatenate different conditions with “or” or “and” statements, to test whether either statement is true, or both are true, respectively. In JavaScript “or” is written as || and “and” is written as &amp;&amp;. Say you want to test if the value of x is between 10 and 20—you could do that with a condition stating <code>if(x &gt; 10 &amp;&amp; x &lt; 20)</code>. If you want to make sure that country is either “England” or “Germany” you use <code>if(country === &#39;England&#39; || country === &#39;Germany&#39;)</code>.</p>

<p>There is also an <code>else</code> clause that will be applied every time the first condition isn’t true. This is very powerful if you want to react to any value, but single out one in particular for special treatment:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
  var umbrellaMandatory;
  if(country === &#39;England&#39;){
    umbrellaMandatory = true;
  } else {
    umbrellaMandatory = false;
  }
&lt;/script&gt;</code></pre>

<p>Conditions are great, but they are a bit limited. What if you want to do something over and over again? Say your job is to add a paragraph tag around each of the values in an array? Using only conditions you’d need to hard-code cases for arrays of all the different lengths you&#39;d be likely to come across:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
  var names = new Array(&#39;Chris&#39;,&#39;Dion&#39;,&#39;Ben&#39;,&#39;Brendan&#39;);
  var all = names.length;
  if(all == 1){
    names[0] = &#39;&lt;p&gt;&#39; + names[0] + &#39;&lt;/p&gt;&#39;;
  }
  if(all == 2){
    names[0] = &#39;&lt;p&gt;&#39; + names[0] + &#39;&lt;/p&gt;&#39;;
    names[1] = &#39;&lt;p&gt;&#39; + names[1] + &#39;&lt;/p&gt;&#39;;
  }
  if(all == 3){
    names[0] = &#39;&lt;p&gt;&#39; + names[0] + &#39;&lt;/p&gt;&#39;;
    names[1] = &#39;&lt;p&gt;&#39; + names[1] + &#39;&lt;/p&gt;&#39;;
    names[2] = &#39;&lt;p&gt;&#39; + names[2] + &#39;&lt;/p&gt;&#39;;
  }
  if(all == 4){
    names[0] = &#39;&lt;p&gt;&#39; + names[0] + &#39;&lt;/p&gt;&#39;;
    names[1] = &#39;&lt;p&gt;&#39; + names[1] + &#39;&lt;/p&gt;&#39;;
    names[2] = &#39;&lt;p&gt;&#39; + names[2] + &#39;&lt;/p&gt;&#39;;
    names[3] = &#39;&lt;p&gt;&#39; + names[3] + &#39;&lt;/p&gt;&#39;;
  }
&lt;/script&gt;</code></pre>

<p>This is just terrible and inflexible. Programming is meant to make our life easier and if you find yourself writing the same code over and over again, you are probably doing something wrong. Good programming means leaving the boring tasks to the machines and focusing on what you want to achieve.</p> 

<p>In this case we need a <strong>loop</strong> instead of a condition, as we are doing exactly the same thing to each and every one of the items in the array, and the length doesn’t really matter. You’ll see the above example rewritten using a loop in the next section—compare the two, and see how much shorter the latter is!</p>

<h2 id="loops">Loops</h2>

<p>Loops are repetitive conditions where one variable in the loop changes. The easiest form of a loop is the <code>for</code> statement. This one has a syntax that is similar to an <code>if</code> statement, but with more options:</p>

<pre><code>for(condition;end condition;change){
  // do it, do it now
}</code></pre>

<p>Normally what you do with a <code>for</code> loop is to execute the code in the curly braces several times. For this you need to define an iterator variable and keep changing it during the loop until the variable value meets the end condition (which causes the interpreter to exit the loop and carry on to the next part of the code). For example:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;
  for(var i = 0;i &lt; 11;i = i + 1){
    // do it, do it now
  }
&lt;/script&gt;</code></pre>

<p>Here we define a variable <code>i</code> as having an initial value of 0 and then do a check to see if it has reached 11 yet (is it smaller than 11?). The change equation—<code>i = i + 1</code>—adds one to <code>i</code> every time the loop executes and goes through another iteration. This means that this loop executes 11 times. If you add two to <code>i</code> on every iteration it executes only 6 times:</p> 

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
  for(var i = 0;i &lt; 11;i = i + 2){
    // do it, do it now
  }
&lt;/script&gt;</code></pre>

<p>Using a loop the paragraph adding example we saw above gets a lot shorter and simpler:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
  var names = new Array(&#39;Chris&#39;,&#39;Dion&#39;,&#39;Ben&#39;,&#39;Brendan&#39;);
  var all = names.length;
  for(var i=0;i&lt;all;i=i+1){
    names[i] = &#39;&lt;p&gt;&#39; + names[i] + &#39;&lt;/p&gt;&#39;;
  }
&lt;/script&gt;</code></pre>

<p>Notice that you can use the value of <code>i</code> as the array counter inside the loop. This is the power of loops—not only can you do the same thing over and over again; you also know in every iteration how many times you have already done it.</p> 

<h2 id="summary">Summary</h2>

<p>This—in a very small nutshell—is programming. You take variables and user input and change them, compare them, loop over them and return them in one way or another. No black magic, not too confusing, just a very simplified view of how things work. We haven’t covered functions here, but let’s just say that once you’ve programmed a task that makes sense to re-use over and over again, you can turn this code into a function, which allows it to be executed repeatedly wherever such functionality is needed. Functions will be covered in much greater detail later on in the course. For now, I hope things are a bit clearer than they were at the beginning.</p>

<h2 id="exercises">Exercise questions</h2>

<ul>
<li>Why does this code fail? <code>var x = hello world</code>?</li>
<li>Is this valid code? <code>var x = &#39;elephant&#39;;var y = &quot;mouse&quot;;</code></li>
<li>What does this condition test for? <code>if(x &gt; 10 &amp;&amp; x &lt; 20 &amp;&amp; x !== 13 &amp;&amp; y &lt; 10)</code></li>
<li>What does this condition do? <code>if(b &lt; 10 &amp;&amp; b &gt; 20)</code>?</li>
<li><p>Loop over an array with the items “peter”,“paul”,“mary”,“paddington bear”,“mr.ben”,“zippy” and “bagpuss”. Add a paragraph around each of them and add a paragraph with a class “odd” to every second one of them. Tip: you can test for every second item using the modulo operator <code>i % 2 == 0</code></p></li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/38-headers-footers-columns-templates/" rel="prev" title="link to the previous article in the series">Previous article—Headers, footers, columns, and templates</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/javascript-uses/" rel="next" title="link to the next article in the series">Next article—What can you do with JavaScript?</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>


<h2>About the author</h2>


<div style="float:right;">

<img src="http://forum-test.oslo.osa/kirby/content/articles/223-39-programming-the-real-basics/chrisheilmann.jpg" alt="Picture of the article author Chris Heilmann" />
<p class="comment">Photo credit: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>

</div>
<p>Chris Heilmann has been a web developer for ten years, after dabbling in radio journalism. He works for Yahoo! in the UK as trainer and lead developer, and oversees the code quality on the front end for Europe and Asia.</p>



<p style="padding-bottom:50px;">Chris blogs at <a href="http://wait-till-i.com">Wait till I come</a>  and is available on many a social network as &#x201C;codepo8&#x201D;.</p>
      


