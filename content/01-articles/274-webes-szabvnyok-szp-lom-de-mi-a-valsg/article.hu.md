Title: Webes szabványok — szép álom, de mi a valóság?
----
Date: 2009-08-17 08:47:01
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/4-a-webes-szabvanyok-modellje/" title="hivatkozás a sorozat előző leírására">Előző leírás — A webes szabványok modellje — HTML, CSS és JavaScript</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/6-informacios-architektura-egy-website-t/">Következő leírás — Információs Architektúra — egy website tervezése</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Egészen mostanáig a webes szabványok ideális, szép világáról volt szó. A szabványok segítségével ugyanúgy működnek a weblapok minden böngészőben, minden operációs rendszeren és minden elérhető elektronikus eszközön. De valóban ez a valóság? Valóban minden böngésző 100%-ig támogatja a szabványokat? Vajon minden fejlesztő egyformán jól használja a szabványokat? Szabványosan építik-e fel a webfejlesztők az oldalaikat, és aztán nyugodtan hátradőlnek, mert mindenhol tökéletesen működik az oldaluk?</p>

<p>Egy nagyon egyszerű válasz van ezekre a kérdésekre: nem. A fenti kérdések egy ideális helyzetre vonatkoznak, amely távol esik a valóságtól. Ebben a cikkben a következő témákkal fogunk foglalkozni:</p>

<ul>
<li><a href="#ellenorzes">Hogyan ellenőrizheted, hogy megfelelsz-e a szabványoknak?</a></li>

<li><a href="#szabvanytamogatas">Szabványtámogatás a jelenlegi weblapokon</a>
<ul>
<li><a href="#amazon">Amazon: Vásárlás szabványosan?</a></li>
<li><a href="#cnn">CNN: Szabványos hírek?</a></li>
<li><a href="#apple">Apple: az elegancia és a design csúcsa … de a validálásé is?</a></li>
<li><a href="#vizsgalat">Egy kis szabványtámogatási vizsgálat</a></li>
</ul></li>

<li><a href="#miertnincs">Miért hiányoznak a szabványos oldalak?</a>
<ul>
<li><a href="#oktatas">Oktatás</a></li>
<li><a href="#uzletiokok">Üzleti okok</a></li>
</ul></li>

<li><a href="#osszefoglalo">Összefoglaló</a></li>
<li><a href="#olvasnivalo">Olvasnivaló</a></li>
<li><a href="#tesztkerdesek">Tesztkérdések</a></li>

</ul>

<h2 id="ellenorzes">Hogyan ellenőrizheted, hogy megfelelsz-e a szabványoknak?</h2>

<p>Mielőtt belevágnánk a témába, felteheted magadban a kérdést: „Honnan lehet megtudni, hogy egy weblap használja a szabványokat?” Talán másképp néz ki, mint a többi weboldal?</p>

<p>Igen is meg nem is. A szabványos weboldalak, ha jól készítették el őket, nem néznek ki másképpen, mint az összetákolt, toldozott-foldozott weblapféleségek. Viszont az oldal forráskódja (amit a legtöbb böngészőben úgy nézhetsz meg, hogy jobb gombbal vagy a Ctrl-lal kattintasz egy weblapon, majd kiválasztod a „Forráskód” vagy egy ehhez hasonló menüpontot) már teljesen másképp néz ki. A szabványos weblap szép, tiszta jelölésekből áll, és csak kevés vagy egyáltalán semmilyen formázást nem tartalmaz a weblapra nézve. Ezt talán nem veszed még észre elsőre, de hidd el, a látássérültek, akik képernyő-felolvasókat használnak, vagy a keresőrobotok ezt azonnal észreveszik. A szabványok használatának előnyeiről már beszéltünk az előző leírásokban.</p>

<p>A legegyszerűbb módja a szabványosság ellenőrzésének egy egyszerű eszköz, az ún. validátor használata, amely online elérhető. A W3C (<em>World Wide Web Consortium</em>) ingyen elérhetővé tette a validátort a <a href="http://validator.w3.org/" title="the W3C HTML validator">http://validator.w3.org/</a> címen (lásd az 1. ábrán). Ezt az eszközt használhatod (sőt ajánlott használnod) fejlesztési hibák keresésére az (X)HTML kódodban. A CSS-t egy másik validátorral lehet ellenőrizni, amelyet a <a href="http://jigsaw.w3.org/css-validator/" title="the W3C CSS validator">http://jigsaw.w3.org/css-validator/</a> címen találsz. Kattints bátran ezekre a címekre, és ellenőrizd le néhány kedvenc oldalad forrását. (Itt jegyzem meg, hogy ez az oldal a blog.hu háttér miatt sajnos nem teljesen szabványos.)</p>

