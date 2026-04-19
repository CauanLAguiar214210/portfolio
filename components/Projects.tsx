"use client";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projetos" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="section-container">
        <div className="mb-12">
          <p className="section-label">Trabalhos</p>
          <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "var(--text)", letterSpacing: "-0.01em" }}>
            Projetos em Destaque
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="card p-6 group flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-3">
                <span className="proj-number">#{String(i + 1).padStart(2, "0")}</span>
                <span
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ background: "var(--green-bg)", border: "1px solid var(--green-border)", color: "var(--green)" }}
                >
                  {proj.highlight}
                </span>
              </div>

              <h3 className="font-semibold text-base mb-2" style={{ color: "var(--text)" }}>
                {proj.title}
              </h3>

              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text2)" }}>
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                {proj.techs.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
