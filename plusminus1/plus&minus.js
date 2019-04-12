let add = document.getElementById("add-num");
let min = document.getElementById("minus-num");
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