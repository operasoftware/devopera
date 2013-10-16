Title: Tạo phần mở rộng dành cho Speed Dial
----
Date: 2011-05-19 18:01:49
----
Lang: vi
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2>Giới thiệu</h2>

<p>Vào năm 2007, Opera <a href="http://www.opera.com/docs/changelogs/windows/920/">đã 

giới thiệu</a> Speed Dial với toàn thể người dùng Opera. Ngày nay tính năng này đã rất phổ biến và 

hầu như các trình duyệt khác cũng có tính năng tương tự. Nhưng chúng tôi vẫn tự hào rằng, chúng ta 

sẽ không phải là những bậc làm cha làm mẹ tốt nếu như không giúp những đứa trẻ của mình trưởng 

thành và phát triển thêm những kỹ năng mới? Từ khi Opera 11.10 được phát hành, Opera đã cải tiến 

hình ảnh hiển thị và <abbr title="user interaction">UX</abbr> của Speed Dial và đã được thêm <a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/">công cụ để giúp các 

nhà lập trình điều khiển cách mà trang web của họ</a>  được hiển thị trong Speed Dial. Ở Opera 

11.50, Opera đang nhắc đến một bước tiến xa hơn với <strong>Speed Dial 

extension</strong>.</p>

<p>Cũng giống như cách mà bạn mở rộng trình duyệt của bạn với hàng trăm <a href="https://addons.opera.com/addons/extensions/">Opera extension</a>, bạn cũng có thể tùy 

biến và mở rộng Speed Dial nhằm làm cho nó hữu ích hơn. Thay vì chỉ giới hạn ở việc hiển thị trang 

web hay một biểu tượng, Speed Dial bây giờ có thể dựng những nội dung mở rộng trực tiếp, và bài 

viết này là để cho bạn biết điều đó.</p>

<p class="note">Chú ý: Để thấy những ví dụ đang chạy dưới đây, bạn sẽ cần <a href="http://www.opera.com/browser/next/">Opera 11.50</a>  thêm một Speed Dial extension ví 

dụ: <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">tải Speed Dial clock</a>.</p>

<h2>Những điều cơ bản</h2>

<p>Để duy trì sự đồng nhất với các phần mở rộng với Opera Extension, Speed Dial extension dùng 

cùng một định dạng và cấu trúc với Opera Extension nhưng sẽ có vài sự bổ sung. Nói cách khác, 

những thay đổi nhỏ dưới đây vào file <code>config.xml</code> có thể mang thay đổi đã tồn tại ở 

Opera extension vào Speed Dial extension:</p>

<ul>
    <li>Một lệnh <code>&lt;feature&gt;</code> với một <code>name</code> thuộc tính của giá trị  

<code>opera:speeddial</code>, để đưa phần mở rộng vào một Speed Dial extension.</li>
    <li>Một <code>viewmodes</code> thuộc tính chứa thẻ<code>&lt;widget&gt;</code>với giá trị 

<code>minimized</code>: điều này làm hiển thị một trang nền trong ô Speed Dial.</li>
</ul>

<p>Xin lưu ý, tuy nhiên, phần mở rộng này không thể dùng cho cả hai tính năng là Speed Dial và 

thanh công cụ trình duyệt. Nói cách khác, một phần mở rộng trên thanh công cụ không thể thực thi 

trong Speed Dial trong thời điểm hiện tại.</p>

<h2>Chỉ định Speed Dial extension với <code>config.xml</code></h2>

<p>Bây giờ chúng ta cùng thực hành và khảo sát qua một ví dụ cụ thể. Để xem các đoạn mã, hãy 

xem <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">và tải Speed Dial clock extension</a> và xem file mã 

nguồn ở bên trong. Hình 1 cho thấy giao diện extension đồng hồ trong Speed Dial.</p>


<p><img src="/articles/view/creating-opera-speed-dial-extensions/clock_extension_in_speed-dial.jpg" width="400" height="242" alt="Extension đồng hồ đã được cài trong Speed Dial." /></p>
<p class="comment">Hình 1 cho thấy giao diện extension đồng hồ trong Speed Dial.[/html:p

&lt;p]Thường thì Speed Dial hiển thị một ảnh chụp toàn bộ trang web, Speed Dial extensions hiển thị 

