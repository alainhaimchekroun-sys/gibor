import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BookSection } from "@/components/book-section"
import { CharactersSection } from "@/components/characters-section"
import { ThemesSection } from "@/components/themes-section"
import { AuthorSection } from "@/components/author-section"
import { ReadersSection } from "@/components/readers-section"
import { NextOpusSection } from "@/components/next-opus-section"
import { EditionSection } from "@/components/edition-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <section id="livre">
        <BookSection />
      </section>
      <section id="personnages">
        <CharactersSection />
      </section>
      <ThemesSection />
      <AuthorSection />
      <ReadersSection />
      <NextOpusSection />
      <section id="commander">
        <EditionSection />
      </section>
      <Footer />
    </main>
  )
}
