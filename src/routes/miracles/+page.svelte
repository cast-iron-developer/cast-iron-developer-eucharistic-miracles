<script>
import img from '$lib/images/Lanciano.jpg';
let {data} = $props();
console.log(data);
</script>

<section class="section-intro bg-base-200">
	<div class="miracles-hero hero py-10">
		<div class="hero-content flex-col lg:flex-row">
			<img
				src={img}
				class="max-w-sm rounded-full border-gold-300 border-8 shadow-2xl"
				alt="Miracle of Lanciano"/>
			<div class="pl-3">
				<p class="text-1xl py-6">
					"We have now to consider the change of the bread and wine into the body and blood of Christ; under which head there are eight points of inquiry: (1) Whether the substance of bread and wine remain in this sacrament after the consecration? (2) Whether it is annihilated? (3) Whether it is changed into the body and blood of Christ? (4) Whether the accidents remain after the change? (5) Whether the substantial form remains there? (6) Whether this change is instantaneous? (7) Whether it is more miraculous than any other change? (8) By what words it may be suitably expressed?"
				</p>
				<p class="float-right">&mdash; St. Thomas Aquinas, Summa Theologica.</p>
			</div>
		</div>
	</div>
</section>
<section class="section-miracles-list">
	{#each data.miracles as miracle }
		<p>{miracle.title}</p>
	{/each}
</section>

<style type="scss">
	.section-intro {
			display: grid;
			grid-template-columns: 1fr 10fr 1fr;

			.miracles-hero {
					grid-column: 2/3;
			}
	}
</style>