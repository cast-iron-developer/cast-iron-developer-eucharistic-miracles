import { supabase } from '$lib/server/supabaseClient';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { data: ourLadyData, error: ourLadyError } = await supabase
		.from('our_lady')
		.select('*')
		.eq('language_code', params.language_code)
		.eq('deleted', false)
		.eq('draft', false);

	if (ourLadyError) {
		console.error(`Error fetching data from Our Lady's table: ${ourLadyError}`);
		return { ourLadyData: [], countryData: [] };
	}

	if (!ourLadyData || ourLadyData.length === 0) {
		console.warn("No data found in Our Lady's table");
		return { ourLadyData: [], countryData: [] };
	}

	const countryKeys: string[] = ourLadyData
		.filter((key) => key !== null && key !== undefined)
		.map((data) => data.country_id);

	if (countryKeys.length === 0) {
		console.warn("Could not get Country ID from Our Lady's Data.");
		return { ourLadyData, countryData: [] };
	}

	const { data: countryData, error: countryError } = await supabase
		.from('countries')
		.select('*')
		.in('id', countryKeys);

	if (countryError) {
		console.error(`Error fetching data from Countries: ${countryError}`);
		return { ourLadyData, countryData: [] };
	}

	if (!countryData) {
		console.warn('No matching rows found in Country Data for the given foreign keys');
		return { ourLadyData, countryData: [] };
	}

	return {
		ourLadyData,
		countryData
	};
};
