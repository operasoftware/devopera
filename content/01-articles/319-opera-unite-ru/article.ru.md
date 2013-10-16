Title: Основы Opera Unite для разработчиков — обновлённые
----
Date: 2009-11-23 06:56:18
----
Lang: ru
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<p class="comment">В соавторстве с Arve, Chris, Zi Bin и Lissy.</p>

<h2>Введение</h2>

<p>Opera Unite представляет из себя веб-сервер, работающий внутри браузера Opera, который позволяет делать удивительные вещи. Одним нажатием на кнопку вы можете поделиться картинками, документами, видео, музыкой, совместными играми и множеством других вещей с друзьями и коллегами. В рамках <a href="http://labs.opera.com/news/2009/06/16/">Opera Labs</a> несколько месяцев назад мы выпустили раннюю версию сервера Opera Unite, сегодня же речь пойдёт о <a href="http://www.opera.com/browser/next/">бета-версии Opera 10.10</a>, представляющей новую улучшенную версию Opera Unite.</p>

<p>Эта статья поможет вам начать путь по дороге разработки приложений Opera Unite — она рассказывает о том, как сервер Opera Unite работает и что он может. Ниже я коротко расскажу вам о базовых идеях Opera Unite, покажу как запустить веб-сервер в вашем браузере и продемонстрирую пример того, как написать приложение для Opera Unite в виде простого блога.</p>

<p>Содержание статьи по порядку:</p>

<ul>
	<li><a href="#concepts">Основные понятия</a>
		<ul>
			<li><a href="#conceptsunite">Что такое Opera Unite?</a></li>
			<li><a href="#conceptsproxy">Прокси Opera Unite</a></li>
			<li><a href="#conceptsapplications">Приложения Opera Unite</a></li>
		</ul>
	</li>
	<li><a href="#enabling">Запуск веб-сервера</a></li>
	<li><a href="#application">Создание приложения Opera Unite: простой блог</a>
		<ul>
			<li><a href="#applicationstructure">Файлы и папки приложения</a></li>
			<li><a href="#applicationconfig">Настраиваем приложение: config.xml</a></li>
			<li><a href="#applicationindex">Соединяем всё вместе: index.html</a></li>
			<li><a href="#applicationscript">Пишем скрипт: script.js</a>
				<ul>
					<li><a href="#scriptlisteners">Обработчики запросов</a></li>
					<li><a href="#scriptlist">Показываем список записей</a></li>
					<li><a href="#scriptentry">Показываем запись</a></li>
					<li><a href="#scriptfrom">Показываем форму для добавления записи</a></li>
					<li><a href="#scriptsave">Сохранение записи</a></li>
				</ul>
			</li>
		</ul>
	</li>
	<li><a href="#using">Использование приложения Opera Unite</a></li>
	<li><a href="#viewing">Просмотр приложения Opera Unite</a></li>
	<li><a href="#uploading">Загрузка приложения Opera Unite на unite.opera.com</a>
		<ul>
			<li><a href="#uploadingbefore">Перед публикацией</a></li>
			<li><a href="#uploadingprocess">Публикация приложения</a></li>
			<li><a href="#uploadinghowto">Как я могу предложить воспользоваться моим приложением? </a></li>
			<li><a href="#uploadingapproval">Одобрение приложения Opera Unite</a>
				<ul>
					<li><a href="#uploadingguides">Каким правилам нужно соответствовать для одобрения приложения?</a></li>
				</ul>
			</li>
		</ul>
	</li>
	<li><a href="#readmore">Дальнейшее чтение</a></li>
</ul>

<h2 id="concepts">Основные понятия</h2>

<p>Эта часть расскажет об основах работы Opera Unite и о том, как собираются приложения для Opera Unite.</p>

<h3 id="conceptsunite">Что такое Opera Unite?</h3>

<p>Opera Unite — это веб-сервер, который работает внутри браузера Opera. Он позволяет пользователю устанавливать приложения и использовать их вместе с друзьями, коллегами или даже сразу со всеми, при желании. Всё взаимодействие происходит через центральный сервер Opera Unite, для чего Opera Unite использует прокси между сервером и его клиентами (доступными на <a href="http://unite.opera.com/">unite.opera.com</a>), чтобы избежать дополнительной настройки файрвола.</p>

<h3 id="conceptsproxy">Прокси Opera Unite</h3>

<p>Когда пользователь запускает веб-сервер в домашней сети, в этой сети есть устройство, которое выступает в роли файрвола, нуждающееся в дополнительной настройке. См. рисунок 1:</p>

