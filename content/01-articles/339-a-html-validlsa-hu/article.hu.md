Title: A HTML validálása
----
Date: 2010-03-30 10:56:52
----
Lang: hu
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/" rel="prev" title="link to the previous article in the series">Előző leírás—Több lap létrehozása navigációs menüvel</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/25-accessibility-basics/" rel="next" title="link to the next article in the series">Következő leírás—A hozzáférhetőség alapjai</a></li>
<li><a href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom" rel="index">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Nos, már írtál néhány HTML oldalt és a megjelenítésük is jónak tűnik neked, de van egy pár dolog, ami nincsen egészen rendben velük. Mi a legjobb módja annak, hogy kiderítsük, mi nem stimmel, és biztosak legyünk abban, hogy ezek az oldalak (és azok, amelyeket majd a jövőben fogsz írni) helyesen jelennek meg a böngészőkben, hibák nélkül?</p>

<p>A válasz a validálás! Számos eszköz létezik erre a W3C-nél és más helyeken is, amelyek lehetővé teszik számodra a kód validálását a szájtodon. A három leggyakoribb validátor, amiket használni fogsz: 
</p>

<ul>
<li><a href="http://validator.w3.org/">The W3C MarkUp Validator</a>:
Megnézi az (X)HTML doctype-ot, amit ahhoz a dokumentumhoz használsz, amit ellenőriztetsz, majd végigmegy a teljes dokumentumon kijelölve azokat a részeket, ahol a HTML kódod nem követi helyesen a doctype-ot (vagyis ahol hibák vannak a HTML-ben).</li>
<li><a href="http://validator.w3.org/checklink">The W3C Link Checker</a>:
Átnézi az ellenőrzésre adott dokumentumot és leteszteli az összes hivatkozást a dokumentumon belül, hogy biztosan nem tört linkek-e (vagyis, hogy a <code>href</code> értékek nem mutatnak-e olyan forrásokra, amik nem léteznek).
</li>
<li><a href="http://jigsaw.w3.org/css-validator/">The W3C CSS Validator</a>:
Ahogy azt már valószínűleg kitaláltad, ez a CSS (vagy HTML/CSS) dokumentumot vizsgálja át és ellenőrzi, hogy a CSS megfelelően követi-e a specifikációkat.</li>
</ul>

<p>Ebben a leírásban most ezek közül az elsőt fogom ismertetni, megmutatva hogyan használd, és hogyan értelmezz olyan tipikus eredményeket, amiket a validátor visszaad. A link ellenőrző meglehetősen egyértelmű és a CSS validátornak is eléggé magától értetődőnek kell lennie, miután elolvastad ezt a leírást és azokat a CSS cikkeket, amelyek később kerülnek sorra a kurzus folyamán. 
</p>

<p>A leírás felépítése a következő:</p>

<ul>
 <li><a href="#errors">Hibák</a></li>
 <li><a href="#whatisvalidation">Mi az a validálás?</a></li>
 <li><a href="#whyvalidate">Miért validáltass?</a></li>
 <li><a href="#differentbrowserinterpretation">A különböző böngészők eltérően jelenítik meg az invalid HTML kódokat.</a>
   <ul>
     <li><a href="#quirksmode">Quirks mód</a></li>
   </ul>
 </li>
 <li><a href="#howtovalidate">Hogyan validáltasd az oldalaidat</a>
   <ul>
     <li><a href="#w3chtmlvalidator">A W3C HTML validator</a></li>
   </ul>
 </li>
 <li><a href="#summary">Összefoglaló</a></li>
 <li><a href="#furthertools">További eszközök, amiket érdemes megnézni</a></li>
 <li><a href="#exercises">Tesztkérdések</a></li>
</ul>
        
<h2 id="errors">Hibák</h2>
    
<p>A számítógép-programozás során nagyjából két probléma fordul elő a kódokkal:</p>
        
<ul>
<li>szintaktikai hibák—mikor egy elírás miatt a kódban a számítógép képtelen helyesen végrehajtani, vagy lefordítani a programot.
</li>
<li>programozási (vagy logikai) hibák—mikor a kód nem tükrözi tökéletesen a program eredeti szándékát. 
</li>
</ul>
        
