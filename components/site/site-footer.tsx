import { Mail, Phone } from 'lucide-react'
import { Logo } from './logo'
import { site, telHref } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="flex flex-col gap-4 md:col-span-2">
          <Logo />
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Project consulting for heavy civil and residential projects. Building tomorrow&apos;s infrastructure,
            starting with the planning behind it.
          </p>
          <div className="flex gap-3">
            <SocialLink href={`mailto:${site.email}`} label="Email">
              <Mail className="size-4" aria-hidden="true" />
            </SocialLink>
            <SocialLink href={telHref(site.phoneUS)} label="Call">
              <Phone className="size-4" aria-hidden="true" />
            </SocialLink>
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-foreground">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-primary">
                  {item.label === 'About' ? 'About Us' : item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 text-sm">
          <h2 className="font-semibold text-foreground">Contact</h2>
          {site.offices.map((o) => (
            <p key={o.label} className="flex flex-col text-muted-foreground">
              <span className="font-medium text-foreground">{o.label}:</span>
              {o.location}
            </p>
          ))}
          <a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-primary">
            {site.email}
          </a>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        &copy; 2024 {site.name}. All rights reserved.
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
    >
      {children}
    </a>
  )
}
