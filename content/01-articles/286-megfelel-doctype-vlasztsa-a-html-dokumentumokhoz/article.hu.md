Title: Megfelelő doctype választása a HTML dokumentumokhoz
----
Date: 2009-08-17 08:47:36
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/13-a-html-head-eleme/" title="hivatkozás a sorozat előző leírására">Előző leírás — A HTML &lt;head&gt; eleme</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/15-szoveges-reszek-megjelolese/">Következő leírás — Szöveges részek megjelölése HTML-ben</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p><a href="http://dev.opera.com/articles/view/13-a-html-head-eleme/">A 13. leírásban</a> a HTML dokumentum <code>head</code> elemének anatómiájáról volt szó, amelyben részletesen megnéztük, hogy milyen különböző elemeket tartalmazhat a <code>head</code>, és ezek mire valók. Ebben a leírásban részletesebben megnézzük a <code>doctype</code> elemet, megmutatjuk, mire szolgál, hogyan segíthet a HTML validálásában, hogyan választható ki a megfelelő <code>doctype</code> típus a dokumentumhoz, és megnézzük az XML deklarációt, amelyre ritkán ugyan, de szükséged lehet.</p>

<ul>
  <li><a href="#doctype">Első a doctype</a></li>
  <li><a href="#sniffing">Doctype sniffing és renderelési módok</a></li>
  <li><a href="#validalas">Validálás</a></li>
  <li><a href="#valasztas">Doctype választása</a></li>
  <li><a href="#xml">XML deklaráció</a></li>
  <li><a href="#osszefoglalo">Összefoglaló</a></li>
  <li><a href="#tesztkerdesek">Tesztkérdések</a></li>
  <li><a href="#olvasnivalo">További olvasnivaló</a></li>
</ul>

<h2 id="doctype">Első a doctype</h2>

<p>A legelső dolog, amit minden HTML dokumentumban definiálnod kell, az egy DTD deklaráció. Ha még soha senkitől nem hallottál a DTD deklarációról, ne izgulj. A dolgok egyszerűsítése érdekében gyakran úgy hivatkoznak erre, hogy „doctype” — én is így fogom hívni a leírás további részében.</p>

<p>Talán elgondolkodtál azon, hogy mi lehet ez a „DTD” vagy „doctype”. A DTD a „Document Type Definition”, azaz a dokumentum típus definíció rövidítése, és sok más dolog mellett ez adja meg azt, hogy milyen elemeket és attribútumokat használhatsz a HTML egyes részeiben — bizony, a mai weben több különböző HTML verzió is használatban van, de ezen ne aggódj egyelőre, végül is csak az egyikkel kell majd közülük foglalkoznod.</p>

<p>A <code>doctype</code> két dologra használható, a szóban forgó szoftvertől függően:</p>

<ol>
  <li>A webböngészők arra használják, hogy meghatározzák a renderelési módot a weblap megjelenítéséhez (ezekről később még lesz szó).</li>
  <li>A jelölés validátorok a <code>doctype</code> alapján határozzák meg, hogy milyen szabályokat kell ellenőrizniük a dokumentumban (erről is lesz még szó bővebben).</li>
</ol>

<p>Mindkét megközelítés fontos lesz a számodra, de különböző módokon, ezeket fogjuk a leírás további részében bővebben megmagyarázni.</p>

<p>Itt egy példa:</p>

<pre>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot;

        &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
</pre>

<p>Ez így most elsőre teljesen értelmetlennek tűnhet a számodra, úgyhogy engedd meg, hogy elmagyarázzam a lehető legegyszerűbben, hogy hogyan épül fel a fenti elem. Ha kíváncsi vagy egy sokkal részletesebb magyarázatra, amelyben minden egyes karakter funkcióját megmagyarázzák, akkor olvasd el a <a href="http://www.blooberry.com/indexdot/html/tagpages/d/doctype.htm">!DOCTYPE</a> cikket (angolul).</p>

<p>A <code>doctype</code> legfontosabb részei az idézőjelekkel határolt két darab string. A <code>&quot;-//W3C//DTD HTML 4.01//EN&quot;</code> azt jelöli, hogy ezt a DTD dokumentumot a W3C adta ki, a DTD a HTML 4.01-es verzióját írja le, és hogy a DTD-ben használt nyelv az angol (<code>EN</code>).</p>

