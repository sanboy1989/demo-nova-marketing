import { useState } from 'react'

const DETAILS = [
  { icon: '✉', label: 'Email',             value: 'Hallo@aeroreelmedia.com' },
  { icon: '☎', label: 'Phone (Text Only)', value: '825-288-2184' },
  { icon: '◍', label: 'Base',              value: 'Calgary & Remote' },
]

const SOCIALS = ['Instagram', 'YouTube', 'Facebook']

export default function Contact() {
  const [subscribed, setSubscribed] = useState(false)

  const inputCls = 'w-full bg-transparent border border-neutral-700 text-neutral-200 px-4 py-3 text-sm focus:border-accent focus:outline-none transition-colors placeholder:text-neutral-600'
  const labelCls = 'block text-[10px] tracking-[0.22em] uppercase text-neutral-500 mb-2'

  return (
    <section id="contact" className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

          {/* ── Left: contact info ──────────────────────────── */}
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-6">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-50 leading-tight tracking-tight mb-12">
              Let's Create
              <br />
              <span className="text-neutral-400 font-extralight">Something Beautiful</span>
            </h2>

            <div className="flex flex-col gap-8 mb-12">
              {DETAILS.map(d => (
                <div key={d.label} className="flex items-start gap-5">
                  <span className="text-accent text-base mt-0.5 w-5 text-center shrink-0">
                    {d.icon}
                  </span>
                  <div>
                    <div className="text-[9px] tracking-[0.24em] uppercase text-neutral-500 mb-0.5">
                      {d.label}
                    </div>
                    <div className="text-[14px] text-neutral-100">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {SOCIALS.map(s => (
                <a
                  key={s}
                  href="#"
                  className="text-[10px] tracking-[0.18em] uppercase text-neutral-500 border border-neutral-700 px-4 py-2.5 hover:border-neutral-400 hover:text-neutral-200 transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: newsletter card ───────────────────────── */}
          <div className="border border-neutral-800 p-10 lg:p-12 self-start">
            <h3 className="text-xl font-light text-neutral-50 mb-3 tracking-tight">
              Stay Inspired
            </h3>
            <p className="text-[13px] text-neutral-300 leading-relaxed mb-8">
              Subscribe to receive our latest work, behind-the-scenes content, and exclusive
              offers.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-3 text-accent py-4">
                <span className="text-xl">✓</span>
                <p className="text-[13px]">You're on the list — we'll be in touch soon.</p>
              </div>
            ) : (
              <form
                onSubmit={e => { e.preventDefault(); setSubscribed(true) }}
                className="flex flex-col gap-4"
              >
                <div>
                  <label className={labelCls}>Your Name</label>
                  <input type="text" placeholder="Name" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Email Address</label>
                  <input type="email" required placeholder="your@email.com" className={inputCls} />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 mt-2 bg-accent text-neutral-950 text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-accent-light transition-colors duration-300"
                >
                  Subscribe
                </button>
                <p className="text-[10px] text-neutral-600 tracking-wide">
                  No spam, unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
