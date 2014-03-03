---
title: Кроссбраузерные `box-shadow` в CSS
authors:
- rustam-gaffanov
tags:
- box-shadow
- css
- css3
- ie
license: cc-by-nc-sa-3.0
layout: article
---

## Введение

Тени часто используются в веб-дизайне и полиграфическом дизайне, чтобы придать элементам больше глубины. Для того, чтобы создать тени для веба, обычно используется несколько изображений, созданных в графических редакторах, и затем включенных в страницу в качестве фонового изображения в CSS. Этот прием работает, но он также является трудоемким в плане создания необходимой графики, он также требует засорения html-кода кучей лишних `div`-ов, т.к. каждый элемент может иметь только одно изображение, присоединенное в качестве фона.

CSS3 теперь позволяет нам создавать несколько теней на любой элемент блочного типа при помощи CSS-свойства `box-shadow`. Это экономит много времени в графических редакторах и позволяет избавиться от кучи лишних `div`-ов, но к сожалению `box-shadow` не поддерживается браузером Internet Explorer. Что же нам теперь лучше сделать?

В этой статье я покажу вам возможное кроссбраузерное решение — технику с использованием `box-shadow`, которая также добавляет поддержку IE для этого свойства. Я не буду описывать использование базового синтаксиса этого свойства, т.к. это итак хорошо описано в англоязычной статье [CSS3 borders, backgrounds and box-shadows][1].

[1]: /articles/css3-border-background-boxshadow/

Содержание статьи:

