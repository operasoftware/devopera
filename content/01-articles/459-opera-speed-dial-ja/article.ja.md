Title: Opera Speed Dial エクステンション（拡張機能）の作成
----
Date: 2011-05-18 09:20:29
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

<h2>はじめに</h2>

<p>Opera が Speed Dial を導入し、世界に向けて<a href="http://www.opera.com/docs/changelogs/windows/920/">発表</a>したのは 2007 年に遡ります。発表当時、Speed Dial のコンセプトは極めて好評を博し、今では他のブラウザでも似たような機能が見かけられるようになりました。しかし、そのような誇るべき機能を発展させることなく、また新しいスキルを開発をせずに放っておくという手はありません。Opera 11.10 版においては、Speed Dial の視覚的な表示方法と<abbr title="user interaction">ユーザーエクスピリエンス</abbr>を改善し、Speed Dial のパネルに描画される際の<a href="/articles/view/opera-speed-dial-enhancements/">サイトの外観を作成者自身がコントロールできる方法</a>を提供しました。Opera 11.50 では、さらにもう一歩踏み込んだ <strong>Speed Dial エクステンション</strong> を提供しています。</p>

<p>多数ある <a href="https://addons.opera.com/addons/extensions/">Opera エクステンション</a> の一つを使用してブラウザを拡張できるのと同様に、カスタマイズや拡張を行って、Speed Dial をさらに役立つものにすることができます。Speed Dial は、Web ページやアイコンのスクリーンショットに限定されることなく、実際の拡張機能コンテンツを描画することができるようになりました。ここではその方法についてご説明したいと思います。</p>

<p class="note">メモ：サンプルが実際に実行されるのを確認するには、<a href="http://www.opera.com/browser/">Opera 11.50</a> 版以上、および Speed Dial の拡張機能サンプル： <a href="/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">Speed Dial クロックのダウンロード</a> が必要となります。</p>

<h2>基本</h2>

<p>Speed Dial エクステンションは、通常の Opera エクステンションとの拡張性を維持するために同じフォーマットと構造を使用していますが、いくつか追加するものがあります。以下のような小さな追加を <code>config.xml</code> に行うと、既存の Opera エクステンションを Speed Dial エクステンションに変更することができます。</p>

<ul>
    <li>拡張機能を Speed Dial の拡張機能に変えることができる、<code>opera:speeddial</code> の <code>name</code> 属性をもつ <code>&lt;feature&gt;</code> 要素</li>
    <li><code>minimized</code> の値が指定された <code>&lt;widget&gt;</code> タグに含まれる <code>viewmodes</code> 属性：Speed Dial のパネルでバックグラウンドページを表示します。</li>
</ul>

<p>拡張機能は、現時点では Speed Dial の機能とブラウザツールバーの両方を使用することができませんのでご留意下さい。これは、現在の実装では、ツールバーボタンがある拡張機能は Speed Dial エクステンションとして機能することができないということを意味します。</p>

<h2><code>config.xml</code>で Speed Dial エクステンションを指定する</h2>

<p>この方法論を実際に実行して、サンプルの拡張機能を見てみましょう。コンテキストでコードスニペットを見るには、<a href="/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">Speed Dial クロック拡張機能のダウンロード</a> を行い、パッケージ内のソースファイルをご覧下さい。図 1 では、完了時の拡張機能の外観を表示しています。</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/459-opera-speed-dial-/clock_extension_in_speed-dial.jpg" width="400" height="242" alt="Opera ブラウザの Speed Dial にインストールされたクロック拡張機能" /></p>
<p class="comment">図 1：Opera ブラウザの Speed Dial にインストールされたクロック拡張機能</p>

<p>通常の Speed Dial パネルでは Web ページのスクリーンショットが表示されますが、Speed Dial エクステンションでは、該当する拡張機能のスタート（あるいはバックグラウンド）ページが表示されます。デフォルトでは <code>index.html</code> です。これを有効にするには、最初に <code>viewmodes</code> 属性を <code>config.xml</code> の <code>&lt;widget&gt;</code> タグに追加し、<code>minimized</code> を指定します。</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/SimpleClockSD&quot; viewmodes=&quot;minimized&quot;&gt;</code></pre>

<p>上記は、ブラウザが拡張機能のバックグラウンドページを最小で表示することを意味します。100% のズームレベルにおける各 Speed Dial ウィンドウのサイズは、横 256 ピクセル × 縦 160 ピクセルです。さらに、Opera Speed Dial に対して <code>required</code> 属性を持つ <code>feature</code> 要素と、<code>param</code> 要素を追加することも必要です。</p>

