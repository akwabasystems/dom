import dimensions from "./dimensions";


/**
 * Returns the height of the given element
 *
 * @param {Node} element        the element for which to compute the height
 * @param {Number} the height of the given element
 */
export default (element) => dimensions(element).height;
