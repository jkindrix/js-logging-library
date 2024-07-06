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
enum LogLevel {
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
    DEBUG = 'DEBUG'
}

/**
 * Log a message with the specified level and additional contextual information.
 * 
 * @param {LogLevel} level - The level of the log (INFO, WARN, ERROR, DEBUG).
 * @param {string} message - The log message.
 * @param {Record<string, any>} [context={}] - Additional context to be logged (e.g., function name, variables, etc.).
 */
function log(level: LogLevel, message: string, context: Record<string, any> = {}): void {
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

        // Log entry stringified for structured logging
        const logOutput = JSON.stringify(logEntry, null, 2);

        // Output the log entry to the console based on level
        const logMethod = {
            [LogLevel.INFO]: console.info,
            [LogLevel.WARN]: console.warn,
            [LogLevel.ERROR]: console.error,
            [LogLevel.DEBUG]: console.debug
        }[level];

        logMethod(logOutput);

    } catch (error) {
        // Assert that error is of type Error
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error(`Logging failed: ${errorMessage}`);
    }
}

// Exporting log function and LogLevel enum
export { log, LogLevel };
