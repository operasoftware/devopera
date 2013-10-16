Title: Persisting widget data across platforms and devices using Opera's XML store
----
Date: 2008-02-07 15:00:06
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
 <h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">16th December 2011: This article is obsolete</h2>

<p>This technology is obsolete: it is no longer supported and therefore shouldn&#39;t be used.</p>

 </div>

<h2>Introduction</h2>
<p>
Opera widgets often have the need to persist data - this is usually saved locally using <code>preferenceForkey</code> preferences. This works well, but it has the limitation that the data is only available to that single browser installation. To let widgets have access to the same data across different platforms and devices the idea of a simple <a href="http://en.wikipedia.org/wiki/REST">RESTful</a> XML store came to mind, and this thought motivated us to releasing the Opera XML Store, which does just that - persists widget data across different platforms and devices using XML, in a RESTful manner. This article gives you an introduction to using it in your widgets.
</p>

<p>Note that the Opera XML Store requires that you have a <a href="http://my.opera.com">My.Opera</a> username and password for authentication. If you are not already a member, please <a href="http://my.opera.com/community/signup/">sign up here</a>.</p>

<h2>Try it out for yourself</h2>
<p>
To get started, first try out some of our widgets that make use of the storage service:
</p>
<ul>
<li><a href="http://widgets.opera.com/widget/9032">Notes widget</a></li>
<li><a href="http://widgets.opera.com/widget/9042">Shopping list widget</a></li>
<li><a href="http://widgets.opera.com/widget/9082">Hello Opera XML Store</a></li>
</ul>
<p>
Your stored data is even available as plain HTML, and can be browsed in any browser. Go to the <a href="http://xmlstore.labs.opera.com">Opera XML Store</a> home page and click browse. You will be able to browse your own data as well as other users&#39; data if they have given you the permission to do so. Go to the <a href="http://xmlstore.labs.opera.com/help.jsp">XML Store help section</a> to find more details on how to make use of the XML Store, including technical reference, documentation, and more.
</p>

<p>
The data you store is validated against the <a href="http://xmlstore.labs.opera.com/help/datamodelinfo/">data models schema</a> and will not allow you to store malformed or invalid XML. As the data store cares about its format and doesn&#39;t just store any old chunks of text, you can perform <a href="http://www.w3.org/TR/xpath">XPath</a> operations against a data collection or a document, allowing you to extract just the data you need.
</p>

<h2>Resources</h2>
<ul>
<li><a href="http://xmlstore.labs.opera.com/">Opera XML Store homepage</a></li>
<li><a href="http://xmlstore.labs.opera.com/help.jsp">Opera XML Store help section</a></li>
</ul>
