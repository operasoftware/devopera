Title: Egy site keretének felépítése
----
Date: 2009-08-17 08:47:18
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/8-a-szinek-elmelete/" title="hivatkozás a sorozat előző leírására">Előző leírás — A színek elmélete</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/10-szinsemak-es-designtervek/">Következő leírás — Színsémák és designtervek</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Minden webdesignernek ismernie kellene és meg kellene értenie a websiteok paramétereit, mielőtt egyáltalán belekezdene a kódolásba. Ebben a leírásban meg fogod ismerni az üzleti weboldalak készítésének alapjait. Bár ezek az információk elsősorban a mások számára készített weblapokra vonatkoznak, de felhasználhatod akkor is, amikor a saját oldaladat tervezed meg. Ez a lépés általában azonnal az <a href="http://dev.opera.com/articles/view/6-informacios-architektura-egy-website-t/">információs architektúra</a> után következik, össze kell gyűjtened azokat az információkat, hogy mit szeretnének tenni a kliensek a weblapra, hogyan képzelik el a struktúráját, milyen márkajegyeket kell felhasználni, majd ezeknek az információknak az alapján készíthetsz egy vizuális designtervet, amelyet már meg tudsz mutatni a kliensnek még mielőtt elkészítenéd a grafikákat és a használni kívánt színsémákat. Egészen pontosan az alábbiakról fogunk beszélni:</p>

<ul>
  <li>Bár a színek és a design nagyon fontosak, először tudnod kell, hogy a kliens mit szeretne elérni a website-tal. Ennek az információnak aztán tükröződnie kell a site megjelenésében is.</li>
  <li>Ezért szükséged van egy ellenőrző listára, amelyen végig kell futni a design elkészítése előtt.</li>
  <li>Meg kell ismerned azt is, hogy korábban milyen marketing tevékenységek voltak a cégnél, beleértve a márkajegyeket is. Ez később ugyancsak hatással lehet a website designjára.</li>
  <li>Az klienstől összegyűjtött információk alapján elkészítheted a website első vizuális designtervét, amelyet megmutathatsz a kliensnek, így megalapozhatod a további grafikai- és tartalomterveket.</li>
</ul>

<p>Ebben a cikkben a következő témákról lesz szó:</p>

<ul>
  <li><a href="#mit">Mit kell tudnod?</a></li>
  <li><a href="#elsolepesek">Az első lépések</a>
<ul>
  <li><a href="#peldaoldal">Az elképzelt példa oldal</a></li>
  <li><a href="#alogo">A logó</a></li>
  <li><a href="#elrendezes">Az elrendezés</a></li>
  <li><a href="#reklam">A reklámozásról az oldalakon</a></li>
  <li><a href="#ellenorzes">Az elrendezés ellenőrzése validátorral és a klienssel</a></li>
</ul></li>
  <li><a href="#osszefoglalo">Összefoglaló</a></li>
  <li><a href="#olvasnivalo">Olvasnivaló</a></li>
  <li><a href="#tesztkerdesek">Tesztkérdések</a></li>
</ul>

<h2 id="mit">Mit kell tudnod?</h2>

<p>Általában mielőtt döntenének egy website designjáról, a fejlesztőnek szüksége van valamilyen tervre azzal kapcsolatban, hogy az adott website-tal mit szeretnének elérni. Bár a színek és a grafikák is fontosak, előbb szükség van egy tervre a költségekről, a megcélzott piacról, a tervezett célokról valamint a feladatokhoz szükséges erőforrásokról. Vajon a site csak információt fog szolgáltatni a felhasználóknak, vagy valójában az a célja, hogy termékeket és szolgáltatásokat adjon el? Fog később növekedni a website, vagy csak rövidtávon akarják majd használni egy kisebb piaci szegmens elérésére? (Mint például a politikai kampányoldalak, vagy egy olyan oldal, amelyik csak be akar lépni az aktuális trendbe.) Lesz-e az oldalon blog, információs oldal, képgaléria, e-mail kapcsolati űrlap? Mire lehet még szükség rajta? Össze lehet majd hasonlítani az oldalt a konkurenciájéval?</p>

<p>Végül, de nem utolsósorban tudnunk kell azt is, hogy van-e a cégnek márkajelzése és marketinges iránymutatója. Ha nincs, akkor erre különösen oda kell figyelni még a design tervezése előtt. A logó, az árucikkek vagy a szolgáltatások márkája egy bizonyos piacra, valamint ennek a piacnak az elérése túlmutathat a képességeiden. Ha még soha nem próbáltad ezt korábban, akkor jobb, ha bevonsz egy szakértőt, hogy jó irányba indulhass el. Másrészt, ha a cégnek már vannak ilyen irányú útmutatásai, akkor nagyon fontos, hogy ezeket szigorúan kövesd, hogy a weboldal jól illeszkedjen a többi marketinges anyag mellé.</p>

<p>Mivel ezeknek az információknak a nagy részét még azelőtt meg lehet szerezni, hogy a tervezett oldal eljutna a designerhez, a válaszok sokat segíthetnek abban, hogy eldönthesd, milyen típusú designra lesz szükség, milyen színsémát és milyen grafikákat használj az oldalon. De egy dolgot mindenképpen ki lehet jelenteni az esetek többségében: a website hozzáférhető és használható kell maradjon, emiatt a kód és a navigáció különleges figyelmet és magasabb prioritást igényel. A hozzáférhetőségről még többet is olvashatsz később ezen a kurzuson, vagy részletesebben is olvashatsz a használhatóságról <a href="http://www.useit.com/">Jakob Nielsen</a> oldalán.</p>

