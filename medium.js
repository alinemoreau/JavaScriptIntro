//medium
var word = prompt("Enter a word or sentence. It can be in all caps, all lowercase, or a mix.");
if(word == word.toUpperCase()){
    console.log("You are yelling.");
} else if(word == word.toLowerCase()) {
    console.log("You are whispering.")
} else {
    console.log("You are neither shouting nor whispering.")
}