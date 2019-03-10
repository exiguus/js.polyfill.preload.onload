/**
 * @fileOverview Support Class.
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 1.0.0
 * @module {es6} Support
 */
export default class Support {
    /**
     * Support check.
     * @class Support
     * @classdesc Class to check a Support.
     * @param {string} type to check.
     * @param {object} list to check against.
     */
    constructor(type, list) {
        this.type = type;
        this.list = list;
    }

    /**
     * Check Support of type against a list
     * @function Support.check
     * @return {boolean}
     */
    check() {
        if (!this.list || !this.list.supports) {
            return false;
        }
        try {
            return this.list.supports(this.type);
        } catch (event) {
            // eslint-disable-next-line no-console
            console.log('Support.check: error', event);
        }
        return false;
    }
}

