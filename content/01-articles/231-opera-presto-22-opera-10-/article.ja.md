Title: Opera Presto 2.2 と Opera 10 概観
----
Date: 2008-12-16 17:31:41
----
Lang: ja
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<h2>はじめに</h2>

<p>2008 年の終わりが迫ってきた今、Opera から一足早いクリスマスプレゼントのお知らせをいたします。改良された新 Opera Presto 2.2 レンダリングエンジンのお披露目です。開発チームの努力によって、新エンジンは速度、安定性、Web 標準への準拠などすべての分野にわたって改良がなされました。</p>

<p>この文書は、先のバージョン 2.1 以降に施された主要な改良点を、例示とあわせて紹介するものです。Presto 2.2 エンジンはリリースされたばかりの <a href="http://www.opera.com/browser/next/">Opera 10 アルファ版</a>で使われていますので、実際にダウンロードしご自身でお試しいただけます。ぜひこの機会に新技術の数々を試し、コメントをお寄せください。</p>

<p class="note">このアルファ版は将来公開される Opera 10 のすべての機能を備えたものではない点に留意してください。Opera 10 で使われる Opera Presto 2.2 レンダリングエンジンが初めて一般公開されたので、新しい Web 技術のサポート具合をご自身でお試しいただけるようになりました。また、<strong>以下の例示は Opera 10 アルファ版でないと動作いたしません。</strong></p>

<p>取り上げる項目</p>


<ul>
  <li><a href="#webfonts">Web Font：Web におけるタイポグラフィが容易に</a></li>
  <li><a href="#opacity">RGBA と HSLA による透過</a></li>
  <li><a href="#selectorsapi">Selectors API</a></li>
  <li><a href="#svg">SVG の改良</a>
    <ul>
      <li><a href="#fps">SVG での FPS 指定</a></li>
      <li><a href="#webfontssvg">SVG での Web Font</a></li>
    </ul>
  </li>
  <li><a href="#dragonfly">改良型 Opera Dragonfly</a></li>
  <li><a href="#acid3">Acid3 テスト：100/100!</a></li>
  <li><a href="#summary">要約</a></li>
</ul>

<p>実例で使われている<a href="http://dev.opera.com/articles/view/presto-2-2-and-opera-10-a-first-look/Presto2-2code.zip">コード</a>をダウンロードいただけます。</p>

<p class="note">謝辞：ここで使われている例示は、われわれの同僚の手によるものです：Selector API は Lachlan Hunt、Web font は Andreas Bovens、SVG は David Vest と Erik Dahlström に感謝いたします。</p>

<h2 id="webfonts">Web Font：Web におけるタイポグラフィが容易に</h2>

<p>長年にわたって Web デザイナーを悩ませてきた大問題の一つが、Web サイトで使えるフォントの制約でした。システムに必要なフォントがインストールされていれば、Web デザイナは CSS によって指定し活用出来ますが、サイトの訪問者の環境に希望のフォントがインストールされているかを確かめる術はありませんでした。主要なプラットフォームで共通にインストールされていることが確実なフォントの数というのは極めて少なく、そのためプラットフォームごとに明朝、ゴシックに別のフォントを指定しデザインの意図が実現されているかを検証する必要がありました。</p>

<p>こうした問題は <strong>Web Font</strong> の導入によって解決されようとしています。Web Font とは <a href="http://www.w3.org/TR/css3-webfonts/">CSS 3 モジュール</a> で、サイトの訪問者のコンピュータに指定されたフォントが存在しない場合、あらかじめ指定しておいたダウンロード元からフォントを入手して使うよう指示しておける仕組みです。記述法は以下の通りです：</p>

