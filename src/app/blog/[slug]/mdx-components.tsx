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
};
