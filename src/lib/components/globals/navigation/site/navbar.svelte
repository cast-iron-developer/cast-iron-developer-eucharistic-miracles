<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import NavigationList from '$lib/components/globals/nav-list.svelte';
	import type { NavigationListType, NavigationStyles } from '$lib/utils/types/general-types';

	let { isAdmin: isAdmin, urlParams: urlParam, navigationItems: navigationItems }: {
		isAdmin: boolean
		urlParams?: string,
		navigationItems: NavigationListType
	} = $props();

	const adminStyles: NavigationStyles = {
		container: 'sticky top-0 z-50 bg-tert-100',
		menuButton: 'btn bg-tert-200 hover:bg-tert-300 lg:hidden',
		mobileListStyles: 'menu menu-sm dropdown-content bg-tert-200 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white',
		mobileItemStyles: 'active:!bg-tert-200',
		logoStyles: 'inline-flex items-center logo bg-tert-100 hover:bg-none text-xl text-white p-1.5',
		desktopListStyles: 'mx-2 hover:bg-tert-300 active:!bg-tert-200'
	};

	const defaultStyles: NavigationStyles = {
		container: 'sticky top-0 z-50 bg-primary',
		menuButton: 'btn bg-primary-600 hover:bg-primary-700 lg:hidden',
		mobileListStyles: 'menu menu-sm dropdown-content bg-primary-600 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white',
		mobileItemStyles: 'active:!bg-primary-600',
		logoStyles: 'inline-flex items-center logo bg-primary hover:bg-none text-xl text-white p-1.5',
		desktopListStyles: 'mx-2 hover:bg-primary-700 active:!bg-primary-600'
	};
</script>

<div class={isAdmin ? adminStyles.container : defaultStyles.container}>
	<div class="navbar mx-auto only-lg:max-w-5xl only-xl:max-w-6xl to-2xl:max-w-7xl">
		<div class="navbar-start">
			{#if (urlParam && urlParam !== "") || urlParam === 'admin'}
				<div class="dropdown mr-2">
					<div tabindex="0" role="button" class={isAdmin ? adminStyles.menuButton : defaultStyles.menuButton}>
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
					<NavigationList
						listStyles={isAdmin ? adminStyles.mobileListStyles : defaultStyles.mobileListStyles}
						listItemStyles={isAdmin ? adminStyles.mobileItemStyles : defaultStyles.mobileItemStyles}
						listData={navigationItems}
						urlParam={urlParam} />
				</div>
			{/if}
			<a href="/" class={isAdmin ? adminStyles.logoStyles : defaultStyles.logoStyles}>
				<Icon height="3rem" width="3rem" />
				<span class="ml-2 text-nowrap">Eucharistic Miracles</span>
			</a>
		</div>
		{#if (urlParam && urlParam !== "") || urlParam === 'admin'}
			<div class="navbar-end hidden lg:flex">
				<NavigationList
					listStyles={"menu menu-horizontal px-1 text-white"}
					listItemStyles={isAdmin ? adminStyles.desktopListStyles : defaultStyles.desktopListStyles}
					listData={navigationItems}
					urlParam={urlParam} />
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