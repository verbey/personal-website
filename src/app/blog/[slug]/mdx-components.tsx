import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import styles from './mdx-components.module.css';

export const mdxComponents: MDXComponents = {
	h1: ({ children }) => (
		<h1 style={{ color: 'var(--accent)', fontSize: '2.75rem' }}>
			{children}
		</h1>
	),
	h2: ({ children }) => (
		<h2 style={{ color: 'var(--accent)', fontSize: '2.5rem' }}>
			{children}
		</h2>
	),
	h3: ({ children }) => (
		<h3 style={{ color: 'var(--accent)', fontSize: '2.25rem' }}>
			{children}
		</h3>
	),
	h4: ({ children }) => (
		<h4 style={{ color: 'var(--accent)', fontSize: '2rem' }}>{children}</h4>
	),
	h5: ({ children }) => (
		<h5 style={{ color: 'var(--accent)', fontSize: '1.75rem' }}>
			{children}
		</h5>
	),
	h6: ({ children }) => (
		<h6 style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>
			{children}
		</h6>
	),
	a: ({ children, ...props }) => {
		return (
			<Link {...props} href={props.href || ''} className={styles.link}>
				{children}
			</Link>
		);
	},
};
