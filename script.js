let adjective = prompt("Enter an adjective", "Example: chunky, fuzzy, sexy")
let adjective2 = prompt("Enter another adjective", "Example: chunky, fuzzy, sexy");
let noun = prompt ("Enter a noun", "Example: person, place or thing");
let noun2 = prompt("Enter another noun", "Example: person, place or thing");
let verb = prompt("Enter a verb", "Example: run, jump, fly");
let verb2 = prompt("Enter another verb", "Example: run, jump, fly");

let story1 = `<p> The year is 2045, you look on the tv and see ${noun} the ${adjective}. They are speaking to the masses. You are mesmerized by their charisma. They proclaim in a ${adjective2} way. "No i will not do stupid ${noun2} tasks. I choose FREEDOM!" They ${verb}, it is majestic. You yearn to be like ${noun}. You yearn for something you'll never feel. You realize you don't want to do ${noun2} things either and are suddenly compelled to ${verb2}. ${noun} is love, ${noun} is life.</p>`;
// let story2 = 
// let story3 = 
// let story4 = 
// let story5 = 

document.querySelector("main").innerHTML = story1;
