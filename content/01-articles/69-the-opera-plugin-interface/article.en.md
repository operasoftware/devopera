Title: The Opera plug-in interface
----
Date: 2008-01-18 13:21:23
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

<p class="note">Note: This documentation applies to version 9.0 and later of Opera for desktop, mobile phones, and devices.</p>
<p class="note">If you&#39;re looking for information about Opera extensions (addons using JavaScript, CSS, etc.), here is our <a href="/addons/extensions/">Opera extensions documentation</a>.</p>

<h2>Table of contents:</h2>

<ul>
<li><a href="#introduction">Introduction</a></li>
<li><a href="#registrykey">MozillaPlugins registry key</a></li>
<li><a href="#security">Security model</a></li>
<li><a href="#plugin">What&#39;s in the plugin code?</a></li>
<li><a href="#browserobjects">Accessing browser objects from a plugin</a></li>
<li><a href="#script">How to call plugin native methods</a></li>
<li><a href="#API">The API extensions</a>
<ul>
<li><a href="#typedefs">Common typedefs</a></li>
<p>The properties covered below are as follows:</p>
<li><a href="#NPString">NPString</a></li>
<li><a href="#NPVariant">NPVariant</a></li>
<li><a href="#JS_type_mapping">JavaScript to NPVariant type mapping</a></li>
<li><a href="#NPN_ReleaseVariantValue">NPN_ReleaseVariantValue()</a></li>
<li><a href="#NPN_GetStringIdentifier">NPN_GetStringIdentifier()</a></li>
<li><a href="#NPN_GetStringIdentifiers">NPN_GetStringIdentifiers()</a></li>
<li><a href="#NPN_GetIntIdentifier">NPN_GetIntIdentifier()</a></li>
<li><a href="#NPN_IdentifierIsString">NPN_IdentifierIsString()</a></li>
<li><a href="#NPN_UTF8FromIdentifier">NPN_UTF8FromIdentifier()</a></li>
<li><a href="#NPN_IntFromIdentifier">NPN_IntFromIdentifier()</a></li>
<li><a href="#NPObject">NPObject</a></li>
<li><a href="#NPClass">NPClass</a></li>
<li><a href="#NPN_CreateObject">NPN_CreateObject()</a></li>
<li><a href="#NPN_RetainObject">NPN_RetainObject()</a></li>
<li><a href="#NPN_ReleaseObject">NPN_ReleaseObject()</a></li>
<li><a href="#NPN_Invoke">NPN_Invoke()</a></li>
<li><a href="#NPN_InvokeDefault">NPN_InvokeDefault()</a></li>
<li><a href="#NPN_Evaluate">NPN_Evaluate()</a></li>
<li><a href="#NPN_GetProperty">NPN_GetProperty()</a></li>
<li><a href="#NPN_SetProperty">NPN_SetProperty()</a></li>
<li><a href="#NPN_RemoveProperty">NPN_RemoveProperty()</a></li>
<li><a href="#NPN_HasProperty">NPN_HasProperty()</a></li>
<li><a href="#NPN_HasMethod">NPN_HasMethod()</a></li>
<li><a href="#NPN_SetException">NPN_SetException()</a></li>
</ul>

</li>
</ul>

<h3 id="introduction">Introduction</h3>

 <p>This document describes the new cross-browser NPAPI extensions that has been developed by a group of browser and plugin vendors, including <a href="http://www.opera.com/">Opera Software</a>, the <a href="http://www.mozilla.org/">Mozilla Foundation</a>, <a href="http://www.adobe.com/">Adobe</a>, <a href="http://www.apple.com/">Apple</a>, and <a href="http://www.sun.com/">Sun Microsystems</a>. This document also talks about how to make a plugin use these new extensions to be scriptable, and how to access objects in a browser.</p>


 <p>The new <code>NPPVariable</code> enumeration is defined in
 npapi.h as:</p>

 <pre class="code">
NPPVpluginScriptableNPObject = 15
</pre>

<h3 id="registrykey">MozillaPlugins registry key</h3>

<p>Note that Opera supports and encourages the MozillaPlugins registry key for plugins on Windows, use of which is described in this article covering <a href="https://developer.mozilla.org/En/Plugins:_The_first_install_problem">The First Install Problem</a>. You should read up on this and employ it in your plugins, as it is the preferred way plugin developers can make sure the vast majority of NPAPI browsers (Opera, Firefox and Safari all support it) pick up on their plugins. Employing a MozillaPlugins registry entry also ensures that browsers can detect your plugin in whatever location it is installed, avoiding the need for ugly hacks.</p>

