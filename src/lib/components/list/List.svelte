<script lang="ts">
	import type { Database } from '$lib/server/database.types';

	type Miracle = Database['public']['Tables']['miracles']['Row'];
	type OurLady = Database['public']['Tables']['our_lady']['Row'];
	type Saint = Database['public']['Tables']['saints']['Row'];

	interface ListProps {
		list: Miracle[] | OurLady[] | Saint[];
	}

	let { list }: ListProps = $props();

	const truncateString = (str: string, maxLength: number) => {
		console.log(str);
		console.log(maxLength);
		if (str.length >= maxLength) {
			return str.substring(0, maxLength - 3) + '...';
		}

		return str;
	};

</script>

<article
	class="section-list from-sm:grid from-sm:col-start-3 from-sm:col-span-1 from-sm:gap-10 from-sm:auto-rows-max from-sm:justify-items-center only-md:grid-cols-2 only-lg:grid-cols-2 only-xl:grid-cols-3 from-xl:grid-cols-4 to-sm:flex to-sm:flex-row to-sm:flex-wrap to-sm:justify-around">
	{#if list.length === 0 }
		<p class="text-3xl text-white text-center">Sorry, no results here!</p>
	{/if}
	{#each list as item }
		<div
			class="from-sm:max-w-sm to-sm:max-w-64 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
			<a href="/">
				<img class="rounded-t-lg" src="https://stjohncc.org/images/eucharistchalice.png"
						 alt="found at https://stjohncc.org/sacrament-eucharist" />
				<div class="p-5">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
						{#if item.blurb}
							{truncateString(item.blurb, 100)}
						{/if}
					</p>
					<p
						class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Learn more!
						<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
								 fill="none"
								 viewBox="0 0 14 10">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M1 5h12m0 0L9 1m4 4L9 9" />
						</svg>
					</p>
				</div>
			</a>

		</div>
	{/each}
</article>

<style lang="scss">
  .section-list {
    //grid-column: 3/4;
  }
</style>