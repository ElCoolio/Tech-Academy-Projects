function textChange(){
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The test has changed";
}

function DrawCanvas(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "72px Arial";
    ctx.strokeText("Hello World", 0, 125);
}

function DrawCanvas2(){
    var c = document.getElementById("myCanvas2");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(0, 0, 500, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");
    
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 500, 250);
}

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    let z = document.forms["myForm"]["phonenum"].value;
    if (x == "" || y == "" || z == '' ) {
      alert("The three fields must be filled");
      return false;
    }
  }

