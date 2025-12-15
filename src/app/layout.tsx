import type { Metadata } from 'next';
import styles from './layout.module.css';
import './reset.css';
import './globals.css';
import localFont from 'next/font/local';

import Navbar from '@/components/Navbar/Navbar';

const departureMono = localFont({
	src: [
		{
			path: '../fonts/DepartureMono-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	fallback: ['monospace', 'system-ui'],
	variable: '--font-departure-mono',
});

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
		<html lang='en' className={departureMono.variable}>
			<body>
				<Navbar />
				<main>{children}</main>
				<footer className={styles.footer}>
					Hand coded by me with love, Next.js and React. Type safety
					ensured by Typescript :)
				</footer>
			</body>
		</html>
	);
}
