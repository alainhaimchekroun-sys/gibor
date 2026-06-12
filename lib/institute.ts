// Source of truth for Shealtiel Heritage information.
// Placeholder values are marked with TODO — replace with official details.

export const INSTITUTE = {
  name: "Shealtiel Heritage",
  shortName: "Shealtiel Heritage",
  // Statutory object — never describe this as "book promotion".
  mission:
    "Rechercher, préserver et éduquer le public sur les lignées historiques méconnues de la Méditerranée, en mettant l'accent sur des figures comme Dona Gracia Nasi, les réseaux séfarades et la transmission des mémoires juives et davidiques, par des expositions, podcasts, archives et ressources pédagogiques.",
  tagline: "La mémoire des lignées oubliées de la Méditerranée",
  email: "contact@shealtiel-heritage.org", // TODO: confirmer l'email officiel
  // Legal — association loi 1901
  legal: {
    type: "Association loi 1901",
    rna: "W—————", // TODO: numéro RNA officiel
    president: "Alain Chekroun",
    address: "5 Rue du Coq Français, 93260 Les Lilas",
    foundedYear: new Date().getFullYear(),
  },
}

// Bureau & conseil
export const BUREAU = [
  { role: "Président", name: "Alain Chekroun" },
  { role: "Trésorier·ère", name: "À renseigner" }, // TODO: nom du trésorier
  { role: "Secrétaire général·e", name: "À renseigner" }, // TODO: nom du secrétaire
]

export const CONSEIL = [
  { role: "Membre du conseil", name: "À renseigner" },
  { role: "Membre du conseil", name: "À renseigner" },
  { role: "Membre du conseil", name: "À renseigner" },
  { role: "Membre du conseil", name: "À renseigner" },
]

// Membership tiers — placeholder amounts. TODO: confirmer les montants officiels.
export interface MembershipTier {
  id: string
  name: string
  amountInCents: number
  highlight?: boolean
  benefits: string[]
}

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "ami",
    name: "Ami",
    amountInCents: 2500, // 25 €/an
    benefits: [
      "Newsletter de l'Institut",
      "Accès aux actualités des recherches",
      "Soutien à la mission éducative",
    ],
  },
  {
    id: "archiviste",
    name: "Archiviste",
    amountInCents: 5000, // 50 €/an
    highlight: true,
    benefits: [
      "Tous les avantages Ami",
      "Accès privilégié aux archives en ligne",
      "Invitations aux événements et expositions",
      "Mention dans le rapport annuel",
    ],
  },
  {
    id: "bienfaiteur",
    name: "Bienfaiteur",
    amountInCents: 10000, // 100 €/an
    benefits: [
      "Tous les avantages Archiviste",
      "Rencontres privées avec les chercheurs",
      "Remerciement nominatif sur le site",
    ],
  },
]

// Suggested one-off donation amounts (in cents)
export const DONATION_PRESETS = [1000, 2500, 5000, 10000]

// Podcast "Gibor, le podcast" — chaîne YouTube officielle.
export const PODCAST_YOUTUBE = "https://www.youtube.com/results?search_query=Gibor+le+podcast" // TODO: remplacer par l'URL exacte de la chaîne

// 8 existing podcast episodes — titres provisoires. TODO: confirmer titres + liens exacts des vidéos.
export interface Episode {
  number: number
  title: string
  description: string
  url: string // TODO: lien YouTube exact de l'épisode
}

export const EPISODES: Episode[] = [
  {
    number: 1,
    title: "Dona Gracia Nasi, la femme qui défia l'Inquisition",
    description: "Portrait de l'héroïne séfarade, banquière des princes et sauveuse de son peuple.",
    url: PODCAST_YOUTUBE,
  },
  {
    number: 2,
    title: "Les réseaux séfarades de la Méditerranée",
    description: "Comment les routes marchandes ont sauvé des milliers de vies au XVIe siècle.",
    url: PODCAST_YOUTUBE,
  },
  {
    number: 3,
    title: "La lignée de David à travers les siècles",
    description: "Sur les traces des gardiens secrets d'un héritage millénaire.",
    url: PODCAST_YOUTUBE,
  },
  {
    number: 4,
    title: "Babylone, premier exil et première mémoire",
    description: "Aux origines de la transmission des mémoires juives.",
    url: PODCAST_YOUTUBE,
  },
  {
    number: 5,
    title: "Cordoue, l'âge d'or andalou",
    description: "Médecins, savants et poètes au cœur d'un carrefour de civilisations.",
    url: PODCAST_YOUTUBE,
  },
  {
    number: 6,
    title: "Constantinople, refuge des exilés",
    description: "L'Empire ottoman comme terre d'accueil des persécutés.",
    url: PODCAST_YOUTUBE,
  },
  {
    number: 7,
    title: "Femmes de pouvoir dans l'ombre de l'Histoire",
    description: "Le rôle invisible mais décisif des femmes dans la survie des communautés.",
    url: PODCAST_YOUTUBE,
  },
  {
    number: 8,
    title: "Transmettre la mémoire aujourd'hui",
    description: "Pourquoi et comment éduquer les nouvelles générations.",
    url: PODCAST_YOUTUBE,
  },
]
