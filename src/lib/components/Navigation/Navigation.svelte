<script>
    import Link from "$lib/components/elements/Link.svelte";
</script>

<ul class="navigation">
    <li>
        <Link href="/" text="Home" />
    </li>
    <li>
        <Link href="/about" text="About" />
    </li>
    <li>
        <Link href="/contact" text="Contact" />
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
