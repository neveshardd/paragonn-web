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
    year: "numeric"
  });
}

function Cover({ src, alt }: { src: string | null; alt: string }) {
  if (src) {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          minHeight: 280,
          maxHeight: 420,
          background: "linear-gradient(45deg, #1a1726, #2a2540)",
          overflow: "hidden"
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16 / 9",
        minHeight: 280,
        maxHeight: 360,
        background: "linear-gradient(135deg, #1a1726 0%, #2a2540 50%, #1a1528 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 72,
        opacity: 0.35
      }}
      aria-hidden
    >
      🛡️
    </div>
  );
}

export default function BlogSection({ posts }: { posts: Post[] }) {
  return (
    <section id="blog" style={{ padding: "120px 24px", background: "var(--bg)", position: "relative" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div className="section-label">Fique por dentro</div>
          <h2 className="section-title">Blog & <span className="text-gold">Novidades</span></h2>
          <div className="gold-line" style={{ margin: "24px auto" }} />
        </div>

        {posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', color: 'var(--muted)', border: '1px dashed var(--border)', borderRadius: 16 }}>
            Nenhuma notícia recente.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 520px), 1fr))",
              gap: 40
            }}
          >
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} featured={i === 0} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function PostCard({ post, featured }: { post: Post; featured: boolean }) {
  return (
    <Link href={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
        <article className="card blog-card-home" style={{ 
            display: "flex", 
            flexDirection: "column",
            height: '100%',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            borderTop: featured ? '4px solid var(--gold)' : '1px solid var(--border)',
            borderRadius: 20
        }}>
          <Cover src={post.imagem} alt={post.titulo} />
          <div style={{ padding: "36px 40px", flex: 1, display: 'flex', flexDirection: 'column' }}>
            {featured && (
              <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16, display: 'block', letterSpacing: '0.08em' }}>
                ✦ Mais Recente
              </span>
            )}
            
            <h3 style={{ fontSize: 'clamp(22px, 2.4vw, 28px)', fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.25 }}>
              {post.titulo}
            </h3>

            <p style={{ 
                fontSize: 16, 
                color: "var(--muted)", 
                lineHeight: 1.65, 
                marginBottom: 28, 
                flex: 1,
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
            }}>
              {post.descricao || "Confira os detalhes dessa novidade incrível no Paragonn."}
            </p>

            <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between",
                paddingTop: 28,
                borderTop: '1px solid var(--border)'
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ 
                    width: 44, height: 44, borderRadius: '50%', background: 'var(--surface)', 
                    border: '1px solid var(--gold)', color: 'var(--gold)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700
                }}>
                  {post.autor.charAt(0).toUpperCase()}
                </div>
                <div>
                   <div style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>{post.autor}</div>
                   <div style={{ fontSize: 13, color: "var(--muted)" }}>{fmt(post.dataHorario)}</div>
                </div>
              </div>
              
              <div style={{ color: 'var(--gold)', fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
                  LER <span style={{ fontSize: 18 }}>›</span>
              </div>
            </div>
          </div>
        </article>

        <style>{`
            .blog-card-home:hover {
                transform: translateY(-8px);
                box-shadow: 0 16px 48px rgba(0,0,0,0.45);
                border-color: var(--gold);
            }
            .blog-card-home:hover h3 { color: var(--gold); }
        `}</style>
    </Link>
  );
}
