import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/institute/page-header"
import { SupportForm } from "@/components/institute/support-form"
import { ShieldCheck, FileCheck, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Soutenir & Adhérer",
  description:
    "Soutenez le Gibor Institute par un don libre ou une adhésion annuelle. Paiement sécurisé. Association loi 1901.",
}

export default function SoutenirPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow="Nous soutenir"
        title="Soutenir & Adhérer"
        description="Votre générosité permet à l'Institut de poursuivre ses recherches, d'enrichir ses archives et de produire des ressources éducatives accessibles à tous."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SupportForm />

            {/* Reassurance */}
            <div className="grid sm:grid-cols-3 gap-6 mt-16">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Paiement sécurisé</p>
                  <p className="text-muted-foreground text-sm">Transactions chiffrées via Stripe.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileCheck className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Reçu fiscal</p>
                  <p className="text-muted-foreground text-sm">
                    Reçu fiscal envisagé (reconnaissance d{"'"}intérêt général en cours).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Association loi 1901</p>
                  <p className="text-muted-foreground text-sm">Gibor Institute, association à but non lucratif.</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-8 text-center max-w-2xl mx-auto leading-relaxed">
              Le Gibor Institute sollicite la reconnaissance d{"'"}intérêt général. La délivrance de reçus fiscaux
              ouvrant droit à réduction d{"'"}impôt sera confirmée dès l{"'"}obtention de ce statut.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
