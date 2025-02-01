<script lang="ts">
	import img from '$lib/images/Lanciano.jpg';
	import DataDisplay from '$lib/components/display-data/data-display.svelte';
	import Citations from '$lib/components/citations/citations.svelte';

	let { data } = $props();

</script>

<svelte:head>
	<title>Miracles | Eucharistic Miracles of the World!</title>
	<meta name="description"
				content="Using Modern Web Technologies to bring Bl. Carlo Acutis' dream of reaching the masses with the beauty of Jesus being fully present in the Eucharist." />
</svelte:head>

<section class="section-intro bg-base-200">
	<div class="miracles-hero hero py-10">
		<div class="hero-content flex-col lg:flex-row">
			<img
				src={img}
				class="max-w-sm rounded-full border-quart-300 border-8 shadow-2xl"
				alt="Miracle of Lanciano" />
			<div class="pl-3">
				<p class="text-1xl py-6">
					"We have now to consider the change of the bread and wine into the body and blood of Christ; under which head
					there are eight points of inquiry: (1) Whether the substance of bread and wine remain in this sacrament after
					the consecration? (2) Whether it is annihilated? (3) Whether it is changed into the body and blood of Christ?
					(4) Whether the accidents remain after the change? (5) Whether the substantial form remains there? (6) Whether
					this change is instantaneous? (7) Whether it is more miraculous than any other change? (8) By what words it
					may be suitably expressed?"
				</p>
				<p class="float-right">&mdash; St. Thomas Aquinas, Summa Theologica.</p>
			</div>
		</div>
	</div>
</section>

<section
	class="section-list-content bg-primary py-20 from-md:grid from-sm:grid-cols-[15px_2fr_10fr_15px] from-sm:grid-rows-[max-content] from-sm:gap-6">
	{#if !data.miracleData && !data.countryData}
		<h3 class="text-2xl white">No Results found!</h3>
	{/if}
	<DataDisplay itemType={'Miracles'} listData={data.miracleData} countryData={data.countryData} />
</section>

<Citations />

<style lang="scss">
  .section-intro {
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-rows: max-content;

    .miracles-hero {
      grid-column: 2/3;
    }
  }
</style>