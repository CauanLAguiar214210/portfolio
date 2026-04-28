"use client";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import { useState } from "react";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-24" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label" style={{ textAlign: "center" }}>Contato</p>
            <h2 className="font-bold tracking-tight mb-3" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "var(--text)", letterSpacing: "-0.01em" }}>
              Vamos conversar?
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: "0.975rem" }}>
              Estou disponível para novas oportunidades. Respondo todas as mensagens em até 24h.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {/* Email row with copy */}
            <button
              onClick={copyEmail}
              className="card flex items-center justify-between gap-4 p-4 w-full text-left cursor-pointer"
              style={{ borderRadius: 12 }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px var(--accent-light)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#e4e4e7";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-mid)" }}>
                  <Mail size={16} style={{ color: "var(--accent)" }} />
                </div>
                <div className="text-left">
                  <p className="text-xs mb-0.5" style={{ color: "var(--muted2)" }}>E-mail</p>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{personalInfo.email}</p>
                </div>
              </div>
              <span style={{ color: copied ? "var(--green)" : "var(--muted2)" }}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </span>
            </button>

            {/* Phone */}
            <div className="card flex items-center gap-3 p-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-mid)" }}>
                <Phone size={16} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: "var(--muted2)" }}>Telefone</p>
                <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{personalInfo.phone}</p>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-3 p-4 transition-all"
              style={{ textDecoration: "none", borderRadius: 12 }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#0077b5";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px #e8f4f9";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg" style={{ background: "#e8f4f9", border: "1px solid #bae6fd" }}>
                <span style={{ color: "#0077b5" }}><LinkedinIcon /></span>
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: "var(--muted2)" }}>LinkedIn</p>
                <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{personalInfo.linkedinUser}</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-3 p-4 transition-all"
              style={{ textDecoration: "none", borderRadius: 12 }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#24292f";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px #f0f0f0";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg" style={{ background: "#f6f8fa", border: "1px solid #d0d7de" }}>
                <span style={{ color: "#24292f" }}><GithubIcon /></span>
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: "var(--muted2)" }}>GitHub</p>
                <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{personalInfo.githubUser}</p>
              </div>
            </a>

            {/* Location */}
            <div className="card flex items-center gap-3 p-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg" style={{ background: "#f4f4f5", border: "1px solid #e4e4e7" }}>
                <MapPin size={16} style={{ color: "#71717a" }} />
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: "#a1a1aa" }}>Localização</p>
                <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
