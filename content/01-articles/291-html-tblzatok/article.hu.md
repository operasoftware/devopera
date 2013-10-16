Title: HTML táblázatok
----
Date: 2009-08-17 08:47:56
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/18-html-hivatkozasok/">Előző leírás — HTML hivatkozások — építsük fel a webet!</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/20-html-urlapok/">Következő leírás — HTML űrlapok — az alapok</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>„Ó jaj!” — hogyan tudom a webes szabványokkal ezt a rengeteg adatot megjeleníteni? A lelki szemeid előtt talán már meg is jelentek a többszörösen egymásba ágyazott elemek, amelyek szépen sorokba és cellákba szabályozzák az adathalmazt… de nem kell aggódnod, van megoldás — a táblázatok segítenek!</p>

<p>A webdesignban a táblázatokat nagyon jól lehet használni arra, hogy az adatokat rendezett módon jelenítsd meg. Más szóval, a táblázatokra, diagramokra és a többi hasonló grafikonra gondolhatsz úgy is, hogy ezek segítenek az információk összehasonlításában, kontrasztba állítják a különböző adatrészeket. Gyakran láthatsz ilyeneket weblapokon, például az elnökválasztás szavazatainak összehasonlításakor, sport statisztikákról, árak összehasonlításakor, méretek megjelenítésekor és még sok másféle adat esetén.</p>

<p>Az internet őskorában, még mielőtt a CSS elterjedt volna, mint egy HTML-től különálló prezentációs réteg, a táblázatokat gyakran használták a weblapok elrendezésének beállítására — oszlopokat, dobozokat hoztak így létre, és ezzel helyezték el a weblap különböző részeit az oldalon. Ez a lehető legrosszabb módszer az elrendezés megvalósítására; a táblázatos elrendezéssel kusza, zavaros lapokat kapunk egy halom egymásba ágyazott táblázattal — a végén csak hatalmas fájlok maradnak, amelyeket nehéz karbantartani és még nehezebb módosítani. Manapság még mindig nagyon sok oldalt találhatsz a neten, amelyek így épülnek fel, de a biztonság kedvéért te már a táblázatokat csak arra használd, amire készültek — vagyis adatok megjelenítésére —, és az elrendezés kialakításához használd inkább a CSS-t.</p>

<p>Ebben a leírásban megnézzük, hogyan kell helyesen használni a HTML táblázatokat. A felépítés a következő:</p>

<ul>
  <li><a href="#legyeszerubb_tablazat">A lehető legegyszerűbb táblázat</a></li>
  <li><a href="#tobb_funkcio">Adjunk hozzá több funkciót</a></li>
  <li><a href="#alakitsuk_tovabb">Alakítsuk tovább a táblázatot</a></li>
  <li><a href="#segit_a_css">Segít a CSS: legyen szebb táblázatunk</a></li>
  <li><a href="#osszefoglalo">Összefoglaló</a></li>
  <li><a href="#olvasnivalo">További olvasnivalók</a></li>
  <li><a href="#tesztkerdesek">Tesztkérdések</a></li>
</ul>

<h2 id="legyeszerubb_tablazat">A lehető legegyszerűbb táblázat</h2>

<p>Először is építsük fel a táblázathoz szükséges szemantikus HTML kódot — a példában most Észak-Amerika vulkánkitöréseit fogjuk megnézni. Nagyon szeretem a vulkánokat, és gyerekkoromban sikerült is meggyőznöm az édesanyámat, hogy vigyen el ezekhez a vulkánokhoz, amikor meglátogattuk a nagymamát. Nagyon reménykedtem benne, hogy a vakáció alatt valamelyik ki fog törni, de sajnos hiába. Lássuk akkor az első táblázatunkat:</p>

<pre>
&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;Vulkán neve&lt;/td&gt;
        &lt;td&gt;Hely&lt;/td&gt;
        &lt;td&gt;Utolsó nagyobb kitörés&lt;/td&gt;
        &lt;td&gt;Kitörés típusa&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Mt. Lassen&lt;/td&gt;
        &lt;td&gt;Kalifornia&lt;/td&gt;
        &lt;td&gt;1914-17&lt;/td&gt;
        &lt;td&gt;Explozív kitörés&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Mt. Hood&lt;/td&gt;
        &lt;td&gt;Oregon&lt;/td&gt;
        &lt;td&gt;1790&lt;/td&gt;
        &lt;td&gt;Piroklaszt-torlóár és lávafolyás&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Mt .St. Helens&lt;/td&gt;
        &lt;td&gt;Washington&lt;/td&gt;
        &lt;td&gt;1980&lt;/td&gt;
        &lt;td&gt;Explozív kitörés&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
