import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroInstitute } from "@/components/institute/hero-institute"
import { HomeSections } from "@/components/institute/home-sections"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroInstitute />
      <HomeSections />
      <Footer />
    </main>
  )
}
