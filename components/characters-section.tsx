"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Users, ChevronRight, Crown, Scroll, Building, Map, BookOpen, Sparkles, Play } from "lucide-react"

const characters = [
  {
    name: "Dona Gracia Benveniste",
    era: "XVIe siècle",
    description: "Née Béatriz de Luna à Lisbonne, épouse de l'homme le plus riche du Portugal, convertie de force, traquée par l'Inquisition. Armateur invisible, banquière de princes, négociatrice auprès des rois comme du sultan, elle invente des routes maritimes pour sauver des vies.",
    role: "L'héroïne centrale",
    icon: Sparkles,
    videoUrl: "/videos/dona-gracia.mp4"
  },
  {
    name: "Ézéchias",
    era: "VIIIe siècle av. J.-C.",
    description: "Roi de Juda qui purifie le Temple, abolit les idoles, creuse des tunnels sous Jérusalem pour cacher les trésors sacrés. Son courage n'est pas de frapper, mais de ne pas frapper quand la puissance lui est donnée.",
    role: "Le roi réformateur",
    icon: Crown
  },
  {
    name: "Shaaltiel",
    era: "VIe siècle av. J.-C.",
    description: "« Celui qui a demandé à Dieu », prince en exil à Babylone, qui renonce à régner pour que son fils puisse un jour relever Juda. Sans armée, sans trône, il accepte la nuit de l'exil pour que la promesse davidique ne soit pas rompue.",
    role: "Le prince de l'exil",
    icon: Scroll
  },
  {
    name: "Zorobabel",
    era: "Ve siècle av. J.-C.",
    description: "Fils de Shaaltiel, élevé comme un prince babylonien. Un jour, il apprend qui il est vraiment. Il revient vers Jérusalem et rebâtit le Second Temple sur les ruines du premier. Il incarne la graine enfouie qui accepte de pourrir pour que l'arbre renaisse.",
    role: "Le bâtisseur",
    icon: Building
  },
  {
    name: "Les Kalonymos",
    era: "IXe-XIIe siècle",
    description: "Grande dynastie de sages, médecins, banquiers, poètes et diplomates. D'Irak à la Toscane, de Narbonne à la Rhénanie, ils conseillent empereurs et rois, fondent des yeshivot, transportent des éléphants et des idées.",
    role: "La dynastie des sages",
    icon: BookOpen
  },
  {
    name: "Abraham et Elisha Cresques",
    era: "XIVe siècle",
    description: "Cartographes et cosmographes de Majorque, créateurs de l'Atlas catalan. Leurs cartes guideront les navigateurs vers les Amériques. Leur Bible enluminée deviendra un joyau, leurs cartes un instrument de pouvoir.",
    role: "Les cartographes",
    icon: Map
  }
]

export function CharactersSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-5 h-5 text-primary" />
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium">
              Les protagonistes
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Des héros à travers les siècles
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Character List */}
          <div className="lg:col-span-1 space-y-2">
            {characters.map((character, index) => {
              const IconComponent = character.icon
              return (
                <button
                  key={character.name}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-full text-left p-4 transition-all duration-300 rounded-lg flex items-center gap-4 group",
                    activeIndex === index 
                      ? "bg-card shadow-lg border-l-4 border-l-primary" 
                      : "hover:bg-card/50 border-l-4 border-l-transparent"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    activeIndex === index ? "bg-primary text-primary-foreground" : "bg-muted-foreground/10 text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                  )}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate">{character.name}</p>
                    <p className="text-sm text-muted-foreground">{character.era}</p>
                  </div>
                  <ChevronRight className={cn(
                    "w-5 h-5 text-muted-foreground transition-all",
                    activeIndex === index ? "text-primary translate-x-1" : "opacity-0 group-hover:opacity-100"
                  )} />
                </button>
              )
            })}
          </div>
          
          {/* Character Detail */}
          <div className="lg:col-span-2 bg-card p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                {(() => {
                  const IconComponent = characters[activeIndex].icon
                  return (
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  )
                })()}
                <div>
                  <p className="text-primary tracking-[0.15em] uppercase text-sm font-medium">
                    {characters[activeIndex].role}
                  </p>
                  <p className="text-muted-foreground text-sm">{characters[activeIndex].era}</p>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {characters[activeIndex].name}
              </h3>
              
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/30 mb-6" />
              
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                {characters[activeIndex].description}
              </p>
              
              {/* Video Section for Dona Gracia */}
              {characters[activeIndex].videoUrl && (
                <div className="mt-8">
                  {!isVideoPlaying ? (
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="relative group w-full aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      {/* Video thumbnail overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center backdrop-blur-sm group-hover:backdrop-blur-none transition-all">
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto rounded-full bg-primary/90 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-2xl">
                            <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                          </div>
                          <p className="text-white font-semibold text-lg drop-shadow-lg">
                            Découvrez l'histoire de Dona Gracia
                          </p>
                        </div>
                      </div>
                      {/* Actual video element (paused) */}
                      <video 
                        className="w-full h-full object-cover"
                        poster="/images/gibor-cover-official.jpg"
                      >
                        <source src={characters[activeIndex].videoUrl} type="video/mp4" />
                      </video>
                    </button>
                  ) : (
                    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
                      <video 
                        className="w-full h-full object-cover"
                        controls
                        autoPlay
                        onEnded={() => setIsVideoPlaying(false)}
                      >
                        <source src={characters[activeIndex].videoUrl} type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                      </video>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
