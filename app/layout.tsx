import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Block & Beam | Property Care Template",
  description:
    "Property-maintenance handyman website template for landlord support, recurring upkeep work, and local SEO-focused service positioning.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

