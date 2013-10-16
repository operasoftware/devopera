Title: Web 標準のモデル — HTML, CSS, JavaScript
----
Date: 2009-11-05 09:30:52
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

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/3-how-does-the-internet-work-ja/">前の記事: インターネットのしくみ</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/5-web-standards-beautiful-dream-bu-ja/">次の記事: Web 標準 ― すばらしき夢、でも現実は？</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/#toc">カリキュラムの目次へ</a></li>
</ul>

<h2>はじめに</h2>
<p>前の記事で、Web の基本的な構成要素に HTML (XHTML), CSS, JavaScript があることを簡単に説明しました。今回はより深く、各技術がいったい何をするものなのか、また Web サイトを作る際にそれぞれの技術がどう関わりあうのかを見ていきましょう。目次は次のとおりです。</p>

<ul>
<li><a href="#whyseparate">どうして分ける必要があるの？</a></li>

<li><a href="#markup">マークアップはすべての基礎</a>
<ul><li><a href="#xhtml">XHTML ってなに？</a></li>
<li><a href="#validation">検証 (Validation) とは？</a></li></ul>
</li>

<li><a href="#css">CSS—スタイルを与えよう</a></li>

<li><a href="#javascript">JavaScript—Web ページに動きを与えよう</a></li>

<li><a href="#example">例</a>
<ul><li><a href="#index">index.html</a></li>
<li><a href="#styles">styles.css</a></li></ul>
</li>

<li><a href="#summary">まとめ</a></li>

<li><a href="#exercises">練習問題</a></li>

</ul>

<h2 id="whyseparate">どうして分ける必要があるの？</h2>
<p>Web 標準に関する質問の中で、はじめに出てくるのがこれになります。確かに、ページの内容を記述し、スタイルをつけ、レイアウトすることはすべて HTML で行えます。フォント要素で文字を飾ることはできますし、テーブルでレイアウトもできます。では、一体全体なぜ XHTML/CSS といったものに手を焼かなければならないのでしょうか？</p>

<p>レイアウト用にテーブルを用いるやり方は、Web デザインの歴史においてすでに主流ではなく、また悪手とされています。それにもかかわらず、未だ多くの人がその悪いやりかたで Web デザインを行っているのです。このコースを作ったのも、そのような問題があったからです。ですからもちろん、このコースでそのような悪いやり方を教えることはありません。</p>

<p>では、CSS と HTML を利用することが優れている理由を挙げてみましょう。</p>
<ol>
<li><strong>コードの効率</strong>: ファイルが大きくなればなるほど、ダウンロードには時間がかかるようになります。結果として、従量課金の仕組みを利用するような人に対して余計なコストを払わせることになります。すべての HTML ファイルにスタイル情報やレイアウト情報をありったけ詰め込んで、帯域を無駄にすることはありません。それよりも HTML からスタイル情報やレイアウト情報を削ぎ落とし、ひとつの CSS ファイルにまとめることが優れています。実際のケースがどのように動いているかは、A List Apart に掲載された記事 <a href="http://www.alistapart.com/articles/slashdot/" hreflang="en"> “Retooling Slashdot with Web Standards”</a> をご覧ください。この記事では、著者が Slashdot というとても有名なサイトを XHTML/CSS で書き直したことについてまとめられています。</li>
<li><strong>管理のしやすさ</strong>: 前の項目に関連しますが、スタイルやレイアウト情報が一箇所にまとまっていれば、サイトの見た目を変更したい際にその一箇所を更新するだけで済むようになります。見た目を変更するために、サイト内の全てのページを更新したいですか？私はそう思いません。</li>
<li><strong>アクセシビリティ</strong>: 視覚障害者が Web を利用するとき、「スクリーンリーダー」という、ページ内の情報を読み上げるソフトウェアを利用し、音を聞いて情報にアクセスします。また、運動障害者は利用する音声入力ソフトウェアを利用し、情報にアクセスします。スクリーンリーダーの利用者がキーボードから見出しやリンク、フォームを辿るのと同じように、音声入力ソフトの利用者は音声によって情報を辿ります。このとき、見た目を前提とした文書よりも意味的にマークアップされた文書のほうが、情報を辿るのは楽になり、また、情報も発見されやすくなります。端的にいうと、「(内容に) たどりつくこと」は、早ければ早いに越したことがないのです。スクリーンリーダーは、画像で表されたテキストを読むことはできませんし、JavaScript をうまく理解できないこともあります。ですから、重要な内容は誰に対しても伝わるようにしましょう。</li>
<li><strong>デバイスの互換性</strong>: XHTML 文書自体は簡素なマークアップで、スタイル情報がありません。ですから、代替スタイルシートを適用させることで、異なる性質 (画面サイズの違いなど) を持つ別のデバイス向けにページを再構成することも可能です (これについては、<a href="http://dev.opera.com/mobile/">dev.opera.com のモバイルに関する記事</a> をご覧ください)。CSS では異なる媒体型や表示方法にあわせて異なるスタイルシートを適用させることも可能です (例: 画面越しに見る、印刷してみる、モバイル端末で見る)。</li>
<li><strong>Web クローラー / 検索エンジン</strong>: Google や他の検索エンジンにおいて、あなたのページが上位に来る可能性が高まります。検索エンジンは「クローラー」と呼ばれる特殊なソフトウェアを利用し、あなたのページを読みに来ます。クローラーがあなたのページの内容を読むことができなかったり、見出しが見出しとして定義されてないなどの理由で情報を読み違えたりすると、検索エンジンにおける順位は低いものになってしまうでしょう。</li>
<li><strong>よい慣習</strong>: これは「そう言われているから」といった話になるのですが、Web 標準を理解しているプロの開発者やデザイナーに聞いてみてください。みんな内容、スタイル、挙動を分割することが、アプリケーションを開発する一番のやり方だと言うと思います。</li>
</ol>

