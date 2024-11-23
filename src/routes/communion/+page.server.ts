import { supabase } from '$lib/server/supabaseClient';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { data: communionData, error: communionError } = await supabase
		.from('saints')
		.select('*')
		.eq('miraculous_communion', true)
		.eq('deleted', false)
		.eq('draft', false);

	if (communionError) {
		console.error(`Error fetching data from the Communion table: ${communionError}`);
		return { communionData: [], countryData: [] };
	}

	if (!communionData || communionData.length === 0) {
		console.warn('No data found in Miracle table');
		return { communionData: [], countryData: [] };
	}

	const countryKeys: string[] = communionData
		.map((data) => data.country_id)
		.filter((key) => key !== null && key !== undefined);

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
