Title: Основы Opera Unite для разработчиков
----
Date: 2009-06-19 18:15:24
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

  <p>Opera Unite представляет из себя веб-сервер, работающий внутри браузера Opera, который позволяет делать удивительные вещи. Одним нажатием на кнопку вы можете поделиться картинками, документами, видео, музыкой, совместными играми и множеством других вещей с друзьями и коллегами.</p>

  <p>Эта статья поможет вам начать путь по дороге разработки сервисов для Opera Unite — она описывает то, как сервер Opera Unite работает и что он может. Ниже я коротко расскажу вам о базовых идеях Opera Unite, покажу как запустить веб-сервер в вашем браузере и продемонстрирую пример того как написать сервис для Opera Unite в виде простого блога.</p>

  <p>Содержание статьи по порядку:</p>

  <ul>
    <li><a href="#concepts">Основные понятия</a>
      <ul>
        <li><a href="#conceptsunite">Что такое Opera Unite?</a></li>
        <li><a href="#conceptsproxy">Прокси Opera Unite</a></li>
        <li><a href="#conceptsservices">Сервисы Opera Unite</a></li>
      </ul>
    </li>
    <li><a href="#enabling">Запуск веб-сервера</a></li>
    <li><a href="#service">Создание сервиса Opera Unite: простой блог</a>
      <ul>
        <li><a href="#servicestructure">Файлы и папки сервиса</a></li>
        <li><a href="#serviceconfig">Настройки сервиса: config.xml</a></li>
        <li><a href="#serviceindex">Соединяем всё вместе: index.html</a></li>
        <li><a href="#servicescript">Пишем скрипт: script.js</a>
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
    <li><a href="#using">Использование вашего сервиса Opera Unite</a></li>
    <li><a href="#viewing">Просмотр вашего сервиса Opera Unite</a></li>
    <li><a href="#uploading">Загрузка вашего сервиса Opera Unite на unite.opera.com</a>
      <ul>
        <li><a href="#uploadingbefore">Перед публикацией</a></li>
        <li><a href="#uploadingprocess">Публикация сервиса</a></li>
        <li><a href="#uploadinghowto">Как я могу предложить воспользоваться моим сервисом?</a>
          <ul>
            <li><a href="#uploadingdesc">Как написать удачное описание сервиса?</a></li>
            <li><a href="#uploadingscreen">Как сделать удачный скриншот сервиса?</a></li>
          </ul>
        </li>
        <li><a href="#uploadingapproval">Одобрение сервиса Opera Unite</a>
          <ul>
            <li><a href="#uploadingguides">Каким правилам нужно соответствовать для одобрения сервиса?</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#readmore">Дальнейшее чтение</a></li>
  </ul>


  <h2 id="concepts">Основные понятия</h2>

  <h3 id="conceptsunite">Что такое Opera Unite?</h3>

  <p>Opera Unite, если коротко, это веб-сервер, который работает внутри браузера Opera. Этот веб-сервер позволяет пользователю устанавливать сервисы и использовать их вместе с друзьями, коллегами или сразу со всеми, при желании. Всё взаимодействие происходит через центральный сервер Opera Unite, для чего Opera Unite использует прокси между сервером и его клиентами (<a href="http://www.operaunite.com">operaunite.com</a>), чтобы избежать дополнительной настройки файрвола.</p>

  <h3 id="conceptsproxy">Прокси Opera Unite</h3>

  <p>Обычно, когда пользователь запускает веб-сервер в домашней сети, в этой сети есть устройство, которое выступает в роли файрвола, который нужно дополнительно настроить. См. рисунок 1:</p>

  <img src="http://dev.opera.com/articles/view/opera-unite-developer-primer/traditio.jpg" alt="Традиционная конфигурация веб-сервера" />
  <p class="comment">Рисунок 1: традиционная конфигурация веб-сервера</p>

  <p>В такой ситуации пользователю нужно открыть порты и настроить их переадресацию на локальный компьютер для того, чтобы люди за файрволом могли иметь доступ к серверу.</p>

  <p>Однако когда вы используете Opera Unite, никакой настройки не требуется, что видно на рисунке 2:</p>

  <img src="http://dev.opera.com/articles/view/opera-unite-developer-primer/operauni.jpg" alt="Конфигурация при использовании сервера Opera Unite в браузере" />
  <p class="comment">Рисунок 2: конфигурация при использовании сервера Opera Unite в браузере</p>

  <p>Веб-сервер инициализирует подключение к прокси и использует это подключение для передачи обратно информации о входящих запросах.</p>

  <h3 id="conceptsservices">Сервисы Opera Unite</h3>

  <p>Сервисы Opera Unite — это такое особый вид <a href="http://dev.opera.com/articles/view/creating-your-first-opera-widget/">виджетов Opera</a>, который поддерживает механизм получения запросов и отправки ответов на них. Виджет является сервисом Opera Unite, если его <code>config.xml</code> содержит подобный элемент <code>feature</code>:</p>

