Title: Több lap létrehozása navigációs menüvel
----
Date: 2010-03-30 10:46:21
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
<li class="prev"><a href="http://dev.opera.com/articles/view/22-altalanos-tarolok/" rev="prev" title="link to the previous article in the series">Előző leírás—Általános tárolók</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/24-validating-your-html/" rel="next" title="link to the next article in the series">Következő leírás—A HTML validálása</a></li>
<li><a href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom" rel="index">Tartalomjegyzék</a></li>
</ul>
 
 
  <h2>Bevezető</h2>

  <p>Ebben a leírásban a webszájt navigációról és a menükről fogok beszélni. Különböző típusú menükről tanulsz majd és arról, hogyan készítheted el őket HTML-ben. A menük használhatóságának és elérhetőségének témáját is érinteni fogom. Egyelőre nem fogok belemenni a menük stílusozásába, de ez a leírás lefekteti az alapokat az ezzel foglalkozó CSS leckéhez, amelyre majd a kurzus későbbi részében kerül sor.
Innen letöltheted <a href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/menu_examples.zip"> a példa kódokat </a> amelyekkel a leírásban foglalkozunk majd—ezekre fogok hivatkozni a lecke során.
<p>A leírás felépítése a következő:</p>
</p>
  
  <ul>
  <li><a href="#menutools">Eszközeid a HTML menühöz—hivatkozások, kapcsok és listák</a></li> 
  <li><a href="#flexibility">A rugalmasság szükségessége</a></li>
  <li><a href="#typesofmenu">Különböző típusú menük</a>
  
  <ul>
    <li><a href="#inpagenav">Oldalon belüli navigáció (tartalomjegyzék)</a></li>
    <li><a href="#sitenavigation">Szájt navigáció</a>
    <ul>
    <li><a href="#youarehere">Biztosítsuk felhasználóinknak a “Te most itt vagy” érzést</a></li>
    <li><a href="#howmanyoptions">Mennyi lehetőséget kell adnod a látogatóknak egyszerre?</a></li>
   
    </ul>
    </li>
    <li><a href="#contextualmenu">Szövegtől függő menük</a></li>
    <li><a href="#sitemaps">Oldaltérképek</a></li>
    <li><a href="#pagination">Oldalszámozás</a></li>
  </ul>
  
  </li>
  
  <li><a href="#imagemapsforms">Mikor a listák nem elegek—képtérképek és űrlapok</a>
  
  <ul>
   <li><a href="#hotspots">Hotspot-ok beállítása képtérképekkel</a></li>
   <li><a href="#forms">Helyspórolás a képernyőn és linkek összezsúfolásának megelőzése űrlapokkal</a></li>
  </ul>
  
  </li>
  <li><a href="#skiplinks">Hol helyezzük el a menüt, és lehetőség felkínálása annak átugrásához
  </a></li>
  <li><a href="#summary">Összefoglaló</a></li>
  <li><a href="#exercises">Tesztkérdések</a></li>
  </ul>

  <h2 id="menutools">Eszközeid a HTML menühöz—hivatkozások, kapcsok és listák</h2>

  <p>Sokfajta menüt és navigációs megoldást különböztetünk meg a HTML-ben, mindegyik szorosan kapcsolódik a <code>link</code> (hivatkozás) és az <code>a</code> (anchor—vagyis kapocs) elemhez. Dióhéjban:</p>
  
   <ul>
    <li>A <code>link</code> elemek kapcsolatokat írnak le számos dokumentum között. Például elmondhatod a kliens eszköznek, hogy ez a dokumentum egy nagyobb kurzus része ami több dokumentumot foglal magába és hogy mely más dokumentumok alkotják a tartalomjegyzékét.</li>
    <li>A kapcsok (vagyis az <code>a</code> elemek) segítségével hivatkozhatsz egy másik dokumentumra vagy az adott dokumentum egy bizonyos részére. Ezeket nem követi automatikusan a kliens eszköz; ehelyett a látogatóid aktiválják valamilyen rendelkezésükre álló eszközzel (egérrel, billentyűzettel, hangfelismerővel, speciális kezelőszervekkel…)</li>
  </ul>
  
  <p>Ha nem olvastad el a <a href="http://dev.opera.com/articles/view/18-html-hivatkozasok/">hivatkozásokról szóló leírást</a> és a <a href="http://dev.opera.com/articles/view/16-html-listak/">listákról szóló cikket</a> korábban a kurzus folyamán, szeretném, ha visszamennél és elolvasnád, mivel ezekre az információkra fogok építkezni az ismétlések elkerülése végett.</p>

  <p>A kapcsolók/hivatkozások nem válnak csak úgy maguktól menükké—neked kell felépítened és stílusoznod őket, hogy a böngésző és a felhasználóid is tudják, hogy ezek navigációs menüként funkcionálnak és nem csak találomra összeszedett hivatkozások. Ha a lapok sorrendje nem fontos, használhatsz rendezetlen listát, ahogyan ebben a 
 <a class="codeExample" href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/unordered.html"> rendezetlen listás menü példában</a>.</p>

