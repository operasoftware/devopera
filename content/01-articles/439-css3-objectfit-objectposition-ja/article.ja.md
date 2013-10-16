Title: CSS3 の object-fit と object-position プロパティ
----
Date: 2011-05-03 13:11:47
----
Lang: ja
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2>はじめに</h2>

<p>CSS でよくある問題に、やなどの置換要素のアスペクト比を制御するというものがあります。たとえば、アスペクト比の違うものが混ざってもそれが変形されないように、ページに画像を同じ大きさで並べたいという場合を考えてみましょう。画像を切り抜いたり無理やり変形させるよりも、アスペクト比を保ちながらリサイズし、レターボックス表示にするほうがずっとエレガントです。あるいは逆に、レターボックスを持つ HTML5 の <code>&lt;video&gt;</code> などのコンテンツを特定の幅と高さにあわせることや、全てのビデオをあるアスペクト比に整形したいかもしれません。異なるアスペクト比を持つコンテンツを自動的に意図した通りに見せる方法はないものでしょうか。</p>

<p>現在、こういった事をするのはとても難しく、JavaScript から画像サイズをオンザフライで操作するか、とても多くの CSS を書く必要があります。しかし、CSS3 の <a href="http://dev.w3.org/csswg/css3-images/">Image Values and Replaced Content</a> モジュールで定義される <a href="http://dev.w3.org/csswg/css3-images/#object-fit"><code>object-fit</code></a> プロパティを使うと、これらの問題を解決できるのです。このモジュールは他にも、要素中の内容について水平方向・垂直方向の位置を指定する <a href="http://dev.w3.org/csswg/css3-images/#object-position"><code>object-position</code></a> プロパティを定義しています。</p>

<p><code>object-fit</code> と <code>object-position</code> は Opera 11 でサポートされました (現在は <code>-o-</code> ベンダー接頭辞が必要です)。これらのプロパティは置換要素 <code>&lt;video&gt;</code>, <code>&lt;object&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;input type=image&gt;</code>, <code>&lt;svg&gt;</code>, <code>&lt;svg:image&gt;</code>, <code>&lt;svg:video&gt;</code> に指定できます。</p>

<p class="note"><code>object-fit</code> は SVG コンテンツにも適用されますが、SVG では同様の働きをする <code>preserveAspectRatio=&quot;&quot;</code> 属性が定義されています。</p>

<h2><code>object-fit</code> と <code>object-position</code> のはたらき</h2>

<p><code>object-fit</code> プロパティはどの置換要素にも適用できます。</p>

<pre><code>img {
  height: 100px;
  width: 100px;
  <strong>object-fit: contain;</strong>
}</code></pre>

<p class="note">この記事で使うサンプルや例では、置換要素に CSS で <code>width</code> と <code>height</code> を与えています。<code>object-fit</code> は HTML で直接指定された幅や高さに対しても機能しますが、この CSS プロパティに対応しないブラウザでは置換要素がつぶれて表示されてしまうので HTML で指定していません。こうすることで CSS に対応しないブラウザでは、置換要素が内在する大きさで表示されます。CSS で指定することと HTML で指定することのどちらが良いかは、状況やどのような graceful degradation を望んでいるかで変わります。</p>

<p><code>object-fit</code> に指定できる値は次のとおりです。</p>

<ul>
<li><code>contain</code>: 置換要素へ明示的に <code>width</code> と <code>height</code> を与えた場合、<code>object-fit: contain;</code> はそのコンテンツ (画像など) がもともと持つアスペクト比を保ちつつ、<code>width</code> と <code>height</code> で指定された領域に収まるようにリサイズされます。</li>
<li><code>fill</code>: 指定された領域に沿うようにコンテンツの大きさを拡張します。結果的に、コンテンツがもともと持つアスペクト比が保たれないことがあります。</li>
<li><code>cover</code>: コンテンツがもともと持つアスペクト比を保ちながら、指定された領域を完全に覆うようリサイズします。コンテンツのもつ幅と高さのうち短いものが指定領域にフィットし、長いものは指定領域からはみ出します。</li>
<li><code>none</code>: コンテンツは要素に指定された <code>width</code> と <code>height</code> を無視し、置換要素がもともと持つ幅と高さを利用します。</li>
</ul>

<p class="note"><code>none</code> は Opera でサポートされていますが、CSS WG でその必要性などが議論されています。冒頭で紹介した Editor&#39;s Draft では存在していますが、<a href="http://www.w3.org/TR/2011/WD-css3-images-20110217/">公式な草案の最新版</a>からは現在削除されているなど、今後が不透明な状態にあります。</p>

