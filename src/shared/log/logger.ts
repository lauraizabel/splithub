import pino from 'pino'

export interface ILogger {
  info(message: string, meta?: any): void
  error(message: string, meta?: any): void
}

export class PinoLogger implements ILogger {
  private readonly instance = pino({
    transport: process.env.NODE_ENV !== 'production'
      ? {
          target: 'pino-pretty',
          options: { colorize: true }
        }
      : undefined,
  })

  info(message: string, meta?: any) {
    this.instance.info(meta || {}, message)
  }

  error(message: string, meta?: any) {
    this.instance.error(meta || {}, message)
  }
}
