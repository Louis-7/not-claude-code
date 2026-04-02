import { Server } from '@modelcontextprotocol/sdk/server/index.js'

export const BROWSER_TOOLS: { name: string; description?: string }[] = []

export type ClaudeForChromeContext = Record<string, unknown>
export type Logger = (...args: unknown[]) => void
export type PermissionMode =
  | 'ask'
  | 'skip_all_permission_checks'
  | 'follow_a_plan'

export function createClaudeForChromeMcpServer(
  ..._args: unknown[]
): Server {
  return new Server(
    { name: 'claude-for-chrome-stub', version: '0.0.0' },
    { capabilities: { tools: {} } },
  )
}
