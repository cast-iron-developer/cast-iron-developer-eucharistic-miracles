import { supabase } from '$lib/server/supabaseClient';
import { genericApiCall, LANGUAGE_DATA_SELECT_QUERY } from '$lib/utils/apiUtils';
import type { LanguageCodes, LanguageData, ServerErrorType } from '$lib/utils/types/general-types';
import type { LayoutServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ params }) => {
	const [languageData, languageError]: [LanguageData[], ServerErrorType | null] =
		await genericApiCall<LanguageData>(
			await supabase.from('languages').select(LANGUAGE_DATA_SELECT_QUERY)
		);

	if (languageError) {
		error(languageError.status, {
			message: languageError.statusText
		});
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
