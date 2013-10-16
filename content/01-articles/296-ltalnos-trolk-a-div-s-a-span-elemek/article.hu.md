Title: Általános tárolók — a div és a span elemek
----
Date: 2009-08-17 12:16:39
----
Lang: hu
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/21-kevesse-ismert/" title="hivatkozás a sorozat előző leírására">Előző leírás — Kevéssé ismert szemantikus elemek</a></li>
<li class="next">Következő leírás — Több lap létrehozása navigációs menüvel</li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Ebben a leírásban be fogom mutatni, hogyan és mikor használatod a HTML-ben azt a két elemet, amelyek nem a tartalom leírására szolgálnak. A <code>div</code> és a <code>span</code> elemek ugyanis semmilyen jelentést nem rendelnek ahhoz a tartalomhoz, amit közrefognak, hanem egy általános módszert biztosítanak ahhoz, hogy a tartalmat olyan saját struktúrába vagy csoportokba rendezd, amelyre nincs más, odavaló HTML elem. Az ilyen csoportokat aztán CSS-ből stílusozhatod és JavaScripttel módosíthatod is. Habár a <code>div</code> önmagában nem tartalmaz szemantikus jelentést a  dokumentumban, mégis tekinthetjük úgy, mint egy strukturált felosztást elősegítő jelölést, a megfelelő szemantikus osztály- vagy azonosító névvel együtt.</p>

<p>Ezeket a tageket csak „végső esetben” használjuk, amikor már semmilyen más HTML elemet nem tudunk felhasználni, mivel ezek az elemek már semmilyen plusz információt nem hordoznak például a kisegítő technológiák, keresőmotorok számára.</p>

<p>A leírás felépítése a következő:</p>

<ul>
  <li><a href="#semleges">Szemantikailag semleges</a></li>
  <li><a href="#inline_vs_block">Inline kontra blokk</a></li>
  <li><a href="#csoportositas">Példa a tartalom felosztására</a></li>
  <li><a href="#extrainfo">Extra információk</a></li>
  <li><a href="#kapaszkodo">Kapaszkodók a JavaScriptekhez és CSS-hez</a></li>
  <li><a href="#divitis">div-itis</a></li>
  <li><a href="#helytelen">Helytelen szemantika</a>
<ul>
  <li><a href="#altalanos">Általános „bekezdések”</a></li>
  <li><a href="#megjelenito">Prezentációs elemek</a></li></ul>
</li>
  <li><a href="#osszefoglalo">Összefoglaló</a></li>
  <li><a href="#tesztkerdesek">Tesztkérdések</a></li>
</ul>

<h2 id="semleges">Szemantikailag semleges</h2>

<p>A HTML elemek legnagyobb része azért van, hogy leírjon valamilyen tartalmat, például képeket, listákat, címsorokat, vagy hogy segítsen a dokumentum felépítésében, a fejléc (<code>head</code>), a törzs (<code>body</code>), a külső hivatkozások (<code>link</code>) vagy a metaadatok (<code>meta</code>) definiálásában. A HTML specifikáció a következőt írja:</p>

<blockquote>A <code>div</code> és a <code>span</code> elemek, ellentétben az <code>id</code> és a <code>class</code> attribútumokkal, egy sokkal általánosabb mechanizmus nyújtanak a dokumentumok strukturálására.</blockquote>

<p>Ezekre az elemekre úgy tekinthetünk, mint a HTML állványaira. Lehetőséget adnak arra, hogy csoportosítsd a tartalmat, hogy extra információkat definiálhass a tartalmak körül, amelyeket aztán kapaszkodóként szolgálnak a JavaScript és CSS használatakor. Viszont nem adnak semmilyen új szemantikai jelentést a dokumentumhoz, sem a jelölésen belül, sem kívül.</p>

<h2 id="inline_vs_block">Inline kontra blokk</h2>

<p>Ahogy már korábban tanultuk, <a href="http://dev.opera.com/articles/view/12-a-html-alapjai/#blokkinline">a blokk szintű elemek olyan elemek, amelyek segítenek a dokumentum strukturálásában</a>.  A <code>div</code> element — ami a <em>division</em>, vagyis a felosztás rövidítése — egy blokk szintű általános tároló elem. Normál esetben arra használhatjuk, hogy más blokk szintű elemeket fogjon közre, egy csoportba rendezve azokat (a következő szakaszban bővebben is fogunk erről beszélni). Arra is használható, hogy összegyűjtsön egy adag inline elemet és/vagy szöveget, amelyek egyébként logikailag nem tartoznak egy közös blokk szintű elem alá, de ezt csak végső esetben használjuk.</p>

