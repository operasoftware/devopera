Title: A színek elmélete
----
Date: 2009-08-17 08:47:15
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/7-mi-kell-egy-jo-weblaphoz/" title="hivatkozás a sorozat előző leírására">Előző leírás — Mi kell egy jó weblaphoz?</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/9-egy-site-keretenek-felepitese/">Következő leírás — Egy site keretének felépítése</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Színek és grafikák nélkül minden oldal <a href="http://www.useit.com/">Jakob Nielsen</a> álomoldala lehetne. Habár Nielsen filozófiája a lecsupaszított weboldalakkal igencsak hasznos a hozzáférhetőségi és használhatósági szempontok szerint, mégis a legtöbb webdesigner a felhasznált design elemekkel ott szeretné hagyni a keze nyomát azon, amin dolgozott. Szerencsére egy jó design úgy vihet színt egy weboldalra, hogy közben nem veszítjük el a használhatósági és hozzáférhetőségi előnyöket, feltéve, hogy a weblapot eleve így terveztük meg. Bár sok designernek semmilyen gondot nem okoz egy többfelhasználós website tervezése, mégis sokan kényelmetlenül érzik magukat, amikor ki kell válasszák a színeket és a grafikákat.</p>

<p>Ebben a leírásban átnézzük a színek alapjait és három egyszerű színsémát, amelyek alapján már képes leszel megtalálni a megfelelő színeket az oldaladhoz. Később lesz még egy másik leírás is a témáról, amelyben arról lesz szó, hogy hogyan választhatsz magadnak egyszerűen színeket. Végül is jobb a dicséreteket hallgatni az új webdesignnal kapcsolatban, mint vért izzadni a színválasztással. Ebben a leírásban a következő témákról lesz szó:</p>

<ul>
  <li><a href="#arnyalatok">Színek és árnyalatok</a>
<ul>
  <li><a href="#monokrom">Monokróm színsémák</a></li>
  <li><a href="#kiegeszito">Kiegészítő színsémák</a></li>
  <li><a href="#hidegmeleg">Hideg kontra meleg színek</a></li>
  <li><a href="#harmadolos">Harmadolós színsémák</a></li>
  <li><a href="#negyedelos">Negyedelős színsémák</a></li>
</ul></li>
  <li><a href="#osszefoglalo">Összefoglaló</a></li>
  <li><a href="#tesztkerdesek">Tesztkérdések</a></li>
</ul>

<h2 id="arnyalatok">Színek és árnyalatok</h2>

<p>A színeket és az árnyalatokat már régóta felosztották elsődleges, másodlagos és harmadlagos színekre. Az elsődleges színek a piros, a sárga és a kék, amelyek azért elsődlegesek, mert az előállításukhoz nem szükséges színeket összekeverni. Ha ezeket a színeket webes színekre akarod alakítani, akkor a hexa (hexadecimális) értéküket kell megadnod: <code>#ff0000</code>, <code>#ffff00</code>, és <code>#0033cc</code>, amint az az 1. ábrán látható:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/1.primary.jpg" alt="Elsődleges és másodlagos színek" />
<p class="comment">1. ábra: Az elsődleges és másodlagos színek, és a hozzájuk tartozó hexa értékek</p>

<p>A másodlagos színek az elsődleges színek keverékei, mégpedig a következők:</p>

