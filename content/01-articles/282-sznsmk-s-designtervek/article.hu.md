Title: Színsémák és designtervek
----
Date: 2009-08-17 08:47:21
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/9-egy-site-keretenek-felepitese/" title="hivatkozás a sorozat előző leírására">Előző leírás — Egy site keretének felépítése</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/11-tipografia-a-weben/">Következő leírás — Tipográfia a weben</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Miután a webdesigner bemutatja a kliensnek a site vázlatos szerkezetét, felépítését, a következő lépés a színek és grafikák segítségével elkészíteni az oldal megjelenését. Ebben a leírásban bemutatjuk, hogyan lehet ez egyszerűen elvégezni mind a kliens, mind a saját részünkről. Én az egyszerűségben hiszek, aminek két fő oka van: először is, az élet éppen elég bonyolult anélkül is, hogy külön kanyarokat adnánk hozzá, másodszor pedig egy egyszerű terv jobban segít az oldal hozzáférhetőségének és használhatóságának megtartásában. Ebben a cikkben a következőket tanulhatod meg:</p>

<ul>
  <li>Meghatározni a címsorok, alcímek és a szövegtörzs betűképét, más tipográfiai elemekkel együtt.</li>
  <li>Több különböző színsémát készíteni az oldalhoz.</li>
  <li>Egy designtervet készíteni a kliensnek, hogy dönthessen a színekről és grafikákról.</li>
  <li>Eldönteni, hogyan tesztelheted a websiteot az „élesítés” előtt.</li>
</ul>

<p>A leírásban a következőkről lesz szó:</p>

<ul>
  <li><a href="#tipografia">Első lépés: néhány szó a tipográfiáról</a>
<ul>
  <li><a href="#betutipusok">Betűképek, betűtípusok</a></li>
  <li><a href="#olvashatosag">Olvashatóság</a></li>
</ul></li>
  <li><a href="#alkalmazas">Második lépés: a tipográfia alkalmazása</a>
<ul>
  <li><a href="#igazitas">Fontos az igazítás</a></li>
</ul></li>
  <li><a href="#szinek">Harmadik lépés: színek</a></li>
  <li><a href="#teszteles">Negyedik lépés: tesztelés</a></li>
  <li><a href="#osszefoglalo">Összefoglaló</a></li>
  <li><a href="#tesztkerdesek">Tesztkérdések</a></li>
</ul>

<h2 id="tipografia">Első lépés: néhány szó a tipográfiáról</h2>

<p>A tipográfiáról részletesebben <a href="http://dev.opera.com/articles/view/11-tipografia-a-weben/">a következő leírásban olvashatsz majd</a>, most csak néhány szempontot emelnék ki, amelyek hasznosak lehetnek ebben a fázisban.</p>

<p>A <a href="http://www.w3.org/TR/REC-CSS2/fonts.html">betűtípusokat</a>, vagy más néven „betűképeket” a szövegek, számok, karakterek és más szimbólumok megjelenítésére használjuk. Ezek a karakterek, szimbólumon, betűk és számok különböző szempontok alapján vannak kategorizálva, mint például családok (kapcsolódás alapján), stílus (dőlt, normál, rézsútos, stb.), változat (normál vagy kiskapitális), vastagság, nyújtás (szélesség és magasság összenyomása vagy széthúzása) vagy méret (szélesség és magasság pontokban vagy pixelekben). A tipográfia a szöveg elrendezése és megjelenése, így a tipográfia arra vonatkozik, hogy hol és hogyan jelennek meg a karakterek a lapon (oszlopok, paragrafusok, igazítás és egyebek). A lehető legjobb módja annak, hogy befolyásoljuk egy oldal tipográfiáját, az a <a href="http://www.w3.org/Style/CSS/">CSS</a> használata.</p>

<p>A webdesign elkészítésének egyik utolsó lépése az, hogy eldöntjük, milyen <a href="http://www.w3.org/TR/REC-CSS2/fonts.html">betűtípusokat</a> használunk a website különböző részein. Több tanulmány is született már arról, hogy a túl sok betűtípus egy oldalon belül összezavarja a felhasználókat. Másrészről, az olyan weboldal, amelyik csak egyetlen betűtípust használ, unalmasnak tűnhet.</p>

<p>Az én tanácsom az, hogy használjunk egy betűtípust a címsoroknak és az alcímeknek, és egy másik betűtípust a szövegtörzshöz, főleg akkor, ha reklámozni is szeretnél az oldalon. Egy betűtípus a címeknek és egy betűtípus a szövegeknek a teljes websiteon folyamatosságot biztosít a lapok között, és elég változatosságot teremt ahhoz, hogy az olvasó gyorsan megkülönböztethesse mindenhol a címeket a tartalomtól. A reklámok további változatosságot hoznak be, mivel nem tudhatjuk, hogy a reklámozó milyen betűtípusokat használ a megjelenített reklámokban.</p>

<p>Én többnyire Verdana betűtípust használok a szövegtörzsben, és Times New Roman vagy Georgia betűtípust a címsorokban, és ezekhez a teljes designer karrierem alatt tartottam magam. A Times New Roman és a Georgia talpas (serif) betűtípusok, míg a Verdana talpatlan (sans-serif). Hadd magyarázzam meg a különbséget a kettő között, és hogy miért maradtam végig ennél az egyszerű választásnál…
</p>

<p>Design okokból viszont előfordulhat az is, hogy egyetlen betűtípust szeretnél használni az egész oldalon, vagy csak két (és nem több) típust. Ahogy rövidesen látni fogjuk, a példa oldalunkon maradtam a Verdananál a szövegtörzs esetében, de mivel a logó Arial Black betűtípussal készült, így végül ugyanezt a talpatlan betűtípust használtam a címsorokban is. Néha meg kell szegned a saját szabályaidat is, és ez az elrendezés remek példa erre az eshetőségre.</p>

<h3 id="betutipusok">Betűképek, betűtípusok</h3>

<p>A betűtípusoknak négy nagy csoportja van, mégpedig a következők:</p>

