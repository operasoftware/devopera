Title: Расширения для Opera: кнопки, бейджи и всплывающие окна
----
Date: 2010-10-29 12:43:52
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

<h2>Вступление</h2>

<p>Эта статья рассказывает о базовых шагах по созданию и управлению кнопками на панели браузера и различными их компонентами.</p>

<h2>Содержимое</h2>
<ul>
<li><a href="#toolbar_buttons">Кнопки на панели браузера</a></li>
<li><a href="#create_buttons">Создание кнопок</a></li>
<li><a href="#adding_button">Добавление кнопки на панель браузера</a></li>
<li><a href="#remove_button">Удаление кнопки с панели браузера</a></li>
<li><a href="#create_popup">Создание всплывающего окна</a></li>
<li><a href="#popup_contents">Содержимое всплывающего окна</a></li>
<li><a href="#popup_dimensions">Размеры всплывающего окна</a></li>
<li><a href="#creating_badge">Создание бейджа</a></li>
<li><a href="#display_badge">Показ бейджа</a></li>
<li><a href="#api">Ссылки на API</a></li>
</ul>

<h2 id="toolbar_buttons">Кнопки на панели браузера</h2>

<p>Расширение позволяет поместить одну кнопку на панель браузера Opera, справа от поля поиска. Кнопка может включать иконку размером 18×18 пикселов, подсказку (показывается при наведении), бейдж статуса и всплывающее окно.</p>

<h2 id="create_buttons">Создание кнопок</h2>

<p>Код создания кнопки должен быть добавлен в элемент <code>script</code> файла <code>index.html</code>. В этом примере мы выполняем код в момент срабатывания события <code>load</code>.</p>

<p>Первый шаг — это определение свойств кнопки. Сделать это можно с помощью объекта <code>ToolbarUIItemProperties</code>. Например:</p>

<pre><code>var ToolbarUIItemProperties = {
    disabled: false,
    title: &quot;Пример кнопки&quot;,
    icon: &quot;icons/button.png&quot;
}</code></pre>

<p>После того, как вы задали свойства кнопки в <code>ToolbarUIItemProperties</code>, вам необходимо создать собственно кнопку с помощью метода <code>createItem</code>:</p>

<pre><code>var theButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);</code></pre>

<p>Всего, с помощью объекта <code>ToolbarUIItemProperties</code>, вы можете определить 5 свойств:</p>

<h3>disabled</h3>

<p>Определяет, активна ли кнопка. Значение по умолчанию — <code>true</code> (неактивна), принимает булево значение. Вы можете сделать кнопку неактивной следующим образом:</p>

<pre><code>theButton.disabled = true;</code></pre>

<h3>title</h3>

<p>Свойство <code>title</code> устанавливает подсказку, которая показывает при наведении пользователем курсора на кнопку.</p>

<pre><code>theButton.title = &quot;Это подсказка&quot;;</code></pre>

<h3>icon</h3>

<p>Свойство <code>icon</code> устанавливает иконку, которая используется кнопкой. Если вы укажете картинку размером отличную от 18×18 пикселов, то она будет автоматически отмасштабирована.</p>

<pre><code>theButton.icon = &quot;icons/beautiful-toobar-icon.png&quot;;</code></pre>

<h3>onclick</h3>

<p>Эта функция вызывается, когда пользователь кликает по кнопке и возбуждается событие <code>click</code>.</p>

<pre><code>theButton.onclick = function(){ /* do something */ };</code></pre>

<h3>onremove</h3>

<p>Эта функция вызывается, когда кнопка удаляется из <code>ToolbarContext</code> и вызывается событие <code>remove</code>.</p>

<pre><code>theButton.onremove = function(){ /* делаем что-нибудь */ };</code></pre>

<h2 id="adding_button">Добавление кнопки на панель браузера</h2>

<p>После создания кнопки нам необходимо поместить её на панель Opera. Сделаем это с помощью метода <code>addItem</code>:</p>

<pre><code>opera.contexts.toolbar.addItem(theButton);</code></pre>

<p>Пробуйте запустить <a href="/articles/view/opera-extensions-buttons-badges-and-popups/example-button.oex">пример</a>. Он не делает ничего особенного, так как вы ещё не определили никаких действий для кнопки.</p>

<h2 id="remove_button">Удаление кнопки с панели браузера</h2>

<p>Кнопка может быть удалена с панели браузера методом <code>removeItem</code>:</p>

<pre><code>opera.contexts.toolbar.removeItem(theButton);</code></pre>

<h2 id="create_popup">Создание всплывающего окна</h2>

