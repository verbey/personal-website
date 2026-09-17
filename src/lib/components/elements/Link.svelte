<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        href,
        class: className,
        children,
        ...attributes
    } = $props<{
        href: string;
        class?: string;
        children: Snippet;
    }>();

    function randomValue(): number {
        return Number.parseInt(
            crypto.randomUUID().replaceAll("-", "").slice(0, 8),
            16,
        );
    }

    const randomDelay = $derived(randomValue() % 5);
    const randomDuration = $derived(2 + (randomValue() % 8));
    const isHeadingAnchor = $derived(
        className?.split(/\s+/).includes("headingAnchor") ?? false,
    );
</script>

{#if isHeadingAnchor}
    <a {href} class={className} {...attributes}>{@render children()}</a>
{:else}
    <a {href} {...attributes}>
        <span
            style:animation-delay={`${randomDelay}s`}
            style:animation-duration={`${randomDuration}s`}
            >{@render children()}</span
        >
    </a>
{/if}

<style>
    a {
        position: relative;
        display: inline-block;
        text-decoration: none;
        isolation: isolate;
        padding: 0 2px;
    }

    a.headingAnchor {
        color: var(--secondary);
        border-bottom: 1px solid transparent;
        margin-right: 0.25rem;
    }

    a.headingAnchor:hover {
        border-bottom-color: var(--secondary);
    }

    a.headingAnchor::before {
        display: none;
    }

    span {
        position: relative;
        z-index: 1;
        color: var(--text);
    }

    a::before {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        z-index: 0;
        pointer-events: none;
        content: "";
        background-color: var(--accent);
        transition: all 0.3s ease-in-out;
    }

    @media (hover: hover) and (pointer: fine) {
        a:hover::before {
            bottom: 0;
            height: 100%;
        }
    }
</style>
