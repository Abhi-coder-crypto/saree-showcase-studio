import { Link } from "@tanstack/react-router";
import { Search, UserRound } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-3xl leading-none tracking-tight text-primary">
            Vastraa
          </span>
          <span className="hidden text-eyebrow text-muted-foreground sm:inline">
            Saree Atelier
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative py-1 text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary"
              activeProps={{
                className:
                  "text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-gold",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Search"
            className="rounded-full border border-transparent p-2.5 text-foreground/70 transition-colors hover:border-border hover:text-primary"
          >
            <Search className="size-4.5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="rounded-full border border-border p-2.5 text-foreground/80 transition-colors hover:border-gold hover:text-primary"
          >
            <UserRound className="size-4.5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <nav className="flex items-center gap-6 overflow-x-auto border-t border-border/60 px-5 py-2.5 text-sm md:hidden no-scrollbar">
        {nav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: item.to === "/" }}
            className="whitespace-nowrap text-foreground/75"
            activeProps={{ className: "text-primary" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
