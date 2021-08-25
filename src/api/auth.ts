import { request } from '../config/axios.config';

export const adminLogin = (data: { email: string; password: string }) => {
	const endpoint = '/admin/login';
	return request(endpoint, 'POST', data);
};
 