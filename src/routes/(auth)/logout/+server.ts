import { env } from '$env/dynamic/public';
import { redirect } from '@sveltejs/kit'

export async function GET({ locals, cookies, fetch }) {

    await fetch(`${env.PUBLIC_API_URL}/logout`, {
        method: 'POST',
        body: JSON.stringify({ token: locals.user.token })
    })

    locals.user = null
    cookies.delete('token', {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
    })

    throw redirect(302, '/')
}
