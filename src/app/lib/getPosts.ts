import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // I assume you use gray-matter

const postsDir = path.join(process.cwd(), 'src/app/posts');

export default function getAllPosts() {
	const files = fs.readdirSync(postsDir);

	const posts = files.map((filename) => {
		const filePath = path.join(postsDir, filename);
		const markdown = fs.readFileSync(filePath, 'utf-8');
		const { data: frontmatter, content } = matter(markdown);

		const slug = filename.replace(/\.md$/, '');

		return {
			slug,
			frontmatter,
			content,
		};
	});

	return posts;
}