<p>A legtöbb programozási nyelv esetében az első hibát nagyon könnyű kiszúrni—a programod egyszerűen nem fut le, vagy nem lehet lefordítani, amíg a hiba nincs kijavítva. Ez sokkal könnyebben megtalálhatóvá és javítható teszi az ilyen hibákat azokban a fejvakargatós “Miért nem csinálja azt, amit akarok?” percekben.</p>
        
<p>A HTML nem egy programozási nyelv. Egy weboldal szintaktikai hibái miatt a böngészők általában nem utasítják el az oldal megnyitását (habár az XHTML sokkal szigorúbb a HTML-nél—legalábbis mikor <code>application/xhtml+xml</code> vagy <code>text/xml</code> adatként van kezelve, ahogyan kellene—és néhány doctype nem engedélyezi bizonyos HTML elemek használatát.) Ez az egyik legfőbb oka a web gyors elfogadásának és elterjedésének.</p>

<p><a href="http://www.w3.org/People/Berners-Lee/WorldWideWeb.html">Az első webböngésző, a WorldWideWeb</a>
(melyet Tim Berners-Lee írt meg) szintén egy szerkesztő volt, ami lehetővé tette az embereknek weboldalak létrehozását anélkül, hogy először meg kellett volna tanulniuk a HTML-t. Ez a szerkesztő érvénytelen (invalid) HTML-t csinált. Ezeket ki lehetett javítani, de ez lefektetett egy fontos irányelvet, ami az összes böngészőre a mai napig érvényes—azt, hogy lehetővé tenni a tartalmak elérését az emberek számára sokkal fontosabb, mint a hibák miatt panaszkodni azoknak, akik úgysem fogják megérteni, vagy nincsenek abban a helyzetben, hogy kijavíthassák őket.</p>
    
<h2 id="whatisvalidation">Mi az a validálás?</h2>
    
<p>Habár a böngészők elfogadják a rossz (erre az <em>invalid</em> kifejezést használjuk) weboldalakat és a tőlük telhető legjobb módon megpróbálják a kódot renderelni a készítő szándékát találgatva, még mindig lehetséges ellenőrizni, hogy a HTML helyesen lett-e megírva és valójában jó ötlet ezt megtenni, amint azt a továbbiakban látni fogod. Ezt hívjuk a HTML “validálásának”.</p>
        
<p>A validátor program összehasonlítja a HTML kódot a weboldalon a <a href="http://dev.opera.com/articles/view/14-megfelelo-doctype-valasztasa/">doctype-hoz</a> tartozó szabályokkal és megmondja neked, hogy sérültek-e ezek a szabályok, illetve hol. </p>
        
<h2 id="whyvalidate">Miért validáltass?</h2>
        
<p>Van egy általános hozzáállás néhány webfejlesztő körében miszerint, ha egy weboldal jól néz ki, nem számít, ha nincs validálva. Úgy tekintik a validálást, mint egy ideális célt és nem úgy, mint egy fekete-fehér szabályt.
</p>
        
<p>Akad némi ésszerűség ebben a hozáállásban. A HTML specifikáció nem tökéletes, és eléggé elavult. Néhány dolog aminek a helyessége nem egyértelmű (mint pl. <a href="http://dev.opera.com/articles/view/16-html-listak/#rendezett_kezdes"> egy rendezett lista kezdése 1-től eltérő számmal</a>) az a HTML-ben invalid.
Habár, ahogy a mondás tartja:</p>
        
<p><em>Tanuld meg a szabályokat, hogy tudd, hogyan szegd meg őket helyesen.</em></p>
        
<p>Van két mindent felülíró oka annak, hogy validáltasd a HTML kódodat, miután megírtad.</p>
        
<ul>
<li>Nem vagy mindig tökéletes és a kódod sem—mindenki követ el hibát, és a weboldalaid jobb minőségűek lesznek (vagyis stabilabban fognak működni) ha kigyomlálod az összes hibát. 
</li>
<li>A böngészők változnak. A jövőben valószínűleg kevésbé lesznek megengedőek, ha invalid kódokat kell értelmezniük, nem pedig elnézőbbek.</li>
</ul>
        
