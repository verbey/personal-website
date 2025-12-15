"use client";

import Link from 'next/link';

import styles from './Navbar.module.css';

import useNavbar from './useNavbar';

export default function Navbar() {
	const navbarState = useNavbar();
	const activeTab = navbarState?.activeTab ?? '';

	return (
		<nav className={styles.navbar}>
			<ul className={styles.navbarElementsContainer}>
				<li>
					<Link
						href='/'
						className={
							activeTab === 'home'
								? styles.navbarLink + ' ' + styles.activeTab
								: styles.navbarLink
						}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						href='/blog'
						className={
							activeTab === 'blog'
								? styles.navbarLink + ' ' + styles.activeTab
								: styles.navbarLink
						}
					>
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
					<Link
						href='/about'
						className={
							activeTab === 'about'
								? styles.activeTab + ' ' + styles.navbarLink
								: styles.navbarLink
						}
					>
						About me
					</Link>
				</li>
			</ul>
		</nav>
	);
}
