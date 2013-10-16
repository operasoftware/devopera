Title: A hozzáférhetőség tesztelése
----
Date: 2010-05-26 09:09:24
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
<li class="prev"><a href="http://dev.opera.com/articles/view/25-accessibility-basics-hu/" rev="prev" title="link to the previous article in the series">Előző leírás—A hozzáférhetőség alapjai</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/27-css-basics/" rel="next" title="link to the next article in the series">Következő leírás—CSS alapok</a></li>
<li><a href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom" rel="index">Tartalomjegyzék</a></li>
</ul>

<h2 id="">Bevezető</h2>

<p>A webes hozzáférhetőség tesztelése része a használhatóság tesztelésének, mikor a vizsgált felhasználók köre olyan mértékben akadályoztatott, hogy az hatással van arra, ahogyan a webet használja. A végső cél, a hozzáférhetőség és a használhatóság tekintetében is, hogy megtudjuk, mennyire könnyű a webhely használata az emberek számára, és hogy ezt az információt felhasználjuk fejlesztve ezzel a jövőben alkalmazott dizájnt és egyéb megoldásokat.</p>

<p>Általában a hozzáférhetőség felmérése a használhatóság teszteléséhez képest jóval előírásszerűbb. A törvények és a társadalmi megítélés helyteleníti a diszkriminációt a fogyatékkal élő emberekkel szemben. Azért, hogy mindenki igazságos elbánásban részesüljön, a kormányok és más szervezetek megpróbálnak ragaszkodni különböző webes hozzáférhetőségi szabványokhoz, mint pl. az Egyesült Államok szövetségi kormányának <a href="http://dev.opera.com/articles/view/25-accessibility-basics-hu/#section508">508. Szakaszában meghatározott törvényei</a> és a W3C által kiadott <a href="http://dev.opera.com/articles/view/25-accessibility-basics-hu/#WCAG1">Webes Tartalom Hozzáférhetőségének Irányelvei (Web Content Accessibility Guidelines - WCAG)</a>.</p>

<p>Ennek ellenére fontos különbséget tenni egy szabvány követése és egy webszájt hozzáférhetőségének maximalizálása között. Ideális esetben a kettőnek meg kellene egyeznie, de bármelyik adott szabvány elmulaszthatja:</p>

<ul>
<li>képviselni az összes, bármiféle akadályoztatottsággal rendelkező ember igényeit.</li>
<li>kiegyenlíteni a különböző akadályoztatottsággal rendelkező emberek igényei közti eltérést.</li>
<li>összhangba hozni ezeket az igényeket az optimális megoldásokkal.</li>
<li>közérthető nyelvet használni az igények és a megoldások megfogalmazására.</li>
</ul>

<p>Ezek a gyengeségek képesek eltéríteni a jó szándék vezette terveket a helyes útról és kihasználhatják őket azok, akik csak a hozzáférhetetlen termékek gépies jóváhagyására törekednek.</p>

<p>Mi több, a webes hozzáférhetőség egy cél és nem egy igen/nem beállítás. Az emberi igények és a technológia összekapcsolása. Ahogyan az emberi igényeink megértése mindinkább fejlődik és ahogyan a technológia igazodik ezekhez az igényekhez, a hozzáférhetőségi követelmények is változnak és a meglévő szabványok elavulttá válnak. Más webhelyek és más webek, eltérő igények kiszolgálása eltérő technológiákkal. A hangátvitelt biztosító chat-szolgáltatások, mint a Skype, nagyszerű megoldások vakok számára, míg a <a href="http://developer.yahoo.net/blog/archives/2008/05/yahoo_live_empo.html">videó chat egy nagy jótétemény a jelnyelvet használóknak</a>.</p>

<p>Az akadályozó tényezők speciális kihívások elé állítanak, mikor megpróbáljuk kitalálni, mennyire könnyű használni egy terméket, mert felhívhatják a figyelmünket további tapasztalati hiányosságokra a felhasználók és a kiértékelők között. A hozzáférhetőséget kiértékelőknek számításba kell venniük milyen megtapasztalni a webet különböző érzékelő- és kognitív képességekkel, illetve azokkal a változatos, szokatlan konfigurációs lehetőségekkel és speciális szoftverekkel, amelyek lehetővé teszik a web elérését a különböző formában akadályoztatott emberek számára.</p>

<p>Ha megpróbálod felbecsülni a webszájtod használhatóságát és hozzáférhetőségét, nehéz beleképzelni magad egy filmimádó tizenéves, vagy egy 50 éves banktisztviselő helyébe, akik a szájtodat használják, akkor is, ha az akadályoztató tényezőket még nem vetted figyelembe. De mi van akkor, ha a filmimádó tini süket és szüksége van feliratra a filmhez, amit néz? Mi van akkor, ha az 50 éves banktisztviselő vak, és speciális, a kiértékelést végző számára szokatlan technológiát használ (mint pl. egy képernyő-felolvasó) azért, hogy interakcióba tudjon lépni az asztali környezetével és a böngészővel?</p>

<p>A hozzáférhetőségi irányelvek és eszközök segítenek áthidalni ezeket a tapasztalati hiányosságokat. Azonban ezek kiegészítések és nem helyettesítik az empátiás képességet, a technikai leleményességet és a felhasználókkal való kommunikációt.</p>

<p>Ebben a leírásban a webes hozzáférhetőség felmérésének megközelítési módjait tárgyalom majd, mind a formai követelmények teljesítésének, mind a hozzáférhetőség maximalizálásának szempontjából. A leírás felépítése a következő:</p>

<ul>
<li><a href="#whentotest">Mikor kell tesztelni?</a></li>

<li><a href="#understandingrequirements">A követelményeid megértése</a>
<ul>
<li><a href="#externalreqs">Külső követelmények</a></li>
<li><a href="#conformance">A szabványkövetés részletei</a></li>
<li><a href="#exceedingexpectations">Felülmúlni az elvárásokat</a></li>
<li><a href="#importanceUI">A felhasználói felület fontossága</a></li>
<li><a href="#personas">Mintaszemélyek akadályozottságokkal</a></li>
<li><a href="#choosingastandard">Egy hozzáférhetőségi szabvány kiválasztása</a></li>
<li><a href="#spiritofthelaw">A törvény szelleme</a></li>
</ul>
</li>

<li><a href="#whoshouldtest">Kinek kell tesztelni?</a></li>

<li><a href="#experttesting">Szakértői tesztelés</a>
<ul>
<li><a href="#semiautomatedcheckers">Félautomata hozzáférési ellenőrzők</a></li>
<li><a href="#structuralinspectors">Szerkezeti ellenőrzők</a></li>
<li><a href="#screening">Screening és végfelhasználói kisegítő technológiák használata</a></li>
<li><a href="#detailedinspection">Részletes felülvizsgálat</a>
<ul>
<li><a href="#perceivability">Észlelhetőség</a></li>
<li><a href="#operability">Működtethetőség</a></li>
<li><a href="#understandability">Érthetőség</a></li>
<li><a href="#robustness">Robusztusság</a></li>
</ul>
</li>
</ul>
</li>

<li><a href="#usertesting">Felhasználói tesztelés</a>
<ul>
<li><a href="#recruitingtesters">Tesztelők toborzása</a></li>
<li><a href="#practicalconsiderations">Gyakorlati szempontok</a></li>
<li><a href="#choosingtasks">A feladatok kiválasztása</a></li>
<li><a href="#interpretingresults">Az eredmények értelmezése</a></li>
</ul>
</li>

<li><a href="#communicatingresults">A hozzáférhetőségi tesztelés eredményeinek továbbadása</a></li>
<li><a href="#summary">Összefoglaló</a></li>
<li><a href="#exercises">Tesztkérdések</a></li>
</ul>

<h2 id="whentotest">Mikor kell tesztelni?</h2>

<p>“Tesztelj korán, tesztelj gyakran” ahogyan egy régi szoftvertervező mondás tartja.
A tesztelés elodázása a fejlesztői folyamat végére két veszélyt rejt magában:</p>

<ol>
<li>A feladatok hajlamosak túllépni a határidőt és a rájuk fordítható anyagi keretet. A tesztelés általában sietős, elmulasztott, vagy figyelmen kívül hagyott, köszönhetően ezeknek a kényszerítő tényezőknek.</li>

<li>Több munkába kerül a később felfedezett problémákat kijavítani, mint ezt már a folyamat legelején elvégezni.</li>
</ol>

<p>Azért, hogy biztosítsuk a megfelelő minőséget, és időt, valamint pénzt spóroljunk, a hozzáférhetőség felmérését meg kell kezdeni már rögtön a tervezési folyamat elején és része kell legyen a következő fejlesztési fázisoknak a végső kiadásig.</p>

<h2 id="understandingrequirements">A követelményeid megértése</h2>

<p>Mielőtt kiértékelnéd a projektet a hozzáférhetőség szempontjából, meg kell határoznod, mik a kulcsfontosságú követelményei, megadva a környezetét, a megcélzott közönséget és az erőforrásokat. Néhány követelmény már meghatározott egy harmadik fél által, mint a kormány és az ügyfél; néhányat magad választhatsz.</p>

<h3 id="externalreqs">Külső követelmények</h3>

<p>Néha a követelményeknek külső forrása van, mint pl.:</p>

