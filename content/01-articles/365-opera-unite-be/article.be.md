Title: Асновы Opera Unite для распрацоўнікаў - абноўленыя
----
Date: 2010-06-21 07:57:22
----
Lang: be
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

	<h2>Уводзіны</h2>

<p>Opera Unite уяўляе сабой вэб-сервер, які працуе ўсярэдзіне браўзара Opera, які дазваляе рабіць дзіўныя рэчы. Адным націскам на кнопку вы можаце падзяліцца малюначкамі, дакументамі, відэа, музыкай, сумеснымі гульнямі і мноствам іншых рэчаў з сябрамі і калегамі. У рамках <a href="http://labs.opera.com/news/2009/06/16/">Opera Labs</a> некалькі месяцаў назад мы выпусцілі раннюю версію сервера Opera Unite, сёння ж гаворка пойдзе аб <a href="http://www.opera.com/browser/next/">бэта-версіі Opera 10.10</a>, якая прадстаўляе новую палепшаную версію Opera Unite.</p><p>Гэты артыкул дапаможа вам пачаць шлях па дарозе распрацоўкі прыкладанняў Opera Unite - яна распавядае пра тое, як сервер Opera Unite працуе і што ён можа. Ніжэй я сцісла распавяду вам пра базавыя ідэі Opera Unite, пакаджу як запусціць вэб-сервер у вашым браўзары і прадэманструю прыклад таго, як напісаць прыкладанне для Opera Unite у выглядзе простага блога.</p><p>Утрыманне артыкула па парадку:</p><ul>	<li><a href="#concepts">Асноўныя паняцці</a>		<ul>			<li><a href="#conceptsunite">Што такое Opera Unite?</a></li>			<li><a href="#conceptsproxy">Проксі Opera Unite</a></li>			<li><a href="#conceptsapplications">Прыкладанні Opera Unite</a></li>		</ul>	</li>	<li><a href="#enabling">Запуск вэб-сервера</a></li>	<li><a href="#application">Стварэнне прыкладання Opera Unite: просты блог</a>		<ul>			<li><a href="#applicationstructure">Файлы і тэчкі прыкладання</a></li>			<li><a href="#applicationconfig">Наладжвальны прыкладанне: config.xml</a></li>			<li><a href="#applicationindex">Злучаем усё разам: index.html</a></li>			<li><a href="#applicationscript">Пішам скрыпт: script.js</a>				<ul>					<li><a href="#scriptlisteners">Апрацоўнікі запытаў</a></li>					<li><a href="#scriptlist">Паказваны спіс запісаў</a></li>					<li><a href="#scriptentry">Паказваны запіс</a></li>					<li><a href="#scriptfrom">Паказваны форму для дадання запісу</a></li>					<li><a href="#scriptsave">Захаванне запісу</a></li>				</ul>			</li>		</ul>	</li>	<li><a href="#using">Выкарыстанне прыкладання Opera Unite</a></li>	<li><a href="#viewing">Прагляд прыкладання Opera Unite</a></li>	<li><a href="#uploading">Загрузка прыкладання Opera Unite на unite.opera.com</a>		<ul>			<li><a href="#uploadingbefore">Перад публікацыяй</a></li>			<li><a href="#uploadingprocess">Публікацыя прыкладання</a></li>			<li><a href="#uploadinghowto">Як я магу прапанаваць скарыстацца маім прыкладаннем? </a></li>			<li><a href="#uploadingapproval">Ухвала прыкладання Opera Unite</a>				<ul>					<li><a href="#uploadingguides">Якім правілам трэба адпавядаць для ўхвалы прыкладання?</a></li>				</ul>			</li>		</ul>	</li>	<li><a href="#readmore">Далейшае чытанне</a></li></ul>
<h2 id="concepts">Асноўныя паняцці</h2>

<p>Гэта частка распавядзе пра асновы працы Opera Unite і пра тое, як збіраюцца прыкладанні для Opera Unite.</p><h3 id="conceptsunite">Што такое Opera Unite?</h3><p>Opera Unite - гэта вэб-сервер, які працуе ўсярэдзіне браўзара Opera. Ён дазваляе карыстачу ўсталёўваць прыкладанні і выкарыстоўваць іх разам з сябрамі, калегамі ці нават адразу з усімі, пры жаданні. Усё ўзаемадзеянне адбываецца праз цэнтральны сервер Opera Unite, для чаго Opera Unite выкарыстоўвае проксі паміж серверам і яго кліентамі (даступнымі на <a href="http://unite.opera.com/">unite.opera.com</a>), каб пазбегнуць дадатковай налады файрвола.</p><h3 id="conceptsproxy">Проксі Opera Unite</h3><p>Калі карыстач запускае вэб-сервер у хатняй сетцы, у гэтай сетцы ёсць прылада, якое выступае ў ролі файрвола, якое патрабуе ў дадатковай наладзе. Гл. малюнак 1:</p>

