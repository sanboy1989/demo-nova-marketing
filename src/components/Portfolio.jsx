import { useState, useEffect } from 'react'

const FILTERS = ['All', 'Wedding', 'Real Estate', 'Corporate', 'Construction', 'Festival', 'Portrait']

const PROJECTS = [
  { id: 1, category: 'Wedding',      title: 'Harbour View Wedding',  location: 'Victoria Harbour, HK', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=70' },
  { id: 2, category: 'Real Estate',  title: 'Repulse Bay Villa',     location: 'Repulse Bay, HK',      img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=70' },
  { id: 3, category: 'Corporate',    title: 'Tech Summit 2024',      location: 'HKCEC, HK',            img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=70' },
  { id: 4, category: 'Festival',     title: 'Dragon Boat Festival',  location: 'Sai Kung, HK',         img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=70' },
  { id: 5, category: 'Construction', title: 'West Kowloon Phase II', location: 'West Kowloon, HK',     img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=70' },
  { id: 6, category: 'Portrait',     title: 'Golden Hour Series',    location: 'Lantau Island, HK',    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=70' },
  { id: 7, category: 'Wedding',      title: 'Peak Mansion Wedding',  location: 'The Peak, HK',         img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=70' },
  { id: 8, category: 'Real Estate',  title: 'Sai Kung Waterfront',  location: 'Sai Kung, HK',         img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=70' },
]

function ProjectCard({ title, location, category, img }) {
  return (
    <div className="group relative overflow-hidden cursor-pointer aspect-[4/3]">
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
      />
      {/* Hover overlay — slides up from bottom */}
      <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/72 transition-all duration-300 flex flex-col justify-end p-6">
        <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="block text-[9px] tracking-[0.28em] uppercase text-accent mb-1.5">
            {category}
          </span>
          <h3 className="text-[13px] font-medium text-neutral-50 leading-snug">{title}</h3>
          <p className="text-[11px] text-neutral-400 mt-0.5">{location}</p>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [active,  setActive]  = useState('All')
  const [page,    setPage]    = useState(0)
  const [perView, setPerView] = useState(3)

  // Responsive cards-per-view
  useEffect(() => {
    const update = () => {
      if      (window.innerWidth < 640)  setPerView(1)
      else if (window.innerWidth < 1024) setPerView(2)
      else                               setPerView(3)
    }
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  const filtered   = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active)
  const totalPages = Math.max(1, Math.ceil(filtered.length / perView))
  const safePage   = Math.min(page, totalPages - 1)

  // Reset to first page whenever filter or perView changes
  useEffect(() => setPage(0), [active, perView])

  const prev = () => setPage(p => Math.max(0, p - 1))
  const next = () => setPage(p => Math.min(totalPages - 1, p + 1))

  // Split filtered projects into pages of `perView` cards each
  const pages = Array.from({ length: totalPages }, (_, i) =>
    filtered.slice(i * perView, (i + 1) * perView)
  )

  return (
    <section id="portfolio" className="py-32 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Header ──────────────────────────────────────────── */}
        <div className="mb-14">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">Our Work</p>
          <h2 className="text-4xl md:text-6xl font-light text-neutral-50 tracking-tight mb-12">
            Projects
          </h2>

          {/* Filter strip */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-200 ${
                  active === f
                    ? 'border-accent bg-accent text-neutral-950 font-medium'
                    : 'border-neutral-700 text-neutral-500 hover:border-neutral-500 hover:text-neutral-300'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ── Carousel track ──────────────────────────────────── */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${safePage * 100}%)` }}
          >
            {pages.map((pageCards, pi) => (
              <div
                key={pi}
                className="w-full flex-shrink-0 grid gap-2"
                style={{ gridTemplateColumns: `repeat(${perView}, 1fr)` }}
              >
                {pageCards.map(p => (
                  <ProjectCard key={p.id} {...p} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── Controls ────────────────────────────────────────── */}
        <div className="flex items-center justify-between mt-8">

          {/* Line indicators + counter */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
                className={`h-px transition-all duration-300 ${
                  i === safePage
                    ? 'w-10 bg-accent'
                    : 'w-4 bg-neutral-700 hover:bg-neutral-500'
                }`}
              />
            ))}
            <span className="text-[10px] tracking-[0.2em] text-neutral-500 ml-3 tabular-nums">
              {safePage + 1} / {totalPages}
            </span>
          </div>

          {/* Prev / Next */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={safePage === 0}
              aria-label="Previous"
              className="w-10 h-10 border border-neutral-700 flex items-center justify-center text-sm text-neutral-400 hover:border-accent hover:text-accent transition-colors duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              ←
            </button>
            <button
              onClick={next}
              disabled={safePage >= totalPages - 1}
              aria-label="Next"
              className="w-10 h-10 border border-neutral-700 flex items-center justify-center text-sm text-neutral-400 hover:border-accent hover:text-accent transition-colors duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
