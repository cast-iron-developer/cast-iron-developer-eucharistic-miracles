export async function genericApiCall(apiCall: any) {
	try {
		const data = await apiCall;
		return [data.data, null];
	} catch (error) {
		console.error(error);
		return [null, error];
	}
}
