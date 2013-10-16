Title: Opera のスキン パート 1: 入門
----
Date: 2011-08-11 08:00:35
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

<p class="note">この翻訳文は、 <a href="http://about.me/amatanoyo">数多世界</a>氏の翻訳を本人の許諾の下一部編集し、また本人の依頼の元私名義で Dev.Opera に掲載するものです。<br />This translated document was originally written by <a href="http://about.me/amatanoyo">amatanoyo</a>. I&#39;ve been requested to post this to Dev.Opera credited to me, with permission to edit the original translation.</p>

<h2 id="intro">はじめに</h2>
<p><a href="http://dev.opera.com/articles/view/getting-started-with-opera-skinning/" title="Simple Opera skinning article">Opera のスキンに関する私の最初の記事</a>では、スキンファイルをどこから入手するかや、それをどのように解凍し圧縮するか、ボタンや背景のタイル画像といった基本的な画像ファイルの置き換えの例などを含め、 Opera のスキンの世界について簡単にご説明しました。このシリーズではさらに深く掘り下げて、より実践的な例や skin.ini ファイルに関する詳細なガイド、要素のリファレンス、そして効果的なスキンを作成するためのいくつかの有益な情報や技をご紹介します。この記事の内容は Opera 9.5 用に更新されています。</p>

<p>このシリーズの全5記事には上のリンクからアクセスできます。順番に読む必要はありません — Opera のスキンに関する知識のレベルに関係なく皆様にとって有益な情報があるでしょうから、最も興味を持ったパートまで飛ばすと良いでしょう。(訳注: 他のパートの日本語訳はまだ提供されていないので日本語版にはリンクがありません。それらについては原文をご参照下さい。)</p>


<p>パート 1 の内容:</p>

<h3>目次</h3>
<ul>
<li><a href="#locating">スキンファイルのありか</a></li>
<li><a href="#unpacking">スキンの圧縮・解凍</a></li>
<li><a href="#structure">スキンの構成</a></li>
<li><a href="#skinini">skin.ini の紹介</a></li>
<li><a href="#native">ネイティブ／非ネイティブスキン</a></li>
<li><a href="#fallback">フォールバック</a></li>
<li><a href="#compatibility">上位・下位互換</a></li>
<li><a href="#filelist">標準スキンのフォルダ／ファイルのリスト</a></li>
<li><a href="#imageformats">画像のフォーマット</a></li>
<li><a href="#animations">アニメーション</a></li>
<li><a href="#loading">画像の読み込み</a></li>
</ul>

<h2 id="locating">スキンファイルのありか</h2>
<p>スキンを編集する前に、まずは実際に使用するファイルを探しましょう。設置場所は Opera が動作しているオペレーティングシステムに依存しますので、編集したいスキン — デフォルトのスキンの設置場所は <a href="http://my.opera.com/community/customize/skins/">my.opera.com</a> からダウンロード出来る他のスキンパッケージとは異なります。以下のリストは、さまざまなオペレーティングシステムにおけるスキンパッケージ別の設置場所を表しています。:</p>

<ul>
	<li>Windows:
		<ul>
			<li>標準スキン(Opera Standard のこと)は、 Opera のインストールディレクトリにある <code>Skin</code> にあります。大抵の場合 <code>C:\Program files\Opera\Skin</code> にあります。</li>
			<li>ダウンロードしたスキンは <code>profile\Skin</code> に保存されています。 <code>profile</code> ディレクトリの設置場所を見つけるには、 “ヘルプ &gt; Opera について” を確認しましょう。ショートカットとして、 Windowsメニューから “スタート &gt; 名前を指定して実行” で <code>%APPDATA%\Opera\profile\Skin</code> と入力する方法によりディレクトリにアクセスできます。</li>
		</ul>
	</li>
	<li>Linux/Unix:
		<ul>
			<li>標準スキンは <code>/usr/share/opera/skin</code> にあります。</li>
			<li>ダウンロードされたスキンは <code>~/.opera/skin</code> の中に保存されます。 <code>.opera</code> は隠しディレクトリですので、直接パスを入力する必要があるかもしれません。</li>
		</ul>
	</li>
	<li>Mac OS X:
		<ul>
			<li>標準スキンは <code>application</code> パッケージの中にあり、通常は <code>/Applications/Opera.app/Contents/Resources/Skin</code> にあります(基本的に、アプリケーションフォルダにある Opera のアイコンを右クリック(または Control + クリック)し <code>パッケージの内容を表示</code> を選択することで、 Opera の内部ファイルを表示できます)。</li>
			<li>ダウンロードされたスキンは、 <code>~/Library/Preferences/Opera Preferences/Skin</code> の中に保存されます。</li>
		</ul>
	</li>
