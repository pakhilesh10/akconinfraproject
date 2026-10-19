export function SectionHeading({ id, title, description }: { id: string; title: string; description: string }) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
      <h2 id={id} className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
        {title}
      </h2>
      <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{description}</p>
    </div>
  )
}
