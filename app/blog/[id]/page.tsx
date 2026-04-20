import Link from "next/link";
import { notFound } from "next/navigation";

const WEBPANEL = process.env.WEBPANEL_URL ?? "http://localhost:5173";

async function getPost(id: string) {
  try {
    const res = await fetch(`${WEBPANEL}/api/blog/${id}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  const dataFmt = new Date(post.dataHorario).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <main style={{ minHeight: '100vh', padding: '160px 24px 100px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {/* Voltar */}
          <Link href="/blog" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: 8, 
              color: 'var(--muted)', 
              textDecoration: 'none', 
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 40,
              transition: 'color 0.2s'
          }} className="back-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m15 18-6-6 6-6" />
              </svg>
              Voltar para as Notícias
          </Link>

          <article>
              {/* Cabeçalho do Post */}
              <header style={{ marginBottom: 48 }}>
                  <div style={{ marginBottom: 16 }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                          Postado por {post.autor}
                      </span>
                  </div>
                  <h1 style={{ 
                      fontSize: 'clamp(32px, 5vw, 48px)', 
                      fontWeight: 900, 
                      color: '#fff', 
                      lineHeight: 1.1,
                      marginBottom: 24,
                      letterSpacing: '-0.03em'
                  }}>
                      {post.titulo}
                  </h1>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--muted)', fontSize: 15 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                      </svg>
                      {dataFmt}
                  </div>
              </header>

              {/* Banner / Imagem */}
              <div style={{ 
                  width: '100%', 
                  height: 400, 
                  background: 'linear-gradient(45deg, #1a1726, #2a2540)', 
                  borderRadius: 32,
                  marginBottom: 64,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  fontSize: 64,
                  opacity: 0.8
              }}>
                  🛡️
              </div>

              {/* Conteúdo */}
              <div className="post-content" style={{ 
                  color: '#e0e0e0', 
                  fontSize: 18, 
                  lineHeight: 1.8, 
                  whiteSpace: 'pre-wrap',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                  {post.descricao}
              </div>

              {/* Footer do Artigo */}
              <footer style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--border)', textAlign: 'center' }}>
                  <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 24 }}>
                      Gostou dessa novidade? Comente lá no nosso Discord!
                  </p>
                  <Link href="https://discord.gg/paragonn" target="_blank" className="btn-primary" style={{ display: 'inline-flex', padding: '14px 40px' }}>
                      ENTRAR NO DISCORD
                  </Link>
              </footer>
          </article>
      </div>

      <style>{`
          .back-link:hover { color: var(--gold) !important; }
          .post-content p { margin-bottom: 24px; }
      `}</style>
    </main>
  );
}
