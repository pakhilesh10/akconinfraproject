import { SectionHeading } from './section-heading'

const audiences = [
  {
    title: 'Heavy civil contractors',
    text: 'Who need submittals, schedules, estimates and procurement handled to owner and as per agency requirements.',
  },
  {
    title: 'Residential builders, small developers and individuals',
    text: 'Building a home who want a clear budget, a realistic schedule and someone checking quantities, quotes and progress.',
  },
]

export function Projects() {
  return (
    <section aria-labelledby="audience-title" id="projects" className="scroll-mt-16 bg-background py-20">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            id="audience-title"
            title="Who we work with"
            description="Practical project support for teams that need clarity, coordination and dependable follow-through."
          />
          <ul className="mt-8 space-y-4">
            {audiences.map((audience) => (
              <li key={audience.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-semibold text-foreground">{audience.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{audience.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Meet the founder</p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground">Akhilesh Prajapati, Founder</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Akhilesh is a civil engineer with a master&apos;s in project management from Boston, US and has spent 8 years as a project manager on heavy civil and residential projects. The work covers submittals, scheduling, estimating, cost management, procurement, subcontractor coordination, and execution for various heavy civil projects.
            </p>
            <p>
              He founded AKCON to bring that discipline to contractors, builders, developers and homeowners with the long-term goal of building infrastructure and residential projects. Every engagement gets direct access to the founder.
            </p>
          </div>
          <p className="mt-6 border-t border-border pt-5 text-sm font-medium text-foreground">8 Years of Experience</p>
          <p className="mt-1 text-sm text-muted-foreground">PMP Certified Project Manager (Credential ID 4188982)</p>
        </div>
      </div>
    </section>
  )
}
