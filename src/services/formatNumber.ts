export const formatNumber = (stringNumber: string) => {
	// format stringNumber 1000000 to 1,234,567
	if (!stringNumber) {
		return '0';
	}
	return stringNumber
		.toString()
		.replace(/\D/g, '')
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
