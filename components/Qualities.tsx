"use client";
import { qualities } from "@/lib/data";
import { motion } from "framer-motion";
import { Code2, Shield, Zap, Users } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} />,
  Shield: <Shield size={20} />,
  Zap: <Zap size={20} />,
  Users: <Users size={20} />,
};

export default function Qualities() {
  return (
    <section className="py-20" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="section-container">
        <div className="mb-10">
          <p className="section-label">Diferenciais</p>
          <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "var(--text)", letterSpacing: "-0.01em" }}>
            Por que me contratar?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {qualities.map((q, i) => (
            <motion.div
              key={i}
              className="card p-5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="inline-flex p-2.5 rounded-lg mb-4"
                style={{ background: "var(--accent-light)", border: "1px solid var(--accent-mid)", color: "var(--accent)" }}
              >
                {iconMap[q.icon]}
              </div>
              <h3 className="font-semibold text-sm mb-1.5" style={{ color: "var(--text)" }}>{q.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{q.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
