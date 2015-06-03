---
title: Браузеры Opera, их режимы и движки
authors:
- andreas-bovens
intro: 'Браузер Opera доступен на множестве платформ, в разных видах, с разными режимами, движками и уровнями поддержки стандартов. И поскольку в таком многообразии можно легко запутаться, мы решили собрать простой обзор всех наших продуктов, который объясняет некоторые технические различия наших браузеров.'
tags:
- browsers
- compatibility
- opera
language: ru
license: cc-by-3.0
---

Браузер Opera доступен на множестве платформ, в разных видах, с разными режимами, движками и уровнями поддержки стандартов. В таком многообразии можно легко запутаться — знаете ли вы, к примеру, что в Opera Mini для iOS есть три режима, один из которых это `UIWebView` с Opera Turbo? Поэтому мы решили собрать простой обзор всех наших продуктов, который объясняет некоторые технические различия наших браузеров.

Мы будем поддерживать этот список актуальным, так что не забудьте добавить его в закладки, он вам ещё пригодится.

<figure block="figure">

<table>
<tr>
	<th>ОС</th>
	<th>Браузер</th>
	<th>Режим</th>
	<th>Движок</th>
	<th>Прокси</th>
	<th>Стандарты</th>
</tr>
<tr>
	<td rowspan="3">Android</td>
	<td rowspan="2"><a href="https://play.google.com/store/apps/details?id=com.opera.browser">Opera</a></td>
	<td>Обычный</td>
	<td>Chromium</td>
	<td>Нет</td>
	<td>Все</td>
</tr>
<tr>
	<td>Opera Turbo</td>
	<td>Chromium</td>
	<td>Да</td>
	<td>Все</td>
</tr>
<tr>
	<td><a href="https://play.google.com/store/apps/details?id=com.opera.mini.native">Opera Mini</a></td>
	<td>Opera Mini</td>
	<td>Presto, серверный</td>
	<td>Да</td>
	<td>Ограничены</td>
</tr>
<tr>
	<td rowspan="5">iOS</td>
	<td rowspan="3"><a href="https://itunes.apple.com/app/id363729560">Opera Mini</a></td>
	<td>Обычный</td>
	<td>WebKit, системный</td>
	<td>Нет</td>
	<td>Все</td>
</tr>
<tr>
	<td>Opera Turbo *</td>
	<td>WebKit, системный</td>
	<td>Да</td>
	<td>Все</td>
</tr>
<tr>
	<td>Opera Mini</td>
	<td>Presto, серверный</td>
	<td>Да</td>
	<td>Ограничены</td>
</tr>
<tr>
	<td rowspan="2"><a href="https://itunes.apple.com/app/id674024845">Coast</a></td>
	<td>Normal</td>
	<td>WebKit, системный</td>
	<td>Нет</td>
	<td>Все</td>
</tr>
<tr>
	<td>Opera Turbo *</td>
	<td>WebKit, системный</td>
	<td>Да</td>
	<td>Все</td>
</tr>
<tr>
	<td>J2ME</td>
	<td><a href="http://www.opera.com/mobile/mini/other">Opera Mini</a></td>
	<td>Opera Mini</td>
	<td>Presto, серверный</td>
	<td>Да</td>
	<td>Ограничены</td>
</tr>
<tr>
	<td>Windows Phone</td>
	<td><a href="http://www.windowsphone.com/en-us/store/app/opera-mini-beta/b3bf000a-e004-4ecb-a8fb-9fc817cdab90">Opera Mini</a></td>
	<td>Opera Mini</td>
	<td>Presto, серверный</td>
	<td>Да</td>
	<td>Ограничены</td>
</tr>
<tr>
	<td rowspan="2">Компьютеры</td>
	<td rowspan="2"><a href="http://www.opera.com/computer">Opera</a></td>
	<td>Обычный</td>
	<td>Chromium</td>
	<td>Нет</td>
	<td>Все</td>
</tr>
<tr>
	<td>Opera Turbo</td>
	<td>Chromium</td>
	<td>Да</td>
	<td>Все</td>
</tr>
</table>

</figure>

Заметки:

- Режим Opera Turbo сжимает трафик до 80%, режим Opera Mini — до 90%.
- Для Opera Turbo, отмеченного звёздочкой, также есть опция [Video Boost](http://blogs.opera.com/mobile/2014/11/new-opera-mini-for-iphone-ipad-less-buffering-free-download-appstore/) для сжатия видео.
- Если вы определяете положение пользователей на основе IP-адреса, обязательно проверяйте заголовок `X-Forwarded-For`. Таким образом вы сможете верно определить откуда пользователь открыл ваш сайт в браузере, который использует прокси Opera Mini и Opera Turbo.
- Поддержка стандартов в Opera Mini «ограничена», это значит, что сложный JavaScript, CSS и другие динамические элементы могут работать не так, как вы ожидаете из-за особенностей серверной отрисовки и ограниченным возможностям устройств.
- Старые браузеры Opera на движке Presto, например, Opera 12 для компьютеров, Opera Mobile Classic, и т.д. уже не поддерживаются и в этом списке не приведены.
