Title: Элемент access
----
Date: 2012-08-28 17:30:47
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

<p>Элемент <code>&lt;access&gt;</code> позволяет авторам дать расширению доступ к внешним сетевым ресурсам. Если в процессе выполнения программе необходимо обратиться к каким-либо ресурсам вне пакета расширения (к веб-ресурсам), то в данном элементе указывается адрес нужного ресурса. Когда расширению требуется <a href="http://dev.opera.com/articles/view/cookie-sharing-in-opera-extensions/">использовать одни и те же файлы cookies</a> внутри какого-либо домена, тогда этот адрес (или несколько адресов) следует явно указать в элементе (либо нескольких элементах) <code>&lt;access&gt;</code>. Элемент имеет следующие атрибуты.</p>

<ul>
    <li><code><a href="http://www.w3.org/TR/widgets-access/#attributes/">origin</a></code>: Указывает адрес домена, к которому расширение адресует запрос; используя звездочку (*) вместо адреса, расширение получит доступ к любым сетевым ресурсам.</li>
    <li><code><a href="http://www.w3.org/TR/widgets-access/#attributes">subdomains</a></code>: Определяет сможет ли расширение обращаться к субдоменам; используются булевы значения &quot;true&quot; или &quot;false&quot;; по умолчанию, если атрибут на задан, применяется значение &quot;false&quot;.</li>
</ul>

<h2>Примеры</h2>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/myExtension&quot; version=&quot;1.0&quot;&gt;
 ...
   &lt;access origin=&quot;https://example.com&quot;/&gt;
 ...
&lt;/widget&gt;</code></pre>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/myExtension&quot; version=&quot;1.0&quot;&gt;
 ...
  &lt;access origin=&quot;https://example.com&quot; subdomains=&quot;true&quot; /&gt;
 ...
&lt;/widget&gt;</code></pre>

