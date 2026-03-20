import Image from "next/image"
import Link from "next/link"

type Page = "home" | "services" | "quote"

const services = [
  { title: "Property Repairs", copy: "Maintenance fixes, snagging, and general repair work across managed homes and rental properties." },
  { title: "Landlord Support", copy: "Turnover jobs, small repair programs, and dependable upkeep for landlord-led properties." },
  { title: "Installations & Adjustments", copy: "Fixtures, fittings, shelving, blinds, and practical in-home upgrade work." },
  { title: "Ongoing Maintenance", copy: "Built for repeat support, recurring upkeep, and clearer maintenance positioning." },
]

function Header({ currentPage }: { currentPage: Page }) {
  const items = [
    { label: "Home", href: "/", page: "home" as const },
    { label: "Services", href: "/services", page: "services" as const },
    { label: "Quote", href: "/quote", page: "quote" as const },
  ]

  return (
    <header className="border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7d44]">Block & Beam</div>
          <div className="mt-1 text-sm font-sans text-[#5c6559]">Property maintenance & landlord support</div>
        </div>
        <nav className="hidden items-center gap-8 font-sans text-sm text-[#5c6559] md:flex">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className={currentPage === item.page ? "text-[#182117]" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a href="tel:+441313330101" className="rounded-full bg-[#6b7d44] px-4 py-2 font-sans text-sm font-semibold text-white">
          0131 333 0101
        </a>
      </div>
    </header>
  )
}

function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="overflow-hidden rounded-[2.25rem] bg-[#182117] text-white">
        <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="flex flex-col justify-between p-8 md:p-10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Property maintenance template</div>
              <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-6xl">
                A more structured handyman site for landlords, property upkeep, and repeat maintenance work.
              </h1>
              <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-white/80">
                This version is meant to feel more dependable and operational. It shifts the positioning from odd jobs into recurring support, managed properties, and longer-term maintenance relationships.
              </p>
            </div>

            <div className="mt-10">
              <div className="flex flex-wrap gap-3">
                <Link href="/quote" className="rounded-full bg-[#6b7d44] px-5 py-3 font-sans text-sm font-semibold text-white">
                  Discuss Maintenance
                </Link>
                <Link href="/services" className="rounded-full border border-white/15 px-5 py-3 font-sans text-sm font-semibold text-white">
                  Review Services
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["Landlord support", "Repeat maintenance and scheduled fixes."],
                  ["Property care", "Useful for managed homes and ongoing upkeep."],
                  ["Local SEO", "Built for areas served and service-page expansion."],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold">{title}</div>
                    <div className="mt-2 font-sans text-sm text-white/75">{copy}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[560px]">
            <Image
              src="https://unsplash.com/photos/2GNwJfGvxZk/download?force=true&w=1600"
              alt="Property renovation and maintenance work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Maintenance-led visual direction</div>
              <div className="mt-3 max-w-md text-3xl font-semibold leading-tight">
                A more operational, contract-friendly direction for repeat work and managed property support.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6b7d44]">Property services page</div>
          <h1 className="mt-3 text-5xl font-semibold leading-tight text-[#182117]">A maintenance-led service structure that feels operational and dependable.</h1>
          <div className="mt-5 space-y-3 font-sans text-sm leading-relaxed text-[#5c6559]">
            <p>Useful for recurring support, managed properties, and landlord-facing positioning.</p>
            <p>Built to expand into district pages, maintenance plans, and service-specific subpages.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.75rem] border border-black/10 bg-[#f7f8f2] p-5">
              <h2 className="text-2xl font-semibold text-[#182117]">{service.title}</h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-[#5c6559]">{service.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function QuotePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-black/10 bg-[#f7f8f2] p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6b7d44]">Maintenance brief</div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#182117]">Built for clearer property and recurring-support enquiries.</h1>
          <div className="mt-6 space-y-3 font-sans text-sm leading-relaxed text-[#5c6559]">
            <div>Ideal for landlords and property managers</div>
            <div>Supports recurring maintenance positioning</div>
            <div>More structured than a generic quick-contact form</div>
          </div>
        </div>
        <div className="rounded-[2rem] bg-[#182117] p-8 text-white">
          <div className="grid gap-4 sm:grid-cols-2">
            {["Contact name", "Phone number", "Property address", "Property type", "Type of maintenance", "Job summary"].map((field) => (
              <div key={field} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-sans text-sm text-white/70">
                {field}
              </div>
            ))}
          </div>
          <div className="mt-6 inline-flex rounded-full bg-[#6b7d44] px-5 py-3 font-sans text-sm font-semibold text-white">Discuss Maintenance</div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7d44]">Block & Beam</div>
            <p className="mt-4 font-sans text-sm leading-relaxed text-[#5c6559]">
              A footer that supports repeat-business positioning and makes the site feel more like a service partner than a one-off callout brand.
            </p>
          </div>
          <div className="font-sans text-sm text-[#5c6559]">
            <div>Home</div>
            <div className="mt-2">Services</div>
            <div className="mt-2">Quote</div>
          </div>
          <div className="font-sans text-sm text-[#5c6559]">
            <div>0131 333 0101</div>
            <div className="mt-2">hello@templatepreview.co</div>
            <div className="mt-2">Landlord and property support</div>
          </div>
        </div>
        <div className="mt-10 border-t border-black/10 pt-6 font-sans text-sm text-[#5c6559]">
          <a href="https://twosquares.co.uk" target="_blank" rel="noopener noreferrer">
            Website Developed by TwoSquares
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function HandymanPropertySite({ currentPage }: { currentPage: Page }) {
  return (
    <div className="min-h-screen bg-[#e7ecdf] text-[#182117]">
      <Header currentPage={currentPage} />
      {currentPage === "home" ? <HomePage /> : null}
      {currentPage === "services" ? <ServicesPage /> : null}
      {currentPage === "quote" ? <QuotePage /> : null}
      <Footer />
    </div>
  )
}

