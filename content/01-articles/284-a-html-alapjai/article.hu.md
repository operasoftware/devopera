Title: A HTML alapjai
----
Date: 2009-08-17 08:47:29
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/11-tipografia-a-weben/" title="hivatkozás a sorozat előző leírására">Előző leírás — Tipográfia a weben</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/13-a-html-head-eleme">Következő leírás — A HTML &lt;head&gt; eleme</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Ebben a leírásban megismerheted a HTML alapjait — mi az, mire jó, hogyan alakult ki, valamint hogyan épül fel egy HTML dokumentum szerkezete. A következő leírásokban majd részletesebben is megismerheted a HTML különböző részeit. Ebben a leírásban a következő témákról lesz szó:</p>

<ul>
  <li><a href="#miahtml">Mi a HTML?</a></li>
  <li><a href="#hogynezki">Hogyan néz ki a HTML?</a></li>
  <li><a href="#tortenet">A HTML története</a></li>
  <li><a href="#szerkezet">A HTML dokumentum szerkezete</a></li>
  <li><a href="#szintaxis">A HTML elemek szintaxisa</a></li>
  <li><a href="#blokkinline">Blokk szintű és inline elemek</a></li>
  <li><a href="#karakterref">Karakter referenciák</a></li>
  <li><a href="#osszefoglalo">Összefoglaló</a></li>
</ul>

<h2 id="miahtml">Mi a HTML?</h2>

<p>A legtöbb olyan asztali alkalmazás, amelyik fájlokat ír és olvas, egy bizonyos fájlkiterjesztést használ. A Microsoft Word például a „.doc” fájlokat érti meg, míg a Microsoft Excel az „.xls” fájlokat ismeri. Ezek a fájlok utasításokat tartalmaznak arra, hogy hogyan lehet felépíteni a dokumentumot a legközelebbi megnyitáskor, mit tartalmaz a dokumentum, valamint néhány „metaadatot” a dokumentumról, mint például a szerző vagy a legutolsó módosítás dátuma, sőt akár az utolsó módosítások is benne lehetnek, így vissza lehet állni a dokumentum egy korábbi verziójára.</p>

<p>A <dfn>HTML</dfn> („HyperText Markup Language”, azaz hiperszöveg-leíró nyelv) a webes dokumentumok leírására szolgáló nyelv. Olyan speciális jelöléseket (más szóval elemeket) tartalmaz, amelyek körülveszik dokumentum szövegeit, és megadják, hogy a kliens eszközök hogyan értelmezzék a dokumentum megjelölt részeit.</p>

<p>A „kliens eszközök” kifejezést használtuk itt a „webböngészők” helyett. Egy kliens eszköz lehet bármilyen szoftver, amely a felhasználó számára weboldalakat ér el. Fontos megemlítenünk még ezen a ponton, hogy az asztali böngészők (Internet Explorer, Opera, Firefox, Safari, stb.) és az alternatív böngészők (mint például a Wii Internet channel vagy a mobil böngészők, mint az Opera Mini vagy az iPhone WebKitje) egyaránt kliens eszközök, viszont nem minden kliens eszköz böngésző szoftver. Az olyan automata programok, mint amilyenekkel a Google és a Yahoo! indexeli a webet a keresőjük számára, ugyancsak kliens eszközök, viszont nem állnak közvetlen emberi irányítás alatt.</p>

<h2 id="hogynezki">Hogyan néz ki a HTML?</h2>

<p>A HTML a szövegek és az jelölések egyszerű szöveges megjelenítése. Például a fenti „Hogyan néz ki a HTML?” címsorhoz tartozó HTML kódrészlet a következő:</p>

<pre>&lt;h2 id=&quot;hogynezki&quot;&gt;Hogyan néz ki a HTML?&lt;/h2&gt;</pre>

