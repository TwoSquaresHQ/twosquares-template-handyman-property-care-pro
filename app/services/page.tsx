import type { Metadata } from "next"
import HandymanPropertySite from "../../components/handyman-site"

export const metadata: Metadata = {
  title: "Services | Block & Beam",
  description: "Property-maintenance services page template for landlord support and recurring upkeep businesses.",
}

export default function ServicesPage() {
  return <HandymanPropertySite currentPage="services" />
}

