import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import styles from './mdx-components.module.css';
import { Code } from 'bright';

Code.theme = 'github-dark';

export const mdxComponents: MDXComponents = {
	a: ({ children, ...props }) => {
		return (
			<Link {...props} href={props.href || ''} className={styles.link}>
				{children}
			</Link>
		);
	},
	pre: ({ children, ...props }) => {
		return (
			<>
				<Code lineNumbers className={styles.code} {...props}>
					{children}
				</Code>
			</>
		);
	},

	h1: ({ children, ...props }) => (
		<h1 className={styles.header} {...props}>
			{children}
		</h1>
	),
	h2: ({ children, ...props }) => (
		<h2 className={styles.header} {...props}>
			{children}
		</h2>
	),
	h3: ({ children, ...props }) => (
		<h3 className={styles.header} {...props}>
			{children}
		</h3>
	),
	h4: ({ children, ...props }) => (
		<h4 className={styles.header} {...props}>
			{children}
		</h4>
	),
	h5: ({ children, ...props }) => (
		<h5 className={styles.header} {...props}>
			{children}
		</h5>
	),
	h6: ({ children, ...props }) => (
		<h6 className={styles.header} {...props}>
			{children}
		</h6>
	),
};