</pre>

<p>Ez a kód a következőképpen jelenik meg:</p>

<table>
    <tr>
        <td>Vulkán neve</td>
        <td>Hely</td>
        <td>Utolsó nagyobb kitörés</td>
        <td>Kitörés típusa</td>
    </tr>
    <tr>
        <td>Mt. Lassen</td>
        <td>Kalifornia</td>
        <td>1914-17</td>
        <td>Explozív kitörés</td>
    </tr>
    <tr>
        <td>Mt. Hood</td>
        <td>Oregon</td>
        <td>1790</td>
        <td>Piroklaszt-torlóár és lávafolyás</td>
    </tr>
    <tr>
        <td>Mt .St. Helens</td>
        <td>Washington</td>
        <td>1980</td>
        <td>Explozív kitörés</td>
    </tr>
</table>

<p>Lássuk, milyen részekből áll a fenti kódban látható HTML jelölés:</p>

<ul>
  <li><code>&lt;table&gt;&lt;/table&gt;</code>: A <code>table</code> tag mondja meg a böngészőnek, hogy a benne található tartalmat táblázatos formában szeretnéd elrendezni.</li>
  <li><code>&lt;tr&gt;&lt;/tr&gt;</code>: A <code>tr</code> elemmel hozhatsz létre egy sort a táblázatban. Ezáltal a böngésző tudni fogja, hogy minden tartalmat a <code>&lt;tr&gt;</code> és <code>&lt;/tr&gt;</code> tagek között vízszintesen rendezzen el, a táblázat egy sorában.</li>
  <li><code>&lt;td&gt;&lt;/td&gt;</code>: A <code>td</code> elemmel határozhatsz meg egy cellát a táblázatban, vagy más önálló tartalmat a soron belül. Figyelj arra, hogy mindig csak annyi <code>td</code> elemet használj a cellákhoz, amennyire az adatoknak szüksége van. Ne használj üres cellákat azért, hogy kitöltsd a helyet, vagy távolabb tedd egymástól a cellákat — ilyen esetekben használhatod a CSS-t, amellyel könnyen készíthetsz kitöltéseket a táblázatban. Ez nem csak azért jobb módszer, mert szétválasztja a megjelenést az adatoktól, hanem a táblázat struktúrája is érthetőbb lesz például a gyengénlátók számára, akik képernyő-felolvasóval férnek hozzá a táblázatod tartalmához.</li>
</ul>

<p>Az alap elemeket a következőképpen ágyazhatod egymásba:</p>

<pre>
&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;content&lt;/td&gt;
        &lt;td&gt;content&lt;/td&gt;
        &lt;td&gt;content&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
</pre>

<p>Ha más sorrendben használod őket, akkor az a böngésző számára olyan, mint egy hajcsomó: megpróbálhatja kigubancolni a kódot, de az eredmény nem garantált, sőt az sem biztos, hogy egyáltalán megjelenik a táblázat.</p>

<h2 id="tobb_funkcio">Adjunk hozzá több funkciót</h2>

<p>Most, hogy már megvan az alap táblázatunk, adjunk hozzá néhány komplexebb funkciót is — először is adunk neki egy címet és az oszlopoknak egy fejlécet, amelyek javítják a táblázat szemantikáját, és egyúttal megkönnyíti a képernyő-felolvasókat használók életét is. A módosított táblázat így néz ki:</p>

<pre>
&lt;table&gt;
    <strong>&lt;caption&gt;A legutóbbi nagyobb vulkánkitörések Észak-Amerikában&lt;/caption&gt;</strong>
    &lt;tr&gt;
        <strong>&lt;th&gt;</strong>Vulkán neve<strong>&lt;/th&gt;</strong>
        <strong>&lt;th&gt;</strong>Hely<strong>&lt;/th&gt;</strong>
        <strong>&lt;th&gt;</strong>Utolsó nagyobb kitörés<strong>&lt;/th&gt;</strong>
        <strong>&lt;th&gt;</strong>Kitörés típusa<strong>&lt;/th&gt;</strong>
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Mt. Lassen&lt;/td&gt;
        &lt;td&gt;Kalifornia&lt;/td&gt;
        &lt;td&gt;1914-17&lt;/td&gt;
        &lt;td&gt;Explozív kitörés&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Mt. Hood&lt;/td&gt;
        &lt;td&gt;Oregon&lt;/td&gt;
        &lt;td&gt;1790&lt;/td&gt;
        &lt;td&gt;Piroklaszt-torlóár és lávafolyás&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Mt .St. Helens&lt;/td&gt;
        &lt;td&gt;Washington&lt;/td&gt;
        &lt;td&gt;1980&lt;/td&gt;
        &lt;td&gt;Explozív kitörés&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
