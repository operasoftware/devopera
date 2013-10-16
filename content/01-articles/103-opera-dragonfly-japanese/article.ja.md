Title: Opera Dragonfly 入門 (Japanese)
----
Date: 2008-05-15 16:00:26
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

<p class="note">This article is <strong>deprecated</strong>; instead, consult our <a href="http://www.opera.com/dragonfly/documentation/">Opera Dragonfly 1.0 Field Guide</a> for up-to-date information.</p>

<p>この記事は「<a href="http://dev.opera.com/articles/view/introduction-to-opera-dragonfly/">Introduction to Opera Dragonfly</a>」の日本語訳です。<br />【翻訳：利部直、上廣剛、アンドレアス・ボーヴェンス】</p>

<h2>はじめに</h2>
<p>エキサイティングなニュースです！Opera Dragonfly が発表されました！Opera Dragonfly は Opera の提供する全く新しいウェブ開発ツールです。このアプリケーションは、ウェブ標準のデバック環境と問題解決のための効果的な仕組みを開発者に提供する軽快でパワフルなアプリケーションです。現在、以下の機能が提供されています：</p>

<ol>
<li>JavaScript デバッガ</li>
<li>DOM インスペクタ</li>
<li>CSS インスペクタ</li>
<li>コマンドラインからのコマンド入力</li>
<li>ページに関連する CSS と JavaScript の検証エラーと警告を出力するエラーコンソール</li>
<li>モバイル端末上でのダイレクトなデバッグを可能にするプロキシ</li>
</ol>

<p>現在のリリースバージョンはアルファ版なので、まだ少し荒削りなところが残っています。私たちはまず最も重要な機能を実装しましたが、今後さらに機能を発展させていく予定です。この開発ツールのための大きな計画が現在進行しており、数ヶ月以内にさらにすばらしい機能が追加されることを期待していてください。
このツールはオープンソース BSD ライセンスの基にリリースされます。</p>

<p>本稿の構成は以下のとおりです：</p>

<ul>
<li><a href="#gettingdragonfly">Opera Dragonfly はどこから入手できますか</a></li>
<li><a href="#installingdragonfly">Opera Dragonfly にアクセスするには</a></li>
<li><a href="#UIoverview">ユーザインタフェースの概要</a></li>
<li><a href="#basictasks">基本操作の実行方法</a>
<ul>
 <li><a href="#script">Script タブ</a>
 <ul>
  <li><a href="#callstack">Call Stack パネル</a></li>
  <li><a href="#threadlog">Call Stack パネル</a></li>
  <li><a href="#frameinspection">Frame Inspection パネル</a></li>
  <li><a href="#commandline">Command Line</a></li>
 </ul>
 </li>
 <li><a href="#dom">DOM タブ</a></li>
 <li><a href="#stylesheetstab">Stylesheets タブ</a>
 <ul>
  <li><a href="#stylestab">Styles タブ</a></li>
  <li><a href="#domattributestab">DOM Attributes タブ</a></li>
  <li><a href="#layouttab">Layout タブ</a></li>
 </ul>
 </li>
 <li><a href="#console">Console タブ</a></li>
</ul>
</li>
<li><a href="#summary">まとめ</a></li>
</ul>


<h2 id="gettingdragonfly">Opera Dragonfly はどこから入手できますか</h2>

<p>入手方法はいたってシンプルです。最近のバージョン(最新はバージョン 9.5)の Opera は  Scope と呼ばれるコードベースを提供しています。
これはブラウザによってレンダリングされるすべてのページのコード構造を、インスペクション、出力、検証可能にするモニタリングシステムです。
Scope が実装されていれば、どの Opera のバージョンでも新しい Opera Dragonfly クライアントを実行できます。新しい <a href="http://labs.opera.com/news/2008/04/25/">Kestrel ベータ2</a> も同様に、ブラウザをインストールさえすれば準備完了となります。

ご注意： Mac 版において OS X 上のビデオメモリの破損が原因でクラッシュするというバグが発見されました。この不具合を回避するための対策を施した新しいビルド <a href="http://snapshot.opera.com/mac/o950s_4808.dmg">http://snapshot.opera.com/mac/o950s_4808.dmg</a> が提供されています。
</p>

<h2 id="installingdragonfly">Opera Dragonfly にアクセスするには</h2>

<p>図1のように ツール → 詳細ツール → 開発者用ツール というメニューオプションを選択してください。Opera Dragonfly の UI がロードされます。</p>

