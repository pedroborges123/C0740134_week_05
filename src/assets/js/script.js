
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
    pens = new Array('green',"blue", 'red', "gray", "black");
    markers = pens;
    console.log(markers);
    markers.push("white");
    console.log(markers);
    markers.push("#056598");
    console.log(markers);
    markers.forEach(function (t) {
        alert(t);
    });

    alert("Length of array is: " + markers.length);
    console.log("Length of array is:", markers.length);
}