import styles from './page.module.css';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import layoutStyles from './layout.module.css';

export default function Home() {
	return (
		<>
			<Navbar activeTab='home' />
			<main className={layoutStyles.mainContent}>
				<div className={styles.page}>
					<h1 className={styles.title}>Home</h1>
					<p className={styles.textBlock}>
						Hello! Name&apos;s Victor.
						This is a personal website where I keep notes on things I work on and care about.
						Most of it is related to software, computers, and topics I&apos;m currently learning.
					</p>
					<p className={styles.textBlock}>
						I&apos;m a computer engineering student based in Lviv, Ukraine.
						I write code mostly out of interest, not because I&apos;m trying to turn everything into a product or a career statement.
						My interests move between web development, systems-level topics, and basic security and privacy concerns.
					</p>
					<p className={styles.textBlock}>
						This domain is home to my email adress —{' '}
						<a
							href='mailto:victor@cherkashyn.me'
							className={styles.link}
						>
							victor@cherkashyn.me
						</a>
						. feel free to drop by and tell me you&apos;ve been here.
					</p>
					<p className={styles.textBlock}>
						Check out my essays over at <Link href='/blog' className={styles.link}>Blog page</Link>.
						Learn more about me on the <Link href='/about' className={styles.link}>About me page</Link>.
					</p>

				</div>
			</main>
		</>
	);
}
