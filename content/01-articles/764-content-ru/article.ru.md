Title: Элемент content
----
Date: 2012-08-28 09:25:49
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

<p>Элемент <code>&lt;content&gt;</code> используется для определения <a href="http://www.w3.org/TR/widgets/#custom-start-file">стартового файла</a> расширения. Он имеет следующие атрибуты.</p>

<ul>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-src-attribute">src</a></code>: Путь к файлу, который находится внутри пакета расширения и должен стать стартовым файлом расширения.</li>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-encoding-attribute">encoding</a></code>: Кодировка, используемая в стартовом файле, путь к которому указан в атрибуте <code>src</code>.</li>
</ul>
    
<h2>Пример</h2>
    
<pre><code>&lt;widget xmlns=&quot;http&#058;//www.w3.org/ns/widgets&quot;&gt;
  &lt;content src=&quot;index.xml&quot;
    encoding=&quot;utf-8&quot;
    type=&quot;application/xhtml+xml&quot;/&gt;
&lt;/widget&gt;</code></pre>

