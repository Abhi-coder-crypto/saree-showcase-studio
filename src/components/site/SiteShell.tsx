import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="border-b border-border fabric-texture">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <p className="text-eyebrow text-muted-foreground">{eyebrow}</p>
        <h1 className="mt-3 font-display text-5xl text-primary md:text-6xl">{title}</h1>
        {intro && (
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}
