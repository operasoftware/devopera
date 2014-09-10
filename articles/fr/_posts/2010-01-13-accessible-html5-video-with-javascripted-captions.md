---
title: Accessibilité d’une Vidéo en HTML5 Avec Sous-Titres en JavaScript
authors:
- bruce-lawson
tags:
- captions
- html5
- multimedia
- open-web
- opera-10
- accessibility
- video
language: fr
translator: Nicolas Chevallier
license: cc-by-nc-sa-3.0
---

## Accessibilité et balise video

HTML5 nous permet enfin d’intégrer de la vidéo dans nos pages web, directement lisible par les navigateurs et sans avoir à installer de plugin. Cette fonctionnalité a été ajoutée à [Opera depuis la version 10.5 pre-alpha][1] (Windows et Linux pour le moment, la version Mac est en cours de développement.)

[1]: http://my.opera.com/desktopteam/blog/happy-new-year

Le gros point noir en ce qui concerne la vidéo - qu’il s’agisse d’HTML5 ou de solutions propriétaires - est l’accessibilité. Que peuvent faire les développeurs consciencieux qui voudraient offrir une alternative textuelle à ceux qui ne peuvent accéder à la vidéo ? En HTML5, il n’y a pas d’attribut alt sur l’élément video comme pour l’élément `img`, mais vous pouvez ajouter un contenu alternatif à l’intérieur de l’élément, comme ceci :

	<video>
		Your browser doesn’t support the open Ogg Theora codec.
		Please <a href="video.ogg">download the video</a>
		and view offline.
	</video>

Cependant, [selon la recommandation][2] :

[2]: http://dev.w3.org/html5/spec/video.html#video

> ...ce contenu ne devrait pas servir à résoudre des problèmes d’accessibilité. Pour qu’une vidéo soit accessible aux aveugles, aux sourds et aux personnes avec handicaps physiques ou cognitifs, les auteurs devraient fournir des contenus alternatifs et/ou intégrer les aides à l’accessibilité (comme les sous-titres) à l’intérieur du flux vidéo.

En théorie, les fichiers vidéo devraient intégrer leurs propres sous-titres - pas plaqués sur les images, mais dans un fichier séparé au format texte, empaqueté dans un fichier conteneur avec la vidéo elle-même. Ainsi, l’auteur du contenu, qui est le mieux placé pour le connaître, écrit les sous-titres une seule fois. La vidéo peut être ensuite facilement intégrée sur d’autres pages, en proposant automatiquement des légendes ou des transcriptions.

Malheureusement, en pratique, personne ne sait comment faire, et aucun navigateur ne sait lire ces données, ni de quelle manière les présenter à l’utilisateur. Nous avons donc besoin d’une sorte de hack pour combler ce manque. Voici un exemple ("Proof of concept" en anglais) qui stocke une transcription en texte dans la page, à l’intérieur d’un élément `<div id="transcript">`. Si un utilisateur ne dispose pas de JavaScript, la vidéo est simplement affichée avec les contrôles du navigateur, ainsi qu’une partie "transcript" à la suite, contenant la transcription.

Si l’utilisateur dispose de JavaScript, les lignes de la transcription seront superposées une par une au-dessus de la vidéo, comme des légendes. Elles seront encore en texte brut, de sorte que les outils d’assistance pourront accéder aux légendes, tout en étant visible à l’écran, et elles seront synchronisées avec la vidéo.

Voici un exemple vidéo démontrant la technique : [Exemple de vidéo sous-titrée - How to Leverage a Synergy][3]. (Vous devez utiliser un [navigateur disposant du codec vidéo Ogg][4]).

[3]: http://people.opera.com/brucel/demo/video/accessible-html5-video-captions.html
[4]: http://my.opera.com/desktopteam/blog/happy-new-year

Cette exemple ne fonctionne pas dans Safari, car Safari ne prend pas en charge le codec vidéo Ogg que Opera, Firefox et Chrome prennent en charge. La démo fonctionne si vous encodez la vidéo pour Safari aussi, et utilisez [des éléments `source`][5] multiples (un pour Ogg, un pour mp4). Internet Explorer ne prend pas encore en charge les éléments `video`

[5]: http://dev.w3.org/html5/spec/video.html#the-source-element

Si vous affichez le code source, vous verrez que la transcription est structurée sémantiquement à l’aide de paragraphes, et chaque sous-titre est placé à l’intérieur d’un élément `span` pour se superposer à la vidéo, car ce qui est affiché et quand il doit être affiché n’est pas défini par le sens mais par le temps et les contraintes d’affichage (ne pas remplir l’écran de texte par exemple).

