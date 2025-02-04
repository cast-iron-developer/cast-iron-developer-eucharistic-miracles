<script lang="ts">
	import '../../app.scss';
	import Navbar from '$lib/components/globals/navigation/site/navbar.svelte';
	import { dashboardNavigation } from '$lib/components/globals/dashboard-navigation';
	import type { NavigationListType } from '$lib/utils/types/general-types';

	let { children } = $props();

	const navigation: NavigationListType = $state(dashboardNavigation);

</script>

<Navbar isAdmin={true} navigationItems={navigation} urlParams={'admin'}></Navbar>
<div class="bg-secondary-200 text-white font-bold flex justify-center">
	<p class="my-1">This is the Administrative Dashboard</p>
</div>
<main>
	{@render children()}
</main>
