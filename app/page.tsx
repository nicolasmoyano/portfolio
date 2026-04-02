import Hero from './components/Hero'
import Container from './components/Container'
import MediumArticles from './components/MediumArticles'

export default function Home() {
  return (
    <main className="flex items-center justify-between">
      <Container>
      <Hero />
      <div className="py-20">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          Latest Insights
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Thoughts on product design, conversion optimization, and building better digital experiences.
        </p>
        <MediumArticles username="nico.moy" limit={6} />
      </div>
      </Container>
    </main>
  )
}
