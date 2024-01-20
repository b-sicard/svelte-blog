import { env } from '$env/dynamic/public'

export async function load({ fetch }) {
    
    const response = await fetch(`${env.PUBLIC_API_URL}/posts`)

    const posts = await response.json()

    return { posts }
}
