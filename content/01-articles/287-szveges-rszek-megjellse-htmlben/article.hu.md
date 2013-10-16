Title: Szöveges részek megjelölése HTML-ben
----
Date: 2009-08-17 08:47:39
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/14-megfelelo-doctype-valasztasa/" title="hivatkozás a sorozat előző leírására">Előző leírás — Megfelelő doctype választása a HTML dokumentumokhoz</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/16-html-listak/">Következő leírás — HTML listák</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2>Bevezető</h2>

<p>Ebben a leírásban megismerkedhetsz a HTML alapszintű használatával, mégpedig hogy hogyan adhatod meg a jelölésekkel a dokumentumod különböző részeinek az értelmét.</p>

<p>Megnézzük az általános strukturális elemeket, mint például a címsorok, a paragrafusok vagy a beágyazott idézetek és kódok. Ezután néhány belső tartalommal is megismerkedünk, mint a rövid idézetek és a kiemelések, majd a végén még gyorsan átnézünk néhány régimódi megjelenítési elemet is. A leírás felépítése a következő:</p>

<ul>
  <li><a href="#space">Az űr a legvégső határ</a></li>
  <li><a href="#blokk">Blokk szintű elemek</a>
<ul>
  <li><a href="#cimsor">A lap szakaszcímei</a></li>
  <li><a href="#bekezdes">Általános bekezdések</a></li>
  <li><a href="#idezet">Más források idézése</a></li>
  <li><a href="#formazas">Előformázott szöveg</a></li>
</ul></li>
  <li><a href="#inline">Inline elemek</a>
<ul>
  <li><a href="#rovididezet">Rövid idézetek</a></li>
  <li><a href="#kiemeles">Kiemelés</a></li>
  <li><a href="#dolt">Dőlt kiemelés</a></li>
</ul></li>
  <li><a href="#megjelenites">Megjelenítési elemek — soha ne használd őket</a></li>
  <li><a href="#osszefoglalo">Összefoglaló</a></li>
</ul>

<p><strong>Megjegyzés</strong>: Minden példakód után találsz egy „Próbáld ki élőben” hivatkozást, amelyre ha rákattintasz, elvisz egy oldalra, ahol azonnal láthatod, hogyan jelenik meg élesben a bemutatott kód, valamint megnézheted a hivatkozott oldal forrását is, ahol az összes példakódot megtalálod.</p>

<h2 id="space">Az űr a legvégső határ</h2>

<p>Van egy nagyon fontos pont, amit tisztáznunk kell, mielőtt még a szövegekről beszélnénk, mégpedig a szavak közötti üres helyekről. A HTML írásakor a forráskód ún. „fehér karaktereket” is tartalmaz — ezek azok a karakterek, amelyek egy üres területtel elválasztják egymástól a szavakat. A leggyakoribb ilyen fehér karakter a <em>space</em> (szóköz), amelyet a szóköz billentyű lenyomásával tudsz beírni, de ilyen még a tabulátor és az új sor karakter is.</p>

<p>A HTML-ben a fehér karakterek többszörös megjelenése (szinte) minden esetben egyetlen szóköz karakternek számít. Például:</p>

<pre>&lt;h2&gt;Kezdetben    teremté
                az      Úr &lt;/h2&gt;
</pre>

<a href="HTML_peldak.html#whitespace">Próbáld ki élőben</a>

<p>a böngészőben ugyanúgy lesz értelmezve, mint a következő:</p>

<pre>&lt;h2&gt;Kezdetben teremté az Úr&lt;/h2&gt;</pre>

<p>Az egyetlen hely, ahol ez nem így történik, az a <code>pre</code> elem, amelyről még fogunk beszélni ebben a leírásban.</p>

<p>Ez sokszor zavaró lehet az olyanoknak, akik először szerkesztenek HTML dokumentumot, mikor megpróbálnak egy szöveget kitolni néhány extra szóköz karakterrel, vagy nagyobb helyet szeretnének a mondatok, esetleg a bekezdések között. A dokumentum vizuális megjelenését viszont nem a HTML forrásban kell befolyásolni, hanem használj helyette stíluslapokat, ahogy azt a sorozat egy későbbi részében be fogjuk mutatni.</p>

<h2 id="blokk">Blokk szintű elemek</h2>

