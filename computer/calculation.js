function mul(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById('result').value = num1 * num2;
}
function division(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById('result').value = num1 / num2;
}
function plus(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById('result').value = parseInt(num1) + parseInt(num2);
}
function minus(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById('result').value = num1 - num2;
}
function mc(){
    var num1 = document.getElementById('num1').value = "";
    var num2 = document.getElementById('num2').value = "";
    document.getElementById('result').value = "";
}