<ol>

  <li><p><strong>Talpas vagy serif:</strong> minden olyan betűtípus, amely egy befejezett vonást, szélesedő vagy vékonyodó vonalvégeket tartalmaz, vagy talpas végei vannak (beleértve a lapos talpakat is), az ebbe a családba tartozik. Korábban a talpas típusokat főleg nyomtatásnál használták, mivel ezeket könnyebb egy nyomtatott szövegben elolvasni. Viszont a web nem olyan, mint a nyomtatott sajtó, így aztán <a href="http://www.wilsonweb.com/wmt6/html-email-fonts.htm">több tanulmány</a> készítése után kiderült, hogy itt bizonyos talpatlan betűtípusokat, mint például a 2. ábrán láthatót, a weblapok törzsében használva <a href="http://www.webaim.org/techniques/fonts/#readability">könnyebben lehet elolvasni</a>.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/282-10-sznsmk-s-designtervek/times.jpg" alt="Times New Roman" />
<p class="comment">1. ábra: Egy példa a talpas betűtípusra; Times New Roman, normál (nem dőlt vagy félkövér), 18 pontos</p>
</li>

  <li><p><strong>Talpatlan vagy sans-serif:</strong> minden olyan betűtípus, amelyben a vonásoknak egyszerű, sima végeik vannak, nem vékonyodnak vagy vastagodnak el, nincsenek benne talpak vagy más díszítések, azok ebbe a családba tartoznak. Bár <a href="http://www.hgrebdes.com/typefaces/fontresearch.php">egyes szerzők</a> azt állítják, hogy az olvashatósági tanulmányok egy lyukas garast sem érnek, mégis azt vettem észre, hogy ezeken az oldalakon is gyakran talpatlan betűtípust használnak a szövegtörzsnek. Sőt, még azok az oldalak is talpatlan típust használnak a szövegtörzs betűtípusának, amelyek azt állítják, hogy <a href="http://www.linotype.com/2258-16905/aboutlegibility.html">a talpas típus jobban olvasható</a>. Szóval én ebben az esetben egyszerűen követem a tömeget, és talpatlan betűtípust használok, mint amilyen a 2. ábrán látható betűtípus, amely mára már a web hagyományos szövegtörzs betűtípusa.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/282-10-sznsmk-s-designtervek/verdana.jpg" alt="Verdana" />
<p class="comment">2. ábra: Egy példa a talpatlan betűtípusra; Verdana, normál, 18 pontos</p>
</li>

  <li><p><strong>Írott vagy kurzív:</strong> ezek a betűtípusok általában egy kézzel írott, tollal vagy ecsettel készített betűkre hasonlítanak, és nem a nyomtatott betűkre, ahogyan az a 3. ábrán látható. Ebbe a családba beletartoznak a kézírásra hasonlító betűtípusok, még akkor is, ha egyébként nem kurzívak. Mivel a hosszabb szövegrészek az ilyen betűtípussal írva általában nehezen olvashatóak, így nem ajánlott ilyen típusú betűkészletet használni a szövegtörzsben (elég csak arra gondolnod, hogy milyen nehéz volt végigolvasni Margit nagynéni kézzel írott leveleit, vagy azt a 12. századi kéziratot, amit egyszer a múzeumban láttál). Ráadásul nem minden böngésző fogja ugyanazt a betűtípust megjeleníteni, úgyhogy ha te egy írott vagy kurzív típust választasz, egyes böngészők dönthetnek úgy, hogy mégis egy talpas betűtípussal jelenítik meg a szövegedet.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/282-10-sznsmk-s-designtervek/script.jpg" alt="Staccato" />
<p class="comment">3. ábra: Egy példa az írott betűtípusra; Staccato, 18 pontos</p>
</li>

  <li><p><strong>Különleges, valamint fix szélességű:</strong> a fix szélességű betűtípusok jellemzője, hogy minden karakternek pontosan ugyanakkora, rögzített szélessége van, hasonlóan egy írógéppel gépelt oldalhoz. Más fontoknak fantasy vonzatai vannak, mint például a 4. ábrán látható betűtípus. Az ilyen betűkészleteket általában díszítő elemként használják. A fix szélességű típusoknak is megvan a helye a weblapokon, például <a href="http://www.lowing.org/fonts/">programkódok megjelenítésére</a>. Ezt a típusú betűkészletet gyakran használják ilyen célokra, mivel így jól láthatóak az egyes karakterek és szimbólumok a kódban.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/282-10-sznsmk-s-designtervek/specialty.jpg" alt="Jokewood" />
<p class="comment">4. ábra: Egy példa a különleges betűtípusra; Jokewood, 18 pontos</p>
</li>
</ol>

<p>A betűk képeit megnézve feltűnhet, hogy nem egyforma méretűek, pedig mindegyik ugyanakkora pontmérettel készült. A pontméret egyetlen betű magasságát jelöli, és egyes betűkészletek nagyobbak lesznek 18 pontos méreten, mint mások. Más különbségek is vannak köztük, mint például a távolság a betűk és a szavak között, vagy az a tény, hogy mondjuk a Jokewood típusban nincsenek kisbetűk. Látható az is, hogy a Jokewood, valamint a Staccato írás nehezen lenne olvasható egy szövegtörzsben. Az ilyen betűtípusok is megtalálják a maguk helyét, kisméretű, címsor jellegű területeken vagy a reklámokban.</p>

<p>Érdemes megemlíteni még egy pontot, mégpedig hogy elfordulhat az, hogy ezek a betűtípusok nem fognak egyformán megjelenni a különböző böngészőkben, mivel ezek nem teljesen kompatibilisek egymással. Ezt egyszerűen értsd úgy, hogy nem minden böngésző jeleníti meg ugyanazokat a betűtípusokat. Ennek az az oka, hogy nem minden operációs rendszer támogatja a különböző betűtípusokat. Vagy talán támogatják ugyanazt a fontot, de már a variációi, a vastagsága vagy más tulajdonsága böngészőnként eltérhet. Emiatt ajánlott inkább <a href="http://www.upsdell.com/BrowserNews/res_fonts.htm">általános</a>, vagy csak egyszerűen „serif” vagy „sans-serif” betűtípusokat használni a weblap tipográfiájának megjelenítésére. Vagy választhatsz egy általános nevet és mellé annak a fontnak a nevét, amelyet választottál, aztán reméled a legjobbakat, mivel a felhasználóknak egyes esetekben lehetőségük van arra is, hogy átírják a betűtípust vagy annak megjelenését.</p>

