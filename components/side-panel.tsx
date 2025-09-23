"use client"

import { categories, mapPins } from "@/data/mock-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export function SidePanel() {
  const [destination, setDestination] = useState("")
  const [category, setCategory] = useState<string | undefined>()

  return (
    <aside className="flex w-full flex-col gap-4">
      <div className="relative overflow-hidden rounded-xl bg-card card-elevated">
        <img src="/kerala-map-flat-illustration.jpg" alt="Kerala state map" className="h-64 w-full object-cover md:h-72" />
        {/* pins (decorative) */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {mapPins.map((p) => (
            <span
              key={p.city}
              title={p.city}
              className="absolute inline-flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-primary"
              style={{ top: p.top, left: p.left }}
            />
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-card p-4 card-elevated">
        <form className="grid grid-cols-1 gap-2" onSubmit={(e) => e.preventDefault()}>
          <label className="text-sm text-muted-foreground" htmlFor="dest">
            Destination
          </label>
          <Input
            id="dest"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Search destination"
          />
          <label className="mt-2 text-sm text-muted-foreground" htmlFor="dates">
            Dates
          </label>
          <Input id="dates" placeholder="Select dates" />
          <label className="mt-2 text-sm text-muted-foreground">Category</label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button className="mt-3 bg-[var(--brand-accent)] text-primary-foreground hover:opacity-90">Find Tours</Button>
        </form>
      </div>

      <div className="rounded-xl bg-card p-4 card-elevated">
        <h3 className="text-sm font-semibold">Top Categories</h3>
        <ul className="mt-2 space-y-1">
          <li className="text-sm text-muted-foreground">Hill Stations</li>
          <li className="text-sm text-muted-foreground">Backwaters</li>
          <li className="text-sm text-muted-foreground">Beaches</li>
        </ul>
      </div>
    </aside>
  )
}
