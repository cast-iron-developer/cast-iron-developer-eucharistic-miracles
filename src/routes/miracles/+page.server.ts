import { supabase } from '$lib/server/supabaseClient';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { data: miracleData, error: miracleError } = await supabase
		.from('miracles')
		.select('*')
		.eq('deleted', false)
		.eq('draft', false);

	if (miracleError) {
		console.error(`Error fetching data from the Miracle table: ${miracleError}`);
		return { miracleData: [], countryData: [] };
	}

	if (!miracleData || miracleData.length === 0) {
		console.warn('No data found in Miracle table');
		return { miracleData: [], countryData: [] };
	}

	const countryKeys: string[] = miracleData
		.filter((key) => key !== null && key !== undefined)
		.map((data) => data.country_id);

	if (countryKeys.length === 0) {
		console.warn('Could not get Country ID from Miracle Data.');
		return { miracleData, countryData: [] };
	}

	const { data: countryData, error: countryError } = await supabase
		.from('countries')
		.select('*')
		.in('id', countryKeys);

	if (countryError) {
		console.error(`Error fetching data from Countries: ${countryError}`);
		return { miracleData, countryData: [] };
	}

	if (!countryData) {
		console.warn('No matching rows found in Country Data for the given foreign keys');
		return { miracleData, countryData: [] };
	}

	return {
		miracleData,
		countryData
	};
};
