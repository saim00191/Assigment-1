// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let Invitedguests: string[] = ["Faiz","Talha","Saim","Junaid","Qasim","Jahnzaib"];

// prints a message saying that you can invite 
console.log("Sorry, I can only invite two people for dinner.");

// Removing guests until only two names remain
while (Invitedguests.length > 2) {
    const removedGuest = Invitedguests.pop();
    console.log("Sorry "+ removedGuest + " I can't invite you to dinner.");
}

// invitation messages to the remaining two guests
for (const guest of Invitedguests) {
    console.log(`${guest}, you're still invited to dinner.`);
}

// empty list
Invitedguests = [];
console.log("List of guests after dinner:", Invitedguests);