<p>A második string, a <code>&quot;http://www.w3.org/TR/html4/strict.dtd&quot;</code> egy URL, amely a felhasznált DTD dokumentumra mutat.</p>

<p>Bár a <code>doctype</code> elég különösnek tűnik, szükség van rá a HTML és XHTML specifikációkhoz. Ha nem adod meg, akkor biztosan validálási hibát fogsz kapni, ha ellenőrzöd a dokumentumod jelöléseinek érvényességét a W3C validátorával, vagy más olyan eszközzel, amely HTML dokumentumokban keres hibákat. Egyes böngészőkben ez a funkció alapból benne van, míg más böngészőkben egy kiterjesztéssel lehet telepíteni.</p>

<h2 id="sniffing">Doctype sniffing és renderelési módok</h2>

<p>Ha nem adod meg a <code>doctype</code> elemet, a böngészők ebben az esetben is megpróbálják értelmezni és feldolgozni a dokumentumot — az összes értelmetlen zagyvaságot is meg kell próbálniuk feldolgozni, amit a weben csak találni lehet, szóval nem lehetnek túlságosan válogatósak. Viszont könnyen lehet, hogy <code>doctype</code> nélkül nem olyan eredményt fogsz kapni, mint amilyenre számítottál, mégpedig a „doctype sniffing”, vagyis a <code>doctype</code> „kiszagolása” miatt.</p>

<p>A 21. századi böngészők túlnyomó része minden megnyitott HTML dokumentumnál megpróbálják a <code>doctype</code> segítségével eldönteni, hogy a dokumentum szerzője vajon figyelembe vette-e a webes szabványokat a HTML és a CSS megírásakor, vagy nem foglalkozott ezekkel.</p>

<p>Ha olyan <code>doctype</code>-ot találnak, amely szerint a dokumentum helyesen van kódolva, akkor egy ún. „szabványos módot” fognak használni a lap megjelenítésekor. Szabványos módban a böngészők igyekeznek a lapot a CSS specifikáció szerint elrendezni — ilyenkor ugyanis megbíznak a fejlesztőben, és feltételezik, hogy az oldal készítésekor tudta, hogy mikor mit csinál.</p>

<p>Másrészről, ha egy elavult vagy helytelen <code>doctype</code>-ot találnak, akkor átváltanak egy ún. „Quirks módba”, amely sokkal inkább kompatibilis a régi módszerekkel és a régi böngészőkkel. A Quirks mód azt feltételezi, hogy a dokumentum régi, és nem a jelenlegi webes szabványok szerint készült — a weblap így is meg fog jelenni, de jóval több számítási kapacitást igényelhet, és nagyobb valószínűséggel kapsz furcsa vagy ronda megjelenést, amikor nem is számítasz rá.</p>

<p>A különbség elsősorban abban van, hogy a böngésző hogyan értelmezi a CSS-t, és csak néhány esetben vonatkozik a konkrét HTML értelmezésére. Webfejlesztőként vagy webdesignerként akkor kaphatod az összes böngészőben a leginkább megegyező eredményeket, ha megbizonyosodsz róla, hogy minden böngésző a szabványos módot használja a megjelenítéshez, és megfelelő <code>doctype</code>-ot használsz!</p>

<h2 id="validalas">Validálás</h2>

<p>Amint azt korábban is említettem, a <code>doctype</code>-ot a validátorok is felhasználják; erről többet is meg fogsz tudni a sorozat későbbi részeiből. Jelenleg elég, ha annyit tudsz, hogy a validátor ellenőrzi a HTML dokumentum szintakszisát, és megnézi, hogy van-e benne valamilyen hiba. A validátor pedig a <code>doctype</code> alapján dönti el, hogy milyen szabályokat kell ellenőriznie a dokumentumban. Ez hasonló ahhoz, mint amikor a helyesírás-ellenőrzőnek megmondod, hogy milyen nyelven van megírva a dokumentum. Ha nem mondod meg neki, akkor nem fogja tudni azt sem, hogy milyen helyesírási és nyelvtani szabályokat kellene ellenőriznie.</p>

