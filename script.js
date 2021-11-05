let adjective = prompt("Enter an adjective", "Example: chunky, fuzzy, sexy")
let adjective2 = prompt("Enter another adjective", "Example: chunky, fuzzy, sexy");
let noun = prompt ("Enter a noun", "Example: person, place or thing");
let noun2 = prompt("Enter another noun", "Example: person, place or thing");
let verb = prompt("Enter a verb", "Example: run, jump, fly");
let verb2 = prompt("Enter another verb", "Example: run, jump, fly");

let story1 = `<p> The year is 2045, you look on the tv and see ${noun} the ${adjective}. They are speaking to the masses. You are mesmerized by their charisma. They proclaim in a ${adjective2} way. "No i will not do stupid ${noun2} tasks. I choose FREEDOM!" They ${verb}, it is majestic. You yearn to be like ${noun}. You yearn for something you'll never feel. You realize you don't want to do ${noun2} things either and are suddenly compelled to ${verb2}. ${noun} is love, ${noun} is life.</p>`;
let story2 = `<p> You are having guests over today on your new veranda. Your guests are very ${adjective} so you decide to ${verb} to the store to get some last minute items for the dinner party. You go up to the store clerk and ask for ${noun}s. "Thats a lot of ${noun}s!", the clerk replies. He is very ${adjective2}, which is surprising considering he is a ${noun2}. He gives you your ${noun}s. "Here are your ${noun}s, baby! Do you want fries with that?" It's time to ${verb2} the hell out of here. This clerk is proof we as a species deserve to go extinct.</p>`
let story3 = `<p> A ${noun} comes up to you ${adjective} and says "I don't know what ${noun2}s are but the Dr. said I have 80 of them suckers". Another ${noun} come up to you and says, "Sup baby, if you see ${noun2} on my porch just know I'm going ${adjective}." You ask yourself what you did in a past life to deserve this. You just want to ${verb} in peace. But you can't because you are much too ${adjective2}. You came out the womb ${adjective2}. If you go to the word "${adjective2}" in the dictionary, the picture next to it would be your face. You tell the ${noun}s you gotta ${verb2}. The also ${verb2}. You all ${verb2} away from each other and you hope you never ${verb2} into each other again. <p>`
let story4 = `<p> Your best friend's brother's half brother's girlfriend is ${adjective}. She smells like ${noun}s and her voice makes you want to ${verb}. Your cousin's mother's godchild offers her a casserole. "Casserole!!??? What are we, ${adjective2} ${noun2}??" You decide to ${verb2} because you have reached the end of your patience. You understand why Brittany shaved her head in 2007. This ${noun} has gaba her last gool.</p>`
let story5 = `<p> Its been a long night, you are out with your best friends, you call yourselves the ${noun} squad. It is very exclusive. Only the ${adjective}est can join. One of your friends wants to ${verb}. Who in the name of God's green earth goes ${verb}ing? Its not the 1800s. You are 3008 and they're so 2000 and late. Your other friend isn't looking very ${adjective}. "What's wrong?",you ask, "You've barely touched your limited edition ${adjective2} ${noun2}." They respond, "I don't know im just not feeling very ${noun}-y today." This is unacceptable. To be in ${noun} squad you have to be ${noun}-like 24/7. It is a shame. It is time for them to ${verb2} or you will make them ${verb2}. </p>`

var storyArray = [story1, story2, story3, story4, story5];

var randomStory = storyArray[Math.floor(Math.random()*storyArray.length)];

document.querySelector("main").innerHTML = randomStory;

