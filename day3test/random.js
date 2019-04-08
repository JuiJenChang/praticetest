let btn = document.getElementById("btn1");
let color = ["#630315", "#0e6302", "#b57807", "#117789","#59039b","#e091be"];
let i = 0;
btn.onclick = change;
function change() {
    if (i < color.length) {
        document.body.style.background = color[i];
        i++;
    } else {
        document.body.style.background = color[0];
        i = 1;
    }
}
