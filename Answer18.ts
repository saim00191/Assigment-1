//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.




let placesToVisit: string[] = ["Malaysia","Italy","France","Sri Lanka","Moroko","Saudia Arabia","Austrailia","London"]
   

//  Array in its original order
console.log("Original order:", placesToVisit);


// Array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Original order
console.log("Original order:", placesToVisit);

//  Array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Original order
console.log("Original order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// Sort the array alphabetically
placesToVisit.sort();
console.log("Sorted alphabetically:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
