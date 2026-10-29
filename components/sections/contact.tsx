import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { ContactIcon } from "@/components/ui/contact-icon";
import { CopyEmail } from "@/components/ui/copy-email";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

const EMAIL = "amirzeb695@gmail.com";

const socials = [
    { href: "https://github.com/amir-zeb", label: "GitHub", Icon: FaGithub },
    {
        href: "https://linkedin.com/in/amir-zeb",
        label: "LinkedIn",
        Icon: FaLinkedin,
    },
];

export default function Contact() {
    return (
        <section id="contact" className="relative overflow-hidden py-24 md:py-32">
            <div className="container relative mx-auto px-4">
                <Reveal className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface/60 px-6 py-14 text-center shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] md:px-12 md:py-20">
                    {/* soft glow at the top of the card */}
                    <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl" />

                    <div className="relative">
                        <ContactIcon />

                        <Stagger stagger={0.12} delay={0.1}>
                            <StaggerItem
                                as="p"
                                className="mb-3 font-mono text-sm text-accent"
                            >
                                05 / contact
                            </StaggerItem>

                            <StaggerItem
                                as="h2"
                                className="mb-4 text-4xl font-extrabold sm:text-5xl md:text-6xl"
                            >
                                Get In <span className="text-accent text_shadow">Touch</span>
                            </StaggerItem>

                            <StaggerItem
                                as="p"
                                className="mx-auto mb-8 max-w-xl text-muted md:text-lg"
                            >
                                Have something to discuss or simply want to connect? Reach out
                                by email. I’d love to hear from you.
                            </StaggerItem>

                            <StaggerItem className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <Button
                                    href={`mailto:${EMAIL}`}
                                    aria-label="Email me (opens your email app)"
                                >
                                    <MdEmail aria-hidden size={18} />
                                    Say Hello
                                </Button>
                                <CopyEmail email={EMAIL} />
                            </StaggerItem>

                            <StaggerItem>
                                <ul className="flex items-center justify-center gap-2">
                                    {socials.map(({ href, label, Icon }) => (
                                        <li key={label}>
                                            <a
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={label}
                                                title={label}
                                                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 text-muted transition duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
                                            >
                                                <Icon aria-hidden size={18} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </StaggerItem>
                        </Stagger>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}