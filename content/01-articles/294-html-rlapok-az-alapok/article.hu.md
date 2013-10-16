Title: HTML űrlapok — az alapok
----
Date: 2009-08-17 10:44:14
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/19-html-tablazatok/">Előző leírás — HTML táblázatok</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/21-kevesse-ismert/">Következő leírás — Kevéssé ismert szemantikus elemek</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Mindenki látott már űrlapot. Minden használt már űrlapot. De kódoltál már ilyet valaha?</p>

<p>Az online világban űrlapnak nevezünk minden olyan részt a weblapokon, ahová információt tudsz begépelni, például amikor szöveget és számokat írsz egy szövegmezőbe, amikor bejelölsz egy mezőt, amellyel ki tudsz választani egy pontot, vagy kiválasztasz egy lehetőséget egy listából. Az űrlap tartalmát ezután egy gombra kattintva küldheted el a weblapnak.</p>

<p>A weben nagyon sok helyen találkozhatsz űrlapokkal, például amikor meg kell adnod a felhasználóneved és a jelszavad egy belépéshez, ha hozzászólsz egy blogon, kitöltöd a profilodat egy közösségi oldalon, vagy amikor megadod a fizetési adatokat egy vásárlás során.</p>

<p>Űrlapot könnyű készíteni, de mi a helyzet a webes szabványoknak megfelelő űrlapokkal? Mostanra már remélhetőleg sikerült meggyőznünk arról a tanfolyam korábbi részeiben, hogy a követendő út mindig a szabványos megoldás kell legyen. Szerencsére a hozzáférhető, szabványos kód megírása egyáltalán nem igényel nagyobb ráfordítást, mint egy akármilyen űrlap összedobása.</p>

<p>Szóval kezdjük egy alapvető és egyszerű űrlap készítésével, amelyet már használni lehet, és ebből készítsünk egy összetettebb űrlapot. Ebben a leírásban bemutatjuk az alapokat, amelyek segítségével már képes leszel egy elegáns, hozzáférhető HTML-alapú űrlapot készíteni. A leírás felépítése a következő:</p>

<ul>
  <li><a href="#alap_kod">Első lépés: Az alap kód</a></li>
  <li><a href="#struktura_funkcio">Második lépés: Struktúra és funkció</a></li>
  <li><a href="#szemantika_stilus">Harmadik lépés: Szemantika, stílus és még egy kis struktúra</a></li>
  <li><a href="#osszefoglalo">Összefoglaló</a></li>
  <li><a href="#olvasnivalo">További olvasnivalók</a></li>
  <li><a href="#tesztkerdesek">Tesztkérdések</a></li>
</ul>

<h2 id="alap_kod">Első lépés: Az alap kód</h2>

<p>Kezdjük egy valóban egyszerű hozzászólás űrlappal, amellyel lehetővé teszed a látogatóidnak, hogy megjegyzést fűzzenek a tartalomhoz, visszajelzést adjanak a cikkedre, vagy kapcsolatba lépjenek veled anélkül, hogy tudnák az e-mail címed. A kód a következőképpen néz ki:</p>

<pre>&lt;form&gt;
Név: &lt;input type=&quot;text&quot; name=&quot;nev&quot; id=&quot;nev&quot; value=&quot;&quot; /&gt;
E-mail: &lt;input type=&quot;text&quot; name=&quot;email&quot; id=&quot;email&quot; value=&quot;&quot; /&gt;
Megjegyzés: &lt;textarea name=&quot;megjegyzes&quot; id=&quot;megjegyzes&quot; cols=&quot;25&quot; rows=&quot;3&quot;&gt;&lt;/textarea&gt;
&lt;input type=&quot;submit&quot; value=&quot;küldés&quot; /&gt;
&lt;/form&gt;
</pre>

<p>Ha ezt beírod egy HTML dokumentumba, majd megnyitod a böngészőben, akkor a kód úgy jelenik meg, ahogy az az 1. ábrán látható:</p>

<img src="http://dev.opera.com/articles/view/20-html-urlapok/figure1.png" alt="Egyszerű űrlap példa, három mezővel" />
<p class="comment">1. ábra: Az első, egyszerű űrlap példa</p>

