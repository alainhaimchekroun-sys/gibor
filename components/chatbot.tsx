'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { MessageCircle, X, Send, Loader2, BookOpen, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chatbot' }),
    onError: (error) => {
      console.error('[v0] Chat error:', error)
      setErrorMessage('Le service est temporairement indisponible. Utilisez les boutons "Commander" pour acheter le livre.')
    },
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput('')
  }

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
          aria-label="Ouvrir le chat"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Assistant GIBOR</h3>
                <p className="text-xs text-primary-foreground/80">
                  {isLoading ? 'Écrit...' : 'En ligne'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary-foreground/10 p-2 rounded-lg transition-colors"
              aria-label="Fermer le chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
            {errorMessage && (
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-amber-800 dark:text-amber-200 mb-2">
                      {errorMessage}
                    </p>
                    <button
                      onClick={() => setErrorMessage(null)}
                      className="text-xs text-amber-700 dark:text-amber-300 underline hover:no-underline"
                    >
                      Fermer ce message
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {messages.length === 0 && !errorMessage && (
              <div className="text-center text-muted-foreground py-8">
                <BookOpen className="w-12 h-12 mx-auto mb-3 text-primary/40" />
                <p className="text-sm font-medium mb-2">Bienvenue !</p>
                <p className="text-xs mb-4">
                  Posez-moi vos questions sur GIBOR, Dona Gracia, ou l'histoire du livre.
                </p>
                <div className="space-y-2 text-xs">
                  <button 
                    onClick={() => { setInput('Parle-moi de Dona Gracia'); }}
                    className="block w-full px-3 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-left"
                  >
                    Parle-moi de Dona Gracia
                  </button>
                  <button 
                    onClick={() => { setInput('De quoi parle le livre GIBOR ?'); }}
                    className="block w-full px-3 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-left"
                  >
                    De quoi parle le livre ?
                  </button>
                  <button 
                    onClick={() => { setInput('Comment commander le livre ?'); }}
                    className="block w-full px-3 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-left"
                  >
                    Comment commander ?
                  </button>
                </div>
              </div>
            )}
            
            {messages.map((message) => {
              const isUser = message.role === 'user'
              const text = message.parts
                ?.filter((p) => p.type === 'text')
                .map((p) => (p as { text: string }).text)
                .join('') || ''
              
              return (
                <div
                  key={message.id}
                  className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                      isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {text}
                  </div>
                </div>
              )
            })}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl px-4 py-2.5">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 bg-background border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
              />
              <Button
                type="submit"
                disabled={!input.trim() || isLoading}
                size="icon"
                className="rounded-xl"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
