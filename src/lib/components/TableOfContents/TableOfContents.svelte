<script lang="ts">
    import type { TOCEntry } from "#lib/types/TOCEntry.js";
    import Link from "#lib/components/elements/Link.svelte";

    let { entries } = $props<{ entries: TOCEntry[] }>();
</script>

{#if entries.length > 0}
    <nav class="tableOfContents" aria-label="Table of contents">
        <div class="heading">
            <span class="eyebrow">The map within</span>
            <h2 class="visuallyHidden">Contents</h2>
        </div>
        <ul>
            {#each entries as entry, index (entry.id)}
                <li
                    class:subheading={entry.level === 3}
                    style={`--entry-index: ${index};`}
                >
                    <Link href={`#${entry.id}`}>{entry.label}</Link>
                </li>
            {/each}
        </ul>
    </nav>
{/if}

<style>
    .tableOfContents {
        transform: rotate(-0.35deg);
    }

    .heading {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 1rem;
    }

    .visuallyHidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
        margin: -1px;
    }

    .eyebrow {
        color: color-mix(in srgb, var(--text), transparent 35%);
        font-size: 0.8rem;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        padding-left: 0;
    }

    li {
        position: relative;
        padding-left: 1.25rem;
        list-style: none;
        animation: emerge 450ms ease-out both;
        animation-delay: calc(var(--entry-index) * 55ms);
    }

    li::before {
        position: absolute;
        top: 0.65rem;
        left: 0.2rem;
        width: 0.45rem;
        height: 0.45rem;
        border: 1px solid var(--accent);
        content: "";
        transform: rotate(45deg);
        transition:
            background-color 180ms ease,
            transform 180ms ease;
    }

    li.subheading {
        margin-left: 1rem;
        padding-left: 1rem;
        font-size: 0.92em;
    }

    li.subheading::before {
        width: 0.3rem;
        height: 0.3rem;
        border-color: var(--secondary);
    }

    li :global(a) {
        display: inline-block;
        padding: 0.2rem 0;
        color: var(--text);
        text-decoration: none;
        transition:
            color 180ms ease,
            transform 180ms ease;
    }

    li :global(a:hover),
    li :global(a:focus-visible) {
        color: var(--accent);
        transform: translateX(0.2rem);
    }

    li:hover::before,
    li:focus-within::before {
        background-color: var(--accent);
        transform: rotate(45deg) scale(1.25);
    }

    @keyframes emerge {
        from {
            opacity: 0;
            transform: translateY(0.35rem);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        li {
            animation: none;
        }

        li :global(a),
        li::before {
            transition: none;
        }
    }
</style>
