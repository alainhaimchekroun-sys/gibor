import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/institute/page-header"
import { BookOpen, ShoppingCart, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "Le livre GIBOR",
  description:
    "GIBOR - Les Héros du Temps, roman historique d'Alain Henri Chekroun, utilisé par le Gibor Institute comme outil éducatif de transmission des mémoires de la Méditerranée.",
}

export default function LivrePage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow="Outil éducatif"
        title="Le livre GIBOR"
        description="Un roman historique utilisé par l'Institut comme support de transmission et de médiation auprès du public."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Cover */}
            <div className="flex justify-center">
              <div className="relative w-64 h-96 md:w-80 md:h-[480px] rounded-lg overflow-hidden shadow-2xl ring-1 ring-border">
                <Image
                  src="/images/gibor-cover-official.jpg"
                  alt="Couverture du roman GIBOR - Les Héros du Temps"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-5">
                <GraduationCap className="w-4 h-4" />
                Support pédagogique de l{"'"}Institut
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">GIBOR</h2>
              <p className="text-xl text-muted-foreground italic mb-6">Les Héros du Temps</p>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6 text-pretty">
                Une saga historique traversant 2500 ans d{"'"}histoire, de Babylone à l{"'"}Empire ottoman, qui donne
                vie à des figures comme Dona Gracia Nasi et aux gardiens secrets de la lignée davidique. L{"'"}Institut
                s{"'"}appuie sur cette œuvre de fiction pour incarner et transmettre ces mémoires auprès d{"'"}un large
                public.
              </p>
              <p className="text-muted-foreground text-sm mb-8">
                Un roman d{"'"}Alain Henri Chekroun — cité comme outil éducatif et non comme objet de l{"'"}association.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/acheter"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-base font-semibold rounded-md transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Commander le livre
                </Link>
                <Link
                  href="/podcast"
                  className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary hover:text-primary px-8 py-3 text-base font-semibold rounded-md transition-colors text-foreground"
                >
                  <BookOpen className="w-5 h-5" />
                  Écouter le podcast
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