</pre>

<p>Ez a kód a böngészőben így jelenik meg:</p>

<table>
    <caption>A legutóbbi nagyobb vulkánkitörések Észak-Amerikában</caption>
    <tr>
        <th>Vulkán neve</th>
        <th>Hely</th>
        <th>Utolsó nagyobb kitörés</th>
        <th>Kitörés típusa</th>
    </tr>
    <tr>
        <td>Mt. Lassen</td>
        <td>Kalifornia</td>
        <td>1914-17</td>
        <td>Explozív kitörés</td>
    </tr>
    <tr>
        <td>Mt. Hood</td>
        <td>Oregon</td>
        <td>1790</td>
        <td>Piroklaszt-torlóár és lávafolyás</td>
    </tr>
    <tr>
        <td>Mt .St. Helens</td>
        <td>Washington</td>
        <td>1980</td>
        <td>Explozív kitörés</td>
    </tr>
</table>

<p>A következő új elemeket használtuk ebben:</p>

<ul>
  <li>&lt;caption&gt;&lt;/caption&gt;: A caption elemmel adhatsz egy címet a táblázat adatainak. A legtöbb böngésző alapesetben a címet középre helyezi, és a szélessége akkora lesz, mint a táblázaté, kivéve, ha ezt átállítod CSS-ben.</li>
  <li>&lt;th&gt;&lt;/th&gt;: A th elem jelöli a táblázat oszlopainak a fejlécét. Ez azért hasznos, mert szemantikusan is jelöli a tartalom funkcióját, valamint segít abban, hogy a böngészők és a különböző eszközök pontosabban jelenítsék meg a tartalmat. A fenti példa a th elem legegyszerűbb használatát mutatja be.</li>
</ul>

<h2 id="alakitsuk_tovabb">Alakítsuk tovább a táblázatot</h2>

<p>A táblázat strukturálásában utolsó lépésként megadom a táblázat fejléc- és törzsszakaszait, hozzáadunk egy láblécet, valamint megadjuk a sorok és oszlopok hatókörét. Hozzáadunk még egy <code>summary</code> attribútumot is, amelyben összefoglaljuk a táblázat tartalmát. A végleges jelölés így a következőképpen néz ki:</p>

<pre>&lt;table <strong>summary=&quot;összefoglaló a legnagyobb vulkánkitörésekről Észak-Amerikában&quot;</strong>&gt;
    &lt;caption&gt;A legutóbbi nagyobb vulkánkitörések Észak-Amerikában&lt;/caption&gt;
    <strong>&lt;thead&gt;</strong>
        &lt;tr&gt;
            &lt;th <strong>scope=&quot;col&quot;</strong>&gt;Vulkán neve&lt;/th&gt;
            &lt;th <strong>scope=&quot;col&quot;</strong>&gt;Hely&lt;/th&gt;
            &lt;th <strong>scope=&quot;col&quot;</strong>&gt;Utolsó nagyobb kitörés&lt;/th&gt;
            &lt;th <strong>scope=&quot;col&quot;</strong>&gt;Kitörés típusa&lt;/th&gt;
        &lt;/tr&gt;
    <strong>&lt;/thead&gt;</strong>
    <strong>&lt;tfoot&gt;</strong>
        &lt;tr&gt;
            <strong>&lt;td colspan=&quot;4&quot;&gt;Készítette Ms. Jen 2008-ban&lt;/td&gt;</strong>
        &lt;/tr&gt;
    <strong>&lt;/tfoot&gt;</strong>
    &lt;tbody&gt;
        &lt;tr&gt;
            <strong>&lt;th scope=&quot;row&quot;&gt;</strong>Mt. Lassen<strong>&lt;/th&gt;</strong>
            &lt;td&gt;Kalifornia&lt;/td&gt;
            &lt;td&gt;1914-17&lt;/td&gt;
            &lt;td&gt;Explozív kitörés&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            <strong>&lt;th scope=&quot;row&quot;&gt;</strong>Mt. Hood<strong>&lt;/th&gt;</strong>
            &lt;td&gt;Oregon&lt;/td&gt;
            &lt;td&gt;1790&lt;/td&gt;
            &lt;td&gt;Piroklaszt-torlóár és lávafolyás&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            <strong>&lt;th scope=&quot;row&quot;&gt;</strong>Mt .St. Helens<strong>&lt;/th&gt;</strong>
            &lt;td&gt;Washington&lt;/td&gt;
            &lt;td&gt;1980&lt;/td&gt;
            &lt;td&gt;Explozív kitörés&lt;/td&gt;
        &lt;/tr&gt;
    <strong>&lt;/tbody&gt;</strong>
