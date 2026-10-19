import { MapPin } from 'lucide-react'
import { AssessmentForm } from './assessment-form'
import { SectionHeading } from './section-heading'
import { site, telHref } from '@/lib/site'

export function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="scroll-mt-16 bg-muted/40 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4">
        <SectionHeading
          id="contact-title"
          title="Contact"
          description="Ready to start your next infrastructure project? Get in touch with our team."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {site.offices.map((o) => (
                <div key={o.label} className="flex flex-col gap-2 rounded-xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="font-semibold text-foreground">{o.label}</h3>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4 text-primary" aria-hidden="true" />
                    {o.location}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 text-sm shadow-sm">
              <h3 className="font-semibold text-foreground">Headquarters</h3>
              <p>{site.headquarters}</p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a href={`mailto:${site.email}`} className="hover:text-primary">
                  {site.email}
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone (US):</span>{' '}
                <a href={telHref(site.phoneUS)} className="hover:text-primary">
                  {site.phoneUS}
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone (India):</span>{' '}
                <a href={telHref(site.phoneIndia)} className="hover:text-primary">
                  {site.phoneIndia}
                </a>
              </p>
            </div>
          </div>
          <AssessmentForm variant="full" className="bg-background" />
        </div>
      </div>
    </section>
  )
}