<p>Az egyetlen mód arra, hogy egy bizonyos betűképet használj megadott stílussal, változattal, mérettel és vastagsággal, minden böngészőben egyformán, hogy készítesz egy képet ezzel a betűtípussal egy grafikus alkalmazásban. Ez viszont több okból sem ajánlott, egyrészt mivel elrejti magát a szöveget (a képernyő-felolvasók nem tudják elolvasni a képekbe írt szövegeket), valamint nehéz karbantartani (minden alkalommal, ha át akarod írni a szöveget, újra el kell készítened a képet). Higgy nekem, nem éri meg.</p>

<p>Ezek az okai annak, hogy mint webdesigner, néha el kell felejtened azt, hogy a web valójában egy rendkívül rugalmas formátum. Rengeteg dolog felett van befolyásod egy website designjában, ennek egyik eleme a tipográfia, de ez csak akkor hatékony, ha a lehető legegyszerűbben kezeled. Emiatt maradtam én hosszú évekig a szövegtörzseknél a Verdana, a címsoroknál pedig a Times New Roman vagy a Georgia mellett.</p>

<p>Eközben azért a betűkészletek készítői és a programozók folyamatosan dolgoznak azon, hogy <a href="http://brainstormsandraves.com/articles/typography/webfonts/">szebb és olvashatóbb</a> típusokat készítsenek. Szóval, adj egy csipet sót ahhoz, amit korábban mondtam, és ha úgy érzed, hogy működhet, próbálj ki valami újat. Hamar észre fogod venni, ha nem válik be, amint elkezded tesztelni a kódot a különböző böngészőkben (erről kicsit később fogunk beszélni ebben a leírásban).</p>

<h3 id="olvashatosag">Olvashatóság</h3>

<p>Amikor megmutatod a weboldal designját a kliensnek, valószínűleg nem fogja tudni, hogy mi a különbség a talpas és a talpatlan betűképek között. Amit tud, az csak annyi, hogy el tudja-e könnyen olvasni a lapot, vagy nem. Így végeredményben egyedül az olvashatóság számít. Emiatt meg kell győződnöd az alábbiakról:</p>

<ol>

  <li><strong>A választott betűtípus elég nagy ahhoz, hogy több felbontásban is olvasható maradjon.</strong> Bár a felhasználóknak általában van lehetőségük arra, hogy megváltoztassák a betűméreteket (például Operában), meg kell próbálnod úgy beállítani a méreteket, hogy azok olvashatóak maradjanak a különböző <a href="http://www.456bereastreet.com/archive/200611/resolution_vs_browser_size_vs_fixed_or_adaptive_width/">böngésző felbontásokban</a>. Erre egy jó módszer, ha a pixelméretek helyett <a href="http://www.rnib.org.uk/xpedio/groups/public/documents/publicwebsite/public_fontsizes.hcsp">százalékokat</a> vagy <em>em</em> méreteket használsz (ezt CSS-sel megteheted).</li>

  <li><strong>Elegendő kontraszt van a háttér és a szövegtörzs között.</strong> Egy fehér szöveg fekete háttéren hosszabb szövegek esetén <a href="http://www.456bereastreet.com/archive/200608/light_text_on_dark_background_vs_readability/">eléggé fárasztó a szemnek</a>, viszont ha mindenképpen ezt a vonalat akarod követni, biztosíts alternatív stíluslapokat, hogy a felhasználók átválthassanak sötét szövegre világos háttérrel, ha szeretnének.</li>

  <li><strong>A címsorok valóban különböznek a szövegtörzstől.</strong> A lehetőség, hogy a szövegedet feloszthatod több részre címsorokkal és alcímekkel, vagy például listákkal (mint amilyen ez is), egyszerűbbé teszi a felhasználóknak, hogy gyorsan átnézhessék a weblapot, és kiszűrjék belőle a fontos részeket. Ha képekkel osztod fel a szöveget, az is rendben van, viszont akkor a képeknek relevánsaknak kell lenniük, ellenkező esetben csak a sávszélességet vesztegeted.</li>

  <li><strong>Kerüld a szövegtörzs sorkizárt megjelenítését a teljes képernyő szélességében egy rugalmas elrendezés mellett.</strong> Próbálj meg elolvasni egy olyan bekezdést egy széles képernyőn, amely kihasználja a képernyő teljes szélességét. Hamar kifáraszthatod magad, mivel a szemeid és a fejed folyamatosan ide-oda mozog, ahogy a szöveget olvasod, a képernyő egyik szélétől a másikig. <a href="http://www.bastoky.com/Readability.htm">Nézd meg az 5. ábrán látható weboldalt</a> az olvashatóság szempontjából, amely nagyszerű példa egy olyan szélességre, amely olvasható marad különböző felbontásokon is. Ezen a képen láthatod azt is, hogyan olvassák az emberek a lapokat, függetlenül attól, hogy az webes vagy nyomtatott. A képet egy 24 colos képernyőn készítettem 1920 x 1200 felbontásban. Hasonlítsd össze ezt a képet azzal, amit a saját képernyődön látsz, ha a fenti linkre kattintasz. Nézd meg a saját képernyőd felbontását, hogy láthasd a különbséget. Néha a fix elrendezés nagyon hasznos, mivel szabályozza a szövegtörzs méretét, így az könnyen olvasható marad a látogatóknak. Ne aggódj amiatt, hogy a lap körül rengeteg kihasználatlan terület marad (mint a lenti képen is). Használj egy jó hátteret, ami nem vonja el a figyelmet a designról vagy a tartalomról, így gondolhatsz azokra is, akiknek széles képernyőjük van.</li>
</ol>

