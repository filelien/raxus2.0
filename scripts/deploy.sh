#!/usr/bin/env sh
set -eu

APP_DIR="${APP_DIR:-/opt/nimbus}"
REPO_URL="${REPO_URL:-git@github.com:filelien/raxus2.0.git}"
BRANCH="${BRANCH:-main}"

if ! command -v git >/dev/null 2>&1; then
  echo "git est requis sur le serveur." >&2
  exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "docker est requis sur le serveur." >&2
  exit 1
fi

if [ ! -d "$APP_DIR/.git" ]; then
  mkdir -p "$APP_DIR"
  git clone "$REPO_URL" "$APP_DIR"
fi

cd "$APP_DIR"
git fetch origin "$BRANCH"
git checkout "$BRANCH"
git pull --ff-only origin "$BRANCH"

if [ ! -f .env ] && [ -f .env.example ]; then
  cp .env.example .env
fi

docker compose pull || true
docker compose up --build -d
docker compose ps
