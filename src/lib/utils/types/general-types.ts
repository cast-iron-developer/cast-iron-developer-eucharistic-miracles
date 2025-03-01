import type { Tables } from '$lib/server/database.types';

export type MiracleTableType = Tables<'miracles'>;
export type OurLadyTableType = Tables<'our_lady'>;
export type SaintTableType = Tables<'saints'>;
export type LanguageTableType = Tables<'languages'>;
export type CountryTableType = Tables<'countries'>;

export type MiracleWithCountry = MiracleTableType & {
	countries?: CountryType;
};

export type FullMiracleData = MiracleTableType & {
	countries?: CountryType;
	languages?: LanguageType;
};

export type OurLadyWithCountry = OurLadyTableType & {
	countries?: CountryType;
};

export type SaintWithCountry = SaintTableType & {
	countries?: CountryType;
};

export type ListData = {
	id: string;
	name: string;
	blurb: string;
	type: string;
	slug: string;
	language_code: string;
	countries: CountryType;
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

export type CountryType = {
	id: string;
	name?: string;
};

export type LanguageType = {
	code?: string;
	name?: string;
};

export type CarouselItem = {
	id: string;
	imageUrl: string;
	altText: string;
	description?: string;
	position: number;
};

// API Error
export type ServerErrorType = {
	status: number;
	statusText: string;
};

// API Response Data
export type ApiDatabaseResponseType<T> = T[];

// Navigation Types
export type NavigationItemType = {
	title: string;
	icon?: Icon;
	href?: string;
	onClickAction?: Promise<void>;
};

export type AdminItemsType = {
	title: string;
	style: string;
};

export type NavigationListType = {
	navigationListItems: NavigationItemType[];
};

export type Icon = {
	icon: string;
	width: string;
	height: string;
};

export type NavigationStyles = {
	navbar: string;
	container: string;
	menuButton: string;
	mobileListStyles: string;
	mobileItemStyles: string;
	logoStyles: string;
	desktopListStyles: string;
	desktopItemStyles: string;
};
