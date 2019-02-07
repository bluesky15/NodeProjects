function hideString(str){
    return str.replace(/[a-zA-Z]/g,'X');
}
var hidden = hideString("hello World")
console.log(hidden);