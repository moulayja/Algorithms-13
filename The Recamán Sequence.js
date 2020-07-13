
/*

The Recamán Sequence is a numeric sequence that starts always with 0. The position of a positive integer in the sequence, or Recamán Index, can be established with the following algorithm:

For every number to find, two variables are considered: the value of the last element of the sequence (last element from now on), and the actual sequence length (length from now on).
If the subtraction of the length from the last element returns a number greater than 0 and not already present in the sequence, it is added to the sequence.
When the conditions of the above statement are not met, will be added always the sum of the last element plus the length (even if it is a number already present in the sequence).
Repeat until the number of interest is found.

*/

const recamanIndex = num => {
    const recaman = [0];
  
    while (recaman[recaman.length - 1] !== num) {
      const subtraction = recaman[recaman.length - 1] - recaman.length;
  
      if (subtraction > 0 && !recaman.includes(subtraction)) {
        recaman.push(subtraction);
      } else {
        const addition = recaman[recaman.length - 1] + recaman.length;
        recaman.push(addition);
      }
    }
  
    return recaman.length - 1;
  };

  
