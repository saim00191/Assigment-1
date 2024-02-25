// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// To UPPERCASE
let Person = "Saim Raza"

console.log("UPPERCASE: " +Person.toUpperCase()) // SAIM RAZA


// To lowercase

console.log("To lowercase: "+Person.toLowerCase()) // saim raza

// to TitleCase 
let person = "saim raza from mirpurkhas"

let TitleCase : string[] = person.split(" ")

let TitleCaseName : string = " "

for(let i = 0 ; i < TitleCase.length;i++){
    TitleCaseName += TitleCase[i].charAt(0).toUpperCase()+TitleCase[i].slice(1).toLowerCase()+ " "
}

console.log(TitleCaseName) // Saim Raza From Mirpurkhas