import { getArchiveEntries } from "#lib/server/entries.js";

export const prerender = true;

export const load = async () => {
    return {
        archiveEntries: await getArchiveEntries()
    };
};

