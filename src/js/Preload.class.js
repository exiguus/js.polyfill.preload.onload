import Support from './Support.class';
/**
 * @fileOverview Preload Class.
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 1.0.0
 * @module {es6} Preload
 * @requires Support
 */
export default class Preload extends Support {
    /**
     * Check and upgrade preload support.
     * @class Preload
     * @classdesc Class to check and upgrade preload onload support.
     */
    constructor() {
        super(document.createElement('link').relList, 'preload');
    }

    /**
     * Update <link> rel=preload elements and execute onload attr.
     * @function Preload.update
     * @return {boolean}.updateSupport
     */
    update() {
        const links = document.getElementsByTagName('link');
        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            if (link.rel === 'preload') {
                const as = link.getAttribute('as');
                const onload = (typeof link.onload === 'function');
                if (onload) link.onload();
                switch (true) {
                    case as === 'style':
                        link.setAttribute('rel', 'stylesheet');
                        break;
                    default:
                        break;
                }
            }
        }
        return true;
    }
}
