import { supabase } from '$lib/server/supabaseClient';
import { genericApiCall } from '$lib/utils/apiUtils';
import type { LanguageCodes, LanguageData } from '$lib/utils/Types/DatabaseTypes';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params }) => {
	const [languageData, languageError] = await genericApiCall(
		await supabase.from('languages').select('id, name, code').returns<LanguageData>()
	);

	if (languageError) {
		console.error('Error fetching Language data.', languageError);
		return { languageData: [], currentLanguageParam: '' };
	}

	if (!languageData || languageData.length === 0) {
		console.error('No Language data found.');
		return { languageData: [], currentLanguageParam: '' };
	}

	const languageParams: string[] = languageData
		.filter((elem: LanguageData) => elem?.code)
		.map((elem: LanguageCodes) => elem.code);

	let currentLanguageParam = '';
	if (params.language_code && languageParams.includes(params.language_code.toString())) {
		currentLanguageParam = params.language_code;
	}
	return {
		languageData,
		currentLanguageParam
	};
};
