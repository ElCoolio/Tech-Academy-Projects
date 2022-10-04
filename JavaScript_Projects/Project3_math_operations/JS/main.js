  function displayAdd() { //utilizes get ElementByID to display a simple string using the + operator
    var add = 5 + 5;
    document.getElementById("Math").innerHTML = "5 + 5 = " + add;
  }
  
  function displaySub() { //utilizes get ElementByID to display a simple string using the - operator
    var sub = 21-7;
    document.getElementById("Math2").innerHTML = "21 - 7 = " + sub;
  }

  function displayMul() { //utilizes get ElementByID to display a simple string using the * operator
    var mul = 3 * 7;
    document.getElementById("Math3").innerHTML = "3 * 7 = " + mul;
  }
  
  function displayDiv() { //utilizes get ElementByID to display a simple string using the / operator
    var div = 36 / 4;
    document.getElementById("Math4").innerHTML = "36 / 4 = " + div;
  }

  function displayRemainder(){ //utilizes get ElementByID to display a simple string using the % operator
    var rem = 72 % 7;
    document.getElementById("Math5").innerHTML = "The remainder of 72 / 7 is " + rem;
  }

  function displayIncra(){ //utilizes get ElementByID to incrament and display a number
    var incrament = 0;
    incrament ++;
    document.getElementById("Math6").innerHTML = incrament;
  }

  function displayDecra(){ //utilizes get ElementByID to decrament and display a number
    var decrament = 0;
    decrament --;
    document.getElementById("Math7").innerHTML = decrament;
  }

  function displayRandom(){ //utilizes get ElementByID to display a random number between 0 and 100
    var random = (Math.random() * 100);
    document.getElementById("Math8").innerHTML = random;
  }