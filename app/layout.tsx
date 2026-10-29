import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const description =
  "Full-stack developer with five years of experience in the MERN stack, Next.js and NestJS. Portfolio and projects.";

export const metadata: Metadata = {
  metadataBase: new URL("https://amirzeb.dev"),
  title: {
    default: "Amir Zeb | Full Stack Developer",
    template: "%s | Amir Zeb",
  },
  description,
  authors: [{ name: "Amir Zeb" }],
  openGraph: {
    title: "Amir Zeb | Full Stack Developer",
    description,
    type: "website",
    url: "https://amirzeb.dev/",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amir Zeb",
  url: "https://amirzeb.dev/",
  jobTitle: "Full Stack Developer",
  sameAs: [
    "https://www.linkedin.com/in/amir-zeb",
    "https://github.com/amir-zeb",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
        <script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "792a78cc8a83402ba39e51b05f9b3a5e"}'></script>
      </body>
    </html>
  );
}