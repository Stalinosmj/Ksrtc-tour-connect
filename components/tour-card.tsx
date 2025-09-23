import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { TourPackage } from "@/data/mock-data"

export function TourCard({ item }: { item: TourPackage }) {
  return (
    <Card className="overflow-hidden card-elevated">
      <CardHeader className="p-0">
        <img
          src={item.image || "/placeholder.svg"}
          alt={`${item.title} in ${item.location}`}
          className="h-40 w-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-base">{item.title}</CardTitle>
        <p className="mt-1 text-sm text-muted-foreground">
          {item.location} • {item.duration}
        </p>
        <p className="mt-2 font-semibold">
          ₹{item.priceINR.toLocaleString("en-IN")}
          <span className="ml-2 text-xs font-normal text-muted-foreground">{item.views.toLocaleString()} views</span>
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <button className="text-sm text-muted-foreground hover:underline" aria-label="View details">
          View Details
        </button>
        <Button className="bg-primary text-primary-foreground hover:opacity-90">Book Now</Button>
      </CardFooter>
    </Card>
  )
}
