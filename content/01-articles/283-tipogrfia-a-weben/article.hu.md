Title: Tipográfia a weben
----
Date: 2009-08-17 08:47:25
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/10-szinsemak-es-designtervek/" title="hivatkozás a sorozat előző leírására">Előző leírás — Színsémák és designtervek</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/12-a-html-alapjai/">Következő leírás — A HTML alapjai</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Mi a tipográfia? Egyszerűen fogalmazva ez a szövegek megjelenése, designja és elrendezése (erre típusként is hivatkoznak); egy olyan fogalom, amely még a nyomtatott médiából származik. Legalább annyira szól arról, hogy mit nem tehetsz meg a típusaiddal, mint arról, hogy mit tehetsz meg velük. A weben a tipográfia gyakran túl kevés figyelmet kap, ráadásul több olyan technológiai hiányosság is van, amely miatt a webes tipográfia nem olyan hatékony, mint a nyomtatott. Ennek ellenére a mai rendelkezésre álló eszközök mellett már semmi okod nem lehet arra, hogy ne használd ki a webes tipográfia előnyeit szép és stílusos típusok használatával.</p>

<p>Ebben a leírásban megnézzük alaposabban, hogy miért korlátozott a webes tipográfia a nyomtatotthoz képest, majd adunk néhány jó követendő tippet a webes tipográfia használatára, mindezt egy példán keresztül bemutatva. Ne aggódj, ha ezen a ponton még nem érted meg teljesen a CSS és HTML kódokat – most csak a designra kell figyelned. Az olvasás közben érdemes lehet magadnál tartani egy papírt és egy ceruzát, így közben papírra tudod vetni a szöveg elrendezésével kapcsolatos ötleteidet. Ennek a bejegyzésben a következő témákról lesz szó:</p>

<ul>
  <li><a href="#korlatok">A webes tipográfia korlátai</a>
  <ul>
  <li><a href="#szamossag">Korlátozott számú betűtípus</a></li>
  <li><a href="#szoelvalasztas">Szóelválasztás</a></li>
  <li><a href="#alavagas">Alávágás</a></li>
  <li><a href="#iranyitas">Az irányítás hiánya</a></li>
</ul></li>
  <li><a href="#hogyan">Hogyan készül a tipográfia a weben?</a></li>
  <li><a href="#tippek">Gyors tippek</a>
<ul>
  <li><a href="#tobb">Több betűtípus választása</a></li>
  <li><a href="#hossz">A sorok hossza</a></li>
  <li><a href="#magassag">A sorok magassága</a></li>
  <li><a href="#inicialiek">Iniciálék</a></li>
  <li><a href="#kiskapitalis">Kiskapitálisok</a></li>
  <li><a href="#kilogo">Kilógó írásjelek</a></li>
  <li><a href="#irasjelek">Tipográfiailag helyes írásjelek és más elemek</a></li>
  <li><a href="#idezetek">Kiemelt idézetek</a></li>
</ul></li>
  <li><a href="#osszefoglalo">Összefoglaló</a></li>
  <li><a href="#tesztkerdesek">Tesztkérdések</a></li>
</ul>

<p class="note">Ez a leírás nem tartalmaz példákat arra vonatkozóan, hogy hogyan készíthetünk szöveg- és betűtípus formázásokat. Ezekről később lesz szó a <ins>Szöveg stílusozása CSS-sel</ins> leírásban.</p>

<h2 id="korlatok">A webes tipográfia korlátai</h2>

<p>A hagyományos nyomdászoknak kismillió lehetőség áll a rendelkezésükre, amikor szóba kerül a tipográfia, mint például a betűkészletek puszta száma vagy az elrendezési lehetőségek széles skálája. A webes tipográfia ennél sokkal korlátozottabb, mivel olyan típusokkal és elrendezéssel kell dolgozzunk, amelyről tudjuk, hogy elérhető és használható lesz azokon a gépeken is, amelyeken az olvasók megnyitják a lapot — senki nem fejleszt csak saját magának weboldalt.</p>

<p>A webes tipográfia korlátai többek között a következők:</p>

