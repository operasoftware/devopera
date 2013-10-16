Title: Hogyan működik az internet?
----
Date: 2009-07-06 20:04:40
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/2-az-internet-es-a-web-tortenete/" title="hivatkozás a sorozat előző leírására">Előző leírás — Az internet és a web története, a webes szabványok evolúciója</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/4-a-webes-szabvanyok-modellje/">Következő leírás — A webes szabványok modellje — HTML, CSS és JavaScript</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Néha előfordul, hogy szeretnél betekintést nyerni a dolgok mögé, hogy lásd a fogaskerekeket és az ékszíjakat az események mögött. A mai a te szerencsés napod. Bevezetlek a legújabb technológiák működésébe, melyek segítségével már elboldogulsz a világhálóval.</p>

<p>Ez a leírás az alapvető technológiákról szól, melyek a világhálót éltetik:</p>

<ul>
  <li>Hiperszöveg jelölőnyelv (HTML)</li>
  <li>Hiperszöveg-átviteli protokoll (HTTP)</li>
  <li>Domainnév rendszer (DNS)</li>
  <li>Webszerverek és internetböngészők</li>
  <li>Statikus és dinamikus tartalom</li>
</ul>

<p>Ezek mind nagyon alapvető dolgok &#x2013; még ha az itt leírtak nagy része nem is segít egy jobb weboldal elkészítésében, megadja a megfelelő nyelvezetet ahhoz, hogy az ügyfeleiddel vagy másokkal beszélgethess a webről. Ez olyan, mint ahogy egy bölcs apáca mondta <em>A muzsika hangja</em> c. filmben: „Mert az olvasást hogy kezdik? — Á, B, C; Az éneklést így kezdik: Dó, Ré, Mi”. Ebben a leírásban röviden áttekintjük, hogyan kommunikálnak egymással a számítógépek a HTTP és TCP/IP használatával, aztán megnézzük a különböző nyelveket, melyek együtt alkotják az internetet képező weboldalakat. Ebben a bejegyzésben a következő témákról lesz szó:</p>

<ul>
  <li><a href="#kommunikacio">Hogyan kommunikálnak egymással a számítógépek az interneten keresztül?</a>
  <ul>
    <li><a href="#kerdesvalasz">A kérés/válasz kör elemzése</a></li>
  </ul></li>
  <li><a href="#tartalomtipusok">A tartalmak típusai</a>
  <ul>
    <li><a href="#egyszeruszoveg">Egyszerű szöveg</a></li>
    <li><a href="#webesszabvanyok">Webes szabványok</a></li>
    <li><a href="#dinamikusweblapok">Dinamikus weboldalak</a></li>
    <li><a href="#formatumok">Formátumok más alkalmazásokhoz és beépülőkhöz</a></li>
  </ul></li>
  <li><a href="#statikusdinamikus">Statikus kontra dinamikus oldalak</a></li>
  <li><a href="#osszefoglalo">Összefoglaló</a></li>
  <li><a href="#tesztkerdesek">Tesztkérdések</a></li>
</ul>

<h2 id="kommunikacio">Hogyan kommunikálnak egymással a számítógépek az interneten keresztül?</h2>

<p>Szerencsére a számítógépek dolgait nem bonyolítottuk el túlságosan. Amikor a világhálót nézzük, a legtöbb oldal ugyanazt a kódot használja, a HTML-t, amely egy közös szabályrendszer, a HTTP (hiperszöveg-átviteli protokoll) alapján működik. A HTTP az internet általános „nyelvjárása” (előírása), figyelembe véve például, hogy egy windowsos rendszer tökéletes összhangban legyen a legújabb és legjobb Linux verzióval (Dó, Ré, Mi!). Az internetböngészőkön túl &#x2013; ezek speciális programok, melyek értelmezik a HTTP utasításokat és lefordítják a HTML kódot emberek számára olvasható formára &#x2013; a weboldalakat azért írják HTML-ben, hogy bármilyen számítástechnikai eszközön képes legyél azt elolvasni, telefonon, PDA-n, vagy az egyre népszerűbb videojáték rendszereken.</p>

