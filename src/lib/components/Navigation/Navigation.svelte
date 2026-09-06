<script>
    import Link from "$lib/components/elements/Link.svelte";
</script>

<ul class="navigation">
    <li>
        <Link href="/">Home</Link>
    </li>
    <li>
        <Link href="/about">About</Link>
    </li>
    <li>
        <Link href="/contact">Contact</Link>
    </li>
</ul>

<style>
    .navigation {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        background: var(--secondary);
        padding: 2px 0 4px 0;
        position: sticky;
    }
</style>
