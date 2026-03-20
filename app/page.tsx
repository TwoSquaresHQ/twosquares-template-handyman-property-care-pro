import type { Metadata } from "next"
import HandymanPropertySite from "../components/handyman-site"

export const metadata: Metadata = {
  title: "Block & Beam | Property Care Template",
  description: "Property-maintenance handyman homepage template for landlords, recurring upkeep work, and dependable managed-service positioning.",
}

export default function HomePage() {
  return <HandymanPropertySite currentPage="home" />
}

