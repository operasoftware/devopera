Title: A hozzáférhetőség alapjai
----
Date: 2010-04-21 06:18:31
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
<li class="prev"><a href="http://dev.opera.com/articles/view/24-validating-your-html/" rev="prev" title="link to the previous article in the series">Előző leírás—A HTML validálása</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/26-accessibility-testing/" rel="next" title="link to the next article in the series">Következő leírás—A hozzáférhetőség tesztelése</a></li>
<li><a href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom" rel="index">Tartalomjegyzék</a></li>
</ul>



        <h2>Bevezető</h2>

        <p>Mikor egy webszájtot készítesz, a hozzáférhetőség—a webhely használhatóvá tétele mindenki számára képességeiktől vagy akadályozottságuktól függetlenül—kiemelt fontosságú kell hogy legyen. A kurzus folyamán a hozzáférhetőség eddig minden példa esetében magától értetődő szempont volt, akkor is, ha ezt nem vetted észre; ebben a leírásban kifejezetten a hozzáférhetőséggel foglalkozom majd, így teljes egészében megértheted mi is ez, miért fontos, hogyan biztosítható a szájtok elérhetősége, és milyen irányelvek léteznek, hogy meghatározzák a szájtok hozzáférhetőségét.</p>

<p>A leírás felépítése a következő:</p>
        
         <ul>
 <li><a href="#whatisaccessibility">Mi a hozzáférhetőség?</a></li>
 
  <li><a href="#whyisitimportant">Miért fontos a hozzáférhetőség?</a>
  <ul>
  <li><a href="#legalities">A hozzáférhetőségre vonatkozó törvények</a></li>
  <li><a href="#potentialmarkets">Potenciális piacok</a></li>
  <li><a href="#searchengines">Keresőmotorok</a></li>
  <li><a href="#ethics">Erkölcsi normák és védjegyek</a></li>
  </ul>
  </li>
  <li><a href="#designingaccessibility">Tervezés a hozzáférhetőség figyelembe vételével</a></li>
  <li><a href="#interoprequirements">Támogatottsági követelmények</a></li>
  
  <li><a href="#accessiblefeatures">Egy hozzáférhető weboldal jellemzői</a>
  <ul>
  <li><a href="#semanticstructure">Szemantikus felépítés</a></li>
  <li><a href="#alternativecontent">Alternatív tartalom</a></li>
  <li><a href="#interaction">Az interakció meghatározása</a></li>
  </ul>
  </li>
  
  <li><a href="#accessibilitystandards">Szabványok a hozzáférhetőséghez</a>
  <ul>
  <li><a href="#WCAG1">A Webes Tartalom Hozzáférhetőségének Irányelvei 1.0</a></li>
  <li><a href="#WCAG2">A Webes Tartalom Hozzáférhetőségének Irányelvei 2.0</a></li>
  <li><a href="#section508">Az 508. Szakasz</a></li>
  <li><a href="#otherstandards">Egyéb szabványok</a></li>
  </ul>
  </li>
  
  <li><a href="#summary">Összefoglaló</a></li>
  <li><a href="#exercises">Tesztkérdések</a></li>
 </ul>
        
        <p>Mielőtt kimondottan a webes hozzáférhetőségre térnék rá, először vizsgáljuk meg azt nagy általánosságban—elvégre, a hozzáférhetőség nem csak webes vonatkozásban értelmezhető; minden szolgáltatás esetén egy lehetséges szempont, legyen az tárgyi vagy technológiai amivel a hétköznapi életben találkozni fogsz. </p>

<p class="note">Egy másik, kapcsolódó téma, amit a figyelmedbe ajánlok, a <a href="http://www.w3.org/WAI/intro/aria">WAI ARIA</a>—a Web Accessibility Initiative’s Accessible Rich Internet Applications (a Webes Hozzáférhetőségi Kezdeményezés Hozzáférhető Gazdag Internetes Alkalmazások nevű ajánlása), 
ami alapjában véve egy módszertan, amely lehetővé teszi hozzáférhetőbb Ajax/JavaScrip felhasználásával készült alkalmazások készítését. 
<a href="http://dev.opera.com/articles/view/introduction-to-wai-aria/">Egy nagyszerű bemutató leírást találhatsz az ARIA-ról a dev.opera.com-on</a>.</p>

        <h2 id="whatisaccessibility">Mi a hozzáférhetőség?</h2>

        <p>Nézz körül! Remélhetőleg látsz néhány másik embert is; ha nem, akkor miért nem teszel egy rövid sétát? Valószínűleg élvezni fogod és jót tesz majd neked. Azok közül, akiket magad körül látsz, egy ember sem ugyan olyan, mint te—néhánynak barna haja van, másoknak nem. Néhánynak kék szeme van, másoknak nem. Néhányan szemüveget viselnek, mások nem. Egyikünk sem teljesen egyforma. Néhány különbség, mint a haj és a szem színe, csak szépészeti kérdés—nem hatnak számottevően arra, hogyan éljük az életünket. Más különbségek, mint a szemüveg viselése, már igen. A hozzáférhetőség egy egyszerű dolog, egy filozófia, habár néhány országban a törvény részét is képezi.</p>
    
        <blockquote>
            A hozzáférhetőség minden ember egyenlőként kezelése függetlenül a képességeiktől. 
		</blockquote>

        <p>Rájöttem arra, hogy ez az állítás szabadon értelmezhető. A legtöbb <em>hozzáférhetőséggel</em> kapcsolatos fejtegetés során először az <em>akadályoztatottságról</em> esik szó.
Ez arra utal, hogy a fogyatékkal élő emberek különleges bánásmódot érdemelnek. A hozzáférhetőség nem erről szól—ez valójában egy tünete annak, ahogyan az emberek hagyományosan építik az épületeket, webszájtokat és alapjában véve nagyjából minden mást is. </p>

        <p>Ha úgy építesz dolgokat, hogy azt feltételezed, mindenki olyan mint te, akkor azok mindig alkalmatlanok lesznek néhány ember számára. Az emberek azt hiszik, hogy a hozzáférhetőség a fogyatékkal élők segítését jelenti, mivel a továbbfejlesztés a hozzáférhetőség növeléséhez nagyon is magától értetődő a társadalmunkban. Például sok épületre, amelyek csak lépcsőkkel kezdték életüket, hirtelen olcsó, csúnya rámpák nőttek. Habár a hozzáférhetőség hosszú ideje fontos jellemzője a haditechnikai tervezésnek. Miért? Mert gyakran meghatározó a túlélés szempontjából—többszörös g-erőnek kitéve a sugárhajtású vadászgépek pilótái nem képesek olyan dolgokra, amelyekre a földön. Ha a repülőgép tervezők nem vennék számításba a pilóták igényeit mind magas, mind alacsony gravitációjú környezetben, akkor sokkal több repülőgép-szerencsétlenség történne.</p>
        
        <p>Szóval mit is jelent ez a webszájt fejlesztés szempontjából? A rövid válasz az, hogy meg kell próbálnod jobban figyelni a közönséged egészének igényeire, aki feltételezhetően megnézi a szájtodat. 
