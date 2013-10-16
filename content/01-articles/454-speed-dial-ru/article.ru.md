Title: Создание расширений для Speed Dial
----
Date: 2011-05-09 09:55:26
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

<h2>Вступление</h2>

<p>В 2007 году мы <a href="http://www.opera.com/docs/changelogs/windows/920/">представили</a> миру экспресс-панель. Сегодня вы можете найти реализации этого популярного концепта почти во всех ведущих браузерах. Но как бы мы этим не гордились, какими бы родителями мы были, если бы не помогали нашему детищу расти и открывать новые способности? В релизе Opera 11.10 мы улучшили внешний вид и <abbr title="user interaction">UX</abbr> нашей экспресс-панели и добавили <a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/">возможность разработчикам контролировать то, как будет выглядеть их сайт</a> в ячейках экспресс-панели. В Opera 11.50 мы делаем ещё один шаг вперёд вместе с <strong>расширениями для экспресс-панели</strong>.</p>

<p>Точно так же как вы можете расширить возможности своего браузера с помощью <a href="https://addons.opera.com/addons/extensions/">расширений для Opera</a>, вы можете настраивать и расширять возможности экспресс-панели, чтобы сделать его ещё более удобным. Вместо того, чтобы просто показывать иконки или скриншоты страниц, экспресс-панель теперь может отображать «живой» контент, и эта статья покажет вам, как это сделать.</p>

<p class="note">Примечание: Чтобы протестировать этот пример, вам необходима <a href="http://www.opera.com/browser/next/">Opera 11.50</a> и пример расширения для экспресс-панели: <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">скачать наши часы для экспресс-панели</a>.</p>

<h2>Основы</h2>

<p>Для сохранения совместимости с обычными расширениями для Opera расширения для Экспресс-панели используют тот же формат и структуру, но с некоторыми дополнениями. Другими словами, следующие небольшие изменения в файле <code>config.xml</code> могут превратить существующее расширение для Opera в расширение для Экспресс-панели:</p>

<ul>
    <li>Элемент <code>&lt;feature&gt;</code> с атрибутом <code>name</code> и значением <code>opera:speeddial</code>, который превращает расширение в расширение для Экспресс-панели.</li>
    <li>Атрибут <code>viewmodes</code> элемента <code>&lt;widget&gt;</code> со значением <code>minimized</code>: показывает фоновую страницу в ячейке Экспресс-панели.</li>
</ul>

<p>Обратите внимание, на данный момент расширение не может одновременно использовать Экспресс-панель и панель инструментов браузера. Другими словами, расширение с кнопкой на панели браузера не может одновременно быть расширением для Экспресс-панели в текущей реализации.</p>

<h2>Описываем расширение для Экспресс-панели в файле <code>config.xml</code></h2>

<p>Давайте применим теорию на практике и пошагово создадим тестовое расширение. Чтобы просмотреть следующие фрагменты кода вы можете скачать <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">наше расширение для Экспресс-панели — часы</a> и взглянуть на исходный код внутри пакета. Рисунок 1 показывает, как будет выглядеть расширение в итоге.</p>

<p><img src="/articles/view/creating-opera-speed-dial-extensions/clock_extension_in_speed-dial.jpg" width="400" height="242" alt="Расширение часы, установленное в Экспресс-панель браузера Opera." /></p>
<p class="comment">Рисунок 1: Расширение «часы» установленное в Экспресс-панель браузера Opera.</p>

<p>В то время как обычные ячейки Экспресс-панели отображают скриншот веб-страницы, расширение для Экспресс-панели отображает стартовую (или фоновую) страницу расширения — это файл <code>index.html</code> по умолчанию. Чтобы включить этот режим, мы, в первую очередь, должны добавить в элемент <code>&lt;widget&gt;</code> файла <code>config.xml</code> атрибут <code>viewmodes</code> со значением <code>minimized</code>:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/SimpleClockSD&quot; viewmodes=&quot;minimized&quot;&gt;</code></pre>

<p>Этот атрибут скажет браузеру отображать фоновую страницу расширения в минимизированном виде. Размер ячейки Экспресс-панели при 100% зуме — 256х160 пикселей. Помимо этого, мы должны добавить элемент <code>feature</code> с атрибутом <code>required</code> и элементом <code>param</code>:</p>

