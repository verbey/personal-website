import fs from 'fs';
import graymatter from 'gray-matter';
import { cache } from 'react';

const postsDir = 'src/app/posts';

export const getPosts = cache(
	(): {
		slug: string;
		frontmatter: {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			[key: string]: any;
		};
		content: string;
	}[] => {
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
);

export default getPosts;
