export async function load({ parent, params }) {
    const { posts } = await parent();

    const post = posts.find((post: any) => post.id === parseInt(params.id));

    return { post }
}
