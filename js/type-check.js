// @ts-check

/**
 *
 * @param {number} numberType
 * @param {string} stringType
 */

function testFunctionForTypeCheck(numberType, stringType) {
  return;
}

testFunctionForTypeCheck(44, "hello");

let aNumber = 100;
// aNumber = 'hello';

/** @type{number} */
let numberSet = 444;

/**
 * Adds VAT to a price
 *
 * @param {number} price
 * @param {number} vat
 * @returns {number}
 */
function addVAT(price, vat = 0.2) {
  return price * (1 * vat);
}

/**
 * @typedef {Object} Article
 * @property {number} price
 * @property {number} vat
 * @property {string} string
 * @property {boolean=} sold
 */
/**
 * Now we can use Article as a proper type
 * @param {[Article]} articles
 */
function totalAmount(articles) {
  return articles.reduce((total, article) => {
    return total + addVAT(article.price, article.vat);
  }, 0);
}