<p>Próbáld ki te is — írd be a fenti kódot egy saját, egyszerű HTML dokumentumba, majd töltsd be a böngészőbe, vagy <a href="http://dev.opera.com/articles/view/20-html-urlapok/step-1-form.html">nézd meg itt a fenti űrlapot élesben</a>. Játszadozz nyugodtan az űrlap részeivel, hogy lásd, miket tudsz tenni velük.</p>

<p>Ha megnézed a kódot, akkor az elején láthatsz egy nyitó <code>&lt;form&gt;</code> taget, a végén egy záró <code>&lt;/form&gt;</code> taget, és a kettő között több elemet. Ezek között van két beviteli mező, ahol a látogató megadhatja a nevét és az e-mail címét, valamint egy szövegmező, amiben egy megjegyzést küldhet az oldal tulajdonosának.</p>

<p>Lássuk, mit is találunk itt:</p>

<ul>
  <li><p><code>&lt;form&gt;</code><code>&lt;/form&gt;</code>: Ez a két tag nélkülözhetetlen egy űrlap készítéséhez — ezek nélkül nem tudsz webes űrlapot létrehozni. Minden webes űrlap a <code>&lt;form&gt;</code> taggel kezdődik és a <code>&lt;/form&gt;</code> taggel ér véget.</p>

<p>A <code>&lt;form&gt;</code> tagnek van néhány attribútuma is, amelyeket a következő lépésben fogunk bemutatni. Fontos tudni azt is, hogy nem ágyazhatsz egymásba több különböző űrlapot.</p>
</li>

  <li><p><code>&lt;input&gt;</code> (vagy XHTML doctype esetén &lt;input /&gt;): Ez a tag adja meg azt a területet, ahol információt írhatsz be. A fenti példában az <code>input</code> tagek definiálják a beviteli mezőket, ahová a látogatók beírhatják a nevüket és az e-mail címüket.</p>

<p>Minden <code>input</code> tagnek kell legyen egy <code>type</code> attribútuma, amely megadja a mező típusát: a lehetséges értékek <code>text</code> (szöveg), <code>button</code> (gomb), <code>checkbox</code> (jelölőnégyzet), <code>file</code> (fájl), <code>hidden</code> (rejtett), <code>image</code> (kép), <code>password</code> (jelszó), <code>radio</code> (választógomb), <code>reset</code> (visszaállítás) és <code>submit</code> (küldés).</p>

<p>Minden <code>&lt;input&gt;</code> tagnek kell legyen egy neve (kivéve néhány speciális esetben, amikor a <code>value</code> attribútum mindig ugyanarra van állítva, mint a <code>type</code> attribútum, például a <code>tpye=&quot;submit&quot;</code> vagy <code>&quot;reset&quot;</code> esetében), amelyet te állíthatsz be kedved szerint. A <code>name</code> attribútum adja meg az űrlap elküldésekor az adatokat fogadó oldalnak (ami lehet egy adatbázis, vagy egy szerver-oldali szkripten keresztül küldött e-mail az adminisztrátornak), hogy mi a neve az <code>input</code> mezőben megadott információnak. Az űrlap elküldésekor a szkriptek általában a <code>name</code> attribútumot használják fel arra, hogy az adatot elhelyezzék egy adatbázisban, vagy olvasható formában elküldjék egy személynek.</p>

<p>Éppen ezért, ha az <code>input</code> elem célja az, hogy a látogató megadhassa benne a nevét, akkor a <code>name</code> attribútum ennek megfelelően lehet <code>name=&quot;nev&quot;</code> vagy <code>name=&quot;csaladnev&quot;</code>. Ha az <code>input</code> elem egy e-mail cím megadására szolgál, akkor a <code>name</code> attribútum legyen <code>name=&quot;email&quot;</code>. Hogy megkönnyítsd a saját és az űrlapot feldolgozó személy dolgát, mindig szemantikusan nevezd el az <code>input</code> elemeket.</p>

