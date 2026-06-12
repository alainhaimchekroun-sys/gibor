import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/institute/page-header"
import { Target, Eye, Compass, UserRound } from "lucide-react"
import { INSTITUTE, BUREAU, CONSEIL } from "@/lib/institute"

export const metadata: Metadata = {
  title: "L'Institut",
  description:
    "Découvrez la mission, le bureau et le conseil d'administration de Shealtiel Heritage, association loi 1901 dédiée à la mémoire des lignées historiques de la Méditerranée.",
}

const VALUES = [
  {
    icon: Target,
    title: "Notre objet",
    text: INSTITUTE.mission,
  },
  {
    icon: Eye,
    title: "Notre vision",
    text: "Rendre visibles et accessibles les histoires oubliées qui ont façonné les communautés méditerranéennes, afin que chacun puisse se réapproprier cette mémoire partagée.",
  },
  {
    icon: Compass,
    title: "Nos moyens d'action",
    text: "Expositions, podcasts, archives documentaires et ressources pédagogiques, conçus pour le grand public comme pour les enseignants et chercheurs.",
  },
]

export default function InstitutPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow="Association loi 1901"
        title="L'Institut"
        description="Shealtiel Heritage œuvre pour la recherche, la préservation et la transmission des mémoires des lignées historiques méconnues de la Méditerranée."
      />

      {/* Mission / Vision / Moyens */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            {VALUES.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">{value.title}</h2>
                    <p className="text-foreground/80 text-lg leading-relaxed text-pretty">{value.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bureau */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">Gouvernance</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Le bureau</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {BUREAU.map((member, i) => (
                <div key={i} className="bg-card rounded-xl p-8 shadow-sm text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <UserRound className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-primary text-sm font-medium uppercase tracking-wide mb-1">{member.role}</p>
                  <p className="text-foreground font-semibold text-lg">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conseil */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">Gouvernance</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Le conseil d{"'"}administration</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CONSEIL.map((member, i) => (
                <div key={i} className="bg-card rounded-xl p-6 shadow-sm text-center border border-border">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                    <UserRound className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide mb-1">
                    {member.role}
                  </p>
                  <p className="text-foreground font-medium">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
