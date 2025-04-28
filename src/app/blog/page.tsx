import styles from './page.module.css';
import infoPageStyles from '../page.module.css';
import getPosts from '@/app/lib/getPosts';

export default function Archive() {
	const posts = getPosts();
	return (
		<div className={infoPageStyles.page}>
			<header>
				<h1>Blog Posts</h1>
			</header>
			<main>
				{posts.map((post) => (
					<a
						key={post.slug}
						href={`/blog/${post.slug}`}
						className={styles.link}
					>
						<article className={styles.post}>
							<h2>{post.frontmatter.title}</h2>
							<div className={styles.metadataContainer}>
								<div>Posted on:</div>
								<time dateTime={post.frontmatter.date}>
									{new Date(
										post.frontmatter.date
									).toLocaleDateString('en-GB')}
								</time>
							</div>
							<div className={styles.metadataContainer}>
								<div>Tags:</div>
								<ul className={styles.tags}>
									{post.frontmatter.tags.map(
										(tag: string, index: number) => (
											<li key={index}>{tag}</li>
										)
									)}
								</ul>
							</div>
							<p className={infoPageStyles.textBlock}>
								{post.frontmatter.description}
							</p>
						</article>
					</a>
				))}
			</main>
		</div>
	);
}
