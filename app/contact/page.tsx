const contactMethods = [
  {
    label: "Email",
    value: "hello@tianweidu.com",
    href: "mailto:hello@tianweidu.com",
    description:
      "Send a note to begin a collaboration or request additional materials.",
  },
  {
    label: "Office phone",
    value: "(555) 123-4567",
    description:
      "Leave a voicemail for consultation inquiries or scheduling support.",
  },
  {
    label: "Office hours",
    value: "Tuesdays & Thursdays · 2:00 – 4:00 PM (by appointment)",
    description:
      "Virtual or in-person sessions arranged to support teams and partners.",
  },
];

const engagementOptions = [
  "Community-partnered research planning",
  "Keynotes and guest lectures",
  "Trauma-informed program consultation",
  "Clinical supervision and mentorship",
];

export default function ContactPage() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#fdf7ff] via-[#f5efff] to-[#eaddff]">
      <div className="pointer-events-none absolute inset-x-0 top-[-30%] mx-auto h-[460px] max-w-5xl rounded-full bg-gradient-to-r from-[#d0bcff]/45 via-[#f6edff]/70 to-[#bde1ff]/45 blur-3xl" />

      <section className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 pb-16 pt-14 sm:px-8 lg:px-12">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            Contact
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-on-surface sm:text-5xl">
            Let&apos;s collaborate to expand mental health access.
          </h1>
          <p className="max-w-2xl text-base text-on-surface-variant">
            Reach out to explore partnerships, consultation, or speaking
            engagements focused on culturally responsive mental health care.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr,0.9fr]">
          <div className="space-y-4 rounded-[32px] border border-white/70 bg-white/80 px-8 py-9 shadow-[0_18px_36px_-16px_rgba(33,0,93,0.28)]">
            <h2 className="text-lg font-semibold text-on-surface">
              Get in touch
            </h2>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              {contactMethods.map((item) => (
                <li
                  key={item.label}
                  className="rounded-[28px] border border-surface-container-high bg-surface px-5 py-4 shadow-[0_12px_24px_-18px_rgba(33,0,93,0.3)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block text-sm font-semibold text-on-surface transition hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-semibold text-on-surface">
                      {item.value}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-on-surface-variant/80">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 rounded-[32px] border border-white/70 bg-white/75 px-7 py-8 shadow-[0_18px_36px_-16px_rgba(33,0,93,0.26)]">
            <h2 className="text-lg font-semibold text-on-surface">
              Engagement options
            </h2>
            <p className="text-sm text-on-surface-variant">
              When reaching out, share a brief overview of your goals so we can
              tailor support and scope to your team.
            </p>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              {engagementOptions.map((item) => (
                <li
                  key={item}
                  className="rounded-[24px] bg-surface-container-high px-4 py-3 shadow-[0_10px_22px_-14px_rgba(33,0,93,0.28)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
