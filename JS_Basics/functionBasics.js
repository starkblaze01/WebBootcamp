function isEven(num) {
    // if(num%2 ===0){
    //     return true;
    // }
    // else
    // false;
    return num%2===0;
}

function factorial(num1) {
    var a=1;
    for(var i=1; i<=num1;i++){
        a*=i;
    }
    return a;
}

function kebabToSnake(s){
    // replace all "-" with "_"
    return s.replace(/-/g,"_");
}
