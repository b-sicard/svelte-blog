import { env } from '$env/dynamic/public'
import type { Post } from '$lib/models/post.model.js'

export async function load({ fetch }) {

    const params = new URLSearchParams({
        limit: "5"
    })
    
    const response = await fetch(`${env.PUBLIC_API_URL}/posts?${params}`)

    const posts: Post[] = await response.json()

    return { posts }
}