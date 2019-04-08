let add = document.getElementById("add1");
let min = document.getElementById("minus1");
let i = 0;
add.onclick = plus;
min.onclick = minus2;
function plus() {
    i++;
    document.getElementById("num").innerHTML = i;
}
function minus2() {
    i--;
    document.getElementById("num").innerHTML = i;
}