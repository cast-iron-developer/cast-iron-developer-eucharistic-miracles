<script lang="ts">

	import type { CarouselItem } from '$lib/utils/types/DatabaseTypes';

	const { items }: { items: CarouselItem[] } = $props();

	// active item starts off as first item
	let activeItem: number = $state(1);
	let leftArrowValue: number = $derived.by(() => {
		console.groupCollapsed('left arrow runs');
		console.log('active item: ', activeItem);
		console.groupEnd();
		// changes based off of the active slide
		if (activeItem === (items.length - (items.length - 1))) {
			console.log('here');
			return items.length;
		} else if (activeItem === items.length) {
			return 75;
		} else {
			console.log('or here');
			console.log(activeItem);
			return activeItem - 1;
		}
	});
	let rightArrowValue: number = $derived.by(() => {
		// changes based off of the active slide
		console.groupCollapsed('right arrow runs');
		console.log('active item: ', activeItem);
		console.groupEnd();
		if (activeItem === items.length) {
			console.log('here');
			return items.length - (items.length - 1);
		} else {
			console.log('or here');
			return activeItem + 1;
		}
	});

	const changeActiveItem = (event: MouseEvent) => {
		if (event.currentTarget === null) return;

		const item = event.currentTarget as HTMLAnchorElement;
		const dataAttrValue: any = item.dataset.index;

		if (dataAttrValue !== null && dataAttrValue !== undefined) {
			const newActiveItem: number = parseInt(dataAttrValue);
			if (activeItem !== newActiveItem) {
				console.groupCollapsed('change active item');
				console.log('active item: ', activeItem);
				console.log('new active item: ', newActiveItem);
				console.groupEnd();
				activeItem = newActiveItem;
			}
		}

	};
</script>

<article class="images-carousel container">

	<!--	<div class="carousel w-full">-->
	<!--		{#each items as item}-->
	<!--			<div id={`slide${item.position}`} class="carousel-item relative w-full">-->
	<!--				<img-->
	<!--					alt={item.altText}-->
	<!--					src={item.imageUrl}-->
	<!--					class="w-full" />-->
	<!--				<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">-->
	<!--					<a href={`#slide${items.length}`} class="btn btn-circle">❮</a>-->
	<!--					<a href={`#slide${item.position + 1}`} class="btn btn-circle">❯</a>-->
	<!--				</div>-->
	<!--			</div>-->
	<!--		{/each}-->
	<!--	</div>-->
	<!--	<div class="carousel carousel-center rounded-box w-full space-x-4 p-4">-->
	<!--		{#each items as item}-->
	<!--			<div id={`slide${item.position}`} class="carousel-item" class:active={item.position === activeItem}>-->
	<!--				<img-->
	<!--					alt={item.position.toString()}-->
	<!--					title={item.position.toString()}-->
	<!--					src={item.imageUrl}-->
	<!--					class="rounded-box" />-->
	<!--			</div>-->
	<!--		{/each}-->
	<!--	</div>-->
	<!--	<div class="flex w-full justify-center gap-2 py-2">-->
	<!--		<a href={`#slide${leftArrowValue}`} class="btn btn-xs btn-circle" data-index={leftArrowValue}-->
	<!--			 onclick={changeActiveItem}>❮</a>-->
	<!--		<div class="text-white">-->
	<!--			<p><span>{activeItem}</span> of <span>{items.length}</span></p>-->
	<!--		</div>-->
	<!--		<a href={`#slide${rightArrowValue}`} class="btn btn-xs btn-circle" data-index={rightArrowValue}-->
	<!--			 onclick={changeActiveItem}>❯</a>-->
	<!--	</div>-->
</article>

<style lang="scss">
  .active {
    border: 2px solid green;
  }
</style>