# Contributing to Dev.Opera

We’re looking forward to your [Dev.Opera](https://http://arc.opera.com/pub/opera/) contributions!

- We pay a rate of $350 for a **2000 word article,** so ideally you should try to stick to that word count. Note that we only pay this rate if the article is actually published on Dev.Opera. Also note that we _do not_ pay this rate for article translations.
- We’re also happy to take in **code improvements** to the templates, styles and scripts powering Dev.Opera.

## Article submissions

If you have an idea for an article, [file an issue](https://github.com/xaxadmim/devopera/issues/) with an `article idea` label, where we can discuss further details.

It’s important that you write your article in [Markdown](http://en.wikipedia.org/wiki/Markdown) format. Once the article is finished, create a new folder under [devopera/articles/_drafts](https://github.com/xaxadmim/devopera/tree/master/), place the article and all its external resources (images, etc.) inside, and do a pull request.

We’ll then review your submission, possibly request you to make some changes, and once the article is found to be of sufficient quality, we’ll publish it on Dev.Opera.

## Translations

We welcome translations of published articles. To make this process as smooth as possible, we suggest you keep the following points in mind when submitting a translation:

- make your translation in Markdown, just like the original article file
- give your translation the same file name as the original article and place it in `/xx/_posts` under [devopera/articles/](https://github.com/xaxadmim/devopera/tree/master/articles), where `xx` is the relevant [ISO 639-1 two-letter language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), e.g. [devopera/articles/fr/_posts/2010-02-11-introduction-html5-video.md](https://github.com/xaxadmim/devopera/blob/master/articles/fr/_posts/2010-02-11-introduction-html5-video.md)
- translate the `title` and `intro` fields
- leave the other fields untouched
- add a `language: xx` field, where `xx` is the relevant ISO 639-1 two-letter language code, e.g. `language: ja`
- add a `translator:` field with the translator’s full name, e.g. `translator: Andreas Bovens`

## Code improvements

If you want to file a bug report, or have an idea for an improvement to the site, [file an issue](https://github.com/xaxadmim/devopera/issues/new) with an appropriate label.

If you want to fix something yourself, fork the [devopera](https://github.com/xaxadmim/devopera/) repo, apply your fix, and do a pull request.

## Contact us

If you have any questions about the process, please ask [@odevrel](https://twitter.com/odevrel) or contact andreasbATopera.com.
