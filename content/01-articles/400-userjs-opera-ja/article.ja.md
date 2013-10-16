Title: UserJS を Opera エクテンションに
----
Date: 2010-11-03 13:09:35
----
Lang: ja
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<h2>はじめに</h2>
<p>
この文書は <a href="http://www.opera.com/docs/userjs/">UserJS</a> から Opera エクステンションへの変換を駆け足で解説します。
手順はとても単純ですが、いくつか注意しておいてほしいこともあるので書いていきます。
実用的なサンプルも作ります。</p>

<h2>変換手順</h2>
<ol>
<li>まず最初に、エクステンションのルートディレクトリとなる空のディレクトリを作成します。</li>
<li>次に ルートディレクトリに <code>includes</code> ディレクトリを作り、UserJS スクリプトを置きます。このスクリプトが挿入されるスクリプトとして動作します。</li>
<li>ルートディレクトリ内に <code>icons</code> のような適当なディレクトリエクステンションのアイコンを入れます。</li>
<li>適切な <code>config.xml</code> ファイルを作りルートディレクトリに置きます。</li>
<li>ルートディレクトリ内の全てのファイルとディレクトリを選択して ZIP で圧縮し、適当なファイル名をつけ拡張子 <code>.oex</code> を付けます。</li>
<li>これで、動作するエクステンションが出来ました。Opera エクステンションのサイトにアップロードする前にテストしたりデバッグしたりしてください。</li></ol>

<h2>注意事項</h2>
<p>
いくつかの理由で、エクステンションとして動作しない UserJS があります。
動かない理由の多くは、<code>location</code> や <code>opera</code> といったオブジェクトをを直接参照しているからですが、
<code>window.location</code> や <code>window.opera</code> のように <code>window</code> から参照するように直せば動作します。
</p>

<h2>実用的なサンプル</h2>
<p>
UserJS からエクステンションへの変換が簡単なことを示す一連として、あっという間にあなたをエクステンション開発者にしてみせましょう。
じゃあ、タイマースタート。</p>

<h3>ステップ 1： UserJS を選ぶ</h3>
<p>
例として、Opera のインターンで働いていた <a href="http://rauscheronline.de">Martin Rauscher</a> 作成の、ホットな <a href="http://extendopera.org/userjs/content/html5-video-full-screen">HTML5 video UserJS</a> を取り上げます。
彼のスクリプトは HTML5 のビデオを全画面表示で見られるようにします。いい忘れてましたが、スクリプトを変換してエクステンションにするには元のスクリプトのライセンスを確認しておくべきです。Martin Kindly はエクステンションへの変換の許可をくれましたが、あなたはオープンソースライセンかその他の許可されたライセンスでリリースされたスクリプトを使いましょう。</p>

<h3>ステップ 2： ディレクトリを掘る</h3>
<p>
まずは、起点となるディレクトリが必要ですので、ルートディレクトリとして <code>VideoFullscreen</code> を作ります。
ルートディレクトリにサブディレクトリ <code>includes</code> を作り、その中にUserJS ファイル（<code>VideoFullscreen.js</code>）をコピーします。</p>

<h3>ステップ 3： アイコンを作る</h3>
<p>
自分で好きなデザインのアイコンを作ることもできますが、このサンプルでは手抜きして、<a href="http://openiconlibrary.sourceforge.net/">Open Icon Library</a> から選んできます。
数百者アイコンが使えますがまずはライセンスで必要事項を確認しましょう。
なんであれ、原著に言及しておくのは良いことです。今回は、<a href="http://openiconlibrary.sourceforge.net/gallery2/?./Icons/actions/view-fullscreen-4.png">全画面表示を表すアイコン</a>を使ったので <a href="http://tango.freedesktop.org/Tango_Icon_Library">Tango プロジェクト</a>のクレジットを入れておきます。
Opera エクステンションマネージャでの最大解像度は 64x64 なのでそれを使います。</p>
<h3>
ステップ 4： 設定ファイルを作る</h3>
<p>
手を抜くところは抜くということにしているので、下の <code>config.xml</code> をコピペして、ルートディレクトリに保存します。
<pre><code>
&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;&gt;
  &lt;name&gt;VideoFullscreen&lt;/name&gt;
  &lt;description&gt;Adds fullscreen capability to every HTML5 video element. Just play the video and then hit SHIFT-ENTER or F11.&lt;/description&gt;
  &lt;author href=&quot;http://rauscheronline.de/&quot;&gt;Martin Rauscher (ported by Daniel Davis)&lt;/author&gt;
  &lt;icon src=&quot;VideoFullscreen.png&quot;/&gt;
