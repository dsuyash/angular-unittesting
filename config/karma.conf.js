module.exports = function(config){
    config.set({
    basePath : '../',
    files : [
        'lib/angular/angular.js',
         'lib/angular/angular-mock.js',
         'src/**/*.js',
        'test/unit/**/*.js'
    ],
    autoWatch : false,
    frameworks: ['jasmine'],
    browsers : ['Firefox'],
    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
            ],
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
