import { LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Ensure logs directory exists
 */
const logDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

export class AppLogger implements LoggerService {
  private readonly logger: winston.Logger;
  private isLogging = false; // Flag to prevent recursion in error method

  constructor(private readonly context = 'App') {
    const logFormat = winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.errors({ stack: true }),
      winston.format.printf(({ timestamp, level, message, stack }) => {
        return `${timestamp} [${level.toUpperCase()}] [${this.context}] ${message}${stack ? '\n' + stack : ''
          }`;
      }),
    );

    this.logger = winston.createLogger({
      level: 'debug',
      format: logFormat,
      transports: [
        new winston.transports.Console(),

        new winston.transports.File({
          filename: path.join(logDir, 'error.log'),
          level: 'error',
        }),

        new winston.transports.File({
          filename: path.join(logDir, 'combined.log'),
        }),
      ],
      exceptionHandlers: [
        new winston.transports.File({
          filename: path.join(logDir, 'exceptions.log'),
        }),
      ],
      rejectionHandlers: [
        new winston.transports.File({
          filename: path.join(logDir, 'rejections.log'),
        }),
      ],
    });
  }

  log(message: any, ...optionalParams: any[]) {
    try {
      const formattedMessage = this.formatMessage(message, optionalParams);
      this.logger.info(formattedMessage);
    } catch (err) {
      // Fallback to console to prevent recursion
      console.log(`[${this.context}]`, message, ...optionalParams);
    }
  }

  error(message: any, ...optionalParams: any[]) {
    // Prevent infinite recursion - if we're already logging an error, use console directly
    if (this.isLogging) {
      console.error(`[${this.context}]`, message, ...optionalParams);
      return;
    }

    try {
      this.isLogging = true;
      const formattedMessage = this.formatMessage(message, optionalParams);
      
      // NestJS typically passes trace as the first optional param (string with stack trace)
      const trace = optionalParams.find((p) => typeof p === 'string' && (p.includes('at ') || p.includes('Error')));
      
      if (trace) {
        this.logger.error(formattedMessage, { stack: trace });
      } else {
        this.logger.error(formattedMessage);
      }
    } catch (err) {
      // Fallback to console to prevent recursion
      console.error(`[${this.context}]`, message, ...optionalParams);
    } finally {
      this.isLogging = false;
    }
  }

  warn(message: any, ...optionalParams: any[]) {
    try {
      const formattedMessage = this.formatMessage(message, optionalParams);
      this.logger.warn(formattedMessage);
    } catch (err) {
      console.warn(`[${this.context}]`, message, ...optionalParams);
    }
  }

  debug(message: any, ...optionalParams: any[]) {
    try {
      const formattedMessage = this.formatMessage(message, optionalParams);
      this.logger.debug(formattedMessage);
    } catch (err) {
      console.debug(`[${this.context}]`, message, ...optionalParams);
    }
  }

  verbose(message: any, ...optionalParams: any[]) {
    try {
      const formattedMessage = this.formatMessage(message, optionalParams);
      this.logger.verbose(formattedMessage);
    } catch (err) {
      console.log(`[${this.context}] [VERBOSE]`, message, ...optionalParams);
    }
  }

  private formatMessage(message: any, optionalParams: any[]): string {
    if (typeof message === 'string') {
      return optionalParams.length > 0
        ? `${message} ${optionalParams.map((p) => (typeof p === 'object' ? JSON.stringify(p) : String(p))).join(' ')}`
        : message;
    }
    return JSON.stringify(message);
  }
}

/**
 * Simple global logger instance
 */
export const appLogger = new AppLogger();
