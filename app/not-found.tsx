import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Amir Zeb",
  description: "The page you’re looking for doesn’t exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 pt-24 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
        Page <span className="text-accent text_shadow">not found</span>
      </h1>
      <p className="mt-4 text-muted">
        That link doesn’t go anywhere. It may have moved, or the address might
        have a typo.
      </p>
      <a href="/" className="btn btn-primary mt-8">
        Back to home
      </a>
    </main>
  );
}