# Dev.Opera

Repository for source code of new Dev.Opera

## How to setup environment

1. Install Jekyll by running `gem install jekyll`.
2. Install Sass by running `gem install sass`.
3. Install [Node.js](http://nodejs.org) with default options.
4. Checkout project to any folder, for example `dev.opera`.
5. Run `npm install` inside
6. Run `grunt`

Now you're ready to develop Dev.Opera: all changes inside `dev.opera` are now tracked by Grunt. This will automatically compile all `SCSS` styles to `CSS` and run `jekyll build` when needed. Once you're done with development, just close current console instance or press `Ctrl C` to stop watcher.

To launch Jekyll server open _another_ console instance (tab) and run `jekyll serve`.