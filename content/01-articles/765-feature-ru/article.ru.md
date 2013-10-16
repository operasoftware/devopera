Title: Элемент feature
----
Date: 2012-08-28 14:22:13
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

<p>Элемент <code>&lt;feature&gt;</code> определяет некоторые свойства расширения, такие как, например, возможность отображения в Экспресс-панели.</p>

<p>С этим элементом связаны следующие атрибуты:</p>

<ul>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-name-attribute">name</a></code>: обязательный атрибут, определяющий какое именно свойство требуется расширению (см. ниже)</li>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-required-attribute">required</a></code>: является атрибутом булевого типа, поэтому тут допустимы только два значения: <code>true</code> или <code>false</code>. Значение <code>true</code> говорит о том, что указанное свойство безусловно необходимо для правильной работы расширения. Данный атрибут необязателен, по умолчанию будет установлено значение <code>true</code>.</li>
</ul>

<p>В настоящее время в расширениях браузера Opera доступно два таких свойства:</p>

<ul>
    <li><code><a href="http://www.opera.com/docs/apis/extensions/speeddialguide/">opera:speeddial</a></code>: позволяет расширению отображаться в Экспресс-панели.</li>
    <li><code><a href="http://dev.opera.com/articles/view/cookie-sharing-in-opera-extensions/">opera:share-cookies</a></code>: благодаря этому свойству пользователям, ранее зарегистрированным на сайте, к которому подключается расширение, не придется регистрироваться снова.</li>
</ul>

<h2>Пример</h2>

<p>Ниже показан пример расширения, использующего оба доступных свойства <code>opera:share-cookies</code> и <code>opera:speeddial</code> для отображения новых сообщений в учетной записи пользователя на my.opera.com:</p>

<pre><code>&lt;?xml version=&#39;1.0&#39; encoding=&#39;utf-8&#39;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; version=&quot;1&quot; viewmodes=&quot;minimized&quot; id=&quot;http://my.opera.com/someblog&quot;&gt;

  &lt;name&gt;Show recently received messages&lt;/name&gt;
	
  &lt;description xml:lang=&quot;en&quot;&gt;Receive timely updates of your message activity on My Opera&lt;/description&gt;
  &lt;author&gt;John Smith&lt;/author&gt;
  &lt;icon src=&quot;images/icon.64x64.png&quot;/&gt;
  
  &lt;access origin=&quot;http://my.opera.com&quot; subdomains=&quot;true&quot;/&gt;

  &lt;feature name=&quot;opera:share-cookies&quot; required=&quot;false&quot;/&gt;
  
  &lt;feature name=&quot;opera:speeddial&quot; required=&quot;true&quot;&gt;
    &lt;param name=&quot;url&quot; value=&quot;http://my.opera.com&quot;/&gt;
  &lt;/feature&gt;
  
&lt;/widget&gt;</code></pre>
