import { Check, Package, ShoppingCart, Sparkles, Headphones, BookOpen, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const AMAZON_LINK = "https://www.amazon.fr/GIBOR-Gracia-gardiens-secrets-lign%C3%A9e/dp/B0G5B2D6BK"
const AUDIO_LINK = "https://www.infinitelibrary.ai/read/mi3akcecccdze7umdia?page=1"

const features = [
  "Blasons historiques reproduits",
  "Cartes anciennes et vues de Jérusalem",
  "Généalogies schématiques illustrées",
  "Extraits de manuscrits originaux",
  "Quarante chapitres richement documentés",
  "Citations talmudiques et midrashiques"
]

export function EditionSection() {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Package className="w-5 h-5 text-primary" />
              <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium">
                Édition de luxe
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Un objet de collection
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <p className="text-muted-foreground text-lg leading-relaxed">
                GIBOR – Les Héros du Temps se lit comme un voyage : de la chambre secrète 
                où Ézéchias cache l{"'"}Arche au bureau lambrissé où Henri VIII consulte un Talmud, 
                de la crique de Majorque où l{"'"}on trace les contours du monde à la salle d{"'"}audience 
                de Topkapi où une femme juive, voilée de soie, regarde droit dans les yeux 
                le sultan de l{"'"}Empire ottoman.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 bg-card p-4 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/acheter"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg tracking-wide shadow-lg rounded-md font-medium transition-colors"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Acheter maintenant
                </a>
                <a 
                  href={AMAZON_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 text-lg tracking-wide shadow-lg rounded-md font-medium transition-colors"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Commander sur Amazon
                </a>
              </div>
              <a 
                href={AUDIO_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
              >
                <Headphones className="w-4 h-4" />
                Version Audio disponible
              </a>
            </div>
            
            <div className="relative">
              {/* Quote Card */}
              <div className="bg-card p-10 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                
                <div className="relative">
                  <Sparkles className="w-10 h-10 text-primary mb-6" />
                  
                  <p className="text-muted-foreground uppercase tracking-[0.2em] text-sm mb-4">
                    Au bout de ce périple, une question demeure
                  </p>
                  
                  <blockquote className="text-2xl md:text-3xl font-bold text-foreground italic mb-6 text-balance leading-snug">
                    Que vaut une vie, si elle ne se transmet pas ?
                  </blockquote>
                  
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 mb-6" />
                  
                  <p className="text-muted-foreground text-lg mb-4">
                    La réponse, murmurée par ces héros trop longtemps oubliés, est simple :
                  </p>
                  
                  <p className="text-primary text-xl font-semibold">
                    On ne possède vraiment que ce que l{"'"}on a donné.
                  </p>
                </div>
              </div>
              
              {/* Floating book image */}
              <div className="hidden lg:block absolute -bottom-8 -left-8 w-32">
                <Image
                  src="/images/gibor-cover-official.jpg"
                  alt="GIBOR"
                  width={128}
                  height={192}
                  className="rounded shadow-2xl transform -rotate-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
