let adjective = prompt("Enter an adjective", "Example: chunky, fuzzy, sexy")
let adjective2 = prompt("Enter another adjective", "Example: chunky, fuzzy, sexy");
let noun = prompt ("Enter a noun", "Example: person, place or thing");
let noun2 = prompt("Enter another noun", "Example: person, place or thing");
let verb = prompt("Enter a verb", "Example: run, jump, fly");
let verb2 = prompt("Enter another verb", "Example: run, jump, fly");

let story1 = `<p> The year is 2045, you look on the tv and see ${noun.bold()} the ${adjective.bold()}. They are speaking to the masses. You are mesmerized by their charisma. They proclaim in a ${adjective2.bold()} way. "No i will not do stupid ${noun2.bold()} tasks. I choose FREEDOM!" They ${verb.bold()}, it is majestic. You yearn to be like ${noun.bold()}. You yearn for something you'll never feel. You realize you don't want to do ${noun2.bold()} things either and are suddenly compelled to ${verb2.bold()}. ${noun.bold()} is love, ${noun.bold()} is life.</p>`;
let story2 = `<p> You are having guests over today on your new veranda. Your guests are very ${adjective.bold()} so you decide to ${verb.bold()} to the store to get some last minute items for the dinner party. You go up to the store clerk and ask for ${noun.bold()}s. "Thats a lot of ${noun.bold()}s!", the clerk replies. He is very ${adjective2.bold()}, which is surprising considering he is a ${noun2.bold()}. He gives you your ${noun.bold()}s. "Here are your ${noun.bold()}s, baby! Do you want fries with that?" It's time to ${verb2.bold()} the hell out of here. This clerk is proof we as a species deserve to go extinct.</p>`
let story3 = `<p> A ${noun.bold()} comes up to you ${adjective.bold()} and says "I don't know what ${noun2.bold()}s are but the Dr. said I have 80 of them suckers". Another ${noun.bold()} come up to you and says, "Sup pookie, if you see ${noun2.bold()} on my porch just know I'm going ${adjective.bold()}." You ask yourself what you did in a past life to deserve this. You just want to ${verb.bold()} in peace. But you can't because you are much too ${adjective2.bold()}. You came out the womb ${adjective2.bold()}. If you go to the word "${adjective2.bold()}" in the dictionary, the picture next to it would be your face. You tell the ${noun.bold()}s you gotta ${verb2.bold()}. The also ${verb2.bold()}. You all ${verb2.bold()} away from each other and you hope you never ${verb2.bold()} into each other again. <p>`
let story4 = `<p> Your best friend's brother's half brother's girlfriend is ${adjective.bold()}. She smells like ${noun.bold()}s and her voice makes you want to ${verb.bold()}. Your cousin's mother's godchild offers her a casserole. "Casserole!!??? What are we, ${adjective2.bold()} ${noun2.bold()}??" You decide to ${verb2.bold()} because you have reached the end of your patience. You understand why Brittany shaved her head in 2007. This ${noun.bold()} has gaba her last gool.</p>`
let story5 = `<p> Its been a long night, you are out with your best friends, you call yourselves the ${noun.bold()} squad. It is very exclusive. Only the ${adjective.bold()}est can join. One of your friends wants to ${verb.bold()}. Who in the name of God's green earth goes ${verb.bold()}ing? Its not the 1800s. You are 3008 and they're so 2000 and late. Your other friend isn't looking very ${adjective.bold()}. "What's wrong?",you ask, "You've barely touched your limited edition ${adjective2.bold()} ${noun2.bold()}." They respond, "I don't know im just not feeling very ${noun.bold()}-y today." This is unacceptable. To be in ${noun.bold()} squad you have to be ${noun.bold()}-like 24/7. It is a shame. It is time for them to ${verb2.bold()} or you will make them ${verb2.bold()}. </p>`

var storyArray = [story1, story2, story3, story4, story5];

var randomStory = storyArray[Math.floor(Math.random()*storyArray.length)];

document.querySelector("main").innerHTML = randomStory;




