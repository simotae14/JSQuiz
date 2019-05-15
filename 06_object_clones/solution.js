// *** Question ***
var _ = require('lodash');

const luke = {
    surname: 'Skywalker',
    age: 19,
    family: {
        father: 'Anakin Skywalker',
        mother: 'Padme Amidala',
        siblings: ['Leia']
    },
    quote: function() {
        console.log(
            'I think that R2 unit may have been stolen'
        );
    }
};

const assignClone = Object.assign({}, luke);
const spreadClone = { ...luke };
const jsonClone = JSON.parse(JSON.stringify(luke));

// deep clone - the best option out there: use the existing work behind lodash
const lodashClone = _.cloneDeep(luke);

assignClone.age = 25;
assignClone.family.father = 'Darth Vader';

// What is the output?
console.log('luke', luke);
console.log('assignClone', assignClone);
console.log('spreadClone', spreadClone);
console.log('jsonClone', jsonClone);

/**
 * Solution:
 * 1.
 * console.log('luke', luke);
 *
 *
{
    surname: 'Skywalker',
    age: 19,
    family: {
        father: 'Darth Vader',
        mother: 'Padme Amidala',
        siblings: ['Leia']
    },
    quote: function() {
        console.log(
            'I think that R2 unit may have been stolen'
        );
    }
};

 ** Solution:
 * 2.
 * console.log('assignClone', assignClone);
 *
 *
{
    surname: 'Skywalker',
    age: 25,
    family: {
        father: 'Darth Vader',
        mother: 'Padme Amidala',
        siblings: ['Leia']
    },
    quote: function() {
        console.log(
            'I think that R2 unit may have been stolen'
        );
    }
};

 ** Solution:
 * 3.
 * console.log('spreadClone', spreadClone);
 *
 *
{
    surname: 'Skywalker',
    age: 19,
    family: {
        father: 'Darth Vader',
        mother: 'Padme Amidala',
        siblings: ['Leia']
    },
    quote: function() {
        console.log(
            'I think that R2 unit may have been stolen'
        );
    }
};

 ** Solution:
 * 4.
 * console.log('jsonClone', jsonClone);
 *
 *
{
    surname: 'Skywalker',
    age: 19,
    family: {
        father: 'Anakin Skywalker',
        mother: 'Padme Amidala',
        siblings: ['Leia']
    }
};

 */

/**
 * Solution deep clone with lodash
 */

console.log('lodashClone', lodashClone);