<p>As an example, some plugins refuse to install unless they find a specific browser on the system, typically Firefox (many NPAPI plugins seem to be named &quot;Firefox plugins&quot;). This is a bad practice, and should be avoided - adding the registry key completely eliminates the need to do this kind of installer &quot;browser sniffing&quot;.</p>

 <h3 id="security">Security model</h3>

 <p>The security model for making calls through this API is much like the general same-origin security model enforced by the browser. That means that script from an origin other than the origin of the page that loaded the plugin is not able to access methods and properties on the plugin. The same thing applies the other way too, the plugin can reach only JavaScript objects in the same origin as the page that loaded the plugin.</p>

 <h3 id="plugin">What&#39;s in the plugin code?</h3>

 <p>A plugin that wishes to be scriptable using this new mechanism
 needs to return the appropriate <a href="#NPObject">NPObject</a>
 (which is created by calling <a href="#NPN_CreateObject"><code>NPN_CreateObject()</code></a>) when
 the browser requests it by calling:</p>

 <pre class="code">NPP_GetValue(npp, NPPVpluginScriptableNPObject, ...);</pre>

 <h3 id="browseraccess">Accessing browser objects from a
 plugin</h3>

 <p>A plugin that wishes to access objects in the browser window
 that loaded the plugin can do this by getting the <a href="#NPObject"><code>NPObject</code></a> for the browsers window
 object, or the DOM element that loaded the plugin. This is done by
 using an extension to <code>NPN_GetValue()</code>. The extensions
 are two additions to the <code>NPNVariables</code> enumeration,
 the new enumerations are <code>NPNVWindowNPObject</code> and
 <code>NPNVPluginElementNPObject</code>. By calling
 <code>NPN_GetValue()</code> with either of those new enumerations
 will return an <code>NPObject</code> representing the browser
 object, and from there, the functions in this API can be used to
 get and set properties, and to call methods on those browser
 objects.</p>

 <p>And as always when working with reference counted
 <code>NPObject</code>s, the caller is responsible for calling <a href="#NPN_ReleaseObject"><code>NPN_ReleaseObject()</code></a> on
 the <code>NPObject</code> to drop the reference.</p>

 <p>The new <code>NPNVariable</code> enumerations are defined in
 npapi.h as:</p>

 <pre class="code">
NPNVWindowNPObject = 15,
NPNVPluginElementNPObject = 16
</pre>

 <h3 id="script">How to call plugin native methods</h3>

 <p>The following HTML code will do the job:</p>

 <pre class="code">
&lt;embed type=&quot;application/plugin-mimetype&quot;&gt;
&lt;script language=&quot;javascript&quot;&gt;
var embed = document.embeds[0];
embed.nativeMethod();
alert(embed.nativeProperty);
embed.nativeProperty.anotherNativeMethod();
&lt;/script&gt;
</pre>

 <h3 id="API">The API extensions</h3>

 <p>The API extensions are based on four new structs, <a href="#NPString">NPString</a>, <a href="#NPVariant">NPVariant</a>,
 <a href="#NPObject">NPObject</a>, and <a href="#NPClass">NPClass</a>.</p>

 <h4 id="typedefs">Common typedefs</h4>

 <p id="NPUTF8">NPUTF8 is a byte representing an 8-bit
 unit of a UTF-8 character.</p>

 <pre class="code">
typedef char NPUTF8;
</pre>

 <p><code id="NPIdentifier">NPIdentifier</code> is an
 opaque type used for method and property identifiers, e.g. strings
 or integers. <code>NPIdentifier</code>s are unique, e.g. for any
 given string or integer, there is only one
 <code>NPIdentifier</code>. The lifetime of
 <code>NPIdentifier</code>s is controlled by the browser</p>

 <pre class="code">
typedef void *NPIdentifier;
</pre>

 <h4 id="NPString">NPString</h4>

 <p><a href="#NPString"><code>NPString</code></a> is a struct that
 holds a pointer to a sequence of 8-bit units (<a href="#NPUTF8"><code>NPUTF8</code></a>) making up a UTF-8 string,
 and the number of 8-bit units in the UTF-8 string.</p>

 <p>Whenever an <code>NPString</code> owns its string data and the
 data may be released through a call to
 <code>NPN_ReleaseVariantValue()</code>, the string data must be
 allocated using <code>NPN_MemAlloc()</code>.</p>

 <p>The struct is defined as follows:</p>

<pre class="code">typedef struct _NPString {
 const NPUTF8 *utf8characters;
 uint32_t utf8length;
} NPString;
</pre>

 <h4 id="NPVariant">NPVariant</h4>

 <p><a href="#NPVariant"><code>NPVariant</code></a> is a struct
 that holds a value and the type of that value. The value is held
 in a union, and the type is one of types defined in the
 <code>NPVariantType</code> enumeration.</p>

 <p>The <code>NPVariantType</code> enumeration and
 <code>NPVariant</code> struct is defined as follows:</p>

<pre class="code">typedef enum {
 NPVariantType_Void,
 NPVariantType_Null,
 NPVariantType_Bool,
 NPVariantType_Int32,
 NPVariantType_Double,
 NPVariantType_String,
 NPVariantType_Object
} NPVariantType;
</pre>

