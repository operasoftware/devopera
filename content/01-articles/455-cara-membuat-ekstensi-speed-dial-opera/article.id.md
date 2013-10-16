Title: Cara membuat ekstensi Speed Dial Opera
----
Date: 2011-05-30 17:17:14
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

<h2>Pengantar</h2>

<p>Di tahun 2007 kami <a href="http://www.opera.com/docs/changelogs/windows/920/">memperkenalkan</a> fitur Panggilan Cepat atau yang lebih dikenal dengan Speed Dial kepada dunia. Konsep ini kemudian popular dan banyak ditemukan implementasi serupa di browser-browser lain. Tetapi selain berbangga hati, orang tua macam apa yang tidak membantu anak-anaknya untuk tumbuh dan mengembangkan kemampuan baru? Untuk Opera 11.10, kami meningkatkan display visual dan <abbr title="user interaction">UX</abbr> dari Panggil Cepat dan menambahkan <a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/">penghubung bagi para developer untuk mengontrol tampilan situs mereka</a> ketika tampil di kotak Speed Dial. Di Opera 11.50, kami melangkah lebih jauh dengan ekstensi Panggilan Cepat.

<p> Selain dapat menambahkan browser Anda dengan ratusan <a href="https://addons.opera.com/addons/extensions/">ekstensi dari Opera</a>, Anda juga dapat merubah  
dan mengembangkan Panggil Cepat untuk dapat membuatnya semakin berguna. Tidak hanya terbatas pada halaman web atau ikon tampilan halaman, Panggil Cepat saat ini dapat mengubah konten ekstensi, dan artikel ini akan menunjukkan caranya.</p>

<p class="note">Note: Untuk melihat contoh yang sedang berjalan, Anda perlu mengunduh <a href="http://www.opera.com/browser/next/">Opera 11.50</a>, ditambah contoh ekstensi Speed Dial : <a href="http://dev.opera.com/articles/view/4972/clock_SD_extension.oex">download Speed Dial jam kami</a>.

<h2>Konsep dasar</h2>

</p><p>Untuk dapat menjaga kemampuan dari pengembangan ekstensi Opera reguler, ekstensi Panggil Cepat menggunakan format dan struktur yang sama namun ada beberapa penambahan lainnya. Dengan lain kata, adanya sedikit penambahan pada file <code>config.xml</code> dapat merubah ekstensi Opera tersebut menjadi ekstensi Speed Dial:</p>
 <ul>
    <li>Sebuah elemen <code>&lt;feature&gt;</code>dengan atribut <code>name</code> dari value <code>opera:speeddial</code>, akan menjadikan ekstensi tersebut menjadi sebuah ekstensi Speed Dial.</li>
    <li>Sebuah atribut <code>viewmodes</code> yang berisi tag <code>&lt;widget&gt;</code> dengan value <code>minimized</code>: akan menampilkan halaman background page pada kotak Speed Dial.</li>
</ul>

<p>Harap berhati-hati, biar bagaimanapun ekstensi tersebut tidak dapat digunakan di fitur Panggil Cepat dan toolbar pada browser. Dengan kata lain, ekstensi  
yang telah tersedia di toolbar tidak bisa dijadikan ekstensi di Panggil Cepat pada implementasi saat ini.</p>

<h2>Menentukan ekstensi Panggil Cepat dengan <code>config.xml</code></h2>

<p>Mari jadikan metodologi tersebut dengan mempraktekkannya dan mencobanya melalui contoh ekstensi. Untuk melihat kode snippets di konteks, <a href="http://dev.opera.com/articles/view/4972/clock_SD_extension.oex">unduh ekstensi Speed Dial jam kami</a> dan lihat file sumber di dalamnya. Tabel 1 menunjukkan bagaimana ekstensi kami terlihat setelah selesai.</p> 

<p><img src="http://dev.opera.com/articles/view/4972/clock_extension_in_speed-dial.jpg" width="400" height="242" alt="Clock extension installed in the Opera browser&#39;s Speed Dial." /></p>

<p class="comment">Tabel 1 : ekstensi jam yang terunduh di Panggilan Cepat browser Opera.</p>

<p>Kotak Panggilan Cepat yang biasa menunjukkan tampilan layar suatu halaman di luar Web, pada ekstensi Panggilan Cepat menunjukkan halaman permulaan (atau  
latar belakang) dari ekstensi – ini adalah <code>index.html</code>. Untuk dapat menggunakannya, tambahkan atribut <code>viewmodes</code> ke tag <code>&lt;widget&gt;</code> pada <code>config.xml</code>, dengan nilai <code>minimized</code>:</p>  

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/SimpleClockSD&quot; viewmodes=&quot;minimized&quot;&gt;</code></pre>

<p>Ini akan memberitahukan browser untuk menunjukkan halaman belakang ekstensi dalam format yang diperkecil - ukuran untuk Panggilan Cepat perorangan dalam tingkatan 100% zoom adalah 256 pixel dan tingi 160 pixel. Sebagai tambahan, kami juga menambahkan elemen untuk <code>feature</code> Panggilan Cepat Opera dengan atribut <code>required</code> dan elemen <code>param</code>:</p>  

