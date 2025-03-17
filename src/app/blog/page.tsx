import styles from './page.module.css';
import fs from 'fs';
import graymatter from 'gray-matter';

const postsDir = 'public/posts';

function getPosts(): {
	slug: string;
	frontmatter: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any;
	};
	content: string;
}[] {
	const files = fs.readdirSync(postsDir);
	const posts = files.map((file) => {
		const slug = file.replace('.md', '');
		const markdownWithMeta = fs.readFileSync(
			`${postsDir}/${file}`,
			'utf-8'
		);
		const { data: frontmatter, content } = graymatter(markdownWithMeta);
		return {
			slug,
			frontmatter,
			content,
		};
	});
	return posts;
}
export default function Archive() {
	const posts = getPosts();
	return (
		<div className={styles.page}>
			<header>
				<h1>Blog Posts</h1>
			</header>
			<main>
				{posts.map((post) => (
					<article key={post.slug}>
						<h2>{post.frontmatter.title}</h2>
						<time dateTime={post.frontmatter.date}>
							{new Date(post.frontmatter.date).toLocaleDateString(
								'en-GB'
							)}
						</time>
						<ul>
							{post.frontmatter.tags.map(
								(tag: string, index: number) => (
									<li key={index}>{tag}</li>
								)
							)}
						</ul>
						<p>{post.frontmatter.description}</p>
						<a href={`/blog/${post.slug}`}>Read more</a>
					</article>
				))}
			</main>
		</div>
	);
}