<pre class="code">typedef struct _NPVariant {
 NPVariantType type;
 union {
  bool boolValue;
  uint32_t intValue;
  double_t doubleValue;
  NPString stringValue;
  NPObject *objectValue;
 } value;
} NPVariant;
</pre>

 <p>Plugin developers are not expected to directly manipulate or
 access the members of the <a href="#NPVariant"><code>NPVariant</code></a> instance, instead,
 the function <a href="#NPN_ReleaseVariantValue"><code>NPN_ReleaseVariantValue()</code></a>,
 and the following macros are provided:</p>

 <table class="data">
 <tr>
   <td><code>NPVARIANT_IS_VOID(v)</code></td>

   <td>Evaluates to <code>true</code> if <code>v</code> is of type
   <code>NPVariantType_Void</code>.</td>

 </tr>
 <tr>
   <td><code>NPVARIANT_IS_NULL(v)</code></td>

   <td>Evaluates to <code>true</code> if <code>v</code> is of type
   <code>NPVariantType_Null</code>.</td>

 </tr>
 <tr>
   <td><code>NPVARIANT_IS_BOOLEAN(v)</code></td>

   <td>Evaluates to <code>true</code> if <code>v</code> is of type
   <code>NPVariantType_Bool</code>.</td>

 </tr>
 <tr>
   <td><code>NPVARIANT_IS_INT32(v)</code></td>

   <td>Evaluates to <code>true</code> if <code>v</code> is of type
   <code>NPVariantType_Int32</code>.</td>

 </tr>
 <tr>
   <td><code>NPVARIANT_IS_DOUBLE(v)</code></td>

   <td>Evaluates to <code>true</code> if <code>v</code> is of type
   <code>NPVariantType_Double</code>.</td>

 </tr>
 <tr>
   <td><code>NPVARIANT_IS_STRING(v)</code></td>

   <td>Evaluates to <code>true</code> if <code>v</code> is of type
   <code>NPVariantType_String</code>.</td>

 </tr>
 <tr>
   <td><code>NPVARIANT_IS_OBJECT(v)</code></td>

   <td>Evaluates to <code>true</code> if <code>v</code> is of type
   <code>NPVariantType_Object</code>.</td>

 </tr>
 <tr>
   <td><code>NPVARIANT_TO_BOOLEAN(v)</code></td>

   <td>Extracts the boolean value from <code>v</code>.</td>
 </tr>
 <tr>
   <td><code>NPVARIANT_TO_INT32(v)</code></td>

   <td>Extracts a signed 32-bit integer value from
   <code>v</code>.</td>

 </tr>
 <tr>
   <td><code>NPVARIANT_TO_DOUBLE(v)</code></td>

   <td>Extracts a double precision floating point value from
   <code>v</code>.</td>

 </tr>
 <tr>
   <td><code>NPVARIANT_TO_STRING(v)</code></td>

   <td>Extracts the <a href="#NPString"><code>NPString</code></a>
   value from <code>v</code>.</td>

 </tr>
 <tr>
   <td><code>NPVARIANT_TO_OBJECT(v)</code></td>

   <td>Extracts the <a href="#NPObject"><code>NPObject</code></a>
   value from <code>v</code>.</td>

 </tr>
 <tr>
   <td><code>VOID_TO_NPVARIANT(v)</code></td>

   <td>Initialize <code>v</code> to a variant of type
   <code>NPVariantType_Void</code>.</td>

 </tr>
 <tr>
   <td><code>NULL_TO_NPVARIANT(v)</code></td>

   <td>Initialize <code>v</code> to a variant of type
   <code>NPVariantType_Null</code>.</td>

 </tr>
 <tr>
   <td><code>BOOLEAN_TO_NPVARIANT(val, v)</code></td>

   <td>Initialize <code>v</code> to a variant of type
   <code>NPVariantType_Bool</code> with the value
   <code>val</code>.</td>

 </tr>
 <tr>
   <td><code>INT32_TO_NPVARIANT(val, v)</code></td>

   <td>Initialize <code>v</code> to a variant of type
   <code>NPVariantType_Int32</code> with the value
   <code>val</code>.</td>

 </tr>
 <tr>
   <td><code>DOUBLE_TO_NPVARIANT(val, v)</code></td>

   <td>Initialize <code>v</code> to a variant of type
   <code>NPVariantType_Double</code> with the value
   <code>val</code>.</td>

 </tr>
 <tr>
   <td><code>STRINGZ_TO_NPVARIANT(val, v)</code></td>

   <td>Initialize <code>v</code> to a variant of type
   <code>NPVariantType_String</code> with the value being an <a href="#NPString"><code>NPString</code></a> holding the UTF-8
   string value <code>val</code>.</td>

 </tr>
 <tr>
   <td><code>STRINGN_TO_NPVARIANT(val, len, v)</code></td>

   <td>Initialize <code>v</code> to a variant of type
   <code>NPVariantType_String</code> with the value being an <a href="#NPString"><code>NPString</code></a> holding the UTF-8
   string value <code>val</code> with the length
   <code>len</code>.</td>

 </tr>
 <tr>
   <td><code>OBJECT_TO_NPVARIANT(val, v)</code></td>

   <td>Initialize <code>v</code> to a variant of type
   <code>NPVariantType_Object</code> with the value
   <code>val</code>.</td>

 </tr>
 </table>

 <h4 id="JS_type_mapping">JavaScript type to NPVariantType
 enumeration mapping</h4>

 <p>When using <a href="#NPVariant"><code>NPVariant</code>s</a> to
 access JavaScript objects in the browser, or vise versa, the
 mapping of JavaScript values to <a href="#NPVariant"><code>NPVariant</code></a>s is as follows:</p>

 <table class="data">
 <thead>
   <tr>
  <th scope="col">JavaScript types</th>
  <th scope="col">NPVariantType</th>
   </tr>
 </thead>
 <tbody>
 <tr>
   <td><code>undefined</code></td>
   <td><code>NPVariantType_Void</code></td>
 </tr>

 <tr>
   <td><code>null</code></td>
   <td><code>NPVariantType_Null</code></td>
 </tr>
 <tr>
   <td><code>boolean</code></td>
   <td><code>NPVariantType_Bool</code></td>
 </tr>
 <tr>
   <td><code>number</code></td>

   <td><code>NPVariantType_Int32</code> or
   <code>NPVariantType_Double</code></td>

 </tr>
 <tr>
   <td><code>string</code></td>

   <td><code>NPVariantType_String</code></td>

 </tr>
 <tr>
   <td>All other JavaScript types</td>

   <td><code>NPVariantType_Object</code></td>

 </tr>
