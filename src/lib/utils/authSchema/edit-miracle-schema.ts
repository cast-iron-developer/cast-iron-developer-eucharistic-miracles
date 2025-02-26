import { z } from 'zod';

export const editMiracleSchema = z.object({
	name: z.string(),
	blurb: z.string(),
	quotes: z.string(),
	story: z.string(),
	occurrence_year: z.number().nullable(),
	base_translation: z.boolean(),
	language_code: z.string(),
	type: z.string(),
	draft: z.boolean(),
	deleted: z.boolean()
})