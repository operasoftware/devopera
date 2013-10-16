Title: Penyempurnaan Speed Dial Opera
----
Date: 2011-04-07 13:46:47
----
Lang: id
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2>Daftar isi</h2>

<ul>
<li><a href="#intro">Pengantar</a></li>
<li>
<a href="#uselogo">Penggunaan logo</a>
<ul>
<li><a href="#html5icons">Ikon di HTML5</a></li>
<li><a href="#setanicon">Penentuan ikon Panggil Cepat/Speed Dial</a></li>
<li><a href="#multipleicons">Penggunaan beberapa ikon</a></li>
</ul>
</li>
<li>
<a href="#content">Menyediakan konten di Panggil Cepat Anda </a>
<ul>
<li><a href="#viewmode">Menggunakan <code>view-mode:minimized</code></a></li>
<li><a href="#with-x-purpose">Menggunakan the X-Purpose header</a></li>
<li><a href="#preview-refresh">Muat ulang konten secara otomatis pada interval tertentu</a></li>
</ul>
</li>


<li><a href="#sdpriority">Prioritas Panggil Cepat</a></li>
<li><a href="#productsupport">Dukungan produk Opera</a></li>
</ul>

<h2 id="intro">Pengantar</h2>

<p>Pada versi 11.10, Opera untuk komputer desktop mengijinkan pembuat konten untuk mengontrol tampilan Panggil Cepat dari situs mereka. Secara default, Panggil Cepat atau yang terkenal dengan sebutan Speed Dial menggunakan tampilan dari website yang tampak pada layar. Tapi sekarang, pemilik situs dapat menentukan ikon atau membuat CSS/konten tertentu dari Speed Dial. </p>

<h2 id="uselogo">Penggunaan logo</h2>

<p>Sesi ini akan membahas cara mengganti logo atau ikon di Speed Dial Anda.</p>

<h3 id="html5icons">Ikon di HTML5</h3>

<p>Anda mungkin sudah familier dengan yang namanya ikon bookmark. Ini pertama kali diperkenalkan oleh Internet Explorer 5 di tahun 1999. Walaupun tidak termasuk dalam spesifikasi HTML4, vendor browser akhirnya setuju untuk <a href="http://www.w3.org/2005/10/howto-favicon">mengimplementasikan cara pintas ikon</a> dengan menambahkan dukungan <code>icon</code> sebagai value untuk atribut <code>rel</code> dari elemen <code>link</code>. Apple kemudian mengembangkannya pada perangkat sentuh melalui <a href="http://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html"><code style="word-wrap:none">apple-touch-icon</code></a>. Berdasarkan pada spesifikasi HTML5, <code>icon</code> sekarang telah <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#rel-icon">valid, dan menjadi value standar</a> untuk atribut <code>rel</code>.</p>

<h3 id="setanicon">Menentukan ikon Speed Dial</h3>

<p>Menentukan ikon Speed Dial sangat mirip dengan menentukan ikon cara pintas. Cukup tambahkan tag <code>&lt;link&gt;</code> pada bagian <code>head</code> dari dokumen Anda.</p>

<pre><code>&lt;head&gt;
&lt;title&gt;My Opera&lt;/title&gt;
&lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; 
href=&quot;http://path/to/logo.png&quot;&gt;
&lt;/head&gt;</code></pre>


<p>Ikon Speed Dial harus:</p>

<ul>
<li>Memiliki lebar paling tidak 114 pixels dengan tinggi 114 pixels. Ini adalah ukuran default minimum dari ikon dan ukuran ikon yang lebih kecil akan diabaikan.</li>

<li>Gambar PNG, JPEG atau GIF. Gambar SVG masih belum bisa didukung. Hanya bingkai pertama dari gambar animasi yang akan digunakan.</li>
</ul>

<p>Secara default, ukuran maksimal ikon yaitu lebar 256 pixel dan tinggi 160 pixel. Untuk ikon yang lebih besar dari ukuran default, ukurannya akan diubah sesuai (<a href="/articles/view/opera-speed-dial-enhancements/icon.html">demo</a>). Pengguna dapat mengubah pengaturan ukuran default minimum dan maksimum dari menu opera:config.</p>

<p>Disamping itu, Opera 11.10 memiliki dukungan peninggalan untuk <code>apple-touch-icon</code>, <code>apple-touch-icon-precomposed</code> dan <code>image_src</code>.</p>

<h3 id="multipleicons">Penggunaan beberapa ikon</h3>

<p>Anda juga dapat menentukan banyak ikon. Hal ini bagus jika Anda menginginkan pengguna untuk menerima satu ikon ketika mem-bookmark suatu halaman dan ikon lainnya ketika mereka menambahkannya ke Speed Dial.</p>

<pre><code>&lt;head&gt;
&lt;title&gt;My Opera&lt;/title&gt;
&lt;link rel=&quot;icon&quot; type=&quot;image/png&quot;
href=&quot;http://path/to/128x128image.png&quot;&gt;
&lt;!-- Ini untuk ikon speed dial --&gt;
&lt;link rel=&quot;icon&quot; type=&quot;image/png&quot;
href=&quot;http://path/to/200x200image.png&quot;&gt;
&lt;/head&gt;</code></pre>

<p>Jika Anda membuat lebih dari satu ikon, Speed Dial akan memilih ikon dengan ukuran yang lebih besar untuk (<a href="/articles/view/opera-speed-dial-enhancements/multiple-icons-diff-sizes.html">demo</a>). Jika kedua ikon memiliki ukuran yang sama, tautan ikon yang pertama yang didahulukan (<a href="/articles/view/opera-speed-dial-enhancements/multiple-icons-same-size.html">demo</a>).</p>

