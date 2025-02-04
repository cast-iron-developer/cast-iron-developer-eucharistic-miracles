<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import type { NavigationListType } from '$lib/utils/types/general-types';
	import { siteNavigation } from '$lib/components/globals/site-navigation';

	let { urlParams: urlParam }: { urlParams: string } = $props();

	const navigation: NavigationListType = $state(siteNavigation);

	//TODO: refactor the nav items here
</script>

<footer class="footer bg-primary text-base-content p-10 text-white">
	<aside>
		<a href="/" aria-label="Eucharist Logo">
			<Icon height="3.5rem" width="3.5rem" />
		</a>
		<p>
			Eucharistic Miracles of the World
			<br />
			Saving souls since circa 33 AD
		</p>
	</aside>
	{#if urlParam && urlParam !== ""}
		<nav>
			<h6 class="footer-title">Internal Links</h6>
			{#each navigation.navigationListItems as item}
				<a href={`/${urlParam}/${item.href}`}>{item.title}</a>
			{/each}
		</nav>
	{/if}
	<nav>
		<h6 class="footer-title">Helpful Links</h6>
		<a href="https://www.vatican.va/content/vatican/en.html" class="link link-hover">Vatican (EN)</a>
		<a href="https://aleteia.org/" class="link link-hover">Aletia</a>
		<a href="http://www.carloacutis.com/en/association/presentazione" class="link link-hover">Official Site</a>
	</nav>
</footer>