<img alt="Opera Dragonfly クライアントを起動するメニューオプション" src="http://forum-test.oslo.osa/kirby/content/articles/103-opera-dragonfly-japanese/menuoptionsja.png" />

<p class="comment">図1：Opera Dragonfly クライアントの起動</p>

<p>注：何らかの理由で別のバージョンの Opera Dragonfly クライアントにリバートしたいことがあるかも知れません。Opera 設定ページから、開発者用セクションを見つけ、必ず図2に示すように設定してください。開発者用ツール URL フィールドの URL は Opera Dragonfly クライアントの場所を指しています。ここにクライアントのバージョンを切り替えるにはこのURLを変更します。</p>

<img alt="開発者用ツール設定セクション" src="http://forum-test.oslo.osa/kirby/content/articles/103-opera-dragonfly-japanese/configscreenja.png" />

<p class="comment">図2：opera:config 開発者用ツール設定セクション</p>

<p>設定を更新して保存したら、更新が有効になるように Opera を再起動する必要があります。</p>

<h2 id="UIoverview">ユーザインタフェースの概要</h2>

<p>クライアントはデフォルトでは図3のような概観をしています。さあ、探検してみましょう。</p>

<img alt="Opera Dragonfly のユーザインタフェース" src="/articles/view/introduction-to-opera-dragonfly/dragonflyui.gif" />

<p class="comment">図3：デフォルトの Opera Dragonfly UI</p>

<p>それぞれの領域は以下のように対応しています：</p>

<ol>
<li>Script 、DOM 、Console タブ：ユーザインタフェースからこれらの主な機能をタブで選択します。Opera ブラウザに読み込まれたウェブサイトを様々な角度から検査することができます。</li>
<li>サイトインフォメーション・ウインドウ：どのサイトが今 Opera ブラウザに読み込まれているか、そしてどの JavaScript と CSS ファイルがそれらに適用されているか等の情報を表示します。ドロップダウンメニューは現在読み込まれているサイトを表示し、どれか1つを選択すると、その下に選択されたサイトの情報が表示されます。もしくは、Environment タブが選択されていると、ブラウザが実行されているシステムについての情報が表示されます。（図4を参照）</li>
<li>コンテクスト依存ツール：これらの領域にはスクリプト、DOM 、Console タブのうちどれが選択されているかに依存して、別々のツールが表示されます。各ツールの詳細は後ほど見ていきます。</li>
<li>検索ボックス／クイック検索：内部の領域にあるすべての語句を検索できます。</li>
<li>メインインフォメーション・ウィンドウ：サイトインフォメーション・ウィンドウから選択された別々のスクリプトや CSS 等のファイルのコンテンツを表示します。コンテンツは現在どのメインタブがアクティブかによって異なります。それぞれのコンテンツについては後ほど見ていきます。</li>
<li>Command Line：JavaScript コマンドを入力して実行することができます。</li>
<li>インフォメーション・パネル：このパネルはどのメインタブが選択されているかによって変化します。検査しているスクリプト、スタイル等についての情報を表示します。これも後半で見ていきます。</li>
<li>このインジケータはデバッガとデバッグしているウェブサイトの状態を表示します。</li>

</ol>

<img alt="Environment タブは現在実行しているシステムについての詳細を提供します" src="/articles/view/introduction-to-opera-dragonfly/runningenvironment.gif" />

<p class="comment">図4：Environment タブは現在実行しているシステムについての詳細を提供します。</p>

<p>Opera Dragonfly の基礎を理解しましたか？さあ、それぞれのコンテクストで何ができるかを見ていきましょう！</p>

<h2 id="basictasks">基本的なタスクの実行方法</h2>

<p>それでは Opera Dragonfly を実行して、好きなウェブサイトをロードしてください。図5のように見えるでしょう。</p>

<img alt="Opera で開いた筆者のお気に入りウェブサイト" src="http://forum-test.oslo.osa/kirby/content/articles/103-opera-dragonfly-japanese/websitesinoperaja.png" />

<p class="comment">図5：Kestrel ベータ2で開いた筆者のお気に入りウェブサイト</p>

<p>開いたサイトは図6のように、 Opera Dragonfly UI のなかのドロップダウンメニューに表示されます。</p>

<img alt="Opera Dragonfly サイトインフォメーション・ウィンドウに表示されたウェブサイト" src="/articles/view/introduction-to-opera-dragonfly/sitesindragonfly.gif" />

<p class="comment">図6：Opera Dragonfly サイトインフォメーション・ウィンドウに表示されたウェブサイト</p>