<p>Figyeld meg, hogy adtam egy <code>id</code>-t az <code>ul</code>
elemnek. Ennek az az oka, hogy kell egy kapocs, amivel a későbbiekben stílust adhatok hozzá CSS-sel és speciális viselkedést JavaScripttel.
Az <code>id</code> egy nagyon költséghatékony módja, hogy lehetővé tegyük más technológiáknak egy adott elem kiválasztását a HTML-ben.</p>

<p>Ha fontos a sorrend ami alapján a látogatók a dokumentumokon végigmennek, akkor rendezett listát kell használnod. Ha például van egy sok dokumentumból álló online kurzusod, ahol a leckék egymásra épülnek, akkor használhatsz egy rendezett listát mint ebben a <a class="codeExample" href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/ordered.html">rendezett lista példában</a>.</p>

<p>Listák használata menük készítéséhez sok szempontból nagyszerű megoldás:</p>

<ul>
  <li>Egy listaelem (például egy <code>ul</code>) tartalmazza az összes HTML kódot, ami azt jelenti, hogy CSS-sel külön stílusozhatod őket és JavaScripttel is könnyű a magasabbtól az alsóbb szintig egymás után elérni őket. </li>
  <li>A listák egymásba ágyazhatók, ezért könnyen készíthetsz több szintből álló navigációs hierarchiát.</li>
  <li>Bármilyen hozzárendelt stílus nélkül is a böngésző renderelése értelmet ad a HTML kódnak, ezért könnyű a látogatónak felismerni, hogy ezek a linkek összetartoznak és egy logikai egységet alkotnak.</li>
</ul>

<p>Listák egymásba ágyazásánál a beágyazott listát az <code>li</code> elembe kell tenned és nem utána. Itt láthatsz <a class="codeExample" href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/nesting.html">egy helyes és egy helytelen megoldást erre</a>.</p>

<p>Figyeld meg, hogy a böngésző mindkét példát ugyanúgy jeleníti meg. A böngésző soha nem lehet megfelelő a kódod minőségének ellenőrzésére. Egy helytelen HTML konstrukciót, mint a rossz megoldást a feni példában, nehéz lesz stílusozni, funkciót adni hozzá JavaScripttel, vagy más formátumba konvertálni. A beágyazott UL-ek struktúrája mindig ilyen <code>&lt;ul&gt;&lt;li&gt;&lt;ul&gt;&lt;li&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;</code> és nem ilyen <code>&lt;ul&gt;&lt;li&gt;&lt;/li&gt;&lt;ul&gt;&lt;li&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/ul&gt;</code> kell hogy legyen.</p> 

<h2 id="flexibility">A rugalmasság szükségessége</h2>

<p>Egy webhely menüje valószínűleg nem sokáig marad változatlan—a szájtok törvényszerűen növekednek, ahogy funkciókat adnak hozzájuk és a felhasználók köre bővül, ezért a menük készítésénél helyet kell hagynod további menüpontoknak amiket később adsz hozzá vagy távolítasz el a szájt fejlődése során, illetve olyan menüknek, amelyek más nyelvekre lesznek lefordítva (tehát a hivatkozások hossza változik).
Emellett előfordulhat, hogy egy olyan szájton dolgozol, amelyhez a menük HTML kódját dinamikusan generálják szerver oldali programnyelvekkel a statikus HTML helyett. Ez azonban nem jelenti azt, hogy a HTML ismerete elavulttá válik; valójában még fontosabb lesz, mivel ez a tudás még mindig szükséges lesz HTML template-ek készítéséhez, amikkel a szerver oldali scriptek dolgoznak. </p>

<h2 id="typesofmenu">Különböző típusú menük</h2>

<p>Sokfajta menü létezik, amelyek HTML-ben való elkészítésére felkérnek, mivel többféle webhelyen dolgozol. 
A legtöbb ezek közül létrehozható listákkal, habár néha az interfész megszorításai arra kényszerítenek, hogy más utat válassz (erről bővebben később). A lista alapú menük, amelyeket valószínűleg készíteni fogsz, a következők:</p>