<p><img src="/articles/view/opera-unite-developer-primer-revisited/traditio.jpg" alt="Традыцыйная канфігурацыя вэб-сервера" /></p>
<p class="comment">Малюнак 1: традыцыйная канфігурацыя вэб-сервера</p><p>Звычайна, карыстачу трэба адкрыць порты і наладзіць іх пераадрасаванне на лакальны кампутар для таго, каб людзі за файрволам маглі мець доступ да сервера.</p><p>Аднак калі вы выкарыстоўваеце Opera Unite, ніякай налады не патрабуецца, што відаць на малюнку 2.</p>

<p><img src="/articles/view/opera-unite-developer-primer-revisited/operauni.jpg" alt="Канфігурацыя пры выкарыстанні сервера Opera Unite у браўзары" /></p><p class="comment">Малюнак 2: канфігурацыя пры выкарыстанні сервера Opera Unite у браўзары</p><p>Вэб-сервер ініцыялізуе падлучэнне да проксі і выкарыстоўвае гэта падлучэнне для перадачы зваротна інфармацыі пра ўваходныя запыты.</p><p class="note">Звернеце ўвагу, што проксі - гэта ўсяго толькі запасны механізм, які выкарыстоўваецца, каб напэўна перадаць вашы дадзеныя, у выпадку калі праца з <abbr title="Network Address Translation">NAT</abbr> па нейкім чынніку немагчымая. Таксама, Opera Unite падтрымлівае працу праз <abbr title="Universal Plug and Play">UPnP</abbr>, што дазваляе перадаваць дадзеныя праз прамое падлучэнне, калі гэта магчымасць даступная. Гэта можа значна паскорыць працу вашых прыкладанняў за кошт працы без проксі-сервера. Аднак выкарыстанне прамога падлучэнне застаецца на сумленні кожнага асобнага прыкладання і не заўсёды гарантуе хутчэйшую працу прыкладання. UPnP не мае механізму аўтарызацыі і мае на ўвазе, што ўсе лакальныя сістэмы і іх карыстачы з&#39;яўляюцца даверанымі.</p><h3 id="conceptsapplications">Прыкладанні Opera Unite</h3><p>Прыкладанне Opera Unite складаецца з файла <code>config.xml</code>, утрымоўвалага базавую інфармацыю пра прыкладанне, і цалкам звычайнай для сайта структуры файлаў. У гэтым сэнсе, яны вельмі падобныя на <a href="http://dev.opera.com/articles/view/creating-your-first-opera-widget/">віджэты для Opera</a>, хоць то, якім чынам прыкладанні Opera Unite запускаюцца і выкарыстоўваецца, моцна адрозніваецца ад віджэтов. Іншае адрозненне складаецца ў тым, што, у адрозненне ад віджэтов Opera, файл <code>config.xml</code> для прыкладанняў Opera Unite павінен утрымоўваць элемент <code>feature</code>:</p><pre><code>&lt;feature name=&quot;http://xmlns.opera.com/webserver&quot;&gt;
&lt;param name=&quot;type&quot; value=&quot;service&quot;/&gt;
&lt;param name=&quot;servicepath&quot; value=&quot;blog&quot;/&gt;
&lt;/feature&gt;</code></pre>
<p>У гэтым выпадку, для прыкладання становіцца даступны адмысловы JavaScript-аб&#39;ект <code>opera.io.webserver</code>. Больш падрабязна пра гэта можна прачытаць у <a href="http://dev.opera.com/libraries/unite/">дакументацыі па JavaScript API для сервера Opera Unite</a>.</p><p>Паколькі прыкладанні Opera Unite выкарыстоўваюць тыя ж тэхналогіі, што і віджэты Opera, то, запусціўшы сервер Opera Unite, вы зможа лёгка кантраляваць і наладжваць яго пры дапамозе HTML, CSS і JavaScript. Хоць, прыкладанні Opera Unite атрымліваюць доступ да функцый, звычайна недаступным для віджэтов ці вэб-старонак, напрыклад - <a href="http://dev.opera.com/libraries/fileio/" title="JavaScript API для File I/O">ізаляваная файлавая сістэма</a> (пясочніца).</p><p class="note">Калі вы жадаеце пазнаць больш пра віджэтах Opera, вы можаце знайсці ўсю інфармацыю ў <a href="http://dev.opera.com/addons/widgets/">артыкулах пра віджэтах на сайце Dev.Opera</a>.</p><p>Рухаемся далей - запускаем Opera Unite і пачынаем збіраць простае прыкладанне.</p>
<h2 id="enabling">Запуск вэб-сервера</h2>

