//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

var magicianNames2 = ["David Copperfied", "Merlin", "Penn and teller","David Abbot","Simo Aalto"];

function make_Great(magicians:string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] += " the Great";
    }
}

function ShowMagicians(magicians:string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}


make_Great(magicianNames2);


ShowMagicians(magicianNames2);
