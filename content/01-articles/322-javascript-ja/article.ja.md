Title: 効率的な JavaScript
----
Date: 2009-12-10 02:40:22
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

<p class="note">元々の翻訳は<a href="http://www.hyuki.com/yukiwiki/wiki.cgi?EfficientJavaScript">こちら</a>です。</p>

<p>これまでのウェブページはスクリプトをあまり含んでいなかった. 含んでいたとしても, ウェブページの性能に響くようなものではなかった. しかしウェブページがアプリケーションのようになってくると, スクリプトの性能が大きく響くようになる. ウェブの技術を使って作られるアプリケーションが多くなるほど, スクリプトの性能向上はだんだん重要になってくる.</p>

<p>デスクトップのアプリケーションでは, コンパイラを使ってソースを最終的なバイナリに変換する. コンパイラは時間をかけて, できあがるアプリケーションの性能を可能な限り最適化する. ウェブアプリケーションにそんな洒落た仕組みはない. 複数のブラウザ, プラットホーム, アーキテクチャで動かすから, 前もってコンパイルはできない. ブラウザはスクリプトを取得するたびに解釈とコンパイルをしないといけない. アプリケーションはデスクトップばりにスムーズに動かさないといけないし, 読み込みも速い方がいい. デスクトップの計算機からケータイまで, 広く色々な機器で動いて欲しい. </p>

<p>各種ブラウザは上手くやっている. そして Opera は現行のブラウザの中でも最速に並ぶスクリプトエンジンを積んでいる. とはいえ, どのブラウザにも限界はある. そこがウェブ開発者の頑張るところだ. ウェブアプリケーションをできるだけ速く動かすための, 簡単な工夫がある. ループの書き方を変える, スタイルの変更は三回やらず一回にまとめる, 実際に使うスクリプトだけを追加する, など. </p>

<p>この記事では, そうした簡単な変更をいくつか紹介する. それでウェブアプリケーションの性能を改善できる. 扱う範囲は ECMAScript ... JavaScript のコア言語や DOM, 文書のロード方法とした.</p>

<h2>目次</h2>

	<h3>ECMAScript</h3>
	<ol>
		<li><a href="./?page=2#avoideval"><code>eval</code> や <code>Function</code> のコンストラクタを使うのはやめよう</a><ol>
			<li><a href="./?page=2#rewriteeval"><code>eval</code> を書き換えよう</a></li>
			<li><a href="./?page=2#usefunction">関数を使いたいなら <code>function</code> を使おう</a></li>
		</ol></li>
		<li><a href="./?page=2#avoidwith"><code>with</code> を使うのはやめよう</a></li>
		<li><a href="./?page=2#trycatch">性能を決める関数で <code>try-catch-finally</code> を使うのはやめよう</a></li>
		<li><a href="./?page=2#isolate"><code>eval</code> と <code>with</code> は隔離しよう</a></li>
		<li><a href="./?page=2#avoidglobal">グローバル変数を使うのはやめよう</a></li>
		<li><a href="./?page=2#implicitconversion">暗黙のオブジェクト変換に気をつけよう</a></li>
		<li><a href="./?page=2#forin">性能を決める関数で <code>for-in</code> を使うのはやめよう</a></li>
		<li><a href="./?page=2#stringaccumulator">文字列は累積スタイルで使おう</a></li>
		<li><a href="./?page=2#primitiveoperator">プリミティブの操作は関数呼び出しより速い</a></li>
		<li><a href="./?page=2#timeouts"><code>setTimeout()</code> や <code>setInterval()</code> には文字列でなく関数を渡そう</a></li>
	</ol>

	<h3>DOM</h3>
	<ol>
		<li><a href="./?page=3#reflow">再描画と再フロー</a><ol>
			<li><a href="./?page=3#minimumreflow">再フローの回数をできるだけ減らそう</a></li>
			<li><a href="./?page=3#minimalreflow">再フローの範囲をできるだけ小さくしよう</a></li>
		</ol></li>
		<li><a href="./?page=3#modifyingtree">文書ツリーの変更</a></li>
		<li><a href="./?page=3#invisibleelement">不可視な要素を変更しよう</a></li>
		<li><a href="./?page=3#measuring">測りごとの罠</a></li>
		<li><a href="./?page=3#stylechanges">複数回のスタイル変更は一回にまとめよう</a></li>
		<li><a href="./?page=3#smoothspeed">なめらかさと速度にはトレードオフがある</a></li>
		<li><a href="./?page=3#manynodes">大量のノードを覗くのはやめよう</a></li>
		<li><a href="./?page=3#xpath">XPath で速度を稼ごう</a></li>
		<li><a href="./?page=3#traversemodify">DOM を辿りながら書き換えるのはやめよう</a></li>
		<li><a href="./?page=3#cachevalues">DOM の値はスクリプトの変数にキャッシュしよう</a></li>
	</ol>

	<h3>文書のロード</h3>
	<ol>
		<li><a href="./?page=4#docreferences">ある文書から他の文書への参照を生かしておくのはやめよう</a></li>
		<li><a href="./?page=4#fasthistory">高速な履歴移動を使おう</a></li>
		<li><a href="./?page=4#xmlhttprequest">XMLHttpRequest を使おう</a></li>
		<li><a href="./?page=4#dynamicscript">SCRIPT 要素を動的に作ろう</a></li>
		<li><a href="./?page=4#locationnreplace"><code>location.replace()</code> で履歴を抑えよう</a></li>
	</ol>

&lt;page&gt;

