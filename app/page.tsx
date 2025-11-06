const focusChips = [
  "Trauma-informed practice",
  "Community collaboration",
  "Graduate mentorship",
];

const featureCards = [
  {
    title: "Research",
    description:
      "Explore current studies advancing culturally grounded resilience and trauma recovery.",
    href: "/research",
    action: "View research",
  },
  {
    title: "Community partnerships",
    description:
      "See how school systems, nonprofits, and clinics co-design responsive mental health programs.",
    href: "/community",
    action: "Visit community",
  },
  {
    title: "Clinical mentorship",
    description:
      "Discover supervision and training pathways for graduate clinicians and emerging scholars.",
    href: "/about",
    action: "Meet Dr. Du",
  },
  {
    title: "Collaborate",
    description:
      "Reach out to discuss research collaborations, keynotes, or trauma-informed consultation.",
    href: "/contact",
    action: "Contact",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[var(--md-sys-color-background)]">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 pb-20 pt-16 sm:px-8 lg:px-12">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--md-sys-color-on-surface-variant)]">
            Mental health leadership
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-on-surface sm:text-5xl lg:text-[3.5rem]">
            Culturally rooted mental health research and practice.
          </h1>
          <p className="max-w-3xl text-lg text-[var(--md-sys-color-on-surface-variant)]">
            Dr. Tianwei Du partners with communities to co-design trauma-informed
            care, translate research into real-world impact, and mentor clinicians
            committed to culturally responsive healing.
          </p>
          <div className="flex flex-wrap gap-2 text-sm font-medium text-[var(--md-sys-color-on-surface-variant)]">
            {focusChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-[var(--md-sys-color-surface-container)] px-3 py-1.5 shadow-[0_8px_24px_-18px_rgba(33,0,93,0.3)]"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <md-filled-button
              suppressHydrationWarning
              href="/research"
              className="inline-flex items-center gap-3 px-6 py-3 text-base"
            >
              <md-icon suppressHydrationWarning slot="icon">
                science
              </md-icon>
              Explore research
            </md-filled-button>
            <md-outlined-button
              suppressHydrationWarning
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 text-base"
            >
              <md-icon suppressHydrationWarning slot="icon">
                mail
              </md-icon>
              Start a conversation
            </md-outlined-button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featureCards.map((card) => (
            <md-elevated-card
              suppressHydrationWarning
              key={card.href}
              className="group flex h-full flex-col gap-3 rounded-[28px] border border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)] p-6 shadow-[0_18px_28px_-24px_rgba(33,0,93,0.35)] transition hover:border-[var(--md-sys-color-primary)] hover:shadow-[0_20px_36px_-20px_rgba(33,0,93,0.38)]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--md-sys-color-primary)]">
                {card.title}
              </div>
              <p className="text-base text-[var(--md-sys-color-on-surface-variant)]">
                {card.description}
              </p>
              <a
                href={card.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--md-sys-color-primary)]"
              >
                {card.action}
                <md-icon suppressHydrationWarning>arrow_forward</md-icon>
              </a>
            </md-elevated-card>
          ))}
        </div>
      </section>
    </div>
  );
}
