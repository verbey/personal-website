import styles from './Footer.module.css';
import IconLink from '@/components/ui/IconLink/IconLink';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerBorder}></div>
            <p className={styles.footerTextBlock}>
                Hand coded by me with love, Next.js and React. Type safety
                ensured by Typescript :)
            </p>
            <div className={styles.footerLinkContainer}>
                <IconLink iconSrc="streamline-pixel-pet-animals-cat.svg" href="https://metapixl.com/vittorio" alt="Fediverse" />
                <IconLink iconSrc="streamline-pixel-email-envelope-close.svg" href="mailto:victor@cherkashyn.me" alt="Email" />
                <IconLink iconSrc="streamline-pixel-coding-apps-websites-programming-browser.svg" href="https://github.com/verbey" alt="GitHub" />
                <IconLink iconSrc="streamline-pixel-interface-essential-wifi-feed.svg" href="https://cherkashyn.me/feed.xml" alt="RSS Feed" />
            </div>
        </footer>);
}

export default Footer;