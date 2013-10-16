Title: Элемент span 
----
Date: 2012-08-29 03:03:06
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

<p>Элемент <code>&lt;span&gt;</code> служит контейнером для какого-либо текста, и может быть полезен, например, в многоязычных расширениях. Иначе говоря, с помощью этого элемента с указанными ниже атрибутами можно выделить определенный фрагмент текста, задав иные язык и (или) направление.</p>
    
<ul>
    <li><code><a href="/articles/view/extensions-api-config-xml-lang-ru/">xml:lang</a></code> (см. также <a href="http://www.w3.org/TR/widgets/#the-xml:lang-attribute">W3C specification</a>)</li>
    <li><code><a href="/articles/view/extensions-api-config-dir-ru/">dir</a></code> (м. также <a href="http://www.w3.org/TR/widgets/#the-dir-attribute">W3C specification</a>)</li>
</ul>

<h2>Пример</h2>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/myExtension&quot; version=&quot;1.1&quot;&gt;
 ...
  &lt;span&gt;
    CHANGELOG
    Version 1.1: Added ability to travel through time.
  &lt;/span&gt;
  ...
&lt;/widget&gt;</code></pre>
