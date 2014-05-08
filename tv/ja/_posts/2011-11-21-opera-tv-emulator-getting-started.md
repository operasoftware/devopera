---
title: 'Opera TV Emulator: Getting started'
authors:
- odevrel
tags:
- emulator
- tv
license: cc-by-3.0
layout: article
---

## インストールと起動

Opera TV Emulator は Linux のシステムイメージの形で提供され、バーチャルマシン [Oracle VirtualBox][1] を用いて起動する必要があります。これにより Web 開発者向けのテスト環境をできるだけ実際のデバイスシステムに近づけることができます。Virtual Box は Windows, Linux, Mac OS X などの一般的なオペレーティングシステム上で動作します。

[1]: https://www.virtualbox.org/

## インストール

1. お使いの OS 向けの最新の **Oracle VirtualBox** を [VirtualBox ウェブサイト][2] よりダウンロードし、インストールしてください。インストールに問題がある場合には、[VirtualBox ユーザーマニュアル][3] をご覧ください。
2. TV Emulator VirtualBox イメージをお好きなフォルダーに解凍してください。
3. `TVEmulator.vbox` ファイルをダブルクリックしてください - バーチャルマシンが自動的に VirtualBox アプリケーション内にインストールされます。

[2]: http://www.virtualbox.org/wiki/Downloads
[3]: http://www.virtualbox.org/manual/UserManual.html

VirtualBox アプリケーションからイメージをインストールすることもできます。VirtualBox ランチャーを開き、**仮想マシン** メニューより **追加** を選択し、`TVEmulator.vbox` ファイルを選択します。CTRL+A ショートカットを使用することもできます。

一部の Linux ディストリビューションにはオープンソース版の VirtualBox がインストールされている場合もあります。Opera TV Emulator パッケージはバイナリーバージョンの [Oracle VirtualBox][4] 用に開発されているため、代替のオープンソースバージョンでは動作しない可能性があります。

[4]: https://www.virtualbox.org/

## 起動

Opera TV Emulator には２つの起動方法があります。`TVEmulator.vbox` ファイルをダブルクリックするか、VirtualBox アプリケーションを開き、TV Emulator マシンを選択後 **起動** を押してください。

Opera TV Emulator を頻繁に使うため、素早く起動したいと思われる場合には、`TVEmulator.vbox` ファイルのショートカットを作成し、デスクトップやアプリケーションメニュー内に置かれるとよいでしょう。

## Opera TV Emulator を使用する

### キーボードとマウスを使って

Opera TV Emulator は簡易的な標準ブラウザーとしてご使用になれます。アドレスバーを利用して、Web ページへ遷移できます。

アドレスバーを表示 / 非表示にするには、F1 キーを押してください。矢印キーを使って方向/空間ナビゲーション、Enter にてリンクの実行、Backspace にて戻るの操作が行えます。

TV Emulator を終了するには、右上にある **X** (Mac OS X の場合は左上)をクリックし、**シャットダウンシグナル送信**を選択します; このオプションは通常で標準で選択されています。

**仮想マシンの電源オフ** オプションではシステムを正しい方法で終了することができないため。このオプションを選択することは推奨されません。TV Emulator の Linux システムに悪影響を与える可能性があります。

### Web リモコンを使用する

別の方法として、優れた Web リモコンを使って TV Emulator 操作することもできます。

ホストマシン上でブラウザを起動して `http://localhost:5555` とタイプしてください。このリモコンはすべてのブラウザで動作します。但し [Opera Dragonfly][5] の [リモートデバッグ][6] 機能をご利用になりたい場合には、最新版の Opera デスクトップブラウザをご利用ください。

[5]: http://www.opera.com/dragonfly
[6]: http://dev.opera.com/articles/view/opera-tv-emulator-developer-tools/#debugging

この Web インタフェースをご利用になる際には、他のアプリケーションがポート 5555 をブロックすることがないようにしてください。

リモコンの画像が表示されるようになります。リモコン内のボタンは Opera TV Emulator 内で以下の解説の通りに動作します (設定方法については[リモコンの設定][7]の項をご覧ください):

[7]: /articles/opera-tv-emulator-developer-tools/#settings

![リモコンボタンの動作](/articles/opera-tv-emulator-getting-started/remote.png)

## Opera TV Emulator を使った Web プロジェクトの開発

Opera TV Emulator を使うことで、ローカルコンピューター上に保存されている Web ページをテストすることができます。初めに TV Emulator の Linux system とフォルダーを共有する必要があります。

1. TV Emulator が動作していないことを確認してください。
2. VirtualBox アプリケーションを開きます
3. **TV Emulator** を右クリックして **設定...** を選択します。
4. 左のリストから **共有フォルダ** を選択します
5. **+** ボタンをクリックし、共有したいフォルダを選択します (自動マウントをチェック)
6. 変更を適用します
7. TV Emulator を開始します

プロジェクトファイルにアクセスするには TV Emulator にて以下のリンクをタイプします: `file://localhost/mydata/sf_foldername` (`foldername` には共有したフォルダ名を入力します)

## サポートしているメディア形式

Opera TV Emulator では以下の audio/video メディアフォーマットをサポートしています。

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
	<td rowspan="3">
		MPEG-4 AVC(H.264)<br>
		Main and High Profiles<br>
		Up to Level 4(inclusive)
	</td>
	<td>
		MPEG-1/MPEG-2<br>
		Audio Layer 3<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
<tr>
	<td>
		AAC-LC<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
<tr>
	<td>
		HE-AAC<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
<tr>
	<th rowspan="4">Audio</th>
	<td rowspan="2">MP3</td>
	<td>audio/mp3</td>
	<td rowspan="2">MP3</td>
	<td rowspan="2"></td>
	<td rowspan="2">
		MPEG-1/MPEG-2<br>
		Audio Layer 3<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
<tr>
	<td>audio/mpeg</td>
</tr>
<tr>
	<td>AAC-LC</td>
	<td>audio/mp4</td>
	<td>MP4</td>
	<td></td>
	<td>
		AAC-LC<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
<tr>
	<td>HE-AAC</td>
	<td>audio/mp4</td>
	<td>MP4</td>
	<td></td>
	<td>
		HE-AAC<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
</tbody>
</table>

### H.264 デコーダーのインストール

H.264 デコーダーの配布は権利の問題上許可されていないため、ライブラリは TV Emulator のパッケージには含まれていません。. しかしライセンス上、エンドユーザーがデコーダーを無料で使用することは許可されています。以下に開設するステップはデコーダをインストールするためのステップの一つです。

1. **plugins** という名前の共有フォルダを作成します。フォルダの共有方法については インストールガイド をご覧ください。
2. i386 プラットフォーム向け [gstreamer0.10-x264][8] パッケージと [libx264][9] パッケージをダウンロードします。
3. 両方のパッケージを解凍します(Windows 上では [7zip][10] などのアプリケーションを利用してください)。
4. 両方のパッケージ内の /usr/lib フォルダ内のすべてのファイル作成した **plugins** フォルダーにコピーします。
5. TV Emulator を起動します。

[8]: http://debian-multimedia.org/pool/main/g/gst-plugins-ugly/gstreamer0.10-x264_0.10.17-0.0_i386.deb
[9]: http://debian-multimedia.org/pool/main/x/x264/libx264-112_0.svn20110115-0.0_i386.deb
[10]: http://www.7-zip.org/download.html

これで H.264 メディアの閲覧が可能になりました。
