<script lang="ts">

	import List from '$lib/components/display-data/list/List.svelte';
	import FilterList from '$lib/components/display-data/filter/FilterList.svelte';
	import type { Filters } from '$lib/components/display-data/types/types';
	import type { FilterData, ListData } from '$lib/utils/types/DatabaseTypes';

	type DataDisplayProps = {
		itemType: string;
		listData: ListData[];
		countryData: FilterData[];
	};

	let {
		itemType,
		listData,
		countryData
	}: DataDisplayProps = $props();

	let currentFilters: Filters = $state({});
	let itemInput: string = $state('');
	let countryTextInput: string = $state('');
	let countries: FilterData[] = $state(countryData);
	let list: ListData[] = $derived.by(() => {
		if (currentFilters.countryIds && currentFilters.countryIds.length > 0) {
			return listData.filter((item: ListData) => {
				if ((currentFilters?.countryIds && currentFilters?.countryIds?.length > 0) || (currentFilters?.itemIds && currentFilters?.itemIds?.length > 0)) {
					return currentFilters?.countryIds?.includes((item.countries.id)) || currentFilters?.itemIds?.includes(item.id);
				}
			});
		}

		return listData;
	});

	// define utils
	const updatedFilters = (updatedFilters: Filters) => {
		currentFilters = { ...currentFilters, ...updatedFilters };
	};
</script>


<FilterList
	{itemType}
	itemTextInput={itemInput}
	items={listData}
	countries={countries}
	countryTextInput={countryTextInput}
	onUpdateFilters={updatedFilters} />

<List
	list={list} />