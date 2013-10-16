Title: Атрибут dir 
----
Date: 2012-08-29 04:09:59
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

<h2>Description</h2>

<p>Атрибут <code><a href="http://www.w3.org/TR/widgets/#the-dir-attribute">dir</a></code> задает направление текста элемента посредством одного из следующих допустимых значений:</p>

<ul>
    <li><code>&quot;ltr&quot;</code> направление слева направо</li>
    <li><code>&quot;rtl&quot;</code> направление справа налево</li>
    <li><code>&quot;lro&quot;</code> строго слева направо</li>
    <li><code>&quot;rlo&quot;</code> строго справа налево</li>
</ul>

<h2>Пример</h2>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/myExtension&quot; version=&quot;1.0&quot;&gt;
 ...
  &lt;span dir=&quot;rtl&quot;&gt;
    Text meant to be read from right to left can go here.
  &lt;/span&gt;
  ...
&lt;/widget&gt;</code></pre>

