"use client";

import Link from "next/link";



export default function Hero({ discordLink = '', serverIP = 'play.paragonn.com.br' }: { discordLink?: string; serverIP?: string }) {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* ... (Background elements) */}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "160px 24px 80px",
          textAlign: "center",
        }}
      >
        {/* ... (Tagline) */}

        {/* IP Box */}
        <div
          className="fade-up-delay-1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            padding: "10px 20px",
            marginBottom: 36,
            fontSize: 15,
            fontFamily: "ui-monospace, monospace",
            color: "var(--text)",
            animation: "borderGlow 3s ease-in-out infinite",
          }}
        >
          <span style={{ color: "var(--muted)", fontSize: 12, fontFamily: "var(--font-body)" }}>IP</span>
          <span style={{ fontWeight: 700 }}>{serverIP}</span>
          <CopyIPButton ip={serverIP} />
        </div>

        {/* CTAs */}
        <div
          className="fade-up-delay-2"
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={process.env.NEXT_PUBLIC_STORE_URL ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '14px 32px' }}
          >
            <CartIcon />
            Acessar Loja
          </a>
          <Link href="/blog" className="btn-outline">
            Ver Novidades
            <ArrowIcon />
          </Link>
        </div>

        {/* Stats strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(24px, 5vw, 64px)",
            marginTop: 80,
            flexWrap: "wrap",
          }}
        >
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                className="text-gold"
                style={{
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 6, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: "linear-gradient(transparent, var(--bg))",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}

const STATS = [
  { value: "50K+", label: "Jogadores" },
  { value: "99.9%", label: "Uptime" },
  { value: "10+", label: "Modalidades" },
  { value: "24/7", label: "Suporte" },
];

function CopyIPButton({ ip }: { ip: string }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(ip)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--muted)",
        padding: 4,
        display: "flex",
        alignItems: "center",
        transition: "color 0.2s",
      }}
      title="Copiar IP"
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    </button>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 8 }}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
