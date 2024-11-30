import { supabase } from '$lib/server/supabaseClient';

import type { PageServerLoad } from './$types';
import type { OurLadyWithCountry } from '$lib/utils/Types/OurLadyWithCountry';
import { genericApiCall } from '$lib/utils/apiUtils';
import type { Tables } from '$lib/server/database.types';

export const load: PageServerLoad = async ({ params }) => {
	const [ourLadyData, ourLadyError] = await genericApiCall(
		supabase
			.from('our_lady')
			.select(`*, country (name)`)
			.eq('language_code', params.language_code)
			.eq('deleted', false)
			.eq('draft', false)
			.returns<OurLadyWithCountry>()
	);

	if (ourLadyError) {
		console.error(`Error fetching data from Our Lady's table: ${ourLadyError}`);
		return { ourLadyData: [], countryData: [] };
	}

	if (!ourLadyData || ourLadyData.length === 0) {
		console.warn("No data found in Our Lady's table");
		return { ourLadyData: [], countryData: [] };
	}

	const countryKeys: string[] = ourLadyData
		.filter((key: string) => key !== null && key !== undefined)
		.map((data: Tables<'our_lady'>) => data.country_id);

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