<ul>
  <li>Korlátozott betűkészlet.</li>
  <li>Nincs elválasztás, így a sorkizárt elrendezés csúnya lesz keskenyebb oszlopok esetén.</li>
  <li>Nincs befolyásunk az alávágásra (a szóközökkel való feltöltésre).</li>
  <li>Nem lehet tudni, hogy hol és hogyan nézik majd meg a munkát, így a designereknek minden képernyőméretre, felbontásra és környezetre gondolniuk kell.</li>
</ul>

<p>Most pedig lássuk ezeket a pontokat egy kissé részletesebben.</p>

<h3 id="szamossag">Korlátozott számú betűtípus</h3>

<p>A betűtípusok száma általában az első nagyobb korlát, amelybe a szöveg stílusozásakor beleütközhetsz. Bár a CSS-ben olyan fontot adhatsz meg, amilyen csak jólesik, a látogatók viszont csak akkor fogják a szövegeket ezzel a típussal látni, ha az telepítve van a gépükön — ha nincs, akkor a böngészőjük megpróbál egy másik betűtípust választani a CSS alapján, vagy egyszerűen az alapértelmezett típust használja (ami általában a Times New Roman). Szóval ha te olyan különleges fontokkal akarod is megjeleníteni a szövegeidet, mint például a Trump Medieval vagy az Avant Garde, az olvasóid ebből mit sem fognak észrevenni, feltéve, hogy nem megszállott designerek több ezer telepített fonttal. Ebből az okból kifolyólag a legtöbb webdesigner csak a széles körben, több rendszeren is elterjedt fontokat használja, amely a használható betűtípusokat az alábbi listára korlátozza:</p>

<ul>
  <li>Andale Mono</li>
  <li>Times New Roman</li>
  <li>Georgia</li>
  <li>Verdana</li>
  <li>Arial / Arial Black</li>
  <li>Courier / Courier New</li>
  <li>Trebuchet MS</li>
  <li>Comic Sans (ez egy borzalmasan amatőr típus — ne használd!)</li>
  <li>Impact</li>
</ul>

<p>Ezeknek a típusoknak a megjelenését az 1. ábrán láthatod:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/283-11-tipogrfia-a-weben/01-fonts.gif" alt="Az elérhető webes fontok listája" />
<p class="comment">1. ábra: A legismertebb és a legtöbb rendszerben elérhető fontok listája korlátozott</p>

<p>Ha ezek közül a fontok közül választasz, akkor az azt jelenti, hogy jó eséllyel a látogatóidnak is meglesz a megadott típus. A Microsoft a fentieken kívül még bevezetett hat új betűtípust Windows Vista és XP alá, amelyek különös módon mindannyian C-vel kezdődnek. Ezek a Cambria, Calibri, Candara, Consolas, Constantia és Corbel. Mégsem ajánlom ezeknek a betűtípusoknak a használatát, mert nem túl valószínű, hogy a Mac és Linux platformokon is telepítve lesznek.</p>

<p>Így aztán a nyomdászok számára elérhető több ezer betűkészlettel szemben a webdesignerek alig néhány betűtípus között választhatnak. De valóban olyan nagy korlát ez? A tipográfia ugyanis sokkal többről szól annál, mint hogy kiválasztunk egy tetszetős típust, sokkal inkább a sormagasságokról, az alávágásról, az üres területekről — ne feledkezzünk meg arról, hogy eleinte a nyomdászok is szembesültek ugyanezzel a korláttal.</p>

<h3 id="szoelvalasztas">Szóelválasztás</h3>

<p>Ha a szöveg elrendezéséről van szó, akkor alapvetően négy lehetőség közül választhatsz: balra igazított, jobbra igazított, középre igazított, vagy sorkizárt elrendezés. A sorkizárt elrendezésben a szöveg jobb- és bal oldala is illeszkedik a befoglaló terület függőleges széleihez, és így jobban nézhet ki, mint a „töredezett” balra igazított elrendezés. Gyakran láthatsz ilyet a könyvekben és a magazinokban is. A weben viszont van vele egy kis probléma, mivel hiányzik az automatikus elválasztás, amely a megfelelő helyeken szétválaszthatná a szavakat, hogy így jobban kitöltsék a rendelkezésre álló helyet. A sorkizárt elrendezés érdekében a legtöbb, amit a böngésző tehet, hogy a szavak közötti hézagokat feltölti, amely így függőleges irányú „fehér folyókat” eredményez a szövegben. Ez általában akkor történik meg, ha a sorok hossza a keretben túl rövid, és nincs elég hely a szavak jobb elrendezésére, ahogy a 2. ábrán látszik.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/283-11-tipogrfia-a-weben/02-rivers.gif" alt="Túl keskeny sorkizárt elrendezés" />
<p class="comment">2. ábra: A „fehér folyók” elronthatják a sorkizárt elrendezést</p>

