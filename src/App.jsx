import Nav from './components/Nav';
import { Hero, About, Services, Portfolio, Testimonial, Collaboration, Footer } from './sections';

function App() {
  return (
    <main className='bg-[#fff] px-[1.5rem]'>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <Collaboration />
      <Footer />
    </main>
  )
}

export default App
