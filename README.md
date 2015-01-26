[![Dependency Status](https://david-dm.org/JohnCashmore/grunt-cssshrink.svg)](https://david-dm.org/JohnCashmore/grunt-cssshrink)
# CSS Shrink

This is just a grunt wrapper for [CSS Shrink](https://github.com/stoyan/cssshrink), i didn't really do much.



## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cssshrink --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cssshrink');
```

## The "cssshrink" task

### Overview
In your project's Gruntfile, add a section named `cssshrink` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cssshrink: {
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  }
})
```

### Options

#### log

Type: `boolean`
Default: `false`

Log processed media queries.

### Usage Examples

#### Default Options
In this example, all the css files in `test` are processed and moved to the folder `tmp`

```js
grunt.initConfig({
  cssshrink: {
    options: {
      log: false
    },
    your_target: {
      files: {
        'tmp': ['test/*.css']
      }
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 26-01-15 - v0.0.8 - Dependancy update
* 30-06-14 - v0.0.7 - Various fixes
* 13-02-14 - v0.0.4 - Useable release