import type { Metadata } from "next"
import { getSiteUrl } from "../lib/site-url"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Block & Beam | Handyman Services",
  description:
    "Property-maintenance handyman website template for landlord support, recurring upkeep work, and local SEO-focused service positioning.",
  keywords: ["property maintenance website", "landlord handyman template", "property care website", "recurring maintenance website", "handyman landlord support"],
  openGraph: {
    title: "Block & Beam | Handyman Services",
    description:
      "Property-maintenance handyman website template for landlord support, recurring upkeep work, and local SEO-focused service positioning.",
    type: "website",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