&lt;/table&gt;
</pre>

<p>Ez a kód a böngészőben így jelenik meg:</p>

<table summary="összefoglaló a legnagyobb vulkánkitörésekről Észak-Amerikában">
    <caption>A legutóbbi nagyobb vulkánkitörések Észak-Amerikában</caption>
    <thead>
        <tr>
            <th scope="col">Vulkán neve</th>
            <th scope="col">Hely</th>
            <th scope="col">Utolsó nagyobb kitörés</th>
            <th scope="col">Kitörés típusa</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td colspan="4">Készítette Ms. Jen 2008-ban</td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <th scope="row">Mt. Lassen</th>
            <td>Kalifornia</td>
            <td>1914-17</td>
            <td>Explozív kitörés</td>
        </tr>
        <tr>
            <th scope="row">Mt. Hood</th>
            <td>Oregon</td>
            <td>1790</td>
            <td>Piroklaszt-torlóár és lávafolyás</td>
        </tr>
        <tr>
            <th scope="row">Mt .St. Helens</th>
            <td>Washington</td>
            <td>1980</td>
            <td>Explozív kitörés</td>
        </tr>
    </tbody>
</table>

<p>Most a következő új elemeket és attribútumokat használtuk fel:</p>

<ul>
  <li>A <code>thead</code>, <code>tbody</code> és <code>tfoot</code> elemek: Ezek határozzák meg a táblázat fejlécét, törzsét, valamint a láblécét. Hacsak nem olyan komplex táblázatot készítesz, amelyiknek sok oszlopa és sora van, ezeknek az elemeknek a használata már túlzásnak számít. A komplex táblázatokban viszont a használatukkal strukturáltabbá teheted a kódot, és megkönnyíted a böngésző és más eszközök dolgát is a táblázat értelmezéséhez.</li>
  <li>A <code>colspan</code> és <code>rowspan</code> attribútumok: A <code>colspan</code> attribútum olyan cellát hoz létre, amelyik több oszlopot is áthidal. A fenti esetben a lábléc egyetlen cellájára azt szerettem volna, ha kitölti a teljes szélességét a táblázatnak, ezért azt adtam meg, hogy mind a négy oszlopot foglalja magába. Hasonlóan adhatod meg egy cellának a <code>rowspan</code> attribútumot, amellyel így megadhatod, hogy hány sort vonjon össze a cella, például <code>&lt;td rowspan=&quot;3&quot;&gt;</code>.</li>

  <li>A <code>summary</code> attribútum: Ezt az attribútumot arra használhatod, hogy megadj egy összefoglalót a táblázat tartalmáról, főként a képernyő-felolvasók számára (ugyanis a táblázat megjelenítésében ez nem látható). A régebbi W3C ajánlások, a WCAG 1.0 és a HTML 4.0 azt írja, hogy a <code>summary</code> attribútumot a fent bemutatott módon használhatod. A specifikációk új tervezetei viszont már egyáltalán nem említik a <code>summary</code> attribútumot. Mivel még nincs eldöntve a <code>summary</code> attribútum használata, ezért mi a Webes szabványok sorozat keretein belül úgy döntöttünk, hogy a használata továbbra is biztonságosnak számít. Végül is nem ronthat el semmit, és hozzáférhetőségi szempontból előnyös.</li>

  <li>A <code>scope</code> attribútum: Biztosan észrevetted a <code>th</code> tagekben a <code>scope</code> attribútumot, valamint azt, hogy ezúttal a vulkánok neveit is fejlécként definiáltam, a sorokon belül! Ez abszolút megengedett, de én nem inkább erőltetem. A <code>scope</code> attribútumot a <code>th</code> elemben használjuk arra, hogy a képernyő-felolvasók tudják, hogy a <code>th</code> tartalma egy oszlopra vagy egy sorra vonatkozik-e. A <code>scope</code> attribútumot csak a <code>th</code> elemekben használhatjuk.</li>
