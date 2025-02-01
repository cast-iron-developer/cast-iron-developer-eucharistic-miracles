<script lang="ts">

	import type { Tables } from '$lib/server/database.types';
	import Carousel from '$lib/components/Carousel/Carousel.svelte';

	let { data } = $props();

	const pageData: Tables<'miracles'> = $state(data.miracleData[0]);
</script>

<section class="intro py-20 container grid gap-4 grid-cols-[15px_6fr_4fr_15px]">
	<article class="intro-blurb col-start-2 col-span-1">
		{pageData.blurb}
	</article>
	<aside class="intro-image col-start-3 col-span-1">
		<div class="card glass w-96">
			<div class="card-body">
				<h2 class="text-2xl text-center">{pageData.name}</h2>
			</div>
			<figure>
				<img
					src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
					alt="car!" />
			</figure>
		</div>
	</aside>
</section>
<section class="images bg-neutral py-20">
	<Carousel items={data.carouselData} />
</section>
<section class="main">
	<article class="main-story">

	</article>
</section>