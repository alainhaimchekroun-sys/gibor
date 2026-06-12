import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"

export function HeroInstitute() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary text-secondary-foreground">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/lion-water.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/70 to-secondary" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo-gibor.jpg"
              alt="Shealtiel Heritage"
              width={96}
              height={96}
              className="rounded-full shadow-2xl ring-2 ring-primary/40"
            />
          </div>

          <p className="text-primary tracking-[0.25em] uppercase text-sm font-medium mb-6">
            Association loi 1901
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide text-balance">
            Shealtiel Heritage
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />

          <p className="text-lg md:text-xl text-secondary-foreground/85 leading-relaxed mb-10 text-pretty">
            Rechercher, préserver et transmettre la mémoire des lignées historiques méconnues de la Méditerranée —
            autour de Dona Gracia Nasi, des réseaux séfarades et des mémoires juives et davidiques.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/soutenir"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-base font-semibold rounded-md transition-colors w-full sm:w-auto"
            >
              <Heart className="w-5 h-5" />
              Soutenir l{"'"}Institut
            </Link>
            <Link
              href="/soutenir#adherer"
              className="inline-flex items-center justify-center gap-2 border border-secondary-foreground/30 hover:border-primary hover:text-primary px-8 py-3 text-base font-semibold rounded-md transition-colors w-full sm:w-auto"
            >
              Adhérer
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