<p>A szemantikus alatt itt azt értem, hogy a szerint nevezd el, hogy mi az elem funkciója, amint azt a fenti példában láthatod. Ha az <code>input</code> egy e-mail címet vár, akkor nevezd el ennek megfelelően <code>name=&quot;email&quot;</code> formában. Ha egy utcacímet kérsz a látogatótól, akkor nevezd el <code>name=&quot;utcanev&quot;</code> formában. Minél pontosabban nevezed el őket, annál könnyebb dolgod lesz később egy esetleges frissítés vagy módosítás során, ráadásul ezzel megkönnyíted a fogadó adatbázis vagy személy dolgát is, hogy könnyebben megértse a kapott űrlapot. Gondolkodj egyszerűen és törekedj a pontos elnevezésre.</p>
</li>

  <li><p>Minden <code>&lt;input&gt;</code> tagnek kell legyen egy <code>value</code> (érték) attribútuma. Ezt állíthatod üresre — <code>value=&quot;&quot;</code> —, ami azt jelzi a feldolgozó szkriptnek, hogy egyszerűen állítsa be, amit a felhasználó beírt a mezőbe. A jelölőnégyzetek, rádiógombok, rejtett-, küldés- és más típusú attribútumok esetén itt adhatod meg azt az értéket, amelyet alapesetben a mezőnek adni akarsz. Más esetekben, például küldés- és rejtett mezők esetében megadhatod azt az értéket, amely az elküldött érték lesz. Például <code>value=&quot;yes&quot;</code> az igen gomb, <code>value=&quot;submit&quot;</code> a küldés gomb, <code>value=&quot;reset&quot;</code> a visszaállítás gomb, vagy <code>value=&quot;http://www.opera.com&quot;</code> a rejtett átirányítás esetében.</p>

<p>Néhány példa a <code>value</code> attribútum használatára:</p>

<p>Lássunk egy üres értéket, amikor a felhasználó adja meg majd az attribútum értékét:</p>

<ul>
  <li>A kód így néz ki: <code>&lt;input type=&quot;text&quot; name=&quot;keresztnev&quot; id=&quot;keresztnev&quot; value=&quot;&quot; /&gt;</code></li>
  <li>A felhasználó ezt írja be: <code>Katalin</code></li>
  <li>Az űrlap elküldésekor a keresztnev mező értéke „Katalin” lesz.</li>
</ul>

<p>Egy előre beállított érték:</p>

<ul>
  <li>A kód így néz ki: <code>&lt;input type=&quot;checkbox&quot; name=&quot;levelezo-lista&quot; id=&quot;levelezo-lista&quot; value=&quot;no&quot; /&gt;</code></li>
  <li>A felhasználó bejelöli a jelölőnégyzeten, hogy csatlakozni szeretne a levelezőlistához.</li>
  <li>A „levelezo-lista” értéke az űrlap elküldésekor <code>yes</code> lesz.</li>
</ul>
</li>

  <li><p>A két <code>&lt;input&gt;</code> elem után találhatsz valami mást — a <code>textarea</code> elemet.</p>

<p>A <code>textarea</code> egy szép, új, továbbfejlesztett szövegmezőt bocsát a rendelkezésedre a szövegek megadásához. Nem csak egy egyszerű, egysoros szövegmezőt, mint amit a barátja, az <code>input</code> biztosít. A <code>textarea</code> elem több soros bevitelt tesz lehetővé, sőt azt is megadhatod, hogy hány sorban adhasd meg a szövegedet a beviteli mezőben. Figyeld meg a <code>cols</code> és <code>rows</code> attribútumokat — ezeket minden <code>textarea</code> elemben meg kell adnod, mivel ezekkel definiálhatod, hogy hány oszlopa és hány sora legyen a beviteli mezőnek. Az értékek karakterszámra vonatkoznak.</p></li>

  <li><p>Végül, de nem utolsósorban van egy speciális <code>input</code> elem is egy <code>value=&quot;submit&quot;</code> attribútummal. Ahelyett, hogy ez egy egysoros beviteli mezőt készítene, az elem egy küldés gombot hoz létre, amelyre ha rákattint a felhasználó, akkor az elküldi az űrlapot arra a címre, amelyet az űrlap létrehozásakor megadtunk (jelen esetben ezt még egyáltalán nem adtuk meg, így az űrlap elküldésekor nem történik semmi).</p></li>
</ul>

<h2 id="struktura_funkcio">Második lépés: Struktúra és funkció</h2>

<p>Szóval, eddig már kipróbáltad a fenti példa űrlapot, kitöltötted és megnyomtad a küldés gombot — de miért nem történt semmi, és miért néz ki ennyire rondán, miért van az egész egy sorban? A válasz az, hogy még nem strukturáltuk, és nem adtuk meg azt a helyet, ahová az űrlap az adatokat a kitöltés után elküldhetné.</p>

