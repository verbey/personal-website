<script module lang="ts">
    import Link from "#lib/components/elements/Link.svelte";

    export { Link as a };
</script>

<script lang="ts">
    let { children } = $props();
</script>

<div class="markdownContent">
    {@render children()}
</div>

<style>
    .markdownContent {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .markdownContent :global(blockquote) {
        border-left: 4px solid var(--secondary);
        padding-left: 1rem;
    }

    .markdownContent :global(h2),
    .markdownContent :global(h3) {
        position: relative;
    }

    .markdownContent :global(h2 > .headingAnchor),
    .markdownContent :global(h3 > .headingAnchor) {
        position: absolute;
        right: 100%;
        margin-right: 0.5rem;
        color: var(--secondary);
        text-decoration: none;
    }

    .markdownContent :global(h2 > .headingAnchor::before) {
        color: var(--secondary);
        content: "##";
    }

    .markdownContent :global(h3 > .headingAnchor::before) {
        color: var(--secondary);
        content: "###";
    }
</style>
