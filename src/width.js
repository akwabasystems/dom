import dimensions from "./dimensions";


/**
 * Returns the width of the given element
 *
 * @param {Node} element        the element for which to compute the width
 * @param {Number} the width of the given element
 */
export default (element) => dimensions(element).width;
