<script lang="ts">
	let { data, form } = $props();
	console.log(form);
</script>

<section class="bg-white">
	<div class="container py-16">
		<h1 class="text-3xl">Edit Page: <strong>{data.miracleData.name}</strong></h1>
	</div>
	<div>
		<form class="mx-auto" method="POST" action="?/update">
			<div data-id="name">
				<label for="name"></label>
				<input id="name" type="text" name="name" placeholder="Miracle Name" value={form?.data?.name}>
			</div>
			<div data-id="blurb">
				<label for="blurb"></label>
				<input id="blurb" type="text" name="blurb" placeholder="Blurb" value={form?.data?.blurb}>
			</div>
			<div data-id="quotes">
				<label for="quotes"></label>
				<input id="quotes" type="text" name="quotes" placeholder="Quotes" value={form?.data?.quotes}>
			</div>
			<div data-id="story">
				<label for="story"></label>
				<textarea id="story" class="textarea textarea-bordered textarea-sm w-full max-w-xs" name="story"
									placeholder="Story">
					{form?.data?.story}
				</textarea>
			</div>
			<div data-id="occurrence_year">
				<label for="occurrence_year"></label>
				<input id="occurrence_year" type="text" name="occurrence_year" placeholder="Year of Miracle"
							 value={form?.data?.occurrence_year}>
			</div>
			<div data-id="base_translation">
				<label for="base_translation"></label>
				<input id="base_translation" type="checkbox" name="base_translation" value={form?.data?.base_translation}>
			</div>
			<div data-id="language_code">
				<label for="language_code"></label>
				<input id="language_code" type="text" name="language_code" placeholder="Language Code"
							 value={form?.data?.language_code}>
			</div>
			<div data-id="type">
				<label for="type">Type of Data (should set trigger to update)</label>
				<input id="type" type="text" name="type" placeholder="type" value={form?.data?.type}>
			</div>
			<div data-id="draft">
				<label for="draft"></label>
				<input id="draft" type="checkbox" name="draft" value={form?.data?.draft}>
			</div>
			<div data-id="deleted">
				<label for="deleted"></label>
				<input id="deleted" type="checkbox" name="deleted" value={form?.data?.deleted}>
			</div>
		</form>
	</div>
</section>