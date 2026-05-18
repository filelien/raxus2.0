const modules = [
  {
    id: "servers",
    title: "Gestion serveurs",
    category: "Infrastructure",
    description: "SSH, terminal web, services, fichiers, logs système, users/groups, cron et firewall.",
    status: "MVP"
  },
  {
    id: "databases",
    title: "Database Studio",
    category: "DBA",
    description: "Explorateur SQL type DBeaver/Toad, schémas, sessions, plans d’exécution et backups.",
    status: "À construire"
  },
  {
    id: "monitoring",
    title: "Observability Hub",
    category: "SRE",
    description: "Prometheus, Loki, Tempo, Grafana embarqué, SLO, alertes et topologies cliquables.",
    status: "À connecter"
  },
  {
    id: "security",
    title: "Security Operations",
    category: "SOC",
    description: "Wazuh, IDS/IPS, vulnérabilités, audit, threat hunting et remédiation SOAR.",
    status: "Planifié"
  },
  {
    id: "ai",
    title: "AI Command",
    category: "IA locale",
    description: "Ollama, RAG, agents spécialisés, analyse incidents, génération SQL et scripts.",
    status: "Planifié"
  },
  {
    id: "containers",
    title: "Docker & Kubernetes",
    category: "DevOps",
    description: "Images, registries, compose, pods, deployments, ingress, Helm et autoscaling.",
    status: "Planifié"
  },
  {
    id: "audit",
    title: "Audit & Compliance",
    category: "Gouvernance",
    description: "Journal immuable, actions utilisateurs, preuves, conformité et export offline.",
    status: "À construire"
  },
  {
    id: "plugins",
    title: "Marketplace privée",
    category: "Extensibilité",
    description: "Modules internes installables sans Internet pour Oracle, VMware, Proxmox, cloud et SOC.",
    status: "À concevoir"
  }
];

export default function ModulesPage() {
  return (
    <>
      <header className="dashboard-header">
        <div className="dashboard-title">
          <span className="eyebrow">Portail des interfaces</span>
          <h1>Choisis ton domaine d’intervention</h1>
          <p>
            Chaque carte deviendra une entrée vers une console spécialisée avec ses
            propres permissions, workflows et agents IA.
          </p>
        </div>
        <button className="button">Installer un plugin</button>
      </header>

      <section className="cards-grid">
        {modules.map((module) => (
          <article className="module-card" id={module.id} key={module.id}>
            <span className="badge">{module.category}</span>
            <h3>{module.title}</h3>
            <p className="card-muted">{module.description}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                alignItems: "center",
                marginTop: 18
              }}
            >
              <span className="card-muted">{module.status}</span>
              <button className="button">Ouvrir</button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
