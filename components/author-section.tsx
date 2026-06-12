import Image from "next/image"
import { Pen, BookMarked, Instagram, Facebook, Linkedin } from "lucide-react"

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/giborlepodcast/",
  facebook: "https://www.facebook.com/profile.php?id=61567139980531",
  linkedin: "https://www.linkedin.com/company/105486662/",
}

export function AuthorSection() {
  return (
    <section id="auteur" className="py-24 bg-secondary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Pen className="w-5 h-5 text-primary" />
              <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium">
                L{"'"}auteur
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Alain Henri Chekroun
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Author Photo */}
            <div className="relative flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-6 bg-primary/15 blur-2xl rounded-full opacity-60" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/author-alain-chekroun.jpg"
                    alt="Alain Henri Chekroun - Auteur de GIBOR"
                    width={450}
                    height={550}
                    className="relative object-cover object-center"
                    style={{ width: "auto", height: "auto" }}
                  />
                  {/* Quote overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary via-secondary/90 to-transparent p-6 pt-16">
                    <p className="text-secondary-foreground text-base italic text-center font-medium">
                      « L{"'"}Histoire pour changer le monde »
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <BookMarked className="w-6 h-6" />
                <span className="font-medium">Écrivain et chercheur</span>
              </div>
              
              <p className="text-foreground text-xl leading-relaxed font-medium">
                Alain Henri Chekroun nous livre avec GIBOR une oeuvre magistrale, 
                fruit de nombreuses années de recherche historique et de passion 
                pour la transmission de la mémoire.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                À travers une plume élégante et une narration captivante, il redonne vie 
                à des figures héroïques trop longtemps oubliées de l{"'"}Histoire.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Son récit mêle avec maestria les sources historiques authentiques, 
                les traditions talmudiques et midrashiques, et l{"'"}imagination romanesque, 
                créant une fresque où chaque personnage interroge notre rapport à la mémoire, 
                à la fidélité et à la responsabilité envers les générations futures.
              </p>
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  GIBOR - Les Héros du Temps
                </p>
                <p className="text-primary font-medium">
                  Dona Gracia et les gardiens secrets de la lignée de David
                </p>
              </div>
              
              {/* Social Links - Podcasts */}
              <div className="pt-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Retrouvez les podcasts GIBOR
                </p>
                <div className="flex gap-3">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-muted flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all group"
                    aria-label="Instagram - Podcasts GIBOR"
                  >
                    <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-muted flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all group"
                    aria-label="Facebook - GIBOR"
                  >
                    <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-muted flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all group"
                    aria-label="LinkedIn - Alain Henri Chekroun"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
