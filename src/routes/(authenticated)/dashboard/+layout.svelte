<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	import '../../../app.scss';
	import Navbar from '$lib/components/globals/navigation/navbar.svelte';
	import { dashboardNavigation } from '$lib/components/globals/dashboard-navigation';
	import type { NavigationListType } from '$lib/utils/types/general-types.js';
	import { useDebug } from '$lib/utils/helpers/client-environment-helpers';

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

	const logout = async () => {
		try {
			const { error } = await supabase.auth.signOut();

			if (!error) {
				// if we received no auth errors, navigate home.
				await goto('/admin-login');
			}

		} catch (error: any) {
			if (useDebug()) {
				console.log(error);
			}
		}
	};
</script>

<Navbar isAdmin={true} urlParams={'dashboard'} navigationItems={navigation} isAuthenticated={authenticated}
				logout={logout}></Navbar>
<main class="admin font-montserrat bg-backgroundWhite h-[calc(100vh-76px)]">
	{@render children()}
</main>
