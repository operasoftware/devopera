Title: Améliorez vos formulaires avec HTML5!
----
Date: 2010-06-17 06:49:49
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

<p>
	L&#39;<abbr title="HyperText Markup Language">HTML</abbr> n&#39;a pas vraiment été mis à jour depuis la sortie d&#39;<abbr>HTML</abbr> version 4 qui remonte à 1998. Cependant, le <a href="http://www.whatwg.org"><abbr title="Web Hypertext Application Technology Working Group">groupe de travail WHATWG</abbr></a> a travaillé sur l&#39;HTML depuis 2004 puis transmis au W3C qui prend la forme des <a href="http://dev.w3.org/html5/spec/Overview.html">spécifications HTML5 du W3C</a>. Cet article présente certaines des nouvelles fonctionnalités de la proposition du chapitre sur les formulaires d&#39;HTML5: <a href="http://www.whatwg.org/specs/web-forms/current-work/">Formulaires Web 2</a>. Opera supporte les Formulaires Web 2 depuis la Version 9.5 et les suivantes. Pour le tester, <a href="http://www.opera.com/browser">téléchargez la dernières version d&#39;Opera</a>.
</p>

<h2><code>autofocus</code> et omission d&#39;attributs</h2>

<p>Les nouveaux Formulaires Web vous permettent de faire de la validation et un nombre d&#39;autres fonctionnalités d&#39;une manière plus déclarative, simplifiant l&#39;édition. Prenons en exemple le code de démonstration suivant:</p>

<pre id="example-autofocus-wrong">&lt;form action=&quot;&quot; method=&quot;get&quot;&gt;<code>
 &lt;p&gt;&lt;label&gt;Search: &lt;input name=search type=&quot;text&quot; id=&quot;search&quot;&gt;&lt;/label&gt;&lt;/p&gt;
 &lt;script&gt; document.getElementById(&#39;search&#39;).focus() &lt;/script&gt;
 <span class="comment">&lt;!-- the rest of the form --&gt;</span>
&lt;/form&gt;</code></pre>

<p>Ceci peut être réécrit en utilisant la nouvelle fonctionnalité du formulaire comme ceci:</p>

<pre id="example-autofocus-right"><code>&lt;form&gt;
 &lt;p&gt;&lt;label&gt;Search: &lt;input name=search <span class="m">autofocus</span>&gt;&lt;/label&gt;&lt;/p&gt;
  <span class="comment">&lt;!-- the rest of the form --&gt;</span>
&lt;/form&gt;</code></pre>

<p>Une partie du code a été retiré de l&#39;exemple et un nouvel attribut, <code class="mattr">autofocus</code>, a été ajouté. L&#39;attribut <a href="http://www.whatwg.org/specs/web-forms/current-work/#the-autofocus"><code class="mattr">autofocus</code></a> a efficament retiré le besoin de l&#39;élément <code class="mtag">script</code> et de l&#39;attribut <code class="mattr">id</code> de l&#39;<code class="mtag">input</code> qui était utilisé par le script. L&#39;attribut <code class="mattr">method</code> de l&#39;élément <code class="mtag">form</code> peut être omis, car le formulaire fera une requête <code>GET</code> par défaut. Similairement, les contrôles <code class="mtag">input</code> sont de type <code class="mvalue">text</code> par défaut. Conformément aux Formulaires Web 2, vous pouvez aussi omettre l&#39;attribut <code class="mattr">action</code> quand il est définit comme chaîne de caractères vide. En effet, cela vous donnera le même résultat.</p>

<h2>Validation de formulaire</h2>
<p>De nos jours, les développeurs web utilisent des scripts astucieux pour effectuer la validation côté client. Bientôt vous pourrez simplement écrire la chose suivante:</p>

<pre id="example-validation"><code>&lt;form&gt;
 &lt;p&gt;&lt;label&gt;Name: &lt;input name=name <span class="m mattr">required</span>&gt;&lt;/label&gt;&lt;/p&gt;
 &lt;p&gt;&lt;label&gt;E-mail: &lt;input name=email <span class="m">type=<span class="mvalue">email</span> required</span>&gt;&lt;/label&gt;&lt;/p&gt;
 &lt;p&gt;&lt;label&gt;URL: &lt;input name=url <span class="m">type=url</span>&gt;&lt;/label&gt;&lt;/p&gt;
 &lt;p&gt;&lt;label&gt;Comment: &lt;textarea name=comment <span class="m mattr">required</span>&gt;&lt;/textarea&gt;&lt;/label&gt;&lt;/p&gt;
 &lt;p&gt;&lt;input type=submit value=React!&gt;&lt;/p&gt;
&lt;/form&gt;</code></pre>

<p>J&#39;irai jusqu&#39;à dire, que c&#39;est presque aussi lisible que de l&#39;anglais! Quand l&#39;utilisateur tente de soumettre le formulaire, le navigateur vérifie si toutes les conditions sont remplies et si c&#39;est le cas, il soumet le formulaire, sinon il affiche un message d&#39;erreur à l&#39;utilisateur. Évidemment, vous devez toujours avoir une validation côté serveur, mais dans le cas où le navigateur supporte les nouveaux formulaires, cela pourrait bien éviter à votre utilisateur quelques va-et-vient. C&#39;est meilleur pour l&#39;ergonomie et votre bande passante.</p>

<p>Ce que j&#39;ai présenté dans l&#39;exemple ci-dessus est une partie des nouveaux contrôles: <a href="http://www.whatwg.org/specs/web-forms/current-work/#email">email</a> et <code class="mvalue"><a href="http://www.whatwg.org/specs/web-forms/current-work/#url">url</a></code>. Et également un nouvel attribut disponible à tous les contrôles du formulaire: <a href="http://www.whatwg.org/specs/web-forms/current-work/#the-required"><code>required</code></a>. En plus de ceux-là, les Formulaires Web 2 incluent également des contrôles pour les dates, l&#39;heure et les nombres.</p>

<h2>Mise en forme des contrôles</h2>
<p>Si vous voulez mettre en forme un contrôle requis (<code>&lt;input required&gt;</code>), ceci est plutôt trivial en utilisant certaines de nouvelles pseudo-classes:</p>

<pre>input:required { background:yellow }</pre>

<p>De la même manière, pour les contrôles désactivés, les cases à cocher cochées, le bouton de soumission par défaut, les contrôles en lecture seule, etc:</p>

<pre><code>input:disabled { ... }
input:checked + label { ... }
input[type=button]:default { ... }
input:read-only { ... }</code></pre>

<p>
	<a href="http://dev.opera.com/articles/view/improve-your-forms-using-html5/example.html">Cet exemple de formulaire</a> montre ces fonctionnalités en action.
</p>
