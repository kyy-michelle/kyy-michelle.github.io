## Blog

Hooray! My website revamp is underway - here's a blog of some notes I've taken along the way. The code for this site can be found [on github](https://github.com/kyymichelle/kyymichelle.github.io/tree/dev)

#### Why Vue and Nuxt
Without [rehashing too much](https://vuejs.org/v2/guide/index.html), I found that Vue's lightweight and approachable nature to be perfect for updating my site. It is also a framework I've been meaning to learn, having had some previous experience with React and AngularJS. 

With Nuxt, its clear file structure really helps speed up getting started on a Vue project. The ability for it to statically generate a site right out of the box is also a super useful bonus. Once I'm finished, I can simply generate this site into /docs folder of my github page.

#### ESLint
Ran into some ESLint formatting issues with my VSCode setup, the fix was to use workspace settings instead of setting a global `editor.formatOnSave`. [Link to article](https://medium.com/@gogl.alex/how-to-properly-set-up-eslint-with-prettier-for-vue-or-nuxt-in-vscode-e42532099a9c)

#### Markdown
For simplicity in writing and displaying this blog as well as other content pages, I wanted to use Markdown and came across [this handy example](https://github.com/davidroyer/nuxt-markdown-example). Even though it always gives a warning on compilation, the use of `v-html` in this case is fine because there will only ever be static content rendered.

#### Asset paths
Had a bit of a slip up with asset paths. Was trying to add a background-image inside a style block like so `background-image: url('~/images/bg.jpg')`. Turns out `~` are used [as module requests](https://vuejs-templates.github.io/webpack/static.html), and so I should have used a root relative path instead.

#### Design
For the design I wanted to retain a similar theme, but improve upon the layout by making the main content container wider and by breaking up the content into separate pages. Transitions as the user scrolls down the page (shown in the screenshot of the old theme below) is also something I'd like to keep, but for now this is low priority.

![Old website screenshot](/images/blog/site-old.jpg)

#### Customising Bootstrap
To start theming the site, one of the first things I did was to customise the Bootstrap SASS variables. To do that, I followed [this guide](https://bootstrap-vue.js.org/docs/reference/theming/) at BootstrapVue and created a `custom.scss` file to import into `main.scss`.

Turns out the `boostrap-vue/nuxt` module automatically imports Bootstrap SCSS. So for a good while I had been importing Bootstrap twice - once automatically and the second time so that I could overwrite the theme variables. Something to be mindful of next time is to [disable the automatic import](https://bootstrap-vue.js.org/docs/#nuxtjs-module) of the Bootstrap/BoostrapVue css.

#### Fonts
Whilst tidying up the theme, I noticed that the page fonts were fairly difficult to read (probably because I wasn't wearing glasses). Changing the paragraph and list fonts from Raleway to Open Sans made a huge difference to its readability, below is a screenshot of the page before the update.

![Screenshot before font update](/images/blog/site-fonts.jpg)

#### Deploy
Originally I planned to deploy from the `/docs` folder in the master branch, but it turns out that my current repository naming scheme [doesn't allow this](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages#publishing-your-github-pages-site-from-a-docs-folder-on-your-master-branch). Instead I decided to split the project into different branches like below.

| Branch           | Description |
| ---------------- | ------------------------------------------------------------- |
| [/master](https://github.com/kyymichelle/kyymichelle.github.io) | Branch where the Github Page is deployed from |
| [/dev](https://github.com/kyymichelle/kyymichelle.github.io/tree/dev) | Site Vue/Nuxt codebase |
| [/dev-deploy](https://github.com/kyymichelle/kyymichelle.github.io/tree/dev-deploy) | Branch to merge site generated from /dev into /master |

\
So deploying changes would be something like this: update /dev, generate static site, change branch to /dev-deploy, overwrite branch with content of dist folder, commit and finally merge into master. 
