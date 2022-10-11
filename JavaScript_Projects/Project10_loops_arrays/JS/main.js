function count_To_Ten() { //Uses a while loop to print numbers out
    var Digit = "";
    var X = 1;
    while (X < 11){
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Loop").innerHTML = Digit
}

function List_of_Instruments() {  //uses a for loop to print out the contents of an array
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Flute"];
    var Content = "";
    var Y;
    for(Y =0; Y<Instruments.length;Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("Loop2").innerHTML = Content
}

function String_Length() { //Simple return using .length String method
    var X = "Hello, World!";
    let Y = X.length;
    document.getElementById("String1").innerHTML = Y
}

function ConstVar() { //makes an object as a constant, edits and adds a property, and displays it
    const Car = {make: "Nissan", model:"Sentra", year: 2008, color:"Silver"}
    Car.miles = 150987;
    Car.year = 2010;
    document.getElementById("String2").innerHTML = "I currently drive a " + Car.year + " " + Car.make + " " + Car.model + "<br>" + "It currently has " + Car.miles + " miles on it."
}

function LetAndMethod() { //makes an object using the let command, edits and adds a property, and displays it, also the object has its own method
    let car = {
        make: "Nissan",
        model:"Sentra",
        year: 2010,
        color:"Silver",
        miles: 150987,
        description: function(){
            return "I currently drive a " + this.year + " " + this.make + " " + this.model + "<br>" + "It currently has " + this.miles + " miles on it."
        }
    };
    document.getElementById("String4").innerHTML = car.description();
}

function ReturnFunction(){ //return function
    return "Hello!";
}

function myReturn(){ //return script
    document.getElementById("String3").innerHTML = ReturnFunction();
}

function BreakLoop() { //loop that uses break, breaks the loop off when X===3
    var Digit = "";
    var X = 1;
    while (X < 11){
        Digit += "<br>" + X;
        X++
        if (X === 3) break;
    }
    document.getElementById("Loop3").innerHTML = Digit
}


function ContinueLoop() { //loop that uses continue, skips over 3
    var Digit = "";
    var X = 0;
    while (X < 10){
        X++
        if (X === 3) continue;
        Digit += "<br>" + X;
    }
    document.getElementById("Loop4").innerHTML = Digit
}