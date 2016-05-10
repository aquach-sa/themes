## SecureAuth Themes v9.0.0

Themes are built with [AngularJS](https://angularjs.org/), [SASS](http://sass-lang.com/), [BEM](https://en.bem.info/), [Bootstrap 3](http://getbootstrap.com/), and [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5). Please get familiar with each of these front end framwork or syntax before you make any major modification to the files. 

### Getting Started

If you're comfortable getting up and running from a git clone, this method is for you.

If you clone the GitHub repository, you will need to build a number of assets using Gulp.

The master branch contains the latest release. If you need the older version please select the correct tag.

### Install NodeJS(v5.0.0 minimum)

Make sure you always get the latest version of [NodeJS](https://nodejs.org/en/)

### Install npm packages

```
npm install
```

### Run Gulp command for tasks

Gulp help to list all available tasks and it description

```
gulp help
```

### Source Files

All source file are within the `Themes` folder.

Themes within `dist` are pre-built and ready for production.

### HTML 

HTML are spread accross many sub folder within two main folder for each theme. The HTML are heavily using Angular syntax. Be cautious when removing any `ng-` or `{{ }}` syntax from the HTML files. 

```
- 2016 Dark
  - directives
  - views

- 2016 Light
  - directives
  - views
```

### CSS

CSS file are utilizing SASS markup. Modify only the source `app.scss` file when using Gulp.

### JS

All JS files are written base on Angular MVC methodology

1. directives - modular components that make up the view
2. services - utilities that parse the DOM to generate the HTML for Angular templating
3. views - state view and overall layout

### Creating a new theme

Utilize the gulp task in this order

1. `theme:boilerplate`
2. `theme:view`
3. `theme:service`
4. `theme:directive`