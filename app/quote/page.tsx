import type { Metadata } from "next"
import HandymanPropertySite from "../../components/handyman-site"

export const metadata: Metadata = {
  title: "Discuss Maintenance | Block & Beam",
  description: "Property-maintenance quote page template for structured support enquiries and repeat-work positioning.",
}

export default function QuotePage() {
  return <HandymanPropertySite currentPage="quote" />
}
