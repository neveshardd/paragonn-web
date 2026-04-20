/* eslint-disable @next/next/no-img-element */
"use client";

type Membro = {
  id: number;
  nick: string;
  cargo: string;
};

const CARGO_CONFIG: Record<string, { color: string; label: string }> = {
  dono: { color: "#ff4d4d", label: "Dono" },
  owner: { color: "#ff4d4d", label: "Dono" },
  admin: { color: "#ff8c00", label: "Admin" },
  administrador: { color: "#ff8c00", label: "Administrador" },
  moderador: { color: "#9b59b6", label: "Moderador" },
  mod: { color: "#9b59b6", label: "Moderador" },
  helper: { color: "#3498db", label: "Ajudante" },
  suporte: { color: "#3498db", label: "Suporte" },
  builder: { color: "#2ecc71", label: "Construtor" },
};

function getCargoData(cargo: string) {
  const key = cargo.toLowerCase();
  for (const [match, data] of Object.entries(CARGO_CONFIG)) {
    if (key.includes(match)) return data;
  }
  return { color: "#bdc3c7", label: cargo };
}

export default function TeamList({ membros }: { membros: Membro[] }) {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "160px 24px 100px" }}>
      {/* Header Estilizado */}
      <div style={{ textAlign: "center", marginBottom: 80 }}>
        <div style={{
          display: 'inline-block',
          padding: '8px 20px',
          borderRadius: '100px',
          background: 'rgba(245,166,35,0.05)',
          border: '1px solid rgba(245,166,35,0.2)',
          color: 'var(--gold)',
          fontSize: 12,
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          marginBottom: 24
        }}>
          OS GUARDIÕES
        </div>
        <h1 className="section-title" style={{ fontSize: "clamp(36px, 6vw, 56px)", marginBottom: 20 }}>
          Nosso <span className="text-gold">Conselho</span>
        </h1>
        <p style={{ color: "var(--muted)", maxWidth: 650, fontSize: 16, lineHeight: 1.8, margin: '0 auto' }}>
          Conheça os responsáveis por manter a ordem e a inovação constante no universo Paragonn.
        </p>
        <div className="gold-line" style={{ width: 60, margin: '32px auto 0' }} />
      </div>

      {membros.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '120px 24px',
          color: 'var(--muted)',
          border: '1px dashed var(--border)',
          borderRadius: 32,
          background: 'rgba(255,255,255,0.01)'
        }}>
          Nenhum membro da equipe convocado ainda.
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 32
        }}>
          {membros.map((m) => {
            const config = getCargoData(m.cargo);
            return (
              <div
                key={m.id}
                className="card staff-card"
                style={{
                  padding: "48px 32px",
                  textAlign: "center",
                  position: 'relative',
                  background: 'linear-gradient(180deg, rgba(26,23,38,1) 0%, rgba(15,13,22,1) 100%)',
                  borderTop: `3px solid ${config.color}`,
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
              >
                {/* Skin Face with Reflection */}
                <div style={{ position: 'relative', marginBottom: 32, display: 'inline-block' }}>
                  <div style={{
                    width: 110,
                    height: 110,
                    borderRadius: 24,
                    background: 'var(--bg-2)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    boxShadow: `0 12px 24px rgba(0,0,0,0.5), 0 0 40px ${config.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    transform: 'rotate(-2deg)'
                  }}>
                    <img
                      src={`https://mc-heads.net/avatar/${m.nick}/110`}
                      alt={m.nick}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  {/* Status dot */}
                  <div style={{
                    position: 'absolute',
                    top: -5,
                    right: -5,
                    width: 16,
                    height: 16,
                    background: config.color,
                    borderRadius: '50%',
                    border: '4px solid #1a1726',
                    animation: 'pulse 2s infinite'
                  }} />
                </div>

                <h3 style={{ fontSize: 24, fontWeight: 900, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                  {m.nick}
                </h3>

                <div style={{
                  display: 'inline-block',
                  padding: '6px 20px',
                  borderRadius: 100,
                  background: `${config.color}15`,
                  border: `1px solid ${config.color}25`,
                  color: config.color,
                  fontSize: 11,
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em'
                }}>
                  {config.label}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <style>{`
          .staff-card:hover {
              transform: translateY(-12px) scale(1.02);
              border-top-color: #fff;
              box-shadow: 0 32px 64px rgba(0,0,0,0.6);
          }
          @keyframes pulse {
              0% { box-shadow: 0 0 0 0 rgba(255,255,255, 0.4); }
              70% { box-shadow: 0 0 0 10px rgba(255,255,255, 0); }
              100% { box-shadow: 0 0 0 0 rgba(255,255,255, 0); }
          }
      `}</style>
    </div>
  );
}
