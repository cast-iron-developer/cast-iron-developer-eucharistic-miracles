import type { Tables } from '$lib/server/database.types';
import type { Country } from '$lib/utils/Types/Country';

type Miracle = Tables<'miracles'>;

export type MiracleWithCountry = Miracle & {
	countries?: Country;
};
