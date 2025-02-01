<script lang="ts">
import img from '$lib/images/carlo-hero.jpg';
import Citations from '$lib/components/citations/citations.svelte';
import DataDisplay from '$lib/components/display-data/data-display.svelte';

let { data } = $props();

</script>

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

<section class="section-list-content bg-primary py-20 from-md:grid from-sm:grid-cols-[15px_2fr_10fr_15px] from-sm:grid-rows-[max-content] from-sm:gap-6">
	{#if !data.communionData && !data.countryData}
		<h3 class="text-2xl white">No Results found!</h3>
	{/if}
	<DataDisplay itemType={'Recipients'} listData={data.communionData} countryData={data.countryData} />
</section>

<Citations />