<ul>
  <li>Oldalon belüli navigáció: például egy tartalomjegyzék egyetlen oldalhoz, hivatkozásokkal, amelyek a lap különböző részeire mutatnak.</li>
  <li>Szájt navigáció: egy navigációs sáv az egész webszájtodhoz (vagy annak egyik alsóbb szintjéhez), hivatkozásokkal, amelyek ugyanannak a szájtnak a különböző oldalaira mutatnak.</li>
  <li>Tartalomfüggő navigáció: olyan hivatkozások listája amelyek szorosan az adott témához tartozó oldalakra mutatnak, vagy ugyanazon a szájton, vagy másikon.</li>
  <li>Oldaltérképek: hivatkozások nagyobb listái, amelyek a webhely különböző oldalaira mutatnak összefüggő alsóbb szintű listákba csoportosítva, hogy az átláthatóságot könnyítsék.</li>
  <li>Oldalszámozás: olyan oldalakra mutató hivatkozások, amelyek az aktuális oldallal együtt egy nagyobb egységet alkotnak, vagy egy egész részei, például egy leírás 1., 2. és 3. része.</li>
</ul>

<h3 id="inpagenav">Oldalon belüli navigáció (tartalomjegyzék)</h3>

<p>Egy bizonyos fokig már érintettem a témát a hivatkozásokról szóló leckében, de most egy részletesebb leírást adok arról, mit is jelent az oldalon belüli navigáció és mire van szükséged ahhoz, hogy működésre bírd.</p>

<p>Ehhez az <a class="codeExample" href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/inpagenavigation.html">oldalon belüli navigációs témához tartozó példában</a> egy hivatkozásokból álló listát használtam, amelyek az oldalon lejjebb található kapcsokra mutatnak. A kapcsolat létrehozásához a cél elemekhez egy <code>id</code> attribútumot kell adnod, a rájuk mutató elemekhez pedig egy <code>href</code> attribútumot, aminek az értéke egy kettős keresztet követően ugyanaz a név, mint annak az elemnek az <code>id</code> attribútumának az értéke, amelyre mutat. Az oldal minden részének van egy “vissza a menüre” hivatkozása, ami ugyanígy működik, csak a menüre mutat vissza.</p>

<p>Gyakorlatilag összesen erre van szükséged, hogy működjön ez a fajta navigáció, habár, az Internet Explorerben van egy bosszantó hiba, ami miatt még tenned kell valamit.</p>

<p>Próbáld ki ezt a hibát magad is:</p>
<ol>
  <li>Nyisd meg a dokumentumot az Internet Explorer 6 vagy 7 verziójával.</li>
  <li>Ne használj egeret; ehelyett használd a billentyűzetet a dokumentumon belüli navigáláshoz.
  A tabulátor leütésével ugrálhatsz egyik hivatkozásról a másikra és az Enter billentyűvel aktiválhatod azt
  —ebben az esetben, hogy arra a részre ugorj, ahová mutat.</li>
  <li>Látszólag minden rendben—a böngésző letekerődik odáig, ahová menni akartál.</li>
  <li>Ha ismét lenyomod a tabulátort az elvárható működés a böngésző részéről az lenne, hogy odavigyen az első linkre (fókuszba tegye azt) a részen belül, amit választottál. Az Internet Explorer azonban visszavisz téged a menü elejére a lap tetején!</li>
</ol>

<p>Ez a reakció rettenetesen zavaró és az Internet Explorer egy speciális <code>hasLayout</code> nevű tulajdonságához köthető. Többféleképpen oldhatod meg ezt a problémát, amelyeket <a href="http://www.satzansatz.de/cssd/onhavinglayout.html">Ingo Chao &quot;On having layout&quot; című nagyszerű leírásában magyaráz el</a>. A legegyszerűbb módja az, ha <a class="codeExample" href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/inpagenavigationmsiefix.html"> beállítasz egy szélességet a <code>div</code> elemhez CSS-sel, mint ebben a példában</a>. Ez az, amire az Explorernek szüksége van—olyan kapocsra, ami <code>hasLayout</code> tulajdonsággal rendelkező elemen belül helyezkedik el.</p>

<p>Bosszantó, hogy ezt meg kell csinálnod, de a segítségedre lehet akkor is, ha a részeket eltérően akarod stílusozni. Továbbá a HTML címsorok egyik problémáját is megoldást jelent:
a fejezetek címsorai nem tartalmazzák azt a részt, amihez hozzárendeljük őket; az csak feltételezés, hogy minden, ami a következő címig tart, ugyanannak a fejezetnek a része. Ez lehetetlenné teszi különböző fejezetek stílusozását egy &lt;div&gt; hozzáadása nélkül. Más leíró nyelvek erre biztosítanak egy &lt;section&gt; elemet benne egy &lt;title&gt; elemmel, hasonlóan a &lt;fieldset&gt; és &lt;legend&gt; tag-ekhez, amik lehetővé teszik egy űrlap különböző részeinek megjelölését.</p>

