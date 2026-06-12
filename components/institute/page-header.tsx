interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-secondary text-secondary-foreground pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {eyebrow && (
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-4">{eyebrow}</p>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide text-balance">{title}</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          {description && (
            <p className="text-lg text-secondary-foreground/85 leading-relaxed mt-8 text-pretty">{description}</p>
          )}
        </div>
      </div>
    </section>
  )
}
