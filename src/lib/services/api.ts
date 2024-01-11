import { env } from "$env/dynamic/public";
import { fail } from "@sveltejs/kit";

async function send({ method, path, data, token }: any) {
	const opts: any = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `Token ${token}`;
	}

	const response = await fetch(`${env.PUBLIC_API_URL}/${path}`, opts);

    return response
}


export function get(path: string, token: string) {
	return send({ method: 'GET', path, token });
}

export function del(path: string, token: string) {
	return send({ method: 'DELETE', path, token });
}

export function post(path: string, data: any, token: string) {
	return send({ method: 'POST', path, data, token });
}

export function put(path: string, data: any, token: string) {
	return send({ method: 'PUT', path, data, token });
}