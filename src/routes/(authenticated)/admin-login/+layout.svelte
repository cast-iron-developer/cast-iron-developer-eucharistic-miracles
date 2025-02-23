<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	import '../../../app.scss';
	import Navbar from '$lib/components/globals/navigation/navbar.svelte';
	import { dashboardNavigation } from '$lib/components/globals/dashboard-navigation';
	import type { NavigationListType } from '$lib/utils/types/general-types.js';

	let { data, children } = $props();
	let { session, supabase } = $derived(data);

	const navigation: NavigationListType = $state(dashboardNavigation);
	const authenticated: boolean = $derived.by(() => {
		return !!(data.session && data.user);
	});

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<Navbar isAdmin={false} navigationItems={navigation} isAuthenticated={authenticated}></Navbar>
<main class="admin font-montserrat bg-backgroundWhite h-[calc(100vh-76px)]">
	{@render children()}
</main>
