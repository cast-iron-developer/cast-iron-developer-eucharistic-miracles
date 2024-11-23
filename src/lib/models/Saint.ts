export interface Saint {
	id: number;
	created_at: string;
	modified_at: string;
	name: string;
	blurb: string;
	quotes: string[];
	story: string;
	draft: boolean;
	deleted: boolean;
	location_id: string;
	country_id: string;
	canonized: boolean;
	beatified: boolean;
	feast_day: string;
	miraculous_communion: boolean;
}