<img alt="A W3C validátor szerint az oldal érvényes XHTML 1.0 Strict szabványt használ." src="http://forum-test.oslo.osa/kirby/content/articles/274-5-webes-szabvnyok-szp-lom-de-mi-a-valsg/figure1.jpg" />
<p class="comment">1. ábra: A W3C validátora ellenőrzi a weblapokat, és megmutatja a lehetséges hibákat a jelölésekben.</p>

<p>Azzal, hogy meggyőződsz a weblapjaid érvényességéről, még nincs vége a harcnak. Hogyan ellenőrizhetjük, hogy a böngészők jól támogatják-e a szabványokat? A Web Standards Project készített egy tesztsorozatot, amelyeket Acid teszteknek neveztek el. Ezek a tesztek bonyolult HTML és CSS szabályokat tartalmaznak (és még néhány más szabályt is), amellyel ellenőrzik, hogy a böngészők jól jelenítik-e meg a különböző tesztekhez tartozó eseteket. Az Acid teszt utolsó verziója, az Acid3 még most is fejlesztés alatt áll. Az Acid tesztekről többet is olvashatsz az <a href="http://www.acidtests.org/" title="Acid tesztek honlapja">http://www.acidtests.org/</a> oldalon, ahol kipróbálhatod a tesztet a böngésződben is.</p>

<h2 id="szabvanytamogatas">Szabványtámogatás a jelenlegi weblapokon</h2>

<p>Vajon a nagyobb oldalak használják-e a webes szabványokat, vagy csak össze vannak dobálva? Nézzünk meg néhány nagyobb vállalatot a weben, hogy lássuk, hogyan értékeli őket a W3C validátora. Meg fogsz lepődni, hogy hány nagy oldal nem megy át a teszten; ettől azonban nem kell elcsüggedned, te még mindig megírhatod úgy az oldaladat, hogy az megfeleljen a szabványoknak. Az alábbi példákat olvasva ne felejtsd el azt sem, hogy minél nagyobb és bonyolultabb egy website, annál nehezebb benne megoldani, hogy átmenjen a validáláson (valamint figyelembe kell venni más szempontokat is, például a felhasznált technológiákat).</p>

<h3 id="amazon">Amazon: Vásárlás szabványosan?</h3>

<p>Valószínű, hogy ha vásároltál már valamit online, akkor belefutottál az <a href="http://www.amazon.com/" title="Az Amazon oldala">Amazon.com</a> oldalba (vagy valamelyik regionális változatába). Az Amazon a kibertér nagykereskedése, ahol mindent megtalálsz a könyvektől a CD-ken át az élelmiszerekig. De vajon átmegy-e az Amazon.com a validáláson? Nézd meg a 2. ábrát.</p>

<img alt="Az Amazonon rengeteg validálási hiba van" src="http://forum-test.oslo.osa/kirby/content/articles/274-5-webes-szabvnyok-szp-lom-de-mi-a-valsg/figure2.jpg" />
<p class="comment">2. ábra: Az Amazon sajnos megbukott! Nem csak jelölési hibákat tartalmaz, hanem még a doctype-ot sem adták meg (amely megmondhatná, hogy milyen HTML/XHTML verziót használnak).</p>

<p>Az Amazonnak azonban van mentsége a szabványtámogatás hiányára. Nincs nálam az Amazon fejlesztési naplója, de ha tippelnem kéne, azt mondanám, hogy az Amazon már egy jó ideje köztünk van, és valószínűleg még mindig ugyanazt a szoftvert használják a website futtatására, mint amit régebben. Mivel a webes szabványok csak az ezredforduló után kerültek képbe, valószínűsíthető, hogy az Amazon rendszerét még abban az időben fejlesztették, amikor a webes szabványok csak homályos elképzelések voltak néhány fejlesztő fejében. Azt gyanítom, hogy az Amazon is eleget szenved a régi rendszerük miatt, amit tovább kell foltozzanak minden fejlesztésnél.</p>

<h3 id="cnn">CNN: Szabványos hírek?</h3>

