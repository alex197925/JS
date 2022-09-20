// 1.
//  const addNumbers = (num1, num2) => {
//    return num1 + num2;
// }
//
// console.log(addNumbers(5, 5));


// 2.
//Convert min to the seconds
// function convert(min) {
//     return min * 60;
// }
//
// console.log(convert(1));
// console.log(convert(2));


// 3.
// function yourAgeInSeconds(age) {
//     //years * month (12) * days (30) * hours (24) * minutes (60) * seconds (60)
//     return age * 12 * 30 * 24 * 60 * 60;
// }

// console.log(yourAgeInSeconds(43));


// 4.
// Get first item in array
// 1. const items = ["banana", "GodFather", "ShawShnak",  "Picle"];
// let firstItem = items.shift();
// console.log("First item in array is: " + firstItem);

// function getFirstItem (items) {
//     return items[0];
// }
//
// let fruits = [
//     'banana', 'orange',
//     'kiwi', 'apple',
// ]
//
// console.log(getFirstItem(fruits));


// 5. Find bad or good movie
// function badOrGoodMovie (movie_rating) {
//     let movie_result;
//
//     if (movie_rating >= 7) {
//        movie_result = "Good";
//     } else {
//        movie_result = "Bad";
//     }
//     return movie_result;
// }
//
// console.log(badOrGoodMovie(7)); // Good
// console.log(badOrGoodMovie(6)); //Bad
// console.log(badOrGoodMovie(9.2)); //Good
// console.log(badOrGoodMovie(2)); //Bad

// 6. Find min and max number
//------------------------------------
// function findMin(numbers) {
//    return  Math.min(...numbers)
// }
//
// function findMax(numbers) {
//     return Math.max(...numbers)
// }
//
// let numbers = [5, 2, 9, 8, 7, 3]; // 2
//
// console.log(findMin(numbers));
// console.log(findMax(numbers));

//--------------------------------------
// let numbers = [5, 2, 9, 8, 7, 3];
//
// function findMin(numbers) {
//     let numMinimum = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < numMinimum) {
//             numMinimum = numbers[i]
//         }
//   }
//   return numMinimum
//  }
//
// console.log(findMin(numbers)); // 2

// 7.
// Find max number
// let numbers = [5, 2, 9, 8, 7, 3];
//
// function findMax(numbers) {
//      let maxNum = numbers[0];
//      for (let i = 1; i < numbers.length; i++) {
//          if (numbers[i] > maxNum) {
//              maxNum = numbers[i]
//          }
//      }
//      return maxNum;
// }
//
// console.log(findMax(numbers));
