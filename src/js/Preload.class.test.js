import Preload from './Preload.class';

describe('preload class', () => {
    let linkStyle;
    let linkFont;
    let head;

    beforeEach(function() {
        linkStyle = document.createElement('link');
        linkStyle.setAttribute('rel', 'preload');
        linkStyle.setAttribute('as', 'style');
        linkStyle.setAttribute('src', 'css/style.css');
        linkStyle.setAttribute('type', 'text/css');
        linkStyle.setAttribute('onload', 'this.rel=\'stylesheet\'');

        linkFont = document.createElement('link');
        linkFont.setAttribute('rel', 'preload');
        linkFont.setAttribute('as', 'font');
        linkFont.setAttribute('src', 'font/font-family.woff2');
        linkFont.setAttribute('type', 'font/woff2');
        linkFont.setAttribute('data-loaded', 'false');
        linkFont.setAttribute(
            'onload',
            'this.setAttribute(\'data-loaded\',\'true\')'
        );

        head = document.querySelector('head');
        head.appendChild(linkStyle);
        head.appendChild(linkFont);
    });

    afterEach(function() {
        head = document.querySelector('head');
        head.removeChild(linkFont);
        head.removeChild(linkStyle);
    });

    it('preload is Object', () => {
        const preload = new Preload();
        expect(typeof preload).toBe('object');
    });

    it('preload.update is function', () => {
        const preload = new Preload();
        expect(typeof preload.update).toBe('function');
    });

    it('preload.update() is boolean', () => {
        const preload = new Preload();
        expect(typeof preload.update()).toBe('boolean');
    });

    it('preload.update() is true or false', () => {
        const preload = new Preload();
        expect(preload.update()).toBe(true);
    });

    it('preload.check is function', () => {
        const preload = new Preload();
        expect(typeof preload.check).toBe('function');
    });

    it('preload.check() is boolean', () => {
        const preload = new Preload();
        expect(typeof preload.check()).toBe('boolean');
    });

    it('preload.check() is true or false', () => {
        const preload = new Preload();
        expect(
            preload.check() === false ||
            preload.check() === true)
        .toBe(true);
    });

    it('preload.check() is false', () => {
        const preload = new Preload();
        // use chrome-headless to check() true instead of phantom
        expect(preload.check() === false).toBe(true);
    });

    it('before preload.update() <link as="style"> rel="preload"', () => {
        expect(linkStyle.rel).toBe('preload');
    });

    it('after preload.update() <link as="style"> rel="stylesheet"', () => {
        const preload = new Preload();
        preload.update();
        expect(linkStyle.rel).toBe('stylesheet');
    });

    it('before preload.update() <link as="font"> data-loaded="false"', () => {
        expect(linkFont.dataset.loaded).toBe('false');
    });

    it('after preload.update() <link as="font"> data-loaded="true"', () => {
        const preload = new Preload();
        preload.update();
        expect(linkFont.dataset.loaded).toBe('true');
    });
});
