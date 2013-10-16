Title: The seven rules of unobtrusive JavaScript
----
Date: 2007-12-19 13:14:18
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
          
          
          <p>I&#39;ve found the following rules over the years developing, teaching and implementing JavaScript in an unobtrusive manner. They have specifically been the outline of a workshop on unobtrusive JavaScript for the Paris Web conference 2007 in Paris, France.</p>
            <p>I hope that they help you understand a bit why it is a good idea to plan and execute your JavaScript in this way. It has helped me deliver products faster, with much higher quality and a lot easier maintenance.</p>
          <h2>1. Do not make any assumptions (JavaScript, the unreliable helper)</h2>
                <p>Probably the most important feature of unobtrusive JavaScript is that you stop making assumptions:</p>
                <ul>
                    <li>You don&#39;t expect JavaScript to be available but make it a nice-to-have rather than a dependency</li>
                    <li>You don&#39;t expect browsers to support certain methods and have the correct properties but you test for them before you access them</li>
                    <li>You don&#39;t expect the correct HTML to be at your disposal, but check for it and do nothing when it is not available</li>
                    <li>You keep your functionality independent of input device</li>
                    <li>You expect other scripts to try to interfere with your functionality and keep the scope of your scripts as secure as possible.</li>
                </ul>
                <p>The first thing to consider before you even start planning your script is to look at the HTML you are enhancing with scripting and see what you can use for your own purposes.</p>
            <h2>2. Find your hooks and relationships (HTML, the base to build on)</h2>
            <p>Before you start your script look at the base that you build upon. If the HTML is unstructured or unknown there is hardly any way to create a clever scripting solution - you will most likely create either far too much markup with JavaScript or your application will depend on JavaScript.</p>
            <p>There are several things to consider in your HTML - hooks and relationships</p>
            <h3>HTML Hooks</h3>
            <p>HTML hooks are first and foremost IDs, as these can be accessed with the fastest DOM method - <code>getElementById</code>. These are safe as IDs are unique in a valid HTML document (IE has a bug with name and ID, but good libraries work around that) and easy to test for.</p>
            <p>Other hooks are HTML elements which can be read out with <code>getElementsByTagName</code> and CSS classes, which can not be read out with a native DOM method in most browsers (Mozilla will soon have one and Opera 9.5 already does though). However, there are a lot of helper methods that allow for a <code>getElementsByClassName</code>.</p>
            <h3>HTML relationships</h3>
            <p>The other interesting thing about HTML is the relationships of your markup. Questions to ask yourself are:</p>
            <ul>
                <li>How can I reach this element the easiest and with the least steps traversing the DOM?</li>
                <li>What element do I need to alter to reach as many child elements that I need to change?</li>
                <li>What attributes or information does a certain element have that I can use to link to another?</li>
            </ul>
            <p>Traversing the DOM is expensive and can be slow, that is why it is a good idea to leave it to a technology that is already in use in browsers.</p>
           
            <h2>3. Leave traversing to the experts (CSS, the faster DOM traveller)</h2>
            
            <p>It is pretty interesting that DOM scripting and traversing the DOM with its methods and properties (<code>getElementsByTagName</code>, <code>nextSibling</code>, <code>previousSibling</code>, <code>parentNode</code> and so on) appears as a confusing matter to a lot of people. It is interesting as we already do it with a different technology: CSS.</p>
            <p>CSS is a technology that takes a CSS selector and traverses the DOM to access the desired elements and change their visual attributes. A rather complex JavaScript using DOM can be replaced with a single CSS selector:</p>
<pre><code>
var n = document.getElementById(&#39;nav&#39;);
if(n){
    var as = n.getElementsByTagName(&#39;a&#39;);
    if(as.length &gt; 0){
        for(var i=0;as[i];i++){
            as[i].style.color = &#39;#369&#39;;
            as[i].style.textDecoration = &#39;none&#39;;
        }
    }
}

/* is the same as */

#nav a{
    color:#369;
    text-decoration:none;
}
</code></pre>
            <p>This is a very powerful companion to have and you can piggyback on it. You do that by dynamically assigning classes to elements higher up in the DOM hierarchy or altering IDs. If you simply add a class to the body of the document using DOM you can easily offer a chance for a designer to define both the static and dynamic version of the document:</p>
<pre><code>
<strong>JavaScript:</strong>

var dynamicClass = &#39;js&#39;;
var b = document.body;
b.className = b.className ? b.className + &#39; js&#39; : &#39;js&#39;;

<strong>CSS:</strong>
/* static version */

#nav {
  ....
}

/* dynamic version */

