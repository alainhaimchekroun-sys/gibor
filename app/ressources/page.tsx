import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/institute/page-header"
import { FileText, Clock, Headphones, BookOpen } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "Ressources pédagogiques du Gibor Institute : guide enseignant, podcast éducatif et supports pour explorer les mémoires de la Méditerranée.",
}

const RESOURCES = [
  {
    icon: FileText,
    title: "Guide enseignant",
    description:
      "Un livret pédagogique destiné aux enseignants pour aborder en classe les mémoires séfarades et davidiques de la Méditerranée. Activités, repères chronologiques et pistes de réflexion.",
    status: "pending", // PDF en préparation
  },
  {
    icon: Headphones,
    title: "Podcast éducatif",
    description:
      "Les 8 épisodes de Gibor, le podcast, utilisables comme supports d'écoute en classe ou en autonomie.",
    href: "/podcast",
    status: "available",
  },
  {
    icon: BookOpen,
    title: "Le roman GIBOR",
    description:
      "Une œuvre de fiction historique utilisée comme outil éducatif pour incarner les grandes figures de l'Histoire.",
    href: "/livre",
    status: "available",
  },
]

export default function RessourcesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow="Ressources"
        title="Outils pédagogiques"
        description="Des supports pensés pour les enseignants, les médiateurs culturels et toutes les personnes curieuses de transmettre ces mémoires."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid gap-6">
            {RESOURCES.map((resource) => {
              const Icon = resource.icon
              const isPending = resource.status === "pending"
              return (
                <div
                  key={resource.title}
                  className="bg-card rounded-xl p-8 shadow-sm border border-border flex flex-col sm:flex-row gap-6 items-start"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="text-2xl font-bold text-foreground">{resource.title}</h2>
                      {isPending && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/40 px-2.5 py-1 rounded-full">
                          <Clock className="w-3 h-3" />
                          PDF en préparation
                        </span>
                      )}
                    </div>
                    <p className="text-foreground/80 leading-relaxed mb-4 text-pretty">{resource.description}</p>
                    {isPending ? (
                      <span className="inline-flex items-center text-muted-foreground text-sm font-medium">
                        Bientôt disponible au téléchargement
                      </span>
                    ) : (
                      <Link
                        href={resource.href!}
                        className="inline-flex items-center text-primary font-semibold text-sm hover:underline"
                      >
                        Accéder à la ressource
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
