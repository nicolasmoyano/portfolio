import Hero from './components/Hero'
import Container from './components/Container'
import MediumArticles from './components/MediumArticles'

export default function Home() {
  return (
    <main className="flex items-center justify-between">
      <Container>
      <Hero />
      <MediumArticles username="nico.moy" limit={6} />
      </Container>
    </main>
  )
}
