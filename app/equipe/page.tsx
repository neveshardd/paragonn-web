import TeamList from "../components/TeamList";

const WEBPANEL = process.env.WEBPANEL_URL ?? "http://localhost:5173";

async function getEquipe() {
  try {
    const url = `${WEBPANEL}/api/equipe`;
    console.log(`[Equipe] Buscando dados de: ${url}`);
    const res = await fetch(url, {
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      console.error(`[Equipe] Erro na API: ${res.status} ${res.statusText}`);
      return [];
    }

    const data = await res.json();
    console.log(`[Equipe] Sucesso! ${data.length} membros encontrados.`);
    return data;
  } catch (err) {
    console.error("[Equipe] Erro de conexão:", err);
    return [];
  }
}

export default async function EquipePage() {
  const membros = await getEquipe();

  return (
    <main style={{ minHeight: '90vh' }}>
      <TeamList membros={membros} />
    </main>
  );
}
