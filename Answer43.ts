// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

var magicians = ["David Copperfied", "Merlin", "Penn and teller","David Abbot","Simo Aalto"];

// Function to add "the Great" to each magician's name
function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(magician + " the Great");
    }
    return greatMagicians;
}

// Function to display magicians' names
function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}



// Making a copy of the original array and adding "the Great" to each magician's name
const greatMagicians: string[] = makeGreat([...magicians]);

// Displaying the original array
console.log("Original Magicians:");
showMagicians(magicians);

// Displaying the array with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);

