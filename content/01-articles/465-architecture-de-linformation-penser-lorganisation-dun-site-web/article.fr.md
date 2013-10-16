Title: Architecture de l’information – Penser l’organisation d’un site web
----
Date: 2011-08-04 08:20:00
----
Lang: fr
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<h2>Introduction</h2>
<p>De manière générale, réfléchir à l’organisation d’un site web (ou de n’importe quel projet) peut être une étape un peu stressante. Tout le monde a un avis sur la façon dont doit être construit le site, et souvent les opinions divergent entre elles. Votre objectif numéro un pour n’importe quel site doit être de concevoir quelque chose d’utile pour les personnes qui vont l’utiliser. Peu importe ce que dit votre chef ou l’informaticien au bout du couloir, peu importe ce que vous pensez même. Au bout du compte, seul compte l’avis des gens pour qui vous faites le site.</p>

<p>Cet article va exposer les premières étapes de conception du site, et une discipline qu’on appelle généralement Architecture de l’Information (IA en anglais). Ces étapes impliquent de définir votre audience cible, de réfléchir aux informations et aux services que ces personnes recherchent sur le web, et d’organiser tout ça. Nous étudierons l’ensemble des informations que votre site doit fournir, la façon de les scinder en différentes parties et la façon de relier ces parties entre elles. Le sommaire est le suivant :</p>

<ul>
<li><a href="#siteplanning">Vous devez organiser le site que vous créez</a>
<ul>
<li><a href="#introducingtheidea">Présentation des &quot;Beadochons&quot;</a></li>
<li><a href="#sitemaps">Et maintenant ?  Dessiner un plan du site</a></li>
<li><a href="#namingpages">Nommer les pages</a></li>
<li><a href="#addingdetail">Ajouter des détails</a></li>
</ul>
</li>
<li><a href="#summary">Résumé</a></li>
<li><a href="#exercises">Exercices</a></li>
</ul>

<h2 id="siteplanning">Vous devez organiser le site que vous créez</h2>
<p>Vous arrivez sur un projet de site étrange dans lequel vous pouvez vous lancer sans vous poser de question, mais ceci est, de loin, une exception et non la norme. Nous allons imaginer un groupe appelé les Beadochons et essayer de les aider à travailler sur les premières étapes de conception de leur site web. Nous allons parler avec eux, identifier leurs objectifs et ce qu’ils souhaitent avoir sur leur site. Ensuite nous nous lancerons et nous commencerons à travailler sur une structure pour ces informations.</p>

<h3 id="introducingtheidea">Présentation des &quot;Beadochons&quot;</h3>
<p>Les Beadochons ont un problème. Ils sont très connus à Lamotte-Beuvron, grâce à leurs reprises des Beatles, mais ils ont besoin d’accroître leur notoriété pour leur prochaine tournée en Europe cet été (<a href="#traduction">voir note de traduction</a>). Ils ont des concerts prévus en France et en Belgique, mais ils sont pratiquement inconnus en dehors de leur ville d’origine. Si seulement il était possible, par un moyen technologique, d’approcher un grand nombre de fans des Beatles en dépensant relativement peu d’argent.</p>

<p>Heureusement pour eux, il y a quelque chose qui s’appelle le World Wide Web, et ils décident rapidement que ce dont ils ont besoin, c’est de lancer un site web. Ils ont besoin d’un endroit pour faire la promo de leurs dates de concerts, se constituer une base de fans dans d’autres villes, et se faire connaître. Vous allez travailler autour de leurs idées avec eux et voir si vous pouvez dessiner un plan pour leur site.</p>

<p>Vous convenez d’un rendez-vous avec vos nouveaux clients pour plancher sur leurs besoins, et pour parler du planning et du budget. Vous commencez par suggérer de discuter des buts et des objectifs du site en vue d’avoir une idée de ce qu’ils veulent. Qu’est ce qu’ils espèrent obtenir grâce à leur présence en ligne ?</p>

<p>Ils commencent à parler de leur prochaine tournée, et comment ils veulent faire passer le mot aux fans des Beatles dans les villes où ils ont prévu de se rendre. On est en février, et ils ont prévu le lancement de leur tournée dans cinq mois.</p>