</ul>

<p>Opera は標準スキンである standard_skin.zip と、例えば windows_skin.zip や mac_skin.zip と呼ばれるネイティブスキンを同梱しています。ネイティブスキンは画像ファイルを含んでいない代わりに、標準スキンからの画像を使用しています。ダウンロードしたスキンのファイル名は、通常スキン名に似たものとなっています。</p>


<h3 id="unpacking">スキンの圧縮・解凍</h3>
<p>スキンは zip (.zip) で圧縮されたファイルです。 Opera がスキンを適用するとき、 Opera はパッケージからオンザフライで要求された画像を解凍し読み込みます — たとえ skin.ini から一回以上呼び出されたとしても、どの画像も一度だけ読み込まれます。</p>

<p>スキンを編集する前に、 WinZip や 7zip といった解凍ソフトを使ってスキンを解凍する必要があります。また、後で圧縮することになるので、特定の設置場所で解凍する必要はありません。まずは試しです — 標準的な Opera のスキンを見つけて解凍しましょう。 (Opera 9.5x で見られる)このパッケージのフォルダ構造は次の節で紹介します。</p>

<p>スキン編集後、 Opera が読み込めるようにもう一度圧縮する必要があります。 skin.ini や画像ファイル/フォルダをまとめてフォルダに入れ、このフォルダの全てのコンテンツを選択した状態で、新しい zip ファイルとして圧縮してください。</p>

<p>Opera のスキンを読み込むためには、 zip ファイルを<a href="#locating">上記</a>で示したダウンロードされたスキンの格納されるフォルダに zip を置き、 Opera を再起動した後 &quot;ツール &gt; 外観の設定&quot; でスキンを選択しなければなりません — その際表示されるスキンのリストからスキンを選択できます。また、もし zip ファイルのルートディレクトリに skin.ini がない場合、「続行することができません。お使いのOperaのバージョンにあったスキンを選択してください。」というエラーメッセージを Opera は表示します。</p>


<h3 id="structure">スキンの構成</h3>
<p>skin.zip ファイルを解凍した後に、たくさんの画像が入っているフォルダと skin.ini という名前のファイルを確認できると思います。この ini ファイルはどのテキストエディタでも編集することができ、 Opera に表示されるスキン名や、ユーザーインターフェイスのあらゆる要素で使用される画像、テキストや背景色といったスキンのオプションを決められます。</p>
<p>フォルダにはスキンで使用される画像が入っています。フォルダはスキンの動作のためには必要とされていません — 全ての画像を zip のルートレベルに置くことも出来ます — しかし、全部を整理して扱うには重宝します。</p>
<p>Opera の標準スキンの内容は <a href="#filelist">画像について</a> で説明します。</p>


<h3 id="skinini">skin.ini の紹介</h3>
<p>どのスキンのルートレベルにも見つけられる skin.ini はスキンを制御し形作るためのファイルです。このファイルにはメタ情報や諸設定、スキンで使用される各要素の定義がなされています。</p>
<p>ファイルの初めに、 <code>[Info]</code> と始まるメタ情報セクションが書かれているのがわかります。このセクションは以下のようになっているのがわかります:</p>

<pre>[Info]
Name=Opera7 Standard Skin
Author=Opera Software
Version=3
Preview Image=</pre>

<ul>
<li><code>Name</code> と <code>Author</code>: 最初の二つのオプションには、スキン自体の名称とスキンの作成者を記述します。これらは、スキンのダウンロード後に表示されるダイアログや「外観の設定」ダイアログのスキンの一覧に表示されるものです。</li>
<li><code>Version=</code>: この項目はスキンで使用されている skin.ini そのもののファイルバージョンです。スキンのバージョンを表すものではありません。 Opera 9.5 もしくはそれ以上のバージョンに向けたスキンを作るのであれば、 <code>3</code> と記述してください。</li>
<li><code>Preview Image=</code>: この項目は使用されません。この行を省略することもできます。</li>
</ul>

<p>この次のセクションである <code>[Options]</code> は、スキンがネイティブであるかどうかといった一般的なオプションを指定するためのものです(以下を参照してください)。他のセクションではスキンの要素を定義します。これらのセクションについては、<a href="http://dev.opera.com/articles/view/opera-skinning-part-2-skinning-examples/">このシリーズの後程</a>で触れます。</p>

