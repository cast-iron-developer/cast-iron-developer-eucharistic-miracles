<script lang="ts">

	import type { NavigationItemType } from '$lib/utils/types/general-types';

	type NavigationListProps = {
		styles?: string,
		item: NavigationItemType,
		param: string
	}

	let {
		styles,
		item,
		param
	}: NavigationListProps = $props();

</script>

<li><a class={styles ?? ''} href={`/${param}/${item.href}`}>{item.title}</a></li>