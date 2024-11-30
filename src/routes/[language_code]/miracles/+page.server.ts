import { supabase } from '$lib/server/supabaseClient';

import type { MiracleWithCountry } from '$lib/utils/Types/MiracleWithCountry';
import type { PageServerLoad } from './$types';
import { genericApiCall } from '$lib/utils/apiUtils';
import type { Tables } from '$lib/server/database.types';

export const load: PageServerLoad = async ({ params }) => {
	const [miracleData, miracleError] = await genericApiCall(
		supabase
			.from('miracles')
			.select(`*, countries (name)`)
			.eq('language_code', params.language_code)
			.eq('deleted', false)
			.eq('draft', false)
			.returns<MiracleWithCountry>()
	);

	if (miracleError) {
		console.error('Error fetching Miracle data.', miracleError);
		return { miracleData: [], countryData: [] };
	}

	if (!miracleData || miracleData.length === 0) {
		console.warn('No Miracle data was found.');
		return { miracleData: [], countryData: [] };
	}

	const countryKeys: string[] = miracleData
		.filter((key: string) => key !== null && key !== undefined)
		.map((data: Tables<'miracles'>) => data.country_id);

	if (countryKeys.length === 0) {
		console.warn('Could not get Country ID from Miracle Data.');
		return { miracleData, countryData: [] };
	}

	const { data: countryData, error: countryError } = await supabase
		.from('countries')
		.select('*')
		.in('id', countryKeys);

	if (countryError) {
		console.error('Error fetching Country data.', countryError);
		return { miracleData, countryData: [] };
	}

	if (!countryData) {
		console.warn('No Country data was found.');
		return { miracleData, countryData: [] };
	}

	return {
		miracleData,
		countryData
	};
};
