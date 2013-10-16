Title: Hay cho phép trang web của bạn tỏa sáng trên Speed Dial
----
Date: 2011-04-07 13:43:55
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

<h2>Mục lục</h2>

<ul>
	<li><a href="#intro">Giới thiệu</a></li>
	<li>
		<a href="#uselogo">Sử dụng một logo</a>
		<ul>
			<li><a href="#html5icons">Các biểu tượng trong HTML5</a></li>
			<li><a href="#setanicon">Chỉ định một biểu tượng Speed Dial</a></li>
			<li><a href="#multipleicons">Sử dụng nhiều biểu tượng</a></li>
		</ul>
	</li>
	<li>
		<a href="#content">Cung cấp thiết kế riêng trong Speed Dial của bạn</a>
		<ul>
			<li><a href="#viewmode">Sử dụng <code>view-mode:minimized</code></a></li>
			<li><a href="#with-x-purpose">Sử dụng tiêu đề X-Purpose</a></li>
			<li><a href="#preview-refresh">Tự động tải lại theo định kỳ</a></li>
		</ul>
	</li>
	
	
	<li><a href="#sdpriority">Speed Dial ưu tiên</a></li>
	<li><a href="#productsupport">Hỗ trợ sản phẩm của Opera</a></li>
</ul>

	<h2 id="intro">Giới thiệu</h2>
	
	<p>Với phiên bản 11.10, Opera cho máy tính để bàn cho phép người dùng có thể thỏa sức sáng tạo trong Speed Dial. Mặc định, Speed Dial sử dụng ảnh chụp màn hình của trang web. Nhưng bây giờ bạn có thể chỉ định một biểu tượng hoặc cung cấp CSS dành riêng cho Speed Dial hay những nội dung cụ thể khác.</p>

<h2 id="uselogo">Sử dụng một logo</h2>

<p>Phần này sẽ hướng dẫn bạn cách dùng logo tùy chỉnh hoặc biểu tượng trong Speed Dial.</p>
	
	<h3 id="html5icons">Các biểu tượng trong HTML5</h3>
	
	<p>Chắc hẳn bạn đã quá quen với những biểu tượng của các bookmark. Chúng đã được giới thiệu lần đầu trong Internet Explorer 5 vào năm 1999. Mặc dù không có trong HTML4, các nhà cung cấp trình duyệt cuối cùng đã đồng ý <a href="http://www.w3.org/2005/10/howto-favicon">bổ sung biểu tượng lối tắt</a> bằng cách hỗ trợ cho <code>icon</code> như là một giá trị trong <code>rel</code> thuộc tính của phần tử <code>link</code>. Apple sau đó đã mở rộng chuẩn này để các thiết bị liên lạc thông qua <a href="http://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html"><code style="word-wrap:none">apple-touch-icon</code></a>. Theo đặc tả kỹ thuật của HTLM5, <code>icon</code> giờ là một <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#rel-icon">chuẩn hợp lệ</a> cho thuộc tính <code>rel</code>.</p>

	<h3 id="setanicon">Chỉ định một biểu tượng Speed Dial</h3>
	
	<p>Chọn một biểu tượng cho Speed Dial cũng tương tự như chọn biểu tượng cho các lối tắt (shortcut). Chỉ cần thêm một thẻ <code>&lt;link&gt;</code> ở đoạn <code>head</code> trong tài liệu của bạn.</p>

<pre><code>&lt;head&gt;
    &lt;title&gt;My Opera&lt;/title&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/logo.png&quot;&gt;
