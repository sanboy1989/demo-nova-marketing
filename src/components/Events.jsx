const EVENTS = [
  {
    tag: 'Wedding',
    title: 'Weddings & Ceremonies',
    desc: 'Capture your special day from breathtaking aerial perspectives — venues, outdoor ceremonies, and reception highlights.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=70',
  },
  {
    tag: 'Real Estate',
    title: 'Property & Real Estate',
    desc: 'Showcase properties with stunning aerial views. Ideal for luxury homes, commercial spaces, and new developments.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=70',
  },
  {
    tag: 'Corporate',
    title: 'Corporate & Commercial',
    desc: 'Elevate your brand story with professional aerial content for campaigns, events, and company profiles.',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=70',
  },
  {
    tag: 'Construction',
    title: 'Construction & Development',
    desc: "Document your project's progress from above. Regular aerial surveys for developers, contractors, and investors.",
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=70',
  },
  {
    tag: 'Festival',
    title: 'Festivals & Live Events',
    desc: 'Capture the energy of large gatherings, concerts, and outdoor festivals with dramatic aerial coverage.',
    img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=70',
  },
  {
    tag: 'Portrait',
    title: 'Portraits & Fashion',
    desc: 'Creative portrait sessions with unique backdrops — combine aerial and ground photography for editorial-quality results.',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=70',
  },
]

function EventCard({ tag, title, desc, img }) {
  return (
    <article className="group bg-neutral-900 hover:bg-neutral-800/80 transition-colors duration-500 overflow-hidden">
      {/* Image with fixed aspect */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
        />
      </div>

      {/* Body */}
      <div className="p-8">
        <span className="block text-[9px] tracking-[0.3em] uppercase text-accent mb-4">
          {tag}
        </span>
        <h3 className="text-[17px] font-medium text-neutral-100 mb-3 leading-snug tracking-tight">
          {title}
        </h3>
        <p className="text-[13px] text-neutral-400 leading-relaxed">
          {desc}
        </p>
      </div>
    </article>
  )
}

export default function Events() {
  return (
    <section id="events" className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header — split layout */}
        <div className="mb-20">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
            What We Do
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-light text-neutral-50 leading-tight tracking-tight">
              Events We Cover
            </h2>
            <p className="text-[13px] text-neutral-400 max-w-xs leading-relaxed lg:text-right">
              From intimate ceremonies to large-scale commercial projects — a unique
              aerial perspective for every occasion.
            </p>
          </div>
          {/* Divider as visual rhythm marker */}
          <div className="mt-12 h-px bg-neutral-800" />
        </div>

        {/* 3-col grid, gap-px creates hairline borders using the section bg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
          {EVENTS.map(ev => (
            <EventCard key={ev.tag} {...ev} />
          ))}
        </div>
      </div>
    </section>
  )
}
