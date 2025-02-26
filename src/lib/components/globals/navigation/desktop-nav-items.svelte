<script lang="ts">
	import NavigationList from '$lib/components/globals/nav-list.svelte';
	import type { NavigationListType, NavigationStyles } from '$lib/utils/types/general-types';

	let { styles: styles, listData: listData, urlParam: urlParam }: {
		styles: NavigationStyles,
		listData?: NavigationListType,
		urlParam: string
	} = $props();

</script>

<div class="navbar-end hidden lg:flex">
	<NavigationList
		listStyles={"menu menu-horizontal px-1 text-white"}
		listItemStyles={styles.desktopListStyles}
		listData={listData}
		urlParam={urlParam} />
</div>