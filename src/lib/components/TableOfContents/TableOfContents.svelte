<script lang="ts">
    import type { TOCEntry } from "$lib/types/TOCEntry";
    import Link from "$lib/components/elements/Link.svelte";

    let { entries } = $props<{ entries: TOCEntry[] }>();
</script>

{#if entries.length > 0}
    <nav class="tableOfContents" aria-label="Table of contents">
        <h2>Contents</h2>
        <ul>
            {#each entries as entry (entry.id)}
                <li class:subheading={entry.level === 3}>
                    <Link href={`#${entry.id}`}>{entry.label}</Link>
                </li>
            {/each}
        </ul>
    </nav>
{/if}

<style>
    .tableOfContents {
        padding: 2rem 0;
    }
</style>
