Title: Opera Dragonfly の基本設計
----
Date: 2008-05-27 09:52:48
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

<h2>はじめに</h2>
 
<p>この文書では Opera Dragonfly の基本設計について、個々の構成要素の挙動を見ながら詳しく説明していきます。</p>
 
<ul>
<li><a href="#archoverview">基本設計の概観</a></li>
<li><a href="#scenarios">デバッグのシナリオ</a>
<ul>
<li><a href="#scenariosintegrated">統合</a></li>
<li><a href="#scenariosremote">リモート</a></li>
</ul>
</li>
<li><a href="#components">構成要素</a>
<ul>
<li><a href="#componentruntime">ランタイム</a></li>
<li><a href="#componentdebugged">デバッグのホスト</a></li>
<li><a href="#componentScope">Scope モジュール</a>
<ul>
<li><a href="#Scope-protocol">Scope プロトコル</a></li>
</ul>
</li>
<li><a href="#componentproxy">プロキシ</a></li>
<li><a href="#componentdebugger">デバッグ・クライアント</a></li>
</ul>
</li>
</ul>
 
 
<h2 id="archoverview">基本設計の概観</h2>
 
<p>Opera Software の開発ツールである Opera Dragonfly は、デスクトップコンピューターと並び携帯電話などのいろいろな端末でデバッグができるように設計されています。</p>
 
<p>Scope モジュールはランタイム（デバッグの行われている、Opera インスタンス内のウェブページとアプリケーション）に関する情報を見えるようにしてくれるものです。この Opera インスタンスはデバッグのホストとして動き、この情報はデバッグのクライアントに供給されます。通信されるデータの形式は Scope プロトコルによって定義されています。</p>
 
<p>ファイアーウォールによる問題の可能性を防ぐために、プロキシがブラウザとデバッグの間を取り持ちます。ひとつの例としては、携帯電話用のアプリケーションやウェブページを通常のデスクトップコンピュータからデバッグする場合です。 </p>
 
<p>デバッグ用アプリケーションであるクライアントは、情報を可視化させて、ユーザーがランタイムを操作できるようにします。 </p>
 
<p>ホストとクライアントは別々の機器で動いていてもよく、プロキシがどちらかの機器の中や別のサーバーで動いていることがあります。</p>
 
 
<p><img alt="Dragonfly 基本設計の概観" src="http://forum-test.oslo.osa/kirby/content/articles/111-opera-dragonfly-/overviewja.png" />
</p>
 
 
 
 
<h2 id="scenarios">デバッグのシナリオ</h2>
 
<p>デバッグには二つの基本的な方法があります。</p>
 
<ul>
<li>統合: Scope 、プロキシ、デバッガが同じ Opera インスタンス内で動いている場合。</li>
<li>リモート: Scope とデバッガが別々の Opera インスタンス（例えば 別々の機器上）で動き、プロキシがもしあれば、そのどちらかの機器かあるいはまた別のコンピューター上で動いている場合。</li>
</ul>
 
<h3 id="scenariosintegrated">統合</h3>
 
<p>典型的なシナリオは次のとおりです。開発者はウェブアプリケーションを普通の Opera ブラウザで操作していて、デバッガは同じ Opera インスタンス内の別のページ（タブ）やパネルで開いています。</p>
 
<p><img alt="統合デバッグの一例です。デバッグ用のホスト、プロキシ、クライアントはすべて同じコンピューター上で動作しています。" src="http://forum-test.oslo.osa/kirby/content/articles/111-opera-dragonfly-/integratedja.png" title="統合デバッグの一例です。デバッグ用のホスト、プロキシ、クライアントはすべて同じコンピューター上で動作しています。" />
</p>
 
<p>この場合、デバッグのホストとプロキシとクライアントはすべて同じ Opera インスタンス内で走ります。プロキシは Opera によって無作為に選ばれたポートで動作し、Scope モジュールとデバッガに自動接続します。</p>
 
<h3 id="scenariosremote">リモート</h3>
 
<p>このシナリオの例は、携帯電話用のウェブページやアプリケーションをデバッグする場合です。携帯電話は画面が小さく開発には向いていないときがあるので、代わりにデスクトップコンピュータをデバッグに使います。</p>
 
<p>もう一つの例は、ある機器上のひとつの Opera インスタンスを、同じ機器で動いているもうひとつの Opera インスタンスからデバッグする場合です。この方法は、デバッグのホストのクラッシュを伴う恐れのあるときに便利です。</p>
 
<p>リモートデバッグはさらに二つの主なシナリオに分けられます。</p>
 
<ul>
<li>プロキシがどちらかのインスタンスの中で動いている場合。</li>
<li>プロキシが両方のインスタンスの外で動いている場合（例えばパブリックサーバー内）。</li>
</ul>
 
