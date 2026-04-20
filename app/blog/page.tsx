import BlogList from "../components/BlogList";

const WEBPANEL = process.env.NEXT_PUBLIC_DASH_URL ?? "http://localhost:5173";

async function getPosts() {
  try {
    const res = await fetch(`${WEBPANEL}/api/blog`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main style={{ minHeight: '90vh' }}>
      <BlogList posts={posts} />
    </main>
  );
}
