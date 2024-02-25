// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


interface Book {
    title: string;
    author: string;
    publicationYear: number;
}


const book1: Book = {
    title: "A Case of Exploding Mangoes",
    author: "Mohammad Hanif ",
    publicationYear: 2008
};

const book2: Book = {
    title: "In Other Rooms, Other Wonders",
    author: "Daniyal Moinuddin",
    publicationYear: 2009
};

const book3: Book = {
    title: "Exit West",
    author: "Mohsin Hamid",
    publicationYear: 2017
};

const book4: Book = {
    title: "Zaviya",
    author: "Ashfaque Ahmed",
    publicationYear: 2001
};
const book5: Book = {
    title: "Haveli",
    author: "Zeenat Mahal",
    publicationYear: 2013
};

// Print book objects
console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);
console.log("Book 4:", book4);
console.log("Book 5:", book5);