<p>Amint azt a fenti képen láthatod, a jobb helykihasználást lehetővé tevő szóelválasztás nélkülözése egyes sorokban túl nagy üres helyet hagyott a szavak között. Ennek az elkerülésére a weben többnyire érdemes balra igazított elrendezést használni.</p>

<h3 id="alavagas">Alávágás</h3>

<p>Az „alávágás” különböző betűpárok közötti távolság módosítását jelenti a változó betűszélességű típusokon belül (mint amilyen a Times New Roman, amelyben a különböző betűk szélessége és a köztük levő távolság betűnként eltérő, ellentétben a Courier típussal, amelyben a betűk mérete és a távolság közöttük mindig ugyanaz). Nyomtatásban arra használják, hogy összehúzzák az olyan betűket, amelyek összeillenek, így helyet takarítanak meg, és a szöveg is jobban olvasható. Ilyen lehet például egy V utáni A, amelyeket ha összehúzunk, sokkal komolyabb megjelenést kaphatunk. A szakszerű fontok tartalmaznak útmutatásokat az alávágások kezelésére, amelyben megadják az egyes betűk közötti távolságokat. A 3. ábrán láthatod, hogy hogyan módosítja a megjelenést az alávágás.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/283-11-tipogrfia-a-weben/03-kerning.gif" alt="Alávágás használata" />
<p class="comment">3. ábra: Az alávágás javítja a szövegek megjelenését</p>

<p>Az előbbi ábrán az első szóban nem alkalmaztuk az alávágást. A második szóban viszont a távolság csökkent a W és az A között, és megnőtt az A és S között. </p>

<p>A weben az ilyen szintű alávágás sajnos nem elérhető. Az egyetlen dolog, amire van befolyásunk, az az általános betűköz, amely a nyomtatott sajtóban a betűk közötti távolságot jelenti, függetlenül attól, hogy milyen betűkről van éppen szó. Így csökkentheted a távolságot a W és az A között, de ezzel egyúttal minden más karakter között is csökken a távolság. A weben ezt a <code>letter-spacing</code> CSS tulajdonsággal állíthatjuk be, amelynek egyik lehetséges megvalósítását a 4. ábrán láthatod.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/283-11-tipogrfia-a-weben/04-tracking.gif" alt="Betűköz használata a weben" />
<p class="comment">4. ábra: Alávágást nem használhatunk a weben, helyette próbálkozhatunk a jóval általánosabb betűközzel is</p>

<p>Az előző képen megnöveltük a távolságot a különböző betűk között egyenlő mértékben. Bár ez segített az A és az S széthúzásában, viszont a távolság a W és az A között még nagyobb lett. A betűköz állítása éppen ezért nem egyszerű CSS-ben, mert mindent-vagy-semmit természete van, így jobb, ha nem használjuk.</p>

<h3 id="iranyitas">Az irányítás hiánya</h3>

<p>Bár sokat beszéltünk eddig a nyomtatott sajtóról, egy fontos dolgot azért érdemes kiemelni ezzel kapcsolatban, mégpedig hogy <em>a web nem nyomtatott sajtó</em>. A nyomdászok nem kell azzal foglalkozzanak, hogy az olvasó átméretezi a szövegeit, nincsenek meg neki a választott típusok vagy nincs nála bekapcsolva az élsimítás. A webdesignerek ezt mind figyelembe kell vegyék, bár gyakran megpróbálnak ráerőltetni egy designt az olvasóra merev szövegszélességeket használva, fix szélességű és magasságú dobozokba helyezve a szövegeket, vagy egyszerűen lecserélve a szövegeket képekre, amelyeken az adott szöveg látható.</p>

