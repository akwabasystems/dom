import Sizzle   from "sizzle";
import parents  from "./parents";


/**
 * Returns the ancestors of the given element that match the specified selector
 *
 * @param {Node} element        the element for which to return the ancestors
 * @param {String} selector     the CSS selector used to filter the nodes
 * @param {Array} an array of the ancestors that match the specified selector
 */
export default (element, selector = "div") => {
    return Sizzle.matches(selector, parents(element));
};
