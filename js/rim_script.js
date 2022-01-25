var button1=document.getElementsByClassName("r_button")[0]
var rimg1=document.getElementsByClassName("r_div2")[0]
var rimg2=document.getElementsByClassName("r_div1")[0]
var rimg3=document.getElementsByClassName("r_div3")[0]
var rimg4=document.getElementsByClassName("r_div4")[0]
var modal=document.getElementById('myModal');
var modalcontent1=document.getElementsByClassName('modal-content')[0];
var word=document.getElementsByClassName("modal-body")[0]
// var images=['img/c4.jpg','img/c5.jpg','img/c6.jpg']
var bgcolor=["white","pink","burlywood","aquamarine"]
var r_btn=document.getElementsByClassName("r_btn")[0]
var r_btn1=document.getElementsByClassName("r_btn1")[0]
var svg=document.getElementsByTagName("svg")[0]
var body=document.getElementsByTagName("body")[0]
var i=0;
var f;

function colors()
{
    button1.style.color="blue"
    button1.style.cursor="pointer"
}
function colors1()
{
    button1.style.color="white"
}
function show1()
{
    modal.style.display="block"
    modalcontent1.style.marginLeft="30%"
    word.innerHTML="<p>Tasty vanilla ice-cream with some catching sparkles</p>"
    // console.log(111);
    
}
function show2()
{
    modal.style.display="block"
    modalcontent1.style.marginLeft="10%"
    word.innerHTML="<p>Delicious mango cubes with our delicious sauce</p>"
    // console.log(222);
}
function show3()
{
    modal.style.display="block"
    modalcontent1.style.marginLeft="60%"
    word.innerHTML="<p>Red oranges with tasty orange sauce</p>"
    word.style.color="fushia"
}
function show4()
{
    modal.style.display="block"
    modalcontent1.style.marginLeft="70%"
    word.innerHTML="<p>Refreshing blue berries right to you</p>"
    // console.log(444);
}
function noshow()
{
    modal.style.display="none"
    // console.log(000);

}
function fun1()
{
    // body.style.backgroundImage='url("'+images[i]+'")'
    body.style.backgroundColor=bgcolor[i]
    svg.style.fill=bgcolor[i]
    i++;
    if(i>3)
    {i=0;}
    
}
function fun3()
{
    r_btn.style.display="none"
    r_btn1.style.display="inline-block"
     f=setInterval(fun1,1000);
}
function r_fun3()
{
    clearInterval(f)
}


noshow();
button1.addEventListener('mouseenter',colors)
button1.addEventListener('mouseleave',colors1)
rimg1.addEventListener("mouseover",show1)
rimg1.addEventListener("mouseout",noshow)
rimg2.addEventListener("mouseenter",show2)
rimg2.addEventListener("mouseleave",noshow)
rimg3.addEventListener("mouseenter",show3)
rimg3.addEventListener("mouseleave",noshow)
rimg4.addEventListener("mouseenter",show4)
rimg4.addEventListener("mouseleave",noshow)
r_btn.addEventListener("click",fun3)
r_btn1.addEventListener("click",r_fun3)