</tbody>
 </table>

 <h4 id="NPN_ReleaseVariantValue">NPN_ReleaseVariantValue()</h4>

 <p><code>NPN_ReleaseVariantValue</code> releases the value in the
 given variant. This must always be called on result variants and
 such in this API, i.e. any <code>NPVariant</code> whose value
 comes from a call that passes back an <code>NPVariant</code> must
 be released using this function. Access to the value in an
 <code>NPVariant</code> that has been released will result in
 undefined behavior.</p>

 <p><code>NPN_ReleaseVariantValue()</code> will call
 <code>NPN_ReleaseObject()</code> on <code>NPVariant</code>s of
 type <code>NPVARIANTTYPE_OBJECT</code>, and
 <code>NPN_FreeMem()</code> on <code>NPVariant</code>s of type
 <code>NPVARIANTTYPE_STRING</code>.</p>

 <p><code>NPN_ReleaseVariantValue()</code> is defined as follows:</p>

<pre class="code">void NPN_ReleaseVariantValue(NPVariant *variant);
</pre>

 <h4 id="NPN_GetStringIdentifier">NPN_GetStringIdentifier()</h4>

 <p><code>NPN_GetStringIdentifier</code> returns an opaque
 identifier for the string that is passed in. All calls for the
 same string are guaranteed to return the same exact identifier.</p>

 <p><code>NPN_GetStringIdentifier()</code> is defined as follows:</p>

