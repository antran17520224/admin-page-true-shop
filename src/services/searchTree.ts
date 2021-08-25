export const searchTreeByProperty = (record: any, matchingTitle: any, property: string): any => {
	if (record[property] === matchingTitle) {
		return record;
	} else if (record['children'] !== undefined && record['children'].length > 0) {
		let result = null;
		for (let i = 0; result === null && i < record['children'].length; i++) {
			result = searchTreeByProperty(record['children'][i], matchingTitle, property);
		}
		return result;
	}
	return null;
};
