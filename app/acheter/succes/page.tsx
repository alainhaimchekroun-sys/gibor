import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowLeft, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Commande confirmée - GIBOR',
  description: 'Votre commande de GIBOR - Les Héros du Temps a été confirmée.',
}

export default function SuccesPage() {
  return (
    <main className="min-h-screen bg-muted flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto text-center">
          <div className="bg-card rounded-2xl p-10 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>

            <h1 className="text-3xl font-bold text-foreground mb-4 text-balance">
              Merci pour votre commande !
            </h1>

            <p className="text-muted-foreground text-lg mb-2">
              Votre exemplaire de{' '}
              <span className="text-foreground font-semibold">
                GIBOR - Les Héros du Temps
              </span>{' '}
              est en route.
            </p>

            <p className="text-muted-foreground mb-8">
              Vous recevrez un email de confirmation avec les détails de votre
              commande et le suivi de livraison.
            </p>

            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />

            <div className="flex flex-col gap-3">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour au site
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-border text-foreground hover:bg-muted"
              >
                <Link href="/#livre">
                  <BookOpen className="w-4 h-4 mr-2" />
                  En savoir plus sur le livre
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