<p>A validálás egy jó eszköz arra, hogy előre figyelmeztessen, ha olyan hibák kerülnek a kódba, amelyek aztán érdekes, nehezen meghatározható módon képesek alakot ölteni. Ha a böngésző találkozik egy invalid HTML kóddal, akkor el kell kezdenie találgatni, mit is akartál csinálni—és a különböző böngészők más válaszokkal rukkolnak elő.</p>

<h2 id="differentbrowserinterpretation">A különböző böngészők eltérően jelenítik meg az invalid HTML kódokat.</h2>
        
<p>A valid HTML az egyetlen szerződés, amit a böngésző gyártókkal kötsz. A HTML specifikáció megmondja, hogyan kell megírnod és nekik hogyan kell a dokumentumodat lefordítaniuk. Az utóbbi időkben a böngészők szabványokkal szembeni elfogadása eljutott arra a pontra, hogy amíg valid kódot írsz, az összes jelentősebb böngészőnek egyformán kellene azt megjelenítenie. A HTML esetében többé-kevésbé ez a helyzet, míg más szabványoknál van néhány eltérés itt-ott a támogatottságban.</p>

<p>De mi van, ha invalid kódot küldesz egy böngészőnek? Mi történik akkor? A válasz az, hogy a böngésző hibakezelője akcióba lendül, hogy kitalálja, mit is tegyen a kóddal. Alapesetben azt mondja “ok, ez a kód nem validált, szóval akkor hogyan is jelenítsük meg ezt az oldalt a végső felhasználónak? Töltsük ki a hézagokat mondjuk így!”</p>

<p>Ez nagyszerűen hangzik, nem? Ha hagysz néhány hibát az oldaladon, a böngésző kitölti neked a réseket? Nem egészen, mivel minden egyes böngésző másképpen gondolkodik. Például:</p>

<pre>&lt;p&gt;&lt;strong&gt;Ennek a szövegnek félkövérnek kellene lennie.&lt;/p&gt;
&lt;p&gt;Ennek a szövegnek tényleg félkövérnek kellene lennie? Hogyan néz ki a HTML kód renderelés után?&lt;/p&gt;

&lt;p&gt;&lt;a href=&quot;#&quot;&gt;&lt;/strong&gt;Ennek a szövegnek hivatkozásnak kellene lennie.&lt;/p&gt;
&lt;p&gt;Ennek a szövegnek tényleg hivatkozásnak kellene lennie? Hogyan néz ki a HTML kód renderelés után?&lt;/p&gt;</pre>


<p>A hiba az, hogy a <code>strong</code> elem rosszul van beágyazva többszörös blokk szintű elemeken keresztül és, hogy a kapocs elem nincs lezárva. Mikor megpróbálod rendereltetni ezt különböző böngészőkkel, azok nagyon eltérő módon fordítják le:</p>

<ul>
  <li>Az Opera a kiemelés után következő elemeket a kiemelés gyerekévé teszi.</li>
  <li>A Firefox plusz kiemelő elemeket szúr be a bekezdések közé, amik nem voltak megadva a kódban.</li>
  <li>Az Internet Explorer az “Ennek a szövegnek hivatkozásnak kellene lennie” szöveget kívül helyezi a kapocs tag-en, ami létrehozza a linket.</li>
</ul>

<p class="note">Ennek a példának az eredeti változata megtalálható Hallvord Steen cikkében: “<a href="http://www.thinkvitamin.com/features/dev/same-dom-errors-different-browser-interpretations">Same DOM errors, different browser interpretations</a>”—olvasd el a HTML hibák alaposabb megismerése végett és néhány információért a hibajavító eszközökről.</p>

<p>Egyik böngésző viselkedése sem helytelen; mind megpróbálja kitölteni a hibás kódod réseit. A lényeg tehát, hogy <em>kerüld az invalid kódolást az oldaladon, amennyire csak lehetséges</em>!</p>

<h3 id="quirksmode">Quirks mód</h3>

<p>Még egy dolog, amiről tudnod kell, az a <em>Quirks mód</em>. Ez az a mód, amelybe a böngészők átállnak, ha egy olyan oldallal találkoznak, amelynek helytelen a doctype-ja, vagy egyáltalán nincs is. Ebben a módban a böngésző találgatja milyen szabályok szerint kellene validálni a kódot és megint csak legjobb tudása szerint tölti ki a hiányzó részeket. Ez a mód valójában azért létezik, hogy a régebbi oldalak is megjeleníthetőek legyenek, és sohasem kellene alkalmazni új oldalak megírásakor.</p>
        
        
<h2 id="howtovalidate">Hogyan validáltasd az oldalaidat</h2>

