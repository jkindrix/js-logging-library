
# JS Logging Library

A robust and easy-to-use logging library for JavaScript and TypeScript applications, designed to facilitate efficient debugging and monitoring by providing structured logs with different levels of detail.

## Features

- **Multiple Log Levels**: Supports `INFO`, `WARN`, `ERROR`, and `DEBUG` log levels to categorize your log messages effectively.
- **Contextual Logging**: Include additional context in your log messages, such as function names, variable values, and error details.
- **Consistent Output**: Structured log entries with timestamps for consistent and readable logs.
- **Error Handling**: Comprehensive error handling within the logging function to ensure reliability.
- **TypeScript Support**: Fully typed and compatible with TypeScript for enhanced developer experience.

## Installation

Clone the repository to your local machine:

```sh
git clone https://github.com/jkindrix/js-logging-library.git
```

## How It Works

The JS Logging Library provides a simple yet flexible way to log messages with different levels and contextual information. It consists of a `log` function and a `LogLevel` enumeration to specify the level of the log message.

### Log Levels

The library supports four log levels:

- **INFO**: For informational messages that highlight the progress of the application.
- **WARN**: For potentially harmful situations.
- **ERROR**: For error events that might still allow the application to continue running.
- **DEBUG**: For fine-grained informational events that are most useful to debug the application.

### Logging Function

The `log` function takes three parameters:

1. `level` (string): The level of the log message, which should be one of the values from `LogLevel`.
2. `message` (string): The log message to be recorded.
3. `context` (object, optional): Additional context to be included with the log message, such as function names, variable values, error details, etc.

### Example Usage

To use the logging library, import the `log` function and `LogLevel` enumeration from the `src/index.ts` file. Then, use the `log` function to log messages at different levels with optional context.

#### JavaScript

If you are using JavaScript, you can import the compiled JavaScript file from the `dist` directory.

```javascript
const { log, LogLevel } = require('./dist/index.js');  // Import the logging library and log levels

function exampleUsage() {
    const functionName = 'exampleUsage';  // Define the function name for context

    // Log an info message with context
    log(LogLevel.INFO, 'This is an info message', { functionName });

    // Log a warning message with additional context
    log(LogLevel.WARN, 'This is a warning message', { functionName, additionalInfo: 'Warning details' });

    // Log an error message with error details
    log(LogLevel.ERROR, 'This is an error message', { functionName, errorDetails: new Error('Example error') });

    // Log a debug message with debug data
    log(LogLevel.DEBUG, 'This is a debug message', { functionName, debugData: { key: 'value' } });
}

// Execute the example usage function to demonstrate logging
exampleUsage();
```

#### TypeScript

If you are using TypeScript, you can directly import from the `src` directory.

```typescript
import { log, LogLevel } from './src/index';  // Import the logging library and log levels

function exampleUsage() {
    const functionName = 'exampleUsage';  // Define the function name for context

    // Log an info message with context
    log(LogLevel.INFO, 'This is an info message', { functionName });

    // Log a warning message with additional context
    log(LogLevel.WARN, 'This is a warning message', { functionName, additionalInfo: 'Warning details' });

    // Log an error message with error details
    log(LogLevel.ERROR, 'This is an error message', { functionName, errorDetails: new Error('Example error') });

    // Log a debug message with debug data
    log(LogLevel.DEBUG, 'This is a debug message', { functionName, debugData: { key: 'value' } });
}

// Execute the example usage function to demonstrate logging
exampleUsage();
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure your code adheres to the established coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or suggestions, feel free to open an issue or contact me at [jkindrix@jkindrix.dev].
