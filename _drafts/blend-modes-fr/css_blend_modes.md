<span itemprop="about" property="dc:subject">CSS Blend Modes</span> nous permet de spécifier la manière dont un calque va interagir ou se mélanger (*blend*) avec un autre. Jusqu'à présent, cette fonctionnalité était le domaine des applications type Photoshop, maintenant elle est disponible dans CSS&nbsp;!

##Qu'est-ce que CSS Blend Modes
Si vous avez déjà utilisé une application de traitement d'image comme Photoshop, Pixelmator, GIMP, etc., vous connaissez Blend Modes. Comme son nom l'indique, il s'agit de divers modes d'interaction d'une image avec une autre, située en-dessous. En fonction du mode choisi, vous obtiendrez des effets différents.

Ces Blend Modes sont maintenant disponibles en CSS via la spécification [Compositing and Blending level 1](http://dev.w3.org/fxtf/compositing-1/). Les Blend Modes sont utilisés pour déterminer la façon dont une couleur va se mélanger avec les couleurs du calque d'arrière-plan. Et les résultats peuvent être vraiment intéressants.

##Comment ça marche ?
Les Blend Modes sont, en gros, les différentes façons de déterminer la couleur finale d'une image quand un élément se superpose, entièrement ou partiellement, à un autre. Ces modes sont des fonctions mathématiques qui utilisent les représentations mathématiques des couleurs présentes dans les calques source et background -&nbsp;par exemple RGBa, avec des valeurs comprises entre 0 et 1 pour le canal alpha&nbsp;- et qui retournent une valeur mathématique finale pour chaque pixel, laquelle détermine la couleur de ce pixel. Si ça vous amuse, vous pouvez lire les formules exactes employées par chaque mode dans la [spécification](http://dev.w3.org/fxtf/compositing-1/#blending). Et maintenant, regardons les différents Blend Modes disponibles en CSS et le type d'effets que nous pouvons réaliser.

##Les différents Blend Modes

###Normal
<figure>
{<1>}![](/content/images/2014/Jun/bl1.jpg)
</figure>

Le mode *normal* retourne l'image sans effet visible.

###Multiply
<figure>
{<2>}![](/content/images/2014/Jun/bl2.jpg)
</figure>
Comme son nom l'indique, le mode *multiply* multiplie les couleurs de l'image source et de l'image d'arrière-plan pour obtenir la couleur finale. Typiquement, on aboutit à une image plus foncée.

###Screen
<figure>
{<3>}![](/content/images/2014/Jun/bl3.jpg)
</figure>
C'est l'opposé de *multiply*. Le complément (c'est à dire "1 moins la valeur de la couleur") de la source et du calque d'arrière-plan sont multipliés, et son complément est utilisé pour donner la couleur finale.

###Overlay
<figure>
{<4>}![](/content/images/2014/Jun/bl4.jpg)
</figure>
Le mode *overlay* applique le mode *screen* aux pixels plus clairs et le mode *multiply* aux pixels plus foncés. Le résultat est qu'on éclaircit les pixels clairs et on assombrit plus encore les pixels foncés.

###Darken
<figure>
{<5>}![](/content/images/2014/Jun/bl5.jpg)
</figure>
Ce mode applique le ton le plus foncé entre les couleurs de la source et du background.

###Lighten
<figure>
{<6>}![](/content/images/2014/Jun/bl6.jpg)
</figure>
Ce mode est le contraire du précédent. Il applique le ton le plus clair entre les couleurs de la source et du background.

###Color-Dodge
<figure>
{<7>}![](/content/images/2014/Jun/bl7.jpg)
</figure>
Le mode *color-dodge* donne une image fortement contrastée.

###Color-Burn
<figure>
{<8>}![](/content/images/2014/Jun/bl8.jpg)
</figure>
Ce mode assombrit la couleur contextuelle et augmente le contraste.

###Hard-Light
<figure>
{<9>}![](/content/images/2014/Jun/bl9.jpg)
</figure>
C'est l'inverse d'*overlay*, il applique le mode *mutiply* aux pixels plus clairs et le mode *screen* aux pixels plus foncés.

###Soft-Light
<figure>
{<10>}![](/content/images/2014/Jun/bl10.jpg)
</figure>
*Soft-light* applique le mode *screen* aux pixels plus clairs et le mode *multiply* aux pixels plus foncés, il ressembel à *overlay*, mais fonctionne un peu différemment.

###Hue
<figure>
{<11>}![](/content/images/2014/Jun/bl11.jpg)
</figure>
Ce mode applique la saturation et la luminosité de la couleur contextuelle, mais avec la teinte de la couleur source.

###Saturation
<figure>
{<12>}![](/content/images/2014/Jun/bl12.jpg)
</figure>
*Saturation* produit une couleur à partir de la saturation de la couleur source et la mélange à la teinte et à la luminosité de la couleur d'arrière-plan.

###Color
<figure>
{<13>}![](/content/images/2014/Jun/bl13.jpg)
</figure>
Le mode *color* produit une couleur à partir de la teinte et de la saturation de la couleur source, et de la luminosité de la couleur d'arrière-plan.

###Luminosity
<figure>
{<14>}![](/content/images/2014/Jun/bl14.jpg)
</figure>
Produit une couleur à partir de la luminosité de la couleur source, mélangée à la teinte et la saturation de la couleur de background.


###Difference
<figure>
{<15>}![](/content/images/2014/Jun/bl15.jpg)
</figure>
Le mode *difference* soustrait la plus sombre des deux couleurs à la couleur la plus claire, donnant une sorte d'effet &ldquo;négatif photo&rdquo;. Le noir n'est pas affecté, le blanc est totalement inversé, et les autres couleurs sont modifiées en fonction de leur niveau de luminosité.

###Exclusion
<figure>
{<16>}![](/content/images/2014/Jun/bl16.jpg)
</figure>
Le mode *exclusion* produit une version à faible contraste de l'effet produit par le mode *difference*.

Il n'est pas forcément simple de se rappeler la façon dont fonctionne chaque mode, c'est pourquoi on peut tenter de les regrouper par catégories en fonction de l'effet produit, par exemple&nbsp;:

1. **Assombrissement** : les modes *darken*, *multiply* et *color-burn* assombrissent l'image, chacun à sa façon.
2. **Éclaircissement** : les modes *lighten*, *screen* et *color-dodge* éclaircissent l'image.
3. **Contraste** : *overlay*, *soft-light* et *hard-light* jouent sur les contrastes.
4. **Comparatif** : les modes *difference* et *exclusion* entrent dans cette catégorie.
5. **Composantes** : les modes *teinte*, *saturation*, *couleur* et *luminosité* entrent dans cette catégorie. Contrairement aux autres Blend Modes, ceux-ci isolent une composante du calque source et mélangent les autres composantes des calques source et background.

---
##Mix-blend-mode
<figure>
{<17>}![](/content/images/2014/Jun/bl17.jpg)
</figure>
La propriété `mix-blend-mode` spécifie la façon dont l'élément source va se mélanger avec l'élément contextuel. Le contexte peut être n'importe quel élément situé en dessous de l'élément source -&nbsp;par exemple un titre pourrait être l'élément source et son container `div` pourrait être le contexte.

Pour l'utiliser, il suffit d'écrire&nbsp;:

	mix-blend-mode: difference
    
ou bien :

	mix-blend-mode: overlay

et ainsi de suite. Remarquez que cela fonctionne avec n'importe quel élément. Si vous appliquez <span itemprop="about" property="dc:subject">`mix-blend-mode`</span> à un élément, il mêlera ses couleurs à tout élément qu'il recouvre. Jetez un coup d'oeil à cete [petite démo](http://dev.opera.com/articles/getting-to-know-css-blend-modes/demo_blendmodes_mixblend.html). (NdT: *CSS Blend Modes est encore tout récent et la compatibilité navigateurs pas encore parfaite, pour pouvoir suivre les démos il faudra sans doute activer quelques flags, comme indiqué [dans le paragraphe ci-dessous](/css-blend-modes/#flags)*).

##La propriété `isolation`
Lorsque vous utilisez `mix-blend-mode` votre élément sera mélangé à tous les éléments se trouvant en dessous. Mais que se passe-t-il si vous voulez que certains éléments se mélangent mais pas d'autres&nbsp;? Par exemple, avec le container `<div>` mais pas les autres éléments recouverts.

Dans ce cas, vous pouvez isoler cette `div` en utilisant la propriété `isolation`&nbsp;:

	div {
    	isolation: isolate;
    }

On crée ainsi un nouveau contexte d'empilement, et les éléments se mélangeront uniquement à l'intérieur de ce contexte.

[Cette démo](http://dev.opera.com/articles/getting-to-know-css-blend-modes/demo_blendmodes_tile.html) utilise `mix-blend-mode` et la propriété `isolate`. Nous avons appliqué `isolation` à la `<div>` qui contient l'image. Si nous n'utilisons pas la propriété `isolation`, cette `<div>` se mélangera également avec le calque situé en-dessous de de l'image. Vous pouvez voir les deux effets en utilisant la checkbox.

##background-blend-mode
<span itemprop="about" property="dc:subject">La propriété `background-blend-mode`</span> spécifie la façon dont l'élément source est supposé mélanger la couleur de son propre background et la couleur du background contextuel. S'il y a d'autres calques en-dessous de l'élément (par exemple une `section` avec un background bleu), il ne mélangera *pas* sa couleur avec celle de cet élément. Il ne mélangera ses couleurs qu'avec l'image de background et les couleurs spécifiquement désignées dans le CSS.

On pourrait par exemple l'utiliser ainsi&nbsp;:

	background-image: url(images/sample.png);
    background-color: red;
    background-blend-mode: multiply;

Si vous utilisez des background images multiples, vous pouvez appliquer respectivement des <span itemprop="about" property="dc:subject">background blend modes</span> multiples, par exemple&nbsp;:

	background-image: url(images/sample1.png), url(images/sample2.png);
    background-color: blue;
    background-blend-mode: screen, overlay;

Dans l'exemple ci-dessus, l'image `sample1.png` se verra appliquer le blend mode *screen* alors que `sample2.png` aura le blend mode *overlay*.

##Blend Modes et les autres technologies

###Les dégradés
Vous pouvez aussi utiliser tous ces modes en combinaison avec les dégradés et les masques pour créer des effets intéressants. Un des cas d'utilisation les plus prometteurs à mon avis est l'utilisation de dégradés pour les images. Par exemple l'image suivante&nbsp;:
<span itemprop="image" url="/content/images/2014/Jun/bl18.png"><figure>
{<18>}![](/content/images/2014/Jun/bl18.png)
</figure></span>

Vous pouvez voir une [démo de travail ici](http://dev.opera.com/articles/getting-to-know-css-blend-modes/demo_blendmodes_gradients.html). La démo fonctionne avec un dégradé radial transparent-à-noir (dans le cas du dégradé linéaire, on a transparent-à-jaune) sur lequel est positionnée l'image qui se voit appliquer un blend mode *multiply* avec `mix-blend-mode: multiply`. Lorsque l'utilisateur passe la souris sur l'image, on utilise `mix-blend-mode: normal` pour supprimer l'effet.

###Masques, animations et filtres
Il va sans dire que lorsqu'on utilise le masquage, le masque lui-même doit être le calque situé au-dessus de la pile. Vous devez donc vous assurer que le calque que vous souhaitez mélanger soit visible à travers le masque.

Les blend modes fonctionnent bien aussi avec les éléments animés, bien qu'ils ne soient pas eux-mêmes des propriétés animables. Dans [cette démo](http://dev.opera.com/articles/getting-to-know-css-blend-modes/demo_blendmodes_mask.html), les blend modes sont utilisés avec les <span itemprop="about" property="dc:subject">masques CSS</span> et les <span itemprop="about" property="dc:subject">animations CSS</span>. Remarquez bien qu'on a appliqué un blend mode distinct pour mélanger les textes et l'image. Vous pouvez même ajouter des <span itemprop="about" property="dc:subject">filtres CSS</span> aux images mélangées pour perfectionner encore votre design.

###Vidéo
Nous nous sommes concentrés sur les images, mais les blend modes peuvent aussi [s'appliquer aux vidéos](http://dev.opera.com/articles/getting-to-know-css-blend-modes/demo_blendmodes_video.html), avec `mix-blend-mode`. Si vous ajoutez par dessus des images ou du text mélangé, vous pouvez créer des effets complexes. 

###Blend Modes et Canvas
Les blend modes sont également disponibles dans `<canvas>` via [Canvas 2D Context API](http://www.w3.org/TR/2dcontext2/#compositing). Tout ce que vous avez à faire est de définir la propriété `globalCompositeOperation` dans le `canvas 2d context` sur le blend mode que vous voulez.

Si vous souhaitez par exemple contrôler un peu plus votre image en jouant sur son opacité, vous pouvez utiliser la propriété `globalAlpha`&nbsp;:

	var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');
    // Tout ce qui est dessiné dans ce contexte
    // se verra appliquer un “screen” blend mode :
    context.globalCompositeOperation = 'screen';
    // Les éléments dessinés auront un alpha channel de 0.7
    context.globalAlpha = 0.7;

J'ai réalisé quelques [démos de canevas](http://dev.opera.com/articles/getting-to-know-css-blend-modes/demo_blendmodes_canvas.html) utilisant les Blend Modes avec `globalCompositeOperator`. Vous pouvez également consulter [cet article](https://blogs.adobe.com/webplatform/2014/02/24/using-blend-modes-in-html-canvas/) d'Adobe qui parle de <span itemprop="about" property="dc:subject">Blend Mode dans Canvas</span>.

###Blend Modes et SVG

La spécification vous permet aussi d'ajouter des blends via CSS à l'intérieur de vos SVG.

	<svg xmlns="http://www.w3.org/2000/svg">
        <style>
            rect {
                mix-blend-mode: multiply;
            }
        </style>
        <rect x="10" y="10" width="100" height="100" rx="15" ry="15" fill="#ff0000"/>
        <rect x="40" y="40" width="100" height="100" rx="15" ry="15" fill="green"/>
    </svg>

Bien sûr, dans SVG vous pouvez aussi utiliser `feImage` et `feBlend` pour ajouter des Blend Modes, mais il est bien plus pratique de les ajouter via CSS comme montré ci-dessus.

<span id="flags"></span>

##Compatibilité navigateurs

Pour l'heure, les navigateurs basés sur Chromium ont la meilleure compatibilité. Pour permettre à CSS Blend Modes de fonctionner dans Opera, tapez *opera:flags* dans la barre d'adresse et activez l'option *Enable experimental Web Platform features* (ou plus simplement en tapant **opera://flags/#enable-experimental-web-platform-features** puis en cliquant sur activer). Pour Chrome, vous devez activer la même option en tapant **chrome://flags/#enable-experimental-web-platform-features**.

Firefox n'est pas actuellement compatible avec la propriété `isolation` mais vous pouvez vous amuser avec les autres propriétés en les cherchant avec `about:config` et en les activant. Safari devrait être compatible au moment de la sortie d'OS X Yosemite, mais vous pouvez déjà jouer avec en téléchargeant les derniers *nightlies*. IE n'est pas compatible à ce jour.

En attendant que la compatibilité navigateurs soit suffisante, si vous voulez utiliser CSS Blend Modes en production, il est préférable que ce soit comme une amélioration de designs existants et non comme une composante essentielle de votre design. Adobe tient à jour [une page de compatibilité navigateurs de blend mode](http://html.adobe.com/webplatform/graphics/blendmodes/browser-support/) très complète.

###Détection de fonctionnalité pour Blend Modes

Il est important d'utiliser Blend Modes avec l'aide de la *feature detection*. Vous pouvez détecter la compatibilité de `mix-blend-mode` et de `background-blend-mode` grâce à JavaScript&nbsp;:

	if ('CSS' in window && 'supports' in window.CSS) {
        var supportsMixBlendMode = window.CSS.supports('mix-blend-mode', 'multiply');
        var supportsBackgroundBlendMode = window.CSS.supports('background-blend-mode', 'multiply');
        var supportsIsolation = window.CSS.supports('isolation', 'isolate');
        …
    }

ce script retournera `true` si la compatibilité est détectée, et `false` sinon.

Toutefois, la solution la plus fiable reste la fonctionnalité [testProp()](http://modernizr.com/docs/#testprop) de [Modernizr](http://modernizr.com/)&nbsp;:

	var mixBlendModeSupport = Modernizr.testProp('mixBlendMode');
    var backgroundBlendModeSupport = Modernizr.testProp('backgroundBlendMode');
    var isolationSupport = Modernizr.testProp('isolation');

elle retournera `true` si la compatibilité est détectée, et `false` sinon.

Il est également possible d'utiliser la fonctionnalité `@support`&nbsp;:

	@supports(mix-blend-mode: screen) {
        …
    }

Si vous voulez vous assurer de la compatibilité pour `mix-blend-mode` et pour `background-blend-mode` vous pouvez écrire&nbsp;:

	@supports((mix-blend-mode: screen) and (background-blend-mode: screen)) {
        …
    }

###Conclusion
Les Blend Modes sont une excellente solution pour appliquer différents effets sur des éléments d'une page web, ce qui était autrefois impossible en utilisant les seules technologies du web. Il s'agit d'une nouvelle technologie, et à l'heure actuelle la compatibilité est encore très imparfaite, mais elle devrait s'améliorer rapidement. Les effets réalisables avec Blend Modes sont vraiment fantastiques, il vous sera bientôt possible de vous passer d'une application d'édition de photos pour beaucoup d'entre eux.