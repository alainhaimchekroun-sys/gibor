"use client"

import { Button } from "@/components/ui/button"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const AMAZON_LINK = "https://www.amazon.fr/GIBOR-Gracia-gardiens-secrets-lign%C3%A9e/dp/B0G5B2D6BK"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-sm border-b border-border py-3" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo-gibor.jpg"
              alt="GIBOR Logo"
              width={48}
              height={48}
              className="rounded-full shadow-md ring-2 ring-primary/20"
            />
            <span className={cn(
              "text-xl font-bold tracking-wider transition-colors hidden sm:block",
              isScrolled ? "text-foreground" : "text-secondary-foreground"
            )}>
              GIBOR
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#livre" className={cn(
              "text-sm tracking-wide hover:text-primary transition-colors",
              isScrolled ? "text-foreground/80" : "text-secondary-foreground/80"
            )}>
              Le livre
            </a>
            <a href="#personnages" className={cn(
              "text-sm tracking-wide hover:text-primary transition-colors",
              isScrolled ? "text-foreground/80" : "text-secondary-foreground/80"
            )}>
              Personnages
            </a>
            <a href="#auteur" className={cn(
              "text-sm tracking-wide hover:text-primary transition-colors",
              isScrolled ? "text-foreground/80" : "text-secondary-foreground/80"
            )}>
              L{"'"}auteur
            </a>
            <a href="#prochain-opus" className={cn(
              "text-sm tracking-wide hover:text-primary transition-colors",
              isScrolled ? "text-foreground/80" : "text-secondary-foreground/80"
            )}>
              Le prochain Opus
            </a>
            <a 
              href="/acheter"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 tracking-wide px-4 py-2 text-sm font-medium rounded-md transition-colors"
            >
              Commander
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn(
                "w-6 h-6",
                isScrolled ? "text-foreground" : "text-secondary-foreground"
              )} />
            ) : (
              <Menu className={cn(
                "w-6 h-6",
                isScrolled ? "text-foreground" : "text-secondary-foreground"
              )} />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a 
              href="#livre" 
              className="block text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Le livre
            </a>
            <a 
              href="#personnages" 
              className="block text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Personnages
            </a>
            <a 
              href="#auteur" 
              className="block text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              L{"'"}auteur
            </a>
            <a 
              href="#prochain-opus" 
              className="block text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Le prochain Opus
            </a>
            <a 
              href="/acheter"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 tracking-wide w-full px-4 py-2 text-sm font-medium rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Commander
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
