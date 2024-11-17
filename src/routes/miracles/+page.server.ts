import { miracles } from '../../dummy-data/miracles.js';
import { locations } from '../../dummy-data/location';

import type { PageServerLoad } from './$types';
import type { Miracle } from '$lib/models/Miracle';
import type { Location } from '$lib/models/Location';

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

	const locationData = locations
		.filter((location: Location) => !location.draft && !location.deleted)
		.map((location: Location) => ({
			id: location.id,
			created_at: location.created_at,
			modified_at: location.modified_at,
			name: location.name,
			deleted: location.deleted,
			draft: location.deleted
		}));
	return {
		miracleData,
		locationData
	};
};