&lt;/widget&gt;</code></pre>
<p>
あなたのエクステンションに合うように詳細を変えて、作者としてあなた自身のクレジットを入れるのを忘れないでください。</p>
<h3>
ステップ 5： まとめる</h3>
<p>
最後のステップはパッケージ化です。
<code>icons</code> ディレクトリと、<code>includes</code> ディレクトリ、それと <code>config.xml</code> を選択して ZIP で圧縮して、できたファイルの拡張子を <code>.oex</code> に変えます。我々のサンプルでは <code>VideoFullscreen.zip</code> を <code>VideoFullscreen.oex</code> とします。
これでお終いです。
ファイルを Opera にドラッグすればエクステンションをインストール出来ます。</p>
<h3>
ステップ 6： 微調整とバグ修正</h3>
<p>
元々の UserJS はうまく動いたのに、新しく作ったエクステンションはうまく動かないとこもあるでしょう。
エラーコンソールを先ず見てみるというのはいいアイデアですが、大抵の場合 Opera エクステンションの環境に起因する問題がほとんです。
つまり、UserJS 内で参照しているオブジェクトをより厳密にする必要があるということです。
今回の <code>VideoFullscreen.js</code> の場合、<code>addEventListener()</code> を何度か使っていますが、イベントを設定すべきオブジェクトを厳密に指定していませんでした。
UserJS では暗黙のうちに <code>window</code> を環境としていましたが、Opera エクステンションはもう少し複雑なので <code>window</code> を指定する必要があります。
つまり、次のようなコードにします。
<pre><code>
window.addEventListener(&#39;DOMContentLoaded&#39;,init,false);
window.addEventListener(&#39;DOMContentLoaded&#39;,function(){
  document.getElementsByTagName(&quot;body&quot;)[0].addEventListener(&#39;keydown&#39;,keyDownHandler,false);
},false);
window.addEventListener(&#39;DOMNodeInserted&#39;,init,false); </code> </pre>
<p>
ここで、コードを深く掘り下げて改善していきます。今回のスクリプトではコードを下記のように書き換えてより効率的にしました。</p>
<pre><code>
// このコードを
document.getElementsByTagName(&quot;body&quot;)[0].addEventListener(&#39;keydown&#39;,keyDownHandler,false);
// このように変更
document.body.addEventListener(&#39;keydown&#39;,keyDownHandler,false); </code></pre>
<p>
エクステンションだけでなく Web ページやアプリの高速化のために別稿 <a href="http://dev.opera.com/articles/view/efficient-javascript-ja/">効率的なJavaScript</a>（原著 <a href="http://dev.opera.com/articles/view/efficient-javascript/">writing efficient JavaScript</a>）を読んでおくことをおすすめします。
<h3>
ステップ 7： 野に放つ</h3>
<p>
さて、変換も済みテストと調整も済んだので公開するとしましょう。
<a href="http://addons.labs.opera.com">addons.labs.opera.com</a> にアップロードし、みんなに告知します。
このチュートリアルで作ったエクステンションもこのサイトにアップロードしてありますし、このページの <a href="http://dev.opera.com/articles/view/converting-userjs-to-extensions/VideoFullscreen.oex">VideoFullscreen Opera extension</a> からダウンロードすることも出来ます。
インストールしたら、HTML5 の VIDEO を使ったページ、例えば、<a href="http://people.opera.com/brucel/demo/video/accessible-html5-video-captions.html"> Bruce Lawson による HTML5 VIDEO のページ</a>などで、再生ボタンを押してから F11 を押して試してみるといいでしょう。
次回の記事では Bruce Lawson を全画面で拝んでトラウマになったことを考える事になるかもしれませんが、そうなるまえにあなたが変換したか新しく作ったエクステンションが来ることを待っています。</p></p></p></p>
