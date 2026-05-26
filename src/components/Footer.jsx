const NAV_LINKS = [
  { label: 'Events',     href: '#events' },
  { label: 'Portfolio',  href: '#portfolio' },
  { label: 'About',      href: '#about' },
  { label: 'Book Now',   href: '#booking' },
  { label: 'Contact',    href: '#contact' },
]

const SOCIALS = ['Instagram', 'YouTube', 'Facebook']

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-12">

          {/* Brand */}
          <a href="#home" className="flex flex-col leading-none group w-fit">
            <span className="text-sm font-semibold tracking-[0.28em] text-neutral-50 group-hover:text-accent transition-colors duration-300">
              AEROREEL
            </span>
            <span className="text-[9px] tracking-[0.35em] text-neutral-600 font-light">
              MEDIA
            </span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 hover:text-neutral-200 transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-5">
            {SOCIALS.map(s => (
              <a
                key={s}
                href="#"
                className="text-[10px] tracking-[0.16em] uppercase text-neutral-600 hover:text-neutral-300 transition-colors duration-200"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-800 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[10px] text-neutral-600 tracking-wide">
            © {new Date().getFullYear()} Aeroreel Media. All rights reserved.
          </p>
          <p className="text-[10px] text-neutral-700 tracking-widest uppercase">
            Your Story, Our Lens.
          </p>
        </div>
      </div>
    </footer>
  )
}
