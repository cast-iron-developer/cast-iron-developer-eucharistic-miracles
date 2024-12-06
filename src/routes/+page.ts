import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, url }) => {
	const currentParams = params;
	const currentUrl = url;
	return {
		currentParams,
		currentUrl
	};
};