<p>Oui mais, attendez une minute. Un site web seul ne va pas générer son propre trafic et se faire connaître tout seul. Vous déduisez donc de la conversation que le but principal du site est de fournir un lieu d’accueil pour les fans en ligne ; un endroit où ils peuvent se tenir informés des dernières nouvelles, des dates et des lieux de tournées. Grâce aux fans (bouche-à-oreille) et à d’autres événements promotionnels, de nouvelles personnes visiteront le site web où elles pourront télécharger des extraits de chansons, regarder des photos du groupe et trouver où elles pourront les voir en concert.</p>

<p>Raul McCoffee, l’agent du groupe, souligne qu’il serait bon d’augmenter les recettes pour la tournée grâce à la vente de CDs et de produits dérivés. Vous vous rapprochez du groupe et vous dessinez un schéma rapide de ce que peut vouloir trouver un visiteur sur le site. C’est juste quelques idées jetées comme ça sur le papier, sans véritable structure.</p>

<p>Il y a deux sortes de personnes qui visiteront le site : ceux qui connaissent déjà les Beadochons et qui les aiment, c’est-à-dire ceux qui sont fans, et ceux qui ne le sont pas encore. Vous devez satisfaire chacun de ces deux groupes de manières différentes. Vous devez convaincre les fans potentiels, tandis que les fans veulent assouvir leur passion, c’est-à-dire discuter. Quel genre d’informations chacun de ces groupes va-t-il chercher ? La figure 1 vous en donne un aperçu : c’est le genre de schéma que vous aurez à faire à cette étape des futurs projets de site web. À partir de cela, vous ferez la liste des pages nécessaires, et des liens entre elles.</p>

<img alt="un croquis du contenu du site" src="http://forum-test.oslo.osa/kirby/content/articles/465-6-architecture-de-linformation-penser-lorganisation-dun-site-web/article6_1.gif" />

<p class="comment">Figure 1 : ce que recherchent les visiteurs du site</p>

<p>Vous convenez d’un budget et de lancer le site dans un mois. Vous promettez de revenir vers eux dans quelques jours avec du concret sur la direction que vous proposez de prendre.</p>

<h3 id="sitemaps">Et maintenant ?  Dessiner un plan du site</h3>

<p>La plupart des personnes improvisera un plan de site à ce stade, ça ressemble à un organigramme. C’est souvent un dessin assez élémentaire montrant simplement le nom de chaque page et comment elles s’organisent dans la structure générale du site. Personnellement, j’aime bien rajouter des détails et parler de l’objectif et du contenu de chaque page. Par exemple, on peut appeler une page « Accueil », mais qu’est ce qu’une page d’accueil/ que met-on dedans ? Est-ce que c’est un pauvre message « bienvenue sur notre site » (beurk !) ou est-ce que c’est une page plus évoluée contenant des nouvelles et des photos alléchantes ? Prenez quelques minutes pour imaginer à quoi les pages du schéma ci-dessus peuvent ressembler et ce qu’elles peuvent contenir. Essayez de dessiner votre propre plan de site avant de passer à la parte suivante.</p>

<p>Maintenant prenons les choses dans l’ordre et revenons à l’espèce d’organigramme que j’ai mentionné plus haut. La figure 2 montre ma tentative d’organisation du site à partir de la synthèse d’idées précédentes :</p>

<img alt="la première itération de la sctructure du site" src="http://forum-test.oslo.osa/kirby/content/articles/465-6-architecture-de-linformation-penser-lorganisation-dun-site-web/article6_2.gif" />

<p class="comment">Figure 2 : première itération de la structure du site. <span style="font-size:80%;"><a href="figure2_longdesc.html">Description de la figure 2</a></span></p>

<p>Cela définit absolument toutes les pages dont nous avons besoin, mais sans réel regroupement. C’est juste un gros tas de pages en vrac pour l’instant, et jusqu&#39;à maintenant je n’avais pas vraiment réfléchi au plan de nommage. J’ai fait une nouvelle passe pour essayer de répartir les pages en groupes légèrement plus grands. La figure 3 montre le résultat :</p>

<img alt="regroupement des pages du site de façon plus logique" src="http://forum-test.oslo.osa/kirby/content/articles/465-6-architecture-de-linformation-penser-lorganisation-dun-site-web/article6_3.gif" />

<p class="comment">Figure 3 : structure du site modifiée. <span style="font-size:80%;"><a href="figure3_longdesc.html">Description de la figure 3</a></span></p>

