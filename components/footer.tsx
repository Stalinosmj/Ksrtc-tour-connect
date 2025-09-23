import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-10 w-full max-w-6xl px-4 pb-8">
      <div className="rounded-xl bg-card p-4 text-center text-sm text-muted-foreground card-elevated">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/about" className="hover:text-foreground">
            About Us
          </Link>
          <Link href="/faq" className="hover:text-foreground">
            FAQ
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms & Conditions
          </Link>
        </div>
        <p className="mt-3">© {new Date().getFullYear()} KSRTC TourConnect</p>
      </div>
    </footer>
  )
}