<p>Az irányítás hiányát viszont nem kell mindenképpen problémaként felfognod — egyszerűen csak azt kell észben tartanod, hogy az általad megjelenített tartalmat több különböző eszközön, több különböző környezetben, több különböző módon fogják olvasni a látogatók. Ne próbáld őket megállítani és ne nehezítsd meg a dolgukat fölöslegesen. Lehetséges, hogy néhány olvasód a mobiltelefonján akarja elolvasni az oldalad, miközben hazafelé utazik; talán először ki akarja nyomtatni az oldalt, hogy később olvassa el otthon; az is lehet, hogy nem lát olyan jól, mint te, és fel kell nagyítania az oldalakat, hogy könnyebben elolvashassa. Ez az oka annak, hogy a weblap tervezésekor a böngészőnek csak útmutatásokat tudsz adni, hogy te milyen módon szeretnéd megjeleníteni a szövegeket. Az egyes eszközök viszont ezt teljesen figyelmen kívül hagyhatják, és ez rendben is van — a lényeg, hogy ne erőltesd túlságosan a szövegekben a saját elképzeléseidet minden környezetre.</p>

<h2 id="hogyan">Hogyan készül a tipográfia a weben?</h2>

<p>A webes tipográfiát teljes mértékben a CSS segítségével alakíthatod ki. A CSS több lehetőséget is biztosít a szövegek alakítására: nem csak a betűk méretét, színét és típusát adhatod meg, hanem a sorok magasságát, a használt betűközt, a kapitalizációt (minden nagybetű, csak a kezdőbetűk nagyok, kiskapitálisok vagy minden kisbetű), sőt még az első sor első betűjét is külön beállíthatod.</p>

<p>A szöveget tartalmazó doboz stílusozásával további lehetőségeket kapsz a szöveg elrendezésének és a sorok hosszának beállítására. Ezeket a stílusokat elég, ha csak egyetlen helyen adod meg — a saját stíluslapodon —, és ez minden szövegedre érvényes lesz a teljes website-on keresztül (de adhatsz stílusokat csak bizonyos paragrafusoknak vagy dobozoknak is). Ráadásul, ha később úgy döntesz, hogy nagyobb betűket szeretnél a weblapokon, akkor elég csak egyetlen helyen megváltoztatni a betűméretet a stíluslapon.</p>

<h2 id="tippek">Gyors tippek</h2>

<p>Az alábbi néhány tipp segítségedre lehet a webes tipográfia használatában.</p>

<h3 id="tobb">Több betűtípus választása</h3>

<p>Jó módszernek számít, ha egy betűtípus megadásakor felsorolsz még néhány további típust is tartaléknak. Vagyis ahelyett, hogy egyszerűen annyit adnál meg, hogy „<code>Georgia</code>”, megadhatsz még néhány más típust is: „<code>Georgia, Cambria, &quot;Times New Roman&quot;, Times, serif</code>”. Így a böngésző először megpróbálja használni a Georgia nevű fontot, de ha ez nincs telepítve, akkor megpróbálja a következőt, a Cambriát, majd a Times New Romant, a Timest, és végül azt a fontot, amelyik az operációs rendszeren a „serif” (talpas) típushoz tartozik.</p>

<h3 id="hossz">A sorok hossza</h3>

<p>Az olvashatóság fenntartásához a sorok átlagos hossza egy szövegdobozon belül 40-60 karakter között kell legyen. Ez persze változhat a célcsoport szerint (a gyerekek a rövidebb sorokat, a felnőttek a hosszabbakat szeretik inkább). Az ideális sorhosszúságot az 5. ábrán láthatod:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/283-11-tipogrfia-a-weben/05-line-length.gif" alt="60 karakteres sorhosszúság" />
<p class="comment">5. ábra: 60 karakter egy sorban — az ideális sorhosszúság</p>

<p>A képen látható szövegben nagyjából 60 karakter található soronként. Ha ennél többet használsz, akkor az olvasónak el kell kezdenie mozgatni a szemét, sőt akár a fejét is, ha követni akarja a szöveget. Ez megerőlteti a szemet, és a szöveg is nehezebben olvasható.</p>

<h3 id="magassag">A sorok magassága</h3>

<p>A sormagasság a sorok közötti függőleges távolságot jelenti. Ha ezt egy kissé növeled a böngésző alapbeállításához képest, akkor ezzel javíthatsz az olvashatóságon (és több helyed marad az alsó- és felső indexekre is). A különbséget a 6. ábrán láthatod:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/283-11-tipogrfia-a-weben/06-line-height.gif" alt="Különböző sormagasságok" />
<p class="comment">6. ábra: A sormagasság módosítása sokat javíthat a szöveg olvashatóságán</p>

