export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
}

// This is the source of truth for all products.
// All UI to display products should pull from this array.
// IDs passed to the checkout session should be the same as IDs from this array.
export const PRODUCTS: Product[] = [
  {
    id: 'gibor-broche',
    name: 'GIBOR - Les Héros du Temps (Broché)',
    description:
      'Édition brochée de luxe du roman historique par Alain Henri Chekroun. 40 chapitres richement documentés avec blasons historiques, cartes anciennes et généalogies illustrées.',
    priceInCents: 2600, // 26.00 EUR
  },
]
