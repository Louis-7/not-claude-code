#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MACRO_DEFINE='MACRO:{"VERSION":"0.0.0-dev","PACKAGE_URL":"@anthropic-ai/claude-code","BUILD_TIME":"","ISSUES_EXPLAINER":"open an issue on the project repository","VERSION_CHANGELOG":"","FEEDBACK_CHANNEL":"https://github.com/anthropics/claude-code/issues","NATIVE_PACKAGE_URL":null}'
CLI="$ROOT/src/entrypoints/cli.tsx"
if command -v bun >/dev/null 2>&1; then
  exec bun -d "$MACRO_DEFINE" "$CLI" "$@"
fi
exec npx --yes bun@1.2.5 -d "$MACRO_DEFINE" "$CLI" "$@"