<ul>
  <li>piros + sárga = narancssárga (<code>#ff9900</code>)</li>
  <li>sárga + kék = zöld (<code>#00cc00</code>)</li>
  <li>kék + piros = lila (<code>#660099</code>)</li>
</ul>

<p>A harmadlagos színek már a másodlagos színek keverékei, és az elsődleges és másodlagos színek között helyezkednek el, amint az az alábbi színkeréken látható. Bár a webes színek mások, mint a hagyományos „festett” színek, még jó lehet, ha <a href="http://colorwheelco.com/">kéznél van a színkerék</a> (lásd a 2. ábrán is), amikor a különböző színsémákkal ismerkedsz. A színkerék ezen kívül megmutatja a színek világos, szürke és sötét árnyalatait (tónusait), így képet alkothatsz arról, hogy milyen színek állnak majd a rendelkezésedre. Néhány fontos fogalmat érdemes letisztáznunk:</p>

<ul>
  <li>világos árnyalat – a kapott szín, amikor fehéret adunk hozzá</li>
  <li>szürke árnyalat – a kapott szín, amikor szürkét adunk hozzá</li>
  <li>sötét árnyalat – a kapott szín, amikor feketét adunk hozzá</li>
</ul>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/2.tints.jpg" alt="Árnyalatok és tónusok" />
<p class="comment">2. ábra: Egy valódi, nyomtatásnál használt színkerék</p>

<p>A nyilak a 2. ábrán különböző dolgokat jelölnek:</p>

<ul>
  <li>külső csík – harmadlagos sárga-narancs szín (sárga + narancssárga)</li>
  <li>második csík – az eredeti szín világos árnyalata (fehéret hozzáadva)</li>
  <li>harmadik csík – az eredeti szín szürke árnyalata (szürkét hozzáadva)</li>
  <li>belső csík – az eredeti szín sötét árnyalata (feketét hozzáadva)</li>
</ul>

<p>Amint az a színkeréken láthatod, elég egy kevés fehér, szürke vagy fekete színt hozzáadni a színhez, hogy azt megváltoztassuk, így hozhatjuk létre a monokróm néven ismert színsémát.</p>

<h3 id="monokrom">Monokróm színsémák</h3>

<p>Színsémákat már évszázadok óta használnak, úgyhogy nem kell újra feltalálnunk a színkereket. Habár a webes színek különböznek a nyomtatási színektől, ugyanazt az alapkoncepciót használják. Egyszerűen cseréld fel a hexa értékeket a színek nevével, és próbáld őket minél jobban behatárolni. Ehhez egy online eszközt tudok ajánlani, ez a <a href="http://www.wellstyled.com/tools/colorscheme2/index-en.html">Color Scheme Generator II</a>, amit a 3. ábrán láthatsz, ezzel gyorsan és egyszerűen meghatározhatod a színsémákat, valamint azt is ellenőrizheted, hogy a kiválasztott színek biztosítanak-e elegendő kontrasztot a gyengénlátó vagy a színvak felhasználók számára is.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/3.generator.jpg" alt="Color Scheme Generator" />
<p class="comment">3. ábra: Color Scheme Generator II</p>

<p class="note">Ha további információt szeretnél arról, hogy az általad választott színek elegendő kontrasztot nyújtanak-e, próbáld ki a Paciello Group <a href="http://www.paciellogroup.com/resources/contrast-analyser.html">Contrast Analyser</a> eszközét. Ezzel az eszközzel ellenőrizheted a kontrasztot a háttérszín és a szöveg színe között.</p>

<p>Ha elő akarod állítani az előbbi sárga-narancs színnek a különböző árnyalatait az online színséma készítővel, először válaszd ki azt a színt, amelyikre a piros nyíl mutat a képen. Ezután a színkerék alatti panelen válaszd ki a <strong>Mono</strong> gombot, majd a jobb alsó panelen a <strong>Default</strong> gombot. A jobb alsó lenyíló dobozban válaszd a <strong>Normal vision</strong> pontot. Ha nem vagy minimalista, akkor ne jelöld be fent a <strong>Reduce to &quot;safe&quot; colors</strong> (csak „biztonságos webes színek”) pontot.</p>

<p class="note">A „biztonságos webes színek” kifejezés még abból az időből származik, amikor a számítógépek képernyői csak 216 színt voltak képesek helyesen megjeleníteni. Ez a 216 szín ugyanúgy jelent meg a különböző platformokon és a 256 színnel működő (8 bites) böngészőkben, így a használatuk a platformok között is biztonságosnak számított. Néhány minimalista még mindig használja ezt a „webbiztos színpalettát”, bár a modern webböngészők már képesek a 24 bites színek helyes megjelenítésére is. A jelenlegi 24 bites, csatornánként 10-11 bites színábrázolás 16 777 216 színt képes megkülönböztetni. Más szóval, ma már biztonságosan kijelenthetjük, hogy a „webbiztos színpalettára” többé nincs igazán szükség.</p>

<p>Térjünk vissza a monokróm színsémára. A fenti lépések elvégzése után a következő eredményt kell kapnod: sárga-narancs (<code>#FFCC00</code>), világos árnyalat (<code>#FFF2BF</code>), szürke árnyalat (<code>#FFE680</code>), és sötét árnyalat (<code>#B38F00</code>). Ezek a hexa számok jóval megbízhatóbbak annál, mintha egy igazi színkereket próbálnál meg a böngésző színeihez igazítani. Amint a „Mono” előtag sugallja, ezek a színek egy monokróm színsémát állítanak elő, amint az a 4. ábrán láthatod.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/4.mono_1.jpg" alt="Monokróm színséma" />
<p class="comment">4. ábra: Egy monokróm színséma</p>

<p>Egy monokróm színséma egyetlen színből és annak világos és sötét árnyalataiból áll. Bár ezt a színsémát elég egyszerű használni, a legtöbb webdesigner nem lelkesedik érte. Nézzünk meg néhány más színsémát is, amelyekkel feldíszítheted a hivatkozásokat, képeket vagy reklámcsíkokat.</p>

<h3 id="kiegeszito">Kiegészítő színsémák</h3>

<p>A következő színséma család, amelyet jobban megnézünk, a kiegészítő színséma, amelyben mindig a színkerék ellentétes oldalán található színeket párosítjuk össze, ahogy azt az 5. ábrán láthatod.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/5.complementary.jpg" alt="Kiegészítő színsémák" />
<p class="comment">5. ábra: Példák kiegészítő színsémákra</p>

<p>Amikor kiválasztasz egy bizonyos színt és az ellentétes párját, akkor velük együtt kiválasztod mindkét szín sötét és világos árnyalatait is. Ez jóval nagyobb választási lehetőséget biztosít, és jól használható az online színséma készítővel is — nézd meg a 6. ábrán.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/6.complementary_2.jpg" alt="Online kiegészítő színséma" />
<p class="comment">6. ábra: Az online eszközzel készített kiegészítő színséma</p>

<p>A fenti képen a nyíllal jelölt narancssárga szín választottam, amelynek az ellentétes színe a kék. Ehhez a színsémához az alsó panelen a <strong>Contrast</strong> gombot kell kiválasztani, a jobboldali panelen a <strong>Default</strong> gombot, és a lenyílóban a <strong>Normal vision</strong> pontot. A kiválasztott fő színt egy kis fekete pötty, míg az ellentétes színt egy kis kör jelöli a színkerék belső részén. Ezekkel a jelölőkkel könnyebben tudod elemezni a választott színsémát.</p>

<p>A színkészítő segítségével könnyen választhatsz színt a normál és a látogatott hivatkozások vagy a képek színeihez, mivel megadja a színek hexa kódját a jobb felső sarokban. Bármelyik normál színt választhatod a felső színek közül, valamint kombinálhatod őket a színek világos, szürke vagy sötét árnyalatával, így egy megbízható színsémát készíthetsz.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/greenpeace.jpg" alt="Greenpeace oldala" />
<p class="comment">7. ábra: A Greenpeace oldala jó példa a kiegészítő színséma használatára</p>

<p>A <a href="http://www.greenpeace.org/usa/">Greenpeace USA</a> oldala (a 7. ábrán) egyike annak a rengeteg oldalnak, amely kiegészítő színsémát használ. Igen, láthatsz rajta sárgát és narancsot is, de a domináns színek a zöld és a piros — ezek a színek éppen a színkerék ellentétes oldalain állnak. Egy ilyen színsémával nem igazán ronthatod el a dolgokat. A „hideg” és „meleg” színek kombinációja viszont még jobban feldobhatja az oldaladat a színek kontrasztja által.</p>

<h3 id="hidegmeleg">Hideg kontra meleg színek</h3>

<p>A kiegészítő színsémák azért is nagyon népszerűek a weblapokon, mert egyszerre tartalmaznak hideg és meleg színeket. Az ilyen színek használata erős kontrasztot okoz, és nagyon könnyű megjegyezni, hogy melyek a „hideg” és melyek a „meleg” színek, ahogy azt a 8. ábrán, vagy a színséma készítő oldalon is láthatod:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/7.warm_cool.jpg" alt="Hideg és meleg színek" />
<p class="comment">8. ábra: Hideg és meleg színek</p>

<p>A meleg színek azok, amelyek a nyárra, a napra vagy a tűzre emlékeztetnek. Ezek a lilától kezdve egészen a sárgáig tartanak. A hideg színek viszont a tavaszra, a jégre vagy a vízre emlékeztetnek. Ezek a színek a zöldessárgától vissza a liláig találhatóak a színkeréken. Hamar felismerheted, hogy nem választhatsz egyetlen színt sem anélkül, hogy ne választanád ki az ellentettjét a másik „hőmérsékletből”. Ha kiválasztod a tűzforró vöröset, akkor egy hideg zöldet kapsz a másik oldalon. Ha viszont egy hűvös kékeszöldet választasz, akkor egy csípős piros-narancsot fogsz találni vele szemben.</p>

<p>Az <a href="http://www.ecolution.com/">Ecolution</a> jó példa egy olyan oldalra, amelyik következetesen használja a hideg és meleg színek kombinációját:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/8.warm_cool_site.jpg" alt="Ecolution oldala" />
<p class="comment">9. ábra: Az Ecolution oldala jó példa a hideg és meleg színek használatára</p>

<p>Az Ecolution általában pirosat használ hangsúlyos színnek, amely kontrasztban áll a zöld logójukkal. Az oldalon ezt a két színt és ezek árnyalatait keverik mindenütt. Még a képük sötét részei is „melegek” vagy „hidegek”, hasonlóan a világos részekhez. Összességében a fénykép „meleg”, ami így nagyon jól illeszkedik a határozott, erős zöldhöz. Bár az Ecolution ugyanazokat a színeket használja, mint a Greenpeace, mégsem „fénylik” úgy az oldaluk, köszönhetően a sötét és világos árnyalatok gazdag használatának.</p>

<p>Soha nem gondoltad volna, hogy a színelmélet ilyen egyszerű, nem igaz? Hát akkor… ideje lesz egy kicsit bonyolítani a dolgot…</p>

<h3 id="harmadolos">Harmadolós színsémák</h3>

<p>Harmadolós színsémát (lásd a 10. ábrán) úgy készíthetsz, hogy kiválasztasz egy színt a színkerékről, majd további két színt úgy, hogy a három szín egyenlő távolságra legyen egymástól:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/8.triadic.jpg" alt="Harmadolós színséma" />
<p class="comment">10. ábra: Egy harmadolós színséma</p>

<p>Azért választottam az elsődleges színeket, hogy megmutassam, a színsémák egy ragyogó módszert szolgáltatnak az őrülethez. Nem véletlenül kerültek az elsődleges színek éppen ezekre a helyekre a színkeréken, mivel mindegyik elsődleges színnek pontosan ugyanannyi másodlagos és harmadlagos színe van, mint a többi elsődlegesnek. De az elsődleges színekből készített harmadolós színséma már egy elhasznált, vaskalapos megoldás. Válasszunk helyettük inkább egy másik színt az online színséma készítőben, a 11. ábra szerint:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/9.triadic_2.jpg" alt="Harmadolós színséma készítése online" />
<p class="comment">11. ábra: Egy alternatív harmadolós színséma</p>

<p>A fenti harmadolós színséma sárga-narancssárga, kék-zöld és piros-lila színekből készült. Először a sárga-narancssárga színt választottuk ki (ezt a színkerék belső felén egy kis fekete pötty jelöli), majd az alsó panelen kiválasztottuk a <strong>Triad</strong> gombot. Az eszköz ezután automatikusan kiválasztotta a harmadolós színeket, valamint azok sötét és világos árnyalatait. A másik két választott színt a színkerék belső felén két kis kör jelöli, hasonlóan a monokróm példához.</p>

<p>Ebben az esetben jól jöhet egy valódi színkerék, mivel az online értékek nem felelnek meg annak, amit egy igazi színkerék produkál. A jobb eredményhez a bal alsó részben található <strong>Angle / Distance</strong> csúszkát fel kell húzni a maximumra. Így a fenti képen látható színeket kapjuk, amelyek már megfelelnek az igazi színkerék színeinek.</p>

<p>A harmadolós színsémában ugyancsak vannak hideg és meleg színek is, de az egyik hőmérséklet domináns lesz. Általában az a hőmérséklet lesz domináns, amelyikből az eredeti színt választottad. Ebben az esetben eredetileg egy sárga-narancssárga színt választottunk, amely egy meleg szín. A végeredményben a meleg színek jobban érvényesülnek, és a két ellentétes szín közül az egyik egy hideg kontraszt lett.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/10.triadic_site.jpg" alt="A Puzzle Pirates oldala" />
<p class="comment">12. ábra: A Puzzle Pirates jó példa a harmadolós színsémára</p>

<p>A 12. ábrán látható <a href="http://www.puzzlepirates.com/">Puzzle Pirates</a> oldala harmadolós színsémát használ a főoldalán. Ők az elsődleges piros-kék-sárga színsémát használják, és ez a színséma tökéletes egy gyerekoldal számára. Figyeld meg, hogy a kék szín érvényesül jobban, a pirosak és a sárgák hangsúlyozottabbak, ezek vezetik a tekintetet körbe az oldalon.</p>

<h3 id="negyedelos">Negyedelős színsémák</h3>

<p>Minél több színt választasz, annál bonyolultabb lesz a színsémád. Viszont van egy egyszerű trükk: elég, ha kiválasztasz mindegyik színhez egy világos vagy sötét árnyalatot, és aztán ehhez tartod magad az egész oldalon ahelyett, hogy a sima színeket és azok különböző árnyalatait kevernéd. Ez a módszer nagyon jól működik az olyan színsémák esetében, amelyek már négy színt használnak. A 13. ábrán látható séma hasonló a kiegészítő színsémához, viszont két kiegészítő színsémát tartalmaz, amelyek egyenlő távolságra vannak egymástól.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/11.tetrad.jpg" alt="Negyedelős színséma" />
<p class="comment">13. ábra: Egy negyedelős színséma</p>

<p>A 14. ábrán az online eszközzel készítettünk egy ilyen negyedelő színsémát:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/12.tetrad_online.jpg" alt="Negyedelős színséma készítése online" />
<p class="comment">14. ábra: Egy online készített negyedelős színséma</p>

<p>Figyeld meg a színkerék belső felén a fekete pöttyöt a piros alatt. Ez volt az első szín, amit kiválasztottunk, ezután az alsó panelen kiválasztottuk a <strong>Tetrad</strong> gombot. A négy szín, amely ezután megjelent, most sem felelt meg azoknak a színeknek, amelyeket a valódi színkerék mutatott a kezemben, így az <strong>Angle / Distance</strong> csúszkát még fel kellett húzzam a maximumra, ekkor a színek már megfeleltek a valódi színkerék színeinek. Az így kapott színeket láthatod a fenti képen.</p>

<p>Ez a színséma már elég bonyolultnak látszik, így az egyszerűsítés érdekében ki kell választanunk négy árnyalatot a választott színekből az eszköz jobb oldalán. A színeket a mellettük látható felfelé mutató nyilak segítségével váltogathatod. A 15. ábrán láthatsz egy példát, amelyben a négy alapszín világos árnyalatait választottuk ki ezzel a módszerrel:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/13.pastel.jpg" alt="Negyedelős világos árnyalatok" />
<p class="comment">15. ábra: Negyedelős világos árnyalatok</p>

<p>A 16. ábrán egy újabb példát láthatsz az eredeti színek szürke árnyalatait választva:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/14.midrange.jpg" alt="Negyedelős szürke árnyalatok" />
<p class="comment">16. ábra: Negyedelős szürke árnyalatok</p>

<p>Ha jobban megfigyeled, láthatod, hogy az online eszköz mindegyik színhez előállítja neked a monokróm színsémáját is. Ezeknek a színsémáknak a színeit az eszköz jobb oldalán, vagy színek nagy négyzeteinek a felső részén láthatod.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/goodall.jpg" alt="Jane Goodall oldala" />
<p class="comment">17. ábra: A Jane Goodall Institute oldala jó példa a negyedelős színséma használatára</p>

A <a href="http://www.janegoodall.org/">Jane Goodall Institute</a> oldala (a 17. ábrán) egyike azon kevés oldalaknak, amelyek igazán jól használják a negyedelős színsémát. Figyeld meg a lila és sárga szürke árnyalatokat, a piros kiemeléseket a fényképen (az oldal többi, itt nem látható részén még több ilyen van), és a zöldeket. Az itt használt lila szín nem felel meg egészen pontosan az online eszköz által generált színsémában található színnek (amely inkább egy piros-lila), de elég közel van ahhoz, hogy megmutassa, hogyan használhatod az online eszközt vagy az igazi színkereket az oldalad színeinek előállítására.

<p>Mostantól, ha a webet böngészed színek és design ötletek után, mindig legyen a kezed ügyében az igazi vagy az online színkerék, mivel ezekkel te is megnézheted, hogy milyen színsémát használnak valójában a kedvenc weboldalaid!</p>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>Bár a különböző színkombinációk első látásra bonyolultnak tűnnek, minden színséma megfelel valamilyen „szabálynak”. Ebből a leírásból megtudhattad, hogy melyik színek illenek jól össze egymással, hogy érdekesebbé és kontrasztosabbá tegyék az oldaladat.</p>

<p>A színkerekek azért vannak, hogy használják őket. A valódi színkerékkel vagy az online színséma készítővel a színek kiválasztása még egy tapasztalatlan designer számára sem okoz problémát.</p>

<p>Ebben a cikkben négy fontos színsémát mutattunk be: a monokróm, a kiegészítő, a harmadolós és a negyedelős színsémákat. Bár léteznek más színsémák is, ezt a négyet lehet a legegyszerűbben megérteni és megvalósítani.</p>

<h2 id="tesztkerdesek">Tesztkérdések</h2>

<p>Megjegyzés: az utolsó két kérdésre nincs „jó” vagy „rossz” válasz.</p>

<ul>
  <li>Nevezd meg a három elsődleges színt, és magyarázd meg, hogy miért nevezik őket elsődlegesnek.</li>
  <li>Nevezd meg a három másodlagos színt, és hogy melyik elsődleges színekből lehet előállítani őket.</li>
  <li>Magyarázd meg, hogyan lehet előállítani a világos, szürke és sötét árnyalatokat.</li>
  <li>Milyen a monokróm színséma?</li>
  <li>Milyen a kiegészítő színséma?</li>
  <li>Magyarázd meg, mik azok a „hideg” és „meleg” színek.</li>
  <li>Milyen a harmadolós színséma? Válassz három színt, amelyek megfelelnek ennek a sémának.</li>
  <li>Milyen a negyedelős színséma? Válassz négy színt, amelyek megfelelnek ennek a sémának.</li>
  <li>Melyik színsémát tudod a legkönnyebben használni?</li>
  <li>Melyik színséma tűnik számodra a legbonyolultabbnak?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/7-mi-kell-egy-jo-weblaphoz/" title="hivatkozás a sorozat előző leírására">Előző leírás — Mi kell egy jó weblaphoz?</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/9-egy-site-keretenek-felepitese/">Következő leírás — Egy site keretének felépítése</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<img class="right" src="http://forum-test.oslo.osa/kirby/content/articles/278-8-a-sznek-elmlete/lindagoin.jpg" alt="Linda Goin" />

<p>Linda Goin művészeti diplomát (BFA) szerzett vizuális kommunikációban, kisvállalatok és a marketingjük részére, valamint egy Művészetek mestere (MA) címet az amerikai történelemből, részben a reformáció korából. Bár a második diplomája nem annyira illik az előző tanulmányaihoz, Linda a felhasználta a tanulmányaiban 25 éves design tapasztalatát egy archeológiai ásatásokkal kapcsolatos oldalról.</p>

<p>A munkájáért több elismerést is kapott, többek között tizenötször szerezte meg az első helyet a Colorado Press Association díjaknál, több művészeti és grafikus design díjat szerzett, és több interjút közöltek vele a tartalomfejlesztésről a The Wall St. Journal, Chicago Tribute, Psychology Today és L.A. Times lapokban. Linda több webdesign és hozzáférhetőségi témájú ebook szerzője, és mellette személyre szabott üzleti cikkeket is ír néhány hivatásos SEO számára.</p>
