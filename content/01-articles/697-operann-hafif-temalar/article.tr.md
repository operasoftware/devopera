Title: Opera'nın Hafif Temaları
----
Date: 2012-05-12 08:44:32
----
Lang: tr
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<h2>Giriş</h2>
	
<p>Opera 12, tema sistemindeki güncellemeler dahil olmak üzere birçok geliştirme içerir. Başlangıç olarak, güncellemelerin kapsamlı olmasından dolayı eski tema ismi yeni <strong>tema</strong> olarak ad değiştirmiştir. Eski isim İngilizcede &quot;skin&quot; olarak geçerken şimdi &quot;theme&quot; olarak geçiyor ve ikisi de tema olarak kullanılıyor. Artık Opera&#39;nın yeni hafif tema sistemi varsayılan tema olarak yerini aldı ve istenilen özelleştirmelere daha kolay ulaşılmasını sağlıyor. Bu makalede hafif tema sisteminin nasıl işlediğine bakacağız.</p>

<h2>Nasıl çalışıyor?</h2>

<p>Bu yeni hafif temalar var olan eski tema sistemiyle aynı şekilde çalışıyor: tema bir ZIP dosyasının içinde ve temada kullanmak istediğiniz dosyalar, bir adet persona.ini dosyasıyla birlikte bu ZIP dosyasındalar. .ini dosyası, ZIP dosyasının içeriğinin Opera tarafından bir tema olarak değerlendirilmesini sağlamakta. Opera eğer böyle bir dosya ile karşılaşırsa, örneğin bir bağlantıda böyle bir dosya verilmişse, Opera temayı otomatik olarak yükleyecektir. Yükleme işlemi oldukça basit. Tema işletim sisteminize ait varsayılan temanın üzerine uygulanacaktır.</p>

<p>persona.ini dosyası birkaç bölüm içerir, her bölüm [Options] gibi köşeli parantez ile başlar. Bu bölümlerin her biri temanın özel bir bölümüne ait bilgiler içerir, örneğin arkaplan resmine dair bilgiler vb.... Buradaki temel şey basitliktir - halen eski güçlü tema sistemini kullanarak istediğiniz özelleştirmeleri yapmanız mümkün ancak bugünlerde insanlar temel arabirimi bozmadan daha basit şeyleri değiştirmek istiyorlar. Hafif tema sistemi bu amaç için kullanılmaya oldukça müsaittir ve kolaydır. <a href="http://www.opera.com/browser/next/">Opera 12</a>&#39;de sadece arkaplan değiştirmeye, renklendirmeye ve arabirimin ana kısımlarıdana doğrudan resim gösterme imkanlarına izin verilmektedir. Gelecekte daha fazla ayarlama yapılması mümkün olabilir.</p>

<p>Sonraki bölümde bir temayı hazırlayacağız ve nasıl çalıştığını göreceğiz.</p>

<h2>Bir örnek üzerinde çalışalım</h2>

<p>Temayı denemek için öncelikle <a href="http://www.opera.com/browser/next/">Opera 12</a>&#39;yi yükleyin ve <a href="https://addons.opera.com/themes/">Opera temaları sayfası</a>na uğrayın. Bir tane örneğe tıklayın ve tarayıcınızın aşağıdakine benzer şekilde değiştiğini görün:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/697-operann-hafif-temalar/theme1.jpg" alt="Opera 12&#39;ye uygulanmış örnek bir Opera teması" /></p>
<p class="comment">Figür 1: Bir Opera teması çalışırken.</p>

<p class="note">Bu tema, önceden kurulmuş diğer temaların da arasında bulunduğu <em>Araçlar &gt; Görünüm</em> kısmında listelenecektir. Bunların arasından seçtiğinizi Opera&#39;ya uygulayabilir veya silebilirsiniz. Görünüm penceresinde belirmesi için temanızı Opera profil dizininizdeki <em>skin</em> klasörüne de yerleştirebilirsiniz. Bu dizin, Mac ve Linux üzerinde <em>[home folder]/Library/Opera</em> ve Windows üzerinde <em>C:\users\[user]\AppData\Roaming\Opera\Opera</em> olarak yer almaktadır.</p>

<p><a href="http://dev.opera.com/articles/view/operas-lightweight-themes/natural_history_of_norway.zip">Üzerinde oynamanız için bir tema</a> hazırladım. Eğer onu ZIP olarak bilgisayarınıza kaydederseniz, içindekileri bir klasöre çıkartın. Tema dosyalarıyla birlikte bir de personas.ini dosyasını bulacaksınız. Bu dosyada aşağıdaki bölümler yer almaktadır:</p>

<pre><code># This file describes a test persona for the Opera browser. Not meant for redistribution.</code></pre>

<p>Tema hakkında bazı bilgiler vermek için yazılmış bir yorumdur. Ayrı bir satırda bulunduğu ve satır başında bir diyez/hash işareti bulunduğu sürece dosyanın herhangi bir yerine yorum ekleyebilirsiniz.</p>

