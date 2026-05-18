import Link from "next/link";

const navigation = [
  {
    group: "Infrastructure",
    links: [
      ["Command Center", "/dashboard"],
      ["Portail modules", "/dashboard/modules"],
      ["Serveurs", "/dashboard/modules#servers"],
      ["Docker & Kubernetes", "/dashboard/modules#containers"]
    ]
  },
  {
    group: "Operations",
    links: [
      ["Bases de données", "/dashboard/modules#databases"],
      ["Monitoring", "/dashboard/modules#monitoring"],
      ["Sécurité", "/dashboard/modules#security"],
      ["IA locale", "/dashboard/modules#ai"]
    ]
  },
  {
    group: "Administration",
    links: [
      ["Utilisateurs", "/dashboard/users"],
      ["RBAC", "/dashboard/users#roles"],
      ["Audit", "/dashboard/modules#audit"],
      ["Plugins", "/dashboard/modules#plugins"]
    ]
  }
];

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <Link className="brand" href="/">
          <span className="brand-mark">N</span>
          <span>NIMBUS</span>
        </Link>

        {navigation.map((section) => (
          <nav className="side-section" key={section.group} aria-label={section.group}>
            <span>{section.group}</span>
            {section.links.map(([label, href]) => (
              <Link className="side-link" href={href} key={label}>
                {label}
              </Link>
            ))}
          </nav>
        ))}
      </aside>
      <main className="main">{children}</main>
    </div>
  );
}