<img src="/articles/view/opera-unite-developer-primer-revisited/traditio.jpg" alt="Традиционная конфигурация веб-сервера" />
<p class="comment">Рисунок 1: традиционная конфигурация веб-сервера</p>

<p>Обычно, пользователю нужно открыть порты и настроить их переадресацию на локальный компьютер для того, чтобы люди за файрволом могли иметь доступ к серверу.</p>

<p>Однако когда вы используете Opera Unite, никакой настройки не требуется, что видно на рисунке 2.</p>

<img src="/articles/view/opera-unite-developer-primer-revisited/operauni.jpg" alt="Конфигурация при использовании сервера Opera Unite в браузере" />
<p class="comment">Рисунок 2: конфигурация при использовании сервера Opera Unite в браузере</p>

<p>Веб-сервер инициализирует подключение к прокси и использует это подключение для передачи обратно информации о входящих запросах.</p>

<p class="note">Обратите внимание, что прокси — это всего лишь запасной механизм, который используется, чтобы наверняка передать ваши данные, в случае когда работа с <abbr title="Network Address Translation">NAT</abbr> по какой-то причине невозможна. Также, Opera Unite поддерживает работу через <abbr title="Universal Plug and Play">UPnP</abbr>, что позволяет передавать данные через прямое подключение, если эта возможность доступна. Это может значительно ускорить работу ваших приложений за счёт работы без прокси-сервера. Однако использование прямого подключение остаётся на совести каждого отдельного приложения и не всегда гарантирует более быструю работу приложения. UPnP не имеет механизма авторизации и подразумевает, что все локальные системы и их пользователи являются доверенными.</p>

<h3 id="conceptsapplications">Приложения Opera Unite</h3>

<p>Приложение Opera Unite состоит из файла <code>config.xml</code>, содержащего базовую информацию о приложении, и вполне обычной для сайта структуры файлов. В этом смысле, они очень похожи на <a href="http://dev.opera.com/articles/view/creating-your-first-opera-widget/">виджеты для Opera</a>, хотя то, каким образом приложения Opera Unite запускаются и используется, сильно отличается от виджетов. Другое отличие состоит в том, что, в отличие от виджетов Opera, файл <code>config.xml</code> для приложений Opera Unite должен содержать элемент <code>feature</code>:</p>

<pre><code>&lt;feature name=&quot;http://xmlns.opera.com/webserver&quot;&gt;
  &lt;param name=&quot;type&quot; value=&quot;service&quot;/&gt;
  &lt;param name=&quot;servicepath&quot; value=&quot;blog&quot;/&gt;
&lt;/feature&gt;</code></pre>

<p>В этом случае, для приложения становится доступен специальный JavaScript-объект <code>opera.io.webserver</code>. Более подробно об этом можно прочитать в <a href="http://dev.opera.com/libraries/unite/">документации по JavaScript API для сервера Opera Unite</a>.</p>

<p>Поскольку приложения Opera Unite используют те же технологии, что и виджеты Opera, то, запустив сервер Opera Unite, вы сможет легко контролировать и настраивать его при помощи HTML, CSS и JavaScript. Хотя, приложения Opera Unite получают доступ к функциям, обычно недоступным для виджетов или веб-страниц, например — <a href="http://dev.opera.com/libraries/fileio/" title="JavaScript API для File I/O">изолированная файловая система</a> (песочница).</p>

<p class="note">Если вы хотите узнать больше о виджетах Opera, вы можете найти всю информацию в <a href="http://dev.opera.com/addons/widgets/">статьях о виджетах на сайте Dev.Opera</a>.</p>

<p>Двигаемся дальше — запускаем Opera Unite и начинаем собирать простое приложение.</p>

<h2 id="enabling">Запуск веб-сервера</h2>

<p>Для большей безопасности и производительности веб-сервер не запускается по умолчанию про запуске Opera. Для запуска сервера нужно выбрать в меню Инструменты &gt; Сервер Opera Unite &gt; Включить Opera Unite, либо запустить одно из приложений Opera Unite. Сразу после этого появится диалог, который предложит вам ввести логин и пароль — те же, что используются на <a href="http://my.opera.com/">My Opera</a>.</p>

<p class="note">Обратите внимание, что для использования в Opera Unite подходят только те логины My Opera, что не содержат недопустимых для URL символов: «/», «.», «_» и пробелов.</p>

