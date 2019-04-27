import isString     from "@akwaba/object-extensions/src/is-string";
import HTML         from "@akwaba/html";


/**
 * Returns the dimensions of the given element
 *
 * @param {Node} element        the element for which to compute the dimensions
 * @param {Object} an object that contains the dimensions of the given element
 */
export default (element) => {
    element = isString(element) ? HTML.getElement(element) : element;

    const display = HTML.getStyle(element, "display");

    if (display !== "none" && display != null) {
        return {
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    }

    /**
     * All *Width and *Height properties give 0 on elements with display none,
     * so enable the element temporarily
     */
    const styles = element.style;
    const {
        visibility: originalVisibility,
        position: originalPosition,
        display: originalDisplay
    } = styles;

    styles.visibility = "hidden";
    styles.position = "absolute";
    styles.display = "block";

    const originalWidth = element.clientWidth;
    const originalHeight = element.clientHeight;

    styles.display = originalDisplay;
    styles.position = originalPosition;
    styles.visibility = originalVisibility;

    return {
        width: originalWidth,
        height: originalHeight
    };
};