<p>La structure modifiée du site apporte un certain nombre de choses. La page « infos » permet aux Beadochons de publier tout ce qu’ils veulent partager avec leurs fans. Même après que leur tournée estivale sera terminée, et que la page « concerts » ne sera plus pertinente, ils pourront publier des choses. L’utilisation d’un format de type blog ici permettra aux fans de commenter dans leur contexte les différentes histoires, et aidera à construire une communauté en ligne autour des Beadochons. Les infos et les concerts susciteront probablement le plus de discussions, d’où leur regroupement. De plus, le mot « infos » est un mot plus simple, plus général, que les gens identifieront plus rapidement s’ils parcourent la page à la recherche d’informations.</p>


<p>Notre nouvelle page “à propos des Beadochons” regroupe aussi bien les biographies des membres du groupe que leurs photos. Ceci nous donne un point de départ pour les biographies individuelles des membres. En suivant le raisonnement déjà utilisé ci-dessus, « à propos » est une expression courante sur beaucoup de sites web. À chaque fois qu’un visiteur veut en savoir plus à propos d’une entreprise, d’un produit ou d’une personne, il recherche habituellement un lien « à propos ».</p>


<p>Enfin, le terme « discographie » est un peu trop technique. Il est possible que ce terme soit moins compréhensible que « musique ». Il permet aussi d’ajouter d’autres contenus à la page : sources d’inspiration, histoire d’une chanson en particulier… vous voyez l’idée. Je pense qu’on est prêts. Quand j’aurai parlé un peu du nommage des pages, juste ce qu’il faut, nous pourrons détailler un peu plus chaque page.</p>

<h3 id="namingpages">Nommer les pages</h3>

<p>Le nommage des pages peut être une des décisions les plus cruciales que vous aurez à prendre pour la conception d’un site. Non seulement c’est important pour que vos visiteurs trouvent leur chemin à l’intérieur du site, mais c’est aussi ce qui déterminera la facilité de trouver votre site grâce à un moteur de recherche (vous trouverez différentes mentions de l’optimisation du référencement tout au long de cet exposé).</p>


<p>En général, les moteurs de recherches scrutent le contenu de la page, son URL, et le texte de tous les liens qui pointent vers elle pour déterminer son importance. Des noms et des URLs pertinents pour vos pages inciteront quiconque faisant un lien vers vos pages à utiliser des descriptions judicieuses.</p>


<p>Prenons un exemple. Supposons  que vous êtes un constructeur automobile, et que vous avez un modèle qui s’appelle « La Flèche ».  Vous avez un site pour promouvoir votre voiture, et une des pages énumère ses caractéristiques. Nommerez-vous cette page « caractéristiques », « données constructeurs », « caractéristiques de la flèche » ou « le clinquant, c’est ici » ? Je pense que « caractéristiques de La Flèche » est le meilleur choix dans cette liste. C’est spécifique au contenu de la page, il y a des chances pour que le titre apparaissent en haut de page et qu’il soit bien visible (c’est bon pour l’indexation par les moteurs de recherches) et vous pourrez peut-être le faire correspondre à l’URL (quelque chose comme www.constructeur.com/caractéristiques-de-la-flèche/).</p>
<h3 id="addingdetail">Ajouter des détails</h3>

<p>Vous n’avez pas besoin de tout fixer pour l’instant, mais vous devez au moins fournir une brève description de ce que vous avez en tête pour chaque page. Une fois que vous avez la structure de votre site, numérotez chaque page et donnez-en une brève description, comme je l’ai fait dans la figure 4 pour la page d’accueil (vous aurez l’occasion de le faire pour les autres pages dans un des exercices à la fin de l’article).</p>

<img alt="détails de la page d’accueil" src="http://forum-test.oslo.osa/kirby/content/articles/465-6-architecture-de-linformation-penser-lorganisation-dun-site-web/article6_4.gif" />

<p class="comment">Figure 4 : détails de la page d’accueil. <span style="font-size:80%;"><a href="figure4_longdesc.html">Description de la figure 4</a></span></p>


<p>Voilà le niveau de détail que vous devrez atteindre à ce stade. Vous n’avez pas besoin de décrire les fonctionnalités des pages, la technologie que vous allez utiliser pour les construire, ni leur mise en page de façon précise. Décrivez juste ce que, globalement, vous avez en tête. Votre but est de transmettre ce que vous pensez à votre client et de vous forcer à bien réfléchir.</p>


<p>Il n’est pas rare à ce stade de se rendre compte que vous avez trop de pages, et que vous n’arriverez jamais à trouver du contenu pour toutes. Vous pouvez devenir dingue à créer une hiérarchie de pages. Par exemple, si chaque membre du groupe voulait juste publier un paragraphe sur lui, ce ne serait pas nécessaire de créer une page de biographie séparée pour chacun. Tout pourrait être regroupé en une seule page.</p>

