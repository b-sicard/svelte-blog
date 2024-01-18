import { env } from '$env/dynamic/public'

export async function load({ fetch }) {

    const params = new URLSearchParams({
        limit: "5"
    })
    
    const response = await fetch(`${env.PUBLIC_API_URL}/posts?${params}`)

    const posts = await response.json()

    return { props: { posts } }
}