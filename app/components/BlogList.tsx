"use client";

import type { CSSProperties } from "react";
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

function Cover({ src, alt }: { src: string | null; alt: string }) {
  const shell: CSSProperties = {
    position: "relative",
    minHeight: 280,
    height: "100%",
    minWidth: 0,
    background: "#111",
    borderRadius: 16,
    overflow: "hidden",
    border: "1px solid var(--border)",
  };
  if (src) {
    return (
      <div className="blog-list-cover" style={shell}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 280 }}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }
  return (
    <div
      className="blog-list-cover blog-list-cover--placeholder"
      style={{
        ...shell,
        background: "linear-gradient(135deg, #1a1726 0%, #2a2540 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 80,
        opacity: 0.4,
      }}
      aria-hidden
    >
      🛡️
    </div>
  );
}

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "160px 24px 100px" }}>
      <div style={{ marginBottom: 88, textAlign: 'center' }}>
        <h1 
          className="section-title" 
          style={{ fontSize: "clamp(40px, 6vw, 64px)", marginBottom: 24 }}
        >
          Blog & <span className="text-gold">Notícias</span>
        </h1>
        <p style={{ color: "var(--muted)", maxWidth: 640, fontSize: 18, lineHeight: 1.75, margin: '0 auto' }}>
          Fique por dentro de cada detalhe, atualização e segredo do universo Paragonn.
        </p>
        <div className="gold-line" style={{ width: 72, margin: "36px auto 0" }} />
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
        <div className="blog-grid">
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
                  padding: 0,
                  background: 'linear-gradient(135deg, var(--surface) 0%, #15131f 100%)',
                  borderTop: '3px solid var(--gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  borderRadius: 24,
                  overflow: 'hidden',
                  height: '100%',
                }}
              >
                <div style={{ width: '100%', aspectRatio: '16/10' }}>
                   <Cover src={post.imagem} alt={post.titulo} />
                </div>

                <div
                  style={{
                    padding: '32px 32px 40px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    flex: 1,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ 
                          fontSize: 10, 
                          fontWeight: 800, 
                          textTransform: 'uppercase', 
                          color: 'var(--gold)', 
                          background: 'rgba(245,166,35,0.1)',
                          padding: '6px 12px',
                          borderRadius: 100,
                          border: '1px solid rgba(245,166,35,0.2)',
                          letterSpacing: '0.06em',
                      }}>
                          ✦ Notícia
                      </span>
                      <span style={{ fontSize: 13, color: 'var(--muted)' }}>{fmt(post.dataHorario)}</span>
                  </div>

                  <h2 style={{ 
                      fontSize: 24, 
                      fontWeight: 800, 
                      color: '#fff', 
                      lineHeight: 1.25,
                      letterSpacing: '-0.01em',
                      margin: 0,
                  }}>
                    {post.titulo}
                  </h2>

                  <p style={{ 
                      color: 'var(--muted)', 
                      fontSize: 15, 
                      lineHeight: 1.6, 
                      margin: 0,
                      flex: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                  }}>
                    {post.descricao || "Confira os detalhes dessa atualização incrível no servidor."}
                  </p>

                  <div style={{ 
                      marginTop: 16, 
                      paddingTop: 24, 
                      borderTop: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                  }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ 
                              width: 32, 
                              height: 32, 
                              borderRadius: '50%', 
                              background: 'var(--gold)', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              color: '#000',
                              fontWeight: 800,
                              fontSize: 12
                          }}>
                              {post.autor.charAt(0).toUpperCase()}
                          </div>
                          <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{post.autor}</div>
                      </div>

                      <div className="read-more-link">
                          LER ARTIGO
                          <span>→</span>
                      </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}

      <style>{`
          .blog-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 32px;
          }
          @media (max-width: 1200px) {
              .blog-grid {
                  grid-template-columns: repeat(2, 1fr);
              }
          }
          @media (max-width: 768px) {
              .blog-grid {
                  grid-template-columns: 1fr;
              }
          }
          .blog-card-hover:hover {
              transform: translateY(-8px);
              border-top-color: #fff;
              box-shadow: 0 24px 56px rgba(0,0,0,0.45);
          }
          .blog-card-hover:hover h2 {
              color: var(--gold);
          }
          .read-more-link {
              display: flex;
              align-items: center;
              gap: 8px;
              color: var(--gold);
              font-weight: 700;
              font-size: 13px;
              letter-spacing: 0.05em;
          }
          .blog-card-hover:hover .read-more-link span {
              transform: translateX(4px);
          }
          .read-more-link span {
              transition: transform 0.2s ease;
              font-size: 18px;
          }
      `}</style>
    </div>
  );
}
