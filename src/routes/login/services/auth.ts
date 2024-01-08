import { goto } from "$app/navigation"
import { PUBLIC_API_URL } from "$env/static/public"

export const login = async (email: string, password: string) => {

    const response = await fetch(`${PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })

    if (!response.ok) return

    const token = await response.json()

    goto('/')
}
