/** Minimal types for open-source stub; real package is internal. */
export type Logger = {
  silly(message: string, ...args: unknown[]): void
  debug(message: string, ...args: unknown[]): void
  info(message: string, ...args: unknown[]): void
  warn(message: string, ...args: unknown[]): void
  error(message: string, ...args: unknown[]): void
}

export type CoordinateMode = string
export type CuSubGates = Record<string, unknown>

export type GrantFlags = {
  clipboardRead: boolean
  clipboardWrite: boolean
  systemKeyCombos: boolean
}

export const DEFAULT_GRANT_FLAGS: GrantFlags = {
  clipboardRead: false,
  clipboardWrite: false,
  systemKeyCombos: false,
}

export type CuPermissionRequest = {
  tccState?: unknown
  [key: string]: unknown
}

export type CuPermissionResponse = {
  granted: unknown[]
  denied: unknown[]
  flags: GrantFlags
}

export type ScreenshotDims = {
  width: number
  height: number
  displayWidth: number
  displayHeight: number
  displayId: number
  originX: number
  originY: number
}

export type ComputerUseSessionContext = Record<string, unknown>

export type CuCallToolResult = {
  content: unknown
  telemetry?: { error_kind?: string }
}

export type ComputerUseHostAdapter = {
  serverName: string
  logger: Logger
  executor: ComputerExecutor
  ensureOsPermissions: () => Promise<{ granted: boolean }>
  isDisabled: () => boolean
  getSubGates: () => unknown
  getAutoUnhideEnabled: () => boolean
  cropRawPatch: () => null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComputerExecutor = any
