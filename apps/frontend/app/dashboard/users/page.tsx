const users = [
  {
    name: "Amina Diallo",
    email: "amina.diallo@nimbus.local",
    role: "Platform Admin",
    scope: "Tous modules",
    status: "Actif"
  },
  {
    name: "Karim Benali",
    email: "karim.benali@nimbus.local",
    role: "DBA Lead",
    scope: "Database Studio",
    status: "Actif"
  },
  {
    name: "Sarah Martin",
    email: "sarah.martin@nimbus.local",
    role: "SOC Analyst",
    scope: "Security Operations",
    status: "MFA requis"
  },
  {
    name: "Nicolas Roche",
    email: "nicolas.roche@nimbus.local",
    role: "SRE",
    scope: "Monitoring, Kubernetes",
    status: "Actif"
  }
];

const roles = [
  "Platform Admin",
  "Infrastructure Operator",
  "DBA",
  "SOC Analyst",
  "DevOps Engineer",
  "Read-only Auditor"
];

export default function UsersPage() {
  return (
    <>
      <header className="dashboard-header">
        <div className="dashboard-title">
          <span className="eyebrow">Gestion utilisateurs</span>
          <h1>Identités, rôles et accès</h1>
          <p>
            Base UI pour administrer les comptes, préparer LDAP/SSO et contrôler les
            droits par module.
          </p>
        </div>
        <button className="button primary">Créer un utilisateur</button>
      </header>

      <section className="wide-grid">
        <article className="glass-card module-card">
          <span className="eyebrow">Utilisateurs</span>
          <table className="table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Rôle</th>
                <th>Périmètre</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email}>
                  <td>
                    <strong>{user.name}</strong>
                    <br />
                    <span className="card-muted">{user.email}</span>
                  </td>
                  <td>{user.role}</td>
                  <td>{user.scope}</td>
                  <td>
                    <span className={user.status === "MFA requis" ? "badge warning" : "badge"}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <aside className="glass-card module-card" id="roles">
          <span className="eyebrow">RBAC cible</span>
          <h2 style={{ margin: "14px 0 8px", letterSpacing: "-0.06em" }}>
            Rôles prêts pour l’enterprise
          </h2>
          <p className="card-muted">
            Les droits doivent être granulaires : lecture, exécution, remédiation,
            administration et audit, avec séparation par module et environnement.
          </p>
          <div style={{ display: "grid", gap: 10, marginTop: 18 }}>
            {roles.map((role) => (
              <div className="user-card" key={role}>
                <strong>{role}</strong>
                <p className="card-muted" style={{ marginBottom: 0 }}>
                  Permissions modulaires et journalisées.
                </p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
