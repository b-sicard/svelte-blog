import { env } from '$env/dynamic/public';
import { fail, redirect } from '@sveltejs/kit'

export async function GET({ params, fetch }) {

    const { id } = params

    const response = await fetch(`${env.PUBLIC_API_URL}/posts/${id}`, {
        method: 'DELETE'
    })

    const { errors } = await response.json()

    if (errors) {
        fail(401, {
            errors
        })
    }

    throw redirect(302, '/')
}
