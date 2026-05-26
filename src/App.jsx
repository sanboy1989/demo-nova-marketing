import Nav      from './components/Nav'
import Hero     from './components/Hero'
import Events   from './components/Events'
import Portfolio from './components/Portfolio'
import Booking  from './components/Booking'
import About    from './components/About'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <div className="bg-neutral-950 text-neutral-50 font-sans antialiased">
      <Nav />
      <Hero />
      <Events />
      <Portfolio />
      <Booking />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
