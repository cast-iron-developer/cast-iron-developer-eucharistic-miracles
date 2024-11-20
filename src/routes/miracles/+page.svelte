<script lang="ts">
	import img from '$lib/images/Lanciano.jpg';
	import type { Miracle } from '$lib/models/Miracle';
	import type { Country } from '$lib/models/Country';

	let { data } = $props();

	let locationFilter: string[] = $state([]);
	let countryInput: string = $state('');
	let selectedFilters: Set<string> = $state(new Set());
	let visibleMiracles: Miracle[] = $state(data.miracleData);
	let visibleCountries: Country[] = $state(data.countryData);
	let selectedCountries: Country[] = $state([]);
	let unselectedCountries: Country[] = $state([]);

	const handleOnChangeLocationFilter = (event: Event) => {
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

		// const checkedFilters: Element[] = Array.from(document.querySelectorAll('.country-list .country-label input:checked'));
		// if (checkedFilters.length === 0) {
		// 	// reset here
		// 	selectedFilters = new Set();
		// } else {
		// 	const tempFilters: string[] = checkedFilters.map((item: Element) => {
		// 		return (item as HTMLInputElement)?.dataset?.itemId?.toString()!;
		// 	});
		//
		// 	selectedFilters = new Set(tempFilters);
		//
		// 	visibleCountries = visibleCountries.sort((a, b) => {
		// 		const isInB1 = selectedFilters.has((a.id).toString());
		// 		const isInB2 = selectedFilters.has((b.id).toString());
		//
		// 		return isInB1 === isInB2 ? 0 : isInB1 ? -1 : 1;
		// 	});
		// }
		// console.log('selected filters: ', selectedFilters);

	};

	const handleCountryTextInput = (event: Event) => {
		const target = event.target as HTMLInputElement;

		visibleCountries = target.value ? data.countryData.filter(country => {
			return country.name.match(`${target.value}.*`);
		}) : data.countryData;
	};

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

<section class="section-miracles bg-primary py-20">

	<aside class="section-miracles-aside px-2">
		<p class="text-2xl text-white mb-4">
			Search
		</p>
		<div class="search-filters">
			<div class="collapse collapse-arrow bg-base-200 mb-2">
				<input type="checkbox" />
				<div class="collapse-title text-xl font-medium">Countries</div>
				<div class="collapse-content">
					<input type="text" placeholder="Enter Country Here"
								 class="country-text-input input input-bordered w-full max-w-xs"
								 value={countryInput} oninput={handleCountryTextInput} />
					<div class="country-list">
						{#each visibleCountries as location }
							<label id={location.id.toString()} for={location.name}
										 class="country-label cursor-pointer label justify-normal">
								<input name={location.name} type="checkbox" class="checkbox" value={location.name}
											 data-item-id={location.id.toString()}
											 onchange={handleOnChangeLocationFilter} />
								<span class="label-text pl-2">{location.name}</span>
							</label>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</aside>
	<div class="section-miracles-list grid grid-cols-3 gap-10 auto-rows-max justify-items-center">
		{#if visibleMiracles.length === 0 }
			<p class="text-3xl text-white text-center">Sorry, no results here!</p>
		{/if}
		{#each visibleMiracles as miracle }
			<article class="col-span-1 glass rounded">
				<figure>
					<img
						src="https://stjohncc.org/images/eucharistchalice.png"
						alt="found at https://stjohncc.org/sacrament-eucharist" />
				</figure>
				<div class="card-body text-white">
					<h2 class="card-title">{miracle.title} &mdash; {miracle.occurrence_year} &mdash; {miracle.location_name}</h2>
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

      .country-list {
        display: flex;
        flex-direction: column;

        .country-label:has(input:checked) {
          order: -9999;
        }
      }
    }

    &-list {
      grid-column: 3/4;
    }
  }
</style>