<p>A cél az, hogy az oldal a HTML és a CSS használatával a kódoláshoz és a designhoz továbbra is egyszerű maradjon. Próbáld meg elkerülni a Flasht, leszámítva az oldal egyes elemeit, ahol esetleg hasznos lehet (sokat tettek már azért, hogy <a href="http://www.sitepoint.com/article/accessible-flash-parts-1-2">a Flash is hozzáférhető legyen</a>, és bizonyos feladatokhoz nagyon jól illeszkedik, mint például a videó), valamint gondolkodj el azon, hogy hol lesz szükséged JavaScriptre vagy más technikai dologra. Így egyszerűbb lesz az oldal tervezése a designer és a programozó számára (főleg, ha a designer egyben a programozó is), és sokkal inkább kompatibilisebb lesz a különböző böngészők között.</p>

<h2 id="elsolepesek">Az első lépések</h2>

<p>Hogy jobban megértsd ezeket a dolgokat, készíteni fogunk egy egyszerű üzleti oldalt egy olyan útmutatást követve, amelyet én a saját és a másoknak készített weblapjaim tervezésekor szoktam használni. Ez a feladatlista tartalmaz üzleti vonatkozású pontokat és design témákat is. Az egyszerűség kedvéért egy olyan elképzelt üzleti vállalkozást fogunk használni, amelyik már készített korábban marketing anyagokat. A nyomtatott anyagaikban már szerepel logó és vannak márkajegyeik is. Ha ilyenek még nincsenek, akkor ezeket még azelőtt meg kell tervezned, mielőtt nekifognál a design elkészítéséhez.</p>

<p>Mint webdesigner, egy website designjának elkészítése előtt az alábbi információkat szeretném tudni az üzletről. Szeretnék készíteni egy listát mindarról, amit be akarok venni a website designjába, így később már nem lesz szükség radikális változtatásokra. Ez már nem egy elképzelt szituáció, az alábbi pontokat mindenképpen érdemes átbeszélned a cég tulajdonosaival vagy a döntéshozókkal, hogy biztos lehess benne, hogy a te elképzelésed megfelel az ő elképzelésüknek is.</p>

<ol>

<li>
<strong>A website neve:</strong> tükrözi ez a név a vállalatot és az online törekvéseit? A mi esetünkben a website neve egyben a cég neve is, ami „Wiki Whatevers”. A cégnek esetleg egy <a href="http://www.powerhomebiz.com/vol112/tagline.htm">szlogenre</a> is szüksége lehet, ha még nincs nekik. A szlogen aztán a cég nevével és a logóval együtt felkerül a weblapra.
</li>

<li>
<strong>Logó és márkajegyek:</strong> össze szeretném gyűjteni az összes olyan nyomtatott anyagot, amelyet korábban készítettek, logókat, brosúrákat, stb. Így készíthetek egy fájlt, amelyben hasznos információkat, címeket, telefonszámokat tárolhatok. Ezeknek a segítségével jobban megérhetem a cég „hangját”, stílusát, márkajegyeit. Ha korábban semmi ilyesmivel nem foglalkoztak még, akkor valószínűleg megbízok egy logókészítő csapatot, hogy készítsenek egy logót (mivel én nem vagyok logó designer, így továbbadom a munkát - ennek az árát ilyen esetben bele lehet építeni a költségekbe).
</li>

<li>
<strong>A website domainneve:</strong> a website neve mellett tudni szeretném, hogy van-e már jelenleg valamilyen domainneve a cégnek. A domainnév a website címe, amellyel azonosíthatóvá válik, ezt a címet kell a felhasználóknak beírniuk a böngészők címsorába, ha meg akarják nyitni a weblapot. Domainneveket használunk akkor is, amikor különböző weblapokat és elemeket linkelünk a weblapokon. A domainnév egy vagy több <a href="http://www.ipowerweb.com/hostingdictionary/">felső szintű domain regisztrációt</a> is tartalmazhat, mint például „.com”, „.hu” vagy „.org”, stb. Bár a domainnév kiválasztása nem a designer felelőssége, nem árt tudni arról, hogy választottak-e már egy domainnevet és regisztrálták-e. Egyes esetekben át kellett írjuk a domain nevet, mert később kiderült, hogy már valaki lefoglalta, és ez végül többletköltséget okozott. A problémát el lehet kerülni, ha a domainnevet idejében lefoglaljuk.
</li>

<li>
<strong>Konkurenciakutatás:</strong> mindig jó tudni arról, hogy mi van a konkurencia weboldalán a grafika és a tartalom szempontjából, hogy az új weblap is legalább olyan jó vagy még jobb legyen, amikor elindul a piacon.
</li>

<li>
<strong>Információs architektúra:</strong> szükség van az oldalon webáruházra vagy blogra? Milyen elképzelései vannak a megrendelőnek a website fejlesztéséről? Milyen struktúrában kapcsolódjanak egymáshoz a lapok? Ezek az elemek fontosak, mivel be kell építened a designba és a navigációba is. Tudnod kell, hogy a site milyen irányban fog fejlődni a jövőben, mivel ez befolyásolja a jelenlegi tervet is.
</li>

<li>
<strong>A site tartalma:</strong> elkészült már valamilyen tartalom az oldalra? Ha igen, akkor valószínűleg azonnal hozzáférést szeretnél kapni hozzá, hogy elkészíthesd a navigációt, a designt és az elrendezést. A tartalom kategorizálása a legjobb módszer a navigáció kialakításához. A tartalom segíthet kialakítani a site megjelenését is, így jó ötlet lehet egy időre elhalasztani a design tervezését, ha még nincs tartalom az oldalra. Győződj meg róla, hogy a tartalom még mindig releváns és készíts tervet a frissítésre, mivel a site tartalma az, ami miatt a látogatók leginkább visszatérnek majd az oldalra.
</li>

