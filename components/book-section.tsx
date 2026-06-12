"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Star } from "lucide-react"

export function BookSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Book Cover */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="relative">
                <Image
                  src="/images/gibor-cover-official.jpg"
                  alt="Couverture de GIBOR - Les Héros du Temps par Alain Henri Chekroun"
                  width={380}
                  height={570}
                  className="relative shadow-2xl rounded-sm transform group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  Nouveau
                </div>
              </div>
            </div>
          </div>
          
          {/* Book Description */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-primary" />
              <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium">
                Édition de luxe
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Une saga de transmission à travers les âges
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30" />
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Au coeur d{"'"}une bibliothèque londonienne, un archiviste découvre un coffret oublié, 
              cerclé d{"'"}argent, frappé d{"'"}un lion tenant une épée et un rouleau. À l{"'"}intérieur, 
              un atlas jauni, quelques feuillets en hébreu, un blason gravé sur cuivre, 
              et une série de lettres d{"'"}amour jamais envoyées.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              De cette trouvaille naît un récit à double fond, où l{"'"}Histoire officielle 
              n{"'"}est que la surface visible d{"'"}une autre histoire, plus secrète : celle d{"'"}une lignée, 
              celle de femmes et d{"'"}hommes qui ont porté une même mission sans toujours la connaître.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 py-4 bg-muted/50 rounded-r-lg italic text-foreground text-xl">
              « J{"'"}ai demandé à Dieu. » <span className="text-primary font-medium not-italic">— Shaaltiel</span>
            </blockquote>
            
            <Button 
              size="lg" 
              asChild
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-10 py-6 text-lg tracking-wide mt-4 shadow-lg"
            >
              <a href="#personnages">Découvrir les personnages</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
