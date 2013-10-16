Title: インターネットのしくみ
----
Date: 2009-10-20 08:16:52
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
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w-ja/">前の記事: インターネットと Web の歴史、そして Web 標準の進化</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a-ja/">次の記事: Web 標準のモデル — HTML, CSS, JavaScript</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/#toc">カリキュラムの目次へ</a></li>
</ul>

<h2>はじめに</h2>
<p>舞台の裏側で、歯車やベルトが回るのを見たことがあるでしょうか。今回は皆さんもよく知っている World Wide Web について、その舞台裏をお見せしましょう。</p>
<p>World Wide Web を支えている技術には、次のようなものがあります。</p>
<ul>
<li>HTML (Hypertext Markup Language)</li>
<li>HTTP (Hypertext Transfer Protocol)</li>
<li>DNS (Domain Name System)</li>
<li>Web サーバーと Web ブラウザー</li>
<li>静的コンテンツと動的コンテンツ</li>
</ul>
<p>これらはインターネットの基盤技術ですから、この記事で解説することは、よい Web サイトを作るための手助けにはあまりならないでしょう。しかし、クライアントなど他人と Web について話す時に適切な意思疎通を行うための言葉を知る事ができます。<em>サウンド･オブ･ミュージック</em>でマリアが「読み書きを ABC から始めるのとおなじで、歌はドレミの歌から始めるの」と言ったのと同じです。</p>

<p>今回は、コンピューター同士が HTTP や TCP/IP を通じて通信する仕組みを簡単に説明してから、Web ページを構成する技術について見ていきます。目次は次のとおりです。</p>

<ul>
<li><a href="#internetcommunication">インターネット上でコンピューターが行う通信</a><ul><li><a href="#requestresponse">リクエスト/レスポンスサイクルの詳細</a></li>
</ul></li>

<li><a href="#contenttypes">コンテンツの種類</a>
<ul><li><a href="#plaintext">プレーンテキスト</a></li>
<li><a href="#webstandards">Web 標準</a></li>
<li><a href="#dynamicpages">動的な Web ページ</a></li>
<li><a href="#proprietaryformats">他のアプリケーションやプラグインを必要とするフォーマット</a></li>
</ul>
</li>

<li><a href="#staticdynamic">静的な Web サイト vs. 動的な Web サイト</a></li>
<li><a href="#summary">まとめ</a></li>
<li><a href="#exercises">練習問題</a></li>
</ul>

<h2 id="internetcommunication">インターネット上でコンピューターが行う通信</h2>

<p>コンピューター関する技術は、幸いな事にシンプルに保たれてきました。World Wide Web について言えば、ほとんどのページが HTML という共通の言語で書かれていますし、これらは共通のプロトコルである HTTP (Hypertext Transfer Protocol) で配信されています。HTTP は共通語 (仕様) ですから、たとえば Windows マシンと最新の Linux マシンが通信することも可能なのです。</p>

<p>そして、Web ブラウザーという HTTP を解釈し HTML を人間に可読可能なかたちに整形してくれるソフトウェアのおかげで、HTML で書かれたページにはコンピューターからだけではなく、電話や PDA、さらには人気のゲーム機からもアクセスすることができるのです。</p>

<p>しかし、同じ言葉を話していたとしても、Web にアクセスするデバイスは多種多様ですから、お互いに通信するための何かしらのルールが必要です。学ぶために授業で手を挙げるようなものですね。インターネットにおいて、このルールが HTTP になるわけです。HTTP のおかげで、クライアントマシン (あなたのコンピューター) は、自身を「<strong>サーバー</strong>にサイトをリクエストするもの」と認識できるのです。</p>

<p>サーバーとは、Web サイトが存在するコンピューターになります。Web アドレスをブラウザーに打ち込むと、サーバーはそのリクエストを受け取り、要求されたページを見つけ出してあなたのコンピューターに送り返します。送り返されたデータは最終的にブラウザー上で表示されます。</p>

<h3 id="requestresponse">リクエスト/レスポンスサイクルの詳細</h3>

<p>さて、コンピューターがインターネット上でどのように通信するのかを説明したので、今度は HTTP のリクエスト/レスポンスの流れについてもうちょっと詳しく説明しましょう。いくつかの概念を効果的に説明したいので、ステップに分けて話しますね。</p>

