export async function load({ parent, params }) {
    const { posts } = await parent();
    const post = posts.find((post: any) => post.id === parseInt(params.id));

    console.log(posts, params.id)

    return {
        props: {
            post
        }
    };
}
