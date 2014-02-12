# Dev.Opera

Repository for source code of new Dev.Opera

## How to setup environment

1. Install Jekyll, Sass and all needed gems by running `gem install jekyll sass kramdown stringex`.
2. Download and install [Node.js](http://nodejs.org) with default installer options.
3. Clone project by running `git clone git@github.com:operasoftware/devopera.git`
4. Run `npm install` inside `devopera` folder
5. Run `npm install grunt-cli -g` to install Grunt globally
6. Run `grunt` to build Dev.Opera inside `_site` folder

Please install [EditorConfig](http://editorconfig.org/#download) plugin for your editor to keep code style declared in [.editorconfig](.editorconfig) file.

There are two modes of development available:

1. If you're developing some feature or article, run `grunt watch` and all your changes will be generated automatically every time you save any Jekyll template or Sass file. As quick as possible. To stop watching changes press `Ctrl C`.
	- If you’ve just saved any of `styles/*.scss` files, watcher will compile and copy styles to `_site/styles` folder in a few moments without full build process.
	- If you’ve saved any of `.md` or `.html` files, compilation could take up to 60 seconds, which is sad but there’s nothing we can do.
	- Please file an issue if you need the same quick watcher for anything else: scripts, images, etc.
2. If you need to build production version of Dev.Opera, run `grunt` and everything will be not just builded inside `_site` folder, but also compressed and optimized. Just once.

## Notes

- All instructions are for Unix (OS X, Linux, etc.) because Jekyll is not compatible with Windows.
- You may require write access for all commands mentioned above. Type `sudo`, space and command if needed.
- To launch Jekyll server open _another_ console instance or tab and run `jekyll serve`.
- If you have error running `grunt watch` try increase file number limit by `ulimit -n 10000` command