A hosszabb válasz megkövetelheti tőled, hogy egy kicsit többet tudj meg az akadályoztatottság különböző szintjeiről, amelyekkel az emberek együtt élhetnek és arról, hogyan használják a számítógépet. Az ebben a tananyagban és más hasonló leírásokban ismertetett technikák alkalmazásával képes leszel olyan webhelyek létrehozására, amelyek sokféle interakciós megoldással működnek. A webszájtjaid használhatóak lesznek az emberek számára akkor is, ha:</p>
        
        <ul>
        <li>vakok, vagy súlyosan látáskárosultak, és hallgatják a webszájtot egy képernyő-felolvasó használatával, vagy érzik azt egy Braille-megjelenítőn. 
		</li>
        <li>rövidlátók és 200%-os fontméretre nagyítják fel azokat.
		</li>
        <li>mozgáskorlátozottak, így nem tudják használni a kezüket, hogy az egeret irányítsák és ezért egy mutatóeszközt használnak a billentyűzet kezelésére, vagy egy szemmozgás érzékelőt a webszájt irányításához.
		</li>
        <li>hanyattegeret használnak, vagy másfajta, szokatlanabb számítógép irányítási módszert alkalmaznak.
		</li>
        </ul>
        
        <p>Ne törődj most ezeknek az interakciós formáknak a speciális részletezésével—a következőkben majd lépésről lépésre megvizsgáljuk őket. </p>

        <h2 id="whyisitimportant">Miért fontos a hozzáférhetőség?</h2>

        <p>A hozzáférhetőség egy nagy és egy csomó kisebb ok miatt fontos. A legfőbb az, hogy 
		 <em>különbözőek vagyunk és mégis mindannyiunknak egyenlő joga van a webszájtok használatához</em>, de van sok egyéb oka is annak, miért kell a hozzáférhetőség figyelembe vételét a webhelyed készítésének részeként tekintened:</p>

        <ul>
            <li>Néhány országban ezt törvény írja elő.</li>
            <li>Nem akarsz kizárni egyetlen potenciális vásárlót/látogatót sem a szájtodról.
			</li>
            <li>A hozzáférhető szájtokat általában magasabb helyre rangsorolják a keresőmotorok.
			</li>
            <li>Helyes etikai hozzáállást mutatsz—ez olyasmi, amit a vásárlók értékelni fognak. 
			</li>
            <li>Ha egyszer webes szabványokkal építesz egy webszájtot, akkor már alig igényel extra erőfeszítést, hogy hozzáférhetővé tedd, aminek számos előnye van; sok összefüggés is létezik a webhelyek jobb hozzáférhetősége és a mobiltelefonok böngészőivel való kompatibilitásuk között—ami egy újabb körülmény a webszájt bonyolultabb használhatóságához, bár eltérő okok miatt. Valójában már vizsgálták a webes hozzáférhetőség és a mobil webfejlesztés ideális megoldásai közötti kapcsolatot—több információért látogasd meg a <a href="http://www.w3.org/WAI/mobile/">WAI &quot;Web Content Accessibility and Mobile Web&quot;</a> oldalát.</li>
            <li>A technikák, amelyek a fogyatékkal élő embereket segítik, előnyösek minden felhasználó számára.
			</li>
        </ul>
        
        <p>A továbbiakban most ezek közül a pontok közül néhányat részletesebben is megnézek. 
		</p>

        <h3 id="legalities">A hozzáférhetőségre vonatkozó törvények</h3>
        <p>Megjegyzés: fontos megérteni a törvényi szabályozás alapjait, de hacsak nem vagy ügyvéd és nem tudod pontosan miről is beszélsz, nagyon óvatosan kell véleményt nyilvánítanod a jogi kérdésekkel kapcsolatban.
		</p>
        <p>Nagy-Britanniában a <a href="http://www.direct.gov.uk/en/DisabledPeople/index.htm"><abbr title="Disability Descrimination Act 1995">DDA</abbr></a> értelmében illegálisnak minősül a diszkrimináció a fogyatékkal élő emberekkel szemben toborzás és foglalkoztatás során, vagy szolgáltatás nyújtása esetén, illetve az oktatásban. A diszkrimináció úgy határozható meg, mint elmulasztani olyan “indokolt mértékű korrekció” véghezvitelét, hogy hozzáférhetővé tegyünk valamit mindenki számára a képességeiktől függetlenül. Természetesen ez a weben keresztül elérhető szolgáltatásokra és oktatásra is vonatkozik.</p>

        <p>Az Egyesült Államokban és az Európai Unióban különböző követelményeket is támasztanak az állami webhelyekkel szemben. Az USA-ban a szövetségi kormány (és néhány állam kormány) webhelyeinek tartaniuk kell magukat az <a href="http://www.section508.gov/">508. Szakaszhoz</a>.
Az 508. Szakasz egy olyan dokumentum, amely megpróbálja meghatározni azokat a minimális követelményeket, amelyek szükségesek a hozzáférhetőség megvalósításához. Az 508. Szakasz nem csak a webszájtokra tér ki; az összes többi technológiával is foglalkozik, amelyet egy amerikai munkavállaló használhat. Az Európai Bizottság elismerte a <abbr title="World Wide Web Consortium">W3C</abbr> Webes Hozzáférhetőségi Kezdeményezését (WAI) és annak alkalmazását szorgalmazta minden tagállam részéről. A <a href="http://w3.org/WAI"><abbr title="Web Accessiblilty Initiative">WAI</abbr></a> irányelveket fektet le a webszájtok, a weboldalak létrehozásához használt eszközök gyártói, valamint a webböngészők részére (ilyen például a <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>, amelyet később részletezek majd).</p>

        <h3 id="potentialmarkets">Potenciális Piacok</h3>
        <p>Ha csak egy meghatározott típusú embernek készítesz webhelyet (vagy bármi mást), ezzel kirekesztesz másfajta embereket akkor is, ha ezt nem veszed észre, és ezek az emberek könnyen alkothatják egy jelentős (ha nem a legnagyobb) részét a piacnak. 2000-ben a Tesco brit szupermarket üzletlánc egy projekt megvalósításába kezdett, hogy elkészítse online élelmiszer-áruházának egy különálló verzióját, ami kifejezetten a csökkent látóképességű embereket célozta meg. Julie Howell az <abbr title="Royal National Institute of the Blind">RNIB </abbr>-től (A Vakok Királyi Nemzeti Intézetétől) ezt így kommentálta: <q>A feladat, amire a Tesco.com vállalkozott, hogy a hazai élelmezési szolgáltatásukat elérhetőbbé tegyék a vak vásárlók részére, 13 millió font többletbevételt hozott évente, amely egyszerűen nem volt elérhető a vállalat számára, amíg a webszájtjuk a vak vásárlók által hozzáférhetetlen volt.</q> Vagyis, ha a Tesco figyelmen kívül hagyta volna a csökkent látóképességgel élő embereket, elesett volna egy 13 millió fontot érő piaci szegmenstől.</p>

        <p>Ebből az a tanulság, hogy bármilyen eltérő képességű emberek ugyanazokat a szolgáltatásokat igénylik; élelmiszert, taxit, elektromosságot; és ugyanazokat a dolgokat szeretik; filmeket, zenét, bárokat. Azt feltételezni, hogy valakinek a személyes élethelyzete megváltoztatja a képességét vagy a vágyát, hogy részt vegyen a társadalmi élet minden formájában, időről időre hibásnak bizonyult.</p>

        <h3 id="searchengines">Keresőmotorok</h3>
        <p>A keresőmotorok nem emberek. Gyakran mikor az emberek webszájtokat építenek, anélkül teszik ezt, hogy figyelembe vennék hogyan is fogja azokat megtalálni a Google, a Yahoo, stb. A keresőmotorok csupán computer programok és csak olyan információkat tudnak használni a webhelyed indexeléséhez, amelyeket megértenek. Ez inkább a képernyőfelolvasókhoz teszi őket hasonlatossá, amiket csökkent látóképességű személyek használhatnak.</p>

        <p>A legkézenfekvőbb példa arra, hogyan hat ez a webdizájnra, a kép. A számítógépek úgy jelenítik meg a képeket, hogy van egy listájuk arról, melyik pixel milyen színű és ezt az információt elküldik a monitornak. Ha egy olyan képet helyezel el az oldalon, amely szöveget is tartalmaz, pl. egy logót, a számítógépnek ötlete sem lesz arról, mit is mond a szöveg, vagy arról, hogy a kép egyáltalán tartalmazza azt. HTML-ben az image elem lehetővé teszi, hogy szövegesen írd le a kép tartalmát az <code>alt</code> attribútummal. Csak a nem díszítésre szolgáló képekhez kell biztosítanod leírást a szájtodon, és természetesen nem ábrázolhatsz egész bekezdésnyi szövegeket képként (vagy mondjuk Flash-ben)—a vak embereknek, illetve a keresőmotoroknak fogalmuk sem lesz arról, mit jelentenek! Enne a keresőben elfoglalt rangsorolásod fogja kárát látni (vagyis az, hogy mennyire könnyű megtalálni a webszájtodat a keresőmotorokkal, pl. a Google-lel) és feleslegesen fogsz elesni egy értékes piactól.</p>
        
        <h3 id="ethics">Erkölcsi normák és védjegyek</h3>
        <p>Az, hogy mindenkinek támogatnia <em>kellene</em> a hozzáférhetőséget, még nem jelenti azt, hogy mindenki támogatja is. A hozzáférhetőség támogatásával azonban az érdeklődésedet nyilvánítod ki a közösség felé. Ez olyasmi, amire büszke lehetsz—annak megmutatása, hogy számodra mindenki fontos a társadalomban, javítja egy márka megítélését. Mint szakértők, a mi feladatunk, hogy megpróbáljuk a lehető legjobb minőségű terméket előállítani. A társadalomban, amely egyéniségként értékel minket fontos, hogy ne rekesszünk ki valakit azért, mert mások az igényei.</p>
        
        <p>Felelősségteljesen megválasztott üzletpolitikával és hitelesen megmutatva azt, hogy alkalmazod is ezeket az irányelveket, egy rendkívül pozitív arculatot hozhatsz létre. Azokhoz a vállalatok, amelyek megmutatják, hogy törődnek a vásárlóikkal, sokkal hűségesebbek, mint azokhoz, akik nem. </p>

        <h2 id="designingaccessibility">Tervezés a hozzáférhetőség figyelembe vételével</h2>
        <p>A hozzáférhetőség kulcsa az, hogy gondolsz egy problémára és tudod, hogyan fogod megoldani több mint egy fajta felhasználó számára. Ha a hozzáférhetőséget megpróbálod úgy kezelni, mint olyasmit, amit legvégül adsz az oldalhoz, akkor egy ronda, utoljára-hozzácsapott-valamit fogsz kapni. Ez hosszabb ideig fog tartani, nem fog olyan jól működni és átkozottul csúnyán fog kinézni.</p>
        
        <p>Legjobb módja egy jól felépített megoldásnak, ha az összes követelményt észben tartva tervezel már kezdettől fogva. Ez nem azt jelenti, hogy nem változtathatsz a terveden, vagy adhatsz hozzá még hiányzó dolgokat, de figyelned kell arra, mi is az a feladat, aminek a végrehajtását megtervezed. A webszájtok esetében ez egy olyan megoldás megvalósítását jelenti, ami használható minden látogatód számára beleértve azokat is, akik nem tudnak egeret, billentyűzete, vagy monitort (stb.) használni.</p>

