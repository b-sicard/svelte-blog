import { env } from '$env/dynamic/public';
import { redirect } from '@sveltejs/kit'

export async function POST({ request }): Promise<void> {

    const formData = await request.formData()

    console.log(formData)

    // const response = await fetch(`${env.PUBLIC_API_URL}/posts`, {
    //     method: 'POST',
    //     body: JSON.stringify({ email, password })
    // })

    // const { errors } = await response.json()

    // if (errors) {
    //     return fail(401, {
    //         errors
    //     })
    // }

    // throw redirect(302, '/posts')
}
