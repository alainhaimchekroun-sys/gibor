import Image from "next/image"
import { Sparkles, Compass } from "lucide-react"

export function NextOpusSection() {
  return (
    <section
      id="prochain-opus"
      className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent opacity-60" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Mystical image */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-primary/20">
                <Image
                  src="/images/opus-vitruve-kabbale.png"
                  alt="L'Homme de Vitruve de Léonard de Vinci fusionné avec l'Arbre de Vie kabbalistique et ses dix Sephirot"
                  width={480}
                  height={560}
                  className="relative object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Teaser text */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium">
                À paraître — Le prochain Opus
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Le destin croisé des Shealtiel et la Renaissance de Léonard de Vinci
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30" />

            <p className="text-secondary-foreground/80 text-lg leading-relaxed">
              La saga se prolonge. Le prochain volet entrelace la lignée des Shealtiel
              au foisonnement de la Renaissance, là où l{"'"}art, la science et la Kabbale
              se répondent. De l{"'"}Homme de Vitruve à l{"'"}Arbre de Vie, une même quête :
              retrouver la mesure cachée de l{"'"}humain.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-4 bg-secondary-foreground/5 rounded-r-lg italic text-secondary-foreground text-xl">
              « Toute proportion cache un nom, tout nom cache une promesse. »
            </blockquote>

            <div className="flex items-center gap-3 pt-2 text-primary">
              <Compass className="w-5 h-5" />
              <span className="font-medium tracking-wide">Une nouvelle traversée du Temps, bientôt.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
