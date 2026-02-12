import Navbar from '@/components/Navbar/Navbar';
import styles from '../layout.module.css';

export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar activeTab='about' />
			<main className={styles.mainContent}>{children}</main>
		</>
	);
}