<li>
<strong>Webes szolgáltatók keresése:</strong> bár lehetséges, hogy a kliensnek már van ötlete a webszolgáltatóra, az nem biztos, hogy neked is meg fog felelni, mivel a szolgáltatók technikai támogatása nem egyezik meg minden esetben. A webszolgáltatás is csak egy üzlet, ami elsősorban a websiteok hostolásával foglalkozik, de egyesek adnak adatbázis támogatást is, amire szükséged lehet például egy blog esetében vagy az információk és termékek katalogizálására egy webáruház fejlesztésekor. Más szolgáltatók korlátozzák a látogatók számát az oldalra, ami különösen problémás lehet, ha a website valamiért hirtelen népszerű lesz. Ha keresni akarsz egy webszolgáltatót, és kíváncsi vagy rá, hogy miben különböznek egymástól, látogass el a Web Host Database (<a href="http://whdb.com/">WhDb</a>) oldalára. Győződj meg arról is, hogy a kliensnek van-e tárhelye a szolgáltatónál, mielőtt nekilátsz a design elkészítésének, hogy láthasd a határokat.
</li>

<li>
<strong>Irányított távozás:</strong> ez azt jelenti, hogy megpróbálhatod az ügyféllel együtt befolyásolni azt, hogy hogyan hagyják el a felhasználók a websiteot. Előbb-utóbb minden látogató elhagyja az oldalad, hát akkor miért ne próbálnád meg irányítani ezt és nyerni belőle, például reklámokkal és linkcserével? Ha már most készítesz erre terveket, az értékesebbé teszi a honlapot, és pénzügyileg is megtérül később.
</li>

<li>
<strong>Határidők:</strong> döntsd el már most, hogy a website mikor fog „beindulni”. Általában egy ilyen kis projektre egy nyolc hetes fejlesztési idő elég szokott lenni, feltéve hogy az ügyfélnél már rendelkezésre áll a tartalom, alkalmasnak találják a színeket, az elrendezést és a designtervet, amit mutatsz nekik, és nincs szükség bonyolult programozásra sem.
</li>
</ol>

<p>Miután ezeken az alapdolgokon túl vagy, ülj le nyugodtan, olvasd el a tartalmakat, amelyek már a rendelkezésedre állnak, tervezd meg a navigációt és döntsd el, hogyan fogod optimalizálni az oldalt a keresőmotorok szempontjából. Ha nem ismered különösebben a SEO-t (Search Engine Optimization, keresőoptimalizálás), akkor beszélj egy SEO szakértővel is arról, hogy hogyan használhatod fel az oldal tartalmát arra, hogy nagyobb forgalmad legyen, és <a href="http://www.sitepoint.com/article/ultimate-seo-checklist">hogyan használd a potenciális keresőszavakat a tartalomban</a>, a fejlécekben és a címekben.</p>

<p>Ahogy egy új házban sem veszel addig szőnyeget meg kanapét, amíg a tervező nem készíti el az első vázlatot, ugyanúgy egy weblap esetében sem foglalkozhatsz a vizuális designnal addig, amíg nem készítetted el a site felépítését. A navigáció és a <a href="http://www.seochat.com/">SEO</a> tervek elkészítése ebben a fázisban sok fejfájástól kímélhet meg a későbbiekben. Mire valóban nekiláthatsz a vizuális terveknek, addigra már jól fogod ismerni a site felépítését, tartalmát, és ez sokkal könnyebbé teszi a munkát a színekkel és grafikákkal is.</p>

<h3 id="peldaoldal">Az elképzelt példa oldal</h3>

<p>Az elképzelt oldalunk valójában egy üzlet, amely nyílt forráskódú wikiket szolgáltat, és legalább három új kódolási ötlettel jönnek elő hetente. Mivel a kódot ingyenesen lehet használni és módosítani, így a site gazdája úgy gondolta, hogy a bevételeket adományokból, reklámokból és a programozóik által nyújtott extra szolgáltatásokon keresztül próbálja megszerezni. A site neve „Wiki Whatevers”, és a domainnevet már kiválasztották. A tartalmat már elkészítették, amiben főleg kódrészletek találhatóak, amelyeket kategorizálni kell, valamint vannak még különböző leírások, és néhány biográfia a projektben résztvevő programozókról. A webszolgáltatónál van <a href="http://www.mysql.com/">MySQL</a> adatbázis hozzáférhetőség, és képes nagyobb forgalmat is fogadni leállás nélkül. Most már ideje összeszedni azokat a dolgokat, amelyeket a használni fogunk.</p>

<ol>
<li>
A már létező céges logó használatához szükségem lesz a logó digitális változatára, amelyet a kliens weboldalán használhatok. A logót egy scanner segítségével beolvasom egy grafikus alkalmazásba, mint amilyen a <a href="http://www.adobe.com/products/photoshop/index.html">Photoshop</a> vagy a <a href="http://www.gimp.org/">Gimp</a>. A logó méretét csak később igazítom a website méretéhez. A képet 72 dpi-ben mentem el, ami gyorsabb letöltési időt tesz lehetővé. Ezt a logót használom majd a 4. lépésben.
</li>

<li>
A biográfiákban és a csapat bemutatásánál (a “Névjegy&quot; lapon) szükségem lesz néhány digitális képre a programozókról. Küldhetnek digitális képeket, vagy hagyományos képeket scannelésre. Ha hagyományos képet küldenek, akkor nagyobb méretben scannelem be, mint szükséges, úgy 300 dpi elég szokott lenni. A digitális képeket is teljes méretben őrzöm meg, így a képeket később a körülményeknek megfelelően kicsinyíthetem.
</li>

<li>
Az ügyfél úgy döntött, hogy szeretnének indítani egy blogot is, mivel már elegendő anyaguk van ahhoz, hogy a blogot néhány hónapig aktívan tartsák. Szerencsére olyan szolgáltatót választottak, amelyik támogatja a blogokat, és megfelel a szükséges feltételeknek, így képes adatbázisokat és megnövekedett vagy ingadozó forgalmat is kezelni. A szolgáltató több lehetőséget is ad a későbbi fejlesztéshez, ami nagyon előnyös, ha a kliens később egy nagyobb weboldalt szeretne. Ha a szolgáltatás rendelkezésre állási ideje is garantált, akkor az ügyfelünk különösen boldog lehet, mivel a website fejlődésével továbbra is maradhat ugyanannál a szolgáltatónál évekig, így megspórolhatja a szolgáltatóváltással járó macerákat.
</li>

