<script lang="ts">
	import img from '$lib/images/Lanciano.jpg';
	import type { Miracle } from '$lib/models/Miracle';

	let { data } = $props();

	let locationFilter: string[] = $state([]);
	let visibleMiracles: Miracle[] = $state(data.miracleData);

	const handleOnChange = (event: Event) => {
		const target = event.target as HTMLInputElement;

		if (target.checked && !locationFilter.includes(target.value)) {
			locationFilter.push(target.value);
		} else {
			let index: number = locationFilter.indexOf(target.value);
			locationFilter.splice(index, 1);
		}

		visibleMiracles = locationFilter.length == 0 ? data.miracleData : data.miracleData.filter((miracle: Miracle) => {
			return locationFilter.includes(miracle.location_name);
		});
	};

</script>
<!--https://svelte.dev/playground/0429bd69748e44cdaeb8074c982f967d?version=3.41.0#H4sIAAAAAAAAE5VUTW_bMAz9K4RRIMmQ2sCAXVw73QdWbMB26nqqC1SxlViDLAkS3S5w_d9HSU6TBc1hhzgy-fhIPz57SBTreJInv9hacrgRErkVapssk42Q3CX5_ZDgzniID1B8KvhkTOqeOOEptmaOvxWvtUKukGiSShWutsLgqlIVis5oizCAVj91rxBG2FjdwSyWzq7-AX1htlmG62fd7OLpG2cNt0v4rkyPSwjzU0bLvlNLuMUdTX_C6tAyE6n9T3IEx5mtWyihVw3fCMWbq32qd9w6ytw_hNBFDk_CCepyNyWm2uvAhwGeboKAc38D5QqGmKvQcuytCpypF4qA1mHaMazb-ePFELnG9N3jAl5ejnCSnYFF5nEBeZzUD0mhSc85cztVw3xxNAUtwyFY7gwNz56ZQNhwTzxrEY3Ls8wy1eguNO94xoy4JnQv0ZXvP8wWxywNQ_bK4inT306r-eLqSAzKe1g6cYTU6BFFdnACucKvio4AH6eF91YeZtpiqzvmLpkxGy2FTrcC236dCp2ttcaw08tak0yS1vdWLK2dm019p1509h4KViwOblrF6YvgKfC2L6skal4lsBaqyZ-Y7Hm5XwTUtB9HoI4G7FHDc_gjsJGs5q2WxErp2z1HFltmJz2Lvbf3E8TXkR5EGN6A1c-uHI7tNwJZNKd4OXitx9XeaEV8A6AN5NT6xhutSl4BFQ4nLhxfa7NYfJ7sBzvP5Z36H1RfOybkG1zcx8_xFFkQ5kjESbR4s6JPDvI_mORoez4-jH8BFCk8q98EAAA=-->
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

<section class="section-miracles bg-primary py-20">

	<aside class="section-miracles-aside px-2">
		<p class="text-2xl text-white mb-4">
			Search
		</p>
		<p class="text-white">filter: {locationFilter}</p>
		<div class="search-filters">

			<div class="countries collapse collapse-arrow bg-base-200 mb-2">
				<input type="checkbox" />
				<div class="collapse-title text-xl font-medium">Countries</div>
				<div class="collapse-content">
					{#each data.locationData as location }
						<div class="form-control text-white">
							<label class="cursor-pointer label justify-normal">
								<input type="checkbox" checked={false} class="checkbox" value={location.name}
											 onchange={handleOnChange} />
								<span class="label-text pl-2">{location.name}</span>
							</label>
						</div>
					{/each}
				</div>
			</div>

			<div class="saints collapse collapse-arrow bg-base-200 mb-2">
				<input type="checkbox" />
				<div class="collapse-title text-xl font-medium">Saints</div>
				<div class="collapse-content">
					No Results!
				</div>
			</div>

			<div class="tags collapse collapse-arrow bg-base-200 mb-2">
				<input type="checkbox" />
				<div class="collapse-title text-xl font-medium">Tags</div>
				<div class="collapse-content">
					No Results!
				</div>
			</div>
		</div>
	</aside>
	<div class="section-miracles-list grid grid-cols-3 gap-10 auto-rows-max justify-items-center">
		{#each visibleMiracles as miracle }
			<article class="col-span-1 glass rounded">
				<figure>
					<img
						src="https://stjohncc.org/images/eucharistchalice.png"
						alt="found at https://stjohncc.org/sacrament-eucharist" />
				</figure>
				<div class="card-body text-white">
					<h2 class="card-title">{miracle.title} &mdash; {miracle.occurrence_year}</h2>
					<p>{miracle.blurb}</p>
					<div class="card-actions justify-end">
						<a href="/link_to_miracle" class="btn btn-tert">Learn more!</a>
					</div>
				</div>
			</article>
		{/each}
	</div>

</section>

<style lang="scss">
  .section-intro {
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-rows: max-content;

    .miracles-hero {
      grid-column: 2/3;
    }
  }

  .section-miracles {
    display: grid;
    grid-template-columns: 15px 2fr 10fr 15px;
    grid-template-rows: max-content;
    gap: 1.5rem;

    &-aside {
      grid-column: 2/3;
    }

    &-list {
      grid-column: 3/4;
    }
  }
</style>