<p>На следующем шаге вам нужно назвать устройство. Вы можете выбрать имя из выпадающего списка или указать любое другое. Имя устройства будет идентифицировать ваш сервер для прокси. Сервер будет доступен по адресам вроде этих:</p>

<pre><code>http://devicename.username.proxyaddress/applicationname</code></pre>

<p>Таким образом, для того, чтобы увидеть приложение <code>test</code> на сервере <code>your_device</code> на <code>operaunite.com</code> вам нужно открыть этот URL:</p>

<pre><code>http://your_device.your_username.operaunite.com/test</code></pre>

<h2 id="application">Создание приложения Opera Unite: простой блог</h2>

<p>А теперь короткий рассказ об изготовлении простого приложения для ведения блога, который позволит пользователю публиковать записи. Сохранённые записи немедленно становятся доступны всему миру при помощи сервера.</p>

<p>Приложение состоит из двух частей: первая — это те страницы, которые позволяют владельцу приложения управлять и настраивать его, вторая — это страницы, видимые всем пользователям, которые и отдаёт сервер.</p>

<p>Те, кому не терпится попробовать, могут загрузить <a href="/articles/view/opera-unite-developer-primer-revisited/blog.ua">код блога для Opera Unite</a>. Он упакован в файл с расширением <code>.ua</code> — такое расширение по умолчанию имеют все приложения Opera Unite. Вы можете разархивировать пакет, чтобы взглянуть на исходный код или просто перетянуть пакет в браузер Opera, чтобы запустить пример блога для Opera Unite.</p>

<h3 id="applicationstructure">Файлы и папки приложения</h3>

<p>Наше приложение будет содержать файлы и папки, изображённые на рисунке 3:</p>

<img src="/articles/view/opera-unite-developer-primer-revisited/structur.jpg" alt="Структура папки приложения" />
<p class="comment">Рисунок 3: структура папки приложения</p>

<ul>
	<li><code>config.xml</code>: файл настроек приложения.</li>
	<li><code>index.html</code>: логическое начало приложения, куда подключаются скрипты.</li>
	<li><code>script/script.js</code>: непосредственный код приложения.</li>
</ul>

<p>Из указанных файлов строго необходимы только <code>config.xml</code> и <code>index.html</code>.</p>

<p>Также вы можете включить в состав пакета папку <code>public_html</code> — волшебную папку для приложений Opera Unite. Обычно файлы и папки внутри вашего приложения недоступны пользователям, запрашивающим приложение, поэтому, если вы захотите отдать пользователю какой нибудь файл стилей, статические картинки или что-нибудь вроде этого, то положите файлы именно в эту папку. Эти файлы будут привязаны к относительному корню вашего приложения и, к примеру, файл <var>cats.png</var> внутри папки <code>public_html</code> приложения <code>helloOperaUnite</code> будет доступен по адресу:</p>

<pre><code>http://your_device.your_username.operaunite.com/helloOperaUnite/cats.png</code></pre>

<h3 id="applicationconfig">Настройки приложения: config.xml</h3>

<p>Это приложение будет собрано точно так же, как виджет Opera, поэтому нам будет нужно задать настройки в файле <code>config.xml</code>. Этот файл по сути является обычным файлом настройки для виджетов Opera, за исключением некоторых дополнительных особенностей. Для того, чтобы обозначить ваше приложение как приложение Opera Unite, вам потребуется включить элемент <code>feature</code> в элемент <code>widget</code> файла <code>config.xml</code>.</p>

<p class="note">Обратите внимание, что виджеты Opera упакованы в обычные zip-файлы и переименованы с расширением <code>.wgt</code>, тогда как приложения Opera Unite упакованы и переименованы в файлы с расширением <code>.ua</code> для указания на приложения Opera Unite, т.е. «Unite Application».</p>

<pre><code>&lt;widget&gt;
  &lt;widgetname&gt;My blogging application&lt;/widgetname&gt;
  &lt;description&gt;Blogging application example from the Opera Unite applications primer.&lt;/description&gt;
  &lt;author&gt;
    &lt;name&gt;Hans S. Toemmerholt&lt;/name&gt;
    &lt;organisation&gt;Opera Software ASA&lt;/organisation&gt;
  &lt;/author&gt;
  &lt;feature name=&quot;http://xmlns.opera.com/webserver&quot;&gt;
    &lt;param name=&quot;type&quot; value=&quot;service&quot;/&gt;
    &lt;param name=&quot;servicepath&quot; value=&quot;blog&quot;/&gt;
  &lt;/feature&gt;