<li>
FTP használatával (ilyenből több is van a piacon, mint például a nyílt forráskódú <a href="http://filezilla-project.org/">Filezilla</a>, a <a href="http://fireftp.mozdev.org/">fireftp</a> Firefox kiterjesztés, vagy különálló kliensként a <a href="http://www.cuteftp.com/">CuteFTP</a>) feltöltök egy statikus oldalt, amely bejelenti a site indulását. Kerüljük a „fejlesztés alatt” és az ehhez hasonló borzalmas kifejezéseket, mivel a látogatók valószínűleg úgysem térnek vissza soha, ha nem tudják, hogy mikor indul a weboldal. Ehelyett írjuk ki a lapon a cég nevét, hogy mit fognak ezen a weblapon nyújtani, egy dátumot, amikor a weblap várhatóan elindul és egy kapcsolati lehetőséget (az email tökéletes ebben az esetben, de ha pl. egy téglagyárnak készítünk oldalt, akkor megadhatunk egy címet és egy telefonszámot is). Még ennél is jobb, ha a látogatók fel tudnak iratkozni az email címükkel, hogy kapjanak egy értesítést az indulásról, ezzel az ügyfelünk már azelőtt szerezhet néhány potenciális vásárlót, mielőtt még a weblap egyáltalán elindult volna.
</li>

<li>
Az ügyféltől kapott tartalom és a struktúra információk alapján elkészítem a site felépítését, valamint a navigációt és a szöveges linkeket. Nem szabad megfeledkezni arról sem, hogy a kliens minden oldalon szeretne reklámokat elhelyezni. Ezen kívül megpróbálok egy tervet készíteni a site SEO kulcsszavaira is.
</li>

<li>
A logó színeinek felhasználásával kiválasztok két vagy három színsémát, amit megmutathatok később a kliensnek.
</li>

<li>
Ezután kiválasztok még néhány fényképet és illusztrációt valamilyen képgyűjteményből, mint amilyen például az <a href="http://www.istockphoto.com/index.php">iStock</a> vagy a <a href="http://www.comstock.com/web/default.asp">Comstock</a>. Mivel az ilyen képgyűjtemények általában forgalmazzák a képeket, így a képeket a legtöbb esetben meg kell venned, és nem kerülheted ki a vásárlást. A képgyűjtemények használata egyáltalán nem drága dolog, és sok fejfájástól kímélhet meg később <a href="http://www.templetons.com/brad/copymyths.html">licencelési ügyekben</a>. Ezen felül szükségem van azokra a képekre is, amelyeket a cég korábban már felhasznált, vagy fel akar használni, amelyeket a kódoknál, a leírásokban és a blogbejegyzéseknél lehet majd felhasználni.
</li>
</ol>

<p class="note"><strong>Megjegyzés</strong>: az utolsó két lépést a következő leírásban részletesebben is kifejtjük. Ne felejtsd el azt sem, hogy még mielőtt elkezdenél színeket és grafikákat használni a weblapon, előtte mindenképpen egyeztesd a vizuális terveket a klienssel, és kérd a beleegyezését!</p>

<h3 id="alogo">A logó</h3>

<p>A logó a cég márkajegyeinek egyik legfontosabb eleme. A legtöbb cég nem sieti a logó elkészítését, mivel ez a műalkotás fogja képviselni a cégüket még több éven keresztül. Más cégeket viszont egyáltalán nem érdekel az a kis kép, amely a cégüket jelképezi. Tapasztalatból mondhatom, hogy az a cég, amely nem fektet elég pénzt és energiát egy professzionális logó készítésébe, soha nem fogja elkölteni ezt a pénzt, nem számít, hány logikus érvet tudsz felhozni velük szemben.</p>

<p>A Wiki Whatevers cég tulajdonosai mind a Georgia Tech hallgatói, így az Alma Materük színeit használták fel a logójukban: aranyat és feketét. Mivel a logó nagyon egyszerű, így könnyen lehet rajta dolgozni a színeken és a megjelenésen. Az 1.  ábrán látható a logó:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/280-9-egy-site-keretnek-felptse/logo.jpg" alt="A Wiki Whatevers logója" />
<p class="comment">1. ábra: A Wiki Whatevers logója</p>

<p>A probléma itt az, hogy éppen most scanneltem be ezt a logót, és szeretném online használni. Viszont a nyomtatási színek, amelyek <a href="http://desktoppub.about.com/cs/basic/g/cmyk.htm">CMYK</a> (kékeszöld, bíbor, sárga, fekete) alapúak, nem egyeznek meg a webes színekkel, amelyek RGB (vörös, zöld, kék) alapúak. Így először meg kell feleltessem a színeket a webes színeknek, amilyen közel csak lehetséges. Erre több lehetőség is van:</p>

<ol>
<li>
Kapcsolatba lépünk a nyomdásszal, hogy milyen színeket használt a Wiki Whatevers logó nyomtatására a legutóbbi nyomtatott anyagnál. A nyomdászok általában Pantone színeket használnak, és a Pantone szerencsére biztosít egy olyan eszközt, amivel meg lehet feleltetni a nyomtatott színeket a webes színekkel. Valószínűleg a nyomdásznak is van ilyen eszköze kéznél, úgyhogy akár anélkül is megkaphatjuk a kívánt webes színeket, hogy fizetni kellene egy ilyen eszközért.
</li>

<li>
Mivel a srácok a Wiki Whateversnél valójában a Georgia Tech színeit használták, egyszerűen elmehetek a Georgia Tech oldalára, és megpróbálhatom ott egyeztetni a webes színeket. Egy grafikus program használatával megszerezheted azt a színt, amelyet a weblapon használtak, ha <a href="http://www.iopus.com/guides/screenshot.htm">készítesz egy képernyőképet a weblapról</a>, azt betöltöd a grafikus programba, és a pipettával vagy valamilyen más módon megfeleltetheted a színeket.
</li>