<h2 id="interoprequirements">Támogatottsági követelmények</h2>

<p>Az együttműködési követelmények meglehetősen eltérőek lehetnek a helyzettől függően.</p>

<p>Egy új technológia gyakran hozzáférési támogatás nélkül kerül bemutatásra. Például a Microsoft új Silverlight plugin-ja nem továbbít információkat a hozzáférhetőségi API-okon keresztül, amiket a képernyő-felolvasók és más kisegítő technológiák használnak, habár ennek a támogatása tervezett a jövőben.</p>

<p>Ahol elméletileg jelen van ez a támogatás, ott pedig a kisegítő technológiáknak telik időbe, hogy ezt kihasználják. Az újabb képernyő-felolvasók például sokkal jobban boldogulnak a JavaScripttel megspékelt HTML struktúrákkal, mint a régebbiek.</p>

<p>Még a régóta fennálló hozzáférési támogatás is platformonként eltérő lehet. Például az Adobe Flash Player plugin lehetővé teszi az információcserét a Windows hozzáférhetőségi API-jával, de az Apple és a GNOME megfelelőjével már nem.</p>

<p>Megfigyelhető az elmaradás az újonnan érkező támogató technológiák széles körben való elterjedése esetén is. 
Habár a böngészők és a plugin-ek manapság egyre inkább ingyenesek, a népszerűbb támogató technológiák nagyon drágák lehetnek. Például az egyik legelterjedtebb képernyő-felolvasó a Freedom Scientific alkalmazása a JAWS for Windows. Nagyjából évenként adják ki az újabb verziót. A JAWS Professional 1,095 dollárba kerül és még akkor is, ha költesz további 200 dollárt, hogy megkapj egy Szoftverfrissítési Megállapodást a két következő verzióhoz, a frissítés még további 500 dollárba vagy többe is kerülhet. Következésképpen, habár a legújabb verzió a 9., még mindig sok olyan felhasználót találhatsz, akik a régebbi verziókat használják.</p>

<p>Szóval, ha a web széles közönségének tervezel webszájtot építeni, számításba kell venned a támogatottságot a meglehetősen változatos kliens eszköz/technológia kombinációk részéről. Négy megközelítés lehetséges:
</p>

<ul>
<li>Progresszíven fejleszted a webszájtodat, folyamatosan tesztelve a támogatottságot.
</li>
<li>Lehetővé teszed a felhasználóknak, hogy kikapcsolják a problémás újításokat.
</li>
<li>Alternatív verziókat kínálsz azonos tartalommal vagy funkcióval.
</li>
<li>Tájékoztatod az ügyfeleidet arról, milyen technológiákat kellene támogatniuk és példaként hozol fel olyan vállalatokat, amelyek támogatják ezeket a technológiákat. 
</li>
</ul>

<p>Intraneteken belül a visszamenőleges kompatibilitás és választék kevésbé fontos. Az adott vállalat valószínűleg képes biztosítani, hogy minden fogyatékkal élő alkalmazottja számára elérhető legyen a kisegítő technológia például a DHTML megfelelő támogatásával. Ilyen körülmények között és a biztosított kisegítő technológiai alapos tesztelésével, a JavaScript alapvető támogatása ésszerű lenne.</p>

<p>Ennek ellenére a jövőbeni és a többplatformos kompatibilitás még mindig napirenden vannak, ezért a nyílt, szabványos technológiákat kellene előnyben részesíteni a magántulajdonú, nem szabványos technológiákkal szemben.</p>

<p>Például, fejleszthetsz egy intranetes oktató alkalmazást egy nagyobb vállalatnak. Megkérnek rá, hogy biztosítsd az alkalmazás hozzáférhetőségét, de nem jelölnek meg egyetlen szabványt sem, amihez igazodnod kell. Beszélsz az IT részleggel és megtudod, hogy mindenki rendelkezik az Internet Explorer legújabb változatával, amelyben engedélyezve van a JavaScript, telepítve és engedélyezve van a Flash és olyan modern kisegítő technológiákkal lesznek ellátva, amelyekre ezen eszközök támogatásához szükségük van. Habár most a vállalat Unix alapú platformra vált, lesznek olyan kisegítő technológiák, amelyek támogatják a JavasScriptet, de a Flash alapú szövegek és funkciók csak Windows-on érhetőek el. Nyugodtan készíthetsz script és Flash alapú alkalmazásokat. Azonban úgy döntesz, hogy a Flash-t csak videó lejátszásához használod, és a kezelőszerveket a Flash videóhoz webes szabványok szerint építed fel, mivel a Flash alapú kezelőszervek a kisegítő technológiák számára csak Windows-os platformon elérhetőek. Így az alkalmazás elérhető marad akkor is, ha a vállalat Unix-ra költözik át. </p>

