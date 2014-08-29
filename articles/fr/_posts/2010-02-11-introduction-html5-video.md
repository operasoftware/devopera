---
title: Introduction à l’élément HTML5 Video
authors:
- patrick-lauke
- bruce-lawson
tags:
- accessibility
- canvas
- css
- html5
- multimedia
- open-web
- opera-10
- video
language: fr
translator: Nicolas Chevallier
license: cc-by-nc-sa-3.0
---

## Introduction

Il y a bien longtemps, dans une galaxie qui semble très lointaine, le multimédia sur le Web était limité aux mélodies MIDI et aux GIF animés. En même temps que la bande passante est devenue plus rapide et les technologies de compression ont été améliorées, le MP3 a pris le dessus sur la musique MIDI et la "vraie" vidéo de qualité a commencé à gagner du terrain. Toutes sortes de lecteurs vidéo propriétaires se sont livrés bataille — Real Player, Windows Media Player, … — jusqu’à ce qu’un seul sorte vainqueur en 2005 : Adobe Flash. C’est en grande partie grâce à l’omniprésence de son plugin et le fait que YouTube l’ait sélectionné comme technologie de streaming que Flash est devenu le standard de facto pour livrer la vidéo sur le Web.

Une des nouvelles caractéristiques les plus intéressantes du langage HTML5 est l’ajout de l’élément `<video>` qui permet aux développeurs d’inclure de la vidéo directement dans leurs pages sans avoir besoin de plugin. [Opera a proposé un standard pour l’élément `<video>` ][1] dans le cadre de HTML5 depuis 2007, et il a fait ses débuts officiels dans le navigateur Opera depuis la version 10.50 pre-alpha.

[1]: http://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-February/009702.html

Cet article propose une introduction à l’élément `<video>` et certaines de ses API associées. Nous examinerons pourquoi le support natif de la vidéo par les navigateurs est important, nous donnerons un aperçu du balisage de l’élément `video`, et définirons les grandes lignes pour contrôler une vidéo à l’aide de JavaScript.

