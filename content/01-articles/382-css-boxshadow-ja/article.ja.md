Title: クロスブラウザな CSS box-shadow
----
Date: 2010-10-13 05:48:36
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

<h2 id="introduction">はじめに</h2>

<p>陰影は要素に深みを与えるためにウェブや印刷のデザインでよく使われます。従来ウェブコンテンツで陰影をつけるには、画像編集ソフトウェアで作成され CSS で背景として指定された複数の画像が必要とされていました。確かにこの手法は目的を達成させますが、同時に画像作成が大変だったり、一つの要素には一つの画像しか当てられないことによりネストされる div 要素でマークアップが膨大になったりします。</p>

<p>しかし、現在では CSS3 が <code>box-shadow</code> プロパティをサポートし、これを使って私たちはありとあらゆるブロックレベル要素に複数の陰影をつけるようプログラムすることができるようになりました。これは画像編集にかけていた時間の短縮や、コードが汚くなるほどにネストされた div 要素をなくすことことにつながります。ところが、これは Internet Explorer ではサポートされていません。では、どうするのが最善でしょうか？</p>

<p>この記事では、 <code>box-shadow</code> を基本とし IE フィルターを用いたフォールバックも提供するクロスブラウザな解決法として考えられるものの一つを紹介します。尚ここではこのプロパティの使い方については議論しないものとします(これらは <a href="http://dev.opera.com/articles/view/css3-border-background-boxshadow">CSS3 borders, backgrounds and box-shadows</a> で優れた解説がなされています)。</p>

<p>目次:</p>

<ul>
	<li><a href="#internalSupport">ブラウザによるネイティブなサポート</a></li>
	<li><a href="#ieAnalog">IE フィルター</a></li>
	<li><a href="#IEandNormal">IE と他のブラウザで陰影をつける</a></li>
	<li><a href="#inner">内側の影</a></li>
	<li><a href="#realization">例を組み合わせる</a></li>
	<li><a href="#summary">要旨</a></li>
</ul>

<p class="note">著者による注釈: 読者の中には、私たちが IE フィルターを使った例を通して何をしたいのか疑問に思う方もおれらるでしょう。実際、 IE フィルターはページを重くするだけでなく、プロプライエタリで IE 特有のオープンではない標準です。 IE フィルターの一般的な用法の多くは CSS3 で取り扱うことができます。もしあなたが IE (<code>box-shadow</code> を 9 は対応する予定ですが、 8 以下は対応しません) で陰影をつけることを特に必要としていなかったり、 JavaScript による解決法を望むのであれば、それは素晴らしいことです。しかし、あなたがすべてのブラウザにおけるユーザーインターフェースの一貫性を強く必要としていたり、 JavaScript を使わないで解決したかったりする場合はどうでしょう？私たちは IE フィルターを多用することを決して是認しません。しかし、実利的な視点から見て、これは状況によってはよいクロスブラウザな解決法となります。</p>
	
<h2 id="internalSupport">ブラウザによるネイティブなサポート</h2>
<p>CSS3 <code>box-shadow</code> プロパティは殆どのモダンブラウザがよく対応していますが、ページでこれに対応するには次のすべてのプロパティの変化形を使う必要があります:</p>
<ul>
	<li>Opera と IE9 及びそれ以上に対応するのに必要な、接頭辞のない W3C 公式版のプロパティ: <code>box-shadow</code></li>
	<li>Firefox に対応するのに必要な、 <code>-moz-</code> ベンダー接頭辞をつけた形: <code>-moz-box-shadow</code></li>
	<li>WebKit を採用したブラウザ(例えば Google Chrome や Apple Safari) に対応するのに必要な、 <code>-webkit-</code> ベンダー接頭辞をつけた形: <code>-webkit-box-shadow</code></li>
	<li>IE 8 以下はこれらのプロパティに全く対応しません。したがって、影をつけないことにするか、打開策を開発する必要があります。私の解決法を次に示しましょう。</li>
</ul>

<p>ブラウザによるサポートのまとめ:</p>

