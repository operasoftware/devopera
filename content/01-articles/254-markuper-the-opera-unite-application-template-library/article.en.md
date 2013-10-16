Title: Markuper: The Opera Unite Application template library
----
Date: 2009-06-16 07:01:59
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
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">24th April 2012: Please note</h2>

<p>Starting with Opera 12, Opera Unite will <a href="http://my.opera.com/ODIN/blog/2012/04/24/end-unite-apps-and-widgets">be turned off for new users and completely removed in a later release</a>. If you&#39;re interested in building addons for Opera, we recommend going with our extensions platform — check out <a href="http://dev.opera.com/addons/extensions/">our extensions documentation</a> to get started.</p>
</div> 

<h2 id="introduction">Introduction</h2>
    <p>Markuper is a template library that provides an easy way to develop Unite services.</p>
    <p>Usually, when developing an Opera Unite service, you need to output all content through the <a href="http://dev.opera.com/libraries/unite/docs/WebServerResponse.dml#write">WebServerResponse.write*</a> functions.
        That can easily be turned into a cumbersome task whenever there’s a need to change the document produced, for instance, when the designer wants to revamp the layout of the page.
        It also violates abstraction layers, between business logic and presentation, unless you create your own functions to separate them.</p>
    <p>The Markuper template library tries to solve these problems, as well as world hunger, by using a specific syntax that developers can use to create bindings between JavaScript code and HTML documents. In this article I’ll show you how to use the most important features of this library.</p>
    
    <p>The contents of this article are as follows:</p>

    <h2 id="toc"></h2>
    <h2 id="myFirstTemplate">My first template</h2>
    <p>The easiest way to show the template library in action is to output a simple HTML file, something that can already be easily achieved by calling <a href="http://dev.opera.com/libraries/unite/docs/WebServerResponse.dml#writeFile">WebServerResponse.writeFile</a>, but nevertheless a task that will demonstrate the library perfectly.</p>

    <h3 id="includinglibrary">How to include the library in the service</h3>

    <p>Before going into coding you first need to include the template library in your service — to do so, you must create a script tag in the base <code>index.html</code> file (or the file specified on the <code>widgetfile</code> tag of <code>config.xml</code>), pointing to the <code>template.js</code> file. You can find a bare bones service with these details already configured for you in the <a href="bare_bones_service.zip">list of files</a>.</p>
    <p>Since the template library depends on the <a href="http://dev.opera.com/libraries/fileio/">File I/O API</a> its inclusion in the service is mandatory. To include this API you only need to specify it using the <code>feature</code> element of the <code>config.xml</code>. Here&#39;s an example:</p>
    
    <pre class="code"><code>&lt;feature name=&quot;http://xmlns.opera.com/fileio&quot;&gt;&lt;/feature&gt;</code></pre>

    <h3 id="outputsimplehtml">Outputting a simple HTML file</h3>

    <p>First, we create a simple HTML file to output, and place it in a <code>templates/</code> directory in the root of the service. A simple example:
    <pre class="code"><code>&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;Tutorial&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  Markuper Tutorial
