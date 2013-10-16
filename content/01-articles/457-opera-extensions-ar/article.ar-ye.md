Title: !Opera extensions ‏قل مرحبا لـ 
----
Date: 2011-05-19 18:28:37
----
Lang: ar-ye
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<div dir="rtl" style="text-align:right;">
<h2>مقدمة</h2>

<p>هذا المقالة تأخذك خلال الخطوات الأساسية لإنشاء أول إضافة لك (Extensions or Add-on). ستقوم بإنشاء زر (button) على شريط الأدوات لـ Opera، عندما يتم الضغط علية سيقوم بعرض نافذة منبثقة تحمل في داخلها الرسالة &quot;!Hello World&quot;. الإضافات في Opera يتم كتابتها باستخدام معايير الويب العادية، كل ما تحتاجه للبدا هو نسخة من Opera 11 ومحرر النصوص المفضل لديك.</p>

<h2>الإعدادات تبع الإضافة</h2>

<p>أولاً، ستقوم بإنشاء ملف الإعدادات، الذي يحتوي على البيانات الوصفية (meta data) التي تصف الإضافة. هنا يتم وضع بعض معلومات مثل اسم الإضافة، اسم الكاتب و الأيقونة التي ستظهر في مدير الإضافات (Extension Manager). الإضافات في Opera تستخدم الـ W3C Widgets packaging and configuration format، والتي قد تكون مألوفة لديك من Opera Widgets.</p>

<p>أمض قدماً وقم بإنشاء ملف الإعدادات على النحو التالي:</p>

<pre dir="ltr" style="text-align:left;"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://www.example.org/helloworld&quot;&gt;
	&lt;name&gt;Hello extensions!&lt;/name&gt;
	&lt;description&gt;A simple hello world example&lt;/description&gt;
  	&lt;author href=&quot;yourURL&quot; email=&quot;yourEMail&quot;&gt;Enter your name here&lt;/author&gt;
  	&lt;icon src=&quot;hello.png&quot;/&gt;
&lt;/widget&gt;</code></pre>

<p>قم بحفظ الملف باسم <code>config.xml</code> في مجلد مستقل، وليكن &quot;oexten&quot;.</p>

<h2>إنشاء أيقونة الإضافة</h2>

<p>ربما قد لاحظت عنصر الـ icon element tag) icon) في ملف الإعدادات. يقوم هذا العنصر بتعيين أيقونة في مدير الإضافات و موقع الإضافات في Opera. من المفضل إنشاء أيقونة بإبعاد 64×64 بكسل.</p>

<p>قم بتحميل أيقونة  <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/hello.png">hello.png</a> وقم بحفظها في مجلد قم بتسميته &quot;icons&quot; داخل مجلد &quot;oexten&quot;، الذي قمنا بإنشائه سابقاً. </p>

<h2>إنشاء زر (button) على شريط أدوات Opera</h2>

<p>بعد أن قمت بوضع الإعدادات للإضافة، يمكنك البدا في إنشاء الشفرة (code) الفعلية. إنشاء زر، والذي سيتم إضافته إلى شريط الأدوات. يمكن القيام بذلك على النحو التالي:</p>

<pre dir="ltr" style="text-align:left;"><code>&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;script&gt;
       window.addEventListener(&quot;load&quot;, function(){
        var theButton;
        var ToolbarUIItemProperties = {
          title: &quot;Hello World&quot;,
          icon: &quot;hello-button.png&quot;,
          popup: {
            href: &quot;popup.html&quot;,
            width: 110,
            height: 30
          }
        }
        theButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);
        opera.contexts.toolbar.addItem(theButton);
      }, false);
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>قم بحفظ الملف باسم  <code>index.html</code> في مجلد &quot;oexten&quot;</p>

