# NIMBUS

NIMBUS est une base de plateforme **Enterprise Infrastructure OS** : une console
centralisée pour gérer infrastructure, données, sécurité, DevOps, observabilité et
IA auto-hébergée.

## Premier périmètre livré

- Homepage enterprise sombre inspirée des dashboards modernes.
- Page de connexion.
- Dashboard central `Command Center`.
- Portail des modules et directions vers les futures interfaces.
- Page de gestion utilisateurs et base RBAC.
- Docker Compose avec frontend, PostgreSQL et Redis.

## Commandes locales

```bash
npm install
npm run dev
```

L’application frontend démarre sur :

```text
http://localhost:3000
```

## Docker

```bash
docker compose up --build
```

## Déploiement serveur

Linux :

```bash
APP_DIR=/opt/nimbus REPO_URL=git@github.com:filelien/raxus2.0.git BRANCH=main sh scripts/deploy.sh
```

Windows PowerShell :

```powershell
$env:APP_DIR="C:\nimbus"; $env:BRANCH="main"; .\scripts\deploy.ps1
```

Le workflow GitHub Actions `.github/workflows/ci-deploy.yml` valide le frontend à
chaque push sur `main`, construit l’image Docker, puis déploie sur le serveur si
ces secrets GitHub sont configurés :

- `NIMBUS_DEPLOY_HOST`
- `NIMBUS_DEPLOY_USER`
- `NIMBUS_DEPLOY_KEY`
- `NIMBUS_DEPLOY_PORT` optionnel
- `NIMBUS_APP_DIR` optionnel, par défaut `/opt/nimbus`

## Stratégie offline

La plateforme doit fonctionner sans Internet après installation. Le modèle cible :

1. Construire les images Docker dans un environnement connecté.
2. Exporter les images avec `docker save`.
3. Importer les images dans l’environnement isolé avec `docker load`.
4. Utiliser un registry privé local pour les images NIMBUS et les dépendances tierces.
5. Précharger les modèles IA locaux, par exemple Ollama/vLLM, dans un volume dédié.
6. Garder la documentation, les plugins et les scripts d’installation dans le bundle.

Exemple de bundle offline :

```text
nimbus-offline/
  images/
  models/
  plugins/
  docs/
  docker-compose.yml
  install-offline.sh
```

Créer un bundle offline :

```bash
sh scripts/offline-bundle.sh
```

## Roadmap MVP recommandée

1. Brancher une vraie authentification locale JWT.
2. Ajouter le backend FastAPI `gateway-service`.
3. Créer les modèles `User`, `Role`, `Permission`, `AuditEvent`.
4. Ajouter le module serveurs : inventaire, SSH, métriques, terminal web.
5. Ajouter le module bases de données : connexions, explorateur SQL, schémas.
6. Ajouter monitoring : Prometheus, Loki, Grafana embarqué.
7. Ajouter IA locale : Ollama, agents spécialisés, RAG documentaire.
8. Ajouter plugin engine et marketplace privée.
