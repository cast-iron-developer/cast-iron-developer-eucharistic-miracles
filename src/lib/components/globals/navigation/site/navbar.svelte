<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import MobileNavItems from '$lib/components/globals/navigation/site/mobile-nav-items.svelte';
	import DesktopNavItems from '$lib/components/globals/navigation/site/desktop-nav-items.svelte';
	import DesktopAdminNav from '../dashboard/desktop-admin-nav.svelte';
	import MobileAdminNav from '../dashboard/mobile-admin-nav.svelte';
	import type { NavigationListType, NavigationStyles } from '$lib/utils/types/general-types';

	let {
		isAdmin: isAdmin,
		urlParams: urlParam,
		navigationItems: navigationItems,
		isAuthenticated: isAuthenticated,
		logout: logout
	}: {
		isAdmin: boolean
		urlParams?: string,
		navigationItems?: NavigationListType,
		isAuthenticated?: boolean,
		logout?: any
	} = $props();

	const homePath: string = isAdmin && isAuthenticated ? '/dashboard' : '/';

	const adminStyles: NavigationStyles = {
		navbar: 'navbar-end hidden lg:flex',
		container: 'sticky top-0 z-50 bg-tert-100',
		menuButton: 'btn bg-tert-200 hover:bg-tert-300 lg:hidden',
		mobileListStyles: 'menu menu-sm dropdown-content bg-tert-200 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white',
		mobileItemStyles: 'm-2',
		logoStyles: 'inline-flex items-center logo bg-tert-100 hover:bg-none text-xl text-white p-1.5',
		desktopListStyles: 'menu menu-horizontal px-1 text-white',
		desktopItemStyles: 'mx-2'
	};

	const defaultStyles: NavigationStyles = {
		navbar: 'navbar-end hidden lg:flex',
		container: 'sticky top-0 z-50 bg-primary',
		menuButton: 'btn bg-primary-600 hover:bg-primary-700 lg:hidden',
		mobileListStyles: 'menu menu-sm dropdown-content bg-primary-600 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white',
		mobileItemStyles: 'active:!bg-primary-600',
		logoStyles: 'inline-flex items-center logo bg-primary hover:bg-none text-xl text-white p-1.5',
		desktopListStyles: 'menu menu-horizontal px-1 text-white',
		desktopItemStyles: 'mx-2 hover:bg-primary-700 active:!bg-primary-600'
	};
</script>

<div class={isAdmin ? adminStyles.container : defaultStyles.container}>
	<div class="navbar mx-auto container">
		<div class="navbar-start">
			{#if isAdmin && isAuthenticated && urlParam === 'dashboard'}
				<MobileAdminNav
					styles={adminStyles} homePath={homePath} logout={logout}
				></MobileAdminNav>
			{:else if !isAdmin && (urlParam && urlParam !== "")}
				<MobileNavItems styles={defaultStyles} listData={navigationItems ?? undefined} urlParam={urlParam} />
			{/if}
			<a href={homePath} class={isAdmin ? adminStyles.logoStyles : defaultStyles.logoStyles}>
				<Icon height="3rem" width="3rem" />
				<span class="ml-2 text-nowrap">Eucharistic Miracles</span>
			</a>
		</div>
		{#if isAdmin && isAuthenticated && urlParam === 'dashboard'}
			<DesktopAdminNav
				styles={adminStyles} homePath={homePath} logout={logout}
			></DesktopAdminNav>
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