<h2 id="markup">マークアップはすべての基礎</h2>

<p>HTML や XHTML は、要素と属性 (必須なものや任意のもの) から構成されるマークアップ言語です。これらの要素は文書内のさまざまな箇所をマークアップし、それらがどのようにレンダリングされるかを示します。内容にはたとえば、見出しや段落、表、リストなどがあります。</p>

<p>あなたの予想通り、要素は内容の型を定義します。一方で属性は、要素を示すIDや、リンクが参照する場所など要素に対して付加的な情報を定義します。

マークアップは可能な限り意味的であることが求められることを、心にとどめておきましょう。意味的とは、内容がどのような機能を持っているかを可能な限り正しく説明することと考えてください。図1 は (X)HTML の要素の構造になります。</p>

<img alt="基本的な HTML の要素" src="http://forum-test.oslo.osa/kirby/content/articles/312-4-web-html-css-javascript/article4_1.png" />

<p class="comment">図 1: (X)HTML の要素の構造 <a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/figure1_longdesc.html" style="font-size:85%;">図1 の解説を読む</a></p>

<p>では、HTML と XHTML の違いは一体どこにあるのでしょうか。</p>

<h3 id="xhtml">XHTML とは？</h3>

<p>XHTML の “X” は “extensible”(拡張可能) という意味です。最も多く寄せられる質問のひとつに「HTML と XHTML のどちらを使うべきなの？違いは？」というものがあります。これらふたつのフォーマットはほぼ同じ役割を担いますが、もっとも大きな違いはその構造にあります。表 1 を見てください。</p>

<table>
<tr>
  <th>HTML</th>
  <th>XHTML</th>
</tr>
<tr>
  <td> 要素名と属性名は大文字と小文字を区別しません。<code>&lt;h1&gt;</code> と <code>&lt;H1&gt;</code> は同じ要素として扱われます。</td>
  <td> 要素名と属性名は大文字と小文字を区別します。要素はすべて小文字で表記されます。</td>
</tr>
<tr>
  <td> <code>&lt;p&gt;</code> などいくつかの要素については、終了タグを書く必要がありません。また、<code>&lt;img&gt;</code> などの要素は終了タグを書くことが禁止されています。</td>
  <td><p>すべての要素は明示的に終了タグを書くする必要があります (例: <code>&lt;p&gt;A paragraph&lt;/p&gt;</code>)。ただし、内容を持たない要素については、開始タグにスラッシュを記述することで、要素を終了することができます (例: <code>&lt;hr&gt;&lt;/hr&gt;</code> と <code>&lt;hr/&gt;</code> は同じことを表します)。</p>

<p>XHTML を <code>text/html</code> で送出する場合、<a href="http://www.cs.tut.fi/~jkorpela/html/empty.html#html" hreflang="en">内容が「空」として定義された要素</a>については短縮構文を利用し、さらにスラッシュの前にスペースを書くべきです。開始タグと終了タグを記述する書き方は、空として定義されていない要素すべてに使いましょう。これは、たとえその要素が内容を持っていなかったとしてもです。</p></td></tr>
<tr>
  <td> 属性値によっては、引用符で囲む必要がありません。</td>
  <td> すべての属性値を引用符で囲む必要があります。</td>
