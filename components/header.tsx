"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Header() {
  const [q, setQ] = useState("")
  return (
    <header className="bg-brand-gradient on-brand">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2">
            <div
              aria-hidden
              className="h-8 w-8 rounded-md bg-primary-foreground/10 ring-1 ring-primary-foreground/30"
            />
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold tracking-wide opacity-90">KSRTC</span>
              <span className="text-lg font-semibold">TourConnect</span>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link className="opacity-95 hover:opacity-100" href="/">
              Home
            </Link>
            <Link className="opacity-95 hover:opacity-100" href="/packages">
              Tour Packages
            </Link>
            <Link className="opacity-95 hover:opacity-100" href="/bookings">
              My Bookings
            </Link>
            <Link className="opacity-95 hover:opacity-100" href="/contact">
              Contact
            </Link>
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className={cn(
                  "h-9 w-44 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/70",
                )}
              />
              <Button variant="secondary" className="h-9 bg-primary-foreground text-primary">
                Go
              </Button>
            </div>
            <Button variant="secondary" className="h-9 bg-primary-foreground text-primary">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
