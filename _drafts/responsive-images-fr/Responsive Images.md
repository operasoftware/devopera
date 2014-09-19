
##Introduction
Ça y est enfin, <span itemprop="about" property="dc:subject">les images responsives deviennent véritablement une réalité sur le web</span> -&nbsp;en pur HTML, sans hacks tordus. L'élément `<picture>` et quelques nouveaux attributs de l'élément `<img>` sont intégrés dans un flag de Chromium 37 (bientôt sur Opera), dans [Firefox Nightly](https://bugzilla.mozilla.org/show_bug.cgi?id=870022) et sont en cours d'[implémentation dans WebKit](https://bugs.webkit.org/show_bug.cgi?id=134634) (il reste à voir si Apple le lancera avec sa prochaine version de Safari).

Le nouvel élément `<picture>` peut être verbeux et complexe, parce qu'il résout toute une série de cas d'utilisation. Pour vous aider à trouver la bonne syntaxe répondant à vos besoins, nous avons préparé cette liste d'exemples pratiques.

##Quatre questions
Avant de commencer à <span itemprop="about" property="dc:subject">utiliser les images responsives</span> dans votre design, il vous faut toujours répondre à ces quatre questions&nbsp;:

* La taille de mes images change-t-elle en fonction des règles que j'ai données à mon design responsif&nbsp;?
* Est-ce que je veux optimiser mes images pour les écrans haute-résolution&nbsp;?
* Est-ce que je souhaite utiliser différents types MIME pour les navigateurs compatibles&nbsp;?
* Est-ce que je veux modifier les images en fonction de facteurs contextuels&nbsp;?

Dans les exemples qui suivent, nous nous référons à ces questions en utilisant les mots-clés **taille**, **dpi**, **mime** et **art**, respectivement, et pour chaque association de réponses à ces questions, nous montrons un snippet et une courte explication. En créant ces exemples, j'avais en tête ce superbe cliché nocturne de l'Opéra d'Oslo.

<span itemprop="image" url="/content/images/2014/Jul/opera-house.jpg"><figure>
{<1>}![](/content/images/2014/Jul/opera-house.jpg)
</figure></span>
<br/>

##À garder à l'esprit
Voici quelques infos à garder à l'esprit avant de passer aux exemples&nbsp;:

* L'élément `<picture>` doit avoir pour dernier enfant l'élément `<img>`, sinon rien ne se passera. C'est bon pour l'accessibilité puisqu'on utilisera l'attribut habituel `alt` d'`<img>` pour le texte alternatif, et c'est bon en tant que solution de repli pour les navigateurs anciens, qui afficheront simplement l'élément `<img>`.
* Pensez les attributs `sizes` et `srcset` de `<picture>` comme des substituts de `src` de `<img>`. Vérifiez `currentSrc` dans JavaScript pour voir ce que votre navigateur choisit. Les navigateurs anciens utiliseront `<img src>` bien sûr.
* `<img sizes="(max-width: 30em) 100vw ...">` dit ceci&nbsp;: &ldquo;si cette *media query* est vraie, montrer l'image à une largeur de 100vw&rdquo;. La première *media query* vraie l'emporte, ce qui signifie que l'ordre importe.

<br/>

###Direction artistique
<p class="srcset"><span class="false">taille</span><span class="false">dpi</span><span class="false">mime</span><span class="true">art</span></p>

	<picture>
        <source
            media="(min-width: 1024px)"
            srcset="opera-fullshot.jpg">
        <img
            src="opera-closeup.jpg" alt="The Oslo Opera House">
    </picture>
	
Pour les écrans d'une largeur minimale de 1024px, une photo plein format est utilisée (fullshot), et une photo recadrée (closeup) pour les écrans plus petits.
<br/>

###Différents types d'images
<p class="srcset"><span class="false">taille</span><span class="false">dpi</span><span class="true">mime</span><span class="false">art</span></p>

	<picture>
        <source
            srcset="opera.webp"
            type="image/webp">
        <img
            src="opera.jpg" alt="The Oslo Opera House">
    </picture>

Les navigateurs compatibles avec WebP reçoivent <span itemprop="about" property="dc:subject">une image en format WebP</span>, les autres reçoivent un JPG.
<br/>

###Différents types d'images et direction artistique
<p class="srcset"><span class="false">taille</span><span class="false">dpi</span><span class="true">mime</span><span class="true">art</span></p>

	<picture>
        <source
            media="(min-width: 1024px)"
            srcset="opera-fullshot.webp"
            type="image/webp">
        <source
            media="(min-width: 1024px)"
            srcset="opera-fullshot.jpg">
        <source
            srcset="opera-closeup.webp"
            type="image/webp">
        <img
            src="opera-closeup.jpg" alt="The Oslo Opera House">
    </picture>

Pour les écrans d'une largeur minimale de 1024px, une photo plein format est utilisée (fullshot), et une photo recadrée (closeup) pour les écrans plus petits. Cette photo est proposée en format WebP aux navigateurs compatibles, en JPG aux autres.
<br/>

###Images HD
<p class="srcset"><span class="false">taille</span><span class="true">dpi</span><span class="false">mime</span><span class="false">art</span></p>

	<img src="opera-1x.jpg" alt="The Oslo Opera House"
         srcset="opera-2x.jpg 2x, opera-3x.jpg 3x">

Sur un terminal à <span itemprop="about" property="dc:subject">écran haute-définition</span>, le navigateur reçoit une <span itemprop="about" property="dc:subject">image HD</span>, sinon une image normale.
<br/>

###Images HD et direction artistique
<p class="srcset"><span class="false">taille</span><span class="true">dpi</span><span class="false">mime</span><span class="true">art</span></p>

	<picture>
        <source
            media="(min-width: 1024px)"
            srcset="opera-fullshot-1x.jpg 1x,
                    opera-fullshot-2x.jpg 2x,
                    opera-fullshot-3x.jpg 3x">
        <img
            src="opera-closeup-1x.jpg" alt="The Oslo Opera House"
            srcset="opera-closeup-2x.jpg 2x,
                    opera-closeup-3x.jpg 3x">
    </picture>

Pour les écrans d'une largeur minimale de 1024px, une photo plein format est utilisée (fullshot), et une photo recadrée (closeup) pour les écrans plus petits. Cette photo est proposée en format HD pour les terminaux à écran haute-résolution, et en format normal pour les autres.
<br/>

###Images HD et différents types d'images
<p class="srcset"><span class="false">taille</span><span class="true">dpi</span><span class="true">mime</span><span class="false">art</span></p>

	<picture>
        <source
            srcset="opera-1x.webp 1x,
                    opera-2x.webp 2x,
                    opera-3x.webp 3x"
            type="image/webp">
        <img
            src="opera-1x.jpg" alt="The Oslo Opera House"
            srcset="opera-2x.jpg 2x,
                    opera-3x.jpg 3x">
    </picture>

Sur un terminal à écran haute-définition, le navigateur reçoit une image HD de 2 ou 3 fois le nombre de pixels, sinon une image normale. Ces photos sont proposées en format WebP aux navigateurs compatibles, en JPG aux autres.
<br/>

###Images HD, différents types d'images et direction artistique
<p class="srcset"><span class="false">taille</span><span class="true">dpi</span><span class="true">mime</span><span class="true">art</span></p>

	<picture>
        <source
            media="(min-width: 1024px)"
            srcset="opera-fullshot-1x.webp 1x,
                    opera-fullshot-2x.webp 2x,
                    opera-fullshot-3x.webp 3x"
            type="image/webp">
        <source
            media="(min-width: 1024px)"
            srcset="opera-fullshot-1x.jpg 1x,
                    opera-fullshot-2x.jpg 2x,
                    opera-fullshot-3x.jpg 3x">
        <source
            srcset="opera-closeup-1x.webp 1x,
                    opera-closeup-2x.webp 2x,
                    opera-closeup-3x.webp 3x"
            type="image/webp">
        <img
            src="opera-closeup-1x.jpg" alt="The Oslo Opera House"
            srcset="opera-closeup-2x.jpg 2x,
                    opera-closeup-3x.jpg 3x">
    </picture>

Pour les écrans d'une largeur minimale de 1024px, une photo plein format est utilisée (fullshot), et une photo recadrée (closeup) pour les écrans plus petits. De plus, sur un terminal à écran haute-définition, le navigateur reçoit une image HD de 2 ou 3 fois le nombre de pixels, sinon une image normale. Enfin, ces photos sont proposées en format WebP aux navigateurs compatibles, en JPG aux autres.
<br/>

###Redimensionnement d'image
<p class="srcset"><span class="true">taille</span><span class="false">dpi</span><span class="false">mime</span><span class="false">art</span></p>

	<img
        src="opera-fallback.jpg" alt="The Oslo Opera House"
        sizes="(min-width: 640px) 60vw, 100vw"
        srcset="opera-200.jpg 200w,
                opera-400.jpg 400w,
                opera-800.jpg 800w,
                opera-1200.jpg 1200w">

Les terminaux ayant une largeur minimale de 640px reçoivent une photo occupant 60% de la largeur de l'écran (60vw). Pour les autres, la photo occupe toute la largeur de l'écran (100vw). Le navigateur opère son choix à partir d'une sélection d'images de largeurs différentes (200px, 400px, 800px et 1200px) en fonction des dimensions et de la résolution de l'écran.
<br/>

###Redimensionnement et direction artistique
<p class="srcset"><span class="true">taille</span><span class="false">dpi</span><span class="false">mime</span><span class="true">art</span></p>

	<picture>
	<source
		media="(min-width: 1280px)"
		sizes="50vw"
		srcset="opera-fullshot-200.jpg 200w,
				opera-fullshot-400.jpg 400w,
				opera-fullshot-800.jpg 800w,
				press-fullshot-1200.jpg 1200w">
	<img
	 	src="opera-fallback.jpg" alt="The Oslo Opera House"
		sizes="(min-width: 640px) 60vw, 100vw"
		srcset="opera-closeup-200.jpg 200w,
				opera-closeup-400.jpg 400w,
				opera-closeup-800.jpg 800w,
				opera-closeup-1200.jpg 1200w">
</picture>

Pour les écrans d'une largeur minimale de 1280px, une photo plein format est utilisée, affichée à 50% de la largeur du viewport. Si la largeur de l'écran est comprise entre 640 et 1279px, la photo est affichée à 60% de la largeur de l'écran, et pour les écrans plus petits la photo est affichée à 100% de la largeur du viewport. Dans tous les cas, le navigateur opère son choix à partir d'une sélection d'images de largeurs différentes (200px, 400px, 800px et 1200px) en fonction des dimensions et de la résolution de l'écran.
<br/>

###Redimensionnement et différents types d'images
<p class="srcset"><span class="true">taille</span><span class="false">dpi</span><span class="true">mime</span><span class="false">art</span></p>

	<picture>
        <source
            srcset="opera-200.webp 200w,
                    opera-400.webp 400w,
                    opera-800.webp 800w,
                    opera-1200.webp 1200w"
            type="image/webp">
        <img
            src="opera-fallback.jpg" alt="The Oslo Opera House"
            sizes="(min-width: 640px) 60vw, 100vw"
            srcset="opera-200.jpg 200w,
                    opera-400.jpg 400w,
                    opera-800.jpg 800w,
                    opera-1200.jpg 1200w">
    </picture>

Les terminaux ayant une largeur minimale de 640px reçoivent une photo occupant 60% de la largeur de l'écran (60vw). Pour les autres, la photo occupe toute la largeur de l'écran (100vw). Le navigateur opère son choix à partir d'une sélection d'images de largeurs différentes (200px, 400px, 800px et 1200px) en fonction des dimensions et de la résolution de l'écran. Ces photos sont proposées en format WebP aux navigateurs compatibles, en JPG aux autres.
<br/>

###Redimensionnement, différents types d'images et direction artistique
<p class="srcset"><span class="true">taille</span><span class="false">dpi</span><span class="true">mime</span><span class="true">art</span></p>

	<picture>
        <source
            media="(min-width: 1280px)"
            sizes="50vw"
            srcset="opera-fullshot-200.webp 200w,
                    opera-fullshot-400.webp 400w,
                    opera-fullshot-800.webp 800w,
                    opera-fullshot-1200.webp 1200w"
            type="image/webp">
        <source
            sizes="(min-width: 640px) 60vw, 100vw"
            srcset="opera-closeup-200.webp 200w,
                    opera-closeup-400.webp 400w,
                    opera-closeup-800.webp 800w,
                    opera-closeup-1200.webp 1200w"
            type="image/webp">
        <source
            media="(min-width: 1280px)"
            sizes="50vw"
            srcset="opera-fullshot-200.jpg 200w,
                    opera-fullshot-400.jpg 400w,
                    opera-fullshot-800.jpg 800w,
                    opera-fullshot-1200.jpg 1200w">
        <img
            src="opera-fallback.jpg" alt="The Oslo Opera House"
            sizes="(min-width: 640px) 60vw, 100vw"
            srcset="opera-closeup-200.jpg 200w,
                    opera-closeup-400.jpg 400w,
                    opera-closeup-800.jpg 800w,
                    opera-closeup-1200.jpg 1200w">
    </picture>

Pour les écrans d'une largeur minimale de 1280px, une photo plein format est utilisée, affichée à 50% de la largeur du viewport. Si la largeur de l'écran est comprise entre 640 et 1279px, la photo est affichée à 60% de la largeur de l'écran, et pour les écrans plus petits la photo est affichée à 100% de la largeur du viewport. Dans tous les cas, le navigateur opère son choix à partir d'une sélection d'images de largeurs différentes (200px, 400px, 800px et 1200px) en fonction des dimensions et de la résolution de l'écran. Ces photos sont proposées en format WebP aux navigateurs compatibles, en JPG aux autres.
<br/>

###Redimensionnement et images HD
<p class="srcset"><span class="true">taille</span><span class="true">dpi</span><span class="false">mime</span><span class="false">art</span></p>

	<img
        src="opera-fallback.jpg" alt="The Oslo Opera House"
        sizes="(min-width: 640px) 60vw, 100vw"
        srcset="opera-200.jpg 200w,
                opera-400.jpg 400w,
                opera-800.jpg 800w,
                opera-1200.jpg 1200w,
                opera-1600.jpg 1600w,
                opera-2000.jpg 2000w">

Les terminaux ayant une largeur minimale de 640px reçoivent une photo occupant 60% de la largeur de l'écran (60vw). Pour les autres, la photo occupe toute la largeur de l'écran (100vw). Le navigateur opère son choix à partir d'une sélection d'images de largeurs différentes (200px, 400px, 800px, 1200px, 1600px et 2000px) en fonction des dimensions et de la résolution de l'écran.
<br/>

###Redimensionnement, images HD et direction artistique
<p class="srcset"><span class="true">taille</span><span class="true">dpi</span><span class="false">mime</span><span class="true">art</span></p>

	<picture>
        <source
            media="(min-width: 1280px)"
            sizes="50vw"
            srcset="opera-fullshot-200.jpg 200w,
                    opera-fullshot-400.jpg 400w,
                    opera-fullshot-800.jpg 800w,
                    opera-fullshot-1200.jpg 1200w,
                    opera-fullshot-1600.jpg 1600w,
                    opera-fullshot-2000.jpg 2000w">
        <img
            src="opera-fallback.jpg" alt="The Oslo Opera House"
            sizes="(min-width: 640px) 60vw, 100vw"
            srcset="opera-closeup-200.jpg 200w,
                    opera-closeup-400.jpg 400w,
                    opera-closeup-800.jpg 800w,
                    opera-closeup-1200.jpg 1200w,
                    opera-closeup-1600.jpg 1600w,
                    opera-closeup-2000.jpg 2000w">
    </picture>

Pour les écrans d'une largeur minimale de 1280px, une photo plein format est utilisée, affichée à 50% de la largeur du viewport. Si la largeur de l'écran est comprise entre 640 et 1279px, la photo est affichée à 60% de la largeur de l'écran, et pour les écrans plus petits la photo est affichée à 100% de la largeur du viewport. Dans tous les cas, le navigateur opère son choix à partir d'une sélection d'images de largeurs différentes (200px, 400px, 800px, 1200px, 1600px et 2000px) en fonction des dimensions et de la résolution de l'écran.
<br/>

###Redimensionnement, images HD et différents types d'images
<p class="srcset"><span class="true">taille</span><span class="true">dpi</span><span class="true">mime</span><span class="false">art</span></p>

	<picture>
        <source
            srcset="opera-200.webp 200w,
                    opera-400.webp 400w,
                    opera-800.webp 800w,
                    opera-1200.webp 1200w,
                    opera-1600.webp 1600w,
                    opera-2000.webp 2000w"
            type="image/webp">
        <img
            src="opera-fallback.jpg" alt="The Oslo Opera House"
            sizes="(min-width: 640px) 60vw, 100vw"
            srcset="opera-200.jpg 200w,
                    opera-400.jpg 400w,
                    opera-800.jpg 800w,
                    opera-1200.jpg 1200w,
                    opera-1600.jpg 1600w,
                    opera-2000.jpg 2000w">
    </picture>

Les terminaux ayant une largeur minimale de 640px reçoivent une photo occupant 60% de la largeur de l'écran (60vw). Pour les autres, la photo occupe toute la largeur de l'écran (100vw). Le navigateur opère son choix à partir d'une sélection d'images de largeurs différentes (200px, 400px, 800px, 1200px, 1600px et 2000px) en fonction des dimensions et de la résolution de l'écran. Ces photos sont proposées en format WebP aux navigateurs compatibles, en JPG aux autres.
<br/>

###Redimensionnement, images HD, différents types d'images et direction artistique
<p class="srcset"><span class="true">taille</span><span class="true">dpi</span><span class="true">mime</span><span class="true">art</span></p>

	<picture>
        <source
            media="(min-width: 1280px)"
            sizes="50vw"
            srcset="opera-fullshot-200.webp 200w,
                    opera-fullshot-400.webp 400w,
                    opera-fullshot-800.webp 800w,
                    opera-fullshot-1200.webp 1200w,
                    opera-fullshot-1600.webp 1600w,
                    opera-fullshot-2000.webp 2000w"
            type="image/webp">
        <source
            sizes="(min-width: 640px) 60vw, 100vw"
            srcset="opera-closeup-200.webp 200w,
                    opera-closeup-400.webp 400w,
                    opera-closeup-800.webp 800w,
                    opera-closeup-1200.webp 1200w,
                    opera-closeup-1600.webp 1600w,
                    opera-closeup-2000.webp 2000w"
            type="image/webp">
        <source
            media="(min-width: 1280px)"
            sizes="50vw"
            srcset="opera-fullshot-200.jpg 200w,
                    opera-fullshot-400.jpg 400w,
                    opera-fullshot-800.jpg 800w,
                    opera-fullshot-1200.jpg 1200w,
                    opera-fullshot-1600.jpg 1800w,
                    opera-fullshot-2000.jpg 2000w">
        <img
            src="opera-fallback.jpg" alt="The Oslo Opera House"
            sizes="(min-width: 640px) 60vw, 100vw"
            srcset="opera-closeup-200.jpg 200w,
                    opera-closeup-400.jpg 400w,
                    opera-closeup-800.jpg 800w,
                    opera-closeup-1200.jpg 1200w,
                    opera-closeup-1600.jpg 1600w,
                    opera-closeup-2000.jpg 2000w">
    </picture>

Pour les écrans d'une largeur minimale de 1280px, une photo plein format est utilisée, affichée à 50% de la largeur du viewport. Si la largeur de l'écran est comprise entre 640 et 1279px, la photo est affichée à 60% de la largeur de l'écran, et pour les écrans plus petits la photo est affichée à 100% de la largeur du viewport. Dans tous les cas, le navigateur opère son choix à partir d'une sélection d'images de largeurs différentes (200px, 400px, 800px, 1200px, 1600px et 2000px) en fonction des dimensions et de la résolution de l'écran. Ces photos sont proposées en format WebP aux navigateurs compatibles, en JPG aux autres.
<br/>

###Et ce n'est pas fini&nbsp;!
Si vous n'avez pas tout suivi, pas d'inquiétude&nbsp;! Nous publierons bientôt un tutoriel approfondi sur `<picture>` et les images responsives.