&lt;/head&gt;</code></pre>
		
	<p>Biểu tượng Speed dial phải thỏa mãn các điều kiện sau:</p>
	
	<ul>
		<li>Rộng ít nhất 144 pixel và cao ít nhất 114 pixel. Đây là kích thước tối thiểu và các biểu tượng có cỡ nhỏ hơn sẽ bị bỏ qua.</li>
		
		<li>Định dạng ảnh là PNG, JPEG hoặc GIF. Định dạng SVG chưa được hỗ trợ. Chỉ khung hình đầu tiên của một ảnh động được sử dụng.</li>
	</ul>
	
	<p>Mặc định, kích cỡ tối đa của một biểu tượng là rộng 256 pixel và cao 160 pixel. Các biểu tượng lớn hơn sẽ được thay đổi kích cỡ để phù hợp với kích cỡ trên (<a href="/articles/view/opera-speed-dial-enhancements/icon.html">demo</a>). Bạn có thể thay đổi kích thước mặc định tối thiểu và tối đa bằng cách mở menu opera:config.</p>
	
	<p>Bên cạnh đó, Opera 11.10 cũng hỗ trợ <code>apple-touch-icon</code>, <code>apple-touch-icon-precomposed</code> và <code>image_src</code>.</p>

	<h3 id="multipleicons">Sử dụng nhiều biểu tượng</h3>
	
	<p>Bạn có thể chỉ định nhiều biểu tượng. Thật tuyệt vời khi bạn sẽ nhận được một biểu tượng khi bookmark trang và nhận được một biểu tượng khác khi thêm trang đó vào Speed Dial.<p>
	
<pre><code>&lt;head&gt;
    &lt;title&gt;My Opera&lt;/title&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/128x128image.png&quot;&gt;
    &lt;!-- This will be the speed dial icon --&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/200x200image.png&quot;&gt;
&lt;/head&gt;</code></pre>
	
	<p>Nếu bạn chỉ định nhiều hơn một icon, Speed Dial sẽ chọn biểu tượng lớn nhất  (<a href="/articles/view/opera-speed-dial-enhancements/multiple-icons-diff-sizes.html">demo</a>). Nếu cả 2 biểu tượng có cùng kích thước, liên kết biểu tượng đầu tiên sẽ được ưu tiên (<a href="/articles/view/opera-speed-dial-enhancements/multiple-icons-same-size.html">demo</a>).</p>
	
<h2 id="content">Cung cấp thiết kế riêng trong Speed Dial của bạn</h2> 

<p>Có một vài cách thức mới để tạo thiết kế nội dung riêng phù hợp và tạo phong cách độc đáo cho Speed Dial: 

<code>view-mode:minimized</code> trong CSS, tiêu đề X-Purpose HTTP, và tự động tải lại. Chúng sẽ được giới thiệu rõ hơn trong phần này</p>
	
<h3 id="viewmode">Dùng <code>view-mode:minimized</code></h3>

<p><img src="/articles/view/opera-speed-dial-enhancements/view-mode.png" width="542" height="292" alt="The Speed Dial screen in Opera 11.10" /></p>
<p class="comment">Hình 1: Màn hình Speed Dial trong Opera 11.10</p>

<p>Đặc tính truyền thông <a href="http://www.w3.org/TR/view-mode/"><code>view-mode</code></a> định nghĩa một cách để chỉ định kiểu thông qua chế độ xem. Bằng cách dùng <code>view-mode: minimized</code>, bạn có thể cung cấp cho các kiểu thay thế hoặc nội dung hiển thị đã được thiết kế riêng cho Speed Dial. Tính năng <code>view-mode</code> 
flàm việc giống như những tính năng truyền thông khác, như là <code>device-width</code>. Như với bất kỳ truy vấn truyền thông, kiểu sẽ được chứa trong một <code>@media</code> block.</p>
		
<pre><code>@media screen and (view-mode: minimized) {
    body {
        color: #fff;
        background: #b20000;
    }
}</code></pre>
	
<p>Hoặc bạn có thể liên kết đến một kiểu bên ngoài, và thiết lập giá trị của thuộc tính truyền thông với <code>(view-mode: minimized)</code></p>

<pre><code>&lt;link rel=stylesheet type=&quot;text/css&quot; href=&quot;minimizedstyles.css&quot; media=&quot;(view-mode:minimized)&quot;&gt;</code></pre>

<p>Xem một <a href="/articles/view/opera-speed-dial-enhancements/view-mode.html">ví dụ <code>view-mode: minimized</code> khi nó làm việc</a>.</p>

