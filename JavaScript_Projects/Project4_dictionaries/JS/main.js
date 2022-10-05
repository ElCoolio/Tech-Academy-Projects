function my_Dictionary(){ //Make a dictionary
    var Animal = {
      Species: "Cat",
      Color: "Black",
      Breed: "Common Housecat",
      Age: 12,
      Sound: "Meow"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //Display the anmimal sound in a string when event occurs
    delete Animal.Age; //delete KVP of Age in above Dictionary
    document.getElementById("Dictionary2").innerHTML = Animal.Age; //Attempt to display the animal age, should display undefined as we deleted the value.
  }