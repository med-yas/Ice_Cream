var spanBtns = document.getElementsByClassName("hkm_sliderBtn");
var slides = document.getElementsByClassName("hkm_lowerRight2");
var index = 0;
var reset = function(){
    for(let i=0; i<spanBtns.length; i++){
        slides[i].style.display = "none";
        spanBtns[i].style.backgroundColor = "black";
    }
}
var slide = function(){
    slides[index].style.display = "";
    spanBtns[index].style.backgroundColor = "red";
}
var manualSlide = function(e){
    reset();
    index = e.target.id;
    slide();
    clearInterval(timer);
    timer = setInterval(autoSlide, 3500);
}
var autoSlide = function(){
    reset();
    index++;
    if(index>2)
        index = 0;
    slide();
}
for(let i=0; i<spanBtns.length; i++)
    spanBtns[i].addEventListener("click",manualSlide);

var timer = setInterval(autoSlide, 3500);

