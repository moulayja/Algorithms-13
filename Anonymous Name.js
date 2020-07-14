
/*
You are in the process of creating a chat application and want to add an anonymous name feature.
This anonymous name feature will create an alias that consists of 
two capitalized words beginning with the same letter as the users first name.

Create a function that determines if the array of users is mapped to an array 
of anonymous names correctly.

*/

const isCorrectAliases = (names, aliases) =>
  aliases.every((alias, i) => {
    const [first, last] = alias.split(' ');
    const letter = names[i][0];
    return first.startsWith(letter) && last.startsWith(letter);
    });
    

    