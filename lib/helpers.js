/**
 * @method findMatchingKeys
 * @description finds the keys that holds values found in the array provided 
 * @param {Array} array
 * @param {Object} object
 * @return {Array} with the matching keys from the object
 */
exports.findMatchingKeys = (array, object) => {
	const keys = Object.keys(object);

	return keys.reduce((res, key) => {
		const value = object[key];

		if (Array.isArray(value)) {
			if (hasAllMatches(value, array)) {
				res.push(key);
			}
		}

		return res;
	}, []);
};

/**
 * @method hasAllMatches
 * @description checks if all elements from primaryList are found on secondaryList
 * @param {Array} primaryList
 * @param {Array} secondaryList
 * @return {bool}
 */
const hasAllMatches = (primaryList, secondaryList) => {
	return primaryList.every(elem => secondaryList.includes(elem.toString()));
};

/**
 * @method hasEmptyValues
 * @description checks if every key has a non empty value
 * @param {Object}
 * @return {bool} 
 */
exports.hasEmptyValues = (object) => {
	return Object.keys(object).some(key => !object[key].length);
};