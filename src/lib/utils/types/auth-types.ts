export type LoginFormType = {
	data?: {
		email: string;
	};
	errors?: {
		email?: string[];
		password?: string[];
		message: string;
	};
};

export type MiracleFormType = {
	data?: {
		base_translation: boolean;
		blurb: string;
		country_id: string;
		deleted: boolean;
		draft: boolean;
		language_code: boolean;
		name: string;
		story: string;
		occurrence_year: number;
		quotes: string[];
		type: string;
	};
	errors?: {
		name?: string[];
		story?: string[];
		country_id?: string[];
	};
};