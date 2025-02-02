<script lang="ts">
	import { page } from '$app/state';
</script>

<section class="bg-primary">
	<article class="flex min-h-screen min-w-screen justify-center">
		<div class="content-center text-white block only-md:max-w-xl from-lg:max-w-3xl to-md:max-w-fit to-md:mx-4">
			<h1 class="text-6xl mb-5">{page.status} | {page.error?.message}</h1>
			<p>While this is certainly not what you had hoped for, I can guarantee that we are just as frustrated.</p>
			<p>In your charity, feel free to offer up a <strong>Hail Mary</strong> on our behalf.</p>
			<p>Blessed Carlo, <strong>Pray for Us</strong></p>
		</div>
	</article>
</section>