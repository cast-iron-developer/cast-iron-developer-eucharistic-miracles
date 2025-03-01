<script lang="ts">
	import { recordTypeEnum } from '$lib/utils/helpers/helper.utils';
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();
	console.log(form);
	console.log(data);

	const languages = $state(data.languageData);
	const countries = $state(data.countryData);
	const recordEnum = $state(recordTypeEnum);

	let currentCountry = $state(data?.miracleData.country_id ?? '');
	let currentLanguage = $state(data?.miracleData.language_code ?? '');
	let currentType = $state(data?.miracleData.type ?? '');
</script>

<section class="bg-white">
	<div class="container py-16">
		<h1 class="text-3xl">Edit Page: <strong>{data.miracleData.name}</strong></h1>
	</div>
	<div class="container">
		<form class="mx-auto" method="POST" action="?/update">
			<fieldset data-id="name" class="fieldset">
				<legend class="fieldset-legend">What is the name of the Miracle?</legend>
				<input type="text" class="input" name="name" placeholder="Miracle Name"
							 value={data?.miracleData.name} />
				<p class="fieldset-label">Optional</p>
			</fieldset>

			<fieldset data-id="blurb" class="fieldset">
				<legend class="fieldset-legend">What is the name of the Miracle?</legend>
				<input type="text" class="input" name="blurb" placeholder="Miracle Blurb"
							 value={data?.miracleData.blurb} />
				<p class="fieldset-label">Optional</p>
			</fieldset>

			<fieldset data-id="quotes" class="fieldset">
				<legend class="fieldset-legend">What is the name of the Miracle?</legend>
				<input type="text" class="input" name="quotes" placeholder="Quotes"
							 value={data?.miracleData.quotes} />
				<p class="fieldset-label">Optional</p>
			</fieldset>

			<fieldset data-id="story" class="fieldset">
				<legend class="fieldset-legend">Story</legend>
				<textarea class="textarea h-24" placeholder="Story of the Miracle">{data?.miracleData.story}</textarea>
				<div class="fieldset-label">Optional</div>
			</fieldset>

			<fieldset data-id="occurrence_year" class="fieldset">
				<legend class="fieldset-legend">What is the name of the Miracle?</legend>
				<input type="text" class="input" name="occurrence_year" placeholder="Year of the Miracle"
							 value={data?.miracleData.occurrence_year} />
				<p class="fieldset-label">Optional</p>
			</fieldset>

			<fieldset data-id="base_translation" class="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
				<label class="fieldset-label">
					<input type="checkbox" checked={data?.miracleData.base_translation} class="checkbox" />
					Is this the base Translation of the Miracle
				</label>
			</fieldset>

			<fieldset data-id="language_code" class="fieldset">
				<legend class="fieldset-legend">What is the language of this translation?</legend>
				<select class="select" bind:value={currentLanguage}>
					{#each data.languageData as language}
						<option value={language.code}>{language.name}</option>
					{/each}
				</select>
				<span class="fieldset-label">Optional</span>
			</fieldset>

			<fieldset data-id="type" class="fieldset">
				<legend class="fieldset-legend">Record Type</legend>
				<select class="select capitalize" bind:value={currentType}>
					{#each recordEnum as item}
						<option value={item}>{item}</option>
					{/each}
				</select>
				<span class="fieldset-label">Optional</span>
			</fieldset>

			<fieldset id="country" class="fieldset">
				<legend class="fieldset-legend">Where did the Miracle occur?</legend>
				<select class="select" bind:value={currentCountry}>
					{#each data.countryData as country}
						<option value={country.id}>{country.name}</option>
					{/each}
				</select>
				<span class="fieldset-label">Optional</span>
			</fieldset>

			<fieldset data-id="draft" class="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
				<label class="fieldset-label">
					<input type="checkbox" checked={data?.miracleData.draft} class="checkbox" />
					Is this a Draft?
				</label>
			</fieldset>

			<fieldset data-id="deleted" class="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
				<label class="fieldset-label">
					<input type="checkbox" checked={data?.miracleData.deleted} class="checkbox" />
					Delete this Miracle?
				</label>
			</fieldset>

			<div>
				<button class="btn btn-success">Update</button>
			</div>
		</form>
	</div>
</section>

<style>
    .fieldset {
        margin: .5rem 0;
    }
</style>