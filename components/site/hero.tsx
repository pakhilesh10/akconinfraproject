import Image from 'next/image'
import { ArrowRight, CircleCheck } from 'lucide-react'
import { AssessmentForm } from './assessment-form'

const highlights = ['8 Years of Experience', 'PMP Certified Project Manager (Credential ID 4188982)']

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-construction.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-background/85" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-6xl">
            Committed to Build, <span className="text-primary">Built to Last</span>
          </h1>
          <p className="text-lg leading-relaxed text-foreground/90 text-pretty">
            Construction consulting for projects in India and United States.
          </p>
          <p className="leading-relaxed text-foreground/80 text-pretty">
            Specializing in project planning, estimation, procurement support, submittal management, and scheduling to
            keep your project on time and on budget.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request Consultation
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Explore Services
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/80">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <CircleCheck className="size-4 text-primary" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <AssessmentForm variant="quick" className="bg-background/95" />
      </div>
    </section>
  )
}
