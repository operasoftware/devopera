Title: 오페라 XML 저장소를 사용하여 플랫폼 및 장치간 위젯 데이터 지속하기
----
Date: 2009-11-17 12:14:18
----
Lang: ko
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<h2>소개</h2>
<p>
오페라 위젯은 데이터를 지속할 필요가 종종 있습니다 - 데이터는 <code>preferenceForkey</code> 설정을 사용하여 일반적으로 로컬에 저장됩니다. 이는 잘 동작하지만, 한 브라우저에서만 사용가능하다는 한계가 있습니다. 위젯에게 다른 플랫폼과 장치에 걸쳐 같은 데이터를 접근하게 하는 간단하고 <a href="http://ko.wikipedia.org/wiki/REST">표현 상태 전송적 (RESTful)</a> XML 저장소의 발상이 떠올랐고, 이 생각은 - XML을 사용하여 편리한 (RESTful) 방식으로 다른 플랫폼과 장치에 걸쳐 위젯 데이터를 지속하는 - 오페라 XML 저장소를 출시하는 동기를 부여했습니다. 이 문서는 당신의 위젯에 적용하는 법을 소개합니다.
</p>

<p>오페라 XML 저장소는 인증을 위해 <a href="http://my.opera.com">My.Opera</a> 사용자 이름과 암호를 요구합니다. 아직 회원이 아닌 경우, <a href="http://my.opera.com/community/signup/">여기에서 가입</a>하세요.</p>

<h2>직접 사용해보세요</h2>
<p>
시작하기 앞서, 저장소 서비스를 사용하는 몇몇 위젯을 사용해보세요:
</p>
<ul>
<li><a href="http://widgets.opera.com/widget/9032">노트 위젯</a></li>
<li><a href="http://widgets.opera.com/widget/9042">쇼핑 리스트 위젯</a></li>
<li><a href="http://widgets.opera.com/widget/9082">안녕 오페라 XML 저장소</a></li>
</ul>
<p>
저장된 데이터는 일반 HTML로 사용할 수 있을뿐만 아니라, 어떤 브라우저에서도 볼 수 있습니다. <a href="http://xmlstore.labs.opera.com">오페라 XML 저장소</a> 홈 페이지에 가서 찾아보기(Browse)를 클릭합니다. 자신의 데이터뿐만 아니라 다른 사용자들이 권한을 줬다면 다른 사용자들의 데이터도 탐색할 수 있습니다. <a href="http://xmlstore.labs.opera.com/help.jsp">XML 저장소 도움말</a>에서 XML 저장소를 사용하는 방법에 대한 기술 참조, 문서 등을 포함하는 자세한 내용을 찾을 수 있습니다.
</p>

<p>
당신이 저장하는 데이터는 <a href="http://xmlstore.labs.opera.com/help/datamodelinfo/">데이터 모델 스키마</a>로 검증하고 변형되거나 잘못된 XML을 저장하는 것을 허용하지 않습니다.
데이터 저장소가 텍스트의 덩어리를 단지 저장하기만 하지 않고 데이터 형식에 주의함으로서, 데이터 모음이나 문서에 대해, 필요한 데이터를 추출하도록 허용하는 <a href="http://www.w3.org/TR/xpath">XPath</a> 조작을 수행할 수 있습니다.
</p>

<h2>자원</h2>
<ul>
<li><a href="http://xmlstore.labs.opera.com/">오페라 XML 저장소 홈페이지</a></li>
<li><a href="http://xmlstore.labs.opera.com/help.jsp">오페라 XML 저장소 도움말</a></li>
</ul>