Pour que le script sache quand afficher chaque sous-titre, j’ai ajouté des informations de temps pour chacun d’eux. Plutôt que de les ajouter dans le contenu, j’utilise une nouvelle fonctionnalité de HTML5, [l’attribut personnalisé data-][6]. Cet attribut permet de transmettre des données à des scripts. Vous pouvez utiliser le nom que vous souhaitez pour ces attributs, mais ils doivent impérativement commencer par "data-". Dans cet exemple, j’ai utilisé `data-begin` et `data-end`. Ces noms correspondent aux [spécifications "W3C Timed Text"][7] et ["SVG/SMIL Animation"][8].

[6]: http://dev.w3.org/html5/spec/dom.html#embedding-custom-non-visible-data
[7]: http://www.w3.org/TR/2009/CR-ttaf1-dfxp-20090924/#timing-attribute-vocabulary
[8]: http://www.w3.org/TR/SVG/animate.html#TimingAttributes

L’attribut `data-begin` prend comme valeur le temps écoulé depuis le début de la vidéo, à partir duquel je souhaite faire apparaître le `span`. L’attribut `data-end` est ensuite utilisé pour définir le moment où le sous-titre doit disparaître. Ainsi :`

	<span data-begin=1 data-end=6>
		Hi, my name’s Dr Archimedes Einstein…
	</span>

affiche ce sous-titre une seconde après le début de la vidéo, puis le fait disparaître 6 secondes après le début de la vidéo (donc 5 secondes d’affichage en tout).

Le script masque alors alors l’élément `div` qui abrite la transcription en clair (j’utilise JavaScript pour définir une régle `display:none` en CSS). Il récupère ensuite chaque élément `span` à l’intérieur de l’élément `div` masqué :

	var nodes = document.querySelectorAll('#transcript span');

Nous avons maintenant besoin de les positionner sur la vidéo au bon moment. La superposition du texte est simple, j’ai tout simplement positionné un autre élément div (dont l’id est `captions`) au-dessus de la vidéo. Pour augmenter la lisibilité du texte blanc sur fond clair, je vais également ajouter une légère ombre au texte en utilisant CSS :

	text-shadow: black 1px 1px 3px;

Pour déterminer à quel moment superposer chaque `span`, le script utilise l’événement `ontimeupdate` (que l’élément vidéo déclenche environ toutes les 250ms avec Opera) pour interroger l’API vidéo et récupérer le temps écoulé depuis le début :

	var v = document.querySelector('video');
	var now = v.currentTime;

puis on boucle sur chaque élément `span` dans la transcription jusqu’à en trouver un dont les valeurs `data-begin` et `data-end` englobent le temps écoulé.

Dans cet exemple, j’utilise du contenu généré en CSS pour afficher les horodatages lorsque Javascript est désactivé :

	#transcript [data-begin]:before {
		content: ' [' attr(data-begin) 's-'
		attr(data-end)'s] ';
		font-size:80%;
		}

et je le formate en utilisant des règles CSS. Ces deux dernières étapes sont entièrement facultatives.

Comme je l’ai dit plus haut, il s’agit d’un hack. Il demande beaucoup de travail aux développeurs (bien que cela soit vrai pour n’importe quel type de sous-titrage, pour lequel il faut transcrire la piste audio et noter les informations de temps, ce qui est déjà un gros travail).

Quelques problèmes subsistent avec ce script. Premièrement, si je définis des abréviations dans les sous-titres avec `abbr` ou d’autres langues avec `span lang=`, le navigateur n’affichera pas celles-ci en même temps que les sous-titres synchronisés (bien que ce ne soit pas forcément très important). Je n’ai pas essayé d’inclure des informations WAI-ARIA, comme `aria-describedby` (mais je serais intéressé par un retour d’expérience concernant le fonctionnement avec ARIA).

En outre, pour que ce code soit utilisable en production les utilisateurs devraient avoir la possibilité de voir la transcription plutôt que des légendes, même si elles sont en cours d’exécution JavaScript - peut-être qu’ils utilisent un téléphone mobile et ne veulent pas télécharger la vidéo entière, mais qui veulent pouvoir consulter le contenu en texte brut.

Le code est fourni sous licence Creative Commons, donc n’hésitez pas à le modifier, et à m’envoyer un email ou un [message via twitter][9] si vous le faites.

[9]: http://www.twitter.com/brucel

## En savoir plus

- [Spécification de la balise `video`][10]
- [Comment la balise `video` est prise en charge dans Opera][11]

[10]: http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#the-video-element
[11]: http://my.opera.com/core/blog/2009/12/31/re-introducing-video

## Remerciements

Merci à [Philippe Jägenstedt][12] pour avoir coder le script JavaScript de l’exemple, David Storey pour ses suggestions précieuses, et ma fille Marina avoir filmé la vidéo debout sur son lit pendant que je réquisitionnais son bureau.

[12]: http://www.twitter.com/foolip
