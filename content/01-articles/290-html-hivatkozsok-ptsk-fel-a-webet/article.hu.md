Title: HTML hivatkozások — építsük fel a webet!
----
Date: 2009-08-17 08:47:54
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/17-kepek-a-htmlben/">Előző leírás — Képek a HTML-ben</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/19-html-tablazatok/">Következő leírás — HTML táblázatok</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Ebben a leírásban mindent meg fogsz tudni a web történetének egyik legnagyobb dobásáról — a hivatkozásokról. Egy dokumentum olvasója a hivatkozást követve átugorhat egy másik dokumentumra, és egyik kiszolgálóról átléphet egy másik kiszolgálóra úgy, hogy közben nem kell újra kapcsolódnia minden alkalommal. Mióta feltalálták, már nagyon sok minden történt, de egy dolog változatlan maradt: a hivatkozások most is különösen fontos részei a webes életnek, és a használatukkal jelentősen megkönnyítheted, de akár meg is nehezítheted a látogatóid dolgát.</p>

<p>Miután végigolvasod ezt a leírást, tudni fogod, hogyan készíthetsz olyan hivatkozásokat, amelyek jól érthetőek, és minden környezetben működnek. Azt is meg fogod ismerni, hogyan befolyásolják a hivatkozások az oldalad népszerűségét a keresőkben, és kapsz néhány tippet a hivatkozások elnevezéséhez is. Szokás szerint most is van <a href="links_code.zip">egy kapcsolódó csomagolt zip fájl</a>, amely a leírásban hivatkozott fájlokat tartalmazza. A mai anyag felépítése a következő:</p>

<ul>
  <li><a href="#mik_a_hivatkozasok">Mik azok a hivatkozások?</a></li>
  <li><a href="#hivatkozas_felepitese">Egy hivatkozás felépítése</a></li>
  <li><a href="#id_es_href">Hivatkozás vagy cél? Az <code>id</code> és <code>href</code> attribútumok</a></li>
  <li><a href="#ne_hagyj_ketseget">Ne hagyj kétséget afelől, hogy mire hivatkozol</a>
<ul>
  <li><a href="#title">Extra információk a <code>title</code> attribútummal</a></li>
  <li><a href="#nem_html_eroforras">Hivatkozás nem HTML erőforrásokra — ne hagyd, hogy találgassanak</a></li>
  <li><a href="#kulso_vs_belso">Külső kontra belső hivatkozások</a></li>
</ul>
</li>
  <li><a href="#keretek_es_felugrok">Keretek és felugrók — mondj nemet rájuk</a></li>
  <li><a href="#bejovo_es_kimeno">A bejövő és kimenő hivatkozások haszna</a></li>
  <li><a href="#elnevezes">Hivatkozások elnevezése</a></li>
  <li><a href="#stilusozas">Hivatkozások stílusozása</a></li>
  <li><a href="#osszefoglalo">Összefoglaló</a></li>
  <li><a href="#tesztkerdesek">Tesztkérdések</a></li>
</ul>

<h2 id="mik_a_hivatkozasok">Mik azok a hivatkozások?</h2>

<p>A hivatkozások a weblap részei (melyeket a legtöbb esetben HTML-ben hoznak létre, de nem mindig), és valamilyen másik erőforrásra mutatnak — más HTML dokumentumokra, szöveges fájlokra, PDF fájlokra, stb. Vannak olyan hivatkozások, amelyeket a böngésző automatikusan követni szokott, ilyenek például a <code>link</code> elem hivatkozásai (ezekkel már találkozhattál néhány korábbi leírásban, ezt használtuk például a CSS fájlok importálására a HTML dokumentumban), míg más hivatkozásokat a felhasználó aktiválhat tetszés szerint. Ezeket kapcsoknak nevezzük, és az <code>a</code> elem segítségével adhatod hozzá a dokumentumhoz.</p>

<h2 id="hivatkozas_felepitese">Egy hivatkozás felépítése</h2>

