import { redirect, type Actions, fail } from '@sveltejs/kit'
import * as api from '$lib/services/api';

export async function load({ locals }) {
    // redirect user if logged in
    if (locals.user) {
        throw redirect(302, '/');
    }
}

export const actions = {
    default: async ({ cookies, request }) => {
        const formData = await request.formData()
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await api.post('login', {
            email,
            password
        })
    
        if (!response.ok) {
            const { error } = await response.json()
			return fail(401, {
                error
			});
        }

        const { token } = await response.json()

        cookies.set('token', token, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 1000
        })
    
        throw redirect(302, '/')
    }
} satisfies Actions