<pre><code>&lt;feature name=&quot;http://xmlns.opera.com/webserver&quot;&gt;
  &lt;param name=&quot;type&quot; value=&quot;service&quot;/&gt;
  &lt;param name=&quot;servicepath&quot; value=&quot;blog&quot;/&gt;
&lt;/feature&gt;</code></pre>

  <p>Поэтому для сервиса становится доступен специальный JavaScript-объект <code>opera.io.webserver</code>. Более подробно об этом можно прочитать в <a href="http://dev.opera.com/libraries/unite/">JavaScript API документации сервера Opera Unite</a>.</p>

  <p>Поскольку здесь используются те же технологии, что и в виджетах Opera, то сервисы Opera Unite предлагают простой способ контролировать и настраивать их при помощи знакомых технологий: HTML, CSS и JavaScript. Но, несмотря на это, для сервисов Opera Unite доступна функциональность не представленная в виджетах или обычных веб-станицах, например — <a title="JavaScript API для File I/O" href="http://dev.opera.com/libraries/fileio/">изолированная файловая система</a> (песочница).</p>

<p class="note">Если вы заинтересованы и хочет узнать больше про виджеты Opera, вы можете найти всю информацию в <a href="http://dev.opera.com/addons/widgets/">статьях о виджетах на сайте Dev.Opera</a>.</p>

  <p>Двигаемся дальше — запускаем Opera Unite и начинаем собирать простой сервис.</p>

  <h2 id="enabling">Запуск веб-сервера</h2>

  <p>Для большей безопасности и производительности веб-сервер не запускается по умолчанию про запуске Opera. Для запуска сервера нужно выбрать в меню Инструменты &gt; Сервер Opera Unite &gt; Включить Opera Unite, либо запустить один из сервисов Opera Unite. Сразу после этого появится диалог, который предложит вам ввести логин и пароль — те же, что используются на <a href="http://my.opera.com/community/">My Opera</a>.</p>

  <p class="note">Обратите внимание, что для использования в Opera Unite подходят только те логины My Opera, что не содержат недопустимых для URL символов: «/», «.», «_» и пробелов.</p>

  <p>На следующем шагу вам нужно назвать устройство. Вы можете выбрать имя из выпадающего списка или указать любое. Имя устройства будет идентифицировать ваш сервер для прокси. Сервер будет доступен по адресам вроде этих:</p>

  <pre>http://<em class="dname">devicename</em>.<em class="uname">username</em>.<em class="pname">proxyaddress</em>/<em class="sname">servicename</em></pre>

  <p>Таким образом, для того, чтобы увидеть сервис <code>test</code> на сервере <code>your_device</code> на <code>operaunite.com</code> вам нужно открыть этот URL:</p>

  <pre><code>http://<em class="dname">your_device</em>.<em class="uname">your_username</em>.<em class="pname">operaunite.com</em>/<em class="sname">test</em></code></pre>

 <h2 id="service">Создание сервиса Opera Unite: простой блог</h2>

  <p>А теперь короткий рассказ об изготовлении простого сервиса для ведения блога, который позволит пользователю публиковать записи. Однажды сохранённые, записи немедленно становятся доступны всему миру при помощи сервера.</p>

  <p>Сервис состоит из двух частей: первая — это те страницы, которые позволяют владельцу сервиса настраивать и управлять им, вторая — это набор страниц видимых всем пользователям, которые и отдаёт сервер.</p>

  <p>Те, кому не терпится попробовать, могут загрузить <a href="http://dev.opera.com/articles/view/opera-unite-developer-primer/blog.us">код блога для Opera Unite</a>. Он упакован в файл с расширением <code>.us</code> — такое расширение по умолчанию имеют все сервисы Opera Unite. Вы можете разархивировать пакет, чтобы взглянуть на исходный код или просто перетянуть пакет в браузер Opera, чтобы увидеть пример блога для Unite.</p>

  <h3 id="servicestructure">Файлы и папки сервиса</h3>

  <p>Наш сервис будет содержать файлы и папки, изображённые на рисунке 3:</p>

