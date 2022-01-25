var txtFeilds = document.getElementsByClassName("sa_text");
var submitBtn = document.getElementsByClassName("sa_button")[0];
var thxMsg = document.getElementsByClassName("thanksMsg")[0];
thxMsg.style.display = "none";

var submit = function(){
    for(let i=0; i<txtFeilds.length; i++)
        txtFeilds[i].value = "";
    thxMsg.style.display = "none";
    thxMsg.style.display = "inline-block";
}
submitBtn.addEventListener('click', submit);

