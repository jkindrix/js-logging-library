
# JS Logging Library

A robust and easy-to-use logging library for JavaScript applications, designed to facilitate efficient debugging and monitoring by providing structured logs with different levels of detail.

## Features

-   **Multiple Log Levels**: Supports `INFO`, `WARN`, `ERROR`, and `DEBUG` log levels to categorize your log messages effectively.
-   **Contextual Logging**: Include additional context in your log messages, such as function names, variable values, and error details.
-   **Consistent Output**: Structured log entries with timestamps for consistent and readable logs.
-   **Error Handling**: Comprehensive error handling within the logging function to ensure reliability.

## Installation

Clone the repository to your local machine:

```sh
git clone https://github.com/your-username/js-logging-library.git
```

## Usage

Import the logging library into your project:

```javascript
import { log, LogLevel } from './logger.js';

const functionName = 'exampleUsage';

log(LogLevel.INFO, 'This is an info message', { functionName });
log(LogLevel.WARN, 'This is a warning message', { functionName, additionalInfo: 'Warning details' });
log(LogLevel.ERROR, 'This is an error message', { functionName, errorDetails: new Error('Example error') });
log(LogLevel.DEBUG, 'This is a debug message', { functionName, debugData: { key: 'value' } });
```

## Example

Here’s a quick example of how to use the logging library:

```javascript
import { log, LogLevel } from './logger.js';

function exampleUsage() {
    const functionName = 'exampleUsage';

    log(LogLevel.INFO, 'This is an info message', { functionName });
    log(LogLevel.WARN, 'This is a warning message', { functionName, additionalInfo: 'Warning details' });
    log(LogLevel.ERROR, 'This is an error message', { functionName, errorDetails: new Error('Example error') });
    log(LogLevel.DEBUG, 'This is a debug message', { functionName, debugData: { key: 'value' } });
}

exampleUsage();
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure your code adheres to the established coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or suggestions, feel free to open an issue or contact me at [jkindrix@jkindrix.dev].
