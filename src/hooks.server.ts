import type { Handle, HandleFetch } from '@sveltejs/kit';
import * as api from '$lib/services/api';

export const handle: Handle = async ({ event, resolve }) => {

	if (event.cookies.get('token') && !event.locals.user) {
		const response = await api.get(`user`)
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
