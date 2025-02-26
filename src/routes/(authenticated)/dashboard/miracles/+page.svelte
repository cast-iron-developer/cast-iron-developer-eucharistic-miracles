<script lang="ts">

	import { truncate } from '$lib/utils/helpers/helper.utils';
	import Icon from '@iconify/svelte';

	let { data } = $props();

</script>

<section class="bg-white">
	<div class="container py-16">
		<h1 class="text-3xl">
			Miracles
		</h1>
	</div>
	<div class="flex flex-row flex-wrap justify-center gap-5">
		{#each data.miracleData as miracle}
			<div class="card bg-base-100 w-96 shadow-xl">
				<div class="card-body">
					<h2 class="card-title">
						{miracle.name}
						{#if miracle?.countries?.name }
							<span>
								&mdash; {miracle.countries.name}
							</span>
						{/if}
					</h2>
					{#if miracle?.languages?.name}
						<p>Language: <strong class="capitalize">{miracle.languages.name}</strong></p>
					{/if}
					{#if miracle.blurb}
						<p>{truncate(miracle.blurb, 250)}</p>
					{/if}
					<div class="card-actions justify-end">
						<a href={`/dashboard/miracles/${miracle.slug}`} class="btn btn-primary flex items-center">
							<Icon icon="mdi:edit-box-outline" width="24" height="24" />
							Edit</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
