import { env } from "$env/dynamic/public"
import { fail, type Actions, redirect } from "@sveltejs/kit"

export async function load({ locals }) {
    // redirect user if don't logged
    if (!locals.user) {
        throw redirect(302, '/posts');
    }
}

export const actions = {
    default: async ({ request, fetch }) => {
        const formData = await request.formData()
        const title = formData.get('title')
        const content = formData.get('content')

        const response = await fetch(`${env.PUBLIC_API_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, content })
        })

        const { errors } = await response.json()

        if (errors) {
            return fail(401, {
                errors
            })
        }
    
        throw redirect(302, '/posts')
    }
} satisfies Actions
