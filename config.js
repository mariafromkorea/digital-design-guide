module.exports = {
  paths: {
    sass: ['scss/*.scss', 'scss/**/*.scss'],
    css: './css',
    files: ['./*.php', 'templates/*.php'],
    theme: './*.info',
    js: 'js/*.js',
    drupalCustomModule: process.cwd().slice(0, process.cwd().indexOf('sites/all/themes')) + 'sites/all/modules/custom/**/**/*.js',
    img: 'images/',
    imgmin: 'imagemin/*.{jpg,png,gif,svg}',
    maps: './maps'
  },
  gulpLoadPlugins: {
    lazy: false,
    scope: ['dependencies', 'devDependencies', 'peerDependencies'],
    pattern: ['gulp-*', 'gulp.*', 'browser-sync', 'yargs', 'lodash'],
    rename: {
      'browser-sync': 'sync',
      'lodash': '_'
    },
    DEBUG: false,
  },
  browserSync: {
    hostname: 'vue.test',
    port: 8080,
    autoOpen: false,
    injectChanges: true
  },
  eslint: {
    "env": {
      "browser": true
    },
    "globals": {
      "Drupal": true,
      "drupalSettings": true,
      "drupalTranslations": true,
      "domready": true,
      "jQuery": true,
      "_": true,
      "matchMedia": true,
      "Backbone": true,
      "Modernizr": true,
      "CKEDITOR": true
    },
    "rules": {
      // Errors.
      "block-scoped-var": 2,
      "brace-style": [2, "stroustrup", { "allowSingleLine": true }],
      "comma-style": [2, "last"],
      "eqeqeq": [2, "smart"],
      "guard-for-in": 2,
      "indent": [2, 2, { "indentSwitchCase": true }],
      "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
      "no-implied-eval": 2,
      "no-mixed-spaces-and-tabs": 2,
      "no-nested-ternary": 2,
      "no-reserved-keys": 2,
      "no-trailing-spaces": 2,
      "no-undef": 2,
      "no-undefined": 2,
      "no-unused-vars": [2, { "vars": "local", "args": "none" }],
      "one-var": [2, "never"],
      "semi": [2, "always"],
      "space-after-keywords": [2, "always"],
      "space-before-blocks": [2, "always"],
      "space-before-function-paren": [2, { "anonymous": "always", "named": "never" }],
      "space-in-brackets": [2, "never"],
      "space-in-parens": [2, "never"],
      "spaced-line-comment": [2, "always"],
      "strict": 2,
      // Warnings.
      "max-nested-callbacks": [1, 3],
      // Disabled.
      "camelcase": 0,
      "consistent-return": 0,
      "dot-notation": 0,
      "new-cap": 0,
      "no-alert": 0,
      "no-new": 0,
      "no-shadow": 0,
      "no-underscore-dangle": 0,
      "no-use-before-define": 0,
      "quotes": 0
    }
  }

};
