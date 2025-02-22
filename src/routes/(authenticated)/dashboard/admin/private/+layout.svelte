<script lang="ts">

	import { goto } from '$app/navigation';

	let { data, children } = $props();
	let { supabase } = $derived(data);

	const logout = async () => {
		try {
			const { error } = await supabase.auth.signOut();

			if (!error) {
				// if we received no auth errors, navigate home.
				await goto('/dashboard');
			}

		} catch (error: any) {
			console.log(error);
		}
	};
</script>

<header>
	<nav>
		<a href="/">Home</a>
	</nav>
	<button onclick={logout}>Logout</button>
</header>
<main>
	{@render children()}
</main>