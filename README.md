[![tests][tests]][tests-url]
[![coverage][coverage]][coverage-url]
[![maintainability][maintainability]][maintainability-url]

# Preload Onload Polyfill

A `<link rel="preload">` Polyfill. Call the onload event, also in unsupported Browser.

## Usage

[![npm][npm]][npm-url]

```console
npm install --save js.polyfill.preload.onload
```

### ES Module

```javascript
import Preload from 'js.polyfill.preload.onload';

const preload = new Preload();
preload.check() || preload.update();

```

### UMD Module

Inject the Preload Onload Polyfill into `<head>` within a `<script>` element.
The UMD Version of the Polyfill run check and update by default.

```html
<head>
    <style type="text/css">
        /* critical CSS */
    </style>
    <link rel="preload" src="css/style.css" as="style" onload="this.rel='stylesheet'" type="text/css">
    <noscript>
        <link rel="stylesheet" href="css/style.css" type="text/css">
    </noscript>
    <script type="text/javascript">
        /*
         * Include Preload Onload Polyfill from dist directory
         */
       {{ includePreloadOnloadPolyfill() }}
    </script>
</head>
```

```javascript
function includePreloadOnloadPolyfill() {
  const fs = require('fs');
  const preloadOnloadPolyfill = fs.readFileSync('node_modules/js.polyfill.preload.onload/dist/preload.onload.polyfill.min.js');

  return preloadOnloadPolyfill;
}
```

Note: The Polyfill should be injected inline to save the extra request.


## Example
Inline Critical CSS and `<link rel="preload">` injected main Stylesheet. With noscript fallback and Polyfill to support browser who don't understand `rel=preload`.

Note: This Example is also used within the dev environment. Run `npm start` from the repository main directory and open `http://localhost:8090` in your Browser.

### Inline (critical) Style in `<head>`

```html
<style>
    body {
    font-family: Arial, "Open Sans", sans-serif;
    font-size: 16px;
    color: #012345;
    background-color: #abcdef;
    outline: 1em htmlsolid #012345;
    }

    header,
    main {
        display: block;
        padding: 1em 2em;
    }
</style>
```

### Injected preload style css/style.css in `<head>`

```html
<link
    href="css/style.css"
    rel="preload" 
    as="style"
    onload='this.rel="stylesheet"'
    type="text/css">
```

```css

body {
    color: #abcdef;
    background-color: #012345;
    transition: all 4s ease-in;
    outline: 1em solid #abcdef;
}

...
```

Note: This style is also injected as fallback within the `<noscript>` element in `<head>`.

```html
<noscript>
    <link rel="stylesheet" href="css/style.css" type="text/css">
</noscript>
```

## Support

The Polyfill enable `<link rel="preload">` support (e.g. for stylesheets) in browser (e.g. Firefox or IE11) which currently not support this `<link>` attribute.

Tested with MSIE 11, Edge 17, Firefox 60 and Chrome 72.

## Documentation

* [jsDoc](https://exiguus.github.io/js.polyfill.preload.onload/)
* [Coverage](https://exiguus.github.io/js.polyfill.preload.onload/coverage/)


[tests]: https://img.shields.io/travis/exiguus/js.polyfill.preload.onload/master.svg
[tests-url]: https://travis-ci.org/exiguus/js.polyfill.preload.onload

[maintainability]:
https://api.codeclimate.com/v1/badges/463068933abaf66a335e/maintainability
[maintainability-url]:
https://codeclimate.com/github/exiguus/js.polyfill.preload.onload/maintainability

[coverage]:
https://api.codeclimate.com/v1/badges/463068933abaf66a335e/test_coverage
[coverage-url]:
https://codeclimate.com/github/exiguus/js.polyfill.preload.onload/test_coverage

[npm]: https://img.shields.io/npm/v/js.polyfill.preload.onload.svg
[npm-url]: https://npmjs.com/package/js.polyfill.preload.onload
