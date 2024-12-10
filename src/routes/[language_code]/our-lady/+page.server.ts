import { supabase } from '$lib/server/supabaseClient';

import type { PageServerLoad } from '../../../../../.svelte-kit/types/src/routes';
import {
	COUNTRY_DATA_SELECT_QUERY,
	genericApiCall,
	LIST_DATA_SELECT_QUERY
} from '$lib/utils/apiUtils';
import type { FilterData, ListData } from '$lib/utils/Types/DatabaseTypes';

export const load: PageServerLoad = async ({ params }) => {
	const [ourLadyData, ourLadyError] = await genericApiCall(
		supabase
			.from('our_lady')
			.select(LIST_DATA_SELECT_QUERY)
			.eq('language_code', params.language_code)
			.eq('deleted', false)
			.eq('draft', false)
			.returns<ListData>()
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
		.map((data: ListData) => data.countries.id);

	if (countryKeys.length === 0) {
		console.warn("Could not get Country ID from Our Lady's Data.");
		return { ourLadyData, countryData: [] };
	}

	const [countryData, countryError] = await genericApiCall(
		supabase
			.from('countries')
			.select(COUNTRY_DATA_SELECT_QUERY)
			.in('id', countryKeys)
			.returns<FilterData>()
	);

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
