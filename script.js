function firstNonRepeatedChar(str) {
 // Write your code here
	let count = {};
  
  for (let ch of str) {
    if (count[ch]) {
      count[ch]++;
    } else {
    count[ch] = 1;
    }
  }

  for (let ch in count) {
    if (count[ch] === 1) {
      return `  (${ch})  `;
    }
  }
  return "null";
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
