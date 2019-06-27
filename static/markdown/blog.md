Woohoo! My website revamp is underway - here's some notes I've taken along the way. The github project can be found [here](https://github.com/kyymichelle/kyymichelle.github.io)

#### Why Vue and Nuxt
Without [rehashing too much](https://vuejs.org/v2/guide/index.html), I found that Vue's lightweight and approachable nature to be perfect for updating my site. It is also a framework I've been meaning to learn, having had some previous experience with React and AngularJS. 

With Nuxt, its clear file structure really helps speed up getting started on a Vue project. The ability for it to statically generate a site right out of the box is also a super useful bonus. Once I'm finished, I can simply generate this site into /docs folder of my github page.

#### ESLint
Ran into some ESLint formatting issues with my VSCode setup, the fix was to use workspace settings instead of setting a global `editor.formatOnSave`. [Link to article](https://medium.com/@gogl.alex/how-to-properly-set-up-eslint-with-prettier-for-vue-or-nuxt-in-vscode-e42532099a9c)

#### Markdown
For simplicity in writing and displaying this blog as well as other content pages, I wanted to use Markdown and came across [this handy example](https://github.com/davidroyer/nuxt-markdown-example). Even though it always gives a warning on compilation, the use of `v-html` in this case is fine because there will only ever be static content.

#### Asset paths
Had a bit of a slip up with asset paths. Was trying to add a background-image inside a style block like so `background-image: url('~/images/bg.jpg')`. Turns out `~` are used [as module requests](https://vuejs-templates.github.io/webpack/static.html), and so I should have used a root relative path instead.
