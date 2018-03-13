const fs           = require('fs');
const EventEmitter = require('events').EventEmitter;

const logger = new EventEmitter();

const Constants = require('./constants');

/**
 * @param emitType - Can be info, warn or error.
 * @param msg      - The message to log.
 * @param logIt    - Boolean that tells whether we want to log the message into the logfile or not.
 */
exports.loggerEmit = (emitType, msg, logIt) => {
    logger.emit(emitType, msg, logIt);
};

logger.on(Constants.INFO, (infoMsg, logIt) => {
    console.info(infoMsg);
    
    if (logIt) { logToFile(infoMsg, 'Info'); }
});

logger.on(Constants.WARN, (warnMsg, logIt) => {
    console.warn(warnMsg);
    
    if (logIt) { logToFile(warnMsg, 'Warning'); }
});

logger.on(Constants.ERROR, (errMsg, logIt) => {
    console.error(errMsg);

    if (logIt) { logToFile(errMsg, 'Error'); }
});


function logToFile (log, logType) {
    let date        = new Date();
    let currentDate = Constants.MONTH_NAME[date.getMonth()+1] + ' ' + date.getDate() + ' ' + date.getFullYear();
    let currentTime = date.getHours() + ':' + date.getMinutes();

    let msgToLog = '----------- ' + logType + ' logged on ' + currentDate + ' @ ' + currentTime + ' -----------\n' + logType + ' : ' + log + '\n';

    fs.open(Constants.LOG_FILE, 'wx', (err, fd) => {
        if (err) {
            if (err.code === 'EEXIST') {
                fs.appendFile(Constants.LOG_FILE, msgToLog, (err) => {
                    if (err) {
                        console.error('There was an error while trying to update the file: ' + err);
                    }
                });
            } else {
                console.error('There was an error while creating the log file: ' + err);
            }
        }
        else if (!err) {
            fs.writeFile(Constants.LOG_FILE, msgToLog, (err) => {
                if (err) {
                    console.error('There was an error while trying to write on file: ' + err);
                }
            });      
        }    
    });
};