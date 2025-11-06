"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { useRouter, usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  icon: string;
  supporting?: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "About", href: "/about", icon: "account_circle" },
  { label: "Research", href: "/research", icon: "science" },
  { label: "Community", href: "/community", icon: "diversity_3" },
  { label: "Contact", href: "/contact", icon: "alternate_email" },
];

function useNavState(currentPath: string | null) {
  return useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        active: currentPath === item.href,
      })),
    [currentPath],
  );
}

export function MobileNavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const items = useNavState(currentPath);

  return (
    <header className="sticky top-0 z-40 flex flex-col gap-4 bg-[var(--md-sys-color-surface)] px-4 py-3 shadow-[0_10px_24px_-18px_rgba(33,0,93,0.35)] lg:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--md-sys-color-primary)] text-xs font-semibold uppercase tracking-[0.24em] text-[var(--md-sys-color-on-primary)]">
            TD
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--md-sys-color-on-surface)]">
              Dr. Tianwei Du
            </p>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--md-sys-color-on-surface-variant)]">
              Clinical Psychology
            </p>
          </div>
        </div>
        <md-filled-button
          suppressHydrationWarning
          onClick={() => router.push("/contact")}
          className="inline-flex items-center gap-3 px-6 py-3 text-base"
        >
          <md-icon suppressHydrationWarning slot="icon">
            call
          </md-icon>
          Connect
        </md-filled-button>
      </div>

      <nav aria-label="Primary">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {items.map((item) => (
            <md-filled-tonal-button
              suppressHydrationWarning
              key={item.href}
              data-active={item.active ? "true" : undefined}
              aria-current={item.active ? "page" : undefined}
              onClick={() => router.push(item.href)}
            >
              <md-icon suppressHydrationWarning slot="icon">
                {item.icon}
              </md-icon>
              {item.label}
            </md-filled-tonal-button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default function NavRail() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const items = useNavState(currentPath);

  return (
    <aside className="hidden lg:flex">
      <md-navigation-drawer
        suppressHydrationWarning
        opened
        pivot="start"
        className="h-screen"
        style={{
          "--md-navigation-drawer-container-width": "280px",
          "--md-navigation-drawer-container-color":
            "var(--md-sys-color-surface)",
          "--md-navigation-drawer-container-shape": "0 24px 24px 0",
          "--md-navigation-drawer-divider-color":
            "var(--md-sys-color-outline-variant)",
        } as CSSProperties}
      >
        <div className="flex h-full flex-col justify-between px-4 pb-6 pt-6">
          <div className="space-y-6">
            <div className="flex items-center gap-3 rounded-[20px] bg-[var(--md-sys-color-surface-container)] px-4 py-3 shadow-[0_4px_16px_-12px_rgba(33,0,93,0.35)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--md-sys-color-primary)] text-sm font-semibold text-[var(--md-sys-color-on-primary)]">
                TD
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--md-sys-color-on-surface)]">
                  Dr. Tianwei Du
                </p>
                <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[var(--md-sys-color-on-surface-variant)]">
                  Clinical Psychology
                </p>
              </div>
            </div>
            <md-list suppressHydrationWarning>
              {items.map((item) => (
                <md-list-item
                  suppressHydrationWarning
                  key={item.href}
                  type="button"
                  data-active={item.active ? "true" : undefined}
                  aria-current={item.active ? "page" : undefined}
                  onClick={() => router.push(item.href)}
                >
                  <md-icon suppressHydrationWarning slot="start">
                    {item.icon}
                  </md-icon>
                  <span slot="headline">{item.label}</span>
                  {item.supporting ? (
                    <span slot="supporting-text">{item.supporting}</span>
                  ) : null}
                </md-list-item>
              ))}
            </md-list>
          </div>
          <div className="space-y-4 text-xs text-[var(--md-sys-color-on-surface-variant)]">
            <div className="rounded-[20px] bg-[var(--md-sys-color-surface-container)] px-4 py-3">
              <p className="text-sm font-semibold text-[var(--md-sys-color-on-surface)]">
                Collaboration spotlight
              </p>
              <p className="mt-1">
                Navigate research, community programs, and connections.
              </p>
            </div>
            <md-filled-button
              suppressHydrationWarning
              onClick={() => router.push("/contact")}
              className="inline-flex w-full items-center justify-center gap-3 px-6 py-3 text-base"
            >
              <md-icon suppressHydrationWarning slot="icon">
                forum
              </md-icon>
              Connect
            </md-filled-button>
            <p>© {new Date().getFullYear()} Dr. Tianwei Du</p>
          </div>
        </div>
      </md-navigation-drawer>
    </aside>
  );
}
