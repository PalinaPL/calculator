var no_active = 30;
var now_active = 0;
setInterval("now_active++;", 1000);
setInterval("updateChat()", 1000);
document.onmousemove = activeUser;
function activeUser() {
    now_active = 0; }
function updateChat() {
    if (now_active >= no_active){
        clearclick();
        return;}
}

var oldField = 0.0;
var i = 0;;
var sign = null;

function numclick(text) {
    var fieldText = document.getElementById("field").innerHTML;
    if (fieldText === "0" && text !== "."){
        fieldText = "";
    }
    if (fieldText.length>=9 || (fieldText.includes(".") && text === ".")) {
        fail;
    }
    fieldText += text;
    document.getElementById("field").innerHTML = fieldText;
}

function equallyclick() {
    var result = parseFloat(document.getElementById("field").innerHTML);
    if (sign === '+') {
        result += parseFloat(oldField);
    }
    if (sign === '-') {
        result -= parseFloat(oldField);
    }
    if (sign === '*') {
        result *= parseFloat(oldField);
    }
    if (sign === '/') {
        result /= parseFloat(oldField);
    }
    if (i === 0) {
        oldField = parseFloat(document.getElementById("field").innerHTML);
    }
    i++;
    document.getElementById("field").innerHTML = result;
}

function actclick(act) {
    i = 0;
    oldField = parseFloat(document.getElementById("field").innerHTML);
    sign = act;
    document.getElementById("field").innerHTML = "0";
}

function delclick() {
    var fieldText = document.getElementById("field").innerHTML;
    document.getElementById("field").innerHTML = fieldText.substring(0, fieldText.length - 1);
}

function changeclick() {
    var fieldText = parseFloat(document.getElementById("field").innerHTML);
    document.getElementById("field").innerHTML = -fieldText;
}

function clearclick() {
    oldField = null;
    i = 0;
    sign = null;
    document.getElementById("field").innerHTML = '0';
}