import { supabase } from '$lib/server/supabaseClient';
import type { PageServerLoad } from './$types';
import { genericApiCall } from '$lib/utils/apiUtils';

export const load: PageServerLoad = async () => {
	const [languageData, languageError] = await genericApiCall(
		await supabase.from('languages').select('*')
	);
	if (languageError) {
		console.error('Error fetching Language data.', languageError);
	}

	if (!languageData || languageData.length === 0) {
		console.error('No Language data found.');
	}

	return {
		languageData
	};
};