<p>Most térjünk vissza a tervezőasztalhoz:</p>

<pre>&lt;form id=&quot;contact-form&quot; action=&quot;script.php&quot; method=&quot;post&quot;&gt;
    &lt;input type=&quot;hidden&quot; name=&quot;redirect&quot; value=&quot;http://www.opera.com&quot; /&gt;
    &lt;ul&gt;
        &lt;li&gt;
            &lt;label for=&quot;nev&quot;&gt;Név:&lt;/label&gt;
            &lt;input type=&quot;text&quot; name=&quot;nev&quot; id=&quot;nev&quot; value=&quot;&quot; /&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;label for=&quot;email&quot;&gt;E-mail:&lt;/label&gt;
            &lt;input type=&quot;text&quot; name=&quot;email&quot; id=&quot;email&quot; value=&quot;&quot; /&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;label for=&quot;megjegyzes&quot;&gt;Megjegyzés:&lt;/label&gt;
            &lt;textarea name=&quot;megjegyzes&quot; id=&quot;megjegyzes&quot; cols=&quot;25&quot; rows=&quot;3&quot;&gt;&lt;/textarea&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;input type=&quot;submit&quot; value=&quot;küldés&quot; /&gt;
            &lt;input type=&quot;reset&quot; value=&quot;visszaállítás&quot; /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/form&gt;
</pre>

<p>Ez az űrlap a 2. ábrán látható módon jelenik meg a böngészőben:</p>

<img src="http://dev.opera.com/articles/view/20-html-urlapok/figure2.png" alt="Második, strukturált űrlap példa" />
<p class="comment">2. ábra: A második űrlap példa — már jobban néz ki, de még nem tökéletes</p>

<p><a href="http://dev.opera.com/articles/view/20-html-urlapok/step-2-form.html">Próbáld ki élesben a fenti űrlapot</a>, és játszadozz vele nyugodtan.</p>

<p>Néhány módosítást tettem az eredeti, egyszerű űrlapoz képest. Nézzük meg ezeket egyenként:</p>