- [Нативная поддержка браузерами](#internalSupport)
- [Фильтры в IE](#ieAnalog)
- [Создание выпадающей тени в IE и в других браузерах](#IEandNormal)
- [Соединяя примеры вместе](#realization)
- [Внутренняя тень](#inner)
- [Заключение](#summary)

## Нативная поддержка браузерами {#internalSupport}

CSS3-свойство `box-shadow` хорошо поддержкивается большинством современных браузеров, однако для кросс-браузерной поддержки, вам необходимо использовать все перечисленные варианты свойства:

- Для поддержки в Opera, IE9 и выше используется официальный вариант свойства от консорциума W3C, без префиксов: `box-shadow`
- Для поддержки в Firefox, используется вариант с префиксом `-moz-`: `-moz-box-shadow`
- Для поддержки браузеров на движке WebKit (таких как Google Chrome и Apple Safari), используется вариант с префиксом `-webkit-`: `-webkit-box-shadow`
- IE до версии 8 включительно не поддерживает это свойство вовсе, так что вам придётся либо отказаться от тени, либо создать обходной путь — мое решение описано ниже.

Поддержка браузерами `box-shadow`:

<table>
<thead>
<tr>
	<td></td>
	<th>Internet Explorer</th>
	<th>Firefox</th>
	<th>Safari</th>
	<th>Chrome</th>
	<th>Opera</th>
</tr>
</thead>
<tbody>
<tr>
	<td>Давнее прошлое</td>
	<td>6.0</td>
	<td>3.0</td>
	<td>3.2</td>
	<td>3.0</td>
	<td>9.6</td>
</tr>
<tr>
	<td>Прошлое</td>
	<td>7.0</td>
	<td>3.5</td>
	<td>4.0</td>
	<td>4.0</td>
	<td>10.10</td>
</tr>
<tr>
	<td>Настоящее</td>
	<td rowspan="2">8.0</td>
	<td rowspan="2">3.6</td>
	<td rowspan="2">5.0</td>
	<td rowspan="2">5.0</td>
	<td rowspan="2">10.60</td>
</tr>
<tr>
	<td>Ближайшее будущее (первая половина 2010)</td>
</tr>
<tr>
	<td>Будущее (вторая половина 2010 или позже)</td>
	<td>9.0</td>
	<td>4.0</td>
	<td>5.*</td>
	<td>6.0</td>
	<td>11.0</td>
</tr>
</tbody>
</table>

Данные об IE9 взяты из IE9 Platform Preview 3.

## Фильтры в IE {#ieAnalog}

Изучая css-фильтры в IE, я наткнулся на интересный факт: [фильтр blur][2] позволяет размывать блоки почти идентично тому, как размывается тень в альтернативных браузерах. Например, есть блок со следующими параметрами:

[2]: http://msdn.microsoft.com/en-us/library/ms532979(VS.85).aspx

	<div></div>

	div {
		width:100px;
		height:100px;
		background:blue;
	}

Визуальное отображаение показано на рисунке 1.

<figure>
	<img src="/articles/cross-browser-box-shadows/IEbefore.png" alt="Просто синий блок">
	<figcaption markdown="span">Рисунок 1: Простой `<div>` с фиксированной высотой и шириной</figcaption>
</figure>

Добавим к нему фильтр `blur` с силой размытия 5, используя следующий фильтр:

	<div></div>

	div {
		width:100px;
		height:100px;
		background:blue;
		filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=5);
		-ms-filter:'progid:DXImageTransform.Microsoft.Blur(pixelradius=5)';
	}

Теперь блок отображается с размытием, что идентично тени, используемой в CSS `box-shadow`. Результат показан на рисунке 2.

<figure>
	<img src="/articles/cross-browser-box-shadows/IEblured.png" alt="Синий блок с размытием в Internet Explorer">
	<figcaption markdown="span">Рисунок 2: Наш простой `<div>` с примененным размытием</figcaption>
</figure>

## Создание выпадающей тени в IE и в других браузерах {#IEandNormal}

Мы может использовать эту особенность для создания тени в IE. Я добавлю невидимый блок того же размера, что и контентовый блок, куда мы хотим добавить тень. В браузерах, поддерживающих `box-shadow`, он будет скрыт. Для IE использовался выносной блок с абсолютным позиционированием. Слой с контентом накладывается выше по z-index, чем тень.

В современных браузерах, выпадающая тень создается с помощью следующего HTML и CSS:

	<div class="baseBlock"></div>

	.baseBlock{
		width:100px;
		height:100px;
		background:#f9f;
		-webkit-box-shadow:10px 10px 5px #000;
		-moz-box-shadow:10px 10px 5px #000;
		box-shadow:10px 10px 5px #000;
	}

Для повторения этого эффекта в IE, мы добавим специальный невидимый `<div>`, который определяется как:

	<div class="ieBlock"></div>

	.ieBlock{
		height:100px;
		width:100px;
		background:#000;
		filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=10);
		-ms-filter:'progid:DXImageTransform.Microsoft.Blur(pixelradius=10)';
	}

Результат показан на рисунке 3:

<figure>
	<img src="/articles/cross-browser-box-shadows/ieShadowForComparison.png" alt="CSS box-shadow в IE">
	<figcaption markdown="span">Рисунок 3: Выпадающая тень для IE, показанная без родительского блока, по отношению к которому она применяется</figcaption>
</figure>

## Соединяя примеры вместе {#realization}

Вы можете скачать [пример для выпадающей тени][6] и [пример для внутренней тени][7], чтобы иметь больше представления, как эта техника работает. Ниже я привёл полный код для базового метода. Первый листинг кода содержит HTML-код для примера, с базовым блоком и блоком для IE, соединенные вместе:

[6]: /articles/cross-browser-box-shadows/example1.zip
[7]: /articles/cross-browser-box-shadows/example2.zip

	<div class="baseBlock">
		<div class="baseBlockIn">
			Lorem ipsum dolor…
		</div>
		<div class="ieShadow"></div>
	</div>

`<div class="baseBlock">` является родительским по отношению к блоку с контентом. `<div class="baseBlockIn">` является контентовым блоком, на который мы применим свойство `box-shadow` (это также поможет избежать проблем с z-index в IE7). `<div class="ieShadow"></div>` является невидимым блоком с размытием, который используется для создания тени в IE.

Следующий листинг показывает первый блок CSS-кода, который применяется для каждого браузера:

	/* CSS для всех браузеров */
	.baseBlock{
		width:180px;
		-webkit-box-shadow:10px 10px 5px #444;
		-moz-box-shadow:10px 10px 5px #444;
		box-shadow:10px 10px 5px #444;
	}

	.baseBlockIn{
		/*	Контентная часть специально отделена,
			чтобы избежать проблем с z-index в IE7 */
		padding:10px 15px;
		background:#f9f;
	}

	.ieShadow{
		display:none;
	}

Здесь мы ставим `box-shadow` для браузеров, которые его поддерживают, и затес скрываем тень для IE от альтернативных браузеров. Следующий CSS-код используется только для IE — мы применяем его через conditional comments:

	/*	CSS для IE версии 8 и ниже
		при помощи условных комментариев */
	.baseBlock{
		position:relative;
		z-index:3;
	}

	.baseBlockIn{
		position:relative;
		/*	z-index для контента должен быть
			больше, чем z-index для тени */
		z-index:4;
	}

	.ieShadow{
		display:block;
		position:absolute;
		z-index:2;
		top:5px;
		left:5px;
		right:-5px;
		bottom:-5px;
		filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=5);
		-ms-filter:'progid:DXImageTransform.Microsoft.Blur(pixelradius=5)';
		background-color:#444;
	}

Здесь `baseBlock` используется для позиционирования контента и его выпадающей тени. Контентом является `<div>` с классом `.baseBlockIn`. Он должен иметь z-index выше, чем тень — `<div>` с классом `.ieShadow`. Последний затем позиционируется при помощи абсолютного позиционирования, и тень создается при помощи задания фильтра blur и фонового цвета.

Особенности расчёта значений параметров `left`, `top`, `right` and `bottom` для блока тени в IE:

- значение `left` расчитывается как смещение по оси Х минус степень размытия;
- значение `top` расчитывается как смещение по оси Y минус степень размытия;
- значение `right` расчитывается как степень размытия минус смещение по оси Х;
- значение `bottom` расчитывается как степень размытия минус смещение по оси Y.

Таком образом в коде, мы используем следующие расчёты, чтобы эмулировать смещение тени в `box-shadow:10px 10px 5px #444`:

- Значение `left` расчитывается как смещение по оси Х минус степень размытия; 10 – 5 = 5
- Значение `top` расчитывается как смещение по оси Y минус степень размытия; 10 – 5 = 5
- Значение `right` расчитывается как степень размытия минус смещение по оси Х; 5 – 10 = –5
- Значение `bottom` расчитывается как степень размытия минус смещение по оси Y. 5 – 10 = –5

После того, как всё сказано и сделано, конечный результат представлен на рисунке 4:

<figure>
	<img src="/articles/cross-browser-box-shadows/outsetPrimer.png" alt="Результат кроссбраузерной box-shadow тени в разных браузерах">
	<figcaption markdown="span">Рисунок 4: Финальный пример, показывающий выпадающую тень в современных браузерах и в текущих версиях IE</figcaption>
</figure>

## Внутренняя тень {#inner}

Мы можем использовать аналогичный метод для создания внутренней тени, которая будет работать во всех браузерах, включая IE. Отличия в том, что `overflow: hidden;` используется для обрезки тени так, что она не выходит за пределы базового блока. Также мы меняем `background-color` в CSS для IE на цвет `box-shadow` в главном CSS-коде. И снова, сперва начнём с листинга HTML:

	<div class="shadowBoxOut">
		<div class="shadowBox">
		<div class="ieShadow"></div>
		<div class="content">
			Lorem ipsum dolor…
		</div>
		</div>
	</div>

Далее, CSS, который используется для всех браузеров:

	/* CSS для всех браузеров */
	.shadowBoxOut{
		border:1px solid #000;
		width:180px;
	}

	.shadowBox{
		background:#fff;
		padding:10px 15px;
		color:#000;
		-webkit-box-shadow:inset 30px 30px 20px #888;
		-moz-box-shadow:inset 30px 30px 20px #888;
		box-shadow:inset 30px 30px 20px #888;
	}

	.ieShadow{
		display:none;
	}

И в заключении, CSS, который используется только в IE через conditional comments:

	/*	CSS для IE версии 8 и ниже
		при помощи условных комментариев */
	.shadowBox{
		background:#888;
		/* Background colour changed to shadow colour */
		position:relative;
		overflow:hidden;
		zoom:1;
		border-right:1px solid transparent;
		/*	Решает проблему с наложением
			тени поверх контента в IE8 */
		*border-right:0;
	}

	.ieShadow{
		display:block;
		position:absolute;
		top:10px;
		left:10px;
		bottom:-10px;
		right:-10px;
		background:#fff;
		/*	Здесь должен быть указан
			фоновый цвет базового блока */
		filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=20);
		-ms-filter:'progid:DXImageTransform.Microsoft.Blur(pixelradius=20)';
	}

	.content{
		position:relative;
	}

Особенности расчёта значений CSS-свойств `left`, `top`, `right`, `bottom` для блока тени в IE аналогичны варианту с падающей тенью.

Код приведенный выше дает нам следующий результат, показанный на Рисунке 5.

<figure>
	<img src="/articles/cross-browser-box-shadows/insetPrimer.png" alt="Результат кроссбраузерной box-shadow тени в разных браузерах">
	<figcaption markdown="span">Рисунок 5: Финальный пример с внутренней тенью, показывающий тень в современных браузерах и в текущих версиях IE</figcaption>
</figure>

## Заключение {#summary}

В этой статье мы рассмотрели кроссбраузерное решение для создания теней на элементах блочного типа, основывающееся на использовании CSS-свойства `box-shadow` и использовании фильтров в IE для поддержки этого свойства. В итоге мы получаем поддержку следующими браузерами:

- Apple Safari 3+
- Google Chrome 2+
- Microsoft Internet Explorer 7+
- Mozilla Firefox 3.5+
- Opera 10.50+

Преимущества используемого решения:

- Изображения не используются вообще, что позволяет проводить меньше времени в графичеких редакторах, уменьшает число HTTP запросов и увеличивает производительность;
- Не используется JavaScript;
- Вы можете поставить тень любого желаемого цвета.

Один недостаток заключается в использовании комбинации CSS-свойств `top`/`bottom` и `left`/`right` — такие комбинации не поддерживаются IE6, поэтому этот метод не будет работать в нём правильно, если только вы не используете его для элементов с фиксированной высотой. В этом случае вы можете заставить метод работать при помощи замены комбинации свойств `top`/`bottom` на `top`/`height` и `left`/`right` на `left`/`width`.
