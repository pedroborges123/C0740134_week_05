
$(document).ready(function () {
   //alert("test");
    alert(sum(7,6));
    console.log(sum(7,6));

    arrays();
});

function sum(a, b) {
    return a + b;
}

function arrays() {
    var pens;
    pens = ['green',"blue", 'red', "gray", "black"];
    console.log(pens);
    pens.push("white");
    console.log(pens);
    pens.push("#056598");
    console.log(pens);
    pens.forEach(function (t) {
        alert(t);
    });

    alert("Length of array is: " + pens.length);
    console.log("Length of array is:", pens.length);
}