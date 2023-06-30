"use strict";
/**
 * Sometimes you will have information about the type of a value that TypeScript can’t know about.
 * For example, if you’re using document.getElementById,
 * TypeScript only knows that this will return some kind of HTMLElement,
 *  but you might know that your page will always have an HTMLCanvasElement with a given ID.
 *
 */
const myCanvas = document.getElementById("main_canvas");
const myCanvas2 = document.getElementById("main_canvas");
