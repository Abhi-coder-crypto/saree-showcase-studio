import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { CategorySidebar, type Selection } from "@/components/site/CategorySidebar";
import { ProductCard } from "@/components/site/ProductCard";
import { fabricEdits, sarees } from "@/data/sarees";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vastraa — Handwoven Silk & Cotton Sarees" },
      {
        name: "description",
        content:
          "Shop handwoven Kanjivaram, Banarasi, handloom cotton and bridal sarees, sourced directly from Indian weaving clusters.",
      },
      { property: "og:title", content: "Vastraa — Handwoven Silk & Cotton Sarees" },
      {
        property: "og:description",
        content:
          "An atelier of heirloom sarees: Kanjivaram, Banarasi, handloom cotton and bridal zari drapes.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [selection, setSelection] = useState<Selection>({
    category: null,
    subcategory: null,
  });

  const featured = sarees.filter((s) => {
    if (selection.subcategory) return s.subcategory === selection.subcategory;
    if (selection.category) return s.category === selection.category;
    return s.featured;
  });

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative">
        <img
          src={heroImage}
          alt="Woman in a maroon Kanjivaram silk saree in a heritage courtyard"
          width={1920}
          height={1088}
          className="h-[68vh] min-h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-5">
            <div className="max-w-xl text-primary-foreground">
              <p className="text-eyebrow text-gold">The Festive Edit · 2026</p>
              <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">
                Six yards, woven with a lifetime of patience.
              </h1>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/80">
                Pure zari Kanjivarams, Banarasi brocades and airy handloom cottons — traced
                back to the looms and hands that made them.
              </p>
              <Link
                to="/products"
                className="mt-8 inline-flex items-center gap-2 border border-gold bg-gold/95 px-8 py-3.5 text-eyebrow text-ink transition-colors hover:bg-transparent hover:text-gold"
              >
                Shop Now <ArrowRight className="size-3.5" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by fabric — horizontal scroller */}
      <section className="mx-auto max-w-7xl px-5 pt-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-eyebrow text-muted-foreground">New Arrivals</p>
            <h2 className="mt-2 font-display text-4xl text-primary rule-gold">
              Shop by Fabric
            </h2>
          </div>
          <p className="hidden text-xs text-muted-foreground sm:block">Swipe to explore →</p>
        </div>

        <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3">
          {fabricEdits.map((edit, i) => (
            <Link
              key={i}
              to="/products"
              className="group w-64 shrink-0 snap-start border border-border bg-card"
            >
              <img
                src={edit.image}
                alt={edit.title}
                loading="lazy"
                width={900}
                height={1200}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="font-display text-xl text-foreground group-hover:text-primary">
                  {edit.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{edit.note}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sidebar + featured grid */}
      <section className="mx-auto mt-20 max-w-7xl px-5">
        <div className="flex flex-col gap-10 lg:flex-row">
          <CategorySidebar selection={selection} onSelect={setSelection} />

          <div className="flex-1">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-eyebrow text-muted-foreground">Handpicked</p>
                <h2 className="mt-2 font-display text-4xl text-primary rule-gold">
                  Featured Sarees
                </h2>
              </div>
              <Link
                to="/products"
                className="text-eyebrow text-primary hover:text-gold whitespace-nowrap"
              >
                View all
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3">
              {featured.map((saree) => (
                <ProductCard key={saree.id} saree={saree} />
              ))}
            </div>
            {featured.length === 0 && (
              <p className="mt-10 text-sm text-muted-foreground">
                No sarees in this category yet.
              </p>
            )}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