<p>A „<code>&lt;h2&gt;</code>” rész egy jelölő (amire „tag” — ejtsd <em>teg</em> — névvel hivatkozunk), és azt jelenti, hogy „a következő rész második szintű címsornak számít”. A „<code>&lt;/h2&gt;</code>” ugyancsak egy tag, amely a második szintű címsor lezárását jelöli (éppen ezért „lezáró tagnek” is nevezik). A nyitó tag, a záró tag és minden, ami köztük van, együtt alkotja az „elemet”. Sokan a tag és elem kifejezéseket felcserélhetőként használják, pedig ez nem teljesen helyes. Az <code>id=&quot;hogynezki&quot;</code> egy attribútum; ezekről a későbbiekben lesz szó.</p>

<p>A legtöbb böngészőben találhatsz egy „Forrás” vagy „Forráskód” pontot, legtöbbször a „Nézet” menü alatt. Ha megtalálod, válaszd ki most, és tölts egy kis időt ennek a lapnak a HTML forráskódját nézegetve.</p>

<h2 id="tortenet">A HTML története</h2>

<p><a href="http://dev.opera.com/articles/view/2-az-internet-es-a-web-tortenete/">Az internet és a web története</a> leírásban már olvashattál arról, hogy hogyan alakult ki a modern web. Amikor Tim Berners-Lee megalkotta a World Wide Webet, akkor elkészítette az első webszervert, az első webböngészőt és <a href="http://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/MarkUp.html">a HTML első verzióját </a>is.</p>

<p>Bár a HTML rengeteget változott az első napok óta, sok része az első HTML dokumentációnak még mindig érvényben van a modern verzióban is, és az akkor definiált „HTML tagek” több mint fele most is létezik.</p>

<p>Ahogy egyre többen kezdtek weblapokat és alternatív böngészőket írni, úgy bővült folyamatosan új funkciókkal a HTML is. Sokat általánosan adtak hozzá (mint például az <code>img</code> elemet egy kép beillesztéséhez, amelyet először az NCSA Mosaic valósított meg). Más elemek védettek voltak, és csak egy-két böngésző valósította meg őket. Egyre nőtt az igény a szabványosításra, hogy a böngésző szoftverek készítőinek legyen egy dokumentumuk (más néven specifikáció), amelynek alapján egyértelműen eldönthetik, hogy a HTML hogyan néz ki, és hogy egy HTML elemet helyesen valósítottak-e meg, vagy nem.</p>

<p>Az IETF (Internet Engineering Task Force — a szabványos alap elkészítésére az internet egészéhez) a HTML ajánlásának első vázlatát 1993-ban adta ki. Ez 1994-ben elavult anélkül, hogy szabvánnyá vált volna, de arra késztette az IETF-et, hogy indítson egy csoportot a HTML szabványosítására.</p>

<p>1995-ben elkészült a „HTML 2.0”, amely sok ötletet merített az eredeti HTML ajánlásból. Dave Raggett készített egy alternatív javaslatot is HTML+ névvel, amely sok új elem fejlesztésének alapjául szolgált a böngészőkben (például a képek behelyezésének a módszere a dokumentumokba, amelyben az NCSA Mosaic volt az úttörő).</p>

<p>A HTML 3.0 ajánlása még ugyanebben az évben érkezett, de hamar befejezték vele a munkát, mivel a böngészőgyártók teljesen más irányokban kezdtek el fejleszteni. A HTML 3.2 sok funkciót elhagyott a HTML 3.0-ból, és helyettük beépítette a népszerűbb böngészők (mint a Mosaic és a Netscape Navigator) különböző fejlesztéseit.</p>