- [Pourquoi avons-nous besoin d’un élément `<video>`?](#why)
- [Anatomie de l’élément `<video>`](#anatomy)
- [Codecs — une ombre au tableau](#codecs)
- [La vidéo n’est plus un citoyen de seconde classe sur le Web](#first-class)
	- [Accessibilité clavier](#keyboard-access)
	- [`<video>` fonctionne bien avec le reste de la page](#playwell)
		- [Appliquer du style à l’élément `<video>` à l’aide de CSS](#css)
		- [Combiner `<video>` et `<canvas>`](#canvas)
- [Programmez vos propres contrôles](#scripting)
- [En savoir plus](#more)

## Pourquoi avons-nous besoin d’un élément `<video>`?

Jusqu’à présent, si vous souhaitiez inclure une vidéo dans une page Web, vous deviez vous disputer avec quelques balises peu parlantes. Voici un exemple, pris directement depuis YouTube:

	<object width="425" height="344">
		<param name="movie" value="https://www.youtube.com/v/9sEI1AUFJKw&hl=en_GB&fs=1&"></param>
		<param name="allowFullScreen" value="true"></param>
		<param name="allowscriptaccess" value="always"></param>
		<embed src="https://www.youtube.com/v/9sEI1AUFJKw&hl=en_GB&fs=1&" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344"></embed>
	</object>

Tout d’abord, nous avons un élément `<object>` — un conteneur générique pour les objets étrangers — pour inclure l’animation Flash. Pour contourner certaines incompatibilités entre les différents navigateurs, nous incluons également un élément `<embed>` qui spécifie un contenu de remplacement et qui duplique la plupart des paramètres de l’élément `<object>`. Le code résultant n’est pas très lisible.

## Anatomie de l’élément `<video>`

Par rapport à la construction alambiquée nécessaire pour inclure du Flash dans votre page, le balisage de base nécessaire à l’élément `<video>` dans HTML5 est agréablement simple:

	<video src=turkish.ogv
		width=320
		height=240
		controls
		poster=turkish.jpg>
	</video>

Notez que dans notre exemple, nous tirons parti d’une syntaxe plus souple proposée par le langage HTML5 — vous n’avez pas besoin de mettre des guillemets autour des valeurs d’attributs, et vous pouvez utiliser des attributs booléens de façon simplifiée comme `autoplay`. Si vous préférez, vous pouvez bien sûr également vous en tenir à la syntaxe XHTML `controls="controls"` et citer toutes les valeurs d’attribut. Évidemment il vaut mieux choisir le style de codage qui vous convient et le respecter, par souci de cohérence et de maintenance. En XHTML5, vous **devez** utiliser la syntaxe XHTML (et vous devez également servir vos pages en XML avec le type MIME correct, ce qui actuellement ne fonctionne pas dans Internet Explorer).

Les attributs de l’élément `<video>` que nous avons utilisé dans notre code d’exemple sont assez explicites :

- `src` La source de l’élément, en fournissant l’URL de votre fichier vidéo.
- `width` et `height` Comme pour les éléments `img` vous pouvez définir explicitement les dimensions de votre vidéo — sinon, l’élément sera par défaut affiché à la largeur et la hauteur du fichier vidéo. Si vous spécifiez une dimension mais pas l’autre, le navigateur va ajuster la taille de la dimension non spécifiée afin de préserver les proportions de la vidéo.
- `controls` Si cet attribut booléen est présent, le navigateur affiche ses propres contrôles vidéo pour la lecture et le volume. Si vous ne spécifiez pas cela, l’utilisateur ne verra que la première image (ou l’image `poster` spécifiée) et ne sera pas en mesure de lire la vidéo, à moins que vous ne déclenchiez le film dans votre code JavaScript ou que vous créiez vos propres contrôles personnalisés, comme nous allons l’expliquer plus loin dans cet article.
- `poster` L’attribut `poster` permet de spécifier une image que le navigateur utilisera alors que la vidéo est en cours de téléchargement, ou jusqu’à ce que l’utilisateur commence la lecture de la vidéo. Si cet attribut n’est pas spécifié, la première image de la vidéo sera utilisée à la place.

Pour les navigateurs Web qui ne supporte pas encore la balise `<video>` il est possible d’inclure un contenu de remplacement — au minimum, on pourrait inclure un texte et un lien vers le fichier vidéo lui-même, afin que les utilisateurs puissent le télécharger et le lire avec un lecteur vidéo :

	<video src=turkish.ogv
		width=320
		height=240
		controls
		poster=turkish.jpg>
		Download the <a href=video.ogg>Turkish dancing masterclass video</a>
	</video>

Donc, sans plus tarder, allez voir cette vidéo d’un [cours de danse turque,][12] implémenté en utilisant rien d’autre que l’élément `<video>`.

[12]: http://people.opera.com/patrickl/articles/introduction-html5-video/basic/

Il y a d’autres attributs que nous ne couvrons pas dans nos exemples, comme :

- `autoplay` Spécifie au navigateur de lancer la lecture de la vidéo automatiquement. Utilisez cet attribut avec soin, car cela peut être très gênant voire carrément problématique, notamment pour les utilisateurs des technologies d’assistance comme les lecteurs d’écran ou celles relatives à des connexions à faible bande passante (comme sur un appareil mobile).
- `autobuffer` Si vous êtes bien sûr que l’utilisateur souhaite activer la vidéo (par exemple, si c’est la seule raison d’être de la page) mais que vous ne voulez pas utiliser le `autoplay` vous pouvez régler l’attribut booléen `autobuffer`. Cet attribut spécifie au navigateur de commencer le téléchargement de la vidéo tout de suite, en anticipant sur le fait que l’utilisateur lira la vidéo. (Cette partie de la spécification est actuellement en pleine mutation et sujette à changement, l’attribut n’est donc pas pris en charge par Opera 10.5 Beta)
- `loop` L’attribut `loop` est un autre attribut booléen. Comme vous pouvez l’imaginer, il lit la vidéo en boucle. (Il n’est pas encore pris en charge par Opera 10.50 beta)

## Codecs — une ombre au tableau

Opera prend en charge le [codec vidéo Ogg Theora:][13]

[13]: http://theora.org/

> Theora est un format libre et ouvert de compression vidéo de la fondation Xiph.org… Il peut être utilisé pour distribuer des films et de vidéos en ligne et sur disque sans l’octroi de licences et redevances ou DRM associés à d’autres formats.

Firefox et Chrome supprotent également Theora. Toutefois, Safari ne le supporte pas, préférant fournir à la place un support natif pour le [codec H.264][14] (que Chrome prend également en charge). Par conséquent, nous avons besoin d’encoder nos vidéos à deux reprises, une fois à l’aide de Theora et une fois à l’aide de H.264, ajouter d’autres éléments `<source>` avec les attributs `type` appropriés et laisser le navigateur télécharger le format qu’il peut afficher. Notez que dans ce cas, nous ne fournissons pas un attribut `src` dans l’élément `<video>` lui-même:

[14]: http://en.wikipedia.org/wiki/H.264/MPEG-4_AVC

	<video width=320 height=240 controls poster=turkish.jpg>
		<source src=turkish.ogv type=video/ogg>
		<source src=turkish.mp4 type=video/mp4>
		Download the <a href=video.ogg>Turkish dancing masterclass video</a>
	</video>

Voici notre [cours de danse turque aux formats `.ogv et .mp4`][15], ce qui devrait marcher dans chacun des navigateurs.

[15]: http://people.opera.com/patrickl/articles/introduction-html5-video/multi-source/

Au moment de la rédaction de cet article (Février 2010), les représentants de Microsoft n’ont fait aucune annonce publique concernant un codec vidéo qu’ils pourraient supporter (dans l’hypothèse ou ils envisageraient d’en supporter un). Cependant, le type de fichier MP4 peut également être joué par le plugin Flash Player, et celui-ci peut être utilisé comme solution de repli pour Internet Explorer et les anciennes versions des autres navigateurs. Voir la mise en oeuvre par Kroc Camen de cette technique dans son article [la vidéo pour tout le monde!,][16] Dans lequel il inclut les éléments `object` et `embed` dans la partie contenu alternatif de l’élément `<video>`

[16]: http://camendesign.com/code/video_for_everybody

Bien sûr, si les navigateurs qui ne supportent pas l’élément `<video>` utilisent des plugins Quicktime ou Flash pour lire le contenu alternatif, nous revenons au point de départ, et nous ne serons pas en mesure de profiter de l’une des nouvelles fonctionnalités et des améliorations que nous allons décrire ci-dessous. _A quoi ça sert alors?,_ allez-vous demander. Nous dirions que c’est une solution transitoire, jusqu’au support de la vidéo en natif par les principaux navigateurs. C’est un cas de dégradation progressive — les utilisateurs auront accès à une version basique de votre page, mais au moins ils sont en mesure de voir vos films.

## La vidéo n’est plus un citoyen de seconde classe sur le Web

Donc, nous avons vu que le balisage de l’élément `<video>` proposé par HTML5 est beaucoup plus lisible et compréhensible par rapport à ce que nous avions actuellement à faire afin d’obtenir des films Flash. Mais peu importe la façon horrible dont c’était codé, dans la plupart des cas cela fonctionne, n’est-ce pas? Alors, pourquoi nous voulons nous éloigner de cette approche qui consiste à utiliser un module additionnel tiers tel que Flash ?

L’avantage majeur de l’élément HTML5 `<video>` est que, finalement, la vidéo est un citoyen à part entière sur le Web, plutôt que d’être traitée par l’élément `object` ou par l’élément non valide `embed` (bien que valide maintenant dans HTML5).

### Accessibilité clavier

Un des grands problèmes non résolus avec l’utilisation de Flash est l’accessibilité clavier. À l’exception d’Internet Explorer sur Windows, il n’y a pas de moyen pour un utilisateur d’utiliser la touche Tab ou autre pour déplacer le focus sur une vidéo Flash. Et même si ces utilisateurs se débrouillent pour obtenir le focus sur la vidéo (en utilisant d’autres technologies d’assistance), il n’existe aucun moyen facile pour eux de sortir de la vidéo (à moins d’ajouter un code ActionScript à la séquence pour programmer le focus du navigateur afin qu’il passe du plugin à la page). En revanche, comme le navigateur est directement responsable de l’élément `<video>` il peut traiter les contrôles de lecture du film comme si ils étaient des boutons standard sur une page Web et les inclure dans son ordre normal de tabulation.

Le support clavier pour l’élément `video` n’est pas encore pris en charge par tous les navigateurs… Toutefois, cela fonctionne déjà bien dans Opera 10.50 beta.

### `<video>` fonctionne bien avec le reste de la page

En termes simples, chaque fois que vous incluez un plugin dans vos pages, vous réservez une zone de dessin qui est déléguée par le navigateur au plugin. Pour le navigateur, la zone du plugin reste une boîte noire — le navigateur ne traite ni n’interprète quoi que ce soit qui s’y passe.

Normalement, ce n’est pas un problème, sauf si votre mise en page chevauche la zone de dessin réservée au plugin. Imaginez par exemple un site qui contient une animation Flash, mais qui contient aussi des menus déroulants écrits en JavaScript ou en CSS, qui doivent se dérouler au cours du film. Par défaut, la zone de dessin du plugin se trouve au sommet de la page Web, ce qui signifie que ces menus apparaîtront étrangement derrière le film. Un effet semblable se produit dans le cas où votre page utilise des visionneuses plein écran ("lightbox" dans le texte) — toute animation Flash va flotter au-dessus de la partie grisée de la page. C’est pourquoi la plupart des scripts de visionneuse prêts à l’emploi utilise une astuce pour résoudre le problème en commençant par supprimer tous les objets de la page avant de déclencher la superposition elle-même, et réintroduit les objets une fois la visionneuse fermée.

Dans le cas spécifique des plugins Flash, les développeurs peuvent corriger ce problème d’affichage en ajoutant l’attribut `wmode="opaque"` à leur élément `<object>` et l’attribut équivalent `<param name="wmode" value="opaque">` à leur élément `<embed>`. Toutefois, cela entraîne l’inaccessibilité du plugin aux utilisateurs de lecteurs d’écran, et il est donc préférable d’éviter.

Des problèmes peuvent aussi survenir si votre page comporte des modifications de mise en page dynamique. Si les dimensions de la zone de dessin du plugin sont modifiées, ceci peut parfois avoir des effets imprévus — une lecture d’un film dans le plugin pourra ne pas être redimensionnée correctement, mais simplement recadrée ou afficher un espace blanc dans la zone supplémentaire.

Avec l’élément natif `<video>` c’est le navigateur lui-même qui prend soin du rendu. En tant que tel, `<video>` se comporte comme tout autre élément dans votre mise en page. Il peut être positionné, flotter, se chevaucher ou dynamiquement être redimensionné, sans code ou script supplémentaire. Il est même possible d’obtenir des effets intéressants, tels qu’une vidéo semi-transparente en définissant simplement l’opacité de l’élément via CSS.

Un tout nouveau monde de vidéos de chatons mignons nous attend. Maintenant, je n’ai pas de chatons, mais j’ai la seconde meilleure chose — des enfants — donc, je vais utiliser quelques vidéos de mes enfants à des fins de démonstration.

#### Appliquer du style à l’élément `video` à l’aide CSS

Maintenant que `video` fait partie de l’ensemble des technologies Open Web, nous pouvons utiliser les feuilles de style CSS pour appliquer du style à l’élément. Voici un exemple simple de ce qui peut maintenant être réalisé. Nous allons appliquer [des transitions CSS pour la vidéo du cours de danse turque][17] afin de changer ses dimensions une fois que les évènements `:hover :focus` seront déclenchés sur la vidéo. (Lire notre tutoriel sur les [transitions CSS3 et les transformations 2D.)][18]

[17]: http://people.opera.com/patrickl/articles/introduction-html5-video/transitions/
[18]: https://dev.opera.com/articles/css3-transitions-and-2d-transforms/

#### Combiner `video` et `canvas`

Comme le navigateur prend en charge l’affichage et le rendu vidéo, on peut facilement faire chevaucher ou combiner d’autres éléments par dessus. Dans cet exemple, un élément [`<canvas>` est superposé à la vidéo.][19] (Attention: cette vidéo contient des images boulversantes d’un employé d’Opera et de ses enfants menacés par un pointeur de souris gigantesque.)

[19]: http://people.opera.com/patrickl/articles/introduction-html5-video/video-canvas/

Notez que l’élément `<canvas>` ne couvre pas complètement la vidéo. Nous avons créé un canvas 40 pixels plus petit que la hauteur de la vidéo, de sorte que la zone où les contrôles vidéo apparaissent ne soit pas recouverte. Cela garantit que si l’utilisateur déplace sa souris sur le bas de la vidéo, il y ait suffisamment de place dans l’élément `<video>` pour recevoir les événements `hover` et obliger le navigateur à afficher les contrôles. L’accès des contrôles au clavier devrait fonctionner indépendamment des éléments superposés, mais la gestion du clavier varie actuellement entre les différents navigateurs.

## Programmez vos propres contrôles

Les éléments `<video>` et `<audio>` (dont nous parlerons dans un prochain article) sont des instances des nouveaux [éléments DOM HTML5 médias,][20] qui exposent une API puissante et donnent aux développeurs un contrôle sur la lecture des films à travers une multitude de nouvelles méthodes et de propriétés JavaScript. Penchons nous sur quelques-uns des plus pertinents pour construire nous-mêmes un contrôleur personnalisé :

[20]: http://www.w3.org/TR/html5/the-iframe-element.html#media-elements

- `play()` et `pause()` Bien évidemment, ces méthodes permettent de lancer et de mettre en pause la lecture vidéo. `play()` commence toujours la vidéo à partir de la position de lecture. Lorsqu’un film est chargé, ce sera la première image du film. Notez qu’il n’y a pas de méthode `stop()` — si vous voulez arrêter la lecture et revenir au début du film, vous devrez `pause()` et modifier la position actuelle de la lecture vous-même.
- `volume` Cet attribut peut être utilisé pour obtenir ou définir le volume de la piste audio de la vidéo comme un `float` allant de 0,0 (silencieux) à 1.0 (plus fort).
- `muted` Indépendamment du `volume` le son d’une vidéo peut être coupé.
- `currentTime` Lors d’une lecture, cet attribut retourne la position actuelle de la lecture en secondes, encore une fois exprimé en `float` La modification de cet attribut permettra — si possible — de déplacer la position de lecture à l’indice de temps spécifié. (A noter que la lecture ou l’écriture de la propriété `currentTime` ne sont pas encore pris en charge dans la version d’Opera 10.50 beta)

En outre, les éléments media déclenchent aussi toute une série de d’évènements dans le cadre de leur modèle de traitement, que nous pouvons écouter ou auxquels nous pouvons nous abonner. Pour notre exemple, nous verrons seulement quelques-uns de ceux-ci:

- `loadeddata` Le navigateur a suffisamment chargé de données vidéo pour débuter la lecture à la position actuelle. `play` et `pause` Lecture a commencé ou a été mise en pause. Si nous voulons maîtriser la vidéo à partir de JavaScript, nous devons écouter ces évènements pour être surs que les fonctions `play()` et `pause()` ont été exécutées avec succès.
- `timeupdate` La position actuelle de la lecture a changé parce que le film est en cours de lecture, un script l’a changée, ou l’utilisateur a décidé d’accéder à une séquence différente dans la vidéo.
- `ended` Nous avons atteint la fin du film, et l’élément `<video>` n’est pas défini sur `loop` ou n’est pas joué à l’envers (non traité dans cet article).

Maintenant, nous avons tous les éléments de base nécessaires pour créer un contrôleur simple. Avant de commencer cependant, un mot d’avertissement: si nous bâtissons notre propre contrôleur en JavaScript, nous devons évidemment supprimer tous les contrôles natif du navigateur. Cependant, nous pourrions souhaiter fournir ces contrôles comme solution de repli, notamment au cas ou les utilisateurs auraient désactivé Javascript dans leur navigateur. Pour cette raison, nous conserverons l’attribut `controls` dans nos balises, et nous l’enleverons à l’exécution de notre script. Alternativement, on pourrait également définir la valeur de l’attribut à false — les deux approches sont valables. Comme notre contrôleur personnalisé repose lui-même sur les scripts pour fonctionner, nous allons générer le balisage du contrôleur en JavaScript.

Voir notre exemple de [de contrôles personnalisés en javascript pour l’élément HTML5 video][21] en action. Le script est très commenté, et devrait bénéficier d’un peu de nettoyage avant d’être utilisé dans un environnement de production, mais nous espérons qu’il aidera à illustrer quelques-unes des nouvelles possibilités très puissantes ouvertes par l’élément HTML5 `video`. Avec un peu de connaissances JavaScript, il est maintenant facile pour les développeurs Web de créer des contrôles de lecture personnalisés qui s’accordent parfaitement avec le design de leur site, sans nécessiter de créer des lecteurs vidéo Flash sur mesure.

[21]: http://people.opera.com/patrickl/articles/introduction-html5-video/scripted-controls/

## En savoir plus

- [Tout ce que vous devez savoir sur HTML5 vidéo et audio][22] — et c’est vraiment _tout!_
- [Spécification de la balise `<video>`][23]
- [Comment la balise `video` est prise en charge dans Opera][24]
- [Vidéo HTML5 accessible sous-titrée en JavaScript][25]

[22]: http://my.opera.com/core/blog/2010/03/03/everything-you-need-to-know-about-html5-video-and-audio-2
[23]: http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#the-video-element
[24]: http://my.opera.com/core/blog/2009/12/31/re-introducing-video
[25]: https://dev.opera.com/articles/view/accessible-html5-video-with-javascripted-captions/
