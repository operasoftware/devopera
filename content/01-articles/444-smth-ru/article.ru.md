Title: Выделите свой сайт в Экспресс-панели
----
Date: 2011-04-07 14:52:37
----
Lang: ru
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<h2>Table of Contents</h2>

<ul>
	<li><a href="#intro">Введение</a></li>
	<li>
		<a href="#uselogo">Логотип</a>
		<ul>
			<li><a href="#html5icons">Значки в HTML5</a></li>
			<li><a href="#setanicon">Объявление значка для Экспресс-панели</a></li>
			<li><a href="#multipleicons">Использование нескольких значков</a></li>
		</ul>
	</li>
	<li>
		<a href="#content">Экспресс-панель с учетом содержимого</a>
		<ul>
			<li><a href="#viewmode">Использование <code>view-mode:minimized</code></a></li>
			<li><a href="#with-x-purpose">Использование HTTP-заголовка <code>X-Purpose</code></a></li>
			<li><a href="#preview-refresh">Автообновление через определенный интервал</a></li>
		</ul>
	</li>
	<li><a href="#sdpriority">Система приоритетов</a></li>
	<li><a href="#productsupport">Поддержка в продуктах Opera</a></li>
</ul>

<h2 id="intro">Введение</h2>

<p>Настольная версия браузера Opera, начиная с версии 11.10, позволяет владельцам сайтов определять, как их сайт будет отображаться в миниатюрах Экспресс-панели. По-умолчанию, для отображения используется скриншот целой веб-страницы. Теперь появилась возможность указывать значок через CSS или в теле веб-страницы.</p>

<h2 id="uselogo">Логотип

<p>Этот раздел посвящен тому, как использовать собственный логотип или значок в Экспресс-панели.</p>

<h3 id="html5icons">Значки в HTML5</h3>

<p>Вы, возможно, знакомы со значками закладок. Впервые они были представлены в 5-й версии Internet Explorer в 1999 году. Хотя, они и не были включены в спецификацию HTML4, производители браузеров в конце концов <a href="http://www.w3.org/2005/10/howto-favicon">согласились включить поддержку</a> значков как значение атрибута <code>rel</code> элемента <code>&lt;link&gt;</code>. Компания Apple позже расширила поддержку значков в своих сенсорных устройствах через <a href="http://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html"><code style="word-wrap:none">apple-touch-icon</code></a>. Согласно спецификации HTML5, в настоящее время <code>icon</code> является <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#rel-icon">валидным стандартизированным значением</a> атрибута <code>rel</code>.</p>

<h3 id="setanicon">Объявление значка для Экспресс-панели</h3>

<p>Объявление значка для Экспресс-панели во многом схоже с объявлением значка сайта. Необходимо лишь добавить элемент <code>&lt;link&gt;</code> в секцию <code>head</code> веб-страницы:</p>

<pre><code>&lt;head&gt;
    &lt;title&gt;My Opera&lt;/title&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/logo.png&quot;&gt;
&lt;/head&gt;</code></pre>

<p>Значок для Экспресс-панели должен быть:</p>

<ul>
	<li>Размером минимум 114 &#xD7; 114 пикселов. Значки меньшего размера будут игнорироваться;</li>
	<li>файл должен быть формата PNG, JPG или GIF. Файлы формата SVG пока не поддерживаются. В случае использования анимированных изображений, будет отображаться только первый кадр.</li>
</ul>

<p>По-умолчанию, максимальный размер значка составляет 256 &#xD7; 160 пикселов. Значки большего размера будут уменьшены до подходящих размеров (<a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/icon.html">демо</a>). Изменить значения по-умолчанию минимального и максимального размера значка можно в меню настроек браузера в opera:config.</p>

<p>Также Opera 11.10 поддерживает <code>apple-touch-icon</code>, <code>apple-touch-icon-precomposed</code> и <code>image_src</code>.</p>

<h3 id="multipleicons">Использование нескольких значков</h3>

<p>Вы также можете указать несколько иконок. Это очень удобно, если хотите, чтоб пользователь использовал одну иконку при добавлении страницы в закладки, а другую при добавлении сайта в Экспресс-панель.</p>

<pre><code>&lt;head&gt;
    &lt;title&gt;My Opera&lt;/title&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/128x128image.png&quot;&gt;
    &lt;!-- Это будет иконка Экспресс-панели --&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/200x200image.png&quot;&gt;
&lt;/head&gt;</code></pre>

<p>Если объявить несколько значков, на Экспресс-панели будет отображаться больший по размеру (<a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/multiple-icons-diff-sizes.html">демо</a>). Если значки одинакового размера, использоваться будет тот, который объявлен первым (<a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/multiple-icons-same-size.html">демо</a>).</p>

<h2 id="content">Экспресс-панель с учетом содержимого</h2>
<p>Данный раздел описывает несколько новых способов получения содержимого для Экспресс-панели:</p>
<ul>
	<li>Использование <code>view-mode:minimized</code> в CSS;</li>
	<li>испольхзование HTTP-заголовка <code>X-Purpose</code>;</li>
	<li>автоматическая перезагрузка.</li>
