import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="auth-page">
      <section className="glass-card auth-card">
        <Link className="brand" href="/">
          <span className="brand-mark">N</span>
          <span>NIMBUS</span>
        </Link>

        <div style={{ marginTop: 28 }}>
          <span className="eyebrow">Console sécurisée</span>
          <h1 style={{ margin: "18px 0 8px", letterSpacing: "-0.06em" }}>
            Connexion administrateur
          </h1>
          <p className="card-muted">
            Authentification locale pour MVP. La suite est prévue pour JWT, LDAP,
            SSO, MFA et RBAC par module.
          </p>
        </div>

        <form>
          <div className="field">
            <label htmlFor="email">Identifiant</label>
            <input id="email" name="email" placeholder="admin@nimbus.local" type="email" />
          </div>
          <div className="field">
            <label htmlFor="password">Mot de passe</label>
            <input id="password" name="password" placeholder="••••••••••••" type="password" />
          </div>
          <Link
            className="button primary"
            href="/dashboard"
            style={{ width: "100%", marginTop: 22 }}
          >
            Se connecter
          </Link>
        </form>

        <p className="card-muted" style={{ marginTop: 18 }}>
          Mode déconnecté : aucune authentification externe n’est requise pour lancer
          la plateforme en environnement isolé.
        </p>
      </section>
    </main>
  );
}
