Title: Элемент widget
----
Date: 2012-08-28 02:05:40
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

<p><code>&lt;widget&gt;</code> — это элемент-контейнер, который заключает в себе все остальные элементы файла config.xml. С этим элементом связаны следующие атрибуты:</p>

<ul>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-id-attribute">id</a></code>: URL-адрес (в спецификации <a href="http://www.w3.org/TR/widgets/#iri-attribute">IRI</a>), индентифицирующий расширение.
        <ul>
            <li>Этот атрибут используется браузером для идентификации и автоматического обновления расширений.</li>
            <li>Когда расширение загружается в хранилище расширений Opera, <code>id</code> устанавливается автоматически.</li>
            <li>Разработчикам следует задавать атрибут <code>id</code> в процессе разработки, чтобы избежать создания нескольких копий расширения.</li>
        </ul>
    </li>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-version-attribute">version</a></code>: Указывает версию расширения.</li>
</ul>

<h2>Пример</h2>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/myExtension&quot; version=&quot;1.0&quot;&gt;
  ...
&lt;/widget&gt;</code></pre>
