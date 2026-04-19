"use client";
import { useState, useRef, useEffect } from "react";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium" style={{ color: "var(--text2)" }}>{name}</span>
        <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div className="skill-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

const tabs = [
  { key: "backend", label: "Backend" },
  { key: "frontend", label: "Frontend" },
  { key: "database", label: "Database" },
];

export default function Skills() {
  const [active, setActive] = useState("backend");

  const currentSkills =
    active === "backend" ? skills.backend
    : active === "frontend" ? skills.frontend
    : skills.database;

  return (
    <section id="habilidades" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="section-container">
        {/* Header */}
        <div className="mb-12">
          <p className="section-label">Competências</p>
          <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "var(--text)", letterSpacing: "-0.01em" }}>
            Habilidades & Tecnologias
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left: tabs + bars */}
          <div>
            {/* Tab selector */}
            <div className="flex gap-1.5 mb-7 p-1 rounded-10 w-fit" style={{ background: "var(--bg2)", borderRadius: 10 }}>
              {tabs.map(t => (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`tab-btn ${active === t.key ? "active" : ""}`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {currentSkills.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 70} />
            ))}
          </div>

          {/* Right: tools + stats */}
          <div>
            <p className="text-sm font-medium mb-4" style={{ color: "var(--muted)" }}>
              Ferramentas & Ambiente
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {skills.tools.map(tool => (
                <span key={tool} className="tech-tag">{tool}</span>
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "3+", label: "Anos exp." },
                { value: "10+", label: "Projetos" },
                { value: ".NET", label: "Stack core" },
              ].map(s => (
                <div key={s.label} className="stat-card">
                  <div className="font-bold text-xl mb-0.5" style={{ color: "var(--accent)" }}>{s.value}</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* IA note */}
            <motion.div
              className="mt-6 p-4 rounded-xl flex items-start gap-3"
              style={{ background: "var(--accent-light)", border: "1px solid var(--accent-mid)" }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-lg mt-0.5">🤖</span>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--accent-mid)" }}>IA aplicada ao desenvolvimento</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--accent)" }}>
                  Uso de Windsurf e Claude integrados ao fluxo de trabalho para gerar código, sugerir otimizações e agilizar debug.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