</ul>

<h2 id="segit_a_css">Segít a CSS: legyen szebb táblázatunk</h2>

<p>A fent bemutatott elemek és attribútumok már elegendőek arra, hogy egy jó adattáblát készíthess. Most, hogy a HTML struktúra már megvan, néhány egyszerű CSS tulajdonsággal sokat javíthatunk a táblázat megjelenésén:</p>

<pre>
body {
	background: #ffffff;
	margin: 0;
	padding: 20px;
	line-height: 1.4em;
	font-family: tahoma, arial, sans-serif;
	font-size: 62.5%;
}

table {
	width: 80%;
	margin: 0;
	background: #FFFFFF;
	border: 1px solid #333333;
	border-collapse: collapse;
}

td, th {
	border-bottom: 1px solid #333333;
	padding: 6px 16px;
	text-align: left;
}

th {
	background: #EEEEEE;
}

caption {
	background: #E0E0E0;
	margin: 0;
	border: 1px solid #333333;
	border-bottom: none;
	padding: 6px 16px;
	font-weight: bold;
}
</pre>

<p>Ha ezt alkalmazzuk az előző táblázatunkon, akkor a táblázat az 1. ábrához hasonlóan fog megjelenni. <a href="tablazat.html">A példát megnézheted élőben itt is.</a></p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/291-19-html-tblzatok/tablazat.png" alt="A végleges táblázat stílusokkal" />
<p class="comment">1. ábra: A táblázat most már sokkal jobban néz ki.</p>

<p>Ó, igen… jobban néz ki. A táblázatodat úgy jelenítheted meg, ahogyan csak akarod, de a fenti példa jó kiindulási alapnak szolgálhat. A táblázatok stílusozásáról CSS-sel egy későbbi leírásban többet is megtudhatsz, jelenleg elég lesz az is, ha megnézzük, hogy a CSS melyik része mire szolgál:</p>

<ul>
  <li><code>body</code>: A fenti példában hozzáadtam a CSS-hez néhány tulajdonságot. Beállítottam a margót (ebben az esetben nullára), a kitöltést, hogy legyen egy kis hely, a háttérszínt (fehérre), a betűméretet és a betűcsaládot, valamint a sormagasságot a levegősebb sorok kedvéért. <a href="tablazat.zip">A fenti példakódot innen töltheted le</a> — változtasd meg nyugodtan a CSS tulajdonságokat, és próbáld ki, mi hogyan működik.</li>

  <li><code>table</code>: Beállítottam a kereteket a CSS <code>border</code> tulajdonságával. Ahhoz, hogy ez jól működjön, be kellett állítanom a <code>border-collapse</code> tulajdonságot is a <code>collapse</code> értékre, hogy összevonjam a táblázat kereteit, és hogy később a <code>border-bottom</code> tulajdonság a teljes sorra vonatkozzon, és ne szakadjon meg minden cellánál. A szélességet 80%-ra állítottam (ez azt jelenti, hogy a táblázat a rendelkezésre álló szélesség 80%-át tölti ki; ha változtatjuk a böngésző szélességét, akkor a táblázat szélessége is változni fog).</li>

  <li><code>th</code> és <code>td</code>: A fenti példa CSS-ben először balra igazítottam a szöveget, de te állíthatod középre is, sőt ha a <code>th</code>, <code>td</code> és <code>tr</code> elemekhez osztályneveket rendelsz, akkor a CSS-ben külön állíthatod a sorok, oszlopok, fejlécek stílusát. Mind a <code>th</code>, mind a <code>td</code> elemekhez adtam egy kevés kitöltést, hogy szélesebbek, és ezáltal olvashatóbbak legyenek a sorok. A fenti <code>th</code> szelektornál beállítottam egy eltérő színt is, hogy elválasszam a címeket a táblázat többi részétől.</li>

  <li><code>caption</code>: Ha a <code>caption</code> szelektornak nem változtatod meg a tulajdonságait CSS-ben, akkor nem kap keretet, és a háttere ugyanolyan színű lesz, mint a lap többi részének a háttere, annak ellenére, hogy a HTML jelölés a <code>caption</code> elemhez már a <code>table</code> elemen belül van. Ezért a fenti példában adtam a <code>caption</code> elemnek egy keretet (a keret alsó része hiányzik, mivel azt a táblázat kerete már biztosítja), egy saját háttérszínt, valamint félkövér megjelenést, hogy elválasszam a táblázat fejlécétől.</li>