<p>Ebben a részben végigvesszük a gyakoribb, szövegek formázására használható <a href="http://dev.opera.com/articles/view/12-a-html-alapjai/#blokkinline">blokk szintű elemek</a> szintaxisát és használatát.</p>

<h3 id="cimsor">A lap szakaszcímei</h3>

<p>Miután a lapot felosztottad több logikus szakaszra, minden szakaszt be kell vezetned egy megfelelő címsorral. Erről már volt szó korábban a <a href="http://dev.opera.com/articles/view/7-mi-kell-egy-jo-weblaphoz/">Mi kell egy jó weblaphoz?</a> leírásban.</p>

<p>A HTML 6 címsor szintet definiál, <code>h1</code>, <code>h2</code>, <code>h2</code>, <code>h3</code>, <code>h5</code> és <code>h6</code> (a magasabb fontosságútól az alacsonyabbig). Általánosságban, a <code>h1</code> szokott lenni az egész lap fő címsora, ez vezet be mindent. A <code>h2</code> ezután szakaszokra bontja a lapot, a <code>h2</code> alszakaszokra, és így tovább.</p>

<p>Nagyon fontos, hogy a dokumentumot a különböző szintű címsorokkal oszd fel szakaszokra, alszakaszokra, al-alszakaszokra, mivel ez sokkal érthetőbbé teszi a lapot a képernyőolvasók és az automatikus folyamatok számára (mint amilyen például a Google indexelő robotja).</p>

<p>Ha ezt a lapot vesszük alapul, akkor ez is egy jó példa a címsorok felépítésére:</p>

<pre>&lt;h1&gt;Szöveges részek megjelölése HTML-ben&lt;/h1&gt;
  &lt;h2&gt;Bevezető&lt;/h2&gt;
  &lt;h2&gt;Space — az űr a legvégső határ&lt;/h2&gt;
  &lt;h2&gt;Blokk szintű elemek&lt;/h2&gt;
    &lt;h2&gt;A lap szakaszcímei&lt;/h2&gt;
    &lt;h2&gt;Általános bekezdések&lt;/h2&gt;
    &lt;h2&gt;Más források idézése&lt;/h2&gt;
    &lt;h2&gt;Előformázott szöveg&lt;/h2&gt;
  &lt;h2&gt;Inline elemek&lt;/h2&gt;

[…és így tovább…]
</pre>

<a href="HTML_peldak.html#headings">Próbáld ki élőben</a>

<h3 id="bekezdes">Általános bekezdések</h3>

<p>A bekezdések (vagy paragrafusok) a legtöbb dokumentum építőkövei. A HTML-ben a bekezdést a <code>p</code> elem jelöli, amelynek nincsenek speciális attribútumai. Például:</p>

<pre>&lt;p&gt;Ez egy nagyon rövid bekezdés. Csak két mondatból áll.&lt;/p&gt;</pre>

<a href="HTML_peldak.html#paragraph">Próbáld ki élőben</a>

<p>Sok könyvben és cikkben egy paragrafusban csak egy mondat lehet. Bár a „paragrafus” értelme (az írott terminológiát tekintve) elég nyilvánvaló, a weben sokszor sokkal rövidebb szövegeket is meg szoktak jelölni paragrafusként, mivel a szerző szerint ez sokkal „szemantikusabb”, mint a <code>div</code> elem használata (erről fogunk beszélni a későbbiekben az <a href="http://dev.opera.com/articles/view/22-altalanos-tarolok/">Általános tárolók</a> leírásban).</p>

<p>A paragrafus a weben egy vagy több mondat csoportja, éppen úgy, mint az újságokban vagy a könyvekben. A webes sokkal jobb, ha ezekhez használjuk a paragrafus elemet, és nem hagyunk a szövegben egyedül csak úgy szövegrészeket. Ha csak néhány szóról van szó, vagy nem egy teljes mondatról, akkor ezeket nem kell feltétlenül paragrafusként megjelölnöd.</p>

<h3 id="idezet">Más források idézése</h3>

<p>Nagyon gyakran a cikkek, blogbejegyzések vagy a webes dokumentumok idéznek kisebb-nagyobb részeket más dokumentumokból. A HTML-ben a hosszabb idézeteket — például teljes mondatokat, bekezdéseket, listákat — a <code>blockquote</code> elemmel jelölhetjük.</p>

