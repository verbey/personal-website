import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import matter from 'gray-matter';
import type { ArchiveEntry } from '$lib/types/ArchiveEntry';
import { getTableOfContents } from '$lib/server/markdown';

const entriesDirectory = join(process.cwd(), 'src/content/entries');

export async function getArchiveEntries(): Promise<ArchiveEntry[]> {
    const files = await readdir(entriesDirectory);

    const entries = await Promise.all(
        files
            .filter((file) => file.endsWith('.md'))
            .map(async (file) => {
                const archiveEntry = matter(
                    await readFile(join(entriesDirectory, file), 'utf8')
                );

                return {
                    frontmatter: archiveEntry.data,
                    content: archiveEntry.content,
                    slug: file.replace(/\.md$/, ''),
                    tableOfContents: getTableOfContents(archiveEntry.content)
                };
            })
    );

    return entries.sort(
        (first, second) =>
            new Date(second.frontmatter.date).getTime() -
            new Date(first.frontmatter.date).getTime()
    );
}