</tr>
<tr>
  <td> いくつかの属性について、短縮表記を利用することができます (例: <code>&lt;option selected&gt;</code>)。</td>
  <td> すべての属性は、完全な形で記述される必要があります (例: <code>&lt;option selected=&quot;selected&quot;&gt;</code>)。</td>
</tr>
<tr>
  <td>サーバーは HTML を <code>text/html</code> という内容型 (media type) でクライアントに提供すべきです。</td>
  <td>XHTML は <code>application/xhtml+xml</code> 内容型を使うべきですが、<code>application/xml</code>, <code>text/xml</code>, <code>text/html</code> も利用することができます。ただし、<code>text/html</code> を利用する際には <a href="http://msugai.fc2web.com/web/W3C/xhtml1SE/guidelines.html">HTML 互換性ガイドライン</a> に従うべきです。これは、ブラウザーが <code>text/html</code> な文書を HTML と扱うためです (また、ブラウザーは言語の違いを吸収するためにエラー回復を行います)。</td>
</tr>
</table>
<p class="comment">表 1: HTML と XHTML の違い </p>

<p>現時点では、HTML なのか XHTML かといった違いにそこまで悩まなくても結構です。このコースで提供されるアドバイスに従い、HTML の文書型 (<a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/" hreflang="en">14 番の記事をご覧ください</a>) を利用すれば、大きく間違うことはないでしょう。</p>

<h3 id="validation">検証 (Validation) とは？</h3>

<p>HTML と XHTML は標準化されたもの (CSS も同じです) なので、W3C (World Wide Web Consortium) はページを自動的にチェックし、コードに問題やエラーがないかを指摘してくれる validator というツールを開発しています。問題やエラーは多種多様ですが、たとえば終了タグを忘れていたり、属性値が引用符で囲まれていないといったものを指摘してくれます。HTML validator は <a href="http://validator.w3.org" title="The W3C HTML validator">http://validator.w3.org/</a> で公開されています。この HTML validator は、HTML, XHTML といった違いや文書型を自動的に検出してくれます。CSS についても validator が公開されており、<a href="http://jigsaw.w3.org/css-validator/" title="The W3C CSS validator">http://jigsaw.w3.org/css-validator/</a> からアクセスできます。</p>

<p>検証については、<a href="http://dev.opera.com/articles/view/24-validating-your-html/" hreflang="en">24 番の記事</a> をご覧ください。文書型については <a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/" hreflang="en">14 番の記事</a> をご覧ください。</p>

<h2 id="css">CSS—スタイルを与えよう</h2>

<p>CSS (Cascading Style Sheets) によって、文書の整形やレイアウトを細かく調節することが可能になります。色や背景、フォントサイズやフォントのスタイルを変更・追加することもできますし、さらにはページ上の要素を異なる位置に配置することもできます。</p>

<p>CSS を利用して文書のスタイルを変更する方法は主に 3 つあります。要素の再定義、ID にスタイルを適用する、そしてクラスにスタイルを適用するというものです。では、それぞれについて見ていきましょう。</p>

<ol>
<li><p>要素の再定義。CSS の規則を定義することによって、(X)HTML の要素がどう表示されているかを変更することができます。もし、すべての段落をダブルスペースに、文字色は緑にしたい場合、CSS ファイルに次のような宣言を追加します。</p>
<pre><code>p {
  line-height: 2;
  color: green;
}</code></pre>

<p>こうすると、<code>&lt;p&gt;&lt;/p&gt;</code> で囲まれた内容のすべてがダブルスペース、緑色の文字で表示されます。</p></li>

<li><p>ID を定義する。要素に <code>id</code> 属性を与えることで、ページ内でその要素を一意に識別することができます (<code>id</code> 属性の値はページ内で重複することができません)。たとえば、<code>id=&quot;navigation_menu&quot;</code> というかたちで ID を定義します。ID を定義することにより、より強固なスタイルのコントロールが可能となります。たとえば、ある段落のみをダブルスペースで緑文字にしたい場合は、その要素に ID を与えればよいのです。</p>

<pre><code>&lt;p id=&quot;highlight&quot;&gt;Paragraph content&lt;/p&gt;</code></pre>

<p>そして、CSS には次のように記述します。</p>

<pre><code>#highlight {
  line-height: 2;
  color: green;
}</code></pre>