<pre><code>@font-face {
  font-family: &quot;My font gothic&quot;;
  src: url(&quot;http://www.myweb.com/fonts/myfont.ttf&quot;) format(&quot;truetype&quot;);
}</code></pre>

<p>このように <code>@font-face</code> 中にカスタムフォントの指定を行います（他のフォント関連の指定よりも<strong>前に</strong>このスタイル指定を行う必要があります）。利用するフォントについて一度決めてしまえば、以下のようにスタイルシート中で使うことが出来ます：</p>

<pre><code>p {
  font-family: &quot;My font gothic&quot;;  
  ...
}</code></pre>

<p>Andreas が <a href="http://dev.opera.com/articles/view/presto-2-2-and-opera-10-a-first-look/webfonts.html">Web Font を試せる例</a>を作成しました。この例では <a href="http://www.myfonts.com/search/forgotten+futurist/fonts/">Forgotten Futurist</a> と <a href="http://www.myfonts.com/fonts/larabie/minya-nouvelle/">Minya Nouvelle</a> を利用しましたが、 <a href="http://www.designwritingresearch.org/free_fonts.html">Free Font Manifesto page</a> にはその他のフリーなフォントの一覧があります。より複雑な作例は <a href="http://www.princexml.com/howcome/2008/webfonts/">Web Fonts Demo page</a> を参照ください。</p>

<h2 id="opacity">RGBA と HSLA による透過</h2>

<p>Presto 2.1 でも CCSS 3 の <code>opacity</code>（不透過度）属性はサポートされていました。要素の不透過度を <code>div { opacity: .7; }</code> のように指定可能でした。</p>


<p>Presto 2.2 ではこれに加えて <acronym title="Hue Saturation  Lightness">HSL</acronym> の値としての色指定にも対応しました。HSL による色指定は、結果の予想が困難である <acronym title="Red Green Blue">RGB</acronym> による色指定よりも自由度があり（HSL によって明るい色調を得るには単独で明るさを変えられます）、ハードウェアの制約にとらわれにくくなります。HSL による色指定は次のように行います：</p>

<pre><code>div { background-color: hsl(240, 100%, 50%); }</code></pre>

<p>理論上 Opera Presto 2.1 は次のような RGB 色指定に対応していました:</p>

<pre><code>div { background-color: rgb(255, 0, 0); }</code></pre>

<p>これらに加え、Opera Presto 2.2 はページの透過をより容易にする手段に対応しました。HSL と RGB の第 4 の引数としてのアルファ透過です。すなわち <acronym title="Reb Green Blue Alpha">RGBA</acronym> と <acronym title="Hue Saturation Lightness Alpha">HSLA</acronym> の値に対応いたしました。従来の <code>opacity</code> 属性と同様に、HSLA と RGBA 透過性は 0 から 1 の値で定義されます。0 は完全な透過、1 は完全な不透過となります:</p>

<pre><code>div { background-color: hsla(240, 100%, 50%, 0.5); }

div { background-color: rgba(255, 0, 0, 0.5); }</code></pre>

<p>これに少しばかり JavaScript を組み合わせ、DOM スクリプトで 1 つの CSS の値を変化させてやれば、表示/非表示時に動画的効果を加えるといった楽しいことも可能となります。その際、<code>opacity</code> を用いた透過は<strong>すべての子要素</strong>に適用され、HSLA や RGBA は指定した要素のみに適用される点に留意してください。</p>

<p>CSS 3 の構文を使った例で違いをご覧ください。以下の 2 つは同一の要素を使っています。</p>

<pre><code>&lt;p id=&quot;caption&quot;&gt;Lovely trees&lt;/p&gt;
&lt;img src=&quot;trees.jpg&quot; alt=&quot;A nice tranquil picture of some trees&quot; /&gt;</code></pre>

<p>画像とキャプションに注目してください。最初の例では CSS は以下のようになります。</p>

<pre><code>#caption {
  position: absolute;
  font-size: 2em;
  top: 10em;
  left: 1.5em;
  background-color: rgb(255, 0, 0);
  opacity: 0.3;
  color: #222;
}</code></pre>

<p>直にお分かりかも知れませんが、<code>background-color</code> と <code>opacity</code> 要素にご注目ください（<a href="http://dev.opera.com/articles/view/presto-2-2-and-opera-10-a-first-look/opacity_example.html">opacity の例</a>）。先に言及した点、すなわちテキストと背景が 30% の透過になっているのに気付かれるでしょう。これによって画像は背景との対比によって際立ちますが、キャプションのテキストが読みにくくなってしまいます。</p>

<p>問題を解決するために、RGBA を用いて背景に色だけでなくアルファ透過の値を指定します。<a href="http://dev.opera.com/articles/view/presto-2-2-and-opera-10-a-first-look/RGBA_example.html">第二の例</a>では、<code>background-color</code> に RGB と <code>opacity</code> 属性の組み合わせに代わって RGBA 指定のみを行います。</p>

<pre><code>background-color: rgba(255, 0, 0, 0.3);</code></pre>

<p>RGBA を使った例でお分かりの通り、背景色だけが透過処理されるのでキャプションが読みにくくなることはありません。</p>

<p>既存の <code>background-color</code> を同等の HSLA に置き換えると次のようになります。</p>

<pre><code>background-color: hsla(0, 100%, 90%, 0.3);</code></pre>

<p><a href="http://dev.opera.com/articles/view/presto-2-2-and-opera-10-a-first-look/HSLA_example.html">HSLA の例</a>で確認するか、実例で使われている<a href="http://dev.opera.com/articles/view/presto-2-2-and-opera-10-a-first-look/Presto2-2code.zip">ソース</a>をダウンロードしてご覧ください。</p>

<p>ちなみに、Opera Presto 2.2 はテキストの透明度を指定する <code>color: transparent</code> の値にも対応しています。</p>

