import { supabase } from '$lib/server/supabaseClient';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { data: saintData, error } = await supabase
		.from('saints')
		.select('*')
		.eq('deleted', false)
		.eq('draft', false);

	if (error) {
		console.error(`Error fetching data from Saints table: ${saintData}`);
		return { saintData: [], countryData: [] };
	}

	if (!saintData || saintData.length === 0) {
		console.warn('No data found in Saints table');
		return { saintData: [], countryData: [] };
	}

	const countryKeys: string[] = saintData
		.map((data) => data.country_id)
		.filter((key) => key !== null && key !== undefined);

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
