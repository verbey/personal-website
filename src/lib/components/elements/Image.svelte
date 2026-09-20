<script lang="ts">
    let { src, alt, caption, width, height } = $props<{
        src: string;
        alt: string;
        caption?: string;
        width?: number;
        height?: number;
    }>();
</script>

{#if caption}
    <figure>
        <img {src} {alt} {width} {height} />
        <figcaption>{caption}</figcaption>
    </figure>
{:else}
    <img {src} {alt} />
{/if}

<style>
    figure {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    figcaption {
        text-align: center;
        font-size: 0.8rem;
    }
</style>
