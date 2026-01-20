"use client";

import { useTranslations } from "next-intl";

export function Portfolio() {
    const t = useTranslations('Portfolio');

    const projects = [
        {
            title: t('projects.below_zero_app.title'),
            description: t('projects.below_zero_app.description'),
            tags: ["Next.js", "Supabase", "Tailwind", "PWA"],
            image: "/below-zero-dashboard.webp",
            link: "",
            isPrivate: true,
        },
        {
            title: t('projects.below_zero_site.title'),
            description: t('projects.below_zero_site.description'),
            tags: ["WordPress", "Elementor", "SEO", "Analytics"],
            image: "/below-zero-site.webp",
            link: "https://below-zero.ca",
            isPrivate: false,
        },
        {
            title: t('projects.cynthia.title'),
            description: t('projects.cynthia.description'),
            tags: ["WordPress", "Branding", "Multilingual", "Booking"],
            image: "/cynthia-site.webp",
            link: "https://cynthiamedrano.ca",
            isPrivate: false,
        },
        {
            title: t('projects.giuseppe_febres.title'),
            description: t('projects.giuseppe_febres.description'),
            tags: ["Portfolio", "Next.js", "Analytics"],
            image: "/giuseppe-febres-site.png",
            link: "https://giuseppefebres.com/",
            isPrivate: false,
        },
        {
            title: t('projects.locky.title'),
            description: t('projects.locky.description'),
            tags: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Security"],
            image: "/locky-dashboard.png",
            link: "",
            isPrivate: true,
        },
    ];

    return (
        <section id="portfolio" className="py-32 relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-ai-blue">{t('title')}</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-starlight sm:text-4xl">
                        {t('headline')}
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted">
                        {t('description')}
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {projects.map((project) => (
                        <article key={project.title} className="flex flex-col items-start group">
                            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-gray-900 border border-white/10">
                                <img
                                    src={project.image}
                                    alt={`${project.title} - ${project.tags.join(', ')} Project`}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs flex-wrap gap-y-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="relative z-10 rounded-full bg-white/5 px-3 py-1.5 font-medium text-muted hover:bg-white/10 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-starlight group-hover:text-ai-blue transition-colors">
                                        {project.link ? (
                                            <a href={project.link} target={project.isPrivate ? "_self" : "_blank"} rel="noopener noreferrer">
                                                <span className="absolute inset-0" />
                                                {project.title}
                                            </a>
                                        ) : (
                                            <span>{project.title}</span>
                                        )}
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="mt-4 flex items-center gap-x-4">
                                    {project.isPrivate ? (
                                        <span className="text-sm font-semibold leading-6 text-muted flex items-center gap-2 cursor-not-allowed opacity-70">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            {t('private_access')}
                                        </span>
                                    ) : (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6 text-ai-blue hover:text-ai-blue/80 transition-colors flex items-center gap-1">
                                            {t('visit_site')} <span aria-hidden="true">→</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
