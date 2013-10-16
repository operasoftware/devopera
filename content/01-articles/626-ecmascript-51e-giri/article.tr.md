Title: ECMAScript 5.1'e Giriş
----
Date: 2012-01-31 17:43:58
----
Lang: tr
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2>İçindekiler Listesi:</h2>

<ol>
    <li><a href="#introduction">Giriş</a></li>
    <li><a href="#browser-support">Tarayıcı Desteği</a></li>
    <li><a href="#strict-mode">ES5&#39;ın Katı Modu</a></li>
    <li><a href="#json">JSON</a>
    <li><a href="#object-additions">Nesnelere Eklemeler</a></li>
    <li><a href="#array-extras">Dizilere İlaveler</a></li>
    <li><a href="#function-bind">Function.prototype.bind</a></li>
    <li><a href="#further-reading">Ek Referenslar</a></li>
</li></ol>


<h2 id="introduction">Giriş</h2>

<p>ECMAScript 5.1 (yada sadece ES5) ECMAScript standardının &#x2014; önergede JavaScript temel alınmıştır &#x2014; en son gözden geçirimidir. HTML5 önergesinin sürecine benzer şekilde, ES5 varolan JavaScript kullanımlarını, dile ve ECMAScript nesnelerine olan eklemeleri standart bir şekle sokar. ES5  &quot;strict mode&quot; olan bilinen bu dilin bir strict türevini de tanıtır.</p>
  
<p>Bu makalede dile ait en yararlı değişiklikleri ve eklemeleri tanıtacağız. Tam liste için, <a href="http://www.ecmascript.org/">http://www.ecmascript.org/</a> adresinden <a href="http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf">resmi ECMAScript dil önergesi</a> (PDF indirmesi, 3MB) adresinden erişilen belgenin Ek D ve E bölümlerine bakın; bu içeriği HTML biçiminde <a href="http://es5.github.com/">Michael[tm] Smith&#39;in resmi olmayan açıklamalı HTML sürümü</a>nden de indirebilirsiniz.</p>

<h2 id="browser-support">Tarayıcı Desteği</h2>

<p>Opera 11.60&#39;ın sürülmesiyle beraber, beş büyük tarayıcı ES5 desteklemektedir, <a href="http://kristopolous.blogspot.com/2011/11/winners-are-opera-ie-firefox-chrome.html">uygulamaya dayalı hatalar</a> için kaydedin. Aksine bir şey ifade edilmezse, bu makalede bahsedilen her şey aşağıdaki tarayıcı sürümleri(ve daha yüksek sürümleri) ile beraber kullanılabilmektedir:</p>

<ul>
  <li>Opera 11.60</li>
  <li>Internet Explorer 9*</li>
  <li>Firefox 4</li>
  <li>Safari 5.1**</li>
  <li>Chrome 13</li>
</ul>

<p class="note">* <a href="http://msdn.microsoft.com/en-us/library/hh673540(v=VS.85).aspx">IE9 strict mode desteğini sağlamamaktadır</a> &#x2014; bu IE10 ile beraber eklendi.</p>
<p class="note">** <a href="https://bugs.webkit.org/show_bug.cgi?id=26382"><code>Function.prototype.bind</code> desteği son Webkit sürümünde bulunmasına</a> rağmen Safari 5.1 halen <code>Function.prototype.bind</code> desteğine sahip değil.</p>

<p>Daha eski tarayıcılara bu destek için, Juriy Zaytsev&#39;in mükemmel <a href="http://kangax.github.com/es5-compat-table/">ECMAScript 5 uyumluluğu tablosu</a>na bakın.
  
<h2 id="strict-mode">ES5 için Strict Mode</h2>

<p>Katı mod, geliştirici için dilin daha tutucu bir çeşidini kullanmasını sağlar &#x2014; geliştiriciler için ek güvenilirlik ve kullanıcılar için ek güvenlik sağlar. Katı mod, Javascript dosyasının ya da fonksiyonunun başına &quot;use strict&quot; yönergesi yerleştirilerek etkinleştirilebilir.  &quot;use strict&quot; yönergesi sadece bir katar olduğu için eski tarayıcılar tarafından güvenli bir şekilde yok sayılacaktır.</p>