<p class="note">Figyeld meg, hogy a billentyűzettel történő navigálás linkek között az Operában egy picit más—próbáld megnyitni a fenti példát Operában, majd tartsd lenyomva a <kbd>Shift</kbd>-et és használd a nyilakat a navigáláshoz (ez az űrlap elemeken is működik). Ezt nevezik térbeli navigálásnak (spatial navigation).
</p>

<h3 id="sitenavigation">Szájt navigáció</h3>

<p>A szájton belüli navigáció menütípusa talán a leggyakoribb amit készítened kell. Ez az egész webhely menüje (vagy annak egy alsóbb szintjéhez tartozik) ami megmutatja azokat az opciókat, amelyek közül a látogatók választhatnak, valamint a webhely hierarchiáját. A listák tökéletesen megfelelnek erre a célra, amint azt ebben a <a class="codeExample" href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/home.html">szájt navigációs példában</a> is láthatod.</p>

<p>Ez nem tartogat sok meglepetést, legalábbis nem a sima HTML szempontjából. Később a kurzus folyamán majd beszélni fogunk ezeknek a menüknek a stílusozásáról CSS segítségével és funkciók hozzáadásáról JavaScripttel. Egy fontos dolog, amit figyelembe kell venni, hogyan emeljük ki a menüben az éppen aktuális dokumentumot, hogy megadjuk a felhasználónak azt az érzést, hogy egy meghatározott helyen tartózkodik éppen és azt, hogy ezek mozgó területek (habár a valóságban nem azok, hacsak persze nem egy mobil eszközt használsz a webböngészésre!). 
A továbbiakban ezt fogjuk megnézni.</p>

<h4 id="youarehere">Biztosítsuk látogatóinknak a “Te most itt vagy” érzést</h4>

<p>A webfejlesztés egyik aranyszabálya, hogy az éppen aktuális dokumentum soha nem linkelhet önmagára, ehelyett észrevehetően különböznie kell a menü többi hivatkozásától. Ez fontos, mert a látogatóknak támpontot ad és megmondja nekik hol is vannak a szájton barangolásuk közben. Vannak határesetek, mint a webes alkalmazások, állandó linkek (permalinks) blogokban és az ún. “egyoldalas” webszájtok de az esetek 99%-ában az éppen nézett dokumentumra hivatkozni felesleges és zavaró a látogató számára. </p>

<p>A hivatkozásokról szóló leckében leszögeztem, hogy a hivatkozás egy megállapodás és egy kötelezettség: felkínálsz a látogatóknak egy lehetőséget, hogy több olyan információhoz jussanak, amelyekre szükségük van, de óvatosnak kell lenned—veszthetsz a hitelességedből és a bizalmukból, ha a hivatkozás nem azt adja a felhasználóknak, amit akarnak, és/vagy nem várt viselkedést eredményez. Ha például felkínálsz egy olyan hivatkozást, ami az éppen aktuális dokumentumra mutat, aktiválása újra letölti a dokumentumot. Felhasználóként ez olyasmi, amire nem számítasz—mi értelme volt rákattintani erre a hivatkozásra? Ez a felhasználók összezavarását eredményezi. </p>

<p>Ez az oka annak, amiért az aktuális oldalra soha nem szabad hivatkozni a menüből. Eltávolíthatod az egészet, vagy még jobb, ha nem csinálsz belőle linket, hanem ehelyett kiemeled (pl. köré írsz egy <code>strong</code> elemet)—ez egy vizuális segítséget ad a felhasználóknak és a vak látogatóknak is elmondja, hogy ez fontos és az éppen aktuális hivatkozás a menüben—ezt az <a class="codeExample" href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/about.html"> aktuális oldalt kiemelő példa </a> mutatja.</p>

<h4 id="howmanyoptions">Mennyi lehetőséget kell adnod a látogatóknak egyszerre?</h4>

<p>Egy másik kérdés amivel foglalkoznunk kell az, hogy mennyi lehetőséget akarsz adni a látogatóknak.
Sok menü, amit a weben látsz biztosítani akarja, hogy a webhelyen minden oldal elérhető legyen egyetlen menüből. Ekkor kerül képbe a scriptelés és CSS trükk—a menüt sokkal kezelhetőbbé teheted, ha néhány részét elrejted, amíg a felhasználók ki nem választanak bizonyos területeket (legördülő menük, ahogyan néha nevezik őket). Technikai szempontból ez ügyes megoldás, de számos dolog van, amit figyelembe kell venni:</p>

