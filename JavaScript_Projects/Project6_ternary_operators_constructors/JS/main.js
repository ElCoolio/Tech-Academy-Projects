function Voter_Function(){ //ternary operator example
    var Age, Can_vote; //variables
    Age = document.getElementById("Age").value; //getting variable from user
    Can_vote = (Age < 18 || Age == 18) ? "You are too young":"You are old enough"; //ternary operator to display text
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."; // full return
}

function Vehicle(Make, Model, Year, Color){ //basic object constructor
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge" , "Viper", 2020, "Red"); //using object constructor above
var Emily = new Vehicle("Jeep","Trail Hawk",2019,"White and Black"); //using object constructor above
var Erik = new Vehicle("Ford","Pinto",1971,"Mustard"); //using object constructor above
// var break = 5; used a reserved word to observe what would happen, all the JS refused to work.


function myFunction() { //using the object created to display something in the HTML
    document.getElementById("Keyword_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " +Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Nested_Function() { //Nested function
    document.getElementById("nested").innerHTML = Count();
    function Count(){
        var countInp = 5;
        function Plus_one () {countInp ++;}
        Plus_one();  // calls the above function
        return countInp; // returns the number ++
    }
}