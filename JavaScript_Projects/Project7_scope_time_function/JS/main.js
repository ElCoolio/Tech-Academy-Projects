function GreetingIf() {
    if (new Date().getHours() < 18){
        document.getElementById("greeting").innerHTML = ("Hello World!");
    }
}



function OwnIf(){
    var myNum; //variables
    myNum = document.getElementById("Num").value; //getting variable from user
    //simple if statement comparing input to the number 5
    if (myNum > 5) {
        document.getElementById("Result").innerHTML = myNum + " is greater than 5"; // full return
    }
    if (myNum < 5) {
        document.getElementById("Result").innerHTML = myNum + " is less than 5"; // full return
    }
}

function myFunction(){ 
    var myNum, resTxt; //variables
    myNum = document.getElementById("Num2").value; //getting variable from user
    //simple if else statement comparing input to the number 7
    if (myNum > 7) {
        resTxt = "The number " + myNum + " is greater than 7";
    }
    else {
        resTxt = "The number " + myNum + " is less than 7"; // full return
    }
    document.getElementById("Result2").innerHTML = resTxt; // full return
}

function Time_function(){ //Time function with If/Else
    var Time = new Date().getHours() //variable
    var reply; // variable
    // if else statement that prints a specfic line of text depending on the time when the event occurs
    if (Time < 12 == Time > 0) {
        reply = "It is the morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        reply = "It is afternoon."
    }
    else {
        reply = "it is evening time."
    }
    document.getElementById("Time_of_Day").innerHTML = reply; // full return
}

console.log(2+2); //display 4 in the console log
console.log(6<5); //display false in the console log
console.log(5==5); //display true in console log using ==
// console.log(6=5); //display an error in console on purpose