<h2 id="valasztas">Doctype választása</h2>

<p>Szóval, most már tudod, hogy meg kell adnod egy <code>doctype</code>-ot, és azt is tudod, hogy ez mire szolgál, de honnan fogod tudni azt, hogy melyiket használd? Valójában elég sok van belőlük. Sőt, ha valami igazán komoly dolgot csinálsz, még saját <code>doctype</code>-ot is készíthetsz magadnak. De most nem fogunk belemenni a különböző fajtájú <code>doctype</code>-okba, hanem megpróbálom számodra a dolgokat egyszerű és érthető szinten tartani.</p>

<p>Ha a dokumentumod HTML, használd ezt:</p>

<pre>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot;

       &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
</pre>

<p>Ha a dokumentumod XHTML, használd ezt:</p>

<pre>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot;

       &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;&gt;
</pre>

<p class="note">Megjegyzés: a „valódi” XHTML-t a webböngészőnek XML-ként kell küldeni, de ennek a részletei, hogy mikor és hogyan teheted ezt meg, valamint hogy ez milyen változásokat okoz, túlmutatnak a jelenlegi cikk keretein.</p>

<p>Mindkét <code>doctype</code> használatával a böngésző a szabványos módot fogja használni a dokumentum értelmezésekor. A leglátványosabb hatás, amit a dokumentum készítésekor láthatsz, miután beállítottad a <code>doctpye</code>-ot, hogy sokkal következetesebbek lesznek az CSS változtatása után az eredményeid. Ha más lehetséges <code>doctpye</code>-okra is kíváncsi vagy, amelyeket a dokumentumodhoz használhatsz, akkor nézd meg a <a href="http://www.w3.org/QA/2002/04/valid-dtd-list.html">W3C listáját a javasolt DTD típusokkal</a>.</p>

<p>Talán észrevetted, hogy mindkét <code>doctype</code>, amelyet itt javasoltam, az „strict” (vagyis „szigorú”). Ez talán ijesztően hangzik a számodra, de nem az.</p>

<p>Mind a HTML-nek, mind az XHTML-nek vannak szigorú (<em>strict</em>) és átmeneti (<em>transitional</em>) változatai is. A „szigorú” jelen esetben azt jelenti, hogy a <code>doctype</code> kevesebb megjelenítési jelölést engedélyez, mint az átmeneti változat. Viszont azoknak a megjelenítési jelöléseknek, amelyek nem engedélyezettek, amúgy sincs semmi keresnivalójuk a dokumentumban, mivel a HTML-t a struktúra és a tartalom meghatározására használhatod, és a CSS-ben definiálhatod ezeknek a megjelenését. A szigorú <code>doctype</code> segít neked ebben, mivel a validátor figyelmeztetni fog, ha véletlenül talál egy becsúszott megjelenítési elemet vagy attribútumot a kódodban.</p>

<h2 id="xml">XML deklaráció</h2>

<p>Korábban már említettem, hogy a <code>doctype</code> kell legyen a legelső elem a HTML dokumentumokban. Nos, ez valójában csak egy egyszerűsített változata a valóságnak. Meg kell még említenünk az XML deklarációt is.</p>

<p>Egyes XHTML dokumentumokban a következő kódrészletet láthatod közvetlenül a <code>doctpye</code> előtt:</p>

<pre>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</pre>

<p>Ezt XML deklarációnak hívják, és ha jelen van, akkor mindig a <code>doctype</code> előtt kell legyen.</p>

<p>Az Internet Explorer 6-os verziójának van ezzel egy kis problémája: ennek hatására ugyanis átvált Quirks módba, ami — mint azt már korábban említettem — nem igazán kívánatos.</p>

<p>Szerencsére az XML deklaráció az esetek többségében nem kötelező, kivéve abban az esetben, ha az XHTML dokumentumaidat valóban XML formában küldöd a böngészőknek (lásd a megjegyzést az XHTML-nél), *és* más karakterkódolást használsz, mint az UTF-8, *és* a kiszolgálód nem küld egy HTTP fejlécet, amely megadná a karakterkódolást.</p>

