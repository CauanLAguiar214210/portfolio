export default function Footer() {
  return (
    <footer className="py-8" style={{ borderTop: "1px solid var(--border)", background: "var(--bg2)" }}>
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs" style={{ color: "var(--muted2)" }}>
          © 2025 Cauan Aguiar. Todos os direitos reservados.
        </p>
        <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
          Next.js 14 · TypeScript · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
