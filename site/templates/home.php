<? snippet('header') ?>
	<main class="main">
		<section>
			<h2>Articles</h2>
<? $articles = $pages->find('articles')->children()->sortBy('date', 'desc') ?>
<? foreach($articles as $article): ?>
			<article class="content">
				<h3><a href="<? echo $article->url() ?>"><? echo htmlentities($article->title(), ENT_NOQUOTES) ?></a></h3>
				<p>By <? echo $article->author() ?> at <time><? echo $article->date('j F Y') ?></time></p>
				<? echo kirbytext($article->intro()) ?>
			</article>
<? endforeach ?>
		</section>
		<section>
			<h2>Blog</h2>
<? $blog = $pages->find('blog')->children()->sortBy('date', 'desc') ?>
<? foreach($blog as $post): ?>
			<article class="content">
				<h3><a href="<? echo $post->url() ?>"><? echo htmlentities($post->title(), ENT_NOQUOTES) ?></a></h3>
				<p>By <? echo $post->author() ?> at <time><? echo $post->date('j F Y') ?></time></p>
				<? echo kirbytext($post->intro()) ?>
			</article>
<? endforeach ?>
		</section>
	</main>
<? snippet('footer') ?>