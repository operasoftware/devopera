Title: Файл config.xml
----
Date: 2012-08-27 15:12:50
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

<dl class="apicontents">
   <dt><a href="/articles/view/extensions-api-config-widget-ru">Элемент <code>widget</code></a></dt>
   <dd>Элемент-контейнер, который заключает в себе все остальные элементы файла config.xml.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-name-ru">Элемент <code>name</code></a></dt>
   <dd>Содержит название расширения.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-description-ru">Элемент <code>description</code></a></dt>
   <dd>Содержит описание предназначения расширения.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-author-ru">Элемент <code>author</code></a></dt>
   <dd>Содержит информацию об авторе расширения.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-license-ru">Элемент <code>license</code></a></dt>
   <dd>Содержит лицензию на использование расширения.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-icon-ru">Элемент <code>icon</code></a></dt>
   <dd>Указывает файл иконки расширения.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-content-ru">Элемент <code>content</code></a></dt>
   <dd>Определяет <a href="http://www.w3.org/TR/widgets/#custom-start-file">стартовый файл</a> расширения, загружаемый браузером при запуске расширения.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-feature-ru">Элемент <code>feature</code></a></dt>
   <dd>Определяет некоторые свойства расширения, такие как, например, возможность отображения в Экспресс-панели.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-preference-ru">Элемент <code>preference</code></a></dt>
   <dd>Позволяет разработчику установить настройки. Эти данные хранятся в виде пары имя-значение и доступны в расширении через интерфейс <code>widget.preferences</code>.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-access-ru">Элемент <code>access</code></a></dt>
   <dd>Позволяет авторам дать расширению доступ к внешним сетевым ресурсам.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-span-ru">Элемент <code>span</code></a></dt>
   <dd>Служит контейнером для какого-либо текста, например в многоязычных расширениях.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-xml-lang-ru">Атрибут <code>xml:lang</code></a></dt>
   <dd>Указывает язык текста элемента.</dd>
   
   <dt><a href="/articles/view/extensions-api-config-dir-ru">Атрибут <code>dir</code></a></dt>
   <dd>Задает направление текста элемента.</dd>
</dl>

<h2 id="overview">Краткий обзор</h2>

<p>Обязательный файл config.xml дает браузеру Opera такую важную информацию, как название, описание и версия расширения.</p>

<p>Большая часть сведений (например, название, описание, имя автора расширения), кроме того, может пригодиться пользователю, т.к. она отображается в различных элементах пользовательского интерфейса.</p>

<p>Корректный файл config.xml является обязательным для любого расширения браузера Opera.</p>
	
<p>Подробную документацию о config.xml смотрите здесь:</p>

<ul>
    <li><a href="http://www.w3.org/TR/widgets">W3C Widgets Packaging and Configuration Specification</a></li>
    <li><a href="http://www.w3.org/TR/widgets-access/">W3C Widget Access Request Policy</a></li>
</ul>

<h2 id="example">Пример</h2>
	
<p>Ниже дан пример файла config.xml, содержащего обычные элементы данных: <code>название расширения</code>, <code>имя автора</code> и <code>описание</code>. Среди прочих в файле есть следующие два важных элемента:</p>
<dl>
    <dt><code>&lt;feature&gt;</code> element</dt>
    <dd>Поскольку расширение должно демонстрировать новости блога <a href="http://my.opera.com/chooseopera/blog/">Choose Opera blog</a> в Экспресс-панели, данный элемент указывает, что будет использоваться свойство &quot;opera:speeddial&quot;.</dd>
    <dt><code>&lt;access&gt;</code> element</dt>
    <dd>Чтобы получать последние новости с http://my.opera.com, используется элемент <code>access</code>, запрашивающий доступ для обмена и получения информации со всего домена.</dd>
</dl>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://my.opera.com/chooseopera/xml/rss/blog/&quot; viewmodes=&quot;minimized&quot; version=&quot;1.0&quot;&gt;

  &lt;name&gt;Opera news&lt;/name&gt;

  &lt;author&gt;John Smith&lt;/author&gt;
  &lt;description&gt;Stay up to date with the latest news from Opera, served to you inside Speed Dial&lt;/description&gt;
  &lt;icon src=&quot;images/icon.64x64.png&quot;/&gt;

  &lt;feature name=&quot;opera:speeddial&quot; required=&quot;true&quot;&gt;
    &lt;param name=&quot;url&quot; value=&quot;http://my.opera.com/chooseopera/blog/&quot;/&gt;
  &lt;/feature&gt;

  &lt;access origin=&quot;http://my.opera.com/&quot; subdomains=&quot;true&quot;/&gt;
 	
&lt;/widget&gt;</code></pre>		

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/757--configxml/config.png" alt="Extension details taken from the config.xml file." /></p>
<p class="caption">Рисунок 1: Так отображается информация о расширении, находящаяся в файле config.xml.</p>

<p>Рисунок 1 демонстрирует окно управления расширением, в котором указана информация, полученная из показанного выше файла config.xml.</p>

<p>Как видно из примера, большая часть информации, находящейся в файле config.xml, помогает пользователю узнать различные подробности о расширении. В следующих разделах описаны другие элементы и атрибуты, о которых нужно знать при создании файла config.xml.</p>

<h2>Для дополнительного чтения</h2>

<p>Читайте  статью на Dev.Opera <a href="/articles/view/config-xml-howto/">Азы config.xml</a>, детально описывающую работу с файлом config.xml.</p>
