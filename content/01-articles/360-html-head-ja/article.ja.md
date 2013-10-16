Title: HTML の <head> 要素
----
Date: 2010-06-15 05:26:31
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

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/12-the-basics-of-html-ja/" rel="prev">前の記事: HTML の基礎</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your-ja/" rel="next">次の記事: 適切な DOCTYPE の選択</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/#toc" rel="index">カリキュラムの目次へ</a></li>
</ul>

<h2>はじめに</h2>

<p>この記事は HTML 文書中であまり注目を集めない <code>head</code> 要素とその内容について説明します。このチュートリアルでは、DOCTYPE 宣言、<code>title</code> 要素、キーワードや説明 (<code>meta</code> 要素に記述します) など、<code>head</code> 要素の中身や関連する情報について説明します。また、JavaScript や CSS (内部で記述する方法と外部のものを参照する方法) についても説明します。</p>
<p>この記事ではサンプルをもとに解説するので、<a href="http://dev.opera.com/articles/view/13-the-html-head-element/headtutorial.zip" title="この記事で使用するサンプル">サンプルをダウンロード</a> して実際に試してみてください。私が説明するのは <code>head</code> 要素に関するベストプラクティスなので、ぜひチュートリアルを最初から最後まで進めてください。各パートはそれぞれ妥当なものではありますが、最後にいくつかそれまで教えたことを考え直させるような事も書いています。</p>
<p>目次は次のとおりです。</p>

<ul>
<li><a href="#head">いったい &lt;head&gt; ってなに？</a></li>
<li><a href="#language">文書の言語情報を指定する</a></li>
<li><a href="#title">タイトルが文書を評価する</a></li>
<li><a href="#meta">キーワードと説明を追加する</a></li>
<li><a href="#csshead">見た目は? スタイルを与えよう</a></li>
<li><a href="#javascripthead">JavaScript で動的な機能を与えよう</a></li>
<li><a href="#externalfileshead">インラインな CSS や JavaScript は良くない</a></li>
<li><a href="#summary">まとめ</a></li>
<li><a href="#exercises">課題</a></li>

</ul>
<h2 id="head">いったい &lt;head&gt; ってなに？</h2>

<p>このコースの最初の方で、valid な HTML 文書には DOCTYPE が必要ということを教わったはずです。DOCTYPE は文書がどの HTML で書かれているのか、そしてブラウザーでどのように処理させるかを記すためのものです。詳しくは <a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/">Roger が DOCTYPE について詳しく書いた 14 番目の記事</a> をごらん下さい。とりあえず今は、DOCTYPE は文書が <code>html</code> 要素と、その中に <code>head</code> と <code>body</code> が必要ということを伝えるものと理解してください。</p>
<p>さて、<code>head</code> 要素はあまり意味をなさないように見えます。なぜならこの要素の内容で、ページの利用者に直接現れるのは <code>title</code> 要素の情報だけだからです。これがどういう事かというと、<code>head</code> 要素は、ブラウザーに対する指定と、文書に関するメタ情報 (<code>meta</code>) など、付加的な情報を指定するための場所なのです。</p>

<h2 id="language">文書の言語情報を指定する</h2>

<p>文書に関する情報のうち、ひとつだけ <code>head</code> 要素の親、すなわち <code>html</code> 要素に指定するものがあります。文書の書かれている自然言語です。自然言語とはフランス語やタイ語、英語など<em>人間が</em>日常的に利用する言語を指します。自然言語情報を指定することで、スクリーンリーダーの手助けができるでしょう。たとえば、「six」という単語は英語とフランス語で発音が大きく異なります。こういった場合に自然言語情報はとても役立つのです。またスクリーンリーダー以外にも、検索エンジンなどがこの恩恵を受けられるのではないかと思います。</p>
<p>文書の主言語を指定することはよいことです。特に、世界に広く情報を公開するときにはとても役立ちます。あなたがそういったページを見ることはあまりないかもしれませんが。</p>

<p>言語情報は次のように指定します。</p>

<pre><code>&lt;html lang=&quot;en-GB&quot;&gt;
  ...
&lt;/html&gt;</code></pre>