<p>A vállalatok IT-politikája változhat, és a legjobb szándék, hogy a JavaScript funkciókat működőképessé tegyük és a plugin-ok hozzáférhetőségi kiegészítéseit elterjesszük, meghiúsulhat, ezért ha van is egy biztosított technológia, a progresszív fejlesztés egy tiszta HTML rétegről még mindig jó ötlet.</p>

        <h2 id="accessiblefeatures">Egy hozzáférhető weboldal jellemzői</h2>
        <p>Ebben a fejezetben bemutatom egy weboldal hozzáférhetőségének különböző jellemzőit—ezek azok, amiket egy hozzáférhető webszájtnak tartalmaznia kellene. Mindegyiket részletesen is el fogom magyarázni.</p>
        
        <h3 id="semanticstructure">Szemantikus felépítés</h3>
        <p>A webes szabványok egyik alapja a szemantikus felépítés használata a HTML-ben. A szemantikus felépítés rendkívül fontos a hozzáférhetőség szempontjából is. Ez adja meg az információ vázát az oldalon. Ha az emberek nem láthatják az oldal vizuális stílusát, a szemantikus struktúra számos dolgot segít megmutatni nekik. Jelzi a helyzetüket a dokumentum hierarchiájában, a módot, ahogyan interakcióba léphetnek különböző elemekkel az oldalon, és kihangsúlyozzák a szöveges tartalmat a megfelelő helyen.</p>
        
        <p>Egy jó példa arra, mennyire fontos egy dokumentum szemantikus felépítése a hozzáférhetőség szempontjából, a navigáció. Egy jól strukturált navigációs menü a tételek listája. HTML listaként kódolhatod le:
		</p>
        
<pre><code>&lt;ul&gt;
  &lt;li&gt;1. menüpont&lt;/li&gt;
  &lt;li&gt;2. menüpont&lt;/li&gt;
  &lt;li&gt;3. menüpont&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        
        <p>Ha a navigációs menüket listába rendezed, akkor könnyű tudatni valakivel, aki nem látja a listát és egy képernyő-felolvasót használ, hogy valójában listáról van szó. Mivel a felolvasó elmondja neki, hogy ez egy lista. Ha nem listaként kódolod le, a felolvasónak nem lesz módja kitalálni, hogy ez egy lista, és elmondani a felhasználónak.</p>
        
        <p>A korábbi leírásokban további információkat találhatsz arról, hogyan használd a megfelelő szemantikát a HTML kódodban, főleg azokban, amelyek kifejezetten a HTML-lel foglalkoznak.</p>
        
        <h3 id="alternativecontent">Alternatív tartalom</h3>
        
        <p>Ahogyan az már a <a href="#searchengines">keresőmotorokról szóló fejezetben</a> említésre került,
egy hozzáférhető alternatíva biztosítása a tartalomhoz és navigációhoz elengedhetetlen. A tartalmak univerzális megnyilvánulásának a szöveget tekintjük <a href="#cognitive_and_text_alternatives">egy kivétellel</a>,
ahogyan a következőkben látni fogod. A szöveg könnyen felolvastatható egy képernyőfelolvasóval, nagyobbá vagy kisebbé méretezhető, a tartalma könnyen megváltoztatható és sok egyéb módosítások végezhetőek vele. Mivel ilyen könnyű a szöveg manipulálása, egzotikusabb formátumú tartalmaknak is rendelkezniük kell egy szöveg alapú alternatívával. Néhány formátum, mint pl. a Flash újabb verziói beépítve tartalmazzák a szöveg elérhetőségét, ezért a szöveges tartalmak közvetlenül hozzáférhetőek anélkül, hogy szükség lenne egy alternatívára az egész médiumhoz.</p>

        <p id="cognitive_and_text_alternatives">Az egyetlen akadályoztatott csoport, amelyet a szöveges alternatívák nem feltétlenül támogatnak, a kognitív képességek hiányosságaival élő emberek. Ezeknek az embereknek a támogatásának az a nehézsége, hogy gyakran másfajta tartalmakat igényelnek a különböző médiumok azonos tartalmai helyett. Ez nem azt jelenti, hogy nem próbálkozhatsz. A szájtodon használt nyelvezet és az alkalmazott terminológia egyszerűsítése mindenkinek előnyére szolgál. Olyan szervezetk, mint a 
<a href="http://www.clearest.co.uk/">Plain Language Commission (Közérthető Nyelv Bizottsága)</a>
szót emelt annak érdekében, hogy a főbb társaságok “egyszerű nyelvezetet” használjanak a vásárlóik informálására olyan fontos kérdésekben, mint a jogi követelmények, feltételek és szabályozások. 
Rendelkezésre bocsátottak egy <a href="http://www.clearest.co.uk/?id=46">közérthető angol lexikont</a> olyan világos kifejezésekkel, amelyek hatékonyan segíthetik a kommunikációt a lehető legegyszerűbb nyelvezet használatával.</p>        
        
        <p>Hogyan hozhatsz létre szöveges alternatívákat a webhelyeden? Az első lépés, hogy azonosítsd azokat a dolgokat, amelyek még nem szövegesek. Csak a <abbr title="HyperText Markup Language">HTML</abbr>-ben már sok ilyen van. A képek a legszembetűnőbbek ezek közül. Példa egy kép hozzáférhető alkalmazására:</p>
        
<pre><code>&lt;p&gt; Michelangelo egyik érdekes mesterműve, az “Ádám teremtése”
&lt;img src=&quot;images/adam.jpg&quot; alt=&quot;A festmény egy férfit ábrázol, amint kinyújtja karját, hogy megérintse Isten feléje nyújtott kezét. Az idő múlása töredezetté tette.&quot; longdesc=&quot;adam.html&quot;&gt;.&lt;/p&gt;</code></pre> 
        
        <p>Ebben a példában a kép a tartalom egy beépített része. Az <code>alt</code> attribútum egy rövid leírást tartalmaz a képről azoknak az embereknek (vagy keresőmotoroknak) amelyek nem láthatják megfelelően a képet. A <code>longdesc</code> attribútum lehetővé teszi számodra, hogy egy olyan <abbr title="HyperText Markup Language">HTML</abbr> oldalra linkelj, amely a kép teljes leírását tartalmazza. Ezt általában csak olyan összetett ábrák leírására használják, amelyek tartalmai központi jelentőséggel bírnak. Emellett a támogatottsága is gyenge a böngészők részéről. A legtöbb esetben csak az <code>alt</code> attribútumot fogod használni.</p>
        
        <p>Mikor a képek nem a tartalom illusztrálására szolgálnak, mint pl. navigációhoz, vagy egyszerűen vizuális dekorációként, másképpen kell kezelned őket, mint a tartalomhoz kapcsolódó képeket. Azok a képeknek, amelyek régebben a gombok vagy az oldal navigációjának szebbé tételét szolgálták, rendelkezniük kellett egy  <code>alt</code> attribútummal, ami a szöveget a képhez illesztette. Az <code>alt</code> attribútum egy megoldás volt arra, hogy a számítógépnek lehetővé tegyük a képen belüli szöveg elolvasását (és egyúttal felolvassa egy képernyő-felolvasó használójának).</p>
        
        <p>Pusztán dekorációként funkcionáló képek használatakor, vagy azok alkalmazásakor, amelyek reklámoldalakra vezetnek, esetleg más egyéb kép esetében, ami egy felhasználót nem feltétlenül érdekelhet, vagy nem lép vele interakcióba, az <code>alt</code> attribútumot üresen kell hagyni. Ez nem az attribútum elhagyását jelenti, hanem az <code>alt=&quot;&quot;</code> megadását. Ez azért ajánlatos, mert a ravasz képernyő-felolvasók segítenek a felhasználóiknak megbirkózni a meglehetősen hozzáférhetetlen oldalakkal is. Ha egy kép nem rendelkezik <code>alt</code> attribútummal, főleg ha egy link része, a képernyő-felolvasók bemondják a felhasználóknak a kép <abbr title="universal resource locator">URL</abbr>-jét. Ezért ők kitalálhatják az URL-ből mi is lehet az a kép, pl., ha az valami hasonló névvel bír, mint az <code>add_to_cart.gif</code>. Következésképpen azokhoz a képekhez, amelyekről tudod, hogy a felhasználót nem fogják érdekelni az <code>alt=&quot;&quot;</code>-t kell megadni, így a képernyő-felolvasók nem olvassák fel <em>minden</em> kép <abbr title="Universal Resource Locator">URL</abbr>-jét, ami egyébként meglehetősen zavaró lehet a képernyő-felolvasót használóknak. </p>
        
        <p>A tartalmak nem minden formája olyan egyszerű, mint egy kép. Az összetettebb média, mint amilyen a Flash (Flash fájlok önmagukban is lehetnek teljes webszájtok), vagy a videók sokkal komplexebb leírást igényelnek. A Flash legfrissebb verziója lehetővé teszik számodra, hogy alternatív szöveget szolgáltass a részekhez a Flash videón belül úgy, mint a HTML-ben.</p>
        
        <h3 id="interaction">Az interakció meghatározása</h3>
        <p>Manapság a web legnagyobb része különböző technológiákat alkalmaz a <abbr title="HyperText Markup Language">HTML</abbr> mellett. Még az olyan alapvető dolog, mint a <abbr title="Cascading Style Sheets">CSS</abbr> is használható úgy, hogy egy oldalt, vagy interakciós lehetőséget kevésbé hozzáférhetővé tegyen. A helyes út a hozzáférhetőséghez a legegyszerűbb interakciókkal kezdődik, és az ezekből épített blokkokkal az összetettebb interakciókhoz.</p>

