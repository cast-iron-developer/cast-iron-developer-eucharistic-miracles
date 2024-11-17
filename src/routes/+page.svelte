<script>
	import img from '$lib/images/carlo-hero.jpg'
</script>
<svelte:head>
	<title>Eucharistic Miracles of the World!</title>
	<meta name="description" content="Using Modern Web Technologies to bring Bl. Carlo Acutis' dream of reaching the masses with the beauty of Jesus being fully present in the Eucharist." />
</svelte:head>


<div class="collapse bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">Click me to show/hide content</div>
	<div class="collapse-content">
		<p>hello</p>
	</div>
</div>


<section>
	<div
		class="hero min-h-screen"
		style="background-image: url({img});">
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-neutral-content text-center">
			<div class="max-w-md">
				<p class="mb-5 text-3xl font-bold">"To always be close to Jesus, that’s my life plan."</p>
			</div>
		</div>
	</div>
</section>