<p>Annak ellenére, hogy ugyanazt a nyelvet beszélik, a webet használó eszközöknek szükségük van szabályokra, hogy egy másik eszközzel kommunikálni tudjanak &#x2013; ez olyan, mint megtanulni, hogy felemeled a kezed, mielőtt kérdezel az órán. A HTTP lefekteti ezeket az alapvető szabályokat az internet számára. A HTTP-nek köszönhetően egy kliens (mint pl. a számítógéped) tudja, hogy ő az, akinek kezdeményeznie kell a kérést egy weboldal vagy egy szerver felé. A szerver egy számítógép, amely olyan programokat futtat, melyek érzékelik a kérésed, megkeresik a kívánt weboldalt, és elküldik a számítógépedre, hogy a böngésződ megjeleníthesse azt.</p>

<h3 id="kerdesvalasz">A kérés/válasz kör elemzése</h3>

<p>Most átnézzük azokat az eljárásokat, melyek lehetővé teszik, hogy a számítógépek az interneten keresztül kommunikáljanak. A HTTP kérés/válasz kört alaposabban is megvizsgáljuk. Lentebb van néhány számozott lépés, ezek mentén haladunk előre, így érthetőbben el tudom magyarázni a fogalmak jelentését.</p>

<ol>

<li><p>Minden kérés/válasz úgy kezdődik, hogy beírjuk az URL-t (egységes erőforrás-azonosító) a böngészőnk címsorába, valahogy úgy, mint a http://dev.opera.com. Nyiss meg egy böngészőt, írd be ezt a címet!</p>

<p>Most van egy dolog, amit lehet, hogy még nem tudsz: a böngészők nem arra használják az URL-eket, hogy lekérjék az oldalakat a szerverekről; <strong>Internet Protokollt</strong>, vagyis <strong>IP címeket</strong> használnak (mint a telefonszámok vagy az irányítószámok, csak ezek a címek szervereket azonosítanak). Például a http://www.apple.com IP címe a 17.149.160.10.</p></li>

<li><p>Próbálj megnyitni egy új fület vagy új ablakot a böngésződön, majd írd be: http://www.apple.com, majd üss entert; aztán írd be: http://17.149.160.10/, és üss entert &#x2013; pontosan ugyanoda jutsz.</p>

<p>A http://www.apple.com alapvetően ugyanazt az eredményt adja, mint a http://17.149.160.10/, de miért, és hogyan? Ez azért van, mert az emberek jobban emlékeznek szavakra, mint hosszú számsorokra.  A rendszer, ami a munkát elvégzi, a DNS (domainnév rendszer), amely alapvetően egy átfogó, automatikus címtár, ami minden internetre csatlakozó eszköz címét eltárolja. Amikor beütöd a http://dev.opera.com címet a címsorba és leütöd az entert, a böngésző elküldi ezt a címet egy névszervernek, ami megpróbálja meghatározni a hozzá tartozó IP-címet. Készülékek garmadái csatlakoznak egyszerre a világhálóra, és nincs minden DNS szerveren listázva az összes hálóra kötött készülék, ezért van egy rendszer, ahol a kérésed végrehajtódik, hogy a megfelelő szerver teljesíteni tudja azt.</p>

<p>Tehát a DNS rendszer utána néz a www.opera.com weboldalnak  és megtalálja, hogy az a 17.149.160.10 címen található, majd ezt a címet visszaküldi a böngésződnek.</p>

<p>A géped küld egy kérést az IP cím által megjelölt géphez, és várja, hogy visszajöjjön a válasz. Ha minden megfelelően működik, a szervergép visszaküld egy rövid üzenetet a kliensnek, hogy minden rendben (1. ábra), majd küldi a weblapot. Az üzenet ezen formáját egy <strong>HTTP fejléc</strong> tartalmazza.</p>

<img alt="Sikeres kérés/válasz ciklus" src="http://forum-test.oslo.osa/kirby/content/articles/268-3-hogyan-mkdik-az-internet/article3_1.gif" />
<p class="comment">1. ábra: Ebben az esetben minden rendben megy, a szerver a megfelelő weblapot küldi el.</p>

<p>Ha valami hiba történik, például rosszul írod be az URL-t, egy <strong>HTTP hibát</strong> kap a böngésződ — a népszerűtlen 404 „Az oldal nem található” hiba a legáltalánosabb példa erre, amellyel találkozhatsz.</p></li>

<li><p>Most próbáld beírni a http://dev.opera.com/joniscool.html címet — az oldal nem létezik, így 404-es hibaüzenetet kapsz. Próbáld ki még pár nem létező lappal, különböző weboldalakon, így különböző formában találkozhatsz a hibával. Ez azért van, mert néhány weboldal hiba esetén a szerver saját hibalapjára irányítja az eltévedt böngészőket, míg más oldalaknak saját, egyedi hibaüzenetei vannak, amelyekkel jelzik, ha hibás a hivatkozás. Ez egy különleges eljárás, amit ezen a kurzuson nem részletezünk, de szerencsére később, egy különálló leírásban lesz róla szó a dev.opera.com-on.</p>