<pre><code>&lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
  &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
&lt;/feature&gt;</code></pre>

<p>Atribut <code>required</code> dari elemen <code>feature</code> mengindikasi apakah Panggilan Cepat dibutuhkan untuk menjalankan ekstensi ini. Contohnya, mungkin ada browser lain atau agen pengguna yang compatible dengan ekstensi Opera, tetapi tidak mempunyai Speed Dial. Jika ekstensi Anda masih tetap  
berfungsi pada kasus ini, gunakan <code>false</code>; jika tidak berfungsi tanpa Panggilan Cepat, pilih <code>true</code>.</p>

<p>Elemen <code>param</code> dibutuhkan, dan menentukan halaman mana yang harus dibuka ketika ikon Panggilan Cepat diklik. </p>

<p>Berikut file <code>config.xml</code> yang lengkap untuk ekstensi ini :</p>  

  <pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;

&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;  
id=&quot;http://example.com/SimpleClockSD&quot; defaultlocale=&quot;en&quot;  
viewmodes=&quot;minimized&quot;&gt;

  &lt;name short=&quot;Simple Clock&quot;&gt;Clock Speed Dial Extension&lt;/name&gt;

  &lt;description&gt;This is an example Speed Dial extension showing a  
simple clock.&lt;/description&gt;

  &lt;author href=&quot;http://people.opera.com/danield/&quot;&gt;Daniel  
Davis&lt;/author&gt;

  &lt;icon src=&quot;images/icon_64.png&quot;/&gt; &lt;!-- Icon source: <a href="http://www.openclipart.org/detail/17552" target="_blank">http://www.openclipart.org/detail/17552</a> --&gt;

  &lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;

    &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;

  &lt;/feature&gt;&gt;

&lt;/widget&gt;</code></pre>

<h2>Menambahkan konten pada ekstensi</h2>

<p>Langkah selanjutnya adalah membuat sesuatu yang menarik untuk ditampilkan pada jendela Panggil Cepat. Untuk halaman background ekstensi, kita perlu membuat sebuah file dengan nama <code>index.html</code> pada direktori yang sama dengan <code>config.xml</code>. Misalnya, kita membuat jam digital JavaScript sederhana yang menampilkan waktu saat ini hingga detiknya. Pertama, kita akan membuat dasar <code>index.html</code> dengan elemen kosong <code>output</code>:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
&lt;title&gt;Clock Panggil Cepat Extension&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;output&gt;&lt;/output&gt;
&lt;script src=&quot;scripts/background.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Setelah itu, kita perlu membuat direktori <code>scripts</code> yang berisi file <code>background.js</code> yang telah berisi link. File JS akan terlihat seperti ini:</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
// Fungsi sederhana untuk awalan nol jika nilai yang terlewati kurang dari
10
function formatTime(time) {
return (time &lt; 10) ? &#39;0&#39; + time : time;
}

var output = document.querySelector(&#39;output&#39;);
var date, hours, mins, secs;

// Tampilkan waktu sekarang setiap 500 milliseconds
var timer = window.setInterval(function() {
date = new Date();
hours = date.getHours();
mins = date.getMinutes();
secs = date.getSeconds();
output.innerHTML = formatTime(hours) + &#39;:&#39; + formatTime(mins) + &#39;:&#39; +
formatTime(secs);
}, 500); // Dua kali dalam sedetik untuk memungkinkan sedikit penundaan
eksekusi JavaScript
}, false);</code></pre>

<p>Style sheetnya (<code>style.css</code>) juga sederhana, namun ada trik jitunya:</p>

<pre><code>* {
margin: 0;
padding: 0;
}
html {
height: 100%;
}

/* Gunakan display:table dan display:table-cell untuk menggunakan vertical-align:middle */
body {
background: #444;
color: #fff;
display: table;
height: 100%;
width: 100%;
}
output {
display: table-cell;
font-family: monospace;
font-size: 10em;
text-align: center;
text-shadow: 0 0.1em 0.1em #000;
vertical-align: middle;
}

/* Style disini digunakan hanya pada mode &quot;minimized&quot; */
@media screen and (view-mode: minimized) {
output {
font-size: 1.8em;
}
}</code></pre>

<p>Seperti yang bisa Anda lihat, terdapat CSS3 media query dibagian bawah dari file ini yang dapat mengecek kondisi <code>view-mode: minimized</code>, agar sesuai dengan <a href="http://dev.w3.org/2006/waf/widgets-vmmf/"><code>view-mode</code> spesifikasi Media Feature</a>. Dengan kata lain, styles pada bagian ini
hanya diterapkan jika halaman ditampilkan pada mode minimized seperti pada kolom Panggil Cepat. Ini merupakan cara yang mudah untuk menimpa style pada situasi tertentu tanpa perlu menyimpan banyak desain.</p>

<h2>Sentuhan akhir ekstensi</h2>

