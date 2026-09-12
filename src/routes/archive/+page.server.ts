import { getArchiveEntries } from "$lib/server/entries";

export const prerender = true;

export const load = async () => {
    return {
        archiveEntries: await getArchiveEntries()
    };
};

