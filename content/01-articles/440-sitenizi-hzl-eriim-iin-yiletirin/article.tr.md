Title: Sitenizi Hızlı Erişim için İyileştirin!
----
Date: 2011-04-07 13:47:00
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

<h2>İçindekiler Listesi</h2>

<ul>
	<li><a href="#intro">Giriş</a></li>
	<li>
		<a href="#uselogo">Logo kullanımak</a>
		<ul>
		  <li><a href="#html5icons">HTML5&#39;de ikonlar</a></li>
			<li><a href="#setanicon">Hızlı Erişim ikonu tanımlamak</a></li>
			<li><a href="#multipleicons">Birden çok ikon kulanmak</a></li>
	  </ul>
  </li>
	<li>
		<a href="#content">Hızlı Erişim girdiniz için özel içerik sağlamak</a>
		<ul>
		  <li><a href="#viewmode"><code>view-mode:minimized</code> kullanmak</a></li>
			<li><a href="#with-x-purpose">X-Purpose header kullanmak</a></li>
			<li><a href="#preview-refresh">Düzenli aralıklarla içeriği yeniletmek</a></li>
	  </ul>
  </li>
	
	
	<li><a href="#sdpriority">Hızlı Erişim önceliği</a></li>
	<li><a href="#productsupport">Opera ürün desteği</a></li>
</ul>

<h2 id="intro">Giriş</h2>
	
	<p>11.10 ile birlikte, Opera&#39;nın masaüstü sürümü sitelerin Hızlı Erişim&#39;de nasıl görüntüleneceğini belirlemeye izin veriyor. Varsayılan olarak, Hızlı Erişim web sitenin ekran görüntüsünü kullanıyor. Ama artık site yöneticileri, özel bir ikon, Hızlı Erişim&#39;e özel CSS ya da içerik belirleyebilirler.</p>
<h2 id="uselogo">Logo kullanmak</h2>

<p>Bu bölümde Hızlı Erişim&#39;e özel bir logo ya da ikon kullanımına bakacağız.</p>
<h3 id="html5icons">HTML5&#39;de ikonlar</h3>
	
	<p>Muhtemelen yer imleri ikonlarını tanıyorsunuzdur. İlk olarak 1999&#39;da Internet Explorer 5&#39;de tanıtılmıştı.</p>
	<p>HTML4 özelliklerine dahil edilmemesine rağmen, tarayıcı üreticileri sonunda <code>icon</code> değeri için <code>rel</code> tanımına <code>link</code> elementinde <a href="http://www.w3.org/2005/10/howto-favicon">kısayol ikonu desteğini</a> ekledi. Apple, sonraları dokunmatik cihazlarında kullanmak için bunu <a href="http://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html"><code style="word-wrap:none">apple-touch-icon</code></a> olarak genişletti. HTML5 özelliklerine göre, <code>icon</code> artık for the <code>rel</code> tanımı için <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#rel-icon">geçerli ve standartlaşmış değer</a> oldu.	</p>
	<h3 id="setanicon">Hızlı Erişim ikonu tanımlarken</h3>
	
	<p>Hızlı Erişim ikonu tanımlamak, kısayol ikonu tanımlamaya çok benzerdir. Sadece sayfanızın <code>head</code> kısmına bir <code>&lt;link&gt;</code> etiketi eklemeniz gerekiyor.</p>

<pre><code>&lt;head&gt;
    &lt;title&gt;Opera Türkiye&lt;/title&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://logonuzun/konumu/neredeyse.png&quot;&gt;
