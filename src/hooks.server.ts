import { fail, type Handle, type HandleFetch } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

export const handle: Handle = async ({ event, resolve }) => {

	const { locals, cookies, fetch } = event

	if (locals.user) return resolve(event);

	const token = cookies.get('token')

	if (!token) return resolve(event);

	const response = await fetch(`${env.PUBLIC_API_URL}/user`)
	const { user, errors } = await response.json()

	if (errors) {
		throw new Error(errors[0])
	}

	locals.user = user

	return resolve(event);
};

export const handleFetch: HandleFetch = async ({ event, request, fetch }) => {
	const { cookies } = event
	
	if (cookies.get('token')) {
		request.headers.set('Authorization', `Bearer ${cookies.get('token')}`)
	}

	request.headers.set('Content-Type', 'application/json')

	return fetch(request);
};