<table style="border-collapse:separate;border-spacing:2px;background:transparent">
<thead>
	<tr style="color:#fff">
		<td></td>
		<th style="text-align:center;background:#233D61">Internet Explorer</th>
		<th style="text-align:center;background:#A36223">Firefox</th>
		<th style="text-align:center;background:#666666">Safari</th>
		<th style="text-align:center;background:#3F77BB">Chrome</th>
		<th style="text-align:center;background:#812323">Opera</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td style="background:#eee">かなり前</td>
		<td style="background:#FF9999">6.0</td>
		<td style="background:#FF9999">3.0</td><td style="background:#CCFF99">3.2</td><td style="background:#CCFF99">3.0</td><td style="background:#FF9999">9.6</td>
	</tr>
	<tr>
		<td style="background:#eee">最近</td>
		<td style="background:#FF9999">7.0</td>
		<td style="background:#CCFF99">3.5</td>
		<td style="background:#CCFF99">4.0</td>
		<td style="background:#CCFF99">4.0</td>
		<td style="background:#FF9999">10.10</td>
	</tr>
	<tr class="now">
		<td style="background:#eee">現在</td>
		<td style="background:#FF9999" rowspan="2">8.0</td>
		<td style="background:#CCFF99" rowspan="2">3.6</td>
		<td style="background:#CCFF99" rowspan="2">5.0</td>
		<td style="background:#CCFF99" rowspan="2">5.0</td>
		<td style="background:#CCFF99" rowspan="2">10.60</td>
	</tr>
	<tr class="near">
		<td style="background:#eee">近い将来 (2010年末)</td>
	</tr>
	<tr class="far">
		<td style="background:#eee">将来 (2010年以降)</td>
		<td style="background:#CCFF99">9.0</td>
		<td style="background:#CCFF99">4.0</td>
		<td style="background:#CCFF99">5.*</td>
		<td style="background:#CCFF99">6.0</td>
		<td style="background:#CCFF99">11.0</td>
	</tr>
</tbody>
</table>
<div>
	<div style="float:left">
		<div style="background:#CCFF99;display:-moz-inline-stack;display:inline-block;*display:inline;zoom:1;vertical-align:middle;width:70px;height:20px"></div>
		— 対応
	</div>
	<div style="float:left;padding:0 0 0 40px">
		<div style="background:#FF9999;display:-moz-inline-stack;display:inline-block;*display:inline;zoom:1;vertical-align:middle;width:70px;height:20px"></div>
		— 非対応
	</div>
	<br style="clear:both" />
</div>
<p />
<p class="note">IE9 に関する情報は IE9 Developer Preview 3 を元にしています。</p>

<h2 id="ieAnalog">IE フィルター</h2>
<p>私は最近 IE の CSS フィルタについて多くのことを学びました。まず最初に、 <a href="http://msdn.microsoft.com/ja-jp/library/ms532979(VS.85).aspx" target="_blank">blur フィルター</a> が IE で要素をぼやかすのにつかえます。
簡単な <code>&lt;div&gt;</code> 要素を使った例を見てみましょう:</p>
<pre><code>&lt;div style=&quot;background:blue;height:100px;width:100px;&quot;&gt;&lt;/div&gt;</code></pre>

<p>これは 図1 のようになります。</p>
<p><img src="/articles/view/cross-browser-box-shadows/IEbefore.png" width="169" height="169" alt="Just blue layer" title="" /></p>
<p class="comment">図1: 固定領域を持つ簡単な <code>&lt;div&gt;</code> 要素</p>

<p>次のフィルターを使って、 IE で半径 5 ピクセルをぼやかすことができます:</p>
<pre><code>&lt;div style=&#39;background:blue;height:100px;width:100px;
  filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=5);
  -ms-filter:&quot;progid:DXImageTransform.Microsoft.Blur(pixelradius=5)&quot;;&#39;&gt;
&lt;/div&gt;</code></pre>

<p>これが適用されると 図2 のような効果がでます。</p>

<p><img src="/articles/view/cross-browser-box-shadows/IEblured.png" width="169" height="169" alt="Blue layer with blur in Internet Explorer" title="" /></p>
<p class="comment">図2: blur フィルターが適用された簡単な <code>&lt;div&gt;</code> 要素</p>

<h2 id="IEandNormal">IE と他のブラウザで陰影をつける</h2>

<p>この方法は IE でボックスの陰影を作るのに使えます。影をつけたい内容と同じ大きさの「幽霊」 <code>&lt;div&gt;</code> 要素をつけ足します。 <code>box-shadow</code> に対応しているブラウザではそれは隠されてスクリーン上には表示されません。 IE では、それが内容の裏側に配置されてぼやかしが入り、陰影として動作します。</p>

<p>モダンなブラウザでは、次の XHTML と CSS で陰影を作ることができます:</p>

<pre><code>&lt;-- (X)HTML --&gt;
&lt;div class=&quot;baseBlock&quot;&gt;&lt;/div&gt;

/* CSS */
.baseBlock{
    height:100px;
    width:100px;
    background:#f9f;
    box-shadow:10px 10px 5px #000;
    -moz-box-shadow:10px 10px 5px #000;
    -webkit-box-shadow:10px 10px 5px #000;
}</code></pre>

<p>この効果を IE で再現するには、以下のようにして特別な「幽霊」 <code>&lt;div&gt;</code> 要素をつけ足します:</p>

<pre><code>&lt;-- (X)HTML --&gt;
&lt;div class=&quot;ieBlock&quot;&gt;&lt;/div&gt;

