"use client";
import { personalInfo } from "@/lib/data";
import { Mail, MapPin, Phone, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

// SVG icons for brands not in lucide
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Hero() {
  return (
    <section id="sobre" className="relative pt-24 pb-20" style={{ borderBottom: "1px solid var(--border)", background: "linear-gradient(135deg, var(--bg) 0%, var(--bg2) 100%)" }}>
      <div className="section-container">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Available badge */}
          <motion.div
            className="badge-green mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="dot-blink" />
            Disponível para novas oportunidades
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-bold tracking-tight mb-3 leading-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", background: "linear-gradient(135deg, var(--accent), #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            className="font-medium mb-5"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", color: "var(--accent)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {personalInfo.role}
          </motion.p>

          <motion.p
            className="leading-relaxed mb-8 max-w-2xl"
            style={{ color: "var(--text2)", fontSize: "1.05rem", lineHeight: 1.75 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* Info chips */}
          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              { icon: <MapPin size={14} />, text: personalInfo.location },
              { icon: <Phone size={14} />, text: personalInfo.phone },
              { icon: <Mail size={14} />, text: personalInfo.email },
            ].map((item) => (
              <span
                key={item.text}
                className="flex items-center gap-1.5 text-sm"
                style={{ color: "var(--muted)" }}
              >
                <span style={{ color: "var(--muted2)" }}>{item.icon}</span>
                {item.text}
              </span>
            ))}
          </motion.div>

          {/* CTA + Social */}
          <motion.div
            className="flex flex-wrap gap-3 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a
              href="#projetos"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              style={{ background: "var(--accent)", color: "#fff", boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--accent-mid)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "var(--accent)"}
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25"
              style={{ background: "var(--bg2)", color: "var(--text2)", border: "1px solid var(--border)", boxShadow: "0 0 20px rgba(0,0,0,0.1)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--border)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg2)";
              }}
            >
              Contato
            </a>

            <div className="flex gap-2 ml-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ padding: "9px 13px" }}
                title="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ padding: "9px 13px" }}
                title="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <a
        href="#habilidades"
        className="absolute bottom-6 right-8 hidden lg:flex items-center gap-2 text-xs"
        style={{ color: "var(--muted2)" }}
      >
        scroll <ArrowDown size={12} />
      </a>
    </section>
  );
}