<pre class="code">NPIdentifier NPN_GetStringIdentifier(const NPUTF8 *name);
</pre>

 <h4 id="NPN_GetStringIdentifiers">NPN_GetStringIdentifiers()</h4>

 <p><code>NPN_GetStringIdentifiers</code> returns (through the
 identifiers out param) an array of opaque identifiers for the
 names that are passed in. Just like with <a href="#NPN_GetStringIdentifier"><code>NPN_GetStringIdentifier()</code></a>,
 all calls for the same strings are guaranteed to return the same
 exact identifiers.</p>

 <p><code>NPN_GetStringIdentifiers()</code> is defined as follows:</p>

 <pre class="code">void NPN_GetStringIdentifiers(const NPUTF8 **names, int32_t nameCount,
         NPIdentifier *identifiers);</pre>

 <h4 id="NPN_GetIntIdentifier">NPN_GetIntIdentifier()</h4>

 <p><code>NPN_GetIntIdentifier</code> returns an opaque identifiers
 for the integer that is passed in. Just like with <a href="#NPN_GetStringIdentifier"><code>NPN_GetStringIdentifier()</code></a>
 all calls for the same integer are guaranteed to return the
 same exact identifier.</p>

 <p><code>NPN_GetIntIdentifier()</code> is defined as follows:</p>

 <pre class="code">NPIdentifier NPN_GetIntIdentifier(int32_t intid);</pre>

 <h4 id="NPN_IdentifierIsString">NPN_IdentifierIsString()</h4>

 <p><code>NPN_IdentifierIsString</code> returns <code>true</code>
 if the given identifier is a string identifier, or
 <code>false</code> if it is an integer identifier.</p>

 <p><code>NPN_IdentifierIsString()</code> is defined as follows:</p>

 <pre class="code">bool NPN_IdentifierIsString(NPIdentifier *identifier);</pre>

 <h4 id="NPN_UTF8FromIdentifier">NPN_UTF8FromIdentifier()</h4>

 <p><code>NPN_UTF8FromIdentifier</code> returns a pointer to a
 UTF-8 string as a sequence of 8-bit units (<a href="#NPUTF8"><code>NPUTF8</code></a>), or NULL if the given
 identifier is not a string identifier. Once the caller is
 done with the returned string, the caller is responsible for
 deallocating the memory used by the string by calling
 <code>NPN_MemFree()</code>).</p>

 <p><code>NPN_UTF8FromIdentifier()</code> is defined as follows:</p>

 <pre class="code">NPUTF8 *NPN_UTF8FromIdentifier(NPIdentifier identifier);</pre>

 <h4 id="NPN_IntFromIdentifier">NPN_IntFromIdentifier()</h4>

 <p><code>NPN_IntFromIdentifier</code> returns the integer value
 for the given integer identifier. If the given identifier is not a
 integer identifier, the behavior is undefined.</p>

 <p><code>NPN_IntFromIdentifier()</code> is defined as follows:</p>

 <pre class="code">int32_t NPN_IntFromIdentifier(NPIdentifier identifier);</pre>

 <h4 id="NPObject">NPObject</h4>

 <p><code>NPObject</code> is a struct that holds a pointer to an <a href="#NPClass"><code>NPClass</code></a> and an integer reference
 count, and possibly also implementation specific (i.e. plugin
 specific, or browser specific) members after or before the struct
 as defined here. <code>NPObject</code> is the type used to express
 objects exposed by either the plugin or by the browser through
 this API. The browsers are expected to expose their window objects
 and everything reachable from it through this
 API. <code>NPObject</code>s are reference counted objects, so
 callers need to be aware and properly release acquired references
 to <code>NPObject</code>s. To aid with the reference counting and
 ownership management in general, the functions <a href="#NPN_CreateObject"><code>NPN_CreateObject()</code></a>, <a href="#NPN_RetainObject"><code>NPN_RetainObject()</code></a>, <a href="#NPN_ReleaseObject"><code>NPN_ReleaseObject()</code></a>,
 and <a href="#NPN_ReleaseVariantValue"><code>NPN_ReleaseVariantValue()</code></a>
 are provided as part of this API.</p>

 <p><code>NPObject</code> behavior is implemented using the set of
 callback functions defined in <a href="#NPClass"><code>NPClass</code></a>.</p>

 <p>The <code>NPObject</code> struct is defined as follows:</p>

 <pre class="code">struct NPObject {
   NPClass *_class;
   uint32_t referenceCount;
 /*
  * Additional space may be allocated here by types of NPObjects
  */
};
</pre>

 <h4 id="NPClass">NPClass</h4>

 <p><code>NPClass</code> is a struct that holds a set of pointers to
 functions that make up the behavior of an instance of an
 <code>NPClass</code> (i.e. an <a href="#NPObject"><code>NPObject</code></a>).</p>

 <p><code>NPClass</code> contains the following function
 pointers:</p>

 <table class="data">
 <thead>
   <tr>
  <th scope="col">Name</th>
  <th scope="col">Description</th>
  <th scope="col">Return value</th>
   </tr>
 </thead>
 <tr>
   <td><code>allocate</code></td>

   <td>
  Called by <a href="#NPN_CreateObject"><code>NPN_CreateObject()</code></a>
  if non-NULL, else <code>malloc()</code> is called by the
  browser. This function is expected to allocate and return
  enough storage to hold the <a href="#NPObject"><code>NPObject</code></a> that is being
  created.
   </td>

   <td>
  A pointer to the newly allocated <a href="#NPObject"><code>NPObject</code></a>.
   </td>

 </tr>
 <tr>
   <td><code>deallocate</code></td>

   <td>
  Called by <a href="#NPN_ReleaseObject"><code>NPN_ReleaseObject()</code></a>
  if non-NULL, else <code>free()</code> is called when an
  objects reference count goes to zero.
   </td>

   <td>
  N/A
   </td>

 </tr>
 <tr>
   <td><code>invalidate</code></td>

   <td>
  Called on live objects that belong to a plugin instance that
  is being destroyed. This call is always followed by a call to
  deallocate, or <code>free()</code>. Any attempt to use an
  invalidated object will result in undefined behavior.
   </td>

   <td>
  N/A
   </td>

 </tr>
 <tr>
   <td><code>hasMethod</code></td>

   <td>
  Called by <a href="#NPN_HasMethod"><code>NPN_HasMethod()</code></a> to
  check whether a given method exists or not on a given <a href="#NPObject"><code>NPObject</code></a>.
   </td>

   <td>
  <code>true</code> if the method exists on the <a href="#NPObject"><code>NPObject</code></a>, else
  <code>false</code>.
   </td>

 </tr>
 <tr>
   <td><code>invoke</code></td>

   <td>
  Called by <a href="#NPN_Invoke"><code>NPN_Invoke()</code></a> to
  invoke a specific method on a given <a href="#NPObject"><code>NPObject</code></a>.
   </td>

   <td>
  <code>true</code> if the method invocation was successful,
  <code>false</code> in case an error occurred.
   </td>

 </tr>
 <tr>
   <td><code>invokeDefault</code></td>

   <td>
  Called by <a href="#NPN_InvokeDefault"><code>NPN_InvokeDefault()</code></a>
  to invoke the default method, if available, on a given <a href="#NPObject"><code>NPObject</code></a>.
   </td>

   <td>
  <code>true</code> if the method invocation was successful,
  <code>false</code> in case an error occurred.
   </td>

 </tr>
 <tr>
   <td><code>hasProperty</code></td>

   <td>
  Called by <a href="#NPN_HasProperty"><code>NPN_HasProperty()</code></a> to
  check whether a given property exists or not on a given <a href="#NPObject"><code>NPObject</code></a>.
 </td>

   <td>
  <code>true</code> if the property exists on the <a href="#NPObject"><code>NPObject</code></a>, else
  <code>false</code>.
   </td>

 </tr>
 <tr>
   <td><code>getProperty</code></td>

   <td>
  Called by <a href="#NPN_GetProperty"><code>NPN_GetProperty()</code></a> to
  get the value of a given property on a given <a href="#NPObject"><code>NPObject</code></a>.
   </td>

   <td>
  <code>true</code> if the method exists on the <a href="#NPObject"><code>NPObject</code></a>, else
  <code>false</code>.
   </td>

 </tr>
 <tr>
   <td><code>setProperty</code></td>

   <td>
  Called by <a href="#NPN_SetProperty"><code>NPN_SetProperty()</code></a> to
  set the value of a given property on a given <a href="#NPObject"><code>NPObject</code></a>.
   </td>

   <td>
  <code>true</code> if the property was set <a href="#NPObject"><code>NPObject</code></a>, else
  <code>false</code>.
   </td>

 </tr>
 <tr>
   <td><code>removeProperty</code></td>

   <td>
  Called by <a href="#NPN_RemoveProperty"><code>NPN_RemoveProperty()</code></a>
  to remove a given property on a given <a href="#NPObject"><code>NPObject</code></a>.
   </td>

   <td>
  <code>true</code> if the property was removed from the <a href="#NPObject"><code>NPObject</code></a>, else
  <code>false</code>.
   </td>

 </tr>
  </table>

  <p>The function pointer types are defined as follows:</p>