<p>A hírszolgáltatók vajon valóban rendszerezettek? A <a href="http://cnn.com/" title="A CNN oldala">CNN.com</a> egyike a legnagyobb médiaoldalaknak a weben. Kiterjedt nemzetközi kapcsolatokkal rendelkeznek, a híreket valós időben kell megjelenítsék, úgyhogy biztosan van egy képzett, belső webfejlesztő csapatuk, amely képes szabványos oldalakat gyártani számukra. Vagy mégsem? Nézd meg a 3. ábrát.</p>

<img alt="A CNN oldala szabványosabb, de azért megbukott." src="http://forum-test.oslo.osa/kirby/content/articles/274-5-webes-szabvnyok-szp-lom-de-mi-a-valsg/figure3.jpg" />
<p class="comment">3. ábra: A CNN.com (2008. április 15-én) 33 hibával megbukott. HTML 4.01 Transitional doctype-ot definiálnak, de sok helyen mégis XHTML jelölések vannak.</p>

<p>33 hiba egyáltalán nem rossz egy olyan méretű és komplexitású lapon, mint amilyen a CNN oldala. Ez a 33 hiba eredhet onnan (és itt megint csak találgatok), hogy a tartalomkezelő rendszerük nem szolgáltat teljes mértékben szabványos kódot, de a jelölési hibák származhatnak a hírek készítőitől is, akik az íráshoz ugyan értenek, de a webfejlesztéshez már nem; mindkét eshetőség esetén még elfogadhatóak a hibák.</p>

<h3 id="apple">Apple: az elegancia és a design csúcsa … de a validálásé is?</h3>

<p>Az Apple széles körben ismert a mutatós és jól használható szoftvereiről és hardvereiről. A termékbejelentéseik sokszor egy isteni kinyilatkoztatással érnek fel a hűséges rajongóhad számára. Az <a href="http://apple.com/" title="Az Apple oldala">Apple oldalát</a> (lásd a 4. ábrát) különösen szép design és rendezettség jellemzi, de vajon átmegy a validáláson is?</p>

<img alt="Az Apple weboldala már majdnem átmegy a validáláson" src="http://forum-test.oslo.osa/kirby/content/articles/274-5-webes-szabvnyok-szp-lom-de-mi-a-valsg/figure4.jpg" />
<p class="comment">4. ábra: Az Apple.com már nagyon közel van az érvényes HTML 4.01 Transitional jelöléshez. Az elenyésző 6 hiba az oldalon csak elírásokat és Safari-specifikus tageket takar.</p>

<p>Az Apple weboldala már nagyon közel áll a teljes validáláshoz. Valójában úgy 5 perc alatt ki lehetne javítani ezt a pár hibát, és akkor teljesen tiszta lenne az oldaluk. Egy hibát azért szeretnék kiemelni, mivel az Apple úgy döntött, hogy egy Safari-specifikus attribútumot használ a keresőmezőhöz (a <code>type=&quot;search&quot;</code> attribútumot fűzték hozzá). Safariban ez lehetővé teszi, hogy egy kis nagyító ikonra kattintva megnézhessük a korábbi kereséseket. Viszont más böngészőkben, például Operában vagy Internet Explorerben  csak egy egyszerű szövegmező jelenik meg.</p>

<h3 id="vizsgalat">Egy kis szabványtámogatási vizsgálat</h3>

<p>Ahelyett, hogy a fenti példákhoz hasonlóan még megvizsgálnánk néhány tucat weblapot, inkább gyorsítunk egy kicsit. A fennmaradó oldalakból készítettem egy kördiagramot, amelyen 40 vállalati weboldalt soroltam fel, amelyeket a Fortune 500 listáról, valamint az Alexa listája alapján a legforgalmasabb oldalak közül válogattam ki. Az 5. ábrán megnézheted, hogy mit találtam:</p>

<img alt="Az oldalak 85%-a megbukott a validáláson" src="http://forum-test.oslo.osa/kirby/content/articles/274-5-webes-szabvnyok-szp-lom-de-mi-a-valsg/figure5.jpg" />
<p class="comment">5. ábra: Az oldalak 85%-a valamilyen módon megbukott a validáláson. Egyes oldalakon több ezer hiba van, míg másokon csak néhány elírás itt-ott.</p>

<h2 id="miertnincs">Miért hiányoznak a szabványos oldalak?</h2>

