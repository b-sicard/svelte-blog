import type { PageServerLoad } from "./(auth)/login/$types";

export const load: PageServerLoad = async ({ locals }: any) => {
	return { user: locals.user };
};