<pre class="code">typedef NPObject *(*NPAllocateFunctionPtr)(NPP npp, NPClass *aClass);
typedef void (*NPDeallocateFunctionPtr)(NPObject *npobj);
typedef void (*NPInvalidateFunctionPtr)(NPObject *npobj);
typedef bool (*NPHasMethodFunctionPtr)(NPObject *npobj, NPIdentifier name);
typedef bool (*NPInvokeFunctionPtr)(NPObject *npobj, NPIdentifier name,
         const NPVariant *args, uint32_t argCount,
         NPVariant *result);
typedef bool (*NPInvokeDefaultFunctionPtr)(NPObject *npobj,
             const NPVariant *args,
             uint32_t argCount,
             NPVariant *result);
typedef bool (*NPHasPropertyFunctionPtr)(NPObject *npobj, NPIdentifier name);
typedef bool (*NPGetPropertyFunctionPtr)(NPObject *npobj, NPIdentifier name,
           NPVariant *result);
typedef bool (*NPSetPropertyFunctionPtr)(NPObject *npobj, NPIdentifier name,
           const NPVariant *value);
typedef bool (*NPRemovePropertyFunctionPtr)(NPObject *npobj,
           NPIdentifier name);
</pre>

 <p>The <code>NPClass</code> struct is defined as follows:</p>

