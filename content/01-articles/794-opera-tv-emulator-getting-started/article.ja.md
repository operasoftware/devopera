Title: Opera TV Emulator: Getting started
----
Date: 2012-11-27 10:38:52
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

<ul>
    <li><a href="#install">インストールと起動</a></li>
    <li><a href="#using">Opera TV Emulator を使用する</a></li>
    <li><a href="#developing">Opera TV Emulator を使った Web プロジェクトの開発</a></li>
    <li><a href="#media">サポートしているメディア形式</a></li>
</ul>

<h2 id="install">インストールと起動</h2>

<p>Opera TV Emulator は Linux のシステムイメージの形で提供され、バーチャルマシン <a href="https://www.virtualbox.org/">Oracle VirtualBox</a> を用いて起動する必要があります。これにより Web 開発者向けのテスト環境をできるだけ実際のデバイスシステムに近づけることができます。Virtual Box は Windows, Linux, Mac OS X などの一般的なオペレーティングシステム上で動作します。 </p>

<h2>インストール</h2>

<ol>
    <li>お使いの OS 向けの最新の <strong>Oracle VirtualBox</strong> を <a href="http://www.virtualbox.org/wiki/Downloads">VirtualBox ウェブサイト</a> よりダウンロードし、インストールしてください。インストールに問題がある場合には、<a href="http://www.virtualbox.org/manual/UserManual.html">VirtualBox ユーザーマニュアル</a> をご覧ください。</li>
    <li>TV Emulator VirtualBox イメージをお好きなフォルダーに解凍してください。</li>
    <li><code>TVEmulator.vbox</code> ファイルをダブルクリックしてください - バーチャルマシンが自動的に VirtualBox アプリケーション内にインストールされます。</li>
</ol>

<p class="note">VirtualBox アプリケーションからイメージをインストールすることもできます。VirtualBox ランチャーを開き、<b>仮想マシン</b> メニューより <b>追加</b> を選択し、<code>TVEmulator.vbox</code> ファイルを選択します。<kbd>CTRL</kbd>+<kbd>A</kbd> ショートカットを使用することもできます。</p>

<p class="note">一部の Linux ディストリビューションにはオープンソース版の VirtualBox がインストールされている場合もあります。Opera TV Emulator パッケージはバイナリーバージョンの <a href="https://www.virtualbox.org/">Oracle VirtualBox</a> 用に開発されているため、代替のオープンソースバージョンでは動作しない可能性があります。</p>

<h2>起動</h2>

<p>Opera TV Emulator には２つの起動方法があります。<code>TVEmulator.vbox</code> ファイルをダブルクリックするか、VirtualBox アプリケーションを開き、TV Emulator マシンを選択後 <b>起動</b> を押してください。</p>

<p>Opera TV Emulator を頻繁に使うため、素早く起動したいと思われる場合には、<code>TVEmulator.vbox</code> ファイルのショートカットを作成し、デスクトップやアプリケーションメニュー内に置かれるとよいでしょう。 </p>

<h2 id="using">Opera TV Emulator を使用する</h2>

<h3>キーボードとマウスを使って</h3>

<p>Opera TV Emulator は簡易的な標準ブラウザーとしてご使用になれます。アドレスバーを利用して、Web ページへ遷移できます。</p>

<p>アドレスバーを表示 / 非表示にするには、<kbd>F1</kbd> キーを押してください。矢印キーを使って方向/空間ナビゲーション、<kbd>Enter</kbd> にてリンクの実行、<kbd>Backspace</kbd> にて戻るの操作が行えます。</p>

<p> TV Emulator を終了するには、右上にある <b>X</b> (Mac OS X の場合は左上)をクリックし、<b>シャットダウンシグナル送信</b>を選択します; このオプションは通常で標準で選択されています。</p>

<p><b>仮想マシンの電源オフ</b> オプションではシステムを正しい方法で終了することができないため。このオプションを選択することは推奨されません。TV Emulator の Linux システムに悪影響を与える可能性があります。</p>

<h3>Web リモコンを使用する</h3>

<p> 別の方法として、優れた Web リモコンを使って TV Emulator 操作することもできます。</p>

<p>ホストマシン上でブラウザを起動して <code>http://localhost:5555</code> とタイプしてください。このリモコンはすべてのブラウザで動作します。但し <a href="http://www.opera.com/dragonfly">Opera Dragonfly</a> の <a href="../opera-tv-emulator-developer-tools/#debugging">リモートデバッグ</a> 機能をご利用になりたい場合には、最新版の Opera デスクトップブラウザをご利用ください。</p>

<p class="note">この Web インタフェースをご利用になる際には、他のアプリケーションがポート 5555 をブロックすることがないようにしてください。</p>

<p>リモコンの画像が表示されるようになります。リモコン内のボタンは Opera TV Emulator 内で以下の解説の通りに動作します (設定方法については<a href="../opera-tv-emulator-developer-tools/#settings">リモコンの設定</a>の項をご覧ください):</p>

