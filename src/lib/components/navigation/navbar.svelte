<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	let { urlParams: urlParam }: { urlParams: string } = $props();

</script>

<div class="sticky top-0 z-50  bg-primary">
	<div class="navbar mx-auto only-lg:max-w-5xl only-xl:max-w-6xl to-2xl:max-w-7xl">
		<div class="navbar-start">
			{#if urlParam && urlParam !== ""}
				<div class="dropdown mr-2">
					<div tabindex="0" role="button" class="btn bg-primary-600 hover:bg-primary-700 lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 24 24"
							stroke="#eeeeee">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h8m-8 6h16" />
						</svg>
					</div>
					<ul
						tabindex="-1"
						class="menu menu-sm dropdown-content bg-primary-600 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
						<li><a class="active:!bg-primary-600" href={`/${urlParam}/miracles`}>Miracles</a></li>
						<li><a class="active:!bg-primary-600" href={`/${urlParam}/our-lady`}>Our Lady</a></li>
						<li><a class="active:!bg-primary-600" href={`/${urlParam}/saints`}>Saints</a></li>
						<li><a class="active:!bg-primary-600" href={`/${urlParam}/communion`}>Communion</a></li>
					</ul>
				</div>
			{/if}
			<a href="/" class="inline-flex items-center logo bg-primary hover:bg-none text-xl text-white p-1.5">
				<Icon height="3rem" width="3rem" />
				<span class="ml-2 text-nowrap">Eucharistic Miracles</span>
			</a>
		</div>
		{#if urlParam && urlParam !== ""}
			<div class="navbar-end hidden lg:flex">
				<ul class="menu menu-horizontal px-1 text-white">
					<li><a class="hover:bg-primary-700 active:!bg-primary-600" href={`/${urlParam}/miracles`}>Miracles</a></li>
					<li><a class="hover:bg-primary-700 active:!bg-primary-600" href={`/${urlParam}/our-lady`}>Our Lady</a></li>
					<li><a class="hover:bg-primary-700 active:!bg-primary-600" href={`/${urlParam}/saints`}>Saints</a></li>
					<li><a class="hover:bg-primary-700 active:!bg-primary-600" href={`/${urlParam}/communion`}>Communion</a></li>
				</ul>
			</div>
		{/if}
	</div>
</div>

<style>
    @media (prefers-reduced-motion: no-preference) {
        .logo {
            animation: button-pop var(--animation-btn, 0.25s) ease-out;
        }
    }
</style>