&lt;/widget&gt;</code></pre>

<p>Элемент <code>widgetname</code> также является названием вашего приложения. Это название будет показано пользователю во время установки и использования приложения.</p>

<p>Вы также можете добавить в <code>config.xml</code> элемент <code>servicepath</code>. Содержимое этого элемента должно быть валидным URI и будет являться <em>именем приложения, что присутствует в URI</em>. Если этот элемент отсутствует, Opera попытается использовать в качестве URI приложения содержимое элемента <code>widgetname</code>. Но если это имя не окажется валидным URI, установка прервётся с ошибкой.</p>

<p>После того, как приложение упаковано и запущено, упомянутый выше <code>config.xml</code> сделает его доступным по адресу:</p>

<pre><code>http://your_device.your_username.operaunite.com/blog/</code></pre>

<h3 id="applicationindex">Соединяем всё вместе: index.html</h3>

<p>У нашего приложения нет интерфейса, кроме тех страниц, что он создаёт. Файл <code>index.html</code> — это начальная точка приложения и, по сути, <em>весь его интерфейс</em>. В нашем пример мы используем минимальный файл HTML 5 со ссылкой на используемый файл скриптов:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;script src=&quot;script/script.js&quot;&gt;&lt;/script&gt;</code></pre>

<h3 id="applicationscript">Пишем скрипт: script.js</h3>

<p>Обратите внимание на то, как мы подключили файл <var>script.js</var> в предыдущем примере. Веб-сервер слушает запросы от пользователей, которые в данный момент ходят по страницам приложения, и создаёт ответы, которые отправляются обратно. Ответом обычно является сгенерированная страница, содержащая информацию.</p>

<p>Функциональность Opera Unite доступна разработчикам через <a href="http://dev.opera.com/libraries/unite/" title="JavaScript API для сервера Opera Unite">набор JavaScript API</a>, делающий доступными объекты, представляющие веб-сервер, соединения, входящие запросы и исходящие ответы.</p>

<p>Шаг за шагом рассмотрим скрипт:</p>

<h4 id="scriptlisteners">Обработчики запросов</h4>

<p>Веб-сервер принимает запросы от клиентов и посылает им ответы обратно. Сервер Opera Unite основан на <em>событийной модели</em> и вызывает событие в DOM каждый раз, когда браузер обращается к серверу, запрашивая файлы имеющие отношение к приложению Opera Unite. Чтобы иметь возможность обрабатывать эти события, нужно повесить на них обработчики. Это делается при помощи <code>window.onload</code>:</p>

