<script module lang="ts">
    import Link from "$lib/components/elements/Link.svelte";

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
</style>