<img src="http://dev.opera.com/articles/view/opera-unite-developer-primer/structur.jpg" alt="Структура папки сервиса" />
  <p class="comment">Рисунок 3: структура папки сервиса</p>

  <ul>
    <li><code>config.xml</code>: файл настроек сервиса</li>
    <li><code>index.html</code>: логическое начало сервиса, куда подключаются скрипты</li>
    <li><code>script/script.js</code>: непосредственный код сервиса</li>
  </ul>

  <p>Из указанных файлов строго необходимы только <code>config.xml</code> и <code>index.html</code>.</p>

  <p>Также вы можете включить в состав пакета папку <code>public_html</code> — волшебную папку для сервисов Opera Unite. Обычно файлы и папки внутри вашего сервиса недоступны пользователям, запрашивающим ваш сервис, поэтому, если вы захотите отдать пользователю какой нибудь файлик стилей, статические картинки или что-нибудь вроде этого, то положите файлы именно в эту папку. Эти файлы будут привязаны к относительному корню вашего сервиса и, к примеру, файл <var>cats.png</var> внутри папки <code>public_html</code> сервиса <em>helloOperaUnite</em> будет доступен по адресу:</p>

  <p><code>http://your_device.your_username.operaunite.com/helloOperaUnite/cats.png</code>.</p>

  <h3 id="serviceconfig">Настройки сервиса: config.xml</h3>

  <p>Этот сервис будет собран точно так же, как виджет Opera, поэтому нам будет нужно задать настройки в файле <code>config.xml</code>. Этот файл по сути является обычным файлом настройки для виджетов Opera, за исключением некоторых дополнительных особенностей. Для того, чтобы обозначить ваш сервис как сервис Opera Unite, вам потребуется включить элемент <code>feature</code> в элемент <code>widget</code> вашего файла <code>config.xml</code>.</p>

  <p class="note">Обратите внимание, что виджеты Opera упакованы в обычные zip-файлы и переименованы в файлы с расширением <code>.wgt</code>, тогда как сервисы Opera Unite упакованы и переименованы в файлы с расширением <code>.us</code> для указания на сервис Opera Unite.</p>

<pre><code>&lt;widget&gt;
  &lt;widgetname&gt;My blogging service&lt;/widgetname&gt;
  &lt;description&gt;Blogging service example from the Opera Unite Services primer.&lt;/description&gt;
  &lt;author&gt;
    &lt;name&gt;Hans S. Toemmerholt&lt;/name&gt;
    &lt;organisation&gt;Opera Software ASA&lt;/organisation&gt;
  &lt;/author&gt;
  &lt;feature name=&quot;http://xmlns.opera.com/webserver&quot;&gt;
    &lt;param name=&quot;type&quot; value=&quot;service&quot;/&gt;
    &lt;param name=&quot;servicepath&quot; value=&quot;blog&quot;/&gt;
  &lt;/feature&gt;