<p>Most, hogy már felderítettük a HTML validálás mögött meghúzódó összes elméletet, a könnyebbik részről fogok beszélni—az aktuális validálásról! Ok, ez nem teljesen pontos. Egy URL-t beírni egy validátorba és megnézni, hogy az oldal szabályos-e vagy nem, az könnyű; kitalálni, mi a baj és kijavítani a hibákat az már nem olyan egyszerű, mivel a hibaüzenetek néha egy kicsit rejtélyesek lehetnek. A következőkben megmutatok néhány példát.
</p>

<p>A példa, amit megnézünk ebben a fejezetben, a következő (<a href="http://dev.opera.com/articles/view/24-validating-your-html/example_validation.html">letöltheted, vagy nézheted a HTML-t</a>):</p>

<pre>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;&gt;
&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;title&gt;Validating your HTML&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h2&gt;The tale of Herbet Gruel&lt;/h2&gt;
    &lt;p&gt;Welcome to my story. I am a slight whisp of a man, slender and fragile, features wrinkled and worn, eyes sunken into their sockets like rabbits cowering in their burrows. The &lt;em&gt;years have not been kind to me&lt;/em&gt;, but yet I hold no regrets, as I have overcome all that sought to ail me, and have been allowed to bide my time, making mischief as I travel to and fro, &#39;cross the unyielding landscape of the &lt;a href=&quot;http://outer-rim-rocks.co.uk&quot; colspan=&quot;3&quot;&gt;outer rim&lt;/a&gt;.&lt;/p&gt;
    
    &lt;h3&gt;Buster&lt;/h3&gt;
    &lt;p&gt;Buster is my guardian angel. Before that, he was my dog. Before that, who knows? I lost my dog many moons ago while out hunting geese in the undergrowth. A shot rang out from my rifle, and I called for Buster to collect the goose I had felled. He ran off towards where the bird had landed, but never returned. I never found his body, but I comfort myself with the thought that he did not die; rather he transcended to a higher place, and now watches over me, to ensure my well-being.
    
    &lt;h3&gt;My possessions&lt;/h3&gt;
    &lt;p&gt;A travelling man needs very little to accompany him on the road:&lt;/p&gt;
    &lt;ul&gt;
      &lt;li&gt;My hat full of memories&lt;/li&gt;
      &lt;li&gt;My trusty walking cane&lt;/li&gt;
      &lt;li&gt;A purse that did contain gold at one time&lt;/li&gt;
      &lt;li&gt;A diary, from the year 1874&lt;li&gt;
      &lt;li&gt;An empty glasses case&lt;/li&gt;
      &lt;li&gt;A newspaper, for when I need to look busy&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/body&gt;</pre>

<p>Ez az egyszerű oldal három fejezetcímből, három bekezdésből, egy hivatkozásból és egy rendezetlen listából áll. Az XHTML 1.0 Strict doctype-ot használja, mert ennek a szabályai szerint kell validáltatni. Van néhány hiba a dokumentumban, amelyeket a következőkben a W3C HTML validator használatával találsz meg.</p>

        
<h3 id="w3chtmlvalidator">A W3C HTML validator</h3>
        
<p>Ahogy fentebb említettem, <a href="http://validator.w3.org/">a W3C-nek van egy online hozzáférhető validátora
</a>—menj rá jobb/ctrl-kattintással az itt látható linken keresztül a “megnyitás új lapon” opció kiválasztásával—
hasznos lesz, ha kapcsolgathatsz a validátor és a leírás ablakai között a példa olvasása során.</p>

<p class="note">Figyeld meg, hogy közvetlenül az Opera böngészőjében is tudsz oldalakat ellenőriztetni a W3C validátorral egyszerűen jobb/ctrl-kattintással és a “Forráskód ellenőrzése” opció kiválasztásával.</p>

<p>Észre fogod venni, hogy a validátornak 3 választható füle van a felhasználói felület tetején:</p>

