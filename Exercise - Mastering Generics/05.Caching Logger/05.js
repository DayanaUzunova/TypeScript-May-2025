var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel["Info"] = "Info";
    LoggingLevel["Error"] = "Error";
    LoggingLevel["Warning"] = "Warning";
    LoggingLevel["Debug"] = "Debug";
})(LoggingLevel || (LoggingLevel = {}));
var LoggingFormat;
(function (LoggingFormat) {
    LoggingFormat["Standard"] = "[%level][%date] %text";
    LoggingFormat["Minimal"] = "*%level* %text";
})(LoggingFormat || (LoggingFormat = {}));
var Logger = /** @class */ (function () {
    function Logger(format) {
        this.cachedLogs = new Map();
        this.format = format;
    }
    Logger.prototype.log = function (logLevel, message) {
        var date = new Date().toISOString();
        var filledMessage = this.format.replace('%level', logLevel).replace('%date', date).replace('%text', message);
        console.log(filledMessage);
        var currentMessages = this.cachedLogs.get(logLevel);
        if (currentMessages) {
            currentMessages.push(filledMessage);
            this.cachedLogs.set(logLevel, currentMessages);
        }
        else {
            this.cachedLogs.set(logLevel, [filledMessage]);
        }
    };
    Logger.prototype.getFormat = function () {
        return this.format;
    };
    return Logger;
}());
var logger = new Logger(LoggingFormat.Standard);
logger.log(LoggingLevel.Info, "This is an info message.");
logger.log(LoggingLevel.Info, "Another message.");
logger.log(LoggingLevel.Error, "Something went wrong.");
logger.log(LoggingLevel.Warning, "Be careful with the type assertions.");
logger.log(LoggingLevel.Debug, "Running the debugger.");
console.log('-----------');
console.log(__spreadArray([], logger.cachedLogs.entries(), true).map(function (x) { return x[1].join('\n'); }).join('\n'));
