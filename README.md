# Recovered CLI sources (from source map)

TypeScript recovered from a published bundle’s source map, arranged as a normal workspace.

## What works

- Install dependencies and **run the CLI entrypoint** via the helper script (injects `MACRO` the way the upstream bundler does).
- **`#bun-bundle` shim**: `bun:bundle` only exists when using `bun build`; imports were rewritten to [`src/shims/bunBundle.ts`](src/shims/bunBundle.ts) via the [`#bun-bundle`](package.json) import map so `bun run` / direct file execution works.

## Requirements

- **Bun** [bun.sh](https://bun.sh) on `PATH`, *or* the helper falls back to `npx bun@1.2.5`.

## Setup

```bash
bun install
```

(If you do not have Bun: `npx bun@1.2.5 install`.)

## Run

```bash
./scripts/claude-dev.sh -- --help
./scripts/claude-dev.sh -- --version
```

Manual equivalent (same `MACRO` JSON as in `scripts/claude-dev.sh`):

```bash
bun -d 'MACRO:{"VERSION":"0.0.0-dev","PACKAGE_URL":"@anthropic-ai/claude-code","BUILD_TIME":"","ISSUES_EXPLAINER":"open an issue on the project repository","VERSION_CHANGELOG":"","FEEDBACK_CHANNEL":"https://github.com/anthropics/claude-code/issues","NATIVE_PACKAGE_URL":null}' src/entrypoints/cli.tsx -- --help
```

[`bunfig.toml`](bunfig.toml) documents the same `MACRO` object; the **CLI wrapper** is what makes it apply when executing `src/entrypoints/cli.tsx` directly.

## Incomplete recovery

Some dynamic imports (e.g. `daemon/`, `cli/bg.js`, `environment-runner/`) are **not** in the public source map. Full `bun build` of the tree will fail until those modules exist or call sites are stubbed.

## Private `@ant/*` packages

Packages under `@ant/` are not on npm. Minimal **workspace stubs** live in [`stubs/`](stubs/) so installs resolve; Computer Use / Chrome MCP behavior is not production-faithful.

## Typecheck (optional)

```bash
bunx tsc --noEmit
```

Expect many errors until the tree matches upstream types and missing files are restored.

## Copyright & Disclaimer

The source code in this repository was recovered from the publicly published npm package [`@anthropic-ai/claude-code`](https://www.npmjs.com/package/@anthropic-ai/claude-code) using its embedded source map. **All rights to the original code belong to [Anthropic, PBC](https://www.anthropic.com/).** This repository is not affiliated with, endorsed by, or associated with Anthropic in any way.

This project exists solely for **personal study and educational purposes** -- to learn from the architecture and design patterns of Claude Code. It is **not intended for redistribution, commercial use, or production deployment**. If you are the rights holder and have concerns, please open an issue and it will be addressed promptly.

Use of this code is subject to the original license terms set by Anthropic. See the [Claude Code README / license section](https://github.com/anthropics/claude-code) for details.