<p class="note">Vedd észre, hogy ennek a példának a lényege az, hogy felhívja a figyelmedet, azokra a különféle funkciókra, amelyekkel egy oldal elemei rendelkezhetnek. Hogy biztosítsd ezek hozzáférhetőségét, szemantikailag helyesnek kell lenniük, mind az alkalmazott HTML elemek, mind pedig a vizuális megjelenés tekintetében. Ha zavarosnak találod ezt, akkor olvasd el néhányszor a példát, és nézz meg néhány menüt valamint a weboldal más alkotóelemeit is, miközben nem csak azon gondolkodsz, hogy a megfelelő HTML-t használják-e, hanem azon is, hogy az elem kinézete és hatása sikeresen értelmezhető-e a funkciója szempontjából. Nem várhatod el egy weboldal látogatójától, hogy egy “add meg az e-mail címedet, hogy feliratkozz a hírlevelünkre” felirattal jelölt beviteli mezőt használjon keresésre, vagy nem számíthatsz arra, hogy egy látó felhasználó megtaláljon egy keresett tartalmat, ha az összes fejezetcím egyszerű szövegként van stílusozva (hasonlóképpen nem várhatod egy vak felhasználótól, hogy megtaláljon egy őt érdeklő tartalmat, ha az összes “fejezetcím” olyan mint a bekezdések, csak CSS-sel vagy <code>font</code> elemmel felnagyítva).</p>
        
        <p>Jó példa erre a menüpontokként általánosan használt fülek vizuális megjelenítés. A fülek megfelelőjét a témák szerint indexelt gyűrűs iratrendezőknél alkalmazzák. Ezt ültették át számítógépes környezetbe hogy a képernyőn egyetlen terület számára tegyék lehetővé az információk megjelenítését különböző témák szerint, amelyeket a megfelelő területhez kapcsolódó fülekkel jelölnek—jó példát láthatsz a fülekre a <a href="http://dev.opera.com/">dev.opera.com</a> főoldalán—nézd meg őket az oldal tetején. Eddig meglehetősen egyszerű az egész. A probléma a fülek létrehozására alkalmazott technológiában bújik meg—gyakran JavaScript segítségével hozzák őket létre.</p>
        
        <p>Amikor azonban a füleket az interakció összetettebb részeként kezdték használni, mint hogy a felhasználónak csak egyszerűbbé tegyék az információ kiválasztását, az eredeti szándék elveszett, de gyakran még mindig ugyanazt a kódot alkalmazzák a fülek megjelenítéséhez. A lenti példában a <abbr title="HyperText Markup Language">HTML</abbr> megmutatja, hogy néz ki egy információkat közlő fülekből álló menüsor:</p>

<pre><code>&lt;div class=&quot;menusor&quot;&gt;
  &lt;div class=&quot;hd&quot;&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href=&quot;#kutyak&quot; class=&quot;kivalasztott&quot;&gt;Kutyák&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#macskak&quot;&gt;Macskák&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#halak&quot;&gt;Halak&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div class=&quot;bd&quot;&gt;
    &lt;p id=&quot;kutyak&quot; class=&quot;kivalasztott&quot;&gt;Néhány információ a kutyákról. A kutya-fül az alapértelmezett.&lt;/p&gt;
    &lt;p id=&quot;macskak&quot;&gt;Néhány információ a macskákról.&lt;/p&gt;
    &lt;p id=&quot;halak&quot;&gt;Néhány információ a halakról.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    
    
    <p>Ebben a példában a <code>kivalasztott</code> osztályt használtuk annak meghatározására, hogy melyik fülön kell alkalmazni a “legelöl lévő fül” grafikát, pl. figyeld meg az “Articles” fület ennek az oldalnak a tetején, amelyen ezt a megoldást alkalmazták.</p>
        <p>Ez a felépítés kiválóan megfelel információs tartalomhoz. Ebben a példában a <code>kivalasztott</code> <code>class</code>-t használtuk, hogy megjelöljük melyik fül az aktív, vagyis azt, amelyik éppen nyitva van és láthatóvá teszi a hozzá tartozó információkat; a többinek zárva kell lennie (vagyis a bekezdéseiknek rejtve kell maradniuk) addig, amíg a nekik megfelelő hivatkozásokra nem kattintunk. A kutya-fül az alapértelmezetten aktív, ahogyan az 1. ábrán is látható.</p>

<img src="/articles/view/25-accessibility-basics/figure1.png" alt="tab control showing the default dogs tab active" />
<p class="comment">1. ábra: Egy egyszerű füles menüsor, amely a kutya-fülét, mint alapértelmezetten aktív menüpontot mutatja.</p>

<p>Ha egyszer egy másik linkre kattintunk (amint az a 2. ábrán látható), JavaScript-et használunk arra, hogy a <code>class=&quot;kivalasztott&quot;</code> elemet arra a hivatkozásra tegyük át, ezzel a megfelelő stílus lesz hozzárendelve a fülhöz és az, amelyik az előzőekben látható volt, most rejtve lesz.</p>

<img src="/articles/view/25-accessibility-basics/figure2.png" alt="tab control showing a new active tab after its link has been clicked on" />
<p class="comment">2. ábra: Most egy másik hivatkozásra kattintottunk, az ennek megfelelő fül lesz aktív.</p>

<p>Találhatsz majd tényleg működő példákat ilyen típusú funkciókra a későbbi JavaScript-tel foglalkozó fejezetekben, amelyeket nemsokára közlünk.</p>