<p>1997-ben a W3C kiadta ajánlásként a HTML 4.0-át, amelyben még több böngésző-sepcifikus kiterjesztést próbáltak meg ésszerűsíteni és egyszerűbbé tenni. Ezt azzal érték el, hogy több elemet elavultként jelöltek meg — ez azt jelenti, hogy ezek az elemek még léteznek ebben a verzióban (elavultként megjelölve), de a következőben már teljesen törölve lesznek. Ezzel próbálták meg a fejlesztőket rávenni arra, hogy a HTML-t szemantikusabban használják (erről részletesebben <a href="http://dev.opera.com/articles/view/4-a-webes-szabvanyok-modellje/">A webes szabványok modellje</a> leírásban olvashatsz).</p>

<p>A HTML 4.01 1999-ben jelent meg, majd néhány elírást javítottak benne 2001-ben. Ez az utolsó HTML verzió, bár jelenleg már elérhető a HTML 5 vázlata is.</p>

<p>2000-ben a W3C kiadta az XHTML 1.0 specifikációját is, amely a HTML átdolgozása volt érvényes XML dokumentumra.</p>

<h2 id="szerkezet">A HTML dokumentum szerkezete</h2>

<p>A lehető legkisebb érvényes HTML dokumentum valahogy így néz ki:</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
  &lt;html&gt;
    &lt;head&gt;
      &lt;title&gt;Példa lap&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      &lt;h1&gt;Helló világ&lt;/h1&gt;
    &lt;/body&gt;
  &lt;/html&gt;
</pre>

<p>A kód a dokumentum típusát megadó (<code>doctype</code>) elemmel kezdődik, erről részletesebben a <a href="http://dev.opera.com/articles/view/14-megfelelo-doctype-valasztasa/">Megfelelő doctype választása</a> leírásban olvashatsz. Ez az elem adja meg, hogy melyik HTML változatot fogjuk használni, így a kliens eszközök tudni fogják, hogyan értelmezzék a dokumentumot, valamint hogy betartja-e a dokumentum az adott típus szabályait, vagy nem.</p>

<p>Ezután egy nyitó <code>html</code> elemet láthatsz. Ez közrefogja az egész dokumentumot. A záró <em>html</em> tag az utolsó a HTML dokumentumban.</p>

<p>A <code>html</code> elemen belül találjuk a <code>head</code> elemet. Ez a elem információkat tartalmaz a dokumentumról (a metaadatokat). Erről részletesebben <a href="http://dev.opera.com/articles/view/13-a-html-head-eleme">a következő leírásban</a> lesz szó. A <code>head</code> elemen belül találjuk a <code>title</code> elemet, amely a lap címét („Példa lap”) definiálja az ablak fejlécében.</p>

<p>A <code>head</code> elem után következik a <code>body</code> elem, amely a lap valódi tartalmát fogja közre — amely ebben az esetben csak egy első szintű címsor elemből (<code>h1</code>) áll, amely a „Helló világ” szöveget tartalmazza. Ez a teljes dokumentumunk.</p>

<p>Ahogy láthatod, az elemek gyakran tartalmaznak más elemeket. A dokumentum törzse mindig tartalmaz további beágyazott elemeket. Az oldal felosztása adja meg a dokumentum struktúráját, és tovább felosztásokat tartalmaz. Ebben lesznek a címsorok, a bekezdések, a listák, stb. A bekezdések ugyancsak több különböző elemet tartalmazhatnak: hivatkozásokat más dokumentumokra, idézőjeleket, kiemeléseket, stb. Ezekről az elemekről többet is meg fogsz tudni a későbbiekben.</p>

<h2 id="szintaxis">A HTML elemek szintaxisa</h2>

<p>Ahogy már láthattad, egy egyszerű elem a HTML-ben két jelölő tagből áll egy szövegblokk körül. Vannak olyan elemek is, amelyek nem fognak közre egy szöveget, és a legtöbb esetben az elemek további elemeket tartalmazhatnak (mint ahogy a fenti példában a <code>html</code> tartalmazza a <code>head</code> és a <code>body</code> elemeket).</p>

<p>Az elemek ezen kívül tartalmazhatnak attribútumokat is, amelyek módosíthatják az elem működését, vagy újabb értelmezést adhatnak az elemnek.</p>

