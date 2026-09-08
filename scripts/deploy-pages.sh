#!/usr/bin/env bash
# GitHub Pages deploy for UHINAS (branch-based, no Actions).
# Builds with NEXT_PUBLIC_BASE_PATH, then force-pushes out/ to gh-pages.
#
# Rules honored (see git-operations skill):
#   - GITHUB_TOKEN env var is invalid -> stripped before every push
#   - gh-pages history divergence is expected -> force-push only, never merge
#   - worktree hygiene: rm -rf + worktree remove --force in the same chain
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WT="/tmp/uhinas-gh-pages"
BASE_PATH="${NEXT_PUBLIC_BASE_PATH:-}"

cd "$ROOT"

echo "▸ Building static export (basePath=${BASE_PATH})..."
NEXT_PUBLIC_BASE_PATH="$BASE_PATH" npm run build

echo "▸ Ensuring .nojekyll..."
touch out/.nojekyll

echo "▸ Preparing gh-pages worktree..."
rm -rf "$WT"
git worktree remove --force "$WT" 2>/dev/null || true

if ! git show-ref --verify --quiet refs/heads/gh-pages; then
  echo "  creating orphan gh-pages branch..."
  tree=$(git hash-object -wt tree /dev/null)
  commit=$(git commit-tree "$tree" -m "chore: initialize gh-pages")
  git branch gh-pages "$commit"
fi

git worktree add "$WT" gh-pages

echo "▸ Syncing build output..."
find "$WT" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -a out/. "$WT"/

cd "$WT"
git add -A
if git diff --cached --quiet; then
  echo "✓ No changes to deploy."
else
  git commit -q -m "deploy: static build $(date -u +%Y-%m-%dT%H:%M:%SZ) (${BASE_PATH})"
  echo "▸ Force-pushing gh-pages..."
  env -u GITHUB_TOKEN git push origin gh-pages --force
fi

cd "$ROOT"
git worktree remove --force "$WT"
rm -rf "$WT"
echo "✓ Deployed to gh-pages."
