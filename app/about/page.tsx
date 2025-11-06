const focusAreas = [
  "Trauma-informed interventions rooted in cultural humility.",
  "Reflective supervision for graduate-level clinicians.",
  "Community-engaged scholarship with immigrant families.",
  "Applied research mentorship for emerging practitioners.",
];

const leadershipHighlights = [
  {
    title: "Academic leadership",
    description:
      "Leads graduate training that centers cultural responsiveness, reflective practice, and strengths-based care.",
  },
  {
    title: "Scholarship",
    description:
      "Publishes on trauma recovery, community collaborations, and models that expand access to mental health services.",
  },
  {
    title: "Mentorship",
    description:
      "Guides emerging clinicians and researchers through community-partnered projects and applied evaluation.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#fdf7ff] via-[#f5efff] to-[#eaddff]">
      <div className="pointer-events-none absolute inset-x-0 top-[-30%] mx-auto h-[480px] max-w-5xl rounded-full bg-gradient-to-r from-[#d0bcff]/45 via-[#f6edff]/70 to-[#bde1ff]/45 blur-3xl" />

      <section className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 pb-16 pt-14 sm:px-8 lg:px-12">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            About
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-on-surface sm:text-5xl">
            Clinician, educator, and community collaborator.
          </h1>
          <p className="max-w-2xl text-base text-on-surface-variant">
            With a Ph.D. in Clinical Psychology and more than a decade of
            teaching graduate clinicians, Dr. Tianwei Du specializes in
            trauma-informed interventions and culturally responsive supervision.
            Her work bridges research, practice, and policy to uplift community
            strengths.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6 rounded-[32px] border border-white/70 bg-white/80 px-8 py-10 shadow-[0_18px_36px_-16px_rgba(33,0,93,0.28)]">
            <h2 className="text-lg font-semibold text-on-surface">
              Areas of focus
            </h2>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              {focusAreas.map((item) => (
                <li
                  key={item}
                  className="rounded-[20px] bg-surface-container-high px-4 py-3 shadow-[0_10px_18px_-14px_rgba(33,0,93,0.25)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <md-outlined-button
              href="/docs/tianwei-du-cv.pdf"
              className="inline-flex items-center gap-3 px-6 py-3 text-base"
            >
              <md-icon suppressHydrationWarning slot="icon">
                download
              </md-icon>
              Download CV
            </md-outlined-button>
          </div>

          <div className="space-y-4 rounded-[32px] border border-white/70 bg-white/70 px-7 py-8 shadow-[0_18px_36px_-16px_rgba(33,0,93,0.24)]">
            <h2 className="text-lg font-semibold text-on-surface">
              Leadership highlights
            </h2>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              {leadershipHighlights.map((item) => (
                <li
                  key={item.title}
                  className="rounded-[24px] border border-surface-container-high bg-surface px-5 py-4 shadow-[0_10px_20px_-14px_rgba(33,0,93,0.3)]"
                >
                  <p className="text-sm font-semibold text-on-surface">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-on-surface-variant">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
