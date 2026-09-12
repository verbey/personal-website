<script lang="ts">
    import type { ArchiveEntry } from "$lib/types/ArchiveEntry";
    import Link from "$lib/components/elements/Link.svelte";
    let { data } = $props<{ data: { archiveEntries: ArchiveEntry[] } }>();

    type YearGroup = {
        year: number;
        entries: ArchiveEntry[];
    };

    const getYearGroups = (entries: ArchiveEntry[]): YearGroup[] => {
        const groups = new Map<number, ArchiveEntry[]>();

        for (const entry of entries) {
            const year = new Date(entry.frontmatter.date).getFullYear();
            groups.set(year, [...(groups.get(year) ?? []), entry]);
        }

        return [...groups.entries()]
            .sort(([firstYear], [secondYear]) => secondYear - firstYear)
            .map(([year, yearEntries]) => ({
                year,
                entries: yearEntries.sort(
                    (first, second) =>
                        new Date(second.frontmatter.date).getTime() -
                        new Date(first.frontmatter.date).getTime(),
                ),
            }));
    };

    let yearGroups = $derived(getYearGroups(data.archiveEntries));
</script>

<section class="archiveEntriesContainer">
    {#each yearGroups as group}
        <section class="archiveYear">
            <h2 class="archiveYearTitle">
                <time datetime="{group.year}-01-01">{group.year}</time>
            </h2>
            {#each group.entries as entry}
                <article class="archiveEntry">
                    <h3 class="archiveEntryTitle">{entry.frontmatter.title}</h3>
                    <p class="archiveEntryDescription">
                        {entry.frontmatter.description}
                    </p>
                    <Link href="/{entry.slug}">Read more</Link>
                </article>
            {/each}
        </section>
    {/each}
</section>

<style>
    .archiveEntryDescription {
        margin: 0;
    }

    .archiveYearTitle {
        text-align: center;
    }

    .archiveEntry {
        padding: 0.1rem 1rem 0.4rem 1rem;
        background: linear-gradient(
            to right,
            transparent 0%,
            var(--secondary) 3%,
            var(--secondary) 97%,
            transparent 100%
        );
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }

    .archiveYear:first-child .archiveEntry:first-of-type {
        background: linear-gradient(
            to right,
            transparent 0%,
            var(--primary) 3%,
            var(--primary) 97%,
            transparent 100%
        );
    }

    .archiveEntriesContainer {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .archiveYear {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
</style>
