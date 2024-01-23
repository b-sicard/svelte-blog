import { env } from "$env/dynamic/public"
import type { Category } from "$lib/models/category.model.js"
import { fail, type Actions } from "@sveltejs/kit"

export async function load({ fetch }) {

    const response = await fetch(`${env.PUBLIC_API_URL}/categories`)

    const categories: Category[] = await response.json()

    return { categories }
}

export const actions = {
    default: async ({ request, fetch }) => {
        const formData = await request.formData()
        const name = formData.get('name')
        const color = formData.get('color')

        const response = await fetch(`${env.PUBLIC_API_URL}/categories`, {
            method: 'POST',
            body: JSON.stringify({ name, color })
        })

        const { errors } = await response.json()

        if (errors) {
            return fail(401, {
                errors
            })
        }
    }
} satisfies Actions