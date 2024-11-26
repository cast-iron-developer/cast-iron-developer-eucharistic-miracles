<script lang="ts">
import img from '$lib/images/carlo-hero.jpg';
import Citations from '$lib/components/citations/citations.svelte';
import List from '$lib/components/list/List.svelte';
import Filter from '$lib/components/filter/Filter.svelte';

import type { Database } from '$lib/server/database.types.js';

type Saint = Database['public']['Tables']['saints']['Row'];
type Country = Database['public']['Tables']['countries']['Row'];
type ActiveFilters = { countryIds?: string[] };

let { data } = $props();
let activeFilters: ActiveFilters = $state({});
let countryInput: string = $state('');
let visibleCountries: Country[] = $state(data.countryData);
let visibleSaints: Saint[] = $derived.by(() => {
	if (activeFilters.countryIds && activeFilters.countryIds.length > 0) {
		return data.communionData.filter(item => {
			return activeFilters?.countryIds?.includes(item.country_id);
		});
	}

	return data.communionData;
});

const updatedFilters = (updatedFilters: ActiveFilters) => {
	activeFilters = { ...activeFilters, ...updatedFilters };
};
</script>

<section>
	<div
		class="hero min-h-screen"
		style="background-image: url({img});">
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-neutral-content text-center">
			<div class="max-w-md">
				<p class="mb-5 text-3xl font-bold">"To always be close to Jesus, that’s my life plan."</p>
			</div>
		</div>
	</div>
</section>

<section class="section-communion bg-primary py-20">
	<Filter filters={visibleCountries} input={countryInput} onUpdateFilters={updatedFilters} />
	<List list={visibleSaints} />
</section>

<Citations />

<style lang="scss">

  .section-communion {
    display: grid;
    grid-template-columns: 15px 2fr 10fr 15px;
    grid-template-rows: max-content;
    gap: 1.5rem;
  }
</style>