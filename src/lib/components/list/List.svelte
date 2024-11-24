<script lang="ts">
	import type { Database } from '$lib/server/database.types';

	type Miracle = Database['public']['Tables']['miracles']['Row'];

	interface ListProps {
		list: Miracle[];
	}

	let { list }: ListProps = $props();

</script>

<article class="section-miracles-list grid grid-cols-3 gap-10 auto-rows-max justify-items-center">
	{#if list.length === 0 }
		<p class="text-3xl text-white text-center">Sorry, no results here!</p>
	{/if}
	{#each list as item }
		<article class="col-span-1 glass rounded">
			<figure>
				<img
					src="https://stjohncc.org/images/eucharistchalice.png"
					alt="found at https://stjohncc.org/sacrament-eucharist" />
			</figure>
			<div class="card-body text-white">
				<h2 class="card-title">{item.name} &mdash; {item.occurrence_year}</h2>
				<p class="truncate ...">{item.blurb}</p>
				<div class="card-actions justify-end">
					<a href="/link_to_miracle" class="btn btn-tert">Learn more!</a>
				</div>
			</div>
		</article>
	{/each}
</article>

<style lang="scss">
  .section-miracles-list {
    grid-column: 3/4;
  }
</style>