<pre>&lt;div id=&quot;masthead&quot;&gt;
  &lt;h1&gt;
    A &lt;abbr title=&quot;Hypertext Markup Language&quot;&gt;HTML&lt;/abbr&gt; alapjai
  &lt;/h1&gt;
&lt;/div&gt;
</pre>

<p>Ebben a példa <code>div</code> elemben (amely a lap részeinek logikus blokkokba való felosztására szolgál) használtunk egy kiegészítő <code>id</code> attribútumot, amely a <code>masthead</code> értéket kapta. A <code>div</code> tartalmaz egy <code>h1</code> elemet (első, vagyis legmagasabb szintű címsor), amely tartalmaz egy szöveget. A szöveg egy részét az <code>abbr</code> elem fogja közre (ezzel adhatjuk meg a rövidítések leírását), amely tartalmaz egy <code>title</code> attribútumot, ennek értéke a „<code>Hypertext Markup Language</code>” szöveg.</p>

<p>Sok attribútum a HTML-ben minden elemre használható, míg egyes attribútumokat csak bizonyos elemek mellett használhatunk. Mindig <code>kulcsszó=&quot;érték&quot;</code> formában használjuk. Az értéket sima vagy dupla idézőjelbe kell tenni (bár egyes esetekben az idézőjeleket elhagyhatjuk, viszont ez nem jó módszer a előreláthatóság, az érhetőség és a világos, tiszta kód szempontjából — a legjobb, ha <em>mindig</em> kiteszed az idézőjeleket).</p>

<p><a href="http://www.w3.org/TR/html401/index/attributes.html">Az attribútumok és a lehetséges értékeik a HTML specifikációkban vannak megadva</a> — nem hozhatsz létre saját attribútumokat anélkül, hogy érvénytelenné nem tennéd a HTML dokumentumodat, mivel ez összezavarná a kliens eszközöket és problémákat okozhat a weblap helyes értelmezésében. Az egyetlen kivétel az <code>id</code> és a <code>class</code> attribútumok — ezeknek a lehetséges értékei teljes mértékben a te kezedben vannak, mivel ezekkel tudod a saját értelmezésedet és szemantikádat hozzáadni a dokumentumhoz.</p>

<p>Egy elemre egy másik elemen belül az adott elem „gyerekeként” hivatkozunk. Így a fenti példában az <code>abbr</code> a <code>h1</code> gyereke, ami viszont már a <code>div</code> gyereke. Fordítva, a <code>div</code> így a <code>h1</code> elem „szülője” lesz. Ez a szülő/gyerek fogalom nagyon fontos, mivel ez biztosítja a CSS alapjait, és ezt használjuk majd a JavaScriptekben is.</p>

<h2 id="blokkinline">Blokk szintű és inline elemek</h2>

<p>A HTML elemeket általánosan két nagy kategóriára bonthatjuk, amelyek megfelelnek az elem által megjelenített tartalom és struktúra típusainak — ezek a blokk szintű és az inline elemek.</p>

<p>A blokk szintű (<em>block level</em>) elem egy felsőbb szintű elemet jelent, amely általában a dokumentum struktúráját jelzi. Úgy gondolhatsz ezekre az elemekre, mint amelyek egy új sort kezdenek, vagy elválasztanak valamit a korábbi tartalomtól. A leggyakoribb blokk szintű elemek a bekezdések (paragrafusok), listaelemek és táblázatok.</p>

<p>Az inline (azaz soron belüli) elemek ezzel szemben azok az elemek, amelyeket a blokk szintű elemek tartalmaznak, és csak a dokumentum kis részeit fogják közre, nem teljes bekezdéseket vagy csoportokat. Egy inline elem nem fog új sort generálni a dokumentumban; ezek azok az elemek, amelyek egy bekezdés szövegén belül találhatóak. A leggyakoribb inline elemek a hiperhivatkozások, a kiemelt szavak vagy mondatok és a rövid idézetek.</p>

