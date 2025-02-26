<script lang="ts">

	import type { NavigationListType } from '$lib/utils/types/general-types';
	import NavigationItem from '$lib/components/globals/nav-list-item.svelte';

	type NavigationListProps = {
		listStyles?: string,
		listItemStyles?: string,
		listData?: NavigationListType
		urlParam: string
	}

	let {
		listStyles,
		listItemStyles,
		listData,
		urlParam
	}: NavigationListProps = $props();
</script>

{#if listData && listData !== null}
	<ul class={listStyles ?? ''}>
		{#each listData.navigationListItems as item}
			<NavigationItem item={item} styles={listItemStyles ?? ''} param={urlParam}></NavigationItem>
		{/each}
	</ul>
{/if}