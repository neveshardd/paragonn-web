"use client";

import Link from "next/link";

type Post = {
  id: number;
  titulo: string;
  autor: string;
  dataHorario: string;
  descricao: string;
  imagem: string | null;
  publicado: boolean;
};

function fmt(d: string) {
  return new Date(d).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "160px 24px 80px" }}>
      {/* Page Header */}
      <div style={{ marginBottom: 80, textAlign: 'center' }}>
        <h1 
          className="section-title" 
          style={{ fontSize: "clamp(36px, 6vw, 56px)", marginBottom: 20 }}
        >
          Blog & <span className="text-gold">Notícias</span>
        </h1>
        <p style={{ color: "var(--muted)", maxWidth: 600, fontSize: 16, lineHeight: 1.7, margin: '0 auto' }}>
          Fique por dentro de cada detalhe, atualização e segredo do universo Paragonn.
        </p>
        <div className="gold-line" style={{ width: 60, margin: "32px auto 0" }} />
      </div>

      {posts.length === 0 ? (
        <div style={{ 
            textAlign: 'center', 
            padding: '120px 0', 
            color: 'var(--muted)', 
            border: '1px dashed var(--border)', 
            borderRadius: 24,
            background: 'rgba(255,255,255,0.01)'
        }}>
          Nenhuma notícia encontrada no momento.
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 40 }}>
          {posts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <article 
                className="card blog-card-hover"
                style={{
                  position: 'relative',
                  padding: '48px',
                  background: 'linear-gradient(135deg, var(--surface) 0%, #15131f 100%)',
                  borderTop: '2px solid var(--gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                  transition: 'all 0.3s ease'
                }}
              >
                  {/* Badge */}
                  <div>
                      <span style={{ 
                          fontSize: 11, 
                          fontWeight: 800, 
                          textTransform: 'uppercase', 
                          color: 'var(--gold)', 
                          background: 'rgba(245,166,35,0.1)',
                          padding: '6px 14px',
                          borderRadius: 100,
                          border: '1px solid rgba(245,166,35,0.2)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6
                      }}>
                          <span style={{ color: 'var(--gold)' }}>✦</span> Destaque
                      </span>
                  </div>

                  <h2 style={{ 
                      fontSize: 'clamp(22px, 4vw, 32px)', 
                      fontWeight: 800, 
                      color: '#fff', 
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em'
                  }}>
                    {post.titulo}
                  </h2>

                  <p style={{ 
                      color: 'var(--muted)', 
                      fontSize: 16, 
                      lineHeight: 1.6, 
                      marginBottom: 20,
                      maxWidth: '80%'
                  }}>
                    {post.descricao || "Confira os detalhes dessa atualização incrível no servidor."}
                  </p>

                  <div style={{ 
                      marginTop: 'auto', 
                      paddingTop: 32, 
                      borderTop: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                  }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{ 
                              width: 40, 
                              height: 40, 
                              borderRadius: '50%', 
                              background: 'var(--gold)', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              color: '#000',
                              fontWeight: 800,
                              fontSize: 14
                          }}>
                              {post.autor.charAt(0).toUpperCase()}
                          </div>
                          <div>
                              <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{post.autor}</div>
                              <div style={{ fontSize: 13, color: 'var(--muted)' }}>{fmt(post.dataHorario)}</div>
                          </div>
                      </div>

                      <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 12, 
                          color: 'var(--gold)', 
                          fontWeight: 700, 
                          fontSize: 15,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                      }}>
                          Ler Artigo
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M5 12h14m-7-7 7 7-7 7" />
                          </svg>
                      </div>
                  </div>
              </article>
            </Link>
          ))}
        </div>
      )}

      <style>{`
          .blog-card-hover:hover {
              transform: translateY(-8px);
              border-top-color: #fff;
              box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          }
          .blog-card-hover:hover h2 {
              color: var(--gold);
          }
      `}</style>
    </div>
  );
}