<p class="note">文書内の一部についても、この <code>lang</code> 属性を他の要素に与えることで言語情報を指定できます。たとえば、<code>&lt;span lang=&quot;fr&quot;&gt;Bonjour&lt;/span&gt;</code> といったように書くことができます。</p>

<p>言語情報を指定する属性は、文書に指定した <code>DOCTYPE</code> によって変わります。<a href="http://www.w3.org/TR/i18n-html-tech-lang/#ri20040429.092928424">W3C の公開した文書</a> にはこう書かれています。</p>

<blockquote cite="http://www.w3.org/TR/i18n-html-tech-lang/#ri20040429.092928424">
<p><abbr>HTML</abbr> のときは <code>lang</code> のみを、<abbr>XHTML</abbr> 1.0 を text/html で送出するときは <code>lang</code> と <code>xml:lang</code> を、<abbr>XHTML</abbr> を XML として扱うときは <code>xml:lang</code> のみを使います。</p>
</blockquote>

<p>言語コードは <code>en</code> (英語) といった2文字の表記が一般的ですが、<code>en-US</code> (アメリカ英語) など4文字の表記も使われます。2文字のコードは <a href="http://ja.wikipedia.org/wiki/ISO_639-1"><abbr>ISO</abbr> 639-1</a> で定義されていますが、<a href="http://www.w3.org/International/articles/language-tags/">IANA subtag registry の言語コード定義を利用する</a> のが一番良い方法です。</p>

<p class="note">訳注：言語コード定義の記事について <a href="http://d.hatena.ne.jp/momdo/20071204/p1">HTMLにおける言語コード/言語タグ メモ</a> で前の版の抄訳が公開されています。</p>
<p class="note">訳注: 言語コードに関する簡単な紹介は <a href="http://www.kanzaki.com/docs/html/lang.html">言語コードと国コード</a> が参考になります。</p>

<h2 id="title">タイトルが文書を評価する</h2>

<p><code>head</code> 内でもっとも重要なのが <code>title</code> 要素です。<code>title</code> 要素中に書かれたテキストは、すべてのブラウザーのタイトルバー (ウインドウ上部にある箇所) に表示されるからです。タイトルはあなたのサイトに訪れた人が最初に得る情報のひとつですから、とても重要なのです。</p>
<p>スクリーンリーダー (視覚障害者が利用することの多い、Web ページの内容を読み上げるソフトウェア) などの支援技術は、文書がどういう事柄に関するものなのかを利用者に知らせるため、文書のタイトルを利用します。また、検索エンジンも同様にタイトルを重要な情報として利用します。人に読みやすく、かつ内容をうまく伝えるキーワードを含む良いタイトルをつけられれば、あなたのページは多くの人に知られるようになるでしょう。</p>
<p>では、次のサンプル (<a href="http://dev.opera.com/articles/view/13-the-html-head-element/headexample.html">headexample.html</a>) を開いてみてください。</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;I am a title example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>図1 で示す通り、<code>title</code> 要素内のテキストが、ブラウザーのナビゲーションバーの上に表示されるのがわかると思います。</p>

<img src="http://dev.opera.com/articles/view/13-the-html-head-element/head-figure1.gif" alt="タイトルが Web ブラウザーのタイトルバーに表示されている" />

<p class="comment">図1: ブラウザーでのタイトルの表示</p>

<p>良いタイトルのつけ方について Web には多くのチュートリアルがありますが、それらの殆どが SEO (検索エンジン最適化) に関連するものです。ですから、検索にたくさん引っかかるようなタイトルをつけるといった、検索エンジンへの対策に溺れないでください。文書が何について書かれているのかを、短く簡潔に表現しましょう。たとえば、「犬、ジャーマンシェパード、飼い方、ペット」と「犬の飼い方 ― ジャーマンシェパード」いうふたつのタイトルがあるとしします。いったいどちらが、訪問者にとってわかりやすいタイトルでしょうか。</p>

<h2 id="meta">キーワードと説明を追加する</h2>

