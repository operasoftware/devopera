Title: Opera电视商店应用程序的设计考虑
----
Date: 2012-04-18 14:11:19
----
Lang: zh
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<ul class="toc">
<li><a href="#introduction">简介</a></li>
<li><a href="#checklist">快捷检验清单</a></li>
<li><a href="#context">电视情境</a></li>
<li><a href="#distance">用户距离</a></li>
<li><a href="#resolution_overscan">分辨率和过扫描</a></li>
<li><a href="#layout">布局</a>
	<ul>
		<li><a href="#layout_examples">举例</a></li>
	</ul></li>
<li><a href="#navigation">导航</a>
	<ul>
		<!-- <li><a href="#back_button">The <kbd>BACK</kbd> button</a></li> -->
		<li><a href="#shortcuts">快捷键</a></li>
	</ul></li>
<li><a href="#input">文本输入</a></li>
<li><a href="#responsiveness">响应性能</a></li>
<li><a href="#privacy">隐私</a></li>
</ul>

<h2 id="introduction">简介</h2>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/638-opera/tvStore.jpg" alt="TV appstore" /></p>
<p class="comment">Opera电视商店界面</p>
</div>

<p>Opera电视商店向用户提供了一个基于HTML5应用程序的发布平台。</p>

<p>尽管电视商店的应用程序本质上也是网页，但开发者有必要了解在电视情境中，特别是Opera电视商店的模式上，设计上需要做的考虑。</p>

<h2 id="checklist">快捷检验清单</h2>

<p>以下是我们对一个优化的电视商店应用程序的总结建议：</p>
<ul>
    <li>少就是多 - 电视屏幕或许很大，可我们通常是从更远的距离观看。</li>
     <li>为保证可读性和实用性，请使用至少22px大小的非衬线字体，可聚焦选择的元素高度至少34px。</li>
    <li>确保您的应用程序在屏幕大小1216×684px上可用。（Opera电视商店的分辨率为1280×720，留下5％的空白防止 <a href="#resolution_overscan">过扫描 </a>）。</li>
    <li>使一切内容用标准的遥控器方向键可访问： <kbd>上</kbd>, <kbd>下</kbd>, <kbd>左</kbd>, <kbd>右</kbd> 和 <kbd>返回</kbd> ， 其他键（如大多数摇控器的颜色键）只应被用来作为快捷键。</li>
    <li>确保表明当前元素选定状态的聚焦框任何时候都清晰可见。</li>
    <li>避免用户输入文字。 </li>
    <li>保证应用程序对用户操作的快响应性。</li>
</ul>

<h2 id="context">电视情境</h2>

<p>当您创建应用时，您需要考虑——用户对电视的使用习惯和桌面电脑及手机是完全不同的:</p>

<ul>
    <li>电视主要用来娱乐休闲的，用户不希望有太多的交互及决策。</li>
    <li>电视和用户距离较远，之间交互工具只有遥控器。</li>
    <li>电视像移动手机一样界面简洁，但电视交互是用远程遥控器控制（4键导航）。</li>
    <li>不同于其他设备，电视是公共设备，控制隐私的能力有限。</li>
    <li>电视的优势在于对大图像，视频及音频的展示，您的程序应该利用这些优势。</li>
</ul>

<h2 id="distance">用户距离</h2>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/638-opera/10feetUx2.png" alt="10-feet UX" /></p>
<p class="comment">10-英尺的用户体验: 用户坐在距离电视10英尺的沙发上.</p>
</div>

<p>电视界面也被称为10英尺的用户界面，因为10英尺(3米)是用户离电视的大概距离。对于设计师来说，这意味着“大屏幕”不能真正的被认为是“大”,你要保持和开发移动应用程序一样的考虑。</p>

<ul>
    <li>所有程序的界面元素和文本都需要比桌面电脑的大。我们建议文本大小至少22像素，尽管你的设计若不看重文本，也可以使用最低18像素。再考虑到你对按钮等文字装载元素的留白，我们建议其他元素使用至少34像素的高度。</li>
    <li>字体最好大而简洁。我们建议使用简单的非衬线字体。</li>
    <li>尽量多的留白，以避免项目元素从远处看互相重叠覆盖。</li>
    <li>背景和程序界面元素对比明显，尤其当你用整一张图片作为背景时。</li>
    <li>当界面元素被选择时，聚焦框应该是清晰可见的，用户不会不知道什么地方聚焦。</li>
    <li>在电视上，深色背景上的浅色内容通常更易读。</li>
    <li>不要试图认为大屏幕意味着你可以包含更多的内容。少就是多。只包括相关内容,保持在每个界面的内容降到最低。</li>
