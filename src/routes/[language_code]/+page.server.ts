import { supabase } from '$lib/server/supabaseClient';
import type { PageServerLoad } from './$types';
import { genericApiCall } from '$lib/utils/apiUtils';

export const load: PageServerLoad = async ({ params }) => {
	const [miracleData, error] = await genericApiCall(
		supabase
			.from('miracles')
			.select('*')
			.eq('deleted', true)
			.eq('draft', false)
			.eq('language_code', params.language_code)
	);

	if (error) {
		console.error(error);
		return { error };
	}
	return {
		miracleData
	};
};
