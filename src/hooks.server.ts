import type { Handle, HandleFetch } from '@sveltejs/kit';
import * as api from '$lib/services/api';

export const handle: Handle = async ({ event, resolve }) => {

	const userId = event.cookies.get('user_id')
	if (userId) {
		const response = await api.get(`users/${userId}`)
		const user = await response.json()
		event.locals.user = user
	}

	return resolve(event);
};

export const handleFetch: HandleFetch = async ({ event, request, fetch }) => {

	const token = event.cookies.get('token')
	if (token) {
		request.headers.set('Authorization', `Bearer ${token}`);
	}

	return fetch(request);
};
