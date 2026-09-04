// ============================================================
// 103_logger.js - Import & Export Demo (ES Modules)
// ============================================================

// ---------- Named Exports ----------
export const LOG_LEVEL = {
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  DEBUG: 'DEBUG',
};

export function info(message) {
  console.log(`[${LOG_LEVEL.INFO}] ${new Date().toISOString()} - ${message}`);
}

export function warn(message) {
  console.warn(`[${LOG_LEVEL.WARN}] ${new Date().toISOString()} - ${message}`);
}

export function error(message) {
  console.error(`[${LOG_LEVEL.ERROR}] ${new Date().toISOString()} - ${message}`);
}

export function debug(message) {
  console.debug(`[${LOG_LEVEL.DEBUG}] ${new Date().toISOString()} - ${message}`);
}

// ---------- Default Export (single logger instance) ----------
const logger = {
  info,
  warn,
  error,
  debug,
  log(level, message) {
    switch (level) {
      case LOG_LEVEL.INFO:    this.info(message);  break;
      case LOG_LEVEL.WARN:    this.warn(message);  break;
      case LOG_LEVEL.ERROR:   this.error(message); break;
      case LOG_LEVEL.DEBUG:   this.debug(message); break;
      default:                this.info(message);  break;
    }
  },
};

export default logger;

// ============================================================
// Example usage (uncomment to test):
// ============================================================
// --- Importing named exports ---
// import { info, warn, error, debug, LOG_LEVEL } from './103_logger.js';
// info('Application started');
// warn('Low disk space');
// error('Failed to connect to database');
// debug('Request payload: { userId: 42 }');

// --- Importing default export ---
// import logger from './103_logger.js';
// logger.info('Using default logger');
// logger.log(LOG_LEVEL.ERROR, 'Custom log call');

// --- Importing everything as a namespace ---
// import * as Logger from './103_logger.js';
// Logger.info('Namespace import works');
// console.log(Logger.LOG_LEVEL.INFO);