body.js #nav {
  ....
}
</code></pre>
            
            <h2 id="r4">4. Understand browsers and users (build on existing working usage patterns and create what you need)</h2>
            
                <p>A really important part of unobtrusive JavaScript is to understand how browsers work (and especially how browsers fail) and what users expect to happen. It is easy to go overboard with JavaScript and create a completely different interface with it. Drag and Drop interfaces, collapsible sections, scrollbars and sliders can all be created with JavaScript, but there is much more to those than just the technical implementation. You have to ask yourself:</p>
                <ul>
                    <li>Will my new interface work independent of input device, and if not, what should be the fallback?</li>
                    <li>Is the new interface that I am building following rules of the browser or the richer interfaces it came from (can you navigate a multi level menu with your cursors or do you need to tab through it?)</li>
                    <li>What is functionality that I need to offer but that is dependent on JavaScript?</li>
                </ul>
                <p>The latter is really no issue, as you can use the DOM to create HTML on the fly in case you need it. An example of this are &quot;print this&quot; links - browsers don&#39;t offer a non-JavaScript way of printing a document, which is why you should create links like these with the DOM. The same applies to clickable headings that collapse and expand content. Headings can not be activated with a keyboard, but links can. In order to create clickable headings you should use JavaScript to inject links inside them and all is well - even keyboard users can then collapse and expand the content sections.</p>
                <p>Great resources for solutions of this kind of problem are design pattern libraries. As for knowing what works in browsers independent of input device, this is a matter of experience. First of all you need to understand the concept of event handling.</p>
            
            <h2>5. Understand Events (Event handling to initiate change)</h2>
            
            <p>Event handling is the next step to truly unobtrusive JavaScript. The point is not to make everything draggable and clickable or add inline handling. The point is to understand that Event Handling is true separation. We separate HTML, CSS and JavaScript but with Event Handling we go much further.</p>
            <p>Elements in the document are there to wait for handlers to listen to a change happening to them. If that happens, the handlers retrieve a magical object (normally as a parameter called <code>e</code>) that tells them what happened to what and what can be done with it.</p>
            <p>The really cool thing about most event handling is though that it does not only happen to the element you want to reach but also to all the elements above it in the DOM hierarchy (this does not apply to all events though - focus and blur don&#39;t do that). This allows you to assign one single event handler to for example a navigation list and use event handling&#39;s methods to reach what element was really involved. This technique is called event delegation and it has several benefits:</p>
            <ul>
                <li>You only need to test if a single element exists, not each of them</li>
                <li>You can dynamically add or remove new child elements without having to remove or add new handlers</li>
                <li>You can react to the same event on different elements</li>
            </ul>
            <p>The other thing to remember is that you can stop events from being reported to parent elements and you can override the default action HTML elements like links have. However, sometimes this is not a good idea, as browsers apply them for a reason. An example would be links pointing to in-page targets. Allowing for them to be followed makes sure that users can bookmark the state of your script.</p>
            
            <h2>6. Play well with others (Namespacing, scope and patterns)</h2>
            
                <p>Your code will hardly ever be the only script used in the document. It is therefore of utmost importance that you make sure your code does not have global function or variable names that other scripts can override. There are several patterns available to avoid this issue. The most basic is that you instantiate every variable using the <code>var</code> keyword. Let&#39;s say we have the following script:</p>
<pre><code>
var nav = document.getElementById(&#39;nav&#39;);
function init(){
    // do stuff 
}
function show(){
    // do stuff 
}
function reset(){
    // do stuff 
}
</code></pre>
            <p>This has a global variable called <code>nav</code> and functions called <code>init</code>, <code>show</code> and <code>reset</code>. The functions can access the variable and each other by name:</p>
<pre><code>
var nav = document.getElementById(&#39;nav&#39;);
function init(){
    show();
    if(nav.className === &#39;show&#39;){
        reset();
    }
    // do stuff 
}
function show(){
    var c = nav.className;
    // do stuff 
}
function reset(){
    // do stuff 
}
</code></pre>
            <p>You can avoid all this global code by wrapping it in an object using the object literal, thus turning the functions into methods and the variables into properties.You need to define the methods and variable with a name followed by a colon and you need to separate each of them from the others with a comma.</p>
<pre><code>
var myScript = {
    nav:document.getElementById(&#39;nav&#39;),
    init:function((){
        // do stuff 
    },
    show:function((){
        // do stuff 
    },
    reset:function((){
        // do stuff 
    }
}
</code></pre>
            <p>Each of these can be accessed from outside and inside the object by prepending the object name followed by a full stop.</p>
<pre><code>
var myScript = {
    nav:document.getElementById(&#39;nav&#39;),
    init:function(){
        myScript.show();
        if(myScript.nav.className === &#39;show&#39;){
            myScript.reset();
        }
        // do stuff 
    },
    show:function(){
        var c = myScript.nav.className;
        // do stuff 
    },
    reset:function(){
        // do stuff 
    }
}
</code></pre>
            <p>The drawbacks of this pattern is that you have to repeat the name of the object every time you access it from another method and that everything you have in your object is publicly accessible. What if you want to only make parts of the script accessible to other script in the document? For this you can use the module pattern:</p>
<pre><code>
var myScript = function(){
    // these are all private methods and properties
    var nav = document.getElementById(&#39;nav&#39;);
    function init(){
        // do stuff 
    }
    function show(){
        // do stuff 
    }
    function reset(){
        // do stuff 
    }
    // public methods and properties wrapped in a return 
    // statement and using the object literal
    return {
        public:function((){
        
        },
        foo:&#39;bar&#39;
    }
}();
</code></pre>
            
            <p>You can access the public properties and methods that are returned the same way you can in the object literal, in this case <code>myScript.public()</code> and <code>myScript.foo</code>. There is another annoyance though: if you want to access one public method from another or from a private method you need to go through the verbose long name again (the main object name can get rather long). To avoid this, you define them as private methods and only return an object with synonyms:</p>
<pre><code>
var myScript = function(){
    // these are all private methods and properties
    var nav = document.getElementById(&#39;nav&#39;);
    function init(){
        // do stuff 
    }
    function show(){
        // do stuff 
        // do stuff 
    }
    function reset(){
        // do stuff 
    }
    var foo = &#39;bar&#39;;
    function public(){
    
    }
    // return public pointers to the private methods and 
    // properties you want to reveal
    return {
        public: public,
        foo:foo
    }
}();
</code></pre>
            <p>Ths allows for a consistency in coding style and also allows you to write shorter synonyms when you reveal them.</p>
            <p>If you don&#39;t want to reveal any of your methods or properties to the outside world, you can wrap the whole code block in a anonymous function and call it immediately after it was defined:</p>
<pre><code>
(function(){
    // these are all private methods and properties
    var nav = document.getElementById(&#39;nav&#39;);
    function init(){
        // do stuff
        show(); // no need for prepended object name
    }
    function show(){
        // do stuff 
    }
    function reset(){
        // do stuff 
    }
})();
</code></pre>
            <p>This is a great pattern for functionality that just needs to be executed once and has no dependency on other functions.</p>
            <p>Following all of this will make your code work well for the user and the machine it is running on as well as other developers. However, there is one more group you have to think about.</p>


            <h2>7. Work for the next developer (Making maintenance easier)</h2>
            
                <p>The last step to make your script truly unobtrusive is to give it another go-over when you finished and think about the next developer who has to take over from you once this went into production. Consider the following:</p>
                <ul>
                    <li>Are all the variable and function names logical and easy to understand?</li>
                    <li>Is the code logically structured? Can you &quot;read&quot; it from top to bottom?</li>
                    <li>Are the dependencies obvious?</li>
                    <li>Have you commented areas that might be confusing?</li>
                </ul>
                <p>The most important bit is to understand that the HTML and CSS of a document is much more likely to change than the JavaScript (as these make up visual output). Therefore it is a great idea not to have any class and ID names or strings that will be shown to the end user buried somewhere in the code but separate it out into a configuration object instead.</p>
<pre><code>
myscript = function(){
    var config = {
        navigationID:&#39;nav&#39;,
        visibleClass:&#39;show&#39;
    };
    var nav = document.getElementById(config.navigationID);
    function init(){
        show();
        if(nav.className === config.visibleClass){
            reset();
        };
        // do stuff 
    };
    function show(){
        var c = nav.className;
        // do stuff 
    };
    function reset(){
        // do stuff 
    };
}();
</code></pre>    
                <p>That way maintainers know exactly where to change these without having to alter the rest of your code.</p>
            
            <h2>More information</h2>
            <p>These are the seven rules I found. If you want more in-depth information about the subjects that were covered, try out the following links:</p>
            <ul>
                <li><a href="http://developer.yahoo.com/ypatterns/">Yahoo! Design Pattern Library</a></li>
                <li><a href="http://icant.co.uk/sandbox/eventdelegation/">Event Delegation</a></li>
                <li><a href="http://yuiblog.com/blog/2007/01/17/event-plan/">Event Driven JavaScript Application Design</a></li>
                <li><a href="http://www.klauskomenda.com/code/javascript-programming-patterns/">JavaScript Programming Patterns</a></li>
                <li><a href="http://www.wait-till-i.com/2006/02/16/show-love-to-the-object-literal/">Show love to the Object Literal</a></li>
                <li><a href="http://yuiblog.com/blog/2007/06/12/module-pattern/">A JavaScript Module Pattern</a></li>
                
                </ul>

<p class="comment">(The original posting of this article is available at <a href="http://icant.co.uk/articles/seven-rules-of-unobtrusive-javascript/">http://icant.co.uk/articles/seven-rules-of-unobtrusive-javascript/</a>  - this version reproduced under a Creative Commons license, and with agreement from the delectable Mr. Heilmann.)</p>