&lt;/body&gt;
&lt;/html&gt;</code></pre>
    
    <p>To be able to interact with the requests received by Opera Unite we first must listen to the <code>_request</code> event of <code>opera.io.webserver</code> for incoming connections. If you’re using the provided bare bones service, this code is meant to be in the <code>/scripts/main.js</code> file.</p>

    <pre class="code"><code>opera.io.webserver.addEventListener( &#39;_request&#39;, handleRequest, false );
        
function handleRequest( event )
{
  var response = event.connection.response;
    
  var template = new Markuper( &#39;templates/tutorial.html&#39; );
    
  response.write( template.html() );
  response.close();
}</code></pre>

    <p>The constructor receives the location of the file to output as an argument. The <code>html</code> function will return a String representation of the template that we’ll output through the <code>response</code> object, as seen in Figure 1.</p>
    
    <img alt="simple template output of the first example" src="http://forum-test.oslo.osa/kirby/content/articles/254-markuper-the-opera-unite-application-template-library/markuper1.jpg" />

    <p class="comment">Figure 1: Simple template output of the first example.</p>
    
    <p>You can <a href="my_first_template.zip">download the complete first example service code</a>.</p>
    
    <h2 id="usingJavascriptVariablesInTheTemplate">Using JavaScript variables in the Template</h2>

    <p>Just outputting plain HTML files doesn’t make the template library very useful by itself. The real value is apparent when you start binding JavaScript variables to the template.</p>
 
    <p>Along with the file location, the Markuper constructor also accepts an object containing values to be bound to the template as a second argument. You can think of this object as a <a href="http://tools.ietf.org/html/rfc4627">JSON</a> data object, meaning that you can organize your variables in a hierarchical structure.</p>

    <p>A special syntax is used to bind one of the variables in the data object to the template: The path to the variable within the object, in double curly brackets — <code>{{path.to.variable}}</code>.</p>

    <pre class="code"><code>&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;Tutorial&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;<strong>{{name}}</strong> Tutorial&lt;/h1&gt;
  &lt;p&gt;
    This variable is further down the data object hierarchy:
    &#39;<strong>{{further.down.the.hierarchy}}</strong>&#39;
  &lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <p>In the above example we’re binding to two JavaScript variables: <code>name</code> and <code>further.down.the.hierarchy</code>. These two strings will later be replaced by their respective values given in the second argument of the Markuper constructor.</p>

    <pre class="code"><code>opera.io.webserver.addEventListener( &#39;_request&#39;, handleRequest, false );

function handleRequest( event )
{
  var response = event.connection.response;

  <strong>var data =
  {
    name    : &#39;Template&#39;,
    further :
    {
      down    :
      {
        the :
        {
          hierarchy:  &#39;yes it is!&#39;
        }
      }
    }
  };</strong>
  var template = new Markuper( &#39;templates/tutorial.html&#39;<strong>, data</strong> );

  response.write( template<strong>.parse()</strong>.html() );
  response.close();
}</code></pre>

    <p>In the JavaScript file we’ll need to create the variables we&#39;ve just referenced in the template file and give them the appropriate values.</p>
    <p>The <code>data</code> variable will be the JSON data object given to the constructor as the object. In it, we’re defining two properties, <code>name</code> — with a value of<code>Template</code> and <code>further.down.the.hierarchy</code> — with a value of <code>yes it is!</code>.</p>
   
    <p>Before we can ask for the HTML string we need to explicitly <code>parse()</code> the template in order to proceed with the binding substitutions.</p>

    <p>The resulting web page will be:</p>

    <pre class="code"><code>&lt;!doctype html&gt;
&lt;HTML&gt;
&lt;HEAD&gt;
  &lt;META http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;TITLE&gt;Tutorial&lt;/TITLE&gt;
&lt;/HEAD&gt;
&lt;BODY&gt;
  &lt;H1&gt;<strong>Template</strong> Tutorial&lt;/H1&gt;
  &lt;P&gt;
    This variable is further down the data object hierarchy: 
    &#39;<strong>yes it is!</strong>&#39;
  &lt;/P&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</code></pre>
    
    <p>You can <a href="using_javascript_variables_in_the_template.zip">download the complete second example service code</a>.</p>
    
    <h2 id="theTemplateIsDomBased">The Markuper is DOM-based</h2>

    <p>The template engine is entirely DOM-based, meaning that all libraries depending on the DOM API — such as jQuery or YUI — and all DOM-based code can be used to manipulate the template as if it were a common web page.</p>
    
    <p>There are two functions available to retrieve <code>Element</code>s from the template — <code>xpath</code> and <code>select</code>. The former utilizes an <em><a href="http://www.w3.org/TR/xpath">XPath</a></em> expression to select elements; the latter a <em><a href="http://dev.opera.com/articles/view/css-3-attribute-selectors/">CSS 3 attribute selector</a></em>.

    <h3>Example</h3>

    <p>First, the HTML template for this example — <code>templates/tutorial.html</code></p>

    <pre class="code"><code>&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;Tutorial&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;{{name}} Tutorial&lt;/h1&gt;
  &lt;div id=&quot;div1&quot;&gt;
    This is going to be <strong>&lt;span&gt;removed&lt;/span&gt;</strong>
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <h4>XPath</h4>
    
    <p>XPath can be used as follows to select an element:</p>
    
    <pre class="code"><code>opera.io.webserver.addEventListener( &#39;_request&#39;, handleRequest, false );

function handleRequest( event )
{
  var response = event.connection.response;

  var data =
  {
    name    : &#39;Template&#39;
  };
  var template = new Markuper( &#39;templates/tutorial.html&#39;, data );

  var span = template.<strong>xpath( &quot;//div[@id=&#39;div1&#39;]/span[1]&quot; )</strong>[0];
  span.parentNode.removeChild( span );
    
  response.write( template.parse().html() );
  response.close();
}</code></pre>

    <h4>CSS Selector</h4>
    
    <p>CSS can be used to select an element like this:</p>

    <pre class="code"><code>opera.io.webserver.addEventListener( &#39;_request&#39;, handleRequest, false );

function handleRequest( event )
{
  var response = event.connection.response;

  var data =
  {
    name    : &#39;Template&#39;
  };
  var template = new Markuper( &#39;templates/tutorial.html&#39;, data );

  var span = template.<strong>select( &quot;#div1 &gt; span&quot; )</strong>[0];
  span.parentNode.removeChild( span );

  response.write( template.parse().html() );
  response.close();
}</code></pre>

    <p>The resulting web page will be:</p>

    <pre class="code"><code>&lt;!doctype html&gt;
&lt;HTML&gt;
&lt;HEAD&gt;
  &lt;META http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;TITLE&gt;Tutorial&lt;/TITLE&gt;
&lt;/HEAD&gt;
&lt;BODY&gt;
  &lt;H1&gt;{{name}} Tutorial&lt;/H1&gt;
  &lt;DIV id=&quot;div1&quot;&gt;
    This is going to be
  &lt;/DIV&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</code></pre>

    <p>You can <a href="using_the_dom.zip">download the complete third example service code</a>.</p>

    <h2 id="howToControlPresentationOfHtmlElements">How to control presentation of HTML elements</h2>
 
    <h3 id="presentation">Presentation logic</h3>

    <p>Until now we’ve seen how we can effectively seperate the logic layer from the presentation layer, writing all logic in the JavaScript file and then binding the values created to small pieces of text in the template (HTML) file.</p>
 
    <p>However, logic can itself be split into two different sub domains, business and presentation logic. Business logic refers to all rules related to your specific domain model and problems you&#39;re trying to solve. Presentation logic, in the other hand, deals with how you want to display the information created by the business logic to the user.</p>
 
    <p class="note">Note that here we are not referring to presentation in the sense of “HTML for structure, CSS for presentation”; we are talking in terms of the desktop application paradigm, which is so often applied to the development of full-blown web applications. In this model the layers are comonly referred to as presentation, application and storage, with HTML and CSS (and often JavaScript) being referred to as the presentation layer. See the <a href="http://en.wikipedia.org/wiki/Web_application#Structure">Wikipedia web applications article</a> for more details.</p>

    <h3 id="binding">Binding HTML elements to JavaScript functions</h3>

    <p>To achieve this layer of presentation logic the Markuper library implements mechanisms to effectively control any HTML element from a JavaScript function. These take the form of bindings — an attribute in the element itself specifying which JavaScript function should control it.</p>

    <h3 id="dataattributes">Using <code>data-*</code> attributes</h3>
    <p>To bind an HTML element to a JavaScript function first we must register that function on the template object. The way to achieve this is to call the <code>registerDataAttribute</code> function, which receives as parameters the data attribute name and the callback function that will be bound to all elements with that particular data attribute.</p>
    <p>The callback function will be called with four arguments:</p>
    <ol>
        <li><code>node</code>: the node element with the data attribute.</li>
        <li><code>data</code>: the data object given in the constructor.</li>
        <li><code>key</code>: the string value of the attribute.</li>
        <li><code>value</code>: if the <code>key</code> value represents an index to the <code>data</code> object then a fourth argument will be sent with the value pointed to by the index.</li>
    </ol>
    
    <h4 id="htmlintotext">Transforming HTML into text</h4>
    <p>This example transforms the inner HTML of an element into a text node, kind of like a <em>view source code</em> feature.</p>
    <p>First we will have a look at the <code>scripts/main.js</code> file for this example:</p>
 
    <pre class="code"><code>opera.io.webserver.addEventListener( &#39;_request&#39;, handleRequest, false );
function handleRequest( event )
{
  var response = event.connection.response;
    
  var data =
  {
    name    : &#39;Template&#39;,
  };
  var template = new Markuper( &#39;templates/tutorial.html&#39;, data );
    
  <strong>template.registerDataAttribute( &#39;show-html&#39;, function( node, data, key )
  {
    if( key == &#39;true&#39; )
    {
      node.textContent = node.innerHTML;
    }
  });</strong>
  response.write( template.parse().html() );
  response.close();
}</code></pre>

    <p>Next, the HTML template for this example — <code>templates/tutorial.html</code>

    <pre class="code"><code>&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;Tutorial&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;{{name}} Tutorial&lt;/h1&gt;
  &lt;pre <strong>data-show-html=&quot;true&quot;</strong>&gt;
    &lt;div id=&quot;header&quot;&gt;&lt;/div&gt;
    &lt;div id=&quot;content&quot;&gt;
      &lt;p&gt;paragraph&lt;/p&gt;
    &lt;/div&gt;
    &lt;div id=&quot;footer&quot;&gt;&lt;/div&gt;
  &lt;/pre&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <p>The resulting web page will be:</p>

    <pre class="code"><code>&lt;!doctype html&gt;
&lt;HTML&gt;
&lt;HEAD&gt;
  &lt;META http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;TITLE&gt;Tutorial&lt;/TITLE&gt;
&lt;/HEAD&gt;
&lt;BODY&gt;
  &lt;H1&gt;Markuper Tutorial&lt;/H1&gt;
  &lt;PRE data-show-html=&quot;true&quot;&gt;
    <strong>&amp;lt;DIV id=&quot;header&quot;&amp;gt;&amp;lt;/DIV&amp;gt;
    &amp;lt;DIV id=&quot;content&quot;&amp;gt;
      &amp;lt;P&amp;gt;paragraph&amp;lt;/P&amp;gt;
    &amp;lt;/DIV&amp;gt;
    &amp;lt;DIV id=&quot;footer&quot;&amp;gt;&amp;lt;/DIV&amp;gt;</strong>
  &lt;/PRE&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</code></pre>

    <p>You can <a href="html_into_text.zip">download the complete fourth example service code</a>.</p>
       
    <h4 id="sourcecode">Listing and highlighting source code</h4>
    <p>Now for a more complex example of changing the contents of an element. Here we take a function, use <code>toString()</code> to decompile it, generate some markup for syntax highlighting and append it to the element.</p>
 
    <p>First, the <code>scripts/main.js</code> file for this example:</p>
 
    <pre class="code"><code>opera.io.webserver.addEventListener( &#39;_request&#39;, handleRequest, false );

function handleRequest( event )
{
  var response = event.connection.response;

  var data =
  {
    name    : &#39;Template&#39;,
    <strong>func    : function foo()
    {
      var baz = 3;

      return &#39;bar&#39;;
    }</strong>
  };
  var template = new Markuper( &#39;templates/tutorial.html&#39;, data );

  <strong>template.registerDataAttribute( &#39;list-code&#39;, function( node, data, key, value )
  {
    var keywords = [&#39;function&#39;, &#39;var&#39;, &#39;return&#39;];
    var regexp = new RegExp( keywords.join(&#39;|&#39;), &#39;g&#39; );
    value = value.toString().replace( regexp, function( keyword )
    {
      return &#39;&lt;span style=&quot;color: blue&quot;&gt;&#39; + keyword + &#39;&lt;/span&gt;&#39;;
    });
    node.innerHTML = value;
  });</strong>

  response.write( template.parse().html() );
  response.close();
}</code></pre>

    <p>Next, the HTML template for this example &#x2014; <code>templates/tutorial.html</code></p>

    <pre class="code"><code>&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;Tutorial&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;{{name}} Tutorial&lt;/h1&gt;
  &lt;pre <strong>data-list-code=&quot;func&quot;&gt;</strong>&lt;/pre&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <p>The resulting web page will be:</p>

    <pre class="code"><code>&lt;!doctype html&gt;
&lt;HTML&gt;
&lt;HEAD&gt;
  &lt;META http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;TITLE&gt;Tutorial&lt;/TITLE&gt;
&lt;/HEAD&gt;
&lt;BODY&gt;
  &lt;H1&gt;Markuper Tutorial&lt;/H1&gt;
  &lt;PRE data-list-code=&quot;func&quot;&gt;<strong>&lt;SPAN style=&quot;color: blue&quot;&gt;function&lt;/SPAN&gt; foo()
  {
    &lt;SPAN style=&quot;color: blue&quot;&gt;var&lt;/SPAN&gt; baz = 3;

    &lt;SPAN style=&quot;color: blue&quot;&gt;return&lt;/SPAN&gt; &#39;bar&#39;;
  }</strong>&lt;/PRE&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</code></pre>

    <p>You can download the complete <a href="listing_highlighted_code.zip">example five service code here</a>.</p>
       
    <h4 id="addingremovingelements">Adding and removing HTML elements</h4>

    <p>This function creates a HTML element based on the contents of <code>data-header</code> (using the same semantics as LaTeX), appends it to the element as a <code>node</code> sibling and finally removes the <code>node</code> itself.</p>
 
    <p>First, <code>scripts/main.js</code>:</p>
 
    <pre class="code"><code>opera.io.webserver.addEventListener( &#39;_request&#39;, handleRequest, false );

function handleRequest( event )
{
  var response = event.connection.response;

  var data =
  {
    name    : &#39;Template&#39;,
  };
  var template = new Markuper( &#39;templates/tutorial.html&#39;, data );

  <strong>template.registerDataAttribute( &#39;header&#39;, function( node, data, key )
  {
    var types =
    {
      &#39;section&#39;           : &#39;h1&#39;,
      &#39;subsection&#39;        : &#39;h2&#39;,
      &#39;subsubsection&#39;     : &#39;h3&#39;,
      &#39;paragraph&#39;         : &#39;h4&#39;,
      &#39;subparagraph&#39;      : &#39;h5&#39;
    }

    var header = document.createElement( types[key] );
    header.textContent = node.textContent;

    node.parentNode.insertBefore( header, node );
    node.parentNode.removeChild( node );
  });</strong>

  response.write( template.parse().html() );
  response.close();
}</code></pre>

    <p>Next, the HTML template for this example &#x2014; <code>templates/tutorial.html</code></p>

    <pre class="code"><code>&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;Tutorial&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;{{name}} Tutorial&lt;/h1&gt;
  &lt;p <strong>data-header=&quot;section&quot;</strong>&gt;Section&lt;/p&gt;
  &lt;p&gt;This is a section&lt;/p&gt;
  &lt;p <strong>data-header=&quot;subsection&quot;</strong>&gt;SubSection&lt;/p&gt;
  &lt;p&gt;This is a subsection&lt;/p&gt;
  &lt;p <strong>data-header=&quot;paragraph&quot;</strong>&gt;Paragraph&lt;/p&gt;
  &lt;p&gt;This is a paragraph&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <p>The resulting web page will be:</p>

    <pre class="code"><code>&lt;!doctype html&gt;
&lt;HTML&gt;
&lt;HEAD&gt;
  &lt;META http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;TITLE&gt;Tutorial&lt;/TITLE&gt;
&lt;/HEAD&gt;
&lt;BODY&gt;
  &lt;H1&gt;Markuper Tutorial&lt;/H1&gt;
  <strong>&lt;H1&gt;Section&lt;/H1&gt;</strong>
  &lt;P&gt;This is a section&lt;/P&gt;
  <strong>&lt;H2&gt;SubSection&lt;/H2&gt;</strong>
  &lt;P&gt;This is a subsection&lt;/P&gt;
  <strong>&lt;H4&gt;Paragraph&lt;/H4&gt;</strong>
  &lt;P&gt;This is a paragraph&lt;/P&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</code></pre>

    <p>You can <a href="adding_removing_html_elements.zip">download the complete sixth example service code here</a>.</p>

    <h3>Built-in <code>data-*</code> attributes</h3>
    <p>The Markuper library comes with some built-in <code>data-*</code> attributes for common tasks such as iterating through arrays/objects, removing nodes and importing other templates.</p>
    
    <h4 id="datalist"><code>data-list</code> — Iterating through arrays/objects</h4>
 
    <p>This function duplicates the node as many times as there are elements in the value specified by the <code>data-list</code> attribute key. This function is useful for creating lists with the contents of an array where each list item corresponds to an array element.</p>
 
    <p>If the value pointed by the <code>data-list</code> attribute is an array, then as many nodes as elements in the array will be created. If it is an object, then as many nodes as object properties will be created instead.</p>

    <p>One additional field will be created for each iteration, and this will give access within the template to the corresponding array/object element. This field will be named <code>&lt;data-list&gt;[]</code>.</p>
     
    <p>For example, in a node with <code>data-list=&quot;cities&quot;</code> there will be a &lt;nobr&gt;<code>cities[]</code>&lt;/nobr&gt; named value, accessible within that node, with the corresponding array/object element set as that value.</p>
    <p>In the case that the <code>data-list</code> attribute points to an  <code>Object</code> this aditional element (&lt;nobr&gt;<code>&lt;data-list&gt;[]</code>&lt;/nobr&gt;) will be an <code>Object</code> with two properties — <code>key</code> and <code>value</code> — that will correspond to each object’s property name and value respectively.</p>

    <p>Example time! First, the HTML template for this example &#x2014; <code>templates/tutorial.html</code></p>

    <pre class="code"><code>&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;Tutorial&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;{{name}} Tutorial&lt;/h1&gt;
  &lt;ul&gt;
    &lt;li <strong>data-list=&quot;cities&quot;</strong>&gt;
      <strong>{{cities[].city}}</strong>: <strong>{{cities[].temperature}}</strong> degrees
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <p>Now for the JavaScript file that does all the work &#x2014; <code>scripts/main.js</code>:</p>

    <pre class="code"><code>opera.io.webserver.addEventListener( &#39;_request&#39;, handleRequest, false );

function handleRequest( event )
{
  var response = event.connection.response;

  var data =
  {
    name    : &#39;Template&#39;,
    <strong>cities  :
    [
      {city: &#39;Lisbon&#39;, temperature: 20},
      {city: &#39;Oslo&#39;  , temperature: -2}
    ]</strong>
  };

  var template = new Markuper( &#39;templates/tutorial.html&#39;, data );

  response.write( template.parse().html() );
  response.close();
}</code></pre>

    <p>The resulting web page will be:</p>

    <pre class="code"><code>&lt;!doctype html&gt;
&lt;HTML&gt;
&lt;HEAD&gt;
  &lt;META http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;TITLE&gt;Tutorial&lt;/TITLE&gt;
&lt;/HEAD&gt;
&lt;BODY&gt;
  &lt;H1&gt;Markuper Tutorial&lt;/H1&gt;
  &lt;UL&gt;
    <strong>&lt;LI&gt;
      Lisbon: 20 degrees
    &lt;/LI&gt;
    &lt;LI&gt;
      Oslo: -2 degrees
    &lt;/LI&gt;</strong>
  &lt;/UL&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</code></pre>

    <p>You can <a href="iterating_through_objects.zip">download the complete example seven service code here</a>.</p>

    <h4 id="removingunwantedelements"><code>data-remove/keep-if</code> — Removing unwanted elements</h4>

    <p>Elements can be removed from the template conditionally. The value of the attribute must be an index to a boolean value or a boolean expression composed of <code>&amp;&amp;</code>, <code>||</code> and indexes. In the specific case of <code>data-remove-if</code> the evaluation of the boolean expression will decide if the element will be removed and in <code>data-keep-if</code> if the element will remain in the document.</p>

    <p>First, the JavaScript for this example — <code>scripts/main.js</code></p>

    <pre class="code"><code>opera.io.webserver.addEventListener( &#39;_request&#39;, handleRequest, false );

function handleRequest( event )
{
  var response = event.connection.response;
  var isAdmin = true;
  var readAccess = false;

  var data =
  {
    name            : &#39;Template&#39;,
    <strong>isAdmin         : false,
    hasReadAccess   : true</strong>
  };

  var template = new Markuper( &#39;templates/tutorial.html&#39;, data );

  response.write( template.parse().html() );
  response.close();
}</code></pre>

    <p>Next, the HTML template for this example &#x2014; <code>templates/tutorial.html</code></p>

    <pre class="code"><code>&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;Tutorial&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;{{name}} Tutorial&lt;/h1&gt;
  &lt;h1 <strong>data-remove-if=&quot;false&quot;</strong>&gt;DRAFT&lt;/h1&gt;
  &lt;p <strong>data-keep-if=&quot;isAdmin&quot;</strong>&gt;Admin Eyes Only&lt;/p&gt;
  &lt;p <strong>data-keep-if=&quot;hasReadAccess || isAdmin&quot;</strong>&gt;very important info&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <p>The resulting web page will be:</p>

    <pre class="code"><code>&lt;!doctype html&gt;
&lt;HTML&gt;
&lt;HEAD&gt;
  &lt;META http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;TITLE&gt;Tutorial&lt;/TITLE&gt;
&lt;/HEAD&gt;
&lt;BODY&gt;
  &lt;H1&gt;Markuper Tutorial&lt;/H1&gt;
  <strong>&lt;H1&gt;DRAFT&lt;/H1&gt;</strong>

  <strong>&lt;P&gt;very important info&lt;/P&gt;</strong>

&lt;/BODY&gt;
&lt;/HTML&gt;</code></pre>

    <p>You can <a href="removing_unwanted_elements.zip">download the complete eighth example service code</a>.</p>

    <h4 id="importingtemplates"><code>data-import</code> — Importing other templates</h4>

    <p>Last but not least, we present a data attribute that allows you to import other templates, inserting them into a specific element.</p>

    <p>First, let’s look at the <code>scripts/main.js</code> file:</p>

    <pre class="code"><code>opera.io.webserver.addEventListener( &#39;_request&#39;, handleRequest, false );

function handleRequest( event )
{
  var response = event.connection.response;

  var data =
  {
    name            : &#39;Template&#39;
  };

  var template = new Markuper( &#39;templates/tutorial.html&#39;, data );

  response.write( template.parse().html() );
  response.close();
}</code></pre>

    <p>Now, the HTML template for this example — <code>templates/tutorial.html</code></p>

    <pre class="code"><code>&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;Tutorial&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;{{name}} Tutorial&lt;/h1&gt;
  &lt;div <strong>data-import=&quot;templates/import.html&quot;</strong>&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <p>This example also has a third file involved — the template to be imported, <code>templates/import.html</code>:</p>

    <pre class="code"><code>yay! I was imported from {{name}}!!</code></pre>

    <p>The resulting web page will be:</p>

    <pre class="code"><code>&lt;!doctype html&gt;
&lt;HTML&gt;
&lt;HEAD&gt;
  &lt;META http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;TITLE&gt;Tutorial&lt;/TITLE&gt;
&lt;/HEAD&gt;
&lt;BODY&gt;
  &lt;H1&gt;Markuper Tutorial&lt;/H1&gt;
  &lt;DIV&gt;<strong>yay! I was imported from Template!!</strong>&lt;/DIV&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</code></pre>

    <p>You can <a href="importing_other_templates.zip">download the complete example 10 service code</a>.</p>

    <h2 id="filelist">List of Files</h2>
    <ul>
        <li><a href="bare_bones_service.zip" id="file1">Bare bones service with template library already included</a></li>
        <li><a href="my_first_template.zip" id="file2">My first template</a></li>
        <li><a href="using_javascript_variables_in_the_template.zip" id="file3">Using JavaScript Variables in the Template</a></li>
        <li><a href="html_into_text.zip" id="file4">Transforming HTML into text</a></li>
        <li><a href="listing_highlighted_code.zip" id="file5">Listing highlighted source code</a></li>
        <li><a href="adding_removing_html_elements.zip" id="file6">Adding / Removing HTML elements</a></li>
        <li><a href="iterating_through_objects.zip" id="file7">Iterating through arrays/objects</a></li>
        <li><a href="removing_unwanted_elements.zip" id="file8">Removing unwanted elements</a></li>
        <li><a href="importing_other_templates.zip" id="file9">Importing other templates</a></li>
        <li><a href="using_the_dom.zip" id="file10">The Markuper is DOM Based</a></li>
    </ul></p></p></p>
