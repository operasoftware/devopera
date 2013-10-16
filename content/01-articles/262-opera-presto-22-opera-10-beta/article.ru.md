Title: Поддержка стандартов в Opera Presto 2.2 и Opera 10 beta
----
Date: 2009-06-10 19:15:46
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

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">This article is obsolete</h2>
<p>It&#39;s retained for historical purposes only. Download the <a href="http://www.opera.com/browser/">latest version of Opera</a> or see what&#39;s coming soon in <a href="http://www.opera.com/browser/next/">Opera.Next</a>. See <a href="http://www.opera.com/docs/specs/">Web specifications support in Opera</a>.</p> 
</div>

<h2>Введение</h2>

<p>Только что мы <a href="http://www.opera.com/browser/next/">выпустили первую бету Opera 10</a>, которая не только включает некоторые отличные новые возможности, но и просто потрясающе выглядит. Но что это значит для разработчиков? В эту бету включена новая версия движка Opera Presto 2.2, которая обеспечивает лучшую скорость, стабильность, поддержку веб-стандартов и многое другое. Эта публикация посвящена самым важным улучшениям в поддержке веб-стандартов, что были представлены в Opera Presto 2.2 (см. <a href="http://dev.opera.com/articles/view/presto-2-1-web-standards-supported-by/">список предыдущих улучшений в Presto 2.1</a>). Нам будет интересно посмотреть на то, что у вас получилось сделать с использованием этих новые возможностей, так что дайте знать в комментариях.</p>

<p class="note">Обратите внимание, что для просмотра примеров вам потребуется последняя бета Opera 10 или <a href="http://www.opera.com/browser/next/">предыдущая альфа</a>.</p>

<p>Оглавление:</p>

<ul>
  <li><a href="#webfonts">Внедрённые шрифты — веб-типографика становится проще</a></li>
  <li><a href="#opacity">Полупрозрачная прозрачность, RGBA и HSLA</a></li>
  <li><a href="#selectorsapi">Выборка по селекторам (Selectors API)</a></li>
  <li><a href="#svg">Улучшения в SVG</a>
    <ul>
      <li><a href="#fps">Свойство FPS в SVG</a></li>
      <li><a href="#webfontssvg">Внедрённые шрифты в SVG</a></li>
    </ul>
  </li>
  <li><a href="#dragonfly">Развитие Opera Dragonfly</a></li>
  <li><a href="#acid3">Acid3 — 100/100!</a></li>
  <li><a href="#summary">Заключение</a></li>
</ul>

<p>Все примеры кода, используемые в статье, можно <a href="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/Opera10beta_Presto22.zip">загрузить отдельно</a>.</p>

<p class="note">Благодарности: отдельные спасибо стоит сказать моим коллегам за отличные примеры к статье: Lachlan Hunt за пример выборки по селекторам, Andreas Bovens за пример использование внедрённых шрифтов и David Vest и Erik Dahlström за примеры SVG.</p>

<h2 id="webfonts">Внедрённые шрифты — веб-типографика становится проще</h2>

<p>Уже много лет больным вопросом для веб-дизайнеров является отсутствие нормальных шрифтов, которые можно использовать на сайтах. Нет, вы конечно можете объявить любой шрифт через CSS, но никто не гарантирует того, что он установлен на машине пользователя. Более того, набор шрифтов, что гарантированно доступны на основных платформах, ничтожно мал и зачастую приходится перечислять специфические для платформ семейства шрифтов, а потом внимательно тестировать не поехал ли ваш дизайн.</p>

<p>К счастью, эта ситуация должна измениться в ближайшем будущем благодаря <strong>внедрённым шрифтам</strong>. Спецификация Web Fonts в составе <a href="http://www.w3.org/TR/css3-webfonts/">модуля CSS 3</a> позволяет загрузить необходимый файл шрифта вместе со страницей, а затем свободно использовать его на сайте, не опасаясь, что он не установлен на машине пользователя. Для загрузки шрифта вместе со страницей нужно использовать следующий синтаксис:</p>

