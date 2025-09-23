export type TourPackage = {
  id: string
  title: string
  priceINR: number
  views: number
  image: string
  location: string
  duration: string
  category: string
}

export const tourPackages: TourPackage[] = [
  {
    id: "pkg-1",
    title: "Backwater Bliss",
    priceINR: 12000,
    views: 12000,
    image: "/kerala-backwaters-houseboat.png",
    location: "Alappuzha",
    duration: "2D / 1N",
    category: "Backwaters",
  },
  {
    id: "pkg-2",
    title: "Hill Station Retreat",
    priceINR: 9500,
    views: 9500,
    image: "/munnar-tea-plantations-mist.jpg",
    location: "Munnar",
    duration: "3D / 2N",
    category: "Hill Stations",
  },
  {
    id: "pkg-3",
    title: "Beach Escapes",
    priceINR: 12000,
    views: 12000,
    image: "/kerala-tropical-beach-palms.jpg",
    location: "Kovalam",
    duration: "2D / 1N",
    category: "Beaches",
  },
  {
    id: "pkg-4",
    title: "Heritage Trails",
    priceINR: 8000,
    views: 8000,
    image: "/temple-architecture-south-india.jpg",
    location: "Thrissur",
    duration: "1D",
    category: "Heritage",
  },
  {
    id: "pkg-5",
    title: "City & Culture",
    priceINR: 7800,
    views: 7800,
    image: "/fort-kochi-chinese-fishing-nets.jpg",
    location: "Kochi",
    duration: "1D",
    category: "City",
  },
  {
    id: "pkg-6",
    title: "Wildlife Watch",
    priceINR: 10500,
    views: 6000,
    image: "/periyar-wildlife-sanctuary-boat.jpg",
    location: "Thekkady",
    duration: "2D / 1N",
    category: "Wildlife",
  },
]

export const categories = ["Backwaters", "Hill Stations", "Beaches", "Heritage", "City", "Wildlife"]

export const mapPins: Array<{ city: string; top: string; left: string }> = [
  { city: "Kochi", top: "70%", left: "48%" },
  { city: "Munnar", top: "42%", left: "58%" },
  { city: "Kozhikode", top: "30%", left: "38%" },
  { city: "Thrissur", top: "58%", left: "46%" },
  { city: "Trivandrum", top: "88%", left: "54%" },
  { city: "Kottayam", top: "66%", left: "50%" },
]
