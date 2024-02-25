// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


//• 1: Tests for equality and inequality with strings

var firstname = "Saim"
var lastname = "Raza"

//  # True result
var result1 = (firstname == "Saim");
console.log(result1); //true

// # False result
var result2 = (lastname !==  firstname);
console.log(result2); //true

// 2: Tests using the lower case function

var FullName = "Saim Raza From MirpurKhas"
var lowercased = FullName.toLowerCase()

//# True result
var result3 = (lowercased == "saim raza from mirpurkhas");
console.log(result3); //true


//# False result
var result4 = (FullName.toLowerCase() == "saim raza from karachi");
console.log(result4); //false

//• 3: Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num1 = 77
let num2 = 22

//# Equality
var result5 = (num1 == num2);

//# Inequality
var result6 = (num1 != num2);

//# Greater than
var result7 = (num2 > num1);

//# Less than
var result8 = (num1 < num2);

//# Greater than or equal to
var result9 = (num2 >= num1);

//# Less than or equal to
var result10 = (num1 <= num2);

//• 4: Tests using "and" and "or" operators

let a = 7;
let b = 26;
let c = 42;

var result10 = (a < b && c > b); // true , both
console.log(result10); //true

var result11 = (a < b || c > b); // true , atleast 1
console.log(result11); //true

var result12 = (a > b && c > b); // false ,both
console.log(result12);//false

var result13 = (c > b || b > a) // false ,both
console.log(result13);//false

// • 5: Test whether an item is in a array

let Numbers = [1,2,3,4,5,6,7,8,9,10];

var result14 = (Numbers.includes(3));
console.log(result14); // true

var result15 = (Numbers.includes(15));
console.log(result15); // false'

//• 6: Test whether an item is not in a array

var result16 = (!Numbers.includes(17));
console.log(result16); //true

var result17 = (!Numbers.includes(6))
console.log(result17); //false