<p>この CSS 規則は <code>id</code> 属性に値 <code>highlight</code> が指定された段落のみに適用されます (井桁は CSS において ID を表す記号として使われます)。</p></li>

<li><p>クラスを定義する。クラスは ID と同じように記述しますが、クラスの場合は ID とは違い値の重複が許されます。先ほどのダブルスペースの例を今回も利用して、今度はふたつの段落に同じスタイルを指定しましょう。クラスは次のように記述します。</p>

<pre><code>&lt;p class=&quot;highlight&quot;&gt;Paragraph content&lt;/p&gt;
&lt;p class=&quot;highlight&quot;&gt;The content of the second paragraph&lt;/p&gt;</code></pre>

<p>そして、CSS には次のように記述します。</p>

<pre><code>.highlight {
  line-height: 2;
  color: green;
}</code></pre>

<p>この例での <code>highlight</code> はクラスになります。ピリオドは CSS においてクラスを表す記号として使われます。</p></li>
</ol>

<p>後の例では、CSS がどのように HTML にスタイルを適用するのかについて説明します。また、<a href="http://dev.opera.com/articles/view/27-css-basics/">27 番の記事</a> から、より詳しい CSS の解説が始まります。是非そちらも読んでみてください。</p>

<h2 id="javascript">JavaScript—Web ページに動きを与えよう</h2>

<p>Web 標準モデルの最後は、JavaScript です。JavaScript はスクリプト言語のひとつで、Web ページに
動きを与えるために使われます。フォームに入力したデータの検証 (適切な形式で入力したか、など) や、ドラッグ &amp; ドロップの機能、スタイルの動的な変更、メニューの展開など要素の動的処理、ボタン機能の処理、そのほかにもとても多くの機能の実現に利用されます。モダンな JavaScript は対象となる HTML 要素を探し、その要素に対して何か処理を行います。考え方としては CSS と同じようなものですが、動作の流れや構文などは異なります。</p>

<p>JavaScript は HTML や CSS よりも複雑で発展的なトピックになります。この記事はシンプルにとどめておきたいこと、現段階で読者の混乱を招くようなことはしたくないこともあり、下の例で JavaScript 二関係するものについては解説しません。また、JavaScript についての記事がこのコースで登場するのは、だいぶ後になると思います。</p>

<h2 id="example">例</h2>

<p>この記事では多くを語ることはできませんが、コースが進むにつれてすべてを学べることができると思います。今回は、実際に作ったページを例にとって、今後どのようなことが解説されるのかを簡単に掴んでもらおうと思います。</p>

<p>次の例は、参考文献のページになります。Web 開発チームの集団力学に関する心理学のエッセイ、アメリカ合衆国のブロードバンドインターネットに関するレポートなど、いろいろな場面で使われますよね。アカデミックライティングの形式が気になる人のために書いておくと、今回は APA スタイルに従っています。 <a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/article4_examples.zip">コードのダウンロード</a>.</p>

<h3 id="index">index.html</h3>

<pre><code>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot;
  &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;

&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; xml:lang=&quot;en&quot; lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;/&gt;

  &lt;title&gt;References&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    @import url(&quot;styles.css&quot;);
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;div id=&quot;bggraphic&quot;&gt;&lt;/div&gt;
  &lt;div id=&quot;header&quot;&gt;
    &lt;h1&gt;References&lt;/h1&gt;
  &lt;/div&gt;
  &lt;div id=&quot;references&quot;&gt;
    &lt;cite class=&quot;article&quot;&gt;Adams, J. R. (2008). The Benefits of Valid Markup: A Post-Modernistic Approach to Developing Web Sites. &lt;em&gt;The Journal of Awesome Web Standards, 15:7,&lt;/em&gt; 57-62.&lt;/cite&gt;
    &lt;cite class=&quot;book&quot;&gt;Baker, S. (2006). &lt;em&gt;Validate Your Pages.... Or Else!.&lt;/em&gt; Detroit, MI: Are you out of your mind publishers.&lt;/cite&gt;
    &lt;cite class=&quot;article&quot;&gt;Lane, J. C. (2007). Dude, HTML 4, that&#39;s like so 2000. &lt;em&gt;The Journal that Publishes Genius, 1:2, &lt;/em&gt; 12-34.&lt;/cite&gt;
    &lt;cite class=&quot;website&quot;&gt;Smith, J. Q. (2005). &lt;em&gt;Web Standards and You.&lt;/em&gt; Retrieved May 3, 2007 from Web standards and you.&lt;/cite&gt;
  &lt;/div&gt;
  &lt;div id=&quot;footer&quot;&gt;
    &lt;p&gt;The content of this page is copyright © 2007 &lt;a href=&quot;mailto:jonathanlane@gmail.com&quot;&gt;J. Lane&lt;/a&gt;&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>後の記事でたくさんの例を見るでしょうから、このファイルについて一行一行を細かく解説することはしません。今回は注意して欲しいところだけ取り上げます。</p>

