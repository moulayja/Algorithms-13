
/*
Write a function that splits a string into substrings of size n, 
adding a specified delimiter between each of the pieces.

Examples
splitAndDelimit("bellow", 2, "&") ➞ "be&ll&ow"

splitAndDelimit("magnify", 3, ":") ➞ "mag:nif:y"

splitAndDelimit("poisonous", 2, "~") ➞ "po~is~on~ou~s"
*/

function splitAndDelimit(str, num, del) {
	let splited = str.match(new RegExp(`.{1,${num}}`,'g'))
	return splited.join(`${del}`)
}