<ul>
<li><strong>Állami szervek</strong>. Ezek elsősorban az általános törvényhozást képviselik a fogyatékkal élő emberek diszkriminációja ellen, és nem adnak ki konkrét szabványokat vagy vesznek számba pontosan meghatározott követelményeket. Egy fontos kivétel ez alól, amikor a törvényhozás egy meghatározott szabvány alkalmazását írja elő az állami szektornak. Például <a href="http://www.section508.gov/">az 508. Szakasz</a> az amerikai szövetségi törvényi szabályozás részét képezi, amely előírja, hogy a szövetségi hatóságok számára készült webszájtoknak a meghatározott követelményeknek legalább egy adott csoportjához kell tartania magát. 
A WAI <a href="http://www.w3.org/WAI/Policy/">Webes Hozzáférhetőségre Vonatkozó Irányelveinek (Policies Relating to Web Accessibility)</a> oldala egy részleges listát kínál a hasonló szabályozásokról. Azonban, hogy hiteles ismertetést kapj a rád vonatkozó jogi követelményekkel kapcsolatban, konzultálj egy ügyvéddel.</li>
<li><strong>A megrendelő irányelvei</strong>. Például <a href="http://www.shell.com/home/content/footer/about_this_site/accessibility/">A Shell jelenleg megpróbálja biztosítani, hogy a webszájtjai elérik a WCAG 1.0 &quot;Dupla-A&quot; minősítési szintjét</a>, tehát ha a Shell számára készítenél webhelyet, akkor (legalább) ugyanehhez a szabványhoz kellene igazodnod.</li>
<li><strong>Értékesítési haszon</strong>. Egy meghatározott szabvány követése, mint pl. az 508. Szakasz segíthet eladni egy terméket azon ügyfeleknek, akik számára fontos a hozzáférhetőség.</li>
<li><strong>Belső hozzáférhetőségi irányelvek a cégednél</strong>. Például a BBC által előállított termékeknek eleget kell tenniük a <a href="http://www.bbc.co.uk/guidelines/futuremedia/accessibility/">BBC Hozzáférhetőségi Irányelvei v1.3 (BBC&#39;s Accessibility Guidelines v1.3)</a> szerint előírtaknak.</li>
</ul>

<h3 id="conformance">Az szabványkövetés részletei</h3>

<p>Fontos, hogy a külső követelmények egyértelműek legyenek, amennyire csak lehetséges. Néhány hozzáférhetőségi szabványnak több mint egy lehetséges szintje, vagy alkalmazandó típusa van, ezért rendkívül fontos, hogy leszögezd, melyikre van szükség. Például WCAG 1.0-nak 3 szabványkövetési szintje van:</p>

<ol>
<li>Néhány fogyatékkal élő ember “lehetetlennek fogja találni az információ elérését” egy olyan dokumentumban, ami nem teljesíti az “A” szintet.</li>
<li>Néhány fogyatékkal élő ember “nehéznek fogja találni az információ elérését” egy olyan dokumentumban, ami nem teljesíti az “Dupla-A” szintet.</li>
<li>Néhány fogyatékkal élő ember “bizonyos mértékig nehéznek fogja találni az információ elérését” egy olyan dokumentumban, ami nem teljesíti a “Tripla-A” szintet.</li>
</ol>

<p>WCAG 2.0 vázlatának is 3 szintje van, de a szabványkövetési lehetőségek komplikáltabbak. Ha egy megoldás egy olyan megoldásokból álló széria része, amelyek egy munkafolyamatot tesznek ki (pl. egy termék megkeresése, kiválasztása, ellenőrzése és a megvásárlás jóváhagyása egy online üzletben), az összes megoldás szabványkövetési szintje a szériában megegyezik a legalacsonyabb szinten lévő megoldáséval.
</p>

<p>A szabványkövetés igényeinek a “hozzáférhetőség szempontjából támogatott” tartalom technológiáján kell alapulnia. Azért, hogy egy hozzáférhetőség szempontjából támogatott tartalom technológiája legyen, annak:
</p>

<ul>
<li>bizonyíthatóan működnie kell a felhasználók kisegítő technológiáival is.</li>
<li>biztosítani kell, hogy a kliens eszközök (böngészők, pluginek, stb.) együttműködnek a felhasználók kisegítő technológiáival és elérhetőek az akadályoztatott felhasználóknak ugyanazon az áron, mint a nem akadályoztatott felhasználóknak.</li>
</ul>

<p>Fontos megjegyezni, hogy egy intranetes környezetben garantálhatod, hogy ezek a kliens eszközök elérhetőek a felhasználóknak, ellenben nem tudod garantálni ugyanezt a világhálón. Például egy alkalmazásnak használhatónak kell lennie bármilyen kereskedelmi forgalomban lévő technológia nélkül, de csak olyan képernyő-felolvasóval elérhető, amely fizetős pluginnel rendelkezik, és ehhez a cégnek helyhez kötött felhasználási engedélye van. Ez az alkalmazás igazodik a WCAG 2.0-hoz, mikor a cég intranetjén használják, de akkor nem, ha a nyilvános Weben.
</p>

<p>A WCAG 2.0 is engedélyez több limitált szabványkövetési nyilatkozatot. Egy hozzáférhetetlen erőforrást jóváhagyhat, ha egy hozzáférhető alternatíva is biztosítva van. A kiadók tehetnek egy nyilatkozatot a részleges támogatottságról, ha a tartalmat más forrásokból gyűjtik össze.</p>

<h3 id="exceedingexpectations">Felülmúlni az elvárásokat</h3>

<p>A külső követelmények meghatározása csak a folyamat első lépése kell legyen; alapkövetelményként kell tekinteni őket, amelyeket kiegészítenek a további célok, hogy a hozzáférhetőséget maximalizáljuk. Mint a hozzáférhetőség kiértékelőjének a te feladatod, hogy további figyelmet szentelj ennek, mivel te vagy a téma szakértője.</p>

<p>Különbséget kell tenned a kettő között a végső jelentés átadásakor. Például egy vevői megbízás egy online szupermarket létrehozására megemlíti, hogy az üzletet a vak felhasználók számára is hozzáférhetővé akarják tenni. Habár a célközönség adott, neked azt is meg kell vizsgálnod, hogy az üzlet hozzáférhető-e más fogyatékossággal élő felhasználók számára is.</p>

<p>Fontos megjegyezni, hogy egy adott szabvánnyal összhangban lévő külső követelmények nem feltétlenül szólnak az ellen, hogy más szabványok leginkább megfelelő irányelveit is alkalmazzuk. Tegyük fel, hogy egy szövetségi hatóság webhelyét értékeled ki, amelyet az idősebb lakosságnak szánnak használatra és megkövetelik, hogy kövesse az 508. Szakaszt. A Szakasz a következőket mondja ki:</p>

   <blockquote><p>
§ 1194.22 (c) A weboldalakat oly módon kell megtervezni, hogy az összes színnel rendelkező információnak elérhetőnek kell lennie színek nélkül is, például szöveg vagy kód segítségével.
</p></blockquote>

<p>Ez a rendelkezés segít azoknak a felhasználóknak, akik tudják, hogyan kell testre szabni a webes tartalom megjelenítését, de a tartalom alapértelmezett megjelenítésének hozzáférhetőségét nem maximalizálja a célközönség számára, biztosítva, hogy megfelelő a kontraszt a javasolt színek között. Szerencsére semmi sem akadályozhat meg egy webszájtot abban, hogy megfeleljen ezeknek az elvárásoknak, de emellett még alkalmazza a következő szint szerinti rendelkezést is a Webes Tartalom Hozzáférhetőségének Irányelvei 2.0 (Web Content Accessibility Guidelines 2.0) törvénytervezetből:</p>

<blockquote><p>1.4.3 Kontraszt (Minimum): A szöveg és a szöveghez tartozó kép legalább 5:1 kontrasztaránnyal rendelkezik, a következők kivételével: (AA Szint)
</p>
<ul><li>Nagyméretű nyomtatvány: Nagyméretű szöveg és a szöveghez tartozó nagyméretű kép legalább 3:1 kontrasztaránnyal rendelkezik;
</li>
<li>Kiegészítés: olyan szöveg, vagy a szöveghez tartozó kép, amely egy felhasználói felület inaktív részéhez tartozik, vagy amely letisztult díszítéssel rendelkezik, vagy olyan szöveg, amely a kép része, vagy amely bárki számára láthatatlan, annak nincs minimum meghatározott kontrasztaránya. 
</li></ul>
<p>Megjegyzés: Az 1.4.3 és 1.4.6 kikötés sikeres teljesítése történhet egy kontrasztarányt szabályozó eszköz segítségével ami az oldalon, vagy az oldalról elérhető.</p></blockquote>


   
<blockquote><p>1.4.6 Kontraszt (Fokozott): A szöveg és a szöveghez tartozó kép legalább 7:1 kontrasztaránnyal rendelkezik, a következők kivételével: (AAA Szint)</p>
<ul><li>Nagyméretű nyomtatvány: Nagyméretű szöveg és a szöveghez tartozó nagyméretű kép legalább 5:1 kontrasztaránnyal rendelkezik;
</li>
<li> Kiegészítés: olyan szöveg, vagy a szöveghez tartozó kép, amely egy felhasználói felület inaktív részéhez tartozik, vagy amely letisztult díszítéssel rendelkezik, vagy olyan szöveg, amely a kép része, vagy amely bárki számára láthatatlan, annak nincs minimum meghatározott kontrasztaránya.</li></ul>
<p>Megjegyzés: Az 1.4.3 és 1.4.6 kikötés sikeres teljesítése történhet egy kontrasztarányt szabályozó eszköz segítségével ami az oldalon, vagy az oldalról elérhető.</p></blockquote>

<p class="note">A kontrasztarány szabályozó alatt azt kell érteni, hogy biztosítanod kell egy lehetőséget a színeknek egy nagyobb kontrasztarányra történő változtatására. A színváltozatok kontrasztarányának teszteléséhez használhatod <a href="http://juicystudio.com/services/luminositycontrastratio.php">a Juicystudio színkontraszt analizálóját</a>.</p>

<p>A WCAG 2.0-t úgy tervezik, hogy magas szintű visszamenőleges kompatibilitással rendelkezzen más szabványokkal, főleg a WCAG 1.0-val és az 508. Szakasszal.</p>


<h3 id="importanceUI">A felhasználói felület fontossága </h3>

<p>Vizsgáljuk meg miért kiemelten fontos a felhasználói felület hozzáférhetővé tétele. Még akkor is, ha a tartalom nem áll rendelkezésre a megfelelő formában, egy hozzáférhető felhasználói felület segíthet a felhasználóknak azonosítani a tartalmat, amely érdekli őket és külső segítséget keresni hogy azt a számukra használható formába alakíthassák át. Például egy halláskárosult személy kiválaszthat egy videómegosztó szájtról egy olyan felvételt, amelyben beszélgetnek és nincs hozzá felirat. Mivel az URL pontosan azonosítja azt a videót, és mert ők is használhatják a lejátszót a videó megtekintéséhez, elküldhetik ezt egy harmadik félnek, mint pl. az ingyenes <a href="http://www.projectreadon.com/">Project readOn</a> szolgáltatónak feliratért.
</p>

<h3 id="personas">Mintaszemélyek akadályozottságokkal</h3>

<p>Egy ideális megközelítés lehet kulcsfontosságú akadályozó tényezőket építeni a tervedbe, egyenesen a különböző <a href="http://www.usability.gov/methods/analyze_current/personas.html">mintaszemélyeidhez</a> adva: kitalált személyekhez amelyek archetípusokat képviselnek szemléltetve azt, milyen meghatározott típusú felhasználók látogathatnak egy webszájtot. Mondjuk, prototípusokat értékelsz ki egy videómegosztó szájthoz és a mintaszemélyeid között a következők vannak:</p>

<ul>
<li>23 éves James Smith, aki futball-őrült és különösen szeret sporteseményeket megosztani a barátaival.</li>

<li>34 éves Sarah Maddison egy dolgozó anyuka, akinek általában nem sok ideje van a videómegosztó szájtokra. De a 3 éves kislánya imád videókat nézni, és Sarah le akar ülni segíteni neki a megfelelő videó megtalálásában, amit nézni akar.</li>
</ul>

<p>Veheted ezeket a mintaszemélyeket és felruházhatod őket fogyatékosságokkal, beleértve (például):
</p>

<ul>
<li>Csökkent látóképességet.</li>
<li>Színvakságot.</li>
<li>Vakságot.</li>
<li>Süketséget.</li>
<li>Halláscsökkenést.</li>
<li>Süketséget és vakságot egyszerre.</li>
<li>Epilepsziát.</li>
<li>Diszlexiát.</li>
</ul>

<p>Tegyük fel, úgy döntesz, hogy James süket is és a választott videók kommentárjaihoz feliratot akar, emellett Sarah csökkent látóképességgel rendelkezik és erőlködnie kell, hogy a díszes betűket, valamint az apró szöveget elolvashassa. Ezek a mintaszemélyek segítenek neked elvetni azokat a prototípusokat, amelyek nem tartalmazzák a  feliratozás opcióját a videólejátszóban, vagy bonyolultabb címsorokat alkalmaznak, amelyekhez képekre van szükség.</p>

<p>A WAI <a href="http://www.w3.org/WAI/EO/Drafts/PWD-Use-Web/">Hogyan használják a fogyatékkal élő emberek a Webet (How People with Disablities Use the Web)</a> című iránymutatása és a Shawn Lawton Henry <a href="http://www.uiaccess.com/accessucd/personas.html">Csak kérdezz: A hozzáférhetőség integrálása a dizájnba (Just Ask: Integrating Accessibility Throughout Design)</a> című írása még több példát tartalmaz hátrányos helyzetű mintaszemélyekre, amelyekből kiindulhatsz.</p>

<p>Mondanom sem kell, hogy ne feltételezd azt, hogy a fogyatékkal élő emberek felcserélhetők egymással. A fogyatékosság egy hihetetlenül változatos jelenség és ezen felül még a fogyatékos emberek szintén annyira sokfélék, mint akik nem azok, különböznek (például) nemük, koruk, érdeklődési körük, értékrendjük és képességeik (talán a leginkább idevágóan a számítógépes ismereteik) szerint.</p>

<p>Megint csak a termékek összevetése a hozzáférhetőségi irányelvekkel segíthet kitölteni a réseket, amiket a mintaszemélyeid nem fednek le. Például talán követed a WCAG 2.0-t a videómegosztó webhelyeddel, de a mintaszemélyeid nem tartalmaznak epilepsziás felhasználót. Azonban elolvasod a 2.3 Irányelvet (“Rohamok: Ne tervezzen olyan tartalmat, amiről ismert, hogy rohamokat okozhat”) és úgy döntesz, hogy a rendszernek képesnek kell lennie a feltöltött videókból kiszűrni a vibrálást a lejátszásuk előtt.</p>

<h3 id="choosingastandard">Egy hozzáférhetőségi szabvány kiválasztása</h3>

<p>Ha választanod kell egy hozzáférhetőségi szabványt azért, hogy meghatározd a webes hozzáférhetőséggel kapcsolatos feladatokat egy team-munka során vagy, hogy egyszerűen legyen mihez igazodnod a tesztelés alatt, én a WCAG 2.0-t ajánlanám, mert:</p>

<ul>
<li>olyan alapvető emberi szükségletekhez tervezték, amelyek a HTML-en és a CSS-en kívül más technológiákkal is összeegyeztethetők (mint pl. a Flash).
</li>
<li>az érvelés minden egyes szabványkövetési kritérium esetében körültekintően megalapozott. 
</li>
<li>használható szabványkövetési technikákat ajánl a legújabb technológiákra vonatkozóan. 
</li>
<li>biztosítja mindegyik előírás tesztelhetőségét.
</li>
<li>sokkal inkább felöleli a legutóbbi kutatások eredményeit, mint a többi alternatíva. </li>
<li>úgy tervezték, hogy széles körben kompatibilis legyen a meglévő hozzáférhetőségi szabványokkal.
</li>
<li>nemzetközileg elfogadott szabvány lesz.</li>
</ul>

<p>Hivatkozhatsz a WCAG 2.0 specifikus tervezetének teljesítésére; azonban üzleti célból mégis a legjobb, ha már befejezett szabványok követésére is törekszel, mint pl. az 508. Szakasz és a WCAG 1.0 a tervezet mellett. 
</p>

<h3 id="spiritofthelaw">A törvény szelleme</h3>

<p>Mikor az irányelveket követve tesztelünk, fontos, hogy ne tévesszük szem elől az adott technikai iránymutatás alapjául szolgáló logikai összefüggéseket: hogy a törvény szellemiségével és ne csak a betűivel álljunk összhangban.</p>

<p>Álljon itt egy tanulságos történet példaként. Az 508. Szakasz (§ 1194.22) tartalmaz egy követelményt, ami kimondja: “Minden nem-szöveges elemhez biztosítani kell egy szöveges megfelelőt (pl. egy <code>alt</code>, <code>longdesc</code> attribútumon keresztül, vagy az elem tartalmában).” Hasonlóan a WCAG 1.0 is tartalmaz egy megkötést, ami kimondja:</p>

<p>Biztosíts egy szöveges megfelelőt minden nem-szöveges elemnek (pl. egy <code>alt</code>, <code>longdesc</code> attribútumon keresztül, vagy az elem tartalmában). Ebbe beleértendők: a képek, szövegek grafikus reprezentálásai (beleértve a jeleket is), képtérképek részei, appletek és programozott objektumok, ASCII képek, keretek, scriptek, listaelemekhez tartozó képek, térközállítók, grafikus gombok, hangok (a felhasználó közreműködésével vagy anélkül lejátszhatók), önálló hangfájlok, videók hangsávjai, és videók.</p>

<p>Sajnos sok ember, aki ilyen utasításokat olvas, félreérti mi is valójában a szöveges megfelelő egy térközállítóhoz vagy díszítő elemhez, és ehhez hasonló kódot kreál:
</p>

<pre>&lt;img alt=&quot;díszes keret&quot; src=&quot;diszes_keret.gif&quot; border=&quot;0&quot;&gt;</pre>

<p>Valójában, amíg ezek a képek nem közölnek új információkat és nincs semmi funkciójuk, a helyes szöveges megfelelő ezekhez az elemekhez egy üres string kellene legyen (<code>alt=&quot;&quot;</code>), amelyek ráveszik a képernyő-felolvasókat, hogy egyszerűen ugorják át az alt attribútumot és ne olvassák fel azt. Nagyon idegesítő egy képernyő-felolvasót használónak, ha olyan szövegeket kell meghallgatnia újra és újra, mint a &quot;díszes keret&quot;, amelyek nem szolgálnak számára semmilyen hasznos információval.</p>

<p>WCAG 2.0 megpróbál egyértelműbben fogalmazni. A <a href="http://www.w3.org/TR/WCAG20/#text-equiv">szöveges megfelelő irányelve</a> <a href="http://www.w3c.hu/forditasok/WCAG20/#text-equiv">(magyarul itt elérhető) </a>kimondja: 
“Minden nem-szöveges tartalom rendelkezik egyenértékű szövegalternatívával, kivéve az alábbi esetekben”. Az egyik ezek közül: 
“Dekoráció, formázás, nem látható: Amennyiben a nem-szöveges tartalom csak dekoráció, vagy csak vizuális formázáshoz használt, vagy a felhasználók számára nem jelenik meg, akkor ez úgy legyen megvalósítva, hogy a kisegítő technológiák figyelmen kívül hagyhassák.” Ugyanilyen fontos, hogy a WCAG 2.0 megpróbálja részletesen kifejteni az <a href="http://www.w3.org/TR/2007/WD-UNDERSTANDING-WCAG20-20071211/text-equiv.html#text-equiv">irányelv</a> <a href=" http://www.w3c.hu/forditasok/UNDERSTANDING-WCAG20/text-equiv.html">(a magyar fordítása itt)</a> mögötti okfejtést:</p>

<blockquote><p>Jelen irányelv célja, hogy a nem-szöveges tartalmak szöveges  formátumban is hozzáférhetők legyenek. A &quot;szöveg&quot; kifejezés elektronikus szövegre utal és nem képként reprezentált szövegre. Az elektronikus szöveg rendelkezik a semleges megjelenítés különleges előnyével. Ez azt jelenti, hogy a szöveg a szükségletek függvényében átalakítható a láthatóság, hallhatóság, tapinthatóság, valamint ezek kombinációi szerint, így az elektronikus szöveg a felhasználó igényeinek legmegfelelőbb módon tehető hozzáférhetővé. Az olvasási nehézséggel küzdő felhasználók számára könnyedén nagyítható és kihangosítható, illetve a további igényeknek megfelelően tapinthatóvá tehető. </p></blockquote>

<h2 id="whoshouldtest">Kinek kell tesztelni?</h2>

<p>Alapvetően két csoport van, amelyek a tesztelést vezetik: szakértők és felhasználók.</p>

<p>A szakértői tesztelés fontos, mert ők értik meg, hogyan hatnak egymásra a mögöttes webes technológiák, klíringintézetként játszhatnak szerepet a különböző felhasználói csoportok ismeretében, és hajlandóak megismerni az ajánlott tesztelő eszközöket.</p>

<p>A felhasználói tesztelés döntő fontosságú, mert ők a saját képességeik és saját kisegítő technológiájuk valódi szakértői. A felhasználói tesztelés emellett felfedhet réseket a használhatóságban több vagy kevesebb gyakorlati felhasználó között, és olyan emberek között akiknek ismerős az adott webszájt (mint pl. maguk a szakértői tesztelők) és akiknek nem (új felhasználók).</p>

<p>Egy webfejlesztő, aki tudja, hogyan kell használni egy képernyő-felolvasót, nem ugyanúgy fedez fel egy szájtot, mint egy rendszeresen képernyő-felolvasót használó; azok a felolvasót használók, akik maguk programozzák a saját scriptjeiket valószínűleg nem azonos stratégiát használva ismerkednek meg a szájttal, mint azok a felolvasót használók, akik általában csak olyan számítógépes műveleteket végeznek, mint e-mailek írása.</p>

<p>A felhasználói tesztelésből nyert információ hatással van a következő szakértői tesztelés folyamatára (vagy ugyanannak a projektnek egy újabb tesztelésére, vagy egy teljesen más projektre). A felhasználói tesztelésnek van egy kevésbé kézzelfogható előnye is. A hozzáférhetőség kérdésének emberközelibbé tétele és a fejlesztők közelebb hozása a végső felhasználókhoz növelheti a hozzáférhető webszájtok létrehozása iránti motivációt.</p>

<h2 id="experttesting">Szakértői tesztelés</h2>

<p>A szakértői tesztelésnek négy alkotóeleme van:</p>

<ul>
<li>Eszközvezérelt kiértékelés: mikor egy eszköz hozzáférhetőségi problémák után kutat és megjeleníti őket a kiértékelőnek (ez tartalmazhat hozzáférhetőség ellenőrzőket és kódtisztítókat).
</li>
<li>Screening: mikor a szakértő a webszájt egy végfelhasználói élményét szimulálja. Gyakran nem is kell nagyon messzire menned, hogy megtaláld a hozzáférési problémákat. Talán nem kell többet tenned, mint letölteni az oldalt a böngésződbe és észrevenned, hogy a szöveg nagyon nehezen olvasható. 
</li>
<li>Eszköz alapú ellenőrzés: mikor a kiértékelő egy eszközt használ annak kipróbálására, hogy a webhely különböző részei hogyan működnek együtt. 
</li>
<li>Kódellenőrzés: mikor a kiértékelő egyenesen a webhely kódját és kiegészítéseit vizsgálja, hogy felkutassa a problémákat.</li>
</ul>

<p>Míg a kezdők főként az eszközvezérelt ellenőrzésre támaszkodhatnak, a minden szinten tapasztalattal rendelkező kiértékelők számára mindegyik komponens hasznos lehet. Még a kezdők is kiszúrhatják a szöveges megfelelő nélküli <code>img</code> elemeket a HTML kódban, és ahogyan több tapasztalatra teszel szert, gyorsabban észreveszed a hibákat, még mielőtt további alaposabb teszteket végzel. Egy nagyobb projekten dolgozó szakértők számára nem kivitelezhető, hogy minden kliens oldali kódot manuálisan átnézzenek, vagy egy webszájt minden részét ellenőrizzék, de egy eszközvezérelt kiértékelés találhat olyan problémás területeket, amelyeket érdemes közelebbről megvizsgálni. Emellett az emberi kiértékelők átnézhetnek olyan dolgok felett, amelyeket egy gépi ellenőrzés észrevesz.</p>

<p>Sajnos, habár egy csomó hozzáférhetőséget biztosító eszköz létezik, a legtöbb ezek közül így vagy úgy hibás. Például egy eszköz, ami kilistázza a címsorokat a HTML dokumentumban, elköveti azt a hibát, hogy nem látja el az <code>img</code> elemeket <code>alt</code> attribútummal. Csak úgy, mint ahogyan észben kell tartanod a törvény szellemiségét a szabványkövetés során, emlékezned kell rá akkor is, mikor ilyen eszközöket használsz. Mielőtt valakinek egy hozzáférési probléma miatt panaszkodsz, bizonyosodj meg róla, hogy az valós gond és nem egy eszközhiba.</p>

<h3 id="semiautomatedcheckers">Félautomata hozzáférési ellenőrzők</h3>

<p>Miután az első ránézésre felismerhető problémák ki vannak javítva, a következő lépés lehet az oldal alávetése egy félautomata hozzáférési ellenőrző eszköznek. Ha egy meghatározott szabvány szerint értékelsz, valószínűleg egy olyan eszközt szeretnél választani, amelyet kifejezetten ahhoz a szabványhoz terveztek.</p>

<p>Ha az 508. Szakasznak, vagy a WCAG 1.0-nak megfelelően értékelsz, akkor a <a href="http://www.cynthiasays.com/">Cynthia Says</a> egy ésszerű választás. Ha a német BITV 1.0 2 Szintjét, az olasz Stanca Act-ot, vagy a WCAG 2.0 törvénytervezetet követed a tesztelés során, az egyetlen létező megoldás a kísérleti fázisban lévő <a href="http://achecker.ca/checker/index.php">ATRC Web Accessibility Checker</a>.</p>


<p>Ezeknek az eszközöknek megvannak a jellemző korlátaik. Nem létezik olyasmi, hogy teljesen automatizált hozzáférési tesztelés. Például, ha a jelenlegi mesterséges intelligencia primitív voltát vesszük, nem lehet az utolsó szó a computer programé annak megállapításában, hogy egy szöveg valóban a hozzá tartozó kép megfelelője-e. Még olyan területeken is, amelyek elméletileg teljesen automatizáltak lehetnek, az ellenőrző programok tévedhetnek a hozzáférhetőségi irányelvek lefordítása során és elveszthetik a törvény szellemét annak betűi között.</p>

<p>A jó eszközök megvizsgálják az oldalt hozzáférési problémák után kutatva, és készítenek egy listát azokról a dolgokról, amelyeket hibaként értékeltek, és azokról amelyek szerintük emberi vizsgálatot igényelnek. Például, ha a Cynthia Says talál egy <code>img</code> elemet egy <code>alt=&quot;&quot;</code> attribútummal, egy figyelmeztetést (és nem hibaüzenetet!) küld a felhasználónak, miszerint “győződjön meg róla, hogy ez a kép csak térközhagyásra vagy díszítésre szolgál és nincs jelentése.” Ha a képnek megfelelő szövegnek egy üres stringnek kell lennie, akkor továbbmehetsz a következő hibára vagy figyelmeztetésre. </p>

<p>Talán a legnagyobb előnye a hozzáférési ellenőrzőknek az, hogy választasz olyat, mint pl. a <a href="http://www.tawdis.net/">TAW 3</a>, amellyel összetett URL-eket is ellenőriztethetsz, így nagyobb csoportokban is megtalálhatsz olyan oldalakat, amelyek valószínűleg közelebbi vizsgálatot igényelnek.</p>

<h3 id="structuralinspectors">Szerkezeti ellenőrzők</h3>

<p>Sok ellenőrző eszközt úgy terveztek, hogy a webes tartalom szerkezetét vizsgálják. A struktúrák, egyszerű megfogalmazásban, meghatározzák mik egy webszájt összetevői és azok milyen viszonyban állnak egymással. Például, a HTML dokumentum objektum modelljében (DOM) egy szöveg tekinthető egy űrlap mezőhöz tartozó címkének a <code>label</code> elemet használva. A böngésző a HTML-t dokumentum objektum modellként elemzi. A böngésző összerendel különböző viselkedéseket meghatározott alkotóelemekkel. Például, ha egy jelölőnégyzet címkéjére kattintasz, az alapesetben bejelölődik.</p>

<p>Az asztali környezetek és alkalmazások támogatják az interakciót a képernyő-felolvasókkal, a beszédfelismerő szoftverekkel és más kisegítő technológiákkal egy hasonló felépítést biztosítva amely megjeleníti a vizuális prezentációban elérhető tartalmat és funkciót. A Windows fő szerkezeti rendszerét Microsoft Active Accessibility (MSAA)-nek nevezik, vagy <a href="http://msdn.microsoft.com/en-us/library/ms788733.aspx">UI Automation-nek a Vistán</a>. Például egy párbeszédnek van egy sor hozzá tartozó gyereke, mint a címe, a mezői, a gombjai, és ezek címkéi.
</p>

<p>A tipikus kisegítő technológia a böngészők és a plugin-ek webes tartalom megjelenítését többnyire inkább a szerkezeti rendszerük figyelembe vételével kezeli, mint közvetlenül webes dokumentum objektum modellekkel.</p>

<p>Léteznek ellenőrzők mind az asztal-szintű struktúrákra, mind a web-szintű objektum modellekre. Az asztal-szintű dolgokhoz az OS X az <a href="http://developer.apple.com/library/mac/#documentation/Accessibility/Conceptual/AccessibilityMacOSX/OSXAXTesting/OSXAXTestingApps.html#//apple_ref/doc/uid/TP40001078-CH210-DontLinkElementID_9">Accessibility Inspector</a>-t és a <a href="http://developer.apple.com/library/mac/#documentation/Accessibility/Conceptual/AccessibilityMacOSX/OSXAXTesting/OSXAXTestingApps.html#//apple_ref/doc/uid/TP40001078-CH210-DontLinkElementID_9">Accessibility Verifier</a>-t. kínálja. A Microsoft ellenőrző eszközöket szolgáltat a <a href="http://www.microsoft.com/downloads/details.aspx?familyid=3755582A-A707-460A-BF21-1373316E13F0&amp;amp;displaylang=en">Microsoft Active Accessibility 2.0</a>-hoz és a <a href="http://www.microsoft.com/downloads/details.aspx?familyid=4179742F-1F3D-4115-A8BA-2F7A6022B533&amp;amp;displaylang=en">Microsoft Active Accessibility 1.3</a>-hoz. Az <a href="http://live.gnome.org/Accerciser">Accerciser</a> elérhető a GNOME kisegítő technológiájának SPI-je és API-je számára.</p>

<p>Az (X)HTML dokumentum objektum modellt megcélzó eszközök tartalmaznak DOM Ellenőrzőket, ahogyan az az <a href="http://www.opera.com/products/dragonfly/">Opera Dragonfly</a>-ban és a <a href="http://www.getfirebug.com/">Firebug</a>-ban látható és olyan hozzáférési eszközök kötegében mint a <a href="http://www.wat-c.org/tools/index.html">Webes Hozzáférési Eszköztár az Internet Explorerhez és az Operához</a> és a <a href="http://firefox.cita.uiuc.edu/">ICITA Firefox Hozzáférési Eszköztár</a>.</p>

<p>A DOM ellenőrzők megmutatják neked az elemek, attribútumaik és a szöveg fás szerkezetét, amelyet az (X)HTML sorba rendezéséből állít elő, míg ellenben a webes hozzáférési ellenőrzők kiemelik az adott összetevőket vagy a kapcsolati rendszereket és listázzák őket. Például kilistázhatják az összes mezőt a címkéikkel vagy az összes címsort vagy linket.</p>

<p>Nem feltétlenül szükséges mélyre ásni a hozzáférési modellbe (X)HTML esetében, habár talán közelebbről is meg akarod vizsgálni ezt a réteget, ha úgy gondolod, hogy egy böngésző egy hibátlan (X)HTML struktúrát helytelenül jelenít meg a kisegítő technológia számára. Ehelyett alapesetben az (X)HTML szerkezetét közvetlenül fogod ellenőrizni.</p>

<p>Nem minden tartalom vizsgálható meg DOM, illetve webes hozzáférési ellenőrzőkkel. Fontos annak megvizsgálása, hogy mivel lesz dolguk az asztal-szintű hozzáférési szerkezeteknek azért, hogy ellenőrizzük milyen plugin tartalmak (média lejátszók, Flash tartalmak és Java appletek) kerülnek azok elé a kisegítő technológiák elé, amelyek az adott hozzáférési modellt használják.</p>

<p>Nagy általánosságban, ellenőrizned kell azt, hogy minden vezérlő a megfelelő szerepben jelenik meg a modellben (pl. a dobozok dobozok, a gombok gombok), és a szükséges tulajdonságokat.</p>

<h3 id="screening">Screening és végfelhasználói kisegítő technológiák használata</h3>

<p>A screening magában foglalja a korlátozott emberek tapasztalatainak utánzását a tesztelés során. Ez megnyilvánulhat különféle formában a kisegítő technológiák használatától a szájttal történő interakcióig, vagy bárki képességeinek korlátozására irányuló kísérletig valamilyen módon. Például: 
</p>

<ul>
<li>Egy szájba vehető mutatóeszköz (mouthstick) használata a billentyűk lenyomásához a billentyűzettel való hozzáférés tesztelésekor.</li>
<li>Egy oldal megtekintése Vischeck szimulátorra, amely megpróbálja úgy megjeleníteni az oldalt, a képeket is beleértve, ahogyan a különféle színvaksággal küzdő emberek láthatják.</li>
<li>A monitor kikapcsolása mialatt a böngészővel együttműködő képernyő-felolvasót használunk.</li>
</ul>

<p>A screening segíthet a fejlesztőknek a fogyatékkal élő emberek igényeinek felbecsülésében és felfedhet néhány alapvető tervezési hibát. A kisegítő technológiák használata tisztázhat bizonyos félreértéseket azzal kapcsolatban, hogy ezek miként támogatják (vagy nem) a webes szabványokat, illetve hogyan hatnak rájuk. Például a népszerű képernyő-felolvasók nem használnak olyan stílusokat, amelyeket az <code>aural</code> vagy a <code>braille</code> CSS média típusokhoz ajánlanak, ehelyett megpróbálják a <code>screen</code> típust megjeleníteni, amelyet azok a vizuális böngészők nyújtanak, amelyekkel kommunikálnak. </p>

<p>A kisegítő technológia használata nem egy olyan feladat, amit könnyen lehet venni, mivel annak megértése, hogyan használjunk ilyen módszereket bizonyos fokú elmélyedést és gyakorlást kíván. Nagy a kockázata annak, hogy újabb téveszméket hozunk létre. A fejlesztők küszködhetnek, hogy kezdjenek valamit egy képernyő-felolvasóval, és azt feltételezhetik, hogy ez a felolvasó tökéletlenségét mutatja, mikor valójában az ő eszközzel szembeni gyakorlatlanságukat tükrözi. Elképzelhető, hogy rosszul használják, pl. megpróbálják az oldalt sorról sorra olvasni, mikor egy tényleges képernyő-felolvasó használó ugrálna rajta a címsorokat vagy más elemeket használva, amíg a számára érdekes tartalmat keresi. Vagy esetleg nem sikerül helyesen olvasniuk a képernyőt. Egy olyan lap olvasása, amelyet látsz, vagy jól ismersz a felolvasóval nagyban különbözik attól, amikor egy teljesen új szájtot derítesz fel, amelyet nem látsz.</p>

<p>A kisegítő technológiák használatához annak a tapasztalatnak is társulnia kell, hogyan alkalmazzák a mindennapi felhasználók az adott technológiát, és ideális esetben az ebből levont következtetéseket gyakorlott felhasználókkal is meg kell erősíttetni. Mindent egybevetve, a kezdőknek ajánlott a kisegítő technológiák használatát a felhasználói tesztelőkre bízni.</p>

<h3 id="detailedinspection">Részletes felülvizsgálat</h3>

<p>Miután az összes valódi probléma ki lett javítva, amelyet az általad választott ellenőrző eszköz azonosított, áttérhetsz a manuális tesztelésre, a projekted kipróbálására, átnézésére.</p>

<p>A WCAG 2.0 a használhatósági kritériumait négy alapelvre osztja fel. A tartalomnak és a funkciónak a következőknek kell megfelelniük:</p>

<ul>
<li>Észlelhető (pl. a képeknek szöveges megfelelőkkel kell rendelkezniük).</li>
<li>Működtethető (pl. lehetséges kell hogy legyen interakcióba lépni egy webszájttal egér nélkül és képernyő-felolvasóval navigálva is).</li>
<li>Érthető (pl. a szöveg nem lehet bonyolultabb, mint szükséges és a webhelynek megjósolható módon kell működnie).</li>
<li>Robusztus (pl. a webhelyeknek együtt kell működniük különféle kliens eszközökkel és következetesnek kell lennie a navigációnak).</li>
</ul>

<p>Ebben a részben néhány példát fogok mutatni arra, hogy a gyakorlott tesztelők miként tudják felbecsülni, milyen mértékben felel meg a tartalom ezeknek az alapelveknek. Kérlek vedd figyelembe, hogy ennek a résznek nem célja helyettesíteni a WCAG és technikáinak részletes ismertetését.</p>

<h4 id="perceivability">Észlelhetőség</h4>

<p>Az észlelhetőségi problémák egy része a rendelkezésre álló különféle alternatív média körül forog. A szöveges megfelelőket úgy tesztelheted, ha kikapcsolod az összes képet és multimédiát és úgy nézed meg az oldalt. Külön figyelemmel kell bánnod azonban az <code>img</code> és <code>input</code> elemekkel. Alapesetben tanácsos minden pusztán dekoratív célt szolgáló képnek egy üres <code>alt</code> attribútumot adni (<code>alt=&quot;&quot;</code>) azért, hogy a képernyő-felolvasók átugorják őket. 

Kivételek ez alól a következők:</p>

<ul>
<li>Olyan képek, amelyek a linkek egyedüli tartalmai</li>
<li>Űrlap gombok</li>
</ul>

<p>Ha ezek az elemek <code>alt=&quot;&quot;</code> attribútumot kapnak, a felolvasók általában úgy fogják kezelni a képet vagy a gombot, mintha az <code>alt=&quot;&quot;</code> attribútum hiányozna, és megpróbálnak biztosítani egyet (pl. felolvasva a kép URL-jét).</p>

<p>Ezért ilyen speciális körülmények között biztosítanod kell, hogy a linkeken belüli képeknek vagy a gomboknak van <code>alt</code> attribútuma, amely leírja a hivatkozás végcélját, vagy a gomb funkcióját még akkor is, ha ez ismétléssel jár.</p>

<p class="note">A multimédiával összehangolt, annak megfelelő tartalmak, mint a feliratok és a meghallgatható leírások tesztelése úgy végezhető el, ha mélyebbre ásol a média lejátszód szolgáltatásaiban, hogy aktiváld a hozzáférhetőségi beállításokat. 
</p>

<p>Az észlelhetőségi problémák egy másik csoportja az oldal stílusával áll összefüggésben. Három terület van, amelyeket itt meg kell vizsgálnunk:
</p>

<ul>
<li>Az oldal ajánlott megjelenítése ésszerűen hozzáférhető? Például elegendő a színkontraszt? A szöveg kényelmes méretű? Amellett, hogy magad is megszemléled az oldalt, használhatsz olyan eszközt is, mint a <a href="http://juicystudio.com/services/csstest.php">Juicy Studio CSS Analyser</a> hogy ellenőrizd a háttér és a betűszín kombinációját egy olyan mintához viszonyítva, amely az olvashatóság mértékét hivatott mérni.
</li>
<li>Biztonságosan összhangba hozhatók-e a megjelenítésre vonatkozó fejlesztői javaslatok a hétköznapi felhasználók által előnyben részesített megjelenítéssel a tartalom olvashatóbbá tétele érdekében, mint pl. a fontméret növelése, zoomolás és eltérő alapértelmezett színek tekintetében? Próbáld meg növelni a fontméretet kb. 2-5 lépésben; ne aggódj, ha a végeredmény nem pixel pontos, de aggódj, ha az elrendezés olyan mértékben szétesik, hogy a tartalmat nehezen olvashatóvá teszi. Próbálj változtatni a színek beállításain és nézd meg mi történik. Ha a fejlesztő által megadott CSS színeket határoz meg, ennek egyértelműen egyszerre kell beállítania a háttér- és betűszíneket, hogy biztosítsa azt, hogy a szokatlan beállítások és a fejlesztői stílus kombinációja nem eredményez olvashatatlan vagy láthatatlan szöveget. A népszerűbb böngészők megengedik a felhasználóknak, hogy rákényszerítsék a saját színbeállításaikat és kikapcsolják a háttérképeket. Ha ezt te is kipróbálod, felfedhet rosszul értelmezett képeket helyettesítő CSS technikákat, amelyek szöveget rejtenek el, hogy a képernyőn ne látszódjon, mivel a kép nem töltődik be, de a szöveg ezután is láthatatlan marad.</li>
<li>Ha a megjelenítésre vonatkozó fejlesztői javaslatokat elvetik, akkor az összes információ amelyet ezek a javaslatok közvetítettek megmaradnak-e használatra a webes tartalomban a kliens eszköz alapértelmezett stílusozása vagy a felhasználói stílusozás számára? Próbáld meg kikapcsolni a CSS-t, és megvizsgálni a dokumentum objektum modellt, hogy ellenőrizd, hogy a címsorok címsorokként vannak-e jelölve és hogy a táblázatok csoportosított adatokhoz vannak-e alkalmazva és nem az elrendezéshez. 
</li>
 

</ul>

<h4 id="operability">Működtethetőség</h4>

<p>Az egészség és a biztonság döntő fontosságú, habár ritkán figyelembe vett része egy webszájt működtethetővé tételének. Azonban a vibráló tartalom fényérzékeny epilepsziások esetében roham előfordulását kockáztatja. Készíthetsz egy képernyőképet a webhelyedről használat közben, majd betöltheted ezt a <a href="http://trace.wisc.edu/peat/">Trace Center Photosensitive Epilepsy Analysis Tool (PEAT)</a> nevű alkalmazásba, hogy teszteld rendelkezik-e olyan vibráló tartalommal, amely esetlegesen veszélyt jelenthet a felhasználóidra. Nyilvánvalóan ez különösen fontos szempont, ha egy videómegosztó webszájtot készítesz. A tervezés szakaszában tekintetbe kell venned ezt, beleértve egy automatizált szűrő eljárást is a feltöltésekhez.
</p>

<p>Emellett egy jó módszer a webhelyek működtethetőségének tesztelésére egyszerűen az, ha megpróbálod megnézni, hogy el tudsz-e érni minden lényeges tartalmat és funkciót különböző eszközökkel:</p>

<ul>
<li>Próbáld használni a szájtot csak a billentyűzettel. Az épp aktuális fókusz mindig egyértelműen jelezve van? Az összes funkció elérhető billentyűzettel? 
</li>
<li>Próbáld használni a szájtot egy képernyőérintő eszközzel.</li>
<li>Próbálj navigálni a weboldaladon hangparanccsal a Windowshoz való Opera és a Voice kiegészítője használatával, vagy a Windows Vista Speech Recognition-nel és az Internet Explorerrel. (Megjegyzés: diktálási minőségű kereskedelmi forgalomban lévő beszédfelismerőt nemrégiben már bemutattak a Mac OS X-hez a MacSpeech Dictate formájában, de jelenleg még nincs megfelelője a szabad *nix platformokra.)</li>
</ul>

<p>A képernyő-felolvasók és más kisegítő technológiák hasznosíthatják az (X)HTML szemantikus felépítését, hogy helyesen értelmezzék a tartalmat és lehetővé tegyék a navigálást. Például a felolvasók megengedhetik a felhasználóknak, hogy a következő címsorra, vagy más típusú elemre ugorjanak, vagy kilistázhatják egy adott típus összes előfordulását. A <code>label</code> és a <code>legend</code> elemek helyes használata lehetővé teszi a kisegítő technológiák számára, hogy a címkéket a megfelelő űrlap mezőkkel társítsák; a <code>th</code> elemek és a <code>header</code>, <code>scope</code>, és <code>axis</code> attribútumok korrekt használata hozzájárul, hogy a táblázat fejléceit összekapcsolják a táblázat adatcelláival. A szemantikus struktúra kiértékelhető egy dokumentum objektum model (DOM) ellenőrzővel, mint amilyen az Opera Dragonfly-ban is található. A hozzáférést ellenőrző eszközök mint a Firefox Accessibility Extension megkönnyíthetik ezeket a feladatokat pl. az oldalon található címsorok, vagy az űrlap mezők attribútumainak kilistázásával (azonnal megmutatva melyeknél hiányoznak a megfelelő címkék). Az 1. ábrán láthatsz rá példát. </p>

<p><img src="/articles/view/26-accessibility-testing/firefox-accessibilityextension.gif" alt="Képernyőkép a Firefox Accessibility Extension űrlap információs ablakáról a BBC új honlapjával kapcsolatban" /></p>
<p class="comment">1. ábra: Képernyőkép a Firefox Accessibility Extension űrlap információs ablakáról a BBC új honlapjával kapcsolatban.
</p>

<h4 id="understandability">Érthetőség</h4>

<p>Az érthetőség megállapítása sokkal szubjektívebb mint az olvashatóság tesztelése. Ha egy kiértékelő számára nem új a projekt, vagy nem professzionális szerkesztő, akkor ő talán nem a legalkalmasabb személy annak felmérésére, hogy a szöveg annyira érthető-e amennyire csak lehet. Azonban használhatod a <a href="http://juicystudio.com/services/readability.php">Juicy Studio’s Readability Test eszközét,</a> hogy egy hozzávetőleges elképzelésed legyen arról, mennyire is egyszerű a szájtod szövegezése.</p>

<p>Viszont néhány szempont meglehetősen objektíven értékelhető, mint mondjuk az, hogy a tartalomnak van-e nyelvi kiegészítő metaadata, amely lehetővé teszi (például) a képernyő-felolvasóknak és hangos böngészőknek, hogy a tartalmat a megfelelő kiejtéssel olvassák fel. HTML-lel használhatsz egy DOM ellenőrzőt a dokumentumban a <code>lang</code> attribútum meglétének és a nyelv minden változásának ellenőrzésére.</p>

<p>Figyelj a következetlenségre a szájton, mind a belső logikátlanság, mind pedig a hagyományos webes konvenciókból következő kiszámíthatóság szempontjából. A képernyőnagyítót használók, akik az oldalnak csak egy kis részét látják egyszerre, nagymértékben támaszkodnak az ilyen összefüggésekre, hogy tudják merre keressenek egy adott tartalmat és funkciót.
</p>

<h4 id="robustness">Robusztusság</h4>

<p>Annak tesztelése, hogy egy tartalom robusztus-e, magában foglalja annak ellenőrzését is, hogy az adott technológiák helyesen vannak-e alkalmazva. Egy nagyon alap szinten lefuttathatod a kódot olyan kódtisztítókon keresztül, mint:</p>

<ul>
<li><a href="http://htmlhelp.com/tools/validator/">WDG HTML Validator a figyelmeztetések engedélyeztetésével</a></li>
<li><a href="http://jigsaw.w3.org/css-validator/">W3C CSS Validator</a></li>
<li><a href="http://www.jslint.com/">JSLint JavaScript kódtisztító</a></li>
</ul>

<p>Ezután átvizsgálhatod a kódot nagyobb mélységeiben is, hogy ellenőrizd helyesen vannak-e használva az egyes tulajdonságok. Például megnézheted, hogy a HTML alap vezérlőeszközei használatosak-e értelmetlen elemeket tartalmazó, félrevezető eszközökkel és JavaScripttel szemben és, hogy a JavaScript <a href="http://www.jibbering.com/faq/faq_notes/not_browser_detect.html">tulajdonság felismerőt használ-e a böngésző sniffing helyett, ahol csak lehetséges</a>.</p>

<p>Majd tesztelheted különféle kliens eszközökkel és kisegítő technológiákkal, ellenőrizve, hogy a szájt észlelhető, működtethető és érthető-e a fejlesztői CSS, JavaScript és az engedélyezett vagy letiltott kiegészítők bármilyen kombinációja esetén.</p>

<p>A legáltalánosabb probléma talán a tolakodó JavaScript, mondjuk az olyan kapcsok és gombok esetén, melyek az oldal forráskódjának script nélküli részén vannak ugyan, de a JavaScript-től függ, csinálnak-e bármit is. De vannak ennél árnyaltabb problémák is, amelyek a JavaScript és a technológiai halmazban lévő más rétegek túlságosan szoros összekapcsolása során kerülnek a felszínre. Például a JavaScript használhatja a CSS <code>display: none;</code> tulajdonságát egy tartalom elrejtéséhez, de mi történik, ha a fejlesztői CSS nincs is alkalmazva?</p>

<p>Egy másik példa a multimédiás vezérlők. Gyakran, beépített bővítmény esetén, a plugin eredeti felhasználói felülete ki van kapcsolva és helyette a bővítmény scriptelt HTML widgetekkel irányítható. Ha a bővítményt csak JavaScripten keresztül adjuk hozzá a JavaScript alapú plugin detektálása után, az rendben van. De néha a bővítményt az oldal már a scriptelés előtti állapotában is tartalmazza. Ilyen esetekben nem csak arról érdemes meggyőződni, hogy egy visszalépési lehetőség (fallback) van beépítve arra az esetre, ha a plugin nem működtethető, hanem arról is, hogy a bővítmény eredeti felhasználói felülete nincs kikapcsolva kivéve, ha a JavaScript rendelkezésre áll. Ha az előző feltétel nem teljesül, akkor a felhasználók egyáltalán nem fogják látni a fallback tartalmát; ha a második feltétel nem teljesül, akkor a felhasználók látni fogják a bővítményt, csak éppen nem tudják majd használni.</p>

<h2 id="usertesting">Felhasználói tesztelés</h2>

<p>Semennyi fejlesztői ellenőrzés és screening sem tudja helyettesíteni egy felhasználó és egy webszájt közötti közvetlen felhasználói élményt. Ha vesszük a webes tartalom és a kisegítő technológia között létrejövő összes finom interakció megértésének nehézségeit és a fogyatékkal élők tapasztalatainak megközelítési nehézségeit, akkor ez duplán is érvényes a fogyatékkal élő felhasználók esetében. Amennyiben lehetséges, a szájtodat valódi akadályoztatott felhasználókkal kell tesztelned. Ez végrehajtható nagyformátumú drága megoldásokkal, de ne becsüld alá a kisléptékű felhasználói tesztelés hasznát sem.</p>

<h3 id="recruitingtesters">Tesztelők toborzása</h3>

<p>Tesztelők ugyanolyan módon találhatók, ahogyan az általában vett használhatósági tesztekre találsz jelentkezőket (pl. hirdetés útján, vagy közvetítő irodákon keresztül). A fogyatékosok helyi szervezetei biztosan tudnak ajánlani megfelelő fórumokat a toborzáshoz.
</p> 

<p>A tesztelés valós munkának számít és ideális esetben úgy is kell honorálni. A nagyjából 70 USD-os ár egy órás tesztért egy meglehetősen mindennapos összeg a felhasználói tesztelés során.</p>

<p>Azonban találhatsz olyan embereket is, akik kisebb projekteket ingyen tesztelnek. Lehetnek fogyatékkal élők a barátaid, rokonaid és munkatársaid között. Emellett vannak olyan online fórumok, amelyek a szoftver-hozzáférhetőség témája köré szerveződtek, mint pl.:</p>

<ul>
<li><a href="http://www.webaim.org/discussion/">WebAIM Accessibility Discussion List</a>.</li>
<li><a href="http://www.w3.org/WAI/IG/Overview.html">Web Accessibility Initative Interest Group Mailing List</a>: egy fórum a webes hozzáférhetőséggel kapcsolatos témák megvitatására.</li>
<li><a href="http://www.bcab.org.uk/mailing-list.html">British Computer Association of the Blind mailing list</a>: a látáskárosult emberek számára létrehozott információs és kommunikációs technológiák (ICT) megvitatására.</li>
<li><a href="http://tech.groups.yahoo.com/group/magnifiers/">Magnifiers Yahoo! Group</a>.</li>
<li><a href="http://www.freelists.org/archives/jfw/">jfw@freelists.org</a>: Egy levelezőlista a JAWS képernyő-felolvasót használók számára.</li>
<li><a href="http://www.gwmicro.com/Support/Email_Lists/">GW-Info</a>: Egy levelezőlista a GW Micro Window-Eyes képernyő-felolvasót használók számára.</li>
<li><a href="http://tech.groups.yahoo.com/group/dolphinusers/">Dolphin software users Yahoo! Group</a>.</li>
<li><a href="http://www.freelists.org/list/nvda">NVDA users mailing list</a>.</li>
<li><a href="http://www.freelists.org/list/thunder">Thunder users mailing list</a>.</li>
<li><a href="http://groups.google.com/group/macvisionaries/">discuss@macvisionaries.com</a>: Egy lista arról, hogyan használják a vakok az OS X-t.</li>
<li><a href="http://www.freelists.org/list/macvoiceover">macvoiceover@freelists.org</a>: Apple VoiceOver felhasználók.</li>
<li><a href="https://www.redhat.com/mailman/listinfo/blinux-list">Blinux-list</a>: Egy lista a Linux használatáról vak és látáskárosult emberek által.</li>
<li><a href="http://mail.gnome.org/mailman/listinfo/orca-list">GNOME Orca users</a>.</li>
<li><a href="http://www.aisquared.com/forums/index.php">Ai Squared Forums</a>: A népszerű ZoomText magnifier felhasználóinak közreműködésével.</li>
<li><a href="http://tech.groups.yahoo.com/group/Deaf-Macs/">Deaf-Macs Yahoo! Group</a>: A süket, halláskárosult, és az Usher vagy a Mac süket és vak felhasználói számára.</li>
<li><a href="http://groups.yahoo.com/group/deaf-uk-technology/">deaf-uk-technology Yahoo! Group</a>: A süketséggel kapcsolatos technológiák megvitatására.</li>
</ul>

<p>Az ilyen csoportok általában szívesen veszik a webfejlesztők kérdéseit a szájtjuk hozzáférhetőségével vagy adott technikákkal kapcsolatban.</p>

<h3 id="practicalconsiderations">Gyakorlati szempontok</h3>

<p>Tartsd észben, hogy magának a tesztelői környezetnek is hozzáférhetőnek kell lennie. Például ha írott tesztanyagokat csinálsz, késznek kell lenned alternatív formában is biztosítani azokat. A felhasználó böngésző környezetének saját tesztelő környezetedbe történő lemásolásának logisztikája bonyolult, ezért sokkal reálisabb megoldás lehet, ha a felhasználó otthonában tesztelsz. Ha ez nem megvalósítható, akkor még a teljes egészében közvetetten történő tesztelés is értékes lehet.</p>

<p>Egy jelentős szempont, amely valószínűleg még sokkal fontosabb a fogyatékkal élő, mint más felhasználók számára az, hogy melyik az a technológia, amelyet jól ismernek. A kisegítő technológia számos bonyolultsági fokot adhat hozzá a számítógépes tapasztalataikhoz, egy széles szakadékot hozva létre a kezdő és a jártas felhasználók között, és olyan csoportokba sorlova őket, akik nagyon jól boldogulnak a saját beállításaikkal, de kimondottan rosszul kezelik az ismeretlen technológiát. (Csak gondolj bele milyen nehéz az olyan felhasználóknak is, akiknek a számítógép-használatát nem befolyásolja korlátozó tényező, váltani a Mac és a PC között!).</p>

<p>Ha veszel egy hosszú ideje Window-Eyes képernyő-felolvasót használó embert, leülteted őt egy ismeretlen gép elé, amelyre a JAWS felolvasó van telepítve és megkéred, hogy teszteljen egy webszájtot, elég nehéz lesz különbséget tennie a JAWS és a webszájtodhoz kapcsolódó problémái között. Ha vesszük még a verziók közötti jelentős különbségeket és azt, hogy a felhasználók milyen gyakran testre szabják a beállításaikat, ez még úgy is bonyolult lehet, ha a Window-Eyes-t kínálod fel neki! Emiatt, hacsak nem éppen azt teszteled, mennyire állja meg a helyét a webszájtod hozzáférhetőség szempontjából szokatlan beállításokkal (pl. könyvtárakban vagy a barátaid gépén), a legjobb, ha hagyod a felhasználóidnak, hogy a saját beállításaikkal teszteljenek, vagy esetleg ahhoz a lehető legközelebb állóval.</p>

<p>Hasonlóképpen, hacsak nem kimondottan kezdő és tapasztalt felhasználókat akarsz tesztelni, olyan felhasználókat célszerű választanod, akiknek nagyjából egy éves ismeretségük van a saját beállításaikkal a web eléréséhez. Sem a kisegítő technológiát, sem pedig magának a webhasználatnak a szokásait nem csekélység megtanulni. Kezdő felhasználókkal nem fogod tudni, hogy a problémáik a szájtodból adódnak, vagy a tanulási folyamat részei, a tapasztaltaknak pedig lehetnek a zsebükben olyan trükkök, amelyek másoknak nincsenek.</p>

<h3 id="choosingtasks">A feladatok kiválasztása</h3>

<p>Rendkívül tanulságos lehet már a felhasználók megfigyelése is miközben felfedeznek egy webszájtot. Mint ahogy más felhasználói teszt során is:</p>

<ul>
<li>Próbálj a felhasználók elé néhány speciális feladatot állítani.</li>
<li>Kérdezd meg őket mit gondolnak és hallgasd meg mit mondanak.</li>
<li>Figyelj arra mit csinálnak, mert ez különbözhet attól, amit mondanak: a hangoztatott preferencia nem megfelelő iránymutató a teljesítményhez.</li>
</ul>

<p>Mikor egy szájtot tervezel, inkább azokra a műveletekre kell fókuszálnod, amelyeket a felhasználóid el akarnak végezni a szájtodon, és nem annyira az adott vezérlőeszközökre, amelyeket használniuk kell. Hasonlóképpen, a hozzáférhetőségi teszt során a feladatok, amelyeket kijelölsz (legalább kezdetben) a látogatók eredeti céljára kell hogy fókuszáljanak, és nem a különféle vezérlőkkel történő interakcióikra. Ezek a műveletek jellemzően hasonlóak lesznek a fogyatékkal vagy anélkül élő emberek között.</p>

<p>Például ha egy videómegosztó szájtot tesztelsz a hozzáférhetőség szempontjából, akkor ne kezd azzal, hogy megkérdezed, képesek-e használni az adott vezérlőeszközöket (“Ez itt a hangerőszabályzó. Be tudod állítani a hangerőt?”). Ehelyett adj nekik egy forgatókönyvet és kérd meg őket, hogy oldják meg a kulcsfontosságú felhasználói feladatokat. Például:</p>

<ul>
<li>Böngéssz a videók között és válassz egyet, amit lejátszol.</li>
<li>Keress egy videót.</li>
<li>Tölts fel egy videót.</li>
<li>Állítsd meg a videót, indíts el, halkítsd le, hangosítsd fel, tekerd vissza és játszd le újra.</li>
<li>Értékelj egy videót.</li>
<li>Ossz meg egy videót egy baráttal.</li>
</ul>

<p>Ezzel a módszerrel valószínűleg számos előre nem látott problémát fedezel fel. Például egy képernyő-felolvasót használó esetleg nem tudja megtalálni a keresőmezőt vagy a vezérlőket a videóhoz. Ezzel szemben a felhasználóknak lehetnek olyan navigációs stratégiái a web kezeléséhez, amelyekről te még csak nem is tudsz.</p>

<h3 id="interpretingresults">Az eredmények értelmezése</h3>

<p>Egy ideális világban le tudnánk tesztelni minden lehetséges kombinációt és kaphatnánk visszaigazolást mindenkitől. De a valóságban az idő és a pénz határt fog szabni a felhasználói tesztelésnek. Ezt figyelembe véve a visszacsatolás kétélű kard lehet. Mialatt sok mindent megtaníthat neked, igazi veszély rejtőzhet abban, ha túl nagy súlyt fektetsz egy személy nézőpontjára, amely esetleg nem reprezentatív a nagyobb célközönség szempontjából. Például néhány képernyő-felolvasót használó olyan élményt keres, amelyet a vak felhasználók számára egyszerűsítettek; míg mások nagyon szeretnének mindent megtudni a szájtról, amit a látó barátaik és kollégáik néznek.</p>

<p>Ez az a pont, ahol a hozzáférhetőségi szabványok mint a WCAG igazán értelmet nyernek. Ilyen irányelvek követésével növelheted az esélyedet egy alaptudás megszerzésére még olyan felhasználói csoportokkal kapcsolatban is, amelyeket nem tudsz tesztelni.</p>

<p>Mikor egy problémát vizsgálsz, elemezd az okait. Például a videómegosztó szájtod tartalmaz egy oldalt, ami a népszerű videókat mutatja egy adattáblázatban, oszlopokkal, amelyek tartalmaznak egy állóképet, egy címet, a feltöltés dátumát, az utolsó lejátszás dátumát, egy összesített értékelést és soronként csoportosítva vannak a videó kategóriája szerint. A felhasználói tesztelés során egy képernyő-felolvasót használónak gondja akad a táblázattal. Ez utalhat:</p>

<ul>
<li>a szájt kódjával kapcsolatos problémára. Például esetleg a fejlesztők készítettek egy adattáblázatot értelmetlen <code>div</code> elemekből ahelyett, hogy rendes táblázatos kódolást használtak volna. Itt a megfelelő eljárás a táblázat újrakódolása lenne.</li>
<li>gyakorlatlanságra a felhasználó részéről. Például egy JAWS használónak ismeretlenek lehetnek a JAWS lehetőségei az adattáblázatokon belüli navigálással és azok elolvasásával kapcsolatban. Itt a megfelelő eljárás egy kiegészítő dokumentum vagy súgó elérhetővé tétele lehet a kevésbé tapasztalt felhasználók részére. Ha a gyakorlott felhasználók nem is az ideális tesztalanyok, nagyszerű tanácsadók lehetnek ilyen esetekben.</li>
<li>problémára a kliens eszközzel. Például a Safari az adattáblázatokat úgy jeleníti meg az Apple hozzáférési modellje számára, mint elrendezéshez használt dobozokat és nem úgy mint adatkapcsolatok csoportját. Itt a megfelelő eljárás az lenne, ha jelentenéd a hibát a kliens eszköz forgalmazójának vagy fejlesztőinek, felkutatnál egy olyan technikát, amely működik a kliens eszközön, vagy jeleznéd a megkötést a dokumentációban és alternatív kliens eszközt ajánlanál, amely működik a webszájtoddal.</li>
<li>a képernyő-felolvasó problémájára. Például a fejlesztők esetleg lerövidítik a hosszabb fejléceket az <code>abbr</code> attribútum használatával, de a felolvasó nem biztosít egy felhasználói felületet a rövidebb verziók elolvasásához. Ebben az esetben a megfelelő eljárás a hiba jelentése lenne a forgalmazó vagy a fejlesztők felé, és esetleg találni egy technikát, ami működik a felolvasóval, vagy jelezni a megkötést a dokumentációban és egy működő alternatív eszközt vagy navigációs stratégiát ajánlani.</li>
</ul>

<h2 id="communicatingresults">A hozzáférhetőségi tesztelés eredményeinek továbbadása</h2>

<p>Mikor megosztod a hozzáférés felmérésének eredményeit, pontosan dokumentáld amit kiértékeltél. Ha egy megadott szabványhoz való igazodást tesztelsz, biztosan tudd, hogy ez az egyezés pontosan hol valósult meg és hol nem. Bármikor felvetsz egy problémát, legyél biztos abban, hogy hétköznapi, emberi nyelven fejted ki, és megmagyarázod, milyen hátrányos hatása lehet annak a felhasználókra nézve. Írd le, hogyan lehet reprodukálni a problémát és tesztelni az eredményét. Javasolj gyakorlati technikákat az egyezés eléréséhez vagy a hozzáférhetőség növeléséhez.</p>

<p>Például jelenthetsz egy problémát a videómegosztó webszájttal kapcsolatban így:</p>

<ul>
<li><em><strong>Probléma</strong>: A legördülő menüt nem lehet megnyitni anélkül, hogy az egérrel a legfölső menüpont fölé állnánk, és a billentyűzet fókusza eltűnik a képernyőről, ahogyan a menün keresztül lépkedünk a tabulátorral.</em></li>
 
<li><em><strong>Hogyan reprodukálható</strong>: Nyisd meg a lapot a böngésződben, és próbálj meg elérni egy alelemet a menüből csak a billentyűzet használatával.</em></li>
 
<li><em><strong>Magyarázat</strong>: A webes navigációnak eszközfüggetlennek kell lennie azért, hogy azok a felhasználók, akik az egértől eltérő eszközöket használnak—mint a vak, vagy motoros funkciózavarral küzdő felhasználók—képesek legyenek a tartalom és a funkció elérésére. Jelen esetben ezek a felhasználók nem férnek hozzá az almenüben lévő elemekhez és a billentyűzetet használó látó felhasználókat megzavarhatja, ha a fókuszt mutató jelzés eltűnik.</em></li>

<li><em><strong>Utalás a szabványkövetésre</strong>: A billentyűzettel történő működtethetőség egy követelmény a WCAG 1.0 és a WCAG 2.0 “A” szintjének való megfeleléshez (lásd a WCAG 1.0 9. Irányelvét és a WCAG 2.0 2.1. Irányelvét).</em></li>

<li><em><strong>Javasolt hibajavítási mód</strong>: Ha a JavaScript nincs engedélyezve, akkor használj egy egyszerű, linkekből álló listát az aloldalakhoz minden navigációs allista esetében. Az aloldalakon jelenítsd meg a fő navigációt, amit az allista követ. Ha a JavaScript be van kapcsolva, akkor távolítsd el az allistát a DOM-ból, és adj allistát mindegyik menüelemhez a <code>click</code> eseményhez rendelve, ami elindítható a billentyűzettel, az egérrel, beszédfelismerővel és érintőképernyőkkel egyaránt.</em></li>
</ul>

<h2 id="summary">Összefoglaló</h2>

<p>Nem minden weboldalon hajtanak végre szakértők és fizetett tesztelők által végzett hozzáférhetőségi kiértékelést. De bármely webfejlesztő megtanulhatja a hozzáférhetőség alapelveit, megpróbálhatja alkalmazni ezen elveket a kódjában és a munkája eredményét elküldheti egy levelező listára, hogy értesüljön a további problémákról és hogy továbbvigye az új tudást a jövőbeli fejlesztésekhez.</p>

<h2 id="exercises">Tesztkérdések</h2>

<ul>
<li>Próbálj navigálni egy szabadon választott, összetett szájton egér nélkül. Milyen nehézségekbe ütközöl? Hogyan tudnának a szájt fejlesztői segíteni neked?</li>
<li>Kapcsold ki a CSS-t és a szokásos módon böngéssz egy napig. Milyen problémákkal szembesülsz?</li>
<li>Kapcsold ki a JavaScriptet és a szokásos módon böngéssz egy napig. Milyen problémákkal szembesülsz?</li>
<li>Válaszd ki egyik kedvenc szájtodat, tervezz néhány saját változatot (persona) a szájthoz, majd értékeld a WCAG 1.0 szerinti szabványkövetését és az általános hozzáférhetőségét mint szakértő tesztelő. Tervezz egy felhasználói tesztet a szájthoz, és vedd bele a toborzási követelményeket és tesztfeladatokat. Írj egy jelentést arról, hogyan növelheti ez a hozzáférhetőségét.</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/25-accessibility-basics-hu/" rev="prev" title="link to the previous article in the series">Előző leírás—A hozzáférhetőség alapjai</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/27-css-basics/" rel="next" title="link to the next article in the series">Következő leírás—CSS alapok</a></li>
<li><a href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom" rel="index">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>
<div class="right">
<img src="/articles/view/26-accessibility-testing/benhawkes-lewis.jpg" alt="Fotó a cikk szerzőjéről, Benjamin Hawkes-Lewis-ról" />
<p>Fotó: <a href="http://www.flickr.com/photos/benward/2404982169/">Ben Ward</a></p>
</div>

<p>Válogatott középkori királyokról, XVIII. századi tudósokról és más történelmi különcökről folytatott egyetemi tanulmányai után Benjamin Hawkes-Lewis valahogyan webfejlesztőként kötött ki a Yahoo!-nál, legnagyobb örömére. Kedvencei közé tartozik egy finom étel baráti körben, egy jó film a moziban, fűben heverészés napsütésben és az elsődleges forrásokkal, alapigazságokkal és empirikus bizonyítással kapcsolatos bonyolult problémák megoldása.</p>