<p>A <code>span</code> az inline, vagyis szövegen belüli általános tároló elem. Segíthet abban, hogy a dokumentum struktúráját felépítsük, de általában arra használjuk, hogy összefogjon más inline elemeket és/vagy szövegeket, kivéve a blokk szintű elemeket.</p>

<p>A kettő közötti különbség első ránézésre eléggé elenyészőnek tűnhet. Ami alapján elsősorban különbséget tehetünk közöttük, az a tartalom típusa, valamint hogy hogyan jelenne meg, ha stílusozás nélkül írnánk le őket. A <code>div</code> elemet egy csoport blokk szintű elem köré szoktuk tenni — például összefoglalhatunk egy címsort és egy hivatkozáslistát, hogy készítsünk belőlük egy navigációs menüt. A <code>span</code> ezzel szemben inkább a csoport inline elemet és (elsősorban) egyszerű szöveges részeket fog közre. A kulcsszó mindkét esetben a „csoport”: ha egy <code>div</code> csak egyetlen blokk szintű elemet fog közre, vagy a <code>span</code> egyetlen inline elemet, akkor fölösleges a használatuk. Nézd meg például, hogy használjuk a <code>div</code> és a <code>span</code> elemeket az alábbi egyszerű kódban:</p>

<pre>&lt;body&gt;
  &lt;div id=&quot;foTartalom&quot;&gt;
    &lt;h1&gt;A lap címe&lt;/h1&gt;
    &lt;p&gt;Ez az első bekezdés a példa lapunkon.&lt;/p&gt;
    &lt;img src=&quot;pelda.gif&quot; alt=&quot;Ez csak egy példa kép, semmi különleges&quot;&gt;
    &lt;p&gt;Ez a második bekezdés a példa lapunkon. Nagyon hasonló
    az elsőhöz, csak itt van egy &lt;span id=&quot;specialisFigyelmeztetes&quot;&gt;speciális
    figyelmeztetés, amit meg akarunk színezni és a kicsit megnövelni CSS-sel&lt;/span&gt;.
    Ez nem a normál kiemelés, inkább stílusozás, szóval az &lt;em&gt; és
    a &lt;strong&gt; nem a legmegfelelőbbek.&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;</pre>

<p>Mostantól a <code>div</code> és <code>span</code> elemekben található tartalmat elérheted az <code>id</code> attribútumaik segítségével, és speciális stílusozást és pozicionálást adhatsz nekik CSS-ben.</p>

<h2 id="csoportositas">Példa a tartalom felosztására</h2>

<p>Ha megnézed az interneten található lapok forrását, találhatsz egy csokor olyan <code>div</code> elemet, amelyeknek mind hasonló neveik vannak a <code>class</code> vagy <code>id</code> attribútumaikban, például <em>header</em> (fejléc), <em>footer</em> (lábléc), <em>content</em> (tartalom), <em>sidebar</em> (oldalsáv), és így tovább.</p>

<p class="note">A <code>class</code> és <code>id</code> attribútumaid nevei legyenek szemantikusak, vagyis elsősorban a közrefogott tartalom jelentésére, funkciójára vonatkozzon, ne pedig a vizuális megjelenésére. Például az <code>oldalsav</code> és a <code>figyelmeztetes</code> jó osztálynevek, míg a <code>pirosbalsav</code> és a <code>kekvillogoszoveg</code> már nem. Mi van akkor, ha az oldalsávod színét egy későbbi időpontban át szeretnéd állítani pirosról kékre, vagy áttennéd balról jobbra? Mi van akkor, ha a figyelmeztetéseket mostantól zöld aláhúzottként akarod megjeleníteni a villogó kék helyett?</p>

<p>Ezek a felosztások jól átláthatóvá teszik a struktúrát a lap készítésekor, de még fontosabb, hogy amikor később megnézzük a HTML kódot, nagy segítséget nyújtanak abban, hogy melyik rész mire szolgál. Egy jól felosztott lap önmagát magyarázza.</p>

