import { Heart } from "lucide-react"

import SocialLinks from "@/components/social-links"
import { navItems, site } from "@/lib/data/site"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="/#home"
              className="group inline-flex items-center gap-2.5"
              aria-label={`${site.name} — back to top`}
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card font-mono text-sm font-bold text-primary transition-colors group-hover:border-primary/50">
                {site.initials}
              </span>
              <span className="text-base font-semibold tracking-tight">{site.name}</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{site.headline}</p>

            <SocialLinks size="md" className="mt-6" />
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <nav aria-label="Footer" className="mt-4 grid grid-cols-2 gap-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Status */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Current Status</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span aria-hidden className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-500" />
                Open to internship &amp; full-time roles
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                Final-year B.Tech CSE (2027)
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                AI/ML &amp; full-stack specialisation
              </li>
            </ul>

            <dl className="mt-6 space-y-2 rounded-lg border border-border bg-background/60 p-4 text-sm">
              <div className="flex gap-2">
                <dt className="shrink-0 text-muted-foreground">Based in</dt>
                <dd className="font-medium">{site.location}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0 text-muted-foreground">Email</dt>
                <dd className="min-w-0">
                  <a href={`mailto:${site.email}`} className="break-all font-medium transition-colors hover:text-primary">
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Built with Next.js, Tailwind CSS &amp; Framer Motion
            <Heart aria-hidden className="h-3.5 w-3.5 text-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  )
}
