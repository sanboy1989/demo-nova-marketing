const STATS = [
  { num: '7+',   label: 'Years Experience' },
  { num: '500+', label: 'Projects Completed' },
  { num: '100%', label: 'Client Satisfaction' },
]

export default function About() {
  return (
    <section id="about" className="py-32 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Image block */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=70"
              alt="Aeroreel Media pilot and drone"
              className="w-full aspect-[4/5] object-cover"
            />
            {/* Accent frame — visual rhythm element */}
            <div className="absolute -bottom-5 -right-5 w-36 h-24 border border-accent/25 hidden lg:block pointer-events-none" />
            {/* Floating label */}
            <div className="absolute top-6 left-6 bg-neutral-950/80 backdrop-blur-sm px-4 py-2">
              <span className="text-[9px] tracking-[0.28em] uppercase text-accent">Est. 2017, Hong Kong</span>
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-6">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-50 leading-tight tracking-tight mb-8">
              Born From a Passion
              <br />
              <span className="text-neutral-400 font-extralight">For New Perspectives</span>
            </h2>

            <p className="text-[14px] text-neutral-400 leading-relaxed mb-5">
              Founded in Hong Kong in 2017, Aeroreel Media began with a simple belief: every
              story deserves to be told from the perfect angle. Our founder Andy started with a
              drone and a dream — and has since grown into a full-service visual storytelling
              studio.
            </p>
            <p className="text-[14px] text-neutral-400 leading-relaxed mb-14">
              We combine technical expertise with creative vision to deliver content that doesn't
              just document — it captivates.
            </p>

            {/* Stats — separated by the divider for rhythm */}
            <div className="border-t border-neutral-800 pt-10 grid grid-cols-3 gap-6 mb-14">
              {STATS.map(s => (
                <div key={s.label}>
                  <div className="text-3xl lg:text-4xl font-light text-neutral-50 tracking-tight leading-none">
                    {s.num}
                  </div>
                  <div className="text-[9px] tracking-[0.18em] uppercase text-neutral-500 mt-2 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#booking"
              className="inline-flex items-center px-8 py-4 bg-accent text-neutral-950 text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-accent-light transition-colors duration-300"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
