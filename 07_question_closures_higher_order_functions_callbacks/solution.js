// *** Question ***
// Write a function sum

//sum(1)(2)(3)(4)(5)(result => console.log('result', result));

// such that the above would log "result 15"
// sum(1)
function sum(a) {
    // sum(1)(2)
    return function(b) {
        // sum(1)(2)(3)
        return function(c) {
            // sum(1)(2)(3)(4)
            return function(d) {
                // sum(1)(2)(3)(4)(5)
                return function(e) {
                    const result = a + b + c + d + e;
                    return function(callback) {
                        callback(result);
                    };
                };
            };
        };
    };
}

console.log(sum(1)(2)(3)(4)(5)(result => console.log('result', result)));