&lt;/widget&gt;</code></pre>

  <p>Элемент <code>widgetname</code> также является названием вашего сервиса. Это название будет показано пользователю во время установки и использования сервиса.</p>

  <p>Вы также можете добавить в <code>config.xml</code> элемент <code>servicepath</code>. Содержимое этого элемента должно быть валидным URI и <em>будет являться именем сервиса</em>, что присутствует в URI. Если этот элемент отсутствует, Opera попытается использовать в качестве URI сервиса содержимое элемента <code>widgetname</code>. Но если это имя не окажется валидным URI, инсталляция прервётся с ошибкой.</p>

  <p>После того, как сервис упакован и запущен, упомянутый выше <code>config.xml</code> сделает его доступным по адресу:</p>

  <p><code>http://<em class="dname">your_device</em>.<em class="uname">your_username</em>.<em class="pname">operaunite.com</em>/<em class="sname">blog/</em></code></p>

  <h3 id="serviceindex">Соединяем всё вместе: index.html</h3>

  <p>У нашего сервиса нет интерфейса, кроме тех страниц, что он создаёт. Файл <code>index</code>.html — это начальная точка сервиса и, по сути, весь его интерфейс. В нашем пример мы используем минимальный файл HTML 5 со ссылкой на используемый файл скриптов:</p>

  <pre><code>&lt;!DOCTYPE html&gt;
&lt;script src=&quot;script/script.js&quot;&gt;&lt;/script&gt;</code></pre>

  <h3 id="servicescript">Пишем скрипт: script.js</h3>

  <p>Обратите внимание на то, как мы подключили скрипт в предыдущем примере кода.  Веб-сервер слушает запросы от пользователей, которые в данный момент ходят по страницам сервиса, и создаёт ответы, которые отправляются обратно. Ответом обычно является сгенерированная страница, содержащая информацию.</p>

  <p>Функциональность Opera Unite доступна разработчикам через <a title="JavaScript API для сервисов Opera Unite" href="http://dev.opera.com/libraries/unite/">набор JavaScript API</a>, включающий объекты представляющие веб-сервер, соединения, входящие запросы и исходящие ответы.</p>

  <p>Шаг за шагом рассмотрим скрипт:</p>

  <h4 id="scriptlisteners">Обработчики запросов</h4>

  <p>Веб-сервер принимает запросы от клиентов и посылает им ответы обратно. Сервер Opera Unite основан на <em>событийной</em> модели и вызывает событие в DOM каждый раз, когда браузер к серверу, запрашивая файлы имеющие отношение к сервису Opera Unite. Чтобы иметь возможность обрабатывать эти события, нужно повесить на них обработчики. Это делается при помощи <code>window.onload</code>:</p>

  <pre class="example"><code>var webserver;
var entries = [];