<pre><code>var webserver;
var entries = [];
window.onload = function () {
  webserver = opera.io.webserver
  if (webserver)
  {
    // Handle requests for various URLs
    webserver.addEventListener(&#39;_index&#39;, showEntryList, false);
    webserver.addEventListener(&#39;entry&#39;, showEntry, false);
    webserver.addEventListener(&#39;form&#39;, showForm, false);
    webserver.addEventListener(&#39;save&#39;, saveEntry, false);
  }
}</code></pre>

<p>Что же здесь происходит?</p>

<p>Первым делом мы проверяем, что наше приложения действительно является веб-приложением, проверяя существование объекта <code>webserver</code>. Если он существует, то мы добавляем четыре обработчика событий: <code>_index</code>, <code>entry</code>, <code>form</code> и <code>save</code>.</p>

<p>Когда обработчики установлены, сервер будет вызывать одну из указанных функций каждый раз, когда пользователь посетит один из следующих URL’ов:</p>

<pre><code>http://your_device.your_username.operaunite.com/blog/
http://your_device.your_username.operaunite.com/blog/entry/
http://your_device.your_username.operaunite.com/blog/form/</code></pre>

<p>Запрос <code>_index</code> особенный потому, что является запросом к корню приложения. Как мы увидим дальше, пользователь не сможет получить доступ к «save» напрямую, а только через форму.</p>

<h4 id="scriptlist">Показываем список записей</h4>

<p>Код функции <code>showEntryList</code> для запроса <code>_index</code> довольно простой. После получения запроса, функция в ответ создаёт HTML-документ со списком сохранённых записей.</p>

<pre><code>function showEntryList(e)
{
  var response = e.connection.response;
  response.write( &#39;&lt;!DOCTYPE html&gt;&#39;
    + &#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;Entries&lt;/title&gt;&lt;/head&gt;&#39;
    + &#39;&lt;body&gt;&lt;ul&gt;&#39;
  );

  for ( var i = 0, entry; entry = entries[i]; i++ )
  {
    response.write(&#39;&lt;li&gt;&#39;+entry.date+&#39;: &lt;a href=&quot;entry?id=&#39;+i+&#39;&quot;&gt;&#39;+entry.title+&#39;&lt;/a&gt;&lt;/li&gt;&#39;);
  }

  response.write(&#39;&lt;/ul&gt;&#39;
    + &#39;&lt;p&gt;&lt;a href=&quot;form&quot;&gt;Add en entry&lt;/a&gt;&lt;/p&gt;&#39;
    + &#39;&lt;/body&gt;&lt;/html&gt;&#39;
  );
  response.close();
}</code></pre>

<p>Шаг за шагом, функция делает следующее:</p>

<p>Первым делом создаётся переменная, содержащая объект <code>response</code>. Этот объект содержит все необходимые методы для отправки данных клиенту:</p>

<pre><code>var response = e.connection.response;</code></pre>

<p>Дальше идёт метод <code>write</code>, который записывает данные в документ для браузера, который запросил страницу. Для начала создадим простую HTML-обёртку:</p>

<pre><code>response.write(&#39;&lt;!DOCTYPE html&gt;&#39;
  + &#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;Entries&lt;/title&gt;&lt;/head&gt;&#39;
  + &#39;&lt;body&gt;&lt;ul&gt;&#39;
);</code></pre>

<p>Существующие записи мы оформим списком ссылок:</p>

<pre><code>for ( var i = 0, entry; entry = entries[i]; i++ )
{
  response.write(&#39;&lt;li&gt;&#39;+entry.date+&#39;: &lt;a href=&quot;entry?id=&#39;+i+&#39;&quot;&gt;&#39;+entry.title+&#39;&lt;/a&gt;&lt;/li&gt;&#39;);
}</code></pre>

<p>И, наконец, закрываем подключение:</p>

<pre><code>response.close();</code></pre>

<h4 id="scriptentry">Показываем запись</h4>

<p>Дальше нам нужно вывести что-нибудь, когда пользователь кликнул по ссылке на запись:</p>

<pre><code>function showEntry(e)
{
  var index = e.connection.request.queryItems[&#39;id&#39;][0];
  var entry = entries[index];
  // ToDo Should have error handling here
  var response = e.connection.response;
  response.write(&#39;&lt;!DOCTYPE html&gt;&#39;
    + &#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;&#39;+entry.title+&#39;&lt;/title&gt;&lt;/head&gt;&#39;
    + &#39;&lt;body&gt;&lt;h1&gt;&#39;+entry.title+&#39;&lt;/h1&gt;&#39;
    + &#39;&lt;p&gt;&#39;+entry.date+&#39;&lt;/p&gt;&#39;
    + &#39;&lt;div&gt;&#39;+entry.text+&#39;&lt;/div&gt;&#39;
    + &#39;&lt;/body&gt;&lt;/html&gt;&#39;
  );
  response.close();
}</code></pre>

<p>Шаг за шагом, функция делает следующее:</p>

<p>Первым делом мы создаём переменную, содержащую объект <code>request</code>, который содержит информацию о входящем запросе:</p>

<pre><code>var request = e.connection.request;</code></pre>

<p>Аргументы CGI GET содержатся в свойстве <code>queryItems</code> запроса. Мы получаем <code>id</code> записи, которую хотим вывести. Обратите внимание, что один и тот же CGI-аргумент может иметь несколько значений:</p>

<pre><code>var index = request.queryItems[&#39;id&#39;][0];</code></pre>

<p>Дальше мы получаем соответствующую запись в блоге:</p>

<pre><code>var entry = entries[index];</code></pre>

<p>Метод <code>write</code> записывает данные в документ, запрошенный браузером. Заголовок, дата и текст записи заворачиваются в подходящую разметку:</p>

<pre><code>response.write(&#39;&lt;!DOCTYPE html&gt;&#39;
  + &#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;&#39;+entry.title+&#39;&lt;/title&gt;&lt;/head&gt;&#39;
  + &#39;&lt;body&gt;&lt;h1&gt;&#39;+entry.title+&#39;&lt;/h1&gt;&#39;
  + &#39;&lt;p&gt;&#39;+entry.date+&#39;&lt;/p&gt;&#39;
  + &#39;&lt;div&gt;&#39;+entry.text+&#39;&lt;/div&gt;&#39;
  + &#39;&lt;/body&gt;&lt;/html&gt;&#39;
);</code></pre>

<h4 id="scriptfrom">Показываем форму для добавления записи</h4>

<p>После нажатия на ссылку «Добавить запись» вы увидите знакомую форму:</p>

<pre><code>function showForm(e)
{
  var response = e.connection.response;
  response.write(&#39;&lt;!DOCTYPE html&gt;&#39;
    + &#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;Add entry&lt;/title&gt;&lt;/head&gt;&#39;
    + &#39;&lt;body&gt;&lt;h1&gt;Add entry&lt;/h1&gt;&#39;
    + &#39;&lt;form method=&quot;post&quot; action=&quot;save&quot;&gt;&#39;
    + &#39;&lt;p&gt;&lt;label for=&quot;namefield&quot;&gt;Title&lt;/label&gt; &lt;input id=&quot;nameField&quot; type=&quot;text&quot; name=&quot;title&quot;&gt;&lt;/p&gt;&#39;
    + &#39;&lt;p&gt;&lt;label for=&quot;textArea&quot;&gt;Text&lt;/label&gt; &lt;textarea id=&quot;textArea&quot; name=&quot;text&quot;&gt;&lt;/textarea&gt;&lt;/p&gt;&#39;
    + &#39;&lt;p&gt;&lt;input type=&quot;submit&quot; name=&quot;Add entry&quot;&gt;&lt;/p&gt;&#39;
    + &#39;&lt;/form&gt;&#39;
    + &#39;&lt;/body&gt;&lt;/html&gt;&#39;
  );
  response.close();
}</code></pre>

<p>Эта форма может быть гораздо сложнее, например: поддерживать обработку ошибок, вывод уже введённых данных и так далее. Также стоит придумать механизм авторизации для потенциально деструктивных операций с данными, но не будем увлекаться — всё-таки у нас простой пример.</p>

<h4 id="scriptsave">Сохранение записи</h4>

<p>Наконец, после отправки формы, новая запись должна быть сохранена. В данном примере записи хранятся в простом массиве, который будет утерян после перезапуска приложения, однако расширить пример и добавить механизм сохранения записей будет довольно просто:</p>

<pre><code>function saveEntry(e)
{
  var request = e.connection.request
  var response = e.connection.response;
  // Get POST data
  var title = request.bodyItems[&#39;title&#39;][0];
  var text = request.bodyItems[&#39;text&#39;][0];
  entries.push({
    &#39;title&#39; : title, 
    &#39;text&#39; : text,
    &#39;date&#39; : new Date()
  });
  // Redirect back to the index of the application
  response.setStatusCode(302);
  response.setResponseHeader( &#39;Location&#39;, webserver.currentServicePath );
  response.close();
}</code></pre>

<p>Вместо <code>request.queryItems</code> мы используем свойство <code>bodyItems</code>, чтобы получить доступ к данным, отправленным при помощи POST — в нашем случае это заголовок и содержимое новой записи.</p>

<pre><code>var title = request.bodyItems[&#39;title&#39;][0];
var text = request.bodyItems[&#39;text&#39;][0];</code></pre>

<p>Отправка формы сохраняет запись в массив:</p>

<pre><code>entries.push({
  &#39;title&#39; : title,
  &#39;text&#39; : text,
  &#39;date&#39; : new Date()
});</code></pre>

<p>И, наконец, когда новая запись сохранена, мы возвращаемся обратно к списку записей:</p>

<pre><code>response.setStatusCode(302);
response.setResponseHeader( &#39;Location&#39;, webserver.currentServicePath );
response.close();</code></pre>

<p>Таким образом мы создаём стандартный HTTP-редирект обратно к корню нашего приложения, который хранится в свойстве <code>webserver.currentServicePath</code>. Этот редирект вызовет запрос <code>_index</code> и мы снова получим список всех записей.</p>

<p>Как уже упоминалось, для полноценного использования этого примера, к нему стоит добавить обработку ошибок и статусные сообщения.</p>

<h2 id="using">Использование приложения Opera Unite</h2>

<p>Для того, чтобы запустить приложени Opera Unite, вам сначала нужно его установить. Перетяните <code>config.xml</code> или полную zip-версию вашего приложения в окно браузера или откройте через файловый диалог. Если вы до сих пор не запускали приложения Opera Unite, то перед вам появится окно настройки Opera Unite, которое уже упоминалось в начале статьи.</p>

<p>Если вы кликнете дважды по приложению <code>My blogging service</code> в панели приложений Opera Unite, вы должны увидеть страницу как на рисунке 4:</p>

<img src="/articles/view/opera-unite-developer-primer-revisited/blogmain.jpg" alt="Главная страница приложения-блога" />
<p class="comment">Рисунок 4: главная страница приложения-блога</p>

<p>Клик по ссылке <em>Добавить запись</em> покажет форму, которая позволит вам добавить новую запись в блог, как на рисунке 5:</p>

<img src="/articles/view/opera-unite-developer-primer-revisited/blogform.jpg" alt="Форма для публикации записи" />
<p class="comment">Рисунок 5: форма для публикации записи</p>

<p>Если ввести в эту форму какой-то текст и нажать кнопку отправки, вы вернётесь на главную страницу блога, где уже будет видна ваша новая запись. Кликните по её заголовку, чтобы посмотреть запись. Добавьте несколько других записей, поиграйте со страницами и вы увидите что-нибудь вроде рисунка 6:</p>

<img src="/articles/view/opera-unite-developer-primer-revisited/fullblog1.jpg" alt="Несколько записей в блоге" />
<img src="/articles/view/opera-unite-developer-primer-revisited/fullblog2.jpg" alt="Полный вид одной записи в блоге" />
<p class="comment">Рисунок 6: наш блог успешно заселён</p>

<h2 id="viewing">Просмотр приложения Opera Unite</h2>

<p>Если вы следовали всем описанным шагам и запустили приложение в браузере Opera, то теперь у вас есть полноценное веб-приложение. И любой желающий может увидеть его по ссылке:</p>

<pre><code>http://devicename.username.proxyaddress/applicationname</code></pre>

<p>В нашем случае, если устройство называется <code>your_device</code> и на нём запущен приложение-блог, то его URL будет выглядеть так:</p>

<pre><code>http://your_device.username.operaunite.com/blog</code></pre>

<p>Как вы могли заметить, запуская пример, вы также можете зайти в корень устройства и увидеть все установленные на нём приложения, например:</p>

<pre><code>http://your_device.username.operaunite.com/</code></pre>

<p>Эта страница будет содержать информацию о всех установленных на данном устройстве приложениях, а также, если эти данные будут найдены в <code>config.xml</code>, более подробную информацию о приложении и его авторе.</p>

<h2 id="uploading">Загрузка приложения Opera Unite на unite.opera.com</h2>

<p>Итак, вы собрали классное приложение Opera Unite и хотите, чтобы им могли пользоваться не только посетители вашего сервера Opera Unite — вы также хотите сделать его доступным для загрузки и установки на другие сервера Opera Unite, ведь так? Хорошо. И что же для этого нужно сделать? Ответ прост: приложение нужно загрузить на <a href="http://unite.opera.com/">unite.opera.com</a> — этот сайт предназначен для распространения приложений. Данная часть статьи расскажет вам о том, как это сделать.</p>

<h3 id="uploadingbefore">Перед публикацией</h3>

<p>В идеале, перед публикацией вам стоит протестировать приложение на наличие ошибок. Если это возможно, то протестируйте его на разных платформах, устройствах версиях браузера Opera. Также не забывайте, что пользователи ваших приложений могут использовать любой браузер, а не только Opera, поэтому протестируйте приложение в различных браузерах (Firefox, Safari, и т.п.).</p>

<p>Если вы столкнулись с проблемами в работе вашего приложения, но уверены, что с его кодом всё в порядке, то проверьте файл <code>config.xml</code> на наличие ошибок. Он необходим для правильной работы приложения. Если вы откроете его в других браузерах, то сможете проверить его на корректность синтаксиса. Также стоит проверить, содержит ли <code>config.xml</code> достаточное количество информации, ведь он будет использоваться для получения всей информации о приложении для репозитария <a href="http://unite.opera.com/">unite.opera.com</a>, а также для пользователей на страницах уже установленных приложений.</p>

<p>Также стоит подумать о переводе приложения на другие языки.</p>

<p>И, наконец, сделайте скриншот работающего приложения, как описано ниже.</p>

<h3 id="uploadingprocess">Публикация приложения</h3>

<p>Для публикации вашего приложения вам нужно посетить <a href="http://unite.opera.com/applications/upload/">страницу загрузки</a>. Выберите приложение в файловом диалоге и загрузите его. Внимательно прочтите и, при необходимости, уточните информацию из <code>config.xml</code>. При желании, вы можете добавить более подробное описание.</p>

<p>Дальше выберите скриншот приложения в файловом диалоге, чтобы другие пользователи смогли понять что из себя представляет ваше приложение, прежде чем они попробуют его установить.</p>

<p>Помимо этого, вам нужно будет выбрать устройства для использования на которых ваше приложение было создано. Убедитесь, что оно был протестировано на указанных устройствах и выберите подходящую группу. Последним шагом будет выбор языков, поддерживаемых вашим приложением. Убедитесь, что вы предусмотрели перевод для всех выбранных языков.</p>

<h3 id="uploadinghowto">Как я могу предложить воспользоваться моим приложением?</h3>

<p>После того, как вы потратили кучу времени на изготовление приложения, вполне естественно, что вам захочется показать его другим людям. Чтобы увеличить число просмотров, вам нужно рассказать потенциальным пользователям каких возможностей стоит ожидать от вашего приложения. У каждого приложения есть короткое описание, которое автоматические копируется из файла <code>config.xml</code> и длинное описание, где вы можете более подробно рассказать о приложении и особенностях его работы.</p>

<p>Используйте короткое описание, чтобы привлечь внимание пользователя, расскажите ему что ваше приложение может и какую пользу можно из него извлечь. Это может быть даже короткий подзаголовок, но он должен быть информативным. Вам стоит избегать фраз вроде «Скачай меня» или «Это супер-крутое приложение». Используйте длинное описание для того, чтобы объяснить пользователям какие возможности предоставляет ваше приложение, как они реализованы. Также полезно будет рассказать про изменения в различных версиях приложения, правила игры и так далее.</p>

<p>И, наконец, не забудьте сделать скриншот приложения в работе. В качестве примера, вы можете вдохновиться <a href="http://unite.opera.com/applications/author/OperaUnite/">приложениями команды Opera Unite</a>.</p>

<p>Обратите внимание, что идеальные размеры для скриншота составляют 445 &#xD7; 230 пикселов — именно эти размеры используются на <a href="http://unite.opera.com/">сайте Opera Unite</a>. Если ваши скриншоты будут разных размеров, то они будут приведены к единым размерам, что может привести к нежелательным результатам.</p>

<h3 id="uploadingapproval">Одобрение приложений Opera Unite</h3>

<p>Все приложения Opera Unite должны быть одобрены специальными сотрудниками Opera Software. Мы проверим их на ошибки, чтобы убедиться в том, что все пользователи смогут их запустить, однако мы не несём ответственности за содержимое этих приложений и не даём гарантий касательно их функциональности. Подробнее об этом в читайте в <a href="http://unite.opera.com/disclaimer/">правилах</a>.</p>

<h4 id="uploadingguides">Каким правилам нужно соответствовать для одобрения приложения?</h4>

<p>Некоторые требования, которые мы предъявляем к приложениям:</p>

<ul>
	<li>Приложение должно иметь внятное название и описание.</li>
	<li>Приложение не должно иметь очевидных ошибок, поэтому протестируйте его перед загрузкой.</li>
	<li>Приложение не должно содержать намеренно опасного кода.</li>
	<li>Приложение не должно содержать информации, на которую вы не имеете авторского права.</li>
	<li>Приложение не должно содержать или ссылаться на информацию «для взрослых» или провокационную информацию.</li>
	<li>Приложение должно отдавать HTML-страницы совместимые со стандартами, которые доступны для всех современных браузеров и устройств.</li>
</ul>	

<h2 id="readmore">Дальнейшее чтение</h2>

<p>Теперь вы разбираетесь в основах создания и загрузки приложений Opera Unite, и вам, возможно, будет интересно узнать больше:</p>

<ul>
	<li><a href="http://dev.opera.com/libraries/unite/">JavaScript API для приложений Opera Unite</a> — документация в формате JSDoc для JavaScript-интерфейсов и методов, доступных для работы с сервером Opera Unite.</li>
	<li><a href="http://dev.opera.com/libraries/fileio/">JavaScript API для Opera File I/O</a> — документация в формате JSDoc для JavaScript-интерфейсов и методов, доступных для работы с файлами и папками.</li>
	<li><a href="http://dev.opera.com/articles/view/markuper-unite-template-library/">Markuper: шаблонизатор для приложений Opera Unite</a></li>
	<li><a href="http://dev.opera.com/articles/view/yusef-the-unite-service-framework/">Yusef: фреймворк для Opera Unite</a></li>
</ul>