<p>次に説明することは、あまり意味がないのではと思う人がいるかもしれません。指定する情報が、訪問者に対して直接表示されるわけではないからです。何のことかというと、ページの説明やキーワードです。これらの情報は <code>head</code> 内の <code>meta</code> 要素に与えます。では、Yahoo! Eurosport のサイト (<a href="http://dev.opera.com/articles/view/13-the-html-head-element/headwithmeta.html">headwithmeta.html</a>) を例にとって説明します。コードは次のように書かれています。</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Yahoo! UK &amp; Ireland Eurosport—Sports News | Live Scores | Sport&lt;/title&gt;
  &lt;meta name=&quot;description&quot; content=&quot;Latest sports news and live scores from Yahoo! Eurosport UK. Complete sport coverage with Football results, Cricket scores, F1, Golf, Rugby, Tennis and more.&quot;&gt;
  &lt;meta name=&quot;keywords&quot; content=&quot;eurosport,sports,sport,sports news,live scores,football,cricket,f1,golf,rugby,tennis,uk,yahoo&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>この文書をブラウザーで開いてみましょう。<code>body</code> になにも情報がないので、ブラウザーの画面には何も表示されないでしょう。しかし、この文書がオンラインにあり、検索エンジンがインデックスしていれば、ページの説明が検索結果の下に表示されることになります。図2 はそのスクリーンショットです。</p>

<img src="http://dev.opera.com/articles/view/13-the-html-head-element/head-figure2.gif" alt="検索結果では、ページの説明が表示されている" />

<p class="comment">図2: 検索結果でページの説明が表示されている</p>

<p>検索した人にとって、ページの説明はとても重要な情報になるでしょう。検索結果が表示してくれるページの説明を読んで、それが求めているページかを判断できるからです。また、いくつかのブラウザーは図3のように、ページをお気に入りに追加する際に、説明を補足情報として登録してくれる機能を備えています。</p>

<img src="http://dev.opera.com/articles/view/13-the-html-head-element/head-figure3.gif" alt="ブラウザーによっては、ブックマークに登録する際にページの説明も利用する" />

<p class="comment">図3: 文書をお気に入りに登録する時、ブラウザーによっては記述されたページの説明も一緒に登録する</p>

<p>説明の追加は直接的な利益をもたらすものではありませんが、これらはあなたのページの成功に重要な役割を担います。説明より影響は大きくありませんが、キーワードについても同じことが言えます。</p>

<p>長年の spam 業者によるキーワードの不正利用によって、検索エンジンはキーワードを重要な情報として扱わなくなりました。それでも、キーワードはとてもよいツールになります。たとえば、多くの文書をすぐにインデックスしたい場合、キーワードがあればすべての文書をスキャンし内容を解析する必要がありません。<code>meta</code> キーワードをインデックスするスクリプトを用意し CMS の検索エンジンに利用すれば、検索が高速に行えるでしょう。内容を解析する必要なしに、文書を探し出す機能を手間なく導入できるのです。今はそういった機能を考えていなくても将来的に導入するチャンスが与えられると考えて、<code>meta</code> 要素にキーワードを与えることもよいのではないでしょうか。キーワードを分厚い本にはさむ小さなしおりとして考えてみましょう。しおりがあることで、長い章を読み返すことなく特定の節から読むことができるでしょう。</p>

<h2 id="csshead">見た目は? スタイルを与えよう</h2>

