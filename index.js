// Sticky Navigation Menu Js

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Side Navigation Menu Js
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflowX = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
//Form validation
function validateName() {

  var name = document.getElementById('contact-name').value;

  if(name.length == 0) {

    producePrompt('Name is required', 'name-error' , 'red')
    return false;

}

if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

    producePrompt('First and last name, please.','name-error', 'red');
    return false;

}

producePrompt('Valid', 'name-error', 'green');
return true;

}

function validatePhone() {

var phone = document.getElementById('contact-phone').value;

if(phone.length == 0) {
  producePrompt('Phone number is required.', 'phone-error', 'red');
  return false;
}

if(phone.length != 10) {
  producePrompt('Include area code.', 'phone-error', 'red');
  return false;
}

if(!phone.match(/^[0-9]{10}$/)) {
  producePrompt('Only digits, please.' ,'phone-error', 'red');
  return false;
}

producePrompt('Valid', 'phone-error', 'green');
return true;

}

function validateEmail () {

var email = document.getElementById('contact-email').value;

if(email.length == 0) {

producePrompt('Email Invalid','email-error', 'red');
return false;

}

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

producePrompt('Email Invalid', 'email-error', 'red');
return false;

}

producePrompt('Valid', 'email-error', 'green');
return true;

}

function validateMessage() {
var message = document.getElementById('contact-message').value;
var required = 30;
var left = required - message.length;

if (left > 0) {
producePrompt(left + ' more characters required','message-error','red');
return false;
}

producePrompt('Valid', 'message-error', 'green');
return true;

}

function validateForm() {
if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
jsShow('submit-error');
producePrompt('Please fix errors to submit.', 'submit-error', 'red');
setTimeout(function(){jsHide('submit-error');}, 2000);
return false;
}
else {

}
}

function jsShow(id) {
document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
document.getElementById(id).style.display = 'none';
}


function producePrompt(message, promptLocation, color) {

document.getElementById(promptLocation).innerHTML = message;
document.getElementById(promptLocation).style.color = color;

}