window.onload = function () {

    webserver = opera.io.webserver

    if (webserver)
    {
        //Handle requests for various URLs
        webserver.addEventListener(&#39;_index&#39;, showEntryList, false);
        webserver.addEventListener(&#39;entry&#39;, showEntry, false);
        webserver.addEventListener(&#39;form&#39;, showForm, false);
        webserver.addEventListener(&#39;save&#39;, saveEntry, false);
    }
}
</code></pre>

  <p>Что же здесь происходит?</p>

  <p>Первым делом мы проверяем, что наш сервис действительно является веб-сервисом, проверяя существование объекта <code>webserver</code>. Если он существует, то мы добавляем четыре обработчика событий: <code>_index</code>, <code>entry</code>, <code>form</code> и <code>save</code>.</p>

  <p>Когда обработчики установлены, сервер будет вызывать одну из указанных функций каждый раз, когда пользователь посетит один из следующих URL’ов:</p>

  <ul>
    <li><code>http://your_device.your_username.operaunite.com/blog/</code></li>
    <li><code>http://your_device.your_username.operaunite.com/blog/<em class="ename">entry</em></code></li>
    <li><code>http://your_device.your_username.operaunite.com/blog/<em class="ename">form</em></code></li>
  </ul>

  <p>Запрос <code>_index</code> особенный потому, что является запросом к корню сервиса. Как мы увидим дальше, пользователь не сможет получить доступ к «save» напрямую, а только через форму.</p>

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
      + &#39;&lt;p&gt;&lt;a href=&quot;form&quot;&gt;Add en entry&lt;/a&gt;.&lt;/p&gt;&#39;
      + &#39;&lt;/body&gt;&lt;/html&gt;&#39;
    );
    response.close();
}</code></pre>

  <p>Шаг за шагом, функция делает следующее:</p>

  <p>Первым делом создаётся переменная, содержащая объект <code>response</code>. Этот объект содержит все необходимые методы для отправки данных клиенту:</p>

  <pre><code>var response = e.connection.response;</code></pre>

  <p>Дальше идёт метод <code>write</code>, который записывает данные в документ для браузера, который запросил страницу. Для начала создадим простую HTML-обёртку:</p>

  <pre><code>response.write( &#39;&lt;!DOCTYPE html&gt;&#39;
    + &#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;Entries&lt;/title&gt;&lt;/head&gt;&#39;
    + &#39;&lt;body&gt;&lt;ul&gt;&#39;
);</code></pre>

  <p>Существующие в блоге записи мы оформим списком ссылок:</p>

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
    //ToDo Should have error handling here
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

  <p>Аргументы CGI GET содержатся в свойстве <code>queryItems</code> запроса. Мы получаем <code>id</code> записи, которую хотим вывести. Обратите внимание, что один и тот же CGI-аргумент может иметь несколько значений.</p>

  <pre><code>var index = request.queryItems[&#39;id&#39;][0];</code></pre>

  <p>Дальше мы получаем соответствующую запись в блоге:</p>

  <pre><code>var entry = entries[index];</code></pre>

  <p>Метод <code>write</code> записывает данные в документ браузера, который запросил страницу. Заголовок, дата и текст записи заворачиваются в подходящую разметку:</p>

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

  <p>Эта форма может быть гораздо сложнее, например: поддерживать обработку ошибок, вывод уже введённых данных и так далее. Также стоит придумать механизм аутентификации для потенциально деструктивных операций с данными, но не будем увлекаться — всё-таки у нас простой пример.</p>

  <h4 id="scriptsave">Сохранение записи</h4>

  <p>Наконец, после отправки формы, новая запись должна быть сохранена. В данном примере записи хранятся в простом массиве, который будет утерян после перезапуска сервиса, однако расширить пример и добавить механизм сохранения записей будет довольно просто</p>

  <pre>function saveEntry(e)
{
    var request = e.connection.request
    var response = e.connection.response;

    //Get POST data
    var title = request.bodyItems[&#39;title&#39;][0];
    var text = request.bodyItems[&#39;text&#39;][0];

    entries.push({
        &#39;title&#39; : title, 
        &#39;text&#39;  : text,
        &#39;date&#39;  : new Date()
    });


    //Redirect back to the index of the service
    response.setStatusCode(302);
    response.setResponseHeader( &#39;Location&#39;, webserver.currentServicePath );
    response.close();
}</pre>

  <p>Вместо <code>request.queryItems</code> мы используем свойство <code>bodyItems</code>, чтобы получить доступ к данным, отправленным при помощи POST — в нашем случае это заголовок и содержимое новой записи.</p>

  <pre><code>var title = request.bodyItems[&#39;title&#39;][0];
var text = request.bodyItems[&#39;text&#39;][0];</code></pre>

<p>Отправка формы сохраняет запись в массив:</p>

 	   <pre><code>entries.push({
 	     &#39;title&#39; : title,
 	     &#39;text&#39;  : text,
 	     &#39;date&#39;  : new Date()
 	 });</code></pre>

  <p>И, наконец, когда новая запись сохранена, мы возвращаемся обратно к списку записей:</p>

<pre><code>response.setStatusCode(302);
response.setResponseHeader( &#39;Location&#39;, webserver.currentServicePath );
response.close();</code></pre>

<p>Таким образом мы создаём стандартный HTTP-редирект обратно к корню нашего сервиса, который хранится в свойстве <code>webserver.currentServicePath</code>. Этот редирект вызовет запрос <code>_index</code> и мы снова получим список всех записей.</p>

  <p>Как уже упоминалось, к этому стоит добавить обработку ошибок и статусные сообщения.</p>

  <h2 id="using">Использование вашего сервиса Opera Unite</h2>

  <p>Для того, чтобы запустить ваш собственный сервис Opera Unite, вам сначала нужно его установить. Перетяните <code>config.xml</code> или полную zip-версию вашего сервиса в окно браузера или откройте через файловый диалог. Если вы до сих пор не запускали сервисы Opera Unite, то перед вам появится окно настройки Opera Unite, которое уже упоминалось в начале статьи.</p>

<p>Если вы кликнете дважды по сервису <em>My blogging service</em> в панели сервисов Unite вы должны увидеть страницу как на рисунке 4:</p>

   <img src="http://dev.opera.com/articles/view/opera-unite-developer-primer/blogmain.jpg" alt="Главная страница блог-сервиса" />
   <p class="comment">Рисунок 4: главная страница блог-сервиса</p>

  <p>Клик по ссылке <em>«Добавить запись»</em> покажет вам форму, которая позволит вам добавить новую запись в блог, как на рисунке 5:</p>

<img src="http://dev.opera.com/articles/view/opera-unite-developer-primer/blogform.jpg" alt="Форма для публикации записи" />
   <p class="comment">Рисунок 5: форма для публикации записи</p>

<p>Если ввести в эту форму какой-то текст и нажать кнопку отправки, вы вернётесь на главную страницу блога, где уже будет видна ваша новая запись. Кликните по её заголовку, чтобы посмотреть запись. Добавьте несколько других записей, поиграйте со страницами и вы увидите что-нибудь вроде рисунка 6:</p>

<img src="http://dev.opera.com/articles/view/opera-unite-developer-primer/fullblog1.jpg" alt="Несколько записей в блоге" />
<img src="http://dev.opera.com/articles/view/opera-unite-developer-primer/fullblog2.jpg" alt="Полный вид одной записи в блоге" />
   <p class="comment">Рисунок 6: наш блог удачно заселён</p>

  <h2 id="viewing">Просмотр вашего сервиса Opera Unite</h2>

  <p>Если вы следовали всем рекомендациям и успешно запустили сервисы в вашем браузере Opera, то все они должны работать. Любой желающий может зайти на один из сервисов по ссылке:</p>

  <pre>http://<em class="dname">devicename</em>.<em class="uname">username</em>.<em class="pname">proxyaddress</em>/<em class="sname">servicename</em></pre>

  <p>В нашем случае, если устройство называется <code>your_device</code> и на нём запущен блог-сервис, то его URL будет выглядеть так:</p>

  <pre>http://<em class="dname">your_device</em>.<em class="uname">username</em>.<em class="pname">operaunite.com</em>/<em class="sname">blog</em></pre>

  <p>Как вы могли заметить, запуская пример, вы также можете зайти в корень устройства и увидеть все установленные на нём сервисы, например:</p>

  <pre>http://<em class="dname">your_device</em>.<em class="uname">username</em>.<em class="pname">operaunite.com</em>/</pre>

  <p>Эта страница будет содержать информацию о всех установленных на данном устройстве сервисах а также, если эти данные будут найдены в <code>config.xml</code>, более подробную информацию о сервисе и его авторе.</p>

  <h2 id="uploading">Загрузка вашего сервиса Opera Unite на unite.opera.com</h2>

<p>Итак, вы собрали классный сервис Opera Unite и хотите, чтобы им могли пользоваться не только посетители вашего сервера Opera Unite — вы также хотите сделать его доступным для загрузки и установки на другие сервера Opera Unite, ведь так? Хорошо. И что же для этого нужно сделать? Ответ прост: сервис нужно загрузить на <a href="http://unite.opera.com">unite.opera.com</a> — этот сайт предназначен для распространения сервисов. Данная часть статьи расскажет вам о том, как это сделать.</p>

<h3 id="uploadingbefore">Перед публикацией</h3>

<p>В идеале, перед публикацией вам стоит протестировать сервис на наличие ошибок. Если это возможно, то протестируйте его на разных платформах, устройствах версиях браузера Opera. Также не забывайте, что пользователи ваших сервисов могут использовать любой браузер, а не только Opera, поэтому протестируйте сервис в различных браузерах (Firefox, Safari, и т.п.) и на других компьютерах.</p>

<p>Если вы столкнулись с проблемами в работе вашего сервиса, но уверены, что с его кодом всё в порядке, то проверьте файл <code>config.xml</code> на наличие ошибок. Он необходим для правильной работы сервиса. Если вы откроете его в других браузерах, то сможете проверить его на корректность синтаксиса. Также стоит проверить, содержит ли <code>config.xml</code> достаточное количество информации, ведь он будет использоваться для получения всей информации о сервисе для репозитария <a href="http://unite.opera.com">unite.opera.com</a>, а также для пользователей на страницах уже установленных сервисов.</p>

<p>Также стоит подумать о переводе сервиса на другие языки.</p>

<p>И, наконец, сделайте скриншот работающего сервиса, как описано ниже.</p>


<h3 id="uploadingprocess">Публикация сервиса</h3>

<p>Для публикации вашего сервиса вам нужно посетить <a href="http://unite.opera.com/services/upload/">страницу загрузки</a>. Выберите файл своего сервиса (<code>.zip</code>) в диалоге выбора и загрузите его. Внимательно прочтите и, при необходимости, уточните информацию из <code>config.xml</code>. При желании, вы можете добавить более подробное описание.</p>

<p>Дальше выберите скриншот сервиса в файловом диалоге для того, чтобы другие пользователи смогли понять что из себя представляет ваш сервис, прежде чем они попробуют его установить.</p>

<p>Помимо этого, вам нужно будет выбрать устройства для использования на которых ваш сервис был создан. Убедитесь, что сервис был протестирован на указанных устройствах и выберите подходящую группу. Последним шагом будет выбор поддерживаемых вашим сервисом языков. Убедитесь, что вы предусмотрели перевод для всех выбранных языков.</p>

<h3 id="uploadinghowto">Как я могу предложить воспользоваться моим сервисом?</h3>

<p>После того, как вы потратили кучу времени на изготовление сервиса, вполне естественно, что вам захочется показать его другим людям. Чтобы увеличить число просмотров, вам нужно рассказать потенциальным пользователям каких возможностей стоит ожидать от вашего сервиса.</p>

<p>Существует два эффективных способа сделать это: написать удачное описание и сделать полезные скриншоты — ниже подробнее про оба способа.</p>

<h4 id="uploadingdesc">Как написать удачное описание сервиса?</h4>

<p>Всего существует два поля, которые вы можете использовать для общения с пользователем:</p>

<ul>
  <li>Короткое описание сервиса, которое берётся из файла <code>config.xml</code> и отображается во всех списках, где появляется сервис</li>
  <li>Длинное описание, которое отображается на странице сервиса</li>
</ul>

<p>Используйте короткое описание, чтобы привлечь взгляд пользователя, расскажите ему что ваш сервис может и какую пользу можно из него извлечь. Это может быть даже короткий подзаголовок, но он должен быть информативным. Вам стоит избегать фраз вроде «Скачай меня» или «Это супер-крутой сервис».</p>

<p>Примеры удачных коротких описаний:</p>
<ul>
  <li>«Будьте в курсе погоды в <var>А</var>, <var>Б</var>, <var>В</var>»</li>
  <li>«Расслабьтесь под классическую игру <var>АБВ</var>»</li>
  <li>«Получите быстрый доступ к спецификации <var>АБВ</var>»</li>
  <li>«Измеряйте элементы на ваших страницах при помощи растягивающейся линейки»</li>
  <li>«Читайте новости с Хабрахабра»</li>
</ul>

<p>Используйте длинное описание для того, чтобы объяснить пользователям какие возможности предоставляет ваш сервис, как они реализованы. Также полезно будет рассказать про изменения в различных версиях сервиса, правила игры и так далее.</p>

<p>Имейте в виду, что ваше описание будут читать люди с различным опытом, из различных стран, культур и возрастных групп, с различных платформ, устройств и версий браузера. Не все из них смогут понять то, что очевидно для вас. Вы можете даже прямо указать потенциально возможные сложности, которые потребуют обратиться за помощью к друзьям или родственникам.</p>

<h4 id="uploadingscreen">Как сделать удачный скриншот сервиса?</h4>

<p>Для того, чтобы скриншоты были полезны, следуйте следующим рекомендациям:</p>

<ul>
  <li>Покажите на них базовые возможности сервиса</li>
  <li>Покажите самые важные страницы сервиса, а не страницу авторизации или настроек, если они у вас есть</li>
  <li>Покажите ваш сервис в действии. Если это игра, покажите её в процессе. Если сервис требует для работы данные — покажите его с данными</li>
  <li>Откадрируйте скриншот так, чтобы показать самые важные части вашего сервиса</li>
</ul>

<p class="note">Обратите внимание, что идеальные размеры для скриншота составляют 445 &#xD7; 230 пикселов — именно эти размеры используются на <a href="http://unite.opera.com">сайте Opera Unite</a>. Если ваши скриншоты будут разных размеров, то они будут приведены к единым размерам, что может привести к нежелательным результатам.</p>

<h3 id="uploadingapproval">Одобрение сервисов Opera Unite</h3>

<p>Все сервисы Opera Unite должны быть одобрены специальными сотрудниками Opera Software. Мы проверим их на ошибки, чтобы убедиться в том, что все пользователи смогут их запустить, однако мы не несём ответственности за содержимое этих сервисов и не даём гарантий касательно их функциональности. Подробнее об этом в читайте в <a href="http://unite.opera.com/disclaimer/">правилах</a>.</p>

<h4 id="uploadingguides">Каким правилам нужно соответствовать для одобрения сервиса?</h4>

<p>Некторые требования, которые мы предъявляем к сервисам:</p>

<ul>
  <li>Сервис должен иметь внятное название и описание.</li>
  <li>Сервис не должен иметь очевидных ошибок, поэтому протестируйте его перед загрузкой.</li>
  <li>Сервис не должен содержать намеренно опасного кода.</li>
  <li>Сервис не должен содержать информации, на которую вы не имеете авторского права.</li>
  <li>Сервис не должен содержать или ссылаться на информацию «для взрослых» или провокационную информацию.</li>
  <li>Сервис должен соответствовать визуальному стилю сервисов Opera Unite. Любые случаи явного расхождения должны быть описаны в подаче заявки.</li>
  <li>Сервис должен отдавать HTML-страницы совместимые со стандартами, которые доступны для всех современных браузеров и устройств.</li>
</ul>   


  <h2 id="readmore">Дальнейшее чтение</h2>

  <p>Теперь вы разбираетесь в основах создания и загрузки сервисов Opera Unite, и вам, возможно, будет интересно узнать больше:</p>

  <ul>
    <li><a href="http://dev.opera.com/libraries/unite/">JavaScript API для сервисов Opera Unite</a> — документация в формате JSDoc для JavaScript-интерфейсов и методов, доступных для работы с сервером Opera Unite.</li>
    <li><a href="http://dev.opera.com/libraries/fileio/">JavaScript API для Opera File I/O</a> — документация в формате JSDoc для JavaScript-интерфейсов и методов, доступных для работы с файлами и папками.</li>
  <li><a href="http://dev.opera.com/articles/view/markuper-unite-template-library/">Markuper: шаблонизатор для сервисов Opera Unite</a></li>
  </ul>