<ol>
<li><p>すべてのリクエスト/レスポンスは、Web ブラウザーのアドレスバーに URL (Univeral Resource Locator) を打ち込むすることから始まります。URL はたとえば http://dev.opera.com のようなものになります。ではここで、ちょっとこの URL を打ち込んでみてください。</p>

<p>さて、ここで一つ、あなたが知らないかもしれないことをお話します。実は、Web ブラウザーはサーバーに Web サイトをリクエストする際、URL を利用していないのです。ブラウザーは代わりに、<strong>IP アドレス</strong> (<strong>Internet Protocol</strong>) というものを利用します。IP アドレスは電話番号や郵便番号など、サーバーを識別するものになります。たとえば、先ほどの http://dev.opera.com の IP アドレスは 213.236.208.98 になります。</p></li>

<li><p>では、新しいタブかウインドウを開いて、http://www.apple.com と打ち込み Enter を押してください。次に http://17.149.160.10/ と打って Enter を押してみてください。同じページが現れるはずです。では、http://213.236.208.98 とタイプして Enter を押してください。この IP アドレスは先ほど紹介した、http://dev.opera.com と同じサーバーに接続します。ただし、あなたが見るのは 403 “Access Denied” というエラーでしょう。これは、サーバーの実際のルートへのアクセスが許可されていないことによるものです。</p>

<p>http://www.apple.com は基本的に http://17.149.160.10/ のエイリアスとして機能しています。しかし、一体なぜこのような仕組みがあり、またどのように機能しているのでしょうか？</p>

<p>まず、このような仕組みを導入する理由ですが、これは人間が数字の羅列を覚えるよりも、単語のほうが記憶しやすいということに基づいています。そして、これを実現する仕組みがDNS (Domain Name System) と呼ばれるものになります。DNS は言わば、インターネットに接続するマシンを自動的に収集する辞書になります。</p>

<p>あなたがアドレスバーに http://dev.opera.com と入力し Enter を押したとき、このアドレスはネームサーバーに送られ、対応する IP アドレスへの結びつけを行います。インターネットには膨大なマシンがあり、すべての DNS サーバーがオンラインのマシン全てを網羅しているわけではありません。ですから、あなたの要求をかなえるべく、リクエストを適切なサーバーに受け渡す仕組みが備わっています。</p>

<p>DNS システムは www.opera.com という Web サイトを探し、17.149.160.10 という対応するIPアドレスを見つけます。そして、その IP アドレスを Web ブラウザーに返すのです。</p>

<p>あなたのマシンは、指定された IP アドレスにあるマシンにリクエストを送信し、レスポンスが帰ってくるのを待ちます。すべてがうまくいけば、サーバーはページと共に、クライアントに全てが OK という短いメッセージを送信します (図1)。このメッセージは <strong>HTTP ヘッダー</strong>に格納されています。</p>

<img alt="リクエスト/レスポンスサイクルの成功例" src="http://forum-test.oslo.osa/kirby/content/articles/303-3-/article3_1.png" />

<p class="comment">図1: この通信には何も問題がないので、サーバーは適切なWebページを返します</p>

<p>もし何か間違いがあったとき、たとえばURLのタイプミスがある場合、Web ブラウザーは <strong>HTTP エラー</strong>を受け取ります。悪評高い 404  “Page Not Found” エラーはその最たる例です。</p></li>

<li><p>今度は http://dev.opera.com/joniscool.html とタイプしてください。実は、このページは存在しません。ですから404エラーが現れます。同じようにほかのサイトでも、存在しないであろうページにアクセスしてください。異なるエラーページが現れることがあると思います。これは、Web 開発者がサーバーが初期状態で持っているエラーページをそのまま利用したか、それともエラーページをカスタマイズしたかの違いです。これらは高度なテクニックですので、このコースでは取り上げませんが、dev.opera.com の他の記事で公開されればよいなと思っています。</p> 

