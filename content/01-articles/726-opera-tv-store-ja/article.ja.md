Title: Opera TV Store アプリケーションにおけるファンクションキーの取り扱い
----
Date: 2012-07-24 07:40:18
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

<p>Opera TV Store は、リモートコントロールにある基本的な 4 方向キーを空間ナビゲーションに使用するようにデザインされています。アプリケーションが Opera TV Store ブラウザに組み込まれたデフォルトの空間ナビゲーションを使用して問題なく機能するかどうかをテストしてください。</p>
<p>Opera の空間ナビゲーション機能は、ほとんどのブラウザで利用可能な、<kbd>TAB</kbd> をベースとした従来のキーボードアクセスと似たような方法で機能し、ユーザーはこの機能を使用して、フォーカスできる要素（リンク、フォームコントロール、画像マップ領域など）の間を移動することができます。また、空間ナビゲーション機能は、<code>click</code> および <code>mouseover</code> の JavaScript イベントが付与されている任意の要素にフォーカスすることができます。さらに名前からも推測できるように、Opera の空間ナビゲーション機能は、（<kbd>TAB</kbd> ナビゲーションのように）ソース順ではなく、画面の空間上での関連性をベースとした要素間の移動を可能にします。</p>
<p>ほとんどの場合、作成者はアプリケーションのコントロールのハンドリングを、単に Opera の空間ナビゲーションに依存するだけで行えます。さらに CSS3 を使用することで、シンプルなメカニズムを用いて <a href="http://dev.opera.com/articles/view/tweaking-spatial-navigation-for-tv-browsing/">TV ブラウジング向けに空間ナビゲーションを調整する</a> ことができます。</p>
<p>また、アプリケーション作成者は、リモートコントロールでのキー操作を取得し、アプリケーションのナビゲーションをアプリ側でハンドリングするようにすることもできます。この場合、基本的な方向ボタン（<kbd>上</kbd>、<kbd>右</kbd>、<kbd>下</kbd>、<kbd>左</kbd>）のみに反応するだけでなく、機能をさまざまなショートカット・機能キー（<kbd>戻る</kbd>、<kbd>情報</kbd>、<kbd>オプション</kbd>、<kbd>赤</kbd> ボタンなど）に関連付けることができます。リモートコントロールキーのキーコードはデバイスによって異なるため、Opera TV Store ブラウザは、現在のデバイスで使用されているハードウェア固有のコードにマップされた組み込みの <strong>グローバル定数</strong> を提供しています。</p>

<h2>利用可能な機能ボタンの一覧</h2>
<table>
<thead>
<tr>
<th>ハードウェアキー</th>
<th>キーコードの定数</th>
<th>備考</th>
</tr>
<tbody>
<tr>
<td>↑</td>
<td>VK_UP</td>
<td>常に利用可能*</td>
</tr>
<tr>
<td>→</td>
<td>VK_RIGHT</td>
<td>常に利用可能*</td>
</tr>
<tr>
<td>↓</td>
<td>VK_DOWN</td>
<td>常に利用可能*</td>
</tr>
<tr>
<td>←</td>
<td>VK_LEFT</td>
<td>常に利用可能*</td>
</tr>
<tr>
<td>Confirm/Select/OK</td>
<td>VK_ENTER</td>
<td>常に利用可能*</td>
</tr>
<tr>
<td>Opera を終了</td>
<td>表示なし</td>
<td>常に利用可能（ネイティブのファームウェアによりハンドルされる）</td>
</tr>
<tr>
<td>Back/Return</td>
<td>VK_BACK_SPACE</td>
<td>オプションではあるが推奨</td>
</tr>
<tr>
<td>BLUE</td>
<td>VK_BLUE</td>
<td>オプションではあるが推奨</td>
</tr>
<tr>
<td>RED</td>
<td>VK_RED</td>
<td>オプションではあるが推奨</td>
</tr>
<tr>
<td>GREEN</td>
<td>VK_GREEN</td>
<td>オプションではあるが推奨</td>
</tr>
<tr>
<td>YELLOW</td>
<td>VK_YELLOW</td>
<td>オプションではあるが推奨</td>
</tr>
<tr>
<td>メニュー</td>
<td>VK_MENU</td>
<td>オプション</td>
</tr>
<tr>
<td>0</td>
<td>VK_0</td>
<td>オプション</td>
</tr>
<tr>
<td>1</td>
<td>VK_1</td>
<td>オプション</td>
</tr>
<tr>
<td>2</td>
<td>VK_2</td>
<td>オプション</td>
</tr>
<tr>
<td>3</td>
<td>VK_3</td>
<td>オプション</td>
</tr>
<tr>
<td>4</td>
<td>VK_4</td>
<td>オプション</td>
</tr>
<tr>
<td>5</td>
<td>VK_5</td>
<td>オプション</td>
</tr>
<tr>
<td>6</td>
<td>VK_6</td>
<td>オプション</td>
</tr>
<tr>
<td>7</td>
<td>VK_7</td>
<td>オプション</td>
</tr>
<tr>
<td>8</td>
<td>VK_8</td>
<td>オプション</td>
</tr>
<tr>
<td>9</td>
<td>VK_9</td>
<td>オプション</td>
</tr>
<tr>
<td>PLAY</td>
<td>VK_PLAY</td>
<td>オプション</td>
</tr>
<tr>
<td>PAUSE</td>
<td>VK_PAUSE</td>
<td>オプション</td>
</tr>
<tr>
<td>STOP</td>
<td>VK_STOP</td>
<td>オプション</td>
</tr>
<tr>
<td>NEXT</td>
<td>VK_TRACK_NEXT</td>
<td>オプション</td>
</tr>
<tr>
<td>PREV</td>
<td>VK_TRACK_PREV</td>
<td>オプション</td>
</tr>
<tr>
<td>FF (Fast-Forward)</td>
<td>VK_FAST_FWD</td>
<td>オプション</td>
</tr>
<tr>
<td>REWIND</td>
<td>VK_REWIND</td>
<td>オプション</td>
</tr>
<tr>
<td>SUBTITLE</td>
<td>VK_SUBTITLE</td>
<td>オプション</td>
</tr>
<tr>
<td>INFORMATION</td>
<td>VK_INFO</td>
<td>オプション</td>
</tr>
</tbody>
</thead></table>
<p><strong>ご注意： </strong> <kbd>CONFIRM</kbd>、<kbd>EXIT</kbd>、方向ボタンはデバイスメーカーにより必ず実装されなければならないため、エンドユーザーは、Opera TV Store が搭載されたデバイスのリモートコントロールを使用して常に利用することができます。各アプリケーションを終了できるように、<kbd>EXIT</kbd> キーはOpera TV Store ブラウザによりハンドリングされます。このため、<kbd>VK_EXIT</kbd> はアプリケーションには送信されません。</p>