<p>A <code>blockquote</code> elem nem tartalmazhat sima szöveget, hanem csak egy másik blokk szintű elem lehet benne. Ugyanazokat a blokk szintű elemeket használd az idézetben is, mint az eredeti környezetben. Ha egy bekezdést idézel, használd a paragrafus elemet, ha egy lista elemeit, akkor készíts listát, és így tovább.</p>

<p>Ha az idézet egy másik weboldalról származik, akkor megadhatod a forrást a <code>cite</code> attribútumban a következőképpen:</p>

<pre>&lt;p&gt;A HTML 4.01 az egyetlen olyan HTML verzió, amelyet egy új
weblap létrehozásakor használhatsz, a specifikáció szerint:&lt;/p&gt;
<strong>&lt;blockquote cite=&quot;http://www.w3.org/TR/html401/&quot;&gt;</strong>
&lt;p&gt;Ez a dokumentum érvényteleníti a HTML 4.0 korábbi verzióit, 
bár a W3C továbbra is elérhetővé teszi ezeket a 
specifikációkat és a hozzájuk tartozó DTD-ket a W3C weboldalán.&lt;/p&gt;
<strong>&lt;/blockquote&gt;</strong>
</pre>

<a href="HTML_peldak.html#cite">Próbáld ki élőben</a>

<h3 id="formazas">Előformázott szöveg</h3>

<p>Minden olyan szöveget, amelyben a szöveg behúzása és a fehér karakterek (amelyeket a leírás elején említettünk) fontos szerepet kapnak, a <code>pre</code> elemmel kell megjelölnünk.</p>

<p>A legtöbb webböngészőben az előformázott szöveg pontosan úgy jelenik meg a felhasználónak, ahogy a forrásban szerepel, gyakran fix szélességű (monospace) betűtípussal, így a szöveg úgy néz ki, mintha írógépből származna. Ez a programozók hagyatéka, akik fix szélességű betűkkel dolgoznak, és eleinte leginkább ők használták az előformázott szöveget.</p>

<p>Ebben a példában egy példakódot láthatsz a perl programozási nyelvből:</p>

<pre><strong>&lt;pre&gt;</strong>&lt;code class=&quot;language-perl&quot;&gt;
            # vegig beolvassa a megnevezett fajlt
            sub slurp {
                my $filename = shift;
                my $file     = new FileHandle $filename;
                
                if ( defined $file ) {
                    local $/;
                    return &lt;$file&gt;;
                }
                return undef;
            };
        &lt;/code&gt;<strong>&lt;/pre&gt;</strong>
</pre>

<a href="HTML_peldak.html#preformatted">Próbáld ki élőben</a>

<p>A fenti példában szereplő <code>code</code> elemről részletesebben is fogunk beszélni a <a href="http://dev.opera.com/articles/view/21-kevesse-ismert/">Kevéssé ismert szemantikus elemek</a> részben.</p>

<h2 id="inline">Inline elemek</h2>

<p>Ebben a részben átnézzük a leggyakoribb, szövegek formázásához használt <a href="http://dev.opera.com/articles/view/12-a-html-alapjai/#blokkinline">inline (soron belüli) elemek</a> szintaxisát és használatát.</p>

<h3 id="rovididezet">Rövid idézetek</h3>

<p>A mondaton vagy bekezdésen belüli rövid idézeteket a <code>q</code> elemmel jelölhetjük. Hasonlóan a <code>blockquote</code> elemhez, ez is tartalmazhat egy <code>cite</code> attribútumot, amelyben megadhatsz egy webcímet, ahonnan az idézet származik.</p>

<p>A rövid idézetek legtöbbször idézőjelben szerepelnek. A <a href="http://www.w3.org/TR/html401/struct/text.html#h-9.2.2.1">HTML specifikáció szerint</a> az idézőjeleket ebben az esetben a kliens eszköz (vagyis a böngésző) kell elhelyezze a dokumentumban, a dokumentum által beállított nyelv alapján. A CSS-ben módosíthatod a felhasznált idézőjeleket — erről egy későbbi cikkben lesz szó, a <ins>Szöveg stílusozása CSS-sel</ins> leírásban.</p>

