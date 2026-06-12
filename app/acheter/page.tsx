import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ShieldCheck, Lock, CreditCard } from 'lucide-react'
import Checkout from '@/components/checkout'
import { PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Commander GIBOR - Les Héros du Temps',
  description:
    'Achetez votre exemplaire de GIBOR - Les Héros du Temps par Alain Henri Chekroun. Paiement sécurisé par carte bancaire.',
}

export default function AcheterPage() {
  const product = PRODUCTS[0]

  return (
    <main className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Retour au site</span>
            </Link>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-sm text-secondary-foreground/80">
                Paiement sécurisé
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="max-w-5xl mx-auto">
          {/* Page title */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
              Commander votre exemplaire
            </h1>
            <p className="text-muted-foreground text-lg">
              Remplissez vos informations de paiement et de livraison ci-dessous
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Product summary - left side */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-6 shadow-sm sticky top-8">
                <div className="flex gap-4 mb-6">
                  <div className="w-20 h-28 flex-shrink-0 relative rounded-sm overflow-hidden shadow-md">
                    <Image
                      src="/images/gibor-cover-official.jpg"
                      alt="Couverture GIBOR"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-foreground text-lg leading-tight">
                      GIBOR
                    </h2>
                    <p className="text-muted-foreground text-sm mt-1">
                      Les Héros du Temps
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      par Alain Henri Chekroun
                    </p>
                    <p className="text-primary font-bold text-xl mt-3">
                      {(product.priceInCents / 100).toFixed(2).replace('.', ',')} EUR
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Sous-total</span>
                    <span className="text-foreground font-medium">
                      {(product.priceInCents / 100).toFixed(2).replace('.', ',')} EUR
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-muted-foreground">Livraison</span>
                    <span className="text-foreground font-medium">
                      Calculée à la prochaine étape
                    </span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-bold text-foreground">Total</span>
                    <span className="font-bold text-foreground text-lg">
                      {(product.priceInCents / 100).toFixed(2).replace('.', ',')} EUR
                    </span>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Paiement sécurisé par Stripe</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CreditCard className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Visa, Mastercard, AMEX acceptées</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Lock className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Données chiffrées SSL/TLS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stripe Checkout - right side */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <Checkout productId={product.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
