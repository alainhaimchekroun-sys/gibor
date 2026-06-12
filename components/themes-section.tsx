import { BookOpen, Crown, Scroll, Heart, Layers } from "lucide-react"

const themes = [
  {
    icon: Heart,
    title: "Romance historique",
    description: "Centrée sur Dona Gracia, femme de l'ombre partagée entre l'amour et le devoir, entre la sécurité des siens et la tentation d'une vie plus simple."
  },
  {
    icon: Scroll,
    title: "Saga de transmission",
    description: "Chaque époque offre à la suivante un objet, une prière, un pacte, une carte, un tunnel, un livre ou un acte juridique qui tient lieu de relais."
  },
  {
    icon: Crown,
    title: "Roman de diplomatie",
    description: "Comment une lettre, un prêt, une audience nocturne ou une carte offerte à un roi peuvent peser autant qu'une armée."
  },
  {
    icon: BookOpen,
    title: "Méditation spirituelle",
    description: "Nourrie de maximes talmudiques, de lectures kabbalistiques et de traditions rapportées, ouvrant un espace d'interrogation sur la fidélité, l'exil et le retour."
  }
]

export function ThemesSection() {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Layers className="w-5 h-5 text-primary" />
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium">
              Un récit multiple
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            GIBOR est à la fois...
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {themes.map((theme, index) => (
            <div 
              key={theme.title}
              className="group p-8 bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl border border-secondary-foreground/10 hover:border-primary/50 hover:bg-secondary-foreground/10 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <theme.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">{theme.title}</h3>
                  <p className="text-secondary-foreground/70 leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl px-10 py-8 border border-secondary-foreground/10">
            <blockquote className="text-xl md:text-2xl italic text-secondary-foreground/90 max-w-3xl">
              « On ne possède vraiment que ce que l{"'"}on a donné. »
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
