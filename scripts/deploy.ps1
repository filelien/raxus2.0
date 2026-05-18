$ErrorActionPreference = "Stop"

$appDir = $env:APP_DIR
if (-not $appDir) {
  $appDir = "C:\nimbus"
}

$repoUrl = $env:REPO_URL
if (-not $repoUrl) {
  $repoUrl = "git@github.com:filelien/raxus2.0.git"
}

$branch = $env:BRANCH
if (-not $branch) {
  $branch = "main"
}

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  throw "git est requis sur le serveur."
}

if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
  throw "docker est requis sur le serveur."
}

if (-not (Test-Path "$appDir\.git")) {
  New-Item -ItemType Directory -Force -Path $appDir | Out-Null
  git clone $repoUrl $appDir
}

Set-Location $appDir
git fetch origin $branch
git checkout $branch
git pull --ff-only origin $branch

if ((-not (Test-Path ".env")) -and (Test-Path ".env.example")) {
  Copy-Item ".env.example" ".env"
}

docker compose pull
docker compose up --build -d
docker compose ps
