<script>
    import Link from "$lib/components/elements/Link.svelte";
</script>

<nav>
    <ul class="navigationOptions">
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/archive">Archive</Link>
        </li>
        <li>
            <Link href="/about">About</Link>
        </li>
        <li>
            <Link href="/contact">Contact</Link>
        </li>
    </ul>
</nav>

<style>
    .navigationOptions {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        overflow-x: scroll;
        gap: 1rem;
        background: var(--secondary);
        position: sticky;
    }

    ul {
        padding: 0;
    }

    li {
        list-style: none;
        flex: 0 0 auto;
    }
</style>
