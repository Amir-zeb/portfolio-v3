// components/sections/about.tsx
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

const stats = [
    { value: "40+", label: "Projects completed" },
    { value: "5+", label: "Years of experience" },
    // { value: "2", label: "Domains: ERP & eCommerce" },
];

const stack = [
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "NestJS",
    "Docker",
];

const languages = ["English", "Urdu"];

const card =
    "rounded-2xl border border-border bg-surface/60 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]";

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden py-24 md:py-32">
            {/* soft background glow */}
            <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

            <div className="container relative mx-auto px-4">
                {/* Heading */}
                <Stagger className="mb-12 md:mb-16" stagger={0.12}>
                    <StaggerItem as="p" className="mb-3 font-mono text-sm text-accent">
                        01 / about
                    </StaggerItem>
                    <StaggerItem
                        as="h2"
                        className="text-4xl font-extrabold sm:text-5xl md:text-6xl"
                    >
                        About <span className="text-accent text_shadow">Me</span>
                    </StaggerItem>
                </Stagger>

                <div className="grid gap-6 lg:grid-cols-5 lg:gap-16">
                    {/* Story */}
                    <Stagger
                        className="space-y-3 lg:space-y-5 leading-relaxed text-muted lg:col-span-3"
                        stagger={0.12}
                    >
                        <StaggerItem as="p" className="text-md text-foreground md:text-xl">
                            Hi, I’m Amir Zeb, a Full Stack Developer with over 5 years of
                            experience building modern, scalable, and user-focused web
                            applications.
                        </StaggerItem>
                        <StaggerItem as="p">
                            My expertise lies in JavaScript-based technologies, particularly
                            the MERN stack. I enjoy working across the entire development
                            lifecycle, from creating intuitive and responsive user interfaces
                            to designing secure backend systems and databases that power
                            real-world applications.
                        </StaggerItem>
                        <StaggerItem as="p">
                            Over the years, I’ve contributed to a variety of projects,
                            including SaaS platforms, ERP systems, dashboards, e-commerce
                            applications, and custom business solutions. Each project has
                            strengthened my ability to solve complex problems, adapt to new
                            challenges, and deliver software that balances functionality,
                            performance, and maintainability.
                        </StaggerItem>
                        <StaggerItem as="p">
                            Outside of professional work, I enjoy exploring emerging
                            technologies, experimenting with new tools, and building personal
                            projects that expand my technical skills. Continuous learning has
                            always been an important part of my journey as a developer.
                        </StaggerItem>
                    </Stagger>

                    {/* Facts */}
                    <div className="space-y-2 lg:space-y-6 lg:col-span-2">
                        <Reveal as="ul" className={`${card} divide-x divide-border flex`}>
                            {stats.map((s) => (
                                <li key={s.label} className="flex max-lg:flex-1 flex-row lg:flex-col xl:flex-row items-center gap-4 p-6">
                                    <span className="font-heading text-4xl font-extrabold text-accent text_shadow">
                                        <CountUp value={s.value} />
                                    </span>
                                    <span className="text-sm text-muted">{s.label}</span>
                                </li>
                            ))}
                        </Reveal>

                        <Reveal delay={0.1} className={`${card} p-6`}>
                            <h3 className="mb-4 font-mono text-sm text-accent">Core stack</h3>
                            <Stagger as="ul" className="flex flex-wrap gap-2" stagger={0.05}>
                                {stack.map((t) => (
                                    <StaggerItem
                                        as="li"
                                        key={t}
                                        className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-foreground"
                                    >
                                        {t}
                                    </StaggerItem>
                                ))}
                            </Stagger>
                        </Reveal>

                        <Reveal delay={0.2} className={`${card} p-6`}>
                            <h3 className="mb-4 font-mono text-sm text-accent">
                                Languages I speak
                            </h3>
                            <Stagger as="ul" className="flex flex-wrap gap-2" stagger={0.08}>
                                {languages.map((l) => (
                                    <StaggerItem
                                        as="li"
                                        key={l}
                                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-sm text-foreground"
                                    >
                                        {l}
                                    </StaggerItem>
                                ))}
                            </Stagger>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}