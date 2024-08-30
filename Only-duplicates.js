/*
Given a string, 
remove any characters that 
are unique from the string.
Example:
  input: "abccdefee"
  output: "cceee"
*/


// Solution

function onlyDuplicates(str) {
  let arr = str.split("")
   let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		let count = 0;
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] == arr[i]) {
				count++;
			}
		}
		if (count >= 2) {
			newArr.push(arr[i]);
		}
	}
  return newArr.join('');
}

// or