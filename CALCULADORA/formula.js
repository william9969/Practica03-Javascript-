function setResult(value) {
    document.getElementById('resp').innerHTML = value;
}
function getResult() {
    return(document.getElementById('resp').innerHTML);
}
function add(key) { 
    var result = getResult();
    if (result!='0' ) setResult(result + key);
    else setResult(key);
}

function calc() {
    var result = eval(getResult()); 
    setResult(result);
}
function del() { 
    setResult(0);
}x