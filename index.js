// ### Exercise 1:
// Use a for loop to print numbers -3 through 8.
//
// ### Exercise 2:
// Use a for loop to print from 0 to 50. Once it gets to 10, print "TEN!!!" instead of the number.
//
//     ### Exercise 3:
// Prompt the user to enter a number. Prompt the user to enter another number. Create a for loop that counts from the first number to the second number.


//Exercise 1
//Use a for loop to print numbers 3- through 8
//variable = -3

for (var i=(0-3); i<=5; i=i+1)
{console.log(i)}
// NOTE : It should print -3 through 8 not -3 though 5. Super close!! But be sure to read the directions
//Exercise 2
//Use a loop to print 0 to 50. Once it gets to 10, print "TEN!!!" instead of the number

for (var x=0; x<=50; x=x+1)
{
    if (x===10)
        console.log("TEN!!!");
    else
        console.log(x)
}
//Exercise 3
// Prompt the user to enter a number. Prompt the user to enter another number. Create a for loop that counts from the first number to the second number.

var numBer1 = parseInt(prompt("enter a number"));
var Number2 = parseInt(prompt("enter another number"));
for (var x=numBer1; x<=Number2; x=x+1)
{
    console.log(x)
}