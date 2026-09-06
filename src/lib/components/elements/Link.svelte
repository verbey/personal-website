<script lang="ts">
    let { href, text } = $props<{
        href: string;
        text: string;
    }>();

    function hashString(value: string): number {
        let hash = 0;

        for (let i = 0; i < value.length; i++) {
            hash = (hash << 5) - hash + value.charCodeAt(i);
        }

        return Math.abs(hash);
    }

    const randomDelay = $derived(hashString(href) % 5);
    const randomDuration = $derived(2 + (hashString(href) % 8));
</script>

<a {href}>
    <span
        style:animation-delay={`${randomDelay}s`}
        style:animation-duration={`${randomDuration}s`}>{text}</span
    >
</a>

<style>
    a {
        position: relative;
        display: inline-block;
        padding: 0.2rem 0.35rem;
        text-decoration: none;
        border-bottom: 1px solid var(--accent);
        isolation: isolate;
    }

    span {
        position: relative;
        z-index: 1;
        color: transparent;
        background-image: linear-gradient(
                110deg,
                transparent 0%,
                transparent 40%,
                color-mix(in srgb, var(--text), white 45%) 50%,
                transparent 60%,
                transparent 100%
            ),
            linear-gradient(var(--text), var(--text));
        background-size:
            200px 100%,
            100% 100%;
        background-position:
            -200px 0,
            0 0;
        background-repeat: no-repeat;
        background-clip: text;
        animation-name: shine;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    a::before {
        position: absolute;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        content: "";
        background: radial-gradient(
            circle at center,
            color-mix(in srgb, var(--primary), var(--accent) 50%) 0%,
            var(--accent) 15%,
            color-mix(in srgb, var(--primary), var(--accent) 50%) 30%,
            transparent 40%
        );
        transform: scale(0);
        transform-origin: center;
        transition: transform 0.5s ease-in-out;
    }

    @media (hover: hover) and (pointer: fine) {
        a:hover::before {
            transform: scale(1);
        }
    }

    @media (prefers-color-scheme: dark) {
        a::before {
            background: radial-gradient(
                circle at center,
                var(--primary) 0%,
                color-mix(in srgb, var(--primary), var(--accent) 50%) 15%,
                var(--primary) 30%,
                transparent 40%
            );
        }
    }

    @keyframes shine {
        0% {
            background-position:
                -200px 0,
                0 0;
        }

        100% {
            background-position:
                calc(100% + 200px) 0,
                0 0;
        }
    }
</style>