<pre><code>@font-face {
  font-family: &quot;My font gothic&quot;;
  src: url(&quot;http://www.myweb.com/fonts/myfont.ttf&quot;) format(&quot;truetype&quot;);
}</code></pre>

<p>Вы описываете ваш специальный шрифт внутри блока <code>@font-face</code> (в самом начале таблицы стилей, <em>прежде</em>, чем объявляете шрифты), а затем обращаетесь к нему как обычно:</p>

<pre><code>p {
  font-family: &quot;My font gothic&quot;;  
  ...
}</code></pre>

<p><a href="http://dev.opera.com/author/1385211">Andreas</a> сделал для нас <a href="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/webfonts.html">пример использования внедрённых шрифтов</a>, в котором используются шрифты <a href="http://www.myfonts.com/fonts/larabie/forgotten-futurist/">Forgotten Futurist</a> и <a href="http://www.myfonts.com/fonts/larabie/minya-nouvelle/">Minya Nouvelle</a>. Откройте пример в браузере, который поддерживает внедрённые шрифты и вы увидите что-то вроде рисунка 1.</p>

<img src="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/figure1.jpg" alt="Пример внедрённых шрифтов" />
<p class="comment">Рисунок 1: пример использовния внедрённых шрифтов в бете Opera 10.</p>

<p>Другие бесплатные шрифты перечислены на странице <a href="http://www.designwritingresearch.org/free_fonts.html">Free Font Manifesto</a> и на <a href="http://typodermicfonts.com/the-larabie-fonts-collection">Larabie Fonts</a>. Более сложные примеры можно найти здесь: <a href="http://www.princexml.com/howcome/2008/webfonts/">Webfonts demo and test pages</a>.</p>

<h2 id="opacity">Полупрозрачная прозрачность, RGBA и HSLA</h2>

<p>Opera Presto 2.1 уже поддерживает свойство <code>opacity</code> из CSS 3, которое позволяет легко задавать элементу уровень прозрачности — например: <code>div { opacity: .7; }</code>.</p>

<p>Помимо этого, Opera Presto 2.1 поддерживает указание цветов при помощи <acronym title="Red Green Blue">RGB</acronym> и <acronym title="Hue SaturationLightness">HSL</acronym>. HSL-значения позволяют справиться с некоторыми проблемами RGB, вроде неочевидности при подборе цветов (при использовании HSL, если вам нужно получить более светлый тон того же цвета, просто увеличьте значение яркости) или вроде аппаратных сложностей. HSL-значения задаются следующим образом:</p>

<pre><code>div { background-color: hsl(240, 100%, 50%); }</code></pre>

<p>RGB-значения задаются так:</p>

<pre><code>div { background-color: rgb(255, 0, 0); }</code></pre>

<h3>Комбинация прозрачности, RGB и HSL</h3>

<p>Opera Presto 2.2 поддерживает более удачный способ задания прозрачности: дополнительное четвёртое значение для HSL и RGB — альфа-прозрачность. Это дополнительное значение можно использовать при указании цвета с помощью <acronym title="Reb Green Blue Alpha">RGBA</acronym> и <acronym title="Hue Saturation Lightness Alpha">HSLA</acronym>. Как и хорошо знакомое нам свойство <code>opacity</code>, значение прозрачности в HSLA и RGBA задаётся в диапазоне от нуля до единицы, где 0 — полная прозрачность, а 1 — полная видимость.</p>

<pre><code>div { background-color: hsla(240, 100%, 50%, 0.5); }

div { background-color: rgba(255, 0, 0, 0.5); }</code></pre>

<p>Это просто фантастически удобно для создания анимированных элементов, которые появляются или исчезают при помощи простейшего JavaScript-кода — вам нужно изменить всего одно свойство через DOM. Обратите внимание и на то, что <code>opacity</code> устанавливает прозрачность для самого элемента и <em>всех его вложенных потомков</em>, в то время, как использование HSLA и RGBA позволяет задавать прозрачность только самому элементу.</p>

<p class="note">Кстати, Opera Presto 2.2 теперь также поддерживает значение <code>color: transparent</code> для задания прозрачного цвета для текста.</p>

<p>Давайте взглянем на примеры, демонстрирующие эти свойства и разницу между ними. Я создал простой двухколоночный новостной блог, который выглядит как на рисунке 2.</p>

<img src="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/figure2.jpg" alt="Пример прозрачности" />
<p class="comment">Рисунок 2: пример новостного блока с полупрозрачностью в бете Opera 10.</p>

<p>Самое интересное в коде этого примера — это указание прозрачности для блоков новостей, а также использования свойства <code>background-size</code> для левой колонки, чтобы изображение земного шара аккуратно заполняло колонку по всей ширине (это свойство появилось ещё в Presto 2.1).</p>

<p>Прежде всего, взглянем на пример, где используется свойство <code>opacity</code>. Стили для блока новостей с простой прозрачностью выглядят примерно так:</p>

<pre><code>.news-item {
  background-color: rgb(0, 255, 0);
  opacity: 0.4;
}</code></pre>

<p class="note">Обратите внимание, что я расположил CSS 3 свойства отдельно от более простых свойств для большей понятности кода. Взгляните на <a href="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/style_opacity.css">CSS-файл первого примера</a>, чтобы стало понятнее о чём я говорю.</p>

<p>Попробуйте открыть <a href="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/world-news_opacity.html">пример с обычной прозрачностью</a> и немного его повертеть. Думаю вы сразу заметите, что увиденное отличается от скриншота выше. Всё потому, что, как я уже говорил, значение меньше единицы для свойства <code>opacity</code> делает прозрачным не только сам элемент, но и <em>всех его потомков</em>. В некоторых случаях в этом нет ничего страшного, но в данном — это не самый удачный вариант, поскольку полупрозрачный текст довольно трудно читается.</p>

<p>Но вы можете сделать прозрачным только цвет фона, задав значение цвета RGBA вместо RGB и свойства opacity:</p>

<pre><code>.news-item {
  background-color: rgba(0, 255, 0, 0.4);
}</code></pre>

<p>Это CSS-правило по сути ничем не отличается от предыдущего, кроме того, что только цвет фона стал полупрозрачным. А текст остался полностью видим и отлично читабелен. Взгляните на <a href="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/world-news_rgba.html">пример с RGBA</a>, чтобы понять как это работает.</p>

<p>Наконец, для полной отчётности, давайте взглянем на указание того же самого прозрачного фона, но на этот раз при помощи HSLA:</p>

<pre><code>.news-item {
  background-color: hsla(120, 100%, 50%, 0.4);
}</code></pre>

<p>И этот же <a href="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/world-news_hsla.html">HSLA-пример вживую</a>.</p>

<p class="note">Забегая вперёд, скажу, что те же форматы задания цвета при помощи RGBA и HSLA работают и в SVG, вне зависимости от прозрачности, заданной при помощи <code>fill-opacity</code> и <code>stroke-opacity</code>.</p>

<h2 id="selectorsapi">Выборка по селекторам</h2>

<p><a href="http://www.w3.org/TR/selectors-api/">Спецификация Selectors API</a> определяет DOM API для того, чтобы сделать выборку элементов гораздо проще.</p>

<p>Взглянем на пример — эта строка кода выбирает все элементы документа с атрибутом <code>class</code> со значением <code>alert</code>:</p>

<pre><code>document.querySelectorAll(&quot;.alert&quot;);</code></pre>

<p>Следующая строка выберет из документа первый элемент <code>div</code>:</p>

<pre><code>document.querySelector(&quot;div&quot;);</code></pre>

<p>Использование похожего на CSS синтаксиса в аргументах к функции, делает всё немного проще для тех, кто не слишком хорошо разбирается в JavaScript.</p>

<p>Как понятно из предыдущего примера, в Presto 2.2 поддерживаются два новых метода: <code>querySelector()</code> и <code>querySelectorAll()</code>. Первый метод возвращает первый подходящий элемент дерева, тогда как второй возвращает коллекцию всех подходящих элементов в виде <code>NodeList</code>. Текущая спецификация определяет, что эти методы доступны для узлов типа <code>Document</code>, <code>Element</code> и <code>DocumentFragment</code>, однако, наша реализация пока поддерживает только типы <code>Document</code> и <code>Element</code>.</p>

<p>Метод <code>querySelector()</code> полезен в тех случаях, когда необходимо получить только первый элемент и создан для того, чтобы работать эффективнее, чем <code>querySelectorAll()</code> в подобных случаях.</p>

<p>Для того, чтобы сравнить насколько эти методы эффективнее традиционных, давайте рассмотрим следующий фрагмент HTML-кода:</p>

<pre>&lt;ul id=&quot;fruits&quot;&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;apples&quot;&gt; Яблоки&lt;/li&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;oranges&quot;&gt; Апельсины&lt;/li&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;bananas&quot;&gt; Бананы&lt;/li&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;grapes&quot;&gt; Grapes&lt;/li&gt;
&lt;/ul&gt;</pre>

<p>В ситуации, когда пользователь заполнил форму, содержащую эти чекбоксы, вероятно, что вы захотите получить список тех, что были отмечены. При использовании традиционных методов, потребуется сначала получить все чекбоксы, а потом рекурсивно пройтись по ним, проверяя какие из них отмечены.</p>

<pre>var fruits = document.getElementById(&quot;fruits&quot;);
var checkboxes = fruits.getElementsByTagName(&quot;input&quot;);
var list = [];
for (var i = 0; i &lt; checkboxes.length; i++) {
  if (checkboxes[i].checked) {
    list.push(checkboxes[i]);
  }
}</pre>

<p>При использовании нового API, весь код умещается <em>в одну строку!</em></p>

<pre>var list = document.querySelectorAll(&quot;#fruits input:checked &quot;);</pre>

<p>Этот код возвращает список DOM-элементов, который содержит все чекбоксы, которые были отмечены пользователем. Дальше вы можете делать с этим списком всё, что пожелаете.</p>

<h2 id="svg">Улучшения в SVG</h2>

<p>Есть пара улучшений в поддержке SVG в Opera Presto 2.2 и эта часть описывает оба.</p>

<h3 id="fps">Свойство FPS в SVG</h3>

<p>Теперь вы можете управлять скоростью (кадры в секунду) своей SVG-анимации при помощи JavaScript. Для любого самого корневого элемента <code>svg</code> вы можете задать ID, выбрать элемент при помощи <code>getElementById</code>, а потом увеличить или уменьшить его <code>targetFps</code> свойство. В примере, который подготовил для нас Eric, следующий код вставляет в документ две кнопки, которые позволяют увеличивать или уменьшать скорость текущей анимации.</p>

<pre><code>function checkfps()
{
  svgElm = document.getElementById(&quot;o&quot;).contentDocument.documentElement;
  setInterval(update, 100); 
}
   
function update()
{
  cfps = svgElm.currentFps;
  tfps = svgElm.targetFps;
  document.getElementById(&quot;f&quot;).textContent = &quot;currentFps: &quot; + cfps + &quot; targetFps: &quot; + tfps;
}    
      
function incFps() {
  svgElm.targetFps++;
}
      
function decFps() {
  svgElm.targetFps--;
}</code></pre>

<p>Вы также можете получить доступ к текущему значению свойства <code>currentFps</code>. Взгляните на <a href="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/framespersecond.html">пример Erik’а</a>, демонстрирующий изменение FPS для SVG или ищите его же в <a href="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/Opera10beta_Presto22.zip">архиве со всеми примерами к статье</a>.</p>

<p class="note">Свойство <code>targetFps</code> является не слишком точным, поскольку зависит как от железа, так и софта, но тем не менее, оно даёт некоторую возможность контролировать скорость вашей анимации. Стоит также понимать, что это свойство не отвечает за то, как часто происходит перерисовка при DOM-манипуляциях; это свойство влияет только на явно указанную анимацию.</p>

<h3 id="webfontssvg">Внедрённые шрифты в SVG</h3>

<p>И если обычные внедрённые шрифты не достаточно круты для вас, то мы также добавили поддержку SVG-шрифтов. Это позволит вам использовать файлы шрифтов в формате SVG для оформления текста (как в HTML, так и в SVG-документах), прямо как обычные внедрённые шрифты. Например:</p>

<pre><code>@font-face {
  font-family: &quot;My SVG font&quot;;
  src: url(&quot;http://www.myweb.com/fonts/myfont.svg#myFont&quot;) format(&quot;svg&quot;); 
  font-style: normal, italic;
  font-weight: 500;
}</code></pre>

<p>Взгляните на <a href="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/webfonts_in_svg.svg">пример Eric’а</a> с использованием внедрённых шрифтов в SVG, а затем и на <a href="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/Opera10beta_Presto22.zip">сам исходный код</a>, чтобы понять как это работает — рисунок 3. Кстати, <em>UbuntuTitleBold</em> — это SVG-шрифт, тогда как остальные — TrueType-шрифты.</p>

<img src="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/figure3.jpg" alt="Внедрённые SVG-шрифты" />
<p class="comment">Рисунок 3: внедрённые SVG-шрифты!</p>

<p>Чтобы убедиться в том, что всё это работает и в старом добром HTML, взгляните на мой <a href="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/SVGfonts_in_HTML.html">модифицированный пример</a> внедрённых шрифтов, в котором видно, что SVG-шрифт сначала упомянут в CSS, а потом используется для оформления HTML.</p>

<p>SVG-шрифты описаны в SVG-файлах с использованием элементов font или font-face, внутри которых каждый отдельный глиф привязан к элементу glyph. Это может показаться слишком сложным решением, но это совсем не так — особенно с учётом существования бесплатной программы <a href="http://fontforge.sourceforge.net/">FontForge</a>, которая умеет конвертировать шрифты в самые различные форматы.</p>

<p>Взгляните на <a href="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/UbuntuTitleBold.svg">исходный код шрифта UbuntuTitleBold</a> из примера Эрика, чтобы понять, что из себя представляют SVG-шрифты.</p>

<p class="note">Ещё одна хорошая новость про SVG-шрифты состоит в том, что при помощи DOM можно модифицировать шрифты прямо на клиенте — это ведь, в конце концов, обычный корректный XML. Ничто не мешает кому-то написать веб-приложение, которое позволит вам отредактировать шрифт, а потом собрать из него на сервере ваш собственный TrueType шрифт.</p>


<h2 id="dragonfly">Развитие Opera Dragonfly</h2>

<p>С тех пор, как мы последний раз писали про Opera Dragonfly на Dev.Opera, у него появилось множество отличных возможностей, так что я категорически рекомендую вам познакомится с ними.</p>

<ul>
<li>Вкладка «Network»: работа над ней пока не закончена, но первый шаг в её развитии уже позволяет наблюдать за исходящим и входящим HTTP-трафиком, что очень полезно для отладки Ajax-приложений.</li>
<li>Редактирование DOM: одна из ключевых возможностей третьей альфы Opera Dragonfly — это поддержка редактирования DOM. Всего существует два режима редактирования: первый позволяет редактировать, добавляеть или удалять атрибуты и фрагменты текста в режиме реального времени. Он активируется двойным кликом на атрибуте, его значении или на фрагменте текста. Второй режим позволяет редактировать DOM в виде простого текста — например, добавлять в DOM новые элементы. Этот режим активируется двойным кликом по открывающему или закрывающему тегу элемента. После этого сам элемент и его потомки превращаются в простое текстовое поле. В данный момент существует известная проблема с первым типом редактирования, которая не позволяет выйти из режима редактирования после нажатия ввода. Эта проблема без лишнего шума будет поправлена в следующих обновлениях.</li>
<li>Общие интерфейсные улучшения: мы сделали множество интерфейсных улучшений в Opera Dragonfly, включая способ, при помощи которого выбирается страница для отладки. Теперь таб, выбранный в браузере, и является страницей для отладки.</li>
</ul>

<p>Последние события в жизни Opera Dragonfly вы можете узнать в <a href="http://my.opera.com/dragonfly/blog/">тематическом блоге</a>.</p>

<h2 id="acid3">Acid 3 — 100/100</h2>

<p>Бета Opera 10 набрала сто из ста возможных очков в <a href="http://acid3.acidtests.org/">тесте Acid 3</a> — рисунок 4. Все будущие сборки браузера будут проходить этот тест полностью.</p>

<img src="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/figure4.jpg" alt="Тест Acid 3 с результатом сто из ста" />
<p class="comment">Рисунок 4: тест Acid 3 показывает результат «сто из ста».</p>

<h2 id="summary">Заключение</h2>

<p>Надеюсь вам понравился тест-драйв беты Opera 10 с новым движком Opera Presto 2.2 внутри. Следите за новостями о новых улучшениях и, пожалуйста, не стесняйтесь делиться с нами вашими впечатлениями, чтобы помочь нам сделать следующий релиз настолько хорошим, насколько это вообще возможно.</p>

<p><strong>Полезные ссылки:</strong></p>
<ul>
<li><a href="http://www.opera.com/docs/changelogs/">Список изменений</a>. Для тех, кто интересуется полным списком обновлений.</li>
<li><a href="http://dev.opera.com/articles/view/presto-2-1-web-standards-supported-by/">Статья: Opera Presto 2.1 — поддержка веб-стандартов в движке Opera</a>. Статья с Dev.Opera освещающая поддержку веб-стандартов в предыдущей версии движка Opera Presto 2.1.</li>
<li><a href="http://dev.opera.com/articles/view/opera-ua-string-changes/">Статья: Изменения формата строки «User Agent»</a>. Новый формат строки «User Agent», появившийся в новой бете и оставшийся для будущих версий, может кого-то удивить. Статья рассказывает о сделанных изменениях и объясняет их причины.</li>
</ul>
