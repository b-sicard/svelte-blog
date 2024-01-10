import { PUBLIC_API_URL } from '$env/static/public'
import { redirect, type Actions, fail } from '@sveltejs/kit'

export const actions: Actions = {
    default: async ({ cookies, request, fetch }) => {
        const data = await request.formData()
        const email = data.get('email')
        const password = data.get('password')

        const response = await fetch(`${PUBLIC_API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
    
        if (!response.ok) {
            const error = await response.json()
			return fail(401, {
				description: 'Invalid e-mail or password.',
                error: error.message,
			});
        }
    
        const token = await response.json()
    
        throw redirect(302, '/')
    }
}