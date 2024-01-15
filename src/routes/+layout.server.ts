import type { PageServerLoad } from "./login/$types";

export const load: PageServerLoad = async ({ locals }: any) => {
	return { user: locals.user };
};
