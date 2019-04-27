import Sizzle from "sizzle";


/**
 * Returns an array of the nodes that match the specified expression from the given scope
 *
 * @param {String} expression       the CSS expression to match
 * @param {Node} scope              the element from which to perform the search
 * @return {Array} an array of the nodes that match the specified expression
 */
export default (expression, scope) => {
    return Sizzle(expression, scope);
};
