import { PUBLIC_API_URL } from "$env/static/public"

export const getPosts = async () => {

    const response = await fetch(`${PUBLIC_API_URL}/posts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) return

    const posts = await response.json()

    console.log(posts)
}
