import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link {
          font-size: 13px;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: var(--text); }
        .footer-link.discord:hover { color: #5865F2; }
      `}</style>

      <footer
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--border)",
          padding: "48px 24px 32px",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 40,
              marginBottom: 48,
            }}
          >
            {/* Brand */}
            <div>
              <Image
                src="/logo.png"
                alt="Paragonn"
                width={140}
                height={50}
                style={{ height: 36, width: "auto", objectFit: "contain", marginBottom: 14 }}
              />
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, maxWidth: 240 }}>
                O melhor servidor de Minecraft do Brasil. Aventura épica, comunidade incrível.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--muted)",
                  marginBottom: 16,
                }}
              >
                Navegar
              </h4>
              <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { href: "/", label: "Início" },
                  { href: "/blog", label: "Blog" },
                  { href: "/equipe", label: "Equipe" },
                  { href: process.env.NEXT_PUBLIC_STORE_URL ?? "#", label: "Loja" },
                ].map((l) => {
                  const isExternal = l.href.startsWith("http");
                  return isExternal ? (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="footer-link">
                      {l.label}
                    </a>
                  ) : (
                    <Link key={l.href} href={l.href} className="footer-link">
                      {l.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Comunidade */}
            <div>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--muted)",
                  marginBottom: 16,
                }}
              >
                Comunidade
              </h4>
              <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a
                  href="https://discord.gg/paragonn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link discord"
                  style={{ display: "flex", alignItems: "center", gap: 6 }}
                >
                  <DiscordIcon />
                  Discord
                </a>
              </nav>
            </div>

            {/* IP do servidor */}
            <div>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--muted)",
                  marginBottom: 16,
                }}
              >
                Conectar
              </h4>
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "12px 16px",
                }}
              >
                <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 4 }}>
                  IP do Servidor
                </div>
                <div
                  style={{
                    fontFamily: "ui-monospace, monospace",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--gold)",
                  }}
                >
                  play.paragonn.com.br
                </div>
                <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 4 }}>
                  Versão: 1.8 — 1.21
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid var(--border)",
              paddingTop: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
              © {new Date().getFullYear()} Paragonn. Todos os direitos reservados.
            </div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
              Não associado à Mojang Studios.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function DiscordIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.07.11 18.083.12 18.09a19.904 19.904 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}