<p>Egyre inkább elterjed a fülek használata arra, hogy a felhasználónak lehetővé tegyék a különböző típusú keresések közötti választást. Ebben az esetben a koncepció kezd elromlani, ha megpróbálod újra felhasználni az előző példában bemutatott kód stílusát:</p>
        
<pre><code>&lt;div class=&quot;menusor&quot;&gt;
  &lt;div class=&quot;hd&quot;&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href=&quot;#kutyak&quot; class=&quot;kivalasztott&quot;&gt;Kutyák&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#macskak&quot;&gt;Macskák&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#halak&quot;&gt;Halak&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div class=&quot;bd&quot;&gt;
    &lt;form id=&quot;kutyak&quot; class=&quot;kivalasztott&quot; action=&quot;search.html&quot; method=&quot;GET&quot;&gt;&lt;div&gt;&lt;label for=&quot;kutyakeres&quot;&gt;&lt;input type=&quot;text&quot; name=&quot;kutyakeres&quot; id=&quot;kutyakeres&quot;&gt;&lt;input type=&quot;submit&quot; value=&quot;Kutyák keresése&quot;&gt;&lt;/div&gt;&lt;/form&gt;
    &lt;form id=&quot;macskak&quot; action=&quot;search.html&quot; method=&quot;GET&quot;&gt;&lt;div&gt;&lt;label for=&quot;macskakeres&quot;&gt;&lt;input type=&quot;text&quot; name=&quot;macskakeres&quot; id=&quot;macskakeres&quot;&gt;&lt;input type=&quot;submit&quot; value=&quot;Macskák keresése&quot;&gt;&lt;/div&gt;&lt;/form&gt;
    &lt;form id=&quot;halak&quot; action=&quot;search.html&quot; method=&quot;GET&quot;&gt;&lt;div&gt;&lt;label for=&quot;halkeres&quot;&gt;&lt;input type=&quot;text&quot; name=&quot;halkeres&quot; id=&quot;halkeres&quot;&gt;&lt;input type=&quot;submit&quot; value=&quot;Halak keresése&quot;&gt;&lt;/div&gt;&lt;/form&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        
        <p>Ugyanannak a kódstruktúrának az alkalmazása már értelmetlen—ebben az esetben ugyanazokat az űrlapelemeket ismétled újra és újra azért, hogy illeszkedjenek a tartalom helyettesítésének koncepciójába, ami a kód pazarlása. A vizuális gondolkodás helyett fontos, hogy magára az interakcióra koncentráljunk. Ebben a példában ahelyett, hogy új információt válasszunk ki a fülek megtekintéséhez, a felhasználóknak a keresővel történő interakcióját kell megváltoztatni. Gyakorlatilag az egyetlen dolog, amit a fülnek meg kell csinálni, az annak kiválasztása, milyen fajta állatot is keres a felhasználó. Ha ezt átülteted a gyakorlatba, egy sokkal jobb interakciós lehetőséget készíthetsz a szájt minden felhasználója számára, egy tisztább, könnyebben karbantartható kóddal:</p>
            
<pre><code>&lt;form action=&quot;keres.html&quot; method=&quot;GET&quot;&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;A keresés halmaza:&lt;/legend&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;label for=&quot;kutyak&quot;&gt;Kutyák&lt;/label&gt;&lt;input id=&quot;kutyak&quot; type=&quot;radio&quot; name=&quot;allat&quot; value=&quot;kutyak&quot; checked&gt;&lt;/li&gt;
        &lt;li&gt;&lt;label for=&quot;macskak&quot;&gt;Macskák&lt;/label&gt;&lt;input id=&quot;macskak&quot; type=&quot;radio&quot; name=&quot;allat&quot; value=&quot;macskak&quot;&gt;&lt;/li&gt;
        &lt;li&gt;&lt;label for=&quot;halak&quot;&gt;Halak&lt;/label&gt;&lt;input id=&quot;halak&quot; type=&quot;radio&quot; name=&quot;allat&quot; value=&quot;halak&quot;&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/fieldset&gt;
  &lt;input type=&quot;text&quot; id=&quot;keresomezo&quot; name=&quot;keres&quot;&gt;
  &lt;input type=&quot;submit&quot; value=&quot;Keres&quot;&gt;
&lt;/form&gt;</code></pre>
        
        <p>Ha először az interakciós lehetőséget készíted el, akkor a kód tisztább lesz és a szájt minden felhasználója a lehető legjobb élményben részesül. Ha megpróbáljuk a vizuális megközelítést kiterjeszteni, akkor hamar tönkretesszük az interakciót és készítünk néhány az előző példa feltételezésén alapuló, borzalmas kódot. Ha <abbr title="Asyncronous JavaScript And XML">AJAX</abbr>-ot alkalmaztunk volna, hogy beszúrjuk a kódot, ahelyett, hogy az egész oldalt neki szenteltük volna, a helyzet még rosszabb lett volna. Akkor a JavaScript nélküli felhasználóknak egy teljesen új oldalt kellett volna letölteniük, hogy megkapják a kereső űrlapot a macskákhoz vagy a halakhoz. Ha először az alapvető interakcióra gondolsz (és nem a látványra), egyszerűsítheted a problémát. Így még mindig megtarthatjuk a füles megjelenítést (jóllehet egy kis stílusozással és scripttel),  csak egyetlen űrlapot használva az összes kereséshez.</p>
        
        <p>Ez lényeges annak megértéséhez, hogyan készítsünk hozzáférhető interakciós megoldásokat. Az egyik legnagyszerűbb dolog a HTML-ben, hogy annak a munkának, hogy kitaláljuk, hogyan tegyük az interakciót a HTML-ben hozzáférhetővé, a nehezebb része már el van végezve. Amíg nem arra használod a HTML fölötti technikákat, hogy elrontsd a megfelelő társítást, a legtöbb dolgot működőképessé teheted a legtöbb ember számára túl sok erőfeszítés nélkül.</p>

        <h2 id="accessibilitystandards">Szabványok a hozzáférhetőséghez</h2>
        <p>Ebben a fejezetben újratárgyalok néhány meglévő szabványt és alapszabályt, amelyek a webes hozzáférhetőség meghatározását célozzák, és segítenek a webfejlesztőknek hozzáférhető szájtok készítésében. Ezeknek a módszereknek a legtöbbje tartalmaz valamilyen ellenőrző listát, így a fejlesztők ellenőrizhetik, hogy a webhelyeik mennyire felelnek meg a különböző hozzáférhetőségi kritériumoknak.</p>
        
        <h3 id="WCAG1">A Webes Tartalom Hozzáférhetőségének Irányelvei 1.0</h3>
        <p>A <abbr title="World Wide Web Consortium">W3C</abbr> az egyike az elsődlegesen a szabványokkal foglalkozó testületeknek az interneten. Webes Hozzáférhetőségi Kezdeményezésük (Web Accessibility Initiative - WAI) adta ki a webszájtok hozzáférhetővé tételéről szóló irányelvek első verzióját 1999 májusában. A Webes Tartalom Hozzáférhetőségének Irányelvei (Web Content Accessibility Guidlines - WCAG) a webes hozzáférhetőség legelterjedtebb szabványai. A <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr> használata számos kormányzói testület által szorgalmazott, illetve megkövetelt, beleértve az <abbr title="European Union">EU</abbr>-t és az olasz kormányt is.</p>
        
        <p>A <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr> 14 Irányelvből áll, amelyek megpróbálják összefoglalni azokat a célokat, amelyek elérése szükséges egy hozzáférhető weboldal létrehozásához. Minden irányelven belül számos pont található, amelyek a dokumentum lényegi részét képezik. Amíg az irányelvek megmagyarázzák a szerzők elgondolásait, a pontok azok, amelyeknek a validálás során meg kell felelni. Minden egyes pont 1-től 3-ig van rangsorolva fontossága szerint. Azért, hogy követhesd a <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr>-t minden 1 prioritású pontot teljesítened kell. Az összes 1 fontosságú pont betartásával egy “A” szintű besorolást kapsz. Ha az összes 2 prioritású pontot <em>is</em> teljesíted, “AA” szintű besorolásod lesz. Az összes 1, 2 és 3 fontosságú pontot teljesítened kell az “AAA” szintű besoroláshoz, ami a legmagasabb minősítés.</p>
        
        <p>A valóságban a <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr>
