<script lang="ts">

	import type { CarouselItem } from '$lib/utils/types/DatabaseTypes';

	const { items }: { items: CarouselItem[] } = $props();

	// active item starts off as first item
	let activeItem: number = $state(1);

	const getSlide = (num: number) => {
		return `#slide${num}`;
	};

	const changeActiveItem = (event: MouseEvent) => {
		event.preventDefault();
		if (event.currentTarget === null) return;

		const item = event.currentTarget as HTMLAnchorElement;
		const dataAttrValue: any = item.dataset.itemIndex;

		if (dataAttrValue !== null && dataAttrValue !== undefined) {
			const newActiveItem: number = Number(dataAttrValue);
			if (activeItem !== newActiveItem) {
				const link = item.getAttribute('href');

				if (!link) return;

				const scrollElement = document.querySelector(link);

				if (!scrollElement) return;

				const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
				console.log(scrollElement);
				scrollElement.scrollIntoView({
					block: 'center',
					inline: 'center',
					behavior: mediaQuery.matches ? 'auto' : 'smooth'
				});
				activeItem = newActiveItem;
			}
		}
	};
</script>

<article class="images-carousel container">
	<div class="carousel carousel-center rounded-box w-full space-x-4 p-4">
		{#each items as item}
			<div id={`slide${item.position}`} class="carousel-item w-full justify-center"
					 class:active={item.position === activeItem}>
				<div class="flex from-lg:flex-row to-xl:flex-col items-center justify-center gap-4">

					{#if item.description}
						<div class="text-white basis-1/4 to-xl:order-last">
							<p>{item.description}</p>
						</div>
					{/if}
					<img
						alt={item.position.toString()}
						title={item.position.toString()}
						src={item.imageUrl}
						class="rounded-box" />
				</div>
			</div>
		{/each}
	</div>
	<div class="flex flex-col w-full items-center">
		<div class="text-white">
			<p><span>{activeItem}</span> of <span>{items.length}</span></p>
		</div>
		<div class="flex w-full justify-center gap-2 py-2">
			<a href="#slide1" class="btn btn-circle">❮</a>
			{#each items as item}
				<a class="btn btn-xs" class:activeBtn={item.position === activeItem} href={getSlide(item.position)}
					 onclick={changeActiveItem}
					 data-item-index={item.position}>{item.position}</a>
			{/each}
			<a href="#slide3" class="btn btn-circle">❯</a>
		</div>
	</div>
</article>

<style>

    .activeBtn {
        background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity)));
        @apply bg-neutral;
        @apply text-white;
    }
</style>