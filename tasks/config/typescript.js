/**
  Trying to figure out how to get typescript to work with this.
**/
module.exports = function (grunt) {

  grunt.config.set('ts', {
    // use to override the default options, See: http://gruntjs.com/configuring-tasks#options
    // these are the default options to the typescript compiler for grunt-ts:
    // see `tsc --help` for a list of supported options.
    options: {
      compile: true, // perform compilation. [true (default) | false]
      comments: false, // same as !removeComments. [true | false (default)]
      target: 'es3', // target javascript language. [es3 | es5 (grunt-ts default) | es6]
      module: 'system', // target javascript module style. [amd (default) | commonjs]
      sourceMap: true, // generate a source map for every output js file. [true (default) | false]
      sourceRoot: '', // where to locate TypeScript files. [(default) '' == source ts location]
      moduleResolution: 'node',
      declaration: false, // generate a declaration .d.ts file for every output js file. [true | false (default)]
      emitDecoratorMetadata: true,
      experimentalDecorators: true,
      lib: ["es2016", "dom"]
    },
    // a particular target
    dev: {
      src: ["ng-src/**/*.ts"], // The source typescript files, http://gruntjs.com/configuring-tasks#files
      html: ['ng-src/**/**.tpl.html'], // The source html files, https://github.com/basarat/grunt-ts#html-2-typescript-support
      out: 'assets/js/angular.js', // If specified, generate an out.js file which is the merged js file
//      watch: 'ng-src', // If specified, watches this directory for changes, and re-runs the current target
      // use to override the grunt-ts project options above for this target
    }
  });

  grunt.loadNpmTasks('grunt-ts');
};
