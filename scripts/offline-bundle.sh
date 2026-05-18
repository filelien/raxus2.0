#!/usr/bin/env sh
set -eu

BUNDLE_DIR="${BUNDLE_DIR:-nimbus-offline}"

rm -rf "$BUNDLE_DIR"
mkdir -p "$BUNDLE_DIR/images" "$BUNDLE_DIR/plugins" "$BUNDLE_DIR/models" "$BUNDLE_DIR/docs"

docker compose build
docker pull postgres:latest
docker pull redis:latest

docker save \
  nimbus/frontend:latest \
  postgres:latest \
  redis:latest \
  -o "$BUNDLE_DIR/images/nimbus-runtime.tar"

cp docker-compose.yml "$BUNDLE_DIR/docker-compose.yml"
cp .env.example "$BUNDLE_DIR/.env.example"
cp README.md "$BUNDLE_DIR/docs/README.md"

cat > "$BUNDLE_DIR/install-offline.sh" <<'EOF'
#!/usr/bin/env sh
set -eu
docker load -i images/nimbus-runtime.tar
[ -f .env ] || cp .env.example .env
docker compose up -d
docker compose ps
EOF

chmod +x "$BUNDLE_DIR/install-offline.sh"
echo "Bundle offline prêt dans $BUNDLE_DIR"
