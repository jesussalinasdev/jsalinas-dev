/** Reveals [data-arrive] elements as they enter the viewport, once. */
export function arrive() {
    const root = document.documentElement;
    if (!root.classList.contains('motion')) return;

    const items = document.querySelectorAll<HTMLElement>('[data-arrive]');
    const io = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                entry.target.classList.add('is-in');
                io.unobserve(entry.target);
            }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    items.forEach((el) => io.observe(el));
}