<h2 id="summary">Résumé</h2>

<p>Cet article a considéré le site web dans son ensemble, et a montré la façon de réfléchir à sa structure. L’article suivant va descendre à un niveau plus fin, la page, et il montrera ce qui fait un bon site web : quelles fonctionnalités inclure et où les inclure. Ensuite, les articles 8, 9 et 10 examineront la conception visuelle d’une page. En résumé, cela se fait en trois étapes logiques (vérifier chaque étape avec le client pour être sûr qu’il est satisfait) : </p>

<ol>
<li>Premièrement vous décidez du contenu du site, et de la façon dont vous structurez ce contenu en pages. </li>

<li>Ensuite vous décidez des fonctionnalités qui seront effectivement utilisées sur le site. </li>

<li>Enfin, dernière étape avant de démarrer réellement et coder le site, vous faites la conception graphique (la mise en page, le jeu de couleurs, ...).</li>
</ol>


<h2 id="exercises">Exercices</h2>
<ul>
<li>Revenez à la figure 1 et essayez de faire la même chose pour un site sur une voiture (prenez une voiture réelle ou imaginaire).
<ul>
<li>Qu’est ce que les visiteurs du site veulent savoir ?</li>
<li>Y a-t-il quelque chose sur les sites de voitures existants qui vous semble essentiel ? Superflu ?</li></ul></li>
<li>À partir du schéma obtenu, essayez d’organiser l’information. Quels regroupements de pages sont les plus sensés ?</li>
<li>Une autre tâche qui peut parfois être utile quand on conçoit un site est de regarder la concurrence. Faites une recherche sur les sites des groupes de musique (encore mieux, les groupes-hommages), et regardez ce qu’ils proposent. Avons-nous oublié quelque chose ?</li>
<li>Regardez la figure 4 et essayez de faire la même chose pour les autres pages du site que j’ai identifiées.</li>
</ul>

<h2>À propos de l’auteur</h2>

<img class="right" alt="Photo de l&#39;auteur de l&#39;article original : Jonathan Lane" src="/articles/view/6-information-architecture-planning-o/Jonlane.jpg" />

<p>Jonathan Lane est le president de <a href="http://industryinteractive.net/">Industry Interactive</a>, une société de développement de sites et d’application web située sur Mayne Island en Colombie Britannique (Canada). Il a débuté dans le développement en travaillant pour l’Université de Lethbridge, au Centre de Re-Développement des Compétences, en tant que coordinateur de leurs projets web pendant de nombreuses années.</p>

<p>Il blogue sur <a href="http://www.flyingtroll.com/">Flyingtroll</a> et il développe actuellement <a href="http://www.mailmanagr.com/">Mailmanagr</a>, une interface e-mail pour l’application de gestion de projet Basecamp</p>

<h2 id="traduction">Note de traduction</h2>
<p>Pourquoi les Beadochons et Lamotte-Beuvron ? Dans l&#39;article original, le groupe s&#39;appelle &quot;The Dung Beatles&quot;, ce qui signifie &quot;les bousiers&quot;. C&#39;est un groupe qui existe vraiment (plusieurs groupes différents existent sous ce nom, semble-t-il, d&#39;après une recherche sur le Web), il fallait donc trouver un groupe équivalent existant, d&#39;où &quot;les Beadochons&quot; (avec &quot;ea&quot; important pour l&#39;analogie), nom sous lequel <a href="http://fr.wikipedia.org/wiki/Les_Bidochons" title="lien vers l&#39;article les Bidochons sur Wikipedia">les Bidochons</a> ont sorti un disque de reprises parodiant les Beatles.</p>

<p>Concernant <a href="http://fr.wikipedia.org/wiki/Lamotte-Beuvron" title="lien vers l&#39;article Lamotte-Beuvron sur Wikipedia">Lamotte-Beuvron</a>, l&#39;article original mentionne <a href="http://fr.wikipedia.org/wiki/Moose_Jaw" title="lien vers l&#39;article Moose Jaw sur Wikipedia">Moose Jaw</a>, qui est une ville canadienne connue comme lieu de détente et pour ses attractions touristiques. Lamotte-Beuvron est proche d&#39;un parc d&#39;attraction, et est parfois utilisée comme exemple, certes de manière plutôt péjorative. Enfin, c&#39;est aussi un clin d&#39;oeil aux origines proches des deux traducteurs.</p>
