//Prompt the user to enter their full name. Generate a username fo rthem based on the input. Start username with @, followed by their full name and ending with the fullname length.
//eg. username= "archimisra", username should be "@archimisra10"
let fullName = prompt("enter your full name without spaces:");
let userName = "@"+ fullName+ fullName.length;
console.log(userName);