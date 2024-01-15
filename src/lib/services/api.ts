import { env } from "$env/dynamic/public";

async function send({ method, path, data }: any) {
	const opts: any = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	const response = await fetch(`${env.PUBLIC_API_URL}/${path}`, opts);

    return response
}

export function get(path: string) {
	return send({ method: 'GET', path });
}

export function del(path: string) {
	return send({ method: 'DELETE', path });
}

export function post(path: string, data: any) {
	return send({ method: 'POST', path, data });
}

export function put(path: string, data: any) {
	return send({ method: 'PUT', path, data });
}