<p>Egy példa a <code>q</code> elem használatára:</p>

<pre>&lt;p&gt;Ez nem végződött túl jól a számomra. Hát igen,
       <strong>&lt;q lang=&quot;fr&quot;&gt;c&#39;est la vie&lt;/q&gt;</strong>, ahogy a franciák mondják.&lt;/p&gt;</pre>

<a href="HTML_peldak.html#q">Próbáld ki élőben</a>

<h3 id="kiemeles">Kiemelés</h3>

<p>A HTML-ben két módszer van arra, ha egy szövegrészt ki akarunk emelni az olvasónak, például hibákat, figyelmeztetéseket vagy megjegyzéseket. A vizuális böngészőkben ezt egy eltérő színt vagy betűtípust, esetleg félkövér vagy dőlt megjelenést jelent. A képernyő-felolvasók használói számára a kiemelés eredmény egy más hangtónus vagy egyéb hangjelzés lehet.</p>

<p>Az olyan szövegre, amelyet ki akarsz emelni, használhatod az <code>em</code> elemet, mint az alábbi példában:</p>

<pre>&lt;p&gt;<strong>&lt;em&gt;Megjegyzés:&lt;/em&gt;</strong> a bojlert ki kell húzni 
            éjszakára. &lt;/p&gt;</pre>

<a href="HTML_peldak.html#em">Próbáld ki élőben</a>

<p>Ha a teljes bekezdést ki kell emelned, de a bekezdésen belül is van olyan rész, amelyet ismét kiemelnél, akkor használd a <code>strong</code> elemet, amely egy erősebb kiemelést jelent, hasonlóan az alábbi példához:</p>

<pre>&lt;p&gt;&lt;em&gt;Megjegyzés: a bojlert ki <strong>&lt;strong&gt;kell&lt;/strong&gt;</strong> húzni
        minden éjszaka, különben felrobban -
        <strong>&lt;strong&gt;és mind meghalunk&lt;/strong&gt;</strong>&lt;/em&gt;.&lt;/p&gt;</pre>

<a href="HTML_peldak.html#emstrong">Próbáld ki élőben</a>

<h3 id="dolt">Dőlt kiemelés</h3>

<p>Az általános vélekedés szerint a dőlt kiemelés nem a szöveg értelmét jelöli, ilyenformán az <code>i</code> elem használata nem ajánlott (hasonlóan a leírás következő szakaszában bemutatott megjelenítési elemekhez).</p>

<p>Van viszont néhány olyan helyzet, amikor a tartalom dőlt kiemelése vitathatóan bár, de helyes lehet. Vannak olyan esetek, amikor egy kifejezés dőlt kiemelése a legegyszerűbb módszer ahelyett, hogy egy egyébként máshol nem használt speciális elemet vezetnénk be rá. Ilyenek lehetnek például a hajók nevei, a tévésorozatok, könyvek vagy filmek címei, technológiai fogalmak és más rendszertani megnevezések.</p>

<p>Az érvelés szerint a dőlt kiemelés ebben a helyzetben azt jelenti, hogy a megjelölt szöveg különleges, és a környezet mutatja meg, hogy mennyire különleges a többi részhez viszonyítva. Valóban, a HTML 5 specifikáció vázlatában jelenleg ez áll:</p>

<blockquote><p>Az <code>i</code> elem olyan szövegrészt jelöl, amelyet más hangon  vagy hangszínnel mondunk, vagy egyéb módon eltér a normál kiejtéstől […] Az <code>i</code> elemet csak legvégső esetben használjuk, amikor más semmilyen más elem nem megfelelő.</p></blockquote>

<p>Mivel az <code>i</code> elem megjelenését is módosítani lehet CSS-ben, hogy ne legyen dőlt, így a „dőlt kiemelés” jelentése ebben a környezetben csak annyi, hogy „valami más”. Én ezt személy szerint nem tartom elfogadhatónak, de már éppen elég precedens van a használatára ebben a formában.</p>

<h2 id="megjelenites">Megjelenítési elemek — soha ne használd őket</h2>

<p>A HTML specifikáció tartalmaz néhány olyan elemet is, amelyet általában „megjelenítési” elemnek neveznek, mivel kizárólag arra vonatkoznak, hogy a megjelölt szövegrész hogyan jelenjen meg, és nem arra, hogy mit jelent.</p>

