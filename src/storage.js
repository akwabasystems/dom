import generateUID from "@akwaba/object-extensions/src/generate-uuid";

const model = {};

/**
 * Retrieves the storage entry for the given element. The element's "_storageId" property is used as the
 * key for its entries
 *
 * @param {Node} element        the element for which to retrieve the storage
 * @return {Object} the storage entry for the given element
 */
const getStorage = (element) => {
    const id = element._storageId || (element._storageId = generateUID());
    return model[id] || (model[id] = { }); /* eslint-disable-line no-return-assign */
};


/**
 * Stores a key/value pair of content for the given element. If the value parameter is an object, stores
 * each property of the object with its specific value
 *
 * @param {Node} element        the element for which to store the properties
 * @param {Array} rest          the argument list that contains the key and value to store
 */
const store = (element, ...rest) => {
    if (rest.length === 1) {
        Object.assign(getStorage(element), rest[0]);
    } else {
        getStorage(element)[rest[0]] = rest[1]; /* eslint-disable-line prefer-destructuring */
    }
};


/**
 * Retrieves the value of the key specified in this element's storage unit
 *
 * @param {Node} element    the element for which to retrieve the storage value
 * @param {String} key      the key for which to return the value
 * @return {String|Object}  the value for the specified key in this element's storage unit
 */
const retrieve = (element, key) => getStorage(element)[key];


export default {
    getStorage,
    store,
    retrieve
};
