import Image from "next/image"
import { Quote, Users } from "lucide-react"

const readers = [
  {
    image: "/images/reader-passionate.jpg",
    quote: "Une fresque historique captivante qui nous transporte à travers les siècles. Un voyage inoubliable.",
    name: "Lectrice passionnée",
  },
  {
    image: "/images/reader-enthusiastic.jpg",
    quote: "Un récit qui mêle histoire et émotion avec une maîtrise remarquable. À lire absolument.",
    name: "Lecteur enthousiaste",
  },
]

export function ReadersSection() {
  return (
    <section className="py-24 bg-secondary/5 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-5 h-5 text-primary" />
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium">
              Ils ont lu GIBOR
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nos lecteurs témoignent
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {readers.map((reader, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={reader.image || "/placeholder.svg"}
                  alt={reader.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                
                {/* Quote overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Quote className="w-8 h-8 text-primary mb-3 opacity-80" />
                  <blockquote className="text-secondary-foreground text-lg leading-relaxed mb-3">
                    {reader.quote}
                  </blockquote>
                  <p className="text-primary font-semibold">{reader.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
