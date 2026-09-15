import type { TOCEntry } from '$lib/types/TOCEntry';

const headingPattern = /^(#{2,3})[ \t]+(.+?)[ \t]*#*[ \t]*$/;

const stripMarkdown = (value: string): string =>
    value
        .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
        .replace(/[`*_~]/g, '')
        .trim();

const slugify = (value: string): string =>
    stripMarkdown(value)
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s-]/gu, '')
        .replace(/[\s-]+/g, '-')
        .replace(/^-+|-+$/g, '');

export const getTableOfContents = (content: string): TOCEntry[] => {
    const headings: TOCEntry[] = [];
    const slugCounts = new Map<string, number>();
    let insideCodeBlock = false;

    for (const line of content.split('\n')) {
        if (/^\s*```/.test(line)) {
            insideCodeBlock = !insideCodeBlock;
            continue;
        }

        if (insideCodeBlock) {
            continue;
        }

        const match = line.match(headingPattern);
        if (!match) {
            continue;
        }

        const label = stripMarkdown(match[2]);
        if (label.toLowerCase() === 'table of contents') {
            continue;
        }

        const baseId = slugify(label) || 'heading';
        const count = slugCounts.get(baseId) ?? 0;
        slugCounts.set(baseId, count + 1);

        headings.push({
            id: count === 0 ? baseId : `${baseId}-${count}`,
            label,
            level: match[1].length as 2 | 3
        });
    }

    return headings;
};