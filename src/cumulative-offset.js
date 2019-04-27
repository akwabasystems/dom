import isString     from "@akwaba/object-extensions/src/is-string";
import HTML         from "@akwaba/html";


/**
 * Returns the cumulative top and left offsets for this element. The values include
 * the offsets of this element as well as those of its ancestors up to the body element.
 *
 * @param {Node} element        the element for which to compute the offsets
 * @param {Object} an object that contains the cumulative offset of the given element
 */
export default (element) => {
    element = isString(element) ? HTML.getElement(element) : element;
    let top = 0;
    let left = 0;

    do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while (element);

    return {
        left,
        top
    };
};