<h3 id="script">Script タブ</h3>

<p>Script タブを選択し、ドロップダウンメニューからどれか１つのサイトを選択してください。サイトインフォメーション・ウィンドウのサイト URL の下にある黒い行をクリックしてください。図7のように画面が更新されます。ここでは同僚の実験サイトを選択していますが、どのようなサイトを選んでもかまいません。</p>

<img alt="Opera Dragonfly で Javascript ファイルを検査します" src="/articles/view/introduction-to-opera-dragonfly/javascriptviewer.gif" />

<p class="comment">図7：Opera Dragonfly で Javascript ファイルを検査します</p>

<p>行番号をクリックしてブレークポイントを設定できます。図8の例を参照してください。</p>

<img alt="JavaScript にブレークポイントを設定します" src="/articles/view/introduction-to-opera-dragonfly/breakpoints.gif" />

<p class="comment">図8：JavaScript にブレークポイントを設定します</p>

<p>ブレークポイントを設定した後でスクリプトを実行すると（例えば、ボタンクリックなど、あなたがブレークポイントを設定した部分のスクリプトが実行される操作により）、ブレークポイントでスクリプトが停止し、その時点で環境がどのようになっているか（例えば、各変数がどのような値を持っているか等）分析できます。 図9はボタンをクリックして <code>playSong()</code> を実行させた際の結果です。矢印はコードが停止したブレークポイントを示しています。</p>

<img alt="スクリプトの実行が停止したブレークポイント" src="/articles/view/introduction-to-opera-dragonfly/activebreakpoint.gif" />

<p class="comment">図9：矢印はスクリプトの実行が停止したブレークポイントを示している</p>

<p>ウィンドウ下部の HTML DOM パンくずリストは、検査されているアイテムが DOM ツリーのどこに位置しているかを指摘します。これは全てのビューで表示されます。また、このタブの左上に「Reload selected window in the host」というボタンがあります。これは、現在ブラウザで選択されているウェブページを初期状態にリフレッシュするために再度読み込みます。</p>  

<img alt="スクリプトビューのメインボタン・コントロール" src="/articles/view/introduction-to-opera-dragonfly/jsbuttons.gif" />

<p class="comment">図10：スクリプトビューのメインボタン・コントロール</p>

<p>メインボタン（図10参照）は左から右の順に以下の機能を提供します：</p>

<ul>
<li>Continue (F8)：現在選択されているスクリプトを、ブレークポイントで停止した後、継続実行します</li>
<li>Step into (F11)：ブレークポイントが含まれている現在の関数の後に、スタック上の次の関数に移動します。</li>
<li>Step over (F10)：ブレークポイントが設定されている行の次の行に移動します。連続して使うことでスクリプトの実行パスを追跡できます。</li>
<li>Step out (Shift + F11)： 関数を抜けます。</li>
<li>Stop at new thread：スクリプトが実行したとき次のスレッドで停止するかどうかを指定します。</li>
<li>Stop at error：スクリプトが実行したとき次のエラーで停止するかどうかを指定します。</li>
<li>Log threads：スレッドを Thread パネルでロギングするかどうかを指定します。</li>
</ul>

<h4 id="callstack">Call Stack パネル</h4>

<p>コールスタックは特定の関数コールの実行時、現在の環境がどうなっているか（どの関数ががどの順序でコールされたか等）を表示します。例えば、関数AがBをコールし、それがCをコールしたとします。最初にCが、次にB、そしてAの順にリターンします。各関数コールは、たとえば変数値を変えるなど、環境に何らかの変化をもたらします。 図11は最初のブレークポイントまで実行し、その後スタック上の次の関数にステップインしたときコールスタックがどのように見えるかを例示しています。</p>

<img alt="Call Stack パネル" src="/articles/view/introduction-to-opera-dragonfly/callstack.gif" />

<p class="comment">図11：Call Stack パネルが様々な関数コール表示しています</p>

<p>ここでスタック中のそれぞれのコールをクリックすると、スクリプトウィンドウの中の識別矢印がそのコールの位置に表示されます。試してみてください!</p>

<h4 id="threadlog">Thread Log パネル</h4>

<p>Thread Log パネルは現在検査しているスクリプトを実行している最中にそれぞれのスレッドの詳細を記録します。ただし、Log threads ボタンを押しておく必要があります（上記参照）。
図12はコードを実行した後のスレッドログウィンドウです。</p>

