export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-2xl font-semibold">KSRTC TourConnect</h1>
      <p className="mt-2 text-muted-foreground">
        KSRTC TourConnect is a user-friendly, visually appealing web application designed to promote and facilitate
        bookings for tour packages offered by Kerala State Road Transport Corporation (KSRTC).
      </p>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Objectives</h2>
        <ul className="mt-2 list-disc pl-6 text-pretty leading-relaxed text-muted-foreground">
          <li>Digitize KSRTC’s tour package offerings for easy public access</li>
          <li>Enable seamless booking, payment, and itinerary management</li>
          <li>Promote tourism in Kerala through government-supported travel options</li>
          <li>Provide real-time updates, seasonal offers, and travel tips</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Key Features</h2>
        <ul className="mt-2 list-disc pl-6 text-pretty leading-relaxed text-muted-foreground">
          <li>Tour Package Listings by destination, duration, and theme</li>
          <li>Interactive Itinerary Viewer with maps, images, and highlights</li>
          <li>Online Booking with secure payments and confirmations</li>
          <li>User Dashboard for trips, history, and recommendations</li>
          <li>Admin Panel to manage packages, pricing, and schedules</li>
          <li>Multilingual Support (English, Malayalam, Hindi)</li>
          <li>Fully responsive experience</li>
        </ul>
      </section>
    </main>
  )
}
