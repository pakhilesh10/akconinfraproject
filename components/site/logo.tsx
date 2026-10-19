import { site } from '@/lib/site'

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2">
      <img
        src="/images/akcon-mark.svg"
        alt=""
        className="size-8 rounded-md"
      />
      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight text-foreground">{site.name}</span>
        <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Project Consulting Firm
        </span>
      </span>
    </a>
  )
}
