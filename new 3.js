let CONS = confirm("Do you agree to share your personal information with our site?");

if (CONS) {
    console.log("Name: " + nickname + "\nHeight: " + heightFeet + "'" + heightremains + "\"\nWeight: " + weightPounds.toFixed(3) + " lbs");
} else {
    console.log("User does not wish to share his/her information.");
}