egy kicsit elavult. A legtöbb vállalat kezdetnek megszerzi az “A” vagy “AA” minősítést, majd más irányelvekhez igazodik, mint pl. az <abbr title="Royal National Institute for the Blind">RNIB</abbr> Látáshoz való Jog alapelvei. A <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr> egy jó kiindulási pont, de emellett néhány újabb szabványt is kell keresni, főleg akkor, ha sok JavaScriptet használsz, vagy olyan más technológiákat, amelyek 1999 után születtek, mikor a <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr>-t már kiadták.</p>
        
        <p>Egy másik fontos dolog, amit érdemes megjegyezni a <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr>-vel kapcsolatban az, hogy eredetileg egy 3 részből álló dokumentum egyik részének tervezték. A másik a “Kliens Eszközökkel” foglalkozik, a böngészőket írja le (mint pl. az Opera) és más további technológiákat, amelyekre az embereknek a web használatához szükségük lehet (pl. képernyő-felolvasók). A harmadik rész a fejlesztőeszközöket tárgyalja, mint amilyen a Dreamweaver vagy a tartalomkezelő rendszerek—és célja, hogy megpróbálja elérni, hogy ezek az eszközök az oldalak hozzáférhetőbbé tételének nagyobb részét végezzék el. Sajnos ez az elképzelés nem valósult meg, és az egyetlen szabvány a háromból, amely széles körben elterjedt, a <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr> lett. Ez azt jelenti, hogy gyakran a <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr> kliens eszközökkel szembeni követelményei nem valósulnak meg, és a fejlesztő eszközök az oldalak hozzáférhetővé tételének terhéből csak keveset vesznek le a válladról. Ez persze nem azt jelenti, hogy nem kell használnod a 
<abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr>-t; csupán azt, hogy a hozzáférhetőségnek csak kis szeletét fedi le és nem egy átfogó megoldás.</p>
            
        <h3 id="WCAG2">A Webes Tartalom Hozzáférhetőségének Irányelvei 2.0</h3>
        <p>A <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr> kiadása óta, a <abbr title="World Wide Web Consortium">W3C</abbr> a <abbr title="The Web Content Accessiblity Guidelines version 2.0">WCAG 2.0</abbr>-n dolgozik. A szabvány ezen frissített verziója a cikk írásakor még vázlatos formában létezik csak. A <abbr title="World Wide Web Consortium">W3C</abbr> fejlesztési munkálataitól függően feltehetően 2009 elejére már publikált szabvány lesz.</p>
        
        <p>A <abbr title="The Web Content Accessiblity Guidelines version 2.0">WCAG 2.0</abbr> valamelyest más abban, hogy kevésbé fektet hangsúlyt a technológiára <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr>-hez képest, vagyis HTML-re, CSS-re, Flash-re (stb.) is alkalmazható. A <abbr title="The Web Content Accessiblity Guidelines version 2.0">WCAG 2.0</abbr> a hozzáférhetőség 4 féle szabályán alapul. Ezek a következők:</p>
        
        <dl>
            <dt>Észlelhető</dt>
            <dd>Az emberek azokon a médiumokon keresztül érhetik el a tartalmat, amelyek a rendelkezésükre állnak. Például azok akik nem láthatják a tartalmat, hallaniuk kell azt.</dd>
            <dt>Működtethető</dt>
            <dd>Az emberek képesek interakcióba lépni a webes alkalmazással vagy a tartalommal.</dd>
            <dt>Érthető</dt>
            <dd>A tartalmat és a felhasználói felületet is megértik azok az emberek, akik használják ezeket.
			</dd>
            <dt>Robusztus</dt>
            <dd>Minden egyes felkínált megoldásnak széles körben elérhetőnek kell lenni különböző platformokon és rendszereken is. Ez megakadályozza az embereket abban, hogy olyasmit fejlesszenek, amit a felhasználók legnagyobb része nem tud használni különböző hardveres/szoftveres megszorítások miatt, vagy azért, mert megfizethetetlenül drága.</dd>
        </dl>
        
        <p>Fontos megjegyezni, hogy nem várják el a szájtoktól, hogy mindezeket a követelményeket teljesítsék. A technológiának és a felhasználónak is át kell vállalni ebből valamennyit. Például elvárt dolog, hogy egy képernyő-felolvasó elolvassa az oldalakat azoknak, akiknek erre szüksége van, ahelyett, hogy minden egyes webszájt kínáljon egy akusztikus verziót a tartalmához. Azonban a webhelyektől megkövetelik, hogy olyan oldalakat biztosítsanak, amelyek elolvashatók az általános képernyő-felolvasó technológiával, hogy ezt lehetővé tegyék. Ez egy fontos különbség, mivel lényeges eltérés van egy “hozzáférést segítő szerkentyűvel” rendelkező webszájt (mint pl. egy gomb, ami megnöveli a fontméretet) és egy olyan weboldal között, amely sok különféle helyzetben is működni fog (pl. eltérő böngészőkben és eszközökön, amelyeket lehetetlen lenne előre megjósolni).
		</p>
    
        <p>A <abbr title="The Web Content Accessiblity Guidelines version 2.0">WCAG 2.0</abbr> különbözik a <abbr title="The Web Content Accessiblity Guidelines version 1.0">WCAG 1.0</abbr>-től a technológia megközelítésében is. Mivel a szabvány kevésbé technológia orientált és inkább a hozzáférhetőségi koncepciókkal, mint a konkrét technikai részletekkel foglalkozik, ezért fontos figyelmet szentelni a szabványt kísérő többi dokumentumnak is. A <abbr title="The Web Content Accessiblity Guidelines version 2.0">WCAG 2.0</abbr>
 <a href="http://www.w3.org/TR/WCAG20/">“szabvány” dokumentuma</a> segít a lényeg megértésében, de a 
