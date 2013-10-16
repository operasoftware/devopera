<? snippet('header') ?>
	<main class="main">
		<article role="main" class="content">
			<h1><? echo html($page->title()) ?></h1>

<? echo kirbytext($page->text()) ?>

		</article>
	</main>
<? snippet('footer') ?>