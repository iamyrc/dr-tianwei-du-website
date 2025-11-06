const communityHighlights = [
  {
    title: "Community workshops",
    description:
      "Facilitates trauma literacy and caregiver support series designed with immigrant-led organizations.",
  },
  {
    title: "Consultation & supervision",
    description:
      "Partners with clinics to embed cultural humility through reflective consultation and capacity building.",
  },
  {
    title: "Youth mentorship",
    description:
      "Leads mentorship cohorts for emerging clinicians and student researchers invested in community healing.",
  },
];

const partnershipPrinciples = [
  "Honor community expertise and lived experience.",
  "Co-create interventions that reflect cultural strengths.",
  "Evaluate programs with storytelling and data in tandem.",
  "Sustain impact through training, coaching, and feedback loops.",
];

export default function CommunityPage() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#fdf7ff] via-[#f5efff] to-[#eaddff]">
      <div className="pointer-events-none absolute inset-x-0 top-[-30%] mx-auto h-[480px] max-w-5xl rounded-full bg-gradient-to-r from-[#d0bcff]/45 via-[#f6edff]/70 to-[#bde1ff]/45 blur-3xl" />

      <section className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 pb-16 pt-14 sm:px-8 lg:px-12">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            Community involvement
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-on-surface sm:text-5xl">
            Building pathways to culturally responsive care.
          </h1>
          <p className="max-w-2xl text-base text-on-surface-variant">
            Partnerships span schools, nonprofits, and healthcare systems. Each
            project centers community voice while applying evidence-based
            practices to local priorities.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {communityHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[32px] border border-white/70 bg-white/75 px-6 py-7 shadow-[0_20px_38px_-18px_rgba(33,0,93,0.28)]"
            >
              <div className="inline-flex rounded-full bg-surface-container-high px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                {item.title}
              </div>
              <p className="mt-4 text-sm text-on-surface-variant">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-5 rounded-[32px] border border-white/70 bg-white/80 px-8 py-9 shadow-[0_18px_36px_-16px_rgba(33,0,93,0.26)] lg:grid-cols-[0.9fr,1.1fr]">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-on-surface">
              Partnership principles
            </h2>
            <p className="text-sm text-on-surface-variant">
              Collaborations focus on building infrastructure that sustains
              trauma-responsive care far beyond any single engagement.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            {partnershipPrinciples.map((item) => (
              <li
                key={item}
                className="rounded-[24px] bg-surface-container-high px-4 py-3 shadow-[0_10px_22px_-14px_rgba(33,0,93,0.28)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