<p>
Hãy nhớ rằng <code>view-mode: minimized</code> tạo nên một khung nhìn Speed Dial có kích thước <strong>256 pixels chiều rộng và 160 pixels chiều cao</strong>.
</p>

<h3 id="with-x-purpose">Sử dụng tiêu đề X-Purpose</h3>

<p>Nó cũng có thể được dùng để tạo một URL khác cho Speed Dial của bạn. Điều này lí giải tại sao mỗi yêu cầu Speed Dial bao gồm một tiêu đề <code>X-Purpose: preview</code></p>

<pre><code>GET / HTTP/1.1
Host: www.bbc.co.uk/news
X-Purpose: preview
User-agent: Opera/9.80 (Macintosh; Intel Mac OS X 10.6.6; U; en) Presto/2.8.99 Version/11.10</code></pre>

<p>Bằng cách phát hiện phần tiêu đề, bạn có thể chọn một URL khác, giới hạn các tập tin sẽ được gửi đến Speed Dial, hoặc hiển thị nội dung khác. Chú ý rằng điều này không ảnh hưởng đến cac URL đã được người dùng mở khi click vào Speed Dial.</p> 

<p>Trong ví dụ dưới đây, Opera dùng mod_rewrite của Apache nhằm chuyển hướng tất cả các yêu cầu Speed Dial đến <code>/preview.html</code> (có thể bạn sẽ muốn cụ thể hơn so với điều này trong thế giới thực).</p>

<pre><code>RewriteEngine On
RewriteCond %{HTTP:X-Purpose} ^preview$
RewriteRule ^(.*) /preview.html</code></pre>

<p>Hoặc có thể bạn muốn sử dụng một ngôn ngữ từ phía máy chủ để có điều kiện phục vụ các nội dung khác nhau tại cùng một URL. Ví dụ dưới đây sử dụng PHP.</p>

<pre><code>&lt;?php
if ($_SERVER[&#39;HTTP_X_PURPOSE&#39;] == &#39;preview&#39;) {
    // Send Speed Dial content
} else {
    // Send regular content
}
?&gt;</code></pre>

<h3 id="preview-refresh">Tự động tải lại theo định kỳ</h3>

<p>Để thực hiện nội dung Speed Dial năng động hơn, bạn có thể thiết lập để Opera tự động tải lại khi người dùng thêm một 

trang vào Speed Dial. Bạn có thể thiết lập theo 2 cách</p>
<ol><li><p>Dùng một tag <code>meta</code>:</p>
<pre>&lt;meta http-equiv=&quot;preview-refresh&quot; content=&quot;3600&quot;&gt;</pre></li>
<li><p>Thiết lập <code>Preview-Refresh</code> như một tiêu đề đáp ứng:</p>
<pre>Preview-Refresh:3600</pre>
</li></ol>
<p>Chú ý rằng bạn phải thiết lập các giá trị bằng giây. Thiết lập 3600 giây sẽ làm cho Speed Dial tải lại mỗi 1 giờ.</p>


<h2 id="sdpriority">Speed Dial ưu tiên</h2>

<p>Speed Dial ưu tiên đầu tiên là <code>view-mode: minimized</code> CSS. Nếu không có kiểu nào khả dụng, trình duyệt sẽ tìm kiếm một biểu tượng.Nếu không có biểu tượng được quy định hoặc nếu các tập tin bị mất hoặc bị hỏng, mặc định Speed Dial sẽ sử dụng một ảnh chụp màn hình của trang web.</p>


<h2 id="productsupport">Hỗ trợ sản phẩm của Opera</h2>
<p>Bây giờ các cải tiến chỉ có sẵn cho người sử dụng Opera Desktop.</p>

<h2>Đọc thêm</h2>

<ul>
	<li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#rel-icon">Links from the WHATWG HTML5 specification</a></li>
	<li><a href="http://www.w3.org/TR/view-mode/">View mode media feature specification</a></li>
</ul>
</p></p>