<p><code>head</code> に与えられる情報はまだあります。CSS (Cascading Style Sheets) で定義されるスタイル規則です。スタイル規則は <code>style</code> 要素を使って <code>head</code> 要素内に直接埋め込めます。サンプル (<a href="http://dev.opera.com/articles/view/13-the-html-head-element/headinlinestyles.html">headinlinestyles.html</a>) は次のようになっています。</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Breeding Dogs—Tips about Alsatians&lt;/title&gt;
  &lt;meta name=&quot;description&quot; content=&quot;How to breed Alsatians, tips on proper breeding and information about common issues with this breed.&quot;&gt;
  &lt;meta name=&quot;keywords&quot; content=&quot;Dogs,Alsatian,Breeding,Dog,Tips,Free,Pet&quot;&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    body{
      background:#000;
      color:#ccc;
      font-family: helvetica, arial, sans-serif;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;Test!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>この文書をブラウザーで開くと、黒い背景のページに灰色で書かれた「Test!」という文字が現れるでしょう。また、書体はあなたのシステムにもよりますが、Helvetica または Arial で表示されるかと思います。<code>style</code> 要素は <code>media</code> という属性を持つことができますが、これはコンピューター画面やモバイル端末、印刷物など、媒体別にスタイルシートを適用させるための仕組みです。媒体にはいくつか種類がありますが、なかでも使われそうなものをここに挙げてみましょう。</p>

<ul>
<li>screen — ディスプレイやモニタ</li>
<li>print — 文書が印刷されたときの見た目を定義する</li>
<li>handheld — モバイル端末や他のハンドヘルド端末で表示させたときの見た目を定義する</li>
<li>projection — <a href="http://people.opera.com/howcome/2004/operashow/tutorial.html">Opera Show</a> など、HTML によるスライドの表現に</li>
</ul>
<p>たとえば、ディスプレイでは別の色を使って、印刷物ではフォントを大きくしたいといったとき、次のように <code>media</code> 属性に値 <code>print</code> を指定した新しいスタイルブロックを追加することで実現できます。(サンプルは <a href="http://dev.opera.com/articles/view/13-the-html-head-element/headinlinestylesmedia.html">headinlinestylesmedia.html</a> にあります)</p>

<pre>&lt;style type=&quot;text/css&quot; media=&quot;print&quot;&gt;
  body{
    background:#fff;
    color:#000;
    font-family: helvetica, arial, sans-serif;
    font-size:300%;
  }
&lt;/style&gt;</pre>

<p>この Web ページを印刷するとき、ブラウザーはスクリーン用スタイルシートではなく印刷用スタイルシートを適用します。サンプル <a href="http://dev.opera.com/articles/view/13-the-html-head-element/headinlinestylesmedia.html">headinlinestylesmedia.html</a> を開き、印刷プレビューを開いてください。図4 はそのスクリーンショットです。</p>

<img src="http://dev.opera.com/articles/view/13-the-html-head-element/head-figure4.gif" alt="The same page with print and screen style sheets applied" />

<p class="comment">図4: スクリーン用スタイルシートと印刷用スタイルシート</p>

<h2 id="javascripthead">JavaScript で動的な機能を与えよう</h2>

<p><code>head</code> には他にも「クライアントサイドスクリプト」と呼ばれる、JavaScript で書かれたブラウザーによって実行されるスクリプトを追加することが出来ます。<a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/">Web 標準のモデル</a> で解説した通り、JavaScript は静的な HTML 文書に動的な挙動を与えるものです。たとえば、アニメーションやフォーム内容の検証など、ユーザーの行動に応じた反応が行えます。</p>

<p>JavaScript は <code>script</code> 要素を使って埋め込むことができます。ブラウザーがこの要素を見つけるとまず要素内のコードを実行し、その処理が終了するまで構文解析などの処理を中断します。つまり、ページの本文が表示される前に JavaScript を実行したい場合、その処理は <code>head</code> 内に記述する必要があります。たとえば、あなたのページに外部のサーバーへのリンクがいくつかあることをユーザーに伝えたい場合、次のようなコードを <code>head</code> 内に追加します。(<a href="http://dev.opera.com/articles/view/13-the-html-head-element/headscript.html" title="Simple JavaScript example">headscript.html</a>): </p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Breeding Dogs—Tips about Alsatians&lt;/title&gt;
  &lt;meta name=&quot;description&quot; content=&quot;How to breed Alsatians, tips on proper breeding and information about common issues with this breed.&quot;&gt;
  &lt;meta name=&quot;keywords&quot; content=&quot;Dogs,Alsatian,Breeding,Dog,Tips,Free,Pet&quot;&gt;
  &lt;style type=&quot;text/css&quot; media=&quot;screen&quot;&gt;
    body{
      background:#000;
      color:#ccc;
      font-family: helvetica, arial, sans-serif;
    }
    a {color:#fff}
  &lt;/style&gt;
  &lt;style type=&quot;text/css&quot; media=&quot;print&quot;&gt;
    body{
      background:#fff;
      color:#000;
      font-family: helvetica, arial, sans-serif;
      font-size:300%;
    }
  &lt;/style&gt;
  &lt;script&gt;
    function leave(){
      return confirm(&quot;This will take you to another site,\n are you sure you want to go?&quot;)
    }
  &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
Test!
&lt;a href=&quot;http://dailypuppy.com&quot; onclick=&quot;return leave()&quot;&gt;The Daily Puppy&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>ブラウザーでこのサンプルを開き、リンクをクリックすると、外部サーバーに移動してよいかと訪ねてくるはずです。これはとても単純なスクリプトのサンプルとして用意しただけなので、ベストプラクティスではまったくありません。JavaScript のベストプラクティスや JavaScript の詳細なテクニックについては、後の記事で解説します。でも、いまは焦らずにいきましょう。</p>

<h2 id="externalfileshead">インラインな CSS や JavaScript は良くない</h2>

<p>強い言葉を書きましたが、Web サイトを構築する時に覚えておいてほしいことがひとつあります。コードを可能な限り再利用できるようにすると最もよいです。サイト全体で利用されるスタイルシートやスクリプトを各ページに埋め込むのは意義のあることではありません。それどころか、サイト全体を管理することが大変になりますし、文書のサイズも不必要に大きくなってしまいます。</p>

<p>スタイルシートやスクリプトは外部ファイルに格納し、必要に応じて HTML ファイルから読み込む方がずっとよいやり方です。こうすることで、変更が必要な場合でも、その外部ファイルを編集するだけで済むからです。JavaScript の場合、<code>script</code> 要素内には何も書かず、<code>src</code> 属性から外部ファイルにリンクします。コードは次のようになります。(<a href="http://dev.opera.com/articles/view/13-the-html-head-element/externaljs.html" title="External JavaScript file example">externaljs.html</a>)</p> 

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Breeding Dogs—Tips about Alsatians&lt;/title&gt;
  &lt;meta name=&quot;description&quot; content=&quot;How to breed Alsatians, tips on proper breeding and information about common issues with this breed.&quot;&gt;
  &lt;meta name=&quot;keywords&quot; content=&quot;Dogs,Alsatian,Breeding,Dog,Tips,Free,Pet&quot;&gt;
  &lt;style type=&quot;text/css&quot; media=&quot;screen&quot;&gt;
    body{
      background:#000;
      color:#ccc;
      font-family: helvetica, arial, sans-serif;
    }
    a {color:#fff}
  &lt;/style&gt;
  &lt;style type=&quot;text/css&quot; media=&quot;print&quot;&gt;
    body{
      background:#fff;
      color:#000;
      font-family: helvetica, arial, sans-serif;
      font-size:300%;
    }
  &lt;/style&gt;
  &lt;script src=&quot;leaving.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
Test!
&lt;a href=&quot;http://dailypuppy.com&quot; onclick=&quot;return leave()&quot;&gt;The Daily Puppy&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>CSS の場合はすこし難しくなります。<code>style</code> は <code>src</code> 属性を持たないため、代わりに <code>link</code> 要素を利用することになります。<code>link</code> 要素は <code>href</code> 属性から外部 CSS を読み込むことができます。また、画面用か印刷用かを指定したい場合には <code>media</code> 属性が用意されています。CSS と JavaScript を固有のファイルに格納することにより、<code>head</code> 要素の長さをとても短くすることができます。(<a href="http://dev.opera.com/articles/view/13-the-html-head-element/externalall.html" title="External JavaScript and CSS example">externalall.html</a>):</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Breeding Dogs—Tips about Alsatians&lt;/title&gt;
  &lt;meta name=&quot;description&quot; content=&quot;How to breed Alsatians, tips on proper breeding and information about common issues with this breed.&quot;&gt;
  &lt;meta name=&quot;keywords&quot; content=&quot;Dogs,Alsatian,Breeding,Dog,Tips,Free,Pet&quot;&gt;
  &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; media=&quot;screen&quot; href=&quot;styles.css&quot;&gt;
  &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; media=&quot;print&quot; href=&quot;printstyles.css&quot;&gt;
  &lt;script src=&quot;leaving.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
Test!
&lt;a href=&quot;http://dailypuppy.com&quot; onclick=&quot;return leave()&quot;&gt;The Daily Puppy&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>スタイルシートとスクリプトを外部ファイルにする利点は、他にもあります。</p>

<ol>
<li>ページを速く表示させることができ、訪問者にやさしいつくにりなります。ダウンロードするファイルはすこしですが、共通に利用するスタイルシートやスクリプトを毎回読み込む必要はありません (外部スクリプト/スタイルシートは一度のダウンロードで済みます)。加えて、リンクした CSS ファイルと JavaScript ファイルはキャッシュされます (コンピューターに一時的に保存されます)。次にサイトにアクセスしたとき、その CSS ファイルと JavaScript ファイルはあなたのコンピューターに既に存在しているため、再びダウンロードする必要がありません。</li>
<li>メンテナンスが容易になります。数千ページからなるサイトでも、スタイルシートとスクリプトが一箇所にあれば、なにか変更したい場合でもひとつひとつのファイルを編集する必要はありません。</li>
</ol>

<h2 id="summary">まとめ</h2>
<p>これでこの記事は終わりです。今回は HTML の <code>head</code> について、次のことを学びました。 </p>

<ul>
<li><code>title</code> ― 文書のタイトル</li>
<li><code>meta</code> ― 文書の説明やインデックス用のキーワードを含む</li>
<li><code>link</code> ― 外部 CSS ファイルにリンクする</li>
<li><code>script</code> ― 外部 JavaScript ファイルを指定する</li>
</ul>
<p>これらの要素を正しく使うことで、あなたの文書が早く簡単に見つかり、また理解しやすいものとなります。</p>

<h2 id="exercises">課題</h2>
<p>いつもと同じように、今回の内容が理解できているかを確かめましょう。</p>
<ul>
<li>スクリーンに表示されないのに、<code>meta</code> 要素にサイトの説明を加える意義はなんでしょうか。</li>
<li>JavaScript を <code>body</code> ではなく <code>head</code> 内に追加することの利点はなんでしょうか。</li>
<li>ブラウザーのキャッシュ機能の利点はなんでしょうか。そして、その恩恵を得るためには何をすればいいでしょうか。</li>
<li>検索エンジンが文書のタイトルを重要視しているなら、関連するキーワードをすべて記述した方がよいのでしょうか。なにかこのやり方に問題はありますか？</li>
<li>タイトルの表示が少しつまらないので、<code>b</code> 要素でいくつかを太字にさせたいと思うのですが、これは可能ですか？</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/12-the-basics-of-html-ja/" rel="prev">前の記事: HTML の基礎</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your-ja/" rel="next">次の記事: 適切な DOCTYPE の選択</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/#toc" rel="index">カリキュラムの目次へ</a></li>
</ul>

<h2>著者紹介</h2>

<div class="right">
<img src="http://dev.opera.com/articles/view/13-the-html-head-element/chrisheilmann.jpg" alt="著者 Chris Heilmann の写真" />
<p class="comment">Photo credit: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>
</div>

<p>Chris Heilmann は10年来の Web 開発者で、以前はラジオジャーナリズムに関わっていました。彼は英国の Yahoo! でトレーナー、リードデベロッパーとして働いており、ヨーロッパやアジアのフロントエンドも監督しています。</p>

<p>Chris は <a href="http://wait-till-i.com">Wait till I come</a> でブログを書いており、また多くのソーシャルネットワークで “codepo8” と名乗っています。</p>

<h2 class="clear">翻訳者について</h2>

<div class="right">
<img alt="翻訳者 矢倉眞隆の写真" src="/articles/view/1-introduction-to-the-web-standards-cur-ja/mitsue-myakura.jpg" />
</div>

<h3>矢倉 眞隆 (Masataka Yakura)</h3>
<p>1984年生まれ。株式会社ミツエーリンクスにて、社内の品質改善活動や Web 標準 の普及啓蒙を行っている。W3C HTML WG メンバー。</p>

<h3><a href="http://www.mitsue.co.jp/">株式会社 ミツエーリンクス</a></h3>
<p>1990年創業。大規模な Web サイト開発を得意とするインフォメーション・インテグレータ。自社コンテンツの <a href="http://standards.mitsue.co.jp/">Web 標準 Blog</a> や<a href="http://accessibility.mitsue.co.jp/">アクセシビリティ Blog</a> より、Web フロントエンド技術に関するさまざまな情報を発信中。</p>
