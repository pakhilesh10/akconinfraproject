import { Calculator, ClipboardCheck, FileText, PenTool, Settings, Shield } from 'lucide-react'
import { SectionHeading } from './section-heading'

const services = [
  { icon: ClipboardCheck, title: 'Submittals', text: 'Prepare, organize and track submittal packages against the contract documents and specifications, including logs, 2 resubmittals and approval follow-ups.' },
  { icon: PenTool, title: 'Scheduling', text: 'Baseline and updated CPM schedules and short look-ahead for the field, built from the drawings and kept in line with real conditions.' },
  { icon: Calculator, title: 'Estimating', text: 'Quantity takeoffs, cost estimates and budgets for bidding and for tracking cost against budget once the job starts.' },
  { icon: Settings, title: 'Procurement and Buyout Support', text: 'A procurement schedule from your drawings and specs with long-lead items flagged early, quote requests, leveled bid comparisons and a weekly status report showing what is ordered, late or at risk.' },
  { icon: FileText, title: 'Project Management', text: 'Planning, document control, RFI and meeting follow-up, using MS Project, Bluebeam and Procore, to back up your project team.' },
  { icon: Shield, title: 'Residential Project Support', text: 'Quantity takeoffs and BOQs, budgets, construction schedules, contractor and material quote comparison, drawing review and progress tracking for homes, apartments and housing projects.' },
]

export function Services() {
  return (
    <section aria-labelledby="services-title" id="services" className="scroll-mt-16 bg-muted/40 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4">
        <SectionHeading
          id="services-title"
          title="Our Services"
          description="Comprehensive consulting services designed to take your infrastructure projects from concept to completion with excellence and efficiency."
        />
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
