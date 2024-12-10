import { supabase } from '$lib/server/supabaseClient';
import type { PageServerLoad } from '../../../../../.svelte-kit/types/src/routes';
import {
	COUNTRY_DATA_SELECT_QUERY,
	genericApiCall,
	LIST_DATA_SELECT_QUERY
} from '$lib/utils/apiUtils';
import type { FilterData, ListData } from '$lib/utils/Types/DatabaseTypes';

export const load: PageServerLoad = async ({ params }) => {
	const [miracleData, miracleError] = await genericApiCall(
		supabase
			.from('miracles')
			.select(LIST_DATA_SELECT_QUERY)
			.eq('language_code', params.language_code)
			.eq('deleted', false)
			.eq('draft', false)
			.returns<ListData>()
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
		.map((data: ListData) => data.countries.id);

	if (countryKeys.length === 0) {
		console.warn('Could not get Country ID from Miracle Data.');
		return { miracleData, countryData: [] };
	}

	const [countryData, countryError] = await genericApiCall(
		supabase
			.from('countries')
			.select(COUNTRY_DATA_SELECT_QUERY)
			.in('id', countryKeys)
			.returns<FilterData>()
	);

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