<p>A végén még egy apróság az URL-ekről: általában egy weblap látogatásakor megnyitott első lap URL-ének végén nem látsz fájlnevet (pl. http://www.enoldalam.hu/), aztán később is vagy vannak fájlok a végén, vagy továbbra sincsenek. Valójában minden esetben fájlokat nyitsz meg, csak néha a webfejlesztők úgy állítják be a kiszolgálókat, hogy azok ne mutassák a fájlnevet az URL-ben — ez gyakran egyszerűbbé, könnyebben megjegyezhetővé teszi az URL-eket, ami elsősorban a felhasználói élményt növeli az oldaladon. Ezzel a témával sem fogjuk foglalkozni a tanfolyamon, mivel meglehetősen összetett dolog. <ins>A fájlok feltöltésével és a fájl/könyvtár struktúrával részletesen egy későbbi leírásban fogunk foglalkozni.</ins></p></li>
</ol>

<h2 id="tartalomtipusok">A tartalmak típusai</h2>

<p>Megnéztük a HTTP kérés/válasz kört, most nézzük át a különböző típusú tartalmakat, amelyekkel az interneten találkozhatsz. 4 részre választottam szét ezeket — egyszerű szöveg, webes szabványok, dinamikus weblapok, és oylan elemek, melyekhez külső alkalmazásokra vagy beépülőkre van szükség.</p>

<h3 id="egyszeruszoveg">Egyszerű szöveg</h3>

<p>Az internet megjelenésekor, még a webes szabványok és a beépülők előtt az internet csak képekből és szövegekből állt — különböző fájlok .txt vagy valami hasonló kiterjesztéssel. Ha találkozott egy egyszerű szöveggel, a böngésző csak megjelenítette azt, úgy ahogy van, bonyolult eljárások nélkül. Manapság gyakran egyetemek weboldalain találkozhatsz ilyen egyszerű szöveggel.</p>

<h3 id="webesszabvanyok">Webes szabványok</h3>

<p>A világháló alapvető építőkockája a három fő webes szabvány — a HTML (vagy XHTML, de ebben a leírásban ez most lényegtelen), a CSS és a JavaScript.</p>

<p>A HTML, mint „hiperszöveg jelölő nyelv” már a nevében érzékelteti a saját rendeltetését.  A HTML-t régebben arra használták, hogy dokumentumokat tegyenek közzé, megadják ezek tartalmát és a felépítését, és definiálják a dokumentum különböző részeit (ezekben tárolják az összes weblap szövegét és más elemeit). A weblapok különböző részeinek azonosításához elemeket használ.</p>

<p>A CSS (egymásba ágyazott stíluslapok) teljes hozzáférést nyújt egy elem megjelenésének beállításához. Például nagyon egyszerűen, egyetlen stílus deklarációval beállíthatod, hogy minden paragrafus legyen dupla sorközű (<code>line-height: 2em;</code>), vagy hogy minden második szintű címsor legyen zöld (<code>color: green;</code>). Rengeteg előnye van annak, ha szétválasztod a tartalmat a formázástól, ezzel bővebben a <a href="http://webszabvany.blog.hu/2008/a_webes_szabvanyok_modellje_html_css_es_javascript">következő leírásban</a> fogunk foglalkozni. A HTML és a CSS közös használatát a 2. ábrán mutatjuk be, amelyen bal oldalon a sima HTML kódot láthatod formázás nélkül, míg jobb oldalon pontosan ugyanazt a HTML-t, de már CSS stílusokkal kiegészítve.</p>

<img src="/articles/view/3-how-does-the-internet-work/article3_2.gif" alt="HTML és CSS külön és együtt alkalmazva" />
<p class="comment">2. ábra: Sima HTML a bal oldalon, HTML és CSS stílusok együtt a jobb oldalon.</p>

<p>Végül, a JavaScript dinamikus funkciókat biztosíthat a weblapodhoz. JavaScript segítségével olyan kis programkódokat írhatsz a weblaphoz, amelyek a kliens számítógépén fognak lefutni, és nincs szükség semmilyen speciális szoftver telepítésére a kiszolgálón. A JavaScript lehetőséget ad arra, hogy néhány egyszerű funkcionalitást megvalósíthass a weblapon, és interaktívvá tehesd, de természetesen vannak korlátai, amelyek a szerveroldali programozási nyelvekhez és a dinamikus weboldalakhoz vezetnek tovább.</p>

<h3 id="dinamikusweblapok">Dinamikus weboldalak</h3>

<p>Néha böngészés közben olyan oldalakra találhatsz, amelyeknél a weblapok kiterjesztése nem .html, hanem .php, .asp, .aspx, .jsp vagy valami más különös kiterjesztés. Ezek mind példák a dinamikus webtechnológiákra, ezekkel olyan weboldalakat lehet készíteni,amelyeknek van egy dinamikusan változó része — egy olyan kód, amely eredményeket szolgáltat a különböző bemenetekre (például adatbázisból, űrlapról vagy más adatforrásból). Ezekről bővebben a <a href="#statikusdinamikus">statikus kontra dinamikus oldalak</a> alatt beszélünk majd.</p>

<h3 id="formatumok">Formátumok más alkalmazásokhoz és beépülőkhöz</h3>

<p>Mivel a webböngészők alapvetően csak néhány megadott webes szabvány értelmezésére vannak felkészítve, így ha az URL egy komplexebb fájlformátumra mutat, vagy egy olyan weboldalra, amelyiknek beépülőkre van szüksége, akkor az ilyen tartalmat letöltheted, vagy a beépülők használatával (és ha szükséges, telepítésével) megnyithatod a böngészőben. Például:</p>

<ol>
  <li><p>Ha találsz egy Word dokumentumot, egy Excel fájlt, egy PDF-et, egy tömörített fájlt (pl. ZIP vagy SIT), egy komplex képet (pl. Photoshop PSD), vagy más olyan fájlt, amelyet a böngésző „nem ért”, akkor a böngésző az esetek többségében fel fogja ajánlani, hogy töltsd le vagy nyisd meg a fájlt a hozzárendelt alkalmazással. Mind a kettő hasonló megoldás, mivel a fájlt mindkét esetben le kell tölteni, és csak egy speciális alkalmazással nyithatod meg a böngészőn kívül.</p></li>

  <li><p>Ha olyan weboldalt találsz, amelyik tartalmaz egy Flash videót, egy MP3-at vagy más zeneformátumot, MPEG vagy más videoformátumot, akkor a böngésző ezt képes neked a weboldalon lejátszani, ha a szükséges beépülő telepítve van. Ha nincs, akkor a böngésző megkérhet a kapcsolódó beépülő letöltésére és telepítésére, vagy az előző ponthoz hasonlóan felajánlja a fájl letöltését és megnyitását egy másik alkalmazásban.</p></li>
</ol>

<h2 id="statikusdinamikus">Statikus kontra dinamikus oldalak</h2>

<p>Szóval mik is azok a statikus és dinamikus weboldalak, és mi a különbség közöttük? Hasonlóan egy doboz csokoládéhoz, minden azon múlik, hogy mivel vannak megtöltve.</p>

<p>Egy statikus weboldal egy olyan website, ahol a tartalom, a HTML és a képek mindig statikusak, változatlanok — minden látogatónak pontosan ugyanazt küldi el minden alkalommal, kivéve azt az esetet, ha a weboldal készítője gondol egyet, és megváltoztatja a lapot magán a kiszolgálón. A cikk nagy részében erről az esetről volt szó.</p>

<p>A dinamikus oldalak ezzel szemben, bár a tartalom a kiszolgálón változatlan, az egyszerű HTML mellett dinamikus kódot is tartalmaznak, amely bizonyos információktól függően más és más adatokat jeleníthet meg. Nézzünk egy példát: nyisd meg a www.amazon.com oldalt a böngésződben, és keress rá 5 különböző termékre. Az Amazon nem 5 különböző weboldalt küldött neked eredményként; mind az 5 esetben ugyanazt az oldalt küldte át, csak más és más dinamikus információkkal feltöltve. A különböző információkat egy adatbázisban tárolja, amely kérésre kiadja a releváns adatokat, és átadja a webszervernek, hogy az elküldhesse a dinamikus lapot.</p>

<p>Érdemes még megjegyezni a dinamikus oldalakkal kapcsolatban, hogy a kiszolgálón speciális szoftvereket kell telepíteni a használatukhoz. Míg a normál statikus HTML fájlok kiterjesztése .html, addig a speciális dinamikus oldalak kiterjesztése ettől eltér, mivel a kiterjesztés alapján a kiszolgáló látni fogja, hogy további módosításokat kell végrehajtania a fájlon, mielőtt elküldi azt a kliensnek (például fel kell töltenie egy adatbázisból). A PHP fájlok például .php kiterjesztést kapnak.</p>

<p>Több dinamikus programozási nyelvből is lehet választani, megemlítettük például a PHP-t, de többek között ilyen még a Python, a Ruby on Rails, az ASP.NET és a Coldfusion. Ezeknek a nyelveknek nagyjából ugyanolyan lehetőségeik vannak, például adatbázis-elérés, információ validálása, de ezeket különböző módokon teszik meg, így vannak előnyeik és hátrányaik is. Minden attól függ, hogy mi felel meg jobban a számodra.</p>

<p>Ezen a kurzuson nem fogunk foglalkozni a dinamikus nyelvekkel, de megadunk néhány referenciát, ha szeretnél erről a témáról többet megtudni:</p>

<ul>
  <li>Rails: Fernandez, Obie. (2007), The Rails Way. Addison-Wesley Professional Ruby Series. </li>
  <li><a href="http://www.rubyonrails.org/screencasts">Rails screencasts</a></li>
  <li>PHP: Powers, David (2006), PHP Solutions: Dynamic web development made easy, friends of ED. </li>
  <li><a href="http://www.php.net/docs.php">PHP Online dokumentáció</a></li>
  <li>ASP.NET: Lorenz, Patrick. (2003). ASP.NET 2.0 Revealed. Apress. </li>
  <li>ASP.NET: <a href="http://asp.net/">online ASP.NET dokumentáció és ismertetők</a>.</li>
</ul>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>Ebben a részben benéztünk a kulisszák mögé, hogy hogyan működik valójában az internet. Azonban a felmerült témákban csak a felszínt kapargattuk meg, viszont arra jó volt, hogy egy távolabbi perspektívából láthasd, hogyan kapcsolódnak össze és hogyan működnek együtt a különböző elemek. Még sokat kell tanulnod arról, hogy hogyan épül fel a HTML jelölés, a CSS és a JavaScript, és éppen ebben az irányban megyünk tovább: a következő cikk fő témája a a HTML, CSS és JavaScript alapú szabványos modellezés lesz, majd megnézünk egy példa weblapot is.</p>

<h2 id="tesztkerdesek">Tesztkérdések</h2>

<ul>
  <li>Mi az a HTML és a HTTP? Mi a különbség közöttük?</li>
  <li>Mire szolgálnak a webböngészők?</li>
  <li>Nézz körül az interneten, és próbálj meg 5-10 perc alatt minél többféle tartalmat találni: egyszerű szöveget, képeket, HTML-t, dinamikus oldalakat (PHP-t és .NET-es aspx lapokat), PDF-et, Word dokumentumokat, Flash videókat, stb. Próbáld ezeket megnyitni, és gondold végig, hogy a böngésződ milyen módon jeleníti meg ezeket a számodra.</li>
  <li>Mi a különbség a statikus és a dinamikus weblapok között?</li>
  <li>Keresd meg a HTTP hibák listáját, válassz ki belőlük 5-öt, és magyarázd meg, hogy ezek mit jelentenek.</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/2-az-internet-es-a-web-tortenete/" title="hivatkozás a sorozat előző leírására">Előző leírás — Az internet és a web története, a webes szabványok evolúciója</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/4-a-webes-szabvanyok-modellje/">Következő leírás — A webes szabványok modellje — HTML, CSS és JavaScript</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<img class="right" src="/articles/view/3-how-does-the-internet-work/Jonlane.jpg" alt="Jonathan Lane" />

<p>Jonathan Lane az <a href="http://industryinteractive.net/">Industry Interactive</a> vezetője, amely webfejlesztéssel, valamint webalkalmazások fejlesztésével foglalkozó cég Kanadában. A webfejlesztéssel a Lethbridge Curriculum Re-Development Center Egyetemen kezdett foglalkozni sok évvel ezelőtt mint webes projekt koordinátor.</p>

<p>A <a href="http://www.flyingtroll.com/">Flyingtroll</a> oldalon blogol, és jelenleg a <a href="http://www.mailmanagr.com/">Mailmanagr</a>-t fejleszti, ami egy email interfész a Basecamp projekt management alkalmazáshoz.</p>
