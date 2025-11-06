const researchHighlights = [
  {
    title: "Culturally grounded resilience",
    description:
      "Community-partnered studies documenting protective factors and healing practices within immigrant families.",
  },
  {
    title: "Trauma recovery pathways",
    description:
      "Clinical trials optimizing trauma-focused therapies with attention to cultural context and systemic barriers.",
  },
  {
    title: "Digital access to care",
    description:
      "Co-designing tele-mental health tools that foreground cultural humility, language accessibility, and safety.",
  },
  {
    title: "Mentored scholarship",
    description:
      "Guiding graduate researchers through mixed-methods projects that elevate community expertise.",
  },
];

const methods = [
  "Community-based participatory research",
  "Mixed-methods evaluation",
  "Implementation science frameworks",
  "Longitudinal qualitative interviewing",
];

export default function ResearchPage() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#fdf7ff] via-[#f5efff] to-[#eaddff]">
      <div className="pointer-events-none absolute inset-x-0 top-[-28%] mx-auto h-[500px] max-w-5xl rounded-full bg-gradient-to-r from-[#d0bcff]/45 via-[#f6edff]/70 to-[#bde1ff]/45 blur-3xl" />

      <section className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 pb-16 pt-14 sm:px-8 lg:px-12">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            Research
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-on-surface sm:text-5xl">
            Advancing culturally grounded resilience.
          </h1>
          <p className="max-w-2xl text-base text-on-surface-variant">
            Dr. Tianwei Du collaborates with communities to develop actionable
            evidence that strengthens trauma recovery, expands access to care,
            and sustains culturally responsive practices across systems.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {researchHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[32px] border border-white/70 bg-white/75 px-7 py-8 shadow-[0_20px_38px_-18px_rgba(33,0,93,0.28)]"
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

        <div className="rounded-[32px] border border-white/70 bg-white/80 px-8 py-9 shadow-[0_18px_36px_-16px_rgba(33,0,93,0.28)]">
          <h2 className="text-lg font-semibold text-on-surface">Methods</h2>
          <p className="mt-2 text-sm text-on-surface-variant">
            Studies blend qualitative insight with quantitative rigor to surface
            interventions that travel from academic settings into community
            practice.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {methods.map((item) => (
              <li
                key={item}
                className="rounded-[24px] bg-surface-container-high px-4 py-3 text-sm text-on-surface shadow-[0_10px_22px_-14px_rgba(33,0,93,0.3)]"
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