<h2 id="content">Menyediakan konten khusus di entri Speed Dial</h2>

<p>Ada beberapa cara baru untuk menyediakan konten khusus dan mengatur tampilan entri Speed Dial: <code>view-mode:minimized</code> pada CSS, header X-Purpose HTTP, dan muat ulang otomatis. Bagian ini akan mencakup semua pilihan tersebut.</p>

<h3 id="viewmode">Menggunakan <code>view-mode:minimized</code></h3>

<p><img src="/articles/view/opera-speed-dial-enhancements/view-mode.png" width="542" height="292" alt="The Speed Dial screen in Opera 11.10" /></p>
<p class="comment">Gambar 1: Layar Speed Dial di Opera 11.10</p>

<p>Fitur view-mode media mendefinisikan sebuah cara untuk menerapkan &#39;styles&#39; pada <a href="http://www.w3.org/TR/view-mode/"><code>view-mode</code></a>. Dengan menggunakan <code>view-mode: minimized</code>, Anda dapat menyediakan &#39;styles&#39; alternatif atau menampilkan konten yang sudah dibuat khusus untuk Speed Dial. Fitur view-mode sama dengan fitur media lainnya, seperti <code>device-width</code>. Untuk query media, styles bisa disimpan dalam blok <code>@media</code>.</p>

<pre><code>@media screen and (view-mode: minimized) {
body {
color: #fff;
background: #b20000;
}
}</code></pre>

<p>Atau Anda bisa mentautkan sebuah style sheet eksternal, dan menetapkan nilai dari atribut media menjadi <code>(view-mode: minimized)</code></p>

<pre><code>&lt;link rel=stylesheet type=&quot;text/css&quot; href=&quot;minimizedstyles.css&quot; media=&quot;(view-mode:minimized)&quot;&gt;</code></pre>

<p>Lihat <a href="/articles/view/opera-speed-dial-enhancements/view-mode.html">contoh hasilnya <code>view-mode: minimized</code></a>.</p>

<p>Harap diperhatikan bahwa <code>view-mode: minimized</code> memicu tampilan Speed Dial <strong>lebar 256 piksel dan tinggi 160 piksel</strong>.</p>

<h3 id="with-x-purpose">Menggunakan X-Purpose Header</h3>

<p>Dimungkinan juga untuk menyediakan URL yang berbeda untuk Speed Dial Anda. Ini dimungkinkan karena setiap request Speed Dial menyertakan header X-Purpose: preview. <code>X-Purpose: preview</code> header.</p>

<pre><code>GET / HTTP/1.1
Host: www.bbc.co.uk/news
X-Purpose: preview
User-agent: Opera/9.80 (Macintosh; Intel Mac OS X 10.6.6; U; en)
Presto/2.8.99 Version/11.10</code></pre>

<p>Dengan mengenali header tersebut, Anda bisa memilih untuk menyediakan URL lain, membatasi file apa saja yang dikirim ke Speed Dial, atau menampilkan konten yang berbeda. Perlu dicatat bahwa ini tidak akan mempengaruhi URL asli pada saat pengguna mengeklik entri Speed Dial.</p>

<p>Pada contoh di bawah ini , kita menggunakan mod_rewrite Apache untuk mengalihkan semua permintaan Speed Dial ke /preview.html (Anda butuh untuk lebih spesifik ketika mengimplementasikannya secara nyata).</p>

<pre><code>RewriteEngine On
RewriteCond %{HTTP:X-Purpose} ^preview$
RewriteRule ^(.*) /preview.html</code></pre>

<p>Atau mungkin Anda lebih memilih bahasa di sisi server untuk menyediakan konten secara kondisional untuk URL yang sama. Contoh di bawah menggunakan PHP.</p>

<pre><code>&lt;?php
if ($_SERVER[&#39;HTTP_X_PURPOSE&#39;] == &#39;preview&#39;) {
// Mengirimkan konten Speed Dial 
} else {
// Mengirimkan konten regular
}
?&gt;</code></pre>

<h3 id="preview-refresh">Muat ulang otomatis pada interval tertentu</h3>

<p>Agar konten Speed Dial lebih dinamis, Anda dapat mendefinisikan perlakuan muat ulang otomatis yang akan digunakan bilsa user menambahkan situs ke Speed Dial. Anda bisa melakukan ini dengan dua cara:</p>
<ol><li><p>Menggunakan <code>meta</code> tag:</p>
<pre>&lt;meta http-equiv=&quot;preview-refresh&quot; content=&quot;3600&quot;&gt;</pre></li>
<li><p>Mengatur <code>Preview-Refresh</code> sebagai response header::</p>
<pre>Preview-Refresh:3600</pre>
</li></ol>
<p>Patut diingat bahwa nilainya dalam satuan detik. 3600 akan memuat ulang entri Speed Dial tiap jam.</p>

<h2 id="sdpriority">Prioritas Speed Dial</h2>

<p>peed Dial memprioriaskan CSS <code>view-mode: minimized</code>. Bila tidak ada CSS, browser akan mencari ikon. Bila ikon tidak didefinisikan atau bila file hilang atau rusak, Speed Dial akan menggunakan screenshot situs web tersebut secara default.</p>

<h2 id="productsupport">Dukungan produk Opera</h2>
<p>Untuk sekarang, perubahan hanya tersedia bagi pengguna Opera Desktop.</p>

<h2>Bacaan Lebih lanjut</h2>

<ul>
<li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#rel-icon">Links
from the WHATWG HTML5 specification</a></li>

<li><a href="http://www.w3.org/TR/view-mode/">View mode media feature specification</a></li>
</ul>


