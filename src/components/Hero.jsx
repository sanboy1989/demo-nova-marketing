export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end pb-24 overflow-hidden"
    >
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1920&q=80"
          alt="Aerial cinematography"
          className="w-full h-full object-cover"
        />
        {/* Dual gradient: dark vignette bottom + subtle top tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/40 to-transparent" />
      </div>

      {/* Content — bottom-left anchor */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-[11px] tracking-[0.35em] uppercase text-accent mb-7 font-light">
            Hong Kong's Premier Aerial Media Studio
          </p>

          {/* Headline — extreme size contrast is intentional */}
          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-light text-neutral-50 leading-[1.04] tracking-tight mb-8">
            Transform Your<br />
            Vision{' '}
            <span className="text-neutral-400 font-extralight italic">Into Stunning</span>
            <br />
            Visuals
          </h1>

          <p className="text-[15px] text-neutral-300 font-light leading-relaxed max-w-md mb-10">
            Professional drone photography &amp; videography for weddings, real estate,
            corporate events, and beyond.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-neutral-950 text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-accent-light transition-colors duration-300"
            >
              Book a Session
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border border-neutral-600 text-neutral-300 text-[11px] tracking-[0.22em] uppercase hover:border-neutral-300 hover:text-neutral-50 transition-colors duration-300"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator — right edge */}
      <div className="absolute bottom-10 right-8 lg:right-14 flex flex-col items-center gap-4">
        <span
          className="text-[9px] tracking-[0.3em] uppercase text-neutral-500 [writing-mode:vertical-rl]"
        >
          Scroll
        </span>
        <div className="w-px h-14 bg-gradient-to-b from-neutral-500 to-transparent" />
      </div>
    </section>
  )
}