<h2><code>keypress</code> イベントのハンドリング</h2>
<p>キーイベントは、以下のように <code>onkeypress</code> 属性を要素に付与することでハンドリングできます（keypress は要素が実際にフォーカスを受け取った時にのみハンドリングされる点にご注意ください）。</p>

<pre><code>&lt;ELEMENT onkeypress=&quot;handler&quot;&gt;</code></pre>

<p>これはもちろん、直接 JavaScript を使用しても行えます。以下のように、<code>onkeypress</code> プロパティを追加するか、<code>addEventListener</code> を使用してください。</p>
<pre><code>object.onkeypress = handler;
object.addEventListener(&quot;keypress&quot;, handler, useCapture);</code></pre>

<p><code>handler</code> 関数では、<code>event.keyCode</code> と Opera TV Store で提供される機能キー用のグローバル定数のセットを照合します。</p>

<pre><code>function handler(event){
	…
	if (VK_RED == event.keyCode){
		/* VK_RED was pressed … do something useful */
	}
	…
}</code></pre>

<p>アプリケーションによっては、ページ内の多数の要素に対して、それぞれ異なる多くのイベントハンドラを含めないようにした方がよいでしょう。イベントキャプチャと Event Delegation メカニズムを利用する代わりに、<code>keypress</code> ハンドラをトップレベルの要素（例： <code>body</code>）あるいはオブジェクト（<code>window</code> など）に設定します。</p>

<pre><code>window.addEventListener(&quot;keypress&quot;, handler, useCapture);</code></pre>

<p>この場合 <code>handler</code> 関数では、イベントが発生した要素を特定する必要があります。リファレンスは <code>event.target</code> から簡単に取得することができます。</p>

<pre><code>function handler(event){
	…
	var target = event.target;
	…	
}</code></pre>

<h2>デフォルトの空間ナビゲーションの回避</h2>

<p>キーイベントを直接ハンドリングする場合、Opera TV Store ブラウザが通常の空間ナビゲーションを用いて要素をアクティブにすることを止めたいと思われるかもしれません。このような場合には、以下のように <code>handler</code> 関数を使用して抑制することができます。</p>

<pre><code>function handler(event){
	…
	event.preventDefault();
	…	
}</code></pre>

<h2>特定の機能キーのサポートを判定する</h2>

<p>アプリケーションの作成者は、シンプルな JavaScript を使用して特定の機能キーがデバイスで定義されているかを確認することができます。ボタンがサポートされている場合、定数はデバイス固有のボタンのキーコードを含んでいます。さもなければ、定数は <code>null</code> の値を返します。例として、以下のように <kbd>VK_RED</kbd> キーをテストできます。</p>

<pre><code>if (VK_RED !== null) {
	/* VK_RED is supported */
	…
}</code></pre>

<p>Opera TV Store を実行するすべてのデバイスには、上に定義されたすべてのグローバル定数がありますが（デバイスのリモートコントロールに特定のボタンがない場合、値が <code>null</code> が返るでしょう）、<code>Unhandled Error: Undefined variable</code> の JavaScript エラーを避けるため、定数を利用する前に該当するものが存在しているかどうかを確認することをお勧めします。</p>

<pre><code>if ((&#39;VK_RED&#39; in window)&amp;&amp;(VK_RED !== null)) {
	/* VK_RED is supported */
	…
}</code></pre>

<p>以下のように定数に対して <code>event.keyCode</code> の値を確認する場合にも同じことが言えます。</p>

<pre><code>function handler(event){
	…
	if ((&#39;VK_RED&#39; in window)&amp;&amp;(VK_RED == event.keyCode)){
		/* VK_RED was pressed … do something useful */
	}
	…
}</code></pre>

<p class="note"><code>VK_*</code> で示されるグローバル定数の一覧は、OEM がインテグレーションを行う際に Opera TV Store の一部として同梱する、<code>user.js</code> ファイルに設定されています。デバイスメーカーは、デバイスと共に出荷される標準のリモートコントロールをベースとした、ボタンと関連するキーコードを同梱します。この場合、サードパーティあるいは代替となるリモートコントロールが、標準のリモートコントロールの機能ボタンと一致しない可能性があります。定数が定義され存在していても、リモートコントロールに物理的なキーがない場合があります。このため、注意を払い、最低限の <em>常に利用可能な</em> キーのセットでアプリケーションが機能するように設計することをお勧めします。</p>td
