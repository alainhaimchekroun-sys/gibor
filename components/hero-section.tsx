"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, ShoppingCart, Headphones, CreditCard } from "lucide-react"

const AMAZON_LINK = "https://www.amazon.fr/GIBOR-Gracia-gardiens-secrets-lign%C3%A9e/dp/B0G5B2D6BK"
const AUDIO_LINK = "https://www.infinitelibrary.ai/read/mi3akcecccdze7umdia?page=1"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Lion en eau liquide doree */}
      <div className="absolute inset-0">
        <Image
          src="/images/lion-water.jpg"
          alt="Lion de Juda"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/85" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/logo-gibor.jpg"
            alt="GIBOR Logo"
            width={120}
            height={120}
            className="mx-auto rounded-full shadow-2xl ring-4 ring-primary/30"
          />
        </div>
        
        <p className="text-primary tracking-[0.3em] uppercase text-sm md:text-base mb-6 font-medium">
          Un roman historique d{"'"}Alain Henri Chekroun
        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-wider drop-shadow-2xl">
          GIBOR
        </h1>
        
        <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 font-light italic mb-4 drop-shadow-lg">
          Les Héros du Temps
        </p>
        
        <p className="text-lg md:text-xl text-primary mb-8 font-medium drop-shadow-md">
          Dona Gracia et les gardiens secrets de la lignée de David
        </p>
        
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
        
        <p className="max-w-2xl mx-auto text-white/90 text-lg md:text-xl leading-relaxed mb-12 font-light text-balance drop-shadow-lg">
          De Babylone à Constantinople, une fresque épique où l{"'"}Histoire officielle 
          n{"'"}est que la surface visible d{"'"}une autre histoire, plus secrète.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a 
            href="/acheter"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-4 text-lg tracking-wide shadow-lg hover:shadow-xl transition-all rounded-md font-medium"
          >
            <CreditCard className="w-5 h-5 mr-2" />
            Acheter maintenant
          </a>
          <a 
            href={AMAZON_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-white/40 text-white hover:bg-white/20 px-10 py-4 text-lg tracking-wide bg-transparent rounded-md font-medium transition-colors backdrop-blur-sm"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Commander sur Amazon
          </a>
        </div>
        
        <div className="flex justify-center mb-6">
          <a 
            href={AUDIO_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-white/80 hover:text-primary text-sm tracking-wide font-medium transition-colors gap-2"
          >
            <Headphones className="w-4 h-4" />
            Version Audio disponible
          </a>
        </div>
        
        <a href="#livre" className="inline-block text-white/70 hover:text-primary transition-colors text-sm font-medium">
          Découvrir le livre
        </a>
      </div>
      
      {/* Scroll indicator */}
      <a href="#livre" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </a>
    </section>
  )
}
