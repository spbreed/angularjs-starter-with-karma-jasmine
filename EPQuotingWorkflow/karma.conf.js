// Karma configuration
// Generated on Fri Aug 08 2014 10:34:31 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
             'Scripts/jquery-2.1.1.js',

               'Scripts/jasmine-html.js',
             'Scripts/angular.js',
             'Scripts/angular-animate.js',
                   'Scripts/angular-route.js',
                         'Scripts/angular-sanitize.js',
                         'Scripts/bootstrap.js',
                          'Scripts/toastr.js',
                          'Scripts/moment.js',



                         'Scripts/ui-bootstrap-tpls-0.10.0.js',

                          'app/app.js',
                          'app/config.js',
             'Scripts/angular-mocks.js',
           'app/test/**/*.Spec.js',
           'app/*.js',
           'app/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    

    reporters: ['progress', 'html'],

   

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    plugins: [
          'karma-htmlfile-reporter',
          'karma-chrome-launcher',        
          'karma-jasmine'
    ],
    htmlReporter: {
        outputFile: 'app/test/units.html'
    },
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