<p>A legtöbb ilyen elemet már érvénytelenként jelölték meg a specifikációban. Ez azt jelenti, hogy van egy más, újabb módszer is, amellyel ugyanazt az eredményt érhetjük el.</p>

<p>Most részletesebben bemutatjuk ezeket az elemeket, de ennek főleg történelmi okai vannak — a modern weblapokon soha ne használd őket. Ezeknek az elemeknek a hatását más módon is elérheted; erről később még fogunk beszélni a <ins>Szöveg stílusozása CSS-sel</ins> és a <a href="http://dev.opera.com/articles/view/21-kevesse-ismert/">Kevéssé ismert szemantikus elemek</a> részekben.</p>

        <dl>
        <dt><code>font face=&quot;…&quot; size=&quot;…&quot;</code></dt>
            <dd>A közrefogott szöveget a böngésző egy másik betűtípussal jeleníti meg — viszont a betűtípusokat inkább a CSS-ben add meg.</dd>
        <dt><code>b</code></dt>
            <dd>A megjelölt szöveg félkövér — ez az esetek többségében azt jelenti, hogy ki akarod emelni a szöveget, úgyhogy használd helyette az <code>em</code> vagy a <code>strong</code> elemeket, amelyekről már beszéltünk korábban.</dd>
        <dt><code>s</code> és <code>strike</code></dt>
            <dd>A megjelölt szöveget áthúzza egy vonallal — ha ez csak egy megjelenítési hatás, akkor inkább CSS-ben add meg. Ha viszont azt jelöli, hogy a szöveg törölve lett a dokumentumból, vagy már nem érvényes, akkor használhatod helyette a <code>del</code> elemet, amelyről még később itt is lesz szó.</dd>
        <dt><code>u</code></dt>
            <dd>A közrefogott szöveget aláhúzza — ez szinte mindig egy vizuális hatás, így inkább CSS-ben valósítsd meg.</dd>
        <dt><code>tt</code></dt>
            <dd>A jelölt szöveg „írógéppel” készült, vagy fix szélességű betűtípussal jelenik meg — ezt megoldhatod CSS-sel, vagy egy pontosabb szemantikus jelöléssel, mint például a fent bemutatott <code>pre</code> elemmel.</dd>
        <dt><code>big</code> és <code>small</code></dt>
            <dd>A megjelölt szöveg kisebb vagy nagyobb lesz — ezt inkább CSS-ben valósítsd meg.</dd>
        </dl>

<h2 id="osszefoglalo">Összefoglaló</h2>

<p>Ebben a leírásban azokról az elemekről beszéltünk, amelyeket a leggyakrabban használnak szöveges részek megjelölésére. <a href="http://dev.opera.com/articles/view/16-html-listak/">A következő leírásban</a> egy másik típusú tartalomról fogunk beszélni: a listákról.</p>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/14-megfelelo-doctype-valasztasa/" title="hivatkozás a sorozat előző leírására">Előző leírás — Megfelelő doctype választása a HTML dokumentumokhoz</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/16-html-listak/">Következő leírás — HTML listák</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-bevezeto-a-webes-szabvanyokba/#tartalom">Tartalomjegyzék</a></li>
</ul>

<h2 id="szerzo">A szerzőről</h2>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/287-15-szveges-rszek-megjellse-htmlben/norm.jpg" alt="Mark Norman Francis" />
<p class="comment">Fotó: <a href="http://flickr.com/photos/andybudd/98405468/">Andy Budd</a>.</p>
</div>

<p>Mark Norman Francis már azelőtt az internettel foglalkozott, hogy a web megszületett volna. Jelenleg a Yahoo!-nál a világ legnagyobb weboldalán dolgozik mint kezelőfelület-tervező, új módszereket és kódolási szabályokat dolgoz ki, valamint nemzetközi támogatást nyújt a minőségi webfejlesztéshez.
</p>

<p>A Yahoo! előtt a Formula One Management, a Purple Interactive és a City University vállalatoknál dolgozott különböző minőségben, többek között mint webfejlesztő, CGI programozó és rendszertervező. A <a href="http://marknormanfrancis.com/">http://marknormanfrancis.com/</a> oldalon blogol.</p>