<ul>
  <li>Nem minden látogató képes használni az ügyes trükköt úgy, ahogyan tervezted; a billentyűzetet használóknak például tabulátorral az összes linken végig kell lépegetniük, hogy elérjék azt, amelyiket keresik.
  </li>
  <li>Adnod kell egy csomó HTML-t a webhely minden egyes dokumentumához, hogy ezt elérd, és a legtöbb ezek közül sok oldalon felesleges lehet. Ha 3 szintet lépek lefelé a menüdben, hogy elérjek egy dokumentumot, nincs szükségem olyan opciókra, amelyek a 4., 5., és 6. szint mélységéig vezetnek.</li>
  <li>Túlterhelheted a látogatóidat, ha túl sok lehetőséget kínálsz nekik egyszerre—az emberek nem szeretnek döntéseket hozni. Gondolj arra, mennyi időbe telik neked, hogy válassz egy ételt egy terjedelmes éttermi menüről. 
 </li>
  <li>Ha az oldalon nincs sok tartalom, csak egy csomó link, a keresőmotorok azt fogják feltételezni, hogy nincs sok érvényes információ azon az oldalon és nem tanúsítanak neki túl sok figyelmet, ezért nehezebb megtalálni a Web átkutatása közben. 
</li>
</ul>

<p>Mindent egybevetve, rajtad áll, mennyi hivatkozást helyezel el a menüben—más dizájn más megoldást igényel—de ha nem egyértelmű, akkor le kell rövidítened a menüdet a webhely fő részeire mutató linkekre. Mindig biztosíthatsz további almenüket, ahol szükségesek. 

</p>

<h3 id="contextualmenu">Szövegtől függő menük</h3>

<p>A szövegtől függő menük olyan hivatkozások, amelyek az aktuális dokumentum tartalmára épülnek és annak az oldalnak a tartalmához kapcsolódó további információkat kínálnak, amelyen éppen vagy. Egy klasszikus példa erre a “kapcsolódó cikkek” linkjei, amiket általában a hírek végén találsz, mint ahogyan azt az 1. ábrán is láthatod.</p>

<p><img src="/articles/view/23-creating-multiple-pages-with-navigat/menus-figure1.png" alt="Egy szövegtől függő menü képernyőképe, ebben az esetben a hozzá kapcsolódó cikkekkel" /></p>
<p class="comment">1. ábra: Példa egy szövegtől függő menüre—egy cikk alul felkínálja a hozzá kapcsolódó hírek </p>

<p>A menük tartalomtól függése egy kicsit másképpen működik olyan szoftveres felhasználói felületeken, amelyek különböző opciókat kínálnak attól függően honnan érik el őket (mint például a jobb-klikk vagy a Ctrl + klikk menük, amiket olyan asztali alkalmazásokban találsz, amelyek speciális lehetőségeket nyújtanak, attól függően, hol van éppen az egérmutatód).</p>

<p>A szövegtől függő menük alkalmazása a webhelyeken nagyszerű módja annak, hogy a szájt más területei is előtérbe kerüljenek; a HTML szempontjából ezek csak újabb hivatkozások listái.
</p>

<h3 id="sitemaps">Oldaltérképek</h3>

<p>Az oldaltárképeknek azokat nevezik, amiket talán te is sejtesz—térképek a webhelyed összes különböző oldaláról (vagy a fő részekről, ha igazán hatalmas szájtról beszélsz). Ezek egy rálátást adnak a látogatóknak a webhelyed teljes struktúrájáról, és gyorsan eljuthatnak oda, ahová szeretnének—akkor is, ha az oldal, amire szükségük van mélyen van az oldalad hierarchiáján belül.</p>

<p>Mind az oldaltérképek, mind a keresők nagyszerű megoldások arra, hogy a látogatóknak egy tartalék lehetőséget biztosítsanak, ha eltévednek, vagy gyors elérést azoknak, akiknek sietős a dolguk.  
</p>

<p>HTML szemszögből ez lehet egy robusztus beágyazott lista tele linkekkel—vagy nagyon nagy szájtok esetében—fejezetcímek a részek hierarchiájának megfelelő beágyazott hivatkozásokkal vagy keresők minden egyes részhez.</p>

<h3 id="pagination">Oldalszámozás</h3>

<p>Az oldalszámozás akkor szükséges, ha navigációs megoldást akarsz kínálni olyan nagyobb dokumentumokon belül, amelyek különálló részekre vannak osztva. Találhatsz oldalszámozást pl. nagy képarchívumokban vagy a keresési eredmények oldalain (mint a Google vagy a Yahoo esetében).</p>
<p>Az oldalszámozás különbözik a többi navigációtól mert alapesetben visszalinkel ugyanarra a dokumentumra—de egy olyan hivatkozással, ami több információt is tartalmaz, pl., hogy melyik lapról kell elindulni. A 2. ábrán láthatsz néhány példát az oldalszámozásra:</p>

<p><img src="/articles/view/23-creating-multiple-pages-with-navigat/menus-figure2.png" alt="Különböző fajta oldalszámoások" /></p>
<p class="comment">2. ábra: Az oldalszámozás lehetővé teszi a látogatóknak, hogy nagyobb adatkötegeken menjenek keresztül anélkül, hogy elvesztenék a nyomát, hol is járnak. </p>


