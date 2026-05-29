import { useState, Fragment } from 'react'

const EVENT_TYPES = [
  { value: 'wedding',      label: 'Wedding',      symbol: '✦' },
  { value: 'realestate',   label: 'Real Estate',  symbol: '⬛' },
  { value: 'corporate',    label: 'Corporate',    symbol: '◈' },
  { value: 'construction', label: 'Construction', symbol: '▣' },
  { value: 'festival',     label: 'Festival',     symbol: '✿' },
  { value: 'portrait',     label: 'Portrait',     symbol: '◎' },
]

const SERVICES = [
  { value: 'drone_photo',  label: 'Drone Photography' },
  { value: 'drone_video',  label: 'Drone Videography' },
  { value: 'ground_photo', label: 'Ground Photography' },
  { value: 'post_prod',    label: 'Post-Production' },
]

const STEPS = [
  { num: '01', label: 'Event Type' },
  { num: '02', label: 'Details' },
  { num: '03', label: 'Contact' },
]

const INIT = { eventType: '', date: '', location: '', services: [], notes: '', name: '', email: '', phone: '' }

export default function Booking() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(INIT)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const toggleService = v =>
    setForm(f => ({
      ...f,
      services: f.services.includes(v)
        ? f.services.filter(s => s !== v)
        : [...f.services, v],
    }))

  const inputCls = 'w-full bg-transparent border border-neutral-700 text-neutral-200 px-4 py-3 text-sm focus:border-accent focus:outline-none transition-colors placeholder:text-neutral-600'
  const labelCls = 'block text-[10px] tracking-[0.22em] uppercase text-neutral-500 mb-2'

  if (step === 4)
    return (
      <section id="booking" className="py-40 bg-neutral-950 flex items-center justify-center">
        <div className="text-center max-w-sm mx-auto px-6">
          <div className="w-14 h-14 border border-accent flex items-center justify-center mx-auto mb-8">
            <span className="text-accent text-xl">✓</span>
          </div>
          <h2 className="text-3xl font-light text-neutral-50 mb-4 tracking-tight">Inquiry Sent</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Thank you — we'll get back to you within 24 hours at the email you provided.
          </p>
          <a
            href="#portfolio"
            className="inline-block mt-10 text-[11px] tracking-[0.22em] uppercase text-accent border border-accent px-6 py-3 hover:bg-accent hover:text-neutral-950 transition-all duration-300"
          >
            View Our Portfolio
          </a>
        </div>
      </section>
    )

  return (
    <section id="booking" className="py-32 bg-neutral-950">
      <div className="max-w-3xl mx-auto px-6">

        {/* Section header */}
        <div className="mb-16">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">Get Started</p>
          <h2 className="text-4xl md:text-6xl font-light text-neutral-50 tracking-tight mb-4">
            Book Your Session
          </h2>
          <p className="text-[13px] text-neutral-500 leading-relaxed">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center mb-16">
          {STEPS.map((s, i) => (
            <Fragment key={s.num}>
              <div className="flex items-center gap-3 shrink-0">
                <div
                  className={`w-7 h-7 flex items-center justify-center text-[10px] border transition-colors duration-300 ${
                    step > i + 1
                      ? 'border-accent bg-accent text-neutral-950'
                      : step === i + 1
                      ? 'border-accent text-accent'
                      : 'border-neutral-700 text-neutral-600'
                  }`}
                >
                  {step > i + 1 ? '✓' : s.num}
                </div>
                <span
                  className={`text-[10px] tracking-[0.16em] uppercase hidden sm:block transition-colors duration-300 ${
                    step === i + 1 ? 'text-neutral-200' : 'text-neutral-600'
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < 2 && <div className="flex-1 h-px bg-neutral-800 mx-4" />}
            </Fragment>
          ))}
        </div>

        {/* ── Step 1: Event type ─────────────────────────────── */}
        {step === 1 && (
          <div>
            <h3 className="text-xl font-light text-neutral-200 mb-8 tracking-tight">
              What type of event is this?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {EVENT_TYPES.map(et => (
                <label
                  key={et.value}
                  className={`cursor-pointer border flex flex-col items-center gap-3 p-6 transition-all duration-200 ${
                    form.eventType === et.value
                      ? 'border-accent bg-accent/5 text-accent'
                      : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="eventType"
                    value={et.value}
                    className="sr-only"
                    onChange={() => set('eventType', et.value)}
                  />
                  <span className="text-2xl">{et.symbol}</span>
                  <span className="text-[10px] tracking-[0.18em] uppercase">{et.label}</span>
                </label>
              ))}
            </div>
            <button
              onClick={() => form.eventType && setStep(2)}
              disabled={!form.eventType}
              className="px-8 py-4 bg-accent text-neutral-950 text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-accent-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next Step →
            </button>
          </div>
        )}

        {/* ── Step 2: Project details ────────────────────────── */}
        {step === 2 && (
          <div>
            <h3 className="text-xl font-light text-neutral-200 mb-8 tracking-tight">
              Project details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className={labelCls}>Preferred Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={e => set('date', e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Location / Area</label>
                <input
                  type="text"
                  placeholder="e.g. Downtown Calgary, AB"
                  value={form.location}
                  onChange={e => set('location', e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className={labelCls}>Services Required</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICES.map(s => (
                  <label
                    key={s.value}
                    className={`cursor-pointer flex items-center gap-3 border px-4 py-3 transition-colors duration-200 ${
                      form.services.includes(s.value)
                        ? 'border-accent text-neutral-200'
                        : 'border-neutral-800 text-neutral-500 hover:border-neutral-600'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={form.services.includes(s.value)}
                      onChange={() => toggleService(s.value)}
                      className="sr-only"
                    />
                    <span
                      className={`w-3 h-3 flex-shrink-0 border flex items-center justify-center text-[7px] transition-colors ${
                        form.services.includes(s.value)
                          ? 'border-accent bg-accent text-neutral-950'
                          : 'border-neutral-600'
                      }`}
                    >
                      {form.services.includes(s.value) && '✓'}
                    </span>
                    <span className="text-[12px] tracking-[0.08em]">{s.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <label className={labelCls}>Additional Notes</label>
              <textarea
                rows={4}
                placeholder="Tell us more about your project..."
                value={form.notes}
                onChange={e => set('notes', e.target.value)}
                className={`${inputCls} resize-none`}
              />
            </div>

            <div className="flex gap-4">
              <button onClick={() => setStep(1)} className="px-6 py-4 border border-neutral-700 text-neutral-500 text-[11px] tracking-[0.2em] uppercase hover:border-neutral-500 hover:text-neutral-200 transition-colors">
                ← Back
              </button>
              <button onClick={() => setStep(3)} className="px-8 py-4 bg-accent text-neutral-950 text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-accent-light transition-colors">
                Next Step →
              </button>
            </div>
          </div>
        )}

        {/* ── Step 3: Contact info ───────────────────────────── */}
        {step === 3 && (
          <div>
            <h3 className="text-xl font-light text-neutral-200 mb-8 tracking-tight">
              Your contact information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className={labelCls}>Full Name *</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => set('name', e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Email Address *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => set('email', e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>
            <div className="mb-10">
              <label className={labelCls}>Phone Number</label>
              <input
                type="tel"
                placeholder="+852 xxxx xxxx"
                value={form.phone}
                onChange={e => set('phone', e.target.value)}
                className={inputCls}
              />
            </div>

            <div className="flex gap-4">
              <button onClick={() => setStep(2)} className="px-6 py-4 border border-neutral-700 text-neutral-500 text-[11px] tracking-[0.2em] uppercase hover:border-neutral-500 hover:text-neutral-200 transition-colors">
                ← Back
              </button>
              <button
                onClick={() => form.name && form.email && setStep(4)}
                disabled={!form.name || !form.email}
                className="px-8 py-4 bg-accent text-neutral-950 text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-accent-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Send Inquiry ✓
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
