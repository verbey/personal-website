<script>
    import Link from "$lib/components/elements/Link.svelte";
</script>

<footer class="footerContent">
    <Link href="https://github.com/verbey/personal-website">Source</Link>
    <p class="footerText">Made with love, coffee and SvelteKit.</p>
    <Link href="/feed">RSS</Link>
</footer>

<style>
    .footerContent {
        background: var(--secondary);
        font-size: 0.8rem;
        font-family: "Nimbus Mono PS", "Courier New", monospace;
        padding: 0 1rem;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: space-between;
        align-items: center;
        overflow-x: scroll;
    }

    .footerText {
        padding: 0.4rem 0 0.2rem 0;
        text-wrap: nowrap;
    }
</style>