<p>Seperti biasanya, untuk membungkus kreasi kita sebagai sebuah ekstensi, kami akan zip semua file didalam direktori (namun bukan direktori itu sendiri) dan menamainya dengan sebuah ekstensi <code>.oex</code>. Jika Anda belum melakukannya, <a href="http://dev.opera.com/articles/view/4972/clock_SD_extension.oex">unduh clock_SD_extension.oex</a> dan cobalah terlebih dulu.</p>

<h2>API <code>SpeedDialContext</code></h2>

<p>Setelah terinstal, ekstensi kami akan mengontrol kotak Panggilan Cepat secara dinamis dengan API <code>SpeedDialContext</code>. API ini sangat sederhana dengan dua properti: <code>title</code> and <code>url</code>. Mereka diakses dari background JavaScript melalui objek <code>opera.contexts.speeddial</code> seperti:</p>

<pre><code>if (opera.contexts.speeddial) {
var sd = opera.contexts.speeddial;
sd.title = &quot;My title&quot;;
sd.url = &quot;mypage.html&quot;;
}</code></pre>

<p>Kita dapat menggunakan fitur ini untuk mengembangkan ekstensi jam, misalnya membuatnya menampilkan sebuah pesan berdasarkan waktu tertentu dalam sehari. File yang perlu kita ubah hanyalah file JavaScript <code>background.js</code>:</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
// Fungsi sederhana untuk awalan nol jika nilai yang dilalui kurang dari 10
function formatTime(time) {
return (time &lt; 10) ? &#39;0&#39; + time : time;
}

var output = document.querySelector(&#39;output&#39;);
var date, hours, mins, secs, tmp_hours, timeofday;
var messages = {
&quot;morning&quot;: &quot;Good morning!&quot;,
&quot;afternoon&quot;: &quot;Good afternoon!&quot;,
&quot;evening&quot;: &quot;Good evening!&quot;,
&quot;night&quot;: &quot;Shouldn&#39;t you be in bed?&quot;
};

// Tampilkan waktu saat ini tiap 500 milliseconds
var timer = window.setInterval(function() {
date = new Date();
hours = date.getHours();
mins = date.getMinutes();
secs = date.getSeconds();
output.innerHTML = formatTime(hours) + &#39;:&#39; + formatTime(mins) + &#39;:&#39; +
formatTime(secs);

// Buat judul Panggilan Cepat menampilkan pesan sesuai jamnya
if (hours !== tmp_hours) {
if (hours &gt; 15) {
timeofday = &#39;evening&#39;;
} else if (hours &gt; 11) {
timeofday = &#39;afternoon&#39;;
} else if (hours &gt; 3) {
timeofday = &#39;morning&#39;;
} else {
timeofday = &#39;night&#39;;
}

if (opera.contexts.speeddial) {
opera.contexts.speeddial.title = messages[timeofday];
}
tmp_hours = hours;
}
}, 500); // Twice a second to allow for slight delays in JavaScript
execution
}, false);</code></pre>

<p>Ini sama dengan contoh yang pertama namun ada tambahannya beberap:</p>

<ul>
<li>Objek <code>messages</code> berisi pesan untuk beberapa waktu tertentu dalam sehari.</li>
<li>Pengecekan berulang yang menjalankan kode ketika jamnya telah berubah.</li>
<li>Baris yang menampilkan pesan yang relevan dari objek <code>messages</code> pada judul Panggilan Cepat.</li>
</ul>

<p>Ekstensi ini bisa diunduh dari: <a href="http://dev.opera.com/articles/view/4972/friendly_clock_SD_extension.oex">friendly_clock_SD_extension.oex</a>. Ketika terinstal, seperti ini tampilannya:</p>

<p><img src="http://dev.opera.com/articles/view/4972/friendly_clock_extension_in_speed-dial.jpg" width="400" height="256" alt="Friendly clock extension installed in the Operabrowser&#39;s Panggil Cepat." /></p>
<p class="comment">Gambar 2: Ekstensi jam menarik terinstal pada Panggilan Cepat browser Opera.</p>

<h2>Kesimpulan</h2>

<p>Seperti yang dapat Anda lihat, developer ekstensi sekarang memiliki lebih banyak kesempatan untuk menambahkan ekstensi yang mudah digunakan, nyaman atau hanya untuk kesenangan. Contoh diatas tadi merupakan dasar saja, tapi menampilkan potensi dari ekstensi Speed Dial ketika dikombinasikan dengan ide cerdas dan kemampuan mengembangkan web. Kami berharap untuk bisa melihat ekstensi Speed Dial ini menjadi lebih dari sekedar tautan cantik ke suatu situs web. Kami berharap dapat menemui lebih banyak kekreatifan dari para pengembang web dalam menggunakan API pada <a href="https://addons.opera.com/addons/extensions/">Katalog Ekstensi Opera</a>!</p>

<h2>Referensi</h2>
<p><a href="http://www.opera.com/docs/apis/extensions/speeddialguide/">Opera Extensions API: Panduan Panggilan Cepat</a></p></p>
