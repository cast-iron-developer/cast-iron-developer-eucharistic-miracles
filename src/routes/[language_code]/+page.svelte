<script lang="ts">

	let { data } = $props();
	console.log(data.miracleData);
</script>

<section>
	hello there
	{#each data.miracleData as item}
		{item.name}
	{/each}
</section>
