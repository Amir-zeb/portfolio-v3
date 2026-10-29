import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { archives } from "@/data";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

const pad = (n: number) => String(n).padStart(2, "0");

// Shared by the header row and every project row so the columns line up
const cols = "md:grid-cols-[3rem_minmax(0,1.3fr)_minmax(0,2fr)_8.5rem]";

export default function Archive() {
    return (
        <section id="archive" className="relative overflow-hidden py-24 md:py-32">
            <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

            <div className="container relative mx-auto px-4">
                {/* Heading */}
                <Stagger className="mb-12 max-w-2xl md:mb-16" stagger={0.12}>
                    <StaggerItem as="p" className="mb-3 font-mono text-sm text-accent">
                        06 / archive
                    </StaggerItem>
                    <StaggerItem
                        as="h2"
                        className="text-4xl font-extrabold sm:text-5xl md:text-6xl"
                    >
                        Open Source{" "}
                        <span className="text-accent text_shadow">Archive</span>
                    </StaggerItem>
                    <StaggerItem as="p" className="mt-4 text-muted">
                        Side projects, experiments, and small libraries. The code for all
                        of them is on GitHub.
                    </StaggerItem>
                </Stagger>

                {/* Column headings (desktop only, decorative) */}
                <div
                    aria-hidden
                    className={`hidden gap-6 border-b border-border px-6 pb-3 font-mono text-xs uppercase tracking-wider text-muted md:grid ${cols}`}
                >
                    <span>#</span>
                    <span>Project</span>
                    <span>Built with</span>
                    <span className="text-right">Links</span>
                </div>

                {/* Rows */}
                <ul>
                    {archives.map((a, i) => (
                        <Reveal
                            as="li"
                            key={a.title}
                            y={16}
                            delay={Math.min(i, 3) * 0.05}
                            className="group relative border-b border-border transition-colors duration-300 hover:bg-surface/50"
                        >
                            {/* accent bar that grows in on hover */}
                            <span
                                aria-hidden
                                className="absolute inset-y-0 left-0 w-0.5 origin-center scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100 motion-reduce:transition-none"
                            />

                            <div
                                className={`grid gap-4 px-4 py-5 md:items-center md:gap-6 md:px-6 ${cols}`}
                            >
                                <span className="hidden font-mono text-sm text-muted md:block">
                                    {pad(i + 1)}
                                </span>

                                <h3 className="flex items-baseline gap-3 font-heading text-lg font-semibold leading-snug">
                                    <span className="font-mono text-xs text-accent md:hidden">
                                        {pad(i + 1)}
                                    </span>
                                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
                                        {a.title}
                                    </span>
                                </h3>

                                <ul className="flex flex-wrap gap-1.5">
                                    {a.built_wt.map((tag) => (
                                        <li
                                            key={tag}
                                            className="rounded-full border border-border bg-background/60 px-2.5 py-0.5 font-mono text-[11px] text-foreground"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-2 md:justify-end">
                                    <a
                                        href={a.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${a.title} on GitHub`}
                                        title="View on GitHub"
                                        className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface/60 text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                                    >
                                        <FaGithub aria-hidden size={16} />
                                    </a>

                                    {a.live && (
                                        <a
                                            href={a.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${a.title} live demo`}
                                            className="group/live inline-flex h-9 items-center gap-1 rounded-full border border-border bg-surface/60 px-3 text-sm font-medium text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                                        >
                                            Live
                                            <MdArrowOutward
                                                aria-hidden
                                                size={16}
                                                className="transition-transform duration-200 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover/live:translate-x-0 motion-reduce:group-hover/live:translate-y-0"
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </ul>

                <Reveal delay={0.1} className="mt-10 flex justify-center">
                    <Button
                        variant="secondary"
                        href="https://github.com/Amir-zeb"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub aria-hidden size={18} />
                        More on GitHub
                    </Button>
                </Reveal>
            </div>
        </section>
    );
}