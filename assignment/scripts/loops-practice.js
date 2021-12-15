console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');

// To count from 0 to 5 the second part of the loop needs to be changed to < 6 or <= 5
for (let i = 0; i < 6; i++) {
	console.log(i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');

// To count from 3 to 5 "i" should be declared with value of 3 and then you iterate while "i" < 6 or "i" <= 5.
for (let i = 3; i < 6; i++) {
    console.log(i);
  }

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

// The part that needs to be changed for this is the bit of the for loop. We need to add 2 to it instead of one.
for (let i = 2; i < 11; i += 2)
{
    console.log(i);
}

// Alternatively we could count even numbers with a conditional in the for loop.
console.log('Alternative method:')
for (let i = 2; i < 11; i++)
{
    if (i % 2 === 0)
    {
        console.log(i);
    }
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

for (let i = 5; i > -1; i--)
{
    console.log(i);
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');

for (let star of stars)
{
    console.log(star);
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

let index = 0;
while (index < stars.length)
{
    console.log(stars[index]);
    index++
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

let index1 = 0;
while (index1 <= 5)
{
    console.log(index1);
    index1++
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

let index2 = 10;
while (index2 >= 5)
{
    console.log(index2);
    index2--
}