<p>Bármilyen soron belüli (inline) elemet átalakíthatsz kapcsolt hivatkozássá, ha köré teszed az <code>a</code> elemet. Például az alábbi HTML dokumentumban a Yahoo Developer Network szöveg hivatkozássá alakul (<a href="linkpelda.html">linkpelda.html</a>).</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
&lt;title&gt;Hivatkozás példa&lt;/title&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;linkexamplestyles.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hivatkozás a YDN-re&lt;/h1&gt;
  &lt;p&gt;&lt;a href=&quot;http://developer.yahoo.com&quot;&gt;Yahoo Developer Network&lt;/a&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>Azok a látogatók, akik aktiválják ezt a hivatkozást (rákattintva az egérrel, kiválasztva a billentyűzettel vagy hanggal) el fogják hagyni az aktuális oldalt, és átkerülnek a YDN oldalára. A hivatkozással sok mindent lehet csinálni, de a stílusozásáról csak később fogunk részletesebben is beszélni.</p>

<p>A hivatkozáshoz több attribútumot is megadhatsz:</p>

<ul>
  <li><code>href</code> — az erőforrás, amire mutat (ez egy külső fájl vagy egy azonosító).</li>
  <li><code>id</code> — az azonosító, ha ez a kapocs egy cél, és nem egy hivatkozás.</li>
  <li><code>title</code> — további információk a külső erőforrásról.</li>
</ul>

<p>Először is vegyük sorra a legfontosabb attribútumokat, majd nézzük meg, hogyan könnyítheted meg a látogatóid dolgát.</p>

<h2 id="id_es_href">Hivatkozás vagy cél? Az <code>id</code> és <code>href</code> attribútumok</h2>

<p>Az <code>a</code> elemnek többféle szerepe is lehet a dokumentumban attól függően, hogy milyen attribútumot állítottunk be rajta. A leggyakoribb, amit közülük használni fogsz, az a <code>href</code> attribútum, ez adja meg, hogy egy hivatkozás milyen erőforrásra mutat. Ez az attribútum több különböző értéket is tartalmazhat:</p>