<p>A HTML semmi eget rengető—még egyszer felkínálod linkek egy listáját az aktuálissal együtt (jelölve, hogy melyik adatköteg látható és milyen mélyen vagy az oldalszámozás szerint), ami nem aktív és ki van emelve (pl. egy <code>strong</code> elemmel).</p>

<p>A fő különbség a szájt navigációhoz képest, hogy egy csomó programozási logika is kell az oldalszámozáshoz. Attól függően, hogy hol is vagy az egész adatkötegben, meg kell mutatnod, vagy el kell rejtened az előző, a következő, az első és az utolsó linkeket. Ha igazán nagy mennyiségű információn kell keresztülnavigálni akkor a nagyobb egységeket is jelölni akarod, mint a 100., 200. és még több opciót. Ezért nem igazán valószínű, hogy ilyen menüket HTML-ben lekódolsz, inkább a szerver oldalon készíted el őket. Ez azonban nem változtat a szabályon—az aktuális adatköteg nem hivatkozhat magára és nem kínálhatsz fel olyan linkeket, amelyek nem vezetnek sehová.</p>

<h2 id="imagemapsforms">Mikor a listák nem elegek—képtérképek és űrlapok</h2>

<p>Az esetek 99%-ában a rendezett és rendezetlen lista megfelelő HTML konstrukció menükhöz, legfőképp mivel a logikai sorrend és az egymásba ágyazás nagyon jól lehetővé teszi a stílusozást is CSS-sel. Azonban van néhány helyzet, amikor másfajta dizájntechnikára lehet szükség. 
</p>

<h3 id="hotspots">Hotspot-ok beállítása képtérképekkel</h3>

<p>Az egyik ilyen technika a kliens oldali képtérkép. Ezek egy képet alakítanak menüvé úgy, hogy a kép bizonyos részeit interaktív területekké teszik, ahonnan különböző dokumentumokra linkelhetsz. 
A témához tartozó <a class="codeExample" href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/imagemap.html">képtérképes példa</a>
egy képet alakít át klikkelhető menüvé. Próbáld ki, követve a fenti linket és a 3. ábrán is látható háromszög különböző részeire kattintva.</p>

<p><img src="/articles/view/23-creating-multiple-pages-with-navigat/menus-figure3.png" alt="Képernyőkép egy ábráról hotspotokkal" /></p>
<p class="comment">3. ábra: egy térképet definiálva a területekhez tartozó elemekkel, egy kép részeit interaktív elemekké teheted.
</p>

<p>Menüvé alakíthatsz egy képet, ha egy térképet definiálsz hozzá különböző területekkel (ezeket hotspot-oknak is hívják). A térképnek adsz egy <code>name</code> attribútumot, és összekötöd a képet és a térképet a <code>usemap</code> attribútum használatával az <code>img</code> elemen. Figyeld meg, hogy ez pontosan úgy működik, mint az oldalon belüli hivatkozások, ami azt jelenti, hogy először meg kell határoznod a <code>usemap</code> attribútum értékét egy kettős kereszt után.</p>
<p>Minden területnek több attribútummal kell rendelkeznie:</p>

<dl>
<dt><code>href</code></dt>
<dd>azt az URL-t definiálja, ahová a hivatkozásnak mutatnia kell (amely egy az oldalon belüli célpont is lehet).
</dd>
<dt><code>alt</code></dt>
<dd>egy alternatív szöveget ad meg arra az esetre, ha a kép nem található, vagy a kliens eszköz nem támogatja a képeket.
</dd>
<dt><code>shape</code></dt>
<dd>a területek alakját határozza meg. Ez lehet <code>rect</code> téglalapokhoz, <code>circle</code> körökhöz, vagy <code>poly</code> nem szokványos formákhoz sokszögekkel definiálva.</dd>
<dt><code>coords</code></dt>
<dd>a kép azon koordinátáit definiálja, amelyekből hotspot-ot akarunk létrehozni—ezeket az értékeket a kép bal felső sarkától számítjuk, pixelben vagy százalékban. Téglalap alakú területek esetén csak a bal felső és jobb alsó sarkot kell meghatároznod; kör alakú esetén a középpontját és a sugarát kell definiálnod; sokszög esetében egy listát kell megadnod az összes sarokponttal. 
</dd>
</dl>

<p>A képtérképeket nem túl szórakoztató definiálni és HTML-ként begépelni, ezért van, hogy képszerkesztő programok, mint az Adobe Image Ready vagy a Fireworks lehetőséget kínálnak arra, hogy vizuálisan is létrehozhatók legyenek (ezek generálják számodra a HTML-t). 
</p>

<h3 id="forms">Helyspórolás a képernyőn és linkek összezsúfolásának megelőzése űrlapokkal</h3>

