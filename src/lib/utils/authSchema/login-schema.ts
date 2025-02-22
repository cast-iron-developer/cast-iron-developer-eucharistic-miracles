import { z } from 'zod';
import { isDevEnvironment, isProdEnvironment } from '$lib/utils/helpers/environment';

export const loginSchema = z
	.object({
		email: z
			.string({ required_error: 'Email is required.' })
			.min(1, { message: 'Email is required.' })
			.max(64, { message: 'Email must be less than 64 characters.' })
			.email({ message: 'Must be a valid email address.' }),
		password: z
			.string({ required_error: 'Password is required.' })
			.min(6, { message: 'Password must be longer than 6 characters' })
			.max(32, { message: 'Password must be less than 32 characters.' })
			.trim()
	})
	.superRefine(({ password }, ctx) => {
		if (
			isProdEnvironment() &&
			!isDevEnvironment() &&
			!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}$/)
		) {
			ctx.addIssue({
				code: 'custom',
				message: 'Password must include upper and lowercase letters, numbers, and symbols.',
				path: ['password']
			});
		}
	});
