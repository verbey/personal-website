import { getArchiveEntries } from '$lib/server/entries';

const siteUrl = 'https://cherkashyn.me';

const escapeXml = (value: string): string =>
    value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&apos;');

export const prerender = true;

export const GET = async () => {
    const entries = await getArchiveEntries();
    const items = entries
        .map((entry) => {
            const link = `${siteUrl}/archive/${encodeURIComponent(entry.slug)}`;

            return `
        <item>
            <title>${escapeXml(entry.frontmatter.title)}</title>
            <description>${escapeXml(entry.frontmatter.description)}</description>
            <link>${link}</link>
            <guid isPermaLink="true">${link}</guid>
            <pubDate>${new Date(entry.frontmatter.date).toUTCString()}</pubDate>
        </item>`;
        })
        .join('');

    const feed = `<?xml version="1.0" encoding="UTF-8" ?>
                    <rss version="2.0">
                        <channel>
                            <title>Victor Cherkashyn</title>
                            <link>${siteUrl}</link>
                            <description>Articles by Victor Cherkashyn</description>
                            <language>en</language>${items}
                        </channel>
                    </rss>`;

    return new Response(feed, {
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8'
        }
    });
};