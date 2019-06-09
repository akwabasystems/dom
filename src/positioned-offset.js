import isString             from "@akwaba/object-extensions/src/is-string";
import HTML                 from "@akwaba/html";
import cumulativeOffset     from "./cumulative-offset";


/**
 * Returns the positioned top and left offsets of this element, which are its positions
 * relative to its parent node.
 *
 * @param {Node} element        the element for which to compute the offsets
 * @param {Object} an object that contains the positioned offset of the given element
 */
export default (element) => {
    element = isString(element) ? HTML.getElement(element) : element;
    const elementOffsets = cumulativeOffset(element);
    const parentOffsets = cumulativeOffset(element.parentNode);

    return {
        left: elementOffsets.left - parentOffsets.left,
        top: elementOffsets.top - parentOffsets.top
    };
};