<p>Egy másik technika, amit alkalmazhatsz, egy űrlap készítése <code>select</code> elem használatával. A különböző oldalaidat opcióként definiálhatod a <code>select</code> elemen belül, és a látogatóid választhatnak egy opciót, majd elküldhetik az űrlapot, ezzel ugorva a különböző oldalakra. Itt találsz egy működő <a class="codeExample" href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/selectnavigation.html">példát űrlapos menüre</a>.</p>

<p>Ennek a típusú menü használatának a legszembetűnőbb előnye, hogy egy csomó opciót kínálhatsz a képernyő nagy területének felhasználása nélkül, mivel a böngészők a menüt egy sorba helyezik el—lásd a 4. ábrát.</p>

<p><img src="/articles/view/23-creating-multiple-pages-with-navigat/menus-figure4.png" alt="Képernyőkép egy legördülő menüről nyitott és zárt állapotban" /></p>
<p class="comment">4.ábra: A legördülő menük csak egy sort foglalnak el a képernyőn.</p>

<p>Ezt tovább is fejlesztheted a különböző opciókat csoportosítva az <code>optgroup</code> elem használatával, ahogyan ebben a <a class="codeExample" href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/selectnavigationoptgroup.html"><code>optgroup</code> példában</a> láthatod.</p>

<p>Ez egy menüt mutat nem kiválasztható opciókkal (ezek a csoportok nevei) amint az 5. ábrán is látszik:</p>

<p><img src="/articles/view/23-creating-multiple-pages-with-navigat/menus-figure5.png" alt="Képernyőkép egy legördülő menüről, amely opció csoportokat tartalmaz" /></p>
<p class="comment">5. ábra: a legördülő menük kaphatnak opció csoportokat amelyek lehetővé teszik számodra, hogy tudasd a látogatókkal, mely opciók tartoznak össze.
Ez az Opera 9.5 renderelési módja.</p>

<p>Ennek a technikának az előnye, hogy alig foglal helyet, de azt is jelenti, hogy szükséged van egy szerver oldali scriptre, hogy a látogatókat elküldhesd azokra az oldalakra, amelyeket kiválasztottak. Használhatsz JavaScriptet is a linkek működtetéséhez, de nem lehetsz biztos benne, hogy az engedélyezve van—biztosnak kell lenned abban, hogy a felhasználóid hasznát veszik a menüdnek akkor is, ha a JavaScript ki van kapcsolva. </p>

<p>Egy másik, kevésbé nyilvánvaló előnye, hogy nem biztosítasz túl sok hivatkozást egy dokumentumon belül. Ez azt jelenti, hogy nem terheled túl a kisegítő technológiát használókat sem (akiknek általában a linkeket egyetlen hatalmas listában kínálják fel). Ez azt is jelenti, hogy a keresőmotorok nem tekintik haszontalannak a linkeket az oldaladon, mivel a hivatkozás:szöveg arány miatt olyan, minta egy oldaltérkép lenne. Azonban sok kisegítő technológia képes egy térképet létrehozni az oldalaid linkjeiből; ha a fontos hivatkozásaid mind egy legördülő menüben vannak, előfordulhat, hogy egy látogató soha nem bukkan rájuk. Ezért jó ötlet, ha sima kapcsos linkeket is biztosítunk a főbb oldalakhoz és <code>select</code> elemes menüket a további opciókhoz. 
A látogatók képesek lesznek használni őket, de a gépeknek, mint a keresőrobotoknak nem kell tudniuk a létezésükről.</p>

<h2 id="skiplinks">Hol helyezzük el a menüt, és lehetőség felkínálása annak átugrásához</h2>

<p>Még egy utolsó dolog, ami említést érdemel a HTML menükkel kapcsolatban, az hogy milyen fontos szerepet játszik, hol helyezzük el őket. Vegyük például azokat a látogatókat akiknek nincs eszközük a görgetéshez, vagy esetleg nem látnak, ezért a billentyűzettel történő navigálásra támaszkodnak, hogy eligazodjanak a szájtodon.
Az első dolog, amivel találkozni fognak, mikor letöltik a dokumentumot, az a helye és a címe; majd elindul a dokumentum felolvasása felülről lefelé, minden egyes hivatkozásnál megállva, hogy megkérdezze a látogatót, akarja-e követni azt vagy sem. Más opcióknak egy listát kell kapniuk az összes linkről, vagy címsorról címsorra kell ugrálniuk.</p>

