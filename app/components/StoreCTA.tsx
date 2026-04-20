"use client";

export default function StoreCTA() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "linear-gradient(rgba(12, 11, 15, 0.9), rgba(26, 23, 38, 1))",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dynamic Background elements */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(245, 166, 35, 0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
        <div 
            style={{ 
                display: 'inline-block', 
                padding: '6px 16px', 
                borderRadius: '30px', 
                background: 'rgba(245, 166, 35, 0.1)', 
                border: '1px solid var(--gold-2)',
                color: 'var(--gold)',
                fontSize: 12,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 24,
                animation: 'pulse 2s infinite'
            }}
        >
            ✦ Ofertas Especiais Ativas
        </div>
        
        <h2 
           className="section-title" 
           style={{ marginBottom: 16, fontSize: "clamp(28px, 5vw, 42px)" }}
        >
          Eleve sua jornada na nossa <span className="text-gold">Loja Vip</span>
        </h2>
        
        <p style={{ color: "var(--muted)", marginBottom: 40, fontSize: 18, lineHeight: 1.6 }}>
          Adquira ranks exclusivos, chaves épicas e cosméticos únicos. Apoie o servidor e destaque-se na comunidade com benefícios premium.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={process.env.NEXT_PUBLIC_STORE_URL ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ 
                  padding: '16px 40px', 
                  fontSize: 16, 
                  background: 'var(--gold-linear)',
                  boxShadow: '0 10px 30px rgba(245, 166, 35, 0.3)'
              }}
            >
              <CartIcon />
              Acessar Loja Oficial
            </a>
        </div>

        <p style={{ marginTop: 24, fontSize: 13, color: 'var(--muted)' }}>
            Pagamento seguro via Mercado Pago, Pix e Boleto.
        </p>
      </div>

      <style>{`
        @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}

function CartIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 8 }}>
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
    );
}
