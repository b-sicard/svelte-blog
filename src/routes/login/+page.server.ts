import { goto } from '$app/navigation'
import { PUBLIC_API_URL } from '$env/static/public'
import { redirect } from '@sveltejs/kit'

export const actions = {
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
            const { errors } = await response.json()
            return {
                status: 400,
                body: {
                    success: false,
                    errors
                }
            }
        }
    
        const token = await response.json()
    
        throw redirect(302, '/')
    }
}