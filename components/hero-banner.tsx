import { Button } from "@/components/ui/button"

export function HeroBanner() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto mt-6 max-w-6xl px-4">
      <div className="rounded-xl card-elevated overflow-hidden">
        <div className="relative">
          <img
            src="/kerala-backwaters-houseboat-sunrise.jpg"
            alt="Kerala backwaters with a traditional houseboat"
            className="h-[260px] w-full object-cover md:h-[320px]"
          />
          <div className="absolute left-6 top-6 max-w-md rounded-lg bg-background/85 p-4">
            <h2 id="hero-title" className="text-balance text-2xl font-semibold md:text-3xl">
              Explore Kerala with KSRTC
            </h2>
            <p className="mt-1 text-muted-foreground">Board an adventure across backwaters, hills, and heritage.</p>
            <Button className="mt-3 bg-[var(--brand-accent)] text-primary-foreground hover:opacity-90">
              Book Your Adventure
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
