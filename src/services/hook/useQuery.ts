export const useQuery = (queryString: string) => {
	return new URLSearchParams(decodeURIComponent(queryString));
};