</ul>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/638-opera/comparisonTvMobile.png" alt="TV viewer" /></p>
<p class="comment">一个远距离观看的电视和一个近距离使用的手机没什么不同。</p>
</div>

<p> 虽然电视的察觉类似于移动设备尺寸,但设计一个移动应用并期望它在电视上也能用是不实际的：</p>

<ul>
    <li>手机屏幕可以垂直和水平旋转；而电视只是水平显示，在某些情况下则是宽屏。</li>
    <li>因为是被远距离4键导航控制，所有为触摸屏设计的互动都需要重新设计。</li>
</ul>

<h2 id="resolution_overscan">分辨率和过扫描</h2>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/638-opera/overscan.png" alt="TV viewer" /></p>
<p class="comment">如果您忽视了过扫瞄，您的应用程序可能部分在电视屏幕之外不可见。</p>
</div>

<p>Opera电视商店运行在1280×720像素的分辨率上。但是，因为过扫描的关系，你必须保证您的应用程序在1216×684像素下也显示良好。</p>
<p>今天所有的电视机都有一定的过扫描，这意味着你的应用程序边缘可能在电视的可见区域之外。虽然用户可能关掉过扫描，不过最好设计程序时注意这种留白，因为大多数用户很可能意识不到“关闭过扫描”这一选择。不过电视的过扫描量是不同的,可以假设5%的边框用户可能不可见。</p>

<p>我们建议您在过扫描打开和关闭的情况下都测试您的程序。</p>

<h2 id="layout">布局</h2>
<p>电视应用程序的布局必须简单:</p>

<ul>
    <li>菜单元素的最好位置是在顶部或左列。</li>
    <li>保持布局尽可能简单：菜单和元素容器(列表、网格、单元素等)。</li>
     <li>保持所有相关的功能和信息在一起。例如，如果有游戏得分,保持所有那些相似信息在同一边列/角落，而不是分散在屏幕上或者与其他非相关元素组合一起。</li>
     <li>记住基本的图形设计理念，并让您的应用程序遵循它们：对齐、接近、平衡、一致性、对比和空白。</li>
</ul>

<h3 id="layout_examples">举例</h3>
<p>在设计应用程序的布局时，我们建议您对屏幕上元素最多分为2组：菜单和内容。你也可以将菜单单独放在一个屏幕上，在另一个屏幕上对内容进行全屏设计。</p>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/638-opera/layout-justContent.png" alt="TV app with only  content" /></p>
<p class="comment">例子：内容和菜单分布在不同屏幕上。</p>
</div>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/638-opera/layout-horizontal.png" alt="TV app horizontal" /></p>
<p class="comment">例子：横向布局的电视应用程序。</p>
</div>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/638-opera/layout-vertical.png" alt="TV app vertical" /></p>
<p class="comment">例子：纵向布局的电视应用程序。</p>
</div>

<h2 id="navigation">导航</h2>

<p>电视用户普遍受遥控器上 只有四个方向的导航键限制： (<kbd>上</kbd>, <kbd>下</kbd>, <kbd>左</kbd>, <kbd>右</kbd>) 。</p>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/638-opera/remote.jpg" alt="TV remote" /></p>
<p class="comment">保证所有内容用方向键，<kbd>确认键</kbd> 和 <kbd>退出键</kbd> (在某些遥控器上也可能是 <kbd>返回键</kbd>) 可访问。 </p>
</div>

<p>尽管一个全面的电视浏览器可能支持方向导航和虚拟鼠标的使用，但在Opera电视商店上只支持方向导航。</p>

<p>努力使导航简单化。在长方形或列表的设计中，元素间相对的上下左右位置很清晰，导航也更为容易。尽量避免用户突然跳跃到对角线间的另一元素上。.</p>

<p>避免同时混合横向和纵向导航。最好单独依赖横向列或纵向列，而不是组合使用它们。避免将重要的元素放在列表顶层或者底部，否则，用户将不得不浏览所有列表去选择它。</p>

<p>因为电视的横向性及比例尺，横向导航更受欢迎。也可以根据应用程序进行设计。</p>

