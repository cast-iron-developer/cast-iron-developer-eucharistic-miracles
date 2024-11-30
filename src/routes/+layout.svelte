<script lang="ts">
	import '../app.scss';
	import Navbar from '$lib/components/navigation/navbar.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	import { page } from '$app/stores';
	import { validLanguageCode } from '$lib/utils/LanguageEnum';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();

	let pager = $state($page);

	afterNavigate(() => {
		pager = $page;
	});

	const verifyPageParamValidity = (params: Record<string, string>): string | null => {
		if (params && params.language_code === '') {
			return null;
		}

		if (!validLanguageCode(params.language_code)) {
			return null;
		}
		return params.language_code;
	};
</script>

<Navbar urlParams={verifyPageParamValidity(pager.params)}></Navbar>
<main class="app font-montserrat">
	{@render children()}
</main>
<Footer urlParams={verifyPageParamValidity(pager.params)}></Footer>