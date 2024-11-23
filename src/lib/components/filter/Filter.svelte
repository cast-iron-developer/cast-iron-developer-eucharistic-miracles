<script lang="ts">
	import type { Database } from '$lib/server/database.types';

	type Country = Database['public']['Tables']['countries']['Row'];
	type Filters = { countries?: string[] };

	interface FilterProps {
		filterList: Country[];
		input: string;
		onUpdateFilters: (filters: Filters) => void;
	}

	let { filterList, input, onUpdateFilters }: FilterProps = $props();

	const list = filterList as Country[];
	let locationFilters: string[] = $state([]);

	console.log('Filter component: ', filterList);

	const handleFilterChange = (event: Event) => {
		const target = event.target as HTMLInputElement;

		if (target.checked && !locationFilters.includes(target.value)) {
			locationFilters.push(target.value);
		} else {
			let index: number = locationFilters.indexOf(target.value);
			locationFilters.splice(index, 1);
		}

		onUpdateFilters({ countries: locationFilters });
	};

	const handleTextFilterInput = (event: Event) => {
		const target = event.target as HTMLInputElement;

		locationFilters = target.value ? list.filter(item => {
			return item.id.match(`${target.value}.*`);
		}) : list;

		onUpdateFilters({ countries: locationFilters });
	};
</script>
<aside class="section-miracles-aside px-2">
	<p class="text-2xl text-white mb-4">
		Search
	</p>
	<div class="search-filters">
		<div class="collapse collapse-arrow bg-base-200 mb-2">
			<input type="checkbox" />
			<div class="collapse-title text-xl font-medium">Countries</div>
			<div class="collapse-content">
				<input type="text" placeholder="Enter Country Here"
							 class="country-text-input input input-bordered w-full max-w-xs"
							 value={input} oninput={handleTextFilterInput} />
				<div class="country-list">
					{#each list as item }
						<label id={item.id.toString()} for={item.id}
									 class="country-label cursor-pointer label justify-normal">
							<input name={item.id} type="checkbox" class="checkbox" value={item.id}
										 data-item-id={item.id.toString()}
										 onchange={handleFilterChange} />
							<span class="label-text pl-2">{item.name}</span>
						</label>
					{/each}
				</div>
			</div>
		</div>
	</div>
</aside>

<style lang="scss">
  .section-miracles-aside {
    grid-column: 2/3;

    //.country-list {
    //  display: flex;
    //  flex-direction: column;
    //
    //  .country-label:has(input:checked) {
    //    order: -9999;
    //  }
    //}
  }
</style>