</ul>

<h3 id="viewmode">Использование <code>view-mode:minimized</code></h3>

<p><img src="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/view-mode.png" width="542" height="292" alt="Рисунок 1: Экспресс-панель в Opera 11.10" /></p>
<p class="comment">Рисунок 1: Экспресс-панель в Opera 11.10</p>

<p>Параметр <a href="http://www.w3.org/TR/view-mode/"><code>view-mode</code></a> определяет то, как будет указываться стили в зависимости от режима просмотра. Используя <code>view-mode:minimized</code>, вы можете определять альтернативные стили отображения содержимого, предназначенного для Экспресс-панели. Свойство <code>view-mode</code> работает аналогично <code>device-width</code>. Стили должны содержаться в блоке <code>@media</code>.</p>

<pre><code>@media screen and (view-mode: minimized) {
    body {
        color: #fff;
        background: #b20000;
    }
}</code></pre>

<p>Вы также можете подключить CSS-файл и выставить значение аттрибута <code>media</code> так:</p>

<pre><code>&lt;link rel=stylesheet type=&quot;text/css&quot; href=&quot;minimizedstyles.css&quot; media=&quot;(view-mode:minimized)&quot;&gt;</code></pre>

<p>Пример с использованием <code>view-mode:minimized</code> <a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/view-mode.html">здесь</a>.</p>
<p>Помните, что <code>view-mode:minimized</code> переключает окно просмотра в Экспресс-панели на <strong>256 &#xD7; 160</strong> пикселов.</p>

<h3 id="with-x-purpose">Использование HTTP-заголовка <code>X-Purpose</code></h3>
<p>Также есть возможность использовать различные URL для Экспресс-панели, каждый запрос которой содержит дополнительный HTTP-заголовок <code>X-Purpose: preview</code>.</p>

<pre><code>GET / HTTP/1.1
Host: www.bbc.co.uk/news
X-Purpose: preview
User-agent: Opera/9.80 (Macintosh; Intel Mac OS X 10.6.6; U; en) Presto/2.8.99 Version/11.10</code></pre>

<p>При обнаружении данного HTTP-заголовкка вы можете выбрать, какой URL будет использоваться, определить файлы, которые отправятся на Экспресс-панель, или вывести специально заготовленное для Экспресс-панели содержимое. Заметьте, что такого же эффекта не будет, когда пользователь перейдет на сайт из Экспресс-панели.</p>

<p>В примере ниже, мы используем директиву <code>mod_rewrite</code> сервера Apache для перенаправления всех запросов Экспресс-панели на адрес <code>/preview.html</code> (вам, возможно, захочется конкретизировать запросы в конкретной ситуации):</p>

<pre><code>RewriteEngine On
RewriteCond %{HTTP:X-Purpose} ^preview$
RewriteRule ^(.*) /preview.html</code></pre>

<p>Или быть может вы предпочтёте использовать серверную обработку запросов на каком-либо языке. Ниже приведен пример на PHP: </p>

<pre><code>&lt;?php
if ($_SERVER[&#39;HTTP_X_PURPOSE&#39;] == &#39;preview&#39;) {
    // Send Speed Dial content
} else {
    // Send regular content
}
?&gt;</code></pre>

<h3 id="preview-refresh">Автообновление через определенный интервал</h3>
<p>Чтобы сделать содержимое Экспресс-панели более динамичным, вы можете установить интервал для обновления, который будет использоваться после добавления сайта в Экспресс-панель. Это можно сделать двумя способами:</p>

<ol>
	<li>
		<p>используя элемент <code>&lt;meta&gt;</code>:</p>
		<pre>&lt;meta http-equiv=&quot;preview-refresh&quot; content=&quot;3600&quot;&gt;</pre>
	</li>
	<li>
		<p>возвращая HTTP-ответ <code>Preview-Refresh</code>:</p>
		<pre>Preview-Refresh:3600</pre>
	</li>
</ol>

<p>Данный интервал указывается в секундах, т.е. значение 3600 будет равно 1 часу.</p>

<h2 id="sdpriority">Система приоритетов</h2>

<p>Приоритет в первую очередь отдается свойству <code>view-mode:minimized</code> в CSS. Если стили недоступны, браузер будет искать объявление значка для страницы. Если ничего не будет объявлено либо файл будет не доступен или поврежден, будет использоваться стандартный метод — добавление снимка целой страницы.</p>

<h2 id="productsupport">Поддержка в продуктах Opera</h2>

<p>Пока эти улучшения доступны только для пользователей настольной версии браузера Opera.</p>

<h4>Для справки</h4>
<ul>
	<li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#rel-icon">Ссылки из спецификации HTML5 WHATWG</a></li>
	<li><a href="http://www.w3.org/TR/view-mode/">Спецификация view-mode</a></li>
</ul></h2>