<p>Ahhoz, hogy ez érthetőbb legyen, nézzük meg egy valódi weboldal felosztását — mégpedig a dev.opera.com oldalét. Ne felejtsd el, hogy az alábbi példakód egyáltalán nem tartalmaz hasznos tartalmat, leszámítva azt a néhány elemet, amelyik szükséges az oldal struktúrájának bemutatásához. Csak arra koncentráltunk, hogy felépítsük az adott oldal struktúráját, <code>div</code> elemeket felhasználva. A kódban olvasd el figyelmesen a HTML kommenteket  — ezekben magyarázom meg az oldal struktúráját. Miközben végigolvasod a kódot, nyisd meg a dev.opera.com oldalt egy másik fülön vagy ablakban, így azonnal láthatod a felépített struktúraelemeket élesben is.</p>

<pre>&lt;body&gt;
&lt;!-- Legelőször van egy wrapper div, ami közrefogja a teljes lapot, ezen keresztül pontosabban befolyásolhatjuk a teljes lapot --&gt;
  &lt;div id=&quot;wrap&quot;&gt;
  &lt;!-- Ez a rendezetlen lista tartalmazza a hivatkozásokat az Opera különböző oldalaira, amelyeket a lap legfelső részében láthatsz --&gt;
    &lt;ul id=&quot;sitenav&quot; class=&quot;hidemobile&quot;&gt;
      ...
    &lt;/ul&gt;
      ...
    &lt;!-- Ez egy keresőmező - a kereső, amit a lap jobb felső részében láthatsz --&gt;
    &lt;form action=&quot;/search/&quot; method=&quot;get&quot; id=&quot;search&quot;&gt;
      &lt;div&gt;
        ...
      &lt;/div&gt;
    &lt;/form&gt;
    &lt;!-- Ez a rendezetlen lista tartalmazza a fő navigációs menüjét az oldalnak - a vízszintes menüsávot, amelyet a főcím képe alatt láthatsz --&gt;
    &lt;ul id=&quot;menu&quot;&gt;
      ...
    &lt;/ul&gt;
    &lt;!-- Ezek az egymásbaágyazott div-ek adják meg a belépődoboz struktúráját, ahol megadhatod a felhasználóvedet és a jelszavadat a belépéshez az oldalra. Ezt csak akkor látod, ha nem vagy belépve --&gt;
    &lt;div id=&quot;loginbox&quot;&gt;
      &lt;div id=&quot;login&quot;&gt;
        ...
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- Ezekbe az egymásbaágyazott div-ekbe kerül a lap valódi tartalma - a cikkek rövid tartalma, amelyek a lap fő tartalmát adják --&gt;
    &lt;div id=&quot;content2&quot;&gt;
      &lt;div id=&quot;main&quot;&gt;  
        ...
        &lt;div class=&quot;major&quot;&gt;
          ...
        &lt;/div&gt;
        &lt;div class=&quot;major&quot;&gt;
          ...
        &lt;/div&gt;
        ...
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- Ez a div tartalmazza a lap oldalsávját - a cikkek kategóriáit, az utolsó hozzászólásokat, stb --&gt;
    &lt;div id=&quot;side&quot;&gt;
      ...
    &lt;/div&gt;
    &lt;!-- Ez a div tartalmazza a láblécet, ahol láthatod a copyright megjegyzést, valamint mindenféle hivatkozásokat --&gt;
    &lt;div id=&quot;footer&quot;&gt;
      ...
    &lt;/div&gt;
  &lt;!-- A lap vége - itt zárjuk be az első wrapper div-et --&gt;  
  &lt;/div&gt;
&lt;/body&gt;</pre>

<h2 id="extrainfo">Extra információk</h2>

<p>Néhány tartalom olyan extra információkat tartalmaz, amelyeket a különböző kliens eszközök fel tudnak használni. Az ilyen információkat valamilyen attribútummal lehet leírni. A <code>span</code> elem gyakran a legjobb megoldás az ilyen információk befűzésére, amint azt az alábbiakban bemutatjuk.</p>

<p>Egy jó példa az az eset, amikor valamilyen más nyelvű szövegrész jelenik meg a dokumentumban. Például:</p>

<pre>&lt;p&gt;&lt;q&gt;Plus ça change, plus c&#39;est la même chose&lt;/q&gt; — mondta.&lt;/p&gt;</pre>

<p>Bár a fő dokumentum nyelve magyar, az idézet valójában francia. Ezt a <code>lang</code> attribútum használatával adhatjuk meg:
</p>