<ul>
<li>Validate by URI: Beírhatod egy, már az interneten lévől oldal címét, hogy ellenőriztesd. 
</li>
<li>Validate by File Upload: Feltölthetsz egy HTML fájlt ellenőrzésre.
</li>
<li>Validate by Direct Input: Bemásolhatod egy HTML fájl tartalmát az ablakba ellenőrzés céljából.
</li>
</ul>

<p>Bármelyik módszert is választod, ugyanazt az eredményt kell adnia; azt hiszem, a legegyszerűbb ellenőriztetni a példa oldalt, ha az egész kódot kimásolod innen felülről, és beszúrod a harmadik fülhöz. Ha így teszel, az 1. ábrán lévő eredményt kell kapnod:</p>

<img src="/articles/view/24-validating-your-html/figure1.gif" alt="a példa dokumentum validálásának eredménye—17 hiba!" />
<p class="comment">1. ábra: a példa dokumentum validálásának eredménye—17 hiba!</p>

<p>Ez aggasztóan hangzik, főleg ha elmondom, hogy nincsen 17 hiba a dokumentumban! Ne ess kétségbe!—több hibajelentés van, mint amennyi valójában történik, mert gyakran egy hiba a lap tetején a többire is hatással van, több hibát jelentetve a validátorral lefelé haladva, ami miatt úgy tűnik, hogy több elem nincs lezárva vagy hibásan van beágyazva. Csak azt kell figyelned, mit jelentenek a hibaüzenetek, és szembetűnő hibákat kell keresned a kódban. Az 1. táblázat megmutatja az összes hibát, amit kijavítottam, hogy az oldal szabványos legyen, kiegészítve a gondolatmenetemmel, hogy kitaláljam mi volt rossz, és a megoldás, amit alkalmaztam a problémára. </p>

<table>
<caption>1. táblázat: A hibák, amelyeket kijavítottam, hogy az oldal átmenjen az ellenőrzésen.</caption>
  <thead>
  <tr>
    <th>Error message</th>
    <th>Logic</th>
    <th>Fix made</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>8. sor, 461. oszlop: nem létezik &quot;colspan&quot; attribútum</td>
    <td>Tudjuk, hogy van <code>colspan</code>
attribútum és, hogy ez egy érvényes HTML kód, akkor miért mondja, hogy nem létezik?
Várjunk csak, talán azt jelenti, hogy egy olyan elemen használtuk, amelyiken nem lehetne?
Tényleg, egy <code>a</code> elemen—helytelen!</td>
    <td>Távolítsd el a <code>colspan</code> attribútumot az <code>a</code> elemről.</td>
  </tr>
  <tr>
    <td>13. sor, 7. oszlop: a doctype itt nem engedélyez &quot;h3&quot; elemet; hiányzik egy
	 &quot;object&quot;, &quot;applet&quot;, &quot;map&quot;, &quot;iframe&quot;, &quot;button&quot;, &quot;ins&quot;, &quot;del&quot;
kezdő tag . &lt;h3&gt;My possessions&lt;/h3&gt;</td>
    <td>Első ránézésre ez megint furcsának tűnik—a <code>h3</code> elem megfelelően van lezárva és engedélyezett ebben a kontextusban. Figyeld meg, hogy gyakran ez a hibaüzenet azt jelenti, hogy van egy lezáratlan elem a közelben…</td>
    <td>Egy záró <code>p</code> tag megadásáról van szó a felette lévő sorban.</td>
  </tr>
  <tr>
    <td>19. sor, 40. oszlop: a doctype itt nem engedélyezi az &quot;li&quot; elemet; hiányzik egy
	 &quot;ul&quot;, &quot;ol&quot;, &quot;menu&quot;, &quot;dir&quot; kezdő tag. &lt;li&gt;A diary, from
the year 1874&lt;li&gt;</td>
    <td>Ez elég egyszerű—első pillantásra láthatod a megjelölt sorban, hogy a záró
	<code>li</code> tag-nek hiányzik a per jele (/).</td>
    <td>Adj egy záró per jelet a kérdéses sorhoz.
	</td>
  </tr>
  <tr>
    <td>23. sor, 9. oszlop: el van hagyva a záró tag a &quot;html&quot;-hez, de TAGELHAGYÁS TILOS volt meghatározva. 
	&lt;/body&gt;</td>
    <td>Megint csak nem tart sokáig kitalálni, hogy ez azt jelenti, a záró <code>html</code> tag hiányzik. 
	A hibajelentés magyarázata is így kezdődik 
	<q>Talán elmulasztottál lezárni egy elemet</q>.</td>
    <td>Add hozzá a hiányzó <code>html</code> elemet.</td>
  </tr>
  </tbody>