</ul>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>Ebben a leírásban végignéztünk mindent, amire egy hatékony HTML táblázat készítésekor szükséged lehet. De még megosztom veled néhány ide vonatkozó gondolatomat a témáról:</p>

<ul>
  <li>Nagyon fontos, hogy jól kódold le a táblázataidat, hogy olvashatóak legyenek a különböző webböngészőkben, mobilokon, különböző kisegítő- és más típusú eszközökön. A legjobb, ha a táblázat HTML részét a minimumon hagyod, és a stílusozásra CSS-t használsz. A kurzus későbbi részeiben még sokkal többet fogsz megtudni a CSS használatáról.</li>

  <li>A táblázatok akkor maradnak hozzáférhetőek a mobil eszközök és a képernyő-felolvasót használók számára is, ha kódot tisztán tartod, használod az attribútumokat, mint például a <code>scope</code> és a <code>summary</code>, valamint a <code>caption</code> elemet, hogy világosan definiáld és szemantikusan is leírd, mire szolgál adott szakasz. Ugyancsak fontos hozzáférhetőségi szempontból, hogy ne használj üres cellákat a táblázat kitöltésére (használj helyette CSS-t).</li>
</ul>

<h2 id="olvasnivalo">További olvasnivalók</h2>

<ul>
  <li><a href="http://www.hotdesign.com/seybold/hungarian/">Seybold: Miért butaság a táblázatos szerkezet?</a></li>
  <li><a href="http://www.w3.org/TR/html401/struct/tables.html">W3C HTML 4 Tables Recommendation</a> (angolul)</li>
  <li><a href="http://www.w3.org/TR/CSS21/tables.html">W3C CSS 2 tables recommendation</a> (angolul)</li>
  <li><a href="http://www.456bereastreet.com/archive/200410/bring_on_the_tables/">Roger Johansson — Bring on the Tables</a> (angolul)</li>
</ul>

<h2 id="tesztkerdesek">Tesztkérdések</h2>

<ul>
  <li>Készíts egy egyszerű táblázatot, amely csak 3 fő elemet tartalmaz: <code>table</code>, <code>tr</code> és <code>td</code>. Mentsd el, és nézd meg egy böngészőben.</li>
  <li>Adj hozzá a táblázatodhoz még néhány elemet: egy címet, egy fejlécet és egy láblécet. Hogyan változik a megjelenés a böngészőben?</li>
  <li>Mit tehetsz azért, hogy a táblázat jobban hozzáférhető legyen a képernyő-felolvasókban és a mobil eszközökön?</li>
  <li>Készíts a táblázathoz egy CSS fájlt. Próbáld meg beállítani a CSS-ben a keretek, a kitöltés, a cellák stílusát a táblázathoz úgy, hogy a HTML jelölést nem változtatod meg. Add meg a háttérszínt is, és állítsd be a betűk stílusát.</li>
</ul>

<p>Jó szórakozást!</p>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/18-html-hivatkozasok/">Előző leírás — HTML hivatkozások — építsük fel a webet!</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/20-html-urlapok/">Következő leírás — HTML űrlapok — az alapok</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<img class="right" src="http://forum-test.oslo.osa/kirby/content/articles/291-19-html-tblzatok/msjen.jpg" alt="Jen Hanen" />

<p>Az üzleti webdesigner és webfejlesztő, fényképész, moblogger és professzionális művészkülönc, Ms. Jen a design- és művészeti karrierjét egy magasított székben kezdte a ételek művészi átrendezésével valamint falra helyezésével 11 hónapos korában. 1996-ban tanította meg magát a HTML-re, mivel egy számítógépes sznob azt mondta neki, hogy egy művész nem tud megtanulni kódolni, azóta is rajong a webdesign mindenféle formájáért.</p>

<p>Ms. Jen a Black Phoebe Designs alapítója és tulajdonosa, amely egy web- és mobil designer cég. Ms. Jennek mesteri fokozata van számítástechnikából és multimédiás rendszerekből a dublini Trinity Fősikolától (Írország), és webdesignt tanult egy LA környéki egyetemen 2001–2005 között. Részt vett két Nokia mobil blogoló projektben: Wasabi Lifeblog (2004–2005) és Nokia Urbanista Diaries (2008). Ms. Jen mindig megtalálható online a <a href="http://www.blackphoebe.com/">blackphoebe.com</a> vagy <a href="http://blackphoebe.mobi/">blackphoebe.mobi</a> oldalakon.</p>
