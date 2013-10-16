Title: Элемент icon
----
Date: 2012-08-28 07:17:05
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

<p>Если в пакете расширения есть файл с именем «icon» и с одним из расширений .svg, .ico, .png, .gif или .jpg (например: «icon.png»), то он будет использоваться в качестве иконки расширения по умолчанию.</p>

<p>Элемент <code>&lt;icon&gt;</code> используется для явного указания на файл иконки расширения. Атрибуты <code>width</code> и <code>height</code> являются необязательными. Кроме того, они не нужны для SVG файлов. Если же для иконки используются растровые изображения (например, PNG, GIF, и т.п.), то Opera автоматически устанавливает нужный размер иконки.</p>

<ul>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-width-attribute">width</a></code>: Числовое значение, выбранное автором в качестве желаемой ширины иконки. Должно быть больше 0, а единицей длины служат принятые в CSS пикселы (px).</li>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-height-attribute">height</a></code>: То же, что и с длиной.</li>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-src-attribute">src</a></code>: Указывает путь к файлу внутри расширения (обязательный атрибут).</li>
</ul>

<h2>Пример</h2>

<p>В следующем примере определены две иконки. Иконка размером 64px будет показана в окне управления расширением, а иконка размером 18px (является опциональной) будет использоваться для кнопки в панели инструментов.</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/myExtension&quot; version=&quot;1.0&quot;&gt;
  ...
  &lt;icon src=&quot;images/icon_64.png&quot;/&gt;
  &lt;icon src=&quot;images/icon_18.png&quot;/&gt;
  ...
&lt;/widget&gt;</code></pre>

<h2>Для дополнительного чтения</h2>

<p>Частью нашей документации является коллекция, именуемая <a href="/articles/view/creating-effective-opera-extension-icons/">Полезные советы для создания эфективных иконок расширений</a>.</p>