<p>後程紹介する簡略ながらも有益な <a href="#svg">SVG の改良</a>の項に関連して言うと、RGBA と HSLA は SVG でも使えます。これは Opacity とは別に <code>fill-opacity</code> と <code>stroke-opacity</code> を使うことによって実現されます。</p>

<h2 id="selectorsapi">Selectors API</h2>

<p><a href="http://www.w3.org/TR/selectors-api/">Selectors API</a> を利用して DOM 要素の選択を簡単に出来るようになりました。</p>

<p>以下の例をご覧ください。ドキュメント中から <code>alert</code> という <code>class</code> を持つすべての要素を選択します。</p>

<pre><code>document.querySelectorAll(&quot;.alert&quot;);</code></pre>

<p>この例ではドキュメント中から最初に出現する <code>div</code> 要素を選択します。</p>

<pre><code>document.querySelector(&quot;div&quot;);</code></pre>

<p>JavaScript になじみのない方でも、CSS に似た構文により容易にお使いいただけます。</p>

<p>上掲のように、Presto 2.2 では <code>querySelector()</code> と <code>querySelectorAll()</code> の 2 つをサポートしています。前者は DOM ツリー中で最初に該当する要素を返し、後者は <code>NodeList</code> として該当する要素のすべてを返します。現行の規格は <code>Document</code>、<code>Element</code> と <code>DocumentFragment</code> ノードに関する手段を定義していますが、われわれの現時点での実装は <code>Document</code> と <code>Element</code> ノードのみに対応しています。</p>

<p><code>querySelector()</code> は最初に該当する要素を抽出する際に有用で、<code>querySelectorAll()</code> よりもそうした場合には効率的です。</p>

<p>従来の API と比較してどれほど簡単になるか、以下の HTML で比べてみましょう。</p>

<pre>&lt;ul id=&quot;fruits&quot;&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;apples&quot;&gt; Apples&lt;/li&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;oranges&quot;&gt; Oranges&lt;/li&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;bananas&quot;&gt; Bananas&lt;/li&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;grapes&quot;&gt; Grapes&lt;/li&gt;
&lt;/ul&gt;</pre>

<p>利用者がこれらの項目すべてにチェックを入れたとします。従来の API ではチェックの入っている <code>input</code> 要素のすべてを順に調べる必要がありました。</p>

<pre>var fruits = document.getElementById(&quot;fruits&quot;);
var checkboxes = fruits.getElementsByTagName(&quot;input&quot;);
var list = [];
for (var i = 0; i &lt; checkboxes.length; i++) {
  if (checkboxes[i].checked) {
    list.push(checkboxes[i]);
  }
}</pre>

<p>新しい API を使うと、上記の操作は<strong>たった1行のコード</strong>に減らせます。</p>

