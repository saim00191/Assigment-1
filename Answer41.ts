//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



var magicianNames = ["David Copperfied", "Merlin", "Penn and teller","David Abbot","Simo Aalto"];

function show_magician(magicians:string[]){
    for (let magician of magicians) {
        console.log(magician);
    }
}


show_magician(magicianNames);