<h2>ECMAScript</h2>

	<h3 id="avoideval"><code>eval</code> や <code>Function</code> のコンストラクタを使うのはやめよう</h3>

		<p><code>eval</code> や <code>Function</code> のコンストラクタにソースコードの文字列を渡して呼び出すとき, スクリプトエンジンはソースコードを実行ファイルに変換する機能を呼び出してしまう. これは性能の上で高くつく. たとえば, 単なる関数呼び出しの数百倍はかるくかかる.</p>
		<p><code>eval</code> 関数は特に性質が悪い. <code>eval</code> に渡される引数は前もってわからない. <code>eval</code> は呼び出された環境で評価されるから, 結果としてその周辺環境は最適化できない. その結果ブラウザは周辺コードを実行時にまるまる解釈しないといけない. これが更に響く.</p>
		<p><code>Function</code> のコンストラクタは <code>eval</code> ほど悪くない. 利用箇所周辺のコードには影響しないからだ. それでもかなり遅い.</p>

  <h4 id="rewriteeval"><code>eval</code> を書き換えよう</h4>
    <p><code>eval</code> は非効率なだけだ. ほぼ常に必要ない. 多くの場合, <code>eval</code> を使うのは情報が文字列でやってきた時だ. その情報を使うのに <code>eval</code> がいると思いこんでしまう. よくある失敗の例を以下に示す:</p>