<p>Sírni támad kedvünk: „miért, miért nem képesek validálni?” Talán ez egy kissé drámai, de gondolom valami hasonló futott át neked is az agyadon. Miért csak ilyen kevés oldal szabványos? Már beszéltem korábban néhány lehetséges okról, mint például a régi kereskedelmi rendszerek vagy a tartalomkezelő rendszerek, de vannak még a háttérben más okok is.</p>

<h3 id="oktatas">Oktatás</h3>

<p>
Megnéztem néhány oktatási intézményt, ahol vezetői információs rendszer (MIS) tanfolyamot, számítástechnikai és New Media tanfolyamot is tartottak, amelyek közül mindegyik foglalkozott weboldalak készítésével. Bár sok hasznos dolgot lehet ezeken a tanfolyamokon tanulni, azt nem igazán említették egyiken sem, hogy hogyan kell voltaképpen egy weblap kódját megírni. Miután megnéztem több egyetemi kurzus programját is, az volt az általános benyomásom, hogy az olyan webes nyelvek, mint a HTML, a CSS és a JavaScript még nem érik el a számítástechnikai programozás szintjét, viszont már túllépik a MIS vagy New Media jellegű tanfolyamok kereteit.</p>

<p>Mindezzel oda szeretnék kilyukadni, hogy a legtöbb oktatási tananyag nem tartalmaz részleteket ezekkel a témákkal kapcsolatosan. Fogadni mernék, hogy ha megkérdeznénk 10 webfejlesztőt, akik webes szabványokkal dolgoznak, hogy hol tanulták meg a szabványok használatát, legalább 9 azt válaszolná, hogy saját erőből (a maradék 1 fejlesztő meg nem válaszolna semmit, mert éppen azzal lenne elfoglalva, hogy az oldala rendesen működjön IE6-tal is).</p>

<p>A World Wide Web Consortium (W3C), aki a szabványok fejlesztéséért felelős, valamint a Web Standars Project (WaSP) még nem adta fel a küzdelmet, és megpróbálják mind a fejlesztőket, mint a böngészők gyártóit rávenni a jobb szabványtámogatásra.</p>

<p>Ez az egész kurzus éppen azért készült, hogy egy megfelelő technikai szintű tananyagot nyújtson a webes szabványok megismeréséhez és tanításához, és éppen azért ingyenes, hogy bárki fel tudja használni tanulásra. Szeretnénk megszüntetni néhány olyan indokot (bár talán mondhatnánk kifogást is), hogy miért nem használják az emberek a szabványokat. A várható előnyök ismeretében már igazán nem marad semmilyen kifogás a szabványok használatával szemben.</p>

<h3 id="uzletiokok">Üzleti okok</h3>

<p>Az egyik kedvenc weboldalamon, amely különböző vállalkozások web alapú startupjaival foglalkozik, többször is felmerült az a téma, hogy érdemes-e a webes szabványokat az ún. „Web 2.0 alkalmazásokban” felhasználni. Általában két táborra szakad a társaság, ahol az egyik oldal azt állítja, hogy van értelme (főleg az itt is felsorolt okok miatt), míg a másik tábor egyszerűen csak annyit mond, hogy „kit érdekel”.</p> 

<p>Való igaz, hogy a böngészők sokszor megbirkóznak az igazán rossz kódokkal is. A weblapod nem kell átmenjen a validáláson ahhoz, hogy minden nagyobb böngészőben helyesen jelenjen meg. Ezért aztán üzleti szempontból, ahol az idő egyenlő pénz, miért kellene validálásra pazarolni az energiát egyáltalán? Ha össze tudsz dobálni egy táblázat alapú weboldalt félóra alatt, vagy megírod az oldalt félóra alatt HTML-ben és CSS-ben, majd újabb félórát fordítasz a validálásra és arra, hogy minden böngészőben egyformán működjön, ráadásul a végeredmény minden nagyobb böngészőben egyforma lesz, akkor szerinted melyik lesz az egyszerűbb út?</p>

<p>Sokan az én generációmból (úgy 30 fölött) még azt tanulták a webfejlesztésről, hogy az elrendezést táblázatokkal, a formázást pedig a font taggel lehet megoldani. Ijesztő lehet újra megtanulni valamit, amikor a jelenlegi módszer továbbra is működik (még mindig jól mutat a legtöbb webböngészőben). A munkáltatók nem ismerik a különbséget; még soha nem hallottam, hogy egy manager a jelölés minőségéről beszélt volna egy performance review alatt. Szóval, hol van a motiváció?</p>