<ul>
  <li>Egy URL-t az aktuális mappában (<code>sugo.html</code>), vagy egy másik mappában, az aktuális mappához viszonyított útvonallal megadva (például <code>&quot;../../sugo/sugo.html&quot;</code> — a 2 pont itt a hierarchiában eggyel feljebb található mappát jelenti), vagy pedig a kiszolgálón található abszolút útvonallal (például <code>&quot;/sugo/sugo.html&quot;</code> — itt a kezdő perjel azt jelenti, hogy az útvonal a kiszolgáló gyökérkönyvtárából indul).</li>

  <li>Egy URL-t egy teljesen más kiszolgálóhoz (például <code>&quot;http://wait-till-i.com&quot;</code> vagy <code>&quot;ftp://ftp.opera.com/&quot;</code> vagy <code>&quot;http://developer.yahoo.com/yui&quot;</code>).</li>

  <li>Egy szakaszazonosítót vagy egy hivatkozásnevet, kettőskereszt után megadva (például &quot;#menu&quot;).  Ez a dokumentumon belül mutat egy területre.</li>

  <li>Egy vegyes, URL-ből és szövegrész azonosítóból álló szöveget — így direkt tudsz hivatkozni egy másik dokumentumban egy megjelölt szakaszra, az URL után álló szakaszazonosítóval (például <code>&quot;http://developer.yahoo.com/yui/#cheatsheets&quot;</code>).</li>
</ul>

<p>Bármelyik megoldás ezek közül egy hivatkozást fog készíteni, amelyik valahová máshová mutat. Másrészről az <code>id</code> attribútum csak egy kapcsot hoz létre a lapon — erre tudnak aztán más hivatkozások mutatni. Ez talán első hallásra bonyolultnak tűnik, mivel mindkét esetben ugyanazt az elemet használjuk (<code>a</code>). Hogy könnyen megjegyezhesd, gondolj rájuk így: az id attribútum csak egy hivatkozás jelölőt készít, amelyet aztán felhasználhatsz arra, hogy a dokumentum különböző szakaszaira hivatkozz vele. Az alábbi HTML-ben az összes felsorolt hivatkozástípusra találsz egy példát (<a href="linkpeldak.html">linkpeldak.html</a>):</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
&lt;title&gt;Különböző hivatkozás példák&lt;/title&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;linkexamplestyles.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Különböző hivatkozás példák&lt;/h1&gt;

  &lt;h2&gt;Példa a lapon belüli navigációra szakasz azonosítókkal, hivatkozásokkal és kapcsokkal&lt;/h2&gt;
  &lt;div id=&quot;nav&quot;&gt;
    &lt;ul id=&quot;toc&quot;&gt;
      &lt;li&gt;&lt;a href=&quot;#sec1&quot;&gt;Első szakasz&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#sec2&quot;&gt;Második szakasz&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#sec3&quot;&gt;Harmadik szakasz&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#sec4&quot;&gt;Negyedik szakasz&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#sec5&quot;&gt;Ötödik szakasz&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;  
    
  &lt;div id=&quot;content&quot;&gt;
    &lt;div&gt;
      &lt;h2&gt;&lt;a id=&quot;sec1&quot;&gt;Szakasz #1&lt;/a&gt;&lt;/h2&gt;
      &lt;p&gt;&lt;a href=&quot;#toc&quot;&gt;Vissza a menühöz&lt;/a&gt;&lt;/p&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;h2&gt;&lt;a id=&quot;sec2&quot;&gt;Szakasz #2&lt;/a&gt;&lt;/h2&gt;
      &lt;p&gt;&lt;a href=&quot;#toc&quot;&gt;Vissza a menühöz&lt;/a&gt;&lt;/p&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;h2&gt;&lt;a id=&quot;sec3&quot;&gt;Szakasz #3&lt;/a&gt;&lt;/h2&gt;
      &lt;p&gt;&lt;a href=&quot;#toc&quot;&gt;Vissza a menühöz&lt;/a&gt;&lt;/p&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;h2&gt;&lt;a id=&quot;sec4&quot;&gt;Szakasz #4&lt;/a&gt;&lt;/h2&gt;
      &lt;p&gt;&lt;a href=&quot;#toc&quot;&gt;Vissza a menühöz&lt;/a&gt;&lt;/p&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;h2&gt;&lt;a id=&quot;sec5&quot;&gt;Szakasz #5&lt;/a&gt;&lt;/h2&gt;
      &lt;p&gt;&lt;a href=&quot;#toc&quot;&gt;Vissza a menühöz&lt;/a&gt;&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;h2&gt;Néhány más hivatkozás példa&lt;/h2&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href=&quot;http://developer.yahoo.com&quot;&gt;Yahoo Developer Network&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;http://dev.opera.com/articles/view/the-freelancing-business-part-1-pricing/#marketing&quot;&gt;Önmarketing tippek&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;ftp://get.opera.com/pub/opera/win/&quot;&gt;Az Opera különböző verzióinak letöltése&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;http://farm1.static.flickr.com/56/188791635_0b8bdd808d.jpg?v=0&quot;&gt;Képek a könyvemről&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;

&lt;/body&gt;
&lt;/html&gt;</pre>

<p>Nyisd meg ezt a fájlt a böngésződben, és próbáld ki benne a hivatkozásokat. Ha az első listából aktiválod a linkeket, akkor azt fogod észrevenni, hogy ezek a dokumentum megfelelő szakaszaira fognak ugrani. Ez azért van, mert a kapcsolódó szakasz azonosítóra hivatkoznak — a lista első eleme például a <code>href</code> attribútummal hivatkozik a <code>#sec1</code> azonosítójú szakaszra, ami az első <code>h2</code> elemben található hivatkozás <code>id</code> attribútumának felel meg. Ennyit kell tenned ahhoz, hogy összeköss két kapcsot egy dokumentumon belül — csak add meg a <code>href</code> attribútumban azt az értéket, amelyik a hivatkozott rész <code>id</code> attribútumában található, és tegyél elé egy kettőskeresztet. Figyeld meg azt is, hogy a böngésződ címsorában megjelenített URL ilyenkor tartalmazza a szakaszazonosítót is, így a látogatók elmenthetik vagy elküldhetik emailben a direkt erre a szakaszra mutató hivatkozást, amellyel egyből a dokumentumnak a megadott pontjára ugorhatnak.</p>

<p>Ha viszont a „Vissza a menühöz” linkeket aktiválod, akkor is működik a funkcionalitás, bár a célnál nincs megadva egy azonosítóval rendelkező hivatkozás. Hogyan lehetséges ez? Úgy, hogy a szakaszazonosító valójában bármilyen elem lehet, amelyiknek meg van adva az <code>id</code> attribútuma. Ismétlésként:</p>

<ul>
  <li>A hivatkozásoknak meg lehet adni egy szakasz azonosítót a <code>href</code> attribútumban — az azonosító ilyenkor mindig kettőskereszttel (<code>#</code>) kezdődik.</li>

  <li>Aktiváláskor a hivatkozás átugrik bármilyen HTML elemre, amelyiknek az <code>id</code> attribútuma a megadott értéket tartalmazza. Egy lapon belül az <code>id</code> attribútumoknak egyedieknek kell lenniük.</li>

  <li>Az id elemek elnevezésére vonatkozik néhány megkötés. A legfontosabb, hogy egy alfanumerikus karakterrel kell kezdődnie, és nem lehet benne üres hely.</li>
</ul>

<p>Ezzel lefedtük a menüt és a példában szereplő különböző szakaszokat, de mi van a többi hivatkozással? Ha kipróbálod őket, látni fogod, hogy mindegyik más célra mutat — az egyik egy másik oldalra visz, a másik megjelenít egy képet, a harmadik egy másik weboldal egy bizonyos pontjára visz át (a megfelelő <code>id</code> megadásával). Ha mindegyik működött nálad, az nagyszerű, de mi van akkor, ha a böngésződ nem képes egyik-másik linkkel megbirkózni?</p>

<h2 id="ne_hagyj_ketseget">Ne hagyj kétséget afelől, hogy mire hivatkozol</h2>

<p>Soha ne felejtsd el az egyik legfontosabb dolgot a hivatkozásokkal kapcsolatban, mégpedig hogy alapvető részét képezik a felhasználóval való kapcsolatodnak. Ha felkínálsz nekik egy hivatkozást, akkor megbíznak abban, hogy nyugodtan követhetik, és ott hasznos, releváns információt fognak találni. Ha a hivatkozásaid nem működnek, mert a hivatkozott tartalom nem elérhető, vagy olyan formában található meg, amit a látogató nem tud megnyitni, akkor visszaélsz ezzel a bizalommal és elveszíted a hiteledet a látogatók szemében. Ne hagyd, hogy ez megtörténjen.</p>

<h3 id="title">Extra információk a <code>title</code> attribútummal</h3>

<p>Mint sok más HTML elemhez, az <code>a</code> elemhez is hozzá lehet adni egy <code>title</code> attribútumot, ha további információkat akarsz megadni. A böngészők ezt a szöveget egy ún. tooltipben jelenítik meg, ha a látogató a hivatkozás fölé viszi az egérkurzort. Ez a megjegyzés megmondhatja számukra, hogy mire vonatkozik ez a hivatkozás. Például adhatsz egy rövid bevezetést a hivatkozott tartalomhoz (<a href="titlepelda.html">titlepelda.html</a>):</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
&lt;title&gt;Extra információk hozzáadása a title attribútummal&lt;/title&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;linkexamplestyles.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Extra információk hozzáadása a title attribútummal&lt;/h1&gt;
  &lt;ul&gt;
    &lt;li&gt;További információt a &lt;a title=&quot;A Yahoo Developer Network egy központi oldal azokhoz az eszközökhöz, amelyeket a Yahoo biztosít, mint például a Yahoo User Interface Library (YUI) és a Design Patterns repository&quot; href=&quot;http://developer.yahoo.com&quot;&gt;Yahoo Developer Network&lt;/a&gt; oldalán találhatsz.&lt;/li&gt;
  &lt;/ul&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>Ennek ellenére nem várhatod el azt sem a látogatóidtól, hogy elég figyelmük és türelmük legyen ehhez, így nem támaszkodhatsz teljes mértékben csak erre a megoldásra. Könnyen lehet, hogy a látássérült felhasználók, akik a lapot egyáltalán nem is látják, nem fognak hozzáférni ehhez az információhoz. Bár a képernyőfelolvasók képesek kiolvasni a <code>title</code> attribútum tartalmát, alapesetben ezt nem olvassák fel a felhasználóknak — éppen ezért soha ne adj meg fontos információt egy hivatkozásról a title attribútumban. Fontos információk a következők lehetnek:</p>

<ul>
  <li>Hivatkozás nem HTML erőforrásokra, mint például PDF fájlok, képek, videók, hangfájlok vagy letöltések.</li>
  <li>Hivatkozás egy másik kiszolgálóra, ami elhagyja az aktuális oldalt (külső kontra belső linkek).</li>
  <li>Hivatkozás egy olyan dokumentumra, amelyik egy új lapon vagy egy felugróban fog megnyílni.</li>
</ul>

<h3 id="nem_html_eroforras">Hivatkozás nem HTML erőforrásokra — ne hagyd, hogy találgassanak</h3>

<p>Nagyon bosszantó tud lenni, ha rákattintasz egy hivatkozásra, és a böngésződ nem tudja, hogy a hivatkozáson található tartalommal mit kezdjen. Mégis nagyon gyakran előfordul az, hogy a weboldalak mindenféle figyelmeztetés nélkül hivatkoznak képekre, PDF dokumentumokra és videókra anélkül, hogy erről a felhasználót értesítenék. A videók különösen gyakran le tudják fagyasztani a böngészőket. Az ilyen erőforrások ráadásul sokszor elég nagyméretűek (biztos láttál már 20 megás PDF-et), ami azt jelenti, hogy a felhasználó esetleg le szeretné tölteni ahelyett, hogy megnyitná a böngészőben, és tovább növelné annak memóriafogyasztását, de az is lehet, hogy egyáltalán nem akar megnyitni nagyméretű fájlokat.</p>

<p>A webes termékek sikerének egyik legnagyobb titka abban rejlik, hogy ne hagyjuk az embereket bizonytalanságban az általuk végezhető műveletekkel kapcsolatban, hanem tisztán és nyíltan leírjuk, hogy a különböző műveleteknek milyen hatásai lesznek. Hogy elkerülhesd a bosszúságot, a hivatkozások esetében mindössze annyit kell tenned, hogy megmondod a látogatónak, milyen erőforrásra mutat ez a hivatkozás. Íme néhány példa (<a href="nemhtmlhivatkozas.html">nemhtmlhivatkozas.html</a>):</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
&lt;title&gt;Hivatkozás nem HTML erőforrásokra&lt;/title&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;linkexamplestyles.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hivatkozás nem HTML erőforrásokra&lt;/h1&gt;

  &lt;ul&gt;
    &lt;li&gt;További információt a &lt;a href=&quot;http://developer.yahoo.com&quot;&gt;Yahoo Developer Network site (külső)&lt;/a&gt; oldalán találhat.&lt;/li&gt;
    &lt;li&gt;Töltsd le a &lt;a href=&quot;http://www.wait-till-i.com/stuff/JavaScript-DOM-Cheatsheet.pdf&quot;&gt;Dom tippek és trükkök (PDF, 85KB)&lt;/a&gt; dokumentumot&lt;/li&gt;
    &lt;li&gt;Válaszd ki és &lt;a href=&quot;ftp://get.opera.com/pub/opera/win/&quot;&gt;töltsd le az Opera különböző verzióit az FTP oldalukról (külső)&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;Nézd meg a &lt;a href=&quot;http://farm1.static.flickr.com/56/188791635_0b8bdd808d.jpg?v=0&quot;&gt;képet a könyvemről (JPG, 200KB)&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;

  &lt;/body&gt;
&lt;/html&gt;</pre>

<h3 id="kulso_vs_belso">Külső kontra belső hivatkozások</h3>

<p>A webes vállalkozások egyik legnagyobb félelme az, hogy a látogatóik egyszer csak fogják magukat, elhagyják a cég weboldalát, és lelépnek a hipertérbe. Emiatt gyakran tiltják meg külső hivatkozások használatát (kivéve, ha a külső hivatkozás célpontja hajlandó eleget fizetni az átirányított forgalom után). Erre a döntési hibára még később visszatérünk; most csak arról fogunk beszélni, hogy mit tesznek az emberek azért, hogy a látogatók ne hagyják el az oldalt, és ez hogyan befolyásolja az oldal sikerét.</p>

<h2 id="keretek_es_felugrok">Keretek és felugrók — mondj nemet rájuk</h2>

<p>A látogatók elvesztésének a félelme és a más oldalakra való hivatkozás kényszerűsége olyan torz fejlesztéseket hozott a webfejlesztésben, amelyek évekig mérgezték az oldalak használhatóságát. Ezek a keretek (<em>frame</em>-ek) és a felugrók.</p>

<p>A HTML keretek használata azt jelenti, hogy a böngészőben megjelenített lapot több különálló dokumentumra osztod fel. Ennek az előnye az, hogy a dokumentum látszólag változatlan marad akkor is, ha a különböző részeit több kiszolgálóról töltöd is be, akár a sajátodról, akár más, külső szerverekről. A használhatóság ezen a ponton véget is ér — a keretek borzalmas felhasználói élményt nyújtanak, és rendkívül károsak:</p>

<ul>
  <li>A keresőmotorok nem tudják a teljes oldal leindexelni, viszont a találatoknál megjeleníthetik a lap egyik részét, amely így, kontextus nélkül akár teljesen értelmetlen is lehet.</li>
  <li>A látogatók nem tudnak könyvjelzőt készíteni a laphoz — amikor legközelebb megnyitják az elmentett könyvjelzőt, akkor a keretrendszer eredeti állapotát fogják látni, és nem azt az állapotot, amiben a mentést végezték.</li>
  <li>Azoknak a látogatóknak, akik kisegítő technológiákra szorulnak, igencsak nehéz napjuk lesz, ha navigálni akarnak a keretek között.</li>
  <li>A külső oldalak sokszor nem szeretik, ha egy ilyen keretben próbálják megjeleníteni őket, és ún. <em>„framebreaker”</em> szkripteket használnak arra, hogy lecseréljék az URL-t a valódi címre az ilyen esetekben. Erre azért van szükség, hogy meggátolják egyes adathalász oldalak trükkjét, amelyek ehhez hasonló módon próbálják rávenni az embereket arra, hogy megadják a webbankos jelszavukat vagy a hitelkártyájuk adatait.</li>
</ul>

<p>A keretkészleten belüli hivatkozások a <code>target</code> attribútumot használják fel arra, hogy megnevezzék a helyes keretet. Minden keret a keretkészleten belül kap egy bizonyos nevet, és a hivatkozást aktiválásakor a <code>href</code> attribútumban megadott dokumentum a megadott keretben fog megjelenni. Ha keretkészlet nem elérhető (például a látogató a dokumentumot egy keresőben találta meg), akkor mindegyik hivatkozás egy új lapot fog nyitni.</p>

<p>Az új lap nyitása egy másik gyakori megoldás a külső oldalakra való hivatkozásra — vagy egy szkriptes felugró ablakkal, vagy a <code>target</code> attribútum <code>_blank</code> értékével. Az a tény, hogy manapság már minden modern böngésző le tudja tiltani a felugró ablakokat, elég jól mutatja, hogy mennyire építhetsz erre a technikára. Nem igazán.</p>

<p>Röviden: ne használd a <code>target</code> attribútumot, amikor hivatkozásokat hozol létre, csak abban az esetben, ha pontosan tudod, mit csinálsz. A módszer különben is már rég elavult — ma már a böngészők tudnak füleket nyitni, így a látogatók a külső hivatkozásokat megnyithatják egy másik fülön a háttérben, hogy később olvassák el azokat, és közben ott maradhatnak az oldaladon. Bizonyos esetekben különbséget tehetsz valamilyen jelöléssel a külső és a belső hivatkozások között, de mindig hagyd a döntést a felhasználóra, hogy mit szeretne tenni velük.</p>

<h2 id="bejovo_es_kimeno">A bejövő és kimenő hivatkozások haszna</h2>

<p>Több előnye is van annak, ha külső oldalakra hivatkozol, akár még a konkurenciára is.</p>

<ul>
  <li>Megbízhatóvá tesz a látogatók előtt — azt sugallja, hogy biztos vagy a saját tartalmaid minőségében, és nem bújsz el a kihívóid elől.</li>
  <li>Lehetőséget ad arra, hogy teljes szolgáltatást nyújts — hivatkozhatsz olyan tartalmakra, cikkekre vagy akár termékekre más oldalakról, amelyeket te nem tudsz lefedni, de a látogatóidat esetleg érdekelhetik, ha mélyebben akarnak a témával foglalkozni.</li>
  <li>Ha egy jobb vagy egy eltérő megoldást dolgoztál ki valamire, akkor hivatkozhatsz a régi megoldásra referenciaként.</li>
</ul>

<p>A bejövő hivatkozások hasznosságát (amikor külső oldalak hivatkoznak az oldaladra) kevesen vitatják. Minél több érvényes és minőségi oldal hivatkozik rád releváns kulcsszavakat használva, annál nagyobb besorolást kapsz a webes keresőkben, mint például a Google. Viszont mielőtt ez megtörténne, bizonyítanod kell, hogy te sem félsz másokra hivatkozni az oldaladról.</p>

<p>A releváns kulcsszavak egy másik nagyon fontos témához irányítanak a jó hivatkozások készítésével kapcsolatban, mégpedig hogy hogyan nevezzük el őket.</p>

<h2 id="elnevezes">Hivatkozások elnevezése</h2>

<p>Erről már részben beszéltünk annál a résznél, ahol a nem HTML erőforrásokra mutató hivatkozásokról volt szó, de azért nem árt emlékeztetni magunkat, hogy egy hivatkozás nem csak egyszerűen a lap szövegezésének a része, hanem egy interaktív elem a dokumentumban.</p>

<p>Egyes kisegítő megoldások a teljes dokumentum helyett először csak a hivatkozások listáját ajánlják fel a látogatóak, hogy gyorsan átfuthasson rajtuk, ami azt jelenti, hogy érdemes figyelned arra, hogy a hivatkozásaid szövege önmagában is értelmes legyen, a saját kontextusán kívül is. Ezt könnyen ellenőrizheted Operában, ha megnyitod a weblapot, és kiválasztod az Eszközök &gt; Hivatkozások pontot a menüben, vagy megnyomod a <kbd>Ctrl + Shift + L</kbd> gombokat. Egy új fülön látni fogod a dokumentum összes hivatkozását, valamint azt is, hogy melyik hová mutat.</p>

<p>A fentiek alapján nem csak arra érdemes figyelned, hogy a hivatkozások szövege értelmes legyen, hanem arra is, hogy ne legyenek olyan linkek, amelyeknek ugyanaz a szövege, de különböző címekre mutatnak. A klasszikus hiba a „klikk ide” típusú linkek, például a következő szövegkörnyezetben: „A program utolsó változatának letöltéséhez kattints ide”. Sokkal jobb, ha olyan szöveget választasz a hivatkozásnak, amelyik megmagyarázza, hogy az mire mutat — ebben az esetben például „Töltsd le és próbáld ki az alkalmazás utolsó változatát”.</p>

<p>Ugyanez vonatkozik a „tovább” linkekre is. Ezeket főleg a híroldalakon találod meg, ahol van egy címsor és egy bevezető szöveg, majd egy „tovább” vagy „bővebben” link a végén. Erre a problémára megoldás lehet, ha készítesz egy „tovább” képet, és egyedi alternatív szöveget adsz hozzá, vagy készítesz egy <code>span</code> elemet a hivatkozáson belül, amit aztán CSS-sel elrejtesz. Ezekről a trükkökről bővebben is fogunk még beszélni a sorozat egy későbbi részében, <ins>a menük és a navigáció keretében</ins>.</p>

<h2 id="stilusozas">Hivatkozások stílusozása</h2>

<p>Bár még nem érkeztünk el a sorozatban a CSS-hez, de ezen a ponton érdemes megemlíteni, hogy nagyon fontos a hivatkozásaid megjelenése is, és ehhez a hivatkozásoknak több különböző állapotát kell figyelembe venned. A linkek lehetséges állapotai (amelyek megfelelnek a CSS pszeudo-szelektoroknak — ne ijedj meg, nem bonyolult) a következők:</p>

<ul>
  <li><code>link</code> — ez az alapértelmezett állapot — ezzel határozhatod meg, hogyan nézzen ki egy hivatkozás a dokumentum különböző részeiben. Alapesetben a még nem látogatott hivatkozások kékkel jelennek meg.</li>
  <li><code>visited</code> — azoknak a hivatkozásoknak a stílusa, amelyeket már korábban meglátogattál (és valószínűleg még benne is vannak a böngésző gyorsítótárában). Alapesetben a látogatott hivatkozások lilával jelennek meg.</li>
  <li><code>hover</code> — a hivatkozás stílusa, amikor az egérkurzor fölötte van.</li>
  <li><code>active</code> — a hivatkozás stílusa, amikor aktiválva van, például amíg kattintás után felépül a kapcsolat a hivatkozott oldalra; olyankor is ebben az állapotban van az utolsó aktivált link, amikor a böngészőben visszalépsz egy korábbi oldalra.</li>
</ul>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>Sok mindenről beszéltünk ebben a leírásban, de a legfontosabb azt megjegyezni, hogy hogyan működnek és mire szolgálnak a hivatkozások. A pályafutásod során rengeteg trükköt és technikát fogsz róluk tanulni, amelyekkel felülbírálhatod a normál működésüket, de remélem ilyenkor megállsz majd egy pillanatra, és elgondolkodsz rajta, hogy valóban szükség van-e arra, amit éppen meg szeretnél valósítani.</p>

<p>A következőkről beszéltünk:</p>

<ul>
  <li>Az <code>a</code> elem felépítése és a (nem elavult) attribútumai</li>
  <li>A különbség az <code>a</code> elemek között hivatkozásként (a <code>href</code> attribútummal) vagy kapocsként (a <code>name</code> attribútummal) használva</li>
  <li>Miért kell a kapcsok neve egyedi legyen</li>
  <li>Annak a szükségessége, hogy a látogatókat tájékoztasd arról, mire számíthatnak a hivatkozás mögött (milyen formátumú a fájl és mekkora)</li>
  <li>Hogyan adhatsz további információt a hivatkozáshoz a <code>title</code> attribútum segítségével, mint tooltip — és miért nem jó ezt fontos információk megadására használni</li>
  <li>A különbség a külső (más oldalakra mutató) és belső (a saját szerveren található dokumentumokra mutató) hivatkozások között</li>
  <li>Elavult technikák, mint például a felugrók és a keretek, valamint hogy miért kell ezeket elkerülni</li>
  <li>A más oldalakra való hivatkozás, valamint a bejövő hivatkozások előnyei</li>
  <li>Hogyan nevezzük el helyesen a hivatkozásokat, hogy kontextustól függetlenül is értelmesek legyenek, és ez miért fontos</li>
  <li>A hivatkozások stílusozásának alapjai</li>
</ul>

<p>Ezzel a tudással már képes leszel a HTML dokumentumokban helyes hivatkozásokat készíteni, és készen állsz arra, hogy elgondolkodj a menükön és a navigáción.</p>

<h2 id="tesztkerdesek">Tesztkérdések</h2>

<ul>
  <li>Mi a hiba a következő hivatkozásban: <code>&lt;a href=&quot;jelentes.pdf&quot; title=&quot;Jelentés PDF-ben, 2.3MB&quot;&gt;töltse le a legutolsó jelentést&lt;/a&gt;</code>?</li>
  <li>Mire szolgál a hivatkozásoknál a <code>target</code> attribútum, és hogyan lehet ezt jól felhasználni?</li>
  <li>Hogyan készíthetsz olyan hivatkozást, amelyik aktiváláskor a lap alsóbb részére visz el? Mire kell vigyáznod az ilyen esetekben?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/17-kepek-a-htmlben/">Előző leírás — Képek a HTML-ben</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/19-html-tablazatok/">Következő leírás — HTML táblázatok</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/290-18-html-hivatkozsok-ptsk-fel-a-webet/chrisheilmann.jpg" alt="Chris Heilmann" title="Chris Heilmann" />
<p class="comment">Fotó: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>
</div>

<p>Miután belekontárkodott a rádiózásba, Chris Heilmann tíz évig dolgozott webfejlesztőként. Jelenleg a Yahoo!-nál dolgozik Angliában mint oktató és vezető fejlesztő, és a kódminőséget ellenőrzi az európai és ázsiai kirendeltségeknél.</p>

<p>Chris a <a href="http://wait-till-i.com/">Wait till I come</a> oldalon blogol, és „codepo8” néven található meg több közösségi oldalon is.</p>