<pre><code>&lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
  &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
&lt;/feature&gt;</code></pre>

<p>Атрибут <code>required</code> элемента <code>feature</code> указывает на необходимость Экспресс-панели для запуска расширения. Для примера, могут быть другие браузеры, которые совместимы с расширениями для Opera, но не поддерживают Экспресс-панель. Если ваше расширение должно работать в таких условиях, используйте значение <code>false</code>. Если же ваше расширение не работает без Экспресс-панели — выбирайте значение <code>true</code>.</p>

<p>Элемент <code>param</code> обязателен и указывает на страницу, которая должна открыться при клике на иконку в Экспресс-панели.</p>

<p>Вот полный код файла <code>config.xml</code> для расширения:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/SimpleClockSD&quot; defaultlocale=&quot;en&quot; viewmodes=&quot;minimized&quot;&gt;
  &lt;name short=&quot;Simple Clock&quot;&gt;Clock Speed Dial Extension&lt;/name&gt;
  &lt;description&gt;This is an example Speed Dial extension showing a simple clock.&lt;/description&gt;
  &lt;author href=&quot;http://people.opera.com/danield/&quot;&gt;Daniel Davis&lt;/author&gt;
  &lt;icon src=&quot;images/icon_64.png&quot;/&gt; &lt;!-- Icon source: <a href="http://www.openclipart.org/detail/17552" target="_blank">http://www.openclipart.org/detail/17552</a> --&gt;
  &lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
    &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
  &lt;/feature&gt;&gt;
&lt;/widget&gt;</code></pre>

<h2>Добавляем контент в расширение</h2>

<p>Следующим шагом для нас будет создание чего-нибудь интересного для показа в окне Экспресс-панели. Это фоновая страница расширения, поэтому мы должны создать файл <code>index.html</code> в той же директории, что и файл <code>config.xml</code>. Для примера, мы сделаем простые цифровые часы на JavaScript, которые отображают время с точностью до секунды. Для начала создадим базовый файл <code>index.html</code> с пустым элементом <code>output</code>:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
    &lt;title&gt;Clock Speed Dial Extension&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;output&gt;&lt;/output&gt;
    &lt;script src=&quot;scripts/background.js&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Затем создадим директорию <code>scripts</code> с файлом <code>background.js</code>, на который мы ссылаемся в <code>index.html</code>. JS-файл выглядит так:</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  // Simple function to prefix a zero if the value passed is less than 10
  function formatTime(time) {
    return (time &lt; 10) ? &#39;0&#39; + time : time;
  }
    
  var output = document.querySelector(&#39;output&#39;);
  var date, hours, mins, secs;
    
  // Get and display the current time every 500 milliseconds
  var timer = window.setInterval(function() {
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    output.innerHTML = formatTime(hours) + &#39;:&#39; + formatTime(mins) + &#39;:&#39; + formatTime(secs);
  }, 500); // Twice a second to allow for slight delays in JavaScript execution
}, false);</code></pre>

<p>Подключаемая css (<code>style.css</code>) также проста, но содержит хитрый трюк:</p>

<pre><code>* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}

/* Use display:table and display:table-cell
so that we can use vertical-align:middle */
body {
  background: #444;
  color: #fff;
  display: table;
  height: 100%;
  width: 100%;
}
output {
  display: table-cell;
  font-family: monospace;
  font-size: 10em;
  text-align: center;
  text-shadow: 0 0.1em 0.1em #000;
  vertical-align: middle;
}

/* Styles here are only applied in a &quot;minimized&quot; state */
@media screen and (view-mode: minimized) {
  output {
    font-size: 1.8em;
  }
}</code></pre>

<p>Как вы можете видеть, используется CSS3-запрос в конце файла, который проверяет условие <code>view-mode: minimized</code> на соответствие спецификации <a href="http://dev.w3.org/2006/waf/widgets-vmmf/"><code>view-mode</code> Media Feature</a>. Другими словами, стили в этой секции будут применены только если страница отображается в минимизированном состоянии, как в ячейке Экспресс-панели. Это удобный способ переопределения стилей в некоторых ситуациях без необходимости использовать несколько дизайнов.</p>

<h2>Завершаем расширение</h2>

