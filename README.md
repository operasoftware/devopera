# Dev.Opera

Repository for source code of new Dev.Opera

## How to setup environment

1. Install Jekyll by running `gem install jekyll`.
2. Install Sass by running `gem install sass`.
3. Install [Node.js](http://nodejs.org) with default options.
4. Checkout project to any folder, for example `dev.opera`.
5. Run `npm install` inside
6. Run `grunt`

There are two modes of development available:

1. If you're developing some feature or article, run `grunt watch` and all your changes will be generated automatically every time you save any Jekyll template or Sass file. As quick as possible. To stop watching changes press `Ctrl C`.

2. If you need to build production version of Dev.Opera, run `grunt` and everything will be not just builded, but also compressed. Just once.

To launch Jekyll server open _another_ console instance or tab and run `jekyll serve`.