import Link from "next/link";

const pillars = [
  {
    icon: "I",
    title: "Infrastructure",
    text: "Serveurs Linux/Windows, conteneurs, Kubernetes, hyperviseurs et stockage dans une seule console."
  },
  {
    icon: "D",
    title: "Data Operations",
    text: "Exploration SQL, sessions, schémas, backups, permissions et recommandations DBA assistées par IA."
  },
  {
    icon: "S",
    title: "Security & SOC",
    text: "SIEM, vulnérabilités, audit, corrélation d’incidents et workflows SOAR auto-hébergés."
  },
  {
    icon: "A",
    title: "AI Copilot",
    text: "Agents spécialisés pour DevOps, DBA, Linux, Kubernetes, réseau, sécurité et documentation."
  },
  {
    icon: "O",
    title: "Observability",
    text: "Métriques, logs, traces, SLO, alertes et topologies interactives pour les équipes SRE."
  },
  {
    icon: "P",
    title: "Plugins",
    text: "Marketplace privée pour ajouter modules Oracle, VMware, Proxmox, cloud, SOC et automation."
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <div className="shell">
        <header className="topbar">
          <Link className="brand" href="/">
            <span className="brand-mark">N</span>
            <span>NIMBUS</span>
          </Link>
          <nav className="nav-links" aria-label="Navigation principale">
            <a href="#platform">Plateforme</a>
            <a href="#modules">Modules</a>
            <a href="#offline">Offline</a>
          </nav>
          <Link className="button primary" href="/login">
            Accéder à la console
          </Link>
        </header>

        <section className="hero">
          <div>
            <span className="eyebrow">Enterprise Infrastructure OS autonome</span>
            <h1>Une console unique pour piloter toute ton infrastructure.</h1>
            <p>
              NIMBUS réunit supervision, sécurité, DevOps, bases de données, cloud,
              automatisation et IA auto-hébergée dans une plateforme pensée pour les
              environnements on-premise et déconnectés d’Internet.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/login">
                Démarrer
              </Link>
              <Link className="button" href="/dashboard">
                Voir le dashboard
              </Link>
            </div>
          </div>

          <aside className="glass-card command-center" aria-label="Aperçu supervision">
            <div className="window-bar">
              <div className="dots">
                <span />
                <span />
                <span />
              </div>
              <span>nimbus://command-center</span>
            </div>
            <div className="metrics-grid">
              <div className="metric-card">
                <span className="status">Plateforme saine</span>
                <div className="metric-value">99.98%</div>
                <div className="metric-label">SLO global</div>
              </div>
              <div className="metric-card">
                <span className="status">Agents actifs</span>
                <div className="metric-value">248</div>
                <div className="metric-label">Linux, Windows, Kubernetes</div>
              </div>
              <div className="metric-card">
                <span className="badge warning">3 incidents</span>
                <div className="metric-value">18m</div>
                <div className="metric-label">MTTR estimé par l’IA</div>
              </div>
              <div className="metric-card">
                <span className="badge">Offline ready</span>
                <div className="metric-value">0</div>
                <div className="metric-label">Dépendance Internet en runtime</div>
              </div>
            </div>
          </aside>
        </section>

        <section id="platform" className="section">
          <div className="section-header">
            <div>
              <span className="eyebrow">Vision produit</span>
              <h2>Inspiré des meilleures consoles enterprise.</h2>
            </div>
          </div>
          <div className="cards-grid">
            {pillars.map((pillar) => (
              <article className="module-card" key={pillar.title}>
                <span className="icon-pill">{pillar.icon}</span>
                <h3>{pillar.title}</h3>
                <p className="card-muted">{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="offline" className="section">
          <div className="glass-card module-card">
            <span className="eyebrow">Contrainte clé</span>
            <h2>Internet seulement à l’installation.</h2>
            <p className="card-muted">
              L’architecture prévoit des images Docker préchargées, un registre privé,
              des modèles IA locaux, une documentation embarquée et aucune dépendance
              SaaS obligatoire après déploiement.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
