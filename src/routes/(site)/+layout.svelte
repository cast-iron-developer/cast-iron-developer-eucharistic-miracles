<script lang="ts">
	import '../../app.scss';
	import Navbar from '$lib/components/navigation/navbar.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
	import type { Snippet } from 'svelte';
	import type { LayoutServerData } from '../../../.svelte-kit/types/src/routes';

	let { data, children }: { data: LayoutServerData, children: Snippet } = $props();

</script>

<Navbar urlParams={data?.currentLanguageParam}></Navbar>
<main class="site font-montserrat">
	{@render children()}
</main>
<Footer urlParams={data?.currentLanguageParam}></Footer>