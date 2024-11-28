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

export const genericError = (errorArray: any[]) => {};
