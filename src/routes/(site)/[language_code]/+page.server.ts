import { supabase } from '$lib/server/supabaseClient';
import { genericApiCall } from '$lib/utils/apiUtils';
import type { Database } from '$lib/server/database.types';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

type Saint = Database['public']['Tables']['saints']['Row'];

export const load: PageServerLoad = async ({ params }) => {
	if (params.language_code === null || params.language_code === undefined) {
		console.error('Could not get data.');
		error(400, {
			message: 'Bad Request'
		});
	}

	const [languageData, languageError] = await genericApiCall(
		supabase.from('languages').select('*').eq('language_code', params.language_code)
	);

	if (languageError) {
		console.log(languageError);
		error(languageError.status, {
			message: languageError.statusText
		});
	}

	console.log('do we get here? we ought not');
	const [miracleData, miracleError] = await genericApiCall(
		supabase
			.from('miracles')
			.select('*')
			.eq('deleted', false)
			.eq('draft', false)
			.eq('language_code', params.language_code)
	);

	if (miracleError) {
		console.error('Error retrieving Miracle Data.', miracleError);
	}

	const [saintData, saintError] = await genericApiCall(
		supabase
			.from('saints')
			.select('*')
			.eq('deleted', false)
			.eq('draft', false)
			.eq('language_code', params.language_code)
	);

	if (saintError) {
		console.error('Error retrieving Saint Data.', saintError);
	}

	const miraculousCommunions: Saint[] = saintData
		? saintData.filter((item: Saint) => item.miraculous_communion)
		: {};
	const saints: Saint[] = saintData
		? saintData.filter((item: Saint) => !item.miraculous_communion)
		: {};

	const [ourLadyData, ourLadyError] = await genericApiCall(
		supabase
			.from('our_lady')
			.select('*')
			.eq('deleted', false)
			.eq('draft', false)
			.eq('language_code', params.language_code)
	);

	if (ourLadyError) {
		console.error('Error retrieving Data on Our Lady');
	}

	return {
		miracleData,
		communions: miraculousCommunions,
		saints: saints,
		ourLadyData,
		code: params.language_code
	};
};
