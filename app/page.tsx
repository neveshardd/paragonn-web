import Hero from "./components/Hero";
import BlogSection from "./components/BlogSection";
import DiscordCTA from "./components/DiscordCTA";

const WEBPANEL = process.env.WEBPANEL_URL ?? "http://localhost:5173";

async function getRecentPosts() {
  try {
    const res = await fetch(`${WEBPANEL}/api/blog`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const posts = await res.json();
    return posts.slice(0, 3); // Apenas os 3 mais recentes para a Home
  } catch {
    return [];
  }
}

export default async function Home() {
  const posts = await getRecentPosts();

  return (
    <main>
      <Hero />
      <BlogSection posts={posts} />
      <DiscordCTA />
    </main>
  );
}
