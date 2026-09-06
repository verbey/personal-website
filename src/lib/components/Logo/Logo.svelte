<script lang="ts">
    // @ts-expect-error Svelte component imports use a non-TypeScript extension.
    import Halo from "$lib/components/Logo/Halo.svelte";
</script>

<div class="logoContainer">
    <h1 class="logoText">Victor Cherkashyn</h1>
    <Halo />
</div>

<style>
    .logoContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .logoText {
        font-size: 2rem;
        margin: 0;
        padding: 0;
        z-index: 2;
    }

    @media screen and (max-width: 360px) {
        .logoText {
            font-size: 1.5rem;
        }
        .logoContainer {
            justify-content: flex-start;
        }
    }

    @media screen and (max-width: 280px) {
        .logoText {
            font-size: 1rem;
        }
    }
</style>
