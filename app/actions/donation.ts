'use server'

import { stripe } from '@/lib/stripe'

const MIN_CENTS = 200 // 2,00 EUR minimum
const MAX_CENTS = 1000000 // 10 000,00 EUR maximum

interface SupportInput {
  amountInCents: number
  label: string
  mode: 'don' | 'adhesion'
}

export async function startSupportSession({ amountInCents, label, mode }: SupportInput) {
  // Server-side validation — never trust the client amount blindly
  const amount = Math.round(amountInCents)
  if (!Number.isFinite(amount) || amount < MIN_CENTS || amount > MAX_CENTS) {
    throw new Error('Montant invalide')
  }

  const isAdhesion = mode === 'adhesion'

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    redirect_on_completion: 'never',
    submit_type: 'donate',
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: isAdhesion ? `Adhésion ${label}` : 'Don à Shealtiel Heritage',
            description: isAdhesion
              ? `Adhésion annuelle "${label}" à Shealtiel Heritage (association loi 1901)`
              : 'Don de soutien à Shealtiel Heritage (association loi 1901)',
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    billing_address_collection: 'required',
    phone_number_collection: {
      enabled: true,
    },
    metadata: {
      type: mode,
      tier: label,
    },
  })

  if (!session.client_secret) {
    throw new Error('Impossible de créer la session de paiement')
  }

  return session.client_secret
}
