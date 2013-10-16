Title: Opera 的輕羽佈景主題
----
Date: 2012-05-03 19:24:53
----
Lang: zh-tw
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<h2>前言</h2>
	
<p>Opera 12 帶給我們很多的改善，包括了 Opera 外觀主題系統的更新。首先，最大的更新就是我們將它的名稱從外觀（skins）改為<strong>佈景主題（themes）</strong>。新的輕羽級系統（內部稱為 personas）將成為 Opera 的預設主題，讓使用者更容易自訂化是它最大優點。本文將帶大家看看這個輕羽系統是如何運作的。</p>

<h2>它如何運作？</h2>

<p>這些新的輕羽佈景主題和現有的外觀主題非常類似：主題檔案一樣被壓縮成 ZIP 格式，裡面包含兩樣東西，一是你的主題所需要的素材，另外就是一個 persona.ini 檔。.ini 檔案是為了讓 Opera 可以讀懂這個 ZIP 檔是一個佈景主題——當 Opera 讀取到這個檔案時（譬如從網路上下載下來），就會自動將它安裝起來；很棒的處理方式，不是嗎？主題是從最上層的標題列就可以看到效果了。</p>

<p>persona.ini 包含數個區塊，每個區塊都有一個用方括號括起來的標題，譬如像：[Options]。每一個區塊都包含主題中對應位置的規範資訊，像自訂的背景圖片等。用意是簡化製作流程——如果你想要的話，你還是可以使用舊的外觀主題系統的方式來建立完全自訂化的佈景主題，但許多人應該都只想簡單了事，更不希望提高介面毀損的風險。輕羽級系統對開發者來說無疑更加簡單。在<a href="http://www.opera.com/browser/next/"> Opera 12 alpha</a> 中，我們只開放讓你自訂背景圖片、色系、圖片主要顯示在介面中的哪個部分。未來可能加入更多的選項。</p>

<p>接下來，我們會用例子來帶讀者走過一遍，教大家所有製作所須的須知。</p>

<h2>用例子來教你</h2>

<p>想要抓到範例檔，要先安裝 <a href="http://www.opera.com/browser/next/">Opera 12</a> 然後開啟我們的 <a href="https://addons.opera.com/themes/">Opera 佈景主題網站</a>。嘗試點一下某個佈景主題，你會發現你的瀏覽器就會變更它的風格，就像下圖所顯示的：</p>

<p><img src="http://devfiles.myopera.com/articles/6362/theme1.jpg" alt="套用 Opera 輕羽主題到 Opera 12 alpha 的範例" /></p>
<p class="comment">圖 1：套用佈景主題後會長這樣。</p>

<p class="note">你會發現在 <em>Tools &gt; Appearance</em> 中羅列著所有你已經安裝的主題。在這裡，你可以任意選擇你所安裝的主題或把他們刪除。你也可以透過手動的方式將佈景主題檔案放置到 Opera 的<em>主題</em>目錄中，這樣它就會顯示在外觀的視窗中。在 Linux 和 Mac 環境下，主題目錄會在 <em>[home folder]/Library/</em> 底下，Windows 環境則會在 <em>C:\users\[user]\AppData\Roaming\Opera\Opera</em>。</p>

<p>在主題網站中，如果你右鍵點選主題，然後在右鍵選單中點選<em>連結內容儲存為…</em>，你就可以下載主題檔。解壓縮後，你就可以取得所有的元素和包含這些內容的 persona.ini 檔：</p>

<pre><code># This file describes a test persona for the Opera browser. Not meant for redistribution.</code></pre>

<p>這只是一個註解，是要讓你瞭解一些關於佈景主題的資訊。你可以在檔案中的任何地方寫入註解，只要確保每一行註解都要以一個斜線 / 或井字號 # 為開頭即可。</p>

<pre><code>[Info]
Name                          = The Natural History of Norway
Author                        = Opera Software
Version                       = 1
Preview Image                 =</code></pre>

<p><code>[Info]</code> 區塊就顧名思義。<code>Name</code> 是這個主題的名稱，也會顯示在外觀對話方塊中和接下來的 Opera 佈景主題分類中等不同地方。[Author] 是佈景主題的作者，<code>[Version]</code> 則必須要設定為 1（這表示「第一版的輕羽佈景主題系統」）。預覽圖是支援在分類項目中或其他不同地方提供一個主題的預覽，但目前還不支援。</p>

<pre><code>[Options]
Tint Color                = #3e6da9</code></pre>

<p>[Options] 區塊：如果指定的話，<code>Tint Color</code> 就會用它所設定的色系取代預設的色系——預設的色系是從背景圖的色彩中取平均值。某些主題會在安裝後加入一個色系／色彩來取代主題的顏色。</p>

<p class="note"><code>Tint Color</code> 只是 <code>Colorize Color</code> 的別名，當然你也可以用後者，但我想你會同意 <code>Tint Color</code> 會比較直觀一點點。</p>

<pre><code>[Window Image]
Type                          = BestFit
Background                = Kraken.jpg
Colorize                      = 0</code></pre>

<p><code>[Window Image]</code> 區塊控制了整個瀏覽器的視窗設定。在 Type 設定 <code>BestFit</code> 表示 Opera 會只將一張圖片最適化到它可以顯示的範圍。你也可以用 BoxTile，它會將圖片重複鋪滿整個視窗。<code>Background</code> 是指定自訂背景圖片的路徑。<code>Colorize = 0</code> 表示你並不想特別指定自訂圖片外，在介面上剩餘空間的色彩。如果你想指定就設為 1。</p>

<pre><code>[Clear elements]
Speed Dial Widget Blank Skin  = 1
Speed Dial Widget Skin        = 1
Window Skin                   = 1
Document Window Skin          = 1</code></pre>

<p>將上述的屬性都設為 <code>1</code> 就會讓背景圖片呈現在快速撥號中。反之，設為 0 則不會。</p>

<p>雖然你或許可以在之後加入更多的選項，但目前你在輕羽佈景主題中能做的就只有這麼多。也許你會覺得這樣能做的也太少了吧！但為了能在最省力的情況下開發，這也是必然之舉。如果你真的想做更多調整，你還是可以使用完整的主題系統。但這個新的方法確實可以很大程度的簡化開發。</p>

<h2>安裝和分享你的主題</h2>

<p>當你做好一個主題後，迫不及待的想要和其他人分享你的作品時，最好的方法當然是將它上傳到我們的主題中心——用我們的 <a href="https://addons.opera.com/en/developer/upload/">Opera 外掛程式開發者上傳頁面</a>就可以輕鬆完成。當然，你需要先申請一個 <a href="http://my.opera.com/community/">my.opera</a> 帳號。用這樣的方式來分享你的主題可以讓其他使用者更容易找到，還有我們的團隊也可以幫你在發表前做一次檢查。</p>

<p>請記得，如果你在自己的伺服器中分享給他人，你必須確保設定正確的 mime 類型，否則瀏覽器並不會自動安裝。做法就是將下列的文字複製到相同目錄中的 <code>.htaccess</code> 檔案中（對 Apache-based 的伺服器來說，其他類型的伺服器則稍有不同，但也差不多）：</p>

<pre><code>&lt;files *.zip&gt;
  ForceType application/x-opera-configuration-skin
&lt;/files&gt;</code></pre>

<h2>摘要</h2>

<p>我希望本篇的 Opera 輕羽主題教學文對你有幫助。如果你有任何想法，請別客氣地說出來吧！</p>