<p>Для большай бяспекі і прадукцыйнасці вэб-сервер не запускаецца па змаўчанні пра запуску Opera. Для запуску сервера трэба абраць у меню Прылады &gt; Сервер Opera Unite &gt; Уключыць Opera Unite, або запусціць адно з прыкладанняў Opera Unite. Адразу пасля гэтага з&#39;явіцца дыялог, які прапануе вам увесці лагін і пароль - тыя ж, што выкарыстоўваюцца на <a href="http://my.opera.com/">My Opera</a>.</p><p class="note">Звернеце ўвагу, што для выкарыстання ў Opera Unite падыходзяць толькі тыя лагіны My Opera, што не ўтрымоўваюць недапушчальных для URL знакаў: &quot;/&quot;, &quot;.&quot;, &quot;_&quot; і прабелаў.</p><p>На наступным кроку вам трэба назваць прыладу. Вы можаце абраць імя з выпадальнага спісу ці паказаць любое іншае. Імя прылады будзе ідэнтыфікаваць ваш сервер для проксі. Сервер будзе даступны па адрасах накшталт гэтых:</p><pre><code>http://devicename.username.proxyaddress/applicationname</code></pre><p>Такім чынам, для таго, каб убачыць прыкладанне <code>test</code> на серверы <code>your_device</code> на <code>operaunite.com</code> вам трэба адкрыць гэты URL:</p><pre><code>http://your_device.your_username.operaunite.com/test</code></pre>
<h2 id="application">Стварэнне прыкладання Opera Unite: просты блог</h2>

<p>А зараз кароткі аповяд пра выраб простага прыкладання для вядзення блога, які дазволіць карыстачу публікаваць запісы. Захаваныя запісы неадкладна становяцца даступныя ўсяму свету пры дапамозе сервера.</p><p>Прыкладанне складаецца з дзвюх частак: першая - гэта тыя старонкі, якія дазваляюць уладальніку прыкладання кіраваць і наладжваць яго, другая - гэта старонкі, бачныя ўсім карыстачам, якія і аддае сервер.</p><p>Тыя, каму не трываецца паспрабаваць, могуць загрузіць <a href="/articles/view/opera-unite-developer-primer-revisited/blog.ua">код блога для Opera Unite</a>. Ён спакаваны ў файл з пашырэннем <code>.ua</code> - такое пашырэнне па змаўчанні маюць усе прыкладанні Opera Unite. Вы можаце разархіваваць пакет, каб зірнуць на зыходны код ці проста перацягнуць пакет у браўзар Opera, каб запусціць прыклад блога для Opera Unite.</p><h3 id="applicationstructure">Файлы і тэчкі прыкладання</h3>

<p>Наша прыкладанне будзе ўтрымоўваць файлы і тэчкі, намаляваныя на малюнку 3:</p><p><img src="/articles/view/opera-unite-developer-primer-revisited/structur.jpg" alt="Структура тэчкі прыкладання" /></p><p class="comment">Малюнак 3: структура тэчкі прыкладання</p><ul>	<li><code>config.xml</code>: файл налад прыкладання.</li>	<li><code>index.html</code>: лагічны пачатак прыкладання, куды падлучаюцца скрыпты.</li>	<li><code>script/script.js</code>: непасрэдны код прыкладання.</li></ul>
<p>З паказаных файлаў строга неабходны толькі <code>config.xml</code> і <code>index.html</code>.</p><p>Таксама вы можаце ўключыць у склад пакета тэчку <code>public_html</code> - чароўную тэчку для прыкладанняў Opera Unite. Звычайна файлы і тэчкі ўсярэдзіне вашага прыкладання недаступныя карыстачам, якія запытваюць прыкладанне, таму, калі вы захочаце аддаць карыстачу якой небудзь файл стыляў, статычныя малюначкі ці што-небудзь накшталт гэтага, то пакладзяце файлы менавіта ў гэту тэчку. Гэтыя файлы будуць прывязаны да адноснага кораня вашага прыкладання і, да прыкладу, файл <var>cats.png</var> усярэдзіне тэчкі <code>public_html</code> прыкладанні <code>helloOperaUnite</code> будзе даступны па адрасе:</p><pre><code>http://your_device.your_username.operaunite.com/helloOperaUnite/cats.png</code></pre>
<h3 id="applicationconfig">Налады прыкладання: config.xml</h3>
<p>Гэта прыкладанне будзе сабрана сапраўды гэтак жа, як віджэт Opera, таму нам будзе трэба задаць налады ў файле <code>config.xml</code>. Гэты файл у сутнасці з&#39;яўляецца звычайным файлам налады для віджэтов Opera, за выключэннем некаторых дадатковых асаблівасцяў. Для таго, каб пазначыць ваша прыкладанне як прыкладанне Opera Unite, вам запатрабуецца ўключыць элемент <code>feature</code> у элемент <code>widget</code> файла <code>config.xml</code>.</p><p class="note">Звернеце ўвагу, што віджэты Opera спакаваны ў звычайныя zip-файлы і пераназваны з пашырэннем <code>.wgt</code>, тады як прыкладанні Opera Unite спакаваны і пераназваны ў файлы з пашырэннем <code>.ua</code> для ўказання на прыкладанні Opera Unite, г.зн. &quot;Unite Application&quot;.</p>

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

