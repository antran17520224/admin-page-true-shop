export const findErrorMessage = (
	errorMessagesList: { code: string; message: string }[],
	code: string
) => {
	return errorMessagesList.filter((item) => item.code === code);
};