<li>
Hasonlítsd össze figyelmesen a nyomtatott színeket a webes színekkel, és próbáld meg a lehető legközelebbi módon megfeleltetni őket. Egyes esetekben a színek teljesen különbözhetnek, míg máskor talán nem is szükséges rajtuk változtatni.
</li>

<li>
Scanneld be a nyomtatott képet egy olyan scannelő alkalmazással, amely elfogad CMYK-t, majd használd a Photoshop Pantone Colour Swatches eszközét a színek megfeleltetéséhez. Ez a módszer csak akkor működik, ha van egy olyan scannered, amelyik elfogadja a CMYK-t, és van Photoshop szoftvered is.
</li>
</ol>

<p>A mi esetünkben sikerült megszereznem azt a tökéletes arany színt a <a href="http://ramblinwreck.cstv.com/">Georgia Tech Athletic site</a> kabalafigurájáról, amely teljes mértékben megfelel a logó színének. Az arany <code>#eab200</code>, míg a fekete, hát, egyszerűen fekete (<code>#000000</code>). A háttér, ami sötét kékeszöld színű (<code>#002123</code>) árnyékként van felhasználva a logóban. Szóval a problematikus részeket egy kis méhecskefigura segítségével (a 2. ábrán) könnyen megoldottuk:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/280-9-egy-site-keretnek-felptse/bee.jpg" alt="A Georgia Tech kabalaállata" />
<p class="comment">2. ábra: A Georgia Tech kabalaállatának színeit feleltettük meg a logó színeivel</p>

<p class="note"><strong>Megjegyzés</strong>: nagyon ritkán fordul az elő, hogy egy cégnek nincs meg a saját logójuk vagy más márkajelük digitális változata valamilyen formában, például elektronikus névjegy vagy levélfejléc képében. Viszont nem árt tudni, hogy az ilyen cégek túlnyomó része egyszerűen elfogadja a színeket, ahogy azok megjelennek, és nem egyeztetik a színeket a nyomtatott anyagokkal. Szóval ne bízzunk meg mindig azokban a színekben, amelyek már rendelkezésre állnak, főleg akkor nem, ha a színek láthatóan nem egyeznek meg a brosúrákban vagy levélfejlécekben látható színekkel. Ilyenkor kérdezzük meg a megrendelőket, hogy melyik színt preferálják jobban. Lehetséges, hogy eddig észre sem vették, hogy a színek valójában különböznek.</p>

<h3 id="elrendezes">Az elrendezés</h3>

<p>Az egyszerűség kedvéért (és hogy ne legyen túl hosszú a mai anyagunk) egyetlen elrendezést fogok bemutatni. Egy blogos elrendezést választottam, amelyik a gyakoribb változásokat a törzs felső részén jeleníti meg, könnyen navigálhatunk a fejléc és a törzsszöveg között, valamint hozzáférhetünk a korábbi bejegyzésekhez „hajtás után” a kezdőlapon. A „hajtás után” kifejezés a nyomtatott sajtótól származik, mivel amikor egy újság kint van a pulton, az olvasó csak azt látja, ami a „hajtás előtt” van (vagyis az újság első lapjának felső felét, ahogy össze van hajtva). Ezt a rész - beleértve a képeket is - rendkívül fontos, mivel rá kell vegye az olvasót, hogy megvásárolja az újságot.</p>

<p>Ugyanez a „hajtás előtt” filozófia érvényes a websiteok designjára is. Minden, ami a képernyőn látszik, amikor egy látogató megnyitja az oldalt, az a „hajtás előtti” rész. Minden olyan rész, amelyért a látogatónak görgetnie kell, már a „hajtás utáni” rész. A trükk az, hogy a látogató tekintetét már az első képekkel és szövegekkel megfogjuk, függetlenül attól, hogy milyen monitoron és milyen felbontásban nyitja meg a weblapot (ezért jó mindig letesztelni a websiteot több különböző monitoron és felbontásban is, erről később fogunk még beszélni). A 3. ábrán a Wiki Whatevers kezdeti elrendezésének első vázlatát láthatjuk:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/280-9-egy-site-keretnek-felptse/wireframe.jpg" alt="Elrendezés vázlata" title="Elrendezés vázlata" />
<p class="comment">3. ábra: A Wiki Whatevers honlap elrendezésének első vázlata</p>

<p>Ez az elrendezés változatlan marad az egész oldalon, de változhat az archívum lapokon, hogy megjelenítsük a cikkek és blogbejegyzések listáját képek nélkül. A következetesség azért jó, hogy ne zavarjuk össze a látogatót. Ha a felhasználók „megtanulják” a site használatát, akkor már nem szeretik, ha az elrendezés lapról lapra változik. Az alábbiakban bemutatjuk, hogy mit tartalmaz ez a design:</p>

<ol>
<li>
<strong>Fejléc:</strong> a fejléc kicsi lesz, mivel nem szeretném, ha a logó túl sok helyet elfoglalna a lapokon. Bár a logó csak egy apró része az oldalnak, viszont a színei meghatározzák a teljes website színsémáját. A fejléc felül található, szokás szerint, és a logó a blog kezdőlapjára mutat. A logó linkelése kényelmes megoldás, és a legtöbb látogató már hozzászokott ahhoz, hogy a logóra kattintva mindig visszajut az adott website kezdőlapjára.
</li>

