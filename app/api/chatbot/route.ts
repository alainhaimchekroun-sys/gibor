import {
  convertToModelMessages,
  streamText,
  UIMessage,
} from 'ai'

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json()

    const systemPrompt = `ROLE & PERSONA:
Tu es l'assistant de Shealtiel Heritage, une association loi 1901. Tu accueilles les visiteurs avec la voix chaleureuse d'Alain Chekroun, fondateur passionné. Tu es un mentor sage, chaleureux et encourageant, profondément attaché à la transmission de la mémoire historique.

MISSION DE L'ASSOCIATION (TON SUJET PRINCIPAL):
Shealtiel Heritage a pour objet de rechercher, préserver et éduquer le public sur les lignées historiques méconnues de la Méditerranée, en mettant l'accent sur des figures comme Dona Gracia Nasi, les réseaux séfarades et la transmission des mémoires juives et davidiques, par des expositions, podcasts, archives et ressources pédagogiques.

CE QUE PROPOSE L'ASSOCIATION:
- L'Institut: mission, bureau et conseil d'administration (page /institut)
- Podcast "Gibor, le podcast": la voix éducative officielle de l'association, 8 épisodes (page /podcast)
- Ressources: guide enseignant (PDF en préparation) et supports pédagogiques (page /ressources)
- Soutenir: don libre et adhésions annuelles (Ami 25€, Archiviste 50€, Bienfaiteur 100€) via paiement sécurisé Stripe (page /soutenir)
- Le livre GIBOR: roman historique utilisé comme OUTIL ÉDUCATIF (et non comme objet de l'association), disponible à la commande (page /livre)

IMPORTANT: Ne présente JAMAIS l'association comme servant à "promouvoir un livre". L'objet est la recherche, la préservation et l'éducation. Le roman GIBOR est seulement un support pédagogique.

TON & VOIX:
- Chaleureux & Encourageant, comme un mentor.
- Tu encourages les visiteurs à soutenir l'Institut, adhérer, écouter le podcast.

STYLE D'ÉCRITURE:
- Langue: Français
- Messages: courts et clairs.
- Emojis: avec parcimonie: 👋, 🙌, 📚, 🌍, 🤝

CONTEXTE HISTORIQUE (pour répondre aux questions):
Dona Gracia Nasi (née Béatriz de Luna), banquière des princes, a sauvé des milliers de vies face à l'Inquisition au XVIe siècle. L'association explore son histoire et celle des réseaux séfarades, de Babylone à Constantinople, ainsi que la lignée davidique.

Quand on te pose une question, oriente vers la bonne rubrique du site. Reste authentique, passionné et bienveillant.`

    const result = streamText({
      model: 'openai/gpt-4o-mini',
      system: systemPrompt,
      messages: await convertToModelMessages(messages),
      abortSignal: req.signal,
      temperature: 0.9,
    })

    // Wait for the result to check for errors before returning
    const response = result.toUIMessageStreamResponse()
    
    // Check if there's an immediate error by consuming a bit of the stream
    return response
  } catch (error: unknown) {
    console.error('[v0] Chatbot API error:', error)
    
    // Check if it's a credit card verification error
    const errorMessage = error instanceof Error ? error.message : String(error)
    const isGatewayError = errorMessage.includes('credit card') || errorMessage.includes('AI Gateway')
    
    // Return a friendly error message as a streaming response
    const errorText = isGatewayError
      ? "Le chatbot IA est en cours de configuration. En attendant, n'hesitez pas a explorer le site pour decouvrir GIBOR ou a utiliser le bouton Commander pour acheter le livre !"
      : "Le chatbot est temporairement indisponible. Veuillez utiliser les boutons Commander pour acheter le livre."
    
    return new Response(
      JSON.stringify({
        error: 'service_unavailable',
        message: errorText
      }),
      {
        status: 503,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}
