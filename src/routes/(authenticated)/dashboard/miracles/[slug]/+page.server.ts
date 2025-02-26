import type { Actions, PageServerLoad } from './$types';
import type { MiracleTableType, ServerErrorType } from '$lib/utils/types/general-types';
import { genericApiCall } from '$lib/utils/apiUtils';
import { supabase } from '$lib/server/supabaseClient';
import { error } from '@sveltejs/kit';
import { editMiracleSchema } from '$lib/utils/authSchema/edit-miracle-schema';

export const load: PageServerLoad = async ({ params }) => {
	const [miracleData, miracleError]: [MiracleTableType[], ServerErrorType | null] =
		await genericApiCall<MiracleTableType>(
			supabase.from('miracles').select('*').eq('slug', params.slug).limit(1)
		);

	if (miracleError) {
		error(miracleError.status, {
			message: miracleError.statusText
		});
	}

	return {
		miracleData: miracleData[0]
	};
};

export const actions: Actions = {
	update: async ({ request, locals: { supabase } }) => {
		const formData = Object.fromEntries(await request.formData());

		try {
			const result = editMiracleSchema.parse(formData);


		} catch (e: any) {

		}
	}
};