<p>Элемент <code>widgetname</code> таксама з&#39;яўляецца назвай вашага прыкладання. Гэта назва будзе паказана карыстачу падчас усталёўкі і выкарыстанні прыкладання.</p><p>Вы таксама можаце дадаць у <code>config.xml</code> элемент <code>servicepath</code>. Змесціва гэтага элемента павінна быць валідным URI і будзе з&#39;яўляцца <em>імем прыкладання, што прысутнічае ў URI</em>. Калі гэты элемент адсутнічае, Opera паспрабуе выкарыстоўваць у якасці URI прыкладанні змесціва элемента <code>widgetname</code>. Але калі гэта імя не апынецца валідным URI, усталёўка перапыніцца з памылкай.</p><p>Пасля таго, як прыкладанне спакавана і запушчана, згаданы вышэй <code>config.xml</code> зробіць яго даступным па адрасе:</p><pre><code>http://your_device.your_username.operaunite.com/blog/</code></pre>
<h3 id="applicationindex">Злучаем усё разам: index.html</h3>
<p>У нашага прыкладання няма інтэрфейсу, акрамя тых старонак, што ён стварае. Файл <code>index.html</code> - гэта пачатковая кропка прыкладання і, у сутнасці, <em>увесь яго інтэрфейс</em>. У нашым прыклад мы выкарыстоўваем мінімальны файл HTML 5 са спасылкай на выкарыстоўваны файл скрыптоў:</p><pre><code>&lt;!DOCTYPE html&gt;
&lt;script src=&quot;script/script.js&quot;&gt;
&lt;/script&gt;</code></pre>
<h3 id="applicationscript">Пішам скрыпт: script.js</h3><p>Звернеце ўвагу на тое, як мы падлучылі файл <var>script.js</var> у папярэднім прыкладзе. Вэб-сервер слухае запыты ад карыстачоў, якія ў дадзены момант ходзяць па старонках прыкладання, і стварае адказы, якія адпраўляюцца зваротна. Адказам звычайна з&#39;яўляецца згенераваная старонка, якая змяшчае інфармацыю.</p><p>Функцыянальнасць Opera Unite даступная распрацоўнікам праз <a href="http://dev.opera.com/libraries/unite/" title="JavaScript API для сервера Opera Unite">набор JavaScript API</a>, які робіць даступнымі аб&#39;екты, што ўяўляюць вэб-сервер, злучэнні, якія ўваходзяць запыты і выходныя адказы.</p><p>Крок за крокам разгледзім скрыпт:</p><h4 id="scriptlisteners">Апрацоўнікі запытаў</h4><p>Вэб-сервер прымае запыты ад кліентаў і пасылае ім адказы зваротна. Сервер Opera Unite заснаваны на <em>падзейнай мадэлі</em> і выклікае падзея ў DOM кожны раз, калі браўзар звяртаецца да сервера, запытваючы файлы мелыя стаўленне да прыкладання Opera Unite. Каб мець магчымасць апрацоўваць гэтыя падзеі, трэба павесіць на іх апрацоўнікі. Гэта робіцца пры дапамозе <code>window.onload</code>:</p>