ohần bắt đầu (hoặc phần nền) trang của extension—đây là file <code>index.html</code> theo mặc 

định. Mở kích hoạt điều này, đầu tiên chúng ta cần phải thêm thuộc tính<code>viewmodes</code> 

vào  <code>config.xml</code>&#39;s thẻ <code>&lt;widget&gt;</code> , với giá trị 

<code>minimized</code>:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; 

id=&quot;http://example.com/SimpleClockSD&quot; viewmodes=&quot;minimized&quot;&gt;</code></pre>

<p>Lệnh trên làm cho trình duyệt hiển thị nền của phần mở rộng trong chế độ biểu mẫu cực tiểu—

kích thước mặc định của ô Speed Dial ở chế độ thu phóng 100% là 256 pixel chiều rộng và 160 pixel 

chiều cao. Ngoài ra, chúng ta cũng cần thêm vào một lệnh <code>feature</code> cho Opera Speed 

Dial với thuộc tính<code>required</code>, và một lệnh <code>param</code>:</p>

<pre><code>&lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
  &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
&lt;/feature&gt;</code></pre>

<p>Phần tử <code>feature</code> thuộc <code>required</code> thuộc tính ở nơi mà Speed Dial 

cần để extension này chạy. Ví dụ, có thể có những trình duyệt hoặc nhân trình duyệt tương tích với 

Opera extension nhưng lại không có Speed Dial. Nếu extension của bạn hoạt động trên những nền 

tảng đó thì hãy dùng giá trị <code>false</code>; nếu extension của bạn không làm việc không cần 

Speed Dial thì chọn <code>true</code>.</p>

<p>Phần tử <code>param</code> là bắt buộc phải có, và quy định cụ thể mà trang cần mở khi 

biểu tượng Speed ​​Dial được nhấp.</p>

<p>Đây là file <code>config.xml</code> hoàn chỉnh cho extension này:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/SimpleClockSD&quot; 

defaultlocale=&quot;en&quot; viewmodes=&quot;minimized&quot;&gt;
  &lt;name short=&quot;Simple Clock&quot;&gt;Clock Speed Dial Extension&lt;/name&gt;
  &lt;description&gt;This is an example Speed Dial extension showing a simple 

clock.&lt;/description&gt;
  &lt;author href=&quot;http://people.opera.com/danield/&quot;&gt;Daniel Davis&lt;/author&gt;
  &lt;icon src=&quot;images/icon_64.png&quot;/&gt; &lt;!-- Icon source: <a href="http://www.openclipart.org/detail/17552" target="_blank">http://www.openclipart.org/detail/17552</a> --&gt;
  &lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
    &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
  &lt;/feature&gt;&gt;
&lt;/widget&gt;</code></pre>

<h2>Thêm nội dung vào extension</h2>

<p>Bước kế tiếp là tạo ra thứ gì đó thú vị để hiển thị trong cửa sổ Speed Dial. Đây là trang nền của 

extension vì vậy chúng ta cần tạo một file tên là <code>index.html</code> ở cùng thư mục với 

<code>config.xml</code>. Chẳng hạn như, chúng ta đang tạo ra một đoạn JavaScript đơn giản hiển 

thị đồng hồ kỹ thuật số để hiển thị giờ hiện tại. Đầu tiên, chúng ta sẽ tạo ra một file cơ bản 

<code>index.html</code> với phần tử <code>output</code> rỗng:</p>

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

<p>Theo đó, chúng ta cần tạo một thư mục <code>scripts</code> chứa 