<h3 id="native">ネイティブ/非ネイティブスキン</h3>
<p>Opera にはネイティブとノーマルの2種類のスキンがあります。2種間の基本的な違いは次の通りです:</p>
<ul>
<li><p>ノーマルスキンは、ボタンの画像、背景、ダイアログのボタン、スクロールバー、その他多くの要素に及ぶ、ほぼ全てを作れるカズタマイズ性に富んだスキンです。使用中のオペレーティングシステムや他のアプリケーションの外見とは無関係な独自のスタイルを Opera に適用することができます。</p></li>
<li><p>ネイティブスキンはほとんどの要素についてオペレーティングシステムの要素を使用します。ボタンの画像だけがスキンで指定できます。背景やダイアログなどその他全ての要素は実行中のオペレーティングシステムによって描画されます。これにより、 Opera はよりそのオペレーティングシステムのネイティブアプリケーションらしい見栄えになり、他のシステム上のアプリケーションとの統一感が増します。</p>
<p>ネイティブスキンは Opera が動作する全てのオペレーティングシステムでサポートされています。 Windows では自分が使用している Windows のテーマを元に、 Linux では Qt ツールキットから要素を取得しています。(訳注: Opera 10.60 以降では実行中のデスクトップ環境から取得しています。)</p>

<p>スキンをネイティブスキンとして扱うためには、 skin.ini に以下を記入してください。これによってスキン読み込み時にしかるべくオペレーティングシステム ネイティブなオプションが自動的に設定されます:</p>

<pre>[Options]
Native Skin = 1</pre>

<p>ネイティブではないスキンではこの行を省略できます。 Opera はデフォルトでネイディブではないスキンとして処理します。</p></li>
</ul>


<h3 id="fallback">フォールバック</h3>

<p>使用しているスキンから要素を取得できない場合、空白を表示する代わりに、 Opera は自動的にフォールバックし “Opera Standard” にある要素を取得します。要素を定義する skin.ini に該当するものがない — スキンパッケージ内に該当画像がなくても心配無用です。</p>

<p>対応画像がないという状況が発生するのは、古いバージョン向けに作成された Opera のスキンを適用したり、最新の変更で新たにボタンが追加されたりといった場合です。対応画像がないために空白が表示されるのを防ぐため、 Opera は標準スキンが要素を含んでいるかを確認し、もし存在した場合その画像(アイコン)を表示します。場合によってはスキンとの統一感のないボタンが表示されることもありますが、画像がないだけで機能が失われないようにするには仕方ありません。</p>

<p>この技術はネイティブスキンにも使用されています、ネイティブスキンには一切のボタン画像が含まれていません — Opera がネイティブスキンを描画するために、実際のボタン画像は標準スキンから読み込まれるようになっています。</p>

<p>バックグラウンドやフォアグラウンドの画像(ボタン・ダイアログボタンなど)でフォールバックを使用できないようにするには、<code>[Options]</code> セクションの <code>Fallback background</code> と <code>Fallback foreground</code> の設定を使います:</p>

<pre>[Options]
Fallback foreground			= 1
Fallback background			= 1</pre>

<p>どちらの設定もデフォルトでは有効 (<code>1</code>) になっているので、デフォルトから設定を変えたい場合にのみこれらの行を追加する必要があります。</p>
<p><strong>注意</strong>: 上位互換性がなくなるためこの設定の変更は推奨されません!</p>


<h3 id="compatibility">上位・下位互換</h3>
<p>Opera は Opera 7 以降向けに作成されたあらゆるスキンを読み込むことができます。スキン中にある画像全てを表示し、もし該当セクションが無くても “Opera Standard” スキンから読み込むことができる前述の <a href="#fallback">フォールバック機能</a>があります。</p>
<p>追加画像、たとえば自作画像や新しいバージョンの Opera から追加された画像は、無視されます。そのような画像があっても、 Opera がそのスキンの読み込みを中止することはありません。</p>


