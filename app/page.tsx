import Hero from './components/Hero'
import Container from './components/Container'
import MediumArticles from './components/MediumArticles'
import Projects from './components/Projects'
import Services from './components/Services'
import ClientLogos from './components/ClientLogos'
import Stats from './components/Stats'
import CTA from './components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <ClientLogos />
      <Services />
      <Projects />
      <div className="bg-gray-50">
        <Container>
          <div className="py-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-black">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
              Thoughts on product design, conversion optimization, and building better digital experiences.
            </p>
            <MediumArticles username="nico.moy" limit={6} />
          </div>
        </Container>
      </div>
      <CTA />
    </main>
  )
}
