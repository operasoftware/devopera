Title: Элемент preference
----
Date: 2012-08-28 15:21:15
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

<p><code>Элемент &lt;preference&gt;</code> позволяет разработчику установить необходимые настройки. Пары ключ-значение, определяемые элементом, устанавливаются в момент первого запуска расширения и затем постоянно хранятся в памяти. Во время работы расширения эти значения доступны скриптам на любой странице расширения в свойствах объекта <code>widget.preferences</code> (см. пример ниже).</p>

<p>Элемент имеет следующие атрибуты.</p>

<ul>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-name-attribute">name</a></code>: Указывает имя свойства.</li>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-value-attribute">value</a></code>: Указывает значение свойства.</li>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-readonly-attribute">readonly</a></code>: Определяет, может ли свойство принимать новое значение; для атрибута допустимы булевы значения &quot;true&quot; (указывает, что свойство предназначено только для чтения) или &quot;false&quot; (свойство для чтения и записи).</li>
</ul>

<h2>Пример</h2>

<p>Пример того, как определяется некое свойство и его значение:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;&gt;
  &lt;preference name     = &quot;api-key&quot;
    value    = &quot;abcd123456&quot;
    readonly = &quot;true&quot;/&gt;
&lt;/widget&gt;</code></pre>

<p>Затем в исполняемом коде:</p>

<pre><code>//
// background.js
//

// получить значение свойства, указанного в config.xml
var apiKey = widget.preferences[&quot;api-key&quot;];</code></pre>


