<? snippet('header') ?>
	<main class="main">
		<article role="main" class="content">
			<h1><? echo html($page->title()) ?></h1>
			<p>By <? echo $page->author() ?> at <time><? echo $page->date('j F Y') ?></time></p>

<? echo kirbytext($page->text()) ?>

			<p>Tags:
<? foreach(str::split($page->tags()) as $tag): ?>
				<a href="<? echo url('/tag:' . urlencode($tag)) ?>"><? echo $tag ?></a>
<? endforeach ?>
			</p>
		</article>
	</main>
<? snippet('footer') ?>