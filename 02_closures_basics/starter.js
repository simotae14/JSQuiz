// Choose one of the examples below, and comment the rest of the examples that you don't use.
// Example 1
function foo(n1) {
    var n2 = n1 + 1;
    function bar(n3) {
      console.log(n1, n2, n3);
    }
    bar (n2 + 6);
}
foo(5);

// Example 2
var foo = {
    bar: {
        go: "go"
    }
}
console.log(foo.bar.go);

// Example 3
function foo() {
    var n1 = 1;
    function bar() {
        console.log(n1);
    }
    return bar;
}

var go = foo();
go();