<p>A fenti képen az első bekezdésben az alapértelmezett sormagasságot használtuk, és ez egy kissé zsúfoltnak hat. A második bekezdésben ezzel szemben megnöveltük egy kicsit a sormagasságot, így a szöveg levegősebb lett, és valamivel jobban olvashatóbb. Az ennél nagyobb sormagasság viszont már túlságosan is széthúzná a szöveget, így az ismét nehezebben olvashatóvá válna, szóval csak óvatosan a sormagassággal.</p>

<h3 id="inicialek">Iniciálék</h3>

<p>A <code>first-letter</code> elem használatával (például <code>p:first-letter { }</code> formában) módosíthatod a bekezdés első sorának első betűjét a többi betűhöz képest. Ezt a betűt iniciálénak is nevezik, mivel általában 3–4 sornyi helyet foglal el a szövegben, ahogy a 7. ábrán láthatod.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/283-11-tipogrfia-a-weben/07-drop-cap.gif" alt="Iniciálé" />
<p class="comment">7. ábra: Egy tipikus iniciálé</p>

<h3 id="kiskaptilas">Kiskapitálisok</h3>

<p>A fontok gyakran tartalmaznak kiskapitális változatokat is — ez azt jelenti, hogy a betűk mind nagybetű formátumúak, viszont a kisbetűk helyén méretben a kisbetűk méretének felelnek meg. Ez akkor lehet hasznos, ha valamit nagybetűvel szeretnél írni, de nem akarod túlságosan ráterelni a figyelmet, például rövidítések esetében. Ha a rendszerben nincs is a típusnak kiskapitális változata, az sem gond — a böngésző ilyenkor generál saját kiskapitálisokat a nagybetűk alapján, lekicsinyítve őket az eredeti méretük 70–80%-ára. A 8. ábrán látható a különbség a nagybetűk (minden szó első betűje) és a kiskapitálisok (a többi betű) között.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/283-11-tipogrfia-a-weben/08-small-caps.gif" alt="Kiskapitálisok" />
<p class="comment">8. ábra: Kiskapitálisok akcióban</p>

<h3 id="kilogo">Kilógó írásjelek</h3>

<p>Jó tipográfiai hatást lehet kelteni a <code>text-indent</code> CSS tulajdonság használatával, ha a mondataid idézőjellel kezdődnek. Ha az előbbi tulajdonságnak negatív értéket adsz — akár relatív <code>em</code> értéket (<code>-10em</code>), pontokat  (<code>-10pt</code>), pixeleket  (<code>-10px</code>) vagy akár százalékot  (<code>-10%</code>) —, akkor az idézőjelet kihúzhatod a bekezdés elé, ahogy a 9. ábrán látható:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/283-11-tipogrfia-a-weben/09-hanging.gif" alt="Kilógó írásjelek" />
<p class="comment">9. ábra: Kilógó írásjelek</p>

<h3 id="irasjelek">Tipográfiailag helyes írásjelek és más elemek</h3>

Ha a szövegedet professzionálisabbá és elegánsabbá szeretnéd tenni, akkor érdemes használod a HTML kódok széles skáláját a tipográfiai jelek megjelenítéséhez, például a tipográfiailag helyes „idézőjelek”, valamint kötőjelek (–) és gondolatjelek (—) használatával. Sok blogíró és szövegszerkesztő környezet automatikusan kijavítja ezeket, átalakítva az egyszerű idézőjeleket és elválasztójeleket a helyes formájukra. A 10. ábrán egy tipográfiailag helyes jeleket tartalmazó — angol nyelvű — szöveget láthatsz.

<img src="http://forum-test.oslo.osa/kirby/content/articles/283-11-tipogrfia-a-weben/10-curly-quotes.gif" alt="Tipográfiailag helyes írásjelek" />
<p class="comment">10. ábra: Tipográfiailag helyes (angol) írásjelek</p>

<p>Amint elkezded a helyes tipográfiai jeleket használni, a szöveged máris sokkal elegánsabb és professzionálisabb megjelenést kap — mintha egy magazin vagy egy könyv lenne, és nem online szöveg. Ne feledd el azonban, hogy ezek a jelek egyes régebbi képernyőkön vagy az élsimítás nélküli megjelenítőkön pixelesek lehetnek, úgyhogy óvatosan használd őket.</p>

