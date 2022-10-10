function countdown(){  // Script that takes the input from the input box, displays a text and changes it every second to count down, at 0 an alert box appears.
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1){
            alert("Time's Up!");
            clearTimeout(time);
            timer.innerHTML = "";
            }
    }
    tick();   
}


// First slide on load
let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n){
    showSlides(slideIndex = n);

}

//Function that creates the slide, as buttons either the dots and arrows are click the image changes
function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    for (i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i=0; i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}