<p>Ha a menü a dokumentum tetején van, akkor ez lesz az első dolog, amivel a felhasználók találkozni fognak. Nagyon idegesítő tud lenni, ha 15 vagy 20 hivatkozáson végig kell menniük, mielőtt bármilyen tartalomhoz érnének. Erre két megoldás is létezik. Először is a menüt elhelyezheted a dokumentum fő tartalma után (ha akarod, CSS használatával fel is teheted a képernyő tetejére). Másodszor biztosíthatsz egy átugró linket. Ezek egyszerű hivatkozások a főmenü előtt, amelyek a tartalom elejére mutatnak, lehetőséget biztosítva a látogatóknak, hogy átugorják a menüt és azonnal elérjék a tartalmat, ha akarják. Adhatsz egy másik “vissza a menüre” linket a dokumentum végén, hogy könnyebbé tedd a visszajutást az oldal tetejére. 

 Nézd meg az <a class="codeExample" href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/skiplinks.html">átugró linkes példát</a> a jobb érthetőség kedvéért.</p>

<p>Az átugró linkek nem csak az ilyen szempontból hátrányos helyzetben lévőknek hasznosak, de sokkal könnyebbé teszik az életet, ha egy kis képernyős mobil eszközt használva navigálsz egy webhelyen.</p>

<h2 id="summary">Összefoglaló</h2>

<p>Ebben a leckében azokat a különböző típusú menüket vettem sorra, amiket nagy valószínűséggel meg kell írnod HTML-ben. Beszéltem arról, hogy:</p>

<ul>
<li>A hivatkozásokat tartalmazó listák miért tökéletes HTML konstrukciók egy menü létrehozásához
</li>
<li>Miért fontos, hogy a menüket ne tekintsük kőbe vésettnek, hanem számítsunk a változásra és tervezzük meg azt
</li>
<li>Oldalon belüli navigáció: hivatkozás az aktuális dokumentum részeire és vissza a menüre
</li>
<li>Szájt navigáció: egy menü megadása, ami megmutatja a lapokat az aktuális webhelyen és a hierarchiájukat is; azt is megnéztem, miért fontos, hogy kiemeljük azt az oldalt, ahol a felhasználó éppen tartózkodik.
</li>
<li>Szövegfüggő navigáció: a szájton (vagy másikon) lévő, hasonló témájú linkek felkínálása
</li>
<li>Oldaltérképek: mint egy tartalék-, vagy tájékozódást segítő eszközök a látogatóknak, akik eltévedtek, vagy határozott igényekkel jönnek</li>
<li>Oldalszámozás: egy eszköz, ami segít a látogatóknak olyan dokumentumon keresztül navigálni, ami több lapra van felosztva
</li>
<li>Képtérképek: grafikus menük készítéséhez képek hotspot-okkal történő lefedésével
</li>
<li>Űrlap menük: egy csomó lehetőség biztosítása sok hely felhasználása nélkül és a látogatók, valamint a keresőrobotok sok link miatti túlterhelését elkerülve
</li>
<li>Átugró linkek és a menük elhelyezése
</li>
</ul>
<p>Ezek közül a témák közül néhányhoz még visszatérünk a későbbiekben a kurzus CSS-sel foglalkozó részénél, hogy megnézzük, hogyan tehetjük jobbá a kinézetüket, és hogyan lehetnek menüként még egyértelműbbek a látogatóid számára. </p>

<h2 id="exercises">Tesztkérdések</h2>

<ul>
  <li>Miért jó ötlet a menüket listába rendezni?
  </li>
  <li>Mikor egy navigációs menüt tervezel, mit kell belekalkulálnod a jövőt illetően?
  </li>
  <li>Mik az előnyei a <code>select</code> elemek menükhöz való használatának, és mik a problémák?
  </li>
  <li>Mit definiálsz az <code>area</code> elemekkel, és mire jó egy terület elem <code>nohref</code> attribútuma (ez nincs a leckében, szükséged van egy kis keresgélésre a neten)?
  </li>
  <li>Mi hasznuk van az átugró linkeknek?
  </li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/22-altalanos-tarolok/" rev="prev" title="link to the previous article in the series">Előző leírás—Általános tárolók</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/24-validating-your-html/" rel="next" title="link to the next article in the series">Következő leírás—A HTML validálása</a></li>
<li><a href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom" rel="index">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<div class="right">

<img src="/articles/view/23-creating-multiple-pages-with-navigat/chrisheilmann.jpg" alt="Chris Heilmann a cikk szerzőjének fotója" />

<p class="comment">Fotó: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>

</div>

<p>Miután belekontárkodott a rádiózásba, Chris Heilmann tíz évig dolgozott webfejlesztőként. Jelenleg a Yahoo!-nál dolgozik Angliában mint oktató és vezető fejlesztő, és a kódminőséget ellenőrzi az európai és ázsiai kirendeltségeknél.</p>

<p>Chris a <a href="http://wait-till-i.com/">Wait till I come</a> oldalon blogol, és „codepo8” néven található meg több közösségi oldalon is.</p>