<img alt="実行中の Thread Log パネル" src="/articles/view/introduction-to-opera-dragonfly/threads.gif" />

<p class="comment">図12：実行中の Thread Log パネル</p>

<p>Thread Log パネルには以下の2つのボタンがあります：</p>

<ul>
<li>Clear thread log：ログを消去します。</li>
<li>Export thread log：現在のスレッドログを新しいブラウザウィンドウにテキスト形式で出力します。</li>
</ul>

<h4 id="frameinspection">Frame Inspection パネル</h4>

<p>Frame Inspection パネルは図13に示すように現在のコールスタックの全てのプロパティ値等を表示します。フレームはコールスタックの一部分です。Call Stack パネルからコールを選択して一連のフレームを変更することができます。</p>

<img alt="Frame Inspection パネル" src="/articles/view/introduction-to-opera-dragonfly/frameinspection.gif" />

<p class="comment">図13：Frame Inspection パネル、スタックから選択されたコールの全てのプロパティ値を表示している</p>

<p>Frame Inspection パネルの左上のボタン「Hide default properties in global scope」は多くの場合必要のないデフォルトプロパティを隠します。試してみてください。</p>

<h4 id="commandline">コマンドライン</h4>

<p>JavaScript コードのテストを行なうために、Command Line パネルから JavaScript コマンドを入力して実行できます。一例として、次のようなシンプルなコマンドを入力してみてください：</p>

<pre>var a = 1;
var b = 2;
var c = a + b;</pre>