<p>さて、ほとんどの場合、Web サイトのトップページの URL にはファイル名がありません (例: http://www.mysite.com/)。トップページ以下のページでも、URL にファイル名があるものと無いものが存在します。しかし、URL にファイル名がなくても、あなたは実ファイルにアクセスしているのです。これは訪れる人が URL を覚えやすいようにと、Web 開発者がサーバーの設定を変更し、ファイル名を隠すようにしているのです。このやり方についてもコースで取り上げることはしませんが、<a href="http://dev.opera.com/articles/view/supplementary-getting-your-content-onli/" hreflang="en">サーバーにファイルをアップロードする方法や、ファイル/ディレクトリ構造の紹介</a>についての記事が dev.opera.com で公開されています。</p></li>
</ol>

<h2 id="contenttypes">コンテンツの種類</h2>

<p>今度はインターネットで見られるさまざまなコンテンツの種類について説明しようと思います。種類は大きく分けて4つ。プレーンテキスト、Web 標準、動的な Web ページ、そしてプラグインや他のアプリケーションを必要とするフォーマットになります。</p>

<h3 id="plaintext">プレーンテキスト</h3>

<p>インターネットが始まった頃、つまり Web 標準やプラグインなどがまだ存在しなかった頃、インターネット上でやり取りされるデータは、画像と「.txt」といった拡張子を持つプレーンテキストファイルがほとんどでした。プレーンテキストはブラウザーで特に処理も行われず、そのまま表示されるだけです。こういったプレーンテキストファイルは、今でも大学の Web サイトなどで見つけることができます。</p>

<h3 id="webstandards">Web 標準</h3>

<p>World Wide Web は、HTML (または XHTML)、CSS、JavaScript という3つの Web 標準によって組み立てられます (この記事では、HTML と XHTML が意味するものに大きな違いはありません)。</p>

<p>Hypertext Markup Language という名前は、その目的を簡潔に伝えている点でとても優れています。HTML は文書を分割し、構造と内容を記述し、そして各部分に意味を与えるために使われます (あなたが Web サイトで見るテキスト情報は、すべてこの HTML に含まれています)。HTML ではページ内の異なるコンポーネントを、要素を使って識別します。</p>

<p>Cascading Style Sheets によって、HTML 文書内の要素がどのように表示されるかが決定されます。CSS はとても簡単で、スタイル宣言を書くだけで、段落中の行間すべてをダブルスペースに (<code>line-height: 2em;</code>) することや、第2レベルの見出しをすべて緑色に (<code>color: green;</code>) することができます。</p>

<p>構造とその表示を分けることにはたくさんの利点があります。これについては<a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a-ja/" title="Web 標準のモデル">次の記事</a>で詳しく解説しますので、お楽しみに。</p>

<p>HTML と CSS を組み合わせることでどんな変化があるのかを、図2で表してみました。整形情報が全くない plain な HTML が左に、その HTML ファイルに CSS で整形したものが右になります。</p>

<img alt="プレーンなHTMLと、そのHTMLにCSSを付加した例" src="http://dev.opera.com/articles/view/3-how-does-the-internet-work/article3_2.gif" />
 
<p class="comment">Figure 2: プレーンなHTMLと、そのHTMLにCSSを付加した例</p>

<p>そして、JavaScript はあなたの Web サイトに動的な機能を付加します。JavaScript はクライアントのコンピューターで動作し、サーバーに特別なソフトウェアをインストールする必要がありません。しかし、基本的な機能とインタラクティビティは JavaScript によって実現できますが、それにも限界があるため、高度なことをするにはサーバーサイドで動作するプログラミング言語や、動的な Web ページを必要とします。</p>

<h3 id="dynamicpages">動的な Web ページ</h3>

<p>インターネットをブラウズしているときに、「.html」という拡張子ではないページに出くわすことがあると思います。たぶん、「.php」や「.asp」「.aspx」「.jsp」といった、ふしぎな拡張子がついているものと思われます。これらが、動的 Web 技術を利用したページになります。</p>

<p>動的な Web ページは、ページに渡す値によって異なる結果が表示されます。データは、データベースやフォーム、その他のデータソースから渡されます。静的なページと動的なページの種類については、後で詳しく触れようと思います。</p>

<h3 id="proprietaryformats">他のアプリケーションやプラグインを必要とするフォーマット</h3>

<p>Web ブラウザーは、Web 標準のような特定の技術しか解釈し表示することができません。ですから、複雑なファイル形式やプラグインを必要とする技術を利用した Web ページに出くわすと、ブラウザーはファイルのダウンロードを行うか、インストールされたプラグインを利用してコンテンツを処理しようとします。次のようなコンテンツが例として挙げられます。</p>

<ol>
<li><p>Word 文書、Excel ファイル、PDF、圧縮ファイル (ZIP、SITなど)、Photoshop PSD のような複雑な画像ファイル、その他理解できないファイルに出くわすと、Web ブラウザーはそのファイルをダウンロードするか、それとも実行するかをユーザーに尋ねます。どちらも同じような結果になりますが、後者の場合は一度ファイルをダウンロードしたあとで、実行可能なアプリケーションがクライアントにインストールされている場合にファイルを開きます。</p></li>

<li><p>Flash ムービー、MP3 に代表される音楽フォーマット、MPEG などのビデオフォーマットの場合、ブラウザーはインストールされているプラグインを利用してファイルを再生します。もしプラグインが用意されていない場合、ブラウザーはプラグインをインストールするページへのリンクを提示するか、ファイルをダウンロードし、実行可能なソフトウェアを探します。</p></li>
</ol>
<p>もちろん、この両方に当てはまるようなものもあります。たとえば、SVG (Scalable Vector Graphics) は、Opera などいくつかのブラウザーでネイティブサポートが行われている Web 標準ですが、そうではないブラウザーもあります。たとえば、Internet Explorer は SVG をサポートしていないため、表示にはプラグインのインストールが必要です。しかし、多くのブラウザーはいくつかのプラグインをプリインストールしているため、あなたはそのコンテンツがプラグインで実行されているのか、それともブラウザーがネイティブでサポートしているのかが分からないかもしれません。</p>

<h2 id="staticdynamic">静的な Web サイト vs. 動的な Web サイト</h2>

<p>「静的な Web サイト」「動的な Web サイト」とは一体なんでしょうか。そして、両者にはどのような違いがあるのでしょうか。</p>

<p>チョコレートのアソートと同じで、すべてはその中身にあります。静的な Web サイトは、HTML や画像などのコンテンツが常に静的であることを表します。つまり、管理者がサーバー上のファイルを変更しない限りは、誰に対しても常に同じコンテンツが提供されます。これはまさしく、私達がこの記事で見てきたことになります。</p>

<p>これに対して動的な Web サイトは、サーバー上のコンテンツは一緒ですが、HTML だけではなく動的なコードも含みます。これにより、利用者が Web サイトに提供するデータにあわせて表示が変わります。</p>

<p>ちょっと試してみましょう。www.amazon.com にアクセスして、違う製品を5つ検索しててください。出てくる結果は異なりますが、Amazon は異なるページを返しているわけではないのです。Amazon はユーザーに同じページを送信するのですが、その際に入力に応じた情報が動的に盛り込まれるのです。情報はデータベースに保存されており、リクエストに応じて適切な情報を取得します。Web サーバーはそのデータを得て、動的なページに挿入するという仕組みです。</p>

<p>もうひとつ付け加えたいのが、動的な Web サイトの構築には特別なソフトウェアをサーバーにインストールする必要があるということです。静的な HTML は「.html」という拡張子で保存されますが、動的な Web サイトのコンテンツには HTML のほかに動的なコードが含まれており、拡張子も特別なものになります。拡張子を変えることで、そのファイルはクライアントに提示される前にサーバー側で特別な処理されなければならないものであることを伝えるわけです。特別な処理とは、たとえばデータベースからデータを取得し、ページに埋め込むといったことが挙げられます。拡張子の例ですが、たとえば PHP ファイルには「.php」という拡張子がつけられています。</p> 

<p>世の中にはさまざまな動的言語があります。いま挙げた PHP の他にも Python、Ruby on Rails、ASP.NET、Coldfusion といったものが有名です。これらの言語でできることにあまり違いはありません。どの言語でもデータベースへの接続や、フォーム入力の検証は行えるのです。しかし、言語によってそのやり方はすこしずつ異なっており、それぞれに長所や短所があります。ですから、最終的には何があなたに一番あっているかによるでしょう。</p>

<p>このコースでは動的言語についてこれ以上取り上げることはありませんが、いくつかのリソースを紹介しようと思います。気になった方は読んでみてください。</p>

<p class="note">3番目にある PHP のマニュアルを除き、以下の書籍・Web サイトは英語で書かれています。</p>

<ul>
<li>Rails: Fernandez, Obie. (2007), The Rails Way. Addison-Wesley Professional Ruby Series.</li>
<li><a href="http://www.rubyonrails.org/screencasts">Rails screencasts</a></li>
<li>PHP: Powers, David (2006), PHP Solutions: Dynamic web development made easy, friends of ED.</li>
<li><a href="http://www.php.net/docs.php">PHP Online documentation</a></li>
<li>ASP.NET: Lorenz, Patrick. (2003). ASP.NET 2.0 Revealed.  Apress.</li>
<li>ASP.NET: <a href="http://asp.net">online ASP.NET documentation and tutorials.</a></li>
</ul>

<h2 id="summary">まとめ</h2>
<p>これで、インターネットの仕組みを紹介する舞台裏ツアーはおしまいです。この記事では、多くのトピックをちょっとずつ引っかいた程度ですが、各々の技術や概念がどう組み合わさって動いているのかをひとまとめに知ることができたのではないかと思います。</p>

<p>HTML、CSS、JavaScript の構文などにはまだ触れていませんが、これは次の記事で詳しく解説します。Web ページのコードを見ながら、HTML、CSS、JavaScript という、Web 開発における「標準的な」モデルについて学んでいきましょう。</p>

<h2 id="exercises">練習問題</h2>

<ul>
<li>HTML と HTTP の定義と、それら二つの違いを説明しましょう。</li>
<li>Web ブラウザーの役割を説明しましょう。</li>
<li>インターネットを5分から10分程度散策し、記事内で説明したさまざまな種類のコンテンツを見つけましょう。プレーンテキストや画像、HTML、PHP や .NET (.aspx) のページ、PDF、Word 文書、Flash ムービーなどがその例です。コンテンツを見つけたらそれらにアクセスし、コンピューターがどのようにそれらのファイルを表示するかを考えてください。</li>
<li>静的なページと動的なページの違いはなんでしょうか。</li>
<li>HTTP エラーコードのリストを見つけ、その中から5つを選び説明しましょう。</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a rel="prev" href="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w-ja/">前の記事: インターネットと Web の歴史、そして Web 標準の進化</a></li>
<li class="next"><a rel="next" href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a-ja/">次の記事: Web 標準のモデル — HTML, CSS, JavaScript</a></li>
<li><a rel="index" href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur-ja/#toc">カリキュラムの目次へ</a></li>
</ul>

<h2>著者紹介</h2>

<img alt="著者 Jonathan Lane の写真" src="http://dev.opera.com/articles/view/3-how-does-the-internet-work/Jonlane.jpg" class="right" />

<p>Jonathan Lane はカナダのブリティッシュコロンビア州メーンアイランドにある Web 開発会社 <a href="http://industryinteractive.net/">Industry Interactive</a> の President を務めています。彼はレスブリッジ大学の Curriculum Re-Development Center にて長年にわたり、Web プロジェクトの取りまとめを行っていました。</p>

<p>彼のブログは <a href="http://www.flyingtroll.com/">Flyingtroll</a> になります。また、プロジェクト管理アプリケーション Basecamp をEメールから利用可能にするアプリケーション「<a href="http://www.mailmanagr.com/">Mailmanagr</a>」の開発を行っています。</p>

<h2>翻訳者について</h2>

<img alt="翻訳者矢倉眞隆の写真" src="http://forum-test.oslo.osa/kirby/content/articles/303-3-/mitsue-myakura.jpg" class="right" />

<h3>矢倉 眞隆 (Masataka Yakura)</h3>
<p>1984年生まれ。株式会社ミツエーリンクスにて、社内の品質改善活動や Web 標準 の普及啓蒙を行っている。W3C HTML WG メンバー。</p>

<h3><a href="http://www.mitsue.co.jp/">株式会社 ミツエーリンクス</a></h3>
<p>
1990年創業。大規模な Web サイト開発を得意とするインフォメーション・インテ グレータ。自社コンテンツの <a href="http://standards.mitsue.co.jp/">Web 標準 Blog</a> や<a href="http://accessibility.mitsue.co.jp/">アクセシビリティ Blog</a> より、Web フロントエンド技術に関するさまざまな情報を発信中。</p>
