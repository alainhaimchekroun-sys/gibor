"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/institut", label: "L'Institut" },
  { href: "/podcast", label: "Podcast" },
  { href: "/ressources", label: "Ressources" },
  { href: "/livre", label: "Le livre GIBOR" },
]

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
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border py-3"
          : "bg-secondary/95 backdrop-blur-sm py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-gibor.jpg"
              alt="Gibor Institute"
              width={48}
              height={48}
              className="rounded-full shadow-md ring-2 ring-primary/20"
            />
            <span
              className={cn(
                "text-lg font-bold tracking-wide transition-colors hidden sm:block leading-tight",
                isScrolled ? "text-foreground" : "text-secondary-foreground",
              )}
            >
              Gibor Institute
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm tracking-wide hover:text-primary transition-colors",
                  isScrolled ? "text-foreground/80" : "text-secondary-foreground/80",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/soutenir"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 tracking-wide px-5 py-2 text-sm font-semibold rounded-md transition-colors"
            >
              Soutenir
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Ouvrir le menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-secondary-foreground")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-secondary-foreground")} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-secondary-foreground/90 hover:text-primary transition-colors py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/soutenir"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 tracking-wide w-full px-4 py-2 text-sm font-semibold rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Soutenir
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
