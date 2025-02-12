import type { HandleFetch, HandleServerError } from '@sveltejs/kit';
import { type Handle, redirect } from '@sveltejs/kit';
import { createServerClient } from '@supabase/ssr';
import { sequence } from '@sveltejs/kit/hooks';
import { env } from '$env/dynamic/private';

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

const supabase: Handle = async ({ event, resolve }) => {
	/**
	 * Creates a Supabase client specific to this server request.
	 *
	 * The Supabase client gets the Auth token from the request cookies.
	 */
	event.locals.supabase = createServerClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
		cookies: {
			getAll: () => event.cookies.getAll(),
			/**
			 * SvelteKit's cookies API requires `path` to be explicitly set in
			 * the cookie options. Setting `path` to `/` replicates previous/
			 * standard behavior.
			 */
			setAll: (cookiesToSet) => {
				cookiesToSet.forEach(({ name, value, options }) => {
					event.cookies.set(name, value, { ...options, path: '/' });
				});
			}
		}
	});

	/**
	 * Unlike `supabase.auth.getSession()`, which returns the session _without_
	 * validating the JWT, this function also calls `getUser()` to validate the
	 * JWT before returning the session.
	 */
	event.locals.safeGetSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		if (!session) {
			return { session: null, user: null };
		}

		const {
			data: { user },
			error
		} = await event.locals.supabase.auth.getUser();
		if (error) {
			// JWT validation has failed
			return { session: null, user: null };
		}

		return { session, user };
	};

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			/**
			 * Supabase libraries use the `content-range` and `x-supabase-api-version`
			 * headers, so we need to tell SvelteKit to pass it through.
			 */
			return name === 'content-range' || name === 'x-supabase-api-version';
		}
	});
};

const authGuard: Handle = async ({ event, resolve }) => {
	const { session, user } = await event.locals.safeGetSession();
	event.locals.session = session;
	event.locals.user = user;

	if (!event.locals.session && event.url.pathname.startsWith('/private')) {
		redirect(303, '/auth');
	}

	if (event.locals.session && event.url.pathname === '/auth') {
		redirect(303, '/private');
	}

	return resolve(event);
};

export const handle: Handle = sequence(supabase, authGuard);
