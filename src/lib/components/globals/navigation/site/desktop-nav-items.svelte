<script lang="ts">
	import NavigationList from '$lib/components/globals/nav-list.svelte';
	import type { NavigationListType, NavigationStyles } from '$lib/utils/types/general-types';

	let { styles: styles, listData: listData, urlParam: urlParam }: {
		styles: NavigationStyles,
		listData?: NavigationListType,
		urlParam: string
	} = $props();

</script>

<div class={styles.navbar}>
	<NavigationList
		listStyles={styles.desktopListStyles}
		listItemStyles={styles.desktopItemStyles}
		listData={listData}
		urlParam={urlParam} />
</div>