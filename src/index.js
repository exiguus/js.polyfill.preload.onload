/**
 * @fileOverview Preload onload Polyfill Module initialisation.
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 1.0.0
 * @name new Preload()
 * @member {object} preload
 * @requires Preload
 */

import Preload from './js/Preload.class';

const preload = new Preload();
preload.check() || preload.update();
