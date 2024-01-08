import { PUBLIC_API_URL } from "$env/static/public"

export const getCategories = async () => {

    const response = await fetch(`${PUBLIC_API_URL}/categories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) return

    const categories = await response.json()

    console.log(categories)
}