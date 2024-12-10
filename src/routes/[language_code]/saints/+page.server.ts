import { supabase } from '$lib/server/supabaseClient';

import type { PageServerLoad } from '../../../../../.svelte-kit/types/src/routes';
import {
	COUNTRY_DATA_SELECT_QUERY,
	genericApiCall,
	LIST_DATA_SELECT_QUERY
} from '$lib/utils/apiUtils';
import type { FilterData, ListData } from '$lib/utils/Types/DatabaseTypes';

export const load: PageServerLoad = async ({ params }) => {
	const [saintData, saintError] = await genericApiCall(
		supabase
			.from('saints')
			.select(LIST_DATA_SELECT_QUERY)
			.eq('language_code', params.language_code)
			.eq('miraculous_communion', false)
			.eq('deleted', false)
			.eq('draft', false)
			.returns<ListData>()
	);

	if (saintError) {
		console.error(`Error fetching data from Saints table: ${saintData}`);
		return { saintData: [], countryData: [] };
	}

	if (!saintData || saintData.length === 0) {
		console.warn('No data found in Saints table');
		return { saintData: [], countryData: [] };
	}

	const countryKeys: string[] = saintData
		.filter((key: string) => key !== null && key !== undefined)
		.map((data: ListData) => data.countries.id);

	if (countryKeys.length === 0) {
		console.warn('Could not get Country ID from Saint Data.');
		return { saintData, countryData: [] };
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
		return { saintData, countryData: [] };
	}

	if (!countryData) {
		console.warn('No matching rows found in Country Data for the given foreign keys');
		return { saintData, countryData: [] };
	}

	return {
		saintData,
		countryData
	};
};