<pre><code>[Info]
Name                          = The Natural History of Norway
Author                        = Opera Software
Version                       = 1
Preview Image                 =</code></pre>

<p><code>[Info]</code> bölümü temanın kendi kendini açıkladığı bölümdür. <code>Name</code>; temanızın Görünüm penceresinde, Tema katalogunda vb. yerlerde görünecek ismini gösterir. <code>Author</code>, temayı hazırlayan kişiyi belirtmektedir. <code>Version</code> her zaman 1 olarak ayarlanmalıdır(bunun anlamı &quot;hafif tema sisteminin 1. sürümü&quot;). <code>Preview Image</code> eklenti katalogunda ve benzeri yerlerde kullanılması için temanın bir önizleme görüntüsünü belirtir.</p>

<pre><code>[Options]
Tint Color                = #3e6da9</code></pre>

<p>İsteğe bağlı bir bölümdür. Eğer belirtilmişse <code>Tint Color</code> kısmında belirtilen renk geçerli renklendirmenin yerini alır ve arabirim bu renge boyanır. Arabirim normalde resmin ortalama rengiyle renklendirilir ancak bazı temalar, kurulduğunda, temanın üzerini boyayacaktır.</p>

<p class="note"><code>Tint Color</code> isminin öteki bir ismi daha var. <code>Colorize Color</code> kullanarak de aynı işi yapabilirsiniz ama <code>Tint Color</code>un daha içgüdüsel olduğunu düşüneceksiniz.</p>

<pre><code>[Window Image]
Type                          = BestFit
Background                = Kraken.jpg
Colorize                      = 0</code></pre>

<p><code>[Window Image]</code> bölümü tüm tarayıcı penceresinin ayarlarının yapıldığı bölümdür <code>Type</code>&#39;ın <code>BestFit</code> olarak ayarlanması arkaplan resminin yapılabilecek en iyi şekilde ekrana oturtulması anlamına geliyor. <code>BestFit</code>&#39;e ek olarak <code>BoxTile</code> adında başka bir değer bulunmakta. Bu değer ise resmi ekrana döşemektedir. <code>Background</code> satırı arkaplan resmi olarak kullanmak istediğiniz resmin yolunu gösterir. Geriye kalan arabirimin, arkaplan resmindeki ortalama renk ile renklendirilmesini istemiyorsanız <code>Colorize = 0</code> olarak ayarlayın. Boyama yapılmasını istiyorsanız değerini <code>1</code> olarak ayarlayın.</p>

<pre><code>[Clear elements]
Speed Dial Widget Blank Skin  = 1
Speed Dial Widget Skin        = 1
Window Skin                   = 1
Document Window Skin          = 1</code></pre>

<p>Tüm bu değerleri <code>1</code> olarak ayarlamak arkaplan resminin hızlı erişimi içinde de görüntülenmesine sebep olacaktır. Eğer arkaplan resmi yoksa yada 0 olarak ayarlanmışsa bu gerçekleşmeyecek.</p>

<p>İleride ek ayarlar ekleyebilmemize rağmen şimdilik hafif temalar ile yapabilecekleriniz bundan fazlası değil. Bunun kısıtlayıcı bir cümle olduğunu düşünebilirsiniz ancak bu kasti bir şey. Temalar küçük değişiklikler için. Tüm tema sistemini kullanarak halen başka temalar hazırlayabilirsiniz. Fakat hafif tema sistemi bir şeyler yazmak ve uygulamak için oldukça kolay.</p>

<h2>Bir temayı kurmak ve paylaşmak</h2>

<p>Temanızı bitirdiğinizde, diğer insanlara çalışmanızı ulaştırmayı isteyeceksiniz. En iyi yol tema depomuza hazırladığınız temayı göndermeniz. Bunun için <a href="https://addons.opera.com/tr/developer/upload/">Opera eklenti yükleme sayfası</a>nı kullanın. Temanızı göndermek için bir tane ücretsiz <a href="http://my.opera.com/community/">my.opera</a> kullanıcı hesabına ihtiyacınız olacaktır. Bu şekilde temanızı paylaşmanız, diğer insanların onu kolayca bulmasını sağlayacaktır. Ayıca ekibimiz temanızı yayına almadan önce hatalara karşı kontrol edecektir.</p>

<p>Eğer kendi sunucunuzu kullanmak isterseniz, dosyayı doğru mime tipi ile sunmanız gerekecektir. Diğer türlü tema otomatik yüklenmeyecektir. Bunu sağlamak için (Apache-tabanlı bir sunucu için, diğer sunucular için aynı işe yarayan benzer kodlar gereklidir) aynı klasördeki <code>.htaccess</code> dosyasının içine, aşağıdaki kodu ekleyin:</p>

<pre><code>&lt;files *.zip&gt;
  ForceType application/x-opera-configuration-skin
&lt;/files&gt;</code></pre>

<h2>Sonuç</h2>

<p>Opera&#39;nın hafif temaları üzerinde yaptığımız çalışmaları yararlı bulduğunuzu umut ediyorum. Ne düşündüğünüzü bizimle paylaşmak ister misiniz!</p>
