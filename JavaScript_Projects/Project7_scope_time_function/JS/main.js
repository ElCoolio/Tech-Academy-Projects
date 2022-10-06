var X = 10;

function Global_Var(){
    var Y = 25;
    document.getElementById("globalVar").innerHTML = (X + Y);
    console.log(X + Y);
}

function Global_Var2(){
    document.getElementById("globalVar2").innerHTML = (X + Y);
    console.log(X + Y);
}
