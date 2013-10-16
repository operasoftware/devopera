Title: Элемент author
----
Date: 2012-08-28 06:15:12
----
Lang: ru
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2>Описание</h2>

<p>Элемент <code>&lt;author&gt;</code> используется для предоставления информации, касающейся автора расширения. Ниже даны атрибуты этого элемента:</p>

<ul>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-href-attribute">href</a></code>: Указывает сетевой ресурс, имеющий отношение к автору (веб-сайт, страница в социальной сети и т.п.).</li>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-email-attribute">email</a></code>: Указывает адрес электронной почты автора.</li>
</ul>

<h2>Пример</h2>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/myExtension&quot; version=&quot;1.0&quot;&gt;
  ...
  &lt;author href=&quot;http://example.com/erik&quot; email=&quot;erik@example.com&quot;&gt;
    Erik the Viking
  &lt;/author&gt;
  ...
&lt;/widget&gt;</code></pre>
