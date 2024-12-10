import type { Tables } from '$lib/server/database.types';

type Miracle = Tables<'miracles'>;
type OurLady = Tables<'our_lady'>;
type Saint = Tables<'saints'>;

export type MiracleWithCountry = Miracle & {
	countries?: Country;
};

export type OurLadyWithCountry = OurLady & {
	countries?: Country;
};

export type SaintWithCountry = Saint & {
	countries?: Country;
};

export type ListData = {
	id: string;
	name: string;
	blurb: string;
	type: string;
	slug: string;
	language_code: string;
	countries: Country;
};

export type FilterData = {
	id: string;
	name: string;
	type: string;
};

export type LanguageData = LanguageCodes & {
	id: string;
	name: string;
};

export type LanguageCodes = {
	code: string;
};

export type Country = {
	id: string;
	name?: string;
};
