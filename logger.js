/**
 * Logger utility for logging messages with different levels and contextual information.
 * This helps in debugging and maintaining the application by providing structured logs.
 * 
 * Example Usage:
 * 
 * const functionName = 'exampleUsage';
 * 
 * log(LogLevel.INFO, 'This is an info message', { functionName });
 * log(LogLevel.WARN, 'This is a warning message', { functionName, additionalInfo: 'Warning details' });
 * log(LogLevel.ERROR, 'This is an error message', { functionName, errorDetails: new Error('Example error') });
 * log(LogLevel.DEBUG, 'This is a debug message', { functionName, debugData: { key: 'value' } });
 * 
 * @module Logger
 */

/**
 * Log levels enumeration.
 * 
 * @enum {string}
 */
const LogLevel = {
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR',
    DEBUG: 'DEBUG'
};

/**
 * Log a message with the specified level and additional contextual information.
 * 
 * @param {string} level - The level of the log (INFO, WARN, ERROR, DEBUG).
 * @param {string} message - The log message.
 * @param {Object} [context={}] - Additional context to be logged (e.g., function name, variables, etc.).
 */
function log(level, message, context = {}) {
    try {
        // Validate log level
        if (!Object.values(LogLevel).includes(level)) {
            throw new Error(`Invalid log level: ${level}`);
        }

        // Construct the log entry
        const timestamp = new Date().toISOString();
        const logEntry = {
            timestamp,
            level,
            message,
            context
        };

        // Output the log entry to the console
        switch (level) {
            case LogLevel.INFO:
                console.info(JSON.stringify(logEntry, null, 2));
                break;
            case LogLevel.WARN:
                console.warn(JSON.stringify(logEntry, null, 2));
                break;
            case LogLevel.ERROR:
                console.error(JSON.stringify(logEntry, null, 2));
                break;
            case LogLevel.DEBUG:
                console.debug(JSON.stringify(logEntry, null, 2));
                break;
        }
    } catch (error) {
        console.error(`Logging failed: ${error.message}`);
    }
}

// Exporting log function and LogLevel enum
export { log, LogLevel };
