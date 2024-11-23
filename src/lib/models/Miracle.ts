export interface Miracle {
	id: number;
	created_at: string;
	modified_at: string;
	name: string;
	blurb: string;
	quotes: string[];
	story: string;
	occurrence_year: number;
	draft: boolean;
	deleted: boolean;
	language_id: string;
	country_id: string;
}
