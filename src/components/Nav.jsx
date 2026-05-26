import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'Events',    href: '#events' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About',     href: '#about' },
  { label: 'Contact',   href: '#contact' },
]

export default function Nav() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMobileOpen(false)

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800/60'
          : ''
      }`}
    >
      {/* Desktop bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between py-5">
        <a href="#home" className="flex flex-col leading-none group">
          <span className="text-sm font-semibold tracking-[0.28em] text-neutral-50 group-hover:text-accent transition-colors duration-300">
            AEROREEL
          </span>
          <span className="text-[9px] tracking-[0.35em] text-neutral-500 font-light">
            MEDIA
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {LINKS.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[11px] tracking-[0.18em] uppercase text-neutral-400 hover:text-neutral-50 transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#booking"
              className="text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 border border-accent text-accent hover:bg-accent hover:text-neutral-950 transition-all duration-300"
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-neutral-50 transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-neutral-50 transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-px bg-neutral-50 transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 border-t border-neutral-800 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col bg-neutral-950 px-6 pt-6 pb-8 gap-7">
          {LINKS.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={close}
                className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 hover:text-neutral-50 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#booking"
              onClick={close}
              className="inline-block text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 border border-accent text-accent"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
