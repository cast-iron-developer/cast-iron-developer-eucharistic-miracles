<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import MobileNavItems from '$lib/components/globals/navigation/mobile-nav-items.svelte';
	import DesktopNavItems from '$lib/components/globals/navigation/desktop-nav-items.svelte';
	import type { NavigationListType, NavigationStyles } from '$lib/utils/types/general-types';

	let { isAdmin: isAdmin, urlParams: urlParam, navigationItems: navigationItems, isAuthenticated: isAuthenticated }: {
		isAdmin: boolean
		urlParams?: string,
		navigationItems: NavigationListType,
		isAuthenticated?: boolean,
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
			{#if isAdmin && isAuthenticated && urlParam === 'admin'}
				<MobileNavItems styles={adminStyles} listData={navigationItems} urlParam={urlParam} />
			{:else if !isAdmin && (urlParam && urlParam !== "")}
				<MobileNavItems styles={defaultStyles} listData={navigationItems} urlParam={urlParam} />
			{/if}
			<a href="/" class={isAdmin ? adminStyles.logoStyles : defaultStyles.logoStyles}>
				<Icon height="3rem" width="3rem" />
				<span class="ml-2 text-nowrap">Eucharistic Miracles</span>
			</a>
		</div>
		{#if isAdmin && isAuthenticated && urlParam === 'admin'}
			<DesktopNavItems styles={adminStyles} listData={navigationItems} urlParam={urlParam} />
		{:else if !isAdmin && (urlParam && urlParam !== "")}
			<DesktopNavItems styles={defaultStyles} listData={navigationItems} urlParam={urlParam} />
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