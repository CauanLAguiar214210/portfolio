"use client";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "/CV_CauanAguiar.docx", label: "Curriculo" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(15,15,15,0.92)" : "rgba(15,15,15,0)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="section-container flex items-center justify-between" style={{ height: 64 }}>
        {/* Logo */}
        <a href="#" className="font-mono text-lg font-medium"
        style={{ color: theme === "dark" ? "var(--text)" : "var(--muted)" }}>
          Cauan DEV
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        {/* Right section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg transition-all hover:bg-[var(--bg2)]"
              style={{ color: "var(--muted)" }}
              title={theme === "dark" ? "Tema claro" : "Tema escuro"}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          {/* CTA */}
          <a
            href="mailto:cauan.aguiarv@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={{ background: "var(--accent)", color: "#fff" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--accent-mid)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "var(--accent)"}
          >
            Entre em contato
          </a>
        </div>

        {/* Mobile menu btn */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg transition-all hover:bg-[var(--bg2)]"
              style={{ color: "var(--muted)" }}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button className="p-2" onClick={() => setOpen(o => !o)} style={{ color: "var(--muted)" }}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="section-container py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link py-1" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
