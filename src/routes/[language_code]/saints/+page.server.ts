import { supabase } from '$lib/server/supabaseClient';

import type { PageServerLoad } from './$types';
import { genericApiCall } from '$lib/utils/apiUtils';
import type { SaintWithCountry } from '$lib/utils/Types/SaintWithCountry';
import type { Tables } from '$lib/server/database.types';

export const load: PageServerLoad = async ({ params }) => {
	const [saintData, saintError] = await genericApiCall(
		supabase
			.from('saints')
			.select(`*, countries (name)`)
			.eq('language_code', params.language_code)
			.eq('miraculous_communion', false)
			.eq('deleted', false)
			.eq('draft', false)
			.returns<SaintWithCountry>()
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
		.map((data: Tables<'saints'>) => data.country_id);

	if (countryKeys.length === 0) {
		console.warn('Could not get Country ID from Saint Data.');
		return { saintData, countryData: [] };
	}

	const { data: countryData, error: countryError } = await supabase
		.from('countries')
		.select('*')
		.in('id', countryKeys);

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
