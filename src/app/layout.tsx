import type { Metadata } from 'next';
import styles from './layout.module.css';
import './reset.css';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Victor Cherkashyn',
	description:
		"Victor Cherkashyn's website featuring his projects and blog focused around webdev, security, Linux and more!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<nav className={styles.navbar}>
					<ul className={styles.navbarElementsContainer}>
						<li>
							<Link href='/' className={styles.navbarLink}>
								Home
							</Link>
						</li>
						<li>
							<Link href='/blog' className={styles.navbarLink}>
								Blog
							</Link>
						</li>
						<li>
							<a
								className={styles.navbarLink}
								href='https://github.com/verbey?tab=repositories'
								target='_blank'
							>
								Projects
							</a>
						</li>
						<li>
							<Link href='/about' className={styles.navbarLink}>
								About me
							</Link>
						</li>
					</ul>
				</nav>
				<main>{children}</main>
				<footer className={styles.footer}>
					Made with coffee and tea and love and Next and many other
					things
				</footer>
			</body>
		</html>
	);
}
