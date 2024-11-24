<script>
	import '../app.scss';
	import Navbar from '$lib/components/navigation/navbar.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	let { children } = $props();
</script>

<Navbar></Navbar>
<main class="app font-montserrat">
	{@render children()}
</main>
<Footer></Footer>