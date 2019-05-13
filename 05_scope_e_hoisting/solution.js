// *** Question ***

// What is the output of:
let x = 'red';

{
    let x = 'green';

    console.log('1: ', x);

    (function() {
        console.log('2: ', x);

        var x = 'blue';

        console.log('3: ', x);
    })();
}

console.log('4: ', x);

// Answer
// 1: green
// 2: undefined
// 3: blue
// 4: red