<p>إي إضافة للـ Opera تحتاج ملف البدا (start file)، عاده يسمى index.html. يمكنك تغيير اسم الملف لكن يحب أن تخصص ذلك في ملف الإعدادات باستخدام عنصر الـ <code dir="ltr">&lt;src  content=&quot;&quot; /&gt;</code>. هذا الملف عبارة عن قالب HTML مع سكربت الذي يقوم بإنشاء عنصر واجهة المستخدم (UI elements). عنصر الـ body لا يتم استخدامه.</p>

<p>السكربت سينشئ زر على شريط الأدوات مع عدة خواص (properties). أيضا سينشئ تلميح (tooltip) مع أيقونة 18×18 بكسل. أيضا سينشئ نافذة منبثقة للزر مع الحجم المحدد, مع صلة الى حيث تم تعيين النافذة المنبثقة (UI).</p>

<p>يمكنك تحميل  <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/hello-button.png">hello-button.png icon</a> وحفظها في المجلد الرئيسي &quot;oexten&quot;</p>

<h2>إنشاء نافذة منبثقة</h2>

<p>لقد قمت بإنشاء زر سابقاً، وقمت بتعيين قياس النافذة المنبثقة، لم يبق لك سوى إنشاء المحتوي الذي ستعرضه النافذة المنبثقة. المحتوى مجرد مستند HTML، يمكنك أاستخدام ما يحلوا لك JavaScript، CSS، HTML أو أي من التقنيات الأخرى التي تستخدمها عادتاً مع مستند HTML عادي. ستقوم بإنشاء صفحة تحتوي على &quot;!hello world&quot; فقط هذا الجملة:</p>

<pre dir="ltr" style="text-align:left;"><code>&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
  	&lt;title&gt;Hello World!&lt;/title&gt;
  	&lt;style&gt;
  		h1 {
  			font: 14px helvetica, arial, sans-serif;
  			text-align: center;
  		 }
  	&lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
  	&lt;h1&gt;Hello World!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>قم بحفظ الملف باسم  <code>popup.html</code> في مجلد &quot;oexten&quot;.</p>

<h2>تغليف وتثبيت الإضافة</h2>

<p>لحد الآن لديك إضافة شبه منتهية. بينما تقوم بالتطوير، يمكنك سحب ملف config.xml إلى Opera وسيقوم بتثبيتها في وضع التطوير (Developer Mode). يسمح لك ذلك بتعديل الملفات وتحديث الإضافة بضغطة زر فقط، بدلاً من باستمرار إزالة وإعادة تثبيت الإضافة.</p>

<p>إذا أنت راضي عن العمل الذي قمت بة وأصبح جاهز للنشر، لم يتبقى سوى تحديد كل الملفات وضغطهم. بعد أن تقوم بذلك, يجب أن تعيد تسمية لاحقة الملف المضغوط إلى HelloExtension.oex ( دائماً تذكر تغيير لاحقة الملف المضغوط ) وبهذا أصبحت الإضافة جاهزة لاختبارها.</p>

<div class="note" style="background-position: 47.2em 0.6em;padding:0.5em 30px 0.5em 0.5em;margin-bottom: 0.75em;">
<h3>ملاحظة:</h3>
<p>يجب أن تتأكد عند ضغط الملفات أن الملفات والمجلدات تبع الإضافة موجودين في الـ root في الملف المضغوط، وليس بداخل مجلد، ولضمان ذلك، يجب أن تقوم بضغط الملفات من داخل مجلد الإضافة، وليس ضغط مجلد الإضافة نفسه.</p>
</div>


<p>يمكنك تحميل  <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/hello.oex">HelloExtension</a> الإضافة النهائية.</p>

<p>لتثبيتها كمستخدم عادي، يعني ليس في وضع التطوير، قم بسحب الإضافة إلى Opera وسيسألك أن كنت تريد التثبيت. سوف ترى الأيقونة التي قمت بعملها في ملف الإعدادات على شريك الأدوات. أضغط على الزر لترى الرسالة التي قمت بعملها.</p></div>