<pre><code>&quot;use strict&quot;;</code></pre>
 
<pre><code>function strict(){
  &quot;use strict&quot;;
  //...
}

function sloppy(){
  eval(&quot;window.foo = &#39;bar&#39;&quot;);
}</code></pre>

<p>Katı mod kullanırken pek çok şey sürpriz bir şekilde ya da sorunlu bir davranış olarak çalışma anında hata üretecektir. Örneğin:</p>

<ul>
  <li>Tanımlanmamış bir değişkene değer atamak, global bir değişken oluşturmak yerine <code>ReferenceError</code>hatası fırlatır.</li>
  <li>Aynı özelliği bir nesneye birden fazla kez atamak <code>SyntaxError</code>(söz dizimi hatası) fırlatır.</li>
  <li><code>with</code> ifadesinin kullanımı <code>SyntaxError</code>(söz dizimi hatası) fırlatır.</li>
</ul>

<p><a href="http://msdn.microsoft.com/en-us/library/br230269(v=vs.94).aspx">MDSN&#39;deki katı mod makalesi</a> tüm bu farkları özetleyen yararlı bir tablo içerir.</p>

<h2 id="json">JSON</h2>

<p>ES5 bir nesneyi JSON biçimine dönüştürme (<code>JSON.stringify</code>) ve bu biçimden eski haline geri dönüştürme (<code>JSON.parse</code>) için genel bir <code>JSON</code> nesnesi tanımlar.</p>

<p class="not">Eski tarayıcılar için, Douglas Crockford&#39;un <a href="https://github.com/douglascrockford/JSON-js/blob/master/json2.js">json2.js</a> dosyasını kullanmayı göz önünde bulundurun. Bu dosya, tarayıcının bu özelliği doğal olarak destekleyip desteklemediğini test ettikten sonra eski tarayıcılarda aynı işlevlerin kullanılabilmesini sağlar.</p>
  
<h3><code>JSON.parse(yazi [, fonksiyon])</code></h3>

<p><code>JSON.parse</code> JSON olarak biçimlendirilmiş yazıyı alır ve bir ECMAScript değeri olarak geri döndürür. İsteğe bağlı kullanılabilecek parametre ise iki ayrı parametreye sahip, <code>anahtar</code> ve <code>değer</code>, bir fonksiyondur. Bu fonksiyon sonuçlar üzerine işlem yapar &#x2014; filtreleme yapmaya veya geri dönecek değeri değiştirmeye olanak sağlar.</p>

<pre><code>&gt;&gt; var sonuc = JSON.parse(&#39;{&quot;a&quot;: 1, &quot;b&quot;: &quot;2&quot;}&#39;);
Object

&gt;&gt; sonuc.b
&quot;2&quot;</code></pre>

<p>Eğer ayrıştırma işlemine kadar değerin tam sayı olduğundan emin olmak istiyorsanız, isteğe bağlı fonksiyonu aşağıdaki gibi kullanabilirsiniz.</p>

<pre><code>var sonuc = JSON.parse(&#39;{&quot;a&quot;: 1, &quot;b&quot;: &quot;2&quot;}&#39;, function(anahtar, deger){
  if (typeof deger == &#39;string&#39;){
    return parseInt(deger);
  } else {
    return deger; 
  }
})

&gt;&gt; sonuc.b
2</code></pre>


<h3><code>JSON.stringify(deger [, yerdegistirici [, bosluk]])</code></h3>

<p><code>JSON.stringify</code> geliştiricilerin bir ECMAScript değerini alıp bunu JSON biçimindeki karakter dizisine dönüştürmesini sağlar. Basitçe, <code>JSON.stringify</code> bir değer alır ve geriye bir karakter dizisi döndürür.</p>

<pre><code>&gt;&gt;&gt; var mike = JSON.stringify({mike: &quot;taylor&quot;})
undefined

&gt;&gt; mike
&#39;{&quot;mike&quot;: &quot;taylor&quot;}&#39;

&gt;&gt; typeof mike
&quot;string&quot;</code></pre>

<p>Karakterleştirilmiş değeri değiştirmeye ihtiyacımız varsa yada seçilen bazı değerleri filtrelemek gerekiyorsa, bunu yer değiştirici fonksiyon aracılığıyla yapabiliriz. Örneğin nesnemizdeki 13 sayısını karakterleştirme işlemi sırasında filtrelemek istiyorsak,</p>

<pre><code>var sayilar = {
  &quot;birinci&quot;: 7,
  &quot;ikinci&quot;: 14,
  &quot;ucuncu&quot;: 13
}

var sansliNumaralar = JSON.stringify(sayilar, function(anahtar, deger){
  if (deger == 13) {
    return undefined;
  } else {
    return deger;
  }
});

&gt;&gt; sansliNumaralar
&#39;{&quot;birinci&quot;: 7, &quot;ikinci&quot;: 14}&#39;</code></pre>

<p>Eğer yer değiştirici fonksiyon <code>undefined</code> değeri geri döndürürse , anahtar/değer çifti son JSON&#39;da yer almayacaktır. Bir alana neyin geri döndüğünü öğrenirken okunabilirliği arttırmak için bir boşluk parametresi de kullanabiliriz. Bu parametrenin alabileceği değerler, JSON katarı ya da bir katarın her bir girinti seviyesindeki boşluğun sayısını gösterecek bir numara olabilir.  Bir sayı 10&#39;un üzerinde ise yada bir karakter dizisi 10 karakterden fazla karaktere sahipse, 10&#39;a yada ilk 10 karaktere düşürülecektir.</p>

<pre><code>var sansliNumaralar = JSON.stringify(sayilar, function(anahtar, deger) {
  if (deger == 13) {
    return undefined;
  } else {
    return deger;
  }
}, 2);

&gt;&gt; sansliNumaralar
&#39;{
  &quot;birinci&quot;:7,
  &quot;ikinci&quot;:14
}&#39;</code></pre>