<pre>&lt;p&gt;&lt;q <strong>lang=&#39;fr&#39;</strong>&gt;Plus ça change, plus c&#39;est la même chose&lt;/q&gt; — mondta.&lt;/p&gt;</pre>

<p>Ebben az esetben könnyen meg tudtuk jelölni az eltérő nyelvet, mivel az egy idézetben jelent meg, így a <code>q</code> elem éppen megfelelt az idegen nyelvű tartalom közrezárására. Vannak viszont olyan esetek, amikor nem találunk egyetlen olyan elemet sem, amelyik megfelelő lenne, így kénytelenek vagyunk használni a <code>div</code> vagy a <code>span</code> elemeket. Például:</p>

<pre>&lt;p&gt;A képernyő-felolvasó a francia chat (macska) szót mindaddig hibásan fogja felolvasni, amíg helyesen meg nem jelöljük a szó nyelvét.&lt;/p&gt;</pre>

<p>Ebben a példában a <em>chat</em> szó megjelenésekor valahogyan jelezni kellene a dokumentumban, hogy a képernyő-felolvasó más nyelvet használjon a kiolvasására. Ebben az esetben egy <code>span</code> elemmel a szó körül nagyon egyszerűen érhetjük el ezt, mivel semmilyen más HTML elemet nem tudunk használni helyette. Mivel csak egyetlen szóról van szó egy hosszabb szövegen belül, így inline, szövegen belüli elemre van szükség. A példát így lehetne átírni helyesen:</p>

<pre>&lt;p&gt;A képernyő-felolvasó a francia <strong>&lt;span lang=&#39;fr&#39;&gt;chat&lt;/span&gt;</strong> (macska) szót mindaddig hibásan fogja felolvasni, amíg helyesen meg nem jelöljük a szót.&lt;/p&gt;</pre>

<p>Ugyanezt a technikát használják a <a href="http://microformats.org/about/">microformatok</a> esetében is, az adattípusok egyforma jelölésére a weblapokon belül. A microformatokról sokkal többet is megtudhatsz <a href="http://dev.opera.com/articles/html/">a dev.opera.com haladó HTML cikkeiből</a>.</p>

<h2 id="kapaszkodo">Kapaszkodók a JavaScriptekhez és CSS-hez</h2>

<p>Már beszéltünk arról, hogyan használhatod a <code>div</code> és a <code>span</code> elemeken az <code>id</code> és a <code>class</code> attribútumokat arra, hogy ezeken keresztül CSS-ből közvetlenül stílusozhasd és pozicionálhasd  a dokumentum bizonyos részeit. Pontosan ugyanígy kell eljárnod ahhoz, hogy JavaScripttel is elérhesd ezeket a részeket.</p>

<p>Ha egy bizonyos elemet megkeresni vagy módosítani szeretnél JavaScripttel, akkor az általános módszer szerint rendelj az elemhez egy <code>id</code> azonosítót, majd használd a <code>getElementById</code> függvényt a lekéréséhez. A JavaScriptről a tanfolyam későbbi részeiben lesz szó bővebben.</p>

<h2 id="divitis">div-itis</h2>

<p>Érdemes megemlíteni még egy gyakran előforduló problémát, amelyre „div-itis” névvel szoktak hivatkozni a webfejlesztők. </p>

<p>Bár nagyon egyszerű a <code>div</code> és a <code>span</code> elemek stílusozása, ezt a módszert lehetőség szerint kerülni kell. A legtöbb esetben a stílusozást vagy a JavaScript funkcionalitást a már létező elemekhez is hozzá lehet rendelni a dokumentumban. Az általános tárolók használata csak végső megoldásként merülhet fel — a legjobb, ha a weblapot megpróbáljuk csak a szemantikus elemek felhasználásával megírni, és a tárolókat csak akkor alkalmazzuk, amikor már nincs más lehetőség.</p>

<h2 id="helytelen">Helytelen szemantika</h2>

<p>Ebben a részben néhány olyan HTML jelölésekkel kapcsolatos gyakori félreértést szeretnék bemutatni, amelyeket érdemes elkerülni, ha csak lehetséges.</p>

<h3 id="altalanos">Általános „bekezdések”</h3>

<p>Néha csábító lehet egyszerűen egy <code>p</code> elembe tenni egy szöveget (bekezdésnek jelölve), de ez nem mindig helyes. Ahogy már korábban is említettem <a href="http://dev.opera.com/articles/view/15-szoveges-reszek-megjelolese/#bekezdes">a szöveges részek megjelölése leírásban</a>:</p>

