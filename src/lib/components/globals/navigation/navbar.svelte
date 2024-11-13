<script>
	import Icon from '@iconify/svelte';
</script>

<div class="sticky top-0 z-50  bg-night">
	<div class="navbar mx-auto only-lg:max-w-5xl only-xl:max-w-6xl to-2xl:max-w-7xl">
		<div class="navbar-start">
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn[shamrock] lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16" />
					</svg>
				</div>
				<ul
					tabindex="-1"
					class="menu menu-sm dropdown-content bg-shamrock rounded-box z-[1] mt-3 w-52 p-2 shadow">
					<li><a href="/miracles">Miracles</a></li>
					<li><a href="/our-lady">Our Lady</a></li>
					<li><a href="/saints">Saints</a></li>
					<li><a href="/communion">Communion</a></li>
				</ul>
			</div>
			<a href="/" class="btn btn-primary hover:bg-none text-xl">
				<Icon icon="oui:cross-in-circle-empty" style="color: #e0c3a3; rotate: 45deg; font-size: 1.5rem" />
				Eucharistic Miracles
			</a>
		</div>
		<div class="navbar-end hidden lg:flex">
			<ul class="menu menu-horizontal px-1 text-white">
				<li><a href="/miracles">Miracles</a></li>
				<li><a href="/our-lady">Our Lady</a></li>
				<li><a href="/saints">Saints</a></li>
				<li><a href="/communion">Communion</a></li>
			</ul>
		</div>
	</div>
</div>
