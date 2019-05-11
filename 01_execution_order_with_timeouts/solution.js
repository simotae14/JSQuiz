/*
Found the print sequence, show in a comment
*/

function mixing_a_thread() {
    console.log('1');
    console.log('2');
    setTimeout(function() {
        console.log('3')
    }, 1);
    console.log('4');
}

mixing_a_thread();

/*
SOLUTION:
1
2
4
3
*/