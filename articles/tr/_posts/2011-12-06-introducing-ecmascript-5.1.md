---
title: ECMAScript 5.1’e Giriş
authors:
- mike-taylor
tags:
- array-extras
- ecmascript
- ecmascript-5.1
- es5
- function.prototype.bind
- json
- object-additions
- strict-mode
layout: article
---

## İçindekiler Listesi:

1. [Giriş](#introduction)
2. [Tarayıcı Desteği](#browser-support)
3. [ES5’ın Katı Modu](#strict-mode)
4. [JSON](#json)
5. [Nesne Eklemeleri](#object-additions)
6. [Dizilere İlaveler](#array-extras)
7. [Function.prototype.bind](#function-bind)
8. [Ek Referanslar](#further-reading)

## Giriş {#introduction}

ECMAScript 5.1 (yada sadece ES5) ECMAScript standardının — önergede JavaScript temel alınmıştır — en son gözden geçirimidir. HTML5 önergesinin sürecine benzer şekilde, ES5 varolan JavaScript kullanımlarını, dile ve ECMAScript nesnelerine olan eklemeleri standart bir şekle sokar. ES5 “strict mode” olan bilinen bu dilin bir strict türevini de tanıtır.

Bu makalede dile ait en yararlı değişiklikleri ve eklemeleri tanıtacağız. Tam liste için, [http://www.ecmascript.org/][9] adresinden [resmi ECMAScript dil önergesi][10] (PDF indirmesi, 3MB) adresinden erişilen belgenin Ek D ve E bölümlerine bakın; bu içeriği HTML biçiminde [Michael[tm] Smith’in resmi olmayan açıklamalı HTML sürümü][11]nden de indirebilirsiniz.

[9]: http://www.ecmascript.org/
[10]: http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf
[11]: http://es5.github.com/

## Tarayıcı Desteği {#browser-support}

Opera 11.60’ın sürülmesiyle beraber, beş büyük tarayıcı ES5 desteklemektedir, [uygulamaya dayalı hatalar][12] için kaydedin. Aksine bir şey ifade edilmezse, bu makalede bahsedilen her şey aşağıdaki tarayıcı sürümleri(ve daha yüksek sürümleri) ile beraber kullanılabilmektedir:

[12]: http://kristopolous.blogspot.com/2011/11/winners-are-opera-ie-firefox-chrome.html

- Opera 11.60
- Internet Explorer 9 *
- Firefox 4
- Safari 5.1 **
- Chrome 13

* [IE9 strict mode desteğini sağlamamaktadır][13] — bu IE10 ile beraber eklendi.
** [`Function.prototype.bind` desteği son Webkit sürümünde bulunmasına][14] rağmen Safari 5.1 halen `Function.prototype.bind` desteğine sahip değil.

[13]: http://msdn.microsoft.com/en-us/library/hh673540(v=VS.85).aspx
[14]: https://bugs.webkit.org/show_bug.cgi?id=26382

Daha eski tarayıcılara bu destek için, Juriy Zaytsev’in mükemmel [ECMAScript 5 uyumluluğu tablosu][15]na bakın.

[15]: http://kangax.github.com/es5-compat-table/

## ES5’ın Katı Modu {#strict-mode}

Katı mod, geliştirici için dilin daha tutucu bir çeşidini kullanmasını sağlar — geliştiriciler için ek güvenilirlik ve kullanıcılar için ek güvenlik sağlar. Katı mod, Javascript dosyasının ya da fonksiyonunun başına `use strict` yönergesi yerleştirilerek etkinleştirilebilir. `use strict` yönergesi sadece bir katar olduğu için eski tarayıcılar tarafından güvenli bir şekilde yok sayılacaktır.

	"use strict";

	function strict(){
		"use strict";
		//…
	}

	function sloppy(){
		eval("window.foo = 'bar'");
	}

Katı mod kullanırken pek çok şey sürpriz bir şekilde ya da sorunlu bir davranış olarak çalışma anında hata üretecektir. Örneğin:

- Tanımlanmamış bir değişkene değer atamak, global bir değişken oluşturmak yerine `ReferenceError`hatası fırlatır.
- Aynı özelliği bir nesneye birden fazla kez atamak `SyntaxError`(söz dizimi hatası) fırlatır.
- `with` ifadesinin kullanımı `SyntaxError`(söz dizimi hatası) fırlatır.

[MDSN’deki katı mod makalesi][16] tüm bu farkları özetleyen yararlı bir tablo içerir.

[16]: http://msdn.microsoft.com/en-us/library/br230269(v=vs.94).aspx

## JSON {#json}

ES5 bir nesneyi JSON biçimine dönüştürme (`JSON.stringify`) ve bu biçimden eski haline geri dönüştürme (`JSON.parse`) için genel bir `JSON` nesnesi tanımlar.

Eski tarayıcılar için, Douglas Crockford’un [json2.js][17] dosyasını kullanmayı göz önünde bulundurun. Bu dosya, tarayıcının bu özelliği doğal olarak destekleyip desteklemediğini test ettikten sonra eski tarayıcılarda aynı işlevlerin kullanılabilmesini sağlar.

[17]: https://github.com/douglascrockford/JSON-js/blob/master/json2.js

### `JSON.parse(yazi [, fonksiyon])`

`JSON.parse` JSON olarak biçimlendirilmiş yazıyı alır ve bir ECMAScript değeri olarak geri döndürür. İsteğe bağlı kullanılabilecek parametre ise iki ayrı parametreye sahip, `anahtar` ve `değer`, bir fonksiyondur. Bu fonksiyon sonuçlar üzerine işlem yapar — filtreleme yapmaya veya geri dönecek değeri değiştirmeye olanak sağlar.

	>> var sonuc = JSON.parse('{"a": 1, "b": "2"}');
	Object

	>> sonuc.b
	"2"

Eğer ayrıştırma işlemine kadar değerin tam sayı olduğundan emin olmak istiyorsanız, isteğe bağlı fonksiyonu aşağıdaki gibi kullanabilirsiniz.

	var sonuc = JSON.parse('{"a": 1, "b": "2"}', function(anahtar, deger){
		if (typeof deger == 'string'){
			return parseInt(deger);
		} else {
			return deger;
		}
	})

	>> sonuc.b
	2

### `JSON.stringify(deger [, yerdegistirici [, bosluk]])`

`JSON.stringify` geliştiricilerin bir ECMAScript değerini alıp bunu JSON biçimindeki karakter dizisine dönüştürmesini sağlar. Basitçe, `JSON.stringify` bir değer alır ve geriye bir karakter dizisi döndürür.

	>>> var mike = JSON.stringify({mike: "taylor"})
	undefined

	>> mike
	'{"mike": "taylor"}'

	>> typeof mike
	"string"

Karakterleştirilmiş değeri değiştirmeye ihtiyacımız varsa yada seçilen bazı değerleri filtrelemek gerekiyorsa, bunu yer değiştirici fonksiyon aracılığıyla yapabiliriz. Örneğin nesnemizdeki 13 sayısını karakterleştirme işlemi sırasında filtrelemek istiyorsak,

	var sayilar = {
		"birinci": 7,
		"ikinci": 14,
		"ucuncu": 13
	}

	var sansliNumaralar = JSON.stringify(sayilar, function(anahtar, deger){
		if (deger == 13) {
			return undefined;
		} else {
			return deger;
		}
	});

	>> sansliNumaralar
	'{"birinci": 7, "ikinci": 14}'

Eğer yer değiştirici fonksiyon `undefined` değeri geri döndürürse , anahtar/değer çifti son JSON’da yer almayacaktır. Bir alana neyin geri döndüğünü öğrenirken okunabilirliği arttırmak için bir boşluk parametresi de kullanabiliriz. Bu parametrenin alabileceği değerler, JSON katarı ya da bir katarın her bir girinti seviyesindeki boşluğun sayısını gösterecek bir numara olabilir. Bir sayı 10’un üzerinde ise yada bir karakter dizisi 10 karakterden fazla karaktere sahipse, 10’a yada ilk 10 karaktere düşürülecektir.

	var sansliNumaralar = JSON.stringify(sayilar, function(anahtar, deger) {
		if (deger == 13) {
			return undefined;
		} else {
			return deger;
		}
	}, 2);

	>> sansliNumaralar
	'{
		"birinci":7,
		"ikinci":14
	}'

## Nesne Eklemeleri {#object-additions}

`Object` constructor aşağıdaki yöntemler eklendi:

- `Object.getPrototypeOf`
- `Object.getOwnPropertyDescriptor`
- `Object.getOwnPropertyNames`
- `Object.create`
- `Object.defineProperty`
- `Object.defineProperties`
- `Object.seal`
- `Object.freeze`
- `Object.preventExtensions`
- `Object.isSealed`
- `Object.isFrozen`
- `Object.isExtensible`
- `Object.keys`

Bu eklemelerin yararlarından biri nesnenin özellikleri üzerindeki denetimi arttırmaktır. Örneğin neyin değiştirilebileceğini, silinebileceğini, listelenebileceğini belirleyebilmemizi sağlar. Bu, bir nesnenin _özellik tanımlamalarına_ program niteliğinde erişme yoluyla yapılır. Örneğin:

	var kedi = {};

	Object.defineProperty(kedi, "ad", {
		value: "Maru",
		writable: false,
		enumerable: true,
		configurable: false
	});

	Object.defineProperty(kedi, "beceri", {
		value: "kutuları keşfetme",
		writable: true,
		enumerable: true,
		configurable: true
	});

`kedi` nesnemiz için, onun `ad`ı değiştirilemez ama `for-in` döngüsünde değeri görüntülenebilir. Diğerleri arasında, Maru kutuları keşfetmede iyi, ama bu gelecekte değişebilir çünkü `beceri` özelliği `writable`(yazılabilir) ve `configurable`(ayarlanabilir) olarak kaldı.

İleride, bir makalede nesne eklemelerinin tümünü ayrıntılarıyla keşfedeceğiz.

## Dizilere İlaveler {#array-extras}

Aşağıdaki yöntemler dizi `prototype` nesnesine eklenmiştir:

- `Array.prototype.indexOf`
- `Array.prototype.lastIndexOf`
- `Array.prototype.every`
- `Array.prototype.some`
- `Array.prototype.forEach`
- `Array.prototype.map`
- `Array.prototype.filter`
- `Array.prototype.reduce`
- `Array.prototype.reduceRight`

Dmitry Soshnikov [ES5 dizi “ilaveleri”][18] adresinde bulunan hakkında detaylı bir makale yazdı.

[18]: http://dev.opera.com/articles/view/javascript-array-extras-in-detail/

Dmitry’nin makalesinde yer almayan tek şey `Array.isArray`. Görebileceğiniz gibi bu, `prototype` nesnesinin değil doğrudan `Array` kurucusunun üzerindedir. `Array.isArray` beklemediğiniz kadar tatlıdır — parametrenin `[[Class]]` dahili özelliği `Array` olup olmamasına göre `true` ya da `false` döndüren bir yöntemdir.

	Array.isArray("NO U")
	>> false

	Array.isArray(["NO", "U"])
	>> true

In ES3’te değerin bir dizi olup olmadığını belirlemenin tek güvenilir yolu [“the Miller Device”][19] kullanımıydı. Aşağıdaki örnekte dahili olan `[[Class]]` özelliğini dizininkiyle karşılaştırabilirsiniz.

[19]: http://www.songhaysystem.com/kb/number/2076072056/subject/htmlscrp

	Object.prototype.toString.apply(value) === '[object Array]'

## `Function.prototype.bind(thisArg [, arg1 [, arg2, …]])` {#function-bind}

`Function.prototype.bind` _this_ değeri`thisArg` parametresine bağlanan yeni bir fonksiyon nesnesi geri döndürür. Bu, temel olarak, diğer nesnenin bir faaliyet alanındayken bir fonksiyon çalıştırmanıza olarak sağlar.

	function locate(){
		console.log(this.location);
	}

	function Maru(location){
		this.location = location;
	}

	var kitty = new Maru("cardboard box");
	var locateMaru = locate.bind(kitty);

	locateMaru();

Bu örnekte `location` fonksiyonunu Maru nesnesinin içeriğindeyken çağırıyoruz. `locate` global nesnenin bir özelliği olduğu için, onun `this` değeri global nesnedir(`window`). Bu durumda, bir kediye bakıyoruz, `Location` nesnesine değil. Öyleyse `this` değeri her zaman `kitty` olan `locateMaru`adında yeni bir yöntem oluşturabiliriz.

## Ek Referanslar {#further-reading}

- John Resig tarafından [ECMAScript 5 Nesnesi ve Özellikleri][20]
- Yehuda Katz tarafından [JavaScript Fonksiyon Yürüymesini ve “this” i Kavrama][21]
- Angus Croll tarafından [JavaScript Katı Mod][22]
- Detaylarda ECMA-262-5: Dmitry Soshnikov tarafından [Giriş][23]
- Juriy Zaytsev tarafından [ECMAScript 5 uyumluluk tablosu][24]

[20]: http://ejohn.org/blog/ecmascript-5-objects-and-properties/
[21]: http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/
[22]: http://javascriptweblog.wordpress.com/2011/05/03/javascript-strict-mode/
[23]: http://dmitrysoshnikov.com/ecmascript/es5-chapter-0-introduction/
[24]: http://kangax.github.com/es5-compat-table/