<p class="note">40-60 karakter általában megfelelő szélesség a szövegtörzsnek, de ez a különböző szempontok szerint változhat, mint például a betűméret vagy a célközönség.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/282-10-sznsmk-s-designtervek/width.jpg" alt="Egy lap egy 24 colos képernyőn" />
<p class="comment">5. ábra: Egy példa a helyes szélességre, egy széles képernyőn megjelenítve</p>

<p>Végül, de nem utolsósorban mindenképpen ellenőrizd le a szövegeidet és címsorokat az elírások és helyesírási hibák kiszűrése végett. Csak az ebben a cikkben szereplő hivatkozásoknak a felében találtam legalább egy elírást és néhány helyesírási hibát. Habár tévedni emberi dolog, a cég vagy a weboldal hitelessége szenved csorbát a helyesírási hibák vagy az egyszerű elírások miatt, amelyeket egyébként egyszerűen ki lehetne javítani.</p>

<h2 id="alkalmazas">Második lépés: a tipográfia alkalmazása</h2>

<p>Miután kiválasztottad a betűtípusokat a websitehoz, el kell helyezned az site korábban elkészített tervében a címsorokat, az alcímeket és szövegtörzseket. Az előző leírásban bemutattam egy képzeletbeli, „Wiki Whatevers” névre hallgató céget, akik meg akarták osztani az általuk írt kódrészleteket nyílt forráskódú anyagként. Elkészítettem a site felépítését, és örömmel jelenthetem, hogy tetszett nekik az elrendezés, amit mutattam! Bár ez a keret elég merev, viszont megakadályozza a klienst abban, hogy előítéletei legyenek azzal kapcsolatosan, hogy a különböző képek és grafikák hová kerülhetnek, beleértve a céges logót. A keret felépítése a 6. ábrán látható:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/282-10-sznsmk-s-designtervek/wireframe.jpg" alt="A Wiki Whatevers website vázlata" />
<p class="comment">6. ábra: A Wiki Whatevers website vázlata</p>

<p>Most pedig hozzá fogom adni a laphoz a logót és néhány olyan szöveget, amelyet a cég bocsátott a rendelkezésemre, hogy megnézhessem, hogyan jelenik meg az elrendezésen belül. Van még egy ok, amiért hozzá szeretném adni a logót és valamennyi tartalmat az oldalhoz már ezen a ponton az az, mégpedig azért, mert ezek befolyásolhatják a színválasztást a későbbiekben. A szövegek, a címsorok és a többi tipográfiai elemek a weblapon saját „színt” visznek az oldalba. Csak hasonlítsd össze a lenti 7. ábrát a felső 6. ábrával, és te is látni fogod a különbséget:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/282-10-sznsmk-s-designtervek/wireframe_copy.gif" alt="A Wiki Whatevers website feltöltött vázlata" />
<p class="comment">7. ábra: Az oldal vázlata a logóval és kitöltött szövegekkel</p>

<p>A fenti kép adott egy kis „színt” a weblaphoz, annak ellenére, hogy csak a logóban vannak valójában színek. A belehelyezett szöveg „tartalmat” adott az oldalnak, nem csak a keretet töltötte fel, hanem a megjelenést is feldobta a fehér, a fekete és a szürke árnyalataival. Csak azokat az elemeket adtam most hozzá, amelyek alapvetőek az oldalon: a logó, a website neve (ami egyben a cég neve is), a szlogen („Open Soruce Wikis”), a hivatkozások, a hírlevélre vagy a hírcsatornára feliratkozó link, a lábléc információk a cégről, szöveges hivatkozások és a reklámrészek. A keresőmező túl nagy ahhoz, hogy az oldalsávba tegyem, így az a fejlécbe került.</p>

<p class="note">Bár kész szövegekről beszéltem, valójában csak egy „tölteléket” használtam, amelyet a <a href="http://hu.lipsum.com/">Lorem Ipsum generátor</a> készített. Az ilyen generált szöveget nyugodtan behelyettesítheted a weblap szövege helyett, ha az még nem áll rendelkezésre.</p>

<h3 id="igazitas">Fontos az igazítás</h3>

<p>Ezen a ponton megmutatom, miért tettem a tartalmakat éppen azokra a pozíciókra, ahol vannak. Az igazítás azt jelenti, hogy egy bizonyos tartalmat a rendelkezésre álló terület egy bizonyos helyéhez igazítjuk. Igazíthatod balra, miközben a jobb oldal szabadon „lóg” a levegőben, ez a hagyományos elrendezés. Vagy igazíthatod a szöveget középre, használhatod sorkizártan (amikor mind a bal, mind a jobb oldal igazított), esetleg igazíthatod jobbra is, miközben a bal széle szabadon marad.</p>

<p>Én a hagyományos baloldali igazítást választottam, ahol a betűk egy egyenes sort alkotnak a baloldalon. De feltűnhet az, hogy a szövegtörzs kissé jobbra van igazítva a címsorokhoz képest. Ennek az elrendezésnek valójában a logó az oka. Itt egy nagyított illusztráció a 8. ábrán, amely megmagyarázza a döntésemet:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/282-10-sznsmk-s-designtervek/alignment.jpg" alt="Illeszkedés" />
<p class="comment">8. ábra: Illeszkedés a szövegben a logó alapján</p>

<p>Mivel ez nem egy díjnyertes logó, ezért egy kis méretet használtam. Ráadásul az Arial Black betűtípus a logóban még szélesebbé teszi a megjelenést, így arányaiban ez lesz a legnagyobb elem a lapon. Bár jelentősen lekicsinyítettem a logót, azért elég nagy maradt ahhoz, hogy elférjen mellette a rendelkezésre álló magasságon a cég neve és a szlogenje, az „Open Source Wikis”. A piros vonalak alapján láthatod, hogy a cég neve pontosan ugyanabba a magasságba került, mint a logó, míg a szlogen alja a fekete „W” aljához illeszkedik. Ha az első „W”-t nézed a logóban, akkor láthatod, hogy címsor kezdete a betű bal alsó széléhez illeszkedik. Mivel a logó ferde, így az alsó pontja segít rávezetni a tekintetet a címsorra a navigáció alatt. Valójában a navigáció csak másodlagos elemként jelenik meg, mivel a címsor a cég nevéhez hasonlóan ugyancsak félkövérrel van írva.</p>

