import { env } from '$env/dynamic/public';
import { redirect, type Actions, fail } from '@sveltejs/kit'

export async function load({ locals }) {
    // redirect user if logged in
    if (locals.user) {
        throw redirect(302, '/');
    }
}

export const actions = {
    default: async ({ cookies, request, fetch }) => {
        const formData = await request.formData()
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch(`${env.PUBLIC_API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password })
        })

        const { token, errors } = await response.json()

        if (errors) {
            return fail(401, {
                errors
            })
        }

        cookies.set('token', token, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 1000
        })
    
        throw redirect(302, '/')
    }
} satisfies Actions