<p>Теперь у вас есть кнопка, вы хотите, чтобы она что-нибудь умела. При клике на кнопку может быть показано всплывающее окно. Всплывающее окно это окно с указанными шириной и высотой. Вы можете подгружать в него страницы, находящиеся в сети или идущие прямо с вашим расширением.</p>

<p>Чтобы создать всплывающее окно, вам нужно определить свойства объекта <code>Popup</code> с помощью объекта <code>ToolbarUIItemProperties</code>:</p>

<pre><code>var ToolbarUIItemProperties = {
    disabled: false,
    title: &quot;Пример кнопки&quot;,
    icon: &quot;icons/button.png&quot;,
    popup: {
        href: &quot;popup.html&quot;,
        width: 300,
        height: 300
    }
}</code></pre>

<h2 id="popup_contents">Содержимое всплывающего окна</h2>

<p>Для указания содержимого всплывающего окна используется свойство <code>href</code>. Вы можете указать на любую страницу в сети, используя её абсолютный URL:</p>

<pre><code>theButton.popup.href = <a href="http://www.opera.com/" target="_blank">http://www.opera.com/&quot;;</a></code></pre>

<p>Так же вы можете подгрузить страницу, поставляющуюся с расширением, указав её относительный адрес:</p>

<pre><code>theButton.popup.href = &quot;popup.html&quot;;</code></pre>

<p>Эта страница может быть обычной HTML-страницей, никаких изменений вносить не нужно. Обратите внимание: если вы измените свойство <code>href</code>, в момент когда всплывающее окно открыто, то оно закроется.</p>

<h2 id="popup_dimensions">Размеры всплывающего окна</h2>

<p>Размеры всплывающего окна указываются в пикселах с помощью свойств <code>width</code> и <code>height</code>:</p>

<p>width:</p>
<pre><code>theButton.popup.width = 300;</code></pre>

<p>height:</p>
<pre><code>theButton.popup.height = 300;</code></pre>

<p>Всплывающее окно будет создано одновременно с кнопкой в момент вызова метода <code>createItem</code>.</p>

<p>Попробуйте пример <a href="/articles/view/opera-extensions-buttons-badges-and-popups/example-button-popup.oex">кнопки со всплывающим окном</a>. Если вы пробовали пример из статьи <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/">Opera extensions hello world example</a>, то он покажется вам очень знакомым.</p>

<h2 id="creating_badge">Создание бейджа</h2>

<p>Бейдж это наложение поверх иконки кнопки с текстовым содержимым. Чаще всего они используются для показа количества чего-либо, например непрочитанных писем или сообщений. Чтобы создать бейдж, вам нужно определить свойства объекта <code>Badge</code> через объект <code>ToolbarUIItemProperties</code>:</p>

<pre><code>var ToolbarUIItemProperties = {
    disabled: false,
    title: &quot;Пример кнопки&quot;,
    icon: &quot;icons/button.png&quot;,
    badge: {
        display: &quot;block&quot;,
        textContent: &quot;12&quot;,
        color: &quot;white&quot;,
        backgroundColor: &quot;rgba(211, 0, 4, 1)&quot;
    }
}</code></pre>

<p>Бейдж имеет 4 свойства, которые могут быть настроены:</p>

<h2 id="display_badge">Показ бейджа</h2>

<p>Свойство <code>display</code> показывает и скрывает бейдж. Корректными значениями являются <code>block</code> и <code>none</code>. Значение по умолчанию: <code>none</code>. Сделать бейдж видимым можно так:</p>

<pre><code>theButton.badge.display = &quot;block&quot;;</code></pre>

<h3>textContent</h3>

<p>Текст бейджа может быть выставлен через свойство <code>textContent</code>. Бейдж имеет ограниченное место для отображения текста, поэтому постарайтесь быть лаконичными. </p>

<pre><code>theButton.badge.textContent = &quot;12&quot;;</code></pre>

<h3>color and backgroundColor</h3>

<p>Свойства <code>color</code> и <code>backgroundColor</code> устанавливают цвет текста и цвета фона бейджа. Они принимают значения в шестнадцатеричном (HEX) формате, RGBA и наименования цвета.</p>

<pre><code>theButton.badge.color = &quot;white&quot;;</code></pre>

<pre><code>theButton.badge.backgroundColor: = &quot;rgba(211, 0, 4, 1)&quot;;</code></pre>

<p>Вы можете попробовать пример <a href="/articles/view/opera-extensions-buttons-badges-and-popups/button-badge-popup.oex">кнопки с бейджем</a> и изучить различные пути создания и управления элементами пользовательского интерфейса расширений для Opera.</p>

<p>Вы можете обратиться к <a href="http://dev.opera.com/addons/extensions/#apireference">API расширений для Opera</a>, чтобы получить полную информацию о различных объектах и методах.</p>

