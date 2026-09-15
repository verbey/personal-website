<script lang="ts">
    import type { Component } from "svelte";
    import type { ArchiveEntry } from "$lib/types/ArchiveEntry";
    import TableOfContents from "$lib/components/TableOfContents/TableOfContents.svelte";

    let { data } = $props<{ data: { entry: ArchiveEntry } }>();

    const posts = import.meta.glob("/src/content/entries/*.md", {
        eager: true,
    }) as Record<string, { default: Component }>;
    let Post = $derived(
        posts[`/src/content/entries/${data.entry.slug}.md`]?.default,
    );
</script>

<svelte:head>
    <title>{data.entry.frontmatter.title}</title>
</svelte:head>

<article class="entry">
    <header class="entryHeader">
        <h1>{data.entry.frontmatter.title}</h1>
        <time datetime={data.entry.frontmatter.date}>
            Published on {data.entry.frontmatter.date}
        </time>
    </header>
    <div class="entryBody">
        <TableOfContents entries={data.entry.tableOfContents} />
        <div class="entryContent">
            {#if Post}
                <Post />
            {/if}
        </div>
    </div>
</article>

<style>
    .entryHeader {
        padding: 1rem;
        background: linear-gradient(
            to right,
            transparent 0%,
            var(--primary) 1%,
            var(--primary) 99%,
            transparent 100%
        );
    }

    .entryContent {
        padding: 1rem 0;
    }

    .entryBody {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
