Title: Mẫu (template) cho kho ứng dụng Opera TV Store
----
Date: 2012-10-17 12:25:47
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

<p>Kể từ khi ra mắt kho ứng dụng Opera TV Store, chúng tôi nhận thấy có rất nhiều ứng dụng được viết và xuất bản bởi các lập trình viên và được nhiều người dùng đón nhận xử dụng. Trên thực tế, các ứng dụng cho TV của chúng tôi được xây dựng dựa trên các tiêu chuẩn Web, điều đó cho phép các lập trình viên có thể sử dụng những kỹ năng sẵn có của họ để tạo ra các ứng dụng nội dung dành cho TV. Việc phát triển ứng dụng cho TV có thể vẫn còn khá lạ lẫm, để giải quyết vấn đề đó, chúng tôi đã tạo sẵn một số mẫu code ứng dụng phổ biến (template) để lập trình viên có thể tự do sử dụng chúng.</p>

<p>Trên bất cứ nền tảng nào, tin tức và giải trí đều được đánh giá là những nội dung phổ biến, do đó, các mẫu code ứng dụng có sẵn (template) của chúng tôi tập trung cho định dạng trình xem video hoặc trình đọc tin RSS. Mục đích của chúng là nhắm tới việc dễ dàng tối ưu hóa để các bạn có thể nhanh chóng tạo ra ứng dụng mang thương hiệu của bạn mà không phải lo lắng về thời gian và tiền bạc.</p>

<h2>Mẫu (template) cho trình xem video</h2>

<p>
<img src="http://devfiles.myopera.com/articles/9442/video-app-template.jpg" alt="Ảnh chụp màn hình minh hoạ ứng dụng phát video trên TV đang được sử dụng." />
</p>
<p class="caption">Hình 1: Mẫu (template) trình xem video đang xử dụng.</p>

<h3>Tổng quan</h3>

<p>Mẫu ứng dụng trình xem video không chỉ đơn giản như một trình xem video – Nó cho phép bạn chia tách thành các kênh dựa trên tiêu chí chủ đề hay đề tài. Ngoài ra nó còn có tính năng đánh dấu được tích hợp sẵn cho phép người dùng di chuyển các video mà họ thích vào danh sách video ưa thích của họ. Khi xem video, người dùng cũng có thể chọn phát liên tục các video hoặc thậm chí sắp xếp lại thứ tự phát các video theo ý của mình. Để tuỳ chỉnh mẫu, có ba vùng chính có thể chỉnh sửa dễ dàng — dữ liệu (có thể chỉnh sửa qua tệp XML hoặc API hiện có của bạn), hình ảnh và màu sắc.</p>

<h3>Tùy chỉnh</h3>

<p>Đầu tiên bạn sẽ phải thêm vào các video và các kênh mình đã chọn. Bạn có thể thực hiện việc này trong tệp <code>video.xml</code>, có dạng như sau:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;rss&gt;
  &lt;channel&gt;
    &lt;item&gt;
      &lt;title&gt;Opera Labs: Mobile Extensions&lt;/title&gt;
      &lt;description&gt;We&#39;re excited to share with you a Labs release of our mobile browser with support for extensions.&lt;/description&gt;
      &lt;category&gt;Opera Labs&lt;/category&gt;
      &lt;duration&gt;00:01:24&lt;/duration&gt;
      &lt;content url=&quot;http://apps.tvstore.opera.com/videos/Opera_Labs_Mobile_Extensions.mp4&quot; fileSize=&quot;24434480&quot; type=&quot;video/mp4&quot; /&gt;
      &lt;thumbnail url=&quot;http://apps.tvstore.opera.com/videos/Opera_Labs_Mobile_Extensions.jpg&quot; width=&quot;250&quot; height=&quot;140&quot; /&gt;
    &lt;/item&gt;
  &lt;/channel&gt;
&lt;/rss&gt;</code></pre>

<p>Tệp này được đọc bởi hàm <code>getData()</code>, trong tệp <code>videotemplate.js</code>, vì vậy nếu bạn muốn sử dụng nguồn cấp dữ liệu API hoặc RSS của chính mình cho nguồn video, bạn chỉ cần thay đổi địa chỉ tệp trong hàm đó. Bạn cũng cần phải thay đổi các quy tắc phân tích cú pháp trong hàm <code>prepareData()</code> ở cùng một tệp cho phù hợp.</p>

<p>Đối với tuỳ chỉnh trực quan, tất cả các hình ảnh được chứa trong thư mục <code>images</code> và được đặt tên theo các tên tệp lôgic như <code>logo.png</code>. Điều này cho phép bạn dễ dàng thay thế chúng bằng sơ đồ màu và biểu tượng của riêng bạn. Ngoài ra các kiểu thiết kế của ứng dụng ở trong tệp <code>style.css</code> trong thư mục <code>css</code>. Định nghĩa phông chữ và màu chữ đã được đặt ở đầu tệp này nhằm giúp bạn dễ dàng tuỳ chỉnh hơn.</p>

