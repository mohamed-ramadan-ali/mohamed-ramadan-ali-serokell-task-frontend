
// navbar hamburger function 

const hamburger =document.getElementById("hamburger");
const navUl =document.getElementById("nav-ul");

hamburger.addEventListener('click',()=>{

  navUl.classList.toggle('show')
});


// function change navba background color on scroll  
const myNav = document.getElementById("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
    myNav.classList.add("scroll--change--color");
  } else {
    myNav.classList.remove("scroll--change--color");
  }
};



//function of contact form that on submit prints all entered data into browser console
const formNameInp = document.getElementById("formNameInp");
const formPhoneInp = document.getElementById("formPhoneInp");
const formTextareaInp = document.getElementById("formTextareaInp");

function printConsole(){
 
  let name=formNameInp.value;
  let phone=formPhoneInp.value;
  let text=formTextareaInp.value;
  console.log( ` Name :${name} Phone :${phone} , Message :${text} `)

}

