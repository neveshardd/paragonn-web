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
        <div style={{ display: 'grid', gap: 48 }}>
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
                  display: 'grid',
                  gridTemplateColumns: 'minmax(280px, 0.95fr) minmax(0, 1.15fr)',
                  alignItems: 'stretch',
                  transition: 'all 0.3s ease',
                  borderRadius: 24,
                  overflow: 'hidden',
                }}
              >
                <Cover src={post.imagem} alt={post.titulo} />

                <div
                  style={{
                    padding: '44px 48px 48px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    minWidth: 0,
                  }}
                >
                  <div>
                      <span style={{ 
                          fontSize: 11, 
                          fontWeight: 800, 
                          textTransform: 'uppercase', 
                          color: 'var(--gold)', 
                          background: 'rgba(245,166,35,0.1)',
                          padding: '8px 16px',
                          borderRadius: 100,
                          border: '1px solid rgba(245,166,35,0.2)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          letterSpacing: '0.06em',
                      }}>
                          <span style={{ color: 'var(--gold)' }}>✦</span> Paragonn
                      </span>
                  </div>

                  <h2 style={{ 
                      fontSize: 'clamp(26px, 4vw, 40px)', 
                      fontWeight: 800, 
                      color: '#fff', 
                      lineHeight: 1.15,
                      letterSpacing: '-0.02em',
                      margin: 0,
                  }}>
                    {post.titulo}
                  </h2>

                  <p style={{ 
                      color: 'var(--muted)', 
                      fontSize: 17, 
                      lineHeight: 1.65, 
                      margin: 0,
                      flex: 1,
                      maxWidth: '100%',
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                  }}>
                    {post.descricao || "Confira os detalhes dessa atualização incrível no servidor."}
                  </p>

                  <div style={{ 
                      marginTop: 8, 
                      paddingTop: 32, 
                      borderTop: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 16,
                  }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <div style={{ 
                              width: 48, 
                              height: 48, 
                              borderRadius: '50%', 
                              background: 'var(--gold)', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              color: '#000',
                              fontWeight: 800,
                              fontSize: 16
                          }}>
                              {post.autor.charAt(0).toUpperCase()}
                          </div>
                          <div>
                              <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{post.autor}</div>
                              <div style={{ fontSize: 14, color: 'var(--muted)' }}>{fmt(post.dataHorario)}</div>
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
                          letterSpacing: '0.06em'
                      }}>
                          Ler Artigo
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M5 12h14m-7-7 7 7-7 7" />
                          </svg>
                      </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}

      <style>{`
          @media (max-width: 900px) {
            .blog-card-hover {
              grid-template-columns: 1fr !important;
            }
            .blog-list-cover {
              min-height: 240px !important;
              max-height: 320px;
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
      `}</style>
    </div>
  );
}
