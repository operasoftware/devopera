Title: JavaScript で実現する アクセシブルな字幕付き HTML5 ビデオ
----
Date: 2010-04-20 07:46:46
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

<h2>ビデオのアクセシビリティ</h2>

<p><abbr>HTML</abbr>5 ではサードパーティ製プラグインに頼らず、ブラウザーが直接表示するかたちで Web ページにビデオを埋め込むことができます。(<abbr>HTML</abbr>5 video の真の力については、<a href="/articles/view/introduction-html5-video/">HTML5 video の紹介</a>をご覧ください。)</p>

<p>しかし、<abbr>HTML</abbr>5 や他のプロプライエタリな方式に関わらず、すべてのビデオににはアクセシビリティの問題があります。ビデオの内容にアクセスできない人に対して、良心的な開発者はどうすればよいのでしょうか。<abbr>HTML5</abbr> の <code>video</code> 要素には <code>img</code> 要素にある <code>alt</code> 属性がありませんが、タグの間に「代替コンテンツ」を与えることができます。</p>

<pre><code>&lt;video&gt;
あなたのブラウザーは Ogg Theora コーデックをサポートしていません。
&lt;a href=&quot;video.ogg&quot;&gt;ビデオをダウンロード&lt;/a&gt;して、オフラインで見てください。
&lt;/video&gt;</code></pre>

<p>ただし、<a href="http://dev.w3.org/html5/spec/video.html#video">仕様</a>では次のように書かれています。</p>

<blockquote>...この要素の内容は、アクセシビリティの諸問題を解決するためのものではありません。聴覚障害、視覚障害者、身体障害や認知障害を持つ人に対してビデオの内容をアクセシブルにする場合、制作者は代替メディアストリームを提供することや、ユーザー補助機能 (キャプションや字幕トラックなど) を埋め込むことが期待されています。</blockquote>

<p>理屈の上では、ビデオファイルが字幕を持つべきです。画像に埋め込まれたものではなく、別のファイルとして用意されたテキスト形式で、ビデオ本体と供にパッケージ化されるのが望ましいです。こうすれば、コンテンツについて一番知っている作成者が一度字幕を書くだけで、ビデオを自分のページに埋め込む人は字幕やトランスクリプトを簡単に取得することができます。</p>

<p>しかし、現実は、誰もそのやり方を知らず、またどのブラウザーもデータを取得しユーザーに提供する方法を知りません。ですから、その隙間を埋めるハックが必要になります。ここにあるデモは、トランスクリプトを <code>&lt;div id=&quot;transcript&quot;&gt;</code> で囲み、プレーンテキストとしてページ上に持たせたものです。こうすることで、ユーザーが JavaScript を無効にしてページにアクセスしても、ビデオとそのUI、「トランスクリプト」と書かれた見出し、トランスクリプトが順に現れます。</p>

<p>JavaScript が有効になっている場合は、トランスクリプトを一行ずつビデオの上に重ね字幕として表示します。字幕はプレーンテキストのままですから、支援技術は字幕にアクセスできます。また、スクリーン上にも表示され、ビデオと同期して切り替わります。</p>

<p>これがそのテクニックを使用した、おバカなビデオのサンプル <a href="http://people.opera.com/brucel/demo/video/accessible-html5-video-captions.html">“How to Leverage a Synergy”</a> になります。 (<a href="http://www.opera.com/browser/next/">Ogg ビデオが利用可能なブラウザー</a> が必要です。)</p>

<p>このコンセプトデモは Safari では動作しません。これは、Ogg という Opera や Firefox, Chrome がサポートするオープンなコーデックを Safari がサポートしていないからです。Safari のためにビデオをエンコードして、<a href="http://dev.w3.org/html5/spec/video.html#the-source-element"><code>source</code> 要素</a> で複数のビデオ (Ogg と MP4) を指定すれば、このデモは動作します。なお、Internet Explorer は現時点で <code>video</code> 要素をサポートしていません。</p>

<p class="note">ソースを表示すると、トランスクリプトが段落として意味的にマークアップされているのが分かると思います。しかし、ビデオの上に重なっている部分は <code>span</code> で囲まれています。これは、画面上に表示されているものの区切りは意味的ではなく、言葉が現れるタイミングと見た目の都合 (スクリーンを言葉で埋め尽くさない、など) によるからです。</p>

<p>スクリプトに字幕を表示するタイミングを知らせるため、すべての箇所にタイムスタンプを持たせました。とはいえ、テキスト中に埋め込むのではなく、<abbr>HTML</abbr>5 の新しい機能ですべての要素に指定できる<a href="http://dev.w3.org/html5/spec/dom.html#embedding-custom-non-visible-data">カスタム <code>data-</code> 属性</a>を利用して、データをスクリプトに渡しています。この属性は好きな名前を使うことができますが、&quot;data-&quot; という文字列からはじめる必要があります。この例では、<code>data-begin</code> と <code>data-end</code> という名前にしました。これらの名前が <a href="http://www.w3.org/TR/2009/CR-ttaf1-dfxp-20090924/#timing-attribute-vocabulary">W3C の Timed Text 仕様</a>と <a href="http://www.w3.org/TR/SVG/animate.html#TimingAttributes">SVG/<abbr title="SMIL (Synchronized Multimedia Integration Language)">SMIL</abbr> アニメーション仕様</a>で使われているからです。</p>