<p>Vannak olyan HTML elemek is, amelyeket a kódba illesztve speciális karaktereket is megjeleníthetsz, amelyeket máskülönben csak nehezen vagy egyáltalán nem érhetsz el a billentyűzetről. A 11. ábra több ilyen jelet is tartalmaz:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/283-11-tipogrfia-a-weben/11-entities.gif" alt="HTML jelek" />
<p class="comment">11. ábra: HTML jelek</p>

<p>Ezeket beírhatod kézzel, de a legtöbb szerkesztő szoftverben van valamilyen lehetőség az ilyen jelek beillesztésére vagy automatikus átkonvertálására.</p>

<h3 id="idezetek">Kiemelt idézetek</h3>

<p>A kiemelt idézetek rövid kivonatok a saját szövegedből, amelyek a lapon valahol a szöveg mellett vagy a szövegen belül jelennek meg nagyobb betűmérettel és sokszor más típussal is, hogy felhívják magukra a figyelmet. A legtöbb magazinban láthattál már ilyet, mivel ez egy hatékony módszer a szöveg felosztására és a fontosabb részek, kulcsszavak kiemelésére — ráadásul a weben nagyon könnyen alkalmazhatod ezt a módszert néhány egyszerű jelöléssel és stílusozással. Csak állítsd a szöveg méretét nagyobbra, esetleg másik betűtípusra, és állítsd lebegő módra, hogy a normál szöveg körbevegye, és már készen is vagy. A komolyabb megoldások között olyan módszert is találhatunk, amelyben egy JavaScript automatikusan kiemeli az idézetet a szövegből, így nem kell kétszer beírnunk azt a kódba.</p>

<h2 id="osszefoglalo">Összefoglaló</h2>

Szóval ez a tipográfia és a webes tipográfia; remélem, sikerült meggyőzzelek, hogy az online szövegek nem merülnek ki a <code>Verdana, small, #333333</code> formában — ezen kívül a tipográfiai trükkök széles tárháza áll a rendelkezésedre, amelyekkel kiemelheted a szövegedet a tömegből. A legtöbb website-ot az emberek azért látogatják, hogy elolvassák azt, amit a szerzőjük leírt nekik; így hát mindenképpen van értelme annak, ha ezt az olvasást megpróbálod a számukra könnyebbé és élvezetesebbé tenni.

<h2 id="tesztkerdesek">Tesztkérdések</h2>

<ul>
  <li>Mi a különbség az alávágás és a betűköz között, és melyiket lehet használni a kettő közül a weben?</li>
  <li>Hogy kerülheted el a szövegben a „fehér folyókat”?</li>
  <li>Nevezd meg a CSS-ben használható négy különböző kapitalizációt.</li>
  <li>Melyik a legjobb sorhossz a szövegeknek, és milyen tényezők befolyásolhatják ezt?</li>
  <li>Mi a különbség a talpas és a talpatlan típusok között? Adj egy példát mindegyikre.</li>
  <li>Miben különböznek a kilógó írásjelek a hagyományos írásjelektől?</li>
  <li>Ha be akarsz helyezni egy copyright jelet a szövegedbe, egy HTML kódot kell használnod. Nézz körül az interneten, és próbáld megkeresni az összes elérhető HTML jel kódját. Legalább 250 van belőlük!</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/10-szinsemak-es-designtervek/" title="hivatkozás a sorozat előző leírására">Előző leírás — Színsémák és designtervek</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/12-a-html-alapjai/">Következő leírás — A HTML alapjai</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<p>Miután nagykorúvá válva megpróbált szabadulni a sötét és komor Somersetből, Paul Haine frucsa módon ismét csapdába esett hat évre az ország másik végén a sötét és komor Kentben, ahol az unalmas történelemórák között a webes szabványokról tanult. Két év oxfordi tanulás és a <a href="http://www.friendsofed.com/book.html?isbn=9781590597651">HTML Mastery</a> megírása után átköltözött a híres londoni Islington negyedbe, ahol a <a href="http://www.guardian.co.uk/">The Guardian</a> kliens-oldali fejlesztőjeként dolgozott.</p>

<p>Paul személyes oldala, a <a href="http://joeblade.com">joeblade.com</a> jelenleg üres, valószínűleg halott.</p>
