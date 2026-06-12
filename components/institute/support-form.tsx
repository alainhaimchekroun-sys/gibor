'use client'

import { useState, useCallback } from 'react'
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Heart, Check, X, Loader2 } from 'lucide-react'
import { startSupportSession } from '@/app/actions/donation'
import { MEMBERSHIP_TIERS, DONATION_PRESETS } from '@/lib/institute'
import { cn } from '@/lib/utils'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

function formatEuro(cents: number) {
  return (cents / 100).toFixed(2).replace('.', ',')
}

interface ActiveSession {
  amountInCents: number
  label: string
  mode: 'don' | 'adhesion'
}

export function SupportForm() {
  const [session, setSession] = useState<ActiveSession | null>(null)

  // Donation state
  const [selectedPreset, setSelectedPreset] = useState<number | null>(DONATION_PRESETS[1])
  const [customAmount, setCustomAmount] = useState('')

  const donationCents = customAmount
    ? Math.round(Number.parseFloat(customAmount.replace(',', '.')) * 100)
    : selectedPreset ?? 0

  const isDonationValid = Number.isFinite(donationCents) && donationCents >= 200

  const openCheckout = (s: ActiveSession) => setSession(s)
  const closeCheckout = () => setSession(null)

  return (
    <>
      {/* Don libre */}
      <div id="don" className="scroll-mt-24">
        <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Faire un don libre</h2>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Choisissez le montant de votre don ponctuel pour soutenir les recherches et les actions éducatives de
            l{"'"}Institut.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {DONATION_PRESETS.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => {
                  setSelectedPreset(preset)
                  setCustomAmount('')
                }}
                className={cn(
                  'py-3 rounded-lg border-2 font-semibold transition-colors',
                  selectedPreset === preset && !customAmount
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border text-foreground hover:border-primary/50',
                )}
              >
                {formatEuro(preset)} €
              </button>
            ))}
          </div>

          <div className="mb-6">
            <label htmlFor="custom-amount" className="block text-sm font-medium text-foreground mb-2">
              Ou un autre montant (€)
            </label>
            <input
              id="custom-amount"
              type="number"
              min="2"
              step="1"
              inputMode="decimal"
              placeholder="Ex : 75"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value)
                setSelectedPreset(null)
              }}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <button
            type="button"
            disabled={!isDonationValid}
            onClick={() =>
              openCheckout({ amountInCents: donationCents, label: 'Don libre', mode: 'don' })
            }
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 text-base font-semibold rounded-md transition-colors"
          >
            <Heart className="w-5 h-5" />
            Donner {isDonationValid ? `${formatEuro(donationCents)} €` : ''}
          </button>
          <p className="text-xs text-muted-foreground mt-3 text-center">Montant minimum : 2,00 €</p>
        </div>
      </div>

      {/* Adhésions */}
      <div id="adherer" className="scroll-mt-24 mt-16">
        <div className="text-center mb-10">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">Adhésion annuelle</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Devenir membre</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            En adhérant, vous rejoignez la communauté qui fait vivre l{"'"}Institut et soutenez durablement sa mission.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                'rounded-2xl p-8 border-2 flex flex-col',
                tier.highlight
                  ? 'border-primary bg-primary/5 shadow-lg relative'
                  : 'border-border bg-card shadow-sm',
              )}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Le plus populaire
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground mb-1">{tier.name}</h3>
              <div className="mb-5">
                <span className="text-4xl font-bold text-foreground">{formatEuro(tier.amountInCents)} €</span>
                <span className="text-muted-foreground">/an</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() =>
                  openCheckout({ amountInCents: tier.amountInCents, label: tier.name, mode: 'adhesion' })
                }
                className={cn(
                  'w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-md transition-colors',
                  tier.highlight
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border text-foreground hover:border-primary hover:text-primary',
                )}
              >
                Adhérer
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout modal */}
      {session && (
        <CheckoutModal session={session} onClose={closeCheckout} />
      )}
    </>
  )
}

function CheckoutModal({ session, onClose }: { session: ActiveSession; onClose: () => void }) {
  const fetchClientSecret = useCallback(
    () => startSupportSession(session),
    [session],
  )

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 p-4 py-10">
      <div className="bg-card rounded-2xl shadow-2xl w-full max-w-2xl relative">
        <div className="flex items-center justify-between p-5 border-b border-border sticky top-0 bg-card rounded-t-2xl">
          <div>
            <h3 className="font-bold text-foreground">
              {session.mode === 'adhesion' ? `Adhésion ${session.label}` : 'Don à Gibor Institute'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {(session.amountInCents / 100).toFixed(2).replace('.', ',')} €
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="w-9 h-9 rounded-full hover:bg-muted flex items-center justify-center text-muted-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-5">
          <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
            <div className="min-h-[200px] flex items-center justify-center [&:has(iframe)]:block">
              <Loader2 className="w-6 h-6 text-primary animate-spin [&:has(~iframe)]:hidden" />
              <EmbeddedCheckout />
            </div>
          </EmbeddedCheckoutProvider>
        </div>
      </div>
    </div>
  )
}
