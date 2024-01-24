import { env } from '$env/dynamic/public';
import { redirect, type Actions, fail } from '@sveltejs/kit'

export async function load({ locals }) {
    // redirect user if logged in
    if (locals.user) {
        throw redirect(302, '/');
    }
}

export const actions = {
    default: async ({ request, fetch }) => {
        const formData = await request.formData()

        const firstName = formData.get('firstName')
        const lastName = formData.get('lastName')
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch(`${env.PUBLIC_API_URL}/users`, {
            method: 'POST',
            body: JSON.stringify({ 
                firstName,
                lastName,
                email,
                password
            })
        })

        const { errors } = await response.json()

        if (errors) {
            return fail(401, {
                errors
            })
        }
    
        throw redirect(302, '/login')
    }
} satisfies Actions