<h2>Nesne Eklemeleri</h2>

<p><code>Object</code> constructor aşağıdaki yöntemler eklendi:</p>

<ul>
  <li><code>Object.getPrototypeOf</code></li>
  <li><code>Object.getOwnPropertyDescriptor</code></li>
  <li><code>Object.getOwnPropertyNames</code></li>
  <li><code>Object.create</code></li>
  <li><code>Object.defineProperty</code></li>
  <li><code>Object.defineProperties</code></li>
  <li><code>Object.seal</code></li>
  <li><code>Object.freeze</code></li>
  <li><code>Object.preventExtensions</code></li>
  <li><code>Object.isSealed</code></li>
  <li><code>Object.isFrozen</code></li>
  <li><code>Object.isExtensible</code></li>
  <li><code>Object.keys</code></li>
</ul>

<p>Bu eklemelerin yararlarından biri nesnenin özellikleri üzerindeki denetimi arttırmaktır. Örneğin neyin değiştirilebileceğini, silinebileceğini, listelenebileceğini belirleyebilmemizi sağlar. Bu, bir nesnenin <em>özellik tanımlamalarına</em> program niteliğinde erişme yoluyla yapılır. Örneğin:</p>
  
<pre><code>var kedi = {};

Object.defineProperty(kedi, &quot;ad&quot;, {
  value: &quot;Maru&quot;,
  writable: false,
  enumerable: true,
  configurable: false
});

Object.defineProperty(kedi, &quot;beceri&quot;, {
  value: &quot;kutuları keşfetme&quot;,
  writable: true,
  enumerable: true,
  configurable: true
});</code></pre>

<p><code>kedi</code> nesnemiz için, onun <code>ad</code>ı değiştirilemez ama <code>for-in</code> döngüsünde değeri görüntülenebilir. Diğerleri arasında, Maru kutuları keşfetmede iyi, ama bu gelecekte değişebilir çünkü  <code>beceri</code> özelliği <code>writable</code>(yazılabilir) ve <code>configurable</code>(ayarlanabilir) olarak kaldı.</p>

<p>İleride, bir makalede nesne eklemelerinin tümünü ayrıntılarıyla keşfedeceğiz.</p>

<h2>Dizilere İlaveler</h2>

<p>Aşağıdaki yöntemler dizi <code>prototype</code> nesnesine eklenmiştir:</p>

