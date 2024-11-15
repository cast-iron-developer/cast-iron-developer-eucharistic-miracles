import {miracles} from '../../dummy-data/miracles.js';

import type { PageServerLoad } from './$types';
import type { Miracle } from '$lib/models/Miracle';

export const load: PageServerLoad = async () => {
	return {
		miracles: miracles.map((miracle: Miracle) => ({
			title: miracle.title,
			blurb: miracle.blurb,
			description: miracle.description,
			year: miracle.occurrence_year
		}))
	};
};