<h2>Mẫu ứng dụng đọc RSS</h2>

<p>
<img src="http://devfiles.myopera.com/articles/9442/rss-app-template.jpg" alt="Ảnh chụp màn hình minh hoạ ứng dụng đọc video trên TV đang được sử dụng." />
</p>
<p class="caption">Hình 2: Mẫu ứng dụng đọc RSS trên TV đang được sử dụng</p>

<h3>Tổng quan</h3>

<p>Mẫu ứng dụng đọc RSS mang lại cho bạn sự thuận tiện trong việc cung cấp tin tức hoặc những nội dung cần cập nhập thường xuyên chỉ trong một trình ứng dụng duy nhất. Giống như mẫu trình xem Video, mầu này cũng được điều khiển dễ dàng với các phím chuyển hướng trên điều khiển từ xa và bao gồm cả tính năng trình chiếu slide tự động hiển thị từng mục tin tức hoặc từng bài viết một.  Việc  tuỳ chỉnh được thực hiện đơn giản  qua các thay đổi về màu sắc hoặc được tùy chỉnh ở mức độ cao hơn thông qua việc biên tập mã tạo động HTML.</p>

<h3>Tùy chỉnh</h3>

<p>Bước quan trọng nhất là chỉ định các nguồn cấp dữ liệu bạn muốn sử dụng. Việc này được thực hiện bằng cách chỉnh sửa đoạn array <code>DEF_FEEDS</code> trong tệp <code>js/config.js</code>. Bạn có thể thêm bao nhiêu tuỳ thích — bao gồm các nguồn cấp dữ liệu được lưu trữ trên một miền bên ngoài — tuy nhiên để thực hiện các biện pháp bảo mật trình duyệt thì cần phải sử dụng một máy chủ nguồn cấp dữ liệu proxy. Có hướng dẫn thiết lập phần này trong tài liệu hướng dẫn, được liên kết tới gói có thể tải xuống ở bên dưới. Danh sách các nguồn cấp dữ liệu có thể giống như sau:</p>

<pre><code>var DEF_FEEDS = [{
  url: &#39;data/data.xml&#39;
},
{
  url: &#39;http://my.opera.com/chooseopera/xml/rss/blog/&#39;,
  proxy: true
}];</code></pre>

<p>Đồng thời trong tệp <code>js/config.js</code> còn có các tuỳ chọn để thay đổi tiêu đề ứng dụng của bạn và địa chỉ của máy chủ proxy, nếu cần:</p>

<pre><code>/**
 * Application main title 
 */
var APP_TITLE = &#39;All feeds&#39;;

/**
 * Proxy URL
 */
var PROXY_URL = &#39;/xhrproxy/?_proxy_url=&#39;;</code></pre>

<p>Cách thức hiển thị cho ứng dụng có thể được thay đổi bởi việc sửa tệp <code>css/common.css</code>, và nếu như bạn muốn sửa đổi tệp HTMP để cấp nguồn cho từng mục sử dụng, nó được nằm trong tệp <code>js/Item.js</code> trong đoạn mã arrays <code>TMPL</code> và <code>TMPL_CONTENT</code>.</p>

<h2>Tải xuống các mẫu!</h2>

<p>Các mẫu ứng dụng có sẵn để tải xuống tại đây (tệp ZIP):</p>

<ul>
    <li><a href="http://apps.tvstore.opera.com/templates/videotemplate.zip">Mẫu ứng dụng phát video</a></li>
    <li><a href="http://apps.tvstore.opera.com/templates/rssreader.zip">Mẫu ứng dụng đọc RSS</a></li>
</ul>

<p>Cả hai tệp ZIP đều bao gồm hướng dẫn chi tiết hơn về cách thêm dữ liệu của riêng bạn và tuỳ chỉnh các mẫu cho phù hợp với các nguyên tắc về thương hiệu hoặc sở thích của bạn. Các mẫu này đã được thiết kế để bạn không cần phải chỉnh sửa chức năng hoặc bố cục để có thể tạo một ứng dụng đẹp và dễ sử dụng. Tuy nhiên, do cả hai mẫu đều được cung cấp theo giấy phép nguồn mở miễn phí, bạn có thể thoải mái tuỳ chỉnh mã ở cấp sâu hơn nếu muốn. Chúng tôi mong đợi được xem các ứng dụng bạn tạo từ những mẫu này trong Opera TV Store!</p>

<p class="note">Các mẫu được cấp phép theo giấy phép Creative Commons Ghi nhận tác giả 3.0, Không cho phép mang chuyển. Vui lòng kèm theo thông báo sau trong bất kỳ gói phân phối nào: Copyright © 2012 Opera Software ASA. Sử dụng theo Giấy phép.</p>
