# Michelle Yeung's website

| Branch           | Description |
| ---------------- | ------------------------------------------------------------- |
| [/master](https://github.com/kyymichelle/kyymichelle.github.io) | Branch where the Github Page is deployed from |
| [/dev](https://github.com/kyymichelle/kyymichelle.github.io/tree/dev) | Site Vue/Nuxt codebase |
| [/dev-deploy](https://github.com/kyymichelle/kyymichelle.github.io/tree/dev-deploy) | Branch to merge site generated from /dev into /master |

To install and run, please make sure [yarn is installed](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
```bash
$ yarn install
$ yarn run dev
```

To generate static site into /dist, run the following
```bash
$ yarn run generate
```
To deploy, replace the master branch with the content of /dist  
