import type { MDXComponents } from 'mdx/types';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export const mdxComponents: MDXComponents = {
	// Allows customizing built-in components, e.g. to add styling.
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
};
