<script lang="ts">
	import NavigationList from '$lib/components/globals/nav-list.svelte';
	import type { NavigationListType, NavigationStyles } from '$lib/utils/types/general-types';

	let { styles: styles, listData: listData, urlParam: urlParam }: {
		styles: NavigationStyles,
		listData?: NavigationListType,
		urlParam: string
	} = $props();

</script>
{#if listData && listData !== null}
	<div class="dropdown mr-2">
		<div tabindex="0" role="button" class={styles.menuButton}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 24 24"
				stroke="#eeeeee">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h8m-8 6h16" />
			</svg>
		</div>
		<NavigationList
			listStyles={styles.mobileListStyles}
			listItemStyles={styles.mobileItemStyles}
			listData={listData}
			urlParam={urlParam} />
	</div>
{/if}
