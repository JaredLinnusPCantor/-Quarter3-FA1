var nickname = prompt("Enter your nickname:");
var heightInches = parseFloat(prompt("Enter your height in inches:"));
var weightKg = parseFloat(prompt("Enter your weight in kilograms:"));

var heightFeet = Math.floor(heightInches / 12);
var heightremains = heightInches % 12;
var weightPounds = weightKg * 2.20462;

alert("Name: " + nickname + "\nHeight: " + heightFeet + "'" + heightremains + "\"\nWeight: " + weightPounds.toFixed(3) + " lbs");