<p>Most már biztosan te is sejted, hogy én melyik oldalt pártolom, úgyhogy elárulhatom, hogy a régi, összedobált kód írása rövidlátásra utal. Tapasztalataim alapján egy szabványos weblap újratervezése sokkal, de sokkal egyszerűbb, mint egy összetákolt oldalé (mindkettőhöz volt szerencsém). Sajnos az az utópia, hogy az újratervezéskor egyáltalán nem kell hozzányúlni az XHTML részhez, az esetek többségében nem igaz, de azért nagyon közel áll hozzá. Ne felejtsd el azt sem, hogy manapság már sokkal több olyan álláshirdetést látni, amelyben elvárják a webes szabványok ismeretét, mint régebben.</p>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>Ebben a leírásban arról beszéltünk, hogy napjainkban mennyire vannak elterjedve a webes szabványok, hogyan ellenőrizheted le, hogy egy oldal használja-e a szabványokat, hány oldal használja jelenleg a szabványokat, és beszéltünk az okokról, hogy miért nem térnek át sokan még mindig a webes szabványokra. Ahogy azt fentebb láthattad, a felmerült indokok nem elég meggyőzőek, és könnyű túllépni rajtuk.</p>

<p>Te mit teszel, mint a jövő webfejlesztője? Töröd magad a szabványokkal (és folyatod a sorozat olvasását), vagy elindítasz egy grafikus szerkesztőt, és összedobsz egy oldalt táblázatokkal?</p>

<p>Nézzük más oldalról: az eddigi legkomolyabb indok, amelyet a szabványok használatával szemben olvastam, az az volt, hogy a szabványos fejlesztés időpocsékolás, mivel ezt sokkal tovább tart megtanulni, mint a régi módszerek használatát. De ha már úgyis meg kell tanulnod az egyiket, miért ne tanulnád meg egyből a helyes utat, miért ne spórolnál meg magadnak egy csomó bosszúságot? Úgy döntöttél, hogy weboldalakat akarsz készíteni, miért ne csinálnád akkor jól, ha már lehetőséged van rá?</p>

<h2 id="olvasnivalo">Olvasnivaló</h2>

<ul>
<li><a href="http://validator.w3.org/">W3C validátor</a>.</li>
<li><a href="http://www.w3.org/">A W3C weboldala (angolul)</a> (további információkkal a szabványokról és a tervezett ajánlásokról).</li>
<li><a href="http://www.webstandards.org/">A Web Standards Project (angolul)</a>.</li>
</ul>

<h2 id="tesztkerdesek">Tesztkérdések</h2>

<ul>
<li>Megnéztünk néhány „nagy” weboldalt, hogy átmennek-e a validáláson. Futtasd le a validálást azokon az oldalakon is, amelyeket gyakran látogatsz. Átmennek rajta? Ha nem, nézd meg, hogy milyen hibákon buknak meg.</li>
<li>Mi az a doctype? Mire jó?</li>
<li>Milyen előnyei vannak a webes szabványok használatának az üzleti életben?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/4-a-webes-szabvanyok-modellje/" title="hivatkozás a sorozat előző leírására">Előző leírás — A webes szabványok modellje — HTML, CSS és JavaScript</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/6-informacios-architektura-egy-website-t/">Következő leírás — Információs Architektúra — egy website tervezése</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<img class="right" src="http://forum-test.oslo.osa/kirby/content/articles/274-5-webes-szabvnyok-szp-lom-de-mi-a-valsg/Jonlane.jpg" alt="Jonathan Lane" />

<p>Jonathan Lane az <a href="http://industryinteractive.net/">Industry Interactive</a> vezetője, amely webfejlesztéssel, valamint webalkalmazások fejlesztésével foglalkozó cég Kanadában. A webfejlesztéssel a Lethbridge Curriculum Re-Development Center Egyetemen kezdett foglalkozni sok évvel ezelőtt mint webes projekt koordinátor.</p>

<p>A <a href="http://www.flyingtroll.com/">Flyingtroll</a> oldalon blogol, és jelenleg a <a href="http://www.mailmanagr.com/">Mailmanagr</a>-t fejleszti, ami egy email interfész a Basecamp projekt management alkalmazáshoz.</p>
