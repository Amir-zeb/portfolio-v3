import { services } from "@/data";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/ui/service-card";

export default function Services() {
    return (
        <section id="services" className="relative overflow-hidden py-24 md:py-32">
            {/* soft background glow */}
            <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

            <div className="container relative mx-auto px-4">
                {/* Heading */}
                <Stagger className="mb-12 max-w-2xl md:mb-16" stagger={0.12}>
                    <StaggerItem as="p" className="mb-3 font-mono text-sm text-accent">
                        03 / services
                    </StaggerItem>
                    <StaggerItem
                        as="h2"
                        className="text-4xl font-extrabold sm:text-5xl md:text-6xl"
                    >
                        What I <span className="text-accent text_shadow">Do</span>
                    </StaggerItem>
                    <StaggerItem as="p" className="mt-4 text-muted">
                        Most of my work is business software, from the database to the
                        interface. This is what that usually covers.
                    </StaggerItem>
                </Stagger>

                {/* Cards */}
                <ul className="grid gap-2 lg:gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {services.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <Reveal
                                as="li"
                                key={s.title}
                                delay={(i % 4) * 0.08}
                                className="h-full"
                            >
                                <ServiceCard
                                    index={i}
                                    title={s.title}
                                    description={s.description}
                                    icon={<Icon size={24} aria-hidden />}
                                />
                            </Reveal>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}