<p>尽量避免使用需要激活或点击才能交互的元素。例如，避免点击列表单后才能在在列表中导航的设计。如果你有一个元素有子元素（如列表），尽量让这种点击父元素后选择子元素的操作变得明显。</p>

<!--
<h3 id="back_button">The <kbd>BACK</kbd> button</h3>
<p>The <kbd>BACK</kbd> button on the remote control works just like it does in a desktop browser. Users will be familiar with this key and expect it to bring them to the previous screen of the application. However, you may want to also provide a visible back button in the application.</p>

<div>
<p><img src="back.png" alt="TV app navigation flow"></p>
<p class="comment">Navigation between screens using the <kbd>BACK</kbd> key</p>
</div>

<p>The ultimate goal of the <kbd>BACK</kbd> button is to take you out of the application. When you are playing a game, <kbd>BACK</kbd> should be the key that brings forward the menu where you have an option to quit.</p>

<p>If the user is currently playing a game, the <kbd>BACK</kbd> button should bring up a dialog asking if the game should continue or quit.</p>

<div>
<p><img src="quitGame.png" alt="TV app menu"></p>
<p class="comment"><kbd>BACK</kbd> button pressed when playing a game</p>
</div>
-->

<h3 id="shortcuts">快捷键</h3>
<p>我们建议所有程序功能都能够用普通的导航键可访问。颜色键仅作为可选的快捷键。大多数用户并不想去学习快捷键，而且不同的摇控器上，颜色键的位置可能也并不方便使用。</p>

<p>在某个你经常用到，却需要很多次点击的操作上，你可以去使用颜色快捷键。但注意，并不是要用上所有的颜色键，因为用户只可能记住1,2个而不是所有的4个快捷键的用途。用4个用户可能一个都记不住，再根据您的应用程序来判断用几个快捷键。</p>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/638-opera/shortcuts.png" alt="TV app with shortcut key legend" /></p>
<p class="comment">例子：颜色快捷键提示信息的位置。</p>
</div>

<h2 id="input">文本输入</h2>

<p>基本来说，电视和用户的互动很少，除了必要的音量调整和更换频道。尽管现在的摇控器拥有更多功能，但对于文本输入还是很原始，基本没有优化。</p>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/638-opera/remote2.jpg" alt="TV Remote" /></p>
<p class="comment">电视摇控器</p>
</div>

<p>某些电视会附带外加键盘，但用户基本还是只使用摇控器。我们建议您设计应用程序时候，尽量避免文本输入。以下是一些建议：</p>

<ul>
	<li>用户内容提示而不是让用户去搜索</li>
	<li>通过逻辑合理的目录访问内容</li>
	<li>尽可能在搜索／输入框里包含智能自动补全功能</li>
	<li>当需要登录时，尽量让用户选择记住登录状态。这需要默认选上“记住我的登录状态”这个可选框。</li>
</ul>


<h2 id="responsiveness">响应度</h2>
<p>电视依旧在低配置的硬件上运行。电视摇控器响应度也不高。因此需要尽量让您的应用程序拥有高响应性，避免另一瓶颈。您需要注意的是：</p>
<ul>
	<li>让聚焦框高光可见，让用户不用花时间寻找。</li>
	<li>若操作需要一段时间，则显示进度提示。</li>
	<li>不要为了动态效果而牺牲性能。如果动态效果不是很平滑或者增加负担，则禁用它。</li>
	<li>当元素状态因为用户操作而发生改变，请提供加载框或者声音反馈。</li>
</ul>

<p>我们极力推荐您在电视上测试您的应用程序。</p>

<h2 id="privacy">隐私</h2>
<p>移动手机是不公用的个人用品；桌面电脑可公用，但操作系统会提供多用户界面，当前活跃用户只有一个；而电视是公用设备，它被放置在房子的公共空间，它的屏幕很大并不方便隐藏信息。对此，在设计电视应用程序时需考虑:</p>

<ul>
	<li>大多数情况下，用户并不想在电视上输入自己的私人数据，特别是密码或者信用卡卡号等敏感信息。 对于这些服务，提供桌面网页应用让用户能够输入此类信息，然后将帐户很方便地链接到电视上。</li>
	<li>方便用户清除历史纪录。</li>
	<li>设计一个让当前用户能和多人交互的应用程序（如多人游戏，在共享单里加入添加元素）。</li>
</ul>