<pre class="code">struct NPClass
{
 uint32_t structVersion;
 NPAllocateFunctionPtr allocate;
 NPDeallocateFunctionPtr deallocate;
 NPInvalidateFunctionPtr invalidate;
 NPHasMethodFunctionPtr hasMethod;
 NPInvokeFunctionPtr invoke;
 NPInvokeDefaultFunctionPtr invokeDefault;
 NPHasPropertyFunctionPtr hasProperty;
 NPGetPropertyFunctionPtr getProperty;
 NPSetPropertyFunctionPtr setProperty;
 NPRemovePropertyFunctionPtr removeProperty;
};
</pre>

 <p><code>structVersion</code> holds the version
 (<code>NP_CLASS_STRUCT_VERSION</code>) of the
 <code>NPClass</code>. At the time of this writing the version is
 1.</p>


 <h4 id="NPN_CreateObject">NPN_CreateObject()</h4>

 <p><code>NPN_CreateObject</code> allocates a new
 <code>NPObject</code>. If the given <code>NPClass</code> provides
 an <code>allocate</code> function it is used allocate the storage
 for the object and the NPP argument passed to
 <code>NPN_CreateObject()</code> is passed along to the
 <code>allocate</code> function. If no <code>allocate</code>
 function is provided, <code>malloc()</code> is called to allocate
 enough memory to hold an <code>NPObject</code>. The newly created
 <code>NPObject</code>s reference count is initialized to 1 before
 it is returned.</p>

 <p>The <code>NPN_CreateObject()</code> function is defined as
 follows:</p>

 <pre class="code">NPObject *NPN_CreateObject(NPP npp, NPClass *aClass);</pre>

 <h4 id="NPN_RetainObject">NPN_RetainObject()</h4>

 <p><code>NPN_RetainObject</code> increments the reference count of
 the given <code>NPObject</code>.</p>

 <p>The <code>NPN_RetainObject()</code> function is defined as
 follows:</p>

 <pre class="code">NPObject *NPN_RetainObject(NPObject *npobj);</pre>

 <h4 id="NPN_ReleaseObject">NPN_ReleaseObject()</h4>

 <p><code>NPN_ReleaseObject</code> decrements the reference count
 of the given <code>NPObject</code>. If the reference count reaches
 0, the <code>NPObject</code> is deallocated using the
 <code>deallocate</code> function, if provided, or
 <code>free()</code>.</p>

 <p>The <code>NPN_ReleaseObject()</code> function is defined as
 follows:</p>

 <pre class="code">void NPN_ReleaseObject(NPObject *npobj);</pre>

 <h4 id="NPN_Invoke">NPN_Invoke()</h4>

 <p><code>NPN_Invoke</code> invokes a method on the given
 <code>NPObject</code>. The method arguments are passed as an array
 of <code>NPVariant</code>s, and the number of arguments is passed
 in. The result of the method invocation is returned through an
 <code>NPVariant</code> result parameter. If the method invocation
 succeeds, <code>NPN_Invoke()</code> returns <code>true</code>, else
 <code>false</code>. When called by a plugin instance, the plugin
 instance must be passed as the <code>npp</code> argument.</p>

 <p>Callers must call <a href="#NPN_ReleaseVariantValue"><code>NPN_ReleaseVariantValue()</code></a>
 on the result to release the result.</p>

 <p>The <code>NPN_Invoke()</code> function is defined as
 follows:</p>

 <pre class="code">bool NPN_Invoke(NPP npp, NPObject *npobj, NPIdentifier methodName,
    const NPVariant *args, uint32_t argCount, NPVariant *result);</pre>

 <p style="color: red; font-style: italic;">Note: This method used
 to be called <code>NPN_Call()</code> in earlier revisions of this
 API but was renamed to <code>NPN_Invoke()</code> to be more
 consistently named.</p>

 <h4 id="NPN_InvokeDefault">NPN_InvokeDefault()</h4>

 <p><code>NPN_InvokeDefault</code> invokes the default method, if
 available, on the given <code>NPObject</code>. The arguments are
 passed as an array of <code>NPVariant</code>s, and the number of
 arguments is passed in. The result of the default method
 invocation is returned through an <code>NPVariant</code> result
 parameter. If the method invocation succeeds,
 <code>NPN_InvokeDefault()</code> returns <code>true</code>, else
 <code>false</code>. When called by a plugin instance, the plugin
 instance must be passed as the <code>npp</code> argument.</p>

 <p>Callers must call <a href="#NPN_ReleaseVariantValue"><code>NPN_ReleaseVariantValue()</code></a>
 on the result to release the result.</p>

 <p>If <code>NPN_InvokeDefault()</code> is called on an
 <code>NPObject</code> that is a wrapper for a callable JavaScript
 object, the JavaScript object is called. In this case the scope
 and &#39;this&#39; of the JavaScript function call is set to the
 JavaScript object wrapped by the <code>NPObject</code>.</p>

 <p>The <code>NPN_InvokeDefault()</code> function is defined as
 follows:</p>

 <pre class="code">bool NPN_InvokeDefault(NPP npp, NPObject *npobj, NPIdentifier methodName,
        const NPVariant *args, uint32_t argCount, NPVariant *result);</pre>

 <h4 id="NPN_Evaluate">NPN_Evaluate()</h4>

 <p><code>NPN_Evaluate</code> evaluate evaluates a script on the
 scope of a given <code>NPObject</code>. The script is evaluated in
 the context of the window that the calling plugin instance (the
 <code>NPP</code> argument) is loaded in.
 <code>NPN_Evaluate()</code> returns <code>true</code> if the
 script was evaluated successfully, else <code>false</code>.</p>

 <p>Callers must call <a href="#NPN_ReleaseVariantValue"><code>NPN_ReleaseVariantValue()</code></a>
 on the result to release the result.</p>

 <p>The <code>NPN_Evaluate()</code> function is defined as
 follows:</p>

 <pre class="code">bool NPN_Evaluate(NPP npp, NPObject *npobj, NPString *script,
      NPVariant *result);</pre>

 <h4 id="NPN_GetProperty">NPN_GetProperty()</h4>

 <p><code>NPN_GetProperty</code> gets the value of a property on
 the given <code>NPObject</code>. The property is identified with
 an <a href="#NPIdentifier"><code>NPIdentifier</code></a> and the
 value is returned in the result parameter. When called by a plugin
 instance, the plugin instance must be passed as the
 <code>npp</code> argument.</p>

 <p>Callers must call <a href="#NPN_ReleaseVariantValue"><code>NPN_ReleaseVariantValue()</code></a>
 on the result to release the result.</p>

 <p>The <code>NPN_GetProperty()</code> function is defined as
 follows:</p>

 <pre class="code">bool NPN_GetProperty(NPP npp, NPObject *npobj, NPIdentifier propertyName,
      NPVariant *result);</pre>

 <h4 id="NPN_SetProperty">NPN_SetProperty()</h4>

 <p><code>NPN_SetProperty</code> sets the value of a property on
 the given <code>NPObject</code>. The property is identified with
 an <a href="#NPIdentifier"><code>NPIdentifier</code></a>.
 <code>NPN_SetProperty</code> returns <code>true</code> if the
 property was successfully set, else <code>false</code>. When
 called by a plugin instance, the plugin instance must be passed as
 the <code>npp</code> argument.</p>

 <p>The <code>NPN_SetProperty()</code> function is defined as
 follows:</p>

 <pre class="code">bool NPN_SetProperty(NPP npp, NPObject *npobj, NPIdentifier propertyName,
      const NPVariant *value);</pre>

 <h4 id="NPN_RemoveProperty">NPN_RemoveProperty()</h4>

 <p><code>NPN_RemoveProperty</code> removes a property from the
 given <code>NPObject</code>. The property is identified with an <a href="#NPIdentifier"><code>NPIdentifier</code></a>.
 <code>NPN_RemoveProperty</code> returns <code>true</code> if the
 property was successfully removed, else <code>false</code>. When
 called by a plugin instance, the plugin instance must be passed as
 the <code>npp</code> argument.</p>

 <p>The <code>NPN_ReleaseObject()</code> function is defined as
 follows:</p>

 <pre class="code">bool NPN_RemoveProperty(NPP npp, NPObject *npobj, NPIdentifier propertyName);</pre>

 <h4 id="NPN_HasProperty">NPN_HasProperty()</h4>

 <p><code>NPN_HasProperty</code> checks if a given property exists
 on the given <code>NPObject</code>. <code>NPN_HasProperty</code>
 returns <code>true</code> if the property exists, else
 <code>false</code>. When called by a plugin instance, the plugin
 instance must be passed as the <code>npp</code> argument.</p>

 <p>The <code>NPN_HasProperty()</code> function is defined as
 follows:</p>

 <pre class="code">bool NPN_HasProperty(NPP npp, NPObject *npobj, NPIdentifier propertyName);</pre>

 <h4 id="NPN_HasMethod">NPN_HasMethod()</h4>

 <p><code>NPN_HasMethod</code> checks if a given method exis/codets on
 the given <code>NPObject</code>. <code>NPN_HasMethod</code>
 returns <code>true</code> if the method exists, else
 <code>false</code>. When called by a plugin instance, the plugin
 instance must be passed as the <code>npp</code> argument.</p>

 <p>The <code>NPN_HasMethod()</code> function is defined as
 follows:</p>

 <pre class="code">bool NPN_HasMethod(NPP npp, NPObject *npobj, NPIdentifier methodName);</pre>

 <h4 id="NPN_SetException">NPN_SetException()</h4>

 <p><code>NPN_SetException</code> can be called by a plugin to
 indicate that a call to one of the plugins <code>NPObject</code>s
 generated an error.</p>

 <p>The <code>NPN_SetException()</code> function is defined as
 follows:</p>

 <pre class="code">void NPN_SetException(NPObject *npobj, const NPUTF8 *message);</pre>

<h2>Implementation Notes</h2>

<p>This cross-browser NPAPI extension mechanism has been developed in cooperation by a group of browser and plugin vendors. This means that it should be possible to produce a plug-in working in all browsers supporting it following this specification.</p>

<p>This article is based on <a href="http://www.mozilla.org/projects/plugins/npruntime.html"> the Mozilla.org documentation</a>, written by Johnny Stenback. </p>

<h2 id="readmore">Read more...</h2>
<ul>
  <li><a href="/articles/view/64-bit-opera-and-out-of-process-plug-ins/">64-bit Opera, and out-of-process plug-ins</a></li>
</ul>
