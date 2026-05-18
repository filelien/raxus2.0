const stats = [
  ["Serveurs", "128", "6 nécessitent une action", "warning"],
  ["Bases connectées", "34", "Oracle, PostgreSQL, MySQL", "ok"],
  ["Alertes critiques", "7", "Corrélation IA active", "danger"],
  ["Jobs automatisés", "412", "98.7% succès 24h", "ok"]
];

const incidents = [
  ["K8S-PROD", "Latence API ingress", "DevOps Agent", "Critique"],
  ["ORCL-FIN", "Requête SQL lente", "DBA Agent", "Élevé"],
  ["SRV-WIN-22", "Tentative brute force", "Security Agent", "Élevé"],
  ["BACKUP-NAS", "Fenêtre sauvegarde dépassée", "Automation Agent", "Moyen"]
];

export default function DashboardPage() {
  return (
    <>
      <header className="dashboard-header">
        <div className="dashboard-title">
          <span className="eyebrow">Command Center</span>
          <h1>Vue globale temps réel</h1>
          <p>Supervision unifiée pour infrastructure, sécurité, données, DevOps et IA.</p>
        </div>
        <button className="button primary">Lancer un diagnostic IA</button>
      </header>

      <section className="stats-grid">
        {stats.map(([label, value, detail, tone]) => (
          <article className="stat-card" key={label}>
            <span className={`badge ${tone === "warning" ? "warning" : tone === "danger" ? "danger" : ""}`}>
              {label}
            </span>
            <div className="metric-value">{value}</div>
            <p className="card-muted">{detail}</p>
          </article>
        ))}
      </section>

      <section className="wide-grid">
        <article className="glass-card module-card">
          <span className="eyebrow">Incidents corrélés</span>
          <h2 style={{ margin: "14px 0 8px", letterSpacing: "-0.06em" }}>
            Priorités opérationnelles
          </h2>
          <table className="table">
            <thead>
              <tr>
                <th>Cible</th>
                <th>Signal</th>
                <th>Agent</th>
                <th>Sévérité</th>
              </tr>
            </thead>
            <tbody>
              {incidents.map(([target, signal, agent, severity]) => (
                <tr key={target}>
                  <td>{target}</td>
                  <td>{signal}</td>
                  <td>{agent}</td>
                  <td>
                    <span className={severity === "Critique" ? "badge danger" : "badge warning"}>
                      {severity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <aside className="glass-card module-card">
          <span className="eyebrow">Offline runtime</span>
          <h2 style={{ margin: "14px 0 8px", letterSpacing: "-0.06em" }}>
            Autonomie complète
          </h2>
          <p className="card-muted">
            Les dépendances externes sont limitées à l’installation : images Docker,
            modèles IA et paquets applicatifs peuvent être exportés puis déployés dans
            un réseau isolé.
          </p>
          <div className="metrics-grid" style={{ padding: 0, marginTop: 16 }}>
            <div className="metric-card">
              <span className="status">Registry privé</span>
              <div className="metric-value">OK</div>
            </div>
            <div className="metric-card">
              <span className="status">LLM local</span>
              <div className="metric-value">OK</div>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
