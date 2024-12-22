import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<h1 className={styles.title}>Home</h1>
			</main>
			<footer className={styles.footer}>
				<p className={styles.footerText}>
					Made with &lt;3 and coffee and Next
				</p>
			</footer>
		</div>
	);
}