<p>Как обычно, чтобы упаковать наши труды как расширение, нужно зазиповать все файлы в корневой директории (но не саму директорию) и сменить архиву расширение с <code>.zip</code> на <code>.oex</code>. Если вы ещё не сделали этого, то скачайте  <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">расширение clock_SD_extension.oex</a> и попробуйте.</p>

<h2><code>SpeedDialContext</code> API</h2>

<p>После установки расширение может динамически контролировать свою ячейку Экспресс-панели через <code>SpeedDialContext</code> API. Это очень простое API с двумя записываемыми свойствами: <code>title</code> и <code>url</code>. Они доступны в фоновом скрипте через объект <code>opera.contexts.speeddial</code>, например так:</p>

<pre><code>if (opera.contexts.speeddial) {
  var sd = opera.contexts.speeddial; 
  sd.title = &quot;My title&quot;;
  sd.url = &quot;mypage.html&quot;; 
}</code></pre>

<p>Мы можем использовать эту возможность для улучшения нашего расширения, например для отображения дружеского сообщения в зависимости от времени суток. Единственный файл, который необходимо отредактировать, это <code>background.js</code>:</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  // Simple function to prefix a zero if the value passed is less than 10
  function formatTime(time) {
    return (time &lt; 10) ? &#39;0&#39; + time : time;
  }
    
  var output = document.querySelector(&#39;output&#39;);
  var date, hours, mins, secs, tmp_hours, timeofday;
  var messages = {
    &quot;morning&quot;: &quot;Good morning!&quot;,
    &quot;afternoon&quot;: &quot;Good afternoon!&quot;,
    &quot;evening&quot;: &quot;Good evening!&quot;,
    &quot;night&quot;: &quot;Shouldn&#39;t you be in bed?&quot;
  };
    
  // Get and display the current time every 500 milliseconds
  var timer = window.setInterval(function() {
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    output.innerHTML = formatTime(hours) + &#39;:&#39; + formatTime(mins) + &#39;:&#39; + formatTime(secs);
        
    // Make the Speed Dial title display time-related message
    if (hours !== tmp_hours) {
      if (hours &gt; 15) {
        timeofday = &#39;evening&#39;;
      } else if (hours &gt; 11) {
        timeofday = &#39;afternoon&#39;;
      } else if (hours &gt; 3) {
        timeofday = &#39;morning&#39;;
      } else {
        timeofday = &#39;night&#39;;
      }
            
      if (opera.contexts.speeddial) {
        opera.contexts.speeddial.title = messages[timeofday];
      }
      tmp_hours = hours;
    }
  }, 500); // Twice a second to allow for slight delays in JavaScript execution
}, false);</code></pre>

<p>Это тот же самый файл из первого примера, но с несколькими дополнениями. А именно:</p>

<ul>
    <li>объект <code>messages</code> содержит сообщения для различного времени суток;</li>
    <li>повторяющаяся проверка, выполняющая код когда время меняется;</li>
    <li>строка, которая отображает соответствующее сообщение из объекта <code>messages</code> в заголовке Экспресс-панели.</li>
</ul>

<p>Расширение может быть скачано здесь: <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/friendly_clock_SD_extension.oex">friendly_clock_SD_extension.oex</a>. После установки оно будет выглядеть так:</p>

<p><img src="/articles/view/creating-opera-speed-dial-extensions/friendly_clock_extension_in_speed-dial.jpg" width="400" height="256" alt="Дружеское расширение часы, установленное в Экспресс-панели браузера Opera." /></p>
<p class="comment">Рисунок 2: Дружеское расширение «часы», установленное в Экспресс-панели браузера Opera.</p>

<h2>Заключение</h2>

<p>AКак вы видите, разработчики получили дополнительный способ улучшить свои расширения. Приведённые примеры просты, но показывают потенциал расширений для Экспресс-панели, если объединить их с умными идеями и навыками веб-разработки. Мы надеемся увидеть более интересные расширения, чем просто красивые ссылки на сайты, так что мы ждём ваших креативных использований этого API в <a href="https://addons.opera.com/addons/extensions/">репозитории расширений для Opera</a>!</p>

<h2>Ссылки</h2>
<p><a href="http://www.opera.com/docs/apis/extensions/speeddialguide/">API расширений для Opera: Руководство по Экспресс-панели</a></p>
