import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { ZodError } from 'zod';
import { AuthApiError } from '@supabase/supabase-js';
import { loginSchema } from '$lib/utils/authSchema/login-schema';
import { useDebug } from '$lib/utils/helpers/server-environment-helpers';

export const actions: Actions = {
	signup: async ({ request, locals: { supabase } }) => {
		const formData = Object.fromEntries(await request.formData());

		try {
			const result = loginSchema.parse(formData);

			const email = result.email;
			const password = result.password;

			const { error } = await supabase.auth.signUp({ email, password });

			if (error) {
				if (useDebug()) {
					console.log(`Login Failed for user: ${email}`);
					console.warn(error);
				}

				throw new AuthApiError(error.message, error.status, error.code);
			}
		} catch (e: any) {
			const { password, ...rest } = formData;
			if (e instanceof ZodError) {
				const { fieldErrors: errors } = e.flatten();

				return {
					data: rest,
					errors
				};
			} else if (e instanceof AuthApiError) {
				// supabase error handling here
				return {
					data: rest,
					errors: {
						message: e.message
					}
				};
			} else {
				// fallback error handling
				return {
					data: rest,
					errors: {
						message: 'Unknown error encountered.'
					}
				};
			}
		}

		// finally redirect to login
		redirect(303, '/admin-login');
	},
	login: async ({ request, locals: { supabase } }) => {
		const formData = Object.fromEntries(await request.formData());

		try {
			const result = loginSchema.parse(formData);

			const email = result.email;
			const password = result.password;

			const { error } = await supabase.auth.signInWithPassword({ email, password });

			if (error) {
				if (useDebug()) {
					console.log(`Login Failed for user: ${email}`);
					console.warn(error);
				}

				throw new AuthApiError(error.message, error.status, error.code);
			}
		} catch (e: any) {
			const { password, ...rest } = formData;
			if (e instanceof ZodError) {
				console.log(e.flatten());
				const { fieldErrors: errors } = e.flatten();

				return {
					data: rest,
					errors
				};
			} else if (e instanceof AuthApiError) {
				// supabase error handling here
				return {
					data: rest,
					errors: {
						message: e.message
					}
				};
			} else {
				// fallback error handling
				return {
					data: rest,
					errors: {
						message: 'Unknown error encountered.'
					}
				};
			}
		}

		// if we get here. should be good to go
		redirect(303, '/dashboard');
	}
};
