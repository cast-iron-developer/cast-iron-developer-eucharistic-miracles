import type { Tables } from '$lib/server/database.types';
import type { Country } from '$lib/utils/Types/Country';

type OurLady = Tables<'our_lady'>;

export type OurLadyWithCountry = OurLady & {
	countries?: Country;
};