<pre><code>var webserver;
var entries = [];
window.onload = function () {
  webserver = opera.io.webserver
  if (webserver) {
    // Handle requests for various URLs
    webserver.addEventListener(&#39;_index&#39;, showEntryList, false);
    webserver.addEventListener(&#39;entry&#39;, showEntry, false);
    webserver.addEventListener(&#39;form&#39;, showForm, false);
    webserver.addEventListener(&#39;save&#39;, saveEntry, false);
  }
}</code></pre>

<p>Што ж тут адбываецца?</p><p>Перш за ўсё мы правяраем, што наша прыкладанні сапраўды з&#39;яўляецца вэб-прыкладаннем, правяраючы існаванне аб&#39;екта <code>webserver</code>. Калі ён існуе, то мы дадаём чатыры апрацоўніка падзей: <code>_index</code>, <code>entry</code>, <code>form</code> і <code>save</code>.</p><p>Калі апрацоўнікі ўсталяваны, сервер будзе выклікаць адну з паказаных функцый кожных разоў, калі карыстач наведае адзін з наступных URL&#39;аў:</p>
<pre><code>http://your_device.your_username.operaunite.com/blog/
http://your_device.your_username.operaunite.com/blog/entry/
http://your_device.your_username.operaunite.com/blog/form/</code></pre>
<p>Запыт <code>_index</code> асаблівы таму, што з&#39;яўляецца запытам да кораня прыкладання. Як мы ўбачым далей, карыстач не зможа атрымаць доступ да &quot;save&quot; напроста, а толькі праз форму.</p><h4 id="scriptlist">Паказваны спіс запісаў</h4><p>Код функцыі <code>showEntryList</code> для запыту <code>_index</code> даволі просты. Пасля атрымання запыту, функцыя ў адказ стварае HTML-дакумент са спісам захаваных запісаў.</p>

<pre><code>function showEntryList(e) {
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
  
  <p>Крок за крокам, функцыя робіць наступнае:</p><p>Перш за ўсё ствараецца зменная, якая змяшчае аб&#39;ект <code>response</code>. Гэты аб&#39;ект утрымоўвае ўсе неабходныя метады для адпраўкі дадзеных кліенту:</p><pre><code>var response = e.connection.response;</code></pre><p>Далей ідзе метад <code>write</code>, які запісвае дадзеныя ў дакумент для браўзара, які запытаў старонку. Для пачатку створым простую HTML-абгортку:</p><pre><code>response.write(&#39;&lt;!DOCTYPE html&gt;&#39;  + &#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;Entries&lt;/title&gt;&lt;/head&gt;&#39;  + &#39;&lt;body&gt;&lt;ul&gt;&#39;);</code></pre><p>Існыя запісы мы аформім спісам спасылак:</p>
  
<pre><code>for ( var i = 0, entry; entry = entries[i]; i++  {
  response.write(&#39;&lt;li&gt;&#39;+entry.date+&#39;: &lt;a href=&quot;entry?id=&#39;+i+&#39;&quot;&gt;&#39;+entry.title+&#39;&lt;/a&gt;&lt;/li&gt;&#39;);
}</code></pre>

<p>І, нарэшце, зачыняем падлучэнне:</p>

<pre><code>response.close();</code></pre>

<h4 id="scriptentry">Паказальны запіс</h4>
<p>Далей нам трэба вывесці што-небудзь, калі карыстач клікнуў па спасылцы на запіс:</p>

<pre><code>function showEntry(e) {
  var index = e.connection.request.queryItems[&#39;id&#39;][0];
  var entry = entries[index];
  // ToDo Should have error handling here
  var response = e.connection.response;
  response.write(&#39;&lt;!DOCTYPE html&gt;
  + &#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;&#39;+entry.title+&#39;&lt;/title&gt;&lt;/head&gt;&#39;
  + &#39;&lt;body&gt;&lt;h1&gt;&#39;+entry.title+&#39;&lt;/h1&gt;&#39;
  + &#39;&lt;p&gt;&#39;+entry.date+&#39;&lt;/p&gt;&#39;
  + &#39;&lt;div&gt;&#39;+entry.text+&#39;&lt;/div&gt;&#39;
  + &#39;&lt;/body&gt;&lt;/html&gt;&#39;);
  response.close();
}</code></pre>

<p>Крок за крокам, функцыя робіць наступнае:</p><p>Перш за ўсё мы ствараем зменную, якая змяшчае аб&#39;ект <code>request</code>, які ўтрымоўвае інфармацыю пра ўваходны запыт:</p><pre><code>var request = e.connection.request;</code></pre><p>Аргументы CGI GET утрымоўваюцца ва ўласцівасці <code>queryItems</code> запыту. Мы атрымліваем <code>id</code> запісы, якую жадаем вывесці. Звернеце ўвагу, што адзін і той жа CGI-аргумент можа мець некалькі значэнняў:</p><pre><code>var index = request.queryItems[&#39;id&#39;][0];</code></pre><p>Далей мы атрымліваем адпаведны запіс у блогу:</p><pre><code>var entry = entries[index];</code></pre><p>Метад <code>write</code> запісвае дадзеныя ў дакумент, запытаны браўзарам. Загаловак, дата і тэкст запісу загортваюцца ў падыходную разметку:</p>

<pre><code>response.write(&#39;&lt;!DOCTYPE html&gt;&#39;
  + &#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;&#39;+entry.title+&#39;&lt;/title&gt;&lt;/head&gt;&#39;
  + &#39;&lt;body&gt;&lt;h1&gt;&#39;+entry.title+&#39;&lt;/h1&gt;&#39;
  + &#39;&lt;p&gt;&#39;+entry.date+&#39;&lt;/p&gt;&#39;
  + &#39;&lt;div&gt;&#39;+entry.text+&#39;&lt;/div&gt;&#39;
  + &#39;&lt;/body&gt;&lt;/html&gt;&#39;);</code></pre>
<h4 id="scriptfrom">Паказ формы для дадання запісу</h4>

<p>Пасля націску на спасылку &quot;Дадаць запіс&quot; вы ўбачыце знаёмую форму:</p>

<pre><code>function showForm(e) {
  var response = e.connection.response;
  response.write(&#39;&lt;!DOCTYPE html&gt;
  + &#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;Add entry&lt;/title&gt;&lt;/head&gt;&#39;
  + &#39;&lt;body&gt;&lt;h1&gt;Add entry&lt;/h1&gt;
  + &#39;&lt;form method=&quot;post&quot; action=&quot;save&quot;&gt;&#39;
  + &#39;&lt;p&gt;&lt;label for=&quot;namefield&quot;&gt;Title&lt;/label&gt; &lt;input id=&quot;nameField&quot; type=&quot;text&quot; name=&quot;title&quot;&gt;&lt;/p&gt;&#39;
  + &#39;&lt;p&gt;&lt;label for=&quot;textArea&quot;&gt;Text&lt;/label&gt; &lt;textarea id=&quot;textArea&quot; name=&quot;text&quot;&gt;&lt;/textarea&gt;&lt;/p&gt;&#39;
  + &#39;&lt;p&gt;&lt;input type=&quot;submit&quot; name=&quot;Add entry&quot;&gt;&lt;/p&gt;&#39;
  + &#39;&lt;/form&gt;&#39;
  + &#39;&lt;/body&gt;&lt;/html&gt;&#39;);
  response.close();
}</code></pre>

<p>Гэта форма можа быць значна складаней, напрыклад: падтрымліваць апрацоўку памылак, выснова ўжо ўведзеных дадзеных і гэтак далей. Таксама варта прыдумаць механізм аўтарызацыі для патэнцыйна дэструктыўных аперацый з дадзенымі, але не будзем захапляцца - усёткі ў нас просты прыклад.</p>
<h4 id="scriptsave">Захаванне запісу</h4>
<p>Нарэшце, пасля адпраўкі формы, новы запіс павінен быць захавана. У дадзеным прыкладзе запісу захоўваюцца ў простым масіве, які будзе згублены пасля перазапуску прыкладання, аднак пашырыць прыціх і дадаць механізм захавання запісаў будзе даволі проста:</p>

<pre><code>function saveEntry(e) {
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

<p>Замест <code>request.queryItems</code> мы выкарыстоўваем уласцівасць <code>bodyItems</code>, каб атрымаць доступ да дадзеных, адпраўленым пры дапамозе POST - у нашым выпадку гэта загаловак і змесціва новага запісу.</p>

<pre><code>var title = request.bodyItems[&#39;title&#39;][0];var text = request.bodyItems[&#39;text&#39;][0];</code></pre>

<p>Адпраўка формы захоўвае запіс у масіў:</p>

<pre><code>entries.push({  &#39;title&#39; : title,  &#39;text&#39; : text,  &#39;date&#39; : new Date()});</code></pre>

<p>І, нарэшце, калі новы запіс захавана, мы вяртаемся зваротна да спісу запісаў:</p>

<pre><code>response.setStatusCode(302);
response.setResponseHeader( &#39;Location&#39;, webserver.currentServicePath );
response.close();</code></pre>

<p>Такім чынам мы ствараем стандартны HTTP-рэдырэкт зваротна да кораня нашага прыкладання, які захоўваецца ва ўласцівасці <code>webserver.currentServicePath</code>. Гэты рэдырэкт выкліча запыт <code>_index</code> і мы зноў атрымаем спіс усіх запісаў.</p><p>Як ужо згадвалася, для паўнавартаснага выкарыстання гэтага прыкладу, да яго варта дадаць апрацоўку памылак і статутныя паведамленні.</p>

<h2 id="using">Выкарыстанне прыкладання Opera Unite</h2>

<p>Для таго, каб запусціць прыкладанні Opera Unite, вам спачатку трэба яго ўсталяваць. Перацягніце <code>config.xml</code> ці поўную zip-версію вашага прыкладання ў акно браўзара ці адкрыйце праз файлавы дыялог. Калі вы дагэтуль не запускалі прыкладанні Opera Unite, то перад вам з&#39;явіцца акно налады Opera Unite, якое ўжо згадвалася напачатку артыкулы.</p><p>Калі вы клікнеце двойчы па прыкладанні <code>My blogging service</code> у панэлі прыкладанняў Opera Unite, вы павінны ўбачыць старонку як на малюнку 4:</p>

<p><img src="/articles/view/opera-unite-developer-primer-revisited/blogmain.jpg" alt="Галоўная старонка прыкладання-блога" /></p>
<p class="comment">Малюнак 4: галоўная старонка прыкладання-блога</p><p>Клік па спасылцы <em>Дадаць запіс</em> пакажа форму, якая дазволіць вам дадаць новы запіс у блог, як на малюнку 5:</p><p><img src="/articles/view/opera-unite-developer-primer-revisited/blogform.jpg" alt="Форма для публікацыі запісу" /></p>
<p class="comment">Малюнак 5: форма для публікацыі запісу</p>

<p>Калі ўвесці ў гэту форму нейкі тэкст і націснуць кнопку адпраўкі, вы вернецеся на галоўную старонку блога, дзе ўжо будзе бачная ваш новы запіс. Клікніце па яе загалоўку, каб паглядзець запіс. Дадайце некалькі іншых запісаў, пагуляйце са старонкамі і вы ўбачыце што-небудзь накшталт малюнка 6:</p>

<p><img src="/articles/view/opera-unite-developer-primer-revisited/fullblog1.jpg" alt="Некалькі запісаў у блогу" /></p>
<p><img src="/articles/view/opera-unite-developer-primer-revisited/fullblog2.jpg" alt="Поўны выгляд аднаго запісу ў блогу" /></p>
<p class="comment">Малюнак 6: наш блог паспяхова заселены</p>

<h2 id="viewing">Прагляд прыкладання Opera Unite</h2>

	<p>Калі вы вынікалі ўсім апісаным крокам і запусцілі прыкладанне ў браўзары Opera, то зараз у вас ёсць паўнавартаснае вэб-прыкладанне. І любы ахвотнік можа ўбачыць яго па спасылцы:</p><pre><code>http://devicename.username.proxyaddress/applicationname</code></pre><p>У нашым выпадку, калі прылада завецца <code>your_device</code> і на ім запушчаны прыкладанне-блог, тое яго URL будзе выглядаць так:</p><pre><code>http://your_device.username.operaunite.com/blog</code></pre><p>Як вы маглі заўважыць, запускаючы прыклад, вы таксама можаце зайсці ў корань прылады і ўбачыць усе ўсталяваныя на ім прыкладання, напрыклад:</p><pre><code>http://your_device.username.operaunite.com/</code></pre><p>Гэта старонка будзе ўтрымоўваць інфармацыю пра ўсіх усталяваныя на дадзенай прыладзе прыкладаннях, а таксама, калі гэтыя дадзеныя будуць знойдзены ў <code>config.xml</code>, больш падрабязную інфармацыю пра прыкладанне і яго аўтару.</p>
<h2 id="uploading">Загрузка прыкладання Opera Unite на unite.opera.com</h2>

<p>Такім чынам, вы сабралі класнае прыкладанне Opera Unite і жадаеце, каб ім маглі карыстацца не толькі наведвальнікі вашага сервера Opera Unite - вы таксама жадаеце зрабіць яго даступным для загрузкі і ўсталёўкі на іншыя сервера Opera Unite, бо так? Добра. І што ж для гэтага трэба зрабіць? Адказ просты: прыкладанне трэба загрузіць на <a href="http://unite.opera.com/">unite.opera.com</a> - гэты сайт прызначаны для распаўсюду прыкладанняў. Дадзеная частка артыкула распавядзе вам пра тое, як гэта зрабіць.</p><h3 id="uploadingbefore">Перад публікацыяй</h3><p>У ідэале, перад публікацыяй вам варта пратэставаць прыкладанне на наяўнасць памылак. Калі гэта магчыма, то пратэстуйце яго на розных платформах, прыладах версіях браўзара Opera. Таксама не забывайце, што карыстачы вашых прыкладанняў могуць выкарыстоўваць любы браўзар, а не толькі Opera, таму пратэстуйце прыкладанне ў розных браўзарах (Firefox, Safari, і да т.п.).</p><p>Калі вы сапхнуліся з праблемамі ў працы вашага прыкладання, але ўпэўнены, што з яго кодам усё ў парадку, то праверце файл <code>config.xml</code> на наяўнасць памылак. Ён неабходзен для правільнай працы прыкладання. Калі вы адкрыеце яго ў іншых браўзарах, то зможаце праверыць яго на карэктнасць сінтаксісу. Таксама варта праверыць, ці ўтрымоўвае <code>config.xml</code> дастатковая колькасць інфармацыі, бо ён будзе выкарыстоўвацца для атрымання ўсёй інфармацыі пра прыкладанне для рэпазітара <a href="http://unite.opera.com/">unite.opera.com</a>, а таксама для карыстачоў на старонках ужо ўсталяваных прыкладанняў.</p><p>Таксама варта падумаць пра пераклад прыкладання на іншыя мовы.</p><p>І, нарэшце, зрабіце скрыншот працавальнага прыкладання, як апісана ніжэй.</p><h3 id="uploadingprocess">Публікацыя прыкладання</h3><p>Для публікацыі вашага прыкладання вам трэба наведаць <a href="http://unite.opera.com/applications/upload/">старонку загрузкі</a>. Абярыце прыкладанне ў файлавым дыялогу і загрузіце яго. Уважліва прачытайце і, пры неабходнасці, удакладніце інфармацыю з <code>config.xml</code>. Пры жаданні, вы можаце дадаць больш падрабязнае апісанне.</p><p>Далей абярыце скрыншот прыкладання ў файлавым дыялогу, каб іншыя карыстачы змаглі зразумець што з сябе ўяўляе ваша прыкладанне, перш чым яны паспрабуюць яго ўсталяваць.</p><p>Апроч гэтага, вам трэба будзе абраць прылады для выкарыстання на якіх ваша прыкладанне было створана. Пераканаецеся, што яно быў пратэставана на паказаных прыладах і абярыце падыходную групу. Апошнім крокам будзе выбар моў, падтрымоўваных вашым прыкладаннем. Пераканаецеся, што вы прадугледзелі пераклад для ўсіх абраных моў.</p><h3 id="uploadinghowto">Як я магу прапанаваць карыстацца маім прыкладаннем?</h3><p>Пасля таго, як вы выдаткавалі кучу часу на выраб прыкладання, цалкам натуральна, што вам захочацца паказаць яго іншым людзям. Каб павялічыць лік праглядаў, вам трэба распавесці патэнцыйным карыстачам якіх магчымасцяў варта чакаць ад вашага прыкладання. У кожнага прыкладання ёсць кароткае апісанне, якое аўтаматычныя капіюецца з файла <code>config.xml</code> і доўгае апісанне, дзе вы можаце больш падрабязна распавесці пра прыкладанне і асаблівасцях яго працы.</p><p>Выкарыстоўвайце кароткае апісанне, каб прыцягнуць увагу карыстача, распавядзіце яму што ваша прыкладанне можа і якую карысць можна з яго выняць. Гэта можа быць нават кароткі падзагаловак, але ён павінен быць інфарматыўным. Вам варта пазбягаць фраз накшталт &quot;Запампуй мяне&quot; ці &quot;Гэта супер-стромкае прыкладанне&quot;. Выкарыстоўвайце доўгае апісанне для таго, каб растлумачыць карыстачам якія магчымасці падае ваша прыкладанне, як яны рэалізаваны. Таксама карысна будзе распавесці пра змены ў розных версіях прыкладання, кіравала гульні і гэтак далей.</p><p>І, нарэшце, не забудзьцеся зрабіць скрыншот прыкладання ў працы. У якасці прыкладу, вы можаце натхніцца <a href="http://unite.opera.com/applications/author/OperaUnite/">прыкладаннямі каманды Opera Unite</a>.</p><p>Звернеце ўвагу, што ідэальныя памеры для скрыншота складаюць 445 ? 230 пікселаў - менавіта гэтыя памеры выкарыстоўваюцца на <a href="http://unite.opera.com/">сайце Opera Unite</a>. Калі вашы скрыншоты будуць розных памераў, то яны будуць прыведзены да адзіных памераў, што можа прывесці да непажаданых вынікаў.</p><h3 id="uploadingapproval">Ухвала прыкладанняў Opera Unite</h3><p>Усе прыкладанні Opera Unite павінны быць ухвалены адмысловымі супрацоўнікамі Opera Software. Мы праверым іх на памылкі, каб пераканацца ў тым, што ўсе карыстачы змогуць іх запусціць, аднак мы не нясём адказнасці за змесціва гэтых прыкладанняў і не даём гарантый датычна іх функцыянальнасці. Падрабязней пра гэта ў чытайце ў <a href="http://unite.opera.com/disclaimer/">правілах</a>.</p><h4 id="uploadingguides">Якім правілам трэба адпавядаць для ўхвалы прыкладання?</h4><p>Некаторыя патрабаванні, якія мы прад&#39;яўляем да прыкладанняў:</p><ul>	<li>Прыкладанне павінна мець выразную назву і апісанне.</li>	<li>Прыкладанне не павінна мець відавочных памылак, таму пратэстуйце яго перад загрузкай.</li>	<li>Прыкладанне не павінна ўтрымоўваць наўмысна небяспечнага кода.</li>	<li>Прыкладанне не павінна ўтрымоўваць інфармацыі, на якую вы не маеце аўтарскага права.</li>	<li>Прыкладанне не павінна ўтрымоўваць ці высылацца на інфармацыю &quot;для сталых&quot; ці правакацыйную інфармацыю.</li>	<li>Прыкладанне павінна аддаваць HTML-старонкі сумяшчальныя са стандартамі, якія даступныя для ўсіх сучасных браўзараў і прылад.</li></ul>
<h2 id="readmore">Далейшае чытанне</h2>

<p>Зараз вы разбіраецеся ў асновах стварэння і загрузкі прыкладанняў Opera Unite, і вам, магчыма, будзе цікава пазнаць больш:</p><ul>	<li><a href="http://dev.opera.com/libraries/unite/">JavaScript API для прыкладанняў Opera Unite</a> - дакументацыя ў фармаце JSDoc для JavaScript-інтэрфейсаў і метадаў, даступных для працы з серверам Opera Unite.</li>	<li><a href="http://dev.opera.com/libraries/fileio/">JavaScript API для Opera File I/O</a> - дакументацыя ў фармаце JSDoc для JavaScript-інтэрфейсаў і метадаў, даступных для працы з файламі і тэчкамі.</li>	<li><a href="http://dev.opera.com/articles/view/markuper-unite-template-library/">Markuper: шабланізатар для прыкладанняў Opera Unite</a></li>	<li><a href="http://dev.opera.com/articles/view/yusef-the-unite-service-framework/">Yusef: фрэймворк для Opera Unite</a></li></ul>
  h2 id=