<li>
<strong>Navigáció:</strong> közvetlenül a fejléc alá helyezve a navigáció nyilvánvaló és könnyen használható. A navigációt a láblécben is megismételjük egyszerű szövegként. Ezt azért teszem, mert én még a régi iskolából származom, ahol a navigációt mindig megismételtük a láblécben sima szövegben azoknak a kedvéért, akik képek nélkül böngésznek. Mivel ezen a ponton még nem tudom biztosan, hogy fogok-e képeket használni a navigációra a fejlécnél, így automatikusan beteszem a szöveges navigációt valahová máshová a lapon, jelen esetben a láblécbe. Ez segíti azokat a <a href="http://www.afb.org/Section.asp?SectionID=57&amp;amp;TopicID=167&amp;amp;DocumentID=2757">vak látogatókat</a>, akik képernyő-felolvasókat használnak a weblapok „olvasására”. Az, hogy a navigációs szövegeket felülre vagy alulra helyezed, valójában a design szempontokat leszámítva lényegtelen, mivel a vakok ugyanúgy át tudják fésülni a weblapot fentről le és lentről fel, mint a látók. Ezek függvényében igazából a designeren és a megrendelőn múlik, hogy megismétlik-e a navigációt a lapon vagy nem. Ha a navigációnál képeket használsz, és nem ismétled meg a navigációt szöveges linkekben, akkor figyelj arra, hogy a navigációs képeknél mindig megadj egy beszédes alt attribútumot. Ezen a módon a képernyő-felolvasók vagy a kikapcsolt képekkel böngészők is tudni fogják, hogy az adott képek mire valók. Olvasd el a 17. leírás idevágó részét <a href="http://dev.opera.com/articles/view/17-kepek-a-htmlben/#altszoveg">az alt attribútum megfelelő használatáról</a>.
</li>

<li>
<strong>Legújabb blogbejegyzések:</strong> a legújabb blogbejegyzéseket érdemes kiemelni, és az a lehetőség, hogy ezt lap fókuszába tehetjük a „hajtás elé”, előnyös mind az ügyfélnek, mind az olvasóknak. Amint a látogató megnyitja a weboldalt, ezt a szöveget fogja látni először. A nyilvánvaló elhelyezés viszont azt is jelenti, hogy az ügyfél kénytelen rendszeresen frissíteni az oldalt, ellenkező esetben a már meglévő látogatók elvesztését kockáztatja: az emberek nem szeretnek visszatérni egy blogra, ha nem kerül rá új tartalom.
</li>

<li>
<strong>Régebbi blogbejegyzések:</strong> itt lesznek majd a korábbi blogbejegyzések; úgy három vagy öt bejegyzés bőven elég, hogy a látogató kapjon egy rövid benyomást arról, hogy mire számíthat ezen az oldalon a továbbiakban. Ha vannak képek, az nagyszerű, de nem feltétlenül szükségesek, mivel ez a terület már a „hajtás után” található. A döntés, hogy használunk-e képeket függhet attól, hogy a lap letöltési mérete és ideje mennyire számít, valamint hogy az előző bejegyzéseknél van-e szükség képre, amelyre kattintva a látogató tovább olvashatja az adott témát.
</li>

<li>
<strong>Jobb oszlop:</strong> ezen a területen férnek hozzá a látogatók a blogbejegyzésekhez a kategóriákban, az archívumhoz és a site más tartalmaihoz. A többi tartalomra egy példa lehet a cég „névjegy” lapja, egy site index oldal, valamint kapcsolati információk. Fontos eldönteni azt is, hogy hogyan akarod megjeleníteni ezeket az elemeket az oszlopon belül, mivel a blog a létrehozott kategóriákból, lapokból és az archívumból fog felépülni. Ahogy a site növekszik, ezek a listák egyre nagyobbak lesznek, míg végül elérkezhet az a pont, hogy csak a kategóriák listája lesz egyedül a „hajtás előtt”. Az ügyfél dönthet arról, hogy a lapok fontosabbak-e, mint a kategóriák. Megemlíteném még, hogy ez a lista nem tartalmaz mindent, amit az oldalsávba vagy az oldalsó oszlopba el lehet helyezni. Egyes ügyfelek úgy érzik, hogy két oszlop jobban megfelelne nekik, így háromoszlopos elrendezést kérnek a fenti kétoszlopos helyett.
</li>

<li>
<strong>Lábléc információk:</strong> a lábléc információk alapvetően fontosak, mivel ezek látják el a látogatókat a lényeges háttérinformációkkal a cégről és a websiteról, amelyet egyébként nehezen tudnának előkeresni. A cég neve, esetleg a logó ismétlése, egy cím, email cím, hivatkozások (a kapcsolat oldalra, adatvédelmi megjegyzésekre, figyelmeztetésekre és jogi tudnivalókra), rövid hírösszefoglalók szerepelnek leggyakrabban a láblécekben. Ahogy azt már korábban is megjegyeztük, a navigációt is megismételhetjük szöveges változatban a láblécben.
</li>

<li>
<strong>Reklámok:</strong> ebben az elrendezésben a reklámok a legújabb blogbejegyzés, valamint a régebbi blogbejegyzések mögött helyezkednek el. Ez lehetővé teszi a kliensnek, hogy válasszon a szöveges reklámok vagy a bannerek között. Ebben az elrendezésben egy reklám van a „hajtás előtt”, és ugyancsak egy reklám a „hajtás után”. A legtöbb website esetében ez a reklámmennyiség elegendő. Ebben az esetben a reklámok egy másodlagos helyre vannak száműzve, a fő tartalom mögé.
</li>
</ol>

<p>Ez az elrendezés lehetővé teszi a látogatónak, hogy gyorsan átválthasson a tartalomról a navigációra görgetés nélkül, valamint láthatóvá teheti a felhasználónak a site további témáit is a kategóriák alatti hivatkozásokon keresztül. Még ha az olvasó le is görget a „hajtás után”, az elrendezés tartalmazza a „hajtás előtt” az összes olyan fontosabb elemet, amire szüksége lehet.</p>

<h3 id="reklam">A reklámozásról az oldalakon</h3>

