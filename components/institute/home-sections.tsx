import Link from "next/link"
import { Search, Archive, GraduationCap, Mic, ArrowRight } from "lucide-react"

const PILLARS = [
  {
    icon: Search,
    title: "Recherche",
    description: "Étudier les lignées et réseaux historiques méconnus de la Méditerranée.",
  },
  {
    icon: Archive,
    title: "Préservation",
    description: "Constituer et protéger des archives sur les mémoires séfarades et davidiques.",
  },
  {
    icon: GraduationCap,
    title: "Éducation",
    description: "Produire des ressources pédagogiques pour le public et les enseignants.",
  },
  {
    icon: Mic,
    title: "Diffusion",
    description: "Faire connaître ces histoires par le podcast, les expositions et les archives.",
  },
]

const FEATURED = [
  {
    href: "/podcast",
    label: "Podcast",
    title: "Gibor, le podcast",
    description: "La voix éducative officielle de l'Institut : 8 épisodes pour explorer les mémoires de la Méditerranée.",
  },
  {
    href: "/ressources",
    label: "Ressources",
    title: "Outils pédagogiques",
    description: "Guides et supports pour les enseignants et les médiateurs culturels.",
  },
  {
    href: "/livre",
    label: "Outil éducatif",
    title: "Le roman GIBOR",
    description: "Une œuvre de fiction historique utilisée comme support de transmission.",
  },
]

export function HomeSections() {
  return (
    <>
      {/* Mission */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-4">Notre mission</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-balance">
              Préserver la mémoire des lignées oubliées
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
              Le Shealtiel Heritage a pour objet de rechercher, préserver et éduquer le public sur les lignées
              historiques méconnues de la Méditerranée, en mettant l{"'"}accent sur des figures comme Dona Gracia Nasi,
              les réseaux séfarades et la transmission des mémoires juives et davidiques, par des expositions,
              podcasts, archives et ressources pédagogiques.
            </p>
            <Link
              href="/institut"
              className="inline-flex items-center gap-2 text-primary font-semibold mt-8 hover:gap-3 transition-all"
            >
              Découvrir l{"'"}Institut
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div key={pillar.title} className="bg-card rounded-xl p-6 shadow-sm text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured links */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Explorer nos ressources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FEATURED.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-border hover:border-primary/40"
              >
                <p className="text-primary tracking-[0.15em] uppercase text-xs font-medium mb-3">{item.label}</p>
                <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Soutenez la transmission de la mémoire
            </h2>
            <p className="text-secondary-foreground/80 text-lg leading-relaxed mb-10 text-pretty">
              Votre don ou votre adhésion permet à l{"'"}Institut de poursuivre ses recherches, d{"'"}enrichir ses
              archives et de produire des ressources éducatives accessibles à tous.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/soutenir"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-base font-semibold rounded-md transition-colors w-full sm:w-auto"
              >
                Faire un don
              </Link>
              <Link
                href="/soutenir#adherer"
                className="inline-flex items-center justify-center gap-2 border border-secondary-foreground/30 hover:border-primary hover:text-primary px-8 py-3 text-base font-semibold rounded-md transition-colors w-full sm:w-auto"
              >
                Devenir membre
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