file<code>background.js</code> mà chúng ta liên kết đến. Fiel JS có thể giống như sau:</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  // Simple function to prefix a zero if the value passed is less than 10
  function formatTime(time) {
    return (time &lt; 10) ? &#39;0&#39; + time : time;
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

<p>Bảng phong cách đi kèm (<code>style.css</code>) thực sự rất đơn giản, nhưng bao gồm một 

thủ thuật tinh vi:</p>

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


<p>Như bạn có thể thấy, đây là một truy vấn truyền thông của CSS3 ở cuối của file này để kiểm tra 

cho điều kiện &lt;ode&gt;view-mode: minimized, phù hợp với các <a href="http://dev.w3.org/2006/waf/widgets-vmmf/"><code>view-mode</code> đặ điểm kỹ thuật 

Media Feature </a>. Nói cách khác, các phong cách trong phần này sẽ chỉ áp dụng khi trang được 

hiển thị trong một trạng thái thu nhỏ chẳng hạn như một ô Speed ​​Dial. Đây là một cách tiện dụng để 

ghi đè phong cách cho một tình huống nhất định mà không cần phải duy trì thiết kế nhiều.</p>

<h2>Kết thúc extension</h2>

<p>Như thường lệ, để đóng gói một phần mở rộng thì zip tất cả các file trong thư mục (nhưng không 

phải là chính thư mục đó) và đổi tên với đuôi là <code>.oex</code>. Nếu không, bạn có thể <a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">tải về file clock_SD_extension.oex</a> và bắt đầu thử nghiệm.</p>

<h2><code>SpeedDialContext</code> API</h2>

<p>Một khi đã được cài, phần mở rộng này có thể linh hoạt kiểm soát các ô Speed Dial với 

<code>SpeedDialContext</code> API. Đây là một API cực kỳ đơn giản với 2 thuộc tính có thể ghi: 

<code>title</code> and <code>url</code>. Chúng được truy cập từ các nền JavaScript
thông qua đối tượng <code>opera.contexts.speeddial</code>, như là:</p>

<pre><code>if (opera.contexts.speeddial) {
  var sd = opera.contexts.speeddial; 
  sd.title = &quot;My title&quot;;
  sd.url = &quot;mypage.html&quot;; 
}</code></pre>

<p>Chúng ta có thể dùng tính năng này để cải thiện extension đồng hồ, ví dụ bằng cách làm cho nó 

hiển thị một thông điệp thân thiện phụ thuộc vào thời gian trong ngày. Chỉ cần tạo một file chúng ta 

cần chỉnh sửa với<code>background.js</code> JavaScript file:</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  // Simple function to prefix a zero if the value passed is less than 10
  function formatTime(time) {
    return (time &lt; 10) ? &#39;0&#39; + time : time;
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

<p>Phần này tương tự như ví dụ đầu tiên nhưng có một vài thứ đã được bổ sung, như:</p>

<ul>
    <li>Một đối tượng <code>messages</code> có chứa thông báo cho các thời điểm khác nhau 

trong ngày.</li>
    <li>Một sự kiểm tra lặp đi lặp lại khi giờ đã thay đổi.</li>
    <li>Một dòng tin nhắn có liên quan cho thấy từ đối tượng <code>messages</code> ở tiêu đề 

Speed Dial.</li>
</ul>

<p>Extension này có thể tảii về tại đây: <a href="%22http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/clock_SD_extension.oex">friendly_clock_SD_extension.oex</a>. Khi đã được cài, nó 

trông như thế này:</p>

<p><img src="/articles/view/creating-opera-speed-dial-extensions/friendly_clock_extension_in_speed-dial.jpg" width="400" height="256" alt="Một extension đồng hồ thân thiện đã được cài trong Speed Dial của trình duyệt." /></p>
<p class="comment">Hình 2: Một extension đồng hồ thân thiện đã được cài trong Speed Dial của 

trình duyệt.</p>

<h2>Kết luận</h2>

<p>Như bạn có thể thấy, các nhà phát triển extension bây giờ có một cửa sổ vượt trội để thêm sự 

tiện lợi, dễ-sử-dụng hoặc vui vẻ với các extension của họ.Các ví dụ ở đây là cơ bản nhưng cho thấy 

tiềm năng của các phần mở rộng Speed ​​Dial khi kết hợp với những ý tưởng thông minh và kỹ năng 

phát triển web. Opera hi vọng sẽ thấy các extension dành cho Speed Dial trở nên hữu ích hơn việc 

chỉ liên kết đến một trang web, vì vậy chúng tôi rất mong được thấy những cách sáng tạo mà bạn sử 

dụng API này tại<a href="https://addons.opera.com/addons/extensions/"> kho Opera 

extension</a>!</p>

<h2>Tham khảo</h2>
<p><a href="http://www.opera.com/docs/apis/extensions/speeddialguide/">Opera Extensions API: 

Speed Dial guide</a></p>