/* CSS */
.ieBlock{
    height:100px;
    width:100px;
    background:#000;
    filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=10);
    -ms-filter:&quot;progid:DXImageTransform.Microsoft.Blur(pixelradius=10)&quot;;
}</code></pre>

<p>これは 図3 のようになります:</p>
<p><img src="/articles/view/cross-browser-box-shadows/ieShadowForComparison.png" width="189" height="189" alt="CSS box-shadow in IE" title="" /></p>
<p class="comment">図3: IE における陰影(影のみが単独で表示されており内容は含まれない)</p>

<h2 id="realization">例を組み合わせる</h2>
<p>このテクニックがどのように作用するかがわかる <a href="http://dev.opera.com/articles/view/cross-browser-box-shadows/example1.zip">普通の陰影の例</a> と <a href="http://dev.opera.com/articles/view/cross-browser-box-shadows/example2.zip">内側の陰影の例</a> を用意しました。以下に基本的なテクニックに用いた完全なコードの一覧を示します。
一つ目は「幽霊」 <code>&lt;div&gt;</code> 要素と主となる内容を一緒ににした (X)HTML コードの例です:</p>

<pre><code>&lt;!-- (X)HTML --&gt;
&lt;div class=&quot;baseBlock&quot;&gt;
  &lt;div class=&quot;baseBlockIn&quot;&gt;
    Lorem ipsum dolor ...
  &lt;/div&gt;
  &lt;div class=&quot;ieShadow&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre>


<p><code>&lt;div class=&quot;baseBlock&quot;&gt;</code> は内容ブロックのコンテナです。 <code>&lt;div class=&quot;baseBlockIn&quot;&gt;</code> は  <code>box-shadow</code> を適用する内容コンテナです(これは IE7 における z-index の問題を回避するのに役立ちます)。
<code>&lt;div class=&quot;ieShadow&quot;&gt;&lt;/div&gt;</code> は IE で陰影をつけるためにぼやかされる「幽霊」ブロックです。</p>

<p>次の節では CSS の最初のブロックを示しています。これは、内容を描画するあらゆるブラウザで適用されます:</p>

<pre><code>/* CSS for all browsers */
.baseBlock{
    width:180px;
    box-shadow:10px 10px 5px #444;
    -moz-box-shadow:10px 10px 5px #444;
    -webkit-box-shadow:10px 10px 5px #444;
}

.baseBlockIn{/* Content part specially separated for fixing problems with z-index in IE7 */
    padding:10px 15px;
    background:#f9f;
}

.ieShadow{
    display:none;
}
</code></pre>

<p>では、対応しているブラウザ向けに <code>box-shadow</code> を設定し、 IE 以外のブラウザから IE 専用の陰影を隠しましょう。以下のコードは IE 専用の CSS です(これを IE の条件つきコメントを使って適用します):</p>

<pre><code>/* CSS for IE versions 8 and below through conditional comments */
.baseBlock{
    position:relative;
    z-index:3;
}

.baseBlockIn{
    position:relative;
    z-index:4;/* z-index for content must be bigger then z-index for shadow */
}

.ieShadow{
    display:block;
    position:absolute;
    z-index:2;
    top:5px;
    left:5px;
    right:-5px;
    bottom:-5px;
    filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=5);
    -ms-filter:&quot;progid:DXImageTransform.Microsoft.Blur(pixelradius=5)&quot;;
    background-color:#444;
}
</code></pre>

<p>ここで <code>baseBlock</code> は内容と陰影の位置を決定するコンテキストです。内容(<code>.baseBlockIn</code> <code>&lt;div&gt;</code> 要素)には陰影(<code>.ieShadow</code> <code>&lt;div&gt;</code> 要素)より大きな z-index が与えられています。後者は絶対位置づけで位置が決定されており、陰影が背景色と blur フィルターを使ってつけられています。</p>

<p>IE の <code>left</code>, <code>top</code>, <code>right</code> and <code>bottom</code> の各値の算出にはいくつかおかしな点があり、これは <code>&lt;div&gt;</code> 要素の陰影に影響を与えます:</p>
<ul>
	<li><code>left</code> は X-offset から blur の値を引いた値になります;</li>
	<li><code>top</code> は Y-offset から blur の値を引いた値になります;</li>
	<li><code>right</code> は blur の値から X-offset を引いた値になります;</li>
	<li><code>bottom</code> は blur の値から Y-offset を引いた値になります。</li>
</ul>

<p>よってコードでは、 <code>box-shadow:10px 10px 5px #444;</code> によって作られた陰影のオフセットを模倣するように位置づけをする必要があります:

<ul>
<li><code>left</code> は X-offset から blur の値を引いた値になります;
10 - 5 = 5</li>
<li><code>top</code> は Y-offset から blur の値を引いた値になります;
10 - 5 = 5</li>
<li><code>right</code> は blur の値から X-offset を引いた値になります;
5 - 10 = -5</li>
<li><code>bottom</code> は blur の値から Y-offset を引いた値になります。
5 - 10 = -5</li>
</ul>

</p>

<p>これで完了です。最終的には 図4 に示されたものと似たものになります:</p>
<p><img src="/articles/view/cross-browser-box-shadows/outsetPrimer.png" width="490" height="329" alt="Obtained result of cross-browser box-shadow in different browsers" title="" /></p>
<p class="comment">図4: モダンなブラウザと従来バージョンの IE における陰影を示している最終的な例</p>

<h2 id="inner">内側の影</h2>

<p>内側の影を作るのにもIE を含めた複数のブラウザで似たようなテクニックが使えます。違いは <code>overflow: hidden;</code> が影がコンテナの外側に溢れ出さないように切り取るために使われていることと、条件つき CSS における <code>background-color</code> をメインの CSS における <code>box-shadow</code> の色と統一させてある点です。では上と同様にまずは (X)HTML のコードを示します:</p>

<pre><code>&lt;!-- (X)HTML --&gt;
&lt;div class=&quot;shadowBoxOut&quot;&gt;
  &lt;div class=&quot;shadowBox&quot;&gt;
    &lt;div class=&quot;ieShadow&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;content&quot;&gt;
      Lorem ipsum dolor ...
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<p>次にすべてのブラウザが使う CSS を示します:</p>

<pre><code>/* CSS for all browsers */
.shadowBoxOut{
    border:1px solid #000;
    width:180px;
}

.shadowBox{
    background:#fff;
    padding:10px 15px;
    color:#000;
    box-shadow:inset 30px 30px 20px #888;
    -moz-box-shadow:inset 30px 30px 20px #888;
    -webkit-box-shadow:inset 30px 30px 20px #888;
}

.ieShadow{
    display:none;
}</code></pre>

<p>そして最後に、条件つきコメントを使って IE だけに適用する条件つき CSS を示します:</p>

<pre><code>/* CSS for IE versions 8 and below through conditional comments */
.shadowBox{
    background:#888;/* Background colour changed to shadow colour */
    position:relative;
    overflow:hidden;
    zoom:1;
    border-right:1px solid transparent;/* Fix problem with shadow overlay above content in IE8 */
    *border-right:0;
}

.ieShadow{
    display:block;
    position:absolute;
    top:10px;
    left:10px;
    bottom:-10px;
    right:-10px;
    background:#fff;/* Here must be set of base layer background color */
    filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=20);
    -ms-filter:&quot;progid:DXImageTransform.Microsoft.Blur(pixelradius=20)&quot;;
}

.content{
    position:relative;
}</code></pre>

<p>先ほどと同じ IE における影をつくる <code>&lt;div&gt;</code> 要素の <code>left</code>, <code>top</code>, <code>right</code>, <code>bottom</code> の算出におけるおかしな点が、この場合も適用されます。</p>

<p>上のコードは 図5 に示されたような描画を与えます。</p>
<p><img src="/articles/view/cross-browser-box-shadows/insetPrimer.png" width="523" height="350" alt="Obtained result of cross-browser box-shadow in different browsers" title="" /></p>
<p class="comment">図5: モダンブラウザと従来バージョンの IE での陰影を示している内側の影の最終的な例</p>

<h2 id="summary">要旨</h2>
<p>この記事を通して、 <code>box-shadow</code> を基本とし IE フィルターで IE にも対応した、ブロックレベルの要素に陰影をつけるクロスブラウザな解決法について見てきました。この方法で以下のブラウザで陰影をつけることができます:</p>
<ul>
	<li>Apple Safari 3+</li>
	<li>Google Chrome 2+</li>
	<li>Microsoft Internet Explorer 7+</li>
	<li>Mozilla Firefox 3.5+</li>
	<li>Opera 10.50+</li>
</ul>

<p>このアプローチの利点:</p>

<ul>
	<li>画像を使わない。つまり画像編集ソフトを使った大変な作業が減り、 HTTP リクエストの数が減り、パフォーマンスが向上する;</li>
	<li>JavaScript を必要としない;</li>
	<li>陰影には好きな色が使える。</li>
</ul>


<p>欠点は一つ、 <code>top</code>/<code>bottom</code> プロパティ及び <code>left</code>/<code>right</code> プロパティには IE6 が対応していないということで、このテクニックは高さが固定された要素に適用されない限り、 IE6 では正しく動かないことがあります。この場合、 <code>top</code>/<code>bottom</code> を <code>top</code>/<code>height</code> に、 <code>left</code>/<code>right</code> を<code>left</code>/<code>width</code> に置き換えることで上手く動作させることができます。</p>