<p><img src="http://devfiles.myopera.com/articles/6662/remote090911.png" alt="リモコンボタンの動作" /></p>

<h2 id="developing">Opera TV Emulator を使った Web プロジェクトの開発</h2>

<p>Opera TV Emulator を使うことで、ローカルコンピューター上に保存されている Web ページをテストすることができます。初めに TV Emulator の Linux system とフォルダーを共有する必要があります。</p>

<ol>
    <li>TV Emulator が動作していないことを確認してください。</li>
    <li>VirtualBox アプリケーションを開きます</li>
    <li><b>TV Emulator</b> を右クリックして <b>設定...</b> を選択します。</li>
    <li>左のリストから <b>共有フォルダ</b> を選択します</li>
    <li><b>+</b> ボタンをクリックし、共有したいフォルダを選択します (自動マウントをチェック)</li>
    <li>変更を適用します</li>
    <li>TV Emulator を開始します</li>
</ol>

<p>プロジェクトファイルにアクセスするには TV Emulator にて以下のリンクをタイプします: <code>file://localhost/mydata/sf_foldername</code> (<code>foldername</code> には共有したフォルダ名を入力します)</p>

<h2 id="media">サポートしているメディア形式</h2>

<p>Opera TV Emulator では以下の audio/video メディアフォーマットをサポートしています。</p>

<table>
<thead>
<tr>
<th>形式</th>
<th>メディア</th>
<th>MIME</th>
<th>コンテナ</th>
<th>ビデオコーデック</th>
<th>オーディオコーデック</th>
</tr>
</thead>
<tbody>
<tr>
<th rowspan="3">Video</th>
<td rowspan="3">AVC</td>
<td rowspan="3">video/mp4</td>
<td rowspan="3">MP4</td>
<td rowspan="3">MPEG-4 AVC(H.264)<br />Main / High Profiles<br />Level 4 まで</td>
<td>MPEG-1/MPEG-2<br />Audio Layer 3<br />Mono/Stereo<br />　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　16-320kbps; SBR/VBR<br />32kHz/44.1kHz/48kHz</td>
</tr>
<tr>
<td>AAC-LC<br />
Mono/Stereo<br />
16-320kbps; SBR/VBR<br />
32kHz/44.1kHz/48kHz</td>
</tr>
<tr>
<td>HE-AAC<br />
Mono/Stereo<br />
16-320kbps; SBR/VBR<br />
32kHz/44.1kHz/48kHz</td>
</tr>
<tr>
<th rowspan="4" style="border-top:1px black solid;">Audio</th>
<td rowspan="2">MP3</td>
<td>audio/mp3</td>
<td rowspan="2">MP3</td>
<td rowspan="2"></td>
<td rowspan="2">MPEG-1/MPEG-2<br />Audio Layer 3<br />Mono/Stereo<br />　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　16-320kbps; SBR/VBR<br />32kHz/44.1kHz/48kHz</td>
</tr>
<tr>
<td>audio/mpeg</td>
</tr>
<tr>
<td>AAC-LC</td>
<td>audio/mp4</td>
<td>MP4</td>
<td></td>
<td>AAC-LC<br />
Mono/Stereo<br />
16-320kbps; SBR/VBR<br />
32kHz/44.1kHz/48kHz</td>
</tr>
<tr>
<td>HE-AAC</td>
<td>audio/mp4</td>
<td>MP4</td>
<td></td>
<td>HE-AAC<br />
Mono/Stereo<br />
16-320kbps; SBR/VBR<br />
32kHz/44.1kHz/48kHz</td>
</tr>
</tbody>
</table>

<h3>H.264 デコーダーのインストール</h3>

<p>H.264 デコーダーの配布は権利の問題上許可されていないため、ライブラリは TV Emulator のパッケージには含まれていません。. しかしライセンス上、エンドユーザーがデコーダーを無料で使用することは許可されています。以下に開設するステップはデコーダをインストールするためのステップの一つです。</p>

<ol>
    <li><b>plugins</b> という名前の共有フォルダを作成します。フォルダの共有方法については <a href="#developing">インストールガイド</a> をご覧ください。</li>
    <li>i386 プラットフォーム向け <a href="http://debian-multimedia.org/pool/main/g/gst-plugins-ugly/gstreamer0.10-x264_0.10.17-0.0_i386.deb" checked="true">gstreamer0.10-x264</a> パッケージと <a href="http://debian-multimedia.org/pool/main/x/x264/libx264-112_0.svn20110115-0.0_i386.deb">libx264</a> パッケージをダウンロードします。</li>
    <li>両方のパッケージを解凍します(Windows 上では <a href="http://www.7-zip.org/download.html">7zip</a> などのアプリケーションを利用してください)。</li>
    <li>両方のパッケージ内の /usr/lib フォルダ内のすべてのファイル作成した <b>plugins</b> フォルダーにコピーします。</li>
    <li>TV Emulator を起動します。</li>
</ol>

<p>これで H.264 メディアの閲覧が可能になりました。</p>
