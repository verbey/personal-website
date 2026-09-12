interface ArchiveEntry {
    frontmatter: {
        [key: string]: any;
    };
    content: string;
    slug: string;
}

export type { ArchiveEntry };