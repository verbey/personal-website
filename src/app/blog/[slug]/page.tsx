import styles from './page.module.css';
import fs from 'fs';
import graymatter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from './mdx-components';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkToc from 'remark-toc';

function getPost(postName: string): {
	slug: string;
	frontmatter: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any;
	};
	content: string;
} {
	const markdownWithMeta = fs.readFileSync(
		`public/posts/${postName}.md`,
		'utf-8'
	);

	const { data: frontmatter, content } = graymatter(markdownWithMeta);

	return {
		slug: postName,
		frontmatter,
		content,
	};
}

export default async function Post({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = getPost(slug);
	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<h1 className={styles.title}>{post.frontmatter.title}</h1>
				<time dateTime={post.frontmatter.date}>
					{new Date(post.frontmatter.date).toLocaleDateString()}
				</time>
				<ul className={styles.tagContainer}>
					{post.frontmatter.tags.map((tag: string, index: number) => (
						<li key={index}>{tag}</li>
					))}
				</ul>
			</header>
			<main>
				<article className={styles.post}>
					<MDXRemote
						source={post.content}
						components={mdxComponents}
						options={{
							mdxOptions: {
								remarkPlugins: [remarkGfm, remarkToc],
								rehypePlugins: [
									rehypeSlug,
									rehypeAutolinkHeadings,
								],
							},
						}}
					/>
				</article>
			</main>
		</div>
	);
}
