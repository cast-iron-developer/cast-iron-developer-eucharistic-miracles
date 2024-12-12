import { supabase } from '$lib/server/supabaseClient';

import type { PageServerLoad } from './$types';
import type { FilterData, ListData } from '$lib/utils/types/DatabaseTypes';
import {
	COUNTRY_DATA_SELECT_QUERY,
	genericApiCall,
	LIST_DATA_SELECT_QUERY
} from '$lib/utils/apiUtils';

export const load: PageServerLoad = async ({ params }) => {
	const [communionData, communionError] = await genericApiCall(
		supabase
			.from('saints')
			.select(LIST_DATA_SELECT_QUERY)
			.eq('language_code', params.language_code)
			.eq('miraculous_communion', true)
			.eq('deleted', false)
			.eq('draft', false)
			.returns<ListData>()
	);

	if (communionError) {
		console.error(`Error fetching data from the Communion table: ${communionError}`);
		return { communionData: [], countryData: [] };
	}

	if (!communionData || communionData.length === 0) {
		console.warn('No data found in Miracle table');
		return { communionData: [], countryData: [] };
	}

	const countryKeys: string[] = communionData
		.filter((key: string) => key !== null && key !== undefined)
		.map((data: ListData) => data.countries.id);

	if (countryKeys.length === 0) {
		console.warn('Could not get Country ID from Miracle Data.');
		return { communionData, countryData: [] };
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
		return { communionData, countryData: [] };
	}

	if (!countryData) {
		console.warn('No matching rows found in Country Data for the given foreign keys');
		return { communionData, countryData: [] };
	}

	return {
		communionData,
		countryData
	};
};