<p><code>object-position</code> は <a href="http://dev.opera.com/articles/view/31-css-background-images/#positioningtheimage"><code>background-position</code></a> が背景画像に及ぼすものと同じ効果を与えます。</p>

<pre><code>img {
  height: 100px;
  width: 100px;
  object-fit: contain;
  <strong>object-position: top 75%;</strong>
}</code></pre>

<p class="note">Opera では <code>object-fit</code> に <code>auto</code> という値を指定できます。これはプロパティが指定されていない状態と同じ効果を与えるもので、後方互換性を保つことと、先に指定した設定を上書きしたい時のためだけに用意されています。</p>

<h2>アスペクト比を保った画像のリサイズ</h2>

<p>レターボックスとして知られているでしょうか。画像アスペクト比を保ちつつ、用意された領域に収めたい場合があると思います。たとえば、Eコマースサイトの CMS が画像ギャラリーに製品画像をアップロードする機能を備えているとします。多くのコンテンツ製作者が画像をアップロードし、その大半が同じ大きさですが、その寸法は異なっています。画像は各製品ページに同じ大きさで表示されなければならず、はみ出ることができず、またはみ出した部分は切り取られてしまいます。このような場合、すべての画像が同じ大きさとなるようアスペクト比を変更すればいちおう解決できますが、見栄えはひどいものです。</p>

<p><img src="http://dev.opera.com/articles/view/css3-object-fit-object-position/figure1.jpg" alt="スクリーンショット: 2つの異なるアスペクト比を持つ画像を同じ大きさに変形した。" /></p>
<p class="comment">図1: アスペクト比を変更した画像のなんとひどいことか。</p>

<p>これに対し、レターボックスで表現する方法もあります。</p>

<p><img src="http://dev.opera.com/articles/view/css3-object-fit-object-position/figure2.jpg" alt="スクリーンショット: 図1 の画像2つをレターボックス表示したもの。" /></p>
<p class="comment">図2: レターボックスはとてもまともに見える。</p>

<p>レターボックスはとても見栄え良いものですが、現在のブラウザのサポート状況からクライアントサイドで実現するには複雑すぎるのです。サーバーサイドで画像をあらかじめ変換するという処理も行えますが、それもまた複雑で、またオーバーヘッドもあります。</p>

<p>このような問題にも、<code>object-fit</code> は簡単に対処できます。</p>

<pre><code>img {
  width: 300px;
  height: 300px;
  ...
  <strong>-o-object-fit: contain;</strong>
}</code></pre>

<p class="note">サンプルファイルでは <code>-o-</code>, <code>-moz-</code>, <code>-ms-</code>, <code>-webkit-</code> というベンダー接頭辞つきプロパティの他に、接頭辞なしの正式な <code>object-fit</code> プロパティを併記しています。こうすることで Opera やそれ以外のブラウザに対して、それらがプロパティを接頭辞つきでサポートし始めた際、また接頭辞なしの正式なプロパティに対応した際に前方互換性を保証できます。ただ上記の例では、見やすさのため <code>-o-</code> 接頭辞つきプロパティだけを書いています。</p>

<p>すべての画像は同じ幅と高さが指定されますが、<code>-o-object-fit: contain;</code> が指定されたことにより、各画像はそのアスペクト比を保ったまま、指定領域内に収まります。実際に <a href="http://dev.opera.com/articles/view/css3-object-fit-object-position/object-fit-contain-images.html"><code>-o-object-fit: contain;</code> のサンプル</a> を見てみましょう。</p>

<p>状況によっては、アスペクト比を保つけれど、領域を画像で完全に覆ってはみ出たものは切り取るほうがよいかもしれません。このような場合は、<code>-o-object-fit: contain;</code> ではなく <code>-o-object-fit: cover;</code> を指定し、さらに <code>overflow:hidden;</code> を書き加えます。</p>

<pre><code>img {
  ...
  <strong>-o-object-fit: cover;</strong>
  <strong>overflow: hidden;</strong>
}</code></pre>

<p>実際に <a href="http://dev.opera.com/articles/view/css3-object-fit-object-position/object-fit-cover-images.html"><code>-o-object-fit: cover;</code> のサンプル</a> を見てみましょう。</p>

<h2>ビデオのアスペクト比を変更する</h2>

<p>次に紹介する例は、先ほどと逆で、アスペクト比が壊れたせいで横に細長くなってしまったビデオを適切なアスペクト比に変形し、さらに <code>object-fit: fill;</code> でレターボックスを解除します。CMS でアップロードされたビデオのアスペクト比が壊れていたという状況がもしある場合、CSS だけで簡単に調整できます。</p>

<p class="note">アスペクト比が壊れるといっても、ここで紹介するサンプルほどひどくはありません。せいぜい 16:9 が 4.3 になってしまったという程度です。それでも厄介なものではありますが。</p>

