import collect from "./collect";


/**
 * Returns the parents of the given element by recursively collecting each "parentNode" element
 * up to the document element.
 *
 * @param {Node} element        the element for which to return the parents
 * @param {Array} an array of the parents for the given element
 */
export default (element) => collect(element, "parentNode");
