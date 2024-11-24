<section class="section-footnotes py-20 bg-secondary-100 text-white hidden">
	<!-- Eventually we will break this into a footnote section-->
	<article class="footnotes">
		<aside>
			<p class="text-3xl">Footnotes</p>
		</aside>
	</article>
</section>

<style lang="scss">
  .section-footnotes {
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-rows: max-content;

    .footnotes {
      grid-column: 2/3;
    }
  }
</style>