<p><img alt="リモートデバッグの一例です。プロキシがクライアントと統合されています。" src="http://forum-test.oslo.osa/kirby/content/articles/111-opera-dragonfly-/localja.png" title="リモートデバッグの一例です。プロキシがクライアントと統合されています。" />
</p>
 
<p>二つ目のシナリオはデバッグの行われている Opera インスタンスとデバッガが両方ともファイアーウォールの内側で動いているときに使われます。</p>
 
<p><img alt="リモートデバッグの一例です。デバッグ用のホスト、プロキシ、クライアントは別のコンピューターで動作しているかもしれません。" src="http://forum-test.oslo.osa/kirby/content/articles/111-opera-dragonfly-/remoteja.png" title="リモートデバッグの一例です。デバッグ用のホスト、プロキシ、クライアントは別のコンピューターで動作しているかもしれません。" />
</p>
 
<h2 id="components">構成要素</h2>
 
<p>Opera Dragonfly の基本設計は以下の構成要素から成り立っています。</p>
 
<ul>
<li><a href="#componentruntime">ランタイム</a></li>
<li><a href="#componentdebugged">デバッグ・ホスト</a></li>
<li><a href="#componentScope">Scope モジュール</a></li>
<li><a href="#Scopeprotocol">Scope プロトコル</a></li>
<li><a href="#componentproxy">プロキシ</a></li>
<li><a href="#componentdebugger">デバッグ・クライアント</a></li>
</ul>
 
<h3 id="componentruntime">ランタイム</h3>
 
<p>ECMAScript 環境ひとつひとつがランタイムです。各 HTML ドキュメントには一つのランタイムが付随します。フレームとインラインフレーム内のドキュメントはまたそれぞれのランタイムを持っています。</p>
 
<h3 id="componentdebugged">デバッグ・ホスト</h3>
 
<p>Scope モジュールが有効であり、プロキシに接続されている Opera イン スタンスはどれもデバッグ・ホストとなります。これは複数の<a href="#component-runtime">ランタイム</a>を含むことができます。</p>
 
<h3 id="componentScope">Scope モジュール</h3>
 
<p>Scope モジュールは Opera アプリケーションの一部です。これが有効になると、Scope モジュールはプロキシ URLへの接続を確立し、デバッグ・ホストのランタイムをすべて調べます。その後 Scope モジュールは情報をデバッガに送ります。また、Scope モジュールは、選択したノードに対する DOM をダウンロードするといった、デバッガからの特定の命令に反応したりもします。</p>
 
<h3 id="Scopeprotocol">Scope プロトコル</h3>
 
<p>Scope プロトコルはホストとクライアントがランタイムについての情報をやりとりするための形式やルールです。例えば、<a href="#component-runtime">ランタイム</a>から DOM ドキュメント構造や計算の初期値を取得します。</p>
 
<p class="note">Scope プロトコルはまだ開発段階にあり、完了と同時に公開される予定です。ソフトウェアメーカーはそれを元にデバッグクライアントを作成したり、IDEなどのアプリケーションに組み込むことができます。こういったクライアントは、Scope プロトコルを使って Opera ブラウザのランタイムについての情報を得ることができます。</p>
 
<h3 id="componentproxy">プロキシ</h3>
 
<p>プロキシはブラウザとデバッガの間のメッセージを通す役割を果たします。これはホストとクライアントが同一コンピューター上にないリモートデバッグのシナリオでは特に重要です。</p>
 
<p>Opera はデバッガの動いている Opera インスタンス内でプロキシを提供しますが、プロキシはパブリックサーバで動いていてもかまいません。このため、デバッグの行われている Opera インスタンスとデバッガの両方ともファイアーウォールの内側にいてもかまいません。</p>


<h3 id="componentdebugger">デバッグクライアント</h3>
 
<p>デバッガとはプロキシを通してデバッグのホストの Scope モジュールに接続するクライアントのことです。これは Opera インスタンスのランタイムの状況情報を受け取ります。デバッガはランタイムを可視化し、ユーザーが修正できるようにします。これは <a href="#Scope-protocol">Scope プロトコル</a>を使って Scope モジュールに要求を送り返すことで行われます。</p>
 
<p>現在のデバッガの実装は完全にウェブ技術（HTML/XML、CSS、JavaScript）を用いて作成されています。</p>
 
<p><img alt="www.opera.com 上の ECMAScript デバッガ" src="/articles/view/opera-dragonfly-architecture/dragonfly-script.png" title="www.opera.com 上の ECMAScript デバッガ" />
</p>
 
<p><img alt="www.opera.com 上の DOM インスペクタ" src="/articles/view/opera-dragonfly-architecture/dragonfly-dom.png" title="www.opera.com 上の ECMAScript デバッガ" />
</p>
