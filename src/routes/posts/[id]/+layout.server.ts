import type { Post } from '$lib/models/post.model.js';
import { error } from '@sveltejs/kit';

export async function load({ parent, params }) {
    const { posts } = await parent();

    const post: Post | undefined = posts.find((post: any) => post.id === parseInt(params.id));

    if (!post) throw error(404)

    return { post }
}