<pre><code>&lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
  &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
&lt;/feature&gt;</code></pre>

<p><code>feature</code> 要素の <code>required</code> 属性は、該当する拡張機能が実行するのに Speed Dial が必要になるかどうかを表します。例えば、他のブラウザやユーザーエージェントなどで、Opera エクステンションと互換性があるけれども Speed Dial を持たない場合などが考えられます。このような場合において拡張機能を機能させるには、<code>false</code> を適用して下さい。Speed Dial が無い場合には機能させないようにするには、<code>true</code> を選択して下さい。</p>

<p><code>param</code> 要素は必須のため、Speed Dial アイコンがクリックされた際に開くページを指定して下さい。</p>

<p>以下がこの拡張機能の完全な <code>config.xml</code> ファイルです。</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/SimpleClockSD&quot; defaultlocale=&quot;en&quot; viewmodes=&quot;minimized&quot;&gt;
  &lt;name short=&quot;Simple Clock&quot;&gt;Clock Speed Dial Extension&lt;/name&gt;
  &lt;description&gt;This is an example Speed Dial extension showing a simple clock.&lt;/description&gt;
  &lt;author href=&quot;http://people.opera.com/danield/&quot;&gt;Daniel Davis&lt;/author&gt;
  &lt;icon src=&quot;images/icon_64.png&quot;/&gt; &lt;!-- Icon source: <a href="http://www.openclipart.org/detail/17552" target="_blank">http://www.openclipart.org/detail/17552</a> --&gt;
  &lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
    &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
  &lt;/feature&gt;&gt;
&lt;/widget&gt;</code></pre>

<h2>拡張機能にコンテンツを追加する</h2>

<p>次のステップでは、Speed Dial ウィンドウで実際に表示するものを作成します。これは拡張機能のバックグラウンドページのため、<code>index.html</code> という名前のファイルを、<code>config.xml</code> と同じディレクトリ内に作成する必要があります。このサンプルでは、現在時間を秒単位まで表示できるデジタルクロックを JavaScript を使用して作成してみましょう。まず最初に、基本の <code>index.html</code> を空の <code>output</code> 要素を使用して作成します。</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
    &lt;title&gt;Clock Speed Dial Extension&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;output&gt;&lt;/output&gt;
    &lt;script src=&quot;scripts/background.js&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>次に、リンクした <code>background.js</code> ファイルを含む <code>scripts</code> ディレクトリを作成する必要があります。その際、JS ファイルは以下のようになります。</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  // Simple function to prefix a zero if the value passed is less than 10
  function formatTime(time) {
    return (time &lt; 10) ?&#39;0&#39; + time : time;
  }
    
  var output = document.querySelector(&#39;output&#39;);
  var date, hours, mins, secs;
    
  // Get and display the current time every 500 milliseconds
  var timer = window.setInterval(function() {
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    output.innerHTML = formatTime(hours) + &#39;:&#39; + formatTime(mins) + &#39;:&#39; + formatTime(secs);
  }, 500); // Twice a second to allow for slight delays in JavaScript execution
}, false);</code></pre>

<p>付随するスタイルシート (<code>style.css</code>) はシンプルですが、これにはある巧妙なトリックが含まれています。</p>

<pre><code>* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}

/* Use display:table and display:table-cell
so that we can use vertical-align:middle */
body {
  background: #444;
  color: #fff;
  display: table;
  height: 100%;
  width: 100%;
}
output {
  display: table-cell;
  font-family: monospace;
  font-size: 10em;
  text-align: center;
  text-shadow: 0 0.1em 0.1em #000;
  vertical-align: middle;
}

/* Styles here are only applied in a &quot;minimized&quot; state */
@media screen and (view-mode: minimized) {
  output {
    font-size: 1.8em;
  }
}</code></pre>

<p>ご覧の通り、上記ファイルの下部分に <code>view-mode: minimized</code> の状態を確認する CSS3 メディアクエリがあります。これは、<a href="http://dev.w3.org/2006/waf/widgets-vmmf/"><code>view-mode</code> Media Feature specification</a> に沿ったものです。言い換えると、このセクションにおけるスタイルは、Speed Dial パネルのようにページを最小表示する場合にのみ適用されるということです。これは、複数のデザインを保持することなく、ある特定の状況においてスタイルを上書きできる便利な方法です。</p>

<h2>拡張機能を仕上げる</h2>

