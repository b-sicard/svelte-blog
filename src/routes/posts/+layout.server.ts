import { env } from '$env/dynamic/public'
import type { Post } from '$lib/models/post.model.js'

export async function load({ fetch }) {
    
    const response = await fetch(`${env.PUBLIC_API_URL}/posts`)

    const posts: Post[] = await response.json()

    return { posts }
}
