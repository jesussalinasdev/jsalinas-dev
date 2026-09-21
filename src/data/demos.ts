/**
 * The three sample pages built on the trades template (next phase).
 * Fill `url` and `image` for each one. The Work section shows a placeholder
 * slot until both exist; the Offer line appears only when all three have a URL.
 */
export type Demo = { url: string; image: string };

export const demos: Demo[] = [
    { url: '', image: '' },
    { url: '', image: '' },
    { url: '', image: '' },
];

export const demosReady = demos.every((d) => d.url);
