// components/sections/footer.tsx
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
    MdArrowUpward,
    MdEmail,
    MdOutlineWeb,
    MdPrivacyTip,
} from "react-icons/md";

const EMAIL = "amirzeb695@gmail.com";

const socials = [
    { href: "https://github.com/amir-zeb", label: "GitHub", Icon: FaGithub },
    {
        href: "https://linkedin.com/in/amir-zeb",
        label: "LinkedIn",
        Icon: FaLinkedin,
    },
    {
        href: "https://portfolio-a5a72.web.app/",
        label: "Check out my Portfolio V1",
        Icon: MdOutlineWeb,
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-border bg-surface/40">
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                    {/* Brand + socials */}
                    <div>
                        <a
                            href="#home"
                            className="font-heading text-xl font-bold tracking-tight"
                        >
                            Amir<span className="text-accent">.</span>
                        </a>
                        <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                            Full-stack developer building ERP and eCommerce SaaS software
                            with the MERN stack.
                        </p>

                        <ul className="mt-5 flex items-center gap-2">
                            {socials.map(({ href, label, Icon }) => (
                                <li key={label}>
                                    <SocialLink href={href} label={label} Icon={Icon} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                        <FooterPill href={`mailto:${EMAIL}`} Icon={MdEmail}>
                            Contact
                        </FooterPill>
                        <FooterPill href="/privacy-policy" Icon={MdPrivacyTip}>
                            Privacy Policy
                        </FooterPill>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} Amir Zeb. A personal creation,
                        designed and coded by me.
                    </p>
                    <a
                        href="#home"
                        className="group inline-flex items-center gap-1.5 rounded-full px-2 py-1 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                        Back to top
                        <MdArrowUpward
                            aria-hidden
                            size={14}
                            className="transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({
    href,
    label,
    Icon,
}: {
    href: string;
    label: string;
    Icon: IconType;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface/60 text-muted transition duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
        >
            <Icon aria-hidden size={18} />
        </a>
    );
}

function FooterPill({
    href,
    Icon,
    children,
}: {
    href: string;
    Icon: IconType;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-[13px] text-muted transition-colors duration-200 hover:border-accent/60 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
            <Icon
                aria-hidden
                size={14}
                className="transition-colors group-hover:text-accent"
            />
            {children}
        </a>
    );
}