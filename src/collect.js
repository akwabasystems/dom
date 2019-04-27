import isString     from "@akwaba/object-extensions/src/is-string";
import HTML         from "@akwaba/html";


/**
 * Recursively collects all the element's parent, siblings or child elements
 * that match the specified property
 *
 * @param {Node} element        the element for which to collect the target nodes
 * @param {String} property     the propertu to look for when collecting the nodes
 * @param {Array} an array of DOM elements that match this specified property
 */
export default (element, property) => {
    element = isString(element) ? HTML.getElement(element) : element;
    const nodes = [];

    while (element !== null && ((element = element[property]) !== document.documentElement)) {
        if (element.nodeType === HTML.nodeType.ELEMENT_NODE) {
            nodes.push(element);
        }
    }

    return nodes;
};