<pre><code>function getProperty(oString) {
  var oReference;
  eval(&#39;oReference = test.prop.&#39;+oString);
  return oReference;
}</code></pre>
    <p>同じ関数は <code>eval</code> なしで書ける:</p>
<pre><code>function getProperty(oString) {
  return test.prop[oString];
}</code></pre>
    <p><code>eval</code> を使わないコードの性能はおよそ 95% 高速だった. Opera 9, Firefox, Internet Explorer で計測. Safari では 85% 速かった. (なお, 関数それ自体を呼ぶ時間は含まない.)</p>

  <h4 id="usefunction">関数を使いたいなら <code>function</code> を使おう</h4>
    <p><code>Function</code> のコンストラクタを使う典型的な例を以下に示す:</p>
<pre><code>function addMethod(oObject,oProperty,oFunctionCode) {
  oObject[oProperty] = new Function(oFunctionCode);
}
addMethod(myObject,&#39;rotateBy90&#39;,&#39;this.angle=(this.angle+90)%360&#39;);
addMethod(myObject,&#39;rotateBy60&#39;,&#39;this.angle=(this.angle+60)%360&#39;);</code></pre>
    <p>同じ関数は <code>Function</code> コンストラクタなしで書ける. ここでは匿名関数を使う. 匿名関数は普通のオブジェクトと同じよう参照できる.</p>
<pre><code>function addMethod(oObject,oProperty,oFunction) {
  oObject[oProperty] = oFunction;
}
addMethod(myObject,&#39;rotateBy90&#39;,function () { this.angle=(this.angle+90)%360; });
addMethod(myObject,&#39;rotateBy60&#39;,function () { this.angle=(this.angle+60)%360; });</code></pre>

	<h3 id="avoidwith"><code>with</code> を使うのはやめよう</h3>
    <p>開発者から見ると便利な <code>with</code> も, 性能の点では高くつく. with はスクリプトエンジンに余計なスコープを作り, 変数を参照する間はそれを使う. これ単体は小さな性能減少にしかならない. しかしスコープの中味がコンパイル時にわからないため, コンパイラは(関数が作るような)普通のスコープと同じようには最適化を行うことができない.</p>
  	<p>より効率的で, かつ開発者にも利のある方法がある. オブジェクトを普通の変数で参照して, その変数からプロパティをさわればいい. この方法はプロパティが文字列やブーリアンのようなリテラル型でない時のみ上手くいく. (訳注:変数にオブジェクトを代入すると, 変数はそのオブジェクトの参照となるが、リテラル型の場合は値のコピーが代入されてしまう.)/p&gt;
    <p>以下のコードを:</p>
<pre><code>with( test.information.settings.files ) {
  primary = &#39;names&#39;;
  secondary = &#39;roles&#39;;
  tertiary = &#39;references&#39;;
}</code></pre>
    <p>次のようにするとスクリプトエンジンにとって効率がいい.</p>
<pre><code>var testObject = test.information.settings.files;
testObject.primary = &#39;names&#39;;
testObject.secondary = &#39;roles&#39;;
testObject.tertiary = &#39;references&#39;;</code></pre>


	<h3 id="trycatch">性能を決める関数で <code>try-catch-finally</code> を使うのはやめよう</h3>
    <p><code>try-catch-finally</code> 構文は特別だ. 他の構文と違い, この制御構造は実行時にスコープの中で新しい変数をつくる. <code>catch</code> 節が実行されるたび, 捕捉された例外は変数にセットされる. この変数は <code>catch</code> 節の冒頭で作られ, 終わりで破棄される.</p>
    <p>変数が実行時に生成, 破棄されるため, これは言語の例外事項になっている. そのためブラウザによってはこれを効率的に処理できない. <code>catch</code> ハンドラを性能の肝になるループに置くと, 例外を補足した時に性能の問題が起こる.</p>
	  <p>可能なら, 例外処理はあまり通ることのないスクリプトの上のレベルに書いた方がいい. または, ある処理が許されるのかを前もってチェックする. 以下の例では, 期待したプロパティがない時にループは例外を投げる.</p>

<pre><code>var oProperties = [&#39;first&#39;,&#39;second&#39;,&#39;third&#39;,...,&#39;nth&#39;], i;
for( i = 0; i &lt; oProperties.length; i++ ) {
  try {
    test[oProperties[i]].someproperty = somevalue;
  } catch(e) {
    ...
  }
}</code></pre>

	  <p>多くの場合, <code>try-catch-finally</code> 構文はループを囲むように移動できる. コードの意味は少し変わる. 例外が起きると, コード自体の実行は続くもののループは中断してしまう.</p>

<pre><code>var oProperties = [&#39;first&#39;,&#39;second&#39;,&#39;third&#39;,...,&#39;nth&#39;], i;
try {
  for( i = 0; i &lt; oProperties.length; i++ ) {
    test[oProperties[i]].someproperty = somevalue;
  }
} catch(e) {
  ...
}</code></pre>

	  <p>場合によっては <code>try-catch-finally</code> 構文をすっかりなくすことができる. プロパティをチェックするなど, 適当なテストを使えばいい.</p>

<pre><code>var oProperties = [&#39;first&#39;,&#39;second&#39;,&#39;third&#39;,...,&#39;nth&#39;], i;
for( i = 0; i &lt; oProperties.length; i++ ) {
  if( test[oProperties[i]] ) {
    test[oProperties[i]].someproperty = somevalue;
  }
}</code></pre>

  <h3 id="isolate"><code>eval</code> と <code>with</code> は隔離しよう</h3>
    <p>これらの構文は性能への影響がとても大きいため, 利用は最小限に留めたい. とはいえどうしても使いたいことがあるかもしれない. 関数を何度も呼ぶ, あるいはループを回すときは, これらの構文を処理内に置かない方がいい. そういうコードは一度だけ実行されるか, せいせい数回に留めよう. 性能に響くコードの中には置かないこと.</p>
    <p>できるなら, こうした構文は他のコードから隔離しよう. そうすれば性能への影響はなくなる. たとえばトップレベル関数の中に置く. 一度だけ動かして結果を保存し, あとからその結果を使えば再実行はいらない.</p>
    <p>それほど重要ではないけれど, Opera を含むいくつかのブラウザでは <code>try-catch-finally</code> 構文が性能に響く. これらも同じような方法で隔離できるかもしれない.</p>

	<h3 id="avoidglobal">グローバル変数を使うのはやめよう</h3>
	  <p>グローバルなスコープに変数を作りたい誘惑はある. なにしろ楽だから. けれど, それはスクリプトを遅くする原因になる.</p>
	  <p>まず, 関数その他のスコープからそのグローバル変数を参照しようとすると, スクリプトエンジンはグローバル変数がみつかるまでスコープを順に上らないといけない. ローカルのスコープにある変数はもっとすぐみつかる.</p>
	  <p>グローバルのスコープにある変数はスクリプトの寿命と同じ間だけ残る. ローカルのスコープでは, そのスコープが消えた時に変数は破棄される. 使っていたメモリはガベージ・コレクタで解放される.</p>
	  <p>最後に, グローバルのスコープは <var>window</var> オブジェクトに共有される. つまり二つのスコープにまたがる. 一つだけではなくなってしまう. グローバルスコープの変数は常に名前で参照される. 事前計算で最適化されたインデックスではない. ローカルスコープにはインデックスが使われる. このように, スクリプトエンジンがグローバル変数をみつけるのには時間がかかる.</p>
		<p>関数もふつうグローバルスコープに作られる. つまり関数が他の関数を, その関数が更に他の関数を呼ぶと, スクリプトエンジンがグローバルスコープまで戻って関数をみつける回数は増えていく.</p>

    <p>次の単純な例では, i と s がグローバル変数だ. 関数がそのグローバル変数を使っている.</p>
<pre><code>var i, s = &#39;&#39;;
function testfunction() {
  for( i = 0; i &lt; 20; i++ ) {
    s += i;
  }
}
testfunction();</code></pre>
    <p>次の別バージョンは目にみえるほど速い. 大半の現行ブラウザ, Opera や 最新版の Internet Explorer, Firefox, Konqueror, Safari では 前のバージョンよりこの方が 30% 速い.</p>
<pre><code>function testfunction() {
  var i, s = &#39;&#39;;
  for( i = 0; i &lt; 20; i++ ) {
    s += i;
  }
}
testfunction();</code></pre>

	<h3 id="implicitconversion">暗黙のオブジェクト変換に気をつけよう</h3>
    <p>文字列, 数字, ブール値などのリテラルは, ECMAScript で二種類の表現方法がある. どれも値かオブジェクトとして作ることができる. たとえば, 文字列の値は単に <code>var oString = &#39;some content&#39;;</code> と作れる. 同じ文字列オブジェクトは <code>var oString = new String(&#39;some content&#39;);</code> となる.</p>
    <p>プロパティやメソッドはどれも文字列オブジェクトに定義される. 値にではない. 文字列値のプロパティやメソッドを参照すると, スクリプトエンジンはメソッドの実行前に値と等しい暗黙の文字列オブジェクトをつくる. このオブジェクトはその一回の要求でしか使われない. 次にその文字列値のメソッドを呼べば, またつくられる.</p>
    <p>次のサンプルでスクリプトエンジンは 21 個の文字列オブジェクトを新たにつくっている. <var>length</var> プロパティにアクセスする時と, <var>charAt</var> メソッドを呼ぶ時だ.</p>
<pre><code>var s = &#39;0123456789&#39;;
for( var i = 0; i &lt; s.length; i++ ) {
  s.charAt(i);
}</code></pre>
    <p>同じことにオブジェクトを使った例. この方が良い結果を得られる.</p>
<pre><code>var s = new String(&#39;0123456789&#39;);
for( var i = 0; i &lt; s.length; i++ ) {
  s.charAt(i);
}</code></pre>
    <p>もしコードの中でリテラル値のメソッドを何度も呼ぶなら, 前の例のようにかわりのオブジェクトに直すことを考えた方がいい.</p>
    <p>なお本記事のポイントはどのブラウザにも意味があるが, この高速化はもっぱら Opera で効き目がある. 他のブラウザでも効果はあるかもしれないけれど, Internet Explorer や Firefox では少し遅くなる.</p>

  <h3 id="forin">性能を決める関数で <code>for-in</code> を使うのはやめよう</h3>
    <p><code>for-in</code> にも使い道はあるものの, <code>for</code> を使うべき場面でよく誤って使われている. <code>for-in</code> で列挙をする前に, スクリプトエンジンは列挙可能なプロパティのリストを作って重複を弾かなければいけない.</p>
    <p>スクリプト側が列挙するプロパティを知っていることはよくある. こうしたプロパティをなめるならふつうの <code>for</code> 文が使える. 配列や, 配列風のプロパティを持つオブジェクト (DOM の NodeList など) のように, 連番の数字なら特にそうだ.</p>
    <p><code>for-in</code> 誤用の例を以下に示す:</p>
<pre><code>var oSum = 0;
for( var i in oArray ) {
  oSum += oArray[i];
}</code></pre>
    <p><code>for</code> を使う方が効率的になる:</p>
<pre><code>var oSum = 0;
var oLength = oArray.length;
for( var i = 0; i &lt; oLength; i++ ) {
  oSum += oArray[i];
}</code></pre>

	<h3 id="stringaccumulator">文字列は累積スタイルで使おう</h3>
    <p>文字列の結合は高くつくことがある. + 演算子は結果を代入するまで待ってくれない. メモリ上に新しく文字列がつくられ, そこに結果がセットされる. その文字列が変数に代入される. 次のコードはよくある連結文字列の代入だ:</p>
<pre><code>a += &#39;x&#39; + &#39;y&#39;;</code></pre>
    <p>このコードではまず一時文字列がメモリ上につくられ, そこに結合してできた &#39;xy&#39; という値がセットされる. それが <var>a</var> の現在の値と結合される. 結果は <var>a</var> に代入される. 以下のコードではコマンドを二つにわけた. 結果は毎回 a に直接代入されるため, 一時文字列は使われない. 結果のコードは多くの現行ブラウザで 20% 速い. 連結文字列を一時的に保存しないぶんメモリ消費も少ないかもしれない.</p>
<pre><code>a += &#39;x&#39;;
a += &#39;y&#39;;</code></pre>

	<h3 id="primitiveoperator">プリミティブの操作は関数呼び出しより速い</h3>
    <p>関数呼び出しを等価なプリミティブの操作に置き換えてみよう. ふつうのコードでは効き目が薄いけれど, 性能の肝になるループや関数では高速化できることがある. 例の一つは配列の <var>push</var> メソッド. これは配列の最後を指す添字に要素を追加するより遅い. 別の例は <var>Math</var> オブジェクトのメソッド. 大半のケースでは単純な算術操作の方が適している.</p>
<pre><code>var min = Math.min(a,b);
A.push(v);</code></pre>
<p>上と同じことをする別の書き方. 性能はこの方がいい：</p>
<pre><code>var min = a &lt; b ? a : b;
A[A.length] = v;</code></pre>

	<h3 id="timeouts"><code>setTimeout()</code> や <code>setInterval()</code> には文字列でなく関数を渡そう</h3>
    <p><code>setTimeout()</code> や <code>setInterval()</code> メソッドは <code>eval</code> と近い関係にある. 文字列を渡すと, 指定した経過時間のあとに文字列は <code>eval</code> とまったく同じ方法で評価される. 性能への影響も同じだ.</p>
   	<p>しかし, これらの関数は第一引数に文字列でなく関数を渡せる. この関数は同じ経過時間のあとで実行される. ただし解釈と最適化はコンパイル時にできる. 結果として性能も優れている. 文字列をパラメタにする典型例を示す:</p>
<pre><code>setInterval(&#39;updateResults()&#39;,1000);
setTimeout(&#39;x+=3;prepareResult();if(!hasCancelled){runmore();}&#39;,500);</code></pre>
   	<p>最初の例では関数を直接参照すればいい. 二番目の例は匿名関数でコードをラップできる.</p>
<pre><code>setInterval(updateResults,1000);
setTimeout(function () {
  x += 3;
  prepareResult();
  if( !hasCancelled ) {
    runmore();
  }
},500);</code></pre>

    <p>なお, いずれの場合も timeout や interval の時間がきちんと守られることはない. 一般に, ブラウザは指定した時間より少し長い時間をかける. 次回呼び出しの間隔を少し早めれば済むこともある. 正しい時間が来るまで毎回ただ待ってみる手もある. CPU の速度, スレッドの状態, JavaScript のロードといった要素が時間の精度に影響する. 0 ミリ秒 という時間を実現できるブラウザはほとんどない. 最小の時間, 普通は 10 から 100 ミリ秒はかかる.</p>

&lt;page&gt;

<h2>DOM</h2>

<p>概観として, DOM が遅くなる原因は主に 3 つある. 1 つ目はスクリプトが大量の DOM 操作をしたとき. 取得したデータから新しいツリーを作るとか. 2 つ目はスクリプトが再フローや再描画を頻繁に起こしすぎたとき. 3 つ目はスクリプトが DOM ツリーのノードを探す遅い方法を使った時.</p>

<p>一番よくあるのは 2 つ目と 3 つ目で, 同時に最も影響が大きい. だからまずその話をしよう.</p>

<h3 id="reflow">再描画と再フロー</h3>

<p>再描画は, これまで見えなかったものが見えるように (またはその逆に) なるとおきる. これは文書のレイアウトが変わらなくてもおこる. ある要素に外枠の線を追加したとき, 背景色を変えたとき, visibility のスタイルを変えたときなどだ. 再描画は性能の点で高くつく. エンジンは全ての要素の中から, 可視なもの, 表示すべきものを探さないといけない.</p>

<p>再フローはもっと目立つ変更だ. これは DOM ツリーを操作したとき, レイアウトに関係するスタイルを変更した時, 要素の <var>className</var> プロパティを変更したとき, ブラウザのウィンドウの大きさを変更した時におこる. こうなるとエンジンは関係する要素をフローしなおし, 様々なパーツを表示すべき場所にやらなければいけない. 各要素の子も, 親要素の新しいレイアウトを踏まえてフローしなおすことになる. DOM 上で各要素の後にある要素も新しいレイアウトでフローしなおす. これは初回のフローと同じように起こる. 上流の要素もフローしなおす. 子のサイズ変更を反映するからだ. 最後には全体の再描画がおこる.</p>

<p>再フローは性能の点から見てとても重い. そして DOM スクリプトを重くする主な原因の一つだ. 特にケータイにように遅い計算能力の機器では厳しい. 多くの場面で, 再フローはページ全体をレイアウトしなおすのと同じようなことになる.</p>

<h4 id="minimumreflow">再フローの回数をできるだけ減らそう</h4>

<p>スクリプトが再描画や再フローにつながる操作の必要に迫られることは多い. アニメーションは根本から再フローだ. しかも引き続き望まれている. このように再フローはウェブ開発の肝の一つになっている. スクリプトを高速化するには, 同じ効果の得られる最小限に再フローを留める必要がある.</p>

<p>ブラウザは再フローをする前にスクリプトのスレッドが終わるのを待つことがある. Opera は十分な変更が起こるか十分な時間が経つまで待つし, スレッドの終わりに来るまで待つこともある. したがって, 同じスレッド内で十分に素早く変更を済ませれば, 再フローは一回だけ起きて済むかもしれない. ただし, この挙動に依存することはできない. 特に Opera の動作している異なる速度の機器を考慮すると無理がある.</p>

<h4 id="minimalreflow">再フローの範囲をできるだけ小さくしよう</h4>

<p>通常の再フローは文書全体に影響する. 再フローする文書が多ければ, それだけ時間もかかる. <var>absolute</var> か <var>fixed</var> で位置指定された要素は, 文書本体のレイアウトに影響しない. それらの要素を再フローする時は, それらだけを再フローすれば済む. その背後にある文書は変更を反映すべく再描画の必要があるものの, 全体の再フローと比べてば微々たる問題と言える.</p>

<p>こうした事情から, 文書全体に適用しないアニメーションは位置指定した要素にのみ用いるといい. 結局のところ大半のアニメーションはこれで十分だ.</p>

<h3 id="modifyingtree">文書ツリーの変更</h3>

<p>文書ツリーの変更は, まず再フローにつながる. DOM に新しい要素を追加する, テキストノードの値を変える. 様々な属性の値を変える. これらはみな再フローを起こすのに十分だ. 複数の変更を順番に行うのは一回以上の再フローを起こすことがある. そこで一般に, 複数の変更は表示していない DOM ツリーのフラグメントに行うのが最善となる. 変更はそのあと実行中の文書の DOM に一回の操作で行う.</p>

<pre><code>var docFragm = document.createDocumentFragment();
var elem, contents;
for( var i = 0; i &lt; textlist.length; i++ ) {
  elem = document.createElement(&#39;p&#39;);
  contents = document.createTextNode(textlist[i]);
  elem.appendChild(contents);
  docFragm.appendChild(elem);
}
document.body.appendChild(docFragm);</code></pre>

<p>文書ツリーの変更を要素の複製に対して行おう. 次に変更が終わったら本物の要素と交換する. 再フローは一回になる. なお要素が form のコントロールを含む時にはこの方法を使わないこと. ユーザが行った値の変更が DOM ツリーに反映されない. 要素やその子につけたイベントハンドラに依存しているときもこの方法をとるべきでない. イベントハンドラは複製できないことになっている.</p>

<pre><code>var original = document.getElementById(&#39;container&#39;);
var cloned = original.cloneNode(true);
cloned.setAttribute(&#39;width&#39;,&#39;50%&#39;);
var elem, contents;
for( var i = 0; i &lt; textlist.length; i++ ) {
  elem = document.createElement(&#39;p&#39;);
  contents = document.createTextNode(textlist[i]);
  elem.appendChild(contents);
  cloned.appendChild(elem);
}
original.parentNode.replaceChild(cloned,original);</code></pre>

<h3 id="invisibleelement">不可視な要素を変更しよう</h3>

<p>要素の <var>display</var> スタイルが <var>none</var> なら, その要素は再描画の必要がない. その中味を変更したところで表示はされないからだ. これを活かしてみよう. 複数の変更を要素やその中味に行うなら, そしてこの変更を一回の再描画にまとめられないなら, 要素に <code>display:none</code> をセットする. 変更をして, そのあと元の <var>display</var> に戻す.</p>

<p>これは再フローが二回余計に起こる. 一度は隠したとき, もう一度は再表示したときだ. それでも全体では速くなることがある. 要素がスクロールのオフセットに関係しているなら, 意図しないスクロールバーのジャンプが起こるかもしれない. ただ, 位置指定された要素に使うなら変な作用もなく簡単にできる.</p>

<pre><code>var posElem = document.getElementById(&#39;animation&#39;);
posElem.style.display = &#39;none&#39;;
posElem.appendChild(newNodes);
posElem.style.width = &#39;10em&#39;;
... other changes ...
posElem.style.display = &#39;block&#39;;</code></pre>

<h3 id="measuring">測りごとの罠</h3>

<p>既に述べたとおり, ブラウザは複数の変更をキャッシュしてくれるかもしれない. 全ての変更が終わったら一回だけ再フローをする. ただし, 要素の距離などを測ると再フローを強制してしまうのには気をつける必要がある. 再フローをしないと, 値が正しく求められないのだ. 変更は再描画で見えることもあるし見えないこともある. しかし再フロー自体は裏で起きている.</p>

<p>この測定効果は <var>offsetWidth</var> のようなプロパティを使ったり <var>getComputedStyle</var> のようなメソッドを呼ぶと起こる. 数字を使っていなくても, ブラウザが変更をキャッシュしている時にこれらを使えば効果がある. 隠れ再フローを起こすのには十分だ. 測定を繰り返し行うなら, 測るのは一度だけにして結果を保存し, 後で使いまわすことを考えるべきだろう.</p>

<pre><code>var posElem = document.getElementById(&#39;animation&#39;);
var calcWidth = posElem.offsetWidth;
posElem.style.fontSize = ( calcWidth / 10 ) + &#39;px&#39;;
posElem.firstChild.style.marginLeft = ( calcWidth / 20 ) + &#39;px&#39;;
posElem.style.left = ( ( -1 * calcWidth ) / 2 ) + &#39;px&#39;;
... その他の変更 ...</code></pre>

<h3 id="stylechanges">M複数回のスタイル変更は一回にまとめよう</h3>

<p>DOM ツリーの変更と同様, 関連のある複数のスタイル変更もいっぺんに行うことができる. そうすることで再描画や再フローの数を最小化できる. 一度に複数のスタイルをセットする時, よくやる方法はこうだ:</p>

<pre><code>var toChange = document.getElementById(&#39;mainelement&#39;);
toChange.style.background = &#39;#333&#39;;
toChange.style.color = &#39;#fff&#39;;
toChange.style.border = &#39;1px solid #00f&#39;;</code></pre>

<p>この方法だと複数の再フローと再描画が起こりうる. 改善するやりかたは二通りある. もしある要素が複数のスタイルを受け付けるなら, かつその値が事前にすべて判っているなら, 要素の class を変更すればいい. こうすると, まるごとその class で定義した新しいスタイルに差しかわる.</p>

<pre><code>div {
  background: #ddd;
  color: #000;
  border: 1px solid #000;
}
div.highlight {
  background: #333;
  color: #fff;
  border: 1px solid #00f;
}
...
document.getElementById(&#39;mainelement&#39;).className = &#39;highlight&#39;;</code></pre>

<p>二つ目は, 要素に style 属性を定義するやりかただ. スタイルを一つずつ適用はしない. この方法を一番よく使うのはアニメーションのような動的な変更だ. アニメーションなどでは, 新しいスタイルの値が前もってわからない. これは <var>style</var> オブジェクトの <var>cssText</var> プロパティを使ってもいいし, <var>setAttribute</var> を使ってもいい. Internet Explorer では後者を使えない. 最初の方を使うこと. Opera8 を含む古いブラウザによっては後者を使う必要がある. 前者は動かない. ベタにやるならまずバージョンからサポートの有無をチェックする. 使えれば前者を使い, 駄目なら後者に逃げればいい.</p>

<pre><code>var posElem = document.getElementById(&#39;animation&#39;);
var newStyle = &#39;background: &#39; + newBack + &#39;;&#39; +
  &#39;color: &#39; + newColor + &#39;;&#39; +
  &#39;border: &#39; + newBorder + &#39;;&#39;;
if( typeof( posElem.style.cssText ) != &#39;undefined&#39; ) {
  posElem.style.cssText = newStyle;
} else {
  posElem.setAttribute(&#39;style&#39;,newStyle);
}</code></pre>

<h3 id="smoothspeed">なめらかさと速度にはトレードオフがある</h3>

<p>開発者からすると, アニメーションはできだけスムーズにしたい. タイムアウトの間隔を狭め, 変更を小さくする. たとえばアニメーションでの動作を 10 ミリ秒の間隔で行い, 移動は毎度 1 ピクセルにしたい. アニメーションはこの速さでちゃんと動くかもしれない. PC やブラウザによる. しかし 10 ミリ秒はブラウザにできる最小の間隔だ. 今時の PC なら CPU は 100% まで振り切らない. ブラウザによっては上手く扱えないこともある ... 毎秒 100 回の再フロー要求は大半のブラウザにってかなりの量だ. 性能の低い計算機や機器のブラウザだと, この速度で動くことはできないだろう. アニメーションは遅くなり, 反応も悪くなる.</p>

<p>開発者の名誉を汲めば, アニメーションのなめらかさと引き換えに速度が手に入る. 間隔を 50 ミリ秒にして, アニメーション幅を 5 ピクセルにしてみよう. 計算能力が少しで済み, 性能の低いマシンでも速いアニメーションになるだろう.</p>

<h3 id="manynodes">大量のノードを覗くのはやめよう</h3>

<p>特定の単一ノードや複数ノートを特定するときは, 組込みメソッドや DOM のコレクションを使ってできるだけ探索するノードの数を絞り込もう. たとえば特定の属性を持つノードを探しているとき, こんな風に書いていないだろうか:</p>

<pre><code>var allElements = document.getElementsByTagName(&#39;*&#39;);
for( var i = 0; i &lt; allElements.length; i++ ) {
  if( allElements[i].hasAttribute(&#39;someattr&#39;) ) {
    ...
  }
}</code></pre>

<p>XPath のように高度な技術を使っていない点を見逃してもなお, この例には二つ問題がある. まず全ての要素を検索している. 検索範囲をまったく狭めていない. 二つ目は, 欲しい要素が見つかったあとも検索を続けている. 例として, 探している要素が <var>inhere</var> という id を持つ div の中にあるとしよう. コードはずっとよくできる.</p>

<pre><code>var allElements = document.getElementById(&#39;inhere&#39;).getElementsByTagName(&#39;*&#39;);
for( var i = 0; i &lt; allElements.length; i++ ) {
  if( allElements[i].hasAttribute(&#39;someattr&#39;) ) {
    ...
    break;
  }
}</code></pre>

<p>もし探すノードが div の直下の子だとわかっているなら, この方法はもっと良くなる. div の個数と <var>childNodes</var> コレクションの length によるけれど.</p>

<pre><code>var allChildren = document.getElementById(&#39;inhere&#39;).childNodes;
for( var i = 0; i &lt; allChildren.length; i++ ) {
  if( allChildren[i].nodeType == 1 &amp;&amp; allChildren[i].hasAttribute(&#39;someattr&#39;) ) {
    ...
    break;
  }
}</code></pre>

<p>基本として DOM の要素を手動で辿るのはなるべくやめるべく気をつかおう. DOM は様々の場面で代替手段を多く用意している. DOM2 の Traversal TreeWalker を使えば, <var>childNodes</var> コレクションを 再帰で辿らずにすむなど.</p>

<h3 id="xpath">XPath で速度を稼ごう</h3>

<p>単純な例として, HTML の文書内に目次をつくる作業を考える. H2 から H4 を元にする. HTML では, これらの要素は様々な場所に現れる. ちゃんとした階層構造はない. したがって再帰関数を使い正しい順序で要素を取り出すことができない. 従来の DOM を使う方法はこんな風になるだろう:</p>

<pre><code>var allElements = document.getElementsByTagName(&#39;*&#39;);
for( var i = 0; i &lt; allElements.length; i++ ) {
  if( allElements[i].tagName.match(/^h[2-4]$/i) ) {
    ...
  }
}</code></pre>

<p>2000 個の要素を含むような文書では, これは深刻な遅延をおこす. 個々の要素を別々に調べるからだ. XPath がネイティブで動くなら, それを使うとずっと高速になる. XPath の問合せエンジンは JavaScript で処理するより効率的になるよう最適化されている. 場合によっては二桁速い. 次の例は従来の方法を使う例と等価だが, XPath を使って速度を改善している.</p>

<pre><code>var headings = document.evaluate( &#39;//h2|//h3|//h4&#39;, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );
var oneheading;
while( oneheading = headings.iterateNext() ) {
  ...
}</code></pre>

<p>次は両方の例を合わせたバージョン. XPath があれば使い, なければ従来の DOM になる.</p>

<pre><code>if( document.evaluate ) {
  var headings = document.evaluate( &#39;//h2|//h3|//h4&#39;, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );
  var oneheading;
  while( oneheading = headings.iterateNext() ) {
    ...
  }
} else {
  var allElements = document.getElementsByTagName(&#39;*&#39;);
  for( var i = 0; i &lt; allElements.length; i++ ) {
    if( allElements[i].tagName.match(/^h[2-4]$/i) ) {
      ...
    }
  }
}</code></pre>

<h3 id="traversemodify">DOM を辿りながら書き換えるのはやめよう</h3>

<p>ある種の DOM コレクションは生きている. つまりスクリプトがそのコレクションを見ながら関係のある要素を変更すると, コレクションはスクリプトの終わりを待たずに変化する. これには <var>childNodes</var> コレクションが該当する. <var>getElementsByTagName</var> の戻り値もそう.</p>

<p>スクリプトがこれらのコレクションでループをして, 同時にその要素を追加したら, ここには無限ループの危険がある. スクリプトは終端に至る手前で要素を追加しつづけてしまう. 問題はこれだけではない. これらのコレクションは性能のため最適化されている. 自分の長さを覚えているし, 最後に参照された添字も覚えている. そうすれば添字をインクリメントしてアクセスした時, すぐに次のノードを参照できる.</p>

<p>DOM ツリーを変更すると, その変更が先のコレクションを含まなくても, そのコレクションは新規エントリがないか再確認しなければいけない. そうなると最後の添字や長さは覚えておけず, まるで変更されたかのように最適化はどこかに行ってしまう:</p>

<pre><code>var allPara = document.getElementsByTagName(&#39;p&#39;);
for( var i = 0; i &lt; allPara.length; i++ ) {
  allPara[i].appendChild(document.createTextNode(i));
}</code></pre>

<p>次の等価なコードは Opera や Internet Explorer のような最近のブラウザだと 10 倍速い. まず変更する要素の静的なリストをつくり, 次にそのリストを辿りながら変更を加えている. <var>getElementsByTagName</var> の返すノードのリストは辿らない.</p>

<pre><code>var allPara = document.getElementsByTagName(&#39;p&#39;);
var collectTemp = [];
for( var i = 0; i &lt; allPara.length; i++ ) {
  collectTemp[collectTemp.length] = allPara[i];
}
for( i = 0; i &lt; collectTemp.length; i++ ) {
  collectTemp[i].appendChild(document.createTextNode(i));
}
collectTemp = null;</code></pre>

<h3 id="cachevalues">DOM の値はスクリプトの変数にキャッシュしよう</h3>

<p>DOM の値のうちいくつかはキャッシュが利かない. 呼び出しの度に再確認される. 例として <var>getElementById</var> がある. 次のコードは無駄が多い.</p>

<pre><code>document.getElementById(&#39;test&#39;).property1 = &#39;value1&#39;;
document.getElementById(&#39;test&#39;).property2 = &#39;value2&#39;;
document.getElementById(&#39;test&#39;).property3 = &#39;value3&#39;;
document.getElementById(&#39;test&#39;).property4 = &#39;value4&#39;;</code></pre>

<p>このコードでは同じオブジェクトをみつけるのに 4 回リクエストを出している. 次のコードはリクエストを一回して値を保存する. ここまでの速度は同じか, 代入のぶん少し遅い. しかし続く回ではキャッシュした値を使う. そのため上と等価なコードでありながら, 最近のブラウザで処理が 5 - 10 倍速い.</p>

<pre><code>var sample = document.getElementById(&#39;test&#39;);
sample.property1 = &#39;value1&#39;;
sample.property2 = &#39;value2&#39;;
sample.property3 = &#39;value3&#39;;
sample.property4 = &#39;value4&#39;;</code></pre>

&lt;page&gt;

<h2>文書のロード</h2>

		<h3 id="docreferences">ある文書から他の文書への参照を生かしておくのはやめよう</h3>
	  <p>ある文書が他の文書にあるノードやオブジェクトにアクセスするとき, スクリプトで使い終わった参照を持ちつづけるのはやめよう. 参照を今の文書のグローバル変数や長寿なオブジェクトのプロパティに保存したなら, null をセットするなり削除するなりしてクリアしよう.</p>
 
    <p>理由はこうだ. ある外部文書を破棄したとき, たとえばウィンドウをポップアップしてからそのウィンドウを閉じたら, その文書に由来するオブジェクトへの参照があると DOM ツリー全体とスクリプト環境が RAM に留まってしまう. 文書自体はもうロードされていないのに. 同じことはページ内のフレーム, インラインフレーム, OBJECT 要素についても言える.</p>

<pre><code>var remoteDoc = parent.frames[&#39;sideframe&#39;].document;
var remoteContainer = remoteDoc.getElementById(&#39;content&#39;);
var newPara = remoteDoc.createElement(&#39;p&#39;);
newPara.appendChild(remoteDoc.createTextNode(&#39;new content&#39;));
remoteContainer.appendChild(newPara);
//remove references
remoteDoc = null;
remoteContainer = null;
newPara = null;</code></pre>


    <h3 id="fasthistory">高速な履歴移動を使おう</h3>
    <p>Opera (や他のブラウザの多く) はデフォルトで高速な履歴移動を使う. ユーザがブラウザの履歴を進んだり戻ったりするとき, ページやスクリプトの状態は保存されている. ユーザがページに戻ってくると, ページから出たことなどなかったかのように話が進む. 文書は再読み込みも再初期化もされない. スクリプトは動きつづけているし, DOM はページを出た時のままだ. おかげでユーザの体感は高速になる. 読み込みの遅いウェブアプリケーションも 履歴の移動中はましになる.</p>
    <p>Opera だとページ作者は<a href="http://www.opera.com/support/search/supsearch.dml?index=827">この挙動を制御できる</a>けれど, できるなら高速履歴移動モードを使う方がいい. だからスクリプトもできるだけこの挙動を邪魔しないようにしたい. 邪魔になるものには, 投稿後にフォームのコントールを無効化する, クリックしたメニューの作用を止める, ページ退出時に中味を見えなくるフェードアウト効果などが ある.</p>
    <p>onunload リスナでフェード効果を消したりフォームのコントロールを有効にすればいいのなら, 話は簡単だった. しかし Firefox や Safari など一部のブラウザでは <var>unload</var> イベントにリスナをつけると 高速履歴移動が無効になってしまう. それに, submit ボタンの無効化をするだけで Opera の高速履歴移動を止めるには十分だったりする.</p>
<pre><code>window.onunload = function () {
  document.body.style.opacity = &#39;1&#39;;
};</code></pre>

    <h3 id="xmlhttprequest">XMLHttpRequest を使おう</h3>
    <p>この方法はどんなプロジェクトにも効くわけではない. しかしサーバから取得するコンテンツの量を減らす楽な方法にはなりうる. それにページを読み込み間でのスクリプト環境破棄や再構築という, 重い作業を避けることにもなる. まず最初は普通にページをロードすればいい. それ以降のロードでは XMLHttpRequest を使って最小限のコンテンツをロードする. こうすればスクリプト環境を生かしておくこともできる.</p>
    <p>そうは言うものの, このアプローチにも問題はある. まず履歴移動は完全に破綻する. インラインフレームに情報を持たせてごまかすことはできるけれど, この問題は XMLHttpRequest を第一線で使う邪魔になる. だから使うのはほどほどにしておこう. 前のコンテンツに戻る必要がない時にだけ役に立つ.</p>
    <p>JavaScript が使えないときや, XMLHttpRequest がサポートされていない時にも困る. 問題を回避するいちばん簡単な方法は, ふつうのリンクを使うことだ. リンクは新しいページを指す. リンクにはイベントハンドラを設定して, リンクの動作を検出する. ハンドラでは XMLHttpRequest のサポートをチェックして, サポートありならリンクのデフォルト動作を止めつつデータをロードする. データがロードされたらそのコンテンツでページを置き換える. リクエストオブジェクトは破棄して, ガベージコレクタが回収できるようにしよう.</p>

<pre><code>document.getElementById(&#39;nextlink&#39;).onclick = function () {
  if( !window.XMLHttpRequest ) { return true; }
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if( request.readyState != 4 ) { return; }
    var useResponse = request.responseText.replace( /^[\w\W]*&lt;div id=&quot;container&quot;&gt;|&lt;\/div&gt;\s*&lt;\/body&gt;[\w\W]*$/g , &#39;&#39; );
    document.getElementById(&#39;container&#39;).innerHTML = useResponse;
    request.onreadystatechange = null;
    request = null;
  };
  request.open( &#39;GET&#39;, this.href, true );
  request.send(null);
  return false;
}</code></pre>

    <h3 id="dynamicscript">SCRIPT 要素を動的に作ろう</h3>
    <p>スクリプトをロードして処理するには時間がかかる. にもかかわらず, スクリプトによってはロードされたのに使われないことがある. そんなスクリプトは時間と資源の無駄にしかならない. 本体のスクリプトが動くのを妨げるだけだ. 使わないスクリプトは一切ロードしない方がいい.</p>
    <p>理屈の上では, 追加のスクリプトは SCRIPT 要素を作って DOM で文書に追加すればロードできる. これは現行バージョンの全ての主要ブラウザで動く. ただロードするスクリプトよりロード処理の方が重くなってしまうかもしれない. 更に, 追加スクリプトはページのロードが終わる前に必要かもしれない. だから最良の手はページのロード状況をチェックし, <code>document.write</code> で script タグを 作る方法だ. スクリプトを途中で閉じないよう, スラッシュをエスケープするのだけは忘れずに.</p>
<pre><code>if( document.createElement &amp;&amp; document.childNodes ) {
  document.write(&#39;&lt;script type=&quot;text\/javascript&quot; src=&quot;dom.js&quot;&gt;&lt;\/script&gt;&#39;);
}
if( window.XMLHttpRequest ) {
  document.write(&#39;&lt;script type=&quot;text\/javascript&quot; src=&quot;xhr.js&quot;&gt;&lt;\/script&gt;&#39;);
}</code></pre>

    <h3 id="locationnreplace"><code>location.replace()</code> で履歴を抑えよう</h3>
    <p>たまにページのアドレスをスクリプトから変更したいことがある. よくやるのは <code>location.href</code> に新しいアドレスを代入する方法. この方法だと履歴にエントリが追加され, 新しいページをロードする. ふつうのリンクをたどったのと同じようになる.</p>
    <p>履歴の追加が望ましくないこともある. ユーザが前のページに戻る必要の無い時などだ. 特に使用メモリが限られている場合は重宝する. 履歴を置き換えれば, 現在のページで使われているメモリは復活する. (訳注: 履歴に入らない.) そうするには <code>location.replace()</code> メソッドを使えばいい.</p>
<pre><code>location.replace(&#39;newpage.html&#39;);</code></pre>
    <p>なお, キャッシュにはページが残る. メモリを使うかもしれない. それでも履歴に保持しておくより多いということはない.</p></p>
