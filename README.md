# Michelle Yeung's website

To install and run, please make sure [yarn is installed](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
```bash
$ yarn install
$ yarn run dev
```

To generate static site into /dist, run the following
```bash
$ yarn run generate
```
To deploy, replace the /docs folder on the master branch with the content of /dist