<h2 id="karakterref">Karakter referenciák</h2>

<p>Még van egy fontos pont a HTML dokumentumokkal kapcsolatban, mégpedig a speciális karakterek használata. A HTML-ben a <code>&lt;</code>, <code>&gt;</code> és <code>&amp;</code> jelek speciálisak. Ezek adják meg HTML tagek elejét és végét, így a dokumentumon belül nem a kisebb, nagyobb és az <em>és</em> jeleket jelentik.</p>

<p>Az egyik legegyszerűbb hiba, amit egy webfejlesztő véthet, hogy az <em>és</em> jelet felhasználja a dokumentumban, így valami váratlan történik. Ha például azt írja, hogy „<code>az angolszász jelölésben a tömeg stones&amp;pounds</code>”, akkor egyes böngészőkben ez úgy végződhet, hogy „<code>…stones£s</code>”.</p>

<p>Ez azért van, mert a „<code>&amp;pounds;</code>” szövegrész valójában egy HTML karakter referencia. A karakter referencia egy módszer az olyan karakterek beillesztésére a dokumentumokba, amelyeket egyébként csak nehezen vagy sehogyan sem írhatunk be a billentyűzetet használva, vagy a dokumentum kódkészletében nem szerepel.</p>

<p>Az <em>és</em> jel (<code>&amp;</code>) vezet be egy ilyen referenciát, és a pontosvessző (<code>;</code>) zárja le. Ennek ellenére sok kliens eszköz elég megbocsátó a HTML hibák iránt, és nem veszi figyelembe, hogy nincs lezáró pontosvessző, így a „<code>&amp;pound</code>” kifejezést is karakter referenciaként értelmezi. A referenciák lehetnek számok (numerikus referenciák), vagy rövid szavak (egyedi referenciák).</p>

<p>Ha egy <em>és</em> jelet akarunk beírni a dokumentumba, akkor az „<code>&amp;amp;</code>” karakter referenciát kell használnunk, vagy a „<code>&amp;#38;</code>” numerikus referenciát. <a href="http://www.evolt.org/article/A_Simple_Character_Entity_Chart/17/21234/">A karakter referenciák listáját az evolt.org oldalán</a> találhatod meg.</p>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>Ebben a leírásban megismerhetted a HTML alapjait, hogy honnan fejlődött ki, és betekintést nyerhettél egy HTML dokumentum felépítésébe. A következő részben a HTML dokumentum <code>&lt;head&gt;</code> részével fogunk bővebben foglalkozni, majd rátérünk a <code>&lt;body&gt;</code> által közrefogott tartalomra.</p>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/11-tipografia-a-weben/" title="hivatkozás a sorozat előző leírására">Előző leírás — Tipográfia a weben</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/13-a-html-head-eleme">Következő leírás — A HTML &lt;head&gt; eleme</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/284-12-a-html-alapjai/norm.jpg" alt="Mark Norman Francis" />
<p class="comment">Fotó: <a href="http://flickr.com/photos/andybudd/98405468/">Andy Budd</a>.</p>
</div>

<p>Mark Norman Francis már azelőtt az internettel foglalkozott, hogy a web megszületett volna. Jelenleg a Yahoo!-nál a világ legnagyobb weboldalán dolgozik mint kezelőfelület-tervező, új módszereket és kódolási szabályokat dolgoz ki, valamint nemzetközi támogatást nyújt a minőségi webfejlesztéshez.
</p>

<p>A Yahoo! előtt a Formula One Management, a Purple Interactive és a City University vállalatoknál dolgozott különböző minőségben, többek között mint webfejlesztő, CGI programozó és rendszertervező. A <a href="http://marknormanfrancis.com/">http://marknormanfrancis.com/</a> oldalon blogol.</p>
