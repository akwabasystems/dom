import select from "./select";


/**
 * Returns the children of the given element that match the specified selector
 *
 * @param {Node} element        the element for which to return the children
 * @param {String} selector     the CSS selector used to filter the nodes
 * @param {Array} an array of the children that match the specified selector
 */
export default (element, selector = "*") => select(selector, element);
