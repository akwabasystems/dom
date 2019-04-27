import Sizzle from "sizzle";


/**
 * Returns true if the given element matches the specified selector; otherwise, returns false
 *
 * @param {Node} element        the element to check
 * @param {String} selector     the CSS selector against which to match the element
 * @param {Boolean} true if the given element matches the specified selector; otherwise, returns false
 */
export default (element, selector) => Sizzle.matchesSelector(element, selector);
