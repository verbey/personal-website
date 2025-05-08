'use client';

import Link from 'next/link';
import { useState } from 'react';

import styles from './Navbar.module.css';

export default function Navbar() {
	// I don't set default activeTab state so the home tab won't be active forever for users with JS disabled
	const [activeTab, setActiveTab] = useState('');

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
						onClick={() => setActiveTab('home')}
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
						onClick={() => setActiveTab('blog')}
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
						onClick={() => setActiveTab('about')}
					>
						About me
					</Link>
				</li>
			</ul>
		</nav>
	);
}
