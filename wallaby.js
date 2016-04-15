module.exports = function (wallaby) {

  var appBase = 'src/client/';

  return {
    files: [
      { pattern: 'node_modules/es6-shim/es6-shim.js', instrument: false },
      { pattern: 'node_modules/systemjs/dist/system-polyfills.js', instrument: false },
      { pattern: 'node_modules/systemjs/dist/system.js', instrument: false },
      { pattern: 'node_modules/reflect-metadata/Reflect.js', instrument: false },
      { pattern: 'node_modules/zone.js/dist/zone.js', instrument: false },
      { pattern: 'node_modules/zone.js/dist/long-stack-trace-zone.js', instrument: false },
      { pattern: 'node_modules/zone.js/dist/jasmine-patch.js', instrument: false },

      { pattern: appBase + '+(app|api)/**/*+(ts|html|css)', load: false },
      { pattern: appBase + 'app/**/*.spec.ts', ignore: true }
    ],

    tests: [
      { pattern: appBase + 'app/**/*.spec.ts', load: false }
    ],

    compilers: {
      '**/*.ts': wallaby.compilers.typeScript(require('./src/client/tsconfig.json').compilerOptions)
    },

    middleware: function (app, express) {
      app.use('/node_modules', express.static(require('path').join(__dirname, 'node_modules')));
    },

    testFramework: 'jasmine',

    bootstrap: function (wallaby) {
      wallaby.delayStart();

      var appPackage = 'src/client/app';

      // Configure systemjs packages to use the .js extension for imports from the app folder
      var packages = [
        '+dashboard',
        '+dashboard/dashboard-button',
        '+sessions',
        '+sessions/session',
        '+sessions/session-list',
        '+sessions/shared',
        '+sessions/shared/session-button',
        '+speakers',
        '+speakers/speaker',
        '+speakers/speaker-list',
        '+speakers/shared',
        '+speakers/shared/speaker-button',
        'shared',
        'shared/filter-text',
        'shared/modal',
        'shared/nav',
        'shared/speaker-services',
        'shared/spinner',
        'shared/toast',
        'speakers'
      ].reduce(function (barrelConfig, barrelName) {
        barrelConfig[appPackage + '/' + barrelName] = {
          format: 'register',
          defaultExtension: 'js',
          main: 'index'
        };
        return barrelConfig;
      }, {});

      System.config({
        defaultJSExtensions: true,
        packages: packages,
        paths: {
          'npm:*': 'node_modules/*'
        },
        map: {
          'angular2': 'npm:angular2',
          'rxjs': 'npm:rxjs',
          'a2-in-memory-web-api': 'npm:a2-in-memory-web-api'
        }
      });

      var promises = [];

      Promise.all([
        System.import('angular2/testing'),
        System.import('angular2/platform/testing/browser')
      ])
        .then(function (results) {
          var testing = results[0];
          var browser = results[1];

          testing.setBaseTestProviders(
            browser.TEST_BROWSER_PLATFORM_PROVIDERS,
            browser.TEST_BROWSER_APPLICATION_PROVIDERS
          );

          for (var i = 0, len = wallaby.tests.length; i < len; i++) {
            promises.push(System['import'](wallaby.tests[i].replace(/\.js$/, '')));
          }
        })
        .then(function () {
          return Promise.all(promises);
        })
        .then(function () {
          wallaby.start();
        })
        .
        catch(function (e) {
          setTimeout(function () {
            throw e;
          }, 0);
        });
    },
    debug: true
  };
};