<p>私は <code>data-begin</code> を (ビデオの開始からの) タイムオフセットとして、<code>span</code> が現れて欲しい時間を指定しました。<code>data-end</code> 属性には、字幕が消える時間を指定しています。つまり、次のコード</p>

<pre><code>&lt;span data-begin=1 data-end=6&gt;Hi, my name&#39;s Dr Archimedes Einstein…&lt;/span&gt;</code></pre>

<p>これは字幕がビデオの開始から1秒に現れ、開始から6秒で消えることになります (つまり、5秒間表示されます)。</p>

<p>スクリプトはトランスクリプトを囲む <code>div</code> を消します (JavaScript を使って CSS ルールを書き、<code>display:none</code> を指定しています)。スクリプトはこの隠された <code>div</code> から <code>span</code> を取り出します。これは次のようなコードです。</p>

<pre><code>var nodes = document.querySelectorAll(&#39;#transcript span&#39;);</code></pre>

<p>取りだした字幕は、正しいタイミングでビデオの上に配置する必要があります。テキストを重ねるのは簡単です。ここでは、ビデオの上に絶対配置させた別の <code>div</code> (<code>id</code> に <var>captions</var> を指定) を用意しています。明るい背景の上に白いテキストが重なった場合の可読性を高めるため、CSS を使用してテキストに影をつけています。</p>

<pre><code>text-shadow: black 1px 1px 3px;</code></pre>

<p>ビデのに <code>span</code> を重ねるタイミングを決定するため、スクリプトは <code>ontimeupdate</code> イベント (Opera ではビデオがおよそ 250 ミリ秒毎に発火します) を使用し、ビデオ API に何秒間再生しているのかを尋ねます。</p>

<pre><code>var v = document.querySelector(&#39;video&#39;);
var now = v.currentTime;</code></pre>

<p>次に、<code>span</code> 要素をループさせ、再生中の時間が <code>data-begin</code> と <code>data-end</code> の間に重なるものを探します。</p>

<p>この例では、CSS の generated content を利用し、JavaScript を使用しないほうのトランスクリプトに挿入しています。</p>

<pre><code>#transcript [data-begin]:before
  {content: &quot; [&quot; attr(data-begin) &quot;s-&quot;
  attr(data-end)&quot;s] &quot;;
  font-size:80%;}</code></pre>

<p>そして、<abbr>CSS</abbr> のテーブルを利用して整形しています。しかし、これらは別にしなくても構いません。</p>

<p class="note">さっきも言ったように、これはハックです。この開発作業には多くの時間が必要になります (さらに、字幕ファイルを作るには音声を文字に起こし、時間を記録する必要がありますから、これも大変な作業です)。</p>

<p>また、このスクリプトにはいくつか問題があります。まず、トランスクリプト中の略語を <code>abbr</code> でマークアップする、もしくは外国語を <code>span lang=</code> でマークアップした場合、字幕にその情報が同期されません (問題にはならないと思いますが)。また、<code>aria-describedby</code> といった WAI-ARIA 情報を含むこともおこなっていません (ですから、ARIA の利用に関するフィードバックは大歓迎です)。</p>

<p>また、実際にサービスとして提供する場合は、JavaScript の有効無効という状態にかかわらず、ユーザーには字幕とトランスクリプトを切り替えるオプションを提供すべきです。なぜなら、ユーザーの中には携帯電話を利用していて、ビデオをダウンロードするよりも内容をテキストで見たい人がいるかもしれないからです。</p>

<p>コードはクリエイティブ・コモンズライセンスで提供されています。ですから自由に修正して、よろしければ<a href="http://www.twitter.com/brucel">私にツイート</a>して知らせて下さい。</p>

<p>また、Daniel Davis の<a href="http://people.opera.com/brucel/demo/video/multilingual-synergy.html">多言語版サンプル</a>もご覧下さい。このサンプルでは、英語と日本語を再生中でも切り替えることができます。</p>

<h2 id="more">もっと読む</h2>

<ul>
<li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#the-video-element"><code>video</code> の仕様</a></li>
<li><a href="http://my.opera.com/core/blog/2009/12/31/re-introducing-video">Opera でどのように <code>video</code> が実装されているか</a></li>
</ul>

<h2 id="more">謝辞</h2>

<p>デモの JavaScript を書いてくれた <a href="http://www.twitter.com/foolip">Philip Jägenstedt</a> と、価値ある提案をしてくれた David Storey, 学習机の前で広義をする私をベッドの上に立ちながらビデオに収めてくれた娘 Marina に感謝します。</p>
             に 