&lt;/head&gt;</code></pre>		
		
	<p>Hızlı Erişim ikonları:</p>
	
	<ul>
		<li>En az 114 piksel genişlik, 114 piksel yükseliğe sahip olmalı. Bu varsayılan ikon boyutudur ve bundan küçük ikonlar yoksayılacaktır.</li>
		
		<li>Formatları PNG, JPEG ya da GIF olmalıdır. SVG resimleri şimdilik desteklenmiyor. Hareketli görsellerin sadece ilk karesi kullanılacaktır.</li>
	</ul>
	
	<p>Varsayılan olarak maksimum ikon boyutu 256 piksel genişlik, 160 piksel yüksekliktir. Bundan büyük ikonlar sığdırılmak için yeniden boyutlandırılacaktır (<a href="/articles/view/opera-speed-dial-enhancements/icon.html">demo</a>). Kullanıcılar varsayılan genişlik ve yüksekliği opera:config&#39;den değiştirebilirler.</p>
	
	<p>Öbür yandan, Opera 11.10  <code>apple-touch-icon</code>, <code>apple-touch-icon-precomposed</code> ve <code>image_src</code> parametreleri için destek verecek.</p>

	<h3 id="multipleicons">Birden çok ikon kullanmak</h3>
	
	<p>Ayrıca birden çok ikon tanımlayabilirsiniz. Bu özellik ile kullanıcılarınız sayfayı yer imlerine eklediğinde başka bir ikon alacaklar, Hızlı Erişim&#39;e eklediklerinde başka bir ikon alacaklar.</p>
	
<pre><code>&lt;head&gt;
    &lt;title&gt;My Opera&lt;/title&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/128x128image.png&quot;&gt;
    &lt;!-- This will be the speed dial icon --&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/200x200image.png&quot;&gt;
&lt;/head&gt;</code></pre>	
	<p>Eğer birden çok ikon tanımlarsanız, Hızlı Erişim için büyük olanı seçecektir (<a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/multiple-icons-diff-sizes.html">demo</a>). Eğer iki ikon da aynı boyuttaysa, öncelik ilk bağlantıya verilecektir (<a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/multiple-icons-same-size.html">demo</a>).</p>
	
<h2 id="content">Hızlı Erişim girdiniz için özel içerik hazırlamak</h2> 

<p>Hızlı Erişim girdisine özel içerik ve biçimlendirme sağlamak için bir kaç yol var. Bunlar: CSS&#39;de <code>view-mode:minimized</code>, X-Purpose HTTP header ve otomatik yenileme. Bu bölüm hepsini açıklıyor.</p>
	
<h3 id="viewmode"><code>view-mode:minimized</code> kullanmak</h3>

<p><img src="/articles/view/opera-speed-dial-enhancements/view-mode.png" width="542" height="292" alt="The Speed Dial screen in Opera 11.10" /></p>
<p class="comment">Şekil 1: Opera 11.10 &#39;da Hızlı Erişim ekranı</p>

<p><a href="http://www.w3.org/TR/view-mode/"><code>view-mode</code></a> ortam özelliği için görüntülenme moduna göre özel bir stil tanımlar.  <code>view-mode: minimized</code> kullanarak Hızlı Erişime alternatif stillendirme ya da içerik sağlayabilirsiniz.  <code>view-mode</code> özelliği diğer ortam özellikleri gibi çalışır. <code>device-width</code> gibi. Her ortam sorgusu gibi stillendirme, bir <code>@media</code> bloğu içinde olmalıdır.</p>
		
<pre><code>@media screen and (view-mode: minimized) {
    body {
        color: #fff;
        background: #b20000;
    }
}</code></pre>	
<p>Ya da harici bir stil dosyasını bağlantı olarak verip,  <code>(view-mode: minimized)</code>ortam değişkenlerini tanımlayın.</p>

<pre><code>&lt;link rel=stylesheet type=&quot;text/css&quot; href=&quot;minimizedstyles.css&quot; media=&quot;(view-mode:minimized)&quot;&gt;</code></pre>
<p><a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/view-mode.html">Çalışan <code>view-mode: minimized</code> örneği</a> görün.</p>

<p><code>view-mode: minimized</code>&#39;de Hızlı Erişim&#39;in  <strong>256 piksel genişlik, 160 yüksekliğe</strong> bağlı olduğunu unutmayın.</p>

