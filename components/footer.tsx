import Image from "next/image"
import { Instagram, Facebook, Linkedin } from "lucide-react"

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/giborlepodcast/",
  facebook: "https://www.facebook.com/profile.php?id=61567139980531",
  linkedin: "https://www.linkedin.com/company/105486662/",
}

export function Footer() {
  return (
    <footer className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/images/logo-gibor.jpg"
              alt="GIBOR Logo"
              width={80}
              height={80}
              className="mx-auto rounded-full shadow-lg ring-2 ring-primary/30"
            />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-2 tracking-wider">
            GIBOR
          </h3>
          <p className="text-secondary-foreground/70 italic text-lg mb-2">
            Les Héros du Temps
          </p>
          <p className="text-primary font-medium mb-8">
            L{"'"}Histoire pour changer le monde
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          
          <p className="text-secondary-foreground/80 mb-10 text-lg">
            Un roman d{"'"}Alain Henri Chekroun
          </p>
          
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-secondary-foreground/60 mb-8">
            <a href="#livre" className="hover:text-primary transition-colors font-medium">Le livre</a>
            <a href="#personnages" className="hover:text-primary transition-colors font-medium">Les personnages</a>
            <a href="#auteur" className="hover:text-primary transition-colors font-medium">L{"'"}auteur</a>
            <a href="#commander" className="hover:text-primary transition-colors font-medium">Commander</a>
          </nav>
          
          {/* Social Links - Podcasts */}
          <div className="mb-12">
            <p className="text-secondary-foreground/60 text-sm mb-4 font-medium">
              Retrouvez les podcasts GIBOR
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all group"
                aria-label="Instagram - Podcasts GIBOR"
              >
                <Instagram className="w-5 h-5 text-secondary-foreground/70 group-hover:text-white" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all group"
                aria-label="Facebook - GIBOR"
              >
                <Facebook className="w-5 h-5 text-secondary-foreground/70 group-hover:text-white" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all group"
                aria-label="LinkedIn - Alain Henri Chekroun"
              >
                <Linkedin className="w-5 h-5 text-secondary-foreground/70 group-hover:text-white" />
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-secondary-foreground/10">
            <p className="text-secondary-foreground/50 text-sm">
              © {new Date().getFullYear()} Alain Henri Chekroun. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
