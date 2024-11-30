import type { Tables } from '$lib/server/database.types';
import type { Country } from '$lib/utils/Types/Country';

type Saint = Tables<'saints'>;

export type SaintWithCountry = Saint & {
	countries?: Country;
};