<h3 id="filelist">標準スキンのフォルダ/ファイルのリスト</h3>
<p>新しいスキンの作成は、標準スキンのようなあらかじめ用意されているスキンを編集すると簡単に始められます。</p>
<p>以下のフォルダリストは Opera 9.5x に同梱されている標準スキンを元に作成されています。 <a href="http://my.opera.com/community/customize/skins/">MyOpera からダウンロードできる多くのスキン</a>も同様のディレクトリ構造をとっていますが、全てにおいてまったく同じだとは保証されません。もし、編集しようとするスキンが標準スキンとは異なるディレクトリ構造をとっていたとしても、ファイル名を確認したり画像ビューアなどを利用したりすることで探しているファイルがどこに保存されているのかがわかります。おおよそスキン作成者は、合理的な表記法やファイル構造を使用していると思います!</p>
<table>
	<tr>
		<th>フォルダ</th>
		<th>説明</th>
		<th>プレビュー</th>
	</tr>
	<tr>
		<td>a/</td>
		<td>キーボードナビゲーションで使用される、選択要素のハイライト。この部分は編集すべきではありません。</td>
		<td><img src="/articles/view/opera-skinning/x1_a.png" width="46" height="25" alt="a" /></td>
	</tr>
	<tr>
		<td>account/</td>
		<td>Opera 9.5 では使われません。</td>
		<td><img src="/articles/view/opera-skinning/x1_account.png" width="58" height="13" alt="Account" /></td>
	</tr>
	<tr>
		<td>anims/</td>
		<td>スピードダイヤルや Opera Link など、様々な部分で使用されるアニメーション。</td>
		<td><img src="/articles/view/opera-skinning/x1_anims.png" width="45" height="24" alt="Animations" /></td>
	</tr>
	<tr>
		<td>backgrounds/</td>
		<td>ツールバーの背景画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_backgrounds.png" width="143" height="30" alt="Backgrounds" /></td>
	</tr>
	<tr>
		<td>border/</td>
		<td>ツールバーやダイアログ内、ツールバーにあるボタン回りの境界線。</td>
		<td><img src="/articles/view/opera-skinning/x1_border.png" width="45" height="29" alt="Border" /></td>
	</tr>
	<tr>
		<td>buttons/</td>
		<td>全てのツールバーのボタンで使用する画像。 skin.ini の Boxes や Images のセクションで参照される。タブバー上のタブのボタンの画像も含まれる。</td>
		<td><img src="/articles/view/opera-skinning/x1_buttons.png" width="218" height="22" alt="Buttons" /><br /><img src="/articles/view/opera-skinning/x1_tabbutton.png" alt="Tab button" /></td>
	</tr>
	<tr>
		<td>caption/</td>
		<td>メニューバー右上に表示される、最小化・元に戻す・閉じるボタン。Macであれば左側に表示される。</td>
		<td><img src="/articles/view/opera-skinning/x1_caption.png" width="67" height="19" alt="Caption" /></td>
	</tr>
	<tr>
		<td>checkbox/</td>
		<td>チェックボックスで使用する画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_checkbox.png" width="35" height="14" alt="Checkbox" /></td>
	</tr>
	<tr>
		<td>contacts/</td>
		<td>アドレス帳のリストで使用する画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_contacts.png" width="195" height="16" alt="Contacts" /></td>
	</tr>
	<tr>
		<td>dialog_images/</td>
		<td>ダイアログやアラートが表示される際、警告文とともに表示される画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_dialogimages.png" width="188" height="32" alt="Dialog images" /></td>
	</tr>
	<tr>
		<td>dialog_page/</td>
		<td>ダイアログの内側の背景及び境界線で使用する画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_dialogpage.png" width="45" height="29" alt="Dialog page" /></td>
	</tr>
	<tr>
		<td>drop_insert/</td>
		<td>ボタンをドラッグ &amp; ドロップで配置する際に表示される境界線の画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_dropinsert.png" width="37" height="23" alt="Drop insert" /></td>
	</tr>
	<tr>
		<td>dropdown/</td>
		<td>ドロップダウンメニューの背景に使用される画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_dropdown.png" width="17" height="22" alt="drop down" /></td>
	</tr>
	<tr>
		<td>edit/</td>
		<td>アドレスバーなどの入力フォームやツリー・リストの表示で使用する画像。オペレーティングシステムによって定義されるものがあるため、全てを変更できるわけではない。</td>
		<td><img src="/articles/view/opera-skinning/x1_edit.png" width="45" height="32" alt="Edit" /></td>
	</tr>
	<tr>
		<td>expand_button/</td>
		<td>ダイアログ中でツリー式展開メニューに使用される矢印画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_expand_button.png" width="32" height="16" alt="Expand button" /></td>
	</tr>
	<tr>
		<td>header_button/</td>
		<td>ヘッダで使用する画像。メールや設定の一覧表示で上部に表示される。</td>
		<td><img src="/articles/view/opera-skinning/x1_headerbutton.png" width="133" height="20" alt="Header button" /></td>
	</tr>
	<tr>
		<td>icons/</td>
		<td>Opera で使用する全てのアイコン。</td>
		<td><img src="/articles/view/opera-skinning/x1_icons.png" width="186" height="16" alt="Icons" /></td>
	</tr>
	<tr>
		<td>link/</td>
		<td>Opera Link で使用されるステータスアイコン。</td>
		<td><img src="/articles/view/opera-skinning/x1_link.png" width="58" height="16" alt="Link" /></td>
	</tr>
	<tr>
		<td>notifier/</td>
		<td>ポップアップブロックの通知やインライン検索の背景で使用する画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_notifier.png" width="75" height="29" alt="Notifier" /></td>
	</tr>
	<tr>
		<td>pagebar_close_button/</td>
		<td>タブの閉じるボタンで使用する画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_pagebarclosebutton.png" width="79" height="16" alt="Pagebar close button" /></td>
	</tr>
	<tr>
		<td>panel_toggle/</td>
		<td>パネルの切り替えで使用する画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_paneltoggle.png" width="37" height="7" alt="Panel toggle" /></td>
	</tr>
	<tr>
		<td>progress/</td>
		<td>プログレスバーで使用する画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_progress.png" width="269" height="23" alt="Progress" /></td>
	</tr>
	<tr>
		<td>radio_button/</td>
		<td>ラジオボタンで使用する画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_radiobutton.png" width="33" height="14" alt="Radiobutton" /></td>
	</tr>
	<tr>
		<td>scrollbar/</td>
		<td>スクロールバーの背景やプルダウンメニューなどの矢印で使用する画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_scrollbar.png" width="96" height="29" alt="Scrollbar" /></td>
	</tr>
	<tr>
		<td>scrollbar_knob/</td>
		<td>スクロールバーの取っ手で使用する画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_scrollbar_knob.png" width="73" height="29" alt="Scrollbar knob" /></td>
	</tr>
	<tr>
		<td>selector_button/</td>
		<td>ツールバーのボタンやパネル切り替えのまわりの背景画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_selectorbutton.png" width="50" height="28" alt="Selector button" /></td>
	</tr>
	<tr>
		<td>smilies/</td>
		<td>全ての絵文字画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_smilies.png" width="225" height="17" alt="Smilies" /></td>
	</tr>
	<tr>
		<td>speeddial/</td>
		<td>アイコンや検索欄の境界線、スピードダイヤル設定画面の影つきのオーバーレイやアルファ透過性に対応していないシステムのための影なしのオーバーレイといった、スピードダイヤル上の小物の画像。</td>
		<td><img src="/articles/view/opera-skinning/x1_speeddial.png" width="206" height="87" alt="Speeddial" /></td>
	</tr>
	<tr>
		<td>trust_and_security_button/</td>
		<td>アドレスバーに表示される、セキュリティ関連で使用される画像。緑色のものはバージョン 9.5 から Extended Validation で使用される。</td>
		<td><img src="/articles/view/opera-skinning/x1_trustandsecuritybutton.png" width="124" height="22" alt="trust and security button" /></td>
	</tr>
