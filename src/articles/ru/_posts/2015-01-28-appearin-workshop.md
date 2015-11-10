---
title: Мастер-класс и расширения appear.in
authors:
- andreas-bovens
intro: 'В начале декабря 2014 года мы пригласили команду блестящего сервиса для видеозвонков на WebRTC [appear.in](https://appear.in/) в офис Opera в Осло на однодневный мастер-класс и, среди прочего, написали в этот день три крутых расширения для appear.in.'
tags:
- extensions
- webrtc
language: ru
license: cc-by-3.0
---

## Предыстория

В начале декабря 2014 года мы пригласили команду блестящего сервиса для видеозвонков на WebRTC [appear.in](https://appear.in/) в офис Opera в Осло на однодневный мастер-класс: инженеры, дизайнеры и менеджеры продуктов из обеих компаний собрались провели вместе около шести часов, на одном только кофе и печенье. В итоге родились несколько экспериментов с использованием [appear.in](https://appear.in/).

<figure block="figure">
	<img elem="media" src="{{ page.id }}/panorama.jpg" alt="Appear.in and Opera team workshop">
	<figcaption elem="caption">Мастер-класс appear.in и Opera в декабре</figcaption>
</figure>

Несколько этих экспериментов были направлены на различные улучшения на бэкенде, но мы также пришли к некоторым идеям для фронтенда: большинство из них были реализованы в виде расширений, которые позволяеют быстро прототипировать возможности на основе существующего сервиса appear.in, без необходимости менять что-то в оригинальном коде.

Мы немного причесали получившиеся расширения и опубликовали их в каталоге расширений Opera. Ниже их обзор.

## Appear.in Pop

[страница расширения](https://addons.opera.com/extensions/details/appearin-pop/), [исходники](https://github.com/operasoftware/appearin-pop)

Это простое расширение позволяет быстро создавать комнату в appear.in. Просто нажмите на иконку appear.in и затем «Перейти в комнату». Расширение запоминает три последних комнаты и позволяет изменить предложенное название комнаты на более подходящее вам. Очень простое, но очень удобное расширение, чтобы начать звонок в appear.in в считанные секунды.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/pop.jpg" alt="The Appear.in Pop extension">
	<figcaption elem="caption">Расширение Appear.in Pop в действии</figcaption>
</figure>

## Appear.in Social

[страница расширения](https://addons.opera.com/extensions/details/appearin-social/), [исходники](https://github.com/operasoftware/appearin-social)

Расширение добавляет небольшую иконку в чат Facebook и в личные сообщения Twitter, которую вы можете использовать для создания ссылки на appear.in и тут же отправить собеседнику. Один видеозвонок вместо тысячи букв!

<figure block="figure">
	<img elem="media" src="{{ page.id }}/social.jpg" alt="The Appear.in Social extension">
	<figcaption elem="caption">Расширение Appear.in Social, встроенное в чат Facebook</figcaption>
</figure>

## Appear.in Handoff

[страница расширения](https://addons.opera.com/extensions/details/appearin-handoff/), [исходники](https://github.com/operasoftware/appearin-handoff)

Расширение позволяет легко перевести текущий видеоразговор в appear.in с компьютера на мобильный телефон на Android. Видео ниже демонстрирует как работает передача звонка на мобильный:

<figure block="figure">
	<iframe src="https://www.youtube.com/embed/d7hQIgj13UE" width="570" height="320" allowfullscreen elem="media"></iframe>
</figure>

## Всё в ваших руках!

Если вам интересно сделать своё расширение, вы можете начать с [документации по API appear.in](https://developer.appear.in/) и нашей [документации по расширениям](https://dev.opera.com/extensions) и дальше воплотить вашу идею.
