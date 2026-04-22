"use client";

export default function DiscordCTA({ discordLink = 'https://discord.gg/paragonn' }: { discordLink?: string }) {
  return (
    <section
      style={{
        padding: "80px 24px",
        background: "linear-gradient(rgba(12, 11, 15, 0.8), rgba(19, 17, 26, 1))",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow Effect */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "300px",
          background: "rgba(88, 101, 242, 0.15)",
          filter: "blur(100px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
        <h2 
           className="section-title" 
           style={{ marginBottom: 16, fontSize: "clamp(24px, 4vw, 36px)" }}
        >
          Faça parte da nossa <span style={{ color: "#5865F2" }}>Comunidade</span>
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: 32, fontSize: 16 }}>
          Junte-se a milhares de jogadores no nosso Discord. Participe de eventos, tire dúvidas e faça novas amizades.
        </p>
        <a
          href={discordLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-discord-3d"
          style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            background: "#5865F2", 
            border: "none", 
            color: '#fff',
            fontWeight: 700,
            padding: '16px 32px',
            borderRadius: 12,
            textDecoration: 'none',
            boxShadow: "0 4px 0px #4752c4",
            transition: 'all 0.2s ease',
            position: 'relative'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 8 }}>
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.07.11 18.083.12 18.09a19.904 19.904 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
          </svg>
          Entrar no Servidor do Discord
        </a>
      </div>

      <style>{`
          .btn-discord-3d:hover {
              transform: translateY(-2px);
              box-shadow: 0 6px 0px #4752c4 !important;
              filter: brightness(1.1);
          }
          .btn-discord-3d:active {
              transform: translateY(2px);
              box-shadow: 0 2px 0px #4752c4 !important;
          }
      `}</style>
    </section>
  );
}