<a href="http://www.w3.org/TR/WCAG20-TECHS/">“technikai” dokumentum</a> konkrét, alkalmazható információkat is kínál a fejlesztőknek. Ez “általános” technikai megoldásokra (nem egyértelmű technológiai kérdésekre) és az önálló <abbr title="World Wide Web Consortium">W3C</abbr> technológiákhoz tartozó specifikációkra van felosztva.
A <abbr title="World Wide Web Consortium">W3C</abbr> nem készített dokumentumokat jogdíjas technológiákra vonatkozóan, ezért az olyanokhoz, mint a Flash vagy a Silverlight más forrásokból kell megfelelő megoldásokat találnod.</p>
        
        <h3 id="section508">Az 508. Szakasz</h3>
        
        <p><a href="http://section508.gov/">Az 508. Szakasz</a> egy kiegészítés az 1973-as Amerikai Munkaerő Rehabilitációs Törvényhez (American Workforce Rehabilitation Act). Az 508. Szakasz verziója, amelyet 1998-ban törvénybe iktattak, meghatározott egy eljárási módot, amelyet be kell tartania az amerikai szövetségi kormánynak működése során. Ez azt jelenti, hogy minden olyan kormányzati szervnek az USA-ban, amelyet állami pénzből alapítottak, követnie kell az 508. Szakaszban foglalt eljárási módokat és arányelveket. Ezek az irányelvek lefedik mind a webes hozzáférhetőséget, mind pedig más hozzáférhetőséggel kapcsolatos kérdéseket a számítógépekkel és az elektronikus kommunikációval kapcsolatban. Bármit is hallottál, nincs szövetségi törvény, amely előírná az 508. Szakasz alkalmazását bárkire a fentebb említett szervezeteken kívül. Ennek ellenére néhány amerikai állam és vállalat használja az 508. Szakaszt, hogy definiálja a “hozzáférhetőséget” a saját működési eljárásaira vonatkozóan.</p>
        
        <p>Az 508. Szakasz egy része, amely a webes hozzáférhetőséget tárgyalja, a <a href="http://www.access-board.gov/sec508/standards.htm#Subpart_b">B Alszakasz 1194.22-es paragrafusa</a>. A 1194.22-es paragrafus 16 pontra van felosztva, amelyeket <em>a</em>-<em>p</em>-vel jelölnek. Az első 11 pont (<em>a</em>-tól <em>k</em>-ig) hivatalosan egyenértékű a <abbr title="The Web Content Accessibility Guidelines version 1.0">WCAG 1.0</abbr> egyes részeivel. Ezek a pontok és megfelelőik a <abbr title="The Web Content Accessibility Guidelines version 1.0">WCAG 1.0</abbr>-ben egy referencia táblázatban vannak felsorolva az 508. Szakasz dokumentumában. Az 508. Szakasz többi pontjának a <abbr title="The Web Content Accessibility Guidelines version 2.0">WCAG 2.0</abbr>-nek kell megfelelnie egy kivétellel. Az <em>m</em> kitétel az 508. Szakasz <a href="http://www.access-board.gov/sec508/standards.htm#Subpart_b">B Alszakasz 1194.21-es paragrafusára</a> hivatkozik. Ez a pont részben megegyezik a <abbr title="The Web Content Accessibility Guidelines version 2.0">WCAG 2.0</abbr> <q>Robusztusság</q> alapelvével.</p>        
        <p>Ezen cikk megírásakor már folyamatba volt egy kutatás <a href="http://webaim.org/teitac/wiki/EWG%7EDraft_Jan_7.php">az 508. Szakasz újabb verziójának</a> megtalálására, amelyet a Távközlési Elektronikai és Információs Technológiai Tanácsadó Testület (Telecommunications and Electronic and Information Technology Advisory Committee - TEITAC) indított. A TEITAC 2008 áprilisában mutatta be az 508. Szakaszhoz kapcsolódó megállapításait a kiértékelő bizottságnak.</p>
        
        <h3 id="otherstandards">Egyéb szabványok</h3>
        
        <p>Egy másik fontos, a <abbr title="World Wide Web Consortium">W3C</abbr> által kidolgozott szabvány a  <a href="http://www.w3.org/WAI/intro/aria">WAI-ARIA</a>. Ez a Webes Hozzáférhetőségi Kezdeményezés Hozzáférhető Gazdag Internetes Alkalmazások nevű ajánlása (Web Accessibility Initiative—Accessible Rich
Internet Applications). Olyan dokumentumok összessége, amelyek meghatározzák, hogyan tehetők hozzáférhetővé olyan összetett webes alkalmazások, amelyek olyan technológiákat használnak, mint a <abbr title="HyperText Markup Language">HTML</abbr>, a JavaScript és az AJAX. Ezt a szabványt hivatalosan is támogatja a legtöbb népszerű böngésző elkövetkező/jelenlegi verziója a piacon: Az Opera 9.5, az Internet Explorer 8 és a Firefox 3.</p>
        
        <p>Számos más szabvány létezik még a webes hozzáférhetőségre vonatkozóan, túl sok ahhoz, hogy itt nagyobb részletességgel tárgyaljuk őket. A <abbr title="World Wide Web Consortium">W3C</abbr> fenntart egy nagyszerű <a href="http://www.w3.org/WAI/Policy/">listát a webes hozzáférhetőséggel foglalkozó nemzetközi irányelvekről</a>—ez egy remek forrás, hogy megtaláld a helyi kormányod törvényeire vonatkozó alapelvek dokumentumait.</p>

        <h2 id="summary">Összefoglaló</h2>
        <p>A hozzáférhetőség fontos kérdés mind gazdasági, mind társadalmi okokból. Ez nem egy jellemző tulajdonsága a webhelynek, hanem annak a minőségnek a mércéje, amellyel épült. Ha szem előtt tartod a szájtod közönségét, amikor építed azt (és azt megelőzően), akkor sokkal hozzáférhetőbb oldalakat fogsz létrehozni ennek minden előnyével. Sok jól ismert irányelv létezik, amelyek a segítségedre lehetnek—ezek követésével biztosíthatod, hogy amit létrehoztál, összhangban van azokkal a szakértői kritériumokkal, amelyek az oldalaidat hozzáférhetővé teszik.</p>
        
         <h2 id="exercises">Tesztkérdések</h2>
        <ul>
            <li>Nevezz meg 3 okot, miért fontos hozzáférhető webhelyeket készíteni.</li>
            <li>Keress az interneten az országod törvényei közül a hozzáférhetőséggel foglalkozókat és készíts listát azokról, amelyek szerinted a webhelyeidre vonatkoznak. Legyél biztos abban, hogy követed őket, ha azt kérik, hogy olyan webes szabványokat használj, mint a <abbr title="The Web Content Accessiblity Guidelines">WCAG</abbr>, vagy az 508. Szakasz.</li>
            <li>Magyarázd el, mennyire fontos a hozzáférhetőség a keresőoptimalizálás szempontjából.</li>
            <li>Készíts egy példát egy alternatív tartalom hozzáférhető használatára olyan saját tartalom felhasználásával, mint pl. egy fénykép.</li>
            <li>Keress az interneten megoldásokat arra, hogyan tehetsz hozzáférhetővé olyan technológiákat, mint a Flash vagy a Silverlight, és írj egy összehasonlítást ezek és a HTML hozzáférhetővé tételéről.</li>
            <li>Magyarázd el, hogyan terveznél meg egy hozzáférhető interakciós lehetőséget az oldaladra. 
			Írd le lépésről lépésre, hogyan csinálnál egy fa-nézetű vezérlő szerkezetet (nem kell ténylegesen megcsinálnod).</li>
        </ul>


<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/24-validating-your-html/" rev="prev" title="link to the previous article in the series">Előző leírás—A HTML validálása</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/26-accessibility-testing/" rel="next" title="link to the next article in the series">Következő leírás—A hozzáférhetőség tesztelése</a></li>
<li><a href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom" rel="index">Tartalomjegyzék</a></li>
</ul>
        
        <h2>A szerzőről</h2>


<img src="/articles/view/25-accessibility-basics/tomcroucher.jpg" class="right" alt="a szerző Tom Hughes-Croucher" />

<p>Tom Hughes-Croucher azóta dolgozik az internetes iparban, mióta először munkába állt. Számos webes technológiához kapcsolódó szabvány létrehozásában működött közre olyan szervezeteknél, mint a World Wide Web Consortium (W3C) és a British Standards Institute (BSI). Nemrég még a digitális-zeneiparban dolgozott zeneszolgáltató megoldásokat kínálva olyan jól ismert brit cégeknek, mint a Tesco, a Three távközlési vállalat és a Channel 4.</p>

<p>Tom most a Yahoo!-nál dolgozik mint a technikai megoldások elkötelezett híve. A front-end webes technológiára és a REST-re épülő webes szolgáltatásokra specializálódott, amelynek legjobb alkalmazási módjait hirdeti, ahol csak tudja. Ezelőtt az European Frontpages-t gondozta, sok millió európai látogatót szolgálva ki havonta—már nem találja olyan ijesztőnek a skálázást sem. </p>
