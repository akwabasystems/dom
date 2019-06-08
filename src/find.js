import select from "./select";


/**
 * Returns the first element that matches the specified expression from the given scope, or null
 * if no element is found.
 *
 * @param {String} expression       the CSS expression to match
 * @param {Node} scope              the element from which to perform the search
 * @return {Node} the first element that matches the specified expression
 */
export default (expression, scope) => {
    const nodes = select(expression, scope);
    return nodes.length > 0 ? nodes[0] : null;
};