<p>Ezen a ponton rájöttem, hogy a blogbejegyzések címeihez választott Georgia betűtípus túl élénk ehhez a területhez. Ezért a címsorok típusát átállítottam az Arial Black talpatlan betűtípusra, ami kissé különbözik a szövegtörzsben használt Verdanatól, de nem tér el annyira, hogy teljes káoszt okozzon.</p>

<p>Ez a lehetőség, hogy a különböző elemeket a weblap designjában több helyre lehet illeszteni, CSS használatával nagyon egyszerűen kivitelezhető. Bár egyes böngészők felülbírálhatják az igazítási törekvéseidet, azért a legtöbb esetben, ha pontosan megadod a kívánt pozíciót, akkor az jól jelenik meg. Ezért tudod a keresőmező alját a szlogen aljához igazítani, vagy a jobb szélét az alatta található mezőhöz, ahogy az a fenti példában is látszik.</p>

<p>Igazíthattam volna a szövegtörzset is a logó bal alsó sarkához, mint a címsoroknál, viszont a behúzás lehetőséget ad az olvasónak arra, hogy gyorsan átfussa a címsorokat, és azt a részt olvassa el, amelyik jobban érdekli. De minden weblap más és más, és egy eltérő logó teljesen más designt és igazításokat eredményezne. A lényeg az, hogy minden fontosabb elem a weblapon igazítva legyen, hogy szépen követhessék egymást. Az olvasó nem fogja észrevenni, hogy mennyit bajlódtál ezzel (sőt még a kliens sem, a legtöbb esetben). De ha nem foglalkozol eleget az illesztésekkel, akkor valaki előbb-utóbb meg fogja majd jegyezni, hogy „valami itt nem passzol”.</p>

<p>Ha egy kissé beljebb húzzuk a szövegtörzset, akkor egy üres hely is keletkezik előtte (ezt néha csatornának is nevezik), amely megkönnyíti az olvasónak, hogy szétválassza a szövegtörzset a weblap többi elemeitől. Az üres hely a szövegtörzs bal oldalán többnyire ugyanakkora szokott lenni, mint a jobb oldalán, így egyensúlyt teremthetsz. Az ilyen üres hely egy kis levegőt ad a weblapnak, így az nem lesz olyan zsúfolt.</p>

<p>Amikor legközelebb böngészel az interneten, nézd meg jól a látogatott weblapokat. Figyeld meg azokat a lapokat, amelyet jól designoltnak tűnnek számodra, vagy csak egyszerűen minden a helyén van rajta. Nézd meg a szövegtörzs, a címsorok, a logók és más elemek elhelyezkedését. Illeszkednek valamihez? Így talán észreveheted, ha a webdesigner elég időt fordított az apró részletekre is, hogy a design kevésbé legyen fontos, mint a tartalom; ami tulajdonképpen a jó design célja is egyben.</p>

<p>Azt garantálhatom, hogy az elkészült design problémákat fog okozni a különböző böngészőkben. Lehet, hogy a szöveg nem illeszkedik jól Safariban, viszont teljesen jó Operában és Firefoxban. Ez a munka is vár még ránk a későbbiekben, de csak azután, hogy kiválasztottuk a színeket.</p>

<p class="note">Talán néhányan közületek észrevették, hogy végül mégsem az Arial Black típust választottam az alcímekhez és a cég nevéhez. Azért maradtam végül a Times New Roman mellett, mivel ez a talpas betűtípus egy kis kontrasztot ad az oldalhoz, ezzel mintegy felhívja magára a figyelmet. Az Arial Black átfogó használatával az oldal eléggé unalmas lenne.</p>

<h2 id="szinek">Harmadik lépés: színek</h2>

<p>Miután elkészítettem egy website egyszerű vázlatát a kliensnek, rendszerint olyan sokáig várok a következő mintával, amilyen sokáig csak lehetséges, mielőtt újra megmutatnám neki. Ilyenkor már inkább kódot szeretek mutatni, ahelyett, hogy ismét egy képet mutatnék az elrendezésről. Ezzel a módszerrel már beletehetek a mintába több elemet is a websiteról, mint például a logót, szövegeket, sőt még reklámmintákat is, így a kliensnek sokkal jobb rálátása nyílik arra, hogy hogyan is fog a végén az oldal a végleges változatban megjelenni. Egy ilyen részletes elrendezéssel a kliensnek nem lesznek téves elképzelései arról, hogy a különböző elemek hogyan jelennek majd meg az oldalon. Emellett a kliens könnyebben dönthet arról is, hogy mit kellene még oldalhoz hozzáadni vagy törölni. Végül pedig, ha a modellt a kliensnek egy számítógépen tudom megmutatni, akkor fogalmat alkothat arról is, hogy hogyan néz majd ki a végleges oldal, amikor majd élesben meglátogatja.</p>

<p>A színek a „minden a helyén van” mentalitás részét képezik. Ennek az az oka, hogy a különböző színsémák jelentősen meg tudják változtatni a teljes website hangulatát, még akkor is, ha minden elem már a helyére került. Ezen kívül a lehetséges színminták számát igyekszem a minimumom tartani, mert a túl sok minta zavaró lehet. Ebben az esetben a kliens korlátozott költségvetéssel dolgozik, ezért rábeszéltem őket, hogy csak egyetlen színsémával dolgozzunk.</p>

