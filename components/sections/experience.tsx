import { experience } from "@/data";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { Timeline, TimelineItem } from "@/components/ui/timeline";

export default function Experience() {
    return (
        <section id="experience" className="relative overflow-hidden py-24 md:py-32">
            <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

            <div className="container relative mx-auto px-4">
                <Stagger className="mb-12 max-w-2xl md:mb-16" stagger={0.12}>
                    <StaggerItem as="p" className="mb-3 font-mono text-sm text-accent">
                        07 / experience
                    </StaggerItem>
                    <StaggerItem
                        as="h2"
                        className="text-4xl font-extrabold sm:text-5xl md:text-6xl"
                    >
                        Work <span className="text-accent text_shadow">Experience</span>
                    </StaggerItem>
                    <StaggerItem as="p" className="mt-4 text-muted">
                        Where I’ve worked, newest first.
                    </StaggerItem>
                </Stagger>

                <div className="max-w-4xl">
                    <Timeline>
                        {experience.map((e) => (
                            <TimelineItem key={`${e.company}-${e.duration}`} {...e} />
                        ))}
                    </Timeline>
                </div>
            </div>
        </section>
    );
}