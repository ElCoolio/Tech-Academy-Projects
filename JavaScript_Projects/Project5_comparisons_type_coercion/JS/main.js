function my_DataType(){ //declare a variable and post its data type when even occurs
    var num = 5
    document.getElementById("DataType1").innerHTML = (typeof num);
  }

  function my_DataType2(){ //declare a variable and use data coercion to combine it with another number, but as a string
    var num2 = 5
    document.getElementById("DataType2").innerHTML = (num2 + "15");
  }

  function NANChallenge1(){ //declare a variable that is not a number and attempt to use math operators on it
    var notanumber = "five"
    document.getElementById("NANTxt1").innerHTML = (notanumber / 0);
  }

  function NANChallenge2(){ //declare a variable and instead of running an operation that is NaN we test it.
    document.getElementById("NANTxt2").innerHTML = isNaN(0 / 0);
  }

  function NANChallenge3(){ //declare a variable and instead of running an operation that is NaN we test it.
    document.getElementById("NANTxt3").innerHTML = isNaN(5+5);
  }

  function InfinityChallenge(){ //Attempt to print a number larger than the float number limit
    document.getElementById("infinityVar").innerHTML = (3e310);
  }

  function NegativeInfinityChallenge(){ //Attempt to print a number smaller than the negative float number limit
    document.getElementById("negInfinityVar").innerHTML = (-3e310);
  }
  function NegativeInfinityChallenge(){ //Attempt to print a number smaller than the negative float number limit
    document.getElementById("negInfinityVar").innerHTML = (-3e310);
  }
  function BooleanTest(){ //Attempt to print a number smaller than the negative float number limit
    document.getElementById("booleanTxt").innerHTML = (5<6);
  }
  function TripleEquals(){ //print some text using === operator
    var num3 = 5;
    var num4 = "five";
    var num5 = (2+3);
    var num6 = (3+3);
    document.getElementById("tripEquals1").innerHTML = ("Is 5 and (2+3) ===? " + (num3 === num5));
    document.getElementById("tripEquals2").innerHTML = ("Is 5 and \"five\" ===? " + (num3 === num4));
    document.getElementById("tripEquals3").innerHTML = ("Is 5 and (3+3) ===? " + (num3 === num6));
    document.getElementById("tripEquals4").innerHTML = ("Is (3+3) and \"five\" ===? " + (num4 === num6));
  }

  console.log(2+2); //display 4 in the console log
  console.log(6<5); //display false in the console log
  console.log(5==5); //display true in console log using ==
  console.log(6==5); //display false in console log using ==