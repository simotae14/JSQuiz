// write functions `logMessage` and `greet`
// such that the following line logs 'hi'

logMessage(greet(() => greet(() => 'hi')));

// 1. write te external function
function logMessage(message) {
    console.log(message);
}

// 2. write the internal function trying before with the internal arrow
//    and after that with the external call
function greet(callback) {
    return callback();
}