<h3 id="with-x-purpose">X-Purpose Header kullanmak</h3>

<p>Hızlı Erişim girdinizi farklı URL&#39;de sunmak da mümkün. Bunun nedeni Hızlı Erişim isteklerinin  <code>X-Purpose: preview</code> içermesidir.</p>

<pre><code>GET / HTTP/1.1
Host: www.bbc.co.uk/news
X-Purpose: preview
User-agent: Opera/9.80 (Macintosh; Intel Mac OS X 10.6.6; U; en) Presto/2.8.99 Version/11.10</code></pre>
<p>Bu headerı tespit ederek başka hangi URL&#39;nin sunulacağı, Hızlı Erişim&#39;e gönderilen dosyaların sınırını ya da farklı bir içeriği göstermekte kullanabilirsiniz. Bunun kullancının Hızlı Erişim girdisinde tıkladığı adresi değiştirmeyeceğini unutmayınız.</p>
<p>Aşağıdaki örnekte, tüm Hızlı Erişim isteklerini <code>/preview.html</code> adresine yönlendirmek için Apache&#39;nin mod_rewrite&#39;ını kullanıyoruz. (Gerçek dünyada bundan daha özel şeyler yapabilirsiniz)</p>
<pre><code>RewriteEngine On
RewriteCond %{HTTP:X-Purpose} ^preview$
RewriteRule ^(.*) /preview.html</code></pre>
<p>Ya da aynı adreste farklı içerikler sunmayı sağlamak için sunucu taraflı bir dil kullanmayı tercih edebilirsiniz. Aşağıdaki örnek PHP kullanıyor.</p>
<pre><code>&lt;?php
if ($_SERVER[&#39;HTTP_X_PURPOSE&#39;] == &#39;preview&#39;) {
    // Hızlı Erişim içeriğini gönder
} else {
    // Düzenli olarak içerik gönder
}
?&gt;</code></pre>
<h3 id="preview-refresh">Düzenli aralıklarla içeriği yeniletmek</h3>

<p>Hızlı Erişim içeriğinizi daha dinamik yapmak için kulanıcı, siteyi Hızlı Erişim bölmesine yerleştirdiğinde otomatik olarak yenilenmesini sağlayan bir davranış oluşturabilirsiniz. Bunu 2 adımda yapabilirsiniz.</p>
<ol><li>
<p><code>meta</code> etiketi kullanmak:</p>
<pre>&lt;meta http-equiv=&quot;preview-refresh&quot; content=&quot;3600&quot;&gt;</pre></li>
<li><code>Preview-Refresh</code> tepki için başlık ayarlamak:
  <pre>Preview-Refresh:3600</pre></li></ol>
<p>Not: Bu değer saniye cinsinden tanımlıdır. Yukarıdaki parametre, Hızlı Erişim&#39;i her saat yenilenecek.</p>


<h2 id="sdpriority">Hızlı Erişim önceliği</h2>

<p>Hızlı erişim ilk olarak önceliği  <code>view-mode: minimized</code> CSS parametresine verir. Eğer bu stil kullanılabilir değilse, tarayıcı ikon için bakacak. Eğer tanımlı ikon da yoksa, ya da ikon dosyası kayıp-hasarlı ise, Hızlı Erişim web sitesinin bir ekran görüntüsünü kullanacaktır.</p>


<h2 id="productsupport">Opera ürün desteği</h2>
<p>Şimdilik bu geliştrimeler sadece Opera Masaüstü kullanıcıları için kullanılabilir.</p>

<h2>Diğer belgeler</h2>

<ul>
	<li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#rel-icon">Links from the WHATWG HTML5 specification</a> (İngilizce)</li>
	
	<li><a href="http://www.w3.org/TR/view-mode/">View mode media feature specification</a> (İngilizce)</li>
</ul>

