var firstname = prompt("Enter your first name:");
var lastname = prompt("Enter your last name:");
var birthyear = prompt("Enter your birth year:");

var currentyear = new Date().getFullYear();
var age = currentyear - birthyear;

document.getElementById("output").innerHTML = "Hello " + firstname + " " + lastname + "! How does it feel to be " + age + " years old?";