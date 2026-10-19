'use client'

import { useId, useState, type FormEvent } from 'react'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

type Variant = 'quick' | 'full'

const inputClass =
  'w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:border-primary'

const projectTypes = ['Marine', 'Heavy Civil', 'Digital Infrastructure', 'Other']

export function AssessmentForm({ variant, className }: { variant: Variant; className?: string }) {
  const id = useId()
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const lines = [
      ['Name', data.get('name')],
      ['Company', data.get('company')],
      ['Email', data.get('email')],
      ['Phone', data.get('phone')],
      ['Project Type', data.get('projectType')],
      ['Project Details', data.get('details')],
    ]
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n')

    const subject = variant === 'quick' ? 'Quick Project Assessment Request' : 'Project Assessment Request'
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`
    setSent(true)
  }

  const title = variant === 'quick' ? 'Quick Project Assessment' : 'Project Assessment'

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby={`${id}-title`}
      className={cn('flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm', className)}
    >
      <h2 id={`${id}-title`} className="text-lg font-semibold text-foreground">
        {title}
      </h2>

      {variant === 'quick' ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Name" htmlFor={`${id}-name`}>
            <input id={`${id}-name`} name="name" required placeholder="Your Name" className={inputClass} />
          </Field>
          <Field label="Company" htmlFor={`${id}-company`}>
            <input id={`${id}-company`} name="company" placeholder="Company" className={inputClass} />
          </Field>
        </div>
      ) : (
        <Field label="Name" htmlFor={`${id}-name`}>
          <input id={`${id}-name`} name="name" required placeholder="Your Name" className={inputClass} />
        </Field>
      )}

      <Field label="Email" htmlFor={`${id}-email`}>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          placeholder="Email Address"
          className={inputClass}
        />
      </Field>

      {variant === 'quick' ? (
        <Field label="Phone" htmlFor={`${id}-phone`}>
          <input id={`${id}-phone`} name="phone" type="tel" placeholder="Phone Number" className={inputClass} />
        </Field>
      ) : (
        <Field label="Project Type" htmlFor={`${id}-type`}>
          <select id={`${id}-type`} name="projectType" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select project type
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      )}

      <Field label={variant === 'quick' ? 'Project Description' : 'Project Details'} htmlFor={`${id}-details`}>
        <textarea
          id={`${id}-details`}
          name="details"
          rows={3}
          placeholder={variant === 'quick' ? 'Brief project description...' : 'Describe your project requirements...'}
          className={cn(inputClass, 'resize-y')}
        />
      </Field>

      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        {variant === 'quick' ? 'Get Project Quote' : 'Submit Assessment'}
      </button>

      <p aria-live="polite" className="text-xs text-muted-foreground">
        {sent ? `Your email app should open with your request. If not, write to ${site.email}.` : ''}
      </p>
    </form>
  )
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
