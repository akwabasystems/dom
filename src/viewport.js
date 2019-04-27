/**
 * Returns the dimensions and offsets of the current viewport
 *
 * @return {Object} an object that contains the dimensions and offsets of the current viewport
 */
export default () => {
    let width;
    let height;
    let offsetLeft;
    let offsetTop;

    /** For standards-compliant browsers (Firefox, Safari, Chrome, etc) */
    if (window.innerWidth) {
        width = window.innerWidth;
        height = window.innerHeight;
        offsetLeft = window.pageXOffset;
        offsetTop = window.pageYOffset;

    /** For IE in standards mode */
    } else if (document.documentElement && document.documentElement.clientWidth) {
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
        offsetLeft = document.documentElement.scrollLeft;
        offsetTop = document.documentElement.scrollTop;
    /** For older browsers */
    } else {
        width = document.body.clientWidth;
        height = document.body.clientHeight;
        offsetLeft = document.body.scrollLeft;
        offsetTop = document.body.scrollTop;
    }

    return {
        width,
        height,
        offsetLeft,
        offsetTop
    };
};
