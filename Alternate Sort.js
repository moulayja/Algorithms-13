
/*

Write a function that sorts a given array in an alternative fashion.
The result should be a array sorted in ascending order (number then letter).
Array will contain equal amounts of integer numbers and single characters.

*/

function alternateSort(arr) {
    const letters = arr.filter((v) => /[a-z]/i.test(v)).sort();
    const numbers = arr.filter((v) => /\d/.test(v)).sort((f, s) => f - s);
    let index = 0;
    let sol = [];
    for (const item of numbers) {
      sol.push(item);
      sol.push(letters[index]);
      index++;
    }
    return sol;
  }



  