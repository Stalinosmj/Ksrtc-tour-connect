import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { SidePanel } from "@/components/side-panel"
import { tourPackages } from "@/data/mock-data"
import { TourCard } from "@/components/tour-card"

export default function HomePage() {
  return (
    <main>
      <Header />
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="sr-only">KSRTC TourConnect</h1>
      </div>
      <HeroBanner />

      <section aria-labelledby="packages-title" className="mx-auto mt-6 max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_360px]">
          <div>
            <h2 id="packages-title" className="mb-3 text-lg font-semibold">
              Tour Packages
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {tourPackages.map((p) => (
                <TourCard key={p.id} item={p} />
              ))}
            </div>
          </div>
          <SidePanel />
        </div>
      </section>

      <div className="mx-auto mt-8 max-w-6xl px-4">
        <SiteFooter />
      </div>
    </main>
  )
}

import { SiteFooter } from "@/components/footer"
