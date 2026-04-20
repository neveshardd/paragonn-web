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

export default function BlogSection({ posts }: { posts: Post[] }) {
  return (
    <section id="blog" style={{ padding: "120px 24px", background: "var(--bg)", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label">Fique por dentro</div>
          <h2 className="section-title">Blog & <span className="text-gold">Novidades</span></h2>
          <div className="gold-line" style={{ margin: "24px auto" }} />
        </div>

        {posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', color: 'var(--muted)', border: '1px dashed var(--border)', borderRadius: 16 }}>
            Nenhuma notícia recente.
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: 32 }}>
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
            borderTop: featured ? '4px solid var(--gold)' : '1px solid var(--border)'
        }}>
          <div style={{ padding: 32, flex: 1, display: 'flex', flexDirection: 'column' }}>
            {featured && (
              <span style={{ fontSize: 10, fontWeight: 800, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16, display: 'block' }}>
                ✦ Mais Recente
              </span>
            )}
            
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, lineHeight: 1.4 }}>
              {post.titulo}
            </h3>

            <p style={{ 
                fontSize: 14, 
                color: "var(--muted)", 
                lineHeight: 1.6, 
                marginBottom: 24, 
                flex: 1,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
            }}>
              {post.descricao || "Confira os detalhes dessa novidade incrível no Paragonn."}
            </p>

            <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between",
                paddingTop: 24,
                borderTop: '1px solid var(--border)'
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ 
                    width: 32, height: 32, borderRadius: '50%', background: 'var(--surface)', 
                    border: '1px solid var(--gold)', color: 'var(--gold)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700
                }}>
                  {post.autor.charAt(0).toUpperCase()}
                </div>
                <div>
                   <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{post.autor}</div>
                   <div style={{ fontSize: 11, color: "var(--muted)" }}>{fmt(post.dataHorario)}</div>
                </div>
              </div>
              
              <div style={{ color: 'var(--gold)', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
                  LER <span style={{ fontSize: 16 }}>›</span>
              </div>
            </div>
          </div>
        </article>

        <style>{`
            .blog-card-home:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 32px rgba(0,0,0,0.4);
                border-color: var(--gold);
            }
            .blog-card-home:hover h3 { color: var(--gold); }
        `}</style>
    </Link>
  );
}
