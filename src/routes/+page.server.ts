import { supabase } from '$lib/server/supabaseClient';
import type { PageServerLoad } from './$types';
import { genericApiCall } from '$lib/utils/apiUtils';
import type { LanguageCodes, LanguageData } from '$lib/utils/types/DatabaseTypes';

export const load: PageServerLoad = async () => {
	const [languageData, languageError] = await genericApiCall(
		await supabase.from('languages').select('id, name, code').returns<LanguageData>()
	);

	if (languageError) {
		console.error('Error fetching Language data.', languageError);
		return { languageData: [], languageParams: [] };
	}

	if (!languageData || languageData.length === 0) {
		console.error('No Language data found.');
		return { languageData: [], languageParams: [] };
	}

	const languageParams: LanguageCodes[] = languageData
		.filter((elem: LanguageData) => elem?.code)
		.map((elem: LanguageCodes) => elem.code);

	return {
		languageData,
		languageParams
	};
};
