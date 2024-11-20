import { miracles } from '../../dummy-data/miracles.js';
import { locations } from '../../dummy-data/country';

import type { PageServerLoad } from './$types';
import type { Miracle } from '$lib/models/Miracle';
import type { Country } from '$lib/models/Country';

export const load: PageServerLoad = async () => {
	const miracleData = miracles
		.filter((miracle: Miracle) => !miracle.draft && !miracle.deleted)
		.map((miracle: Miracle) => ({
			id: miracle.id,
			created_at: miracle.created_at,
			title: miracle.title,
			blurb: miracle.blurb,
			description: miracle.description,
			feast_day: miracle.feast_day,
			occurrence_year: miracle.occurrence_year,
			occurrence_month: miracle.occurrence_month,
			draft: miracle.draft,
			deleted: miracle.deleted,
			modified_at: miracle.modified_at,
			location_name: miracle.location_name,
			short_blurb: miracle.short_blurb
		}));

	const countryData = locations
		.filter((country: Country) => !country.draft && !country.deleted)
		.map((country: Country) => ({
			id: country.id,
			created_at: country.created_at,
			modified_at: country.modified_at,
			name: country.name,
			deleted: country.deleted,
			draft: country.deleted
		}))
		.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			} else if (a.name > b.name) {
				return 1;
			} else {
				return 0;
			}
		});
	return {
		miracleData,
		countryData
	};
};
