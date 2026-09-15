import { error } from "@sveltejs/kit";
import { getArchiveEntries } from "$lib/server/entries";

export const prerender = true;

export const load = async ({ params }) => {
    const entry = (await getArchiveEntries()).find(
        (archiveEntry) => archiveEntry.slug === params.slug,
    );

    if (!entry) {
        error(404, "Entry not found");
    }

    return { entry };
};