<ul>
  <li><code>Array.prototype.indexOf</code></li>
  <li><code>Array.prototype.lastIndexOf</code></li>
  <li><code>Array.prototype.every</code></li>
  <li><code>Array.prototype.some</code></li>
  <li><code>Array.prototype.forEach</code></li>
  <li><code>Array.prototype.map</code></li>
  <li><code>Array.prototype.filter</code></li>
  <li><code>Array.prototype.reduce</code></li>
  <li><code>Array.prototype.reduceRight</code></li>
</ul>

<p>Dmitry Soshnikov <a href="http://dev.opera.com/articles/view/javascript-array-extras-in-detail/">ES5 dizi &quot;ilaveleri&quot;</a> adresinde bulunan hakkında detaylı bir makale yazdı.</p>

<p>Dmitry&#39;nin makalesinde yer almayan tek şey <code>Array.isArray</code>. Görebileceğiniz gibi bu, <code>prototype</code> nesnesinin değil doğrudan <code>Array</code> kurucusunun üzerindedir.

<code>Array.isArray</code> beklemediğiniz kadar tatlıdır &#x2014; parametrenin [[Class]] dahili özelliği &quot;Array&quot; olup olmamasına göre <code>true</code> ya da <code>false</code> döndüren bir yöntemdir.

<pre><code>Array.isArray(&quot;NO U&quot;)
&gt;&gt; false

Array.isArray([&quot;NO&quot;, &quot;U&quot;])
&gt;&gt; true</code></pre>

<p>In ES3&#39;te değerin bir dizi olup olmadığını belirlemenin tek güvenilir yolu <a href="http://www.songhaysystem.com/kb/number/2076072056/subject/htmlscrp">&quot;the Miller Device&quot;</a> kullanımıydı. Aşağıdaki örnekte dahili olan <code>[[Class]]</code> özelliğini dizininkiyle karşılaştırabilirsiniz.</p>
  
<pre><code>Object.prototype.toString.apply(value) === &#39;[object Array]&#39;</code></pre>

<h2 id="function-bind"><code>Function.prototype.bind(thisArg [, arg1 [, arg2, …]])</code></h2>

<p><code>Function.prototype.bind</code> <em>this</em> değeri<code>thisArg</code> parametresine bağlanan yeni bir fonksiyon nesnesi geri döndürür. Bu, temel olarak, diğer nesnenin bir faaliyet alanındayken bir fonksiyon çalıştırmanıza olarak sağlar.</p>

<pre><code>function locate(){
  console.log(this.location);
}

function Maru(location){
  this.location = location;
}

var kitty = new Maru(&quot;cardboard box&quot;);

var locateMaru = locate.bind(kitty);

locateMaru();</code></pre>

<p>Bu örnekte <code>location</code> fonksiyonunu Maru nesnesinin içeriğindeyken çağırıyoruz. <code>locate</code> global nesnenin bir özelliği olduğu için, onun <code>this</code> değeri global nesnedir(<code>window</code>). Bu durumda, bir kediye bakıyoruz, <code>Location</code> nesnesine değil. Öyleyse <code>this</code> değeri her zaman <code>kitty</code> olan <code>locateMaru</code>adında yeni bir yöntem oluşturabiliriz.</p>

<h2 id="further-reading">Ek Referanslar</h2>

<ul>
  <li>John Resig tarafından <a href="http://ejohn.org/blog/ecmascript-5-objects-and-properties/">ECMAScript 5 Nesnesi ve Özellikleri</a></li>
  <li>Yehuda Katz tarafından <a href="http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/">JavaScript Fonksiyon Yürüymesini ve &quot;this&quot;i Kavrama</a></li>
  <li>Angus Croll tarafından <a href="http://javascriptweblog.wordpress.com/2011/05/03/javascript-strict-mode/">JavaScript Katı Mod</a></li>
  <li>Detaylarda ECMA-262-5: Dmitry Soshnikov tarafından <a href="http://dmitrysoshnikov.com/ecmascript/es5-chapter-0-introduction/">Giriş</a></li>
  <li>Juriy Zaytsev tarafından <a href="http://kangax.github.com/es5-compat-table/">ECMAScript 5 uyumluluk tablosu</a></li>
</ul>



a href=Aynı özelliği bir nesneye birden fazla kez atamak </p></p>
