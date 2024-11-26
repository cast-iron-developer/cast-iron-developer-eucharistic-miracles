import { supabase } from '$lib/server/supabaseClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { data: languageData, error } = await supabase.from('languages').select('*');

	if (error) {
		console.log('Error fetching Language data.', error);
		return { languageData: [] };
	}

	if (!languageData || languageData.length === 0) {
		console.log('No Language data found.');
		return { languageData: [] };
	}

	return {
		languageData
	};
};
