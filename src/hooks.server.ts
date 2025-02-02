import type { HandleFetch, HandleServerError } from '@sveltejs/kit';

// S.O. to https://joyofcode.xyz/sveltekit-hooks#error-logging

export const handleFetch: HandleFetch = async ({ request, fetch }) => {
	if (request.url.startsWith('http')) {
		const url = request.url.replace('http', 'https');
		request = new Request(url, request);

		console.log(request.url);
	}

	return fetch(request);
};

export const handleError: HandleServerError = async ({ error, event }) => {
	// this is for unexpected errors; will have to brainstorm how to use it
	console.log(error);
	return {
		message: 'Yikes! 💩'
	};
};