<blockquote>Ha csak néhány szóról van szó, vagy nem egy teljes mondatról, akkor ezeket nem kell feltétlenül paragrafusként megjelölnöd.</blockquote>

<p>Egy <code>div</code> vagy <code>span</code> elem (a környezet függvényében) sokkal inkább megfelelő az olyan szöveges tartalmak szétválasztására, amelyek között nincs más HTML elemmel leírható kapcsolat.</p>

<h3 id="megjelenito">Prezentációs elemek</h3>

<p>Az interneten fellelhető tanácsok között van egy, amelyik egyértelműen káros, mégpedig a rövid, megjelenítő elemek, mint a <code>b</code> vagy az <code>i</code> használata általános tárolóként a <code>span</code> elem helyett. Általában két indokot hoznak fel a módszer mellett:</p>

<ul>
  <li>Ezek az elemek három byte-tal rövidebbek, így sávszélességet lehet spórolni a HTML és a CSS esetében is.</li>
  <li>Az elemeket csak vizuális megjelenítésre használjuk, így a a „prezentációs” elemek használata ilyen esetekben megengedhető.</li>
</ul>

<p>Az első pont az igaz, de a megspórolt mennyiség túlnyomórészt jelentéktelen (kivéve ha irdatlan mennyiségű vizuális effektust használsz), különösen a mai modern tömörítő módszerek mellett, amelyeket a webes kiszolgálók alkalmaznak a dokumentumokon a böngészőhöz való átküldés előtt. Ezek sokkal rövidebbé teszik a dokumentumokat, mint bármilyen kézileg alkalmazott trükk.</p>

<p>A második pont arra utal, hogy nem értették meg pontosan a prezentációs elemek jelentését a HTML-lel kapcsolatban. A prezentációs elemek azt jelölik, hogy a tartalmuk hogyan néz ki (tehát egyszerűen annyit, hogy „ez a szöveg félkövér”). Nem jelentenek viszont kapaszkodókat a bennük található szövegrészek stílusozásához.</p>

<p>Ha egy rövid szövegrészt egy bekezdésen belül stílusozni vagy JavaScripttel módosítani kell, és nincs hozzá illő szemantikus elem, ami közrefoghatná, akkor az egyetlen helyes elem, amit használhatunk, az a <code>span</code>.</p>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>Ezzel véget is ér a bemutatónk a <code>div</code> és a <code>span</code> elemekről — mostanra már jobban megértheted, hogy mire szolgálnak, és megfelelő helyeken tudod használni őket. A későbbi, CSS-ről szóló leírásokban még lesz róluk szó a lapszerkezetek készítése és más felhasználási módok között is.</p>

<h2 id="tesztkerdesek">Tesztkérdések</h2>

<ul>
  <li>Mi a különbség a <code>div</code> és a <code>span</code> között?</li>
  <li>Nevezd meg a fenti elemek 2 felhasználási módját a weblapokon.</li>
  <li>Nézd meg az egyik kedvenc weboldalad forráskódját. Figyeld meg a felépítését. Sok <code>div</code> és <code>span</code> elemet használ hozzá? Látsz helytelen felhasználási módokat rajtuk? Hogyan lehetne jobban megoldani?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/21-kevesse-ismert/" title="hivatkozás a sorozat előző leírására">Előző leírás — Kevéssé ismert szemantikus elemek</a></li>
<li class="next">Következő leírás — Több lap létrehozása navigációs menüvel</li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<div class="right">
<img src="norm.jpg" alt="Mark Norman Francis" />
<p>Fotó: <a href="http://flickr.com/photos/andybudd/98405468/">Andy Budd</a>.</p>
</div>

<p>Mark Norman Francis már azelőtt az internettel foglalkozott, hogy a web megszületett volna. Jelenleg a Yahoo!-nál a világ legnagyobb weboldalán dolgozik mint kezelőfelület-tervező, új módszereket és kódolási szabályokat dolgoz ki, valamint nemzetközi támogatást nyújt a minőségi webfejlesztéshez.
</p>

<p>A Yahoo! előtt a Formula One Management, a Purple Interactive és a City University vállalatoknál dolgozott különböző minőségben, többek között mint webfejlesztő, CGI programozó és rendszertervező. A <a href="http://marknormanfrancis.com/">http://marknormanfrancis.com/</a> oldalon blogol.</p>
