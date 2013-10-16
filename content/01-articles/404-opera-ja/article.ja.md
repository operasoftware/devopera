Title: Opera エクステンション：ボタン、バッヂ、ポップアップ
----
Date: 2011-08-11 08:31:10
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

	    <h2>
	      はじめに</h2>
	    <p>この文書ではツールバー上のボタンの作り方やその構成について端から端まで全て解説していきます。ツールバー上のアイテムはバックグラウンドプロセスの一部として定義したり操作したりします。挿入されたスクリプトやポップアップから直接定義したり操作したりはできません。ボタンやバッヂ、ポップアップは <code>opera.coontexts.toolbar</code> に制御されますがこれについての詳細は、<a href="http://dev.opera.com/articles/view/extensions-api-browser-toolbar/">Button &amp; Badge API Guide</a> を参照してください。</p>
	    <h2>
	      目次</h2>
	    <ul>
	      <li>
		<a href="#toolbar_buttons">
		  ツールバーのボタン</a></li>
	      <li>
		<a href="#create_buttons">
		  ボタンを作る</a></li>
	      <li>
		<a href="#adding_button">
		  ボタンをツールバーに追加する</a></li>
	      <li>
		<a href="#remove_button">
		  ボタンをツールバーから削除する</a></li>
	      <li>
		<a href="#create_popup">
		  ポップアップを作る</a></li>
	      <li>
		<a href="#popup_contents">
		  ポップアップの中身</a></li>
	      <li>
		<a href="#popup_dimensions">
		  ポップアップのサイズ</a></li>
	      <li>
		<a href="#creating_badge">
		  バッヂを作る</a></li>
	      <li>
		<a href="#display_badge">
		  バッヂの表示</a></li>
	      <li>
		<a href="#api">
		  API リファレンス</a></li></ul>
	    <h2 id="toolbar_buttons">
	      ツールバーのボタン</h2>
	    <p>
	      ツールバーの検索欄の右側にエクステンション一つに付きボタンを一つ置けて、18x18 ピクセルのアイコンや、マウスを乗せた時に表示するツールチップ、ステータス表示用のバッヂ、オーバーレイ表示されるポップアップを入れられます。</p>
	    <h2 id="create_buttons">
	      ボタンを作る</h2>
	    <p>
	      ボタンは、<code>index.html</code> にスクリプトを書いて作成します。
	      この例では、ロードイベント発生時に動作させることを想定して書いていきます。</p>
	    <p>
	      まずは、ボタンのプロパティを設定します。設定した <code>ToolbarUIItemProperties</code> オブジェクトを以下に示します。</p>
	    <pre><code>
var ToolbarUIItemProperties = {
  disabled: false,
  title: &quot;Button Example&quot;,
  icon: &quot;icons/button.png&quot;
}</code></pre>
	    <p> 
	      <code>ToolbarUIItemProperties</code> オブジェクトにボタンのプロパティを定義したら、<code>createItem</code> 関数を使って実際のボタンを生成します。
	    <pre><code>var theButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);</code></pre>
	    <p>
	       <code>ToolbarUIItemProperties</code> にはこれから挙げる 5個のプロパティを設定することが出来ます。</p>
	    <h3>
	      disabled</h3>
	    <p>
	      ボタンの有効無効状態を真偽値で設定します。デフォルトでは false （有効） になっています。
	      ボタンを無効にするには、以下のようにします。</p>
	    <pre><code>theButton.disabled = true;</code></pre>
	    <h3>
	      title</h3>
	    <p>
	      title にはマウスを乗せた時のツールチップに表示される文字列を設定します。</p>
	    <pre><code>theButton.title = &quot;This is a tooltip&quot;;</code></pre>
	    <h3>
	      icon</h3>
	    <p>
	      icon にはボタンのアイコンに使われる画像を指定します。
	      画像のサイズが 18x18 ピクセル以外のとき、自動的にサイズが調整されます。</p>
	    <pre><code>theButton.icon = &quot;icons/beautiful-toobar-icon.png&quot;;</code></pre>
	    <h3>
	      onclick</h3>
	    <p>
	      ユーザがボタンをクリックして <code>click</code> イベントが発生したときに実行される関数を指定します。</p>
	    <pre><code>theButton.onclick = function(){ /* do something */ };</code></pre>
	    <h3>
	      onremove</h3>
	    <p>
	      <code>ToolbarContext</code> から削除されて、<code>remove</code> イベントが発生したときに実行される関数を指定します。</p>
	    <pre><code>theButton.onremove = function(){ /* do something */ };</code></pre>
	    <h2 id="adding_button">
	      ツールバーにボタンを追加する</h2>
	    <p>
	      ボタンを作ったならツールバーに追加してみましょう。追加するには <code>addItem</code> 関数を使います。</p>
	    <pre><code>opera.contexts.toolbar.addItem(theButton);</code></pre>
	    <p>
	      ボタンに動作を何も設定していないので何も起きませんが、<a href="example-button-ja.oex">ボタンのサンプル実装</a>を実行して試してみてください。</p>
	    <h2 id="remove_button">
	      ツールバーからボタンを削除する</h2>
	    <p>
	      以下のように <code>removeItem</code> 関数を使ってボタンをツールバーから削除することも出来ます。</p>
	    <pre><code>opera.contexts.toolbar.removeItem(theButton);</code></pre>
	    <h2 id="create_popup">
	      ポップアップをつくる</h2>
	    <p>
	      ボタンができたので実際に何か動作させてみましょう。
	      ユーザがボタンをクリックしたときに、ポップアップを指定したサイズでオーバーレイ表示させることが出来ます。
	      ポップアップで表示させる内容は、どこかの Web ページか、エクステンションに同梱したページかを指定します。</p>
	    <p>
	      ポップアップを作るには、<code>ToolbarUIItemProperties</code> オブジェクトのプロパティに <code>Popup</code> オブジェクトを追加します。</p>
	    <pre><code>
