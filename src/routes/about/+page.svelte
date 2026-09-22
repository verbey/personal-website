<script lang="ts">
    import Image from "$lib/components/elements/Image.svelte";
    import Link from "$lib/components/elements/Link.svelte";
    import afflicted from "$lib/assets/afflicted.webp";
</script>

<p>
    I'm Victor (Hi, Victor!). I was born and currently reside in Ukraine. I am
    an IT support specialist at a medical centre, a position that I never
    expected to find myself in. The original plan actually was to land an SWE
    job as a frontend engineer but I eventually got tired after spending 3
    months trying to find a job in 2025. I still program as a hobby and in some
    cases I do so for work-related tasks.
</p>
<p>My interests include but are not limited to:</p>
<ul>
    <li>
        Infrastructure (mostly digital but real world infrastructure is
        incredible too!)
    </li>
    <li>Open source software</li>
    <li>Digital privacy</li>
    <li>Economy and economic history</li>
    <li>Videogames, especially ones that are not AAA</li>
</ul>

<p>
    Speaking of the latter, <Link
        href="https://store.steampowered.com/app/262060/Darkest_Dungeon/"
        >Darkest Dungeon</Link
    > holds a special place in my heart. This website's theme is built to resemble
    that of the game!
</p>

<Image
    src={afflicted}
    alt="A drawn picture of a human with hands on their head. The illustration resembles Darkest Dungeon art style."
    caption="I am not afflicted (yet) but I love Darkest Dungeon art style."
    width={256}
    height={256}
/>

<p>Honourable mentions:</p>
<ul>
    <li>Philosophy, the one that intersects with physics, to be specific</li>
    <li>
        Heavy metal with good vocals. If I had more free time I would have spent
        it on practicing growling!
    </li>
    <li>
        Numismatics. I keep expanding the collection of coins and banknotes that
        was started years ago by my mum.
    </li>
    <li>
        Travelling: I love seeing new <em>cities</em> sincerely enjoy 20th century's
        brutalism, modernism and constructivism
    </li>
    <li>I have spent significant amount of time on chess in the past years</li>
    <li>
        I play <Link href="https://en.wikipedia.org/wiki/Eight-ball"
            >billiard</Link
        > every chance I get and I am very fond of how my skills grow
    </li>
</ul>