<p>1 行目は、文書型宣言または DOCTYPE (宣言) と呼ばれるものです。この場合は、XHTML 1.0 Transitional になります。DOCTYPE は文書のマークアップがどの規則に沿っており、また検証されるのかについて指定するものです。DOCTYPE について詳しくは <a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/" title="14 番の記事は DOCTYPE (宣言) について書かれています。">14 版の記事</a> を呼んでください。</p>

<p>5 行目から 7 行目は CSS ファイルをページに読み込ませるための指定です。このファイルに含まれているスタイルは、ページ内のさまざまな要素に適用されます。CSS ファイルの中身と、ページを整形する規則については、次のセクションで説明します。</p>

<p>参考文献についてですが、参照する資料のタイプ別に異なるクラスを割り当てています。こうすることによって、異なるスタイルを割り当てることが可能になるからです。たとえば、この例では各文献をタイプ別に色分けして、文献の右側に表示させています。こうすることによって、リストを読み取るのが楽になります。</p>

<p>では、この HTML にスタイルを適用する CSS について見てみましょう。</p>

<h3 id="styles">styles.css</h3>

<pre><code>body {
  background: #fff url(&#39;images/gradbg.jpg&#39;) top left repeat-x;
  color: #000;
  margin: 0;
  padding:0;
  border: 0;
  font-family: Verdana, Arial, sans-serif; font-size: 1em;
}

div {
  width: 800px;
  margin: 0 auto;
}

#bggraphic {
  background: url(&#39;images/pen.png&#39;) top left no-repeat;
  height: 278px;
  width: 362px;
  position: absolute;
  left: 50%;
  z-index: 100;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5em;
  margin-bottom: 30px;
  background: url(&#39;images/headbg.png&#39;) top left repeat;
  padding: 10px 0;
}

#references cite {
  margin: 1em 0 0 3em;
  text-indent: -3em;
  display: block;
  font-style: normal;
  padding-right: 3px;
}

.website {
  border-right: 5px solid blue;
}

.book {
  border-right: 5px solid red;
}

.article {
  border-right: 5px solid green;
}

#footer {
  font-size: 0.5em;
  border-top: 1px solid #000;
  margin-top: 20px;
}

#footer a {
  color: #000;
  text-decoration: none;
}

#footer a:hover{
  text-decoration: underline;
}</code></pre>

<p>スタイル指定ですが、ちょっとやりすぎてしまいました。CSS だけで実現できる、格好いい背景効果を見せたかったのです。</p>

<p>1 行目から 8 行目は、テキストの文字や背景色、周りに表示される枠線の太さなど、デフォルトのスタイルを指定しています。多くのモダンブラウザーは各自でデフォルトスタイルを適用するため、明示的にデフォルトスタイルを指定しない人もいます。ただ、異なるブラウザーに対してスタイルをコントロールしやすいという点で、良いアイデアだと思います。</p>

<p>10 行目から 13 行目は、ページの幅を 800px に指定しています (ウインドウの大きさに合わせてページが伸縮するよう、パーセンテージでの指定もできます)。ここでマージンを指定していますが、これはページのコンテンツ領域を、ウインドウの真ん中に持ってくるための指定です。</p>

<p>では、ページの背景画像に注目してください (これらは background: url という宣言により適用されています)。このページでは、3 つの異なる画像を利用しています。ひとつ目はグラデーションにより、ページ上部から素敵な青のフェードがかかる画像です。ふたつ目はペンを描いた画像で、半透明の PNG を利用しています。これは画像がグラデーションに溶け込み、またテキストとのコントラストを適切に保つためです (半透明 PNG 画像は、Internet Explorer 6 以前のバージョンではうまく表示されませんが、モダンブラウザーではすべて動作するようになっています。この半透明 PNG や、IE6 が持つその他の CSS に関係する問題は、<a href="http://code.google.com/p/ie7-js/">Dean Edwards の IE 修正 JavaScript</a> で解決することができます)。最後の画像もまた半透明の PNG です。これはページの見出し部分の背景に使われ、テキストと背景のコントラストを調整し、かつ格好いい効果を与えるものです。</p>