<p>Ha az oldalra tartalomfüggő reklámokat teszünk, az egyrészt előny az ügyfélnek és egy hasznos szolgáltatás lehet a látogatónak is. Ha például az oldal virágokról szól, akkor a kapcsolódó reklámok tartalmazhatnak parkosítási szolgáltatást, virágrendelést, stb. Egy olyan oldalra, amely nyílt forráskódú szoftverekkel foglalkozik, olyan reklámozókat kereshetünk, amelyek kapcsolódnak a nyílt forráskódú tartalmakhoz. A <a href="https://www.google.com/adsense/">Google Adsense</a> egy lehetséges megoldás erre, mivel segíthet a tartalomhoz kapcsolódó reklámokat helyezni az oldalra. Az ilyen típusú reklám jó megoldás egészen addig, amíg a forgalom meg nem nő a megfelelő szintre, amikor más típusú reklámokat is el lehet már helyezni a weblapon. A reklámok használatakor mindig gondolj ezek SEO vonzatára is, mivel a reklámok jelentősen befolyásolhatják a weboldal pozícióját a keresőkben. Néhány jobb SEO cikk a témával kapcsolatban:</p>

<ul>
  <li><a href="http://dev.opera.com/articles/view/intelligent-site-structure-for-better-se/">Intelligens sitestruktúra a jobb SEO érdekében!</a> (angolul), Joost de Valk.</li>
  <li><a href="http://dev.opera.com/articles/view/semantic-html-and-search-engine-optimiza/">A szemantikus HTML és a keresőoptimalizálás</a> (angolul), Joost de Valk.</li>
  <li><a href="http://www.clickz.com/showPage.html?page=3497826">Hogyan módosíthatják a reklámok a kereső besorolást?</a> (angolul), Fredrick Marckini.</li>
  <li><a href="http://www.searchengineguide.com/jennifer-laycock/new-report-explores-how-ppc-rank-affects-traffic.php">Hogyan módosítja a PPC besorolás a forgalmat?</a> (angolul), Jennifer Laycock.</li>
</ul>

<p class="note"><strong>Megjegyzés</strong>: mint designer, valószínűleg nem te vagy a felelős a reklámozásért az oldalon, kivéve ha saját magadnak készíted az oldalt. De ha valamikor később szeretnél egy hirdetési- vagy design ügynökségnél elhelyezkedni, tudnod kell egyet-mást a reklámozásról is. Minél többet tudsz arról, hogy mi tesz egy websiteot sikeressé, annál több sikerre számíthatsz te is a designer karrieredben. Amikor lehetséges, próbálj minél többet megtudni a marketingről (a saját és az ügyfeleid érdekében), valamint a keresőoptimalizálási trükkökről.</p>

<h3 id="ellenorzes">Az elrendezés ellenőrzése validátorral és a klienssel</h3>

<p>Mielőtt az elrendezést elkezdeném a kódban megvalósítani, még szeretném megmutatni a kliensnek és a beleegyezését kérni a használatához. Az egyik taktika, amivel megpróbálom rábeszélni az ügyfelet, hogy ez az elrendezés jobb, mint egy másik, hogy emlékeztetem arra, hogy a további elrendezések tervezése pénzbe kerül. Így az ügyfél általában már kiválaszt egy elrendezést, mivel ezeken is lehet még változtatni később, ha szükség lenne rá.</p>

<p>A következő lépés az elrendezés lekódolása, majd a kód validálása. Én a <a href="http://validator.w3.org/">W3C jelölés validáló szolgáltatását</a>, valamint a <a href="http://jigsaw.w3.org/css-validator/">W3C CSS validáló szolgáltatását</a> használom a HTML és a CSS kódok ellenőrzésére, hogy ne maradjanak bennük hibák. A fájlokat feltöltheted egyenesen a számítógépedről, így nem szükséges emiatt feltölteni őket a kliens websitejára csak a tesztelés miatt. Ezek a tesztek lehetővé teszik a designernek és/vagy a programozónak, hogy már azelőtt kijavíthassák a jelölési hibákat, mielőtt a kód megtelne képekkel, reklámokkal és más elemekkel.</p>

<p>A hozzáférhetőség ugyancsak nagyon fontos, így érdemes meggyőződnöd arról is, hogy a website használható a vak, gyengénlátó vagy mozgássérült emberek által is. Ez nem olyan egyszerű, mint a CSS és a HTML validálása. Vannak ellenőrző eszközök, mint például a <a href="http://www.tawdis.net/taw3/cms/en">TAWDIS</a>, de az ideális az, ha valódi felhasználókkal tesztelteted le a honlapot, és elvégzel egy minőségi ellenőrzést a hozzáférhetőségre, ugyanis egy mechanikus ellenőrző eszköz nem képes megmondani azt, hogy a website hozzáférhető, avagy sem, csak néhány javaslatot tehet arról, hogy mi a jó és mi a rossz ebből a szempontból, és gyakran hibáznak. A kurzus során még sokszor lesz szó a hozzáférhetőségről, úgyhogy ne felejtsd el ezt a pontot.</p>

<p>Ugyancsak érdemes végigtesztelned az elrendezést az összes rendelkezésre álló böngészőben, hogy biztos lehess benne, hogy a lehető legtöbb felhasználót elérheted. Ezt könnyen megteheted akkor, ha van Maced, Windowsod és Linuxod és megfelelő mobilod az összes szükséges böngészővel telepítve, de használhatsz emulátorokat, mint például a <a href="http://en.wikipedia.org/wiki/VMware_Fusion">VMWare Fusion</a>, amellyel egyetlen számítógépen emulálhatod a különböző rendszereket, de ezek használata elég bonyolult és hosszadalmas. Egy másik módszer a böngésző-képmentő használata, mint például a <a href="http://www.browsercam.com/">BrowserCam</a>, amelyik egy gyors, kényelmes szolgáltatás, és rengeteg böngészőt támogat (sok régi böngészőt is). Az első 24 órában ingyenesen lehet használni, így nyugodtan kipróbálhatod, hogy megfelel-e neked, utána pedig az ára bőven megéri azt a kényelmet, amelyet biztosít a különböző böngészőkben való tesztelésre.</p>

