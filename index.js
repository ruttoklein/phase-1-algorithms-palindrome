function isPalindrome(word) {
  // Write your algorithm here
  let reversed = word.split("").reverse().join("")
  if( reversed === word){
    return true
  } else{
    return false
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
// it compare if word as the same when reversed
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
