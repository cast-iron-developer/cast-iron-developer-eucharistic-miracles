<script lang="ts">
	import type { Database } from '$lib/server/database.types';

	type Country = Database['public']['Tables']['countries']['Row'];
	type ActiveFilters = { countryIds?: string[] };

	interface FilterProps {
		filters: Country[];
		input: string;
		onUpdateFilters: (activeFilters: ActiveFilters) => void;
	}

	let { filters, input, onUpdateFilters }: FilterProps = $props();

	let list: Country[] = $state(filters);
	let locationFiltersIds: string[] = $state([]);

	const handleFilterChange = (event: Event) => {
		const target = event.target as HTMLInputElement;

		if (target.checked && !locationFiltersIds.includes(target.value)) {
			locationFiltersIds.push(target.value);
		} else {
			let index: number = locationFiltersIds.indexOf(target.value);
			locationFiltersIds.splice(index, 1);
		}

		console.log('updating filters');
		onUpdateFilters({ countryIds: locationFiltersIds });
	};

	const handleTextFilterInput = (event: Event) => {
		const target = event.target as HTMLInputElement;

		list = target.value ? filters.filter(item => {
			return item.name.match(new RegExp(`^${target.value}`, 'i'));
		}) : filters;

		// do not believe I need this here:
		//onUpdateFilters({ countryIds: locationFiltersIds });
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
							<input name={item.id} type="checkbox" class="checkbox"
										 value={item.id}
										 checked={locationFiltersIds.includes(item.id)}
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

    .country-list {
      display: flex;
      flex-direction: column;

      .country-label:has(input:checked) {
        order: -9999;
      }
    }
  }
</style>