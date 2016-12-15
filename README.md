# Workflow

Automated workflow using [Gulp.js](http://gulpjs.com/).

## How to scaffold a project

### Clone files and folders

Clone this git repo into the new project.

```$ git clone workflow-remote-url```

Change the remote url to the new project remote url.

```
$ git remote remove origin
$ git remote add origin url-to-new-git-repo
```

### Install dependencies

Dependencies are saved in `package.json` and `bower.json`.

```
$ bower install
$ npm install
```

### Update npm dependencies

Check if packages need updating:
```npm outdated```

To update:

```
$ npm update
// or
$ npm-check -u
```

### Update Bower dependencies

Check what is installed and if outdated:

```
$ bower list
```

To update:

```
$ bower-update
```