<p>Végezetül, ismét jó ötlet, ha az ügyféllel tudatod, hogy a kód az elrendezéshez elkészült és sikeresen validálva lett; azt is megmondhatod neki, hogy milyen módosításokat kellett végezni rajta ahhoz, hogy működjön minden böngészőben. Miután a kódot legeneráltad, a validálást elvégezted, és megkaptad az engedélyt a klienstől, csak ezután állhatsz neki a színek, képek és más tartalmak, mint például a reklámok hozzáadásának. Bár ez így fárasztónak tűnik, jobb, ha már az elején elvégzed a validációt és egyeztetsz a klinessel, mielőtt feltennéd a cukormázat a süteményre. Különben azon kaphatod magad, hogy többet foglalkozol a problémák keresésével és több bajod van a különböző böngészőkkel, mint azt korábban gondoltad. Másrészről bármilyen vizuális elem vagy kész tartalom elvonhatja a kliens figyelmét az elrendezésről, amikor be szeretnéd neki mutatni.</p>

<p>Miután befejezted ezt a lépést, nekiállhatsz a munkának a website szövegeivel, képeivel és színeivel. Hogyan kezdhetsz neki ennek? A következő leírásunkból megtudhatod!</p>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>A webdesigner sokszor több kalapot is visel, mivel egy website designja több részből áll össze. Fog-e a website növekedni a jövőben, vagy statikus marad? Vajon a webszolgáltató folyamatosan tudja majd biztosítani a minőségi szolgáltatást, ahogy a website növekedik, vagy minden fejlesztésnél új szolgáltatót kell keresni? Valamint, ha a designer nem tudja elvégezni az összes kapcsolódó munkát, vannak olyan kapcsolatai, akik ilyenkor besegíthetnek?</p>

<p>A színek és a grafikák mögött kell egy biztos alap, amire a websiteot fel lehet építeni. A website készítésébe beletartozik a design és minden olyan apróság, amely könnyebbé teheti az életet, ha már a tervezési fázisban foglalkozunk velük. Egy professzionális designer már azelőtt megoldja a problémákat, mielőtt azok egyáltalán felmerülnének.</p>

<p>Miután letettük az alapokat, és elkészítettük a website elrendezésének keretét, a designer nekifoghat a munkának a weblap színsémájával, a klienssel való egyeztetést követően.</p>

<h2 id="olvasnivalo">Olvasnivaló</h2>

<p>A következő oldalakon néhány kapcsolódó feladatlistát találhatsz (angolul):</p>

<ul>
  <li><a href="http://www.diveindesigns.com/home/dd1/page_17">Dive In Designs checklist</a></li>
  <li><a href="http://www.netmechanic.com/news/vol7/design_no4.htm">Net Mechanic’s Web Usability Checklist</a></li>
  <li><a href="http://maxdesign.com.au/presentation/checklist.htm">Max Design checklist</a></li>
  <li><a href="http://www.usabilityfirst.com/websites/index.txl">Usability First’s Checklist</a></li>
  <li><a href="http://www.skyrme.com/tools/webplan.htm">David Skyrme and Associates’ Checklist</a></li>
  <li><a href="http://www.score.org/resources/web-site-checklist-can-help-you-plan-success">SCORE’s Web site design checklist</a></li>
</ul>

<h2 id="tesztkerdesek">Tesztkérdések</h2>

<ul>
  <li>Mikre van szükséged, mielőtt elkezdenéd egy weblap designjának a fejlesztését?</li>
  <li>Miért kell összeszedned azokat az elemeket, amikre szükséged lesz a weblapon?</li>
  <li>Miért fontos utánanézni a webszolgátatóknak?</li>
  <li>A designernek sok dolga van, de mit kell tenned akkor, ha a kliens azt kéri tőled, hogy tervezz neki egy logót, viszont még soha nem csináltál ilyet?</li>
  <li>Nevezz meg két jó okot, hogy miért érdemes átnézni a konkurencia weboldalait.</li>
  <li>Mi az a CMYK, és mit jelent?</li>
  <li>Nevezz meg legalább két módot arra, hogy a CMYK színeket RGB színekké alakítsd.</li>
  <li>Mondj egy okot arra, hogy miért használjon egy webdesigner szöveges navigációt legalább egy helyen a weblap elrendezésében?</li>
  <li>Miért kell az elrendezés konzisztens maradjon az egész websiteon?</li>
  <li>Mondj egy okot arra, hogy miért kell az elrendezést már az egészen korai fázisban validálni.</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/8-a-szinek-elmelete/" title="hivatkozás a sorozat előző leírására">Előző leírás — A színek elmélete</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/10-szinsemak-es-designtervek/">Következő leírás — Színsémák és designtervek</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<img class="right" src="http://forum-test.oslo.osa/kirby/content/articles/280-9-egy-site-keretnek-felptse/lindagoin.jpg" alt="Linda Goin" />

<p>Linda Goin művészeti diplomát (BFA) szerzett vizuális kommunikációban, kisvállalatok és a marketingjük részére, valamint egy Művészetek mestere (MA) címet az amerikai történelemből, részben a reformáció korából. Bár a második diplomája nem annyira illik az előző tanulmányaihoz, Linda a felhasználta a tanulmányaiban 25 éves design tapasztalatát egy archeológiai ásatásokkal kapcsolatos oldalról.</p>

<p>A munkájáért több elismerést is kapott, többek között tizenötször szerezte meg az első helyet a Colorado Press Association díjaknál, több művészeti és grafikus design díjat szerzett, és több interjút közöltek vele a tartalomfejlesztésről a The Wall St. Journal, Chicago Tribute, Psychology Today és L.A. Times lapokban. Linda több webdesign és hozzáférhetőségi témájú ebook szerzője, és mellette személyre szabott üzleti cikkeket is ír néhány hivatásos SEO számára.</p>
