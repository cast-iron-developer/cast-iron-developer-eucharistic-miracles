<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	let { urlParams } = $props();

</script>

<footer class="footer bg-primary text-base-content p-10 text-white">
	<aside>
		<a href="/static" aria-label="Eucharist Logo">
			<Icon height="3.5rem" width="3.5rem" />
		</a>
		<p>
			Eucharistic Miracles of the World
			<br />
			Saving souls since circa 33 AD
		</p>
	</aside>
	{#if urlParams}
		<nav>
			<h6 class="footer-title">Internal Links</h6>
			<a href="/miracles">Miracles</a>
			<a href="/our-lady">Our Lady</a>
			<a href="/saints">Saints</a>
			<a href="/communion">Communion</a>
		</nav>
	{/if}
	<nav>
		<h6 class="footer-title">Helpful Links</h6>
		<a href="https://www.vatican.va/content/vatican/en.html" class="link link-hover">Vatican (EN)</a>
		<a href="https://aleteia.org/" class="link link-hover">Aletia</a>
		<a href="http://www.carloacutis.com/en/association/presentazione" class="link link-hover">Official Site</a>
	</nav>
</footer>