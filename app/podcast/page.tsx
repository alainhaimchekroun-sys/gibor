import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/institute/page-header"
import { Play, Headphones, Instagram, Facebook, Youtube } from "lucide-react"
import { EPISODES, PODCAST_YOUTUBE } from "@/lib/institute"

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "Gibor, le podcast — la voix éducative officielle de Shealtiel Heritage. Découvrez les 8 épisodes consacrés aux mémoires séfarades et davidiques de la Méditerranée.",
}

export default function PodcastPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow="Gibor, le podcast"
        title="La voix éducative officielle de l'Institut"
        description="Une série d'épisodes pour explorer les lignées, les figures et les réseaux qui ont façonné la mémoire de la Méditerranée."
      />

      {/* Episodes */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-10 justify-center text-muted-foreground">
              <Headphones className="w-5 h-5 text-primary" />
              <span className="text-sm tracking-wide">8 épisodes disponibles</span>
            </div>

            <div className="space-y-4">
              {EPISODES.map((episode) => (
                <a
                  key={episode.number}
                  href={episode.url}
                  target={episode.url !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 bg-card rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all border border-border hover:border-primary/40"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Play className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors fill-current ml-0.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-primary text-xs font-medium uppercase tracking-wide mb-1">
                      Épisode {episode.number}
                    </p>
                    <h2 className="text-lg md:text-xl font-bold text-foreground leading-tight mb-1">
                      {episode.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">{episode.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Follow CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Suivez Gibor, le podcast</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Retrouvez tous les épisodes et nos actualités sur nos réseaux sociaux.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={PODCAST_YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card border border-border hover:border-primary px-6 py-3 rounded-md font-medium text-foreground transition-colors"
              >
                <Youtube className="w-5 h-5 text-primary" />
                YouTube
              </a>
              <a
                href="https://www.instagram.com/giborlepodcast/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card border border-border hover:border-primary px-6 py-3 rounded-md font-medium text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61567139980531"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card border border-border hover:border-primary px-6 py-3 rounded-md font-medium text-foreground transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
