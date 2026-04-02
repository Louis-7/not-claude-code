import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import type { ComputerUseHostAdapter } from './types.js'

export * from './types.js'

export function buildComputerUseTools(..._args: unknown[]): unknown[] {
  return []
}

export function createComputerUseMcpServer(
  _adapter: ComputerUseHostAdapter,
  _coordinateMode: unknown,
): Server {
  return new Server(
    { name: 'computer-use-stub', version: '0.0.0' },
    { capabilities: { tools: {} } },
  )
}

export const API_RESIZE_PARAMS = {}

export function targetImageSize(
  w: number,
  h: number,
  _p: unknown,
): [number, number] {
  return [w, h]
}

export function bindSessionContext(
  _adapter: ComputerUseHostAdapter,
  _coordinateMode: unknown,
  _ctx: unknown,
): (name: string, args: unknown) => Promise<import('./types.js').CuCallToolResult> {
  return async (_name, _args) => ({
    content: [
      {
        type: 'text',
        text:
          'Computer Use MCP is stubbed: the real @ant/computer-use-mcp is not published to npm.',
      },
    ],
  })
}
