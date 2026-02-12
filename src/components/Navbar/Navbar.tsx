import Link from 'next/link';

import styles from './Navbar.module.css';

type ActiveTab = 'home' | 'blog' | 'about' | '';

type NavbarProps = {
	activeTab?: ActiveTab;
};

export default function Navbar(props: NavbarProps) {

	return (
		<>
			─=≡Σ((( つ•̀ω•́)つ
			<nav className={styles.navbar}>
				<ul className={styles.navbarElementsContainer}>
					<li>
						<Link
							href='/'
							className={`${styles.navbarLink} ${props.activeTab === 'home' ? styles.activeTab : ''}`.trim()}
							aria-current={props.activeTab === 'home' ? 'page' : undefined}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href='/blog'
							className={`${styles.navbarLink} ${props.activeTab === 'blog' ? styles.activeTab : ''}`.trim()}
							aria-current={props.activeTab === 'blog' ? 'page' : undefined}
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
							className={`${styles.navbarLink} ${props.activeTab === 'about' ? styles.activeTab : ''}`.trim()}
							aria-current={props.activeTab === 'about' ? 'page' : undefined}
						>
							About me
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
