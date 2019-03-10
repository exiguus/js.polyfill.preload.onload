/* globals
  casper
  phantom
  printTestInfo
  getTestCaptureName
*/

/* eslint-disable no-var, no-invalid-this */
var config = {
  'count': 22,
  'url': {
    'origin': 'http://localhost:7357',
    'path': '/src/index.dist.html',
  },
  'path': 'tests/casper/',
  'title': 'Test Preload Onload Polyfill',
  'viewport': {
    'width': 1600,
    'height': 800,
  },
  'capture': {

    'enable': false,
    'wait': 50,
    'path': 'tests/screenshots/',
    'fileName': 'image',
    'fileEnding': '.png',
  },
  'debug': false,
};
// inject helper
phantom.injectJs(config.path + 'casper.helper.js');
// cli
if (casper.cli.options.path !== undefined) {
  config.url.path = casper.cli.options.path;
}

if (casper.cli.options.origin !== undefined) {
  config.url.origin = casper.cli.options.origin;
}

if (casper.cli.options.capture !== undefined) {
  config.capture.enable = true;
}
// tests

// begin test
casper.test.begin(
  config.title,
  1,
  function suite(test) {
    printTestInfo(
      'Url: ' + config.url.origin + config.url.path
    );
    // start test
    casper.start(config.url.origin, function() {
      this.viewport(
        config.viewport.width,
        config.viewport.height
      );
    });
    // open path
    casper.thenOpen(config.url.origin + config.url.path, function() {
      if (config.debug === true) console.info(this.getCurrentUrl()); // eslint-disable-line no-console, max-len

      var supports = this.evaluate(function() {
        var element = document.creatElement('link');
        return element.relList.supports('preload');
      });

      printTestInfo(
        'Supports <link rel="preload">: ' + supports
      );
    });

    // check elements
    casper.then(function() {
      var element = 'link[rel="stylesheet"][as="style"]';
      printTestInfo(
        'Element: ' + element
      );

      var info = this.getElementInfo(element);
      printTestInfo(
        'Info: ' + JSON.stringify(info)
      );

      // check element exist
      test.assertExists(element, element + ' element exist');
    });

    // capture test
    if (config.capture.enable === true) {
      casper.then(function() {
        this.wait(
          config.capture.wait,
          function() {
            this.capture(
              getTestCaptureName(config.capture.fileName), {
                top: 0,
                left: 0,
                width: config.viewport.width,
                height: config.viewport.height,
              }
            );
          }
        );
      });
    }
    // end test
    casper.run(function() {
      test.done();
    });
  }
);