<p>違いを分かりやすくするため <a href="http://dev.opera.com/articles/view/css3-object-fit-object-position/object-fit-fill-video.html"><code>object-fit: fill;</code> とビデオのサンプル</a> は同じ壊れたアスペクト比を持つビデオを <code>&lt;video&gt;</code> 要素から表示し、2番目のものに <code>object-fit: fill;</code> を与えビデオの表示を調整しています。</p>

<pre><code>&lt;video controls=&quot;controls&quot; src=&quot;windowsill.webm&quot; width=&quot;426&quot; height=&quot;240&quot; class=&quot;no-object-fit&quot;&gt;
  ...
&lt;/video&gt;

&lt;video controls=&quot;controls&quot; src=&quot;windowsill.webm&quot; width=&quot;426&quot; height=&quot;240&quot; class=&quot;object-fit&quot;&gt;
  ...
&lt;/video&gt;</code></pre>

<p>どちらの <code>&lt;video&gt;</code> 要素にも <code>width</code>, <code>height</code> 属性が指定されていますが、最初の例はレターボックス表示になっています。これは <code>&lt;video&gt;</code> 要素は参照したファイルがもともと持つアスペクト比を保つようになっているからです。結果としてひどい表示になっているので、2番目の <code>&lt;video&gt;</code> 要素には <code>object-fit: fill;</code> を与え、要素に与えた <code>width</code>, <code>height</code> 属性の値でビデオを表示するようにしています。</p>

<pre><code>.object-fit {
  ...
  <strong>-o-object-fit: fill;</strong>
}</code></pre>

<p><code>object-fit: fill;</code> を与えると、ビデオの持つアスペクト比を上書きし、<code>&lt;video&gt;</code> 要素に与えた大きさにコンテンツを変形し収めるため、ちゃんと表示されるのです。</p>

<h2>トランジションと組み合わせ面白い効果に</h2>

<p><code>object-fit</code>, <code>object-position</code> と CSS Transitions を組み合わせることで、画像ギャラリーやビデオギャラリーで面白い効果を演出できます。では、記事で最初に出した例をすこし変更してみましょう。</p>

<pre><code>img {
  width: 200px;
  height: 200px;
  ...
  <strong>overflow: hidden;
  -o-object-fit: none;
  -o-object-position: 25% 50%;
  -o-transition: 1s width, 1s height;</strong>
}

<strong>img:hover, img:focus {
  height: 350px;
  width: 350px;
}</strong></code></pre>

<p class="note">これはあくまで、ポイントを抑えるためにシンプルに作ったサンプルです。基本的なキーボードアクセスは <code>tabindex</code> 属性を与えフォーカス可能にすることで担保されています。しかし、ちゃんとした画像ギャラリーはサムネイルがクリックでき、そこから大きな画像を見られるようになっているでしょう。</p>

<p><a href="http://dev.opera.com/articles/view/css3-object-fit-object-position/object-fit-none-transitions.html"><code>object-fit: none;</code> と <code>overflow</code> によるギャラリーのサンプル</a> でカーソルをサムネイルに重ねてみましょう。さて、サムネイルは画像領域の大きさに無理やり縮小されているのではなく、一部分が表示されていることがわかります。そして、カーソルを重ねると隠れていた領域が広がり、広い範囲を見ることができます。これはどうやっているのでしょうか。</p>

<p><code>&lt;img&gt;</code> 要素に <code>-o-object-fit: none;</code> を与えることで、要素に指定された <code>width</code>, <code>height</code> 属性を無視し、領域外にはみ出させます。画像がもともと持っている大きさが <code>&lt;img&gt;</code> 要素に指定されたサイズよりもずっと大きいので、<code>overflow: hidden;</code> を使いはみ出た部分を切り取っています。トランジションはホバー時/フォーカス時により大きな領域を表示する際に使っています。</p>

<p>これだけではありません。サンプルでは <code>-o-object-position: 25% 50%;</code> を与え、<code>&lt;img&gt;</code> が表示される箇所を少し右にずらしています。こうすることで、ホバー時/フォーカス時の演出をより効果的に見せています。</p>

<p class="note"><code>-o-object-position</code> は他にも、画像やビデオのキャプションを表示する隙間をつくるために使うことなどができます。</p>

<h2>おわりに</h2>

<p>この記事では <code>object-fit</code> と <code>object-position</code> をどう使うかを例と共に説明しました。他の例も <a href="http://testsuites.opera.com/object-fit/"><code>object-fit</code> のテストスイート</a> から見ることができます。私たちはどのようなものができるか興味津々です。もし素敵なサイトを作った、もしくは Opera の実装についてなにかある場合はぜひ教えてください！</p>
