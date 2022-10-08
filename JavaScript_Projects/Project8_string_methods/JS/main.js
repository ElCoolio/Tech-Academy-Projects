function Concatenate() { // shows use of the concat method to manipulate strings
    var part1 = "Hello "; // Variables
    var part2 = "World, ";
    var part3 = " this string was";
    var part4 = " made using the concate";
    var part5 = " method in JavaScript";
    var together = part1.concat(part2,part3,part4,part5); // combining using concat method
    document.getElementById("myString").innerHTML = together; // display
}

function Slice(){ //declares a variable string and slices a portion of it.
    var str = "This is a test of the Slice method"; // Variables
    var sliced = str.slice(0 , 5); // Slice method
    document.getElementById("myString2").innerHTML = sliced; // display
}

function UpperCase(){ //Declares a variable and changes all letter to upper case
    var greeting = "Hello World!"; //varible
    document.getElementById("myString3").innerHTML = greeting.toUpperCase(); // display    
}

function SearchString(){ //Declares a variable and changes all letter to upper case
    var greeting = "Hello World!"; //varible
    document.getElementById("myString4").innerHTML = greeting.slice(greeting.search("World"),(greeting.search("World")+5));
}

function NumToString(){  //Declares a variable number and converts it to a string
    var num = 1024;
    document.getElementById("myString5").innerHTML = num.toString();
}

function myPrecision(){ //Declares a variable and displays it with up to 4 total digits
    var num = 32.0252654285;
    document.getElementById("myString6").innerHTML = num.toPrecision(4);
}

function myFixed(){ //Declares a variable and displays it up to the ten-thousands place decimal
    var num = 32.0252654;
    document.getElementById("myString7").innerHTML = num.toFixed(4);
}

function myValueof(){ //returns the "value of" a string (this is the primative text, and usually is the same as just displaying it.)
    var str = "Hello World";
    document.getElementById("myString8").innerHTML = str.valueOf();
}