</table>


<h3 id="imageformats">画像のフォーマット</h3>
<p>Opera は PNG, JPEG, BMP, GIF の各画像フォーマットをスキンにサポートしています。 PNG 画像はアルファチャンネルをサポートしているので部分的な透過画像に使用することができます。 JPEG 画像を背景に使用すると、場合によっては PNG よりも圧縮率がよくなります。</p>


<h3 id="animations">アニメーション</h3>
<p>Opera はアニメーション GIF やアニメーション PNG (<a href="http://wiki.mozilla.org/APNG_Specification">APNG フォーマット</a>) をサポートしています。 GIF は256色しか扱えないので、 APNG の方が好まれています。このようなアニメーションは、 Opera が読み込み中の際に表示されるものです。一般の画像ファイルと同様に使用されています。</p>


<h3 id="loading">画像の読み込み</h3>
<p>Opera はスキンに使用される全ての画像を一度しか読み込みません。 skin.ini にいくら多く参照を記述していても、 HTML 文書で同じ画像が複数箇所で使用されているのと同じように動作します。
この仕様は、メモリ消費量の削減に寄与しますが、障害が起こることもあります。それは、使用に応じて異なるパラメータを同一の画像に適用するようなことができないということです。スキン読み込み時、 Opera は最初に記述された画像のインスタンスを使用し、これとそのパラメータを記憶します。したがって、同じ画像を異なるパラメータで使用したいのであれば(例えばあるところでは<a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/#colorize">色付け</a>を使ってあるところではこれを無効にしたい場合)、異なるディレクトリから2つの異なる画像を読み込ませる必要があります。</p>
