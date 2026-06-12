import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/institute/page-header"
import { INSTITUTE } from "@/lib/institute"

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du Gibor Institute, association loi 1901 : RNA, président, siège social et contact.",
}

export default function MentionsLegalesPage() {
  const sections = [
    {
      title: "Éditeur du site",
      rows: [
        { label: "Dénomination", value: INSTITUTE.name },
        { label: "Statut juridique", value: INSTITUTE.legal.type },
        { label: "Numéro RNA", value: INSTITUTE.legal.rna },
        { label: "Président·e", value: INSTITUTE.legal.president },
        { label: "Siège social", value: INSTITUTE.legal.address },
        { label: "Contact", value: INSTITUTE.email },
      ],
    },
  ]

  return (
    <main>
      <Navbar />
      <PageHeader eyebrow="Informations légales" title="Mentions légales" />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-bold text-foreground mb-6">{section.title}</h2>
                <dl className="bg-card rounded-xl border border-border divide-y divide-border">
                  {section.rows.map((row) => (
                    <div key={row.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-4">
                      <dt className="text-sm font-medium text-muted-foreground sm:w-40 flex-shrink-0">{row.label}</dt>
                      <dd className="text-foreground">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Objet de l{"'"}association</h2>
              <p className="text-foreground/80 leading-relaxed text-pretty">{INSTITUTE.mission}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Hébergement</h2>
              <p className="text-foreground/80 leading-relaxed">
                Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Propriété intellectuelle</h2>
              <p className="text-foreground/80 leading-relaxed text-pretty">
                L{"'"}ensemble des contenus présents sur ce site (textes, images, logos, podcasts) est protégé par le
                droit d{"'"}auteur. Toute reproduction sans autorisation préalable du Gibor Institute est interdite.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Données personnelles</h2>
              <p className="text-foreground/80 leading-relaxed text-pretty">
                Les données collectées lors des dons et adhésions sont traitées de manière sécurisée et utilisées
                uniquement dans le cadre de la gestion de l{"'"}association. Conformément au RGPD, vous disposez d{"'"}un
                droit d{"'"}accès, de rectification et de suppression de vos données en écrivant à {INSTITUTE.email}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
