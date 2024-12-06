export const LIST_DATA_SELECT_QUERY: string = `id, name, blurb, type, slug, language_code, countries (name, id)`;
export const COUNTRY_DATA_SELECT_QUERY: string = 'id, name, type';

export async function genericApiCall(apiCall: any) {
	try {
		const data = await apiCall;

		if (data.statusText !== 'OK') {
			throw new Error("Data is not 'ok'");
		}

		return [data.data, null];
	} catch (error) {
		return [null, error];
	}
}
