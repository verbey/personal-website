import Navbar from '@/components/Navbar/Navbar';
import styles from '../layout.module.css';

export default function BlogLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar activeTab='blog' />
			<main className={styles.mainContent}>{children}</main>
		</>
	);
}