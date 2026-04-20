"use client";

type Membro = {
  id: number;
  nick: string;
  cargo: string;
};

const CARGO_COLORS: Record<string, string> = {
  dono: "#f5a623",
  owner: "#f5a623",
  admin: "#e74c3c",
  administrador: "#e74c3c",
  moderador: "#9b59b6",
  mod: "#9b59b6",
  helper: "#3498db",
  suporte: "#3498db",
  builder: "#2ecc71",
};

function getCargoColor(cargo: string) {
  const key = cargo.toLowerCase();
  for (const [match, color] of Object.entries(CARGO_COLORS)) {
    if (key.includes(match)) return color;
  }
  return "var(--muted)";
}

function getInitials(nick: string) {
  return nick.slice(0, 2).toUpperCase();
}

export default function EquipeSection({ membros }: { membros: Membro[] }) {
  return (
    <section
      id="equipe"
      style={{
        padding: "96px 24px",
        position: "relative",
        background: "var(--bg-2)",
      }}
    >
      {/* Top border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(245,166,35,0.35), transparent)",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Head */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label">Staff</div>
          <h2 className="section-title">Nossa Equipe</h2>
          <div className="gold-line" style={{ margin: "16px auto" }} />
          <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>
            Conheça as pessoas dedicadas que trabalham para tornar o Paragonn incrível.
          </p>
        </div>

        {membros.length === 0 ? (
          <EmptyState message="Nenhum membro da equipe cadastrado." />
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 20,
            }}
          >
            {membros.map((m) => (
              <MemberCard key={m.id} membro={m} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function MemberCard({ membro }: { membro: Membro }) {
  const color = getCargoColor(membro.cargo);

  return (
    <div className="card" style={{ padding: "28px 20px", textAlign: "center" }}>
      {/* Avatar */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${color}33, ${color}99)`,
          border: `2px solid ${color}55`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 14px",
          fontSize: 20,
          fontWeight: 800,
          color: color,
          fontFamily: "var(--font-display)",
        }}
      >
        {getInitials(membro.nick)}
      </div>

      {/* Nick */}
      <div
        style={{
          fontSize: 15,
          fontWeight: 700,
          color: "#fff",
          marginBottom: 6,
          fontFamily: "ui-monospace, monospace",
        }}
      >
        {membro.nick}
      </div>

      {/* Cargo badge */}
      <div
        style={{
          display: "inline-block",
          padding: "3px 12px",
          borderRadius: 20,
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: color,
          background: `${color}18`,
          border: `1px solid ${color}35`,
        }}
      >
        {membro.cargo}
      </div>

      {/* Minecraft skin via crafatar */}
      <div style={{ marginTop: 14 }}>
        <img
          src={`https://crafatar.com/avatars/${membro.nick}?size=36&overlay`}
          alt={`${membro.nick}`}
          width={36}
          height={36}
          style={{ borderRadius: 6, opacity: 0.85 }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 24px",
        color: "var(--muted)",
        fontSize: 15,
        border: "1px dashed var(--border)",
        borderRadius: 14,
      }}
    >
      {message}
    </div>
  );
}