<pre>var list = document.querySelectorAll(&quot;#fruits input: checked&quot;);</pre>

<p>このコードは、利用者がチェックを入れたすべての <code>input</code> 要素を含むノードを返します。このスクリプトによってお望みの動作が可能となります。</p>

<h2 id="svg">SVG の改良</h2>

<p>Opera Presto 2.2 では SVG 対応に関してもいくつかの改良が加えられました。この項ではそれらを概観します。</p>

<h3 id="fps">SVG での FPS 指定</h3>

<p>JavaScript によって SVG アニメーションの速度（秒あたりのフレーム数 = FPS）をコントロール出来ます。Web ページ中の最上位 <code>svg</code> 要素に ID を指定し、<code>getElementById</code> を使ってその要素を選択した後、<code>targetFps</code> 属性を増減させます。例えば Erik が作成した例示では、2 つのボタンに以下のコードが付与され、アニメーションの速度を増減出来ます。</p>

<pre><code>function incFps() {
  svg = document.getElementById(&quot;o&quot;).contentDocument.documentElement.targetFps++;
}

function decFps() {
  svg = document.getElementById(&quot;o&quot;).contentDocument.documentElement.targetFps--;
}</code></pre>
      

<p>現行の FPS の値に <code>currentFps</code> 属性を使ってアクセスすることもできます。Erik の <a href="http://dev.opera.com/articles/view/presto-2-2-and-opera-10-a-first-look/framespersecond.html">SVG FPS の例</a> あるいは<a href="http://dev.opera.com/articles/view/presto-2-2-and-opera-10-a-first-look/Presto2-2code.zip">この文書に付属する zip</a> でお試しいただけます。</p>

<p class="note"><code>targetFps</code> は（ソフト、ハードに依存するという意味で）少々不正確ですが、アニメーションの速度を一定程度コントロール出来ます。ただし DOM の操作に際して再描画の頻度は変化しない点にご注意ください。宣言的アニメーションにのみ有効となります。</p>

<h2 id="webfontssvg">SVG での Web Font</h2>

<p>Web Font だけでも十分素晴らしいのですが、われわれは SVG font にも対応しました。これによって Web Font と同じようにして SVG font ファイルを使って（HTML と SVG ファイル中の）CSS でテキストの装飾が可能となりました。以下の例をご覧ください。</p>

<pre><code>@font-face {
  font-family: &quot;My SVG font&quot;;
  src: url(&quot;http://www.myweb.com/fonts/myfont.svg#myFont&quot;) format(&quot;svg&quot;); 
  font-style: normal, italic;
  font-weight: 500;
}</code></pre>

<p>Erik の作成した <a href="http://dev.opera.com/articles/view/presto-2-2-and-opera-10-a-first-look/webfonts_in_svg.svg">SVG における Web Font の例</a>で SVG 中でのテキスト装飾法をご覧いただき、<a href="http://dev.opera.com/articles/view/presto-2-2-and-opera-10-a-first-look/Presto2-2code.zip">コード</a>を読んで動作原理への理解を深めてください。<strong>UbuntuTitleBold</strong> が SVG font で他は TrueType font となっております。</p>

<p>従来の普通の HTML でも動作することを<a href="http://dev.opera.com/articles/view/presto-2-2-and-opera-10-a-first-look/SVGfonts_in_HTML.html">修正版 Web Font 実例</a>で確認してください。SVG font を CSS で呼び出し HTML を装飾しています。</p>

<p>SVG font は <code>font</code> や <code>font-face</code> 要素を使って SVG ファイル内で定義し、個々のグリュフは <code>glyph</code> 要素でマッピングされます。複雑そうに思えるかも知れませんが、そんなことはありません。フォント形式を変換してくれる <a href="http://fontforge.sourceforge.net/">FontForge</a> というフリープログラムが使えます。</p>

<p>Erik の作成した <a href="http://dev.opera.com/articles/view/presto-2-2-and-opera-10-a-first-look/UbuntuTitleBold.svg">UbuntuTitleBold font の例</a>にあるソースを読み、SVG font がどんなものかご覧ください。</p>

<p class="note">整形された XML であるので、DOM を使ってクライアント側でフォントを操作出来るのも SVG font の素晴らしい点です。誰でも Web アプリケーションを書くことによってフォントを操作出来ますし、サーバーサイドでそこからカスタムした TrueType font ファイルを作成することが可能です。</p>

<h2 id="dragonfly">改良型 Opera Dragonfly</h2>

<p>以前 Dev.Opera で紹介して以来、多くの素晴らしい新機能が Opera Dragonfly に付け加わりました。ぜひ以下の新機能をお試しください。</p>

<ul>
  <li>ネットワークタブ：未完成の機能ですが、サーバ、クライアント間の HTTP 通信を検査することによって、Ajax アプリケーションのデバッグに大変役立つことでしょう。</li>
  <li>DOM 編集：DOM 編集への対応は Opera Dragonfly Alpha 3 の目玉の 1 つです。属性とテキストノードをリアルタイムに編集、追加、削除出来るモードがあります。このモードは、操作したい属性、値やテキストノードをダブルクリックして使います。もう 1 つのモードは、新規の DOM ノードを追加する際などに使うフリーフォーム編集です。要素のタグをダブルクリックすると、その要素全体と子要素がフリーフォーム編集の対象となります。前者のモードには、エンター/リターンキーを押してもフォーカスが編集状態のままになるという既知の問題がありますが、修正され次第自動修正いたします。</li>
</ul>

<p>Opera Dragonfly に関する最新情報は <a href="http://my.opera.com/dragonfly/blog/">Opera Dragonfly blog</a> でご覧いただけます。</p>


<h2 id="acid3">Acid 3 テスト：100/100!</h2>

<p>今年前半、<a href="http://acid3.acidtests.org/">Acid 3 テスト</a> で 100/100 を出す <a href="http://labs.opera.com/news/2008/03/28/">Opera WinGogi</a> を公開しました。今後 Opera Presto 2.2 を有するすべての Desktop ビルドがこの結果を出すことになります。</p>

<h2 id="summary">要約</h2>

<p>テスト版 Opera 10 アルファと新レンダリングエンジン Opera Presto 2.2 のお披露目をお楽しみいただけたでしょうか。今後のさらなる改良にご期待ください。次のリリースをより良いものとするため、感想をお聞かせください。</p>

<p><strong>他の有用なリンク：</strong></p>

<ul>
<li><a href="http://www.opera.com/docs/changelogs/">チェンジログ</a>：更新を網羅したリストはこちら。</li>
<li><a href="http://dev.opera.com/articles/view/presto-2-1-web-standards-supported-by/">Opera Presto 2.1 - Web standards supported by Opera’s core</a>：一つ前のレンダリングエンジン Opera Presto 2.1 の対応している Web 標準に関する Dev.Opera の記事。</li>
</ul>