<p>Amikor bemutattam a <a href="http://dev.opera.com/articles/view/8-a-szinek-elmelete/">színséma készítő eszközt a 8. leírásban</a>, nem említettem meg azt, hogy egy hexa értéket is megadhatsz alapszínként a színséma generálásakor. Közvetlenül a színkerék alatt találsz egy „Enter RGB” nevű hivatkozást. Mivel ebben az esetben a logóban látható arany volt a legerősebb szín, ezért ennek a hexa kódját adtam meg (<code>#eab304</code>), hogy láthassam a lehetőségeket. A monokróm színséma elég unalmasnak tűnt, viszont a kiegészítő színséma már ígéretesnek látszott. Ez a séma egy kék-lila színt dobott ki (a 9. ábrán látható), amellyel már tudok dolgozni, mivel a logó mögötti árnyék ugyancsak kék árnyalatú.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/282-10-sznsmk-s-designtervek/contrast.jpg" alt="Kiegészítő színséma" />
<p class="comment">9. ábra: Kiegészítő színséma az <code>#eab304</code> színre alapozva</p>

<p>Az itt látható színek alapján úgy döntöttem, hogy a felső navigáció hátterének a logó fő arany színét fogom használni. Egy sötétebb kéket (majdnem kék-lilát, <code>#2b0da4</code>) használok a hivatkozásoknál (amiket egyébként aláhúzok), és a reklámok hátteréhez ugyanennek a színnek használtam egy világosabb árnyalatát. A színek hozzáadása után az elrendezés jelenlegi állapotát a 10. ábrán láthatod:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/282-10-sznsmk-s-designtervek/wireframe_color.jpg" alt="Kiegészítő elrendezés" />
<p class="comment">10. ábra: A website vázlata kiegészítő színekkel</p>

<p>A képen jól látható, hogy ezek a színek túl sötétek és „nehezek” ehhez az oldalhoz. Így először a navigációs sáv színének az átlátszóságát beállítottam 75%-ra, majd a reklám hátterének az átlátszóságát egészen 20%-ra vittem le. A különbséget a 11. ábrán azonnal észreveheted:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/282-10-sznsmk-s-designtervek/wireframe_color_reduced.jpg" alt="Világosabb kiegészítő elrendezés" />
<p class="comment">11. ábra: A website vázlata a kiegészítő színek világosabb árnyalatával</p>

<p>A csökkentett színek a navigációs sávban jobban illeszkednek a logó színeihez. Az átlátszóbb, világosabb színek a reklámoknál jobban egyeznek a hivatkozások színeivel. Mivel a reklámmező ugyancsak hivatkozásokat tartalmaz, így a színválasztás illik az oldalsávhoz is. Az a tény, hogy színes hátteret választottunk a reklámoknak, jó dolog; ha olyan szolgáltatást használsz, mint a Google Adsense, akkor láthatod, hogy a Google szereti azt, ha a reklámok háttere más, mint a szövegtörzs háttere. A szlogenhez is egy új színt (<code>#2B0DA4</code>) választottam, így ez a kontrasztosabb kék szín végül keretbe fogja az egész oldalt.</p>

<p>Bár ez az elrendezés elég egyszerűnek tűnik, azért eltöltöttem azzal egy kis időt, hogy próbálgattam a színkerékből kapott színeket a hátterek, címsorok és a reklámok színeihez. Minden változtatásnál úgy tűnt, hogy a színezés túllép az egyszerű elrendezésen, így végül az egyszerű feketénél maradtam a betűk esetében (kivéve a szlogent). Még megadhattam volna egy „látogatott hivatkozás” színt is, de azt hiszem jobb lett így, hogy maradtam a két színből álló alapnál, és elkerülhettem a színkáoszt.</p>

<p>Ebben a lépésben láthatod azt is, hogy miért jó az, ha előre felépítjük a website egyszerű vázlatát. Ha már készen van a „váz” első terve, akkor a színek hozzáadása sokkal egyszerűbb, hiszen így már csak „vonalon belül kell maradni”. Ilyenkor hagyd, hogy az elrendezés mutassa meg, hogy melyek a legjobb színek ahelyett, hogy az elrendezésen utólag változtatnál. Másrészt, ha a designt meghagyod egyszerűnek, akkor hosszabb távon elegánsabb lesz az oldalad, ráadásul használható és hozzáférhető lesz.</p>

<p>Van még egy utolsó  jó indok arra, hogy az elrendezést egyszerűnek hagytam: a belső oldalakon ugyanis több kódrészlet is fog szerepelni, és ezek megjelenítéséhez egy fix szélességű betűtípust fogok használni, a legjobb módszereknek megfelelően. Ez az oka annak, hogy hasonló betűtípusokat választottam a szövegtörzshöz és a címsorhoz is. A fix szélességű típusok és reklámokban használt betűtípusok használata éppen elég változatosságot biztosít az oldal betűtípusaiban. Figyelj arra is, hogy a címsorokhoz és az alcímekhez a megfelelő elemeket használd (<code>h1</code>, <code>h2</code>, <code>h2</code>, stb) ahelyett, hogy vastagítanád (<code>strong</code>) vagy kiemelnéd (<code>em</code>). A megfelelő címsor elemekkel az oldalad használhatóbb lesz. Így a stílusfájlban (CSS) később egyszerre módosíthatod a címsorok és alcímek megjelenését.</p>

<p>Néhány megjegyzés még a fenti oldallal kapcsolatban:</p>

<ul>
  <li>A cég nevét a lap felső részén azért hagytam feketén, mivel ez továbbviszi a logóból a fekete színt az egész fejlécben.</li>
  <li>Az oldalsáv felső részén a szöveget középre igazítottam, hogy felhívjam a figyelmet a regisztrációs szolgáltatásra. Mivel a szövegmező teljes egészében kitölti az oldalsáv szélességét, így a középre igazított szöveggel egyensúlyban van, és így látszatra is összetartoznak az elemek.</li>
  <li>A középre igazított lábléc először úgy tűnik, mintha elcsúszott volna, de azt akartam, hogy elsősorban a szövegtörzshöz tartozzon, és nem az oldalsávhoz. A site növekedésével az oldalsávban szereplő linkek száma is növekedni fog, így jobb, ha már előre elválasztjuk a láblécet az oldalsávtól. Így a látogatók inkább az oldalsávban fognak további információk után keresni.</li>
</ul>

<p>Végül utolsó lépésként adok még néhány képet az oldalhoz. Azt leszámítva, amikor a kliensnek már van valamilyen használható képe, olyan képet érdemes választanod, amelyik „passzol” az oldal elrendezéséhez. Más szóval próbálj olyan képet keresni, amelyikben főleg az oldalon használt színek vannak. Ebben az esetben próbáltam egy kis humort vinni a lapba egy képgyűjtőből származó geek fotóval. Azért választottam ezt a képet, mert a fickó éppen szembenéz velünk, így ez a kép már a többi elem előtt meg tudja fogni a látogató tekintetét az oldalon. Nagyon örültem annak, hogy a pólóján a színek között van ahhoz hasonló arany és kék szín, mint amilyeneket az oldalon használtam. Végül a fekete napszemüvege tükrözi a lap fejlécének fekete beütését. Mindezek ellenére adtam Photoshopban egy kis kéket az árnyékokhoz, és egy kis sárgát a fényekhez, hogy még jobban illeszkedjen az általános színsémába.</p>

<p>Hozzáadtam még az oldalhoz egy sort a címkéknek, valamint egy dátumot, hogy a látogatók láthassák, milyen régi egy bejegyzés. Már ezek az elemek is „súlyosabbá” és zavaróbbá tették a siteot. Még egy ok arra, hogy miért kell a fontos információkat a lehető legegyszerűbben tartani: a látogatónak így is éppen elég kattintanivalója van, miután megnyitotta az oldalt. A 12. ábrán láthatod a végleges verziót:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/282-10-sznsmk-s-designtervek/Final_layout.jpg" alt="Az oldal végső elrendezése" />
<p class="comment">12. ábra: A végleges design, készen arra, hogy megmutassuk a kliensnek</p>

<p>A webdesign jó oldala az, hogy nem olyan, mint a nyomtatott design. A nyomtatás végleges; a web folyamatosan változik. Vagyis az évek során az oldal teljesen megváltozhat, reagálva a csapat növekedésére. A hibákat ki lehet javítani, a színeket meg lehet változtatni. Mégis jó az, ha a lehető legjobb terméket próbálod átadni a vevőnek, amikor elkészülsz a designnal. A legjobb termék nem csak a te hírnevedet növeli, hanem egyúttal a kliensed hírnevét is.</p>

<p>Most pedig még egyszer, utoljára átnézzük az elkészült terveket, mielőtt újra megmutatnánk a kliensnek.</p>

<h2 id="teszteles">Negyedik lépés: tesztelés</h2>

<p>A weblap tesztelése ezen a ponton azt jelenti, hogy a designer még egyszer átfésüli az oldalakat olyan hibák után kutatva, amelyeket egyszerűen ki lehet javítani még az oldal „élesítése” előtt. Több lehetőséged is van a tesztelésre, és több különféle tesztet is érdemes elvégezned.</p>

<ul>

  <li><strong>Tipográfia és hivatkozások tesztelése:</strong> a tipográfiai és a helyesírási hibák kereséséhez használhatsz barátokat, fórumozókat vagy professzionális szövega rel=szerkesztőket. Miközben átnézik az oldaladat, megkérheted őket arra is, hogy ellenőrizzék az oldalon található hivatkozásokat is, hogy biztosan működnek-e. Figyelj arra is, hogy a legtöbb megbízó nem szereti, ha az oldala már azelőtt kikerül valamilyen formában a publikus netre, mielőtt „élesítve” lenne a weben. Ilyen esetben építsd be egy szerkesztőnek az árát a számlába, és a szerkesztővel írass alá egy <a href="http://en.wikipedia.org/wiki/Non-disclosure_agreement">titoktartási szerződést</a>, amely kötelezi őt arra, hogy a website általa megismert tartalmát nem adhatja tovább.</li>

  <li><strong>Kód érvényességének ellenőrzése:</strong> használd a W3C validátorait a <a href="http://validator.w3.org/">HTML</a> és <a href="http://jigsaw.w3.org/css-validator/">CSS</a> kódjaidhoz minden olyan esetben, amikor valamilyen új kódot adsz az oldalhoz. Ha ezt nem végzed el, akkor a következő lépés félrevezethet, hiszen egy validálási hiba problémát okozhat egyes böngészőkben. Idővel megtanulod majd azt is, hogy minden olyan reklámkód, amelyet az oldalhoz adsz, nem lesz valid. Ennek ellenére ne írd át a reklámok kódjait, mert új hibákat vihetsz be a reklámokba. A legtöbb webdesigner már megszokta, hogy a reklámkódok ilyenek, és nem tudnak sokat tenni ez ellen. Szerencsére a reklámok általában nem okoznak problémát a következő lépésben sem.</li>

  <li><strong>Böngésző kompatibilitás tesztelése:</strong> most talán arra gondolsz, hogy ehhez be kell szerezned több különböző számítógépet és különböző méretű monitorokat, hogy minden operációs rendszeren és felbontásban le tudd tesztelni a weblapot. Ez viszont nem szükséges. A legtöbb webdesigner nem engedhet meg magának ekkora pazarlást, így hát kitaláltak <a href="http://afterlight.110mb.com/2007/06/07/5-ways-to-test-web-pages-across-several-web-browsers/">néhány módszert</a> arra, hogyan tesztelhetik le a weblapjukat a különböző böngészőkben. Az egyik ilyen, hogy több különböző verziójú böngészőt töltesz le ugyanarra a gépre. Megkérhetsz barátokat és fórumozókat, de a legjobb, ha olyan szolgáltatásokat használsz, amelyek képernyőképeket készítenek különböző rendszereken. Az ilyen rendszerek alapjában véve különböző rendszereken és böngészőkön készítenek képernyőképet a weboldaladról, így láthatod majd, ha a betűtípusod túl nagy az egyik felbontáson vagy túl kicsi egy másikon. Vagy felismerheted, ha valamelyik felhasználónak vízszintesen kellene görgetnie valamelyik böngészőben. A legtöbb esetben én az ilyen képernyőképes szolgáltatásokat használom, mivel a másik két módszer eléggé esetleges. Ráadásul nem szeretem idő előtt kiküldeni a kliens anyagait, ha ezt megoldhatom másképp, bizalmasan is. Elérhető néhány ingyenes szolgáltatás is erre a célra, de ezekkel azt tapasztaltam, hogy sokat kell várni az eredményre, és a lehetséges környezetek száma eléggé korlátozott. Így inkább fizetek egy keveset a <a href="http://www.browsercam.com/">BrowserCam</a> oldalon, mivel ők már bizonyították a megbízhatóságukat az évek során. Mivel van egy rövid ingyenes próbaidejük is, így ki tudod próbálni, hogy hogyan működik anélkül, hogy fizetned kellene.</li>

  <li><strong>Hozzáférhetőség és használhatóság tesztelése:</strong> a hozzáférhetőség tesztelésére is találhatsz néhány <a href="http://www.rnib.org.uk/xpedio/groups/public/documents/PublicWebsite/public_tools.hcsp">online eszközt</a> a weben. Egyes szolgáltatások segítségével egy képernyő-felolvasón keresztül „olvashatod” el az oldalt. Más eszközök javaslatokat tehetnek neked a kód módosítására vagy a színek javítására, hogy nagyobb kontrasztot biztosíts a gyengénlátó látogatóknak. A használhatóságra is találhatsz hasonló online eszközöket és <a href="http://www.pantos.org/atw/35317.html">tennivaló listákat</a>, amelyek segítenek abban, hogy a weboldal designját mindenki ugyanolyan könnyen használhassa.</li>
</ul>

<p>A tesztelés egy unalmas foglalkozás, és könnyen előfordulhat, hogy a remek kis designterved jól néz ki az egyik böngészőben, viszont a másikban olyan, mint a múlt heti újramelegített spagetti. Ilyenkor a legfontosabb, amire figyelned kell, hogy a tartalom mindig legyen elérhető; ha a teljes tartalom látható és hozzáférhető minden böngészőben, akkor az a kis üres rész a fejléc tetején, ami csak egyetlen böngészőben jelenik meg, már nem oszt, nem szoroz. Ha a felhasználók túlnyomó többségének nincs gondja az online anyagok elérésével a siteon belül, akkor  már elérted a célodat; sok designer elfelejti ezt, amikor azért küzd, hogy a díjnyertesnek gondolt desingja mindenhol pontosan ugyanúgy jelenjen meg.</p>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>Bár a színek és az elrendezés komoly vonzerővel bír a designereknél, azért a többi design elemmel is foglalkozni kell. A tipográfia, a képek, a képesség arra, hogy bevonjuk a kliens elképzeléseit a reklámokról a tervezésbe ugyancsak mind fontos részei a website designjának. A designer követi a kliens vágyait és elképzeléseit, felismeri az olvasók igényeit, hozzáférhető és használható oldalakat tervez és egy nagyszerű designt készít az oldalhoz, bár ezek az igények időnkét teljesen elborítják.</p>

<p>Különösen frusztráló lehet a kompatibilitás hiánya a különböző böngészők között. Bár voltak már törekvések korábban is a kompatibilitás elősegítésére, meg kell értened, hogy a kész designod néha önálló életre kel a különböző böngészőkben. Tudnod kell arról is, hogy egyes böngészőkben a felhasználók akár egyetlen gombnyomással teljesen megváltoztathatják az oldalad megjelenését. Letilthatják a képeket, a háttért, megváltoztathatják a szövegek színeit, kikapcsolhatják a JavaScript kódjaidat. </p>

<p>Másrészről, a kompatibilisebb környezet irányába mutató folyamatok és a web új, izgalmas korszakának a beköszönte új kihívásokat teremt a webdesignerek számára. Gondolj csak bele: még csak kevesebb, mint harminc éve érhetőek el az otthoni számítógépek a széles tömegek számára. Mi mindent hozhatnak még a következő évtizedek az olyan designereknek, akik lépést tartanak a változásokkal!</p>

<h2 id="tesztkerdesek">Tesztkérdések</h2>

<ul>
  <li>Melyek a négy legfontosabb betűtípuscsoportok?</li>
  <li>Milyen betűtípusok a legjobbak a szövegtörzshöz, és miért?</li>
  <li>Miért fontos, hogy elég kontraszt legyen a szövegtörzs betűszíne és háttérszíne között?</li>
  <li>Nevezz meg legalább két módszert egy oldal szövegének megtörésére.</li>
  <li>Mondj egy jó okot arra, hogy miért jó egy lap tipográfiáját még a képek hozzáadása előtt elkészíteni.</li>
  <li>Sorolj fel négyféle igazítási típust.</li>
  <li>Magyarázd meg, hogyan teheti az igazítás átláthatóbbá a weboldalt.</li>
  <li>Mi az a titoktartási szerződés, és mikor érdemes használnod?</li>
  <li>Miért fontos ellenőrizni a helyesírást a weblapon?</li>
  <li>Nevezz meg négy módszert a weblap tesztelésére az „élesítés” előtt.</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/9-egy-site-keretenek-felepitese/" title="hivatkozás a sorozat előző leírására">Előző leírás — Egy site keretének felépítése</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/11-tipografia-a-weben/">Következő leírás — Tipográfia a weben</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<img class="right" src="http://forum-test.oslo.osa/kirby/content/articles/282-10-sznsmk-s-designtervek/lindagoin.jpg" alt="Linda Goin" />

<p>Linda Goin művészeti diplomát (BFA) szerzett vizuális kommunikációban, kisvállalatok és a marketingjük részére, valamint egy Művészetek mestere (MA) címet az amerikai történelemből, részben a reformáció korából. Bár a második diplomája nem annyira illik az előző tanulmányaihoz, Linda a felhasználta a tanulmányaiban 25 éves design tapasztalatát egy archeológiai ásatásokkal kapcsolatos oldalról.</p>

<p>A munkájáért több elismerést is kapott, többek között tizenötször szerezte meg az első helyet a Colorado Press Association díjaknál, több művészeti és grafikus design díjat szerzett, és több interjút közöltek vele a tartalomfejlesztésről a The Wall St. Journal, Chicago Tribute, Psychology Today és L.A. Times lapokban. Linda több webdesign és hozzáférhetőségi témájú ebook szerzője, és mellette személyre szabott üzleti cikkeket is ír néhány hivatásos SEO számára.</p>
p