var ToolbarUIItemProperties = {
  disabled: false,
  title: &quot;Button Example&quot;,
  icon: &quot;icons/button.png&quot;,<strong>
  popup: {
    href: &quot;popup.html&quot;,
    width: 300,
    height: 300
  }</strong>
}</code></pre>
            <p>
              ポップアップの高さと幅はデフォルトで 300x300 になっているので、別の大きさにしたい時にはこの例のように、明示的に width と height を指定する必要があります。</p>
	    <h2 id="popup_contents">
	      ポップアップの内容</h2>
	    <p>
	      ポップアップの内容は <code>href</code> プロパティで表示させるページを指定します。
	      次のように絶対 URL を指定することで、どんな Web ページもポップアップさせることが出来ます。</p>
	    <pre><code>theButton.popup.href = &quot;<a href="http://www.opera.com/" target="_blank">http://www.opera.com/</a>&quot;;</code></pre>
	    <p>
	      エクステンションに同梱したファイルを相対パスで指定するには次のようにします。</p>
	    <pre><code>theButton.popup.href = &quot;popup.html&quot;;</code></pre>
	    <p>
	      ポップアップに表示させるページは普通の HTML のページであれば、他に何も要りません。
	      ポップアップを表示させているときに <code>href</code> プロパティを変更すると、ポップアップは閉じられます。</p>
	    <h2 id="popup_dimensions">
	      ポップアップのサイズ</h2>
	    <p>
	      ポップアップのサイズは <code>width</code> と <code>height</code> プロパティにピクセル数で指定します。</p>
	    <dl>
	      <dt>幅</dt><dd><pre><code>theButton.popup.width = 300;</code></pre></dd>
	      <dt>高さ</dt><dd><pre><code>theButton.popup.height = 300;</code></pre></dd></dl>
	    <p>
	      ポップアップは<code>createItem</code> 関数を呼び出したときにボタンと一緒に作られます。</p>
	    <p>
	      <a href="example-button-popup-ja.oex">ポップアップのサンプル実装</a>を実行して試してみてください。
	      <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world-ja/">Opera エクステンションで Hello World!</a>（原典:<a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/">Saying hello world to Opera extensions!</a>）を試したことがあれば、非常によく似たエクステンションだと思うことでしょう。</p>
	    <h2 id="creating_badge">
	      バッヂを作る</h2>
	    <p>
	      バッチはアイコンにオーバーレイして状態を示すものです。
	      例えば、未読のメールやメッセージといったアイテムの数を表示させるのによく使われます。
	      バッヂを作るには、<code>ToolbarUIItemProperties</code> オブジェクトのプロパティに <code>Badge</code> オブジェクトを追加します。</p>
	    <pre><code>
var ToolbarUIItemProperties = {
  disabled: false,
  title: &quot;Button Example&quot;,
  icon: &quot;icons/button.png&quot;,<strong>
  badge: {
    display: &quot;block&quot;,
    textContent: &quot;12&quot;,
    color: &quot;white&quot;,
    backgroundColor: &quot;rgba(211, 0, 4, 1)&quot;
  }</strong>
}</code></pre>
	    <h2 id="display_badge">
	      バッヂの表示
	      </h2>
	    <p>
	      バッヂのカスタマイズには以下の4個のプロパティを使います。</p>
	    <h3>
	      display</h3>
	    <p>
	      バッヂの表示非表示は <code>display</code> プロパティで切り替えます。
	      指定できる値は、<code>block</code> か <code>none</code> で、デフォルト値は <code>none</code> になっています。
	      バッヂを表示させるには、次のようにします。</p>
	    <pre><code>theButton.badge.display = &quot;block&quot;;</code></pre>
	    <h3>
	      textContent</h3>
	    <p>
	      バッヂとして表示させる内容は <code>textContent</code> プロパティに指定します。
	      表示領域が限られているので簡潔にしましょう。</p>
	    <pre><code>theButton.badge.textContent = &quot;12&quot;;</code></pre>
	    <h3>
	      color と backgroundColor</h3>
	    <p>
	      バッヂの文字（前景）色と背景色はそれぞれ <code>color</code> と <code>backgroundColor</code> プロパティで指定します。
	      指定方法には、16進数表記と <code>rgba()</code>、色名が使えます。</p>
	    <pre><code>theButton.badge.color = &quot;white&quot;;</code></pre>
	    <pre><code>theButton.badge.backgroundColor: = &quot;rgba(211, 0, 4, 1)&quot;;</code></pre>
	    <p>
	      <a href="button-badge-popup-ja.oex">バッヂのサンプル実装</a>を実行して試したり、エクステンションの UI のいろいろな生成方法と操作方法を試してみるといいでしょう。</p>
	    <p>
	      数々のオブジェクトや関数の完全なドキュメントは <a href="http://dev.opera.com/addons/extensions/#apireference">Opera extensions API documentation</a> を参照してください。</p></p>
