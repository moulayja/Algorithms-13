
/*

The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

Examples
reverse("Hello World") ➞ "DLROw OLLEh"

reverse("ReVeRsE") ➞ "eSrEvEr"

reverse("Radar") ➞ "RADAr"

*/

function reverse(str) {
	newArray = []
	for (let i of Array.from(str)){
		newArray.unshift(i != i.toUpperCase() ? i.toUpperCase() : i.toLowerCase())
	}
	return newArray.join("")
}

