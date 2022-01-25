

var buttonup = document.getElementsByClassName("sa_up")[0];





function scrollFunction() {

  if (document.documentElement.scrollTop > 20) {

    buttonup.style.display = "block";
  } 
  
  else {
    buttonup.style.display = "none";
  }
  
}


    window.onscroll = function() {   
        scrollFunction()
    }; 

function upFunction() {
  
    document.documentElement.scrollTop = 0;
  }
  