</table>

<p>Ezeknek a hibáknak a kijavításával a validátor most már egy sokkal megnyugtatóbb siker-üzenetet ad, ahogyan a 2. ábra mutatja:</p>  

<img src="/articles/view/24-validating-your-html/figure2.gif" alt="siker-üzenet, ami értesít, hogy minden hibám ki lett javítva" />
<p class="comment">2. ábra: siker-üzenet, ami értesít, hogy minden hibám ki lett javítva.
</p>

<p>Valójában ennyi az egész. Csak a józan eszedre van szükség, és arra, hogy emlékezz, melyik doctype szerint ellenőrizteted az oldaladat. 
<a href="http://dev.opera.com/articles/view/24-validating-your-html/example_validation_fixed.html">Töltsd le vagy nézd meg a HTML kód javított verzióját</a>.</p>

<h2 id="summary">Összefoglaló</h2>

<p>Miután elolvastad ezt a cikket, már könnyen kell tudnod használni a W3C validatort a HTML kódod ellenőrzésére. 
Ami a validálást illeti, ez valójában csak a jéghegy csúcsa—vannak sokkal bonyolultabb eszközök lentebb felsorolva, amelyek majd ki fognak segíteni téged, mikor az oldalad nagyobb és összetettebb lesz.</p>

<h2 id="furthertools">További eszközök, amiket érdemes megnézni</h2>
<ul>

<li><a href="http://dragonfly.opera.com/app/debugmenu/DebugMenu.ini">The Opera debug menu</a></li>
<li><a href="https://www.squarefree.com/bookmarklets/validation.html">General validation bookmarklet</a></li>
<li><a href="http://chrispederick.com/work/web-developer/">The Firefox web developer toolbar extension</a></li>
<li><a href="http://www.microsoft.com/downloads/details.aspx?FamilyID=e59c3964-672d-4511-bb3e-2d5e1db91038&amp;amp;displaylang=en">The IE developer toolbar</a></li>
<li><a href="http://zappatic.net/safaritidy/">Safari tidy</a></li>
<li><a href="http://tidy.sourceforge.net/">HTML tidy</a></li>
</ul>

<h2 id="exercises">Tesztkérdések</h2>

<ul>
<li>Mi történik, ha a böngésző invalid kódot fordít le?
</li>
<li>Mi ezzel a probléma?
</li>
<li>Egy keret használata a dokumentumban, amelyet HTML 4 Strict doctype szerint ellenőriztetsz, hibát fog generálni? 
</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/" rel="prev" title="link to the previous article in the series">Előző leírás—Több lap létrehozása navigációs menüvel</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/25-accessibility-basics/" rel="next" title="link to the next article in the series">Következő leírás—A hozzáférhetőség alapjai</a></li>
<li><a href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom" rel="index">Tartalomjegyzék</a></li>
</ul>

 <h2>A szerzőről</h2>

<div class="right">

<img alt="Mark Norman Francis a cikk szerzőjének fotója" src="/articles/view/24-validating-your-html/norm.jpg" />


<p class="comment">Fotó: <a href="http://flickr.com/photos/andybudd/98405468/" title="Original photo source">Andy Budd</a>.</p>

</div>

<p>Mark Norman Francis már azelőtt az internettel foglalkozott, hogy a web megszületett volna. Jelenleg a Yahoo!-nál a világ legnagyobb weboldalán dolgozik mint kezelőfelület-tervező, új módszereket és kódolási szabályokat dolgoz ki, valamint nemzetközi támogatást nyújt a minőségi webfejlesztéshez.</p>


<p>A Yahoo! előtt a Formula One Management, a Purple Interactive és a City University vállalatoknál dolgozott különböző minőségben, többek között mint webfejlesztő, CGI programozó és rendszertervező. A <a href="http://marknormanfrancis.com/" title="Norms blog">http://marknormanfrancis.com/</a> oldalon blogol.</p>
