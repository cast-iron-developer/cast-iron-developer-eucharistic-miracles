import {miracles} from '../../dummy-data/miracles.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {miracles}
}