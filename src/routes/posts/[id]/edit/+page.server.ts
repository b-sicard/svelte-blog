import { env } from "$env/dynamic/public"
import { fail, type Actions, redirect } from "@sveltejs/kit"

export async function load({ locals, parent }) {

    const { post } = await parent();

    if (!locals.user || locals.user.id !== post.author.id) {
        throw redirect(302, '/posts');
    }
}

export const actions = {
    default: async ({ params, request, fetch }) => {

        const { id } = params

        const formData = await request.formData()
        const title = formData.get('title')
        const content = formData.get('content')

        const response = await fetch(`${env.PUBLIC_API_URL}/posts/${id}`, {
            method: 'PUT',
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