<p>この例は、図 2 のように表示されます。</p>

<img alt="完成例" src="/articles/view/4-the-web-standards-model-html-css-a/article4_2.jpg" />


<p class="comment">図 2: スタイルを適用させた完成例</p>

<h2 id="summary">まとめ</h2>

<p>XHTML, CSS, JavaScript に関して、神秘的なものは一切ありません。これらはただ、Web が進化した結果なのです。あなたがもし HTML について知っていたとしても、それらを捨て去ることはありません。あなたが知っていることは引き続き関係しています。いくつかの点において、異なるやり方をする必要があります (また、少しだけマークアップに気をつける必要があります)。</p>

<p>仕事がうまくいって満足するかはさておき、Web 標準による開発はとても理にかなったものです。標準で開発することについて、時間がかかる、クロスブラウザー対応が大変といった批判もあります。しかし、非標準なやり方でレイアウトしたページが、多様なデバイスや未来のブラウザーでどうなるのでしょうか。ルールに従わない過去に引きずられたマークアップが、Opera 12.0 や Firefox 5.0, IE 10.0 で動くと、自信を持って言える理由はなんでしょうか？</p>

<h2 id="exercises">練習問題</h2>
<ul>
<li>クラスと ID の違いはなんですか？</li>
<li>XHTML, CSS, JavaScript はそれぞれどのような役割を担いますか？</li>
<li>例から index.html と styles.css を取り出し、CSS のみでスタイルを変更してください (ファイルの編集には、メモ帳や TextWrangler などのエディタがおすすめです)。なお、HTML ファイルは変更してはいけません。
<ul><li>文献のタイプ (記事、書籍、Web 上のリソース) ごとに、異なるアイコンを付加してください。タイプ別のアイコンを作成し、CSS で文献の横に表示させてください。</li>
<li>ページ下部の copyright 表記を隠してください。</li>
<li>タイトルの見た目を変更し、目立つようにしてください。</li>
</ul></li>
<li>この例を携帯電話用のブラウザーでも動作させようとするとき、CSS ではどのようなことができるでしょうか？</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/3-how-does-the-internet-work-ja/">前の記事: インターネットのしくみ</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/5-web-standards-beautiful-dream-bu-ja/">次の記事: Web 標準 ― すばらしき夢、でも現実は？</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/#toc">カリキュラムの目次へ</a></li>
</ul>

<h2>著者紹介</h2>

<img alt="著者 Jonathan Lane の写真" src="http://dev.opera.com/articles/view/3-how-does-the-internet-work/Jonlane.jpg" class="right" />

<p>Jonathan Lane はカナダのブリティッシュコロンビア州メーンアイランドにある Web 開発会社 <a href="http://industryinteractive.net/">Industry Interactive</a> の President を務めています。彼はレスブリッジ大学の Curriculum Re-Development Center にて長年にわたり、Web プロジェクトの取りまとめを行っていました。</p>

<p>彼のブログは <a href="http://www.flyingtroll.com/">Flyingtroll</a> になります。また、プロジェクト管理アプリケーション Basecamp をEメールから利用可能にするアプリケーション「<a href="http://www.mailmanagr.com/">Mailmanagr</a>」の開発を行っています。</p>

<h2>翻訳者について</h2>

<img alt="翻訳者矢倉眞隆の写真" src="http://forum-test.oslo.osa/kirby/content/articles/312-4-web-html-css-javascript/mitsue-myakura.jpg" class="right" />

<h3>矢倉 眞隆 (Masataka Yakura)</h3>
<p>1984年生まれ。株式会社ミツエーリンクスにて、社内の品質改善活動や Web 標準 の普及啓蒙を行っている。W3C HTML WG メンバー。</p>

<h3><a href="http://www.mitsue.co.jp/">株式会社 ミツエーリンクス</a></h3>
<p>
1990年創業。大規模な Web サイト開発を得意とするインフォメーション・インテ グレータ。自社コンテンツの <a href="http://standards.mitsue.co.jp/">Web 標準 Blog</a> や<a href="http://accessibility.mitsue.co.jp/">アクセシビリティ Blog</a> より、Web フロントエンド技術に関するさまざまな情報を発信中。</p>