<p>Annak a valószínűsége, hogy ez mind egyszerre bekövetkezik, eléggé elenyésző, így a legegyszerűbb mód arra, hogy megoldhasd az Internet Explorer problémáját, az az,  hogy egyszerűen kihagyod az XML deklarációt. Azért nehogy elfelejtsd a <code>doctype</code>-ot!</p>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>Mindig add meg valamelyik itt említett <code>doctype</code>-ot, mint a HTML dokumentumaid első eleme. Ezzel meggyőződhetsz arról, hogy a validátorok tudni fogják, milyen verziójú HTML-t használsz, így megfelelően tudják neked jelezni a hibákat, amelyeket a dokumentumaidban találnak. Ugyancsak segítenek abban, hogy a modern webböngészők szabványos módot használjanak az oldalad megjelenítéséhez, ami sokkal következetesebb eredményeket biztosít a dokumentum stílusozásakor a CSS segítségével.</p>

<h2 id="tesztkerdesek">Tesztkérdések</h2>

<p>Íme néhány kérdés, amelyeket a leírás elolvasása után meg kell tudnod válaszolni:</p>

<ul>
  <li>Mi a két legfontosabb célja a <code>doctype</code> beillesztésének a HTML dokumentumokba?</li>
  <li>Mik az előnyei annak, ha „szigorú” (<em>strict</em>) <code>doctype</code>-ot használsz az átmeneti (<em>transitional</em>) helyett?</li>
  <li>Miért problémás az XML deklaráció?</li>
  <li>Ebben a leírásban nem említettem a <code>frameset doctype</code>-ot — nézz utána, hogy ez mire jó, és miért kell elkerülni.</li>
</ul>

<h2 id="olvasnivalo">További olvasnivaló</h2>

<ul>
  <li><a href="http://www.w3.org/QA/Tips/Doctype">Ne feledkezz meg a doctype-ról</a> (angol)</li>
  <li><a href="http://webbuilder.hu/index.php/Dokumentumt%C3%ADpus">Dokumentumtípusok</a>; <a href="http://www.w3.org/QA/2002/04/valid-dtd-list.html">Javasolt dokumentumtípusok a weben</a> (angol)</li>
  <li><a href="http://www.alistapart.com/articles/doctype/">Javítsd ki az oldalad a jó doctype-pal!</a> (angol)</li>
  <li><a href="http://hsivonen.iki.fi/doctype/">A helyes megjelenítési mód aktiválása a doctype használatával</a> (angol)</li>
  <li><a href="http://www.opera.com/docs/specs/doctype/">Az Opera 9 doctype kapcsolói</a> (angol)</li>
  <li><a href="http://www.quirksmode.org/css/quirksmode.html">Quirks mód és szigorú mód</a> (angol)</li>
  <li><a href="http://24ways.org/2005/transitional-vs-strict-markup">Átmeneti és szigorú jelölés</a> (angol)</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/13-a-html-head-eleme/" title="hivatkozás a sorozat előző leírására">Előző leírás — A HTML &lt;head&gt; eleme</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/15-szoveges-reszek-megjelolese/">Következő leírás — Szöveges részek megjelölése HTML-ben</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<img class="right" src="http://forum-test.oslo.osa/kirby/content/articles/286-14-megfelel-doctype-vlasztsa-a-html-dokumentumokhoz/rogerjohansson.jpg" alt="Roger Johansson" />

<p>Roger Johansson webes szakértő, és elsősorban a webes szabványokkal, a hozzáférhetőséggel és használhatósággal foglalkozik. A napjait a svéd <a href="http://www.netrelations.se/">NetRelations</a> webes tanácsadó cégnél tölti weboldalak fejlesztésével, míg esténként és a hétvégeken a személyes oldalaira, a <a href="http://www.456bereastreet.com/">456 Berea Street</a> és a <a href="http://www.kaffesnobben.com/">Kaffesnobben</a> oldakon ír cikkeket.</p>

<p>Ha éppen nem ül a számítógépe előtt, Roger gyakran található meg a kertjében, amint éppen a körmeit koszolja össze, vagy a vadonban, halászás közben.</p>
