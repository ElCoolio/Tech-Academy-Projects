function displayDate() { //utalizes get ElementByID to display the current date and time.
    document.getElementById("demo").innerHTML = Date();
  }

  function displayGreeting() { //utilizes get ElementByID to display a simple string using operators
    var sentence = "Hello World!";
    sentence += " It is nice to meet you!";
    document.getElementById("demo2").innerHTML = sentence;
  }

  function displaySolution() { //utilizes get ElementByID to display a simple string using operators
    var answer = "21"
    document.getElementById("demo3").innerHTML = answer;
  }