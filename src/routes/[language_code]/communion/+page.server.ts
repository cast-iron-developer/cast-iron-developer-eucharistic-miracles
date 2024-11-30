import { supabase } from '$lib/server/supabaseClient';

import type { PageServerLoad } from './$types';
import type { SaintWithCountry } from '$lib/utils/Types/SaintWithCountry';
import { genericApiCall } from '$lib/utils/apiUtils';
import type { Tables } from '$lib/server/database.types';

export const load: PageServerLoad = async ({ params }) => {
	const [communionData, communionError] = await genericApiCall(
		supabase
			.from('saints')
			.select(`*, countries (name)`)
			.eq('language_code', params.language_code)
			.eq('miraculous_communion', true)
			.eq('deleted', false)
			.eq('draft', false)
			.returns<SaintWithCountry>()
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
		.map((data: Tables<'saints'>) => data.country_id);

	if (countryKeys.length === 0) {
		console.warn('Could not get Country ID from Miracle Data.');
		return { communionData, countryData: [] };
	}

	const { data: countryData, error: countryError } = await supabase
		.from('countries')
		.select('*')
		.in('id', countryKeys);

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
