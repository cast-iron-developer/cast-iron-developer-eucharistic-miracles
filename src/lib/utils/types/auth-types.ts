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
