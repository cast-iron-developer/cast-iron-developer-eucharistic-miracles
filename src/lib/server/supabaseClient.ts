import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';
import type { Database } from '$lib/server/database.types';

const getSupabaseUrl = (url: string | undefined) => {
	if (url === undefined) {
		throw new Error('Supabase URL is undefined');
	} else {
		return url;
	}
};

const getAnonKey = (key: string | undefined) => {
	if (key === undefined) {
		throw new Error('Supabase Anon Key is undefined');
	} else {
		return key;
	}
};

export const project: string | undefined = getSupabaseUrl(env.SUPABASE_URL);
export const anonKey: string | undefined = getAnonKey(env.SUPABASE_ANON_KEY);
export const supabase = createClient<Database>(project, anonKey);
