"use client";
import { experiences, education } from "@/lib/data";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experiencia" className="py-24" style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="section-container">
        <div className="mb-12">
          <p className="section-label">Trajetória</p>
          <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "var(--text)", letterSpacing: "-0.01em" }}>
            Experiência & Formação
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={16} style={{ color: "var(--accent)" }} />
              <span className="font-semibold text-sm" style={{ color: "var(--text2)" }}>Experiência Profissional</span>
            </div>

            {experiences.map((exp, i) => (
              <div
                key={i}
                className="card p-6"
                style={{ position: "relative" }}
              >
                {/* Current badge */}
                {exp.current && (
                  <div className="badge-green mb-4" style={{ display: "inline-flex", fontSize: "0.72rem" }}>
                    <span className="dot-blink" />
                    Atual
                  </div>
                )}

                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-semibold text-base" style={{ color: "var(--text)" }}>
                      {exp.role}
                    </h3>
                    <p className="font-medium text-sm mt-0.5" style={{ color: "var(--accent)" }}>
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className="font-mono text-xs flex-shrink-0 mt-0.5"
                    style={{ color: "var(--muted2)" }}
                  >
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 mb-4">
                  <MapPin size={12} style={{ color: "var(--muted2)" }} />
                  <span className="text-xs" style={{ color: "var(--muted2)" }}>{exp.location}</span>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text2)" }}>
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.techs.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={16} style={{ color: "var(--accent)" }} />
              <span className="font-semibold text-sm" style={{ color: "var(--text2)" }}>Formação Acadêmica</span>
            </div>

            <div className="flex flex-col gap-4">
              {education.map((edu, i) => (
                <div key={i} className="card p-5 flex items-start gap-4">
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg"
                    style={{ background: "var(--accent-light)", border: "1px solid var(--accent-mid)" }}
                  >
                    <GraduationCap size={18} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm" style={{ color: "var(--text)" }}>{edu.course}</h3>
                    <p className="text-sm mt-0.5" style={{ color: "var(--accent)" }}>{edu.institution}</p>
                    <p className="font-mono text-xs mt-1" style={{ color: "var(--muted2)" }}>{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Soft skills / approach */}
            <div className="mt-6 card p-5">
              <p className="font-semibold text-sm mb-3" style={{ color: "var(--text)" }}>Abordagem de trabalho</p>
              <ul className="flex flex-col gap-2">
                {[
                  "Código limpo e boas práticas",
                  "Integração de IA no fluxo dev",
                  "Colaboração e comunicação clara",
                  "Aprendizado contínuo",
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--text2)" }}>
                    <span style={{ color: "var(--accent)", fontSize: "1.1em" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