<pre>document.getElementsByTagName(&#39;div&#39;);</pre>


<h3 id="dom">DOM タブ</h3>

<p>さて、DOM タブを選択してウェブサイトを選んでみてください。画面は選択されたサイトの DOM を展開可能なビュー形式で表示します。加えて、Styles 、DOM Attributes、 Layout タブが右側に表示されますが、これについては後に触れます（図14を参照）。上のパネルの下にくっついる２列目のタブを Document から Stylesheets に切り替えると、サイトインフォメーション・ウィンドウの画面がそれぞれのウェブページにどの CSS が適用されているのかを表示します。今はタブを Document のままにしておきましょう。</p>

<img alt="Opera Dragonfly でサイトの DOM を検査します" src="/articles/view/introduction-to-opera-dragonfly/domviewer.gif" />

<p class="comment">図14：Opera Dragonfly でサイトの DOM を検査します</p>

<p>異なる要素を選択すると表示がどう変化するか、しばらく DOM ツリーで遊んでみてください。緑色の強調表示は現在選択されている要素を指定していることに注意してください。</p>

<img alt="DOM ボタン" src="/articles/view/introduction-to-opera-dragonfly/dombuttons.gif" />

<p class="comment">図15：DOM ビューのメインボタン・コントロール</p>

<p>DOMビューのメインボタン (図15参照) は左から右に以下の機能を提供します：</p>

<ul>
<li>Expand the DOM tree：ボタンをクリックすると全ての DOM ツリーを展開します。</li>
<li>Export current DOM view：ボタンをクリックすると閉じられているノードを除く現在の DOM ビューを「Export」という新規タブに表示します。</li>
<li>Find element by clicking：このボタンが押されていると、ページのどこでもクリックすることで DOM インスペクター上の要素を選択することができます。</li>
<li>Highlight by mouse hover：このボタンが押されていると、マウスが要素を通過すると、選択要素が DOM インスペクター上で輪郭強調表示されます。</li>
<li>Update DOM when a node is removed： このボタンが押されているときだけ、JavaScript コマンドが DOM からプログラミング的にノードを削除した際、その結果が反映されます。例えば、このようなコマンド　<code>div.parentNode.removeChild(div);</code> を Opera Dragonfly コマンドラインから実行したときです。</li>
<li>Show comment nodes：このボタンを押すと HTML と CSS のコメント行が表示されます。</li>
<li>Show whitespace nodes：このボタンを押すと、空ノードが表示示されます。</li>
<li>Show DOM in tree view：このボタンを押すと、DOM ツリー階層をより良く把握するために、それぞれのノードがツリーの枝状に表示されます。どのビュースタイルを使うかは個人の好みによります。</li>
<li>Help： ブラウザで Opera Dragonfly ドキュメントページを開きます。</li>
</ul>

<h3 id="stylesheetstab">Stylesheets タブ</h3>

<p>さあ、Stylesheets タブをクリックしてみましょう。サイトインフォメーション・ウィンドウにロードされたウェブサイトに関連した各々のスタイルシートの情報を呼び出します。図16に示すように、異なるスタイルシートを選択すると、ビューが変わって Stylesheets タブの下部にスタイルシートのコンテンツを表示します。</p>

<img alt="スタイルシートを検査します" src="/articles/view/introduction-to-opera-dragonfly/CSSViewer.gif" />

<p class="comment">図16：Opera Dragonfly でスタイルシートを検査します。</p>

<p>Stylesheets タブの左上に Use shortcuts for properties ボタンがあり、全ての CSS プロパティを展開する一般表示と簡略表示を切り替えることができます。</p>

<p>ここまでで、画面の左側で何が起こっているのか見てきました。右側にも注意を向けてみましょう。</p>

<h4 id="stylestab">Style タブ</h4>

<p>Style タブは図17に示すように、&quot;Computed Style&quot; と &quot;Styles&quot; の2つのセクションから構成されます。</p>

<img alt="the styles tab" src="/articles/view/introduction-to-opera-dragonfly/stylestab.gif" />

<p class="comment">図17：Styles タブの2つのセクション：Computed style と Styles</p>

<p>Styles セクションは今選択されている DOM ノードに適用されている全ての CSS を表示し、Computed style セクションは今選択されている DOM ノードに適用されている実際の計算された値を表示します。図17に見られるように、各々のスタイルは当該 DOM ノードに直接適用されているものと、親ノードから継承されているものに分割され効果的に表示されます。</p>

<p>図18に示すように、このタブは左上に2つのボタンを持ちます。これらは左から右に：</p>

<ul>
<li>Hide initial values in computed styles：計算の初期値が表示・非表示されます。</li>
<li>Hide shorthands in computed styles：実際の計算された値の簡略値が表示・非表示されます。</li>
</ul>

<img alt="Styles タブのボタン" src="/articles/view/introduction-to-opera-dragonfly/stylesbuttons.gif" />

<p class="comment">図18：Styles タブのボタン</p>

<h4 id="domattributestab">DOM Attributes タブ</h4>

<p>このタブは選択されている要素に対応する DOM オブジェクトの全ての属性を表示します。これらは選択された要素の HTML 属性とは異なることに注意してください。例えば<code>img</code> 要素を選択すると、図19に示すように <code>src</code> DOM 属性の完全 URL が取得できます。</p>

<img alt="DOM Attributes タブ" src="/articles/view/introduction-to-opera-dragonfly/DOMattributestab.gif" />

<p class="comment">図19：DOM Attributes タブ</p>

<p>このタブの左上にある Hide empty strings and null values ボタンを押すと、空行とnull値は表示されません。
</p>

<h4 id="layouttab">Layout タブ</h4>

<p>図20のように、この便利なタブは現在選択されている DOM ノードのボックスモデルとしてのビジュアル表現、当該ノードと親子ノードの関連を表すパンくずリスト、一連のオフセット値を表示します。</p>

<img alt="Layout タブ" src="/articles/view/introduction-to-opera-dragonfly/layouttab.gif" />

<p class="comment">図20：Layout タブ</p>


<h3 id="console">コンソール</h3>

<p>最後に Console タブをクリックしてください。図21に示すように、画面が CSS と JavaScript における検証エラーや警告を表示します。</p>  

<img alt="コンソールビューは CSS と JavaScript における検証エラーや警告を表示します" src="/articles/view/introduction-to-opera-dragonfly/consoleview.gif" />

<p class="comment">図21：コンソールビューは CSS と JavaScript における検証エラーや警告を表示します。</p>

<img alt="The console buttons" src="/articles/view/introduction-to-opera-dragonfly/consolebuttons.gif" />

<p class="comment">図22：コンソール・ビューのメインボタン</p>

<p>コンソール・ビューのボタン（図22参照）は左から右に以下のように機能します：</p>
<ul>
<li>Clear log：Content タブの現在のコンテンツをクリアします。</li>
<li>Use selected runtime as filter：全ランタイムの代わりに、選択されたランタイムに対応するコンソール出力のみを表示します。</li>
</ul>

<h2 id="summary">まとめ</h2>

<p>本稿ではインストール方法を含む Opera Dragonfly の基礎を掲載し、基本操作のガイドツアーを提供しました。より詳しく知りたい場合は <a href="http://www.opera.com/dragonfly/">Opera Dragonfly ウェブサイト</a>をご覧ください。質問やご意見があれば、<a href="http://dev.opera.com/forums/forum/11057">Opera Dragonfly フォーラム</a>に投稿して下さい！</p>