<p>作成したものを拡張機能としてパッケージするには、通常通り、ディレクトリ内の全てのファイル（ディレクトリ自体は除く）を ZIP して、<code>.oex</code> 拡張子を使用して名前を付けます。今まで行ったことがない場合は、<a href="/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">clock_SD_extension.oex をダウンロード</a>して試してみて下さい。</p>

<h2><code>SpeedDialContext</code> の API</h2>

<p>拡張機能は一度インストールされると、<code>SpeedDialContext</code> の API を使用して Speed Dial のパネルを動的にコントロールします。この API は、書き込みが可能な <code>title</code> と <code>url</code> の 2 つのプロパティを使用した非常にシンプルなものです。以下のように、これらのプロパティには <code>opera.contexts.speeddial</code> オブジェクトを通してバックグラウンドの JavaScript からアクセスされます。</p>

<pre><code>if (opera.contexts.speeddial) {
  var sd = opera.contexts.speeddial; 
  sd.title = &quot;My title&quot;;
  sd.url = &quot;mypage.html&quot;; 
}</code></pre>

<p>この機能を利用してクロック拡張機能をさらに拡張することができます。例えば、時間に応じてフレンドリーなメッセージを表示することが可能です。以下のように <code>background.js</code> JavaScript ファイルを編集するだけで行えます。</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  // Simple function to prefix a zero if the value passed is less than 10
  function formatTime(time) {
    return (time &lt; 10) ?&#39;0&#39; + time : time;
  }
    
  var output = document.querySelector(&#39;output&#39;);
  var date, hours, mins, secs, tmp_hours, timeofday;
  var messages = {
    &quot;morning&quot;: &quot;Good morning!&quot;,
    &quot;afternoon&quot;: &quot;Good afternoon!&quot;,
    &quot;evening&quot;: &quot;Good evening!&quot;,
    &quot;night&quot;: &quot;Shouldn&#39;t you be in bed?&quot;
  };
    
  // Get and display the current time every 500 milliseconds
  var timer = window.setInterval(function() {
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    output.innerHTML = formatTime(hours) + &#39;:&#39; + formatTime(mins) + &#39;:&#39; + formatTime(secs);
        
    // Make the Speed Dial title display time-related message
    if (hours !== tmp_hours) {
      if (hours &gt; 15) {
        timeofday = &#39;evening&#39;;
      } else if (hours &gt; 11) {
        timeofday = &#39;afternoon&#39;;
      } else if (hours &gt; 3) {
        timeofday = &#39;morning&#39;;
      } else {
        timeofday = &#39;night&#39;;
      }
            
      if (opera.contexts.speeddial) {
        opera.contexts.speeddial.title = messages[timeofday];
      }
      tmp_hours = hours;
    }
  }, 500); // Twice a second to allow for slight delays in JavaScript execution
}, false);</code></pre>

<p>これは、最初に挙げたサンプルと同じですが、以下のものが追加されています。</p>

<ul>
    <li>時間に応じて表示されるメッセージを含む <code>messages</code> オブジェクト。</li>
    <li>時間が変わった時にコードを実行する繰り返し確認。</li>
    <li>Speed Dial のタイトル内に <code>messages</code> オブジェクトから関連するメッセージを表示する行。</li>
</ul>

<p>この拡張機能はこちらの <a href="/articles/view/creating-opera-speed-dial-extensions/friendly_clock_SD_extension.oex">friendly_clock_SD_extension.oex</a> からダウンロードして下さい。インストールされると、以下のように表示されます。</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/459-opera-speed-dial-/friendly_clock_extension_in_speed-dial.jpg" width="400" height="256" alt="Opera browser の Speed Dial にインストールされた、フレンドリーなメッセージを表示するクロック拡張機能" /></p>
<p class="comment">図 2：Opera browser の Speed Dial にインストールされた、フレンドリーなメッセージを表示するクロック拡張機能</p>

<h2>最後に</h2>

<p>ご覧の通り、拡張機能開発者にとって、作成する拡張機能をさらに便利で、手軽に使え、楽しめるものにする機会が提供されるようになりました。ここでご紹介した例は基本的なものではありますが、Speed Dial 拡張機能がスマートなアイデアと Web 開発のスキルと結びついて発揮され得る可能性を示しています。Speed Dial 拡張機能が Web サイトへの単なるリンク以上のものになることを望みつつ、また <a href="https://addons.opera.com/addons/extensions/">Opera エクステンションのレポジトリ</a> で、この API を利用したクリエイティブなアイデアが見られることを楽しみにしています。</p>

<h2>関連する文書</h2>
<p><a href="/articles/view/extensions-api-speeddial/">Opera Extensions API: Speed Dial guide</a></p>p.oex
