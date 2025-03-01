<script lang="ts">
	import assisi from '$lib/images/francis-assisi.webp';
	import our_lady from '$lib/images/our-lady.webp';
	import eucharist from '$lib/images/eucharist.webp';
</script>

<section class="bg-white">
	<section class="container py-16">
		<article id="admin" class="my-10 max-w-3xl mx-auto">
			<h3 class="text-3xl">Admin Page</h3>
			<p>This is a compilation of all the articles regarding Eucharistic Miracles, Saints, Miraculous Communions & the
				Blessed Mother that we have been able to compile and/or borrowed from Bl. Carlo's website.</p>
		</article>
		<article id="miracles" class="my-10">
			<div class="card lg:card-side bg-base-100 shadow-xl from-xl:max-w-2xl to-lg:max-w-fit mx-auto">
				<figure class="lg:max-w-80 to-lg:max-w-lg">
					<img
						src={eucharist}
						alt="Eucharist in Monstrance" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Miracles</h2>
					<p></p>
					<div class="card-actions justify-end">
						<a href="dashboard/miracles" class="btn btn-primary">Go to Miracles</a>
					</div>
				</div>
			</div>
		</article>
		<article id="saints" class="my-10">
			<div class="card lg:card-side bg-base-100 shadow-xl from-xl:max-w-2xl to-lg:max-w-fit mx-auto">
				<figure class="lg:max-w-80 to-lg:max-w-lg">
					<img
						src={assisi}
						alt="Statue of St. Francis of Assisi" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Saints &amp; Miraculous Communions</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					<div class="card-actions justify-end">
						<a href="/dashboard/saints" class="btn btn-primary">Go to Saints</a>
					</div>
				</div>
			</div>
		</article>
		<article id="our-lady" class="my-10">
			<div
				class="card lg:card-side bg-base-100 shadow-xl from-xl:max-w-2xl to-lg:max-w-fit mx-auto">
				<figure class="lg:max-w-80 to-lg:max-w-lg">
					<img
						src={our_lady}
						alt="Statue of Our Lady" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Our Lady</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					<div class="card-actions justify-end">
						<a href="/dashboard/our-lady" class="btn btn-primary">Go to Our Lady</a>
					</div>
				</div>
			</div>
		</article>
	</section>
</section>