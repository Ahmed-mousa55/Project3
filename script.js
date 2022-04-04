var x = 1;

function testParent() {
    var x = 5;

    function testChild() {
        var calc = x + 2;
        console.log(calc);
    }
    return testChild();
}
testParent();

