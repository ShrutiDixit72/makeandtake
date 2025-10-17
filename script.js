
// script.js - shared JS
function validateRegistration(event){
event.preventDefault();
const name=document.getElementById('custName').value.trim();
const interest=document.getElementById('interest').value.trim();
const contact=document.getElementById('contact').value.trim();
const err=document.getElementById('regError');
err.textContent='';
if(!name || !interest || !contact){
err.textContent='Please fill all fields before submitting.';
return false;
}
// simple phone check
const phoneRe=/^[0-9]{7,15}$/;
if(!phoneRe.test(contact)){
err.textContent='Enter a valid contact number (7-15 digits).';
return false;
}
alert('Registration submitted!\nName: '+name+'\nInterest: '+interest);
event.target.reset();
return true;
}


function validateFeedback(event){
event.preventDefault();
const name=document.getElementById('fbName').value.trim();
const feedback=document.getElementById('fbText').value.trim();
const err=document.getElementById('fbError');
err.textContent='';
if(!name || !feedback){
err.textContent='Please provide your name and feedback.';
return false;
}
alert('Feedback submitted. Thank you, '+name+'!');
event.target.reset();
return true;
}