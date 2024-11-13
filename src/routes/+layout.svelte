<script>
	import '../app.scss';
	import Navbar from '$lib/components/navigation/navbar.svelte'
	let { children } = $props();
</script>

<Navbar></Navbar>
<main class="app font-montserrat">
	{@render children()}
</main>
