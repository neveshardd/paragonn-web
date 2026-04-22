import Hero from "./components/Hero";
import BlogSection from "./components/BlogSection";
import DiscordCTA from "./components/DiscordCTA";

const WEBPANEL = process.env.NEXT_PUBLIC_DASH_URL ?? "http://localhost:5173";

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

async function getDiscordLink() {
  try {
    const res = await fetch(`${WEBPANEL}/api/configuracoes`, { cache: 'no-store' });
    if (!res.ok) return { discord_link: 'https://discord.gg/paragonn', server_ip: 'play.paragonn.com.br' };
    const configs = await res.json();
    return {
      discord_link: configs.discord_link || 'https://discord.gg/paragonn',
      server_ip: configs.server_ip || 'play.paragonn.com.br'
    };
  } catch (err) {
    console.error('Erro ao buscar configurações do Painel:', err);
    return { discord_link: 'https://discord.gg/paragonn', server_ip: 'play.paragonn.com.br' };
  }
}

export default async function Home() {
  const [posts, configs] = await Promise.all([
    getRecentPosts(),
    getDiscordLink()
  ]);

  return (
    <main>
      <Hero discordLink={configs.discord_link} serverIP={configs.server_ip} />
      <BlogSection posts={posts} />
      <DiscordCTA discordLink={configs.discord_link} />
    </main>
  );
}
