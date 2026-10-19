import { Award, Shield, Target } from 'lucide-react'
import { SectionHeading } from './section-heading'

const focusAreas = [
  { icon: Target, title: 'Heavy Civil', text: 'Specialized in heavy civil infrastructure and pier construction project management' },
  { icon: Shield, title: 'Residential Projects', text: 'Estimates, BOQs, schedules, and project progress tracking reports' },
  { icon: Award, title: 'Digital Infrastructure', text: 'Digital infrastructure project planning and support' },
]

const certifications = ['PMP Certified', 'Procore Certified', 'OSHA 10', 'MS Project Expert', 'Bluebeam Certified']

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="scroll-mt-16 bg-background py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4">
        <SectionHeading
          id="about-title"
          title="About AKCON Infrastructure"
          description="AKCON Infrastructure is built to deliver infrastructure and residential projects. We are starting where projects are won or lost: planning, documentation, estimating, and procurement. We support heavy civil and residential contractors, builders, and developers with submittals, scheduling, estimating, procurement and project management support."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-4">
          <h3 className="text-lg font-semibold text-foreground">Professional Certifications</h3>
          <ul className="flex flex-wrap justify-center gap-2">
            {certifications.map((c) => (
              <li key={c} className="rounded-md bg-muted px-3 py-1 text-xs font-medium text-foreground">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