<ul>
  <li><p>Néhány új attribútum került be a <code>&lt;form&gt;</code> tag mellé. Hozzáadtam egy <code>id</code> attribútumot, nem csak a szemantikai okokból, hogy az űrlapnak legyen egy neve, hanem azért is, hogy legyen egy egyedi azonosítója, amellyel könnyebben lehet stílust rendelni hozzá CSS-ből, vagy módosítani rajta valamit JavaScriptben. Minden ilyen azonosítóból csak egy darab lehet egy adott névvel a lapon belül; jelen esetben az űrlap neve <code>contact-form</code> lett.</p></li>

  <li><p>Fény, kamera, próba! Amikor az első űrlapon megnyomtad a küldés gombot, és nem történt semmi, az azért volt, mert nem adtunk meg hozzá semmilyen műveleted vagy metódust. A <code>method</code> attribútum szabja meg, hogy hogyan lesznek elküldve az adatok a feldolgozó szkriptnek. A két leggyakoribb metódus a „GET” és a „POST”. A „GET” metódus az adatokat a lap URL-jében küldi át (néha láthatsz ilyen hosszú URL-eket, mint például <code>http://www.pelda.hu/page.php?data1=ertek1&amp;data2=ertek2...</code>; ezek mind olyan adatok, amelyek a „GET” metódussal továbbítódnak). Ha nincs konkrét indokod a „GET” metódus használatára, és érzékeny információkat akarsz továbbítani, akkor inkább ne használd ezt, mivel az URL-ből bárki láthatja ezeket az értékeket. A „POST” metódus az adatokat az űrlap szkriptjén keresztül küldi, vagy egy e-mailben az oldal adminisztrátorának, vagy az adatokat egy később hozzáférhető adatbázisba mentve, nem pedig az oldal URL-jében, mint a „GET”. <a href="http://www.w3.org/2001/tag/doc/whenToUseGet.html">A „POST” éppen ezért jóval biztonságosabb, így általában ez a jobb lehetőség.</a></p>

<p>Ha számodra nagyon fontos az űrlap adatainak biztonsága, például hitelkártya számokat küldessz át egy kereskedő oldalról, akkor neked érdemes a https protokollt használnod, amely támogatja az SSL-t (Secure Socket Layert). Alapvetően ez csak annyit jelent, hogy az adatok a https protokollon keresztül lesznek elküldve, nem pedig a http protokollon. Legközelebb, amikor fizetsz valamiért a neten vagy online bankolsz, nézd meg az oldal URL-jét — valószínűleg a címe a https:// jelöléssel fog kezdődni, nem a megszokott http:// jelöléssel. A https kapcsolat valamivel lassabb, mint a http, viszont az adatok titkosítva vannak, így ha valaki lehallgatja az adatfolyamot, képtelen lesz bármilyen értelmes információt kinyerni belőle. Lépj kapcsolatba a tárhely szolgáltatóddal, hogy tudnak-e neked https-et és SSL-t biztosítani.</p>
</li>

  <li><p>Az <code>action</code> attribútum adja meg, hogy melyik szkript fájl számára legyenek elküldve az adatok feldolgozásra. Sok tárhely szolgáltató biztosít egy alap e-mail küldő vagy más hasonló szkriptet (nézd meg a tárhely leírását), amelyeket a szervereikhez állítottak be. Másrészről használhatsz olyan szerver-oldali szkripteket is, amelyeket te vagy valaki más hozott létre az űrlap feldolgozására. Sok esetben ilyen célokra PHP, Perl vagy Ruby szkripteket használnak az űrlap adatainak feldolgozásához — például küldhetsz egy e-mailt, amely az űrlap adatait tartalmazza, vagy beírhatod az adatokat egy adatbázisba, későbbi felhasználás céljából.</p>

<p>A szerver-oldali szkriptek írása túlmutat a jelen kurzus keretein, így most azt tudjuk ajánlani, hogy lépj kapcsolatba a tárhely szolgáltatóddal, hogy ők milyen hasonló szolgáltatásokat nyújtanak, vagy barátkozz össze egy programozóval.</p>

<p>Az alábbi oldalakon találhatsz néhány leírást ahhoz, hogy elindulhass a szerver-oldali szkriptek írásában:</p>

<ul>
  <li><p>Perl: <a href="http://www.perl.com/">http://www.perl.com/</a></p></li>

  <li><p>PHP: <a href="http://www.php.net">http://www.php.net</a></p></li>

  <li><p>PHP Forms dokumentáció: <a href="http://uk3.php.net/manual/en/tutorial.forms.php">http://uk3.php.net/manual/en/tutorial.forms.php</a></p></li>

  <li><p>Python: <a href="http://python.org/">http://python.org/</a></p></li>

  <li><p>Ruby: <a href="http://www.ruby-lang.org">http://www.ruby-lang.org</a></p></li>

  <li><p>Sendmail: <a href="http://www.sendmail.org/">http://www.sendmail.org/</a></p></li>

  <li><p>ASP.NET: <a href="http://www.asp.net/">http://www.asp.net/</a></p></li>
</ul>
</li>

  <li><p>A második sor, amit az új űrlaphoz hozzáadtunk, egy „rejtett” (hidden) beviteli mező — ami egy átirányítás. Mi van?</p>

<p>Abból a célból, hogy szétválasszuk a jelölés struktúráját a megjelenéstől és a működéstől, érdemes úgy megadni az űrlapot feldolgozó szkriptet, hogy az átirányítsa a felhasználót az űrlap elküldésekor. Valószínűleg nem akarod ilyenkor magukra hagyni a felhasználóidat bámulni az űrlapot, és azon gondolkodni, hogy most mégis mihez kezdjenek; gondolom te is egyetértesz, hogy jobb a felhasználót átirányítani egy köszönő oldalra, ahol egyúttal biztosíthatsz neki néhány „következő” linket is, miután elküldte az űrlapot. Ez a sor pontosan ezt teszi: miután az űrlapot elküldték, a felhasználót átirányítja az Opera főoldalára.</p></li>

  <li><p>Az űrlap megjelenésének javításához az összes űrlapelemet egy rendezetlen listába tettem, így felhasználhatom ezt a jelölést, hogy világosan szétválasszam őket, majd CSS-ben megadjam a megjelenésüket.</p>

<p>Néhányan talán ellenkeznek, hogy az űrlap elemeit nem egy rendezetlen listában, hanem egy definíciós  listában kellene megadni. Mások azt mondhatják, hogy egyáltalán ne tegyük bele az elemeket semmilyen listába, hanem használjuk CSS-ben a <code>&lt;label&gt;</code> és <code>&lt;input&gt;</code> tageket. Én nem akarok erről senkivel vitatkozni, hanem rád hagyom, hogy eldöntsd, szerinted melyik megoldás helyesebb szemantikailag. Ehhez az egyszerű példához én rendezetlen listát használtam.</p></li>

  <li><p>Végezetül, a második űrlapon már elneveztem az űrlap elemeit. Mind az érhetőség, mind a széleskörű hozzáférhetőség szempontjából nagyon jó ötlet, hogy neveket adj az űrlap elemeinek — a <code>label</code> elem segítségével — mivel ezek hozzákapcsolódnak a megfelelő <code>textarea</code> és <code>input</code> elemekhez, az egyedi azonosítókon keresztül (az <code>id</code> attribútumban), amelyeknek az értéke megegyezik a <code>label</code> elem <code>for</code> attribútumával. Ez nem csak azért jó, mert vizuálisan jelöli a különböző űrlapmezők funkcióját a képernyőn, hanem szemantikailag is értelmet ad a mezőknek. Például így egy képernyő-felolvasót használó látogató is pontosan tudni fogja, hogy melyik űrlap elem mit takar. Az <code>id</code> értékeket pedig felhasználhatod a CSS-ben a különböző mezők stílusozására is.</p>

<p>Talán elgondolkodtál azon, hogy miért adtunk meg az űrlap elemekben egyszerre egy <code>id</code> és egy <code>name</code> attribútumot is. A válasz az, hogy a <code>name</code> attribútum nélküli <code>input</code> elemek nem lesznek elküldve a kiszolgálóra, így azokra mindenképp szükség van. Az <code>id</code> attribútumokra pedig azért van szükség, hogy összekapcsoljuk az űrlap elemeket a megfelelő <code>label</code> elemekkel. Ezért mindkettőt használnunk kell.</p></li>
</ul>

<p>A második űrlap már valamivel szebben jelent meg, de még mindig egyszerű, mint egy bot. Ideje hozzáadni néhány varázsbitet, hogy igazi stílust kapjon.</p>

<h2 id="szemantika_stilus">Harmadik lépés: Szemantika, stílus és még egy kis struktúra</h2>

<p>Most pedig befejezzük, amit a cikk elején elkezdtünk, a példa űrlapunk végleges változatával:</p>

<pre>&lt;form id=&quot;contact-form&quot; action=&quot;script.php&quot; method=&quot;post&quot;&gt; 
  <strong>&lt;fieldset&gt;</strong>
    <strong>&lt;legend&gt;Kapcsolat:&lt;/legend&gt;</strong>
    &lt;ul&gt;
      &lt;li&gt;
        &lt;label for=&quot;nev&quot;&gt;Név:&lt;/label&gt;
        &lt;input type=&quot;text&quot; name=&quot;nev&quot; id=&quot;nev&quot; value=&quot;&quot; /&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;label for=&quot;email&quot;&gt;Email:&lt;/label&gt;
        &lt;input type=&quot;text&quot; name=&quot;email&quot; id=&quot;email&quot; value=&quot;&quot; /&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;label for=&quot;megjegyzes&quot;&gt;Megjegyzés:&lt;/label&gt;
        &lt;textarea name=&quot;megjegyzes&quot; id=&quot;megjegyzes&quot; cols=&quot;25&quot; rows=&quot;3&quot;&gt;&lt;/textarea&gt;
      &lt;/li&gt;
      &lt;li&gt;
<strong>        &lt;label for=&quot;levelezo-lista&quot;&gt;Feliratkozik a levelezőlistánkra is?&lt;/label&gt;
        &lt;input type=&quot;checkbox&quot; checked=&quot;checked&quot; id=&quot;levelezo-lista&quot; value=&quot;Igen, feliratkozom!&quot; /&gt;</strong>
      &lt;/li&gt;
      &lt;li&gt;
        &lt;input type=&quot;submit&quot; value=&quot;küldés&quot; /&gt;
        &lt;input type=&quot;reset&quot; value=&quot;visszaállítás&quot; /&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  <strong>&lt;/fieldset&gt;</strong>
&lt;/form&gt;</pre>

<p>Ha ezt megnyitod a böngészőben, akkor a 3. ábrán látható képet kapod.</p>

<img src="http://dev.opera.com/articles/view/20-html-urlapok/figure3.png" alt="A harmadik, végleges példa" />
<p class="comment">3. ábra: A harmadik, végleges példa űrlap, teljes pompájában</p>

<p>Ha meg akarod nézni élőben a fenti példát, <a href="http://dev.opera.com/articles/view/20-html-urlapok/step-3-form.html">nyisd meg az űrlapot a böngésződben</a>, és játszadozz vele nyugodtan.</p>

<p>A két nagyobb elem, amit most hozzáadtunk az űrlaphoz, az a <code>fieldset</code> és a <code>legend</code>. Egyik elemet sem kötelező használni, de nagyon hasznosnak a komplex űrlapok és prezentációk esetében.</p>

<p>A <code>fieldset</code> elem segítségével szemantikus egységekbe rendezheted az űrlapot. Egy bonyolultabb űrlapon például használhatsz különböző <code>fieldset</code>-eket a címekhez, a számlázási adatokhoz, a felhasználói szokásokhoz, és így tovább. A <code>legend</code> elemmel pedig elnevezheted a különböző <code>fieldset</code> részeket.</p>

<p>Ezen kívül most CSS-t is adtunk az űrlaphoz, hogy stílust kapcsoljunk a jelöléshez. Ez csak a harmadik űrlapon aktív, egy külső stíluslap használatával — <a href="form.css">itt találod a stílus definíciókat</a>. Két dolgot tettem meg a CSS-ben: hozzáadtam egy kis margót a label és input dobozokhoz, valamint kitöröltem a lista pontjait. A külső stíluslapon ez a kód szerepel:</p>

<pre>#contact-form fieldset {width:40%;}
#contact-form li {margin:10px; list-style: none;}
#contact-form input  {margin-left:45px; text-align: left;}
#contact-form textarea {margin-left:10px; text-align: left;}</pre>

<p>Mit is csinál ez pontosan? Az első sor a <code>fieldset</code> keretét állítja be, hogy ne foglalja el a teljes lapszélességet; azt is beállíthatod, hogy egyáltalán ne legyen kerete a <code>{border: none;}</code> tulajdonsággal. A második sor egy 10 pixeles margót állít be az <code>li</code> elemeknek, hogy egy kis helyet teremtsen a listaelemek között. A harmadik és a negyedik sor egy bal margót állít be az <code>input</code> és <code>textarea</code> elemeknek, hogy ne folyjanak össze a nevekkel, és egymás alá kerüljenek. Ha többet is szeretnél tudni az űrlapok stílusozásáról, akkor erről még lesz sokkal bővebben is szó az <ins>Űrlapok stílusozása</ins> leírásban ennek a kurzusnak a kereteiben, vagy olvasd el <a href="http://alistapart.com/articles/prettyaccessibleforms">A List Apart oldalon Nick Rigby cikkét a szép és hozzáférhető űrlapokról</a>. A margókról és a keretekről is lesz még bővebben szó ebben a kurzusban.</p>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>Ebben a leírásban három lépésben raktunk össze egy webes szabványoknak megfelelő űrlapot. Sok minden van még az űrlapok világában, amiről most nem volt szó, ezeket már neked kell felfedezned. Vannak még gyorsbillentyűk, jelölőnégyzetek és választógombok, egyedi küldés és visszaállítás gombok, választó dobozok.</p>

<p>A harmadik űrlaphoz hozzáadtam egy jelölőnégyzetet is, hogy megmutassam, hogyan használhatod az <code>input</code> elem attribútumait az egyszerű és a többsoros szövegmezőn túl. A <code>checkbox</code> és a <code>radio button</code> attribútum értékek használatával lehetőséged van egyszerű kérdések feltevésére, és egy sor lehetséges válasz megadására is az űrlapon belül (a jelölőnégyzetekkel egyszerre több választ is ki lehet jelölni, a választógombokkal csak egyet). A választógombok különösen hasznosak például közvélemény kutatáskor.</p>

<p>A <code>select</code> elem — amelyről nem volt szó a leírásban — használható egy több elemet tartalmazó lenyíló menü létrehozására (például az országok listájával).</p>

<h2 id="olvasnivalo">További olvasnivalók</h2>

<ul>
  <li>Cameron Adams: <a href="http://www.themaninblue.com/writing/perspective/2004/03/24/">Hozzáférhető, stílusos űrlapszerkezetek</a></li>

  <li>Brian Crescimanno: <a href="http://www.alistapart.com/articles/sensibleforms/">Ésszerű űrlapok: használhatósági feladatlista</a></li>

  <li>Simon Willison: <a href="http://simonwillison.net/2003/Jun/17/theHolyGrail/">Egyszerű űrlapellenőrzés PHP-vel</a></li>

  <li>A specifikáció. Nem valami régi, hanem <a href="http://www.w3.org/TR/html401/interact/forms.html">A W3C SPECIFIKÁCIÓ</a>. Ha bármikor olyan álmatlanságban szenvednél, amikor sem a csésze meleg tej, sem a bárányok számolgatása, sem az altató nem segít, akkor csak kapd elő a HTML 4.01 vagy az XHTML 1.0 specifikációit a w3.org-ról. Olcsóbb és hatékonyabb, mint bármilyen gyógyszer. [Helyettesítsd be az istened nevét] áldja meg a világ mérnökeit.</li>

  <li>A W3.org kedves munkatársai <a href="http://www.w3.org/2001/tag/doc/whenToUseGet.html">leírták a különbséget a „GET” és a „POST” között</a>, valamint hogy mikor melyiket kell használni.</li>

  <li>Hálás köszönet <a href="http://alistapart.com/articles/prettyaccessibleforms">Mr. Rigbynek</a>.</li>
</ul>

<h2 id="tesztkerdesek">Tesztkérdések</h2>

<p>Itt az ideje, hogy elkészítsd a saját űrlapodat.</p>

<ul>
  <li>Készíts egy egyszerű kapcsolat űrlapot, amelyben bekéred a felhasználó nevét, e-mail címét, valamint egy hozzászólást.</li>
  <li>Adj hozzá egy jelölőnégyzetet (checkbox), amellyel megkérdezed a felhasználót, hogy fel akar-e iratkozni a levelező listádra.</li>
  <li>Készíts CSS-t az űrlap stílusozására: állítsd be az űrlap szélességét, igazítsd a neveket balra, adj meg egy háttérszínt, stb.</li>
</ul>

<p>Pluszponért: minél többet játszol az űrlapelemekkel és a különböző CSS tulajdonságokkal, annál többet tanulsz meg abból, hogy mit lehet tenni egy egyszerű űrlappal.</p>

<p>További pluszpontokért: ha szeretnél ismeretlen területeket is felfedezni, akkor keress egy szkriptet vagy válassz egyet azok közül, amiket a tárhely szolgáltatód biztosít, és küldd el magadnak az űrlapot. Ha a szkriptes résszel nem tudnál megbirkózni, akkor ideje összebarátkoznod egy programozóval.</p>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/19-html-tablazatok/">Előző leírás — HTML táblázatok</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/21-kevesse-ismert/">Következő leírás — Kevéssé ismert szemantikus elemek</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>A szerzőről</h2>

<img class="right" src="http://forum-test.oslo.osa/kirby/content/articles/294-20-html-rlapok-az-alapok/msjen.jpg" alt="Jen Hanen" />

<p>Az üzleti webdesigner és webfejlesztő, fényképész, moblogger és professzionális művészkülönc, Ms. Jen a design- és művészeti karrierjét egy magasított székben kezdte a ételek művészi átrendezésével valamint falra helyezésével 11 hónapos korában. 1996-ban tanította meg magát a HTML-re, mivel egy számítógépes sznob azt mondta neki, hogy egy művész nem tud megtanulni kódolni, azóta is rajong a webdesign mindenféle formájáért.</p>

<p>Ms. Jen a Black Phoebe Designs alapítója és tulajdonosa, amely egy web- és mobil designer cég. Ms. Jennek mesteri fokozata van számítástechnikából és multimédiás rendszerekből a dublini Trinity Fősikolától (Írország), és webdesignt tanult egy LA környéki egyetemen 2001–2005 között. Részt vett két Nokia mobil blogoló projektben: Wasabi Lifeblog (2004–2005) és Nokia Urbanista Diaries (2008). Ms. Jen mindig megtalálható online a <a href="http://www.blackphoebe.com/">blackphoebe.com</a> vagy <a href="http://blackphoebe.mobi/">blackphoebe.mobi</a> oldalakon.</p>p /
