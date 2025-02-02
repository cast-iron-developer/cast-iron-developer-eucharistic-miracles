<script lang="ts">
	import '../../app.scss';
	import Navbar from '$lib/components/globals/navigation/site/navbar.svelte';
	import Footer from '$lib/components/globals/footer/footer.svelte';
	import type { Snippet } from 'svelte';
	import type { LayoutServerData } from './$types';

	let { data, children }: { data: LayoutServerData, children: Snippet } = $props();

</script>

<Navbar urlParams={data?.currentLanguageParam}></Navbar>
<main class="site font-montserrat">
	{@render children()}
</main>
<Footer urlParams={data?.currentLanguageParam}></Footer>