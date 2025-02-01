export const LIST_DATA_SELECT_QUERY: string = `id, name, blurb, type, slug, language_code, countries (name, id)`;
export const COUNTRY_DATA_SELECT_QUERY: string = 'id, name, type';

export type ServerErrorType = {
	status: number;
	statusText: string;
};

export async function genericApiCall(apiCall: any): Promise<[any, ServerErrorType | undefined]> {
	let response;
	let serverError: ServerErrorType | undefined = undefined;
	try {
		response = await apiCall;

		if (response.statusText !== 'OK' || response.status !== 200) {
			console.warn(response);
			throw new Error('Could not retrieve data');
		}

		return [response.data, serverError];
	} catch (error: unknown) {
		serverError = {
			status: response.status,
			statusText: response.statusText
		};
		return [null, serverError];
	}
}

// export class GenericApiError extends Error {
// 	status: string;
//
// 	constructor({ status: string, statusText: string }: ServerErrorType) {
// 		super(statusText);
// 		this.status = status;
// 		// Set the prototype explicitly.
// 		Object.setPrototypeOf(this, GenericApiError.prototype);
// 	}
//
// 	sayHello() {
// 		return 'hello ' + this.message;
// 	}
// }
