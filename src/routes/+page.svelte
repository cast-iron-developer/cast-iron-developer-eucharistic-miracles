<script>
	import img from '$lib/images/carlo-hero.jpg'

	let { data } = $props();

</script>
<svelte:head>
	<title>Eucharistic Miracles of the World!</title>
	<meta name="description" content="Using Modern Web Technologies to bring Bl. Carlo Acutis' dream of reaching the masses with the beauty of Jesus being fully present in the Eucharist." />
</svelte:head>

<section>
	<div
		class="hero min-h-screen"
		style="background-image: url({img});">
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-neutral-content text-center">
			<div class="max-w-md">
				<p class="mb-5 text-3xl font-bold">"To always be close to Jesus, that’s my life plan."</p>
				<p class="text-xl font-bold">Select a language:</p>
				{#if data.languageData}
					<ul class="flex flex-wrap justify-around">
					{#each data.languageData as item}
						<li class="m-2">
							<a class="visited:text-purple-600 focus-visible:ring hover:bg-secondary-100 p-2 rounded" href={`/${item.code}/`}>{item.name}</a>
						</li>
					{/each}
					</ul>

				{/if}
			</div>
		</div>
	</div>
</section>